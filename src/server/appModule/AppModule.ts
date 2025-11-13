import { BudgetController } from "../controllers/budgetController";
import { MongoDB } from "../db/mongodb";
import { BudgetService } from "../services/BudgetService";


export class AppModule{
    private db: MongoDB;
    public budgetService: BudgetService;
    public budgetController: BudgetController;

    constructor(){
        this.db = new MongoDB();
        this.budgetService = new BudgetService(this.db);
        this.budgetController = new BudgetController(this.budgetService)
    }

    async init(){
     await this.db.connect();
    }
}