define(["exports", "Reselect", "./root", "../enum/VoipVariant"], function(e, t, r, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getDesignationNumber = e.getNumbersFetching = e.getNumbersFetched = e.getSelectedVoipNumber = e.getShowVoipNumbersModal = e.getShowVoipVariantModal = e.getDesignationNumbers = e.getVoipNumbers = e.getVoipVariant = e.getVoipState = void 0, n = babelHelpers.interopRequireDefault(n);
    var o = (0, t.createSelector)(r.getFixState, function(e) {
        return e.voip
    });
    e.getVoipState = o;
    var i = (0, t.createSelector)(o, function(e) {
        return e.variant
    });
    e.getVoipVariant = i;
    var a = (0, t.createSelector)(o, function(e) {
        return e.voipNumbers
    });
    e.getVoipNumbers = a;
    var u = (0, t.createSelector)(o, function(e) {
        var t = e.designationNumbers || [];
        return e.designationNumber && t.push(e.designationNumber), babelHelpers.toConsumableArray(new Set(t))
    });
    e.getDesignationNumbers = u;
    var c = (0, t.createSelector)(o, function(e) {
        return e.showVariantModal && 0 < e.designationNumbers.length
    });
    e.getShowVoipVariantModal = c;
    var s = (0, t.createSelector)([o, c, i], function(e, t, r) {
        return !t && e.showNumbersModal && 0 < e.voipNumbers.length && r === n.default.NEW_VOIP
    });
    e.getShowVoipNumbersModal = s;
    var g = (0, t.createSelector)(o, function(e) {
        return e.selectedVoipNumber
    });
    e.getSelectedVoipNumber = g;
    var b = (0, t.createSelector)(o, function(e) {
        return e.numbersFetched
    });
    e.getNumbersFetched = b;
    var l = (0, t.createSelector)(o, function(e) {
        return e.numbersFetching
    });
    e.getNumbersFetching = l;
    var m = (0, t.createSelector)(o, function(e) {
        return e.designationNumber
    });
    e.getDesignationNumber = m
});
//# sourceMappingURL=voip.js.map