import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import '../App.css' ;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/user/login', {
        email,
        password,
      });
      // If login is successful, navigate to a different page
      if (response.data.token) {
        navigate('/home'); 
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } catch (error) {
        setError(error.response.data.error);
    }
  };

  return (
    <div className="TodoWrapper">
      <h2>Login</h2>
      <form className="TodoForm">
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="todo-input" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="todo-input" />
        </div>
        <button type="button" onClick={handleLogin} className="todo-btn">
          Login
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
