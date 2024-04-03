import { USER_ACTION_TYPES } from "./user-types";

const USER_INITIAL_DATA = {
  user: null,
  socket: null,
  isLoading: false,
  inviteLoading: false,
  error: null,
};

export const userReducer = (state = USER_INITIAL_DATA, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.USER_START:
      return {
        ...state,
        user: null,
        socket: null,
        isLoading: true,
        error: null,
      };
    case USER_ACTION_TYPES.USER_SUCCESS:
      return {
        ...state,
        user: payload.user,
        socket: payload.socket,
        isLoading: false,
        error: null,
      };

    case USER_ACTION_TYPES.USER_LOGOUT_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case USER_ACTION_TYPES.USER_LOGOUT:
      return {
        ...state,
        user: null,
        socket: null,
        isLoading: false,
        inviteLoading: false,
        error: null,
      };

    case USER_ACTION_TYPES.USER_FAIL:
      return {
        ...state,
        socket: null,
        isLoading: false,
        error: payload,
      };

    case USER_ACTION_TYPES.ESTABLISH_SOCKET_CONNECTION:
      return {
        ...state,
        socket: payload,
        isLoading: false,
        error: null,
      };

    case USER_ACTION_TYPES.USER_INVITE_START:
      return {
        ...state,
        inviteLoading: true,
        error: null,
      };
    case USER_ACTION_TYPES.USER_INVITE_SUCCESS:
      return {
        ...state,
        inviteLoading: false,
        error: null,
      };

    case USER_ACTION_TYPES.USER_INVITE_FAIL:
      return {
        ...state,
        inviteLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};
