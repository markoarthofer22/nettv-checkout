import { SET_INITIAL_VALUES, RESET_TO_INITIAL_VALUES, SET_PAYMENT_OPTIONS } from "./pricingTab.types";

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

export const setPaymentOptions = (_paymentOptions) => {
    return {
        type: SET_PAYMENT_OPTIONS,
        payload: _paymentOptions
    };
};
