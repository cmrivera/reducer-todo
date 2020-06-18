import React from "react";

const Todo = (props) => {
  console.log("props of the todos", props);

  return (
    <div onClick={() => props.toggleTodo(props.id)}>
      <h3>
        {props.name ? <i className="todo"></i> : <i className="todo"></i>}
        {props.name}
      </h3>
      <p>{props.status ? "Completed" : "Incomplete"} </p>
    </div>
  );
};
export default Todo;
