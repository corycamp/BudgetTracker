import { getAppModule } from "../appModule/provider";
import { BudgetService } from "../services/budgetService";

export class BudgetController{
    private budgetService:BudgetService
    constructor(){
        console.log("Setting up controller")
        this.budgetService = getAppModule().budgetService;
    }

        async getAllBudgets(){
        return await this.budgetService.getAllBudgets();
    }
}