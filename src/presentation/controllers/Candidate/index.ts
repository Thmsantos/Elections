import { createCandidateService } from "../../../core/services/CreateCandidate";
import { getCandidatesService } from "../../../core/services/GetCandidatesService";
import { getResultsService } from "../../../core/services/GetResults";
import CandidateController from "./CandidateController";

export const candidateController = new CandidateController(
    createCandidateService,
    getCandidatesService,
    getResultsService,
);
