import type { CandidateBody } from "../../../core/value_objects/types/types";

export interface CreateCandidateInput {
    body: CandidateBody;
    request: Request;
}
