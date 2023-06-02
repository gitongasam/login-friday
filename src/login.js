import React, { useState, useContext } from 'react';
import './LoginForm.css';

// ThemeContext
const ThemeContext = React.createContext();

// LoginForm component
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [theme, setTheme] = useState('light');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      setError('Please fill in all fields.');
    } else {
      // Perform login or further processing
      // Here, we'll just clear the form inputs
      setEmail('');
      setPassword('');
      setError('');
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`login-form ${theme}`}>
        <button onClick={toggleTheme} className="theme-button">
          Toggle Theme
        </button>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="error">{error}</p>}
          <button type="submit">Submit</button>
        </form>
      </div>
    </ThemeContext.Provider>
  );
};

export default LoginForm;
