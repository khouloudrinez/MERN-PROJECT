import React from "react";
import Create from "./Create";
import Update from "./Update";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import '../App.css' ;
import { useNavigate } from 'react-router-dom';
function Home() {
  const [task, setTask] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const navigate = useNavigate(); 

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
  const handleLogout = () => {
    // Clear any authentication token or user session data here
    // For example, you can remove the token from local storage
    localStorage.removeItem('token');
    // Navigate the user back to the login page
    navigate('/login');
  };
  
     
  return (
    <div className="TodoWrapper"> 
    <button onClick={handleLogout} className="logout-button">
    Logout
  </button>
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