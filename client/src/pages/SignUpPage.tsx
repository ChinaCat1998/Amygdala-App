// pages/SignupPage.js
import { useState } from 'react';
import logo from '../assets/logo/amygdala_logo.png';
import '../App.css'; 

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Save username and password to localStorage
    localStorage.setItem(username, password);
    alert('Signup successful! You can now log in.');
    
  
    setUsername('');
    setPassword('');
  };

  return (
  
    <div className="signup-page">
      <img src={logo}  alt="Logo" className="logo" />
      <h2>Welcome!!</h2>
      <form onSubmit={handleSignup}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className='button-container'>
        <button type="submit">Signup</button>
        </div>
      </form>
    </div>
   
  );
};

export default SignupPage;
