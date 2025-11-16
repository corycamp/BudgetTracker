import { Budget, Expense, User } from "@/lib/types";
import { MongoClient, Db, Collection } from "mongodb";

export class MongoDB{
    private client: MongoClient;
    private db?:Db;

    constructor(){
        const uri = `${process.env.MONGODB_URI}`
        console.log(process.env.MONGODB_URI)
        if(!uri){
            throw new Error("MONGODB_URI is not defined in the env")
        }
        console.log("Initializing database...")
        this.client = new MongoClient(uri,{})
    }

    async connect():Promise<void>{
        console.log("Trying to connect....")
        try{
            if(!this.db){
                await this.client.connect();
                this.db = this.client.db(`${process.env.MONGODB_DB}`)
                console.log(`Connected to MongoDB: ${process.env.MONGODB_DB}`)
            }
        }catch(e){
            console.log("Error connecting to database....",e)
        }
    }

    getCollection<T extends Budget | Expense | User>(name:string):Collection<T>{
        if(!this.db) throw new Error("Database not connected");
        return this.db.collection<T>(name);
    }

    async disconnect():Promise<void>{
        await this.client.close();
    }
}