define(["exports", "../actionTypes", "../remoteApi", "../selectors", "eshop/modules/cart/selectors", "./cart"], function(e, g, A, I, n, D) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.fetchMsisdns = s, e.fetchSimCards = function() {
        return function(n, e) {
            var t = (0, I.getResourceModalBundleNo)(e());
            A.default.getSimCards(t).then(function(e) {
                n({
                    type: g.FETCH_SIM_CARDS,
                    bundleNo: t,
                    payload: e
                })
            })
        }
    }, e.changeSimCard = e.changeMsisdn = e.updateResources = e.resourceModalClose = e.lowerInstallmentsModaClose = e.lowerInstallmentsModalOpen = e.resourceModalOpen = void 0, g = babelHelpers.interopRequireWildcard(g), A = babelHelpers.interopRequireDefault(A);
    e.resourceModalOpen = function(t) {
        return function(e, n) {
            e({
                type: g.RESOURCE_MODAL_OPEN,
                bundleNo: t,
                entry: (0, I.allCartEntries)(n()).find(function(e) {
                    return e.bundleNo === t
                })
            })
        }
    };
    e.lowerInstallmentsModalOpen = function(n) {
        return function(e) {
            e({
                type: g.LOWER_INSTALLMENTS_MODAL_OPEN,
                bundleNo: n
            })
        }
    };
    e.lowerInstallmentsModaClose = function(t) {
        return function(e, n) {
            e({
                type: g.LOWER_INSTALLMENTS_MODAL_CLOSE,
                bundleNo: t
            })
        }
    };

    function R(n) {
        return function(e) {
            e({
                type: g.RESOURCE_MODAL_CLOSE,
                bundleNo: n
            })
        }
    }
    e.resourceModalClose = R;

    function O(e, n, t, o) {
        var r, d, a;
        o && o.message && "string" == typeof o.message ? e((a = o, function(e) {
            e({
                type: g.CHANGE_MSISDN_FAILED,
                payload: a
            }), s()(e)
        })) : e((r = t, d = o, function(e, n) {
            e({
                type: g.CHANGE_MSISDN_SUCCESS,
                bundleNo: r,
                payload: d
            }), (0, D.reloadCartState)()(e, n)
        }))
    }

    function s() {
        return function(n, e) {
            (0, I.getMsisdns)(e()).length || A.default.getMsisdns((0, I.getResourceModalBundleNo)(e())).then(function(e) {
                return n({
                    type: g.FETCH_MSISDNS,
                    payload: e
                })
            })
        }
    }
    e.updateResources = function() {
        return function(e, n) {
            var t, o, r, d, a, s, i, u, l, c, C, S, p, f = (0, I.getMsisdn)(n()),
                M = (0, I.getSimCard)(n()),
                E = (0, I.getEntryForResourceModal)(n()),
                N = (0, I.getResourceModalBundleNo)(n()),
                _ = f && f !== E.msisdn,
                y = !E.simCard && !!M.id || !!E.simCard && M.id !== E.simCard.id,
                m = null != E.propositionId ? E.propositionId : E.bundleCode;
            _ && y ? (u = m, l = E.productCode, c = N, C = E.simCard ? [E.simCard.id] : [], S = "" === M.id ? [] : [M.id], p = f, function(n, t) {
                A.default.changeMsisdn(p, c).then(function(e) {
                    e && e.message && "string" == typeof e.message ? n({
                        type: g.CHANGE_MSISDN_FAILED,
                        payload: e
                    }) : (A.default.postUpdateCartSimCards(u, l, c, C, S).then(function() {
                        n({
                            type: g.CHANGE_SIMCARD_SUCCESS
                        }), (0, D.reloadCartState)()(n, t)
                    }), n({
                        type: g.CHANGE_MSISDN_SUCCESS,
                        bundleNo: c,
                        payload: e
                    }))
                })
            }(e, n)) : _ ? (s = f, i = N, function(n) {
                n({
                    type: g.CHANGE_MSISDN
                }), A.default.changeMsisdn(s, i).then(function(e) {
                    return O(n, 0, i, e)
                })
            }(e)) : y ? (t = m, o = E.productCode, r = N, d = E.simCard ? [E.simCard.id] : [], a = "" === M.id ? [] : [M.id], function(e, n) {
                e({
                    type: g.CHANGE_SIMCARD
                }), A.default.postUpdateCartSimCards(t, o, r, d, a).then(function() {
                    e({
                        type: g.CHANGE_SIMCARD_SUCCESS
                    }), (0, D.reloadCartState)()(e, n)
                })
            }(e, n)) : R(N)(e)
        }
    };
    e.changeMsisdn = function(n) {
        return function(e) {
            e({
                type: g.SET_MSISDN,
                msisdn: n
            })
        }
    };
    e.changeSimCard = function(n) {
        return function(e) {
            e({
                type: g.SET_SIMCARD,
                simCard: n
            })
        }
    }
});
//# sourceMappingURL=resources.js.map