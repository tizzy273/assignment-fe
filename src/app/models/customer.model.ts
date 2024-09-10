import { Transaction } from "./transaction.model";

export interface Customer {
    id: number;
    name: string,
    surname: string,
    balance: number
    transactions: Transaction[]
  }
  