export interface AtmRespIF {
    accountNumber: string;
    currentBalance: number;
}

export interface IsAlive {
    status: number;
    message: string;
}

export interface TransactionModel {
    accountNumber: string;
    dateOfTransaction: string;
    transactionType: string;
    amount: number;
}

export interface TransactionList {
    transactions: Array<TransactionModel>;
}
