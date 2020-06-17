import React, { useReducer } from "react";
import { todoReducer, initialTodoState } from "./Reducers/todoReducer";
import "./App.css";
import TodoList from "./Components/todoList";
import TodoForm from "./Components/todoForm";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialTodoState);
  console.log("initialTodoState", state);

  const addNewTodo = (newTodoItem) => {
    //add dispatch code here when ready
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Chris Reducer Todo App</h1>
        <TodoForm addNewTodo={addNewTodo} />
        <TodoList todos={state.todos} />
      </header>
    </div>
  );
}

export default App;
