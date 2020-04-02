import { createSelector } from "reselect";

const selectGlobals = state => state.globals;

export const selectIsLoading = createSelector(
  [selectGlobals],
  globals => globals.isLoading
);

export const selectNavigation = createSelector(
  [selectGlobals],
  globals => globals.settings.navigation.primaryNavigation
);

export const globalError = createSelector(
  [selectGlobals],
  globals => globals.globalError
);

export const selectPageData = createSelector(
  [selectGlobals],
  globals => globals.pageData
);
