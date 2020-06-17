import React, { useReducer } from "react";
import { todoReducer, initialTodoState } from "./Reducers/todoReducer";
import "./App.css";
import TodoList from "./Components/todoList";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialTodoState);
  console.log("initialTodoState", state);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Chris Reducer Todo App</h1>
        <TodoList todos={state.todos} />
      </header>
    </div>
  );
}

export default App;
