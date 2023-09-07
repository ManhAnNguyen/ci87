import React from "react";

const TodoItem = ({ todo, handleChange, handleDelete }) => {
  const { id, userId, title, completed } = todo;
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleChange(id)}
      />
      <p className="user-id">{userId}</p>
      <p className="title">{title}</p>
      <p className="status">{completed ? "Done" : "Not complete"}</p>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
