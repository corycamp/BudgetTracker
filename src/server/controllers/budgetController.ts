import { CreateBudget, DeleteBudget, UpdateBudget } from "@/lib/types";
import { BudgetService } from "../services/BudgetService";

export class BudgetController{
    private budgetService:BudgetService
    constructor(budgetService:BudgetService){
        this.budgetService = budgetService;
    }

    async getAllBudgets(email:string){
        return await this.budgetService.getAllBudgets(email);
    }

    async createBudget(input:CreateBudget):Promise<{success:boolean}>{
        return await this.budgetService.createBudget(input);
    }
     async deleteBudget(input:DeleteBudget):Promise<{success:boolean}>{
        return await this.budgetService.deleteBudget(input);
    }
     async updateBudget(input:UpdateBudget):Promise<{success:boolean}>{
        return await this.budgetService.updateBudget(input);
    }

}