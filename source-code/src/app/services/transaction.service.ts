import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction.model';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private _http: HttpClient) { }


  public createTransaction(transaction: Transaction): Observable<Transaction>{
    const uri = environment.BASEURL + "new-transaction";
    return this._http.post<Transaction>(uri, transaction)
  }
}
