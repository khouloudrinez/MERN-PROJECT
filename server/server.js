const express = require ('express') ; 
const cors = require ('cors') ;
require('dotenv').config();

const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env; 


const connectDB = require('./config/db'); 

// const Todo= require('./models/todo')
const app= express() ;

//routes
 const todo = require('./routes/todo');

// connect database
connectDB();

app.use(express.json()) ;
app.use(cors());

app.use('/api',todo);

// app.get("/", (req, res) => res.send("Server running"));




//setting up the port
const PORT = process.env.PORT || 3000;








app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});