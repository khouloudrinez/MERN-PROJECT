import React, { useState } from "react";
import axios from "axios";

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
    <div>
      <input
        type="text"
        value={updatedTitle}
        onChange={(e) => setUpdatedTitle(e.target.value)}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default Update;
