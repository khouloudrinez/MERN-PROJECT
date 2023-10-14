// defining the end points 
const express= require('express');
const router= express.Router();
const {
    getAllTodos,
     createTodo,
     updateTodo,
     deleteTodo
} = require('../controllers/todo')

// get all tasks
router.get('/', getAllTodos);

// add a new task 

router.post('/',createTodo);

//update tasks

router.put('/:id', updateTodo);

// delete tasks

router.delete('/:id', deleteTodo);

module.exports = router;