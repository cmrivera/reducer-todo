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
    default:
      return state;
  }
};
