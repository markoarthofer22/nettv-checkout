import {
  SET_IS_LOADING,
  SET_GLOBALS,
  SET_GLOBAL_ERROR,
  SET_PAGE_DATA,
  SET_LANGUAGE_DATA,
} from "./globals.types";

const lang_codes = [
  {
    countryCode: "de",
    countryName: "Germany",
  },
  {
    countryCode: "nz",
    countryName: "New Zealand",
  },
  {
    countryCode: "at",
    countryName: "Austria",
  },
  {
    countryCode: "no",
    countryName: "Norway",
  },
  {
    countryCode: "lu",
    countryName: "Luxembourg",
  },
  {
    countryCode: "se",
    countryName: "Sweden",
  },
  {
    countryCode: "gb",
    countryName: "United Kingdom",
  },
  {
    countryCode: "us",
    countryName: "USA",
  },
  {
    countryCode: "ch",
    countryName: "Switzerland",
  },
  {
    countryCode: "ca",
    countryName: "Canada",
  },
  {
    countryCode: "be",
    countryName: "Belgium",
  },
  {
    countryCode: "dk",
    countryName: "Denmark",
  },
  {
    countryCode: "fi",
    countryName: "Finland",
  },
  {
    countryCode: "fr",
    countryName: "France",
  },
  {
    countryCode: "ie",
    countryName: "Ireland",
  },
  {
    countryCode: "nl",
    countryName: "Netherlands",
  },
];

const INITIAL_STATE = {
  isLoading: false,
  lang_codes: lang_codes,
};

const globalsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case SET_GLOBAL_ERROR:
      return {
        ...state,
        globalError: action.payload.response,
      };

    default:
      return state;
  }
};

export default globalsReducer;
