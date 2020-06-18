import React from "react";
import Todo from "./todoItem";

const TodoList = (props) => {
  console.log("todo list with props", props);

  return (
    <div className="todo-list">
      <h2> Need to Complete: </h2>
      {props.todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            name={todo.item}
            status={todo.completed}
            toggleTodo={props.toggleTodo}
          />
        );
      })}
    </div>
  );
};
export default TodoList;
