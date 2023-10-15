// import React, { useState } from 'react';

// function Registration({ onRegister }) {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [repeatPassword, setRepeatPassword] = useState('');

//   const handleRegister = () => {
//     // Add validation for password match
//     if (password !== repeatPassword) {
//       alert('Passwords do not match');
//       return;
//     }

//     // Simulate user registration by storing data in local storage
//     localStorage.setItem('username', username);
//     localStorage.setItem('email', email);
//     localStorage.setItem('password', password);

//     onRegister(username);
//   };

//   return (
//     <div className="TodoWrapper">
//       <h2>Sign-Up</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         className="todo-input"
//       />
//       <input
//         type="text"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         className="todo-input"
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         className="todo-input"
//       />
//       <input
//         type="password"
//         placeholder="Repeat Password"
//         value={repeatPassword}
//         onChange={(e) => setRepeatPassword(e.target.value)}
//         className="todo-input"
//       />
//       <button onClick={handleRegister} className="todo-btn">Register</button>
//     </div>
//   );
// }

// export default Registration;
