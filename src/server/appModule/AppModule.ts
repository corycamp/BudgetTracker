import { BudgetController } from "../controllers/budgetController";
import { ExpenseController } from "../controllers/expenseController";
import { MongoDB } from "../db/mongodb";
import { BudgetService } from "../services/BudgetService";
import { ExpenseService } from "../services/ExpenseService";


export class AppModule{
    private db: MongoDB;
    public budgetService: BudgetService;
    public expenseService: ExpenseService;
    public expenseController: ExpenseController;
    public budgetController: BudgetController;

    constructor(){
        this.db = new MongoDB();
        this.budgetService = new BudgetService(this.db);
        this.expenseService = new ExpenseService(this.db);
        this.budgetController = new BudgetController(this.budgetService)
        this.expenseController = new ExpenseController(this.expenseService);
    }

    async init(){
     await this.db.connect();
    }
}