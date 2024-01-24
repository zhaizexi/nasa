-- AlterTable
ALTER TABLE "Mission" ADD COLUMN     "instruments" TEXT[] DEFAULT ARRAY[]::TEXT[];
