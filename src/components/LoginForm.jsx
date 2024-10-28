import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/form.css';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));
    
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      console.log('Logged in successfully');
      onLogin(); 
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <form className="form-container" onSubmit={handleLogin}>
      <h2 className="form-title">Login</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" className="btn">Login</button>
    </form>
  );
};

export default LoginForm;
