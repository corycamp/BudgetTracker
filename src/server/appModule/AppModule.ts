import { BudgetService } from "../services/budgetService";

export class AppModule{
    public budgetService: BudgetService;

    constructor(){
        this.budgetService = new BudgetService();
    }
}