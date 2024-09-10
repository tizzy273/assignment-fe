import { CommonModule, registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Customer } from './models/customer.model';
import { Transaction } from './models/transaction.model';
import { CustomerService } from './services/customer.service';
import { FormsModule } from '@angular/forms';
import { AccountService } from './services/account.service';
import { CreateAccountRequest } from './models/createAccountRequest';
import { Account } from './request/createaccount.request';
import { TransactionService } from './services/transaction.service';
registerLocaleData(localeIt);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  providers: [{ provide: LOCALE_ID, useValue: 'it-IT' }],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})



export class AppComponent implements OnInit {
  public customer?: Customer
  public initialCredit: number = 0
  public validatonErrorMessage?: string | null
  public customerAccounts: Account[] = []
  public transactionRequest: Transaction ={
    accountId: 0,
    amount:0,
    type: "DEPOSIT",
    id: null,
    timeStamp: null
  }


  constructor(private _customerService: CustomerService,
    private _accountService: AccountService,
    private _transactionService: TransactionService
  ) {
  }


  ngOnInit(): void {
    this._getCustomerInfo();
  }

  private _getCustomerInfo():void{
    this._customerService.customerInfo(1).subscribe({
      next: (response) => {
        this.customer = response;
      },

      error: (error) => {
        console.log(error);
      },

      complete: () => {

        if(this.customer){
          this._customerAccounts(this.customer?.id)
      }

      }

    })
  }

  public createAccount():void{
    if(!this.customer){ return; }


    const createAccountRequest:CreateAccountRequest = {
        customerId: this.customer.id,
        initialCredit:this.initialCredit
    }

    this._accountService.createAccount(createAccountRequest).subscribe({

      next: (response) => {
        console.log(response);
      },

      error: (error) => {
          console.log(error);

      
          this._showError( error.error.message);
      },
      complete: () => {

        if(this.customer){
          this._getCustomerInfo()
      }


      }



    }
    )
    
  }


  private _showError(validatonErrorMessage: string){
    this.validatonErrorMessage = validatonErrorMessage;

    setTimeout(()=>{this.validatonErrorMessage= null}, 5000);

  }

  
  public createTransaction():void{
    if(!this.customer){ return; }


    const transactionRequest:Transaction = {
        accountId: this.transactionRequest.accountId,
        amount: this.transactionRequest.amount,
        timeStamp:this.transactionRequest.timeStamp,
        type:this.transactionRequest.type,
        id: this.transactionRequest.id
        
    }

    this._transactionService.createTransaction(transactionRequest).subscribe({

      next: (response) => {
        console.log(response);
      },

      error: (error) => {
          console.log(error);
      
          this._showError( error.error.message);
      },
      complete: () => {

        if(this.customer){
          this._getCustomerInfo()
      }


      }


    }
    )
    
  }



  private _customerAccounts(customerId: number):void{

    this._accountService.customerAccounts(customerId).subscribe({
      next: (response) => {
        this.customerAccounts = response;
      },

      error: (error) => {
        console.log(error);
      },
      complete: () => {

        if(this.customer){
          this._getCustomerInfo()
      }


      }

    })
  }






}
