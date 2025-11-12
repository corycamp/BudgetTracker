
interface budget{
    category:string;
    limit:number;
}

export class BudgetService{
    constructor(){
        console.log("Setting up budget service")
    }

    async getAllBudgets():Promise<budget[]>{
        return [{
            category:"test",
            limit:200
        }]
    }

}