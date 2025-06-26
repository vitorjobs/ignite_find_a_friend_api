/*
  Warnings:

  - You are about to drop the `Org_contato` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Org_endereco` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `contato` to the `Org` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endereco` to the `Org` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Org_contato" DROP CONSTRAINT "Org_contato_org_id_fkey";

-- DropForeignKey
ALTER TABLE "Org_endereco" DROP CONSTRAINT "Org_endereco_org_id_fkey";

-- AlterTable
ALTER TABLE "Org" ADD COLUMN     "contato" TEXT NOT NULL,
ADD COLUMN     "endereco" TEXT NOT NULL;

-- DropTable
DROP TABLE "Org_contato";

-- DropTable
DROP TABLE "Org_endereco";
