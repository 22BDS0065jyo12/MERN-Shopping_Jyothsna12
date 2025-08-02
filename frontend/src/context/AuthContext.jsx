import React, { createContext, useState, useEffect } from 'react';

// Create the AuthContext
export const AuthContext = createContext();

// Create the AuthProvider to wrap your app and provide auth state
export const AuthProvider = ({ children }) => {
  // Store token and user info
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));

  // When token changes, update user info (you can decode token here if needed)
  useEffect(() => {
    if (token) {
      setUser({ token }); // For now just store token; you can extend this to decode JWT
    } else {
      setUser(null);
    }
  }, [token]);

  // Login function saves token in localStorage and state
  const login = (token) => {
    localStorage.setItem('token', token);
    setToken(token);
  };

  // Logout clears everything
  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  // Provide context values to children
  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
