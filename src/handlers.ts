import type { Context } from "elysia";
import type { CandidateBody } from "./types/types";
import { prisma } from "./db/db";

export default async function CreateCandidate(ctx: Context<{ body: CandidateBody }>) {
    const { name } = ctx.body;

    try {
        const exists = await prisma.candidate.findFirst({
            where: { name }
        });

        if(exists){
            return { status: 409, message: 'User already exists' }
        }

        await prisma.candidate.create({
            data: { name, votes: 0 }
        })

        return { status: 201, message: 'created' }
    } catch ( error ){
        return { status: 500, message: error }
    }
}