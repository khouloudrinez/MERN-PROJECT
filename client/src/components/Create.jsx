import React from "react";
import { useState } from "react";
import axios from "axios";
import '../App.css' ; 

function Create() {

  const [addTask, setAddTask]= useState('');

  const handleInputChange = (e) => {
    setAddTask(e.target.value);
  };

  const newTask = () => {
    axios.post('http://localhost:3000/api', {
      title: addTask,
      completed: false
    })  
    .then((response) => {
      console.log(response.data);
      // Clear the input field after adding the task
      setAddTask('');
    })
   
  }
  return (
    <form onSubmit={newTask} className="TodoForm">
    <input
      type="text"
      value={addTask}
      onChange={handleInputChange}
      className="todo-input"
      placeholder="Add new task..."
    />
    <button type="submit" className="todo-btn">Add Task</button>
  </form>
  );
}

export default Create;
