import { prisma } from "../../../config/db/db";
import CandidateRepository from "./CandidateRepository";

export const candidateRepository = new CandidateRepository(prisma);
