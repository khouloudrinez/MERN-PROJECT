import React from 'react';
import { Routes, Route, BrowserRouter} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
        <BrowserRouter>
    <div className="App">
    <Routes> 
    <Route path='/' element={<Signup />}></Route>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/home' element={<Home />}></Route>




      </Routes>
    </div>
    </BrowserRouter>
  );
}
export default App;
