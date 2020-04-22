define(["exports", "../remoteApi", "./magnum", "lodash"], function(_exports, _remoteApi, remote, _lodash) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.fetchOrangeLoveDeviceList = _exports.fetchDocuments = _exports.fetchOrangeLovePropositionList = _exports.getPossibleTransactions = void 0;
    _remoteApi = babelHelpers.interopRequireDefault(_remoteApi);
    remote = babelHelpers.interopRequireWildcard(remote);
    _lodash = babelHelpers.interopRequireDefault(_lodash);

    // Fetch proposition list
    var getPossibleTransactions = function getPossibleTransactions(address, availableBundleTypes, transactionComponentPk) {
        return function(dispatch) {
            var _splitZipCode = splitZipCode(address.zip),
                preZipCode = _splitZipCode.preZipCode,
                postalCode = _splitZipCode.postalCode;

            dispatch(remote.fetchPossibleTransactions.start());
            var addressData = {
                preZipCode: preZipCode,
                postalCode: postalCode,
                cityId: address.cityId,
                cityName: address.cityName,
                streetId: address.streetId,
                streetName: address.streetName,
                estateNumber: address.streetNumber,
                apartmentNumber: address.apartmentNumber
            };
            return _remoteApi.default.getPossibleTransactions(addressData, availableBundleTypes, transactionComponentPk).then(function(data) {
                return dispatch(remote.fetchPossibleTransactions.success(data));
            }, function(error) {
                return dispatch(remote.fetchPossibleTransactions.error(error));
            });
        };
    };

    _exports.getPossibleTransactions = getPossibleTransactions;

    var fetchOrangeLovePropositionList = function fetchOrangeLovePropositionList() {
        return function(dispatch, getState) {
            var _getState = getState(),
                magnum = _getState.magnum;

            var _magnum$wwt = magnum.wwt,
                zip = _magnum$wwt.zip,
                cityId = _magnum$wwt.cityId,
                cityName = _magnum$wwt.cityName,
                streetId = _magnum$wwt.streetId,
                streetName = _magnum$wwt.streetName,
                estateNumber = _magnum$wwt.streetNumber,
                apartmentNumber = _magnum$wwt.apartmentNumber;
            var prevRequestId = magnum.durationList.requestId;

            if (prevRequestId !== null) {
                dispatch(remote.fetchDeviceListActions.reset());
            }

            var requestId = new Date().getTime();
            dispatch(remote.fetchPropositionListActions.start({
                requestId: requestId
            }));

            var _splitZipCode2 = splitZipCode(zip),
                preZipCode = _splitZipCode2.preZipCode,
                postalCode = _splitZipCode2.postalCode;

            var fixTransaction = magnum.selectedFixVoipTransaction.process ? magnum.selectedFixVoipTransaction : magnum.selectedFixBroadbandTransaction;
            var mobileTransaction = magnum.selectedMobileTransaction;
            var selectedLoyaltyPeriod = magnum.selectedLoyaltyPeriod;

            var promise = _remoteApi.default.getOrangeLovePropositions(magnum.propositionComponentPk, preZipCode, postalCode, cityId, cityName, streetId, streetName, estateNumber, apartmentNumber, fixTransaction, mobileTransaction, selectedLoyaltyPeriod);

            promise.then(function(data) {
                prevRequestId = getState().magnum.durationList.requestId;

                if (prevRequestId !== requestId) {
                    return;
                }

                dispatch(remote.fetchPropositionListActions.success(data));
            }, function(error) {
                dispatch(remote.fetchPropositionListActions.error(error));
            });
            return promise;
        };
    };

    _exports.fetchOrangeLovePropositionList = fetchOrangeLovePropositionList;

    var fetchDocuments = function fetchDocuments() {
        return function(dispatch, getState) {
            var propositionCodes = getState().magnum.durationList.propositions.map(function(proposition) {
                return proposition.code;
            });
            dispatch(remote.fetchDocumentsListActions.start());

            if (_lodash.default.isEmpty(propositionCodes)) {
                dispatch(remote.fetchDocumentsListActions.success({}));
            } else {
                return _remoteApi.default.fetchDocuments(propositionCodes).then(function(documents) {
                    return dispatch(remote.fetchDocumentsListActions.success(documents));
                }, function(error) {
                    return dispatch(remote.fetchDocumentsListActions.error(error));
                });
            }
        };
    };

    _exports.fetchDocuments = fetchDocuments;

    var fetchOrangeLoveDeviceList = function fetchOrangeLoveDeviceList(deviceListComponentPk, propositionCode, installmentsOption) {
        return function(dispatch) {
            dispatch(remote.fetchDeviceListActions.start());

            _remoteApi.default.getOrangeLoveDevices(deviceListComponentPk, propositionCode, installmentsOption).then(function(data) {
                return dispatch(remote.fetchDeviceListActions.success(data));
            }, function(error) {
                return dispatch(remote.fetchDeviceListActions.error(error));
            });
        };
    };

    _exports.fetchOrangeLoveDeviceList = fetchOrangeLoveDeviceList;

    var splitZipCode = function splitZipCode(zip) {
        var preZipCode, postalCode;

        if (zip && zip.indexOf('-') > -1) {
            var zipSplit = zip.split("-");
            preZipCode = zipSplit.length > 0 ? zipSplit[0] : '';
            postalCode = zipSplit.length > 1 ? zipSplit[1] : '';
        } else {
            preZipCode = zip ? zip.slice(0, 2) : null;
            postalCode = zip ? zip.slice(2, 5) : null;
        }

        return {
            preZipCode: preZipCode,
            postalCode: postalCode
        };
    };
});
//# sourceMappingURL=data.js.map