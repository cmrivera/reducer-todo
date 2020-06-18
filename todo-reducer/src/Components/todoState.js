import React, { useState, useReducer } from "react";

import { initialTodoState, todoReducer } from "./Reducers/todoReducer";

const TodoApp = () => {
  const [state, dispatch] = useReducer(todoReducer, initialTodoState);
  console.log("initialTodoState", state);
};
