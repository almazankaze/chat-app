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
