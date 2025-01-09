import API from "./api";

export const getUsers = async () => {
  const { data } = await API.get("/users");
  return data;
};

export const deleteUser = async (id) => {
  await API.delete(`/users/${id}`);
};
