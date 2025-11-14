import { CreateExpense, Expense } from "@/lib/types";
import { MongoDB } from "../db/mongodb";
import { getPreviousMonthRange } from "@/lib/utils/dateRange";


export class ExpenseService{
    private expense:MongoDB;
    constructor(db:MongoDB){
        this.expense = db;
    }

    async getAllExpenses():Promise<Expense[]>{
        try{
            const expense = await this.expense.getCollection<Expense>("expenses").find().toArray();
            return expense;
        }catch(e){
            throw new Error("Error connecting to database")
        }
    }

     async createExpense(input:CreateExpense):Promise<{success:boolean}>{
        try{
            const date = new Date();
            const expense = await this.expense.getCollection<Expense>("expenses").insertOne({
            ...input,
            createdAt:date
        });
            console.log(`${JSON.stringify(expense)} --  Added successfully`);
            return {success:true};
        }catch(e){
            throw new Error("Error connecting to database")
        }
    }

     async getPastExpenses():Promise<Expense[]>{
        try{
            const lastMonth = getPreviousMonthRange();
            const expense = await this.expense.getCollection<Expense>("expenses").find({
                createdAt:{$lte:lastMonth.endOfPrevMonth},
            })
            .sort({createdAt:1})
            .toArray();
            return expense;
        }catch(e){
            throw new Error("Error connecting to database")
        }
    }

     async getCurrentExpenses():Promise<Expense[]>{
        try{
            const lastMonth = getPreviousMonthRange();
             const expense = await this.expense.getCollection<Expense>("expenses").find({
                createdAt:{$gt:lastMonth.endOfPrevMonth},
            })
            .sort({createdAt:1})
            .toArray();
            return expense;
        }catch(e){
            throw new Error("Error connecting to database")
        }
    }
}