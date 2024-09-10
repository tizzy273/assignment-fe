export interface Transaction {
  id: number | null;
  type: string;
  accountId: number;
  amount: number;
  timeStamp: string | null
}
