import type { PrismaClient } from "@prisma/client";

export default class VotesRepository {
    private db: PrismaClient;

    constructor(db: PrismaClient) {
        this.db = db;
    }

    findCandidateByName(name: string) {
        return this.db.candidate.findFirst({
            where: { name },
        });
    }

    createVote(name: string) {
        return this.db.votes.create({
            data: { name },
        });
    }

    incrementCandidateVote(name: string) {
        return this.db.candidate.update({
            where: { name },
            data: {
                votes: { increment: 1 },
            },
        });
    }
}
