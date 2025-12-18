import { Elysia } from "elysia";
import { createCandidateSchema } from "../../../core/value_objects/types/types";
import {
    createCandidateController,
    listCandidateController,
} from "../../controllers/Candidate";
import { elysiaAdapter } from "../adapters/adapter";

export const candidateRoutes = new Elysia({ prefix: "/candidates" })
    .post(
        "/",
        elysiaAdapter(createCandidateController, (ctx) => ({
            body: ctx.body,
            request: ctx.request,
        })),
        { body: createCandidateSchema },
    )
    .get(
        "/",
        elysiaAdapter(listCandidateController, () => ({})),
    );
