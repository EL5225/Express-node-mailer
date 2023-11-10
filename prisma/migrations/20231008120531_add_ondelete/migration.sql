-- DropForeignKey
ALTER TABLE "Transactions" DROP CONSTRAINT "Transactions_destinationAccountNumber_fkey";

-- DropForeignKey
ALTER TABLE "Transactions" DROP CONSTRAINT "Transactions_sourceAccountNumber_fkey";

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_sourceAccountNumber_fkey" FOREIGN KEY ("sourceAccountNumber") REFERENCES "BankAccounts"("accountNumber") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_destinationAccountNumber_fkey" FOREIGN KEY ("destinationAccountNumber") REFERENCES "BankAccounts"("accountNumber") ON DELETE CASCADE ON UPDATE NO ACTION;
