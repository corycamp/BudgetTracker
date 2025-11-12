import {gql} from "graphql-tag"
import { getAppModule } from "../appModule/provider";

export const typeDefs = gql`
    type Budget{
        category: String
        limit: Number
    }

    type Query{
        getAllBudgets: [Budget]
    }
`;

export const resolvers = {
    Query:{
        getAllBudgets:()=>getAppModule().budgetService.getAllBudgets()
    }
}