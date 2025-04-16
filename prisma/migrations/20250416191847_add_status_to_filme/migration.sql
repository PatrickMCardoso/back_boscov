/*
  Warnings:

  - Made the column `status` on table `Usuario` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Filme" ADD COLUMN     "status" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "Usuario" ALTER COLUMN "status" SET NOT NULL,
ALTER COLUMN "status" SET DEFAULT 1;
