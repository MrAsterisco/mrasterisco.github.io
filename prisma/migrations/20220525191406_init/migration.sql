-- CreateEnum
CREATE TYPE "ProjectType" AS ENUM ('ENTERPRISE', 'PRODUCTS', 'OPENSOURCE');

-- CreateEnum
CREATE TYPE "LinkType" AS ENUM ('APPSTORE', 'GENERIC', 'GITHUB', 'GITLAB');

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "timePeriod" TEXT NOT NULL,
    "type" "ProjectType" NOT NULL,
    "description" TEXT NOT NULL,
    "technologies" TEXT NOT NULL,
    "sortIndex" INTEGER NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Link" (
    "id" SERIAL NOT NULL,
    "displayName" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "type" "LinkType" NOT NULL DEFAULT E'GENERIC',
    "projectId" INTEGER NOT NULL,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Language" (
    "id" SERIAL NOT NULL,
    "iconUri" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "sort" INTEGER NOT NULL,

    CONSTRAINT "Language_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
