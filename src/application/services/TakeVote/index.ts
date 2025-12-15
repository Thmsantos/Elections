import { takeVoteRepository } from "../../../domain/repositories/TakeVote";
import TakeVoteService from "./TakeVoteService";

export const takeVoteService = new TakeVoteService(takeVoteRepository);
