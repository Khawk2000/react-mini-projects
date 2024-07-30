import { gql } from "@apollo/client";

const ADD_CLIENT = gql`
  mutation addClient(
    $name: String!
    $email: String!
    $phone: String!
    $userId: ID!
  ) {
    addClient(name: $name, email: $email, phone: $phone, userId: $userId) {
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

const DEL_CLIENT = gql`
  mutation deleteClient($id: ID!) {
    deleteClient(id: $id) {
      id
      name
      email
      phone
    }
  }
`;

export { DEL_CLIENT, ADD_CLIENT };
