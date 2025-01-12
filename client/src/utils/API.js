// require('dotenv').config()
// const apiKey = process.env.REACT_APP_API_KEY;
export const getMe = (token) => {
  return fetch("/api/users/me", {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};

export const createUser = (userData) => {
  return fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

export const login = (userData) => {
  return fetch("/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

export const saveFood = (foodData, token) => {
  return fetch("/api/users", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(foodData),
  });
};

export const removeFood = (idMeal, token) => {
  return fetch(`/api/users/food/${idMeal}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

export const searchFoodApi = async (query) => {
  let results;
  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    .then((data) => data.json())
    .then(function (res) {
      console.log("res", res);
      results = res;
    });
  return results;
};
