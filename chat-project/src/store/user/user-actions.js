import { createAction } from "../../utils/reducer/reducer";

import { USER_ACTION_TYPES } from "./user-types";

import * as api from "../../api/index";

export const fetchUserStart = () => {
  return { type: USER_ACTION_TYPES.USER_START };
};
export const userLogoutStart = () => {
  return { type: USER_ACTION_TYPES.USER_LOGOUT_START };
};

export const fetchUserSuccess = (user) =>
  createAction(USER_ACTION_TYPES.USER_SUCCESS, user);

export const userLogoutSuccess = () =>
  createAction(USER_ACTION_TYPES.USER_LOGOUT);

export const userFailure = (error) =>
  createAction(USER_ACTION_TYPES.USER_FAIL, error);

export const signIn = (userData) => {
  return async (dispatch) => {
    dispatch(fetchUserStart());
    try {
      const { data } = await api.signIn(userData);
      dispatch(fetchUserSuccess(data));
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
      dispatch(fetchUserSuccess(data));
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
      dispatch(fetchUserSuccess(data));
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
