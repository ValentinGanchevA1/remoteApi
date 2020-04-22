// Fetch proposition list
import RemoteApi from "../remoteApi";
import * as remote from "./magnum";
import _ from "lodash";

export const getPossibleTransactions = (address, availableBundleTypes, transactionComponentPk) => (dispatch) => {
    const {
        preZipCode,
        postalCode
    } = splitZipCode(address.zip);
    dispatch(remote.fetchPossibleTransactions.start());
    let addressData = {
        preZipCode: preZipCode,
        postalCode: postalCode,
        cityId: address.cityId,
        cityName: address.cityName,
        streetId: address.streetId,
        streetName: address.streetName,
        estateNumber: address.streetNumber,
        apartmentNumber: address.apartmentNumber,
    };
    return RemoteApi.getPossibleTransactions(
        addressData,
        availableBundleTypes,
        transactionComponentPk
    ).then(
        (data) => dispatch(remote.fetchPossibleTransactions.success(data)),
        (error) => dispatch(remote.fetchPossibleTransactions.error(error))
    );
};

export const fetchOrangeLovePropositionList = () => (dispatch, getState) => {
    const {
        magnum
    } = getState();
    const {
        zip,
        cityId,
        cityName,
        streetId,
        streetName,
        streetNumber: estateNumber,
        apartmentNumber
    } = magnum.wwt;

    let prevRequestId = magnum.durationList.requestId;
    if (prevRequestId !== null) {
        dispatch(remote.fetchDeviceListActions.reset());
    }
    const requestId = new Date().getTime();

    dispatch(remote.fetchPropositionListActions.start({
        requestId
    }));

    const {
        preZipCode,
        postalCode
    } = splitZipCode(zip);

    const fixTransaction = magnum.selectedFixVoipTransaction.process ? magnum.selectedFixVoipTransaction : magnum.selectedFixBroadbandTransaction;
    const mobileTransaction = magnum.selectedMobileTransaction;
    const selectedLoyaltyPeriod = magnum.selectedLoyaltyPeriod;

    const promise = RemoteApi.getOrangeLovePropositions(
        magnum.propositionComponentPk,
        preZipCode,
        postalCode,
        cityId,
        cityName,
        streetId,
        streetName,
        estateNumber,
        apartmentNumber,
        fixTransaction,
        mobileTransaction,
        selectedLoyaltyPeriod
    );

    promise.then(
        (data) => {
            prevRequestId = getState().magnum.durationList.requestId;
            if (prevRequestId !== requestId) {
                return;
            }
            dispatch(remote.fetchPropositionListActions.success(data));
        },
        (error) => {
            dispatch(remote.fetchPropositionListActions.error(error));
        }
    );
    return promise;
};

export const fetchDocuments = () => (dispatch, getState) => {
    const propositionCodes = getState().magnum.durationList.propositions.map(proposition => proposition.code);

    dispatch(remote.fetchDocumentsListActions.start());
    if (_.isEmpty(propositionCodes)) {
        dispatch(remote.fetchDocumentsListActions.success({}))
    } else {
        return RemoteApi.fetchDocuments(propositionCodes).then(
            (documents) => dispatch(remote.fetchDocumentsListActions.success(documents)),
            (error) => dispatch(remote.fetchDocumentsListActions.error(error))
        );
    }
};

export const fetchOrangeLoveDeviceList = (deviceListComponentPk, propositionCode, installmentsOption) => (dispatch) => {
    dispatch(remote.fetchDeviceListActions.start());
    RemoteApi.getOrangeLoveDevices(deviceListComponentPk, propositionCode, installmentsOption).then(
        data => dispatch(remote.fetchDeviceListActions.success(data)),
        error => dispatch(remote.fetchDeviceListActions.error(error))
    );
};

const splitZipCode = (zip) => {
    let preZipCode, postalCode;
    if (zip && zip.indexOf('-') > -1) {
        const zipSplit = zip.split("-");
        preZipCode = zipSplit.length > 0 ? zipSplit[0] : '';
        postalCode = zipSplit.length > 1 ? zipSplit[1] : '';
    } else {
        preZipCode = zip ? zip.slice(0, 2) : null;
        postalCode = zip ? zip.slice(2, 5) : null;
    }
    return {
        preZipCode,
        postalCode
    };
};