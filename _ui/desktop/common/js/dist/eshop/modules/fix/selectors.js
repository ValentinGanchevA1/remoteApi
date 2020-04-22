define(["exports", "Reselect"], function(_exports, _Reselect) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.getRedirectUrlAfterWWT = _exports.verifyIfServicesListIsEmpty = _exports.getCustomerServicesList = _exports.getMetadata = _exports.getFixState = void 0;

    var getFixState = function getFixState(state) {
        return state["fix"];
    };

    _exports.getFixState = getFixState;
    var getMetadata = (0, _Reselect.createSelector)(getFixState, function(fix) {
        return fix.metaData;
    });
    _exports.getMetadata = getMetadata;
    var getCustomerServicesList = (0, _Reselect.createSelector)(getFixState, function(fix) {
        return fix.customerServices.customerServicesList;
    });
    _exports.getCustomerServicesList = getCustomerServicesList;
    var verifyIfServicesListIsEmpty = (0, _Reselect.createSelector)(getMetadata, function(metaData) {
        return metaData.verifyIfServiceListsEmpty;
    });
    _exports.verifyIfServicesListIsEmpty = verifyIfServicesListIsEmpty;
    var getRedirectUrlAfterWWT = (0, _Reselect.createSelector)(getMetadata, function(metadata) {
        return metadata.redirectUrlAfterWWT;
    });
    _exports.getRedirectUrlAfterWWT = getRedirectUrlAfterWWT;
});
//# sourceMappingURL=selectors.js.map