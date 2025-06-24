-- CreateTable
CREATE TABLE "org" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,

    CONSTRAINT "org_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "org_contato" (
    "id" SERIAL NOT NULL,
    "org_id" INTEGER NOT NULL,
    "whatsapp" VARCHAR(20) NOT NULL,

    CONSTRAINT "org_contato_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "org_endereco" (
    "id" SERIAL NOT NULL,
    "org_id" INTEGER NOT NULL,
    "cidade" VARCHAR(100) NOT NULL,

    CONSTRAINT "org_endereco_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pet" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "descricao" TEXT,
    "idade" VARCHAR(20),
    "energia" VARCHAR(20),
    "porte" VARCHAR(20),
    "requisitos" TEXT,
    "cidade" VARCHAR(100) NOT NULL,
    "org_id" INTEGER NOT NULL,

    CONSTRAINT "pet_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "org_email_key" ON "org"("email");

-- CreateIndex
CREATE UNIQUE INDEX "org_endereco_org_id_key" ON "org_endereco"("org_id");

-- AddForeignKey
ALTER TABLE "org_contato" ADD CONSTRAINT "org_contato_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "org"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "org_endereco" ADD CONSTRAINT "org_endereco_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "org"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pet" ADD CONSTRAINT "pet_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "org"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
