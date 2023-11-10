-- CreateTable
CREATE TABLE "Employees" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "profilesId" INTEGER
);

-- CreateTable
CREATE TABLE "EmployeeProfiles" (
    "id" SERIAL NOT NULL,
    "phoneNumber" TEXT,
    "identityType" TEXT,
    "identityNumber" TEXT,
    "gender" TEXT,
    "religion" TEXT,
    "address" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EmployeeProfiles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Employees_email_key" ON "Employees"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Employees_profilesId_key" ON "Employees"("profilesId");

-- CreateIndex
CREATE UNIQUE INDEX "EmployeeProfiles_phoneNumber_key" ON "EmployeeProfiles"("phoneNumber");

-- AddForeignKey
ALTER TABLE "Employees" ADD CONSTRAINT "Employees_profilesId_fkey" FOREIGN KEY ("profilesId") REFERENCES "EmployeeProfiles"("id") ON DELETE SET NULL ON UPDATE CASCADE;
