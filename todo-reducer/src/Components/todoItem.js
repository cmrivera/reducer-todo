import React from "react";

const Todo = (props) => {
  console.log("props of the todos", props);

  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.status ? "completed" : "Incomplete"} </p>
    </div>
  );
};
export default Todo;
