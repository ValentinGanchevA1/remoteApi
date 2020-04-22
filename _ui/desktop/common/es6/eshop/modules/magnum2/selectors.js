import _ from "lodash";
import {
    createSelector
} from "Reselect";

import FactoryType from "../core/constants/FactoryTypeEnum";
import {
    findTransaction,
    transactionKey
} from "./helpers/TransactionHelper";
import {
    RequestState
} from "../core/constants/RequestState";
import TransactionSubType from "../cart/components/entriesList/TransactionSubType";
import ProcessTypeEnum from "./constants/ProcessTypeEnum";
import Technology from "../core/enum/Technology";

export const getMagnumState = state => state['magnum'];

export const getPossibleFixBroadbandTransactions = createSelector(
    getMagnumState,
    magnum => magnum.possibleTransactions.transactions
    .filter(transaction => transaction.subType === TransactionSubType.DATA || (transaction.factory === FactoryType.FIX && !transaction.pots))
);
export const getPossibleFixVoipTransactions = createSelector(
    getMagnumState,
    magnum => {
        function isVoipTransaction(transaction) {
            if (magnum.selectedFixBroadbandTransaction.process === ProcessTypeEnum.ACTIVATION) {
                return transaction.factory === FactoryType.FIX && transaction.pots && _.includes([ProcessTypeEnum.ACTIVATION_WITH_NP_INT, ProcessTypeEnum.ACTIVATION_NNAKED], transaction.process);
            } else {
                return transaction.factory === FactoryType.FIX && transaction.pots && (!transaction.number || transaction.number === magnum.selectedFixBroadbandTransaction.number);
            }
        }
        if (magnum.possibleTransactions.requestState !== RequestState.Success) {
            return [];
        }
        return magnum.possibleTransactions.transactions.filter(transaction => isVoipTransaction(transaction));
    }
);
export const getAllFixVoipTransactions = createSelector(
    getMagnumState, magnum => magnum.possibleTransactions.transactions.filter(transaction => transaction.factory === FactoryType.FIX && transaction.pots)
);
export const getPossibleMobileTransactions = createSelector(
    getMagnumState,
    magnum => magnum.possibleTransactions.transactions.filter(transaction => transaction.subType === TransactionSubType.VOICE)
);

export const getSelectedFixBroadbandTransactionOption = createSelector(
    getMagnumState, magnum => transactionKey(magnum.selectedFixBroadbandTransaction)
);
export const getSelectedFixVoipTransactionOption = createSelector(
    getMagnumState, magnum => transactionKey(magnum.selectedFixVoipTransaction)
);
export const getSelectedMobileTransaction = createSelector(
    getMagnumState, magnum => magnum.selectedMobileTransaction
);

export const getSelectedFixTransaction = createSelector(
    getMagnumState, magnum => magnum.selectedFixVoipTransaction.process ? magnum.selectedFixVoipTransaction : magnum.selectedFixBroadbandTransaction
);

export const getSelectedFixBBTransactionRaw = createSelector(
    getMagnumState, magnum => magnum.selectedFixBroadbandTransaction
);

export const getSelectedFixVoipTransactionRaw = createSelector(
    getMagnumState, magnum => magnum.selectedFixVoipTransaction
);

export const getSelectedMobileTransactionOption = createSelector([getPossibleMobileTransactions, getSelectedMobileTransaction], (possibleTransaction, selectedTransaction) => {
    const transaction = possibleTransaction.find(t => findTransaction(t, selectedTransaction));
    return transaction ? transactionKey(transaction) : transactionKey(selectedTransaction);
});

export const validateDidSearchClientient = createSelector(
    getMagnumState, magnum => {
        if (!!magnum.searchCustomer.performed || !!magnum.possibleTransactions.cimId) {
            return true;
        }
        return false;
    }
);

export const getAllAvailableTechnologies = createSelector(
    getMagnumState,
    magnum => !!magnum.durationList && !!magnum.durationList.propositions && _.flatMap(magnum.durationList.propositions, p => p.fixTechnologyList) || []
);

const isTechnologyAvailableSelector = technology => createSelector(
    getAllAvailableTechnologies,
    availableTechnologies => _.includes(availableTechnologies, technology)
);

export const isADSLAvailable = isTechnologyAvailableSelector(Technology.ADSL);
export const isDTHAvailable = isTechnologyAvailableSelector(Technology.VIDSAT);
export const isFTTHAvailable = isTechnologyAvailableSelector(Technology.FTTH);

export const isXDSLAvailable = createSelector(
    getAllAvailableTechnologies,
    availableTechnologies => availableTechnologies.some(Technology.isXDSL)
);

export const showTechnologySwitch = createSelector(
    [isFTTHAvailable, isXDSLAvailable],
    (fTTHAvailable, xDSLAvailable) => fTTHAvailable && xDSLAvailable
);

export const isShowOnlyFTTH = createSelector(
    getMagnumState,
    magnum => !!magnum.durationList && magnum.durationList.showOnlyFTTH
);

export const wwt = createSelector(
    getMagnumState, magnum => magnum.wwt
);

export const wasSearchCustomerPerformed = createSelector(getMagnumState, magnum => !!magnum && !!magnum.searchCustomer && magnum.searchCustomer.performed)
export const isCustomerSelectedMagnumLP = createSelector(
    getMagnumState, magnum => {
        const cimId = !!magnum && !!magnum.possibleTransactions && magnum.possibleTransactions.cimId;
        const searchCustomerPerformed = !!magnum && !!magnum.searchCustomer && magnum.searchCustomer.performed;
        return searchCustomerPerformed || (cimId !== null && cimId !== undefined);
    }
);

export const getMagnumType = createSelector(
    getMagnumState, magnum => {
        if (magnum.selectedMobileTransaction && magnum.selectedFixBroadbandTransaction && magnum.selectedMobileTransaction.process === 'RETENTION' &&
            (magnum.selectedFixBroadbandTransaction.process === 'TERMINATION' ||
                magnum.selectedFixBroadbandTransaction.process === 'TERMINATION_DATA')) {
            return magnum.selectedMobileTransaction.subType;
        }
        return 'CONVERGENT';
    }
);

export const getPossibleTransactions = createSelector(getMagnumState, magnum => magnum.possibleTransactions);
export const getTransactions = createSelector(getPossibleTransactions, possibleTransactions => possibleTransactions.transactions);

export const getMagnumTerminalProcess = createSelector(getMagnumState, magnum => {
    if (magnum.selectedProposition) {
        const terminalProposition = magnum.selectedProposition.mobileVoiceBundleTemplateCode;
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

export const getMigrationFtthAvailabilityDateFromMagnum = createSelector(
    getMagnumState,
    magnum => !!magnum.durationList && magnum.durationList.ftthAvailabilityDate
);