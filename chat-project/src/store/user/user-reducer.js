import { USER_ACTION_TYPES } from "./user-types";

const USER_INITIAL_DATA = {
  user: null,
  socket: null,
  isLoading: false,
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
        error: null,
      };

    case USER_ACTION_TYPES.USER_FAIL:
      return {
        ...state,
        socket: null,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};
