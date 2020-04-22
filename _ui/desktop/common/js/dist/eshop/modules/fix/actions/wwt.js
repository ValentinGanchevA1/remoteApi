define(["exports", "../actionTypes", "../../magnum2/actionTypes", "./offers", "./voip", "../selectors/root"], function(_exports, ACTIONS, MAGNUM_ACTIONS, _offers, _voip, _root) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.setRedirectUrlAfterWWT = _exports.doHideWWTModal = _exports.doShowWWTModal = _exports.saveWWTAddress = _exports.updateAddress = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);
    MAGNUM_ACTIONS = babelHelpers.interopRequireWildcard(MAGNUM_ACTIONS);

    var updateAddress = function updateAddress(address) {
        var customerServicesHashCode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var reset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var checkApartment = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        return function(dispatch, getState) {
            var www = (0, _root.isWWW)(getState());
            dispatch((0, _offers.checkAvailablePromotions)(address)).then(function(response) {
                if (!address.fromSession && !www && checkApartment && !!response && !!response.availableApartments && response.availableApartments.length > 0) {
                    dispatch({
                        type: MAGNUM_ACTIONS.SAVE_WWT_ADDITIONAL_DATA,
                        payload: response
                    });
                } else {
                    dispatch((0, _offers.fetchOffers)(address, customerServicesHashCode, reset));
                }
            });
        };
    };

    _exports.updateAddress = updateAddress;

    var saveWWTAddress = function saveWWTAddress(_ref) {
        var _ref$address = _ref.address,
            address = _ref$address === void 0 ? null : _ref$address,
            _ref$forceAfterWwt = _ref.forceAfterWwt,
            forceAfterWwt = _ref$forceAfterWwt === void 0 ? false : _ref$forceAfterWwt,
            _ref$designationNumbe = _ref.designationNumber,
            designationNumber = _ref$designationNumbe === void 0 ? null : _ref$designationNumbe;
        return function(dispatch) {
            dispatch((0, _voip.saveDesignationNumber)(designationNumber));
            dispatch({
                type: ACTIONS.SAVE_WWT_ADDRESS,
                payload: address
            });

            if ((0, _offers.isAddressNotEmpty)(address) || forceAfterWwt) {
                dispatch({
                    type: ACTIONS.AFTER_WWT
                });
            } else {
                dispatch({
                    type: ACTIONS.BEFORE_WWT
                });
            }
        };
    };

    _exports.saveWWTAddress = saveWWTAddress;

    var doShowWWTModal = function doShowWWTModal() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SHOW_WWT_MODAL
            });
        };
    };

    _exports.doShowWWTModal = doShowWWTModal;

    var doHideWWTModal = function doHideWWTModal() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.HIDE_WWT_MODAL
            });
        };
    };

    _exports.doHideWWTModal = doHideWWTModal;

    var setRedirectUrlAfterWWT = function setRedirectUrlAfterWWT(url) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SET_REDIRECT_URL_AFTER_WWT,
                url: url
            });
        };
    };

    _exports.setRedirectUrlAfterWWT = setRedirectUrlAfterWWT;
});
//# sourceMappingURL=wwt.js.map