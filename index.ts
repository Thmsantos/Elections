import { Elysia } from "elysia";
import { createCandidateSchema, takeVoteSchema } from "./src/types/types";
import { createCandidate, getCandidates, getResults, takeVote } from "./src/handlers";
import swagger from "@elysiajs/swagger";

new Elysia()
  .use(swagger())
  .post("/create", createCandidate, { body: createCandidateSchema })
  .get("/candidates", getCandidates)
  .post("/vote", takeVote, { body: takeVoteSchema })
  .get("/results", getResults)
  .listen(3200);

console.log("Server running at http://127.0.0.1:3200");
