import { Component } from '@angular/core';
import { AtmRespIF, IsAlive, TransactionList, TransactionModel } from '../app/services/interface/atmrespinterface';
import { AtmServiceService } from '../app/services/atm-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ATM Project';

  status = 0;
  message = '';

  balance = 0;
  acct = '';

  withDrawBalance = 0;
  withDrawAcct = '';

  depositBalance = 0;
  depositAcct = '';

  transactions = {  accountNumber: '', dateOfTransaction: '', transactionType: '', amount: 0 };

  txnData = [this.transactions];

  // respNice: AtmRespIF;

  constructor(public atmService: AtmServiceService) {

    atmService.isAlive().subscribe(value => {
      this.status = value.status;
      this.message = value.message;
    });

    atmService.getBalance('2222-1').subscribe( value => {
      this.balance = value.currentBalance;
      this.acct   = value.accountNumber;

      // this.respNice = {...value};
      // this.balance = this.respNice.currentBalance;
      // this.acct    = this.respNice.accountNumber;
    });

    atmService.withdraw('2222-1', 35).subscribe( value => {
      this.withDrawBalance = value.currentBalance;
      this.withDrawAcct   = value.accountNumber;
    });

    atmService.deposit('2222-1', 75).subscribe( value => {
      this.depositBalance = value.currentBalance;
      this.depositAcct   = value.accountNumber;
    });

    atmService.getLastOperation('2222-1').subscribe( value => {
      this.txnData = value.transactions;
    });

  }
}
