import { createSelector } from "reselect";

const selectUserReducer = (state) => state.user;

export const selectUser = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.user
);

export const selectUserIsLoading = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.isLoading
);

export const selectUserError = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.error
);
