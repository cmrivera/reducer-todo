import React from "react";

export const initialTodoState = {
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 1,
    },
    {
      item: "Add Reducer",
      completed: false,
      id: 2,
    },
    {
      item: "aadd todos",
      completed: false,
      id: 3,
    },
    {
      item: "finish project",
      completed: false,
      id: 4,
    },
  ],
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
