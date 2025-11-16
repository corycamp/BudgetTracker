export interface CreateExpense{
    amount:number;
    category:string;
    merchant:string;
    email:string;
    createdAt:string;
    notes?:string;
}

export interface Expense{
    amount:number;
    createdAt:Date;
    category:string;
    merchant:string;
    notes?:string;
}
