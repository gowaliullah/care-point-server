/*
  Warnings:

  - Made the column `title` on table `specialties` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "specialties" ALTER COLUMN "title" SET NOT NULL,
ALTER COLUMN "icon" DROP NOT NULL;
