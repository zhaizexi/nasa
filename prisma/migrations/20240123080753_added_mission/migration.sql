/*
  Warnings:

  - Added the required column `type` to the `Mission` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "MissionType" AS ENUM ('Orbiter', 'Instrument', 'FlybySpacecraft', 'LanderRover', 'TechnologyDemonstration', 'CubeSatSmallSat', 'Groundbased', 'Lander', 'Rover', 'Airborne', 'Infrastructure');

-- AlterTable
ALTER TABLE "Mission" ADD COLUMN     "href" TEXT,
ADD COLUMN     "relateSite" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "type" "MissionType" NOT NULL;
