import React, { createContext, useContext, useState, useEffect } from 'react';

// 1️⃣ Context Creation
const AuthContext = createContext();

// 2️⃣ Context Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);        // user info
  const [token, setToken] = useState(null);      // JWT token

  // 3️⃣ Page refresh 
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // 4️⃣ Login 
  const login = (token, user) => {
    setToken(token);
    setUser(user);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  };

  // 5️⃣ Logout
  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 6️⃣ Custom hook - context
export const useAuth = () => useContext(AuthContext);