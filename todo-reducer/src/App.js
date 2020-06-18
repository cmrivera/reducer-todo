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
    dispatch({
      type: "Add_New_Todo",
      payload: newTodoItem,
    });
  };

  const toggleTodo = (clickedTodoId) => {
    dispatch({
      type: "Toggle_Todo_Complete",
      payload: clickedTodoId,
    });
  };
  const filterTodos = () => {
    dispatch({
      type: "Filter_Completed_Todos",
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Chris Reducer Todo App</h1>
        <TodoForm addNewTodo={addNewTodo} filterTodos={filterTodos} />
        <TodoList todos={state.todos} toggleTodo={toggleTodo} />
      </header>
    </div>
  );
}

export default App;
