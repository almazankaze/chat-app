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

export const signIn = (userData) => {
  return async (dispatch) => {
    dispatch(fetchUserStart());
    try {
      const { data } = await api.signIn(userData);
      const socket = io.connect("http://localhost:5000", {
        query: { userId: data._id },
        forceNew: true,
      });
      dispatch(fetchUserSuccess(data, socket));
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
      const socket = io.connect("http://localhost:5000", {
        query: { userId: data._id },
        forceNew: true,
      });
      dispatch(fetchUserSuccess(data, socket));
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
      const socket = io.connect("http://localhost:5000", {
        query: { userId: data._id },
        forceNew: true,
      });
      dispatch(fetchUserSuccess(data, socket));
      return 200;
    } catch (e) {
      dispatch(userFailure(e));
      return e.response.status;
    }
  };
};

export const logout = (socket) => {
  return async (dispatch) => {
    dispatch(userLogoutStart);
    try {
      const { data } = await api.logout();
      socket.close();
      dispatch(userLogoutSuccess(data));
    } catch (e) {
      dispatch(userFailure(e));
    }
  };
};
