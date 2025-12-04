import { prisma } from "../../config/db/db";
import TakeVoteRepository from "./TakeVoteRepository";

export const takeVoteRepository = new TakeVoteRepository(prisma);
