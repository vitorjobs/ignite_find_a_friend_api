/*
  Warnings:

  - A unique constraint covering the columns `[cnpj]` on the table `Org` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cnpj` to the `Org` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Org" ADD COLUMN     "cnpj" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Org_cnpj_key" ON "Org"("cnpj");
