/*
  Warnings:

  - You are about to drop the column `destinationAccountId` on the `Transactions` table. All the data in the column will be lost.
  - You are about to drop the column `sourceAccountId` on the `Transactions` table. All the data in the column will be lost.
  - Added the required column `destinationAccountNumber` to the `Transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sourceAccountNumber` to the `Transactions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "BankAccounts" DROP CONSTRAINT "BankAccounts_userId_fkey";

-- DropForeignKey
ALTER TABLE "Transactions" DROP CONSTRAINT "Transactions_destinationAccountId_fkey";

-- DropForeignKey
ALTER TABLE "Transactions" DROP CONSTRAINT "Transactions_sourceAccountId_fkey";

-- AlterTable
ALTER TABLE "Transactions" DROP COLUMN "destinationAccountId",
DROP COLUMN "sourceAccountId",
ADD COLUMN     "destinationAccountNumber" TEXT NOT NULL,
ADD COLUMN     "sourceAccountNumber" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "BankAccounts" ADD CONSTRAINT "BankAccounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_sourceAccountNumber_fkey" FOREIGN KEY ("sourceAccountNumber") REFERENCES "BankAccounts"("accountNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_destinationAccountNumber_fkey" FOREIGN KEY ("destinationAccountNumber") REFERENCES "BankAccounts"("accountNumber") ON DELETE RESTRICT ON UPDATE CASCADE;
