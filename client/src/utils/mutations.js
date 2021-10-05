import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_FOOD = gql`
  mutation saveFood($content: foodData!) {
    saveFood(content: $content) {
      _id
      username
      savedFood {
        idMeal
        strMeal
      }
    }
  }
`;

export const REMOVE_FOOD = gql`
  mutation removeFood($idMeal: String!) {
    removeFood(idMeal: $idMeal) {
      _id
      username
      savedFood {
        idMeal
        strMeal
      }
    }
  }
`;
