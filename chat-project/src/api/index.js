import axios from "axios";

const myUrl = "http://localhost:5000";

const API = axios.create({ baseURL: myUrl });

//user
export const signIn = (formData) =>
  API.post("/users/login", formData, { withCredentials: true });
export const signUp = (formData) =>
  API.post("/users/register", formData, { withCredentials: true });
export const getUser = () =>
  API.get("/users/getUser", { withCredentials: true });
export const logout = () => API.get("/users/logout", { withCredentials: true });

//chat
export const createChat = (data) =>
  API.post("/chat/", data, {
    withCredentials: true,
  });

export const userChats = (id) =>
  API.get(`/chat/${id}`, {
    withCredentials: true,
  });

export const findChat = (firstId, secondId) =>
  API.get(`/chat/find/${firstId}/${secondId}`, {
    withCredentials: true,
  });

export const getMessages = (id) =>
  API.get(`chat/messages/${id}`, {
    withCredentials: true,
  });

export const addMessage = (data) =>
  API.post("chat/messages/addMessage", data, {
    withCredentials: true,
  });
