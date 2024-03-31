import { CHAT_ACTION_TYPES } from "./chat-types";

const CHAT_INITIAL_STATE = {
  chats: [],
  currentChat: null,
  isLoading: false,
  chatModalLoading: false,
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
        chatModalLoading: false,
        isLoading: true,
      };
    case CHAT_ACTION_TYPES.FETCH_CHATS_SUCCESS:
      return {
        ...state,
        chatModalLoading: false,
        isLoading: false,
        chats: payload,
        currentChat: payload[0]?._id ? payload[0]._id : null,
        error: null,
      };
    case CHAT_ACTION_TYPES.FETCH_CHATS_FAILED:
      return {
        ...state,
        isLoading: false,
        chatModalLoading: false,
        error: payload,
      };
    case CHAT_ACTION_TYPES.CHANGE_CURRENT_CHAT:
      return { ...state, currentChat: payload };

    case CHAT_ACTION_TYPES.CREATE_CHAT_START:
      return {
        ...state,
        chatModalLoading: true,
        error: null,
      };

    case CHAT_ACTION_TYPES.CREATE_CHAT_SUCCESS:
      return {
        ...state,
        chats: [...state.chats, payload],
        chatModalLoading: false,
        error: null,
      };

    case CHAT_ACTION_TYPES.CREATE_CHAT_FAILED:
      return {
        ...state,
        chatModalLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};
