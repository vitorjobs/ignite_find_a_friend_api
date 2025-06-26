/*
  Warnings:

  - You are about to drop the `org` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `org_contato` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `org_endereco` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `pet` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `test` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "org_contato" DROP CONSTRAINT "org_contato_org_id_fkey";

-- DropForeignKey
ALTER TABLE "org_endereco" DROP CONSTRAINT "org_endereco_org_id_fkey";

-- DropForeignKey
ALTER TABLE "pet" DROP CONSTRAINT "pet_org_id_fkey";

-- DropTable
DROP TABLE "org";

-- DropTable
DROP TABLE "org_contato";

-- DropTable
DROP TABLE "org_endereco";

-- DropTable
DROP TABLE "pet";

-- DropTable
DROP TABLE "test";

-- CreateTable
CREATE TABLE "Org" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Org_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Org_contato" (
    "id" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "org_id" TEXT NOT NULL,

    CONSTRAINT "Org_contato_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Org_endereco" (
    "id" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "org_id" TEXT NOT NULL,

    CONSTRAINT "Org_endereco_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pet" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "idade" TEXT,
    "energia" TEXT,
    "porte" TEXT,
    "requisitos" TEXT,
    "cidade" TEXT NOT NULL,
    "org_id" TEXT NOT NULL,

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Org_email_key" ON "Org"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Org_contato_whatsapp_key" ON "Org_contato"("whatsapp");

-- AddForeignKey
ALTER TABLE "Org_contato" ADD CONSTRAINT "Org_contato_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "Org"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Org_endereco" ADD CONSTRAINT "Org_endereco_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "Org"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "Org"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
