import { createAction } from "../../utils/reducer/reducer";

import { MESSAGES_ACTION_TYPES } from "./messages-types";

import * as api from "../../api/index";

export const fetchMessagesStart = () => {
  return { type: MESSAGES_ACTION_TYPES.FETCH_MESSAGES_START };
};

export const fetchMessagesSuccess = (chat) =>
  createAction(MESSAGES_ACTION_TYPES.FETCH_MESSAGES_SUCCESS, chat);

export const fetchMessagesFailure = (error) =>
  createAction(MESSAGES_ACTION_TYPES.FETCH_MESSAGES_FAILED, error);

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
