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
