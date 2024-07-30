import { gql } from "@apollo/client";

const GET_USER = gql`
  query getUser($userId: ID!) {
    user(userId: $userId) {
      id
      firstname
      lastname
      email
    }
  }
`;

export { GET_USER };
