export const initialTodoState = {
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 1,
    },
    {
      item: "Add Reducer",
      completed: false,
      id: 2,
    },
    {
      item: "aadd todos",
      completed: false,
      id: 3,
    },
    {
      item: "finish project",
      completed: false,
      id: 4,
    },
  ],
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "Add_New_Todo":
      const newTodo = {
        item: action.payload,
        completed: false,
        id: Date.now(),
      };
      return { ...state, todos: [...state.todos, newTodo] };

    case "Toggle_Todo_Complete":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return {
            ...todo,
          };
        }),
      };
    case "Filter_Completed_Todos":
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.completed),
      };

    default:
      return state;
  }
};
