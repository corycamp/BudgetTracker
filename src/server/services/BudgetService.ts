import { Budget, CreateBudget, DeleteBudget, UpdateBudget } from "@/lib/types";
import { MongoDB } from "../db/mongodb";

export class BudgetService{
    private budget: MongoDB;
    constructor(db:MongoDB){
        this.budget = db;
    }

    async getAllBudgets(email:string):Promise<Budget[]>{
        try{
            const budgets = await this.budget.getCollection<Budget>("budgets").find({
                email:`${email}`
            }).sort({createdAt:-1})
            .toArray();
            return budgets;
        }catch(e){
            throw new Error("Error connecting to database")
        }
    }

    async createBudget(input:CreateBudget):Promise<{success:boolean}>{
        try{
            const existingBudget = await this.budget.getCollection<Budget>("budgets").find({category:input.category, email:input.email}).toArray();
            if(!!existingBudget.length) throw new Error("Budget already exists");
            const budget = await this.budget.getCollection<Budget>("budgets").insertOne({...input,createdAt:new Date()})
            console.log(`${JSON.stringify(budget)} --  Added successfully`);
            return {success:true}
        }catch(e:any){
            throw new Error(`Could not create budget - ${e.message}`)
        }
    }

    async deleteBudget(input:DeleteBudget):Promise<{success:boolean}>{
        try{
            const existingBudget = await this.budget.getCollection<Budget>("budgets").find({category:`${input.category}`,
            email:`${input.email}`
            }).toArray();
            if(!existingBudget.length) throw new Error("Budget does not exists");
            const budget = await this.budget.getCollection<Budget>("budgets").deleteOne({category:`${input.category}`,
            email:`${input.email}`
            })
            console.log(`${JSON.stringify(budget)} --  Deleted successfully`);
            return {success:true}
        }catch(e:any){
            throw new Error(`Could not delete budget - ${e.message}`)
        }
    }

    async updateBudget(input:UpdateBudget):Promise<{success:boolean}>{
        try{
            const existingBudget = await this.budget.getCollection<Budget>("budgets").find({category:`${input.category}`,
            email:`${input.email}`
            }).toArray();
            if(!existingBudget.length) throw new Error("Budget does not exists");
            const budget = await this.budget.getCollection<Budget>("budgets").updateOne({category:`${input.category}`,
            email:`${input.email}`
            },{$set:{limit:input.newLimit}})
            console.log(`${JSON.stringify(budget)} --  Updated successfully`);
            return {success:true}
        }catch(e:any){
            throw new Error(`Could not update budget - ${e.message}`)
        }
    }

}