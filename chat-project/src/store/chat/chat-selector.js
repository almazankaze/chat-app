import { createSelector } from "reselect";

const selectChatReducer = (state) => state.chat;

export const selectChats = createSelector(
  [selectChatReducer],
  (chatSlice) => chatSlice.chats
);

export const selectChatsLoading = createSelector(
  [selectChatReducer],
  (chatSlice) => chatSlice.isLoading
);

export const selectChatError = createSelector(
  [selectChatReducer],
  (chatSlice) => chatSlice.error
);

export const selectCurrentChat = createSelector(
  [selectChatReducer],
  (chatSlice) => chatSlice.currentChat
);

export const selectChatModalLoading = createSelector(
  [selectChatReducer],
  (chatSlice) => chatSlice.chatModalLoading
);
