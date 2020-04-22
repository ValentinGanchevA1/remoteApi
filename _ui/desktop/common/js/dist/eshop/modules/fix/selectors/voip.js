define(["exports", "Reselect", "./root", "../enum/VoipVariant"], function(_exports, _Reselect, _root, _VoipVariant) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.getDesignationNumber = _exports.getNumbersFetching = _exports.getNumbersFetched = _exports.getSelectedVoipNumber = _exports.getShowVoipNumbersModal = _exports.getShowVoipVariantModal = _exports.getDesignationNumbers = _exports.getVoipNumbers = _exports.getVoipVariant = _exports.getVoipState = void 0;
    _VoipVariant = babelHelpers.interopRequireDefault(_VoipVariant);
    var getVoipState = (0, _Reselect.createSelector)(_root.getFixState, function(fix) {
        return fix.voip;
    });
    _exports.getVoipState = getVoipState;
    var getVoipVariant = (0, _Reselect.createSelector)(getVoipState, function(voip) {
        return voip.variant;
    });
    _exports.getVoipVariant = getVoipVariant;
    var getVoipNumbers = (0, _Reselect.createSelector)(getVoipState, function(voip) {
        return voip.voipNumbers;
    });
    _exports.getVoipNumbers = getVoipNumbers;
    var getDesignationNumbers = (0, _Reselect.createSelector)(getVoipState, function(voip) {
        var desNumbers = voip.designationNumbers || [];

        if (!!voip.designationNumber) {
            desNumbers.push(voip.designationNumber);
        }

        return babelHelpers.toConsumableArray(new Set(desNumbers));
    });
    _exports.getDesignationNumbers = getDesignationNumbers;
    var getShowVoipVariantModal = (0, _Reselect.createSelector)(getVoipState, function(voip) {
        return voip.showVariantModal && voip.designationNumbers.length > 0;
    });
    _exports.getShowVoipVariantModal = getShowVoipVariantModal;
    var getShowVoipNumbersModal = (0, _Reselect.createSelector)([getVoipState, getShowVoipVariantModal, getVoipVariant], function(voip, showVariantModal, voipVariant) {
        return !showVariantModal && voip.showNumbersModal && voip.voipNumbers.length > 0 && voipVariant === _VoipVariant.default.NEW_VOIP;
    });
    _exports.getShowVoipNumbersModal = getShowVoipNumbersModal;
    var getSelectedVoipNumber = (0, _Reselect.createSelector)(getVoipState, function(voip) {
        return voip.selectedVoipNumber;
    });
    _exports.getSelectedVoipNumber = getSelectedVoipNumber;
    var getNumbersFetched = (0, _Reselect.createSelector)(getVoipState, function(voip) {
        return voip.numbersFetched;
    });
    _exports.getNumbersFetched = getNumbersFetched;
    var getNumbersFetching = (0, _Reselect.createSelector)(getVoipState, function(voip) {
        return voip.numbersFetching;
    });
    _exports.getNumbersFetching = getNumbersFetching;
    var getDesignationNumber = (0, _Reselect.createSelector)(getVoipState, function(voip) {
        return voip.designationNumber;
    });
    _exports.getDesignationNumber = getDesignationNumber;
});
//# sourceMappingURL=voip.js.map