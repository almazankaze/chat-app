import { NAV_ACTION_TYPES } from "./navbar-types";

const NAV_INITIAL_STATE = {
  isMenuOpen: false,
  isSearchOpen: false,
  path: {
    prev: "/",
    current: "/",
  },
};

export const NavReducer = (state = NAV_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case NAV_ACTION_TYPES.SET_IS_MENU_OPEN:
      return {
        ...state,
        isMenuOpen: payload,
      };
    case NAV_ACTION_TYPES.SET_IS_MOBILE_SEARCH_OPEN:
      return {
        ...state,
        isSearchOpen: payload,
      };
    case NAV_ACTION_TYPES.SET_NAV_PATH:
      return {
        ...state,
        path: {
          ...payload,
        },
      };
    default:
      return state;
  }
};
