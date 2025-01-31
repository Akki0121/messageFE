import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  const checkAuth = async () => {
    try {
      const loggedInUser = await API.get("/verify");
      setUser(loggedInUser.data);
    } catch {
      setUser(null);
    }
  };

  const login = async () => {
    try {
      const userData = await API.get("/verify");
      setUser(userData);
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    }
  };

  const userProfile = async () => {
    try {
      const userData = await API.get("/user/profile/" + user.id);
      setUserData(userData.data);
    } catch (err) {
      alert(err.response?.data?.error || "Profile failed");
    }
  };
  const logout = () => {
    setUser(null);
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider
      value={{ user, userData, checkAuth, login, userProfile, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
