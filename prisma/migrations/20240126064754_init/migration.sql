-- CreateEnum
CREATE TYPE "MissionStatus" AS ENUM ('past', 'current', 'future', 'proposed');

-- CreateTable
CREATE TABLE "Topic" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "maskUrl" TEXT,

    CONSTRAINT "Topic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Slide" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "videoUrl" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Slide_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "News" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "maskUrl" TEXT NOT NULL,
    "topicId" TEXT NOT NULL,

    CONSTRAINT "News_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Target" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "indisplay" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Target_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TypeOnMission" (
    "missionId" TEXT NOT NULL,
    "typeId" TEXT NOT NULL,

    CONSTRAINT "TypeOnMission_pkey" PRIMARY KEY ("missionId","typeId")
);

-- CreateTable
CREATE TABLE "TopicOnMission" (
    "missionId" TEXT NOT NULL,
    "topicId" TEXT NOT NULL,

    CONSTRAINT "TopicOnMission_pkey" PRIMARY KEY ("missionId","topicId")
);

-- CreateTable
CREATE TABLE "MissionType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "MissionType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TargetonMission" (
    "missionId" TEXT NOT NULL,
    "targetId" TEXT NOT NULL,

    CONSTRAINT "TargetonMission_pkey" PRIMARY KEY ("missionId","targetId")
);

-- CreateTable
CREATE TABLE "Mission" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "maskUrl" TEXT NOT NULL DEFAULT '',
    "abbr" TEXT,
    "href" TEXT,
    "description" TEXT,
    "content" TEXT NOT NULL,
    "launchDate" DATE NOT NULL,
    "status" "MissionStatus" NOT NULL DEFAULT 'current',
    "relateSite" JSONB,
    "instruments" TEXT[] DEFAULT ARRAY[]::TEXT[],

    CONSTRAINT "Mission_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Topic_name_key" ON "Topic"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Topic_title_key" ON "Topic"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Slide_title_key" ON "Slide"("title");

-- CreateIndex
CREATE UNIQUE INDEX "News_title_key" ON "News"("title");

-- CreateIndex
CREATE UNIQUE INDEX "MissionType_name_key" ON "MissionType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Mission_name_key" ON "Mission"("name");

-- AddForeignKey
ALTER TABLE "News" ADD CONSTRAINT "News_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TypeOnMission" ADD CONSTRAINT "TypeOnMission_missionId_fkey" FOREIGN KEY ("missionId") REFERENCES "Mission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TypeOnMission" ADD CONSTRAINT "TypeOnMission_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "MissionType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TopicOnMission" ADD CONSTRAINT "TopicOnMission_missionId_fkey" FOREIGN KEY ("missionId") REFERENCES "Mission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TopicOnMission" ADD CONSTRAINT "TopicOnMission_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TargetonMission" ADD CONSTRAINT "TargetonMission_missionId_fkey" FOREIGN KEY ("missionId") REFERENCES "Mission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TargetonMission" ADD CONSTRAINT "TargetonMission_targetId_fkey" FOREIGN KEY ("targetId") REFERENCES "Target"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
