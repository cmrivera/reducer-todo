import React from "react";

import "./App.css";
import TodoList from "./Components/todoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chris Reducer Todo App</h1>
        <TodoList />
      </header>
    </div>
  );
}

export default App;
