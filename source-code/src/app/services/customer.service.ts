import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _http: HttpClient) { }


  public customerInfo(customerId: number): Observable<Customer>{
    const uri = environment.BASEURL + "customer-info";
  

    return this._http.get<Customer>(uri, {
      params: new HttpParams().set("customer-id", customerId)
    })
  }

  
}
