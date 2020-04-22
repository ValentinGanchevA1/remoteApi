define(["exports", "lodash", "Reselect", "../core/constants/FactoryTypeEnum", "./helpers/TransactionHelper", "../core/constants/RequestState", "../cart/components/entriesList/TransactionSubType", "./constants/ProcessTypeEnum", "../core/enum/Technology"], function(e, n, a, r, o, t, i, s, c) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getMigrationFtthAvailabilityDateFromMagnum = e.getMagnumTerminalProcess = e.getTransactions = e.getPossibleTransactions = e.getMagnumType = e.isCustomerSelectedMagnumLP = e.wasSearchCustomerPerformed = e.wwt = e.isShowOnlyFTTH = e.showTechnologySwitch = e.isXDSLAvailable = e.isFTTHAvailable = e.isDTHAvailable = e.isADSLAvailable = e.getAllAvailableTechnologies = e.validateDidSearchClientient = e.getSelectedMobileTransactionOption = e.getSelectedFixVoipTransactionRaw = e.getSelectedFixBBTransactionRaw = e.getSelectedFixTransaction = e.getSelectedMobileTransaction = e.getSelectedFixVoipTransactionOption = e.getSelectedFixBroadbandTransactionOption = e.getPossibleMobileTransactions = e.getAllFixVoipTransactions = e.getPossibleFixVoipTransactions = e.getPossibleFixBroadbandTransactions = e.getMagnumState = void 0, n = babelHelpers.interopRequireDefault(n), r = babelHelpers.interopRequireDefault(r), i = babelHelpers.interopRequireDefault(i), s = babelHelpers.interopRequireDefault(s), c = babelHelpers.interopRequireDefault(c);

    function l(e) {
        return e.magnum
    }
    e.getMagnumState = l;
    var u = (0, a.createSelector)(l, function(e) {
        return e.possibleTransactions.transactions.filter(function(e) {
            return e.subType === i.default.DATA || e.factory === r.default.FIX && !e.pots
        })
    });
    e.getPossibleFixBroadbandTransactions = u;
    var d = (0, a.createSelector)(l, function(a) {
        return a.possibleTransactions.requestState !== t.RequestState.Success ? [] : a.possibleTransactions.transactions.filter(function(e) {
            return t = e, a.selectedFixBroadbandTransaction.process === s.default.ACTIVATION ? t.factory === r.default.FIX && t.pots && n.default.includes([s.default.ACTIVATION_WITH_NP_INT, s.default.ACTIVATION_NNAKED], t.process) : t.factory === r.default.FIX && t.pots && (!t.number || t.number === a.selectedFixBroadbandTransaction.number);
            var t
        })
    });
    e.getPossibleFixVoipTransactions = d;
    var T = (0, a.createSelector)(l, function(e) {
        return e.possibleTransactions.transactions.filter(function(e) {
            return e.factory === r.default.FIX && e.pots
        })
    });
    e.getAllFixVoipTransactions = T;
    var p = (0, a.createSelector)(l, function(e) {
        return e.possibleTransactions.transactions.filter(function(e) {
            return e.subType === i.default.VOICE
        })
    });
    e.getPossibleMobileTransactions = p;
    var b = (0, a.createSelector)(l, function(e) {
        return (0, o.transactionKey)(e.selectedFixBroadbandTransaction)
    });
    e.getSelectedFixBroadbandTransactionOption = b;
    var f = (0, a.createSelector)(l, function(e) {
        return (0, o.transactionKey)(e.selectedFixVoipTransaction)
    });
    e.getSelectedFixVoipTransactionOption = f;
    var S = (0, a.createSelector)(l, function(e) {
        return e.selectedMobileTransaction
    });
    e.getSelectedMobileTransaction = S;
    var g = (0, a.createSelector)(l, function(e) {
        return e.selectedFixVoipTransaction.process ? e.selectedFixVoipTransaction : e.selectedFixBroadbandTransaction
    });
    e.getSelectedFixTransaction = g;
    var v = (0, a.createSelector)(l, function(e) {
        return e.selectedFixBroadbandTransaction
    });
    e.getSelectedFixBBTransactionRaw = v;
    var F = (0, a.createSelector)(l, function(e) {
        return e.selectedFixVoipTransaction
    });
    e.getSelectedFixVoipTransactionRaw = F;
    var m = (0, a.createSelector)([p, S], function(e, t) {
        var a = e.find(function(e) {
            return (0, o.findTransaction)(e, t)
        });
        return a ? (0, o.transactionKey)(a) : (0, o.transactionKey)(t)
    });
    e.getSelectedMobileTransactionOption = m;
    var A = (0, a.createSelector)(l, function(e) {
        return !(!e.searchCustomer.performed && !e.possibleTransactions.cimId)
    });
    e.validateDidSearchClientient = A;
    var x = (0, a.createSelector)(l, function(e) {
        return !!e.durationList && !!e.durationList.propositions && n.default.flatMap(e.durationList.propositions, function(e) {
            return e.fixTechnologyList
        }) || []
    });
    e.getAllAvailableTechnologies = x;

    function M(t) {
        return (0, a.createSelector)(x, function(e) {
            return n.default.includes(e, t)
        })
    }
    var h = M(c.default.ADSL);
    e.isADSLAvailable = h;
    var y = M(c.default.VIDSAT);
    e.isDTHAvailable = y;
    var P = M(c.default.FTTH);
    e.isFTTHAvailable = P;
    var D = (0, a.createSelector)(x, function(e) {
        return e.some(c.default.isXDSL)
    });
    e.isXDSLAvailable = D;
    var I = (0, a.createSelector)([P, D], function(e, t) {
        return e && t
    });
    e.showTechnologySwitch = I;
    var O = (0, a.createSelector)(l, function(e) {
        return !!e.durationList && e.durationList.showOnlyFTTH
    });
    e.isShowOnlyFTTH = O;
    var w = (0, a.createSelector)(l, function(e) {
        return e.wwt
    });
    e.wwt = w;
    var V = (0, a.createSelector)(l, function(e) {
        return !!e && !!e.searchCustomer && e.searchCustomer.performed
    });
    e.wasSearchCustomerPerformed = V;
    var B = (0, a.createSelector)(l, function(e) {
        var t = !!e && !!e.possibleTransactions && e.possibleTransactions.cimId;
        return !!e && !!e.searchCustomer && e.searchCustomer.performed || null != t
    });
    e.isCustomerSelectedMagnumLP = B;
    var C = (0, a.createSelector)(l, function(e) {
        return e.selectedMobileTransaction && e.selectedFixBroadbandTransaction && "RETENTION" === e.selectedMobileTransaction.process && ("TERMINATION" === e.selectedFixBroadbandTransaction.process || "TERMINATION_DATA" === e.selectedFixBroadbandTransaction.process) ? e.selectedMobileTransaction.subType : "CONVERGENT"
    });
    e.getMagnumType = C;
    var L = (0, a.createSelector)(l, function(e) {
        return e.possibleTransactions
    });
    e.getPossibleTransactions = L;
    var N = (0, a.createSelector)(L, function(e) {
        return e.transactions
    });
    e.getTransactions = N;
    var R = (0, a.createSelector)(l, function(e) {
        return e.selectedProposition ? e.selectedProposition.mobileVoiceBundleTemplateCode.includes(e.selectedProposition.voice.code) ? "POS" === e.possibleTransactions.salesChannel && "MNP" === e.selectedMobileTransaction.process ? "MNP_TWOSTEP" : e.selectedMobileTransaction.process : e.selectedFixBroadbandTransaction.process : ""
    });
    e.getMagnumTerminalProcess = R;
    var H = (0, a.createSelector)(l, function(e) {
        return !!e.durationList && e.durationList.ftthAvailabilityDate
    });
    e.getMigrationFtthAvailabilityDateFromMagnum = H
});
//# sourceMappingURL=selectors.js.map