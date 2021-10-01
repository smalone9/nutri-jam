const { gql } = require("apollo-server-express");

//type Food needs to be modified to API
const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
    foodCount: Int
    savedFood: [Food]
  }
  type Food {
    foodId: String
    recipe: String
    userId: String
    description: String
    image: String
  }
  type Query {
    me: User
  }
  input savedFoodInput {
    foodId: String
    recipe: String
    userId: String
    description: String
    image: String
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveFood(food: savedFoodInput): User
    removeFood(foodId: String!): User
  }
  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
