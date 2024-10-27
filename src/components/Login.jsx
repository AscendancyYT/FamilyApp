import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (role) {
      localStorage.setItem('userRole', role); // Save role to localStorage
      onLogin(role);
      navigate('/dashboard'); // Redirect to dashboard after setting role
    } else {
      alert('Please select a role before logging in');
    }
  };

  return (
    <div className="container login">
      <h2>Login</h2>
      <select onChange={(e) => setRole(e.target.value)}>
        <option value="">Select Role</option>
        <option value="mom">Mom</option>
        <option value="dad">Dad</option>
        <option value="child">Child</option>
      </select>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
