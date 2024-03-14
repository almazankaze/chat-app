import { createSelector } from "reselect";

const selectNavbarReducer = (state) => state.navbar;

export const selectIsMenuOpen = createSelector(
  [selectNavbarReducer],
  (nav) => nav.isMenuOpen
);

export const selectIsSearchOpen = createSelector(
  [selectNavbarReducer],
  (nav) => nav.isSearchOpen
);

export const selectNavPath = createSelector(
  [selectNavbarReducer],
  (nav) => nav.path
);
