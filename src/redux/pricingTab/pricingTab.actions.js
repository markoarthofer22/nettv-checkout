import { SET_INITIAL_VALUES, RESET_TO_INITIAL_VALUES } from "./pricingTab.types";

export const setInitialValues = (values) => {
    return {
        type: SET_INITIAL_VALUES,
        payload: values
    };
};

export const resetToInitialValues = (values) => {
    return {
        type: RESET_TO_INITIAL_VALUES,
        payload: values
    };
};
