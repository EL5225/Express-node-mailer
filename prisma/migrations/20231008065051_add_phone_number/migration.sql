/*
  Warnings:

  - A unique constraint covering the columns `[phoneNumber]` on the table `Profiles` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `phoneNumber` to the `Profiles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Profiles" ADD COLUMN     "phoneNumber" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Profiles_phoneNumber_key" ON "Profiles"("phoneNumber");
