import type { Context } from "elysia";
import type { Controller } from "../../ports/Controller";

export const elysiaAdapter =
    <I, O extends { status: number; body: unknown }>(
        controller: Controller<I, O>,
        mapRequest: (ctx: Context) => I,
    ) =>
    async (ctx: Context) => {
        const response = await controller.handle(mapRequest(ctx));

        ctx.set.status = response.status;
        return response.body;
    };
