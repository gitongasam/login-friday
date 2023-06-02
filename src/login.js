import React, { useState, useContext } from 'react';

// Create the ThemeContext
const ThemeContext = React.createContext();

// LoginForm component
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage('Please enter both email and password.');
    } else {
      setErrorMessage('');
      // Perform login logic here
    }
  };

  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ backgroundColor: theme.background, color: theme.color }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ backgroundColor: theme.background, color: theme.color }}
          />
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <button type="submit">Login</button>
        </form>
      )}
    </ThemeContext.Consumer>
  );
};

// Example usage
const App = () => {
  const theme = {
    background: 'white',
    color: 'black',
  };

  return (
    <ThemeContext.Provider value={theme}>
      <LoginForm />
    </ThemeContext.Provider>
  );
};

export default App;
