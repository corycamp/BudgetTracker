import {gql} from "graphql-tag"
import { getAppModule } from "../appModule/provider";
import { CreateBudget, CreateExpense, DeleteBudget, UpdateBudget } from "@/lib/types";

export const typeDefs = gql`
    type Budget{
        category: String
        limit: Float
        createdAt: String
    }

    type Expense{
        amount: Float
        createdAt: String
        category: String
        merchant: String
        notes: String
    }

    type ResponseObject{
        success:Boolean
    }

    input CreateBudget{
        category: String!
        limit: Float!
        email:String!
    }

     input CreateExpense{
        amount: Float!
        category: String!
        merchant: String!
        createdAt:String!
        email:String!
        notes: String
    }

    input UpdateBudget{
        category: String!
        newLimit: Float!
        email:String!
    }

    input DeleteBudget{
        category: String!
        email:String!
    }

    
    type Query{
        getAllBudgets(email:String!): [Budget]
        getAllExpenses(email:String!): [Expense]
        getPastExpenses(email:String!): [Expense]
        getCurrentExpenses(email:String!): [Expense]
    }

    type Mutation{
        createBudget(input: CreateBudget!): ResponseObject
        createExpense(input: CreateExpense!): ResponseObject
        deleteBudget(input: DeleteBudget!): ResponseObject
        updateBudget(input: UpdateBudget!): ResponseObject
    }
`;

export const resolvers = {
    Query:{
        getAllBudgets:(_: any, {email}:{email:string})=>getAppModule().budgetController.getAllBudgets(email),
        getAllExpenses:(_: any, {email}:{email:string})=>getAppModule().expenseController.getAllExpenses(email),
        getPastExpenses:(_: any, {email}:{email:string})=>getAppModule().expenseController.getPastExpenses(email),
        getCurrentExpenses:(_: any, {email}:{email:string})=>getAppModule().expenseController.getCurrentExpenses(email),
    },
    Mutation:{
        createBudget:async(_: any, {input}:{input:CreateBudget})=>{
            return await getAppModule().budgetController.createBudget(input)
        },
        deleteBudget:async(_: any, {input}:{input:DeleteBudget})=>{
            return await getAppModule().budgetController.deleteBudget(input)
        },
        updateBudget:async(_: any, {input}:{input:UpdateBudget})=>{
            return await getAppModule().budgetController.updateBudget(input)
        },
        createExpense:async(_: any, {input}:{input:CreateExpense})=>{
            return await getAppModule().expenseController.createExpense(input)
        },
    }
}