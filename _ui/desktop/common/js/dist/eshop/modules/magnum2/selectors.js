define(["exports", "lodash", "Reselect", "../core/constants/FactoryTypeEnum", "./helpers/TransactionHelper", "../core/constants/RequestState", "../cart/components/entriesList/TransactionSubType", "./constants/ProcessTypeEnum", "../core/enum/Technology"], function(_exports, _lodash, _Reselect, _FactoryTypeEnum, _TransactionHelper, _RequestState, _TransactionSubType, _ProcessTypeEnum, _Technology) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.getMigrationFtthAvailabilityDateFromMagnum = _exports.getMagnumTerminalProcess = _exports.getTransactions = _exports.getPossibleTransactions = _exports.getMagnumType = _exports.isCustomerSelectedMagnumLP = _exports.wasSearchCustomerPerformed = _exports.wwt = _exports.isShowOnlyFTTH = _exports.showTechnologySwitch = _exports.isXDSLAvailable = _exports.isFTTHAvailable = _exports.isDTHAvailable = _exports.isADSLAvailable = _exports.getAllAvailableTechnologies = _exports.validateDidSearchClientient = _exports.getSelectedMobileTransactionOption = _exports.getSelectedFixVoipTransactionRaw = _exports.getSelectedFixBBTransactionRaw = _exports.getSelectedFixTransaction = _exports.getSelectedMobileTransaction = _exports.getSelectedFixVoipTransactionOption = _exports.getSelectedFixBroadbandTransactionOption = _exports.getPossibleMobileTransactions = _exports.getAllFixVoipTransactions = _exports.getPossibleFixVoipTransactions = _exports.getPossibleFixBroadbandTransactions = _exports.getMagnumState = void 0;
    _lodash = babelHelpers.interopRequireDefault(_lodash);
    _FactoryTypeEnum = babelHelpers.interopRequireDefault(_FactoryTypeEnum);
    _TransactionSubType = babelHelpers.interopRequireDefault(_TransactionSubType);
    _ProcessTypeEnum = babelHelpers.interopRequireDefault(_ProcessTypeEnum);
    _Technology = babelHelpers.interopRequireDefault(_Technology);

    var getMagnumState = function getMagnumState(state) {
        return state['magnum'];
    };

    _exports.getMagnumState = getMagnumState;
    var getPossibleFixBroadbandTransactions = (0, _Reselect.createSelector)(getMagnumState, function(magnum) {
        return magnum.possibleTransactions.transactions.filter(function(transaction) {
            return transaction.subType === _TransactionSubType.default.DATA || transaction.factory === _FactoryTypeEnum.default.FIX && !transaction.pots;
        });
    });
    _exports.getPossibleFixBroadbandTransactions = getPossibleFixBroadbandTransactions;
    var getPossibleFixVoipTransactions = (0, _Reselect.createSelector)(getMagnumState, function(magnum) {
        function isVoipTransaction(transaction) {
            if (magnum.selectedFixBroadbandTransaction.process === _ProcessTypeEnum.default.ACTIVATION) {
                return transaction.factory === _FactoryTypeEnum.default.FIX && transaction.pots && _lodash.default.includes([_ProcessTypeEnum.default.ACTIVATION_WITH_NP_INT, _ProcessTypeEnum.default.ACTIVATION_NNAKED], transaction.process);
            } else {
                return transaction.factory === _FactoryTypeEnum.default.FIX && transaction.pots && (!transaction.number || transaction.number === magnum.selectedFixBroadbandTransaction.number);
            }
        }

        if (magnum.possibleTransactions.requestState !== _RequestState.RequestState.Success) {
            return [];
        }

        return magnum.possibleTransactions.transactions.filter(function(transaction) {
            return isVoipTransaction(transaction);
        });
    });
    _exports.getPossibleFixVoipTransactions = getPossibleFixVoipTransactions;
    var getAllFixVoipTransactions = (0, _Reselect.createSelector)(getMagnumState, function(magnum) {
        return magnum.possibleTransactions.transactions.filter(function(transaction) {
            return transaction.factory === _FactoryTypeEnum.default.FIX && transaction.pots;
        });
    });
    _exports.getAllFixVoipTransactions = getAllFixVoipTransactions;
    var getPossibleMobileTransactions = (0, _Reselect.createSelector)(getMagnumState, function(magnum) {
        return magnum.possibleTransactions.transactions.filter(function(transaction) {
            return transaction.subType === _TransactionSubType.default.VOICE;
        });
    });
    _exports.getPossibleMobileTransactions = getPossibleMobileTransactions;
    var getSelectedFixBroadbandTransactionOption = (0, _Reselect.createSelector)(getMagnumState, function(magnum) {
        return (0, _TransactionHelper.transactionKey)(magnum.selectedFixBroadbandTransaction);
    });
    _exports.getSelectedFixBroadbandTransactionOption = getSelectedFixBroadbandTransactionOption;
    var getSelectedFixVoipTransactionOption = (0, _Reselect.createSelector)(getMagnumState, function(magnum) {
        return (0, _TransactionHelper.transactionKey)(magnum.selectedFixVoipTransaction);
    });
    _exports.getSelectedFixVoipTransactionOption = getSelectedFixVoipTransactionOption;
    var getSelectedMobileTransaction = (0, _Reselect.createSelector)(getMagnumState, function(magnum) {
        return magnum.selectedMobileTransaction;
    });
    _exports.getSelectedMobileTransaction = getSelectedMobileTransaction;
    var getSelectedFixTransaction = (0, _Reselect.createSelector)(getMagnumState, function(magnum) {
        return magnum.selectedFixVoipTransaction.process ? magnum.selectedFixVoipTransaction : magnum.selectedFixBroadbandTransaction;
    });
    _exports.getSelectedFixTransaction = getSelectedFixTransaction;
    var getSelectedFixBBTransactionRaw = (0, _Reselect.createSelector)(getMagnumState, function(magnum) {
        return magnum.selectedFixBroadbandTransaction;
    });
    _exports.getSelectedFixBBTransactionRaw = getSelectedFixBBTransactionRaw;
    var getSelectedFixVoipTransactionRaw = (0, _Reselect.createSelector)(getMagnumState, function(magnum) {
        return magnum.selectedFixVoipTransaction;
    });
    _exports.getSelectedFixVoipTransactionRaw = getSelectedFixVoipTransactionRaw;
    var getSelectedMobileTransactionOption = (0, _Reselect.createSelector)([getPossibleMobileTransactions, getSelectedMobileTransaction], function(possibleTransaction, selectedTransaction) {
        var transaction = possibleTransaction.find(function(t) {
            return (0, _TransactionHelper.findTransaction)(t, selectedTransaction);
        });
        return transaction ? (0, _TransactionHelper.transactionKey)(transaction) : (0, _TransactionHelper.transactionKey)(selectedTransaction);
    });
    _exports.getSelectedMobileTransactionOption = getSelectedMobileTransactionOption;
    var validateDidSearchClientient = (0, _Reselect.createSelector)(getMagnumState, function(magnum) {
        if (!!magnum.searchCustomer.performed || !!magnum.possibleTransactions.cimId) {
            return true;
        }

        return false;
    });
    _exports.validateDidSearchClientient = validateDidSearchClientient;
    var getAllAvailableTechnologies = (0, _Reselect.createSelector)(getMagnumState, function(magnum) {
        return !!magnum.durationList && !!magnum.durationList.propositions && _lodash.default.flatMap(magnum.durationList.propositions, function(p) {
            return p.fixTechnologyList;
        }) || [];
    });
    _exports.getAllAvailableTechnologies = getAllAvailableTechnologies;

    var isTechnologyAvailableSelector = function isTechnologyAvailableSelector(technology) {
        return (0, _Reselect.createSelector)(getAllAvailableTechnologies, function(availableTechnologies) {
            return _lodash.default.includes(availableTechnologies, technology);
        });
    };

    var isADSLAvailable = isTechnologyAvailableSelector(_Technology.default.ADSL);
    _exports.isADSLAvailable = isADSLAvailable;
    var isDTHAvailable = isTechnologyAvailableSelector(_Technology.default.VIDSAT);
    _exports.isDTHAvailable = isDTHAvailable;
    var isFTTHAvailable = isTechnologyAvailableSelector(_Technology.default.FTTH);
    _exports.isFTTHAvailable = isFTTHAvailable;
    var isXDSLAvailable = (0, _Reselect.createSelector)(getAllAvailableTechnologies, function(availableTechnologies) {
        return availableTechnologies.some(_Technology.default.isXDSL);
    });
    _exports.isXDSLAvailable = isXDSLAvailable;
    var showTechnologySwitch = (0, _Reselect.createSelector)([isFTTHAvailable, isXDSLAvailable], function(fTTHAvailable, xDSLAvailable) {
        return fTTHAvailable && xDSLAvailable;
    });
    _exports.showTechnologySwitch = showTechnologySwitch;
    var isShowOnlyFTTH = (0, _Reselect.createSelector)(getMagnumState, function(magnum) {
        return !!magnum.durationList && magnum.durationList.showOnlyFTTH;
    });
    _exports.isShowOnlyFTTH = isShowOnlyFTTH;
    var wwt = (0, _Reselect.createSelector)(getMagnumState, function(magnum) {
        return magnum.wwt;
    });
    _exports.wwt = wwt;
    var wasSearchCustomerPerformed = (0, _Reselect.createSelector)(getMagnumState, function(magnum) {
        return !!magnum && !!magnum.searchCustomer && magnum.searchCustomer.performed;
    });
    _exports.wasSearchCustomerPerformed = wasSearchCustomerPerformed;
    var isCustomerSelectedMagnumLP = (0, _Reselect.createSelector)(getMagnumState, function(magnum) {
        var cimId = !!magnum && !!magnum.possibleTransactions && magnum.possibleTransactions.cimId;
        var searchCustomerPerformed = !!magnum && !!magnum.searchCustomer && magnum.searchCustomer.performed;
        return searchCustomerPerformed || cimId !== null && cimId !== undefined;
    });
    _exports.isCustomerSelectedMagnumLP = isCustomerSelectedMagnumLP;
    var getMagnumType = (0, _Reselect.createSelector)(getMagnumState, function(magnum) {
        if (magnum.selectedMobileTransaction && magnum.selectedFixBroadbandTransaction && magnum.selectedMobileTransaction.process === 'RETENTION' && (magnum.selectedFixBroadbandTransaction.process === 'TERMINATION' || magnum.selectedFixBroadbandTransaction.process === 'TERMINATION_DATA')) {
            return magnum.selectedMobileTransaction.subType;
        }

        return 'CONVERGENT';
    });
    _exports.getMagnumType = getMagnumType;
    var getPossibleTransactions = (0, _Reselect.createSelector)(getMagnumState, function(magnum) {
        return magnum.possibleTransactions;
    });
    _exports.getPossibleTransactions = getPossibleTransactions;
    var getTransactions = (0, _Reselect.createSelector)(getPossibleTransactions, function(possibleTransactions) {
        return possibleTransactions.transactions;
    });
    _exports.getTransactions = getTransactions;
    var getMagnumTerminalProcess = (0, _Reselect.createSelector)(getMagnumState, function(magnum) {
        if (magnum.selectedProposition) {
            var terminalProposition = magnum.selectedProposition.mobileVoiceBundleTemplateCode;

            if (terminalProposition.includes(magnum.selectedProposition.voice.code)) {
                if ("POS" === magnum.possibleTransactions.salesChannel && "MNP" === magnum.selectedMobileTransaction.process) {
                    return "MNP_TWOSTEP";
                } else {
                    return magnum.selectedMobileTransaction.process;
                }
            } else {
                return magnum.selectedFixBroadbandTransaction.process;
            }
        }

        return '';
    });
    _exports.getMagnumTerminalProcess = getMagnumTerminalProcess;
    var getMigrationFtthAvailabilityDateFromMagnum = (0, _Reselect.createSelector)(getMagnumState, function(magnum) {
        return !!magnum.durationList && magnum.durationList.ftthAvailabilityDate;
    });
    _exports.getMigrationFtthAvailabilityDateFromMagnum = getMigrationFtthAvailabilityDateFromMagnum;
});
//# sourceMappingURL=selectors.js.map