import { createAction } from "../../utils/reducer/reducer";
import { NAV_ACTION_TYPES } from "./navbar-types";

export const setIsMenuOpen = (boolean) =>
  createAction(NAV_ACTION_TYPES.SET_IS_MENU_OPEN, boolean);

export const setIsSearchOpen = (boolean) =>
  createAction(NAV_ACTION_TYPES.SET_IS_MOBILE_SEARCH_OPEN, boolean);

export const setNavPath = (currentPath, prevPath) =>
  createAction(NAV_ACTION_TYPES.SET_NAV_PATH, {
    prev: prevPath,
    current: currentPath,
  });
