import { createAction } from "../../utils/reducer/reducer";

import { USER_ACTION_TYPES } from "./user-types";

import * as api from "../../api/index";
import io from "socket.io-client";

export const fetchUserStart = () => {
  return { type: USER_ACTION_TYPES.USER_START };
};
export const userLogoutStart = () => {
  return { type: USER_ACTION_TYPES.USER_LOGOUT_START };
};

export const fetchUserSuccess = (user, socket) =>
  createAction(USER_ACTION_TYPES.USER_SUCCESS, { user, socket });

export const userLogoutSuccess = () =>
  createAction(USER_ACTION_TYPES.USER_LOGOUT);

export const userFailure = (error) =>
  createAction(USER_ACTION_TYPES.USER_FAIL, error);

export const connectToSocket = (socket) =>
  createAction(USER_ACTION_TYPES.ESTABLISH_SOCKET_CONNECTION, socket);

export const inviteRemoveSuccess = (invite) =>
  createAction(USER_ACTION_TYPES.USER_DELETE_INVITE_SUCCESS, invite);

export const inviteStart = () => {
  return { type: USER_ACTION_TYPES.USER_INVITE_START };
};

export const inviteSuccess = () => {
  return { type: USER_ACTION_TYPES.USER_INVITE_SUCCESS };
};

export const inviteFail = (error) =>
  createAction(USER_ACTION_TYPES.USER_INVITE_FAIL, error);

export const signIn = (userData) => {
  return async (dispatch) => {
    dispatch(fetchUserStart());
    try {
      const { data } = await api.signIn(userData);

      let newSocket = null;

      if (data) {
        newSocket = io.connect("http://localhost:5000", {
          query: { userId: data._id },
          forceNew: true,
        });
      }

      dispatch(fetchUserSuccess(data, newSocket));
      return 200;
    } catch (e) {
      dispatch(userFailure(e));
      if (e?.response?.status) return e.response.status;
      else return 500;
    }
  };
};

export const signUp = (userData) => {
  return async (dispatch) => {
    dispatch(fetchUserStart());
    try {
      const { data } = await api.signUp(userData);

      let newSocket = null;

      if (data) {
        newSocket = io.connect("http://localhost:5000", {
          query: { userId: data._id },
          forceNew: true,
        });
      }

      dispatch(fetchUserSuccess(data, newSocket));
      return 200;
    } catch (e) {
      dispatch(userFailure(e));
      if (e?.response?.status) return e.response.status;
      else return 500;
    }
  };
};

export const getUser = () => {
  return async (dispatch) => {
    dispatch(fetchUserStart());
    try {
      const { data } = await api.getUser();
      let newSocket = null;

      if (data) {
        newSocket = io.connect("http://localhost:5000", {
          query: { userId: data._id },
          forceNew: true,
        });
      }

      dispatch(fetchUserSuccess(data, newSocket));
      return 200;
    } catch (e) {
      dispatch(userFailure(e));
      return e.response.status;
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    dispatch(userLogoutStart);
    try {
      const { data } = await api.logout();
      dispatch(userLogoutSuccess(data));
    } catch (e) {
      dispatch(userFailure(e));
    }
  };
};

export const establishConnection = (chatId, socket) => {
  return async (dispatch) => {
    try {
      socket.io.opts.query = { ...socket.io.opts.query, roomId: chatId };
      const newSocket = socket.connect();
      dispatch(connectToSocket(newSocket));
    } catch (e) {
      dispatch(connectToSocket(null));
    }
  };
};

export const inviteUser = (info, token) => {
  return async (dispatch) => {
    dispatch(inviteStart());
    try {
      await api.inviteUser(info, token);
      dispatch(inviteSuccess());
      return 200;
    } catch (e) {
      dispatch(inviteFail(e));
      if (e?.response?.status) return e.response.status;
      else return 404;
    }
  };
};

export const deleteInvite = (info, token) => {
  return async (dispatch) => {
    dispatch(inviteStart());
    try {
      await api.removeInvite(info, token);
      dispatch(inviteRemoveSuccess(info.chatId));
      return 200;
    } catch (e) {
      dispatch(inviteFail(e));
      if (e?.response?.status) return e.response.status;
      else return 500;
    }
  };
};

export const acceptInvite = (info, token) => {
  return async (dispatch) => {
    dispatch(inviteStart());
    try {
      await api.inviteAccept(info, token);
      dispatch(inviteSuccess());
      return 200;
    } catch (e) {
      dispatch(inviteFail(e));
      if (e?.response?.status) return e.response.status;
      else return 500;
    }
  };
};
