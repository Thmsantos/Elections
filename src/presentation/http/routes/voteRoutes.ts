import { Elysia } from "elysia";
import { VotesSchema } from "../../../core/value_objects/types/types";
import { getResultsController, votesController } from "../../controllers/Votes";
import { elysiaAdapter } from "../adapters/adapter";

export const voteRoutes = new Elysia({ prefix: "/vote" })
    .post(
        "/",
        elysiaAdapter(votesController, (ctx) => ({
            body: ctx.body,
        })),
        {
            body: VotesSchema,
        },
    )
    .get(
        "/results",
        elysiaAdapter(getResultsController, () => ({})),
    );
