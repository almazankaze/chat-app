import { createSelector } from "reselect";

const selectChatReducer = (state) => state.chat;

export const selectChats = createSelector(
  [selectChatReducer],
  (chatSlice) => chatSlice.chats
);

export const selectIsLoading = createSelector(
  [selectChatReducer],
  (chatSlice) => chatSlice.isLoading
);

export const selectChatError = createSelector(
  [selectChatReducer],
  (chatSlice) => chatSlice.error
);
