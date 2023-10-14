import React, { useState } from "react";
import axios from "axios";
import '../App.css' ;

function Update({ task }) {
  const [updatedTitle, setUpdatedTitle] = useState(task.title);

  const handleUpdate = () => {
    axios
      .put(`http://localhost:3000/api/${task._id}`, { title: updatedTitle })
      .then((response) => {
        console.log("Task updated successfully:", response.data);
      });
  };

  return (
    <form onSubmit={handleUpdate} className="TodoForm">
    <input
      type="text"
      value={updatedTitle}
      onChange={(e) => setUpdatedTitle(e.target.value)}
      className="todo-input"
    />
    <button type="submit" className="todo-btn">Update Task</button>
  </form>
  );
}

export default Update;
