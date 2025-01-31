import { useState } from "react";
import API from "../../services/api";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "Student",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/user/register", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        role: "Student",
      });
      // await registerService(formData);
      alert("Registration successful!");
    } catch (err) {
      alert(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <>
      <div className="flex justify-center items-center text-center max-w-screen h-screen">
        <form onSubmit={handleSubmit} className="form bg-slate-300 flex flex-col w-2/6 gap-4 p-10 rounded-lg ">
          <h2 className="text-4xl font-semibold">Register</h2>
          <input
            type="text"
            className="rounded-md w-full outline-none px-2 py-1"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            className="rounded-md w-full outline-none px-2 py-1"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <input
            type="tel"
            className="rounded-md w-full outline-none px-2 py-1"
            placeholder="Phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
          <select
            value={formData.role}
            className="rounded-md w-full outline-none px-2 py-1"
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          >
            <option value="Student">Student</option>
            <option value="Admin">Admin</option>
            {/* <option value="Institute">Institute</option> */}
          </select>
          <input
            type="password"
            className="rounded-md w-full outline-none px-2 py-1"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <button
          className="bg-blue-600 rounded-md px-4 py-0.5 text-lg font-normal" 
          type="submit">Register</button>
        </form>
      </div>
    </>
  );
};

export default Register;
