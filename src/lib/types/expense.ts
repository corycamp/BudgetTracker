export interface CreateExpense{
    amount:number;
    category:string;
    merchant:string;
    email:string;
    createdAt:number;
    notes?:string;
}

export interface Expense{
    amount:number;
    createdAt:Date | string;
    category:string;
    merchant:string;
    notes?:string;
}
