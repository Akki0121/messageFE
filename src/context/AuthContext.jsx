import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

 
    const checkAuth = async () => {
      try {
        const loggedInUser = await API.get("/verify");
        setUser(loggedInUser.data);
      } catch {
        setUser(null);
      }
    };
 

  const login = async() => {
    try {
      const userData = await API.get("/verify");
      setUser(userData);
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    }
  };

  const logout = () => {
    setUser(null);
    document.cookie = "authToken=; Max-Age=0"; // Clear the cookie
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, checkAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
