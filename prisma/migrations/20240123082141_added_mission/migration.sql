/*
  Warnings:

  - Added the required column `content` to the `Mission` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Mission" ADD COLUMN     "abbr" TEXT,
ADD COLUMN     "content" TEXT NOT NULL;
