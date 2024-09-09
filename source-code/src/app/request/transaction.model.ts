export interface Transaction {
  id: number;
  type: string;
  accountId: number;// todo
  amount: number;
  timeStamp: string
}
