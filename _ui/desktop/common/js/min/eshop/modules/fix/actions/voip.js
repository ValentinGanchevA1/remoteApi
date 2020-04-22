define(["exports", "../actionTypes", "../remoteApi", "../selectors/root", "./offers", "../selectors/voip"], function(e, r, u, a, c, p) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.saveDesignationNumber = e.showVoipNumbersModal = e.showVoipVariantModal = e.selectVoipVariant = e.mountVoipModalComponent = e.saveSelectedVoipNumber = e.selectVoipNumber = e.fetchVoipNumbers = e.voipSelection = void 0, r = babelHelpers.interopRequireWildcard(r), u = babelHelpers.interopRequireDefault(u);
    e.voipSelection = function(i) {
        return function(e, t) {
            var o = (0, p.getNumbersFetching)(t()),
                n = (0, p.getNumbersFetched)(t());
            o || n || e(f((0, a.getWwtCityId)(t()))), e({
                type: r.VOIP_SELECTION,
                source: "voipSelection",
                payload: i
            })
        }
    };

    function o(t) {
        return function(e) {
            e({
                type: r.SAVE_VOIP_NUMBERS,
                payload: t
            }), t && t.voipNumbers && t.voipNumbers[0] && e(l(t.voipNumbers[0]))
        }
    }

    function n(t) {
        return function(e) {
            e({
                type: r.VOIP_NUMBERS_FETCHED,
                payload: t
            })
        }
    }

    function i(t) {
        return function(e) {
            e({
                type: r.VOIP_NUMBERS_FETCHING,
                payload: t
            })
        }
    }
    var f = function(e) {
        return function(t) {
            return t(i(!0)), t(o()), t(n(!1)), u.default.fetchVoipNumbers(e).then(function(e) {
                return t(o(e)), t(n(!0)), t(i(!1)), e
            })
        }
    };
    e.fetchVoipNumbers = f;
    var l = function(t) {
        return function(e) {
            e({
                type: r.SELECT_VOIP_NUMBER,
                payload: t
            })
        }
    };
    e.selectVoipNumber = l;
    e.saveSelectedVoipNumber = function(i) {
        return function(e, t) {
            var o = (0, a.isSecondaryChoiceOfferSelected)(t()),
                n = (0, a.getSelectedOfferId)(t());
            u.default.saveSelectedVoipNumber(i).then(function() {
                e({
                    type: r.VOIP_NUMBER_SELECTED
                }), n && e((0, c.addToCart)(n, o))
            })
        }
    };
    e.mountVoipModalComponent = function() {
        return function(e) {
            e({
                type: r.MOUNT_VOIP_MODAL_COMPONENT_ACTION
            })
        }
    };
    e.selectVoipVariant = function(t) {
        return function(e) {
            e({
                type: r.VOIP_VARIANT,
                payload: t
            })
        }
    };
    e.showVoipVariantModal = function(t) {
        return function(e) {
            e({
                type: r.SHOW_VOIP_VARIANT_MODAL,
                payload: t
            })
        }
    };
    e.showVoipNumbersModal = function(t) {
        return function(e) {
            e({
                type: r.SHOW_VOIP_NUMBERS_MODAL,
                payload: t
            })
        }
    };
    e.saveDesignationNumber = function(t) {
        return function(e) {
            e({
                type: r.DESIGNATION_NUMBER,
                payload: t
            })
        }
    }
});
//# sourceMappingURL=voip.js.map