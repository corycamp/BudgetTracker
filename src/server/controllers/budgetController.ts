// import { getAppModule } from "../appModule/provider";
import { Budget, CreateBudget, UpdateBudget } from "@/lib/types";
import { BudgetService } from "../services/BudgetService";

export class BudgetController{
    private budgetService:BudgetService
    constructor(budgetService:BudgetService){
        this.budgetService = budgetService;
    }

    async getAllBudgets(){
        return await this.budgetService.getAllBudgets();
    }

    async createBudget(input:CreateBudget):Promise<{success:boolean}>{
        return await this.budgetService.createBudget(input);
    }
     async deleteBudget(category:string):Promise<{success:boolean}>{
        return await this.budgetService.deleteBudget(category);
    }
     async updateBudget(input:UpdateBudget):Promise<{success:boolean}>{
        return await this.budgetService.updateBudget(input);
    }

}