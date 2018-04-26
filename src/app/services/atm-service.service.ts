import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AtmRespIF, IsAlive, TransactionList, TransactionModel } from './interface/atmrespinterface';

@Injectable()
export class AtmServiceService {

  private URLEP  = 'http://localhost:3000/atm/';
  private URLEP2 = 'http://localhost:3000/atm/withdraw/';
  private URLEP3 = 'http://localhost:3000/atm/deposit/';
  private URLEP4 = 'http://localhost:3000/atm/transactions/';

  constructor( public http: HttpClient) {
      }
   // '/atm'
   isAlive() {
    return this.http.get<IsAlive>(this.URLEP);
   }

   // '/atm/:acct'
   getBalance(acct: string) {
        return this.http.get<AtmRespIF>(this.URLEP + acct);
   }

   // '/atm/withdraw/:acct/amount/:amount'
   withdraw (acct: string, amount: number) {
        return this.http.get<AtmRespIF>(this.URLEP2 + acct + '/amount/' + amount);
   }

   // '/atm/deposit/:acct/amount/:amount'
   deposit (acct: string, amount: number) {
        return this.http.get<AtmRespIF>(this.URLEP3 + acct + '/amount/' + amount);
   }

   // '/atm/transactions/:acct'
   getLastOperation (acct: string) { // : Array<string>;
        return this.http.get<TransactionList>(this.URLEP4 + acct);
   }
}
