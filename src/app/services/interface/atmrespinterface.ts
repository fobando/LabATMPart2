export interface AtmRespIF {
    accountNumber: string;
    currentBalance: number;
}

export interface IsAlive {
    status: number;
    message: string;
}

export class TransactionModel {
    accountNumber: string;
    dateOfTransaction: Date = new Date();
    transactionType: string;
    amount: number;
}

export class TransactionList {
    transactions: Array<TransactionModel> = [];
}
