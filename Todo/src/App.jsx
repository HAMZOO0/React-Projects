import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { TodoProvider } from "./context/TodoContext";

function App() {
  const [todo, setTodo] = useState([]);

  const addTodo = (todo) => {
    setTodo((prev_todo_Array) => [
      ...prev_todo_Array,
      { id: Date.now(), ...todo },
    ]);
  };

  const updateTodo = (id, todo) => {
    setTodo((prev_todo_Array) =>
      prev_todo_Array.map((current_todo) =>
        current_todo.id === id ? todo : current_todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodo((prev_todo_Array) =>
      prev_todo_Array.filter((current_todo) => current_todo.id !== id)
    );
  };

  const toggleTodo = (id) => {
    setTodo((prev_todo_Array) =>
      prev_todo_Array.map((current_todo) =>
        current_todo.id === id
          ? { ...current_todo, check: !current_todo.check }
          : current_todo
      )
    );
  };

  useEffect(() => {
    const local_todo = JSON.parse(window.localStorage.getItem("todo"));
    if (local_todo && local_todo.length > 0) {
      setTodo(local_todo);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return (
    <TodoProvider value={{ todo, addTodo, updateTodo, deleteTodo, toggleTodo }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todo.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
