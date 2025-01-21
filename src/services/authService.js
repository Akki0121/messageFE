import API from "./api";


export const verifyToken = async () => {
  const { data } = await API.get("/verify");
  return data;
};
