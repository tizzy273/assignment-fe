import { Transaction } from "./transaction.model";

export interface Account {
    id: number;
    transactions: Transaction[]
  }
  