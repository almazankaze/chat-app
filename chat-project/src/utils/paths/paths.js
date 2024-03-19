const ROOTS_HOME = "/";
const ROOTS_CHAT = "/chat/";

function path(root, sublink) {
  return `${root}${sublink}`;
}

export const APP_PATH = {
  root: ROOTS_HOME,
  chatRoot: ROOTS_CHAT,
  general: {
    auth: path(ROOTS_HOME, "auth"),
  },
  chat: {
    notification: path(ROOTS_CHAT, "notification"),
    settings: path(ROOTS_CHAT, "settings"),
  },
};
