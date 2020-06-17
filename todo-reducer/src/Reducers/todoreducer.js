import React from "react";

export const initialTodoState = {
  item: "Learn about reducers",
  completed: false,
  id: 3892987589,
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "Todo_List":
      return { ...state, item: !state.item };
    case "Todo_Completed":
      return { ...state, completed: action.payload, completed: false };
    default:
      return state;
  }
};
