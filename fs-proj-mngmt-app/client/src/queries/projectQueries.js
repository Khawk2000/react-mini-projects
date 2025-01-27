import { gql } from "@apollo/client";

const GET_PROJECTS = gql`
  query getProjects($clientIds: [ID!]!) {
    projects(clientIds: $clientIds) {
      id
      name
      status
    }
  }
`;

const GET_PROJECT = gql`
  query getProject($id: ID!) {
    project(id: $id) {
      id
      name
      status
      description
      client {
        id
        name
        email
        phone
      }
    }
  }
`;

export { GET_PROJECTS, GET_PROJECT };
