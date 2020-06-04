import { createSelector } from "reselect";

const pricingStore = (state) => state.pricingTab;

export const currentPricing = createSelector([pricingStore], (pricing) => pricing);
