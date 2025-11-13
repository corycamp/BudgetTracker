import {gql} from "graphql-tag"
import { getAppModule } from "../appModule/provider";

export const typeDefs = gql`
    type Budget{
        category: String
        limit: Float
    }

    type Query{
        test: String!
        getAllBudgets: [Budget]
    }
`;

export const resolvers = {
    Query:{
        getAllBudgets:()=>getAppModule().budgetController.getAllBudgets(),
    }
}