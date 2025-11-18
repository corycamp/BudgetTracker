import { CreateExpense, DeleteExpense, Expense, SpendingTrendItem } from "@/lib/types";
import { MongoDB } from "../db/mongodb";
import { getPreviousMonthRange } from "@/lib/utils/dateRange";
import { MONTHS } from "@/components/common/constants";


export class ExpenseService{
    private expense:MongoDB;
    constructor(db:MongoDB){
        this.expense = db;
    }

    async getAllExpenses(email:string):Promise<Expense[]>{
        try{
            const expense = await this.expense.getCollection<Expense>("expenses").find({email:`${email}`})
            .sort({createdAt:-1})
            .toArray();
            return expense;
        }catch(e){
            throw new Error("Error connecting to database")
        }
    }

     async createExpense(input:CreateExpense):Promise<{success:boolean}>{
        try{
            const createdAt = new Date(input.createdAt)
            const date = new Date(input.date)
            const expense = await this.expense.getCollection<Expense>("expenses").insertOne({
            ...input,
            createdAt:createdAt,
            date:date
        });
            console.log(`${JSON.stringify(expense)} --  Added successfully`);
            return {success:true};
        }catch(e){
            throw new Error("Error connecting to database")
        }
    }

    async deleteExpense(input:DeleteExpense):Promise<{success:boolean}>{
       try{
           const date = new Date(input.createdAt)
           const existingExpense = await this.expense.getCollection<Expense>("expenses").find({createdAt:date,
           email:`${input.email}`
           }).toArray();
           if(!existingExpense.length) throw new Error("Expense does not exists");
           const expense = await this.expense.getCollection<Expense>("expenses").deleteOne({createdAt:date,
           email:`${input.email}`
           })
           console.log(`${JSON.stringify(expense)} --  Deleted successfully`);
           return {success:true}
        }catch(e:any){
            throw new Error(`Could not delete expense - ${e.message}`)
        }
    }

     async getPastExpenses(email:string):Promise<SpendingTrendItem[]>{
        try{
            const last6Months = getPreviousMonthRange()
            const alreadyFound:string[] = []
            const expense = await this.expense.getCollection<Expense>("expenses").find({
                date:{$gte:last6Months.endOfPast6Month},
                email:`${email}`
            }).toArray();
            const spendingTrend = expense.map((item:Expense)=>{
                const month = MONTHS[new Date(item.date).getMonth()]
                if(!alreadyFound.includes(month)){
                    alreadyFound.push(month)
                    const total = expense
                              .filter(
                                (innerExpense: Expense) =>
                                  MONTHS[new Date(innerExpense.date).getMonth()] === month
                              )
                              .reduce((acc: number, item: Expense) => acc + item.amount, 0);
                    return{
                        month:month,
                        amount:total
                    }
                } 
            }).filter(item=>!!item)
            return spendingTrend;
        }catch(e){
            throw new Error("Error connecting to database")
        }
    }

     async getCurrentExpenses(email:string):Promise<Expense[]>{
        try{
            const lastMonth = getPreviousMonthRange();
             const expense = await this.expense.getCollection<Expense>("expenses").find({
                date:{$gt:lastMonth.endOfPrevMonth},
                email:`${email}`
            })
            .sort({createdAt:-1})
            .toArray();
            return expense;
        }catch(e){
            throw new Error("Error connecting to database")
        }
    }
}