import {
    combineReducers
} from "redux";

import propositionComponentPkReducer from "./propositionComponentPk";
import possibleTransactionsReducer from "./possibleTransactions";
import durationListReducer from "./durationList";
import deviceListReducer from "./deviceList";
import selectedPropositionReducer from "./selectedProposition";
import selectedDeviceReducer from "./selectedDevice";
import documentsReducer from "./documents";
import knaNumberReducer from "./knaNumber";
import {
    selectedFixBroadbandTransactionReducer,
    selectedFixVoipTransactionReducer,
    selectedMobileTransactionReducer
} from "./selectedTransactions";
import selectedLoyaltyPeriodReducer from "./selectedLoyaltyPeriod";
import wwtReducer from "./wwt";
import availableBundleTypesReducer from "./availableBundleTypes";
import {
    searchCustomerReducer
} from "./searchCustomer";
import migrationReducer from "./migration";

export default combineReducers({
    propositionComponentPk: propositionComponentPkReducer,
    possibleTransactions: possibleTransactionsReducer,
    durationList: durationListReducer,
    deviceList: deviceListReducer,
    selectedProposition: selectedPropositionReducer,
    selectedDevice: selectedDeviceReducer,
    documents: documentsReducer,
    knaNumber: knaNumberReducer,
    selectedFixBroadbandTransaction: selectedFixBroadbandTransactionReducer,
    selectedFixVoipTransaction: selectedFixVoipTransactionReducer,
    selectedMobileTransaction: selectedMobileTransactionReducer,
    selectedLoyaltyPeriod: selectedLoyaltyPeriodReducer,
    wwt: wwtReducer,
    availableBundleTypes: availableBundleTypesReducer,
    searchCustomer: searchCustomerReducer,
    migration: migrationReducer
});