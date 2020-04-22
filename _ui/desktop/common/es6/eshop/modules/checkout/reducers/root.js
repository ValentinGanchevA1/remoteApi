import {
    combineReducers
} from "redux";

import * as navigation from "./navigation";
import * as addresses from "./addresses";
import * as customer from "./customer";
import {
    representativeData
} from "./representativeData";
import * as mnpData from "./mnpData";
import * as consents from "./consents";
import * as metadata from "./metadata";
import * as errors from "./errors";
import * as delivery from './delivery';
import * as installation from './installation';
import * as payment from './payment';
import * as conditions from './conditions';
import * as cvDocuments from './cvDocuments';
import * as period from './period';
import * as apu from './apu';
import {
    Telesales
} from './telesales';
import * as pickup from './pickup';
import * as reservation from './reservation';
import * as assistMode from './assistMode';
import * as billingAccount from './billingAccount';
import * as returnDocument from './returnDocument';
import * as agreement from './agreement';
import * as debtRepayment from './debtRepayment';
import * as fbbServices from './fbbServices';
import * as idVerification from './idVerification';
import * as investment from "./investment";
import {
    summary
} from "./summary";



export default combineReducers({
    navigation: combineReducers(navigation),
    addresses: combineReducers(addresses),
    customer: combineReducers(customer),
    representativeData,
    mnpData: combineReducers(mnpData),
    metadata: combineReducers(metadata),
    consents: combineReducers(consents),
    errors: combineReducers(errors),
    delivery: combineReducers(delivery),
    installation: combineReducers(installation),
    payment: combineReducers(payment),
    cvDocuments: combineReducers(cvDocuments),
    conditions: combineReducers(conditions),
    period: combineReducers(period),
    apu: combineReducers(apu),
    telesales: Telesales,
    pickup: combineReducers(pickup),
    reservation: combineReducers(reservation),
    assistMode: combineReducers(assistMode),
    billingAccount: combineReducers(billingAccount),
    returnDocument: combineReducers(returnDocument),
    agreement: combineReducers(agreement),
    debtRepayment: combineReducers(debtRepayment),
    fbbServices: combineReducers(fbbServices),
    idVerification: combineReducers(idVerification),
    investment: combineReducers(investment),
    summary
});