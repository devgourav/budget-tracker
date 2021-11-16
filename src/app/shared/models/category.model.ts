import { TransactionType } from "./transaction.model";

export interface Category {
  name: string;
  type: TransactionType;
  subCategories: string[];
  tagColor: string;
  createdOn: Date;
  updatedOn: Date;
}
