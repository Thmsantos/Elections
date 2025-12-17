import { Elysia } from "elysia";
import { candidateController } from "../controllers/Candidate";
import { createCandidateSchema } from "../../core/value_objects/types/types";

export const candidateRoutes = new Elysia({ prefix: "/candidates" })
    .post("/", candidateController.create.bind(candidateController), {
        body: createCandidateSchema,
    })
    .get("/", candidateController.list.bind(candidateController))
    .get("/results", candidateController.results.bind(candidateController));
