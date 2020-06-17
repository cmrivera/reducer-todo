import React from "react";

export const initialTodoState = {
  item: "Learn about reducers",
  completed: false,
  id: 3892987589,
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "Todo_Complete":
      return { ...state, completed: !state.completed };
    case "Add_Todo":
      return { ...state, item: action.payload, completed: false };
    default:
      return state;
  }
};
