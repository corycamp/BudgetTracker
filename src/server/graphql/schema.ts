import {gql} from "graphql-tag"
import { getAppModule } from "../appModule/provider";
import { Budget, CreateBudget, CreateExpense, DeleteBudget, UpdateBudget } from "@/lib/types";

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
    }

     input CreateExpense{
        amount: Float!
        category: String!
        merchant: String!
        notes: String
    }

    input UpdateBudget{
        category: String!
        newLimit: Float!
    }

    input DeleteBudget{
        category: String!
    }

    
    type Query{
        getAllBudgets: [Budget]
        getAllExpenses: [Expense]
        getPastExpenses: [Expense]
        getCurrentExpenses: [Expense]
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
        getAllBudgets:()=>getAppModule().budgetController.getAllBudgets(),
        getAllExpenses:()=>getAppModule().expenseController.getAllExpenses(),
        getPastExpenses:()=>getAppModule().expenseController.getPastExpenses(),
        getCurrentExpenses:()=>getAppModule().expenseController.getCurrentExpenses(),
    },
    Mutation:{
        createBudget:async(_: any, {input}:{input:CreateBudget})=>{
            return await getAppModule().budgetController.createBudget(input)
        },
        deleteBudget:async(_: any, {input}:{input:DeleteBudget})=>{
            return await getAppModule().budgetController.deleteBudget(input.category)
        },
        updateBudget:async(_: any, {input}:{input:UpdateBudget})=>{
            return await getAppModule().budgetController.updateBudget(input)
        },
        createExpense:async(_: any, {input}:{input:CreateExpense})=>{
            return await getAppModule().expenseController.createExpense(input)
        },
    }
}