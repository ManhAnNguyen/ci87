import React, { useState } from "react";
import data from "./data.json";
import "./app.css";
import TodoItem from "./components/TodoItem";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [todos, setTodos] = useState(data);

  const handleChange = (id) => {
    setTodos([
      ...todos.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      ),
    ]);
    toast.success("Success");
  };

  const handleDelete = (id) => {
    setTodos([...todos.filter((item) => item.id !== id)]);
    toast.success("Remove success");
  };
  return (
    <>
      <div className="todolist">
        {todos.map((todo, index) => {
          return (
            <TodoItem
              todo={todo}
              key={index}
              handleChange={handleChange}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
      <ToastContainer />
    </>
  );
};

export default App;
