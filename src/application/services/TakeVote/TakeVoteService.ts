import type TakeVoteRepository from "../../../domain/repositories/TakeVote/TakeVoteRepository";
import type { TakeVoteBody } from "../../value_objects/types/types";

export default class TakeVoteService {
    private takeVoteRepository: TakeVoteRepository;

    constructor(takeVoteRepository: TakeVoteRepository) {
        this.takeVoteRepository = takeVoteRepository;
    }

    public async execute(body: TakeVoteBody) {
        const { name } = body;

        const exists = await this.takeVoteRepository.findCandidateByName(name);
        if (!exists) {
            throw new Error("CANDIDATE NOT FOUND");
        }

        await this.takeVoteRepository.createVote(name);
        await this.takeVoteRepository.incrementCandidateVote(name);

        return true;
    }
}
