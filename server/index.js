/* eslint-disable import/extensions */
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import schema from './schema/index.js';
import resolvers from './resolvers/index.js';
import db from './models/index.js';

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: { db },
});

await server.start();

const app = express();
app.use(cors());
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
