/*
  Warnings:

  - Made the column `descricao` on table `Pet` required. This step will fail if there are existing NULL values in that column.
  - Made the column `idade` on table `Pet` required. This step will fail if there are existing NULL values in that column.
  - Made the column `energia` on table `Pet` required. This step will fail if there are existing NULL values in that column.
  - Made the column `porte` on table `Pet` required. This step will fail if there are existing NULL values in that column.
  - Made the column `requisitos` on table `Pet` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Pet" ALTER COLUMN "descricao" SET NOT NULL,
ALTER COLUMN "idade" SET NOT NULL,
ALTER COLUMN "energia" SET NOT NULL,
ALTER COLUMN "porte" SET NOT NULL,
ALTER COLUMN "requisitos" SET NOT NULL;
