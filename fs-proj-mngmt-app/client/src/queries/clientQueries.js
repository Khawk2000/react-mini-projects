import { gql } from "@apollo/client";

const GET_CLIENTS = gql`
  query getClients($userId: ID!) {
    clients(userId: $userId) {
      id
      name
      email
      phone
      user {
        id
        firstname
        lastname
        email
      }
    }
  }
`;

export { GET_CLIENTS };
