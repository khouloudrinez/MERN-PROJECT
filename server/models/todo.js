const mongoose = require('mongoose');

const TodoSchema= new mongoose.Schema({
    title : {
        type: String,
        required: true 
    } ,
    completed:{
        type : Boolean,
        required: false 
     }
});

const tasks= mongoose.model('tasks',TodoSchema)
module.exports = tasks ;