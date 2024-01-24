/*
  Warnings:

  - The `relateSite` column on the `Mission` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Mission" DROP COLUMN "relateSite",
ADD COLUMN     "relateSite" JSONB;
