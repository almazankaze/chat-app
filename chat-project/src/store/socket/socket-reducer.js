import { SOCKET_ACTION_TYPES } from "./socket-types";

const SOCKET_INITIAL_DATA = {
  socket: null,
  onlineUsers: [],
};

export const socketReducer = (state = SOCKET_INITIAL_DATA, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case SOCKET_ACTION_TYPES.SOCKET_START:
      return {
        ...state,
        socket: null,
        onlineUsers: [],
      };

    default:
      return state;
  }
};
