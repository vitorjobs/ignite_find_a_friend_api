/*
  Warnings:

  - Added the required column `password_hash` to the `Org` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Org" ADD COLUMN     "password_hash" TEXT NOT NULL;
