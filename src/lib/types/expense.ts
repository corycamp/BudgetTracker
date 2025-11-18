export interface CreateExpense{
    amount:number;
    category:string;
    merchant:string;
    email:string;
    date:number;
    createdAt:number;
    notes?:string;
}

export interface Expense{
    amount:number;
    date: Date|string;
    createdAt:Date | string;
    category:string;
    merchant:string;
    notes?:string;
}
