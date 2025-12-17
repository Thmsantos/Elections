import { votesRepository } from "../../../domain/repositories/Votes";
import VotesService from "./VotesService";

export const votesService = new VotesService(votesRepository);
