const { createYoga, createSchema } = require("graphql-yoga");
const { createServer } = require("node:http");

const messages = [];

const subscribers = [];

const yoga = createYoga({
  schema: createSchema({
    typeDefs: `
        type Messages {
            id: ID!
            user: String!
            content: String!
        }

        type Query {
            messages: [Messages!]
        }

        type Mutation {
            postMessage(user: String!, content: String!): ID!
        }
    `,

    resolvers: {
      Query: {
        messages: () => messages,
      },
      Mutation: {
        postMessage: (parent, { user, content }) => {
          const id = messages.length;
          messages.push({
            id,
            user,
            content,
          });
          return id;
        },
      },
    },
  }),
});

const port = 4000;

const server = createServer(yoga);
server.listen(port, () => {
  console.log(`Server on http://localhost:${port}`);
});
