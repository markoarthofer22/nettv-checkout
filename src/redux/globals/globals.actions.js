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
    return async (dispatch, getState) => {
        let _url = url.split("?")[0].slice(-1) === "/" ? url.split("?")[0].slice(0, -1) : url.split("?")[0];
        dispatch(setIsLoading(true));

        await mainApi
            .get(url)
            .then((responseData) => {
                dispatch(setIsLoading(false));
                dispatch(
                    setDataForURL({
                        response: responseData.data,
                        isLoading: false,
                        key: Math.random(),
                        url: url,
                    })
                );
            })
            .catch((error) => {
                dispatch(setIsLoading(false));
                dispatch(setDataForURL({ response: null, isLoading: false, url: _url }));
            });
    };
};
