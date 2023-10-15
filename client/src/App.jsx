import React from 'react';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      < Home />
    </div>
  );
}
export default App;
// import React, { useState } from 'react';
// import { Route, Routes, Link, useNavigate } from 'react-router-dom';
// import Home from './components/Home';
// import Create from './components/Create';
// import Update from './components/Update';
// import Registration from './components/Registration';

// function App() {
//   const [loggedInUser, setLoggedInUser] = useState(null);
//   const navigate = useNavigate();

//   const handleRegister = (username) => {
//     setLoggedInUser(username);
//     navigate('/');
//   };

//   const handleLogout = () => {
//     setLoggedInUser(null);
//     navigate('/');
//   };

//   return (
//     <div className="App">
//       <nav>
//         <ul>
//           {loggedInUser ? (
//             <>
//               <li>Welcome, {loggedInUser}!</li>
//               <li>
//                 <button onClick={handleLogout} className="logout-button">
//                   Logout
//                 </button>
//               </li>
//               <li>
//                 <Link to="/create">Create Task</Link>
//               </li>
//             </>
//           ) : (
//             <li>
//               <Link to="/registration">Register</Link>
//             </li>
//           )}
//         </ul>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/create" element={<Create />} />
//         <Route path="/update/:taskId" element={<Update />} />
//         <Route path="/registration" element={<Registration onRegister={handleRegister} />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
