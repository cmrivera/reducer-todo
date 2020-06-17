import React, { useState } from "react";

const TodoForm = ({ addNewTodo }) => {
  const [newTodoItem, setNewTodoItem] = useState("");

  const handleChanges = (e) => {
    setNewTodoItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewTodo(newTodoItem);
    setNewTodoItem("");
  };

  console.log(newTodoItem);

  return (
    <div>
      <p>Todo Form</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="newTodo"
          placeholder=" Add new Todo"
          value={newTodoItem}
          onChange={handleChanges}
        />
        <button type="Submit"> Add New Todo</button>
      </form>
    </div>
  );
};
export default TodoForm;
