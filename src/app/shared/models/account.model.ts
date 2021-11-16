import { TransactionType } from './transaction.model';

export interface Account {
  name: string;
  type: TransactionType;
  createdOn: Date;
  updatedOn: Date;
}
