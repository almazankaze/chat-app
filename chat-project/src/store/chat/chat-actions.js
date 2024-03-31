import { createAction } from "../../utils/reducer/reducer";

import { CHAT_ACTION_TYPES } from "./chat-types";

import * as api from "../../api/index";

export const fetchChatsStart = () => {
  return { type: CHAT_ACTION_TYPES.FETCH_CHATS_START };
};

export const fetchChatsSuccess = (chats) =>
  createAction(CHAT_ACTION_TYPES.FETCH_CHATS_SUCCESS, chats);

export const fetchChatsFailure = (error) =>
  createAction(CHAT_ACTION_TYPES.FETCH_CHATS_FAILED, error);

export const changeCurrentChat = (newChat) =>
  createAction(CHAT_ACTION_TYPES.CHANGE_CURRENT_CHAT, newChat);

export const getChats = (id, token) => {
  return async (dispatch) => {
    dispatch(fetchChatsStart());
    try {
      const { data } = await api.userChats(id, token);
      dispatch(fetchChatsSuccess(data));
    } catch (e) {
      dispatch(fetchChatsFailure(e));
    }
  };
};

// create a new chat
export const createChatStart = () => {
  return { type: CHAT_ACTION_TYPES.CREATE_CHAT_START };
};

export const createChatSuccess = (chat) =>
  createAction(CHAT_ACTION_TYPES.CREATE_CHAT_SUCCESS, chat);

export const createChatFailure = (error) =>
  createAction(CHAT_ACTION_TYPES.CREATE_CHAT_FAILED, error);

export const createNewChat = (chatInfo, token) => {
  return async (dispatch) => {
    dispatch(createChatStart());
    try {
      const { data } = await api.createChat(chatInfo, token);
      dispatch(createChatSuccess(data));
      return 200;
    } catch (e) {
      dispatch(createChatFailure(e));
      if (e?.response?.status) return e.response.status;
      else return 500;
    }
  };
};
