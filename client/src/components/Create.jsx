import React from "react";
import { useState } from "react";
import axios from "axios";

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
    <div>
      < input type="text"
      value= {addTask}
      onChange={handleInputChange}
      placeholder="Add new task.."/>
      <button type="button" onClick={newTask}> Add</button>
    </div>
  );
}

export default Create;
