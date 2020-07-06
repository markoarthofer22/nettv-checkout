import { SET_INITIAL_VALUES, RESET_TO_INITIAL_VALUES } from "./pricingTab.types";

const INITIAL_STATE = {
    currency: "EUR",
    mainProductId: null,
    variationProductId: null,
    variationProductName: null,
    variantDurationID: null,
    productCountryCode: null,
    paymentType: "",
    headerValues: {
        name: "",
        price: "0.00",
        subscriptionDuration: null,
        contractLength: null,
        isPromotion: false
    },
    available: {
        availableDevices: null,
        features: null
    },
    paymentValues: {
        subscriptionFullPrice: null,
        subscriptionDiscountPrice: null,
        boxPrice: null,
        boxPriceDiscount: null,
        additionalExpenses: null,
        totalPrice: null,
        totalDiscount: null
    }
};

const pricingTabReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_INITIAL_VALUES:
            return {
                ...state,
                ...action.payload,
                headerValues: {
                    ...state.headerValues,
                    ...action.payload.headerValues
                },
                available: {
                    ...state.available,
                    ...action.payload.available
                },
                paymentValues: {
                    ...state.paymentValues,
                    ...action.payload.paymentValues
                }
            };
        case RESET_TO_INITIAL_VALUES: {
            return {
                ...INITIAL_STATE,
                ...action.payload
            };
        }
        default:
            return state;
    }
};

export default pricingTabReducer;
