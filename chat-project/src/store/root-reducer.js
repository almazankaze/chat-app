import { combineReducers } from "redux";
import { userReducer } from "./user/user-reducer.js";
import { NavReducer } from "./navbar/navbar-reducer.js";
import { chatReducer } from "./chat/chat-reducer.js";

export const rootReducer = combineReducers({
  user: userReducer,
  navbar: NavReducer,
  chat: chatReducer,
});
