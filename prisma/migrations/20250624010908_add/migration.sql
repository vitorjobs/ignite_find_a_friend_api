/*
  Warnings:

  - You are about to drop the column `nosdfme` on the `test` table. All the data in the column will be lost.
  - Added the required column `nome` to the `test` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "test" DROP COLUMN "nosdfme",
ADD COLUMN     "nome" TEXT NOT NULL;
