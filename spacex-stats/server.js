var express = require("express");
var { createHandler } = require("graphql-http/lib/use/express");
var { buildSchema } = require("graphql");
var { ruruHTML } = require("ruru/server");
const axios = require("axios");

var schema = buildSchema(`
    type Cores {
    core: String,
    flight: Int,
    landing_success: Boolean
    }

    type Launch {
    id: String,
    flight_number: Int,
    name: String,
    date_local: String,
    success: Boolean,
    cores: [Cores]
    }

    type Query {
    launches: [Launch]
    launch(id: String): Launch
    }

`);

function getLaunches(args) {
  return axios
    .get("https://api.spacexdata.com/v5/launches")
    .then((res) => res.data);
}

function getLaunch(args) {
  return axios
    .get(`https://api.spacexdata.com/v5/launches/${args.id}`)
    .then((res) => res.data);
}

const root = {
    launches: getLaunches,
    launch: getLaunch
};

var app = express();

// Serve the GraphiQL IDE.
app.get("/", (_req, res) => {
  res.type("html");
  res.end(ruruHTML({ endpoint: "/graphql" }));
});

// Create and use the GraphQL handler.
app.all(
  "/graphql",
  createHandler({
    schema: schema,
    rootValue: root,
  })
);

// Start the server at port
app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
