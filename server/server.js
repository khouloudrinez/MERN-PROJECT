const express = require ('express') ; 
const cors = require ('cors') ;
require('dotenv').config();

const connectDB = require('./config/db'); 
const app= express() ;

//routes
 const todo = require('./routes/todo');
 const user= require('./routes/user')
 

// connect database
connectDB();

app.use(express.json()) ;
app.use(cors());

app.use('/api',todo);
app.use('/api/user',user);

// app.get("/", (req, res) => res.send("Server running"));




//setting up the port
const PORT = process.env.PORT || 3000;








app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});