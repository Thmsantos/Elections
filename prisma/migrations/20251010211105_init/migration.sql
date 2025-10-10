-- CreateTable
CREATE TABLE "Candidate" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "votes" INTEGER NOT NULL,

    CONSTRAINT "Candidate_pkey" PRIMARY KEY ("id")
);
