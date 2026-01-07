// context/AuthContext.jsx
import { createContext, useState, useEffect } from "react";
import { getToken, saveToken, removeToken } from "../utils/storage";
import { fetchUserProfile } from "../api/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(getToken());
  const [user, setUser] = useState(null);

  useEffect(() => {
    const initAuth = async () => {
      if (token) {
        saveToken(token);
        try {
          // Fetch user profile to ensure data persistence
          const userData = await fetchUserProfile(token);
          console.log("Fetched User Data:", userData);
          // Handle response structure (userData or userData.user)
          setUser(userData.user || userData);
        } catch (error) {
          console.error("Failed to fetch user profile:", error);
          // Token is likely invalid or expired
          removeToken();
          setToken(null);
        }
      } else {
        removeToken();
        setUser(null);
      }
    };

    initAuth();
  }, [token]);

  const login = (token, userData) => {
    setToken(token);
    setUser(userData);
  };

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
