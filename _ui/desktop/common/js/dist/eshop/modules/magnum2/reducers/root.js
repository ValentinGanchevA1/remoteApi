define(["exports", "redux", "./propositionComponentPk", "./possibleTransactions", "./durationList", "./deviceList", "./selectedProposition", "./selectedDevice", "./documents", "./knaNumber", "./selectedTransactions", "./selectedLoyaltyPeriod", "./wwt", "./availableBundleTypes", "./searchCustomer", "./migration"], function(_exports, _redux, _propositionComponentPk, _possibleTransactions, _durationList, _deviceList, _selectedProposition, _selectedDevice, _documents, _knaNumber, _selectedTransactions, _selectedLoyaltyPeriod, _wwt, _availableBundleTypes, _searchCustomer, _migration) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _propositionComponentPk = babelHelpers.interopRequireDefault(_propositionComponentPk);
    _possibleTransactions = babelHelpers.interopRequireDefault(_possibleTransactions);
    _durationList = babelHelpers.interopRequireDefault(_durationList);
    _deviceList = babelHelpers.interopRequireDefault(_deviceList);
    _selectedProposition = babelHelpers.interopRequireDefault(_selectedProposition);
    _selectedDevice = babelHelpers.interopRequireDefault(_selectedDevice);
    _documents = babelHelpers.interopRequireDefault(_documents);
    _knaNumber = babelHelpers.interopRequireDefault(_knaNumber);
    _selectedLoyaltyPeriod = babelHelpers.interopRequireDefault(_selectedLoyaltyPeriod);
    _wwt = babelHelpers.interopRequireDefault(_wwt);
    _availableBundleTypes = babelHelpers.interopRequireDefault(_availableBundleTypes);
    _migration = babelHelpers.interopRequireDefault(_migration);

    var _default = (0, _redux.combineReducers)({
        propositionComponentPk: _propositionComponentPk.default,
        possibleTransactions: _possibleTransactions.default,
        durationList: _durationList.default,
        deviceList: _deviceList.default,
        selectedProposition: _selectedProposition.default,
        selectedDevice: _selectedDevice.default,
        documents: _documents.default,
        knaNumber: _knaNumber.default,
        selectedFixBroadbandTransaction: _selectedTransactions.selectedFixBroadbandTransactionReducer,
        selectedFixVoipTransaction: _selectedTransactions.selectedFixVoipTransactionReducer,
        selectedMobileTransaction: _selectedTransactions.selectedMobileTransactionReducer,
        selectedLoyaltyPeriod: _selectedLoyaltyPeriod.default,
        wwt: _wwt.default,
        availableBundleTypes: _availableBundleTypes.default,
        searchCustomer: _searchCustomer.searchCustomerReducer,
        migration: _migration.default
    });

    _exports.default = _default;
});
//# sourceMappingURL=root.js.map