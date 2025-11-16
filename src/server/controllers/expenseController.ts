import { CreateExpense, Expense } from "@/lib/types";
import { ExpenseService } from "../services/ExpenseService";

export class ExpenseController{
    private expenseService:ExpenseService
    constructor(expenseService:ExpenseService){
        this.expenseService = expenseService;
    }

    async getAllExpenses(email:string):Promise<Expense[]>{
        return await this.expenseService.getAllExpenses(email);
    }

    async createExpense(input:CreateExpense):Promise<{success:boolean}>{
        return await this.expenseService.createExpense(input);
    }
     async getPastExpenses(email:string):Promise<Expense[]>{
        return await this.expenseService.getPastExpenses(email);
    }
     async getCurrentExpenses(email:string):Promise<Expense[]>{
        return await this.expenseService.getCurrentExpenses(email);
    }

}