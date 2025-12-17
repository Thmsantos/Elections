import { Elysia } from "elysia";
import { votesController } from "../controllers/Votes";
import { VotesSchema } from "../../core/value_objects/types/types";

export const voteRoutes = new Elysia({ prefix: "/vote" }).post(
    "/",
    votesController.vote.bind(VotesSchema),
    { body: VotesSchema },
);
