import { MESSAGES_ACTION_TYPES } from "./messages-types";

const MESSAGES_INITIAL_STATE = {
  chat: {},
  isLoading: false,
  error: false,
};

export const messagesReducer = (
  state = MESSAGES_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case MESSAGES_ACTION_TYPES.FETCH_MESSAGES_START:
      return {
        ...state,
        error: null,
        chat: {},
        isLoading: true,
      };
    case MESSAGES_ACTION_TYPES.FETCH_MESSAGES_SUCCESS:
      return { ...state, isLoading: false, chat: payload, error: null };
    case MESSAGES_ACTION_TYPES.FETCH_MESSAGES_FAILED:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};