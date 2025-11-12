import { ApolloServer } from "@apollo/server";
import {AppModule} from "../appModule/appModule"
import { provideAppModule } from "../appModule/provider"
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { resolvers, typeDefs } from "./schema";

provideAppModule(new AppModule());

const apolloServer = new ApolloServer({
    typeDefs, resolvers
})
export const handler = startServerAndCreateNextHandler(apolloServer);