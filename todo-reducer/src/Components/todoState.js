import React, { useState, useReducer } from "react";

import { initialTodoState, todoReducer } from "./Reducers/todoReducer";

const Todo = () => {
  const [newTodoItem, setNewTodoItem] = useState("");
  const [todoList, setTodoList] = useState("");

  const [state, dispatch] = useReducer(todoReducer, initialTodoState);

  const handleChanges = (e) => {
    setNewTodoItem(e.target.value);
  };
  const todoList = (e) => {
    setTodoList(todoList, e.todo.item);
  };
};
