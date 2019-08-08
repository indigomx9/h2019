import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./graphql/schema";
import { resolvers } from "./graphql/resolvers";

const main = async () => {
    const app: express.Application = await express();
    const server = new ApolloServer({ typeDefs, resolvers });
    server.applyMiddleware({ app });
    
    const port = process.env.PORT || 9000;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
        console.log(`Press Ctrl + C to exit.`);
    })
};

main();

