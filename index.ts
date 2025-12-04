import { Elysia } from "elysia";
import swagger from "@elysiajs/swagger";

import { candidateRoutes } from "./src/routes/candidateRoutes";
import { voteRoutes } from "./src/routes/voteRoutes";

new Elysia().use(swagger()).use(candidateRoutes).use(voteRoutes).listen(3200);

console.log("Server running at http://127.0.0.1:3200");
