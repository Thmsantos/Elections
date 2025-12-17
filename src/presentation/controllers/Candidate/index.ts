import { createCandidateService } from "../../../core/services/Candidate/CreateCandidate";
import { getCandidatesService } from "../../../core/services/Candidate/GetCandidatesService";
import { getResultsService } from "../../../core/services/Candidate/GetResults";
import CandidateController from "./CandidateController";

export const candidateController = new CandidateController(
    createCandidateService,
    getCandidatesService,
    getResultsService,
);
