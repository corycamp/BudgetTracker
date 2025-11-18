import { ApolloServer } from "@apollo/server";
import {AppModule} from "../appModule/AppModule"
import { provideAppModule } from "../appModule/provider"
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { resolvers, typeDefs } from "./schema";

const appModule = new AppModule();
await appModule.init();
provideAppModule(appModule);

const apolloServer = new ApolloServer({
    typeDefs, resolvers,
})
export const handler = startServerAndCreateNextHandler(apolloServer);