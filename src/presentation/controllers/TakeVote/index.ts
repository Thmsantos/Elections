import { takeVoteService } from "../../../application/services/TakeVote";
import TakeVoteController from "./takeVoteController";

export const takeVoteController = new TakeVoteController(takeVoteService);
