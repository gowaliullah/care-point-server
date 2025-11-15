/*
  Warnings:

  - You are about to drop the column `age` on the `patient_health_datas` table. All the data in the column will be lost.
  - Made the column `gender` on table `patient_health_datas` required. This step will fail if there are existing NULL values in that column.
  - Made the column `dateOfBirth` on table `patient_health_datas` required. This step will fail if there are existing NULL values in that column.
  - Made the column `bloodGroup` on table `patient_health_datas` required. This step will fail if there are existing NULL values in that column.
  - Made the column `height` on table `patient_health_datas` required. This step will fail if there are existing NULL values in that column.
  - Made the column `weight` on table `patient_health_datas` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "patient_health_datas" DROP COLUMN "age",
ALTER COLUMN "gender" SET NOT NULL,
ALTER COLUMN "dateOfBirth" SET NOT NULL,
ALTER COLUMN "bloodGroup" SET NOT NULL,
ALTER COLUMN "height" SET NOT NULL,
ALTER COLUMN "weight" SET NOT NULL;
