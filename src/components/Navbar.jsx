import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const setLogout = async () => {
    try {
      await API.post("/user/logout");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <nav className="flex bg-black justify-between items-center p-4 text-white">
      <Link to="/">Home</Link>
      {user ? (
        <>
          <Link to="/users">Users</Link>
          <Link to="/messages">Messages</Link>
          <Link to="/profile">Profile</Link>
          <button onClick={setLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
