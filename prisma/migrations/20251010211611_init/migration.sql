/*
  Warnings:

  - You are about to drop the `Patient` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."Patient";

-- CreateTable
CREATE TABLE "Votes" (
    "id" SERIAL NOT NULL,
    "id_candidate" INTEGER NOT NULL,

    CONSTRAINT "Votes_pkey" PRIMARY KEY ("id")
);
