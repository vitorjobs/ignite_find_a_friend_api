/*
  Warnings:

  - You are about to drop the column `nome` on the `test` table. All the data in the column will be lost.
  - Added the required column `nosdfme` to the `test` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "test" DROP COLUMN "nome",
ADD COLUMN     "nosdfme" TEXT NOT NULL;
