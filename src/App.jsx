import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Users from "./pages/User";
import Messages from "./pages/Message";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const App = () => {
  const {checkAuth} = useContext(AuthContext);
  const auth = checkAuth();

  if (auth.loading) {
    return <p>Loading...</p>;
  }
  return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/users" element={<Users />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
  );
};

export default App;
