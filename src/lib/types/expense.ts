export interface CreateExpense{
    amount:number;
    category:string;
    merchant:string;
    notes?:string;
}

export interface Expense{
    amount:number;
    createdAt:Date;
    category:string;
    merchant:string;
    notes?:string;
}

export interface ExpenseByDate{
    date: string;
}
