// pages/LoginPage.js
import { useState } from 'react';
import '../App.css'; 

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Retrieve the password for the username from localStorage
    const storedPassword = localStorage.getItem(username);
    
    // Check if username exists and password matches
    if (storedPassword && storedPassword === password) {
      alert('Login successfully!');
      // Redirect to another page or perform any other action here
    } else {
      alert("Username doesn't exist or password is incorrect");
    }
    
    // Clear input fields
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
