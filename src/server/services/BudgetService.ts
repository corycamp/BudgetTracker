import { MongoDB } from "../db/mongodb";

interface budget{
    _id:number;
    category:string;
    limit:number;
}

export class BudgetService{
    private db;
    constructor(db:MongoDB){
        this.db = db;
    }

    async getAllBudgets():Promise<budget[]>{
        try{
            const budgets = await this.db.getCollection("budgets").find({}).toArray();
            return budgets as unknown as budget[];
        }catch(e){
            console.log("Error connecting to database", e);
            return []
        }
        
    }

}