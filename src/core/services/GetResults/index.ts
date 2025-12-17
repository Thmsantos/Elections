import { candidateRepository } from "../../../domain/repositories/Candidates";
import GetResultsService from "./GetResultsService";

export const getResultsService = new GetResultsService(candidateRepository);
