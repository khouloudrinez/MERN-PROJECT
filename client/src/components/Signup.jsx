import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import '../App.css' ;

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/user/signup', {
        email,
        password,
      });
      // If signup is successful, navigate to a different page
      if (response.data.token) {
        navigate('/login'); 
      } else {
        setError('Signup failed. Please try again.');
      }
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  return (
    <div className="TodoWrapper">
      <h2>Signup</h2>
      <form className="TodoForm">
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="todo-input" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="todo-input" />
        </div>
        <button type="button" onClick={handleSignup} className="todo-btn">
          Signup
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Signup;



