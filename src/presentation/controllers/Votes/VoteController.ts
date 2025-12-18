import type { Context } from "elysia";
import type { VotesBody } from "../../../core/value_objects/types/types";
import TakeVoteService from "../../../core/services/Votes/VotesService";
import type { Controller } from "../../ports/Controller";
import type { HttpResponse } from "../../ports/HttpResponse";
import type { VoteInput } from "./types";

export default class VoteController implements Controller<
    VoteInput,
    HttpResponse
> {
    private takeVoteService: TakeVoteService;

    constructor(takeVoteService: TakeVoteService) {
        this.takeVoteService = takeVoteService;
    }

    public async handle(
        ctx: Context<{ body: VotesBody }>,
    ): Promise<HttpResponse> {
        try {
            await this.takeVoteService.execute(ctx.body);

            ctx.set.status = 201;
            return {
                status: Number(ctx.status),
                body: { message: "Vote recorded" },
            };
        } catch (error: unknown) {
            if (error instanceof Error) {
                if (error.message === "CANDIDATE_NOT_FOUND") {
                    ctx.set.status = 404;
                    return {
                        status: Number(ctx.status),
                        body: { message: "Candidate not found" },
                    };
                }
            }

            ctx.set.status = 500;
            return {
                status: Number(ctx.status),
                body: { message: "Internal error" },
            };
        }
    }
}
