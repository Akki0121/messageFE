import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import API from "../../services/api";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await API.post("/user/login", {
        email: formData.email,
        password: formData.password,
      });
      console.log(userData);
      login();
      window.location.href = "/";
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <>
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="form flex flex-col gap-5 w-2/6 items-center bg-slate-300 p-10 rounded-3xl">
        <h2 className="text-4xl font-semibold">Hey User!</h2>
        <input
          type="email"
          className="rounded-md w-full outline-none px-2 py-1"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="password"
          className="rounded-md w-full outline-none px-2 py-1"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <button className="bg-blue-600 rounded-md px-4 py-0.5 text-lg font-normal" type="submit">Login</button>
      </form>
    </div>
    </>
  );
};

export default Login;
