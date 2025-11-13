// import { getAppModule } from "../appModule/provider";
import { BudgetService } from "../services/BudgetService";

export class BudgetController{
    private budgetService:BudgetService
    constructor(budgetService:BudgetService){
        this.budgetService = budgetService;
    }

        async getAllBudgets(){
        return await this.budgetService.getAllBudgets();
    }
}