/*
  Warnings:

  - You are about to drop the `BankAccounts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EmployeeProfiles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Employees` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Transactions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BankAccounts" DROP CONSTRAINT "BankAccounts_userId_fkey";

-- DropForeignKey
ALTER TABLE "Employees" DROP CONSTRAINT "Employees_profilesId_fkey";

-- DropForeignKey
ALTER TABLE "Transactions" DROP CONSTRAINT "Transactions_destinationAccountNumber_fkey";

-- DropForeignKey
ALTER TABLE "Transactions" DROP CONSTRAINT "Transactions_sourceAccountNumber_fkey";

-- DropTable
DROP TABLE "BankAccounts";

-- DropTable
DROP TABLE "EmployeeProfiles";

-- DropTable
DROP TABLE "Employees";

-- DropTable
DROP TABLE "Transactions";
