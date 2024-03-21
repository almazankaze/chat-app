import { CHAT_ACTION_TYPES } from "./chat-types";

const CHAT_INITIAL_STATE = {
  chats: [],
  currentChat: null,
  isLoading: false,
  error: false,
};

export const chatReducer = (state = CHAT_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CHAT_ACTION_TYPES.FETCH_CHATS_START:
      return {
        ...state,
        error: null,
        chats: [],
        isLoading: true,
      };
    case CHAT_ACTION_TYPES.FETCH_CHATS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        chats: payload,
        currentChat: payload[0]?._id ? payload[0]._id : null,
        error: null,
      };
    case CHAT_ACTION_TYPES.FETCH_CHATS_FAILED:
      return { ...state, isLoading: false, error: payload };
    case CHAT_ACTION_TYPES.CHANGE_CURRENT_CHAT:
      return { ...state, currentChat: payload };
    default:
      return state;
  }
};
