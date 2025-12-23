import type { Context } from "elysia";
import type LoginService from "../../../core/services/Auth/login/LoginService";
import type { Controller } from "../../ports/Controller";
import type { HttpResponse } from "../../ports/HttpResponse";
import type { loginBody, LoginInput } from "./types";

export default class LoginController implements Controller<
    LoginInput,
    HttpResponse
> {
    private loginService: LoginService;

    constructor(loginService: LoginService) {
        this.loginService = loginService;
    }

    public async handle(
        ctx: Context<{ body: loginBody }>,
    ): Promise<HttpResponse> {
        try {
            const { username, password } = ctx.body;
            const logged = await this.loginService.execute(username, password);

            return {
                status: 200,
                body: { message: "login successful", logged },
            };
        } catch (error) {
            if (error instanceof Error) {
                if (error.message === "invalid credentials") {
                    return {
                        status: 401,
                        body: { message: error.message, error },
                    };
                }
            }

            return {
                status: 500,
                body: { message: "Internal error", error },
            };
        }
    }
}
