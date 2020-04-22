import {
    createSelector
} from "Reselect";

export const getFixState = state => state["fix"];

export const getMetadata = createSelector(getFixState, fix => fix.metaData);

export const getCustomerServicesList = createSelector(getFixState, fix => fix.customerServices.customerServicesList);

export const verifyIfServicesListIsEmpty = createSelector(getMetadata, metaData => metaData.verifyIfServiceListsEmpty);


export const getRedirectUrlAfterWWT = createSelector(getMetadata, metadata => metadata.redirectUrlAfterWWT);