const ROOTS_HOME = "/";

function path(root, sublink) {
  return `${root}${sublink}`;
}

export const APP_PATH = {
  root: ROOTS_HOME,
  general: {
    auth: path(ROOTS_HOME, "auth"),
  },
};
