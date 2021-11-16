export interface Transaction {
  id?: string;
  amount: number;
  type: TransactionType;
  category: string[];
  accountName: string;
  note: string;
  transactionDate: Date;
  createdOn: Date;
  updatedOn: Date;
}

export enum TransactionType {
  Expense = 'expense',
  Income = 'income',
}
