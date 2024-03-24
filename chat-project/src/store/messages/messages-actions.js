import { createAction } from "../../utils/reducer/reducer";

import { MESSAGES_ACTION_TYPES } from "./messages-types";

import * as api from "../../api/index";

export const fetchMessagesStart = () => {
  return { type: MESSAGES_ACTION_TYPES.FETCH_MESSAGES_START };
};

export const sendMessageStart = () => {
  return { type: MESSAGES_ACTION_TYPES.SEND_MESSAGE_START };
};

export const fetchMessagesSuccess = (chat) =>
  createAction(MESSAGES_ACTION_TYPES.FETCH_MESSAGES_SUCCESS, chat);

export const sendMessageSuccess = (chat) =>
  createAction(MESSAGES_ACTION_TYPES.SEND_MESSAGE_SUCCESS, chat);

export const fetchMessagesFailure = (error) =>
  createAction(MESSAGES_ACTION_TYPES.FETCH_MESSAGES_FAILED, error);

export const sendMessageFailure = (error) =>
  createAction(MESSAGES_ACTION_TYPES.SEND_MESSAGE_FAILED, error);

export const getMessages = (id, token) => {
  return async (dispatch) => {
    dispatch(fetchMessagesStart());
    try {
      const { data } = await api.getMessages(id, token);
      dispatch(fetchMessagesSuccess(data));
    } catch (e) {
      dispatch(fetchMessagesFailure(e));
    }
  };
};

export const sendMessage = (messageInfo, token) => {
  return async (dispatch) => {
    dispatch(sendMessageStart());
    try {
      const { data } = await api.addMessage(messageInfo, token);
      dispatch(sendMessageSuccess(data));
    } catch (e) {
      dispatch(sendMessageFailure(e));
    }
  };
};

export const addMessage = (newMessage) =>
  createAction(MESSAGES_ACTION_TYPES.ADD_TO_MESSAGES, newMessage);
