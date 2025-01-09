import { useState } from "react";
import { createUser } from "../../services/userService";

const UserForm = ({ onUserAdded }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Student",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = await createUser(formData);
      onUserAdded(newUser);
      setFormData({ name: "", email: "", phone: "", role: "Student" });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Add New User</h2>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="tel"
        placeholder="Phone"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />
      <select
        value={formData.role}
        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
      >
        <option value="Student">Student</option>
        <option value="Teacher">Teacher</option>
        <option value="Institute">Institute</option>
      </select>
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
