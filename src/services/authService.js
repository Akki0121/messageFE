import API from "./api";

export const loginService = async (email, password) => {
  const { data } = await API.post("/user/login", { email, password });
  return data;
};

export const registerService = async (formData) => {
  const { name } = formData.name;
  const { email } = formData.email;
  const { phone } = formData.phone;
  const { password } = formData.password;
  const { role } = formData.role;
  const { data } = await API.post("user/register", {
    name,
    email,
    phone,
    password,
    role,
  });
  return data;
};

export const verifyToken = async () => {
  const { data } = await API.get("/auth/verify");
  return data;
};
