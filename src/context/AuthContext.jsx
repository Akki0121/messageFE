import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { verifyToken } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const loggedInUser = await verifyToken();
        setUser(loggedInUser);
      } catch {
        setUser(null);
      }
    };
    checkAuth();
  }, []);

  const login = (userData) => {
    setUser(userData);
    navigate("/");
  };

  const logout = () => {
    setUser(null);
    document.cookie = "authToken=; Max-Age=0"; // Clear the cookie
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
