import { votesService } from "../../../core/services/Votes";
import VotesController from "./VotesController";

export const votesController = new VotesController(votesService);
