import { SET_IS_LOADING, SET_GLOBAL_ERROR, SET_PAGE_DATA } from "./globals.types";

import mainApi from "../apis/main-api";

export const setIsLoading = (isLoading) => {
    return {
        type: SET_IS_LOADING,
        payload: isLoading,
    };
};

export const setGlobalError = (error) => {
    return {
        type: SET_GLOBAL_ERROR,
        payload: error,
    };
};

export const setDataForURL = (data) => {
    return {
        type: SET_PAGE_DATA,
        payload: data,
    };
};

export const getDataForURL = (url) => {
    return (dispatch) => {
        dispatch(setIsLoading(true));

        return new Promise((resolve) => {
            mainApi
                .get(url)
                .then((responseData) => {
                    dispatch(setIsLoading(false));
                    resolve(responseData);
                })
                .catch((error) => {
                    dispatch(setIsLoading(false));
                });
        });
    };
};
