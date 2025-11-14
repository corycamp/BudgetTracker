import { CreateExpense, Expense } from "@/lib/types";
import { ExpenseService } from "../services/ExpenseService";

export class ExpenseController{
    private expenseService:ExpenseService
    constructor(expenseService:ExpenseService){
        this.expenseService = expenseService;
    }

    async getAllExpenses():Promise<Expense[]>{
        return await this.expenseService.getAllExpenses();
    }

    async createExpense(input:CreateExpense):Promise<{success:boolean}>{
        return await this.expenseService.createExpense(input);
    }
     async getPastExpenses():Promise<Expense[]>{
        return await this.expenseService.getPastExpenses();
    }
     async getCurrentExpenses():Promise<Expense[]>{
        return await this.expenseService.getCurrentExpenses();
    }

}