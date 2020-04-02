import { SET_NAVIGATION_STEP } from "./steps.types";

const INITIAL_STATE = {
  currentStep: 1
};

const navigationStepReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_NAVIGATION_STEP:
      return {
        ...state,
        currentStep:
          action.payload === "add"
            ? state.currentStep + 1
            : action.payload === "subtract"
            ? state.currentStep - 1
            : null
      };

    default:
      return state;
  }
};

export default navigationStepReducer;
