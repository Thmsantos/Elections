import { type Context } from "elysia";
import type GetCandidatesService from "../../../core/services/Candidate/GetCandidatesService/GetCandidatesService";

export default class ListCandidateController {
    private getCandidatesService;

    constructor(getCandidatesService: GetCandidatesService) {
        this.getCandidatesService = getCandidatesService;
    }

    public async handle(ctx: Context) {
        try {
            const candidates = await this.getCandidatesService.execute();

            return { body: { data: candidates }, status: 200 };
        } catch (error) {
            ctx.set.status = 500;
            return { message: "Internal error", status: 500, error };
        }
    }
}
