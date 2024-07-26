import { gql } from "@apollo/client";

const SIGNUP_USER = gql`
  mutation signupUser(
    $firstname: String!
    $lastname: String!
    $email: String!
    $password: String!
  ) {
    signupUser(
      firstname: $firstname
      lastname: $lastname
      email: $email
      password: $password
    ) {
      user {
        id
        firstname
        lastname
        email
      }
      token
    }
  }
`;

export { SIGNUP_USER };
