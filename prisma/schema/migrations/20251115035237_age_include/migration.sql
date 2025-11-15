/*
  Warnings:

  - Added the required column `age` to the `patient_health_datas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "patient_health_datas" ADD COLUMN     "age" INTEGER NOT NULL,
ALTER COLUMN "gender" DROP NOT NULL,
ALTER COLUMN "dateOfBirth" DROP NOT NULL,
ALTER COLUMN "bloodGroup" DROP NOT NULL,
ALTER COLUMN "height" DROP NOT NULL,
ALTER COLUMN "weight" DROP NOT NULL;
