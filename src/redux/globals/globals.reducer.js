import {
  SET_IS_LOADING,
  SET_GLOBALS,
  SET_GLOBAL_ERROR,
  SET_PAGE_DATA,
  SET_LANGUAGE_DATA
} from "./globals.types";

const INITIAL_STATE = {
  isLoading: false,
  pageData: {
    response: null,
    isLoading: true,
    isError: false,
    languages: [],
    key: Math.random(),
    url: null
  }
};

const globalsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };

    case SET_GLOBAL_ERROR:
      return {
        ...state,
        globalError: action.payload.response
      };

    case SET_PAGE_DATA:
      return {
        ...state,
        pageData: { ...state.pageData, ...action.payload }
      };

    default:
      return state;
  }
};

export default globalsReducer;
