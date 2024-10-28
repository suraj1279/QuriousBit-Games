import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/form.css';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify({ email, password })); 
    navigate('/login');
  };

  return (
    <form className="form-container" onSubmit={handleSignup}>
      <h2 className="form-title">Signup</h2>
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
      <button type="submit" className="btn">Signup</button>
      <p className="login-link">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </form>
  );
};

export default SignupForm;
