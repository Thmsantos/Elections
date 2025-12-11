import { createCandidateService } from "../../services/CreateCandidate";
import { getCandidatesService } from "../../services/GetCandidatesService";
import { getResultsService } from "../../services/GetResults";
import CandidateController from "./CandidateController";

export const candidateController = new CandidateController(
    createCandidateService,
    getCandidatesService,
    getResultsService,
);
