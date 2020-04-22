define(["exports", "Reselect"], function(e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getRedirectUrlAfterWWT = e.verifyIfServicesListIsEmpty = e.getCustomerServicesList = e.getMetadata = e.getFixState = void 0;

    function r(e) {
        return e.fix
    }
    e.getFixState = r;
    var i = (0, t.createSelector)(r, function(e) {
        return e.metaData
    });
    e.getMetadata = i;
    var c = (0, t.createSelector)(r, function(e) {
        return e.customerServices.customerServicesList
    });
    e.getCustomerServicesList = c;
    var s = (0, t.createSelector)(i, function(e) {
        return e.verifyIfServiceListsEmpty
    });
    e.verifyIfServicesListIsEmpty = s;
    var a = (0, t.createSelector)(i, function(e) {
        return e.redirectUrlAfterWWT
    });
    e.getRedirectUrlAfterWWT = a
});
//# sourceMappingURL=selectors.js.map