export  interface CreateBudget{
    category: string;
    limit: number;
    email:string;
} 

export interface Budget{
    category:string;
    limit:number;
    createdAt:Date;
}

export interface UpdateBudget{
    category:string;
    newLimit:number;
    email:string
}

export interface DeleteBudget{
    category: string;
    email:string;
}

export interface DeleteExpense{
    createdAt: number;
    email:string;
}