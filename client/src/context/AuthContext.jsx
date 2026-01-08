// context/AuthContext.jsx
import { createContext, useState, useEffect, useRef } from "react";
import { getToken, saveToken, removeToken } from "../utils/storage";
import { fetchUserProfile } from "../api/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(getToken());
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Track if user data was set via login() to skip redundant fetch
  const userDataFromLoginRef = useRef(null);

  useEffect(() => {
    const initAuth = async () => {
      if (token) {
        saveToken(token);

        // If we already have user data from login(), use it and skip fetch
        if (userDataFromLoginRef.current) {
          setUser(userDataFromLoginRef.current);
          userDataFromLoginRef.current = null;
          setLoading(false);
          return;
        }

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
      setLoading(false);
    };

    initAuth();
  }, [token]);

  const login = (newToken, userData) => {
    userDataFromLoginRef.current = userData; // Store user data to skip fetch
    saveToken(newToken); // Immediately persist to localStorage
    setToken(newToken);
    setUser(userData);
  };

  const logout = () => {
    removeToken();
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
