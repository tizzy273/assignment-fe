import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateAccountRequest } from '../models/createAccountRequest';
import { Account } from '../request/createaccount.request';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private _http: HttpClient) { }


  public createAccount(createAccountRequest: CreateAccountRequest): Observable<Account>{
    const uri = environment.BASEURL + "create-account";
  
    return this._http.post<Account>(uri, createAccountRequest)
  }


  public customerAccounts(customerId: number): Observable<Account[]>{
    const uri = environment.BASEURL + "customer-accounts";

    return this._http.get<Account[]>(uri, {
      params: new HttpParams().set("customer-id", customerId)
    })
  }
  

  
}
