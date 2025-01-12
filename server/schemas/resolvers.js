const { User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );
        return userData;
      }
      throw new AuthenticationError("Login Required");
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      console.log(args);
      const user = await User.create(args);
      // add try catch block and console log error
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      console.log(email)
      if (!user) {
        throw new AuthenticationError("Incorrect Email. Try Again!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect Password. Try Again!");
      }

      const token = signToken(user);
      return { token, user };
    },
    saveFood: async (parent, { savedFood }, context) => {
      if (context.user) {
        const user = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedFood: savedFood } },
          { new: true }
        );
        return user;
      }
      throw new AuthenticationError("You Need To Login!");
    },
    removeFood: async (parent, { idMeal }, context) => {
      if (context.user) {
        const user = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { savedFood: {idMeal: idMeal } } },
          { new: true }
        );
        return user;
      }
      throw new AuthenticationError("Login to do that!!!")
    },
  },
};

module.exports = resolvers;
