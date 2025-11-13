export  interface CreateBudget{
    category: string;
    limit: number;
} 

export interface Budget{
    category:string;
    limit:number;
    createdAt:Date;
}

export interface UpdateBudget{
    category:string;
    newLimit:number;
}

export interface DeleteBudget{
    category: string;
}