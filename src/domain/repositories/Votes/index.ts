import { prisma } from "../../../infra/persistence/db/db.ts";
import VotesRepository from "./VotesRepository.ts";

export const votesRepository = new VotesRepository(prisma);
