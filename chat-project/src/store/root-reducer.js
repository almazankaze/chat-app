import { combineReducers } from "redux";
import { userReducer } from "./user/user-reducer.js";
import { NavReducer } from "./navbar/navbar-reducer.js";
import { chatReducer } from "./chat/chat-reducer.js";
import { messagesReducer } from "./messages/messages-reducer";
import { modalReducer } from "./modal/modal-reducer.js";

export const rootReducer = combineReducers({
  user: userReducer,
  navbar: NavReducer,
  chat: chatReducer,
  message: messagesReducer,
  modal: modalReducer,
});
