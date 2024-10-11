// pages/LoginPage.js
import { useState } from 'react';
import logo from '../assets/logo/amygdala_logo-crop.jpg';
import '../App.css'; 


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
   
    const storedPassword = localStorage.getItem(username);
    
  
    if (storedPassword && storedPassword === password) {
      alert('Login successfully!');
    
    } else {
      alert("Username doesn't exist or password is incorrect");
    }
    
 
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-page">
     
      <img src={logo}  alt="Amygdala - Healing Starts Here" className="logo" />
      <h2>Welcome Back!!</h2>
      <form onSubmit={handleSubmit} className="login-wrap">
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            placeholder='username'
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
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className='button-container'>
        <button type="submit">Login</button>
        </div>
        <a href="/SignUpPage" className='signup'>Sign Up</a>
      </form>
    </div>
  );
};

export default LoginPage;

