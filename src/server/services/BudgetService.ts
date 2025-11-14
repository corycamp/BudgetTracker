import { Budget, CreateBudget, UpdateBudget } from "@/lib/types";
import { MongoDB } from "../db/mongodb";

export class BudgetService{
    private budget: MongoDB;
    constructor(db:MongoDB){
        this.budget = db;
    }

    async getAllBudgets():Promise<Budget[]>{
        try{
            const budgets = await this.budget.getCollection<Budget>("budgets").find().toArray();
            return budgets;
        }catch(e){
            throw new Error("Error connecting to database")
        }
    }

    async createBudget(input:CreateBudget):Promise<{success:boolean}>{
        try{
            const existingBudget = await this.budget.getCollection<Budget>("budgets").find({category:input.category}).toArray();
            if(!!existingBudget.length) throw new Error("Budget already exists");
            const budget = await this.budget.getCollection<Budget>("budgets").insertOne({...input,createdAt:new Date()})
            console.log(`${JSON.stringify(budget)} --  Added successfully`);
            return {success:true}
        }catch(e:any){
            throw new Error(`Could not create budget - ${e.message}`)
        }
    }

    async deleteBudget(category:string):Promise<{success:boolean}>{
        try{
            const existingBudget = await this.budget.getCollection<Budget>("budgets").find({category:category}).toArray();
            console.log(existingBudget)
            if(!existingBudget.length) throw new Error("Budget does not exists");
            const budget = await this.budget.getCollection<Budget>("budgets").deleteOne({category:`${category}`})
            console.log(`${JSON.stringify(budget)} --  Deleted successfully`);
            return {success:true}
        }catch(e:any){
            throw new Error(`Could not delete budget - ${e.message}`)
        }
    }

    async updateBudget(input:UpdateBudget):Promise<{success:boolean}>{
        try{
            const existingBudget = await this.budget.getCollection<Budget>("budgets").find({category:input.category}).toArray();
            if(!existingBudget.length) throw new Error("Budget does not exists");
            const budget = await this.budget.getCollection<Budget>("budgets").updateOne({category:input.category},{$set:{limit:input.newLimit}})
            console.log(`${JSON.stringify(budget)} --  Updated successfully`);
            return {success:true}
        }catch(e:any){
            throw new Error(`Could not update budget - ${e.message}`)
        }
    }

}