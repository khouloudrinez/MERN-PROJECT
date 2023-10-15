import React from "react";
import Create from "./Create";
import Update from "./Update";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import '../App.css' ;
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

  const handleToggleCompleted = (id) => {
    axios
      .put(`http://localhost:3000/api/${id}`, {
        completed: !task.find((t) => t._id === id).completed,
      })
      .then((response) => {
        console.log("Task updated successfully: ", response.data);
        setTask((tasks) =>
          tasks.map((task) =>
            task._id === id ? { ...task, completed: !task.completed } : task
          )
        );
      });
  };
  return (
    <div className="TodoWrapper">
      <h1>Get Things Done !</h1>
      <Create />

      <ul>
        {task.map((task) => (
          <div key={task._id} className="Todo">

            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleCompleted(task._id)}
            />
            <p className={task.completed ? 'completed' : 'incompleted'}>{task.title}</p>
            <FaEdit onClick={() => setSelectedTask(task)} className="edit-icon" />
            <FaTrash onClick={() => handleDelete(task._id)} className="delete-icon"/>
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