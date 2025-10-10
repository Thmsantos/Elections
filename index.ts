import { Elysia } from 'elysia';
import { createCandidateSchema } from './src/types/types';
import CreateCandidate from './src/handlers';

const app = new Elysia()
    .post('/create', CreateCandidate, { body: createCandidateSchema })
    .listen(3200);


console.log('\n', 'server running at http://127.0.0.1:3200');