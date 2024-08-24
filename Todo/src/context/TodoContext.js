import React, { createContext } from "react";
import { useContext } from "react";

const TodoContext = React.createContext({
  todo: [
    {
      id: 1,
      todoContent: "hello",
      check: false,
    },
  ],
  addTodo: (todoContent) => {},
  updateTodo: (id, todoContent) => {},
  deleteTodo: (id) => {},
  toggleTodo: (id) => {},
});

//  this method is invalid because it usecontext  is hook and hook always use in function
//  export const useTodo =  useContext(TodoContext);

export const useTodo = () => useContext(TodoContext);

export default TodoContext;

export const TodoProvider = TodoContext.Provider;
