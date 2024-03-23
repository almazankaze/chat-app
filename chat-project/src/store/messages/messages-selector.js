import { createSelector } from "reselect";

const selectMessageReducer = (state) => state.message;

export const selectMessages = createSelector(
  [selectMessageReducer],
  (messageSlice) => messageSlice.chat
);

export const selectIsLoading = createSelector(
  [selectMessageReducer],
  (messageSlice) => messageSlice.isLoading
);

export const selectMessageLoading = createSelector(
  [selectMessageReducer],
  (messageSlice) => messageSlice.messageSendLoading
);

export const selectChatError = createSelector(
  [selectMessageReducer],
  (messageSlice) => messageSlice.error
);
