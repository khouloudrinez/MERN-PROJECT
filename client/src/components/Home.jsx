import React from "react";
import Create from "./Create";
import Update from "./Update";
import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [task, setTask] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/api')
      .then((response) => {
        setTask(response.data);
      });
  }, []);

  

  
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/api/${id}`)
      .then((response) => {
        console.log("Task deleted successfully: ", response.data);
        // Update the task list after deletion
        setTask(task.filter((task) => task._id !== id));
      })
      .catch((error) => {
        console.error("Error deleting task: ", error);
      });
  };
  return (
    <div>
      <h2>MY TASKS</h2>
      <Create />

      <ul>
        {task.map((task) => (
          <div key={task._id}>
            {task.title}
            <button onClick={() => setSelectedTask(task)}>Update</button>
            <button onClick={() => handleDelete(task._id)}> Delete</button>
          </div>
        ))}
      </ul>

      {selectedTask && (
        <Update task={selectedTask} />
      )}
    </div>
  );
}

export default Home;
