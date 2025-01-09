import API from "./api";

export const getMessages = async () => {
  const { data } = await API.get("/messages");
  return data;
};

export const sendMessage = async (content) => {
  const { data } = await API.post("/messages", { content });
  return data;
};
