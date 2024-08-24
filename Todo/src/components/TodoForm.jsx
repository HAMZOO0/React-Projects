import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoForm() {
  // individual todo
  const [todoContent, setTodoContent] = useState("");

  //  context
  const { addTodo } = useTodo();

  // function to run when form is submitted
  const add = (e) => {
    e.preventDefault();
    if (!todoContent) {
      return;
    }

    // passing object
    addTodo({ todoContent, check: false });
    setTodoContent(""); // reset it
  };

  return (
    <form
      className="flex"
      onSubmit={add}
      value={todoContent}
      onChange={(e) => setTodoContent(e.target.value)}
    >
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
