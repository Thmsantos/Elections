import { createCandidateService } from "../../../application/services/CreateCandidate";
import { getCandidatesService } from "../../../application/services/GetCandidatesService";
import { getResultsService } from "../../../application/services/GetResults";
import CandidateController from "./CandidateController";

export const candidateController = new CandidateController(
    createCandidateService,
    getCandidatesService,
    getResultsService,
);
