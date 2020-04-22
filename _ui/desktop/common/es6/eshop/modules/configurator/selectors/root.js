import {
    createSelector
} from "Reselect";

export const getConfiguratorState = state => state["configurator"];
export const getTemplateState = createSelector(getConfiguratorState, configurator => configurator.template)
export const getFiltersState = createSelector(getConfiguratorState, configurator => configurator.filters)
export const getOffers = createSelector(getConfiguratorState, configurator => configurator.offers)
export const getCart = createSelector(getConfiguratorState, configurator => configurator.cart)
export const getMetaData = createSelector(getConfiguratorState, configurator => configurator.metaData)