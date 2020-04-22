define(["exports", "eshop/flux/utils/OraApiUtils"], function(e, i) {
    "use strict";

    function r(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;

    function a(e) {
        return bsfContextPath + ("undefined" != typeof prefixWWW ? prefixWWW : "") + e
    }

    function o(e) {
        return a(e)
    }
    var t = "/koszyk/multi/_data",
        u = "/koszyk/additional/manual/isFinish",
        n = {
            getCart: function() {
                return (0, i.get)(a(t + "/cart"))
            },
            getOrder: function() {
                return (0, i.get)(a(t + "/pickupOrder"))
            },
            getMiniCart: function(e) {
                return (0, i.get)(a("/koszyk/minikoszyk"), {
                    "availableProductsKeys[]": e
                })
            },
            removeFromCart: function(e, t) {
                var n = 0 < arguments.length && void 0 !== e ? e : "",
                    r = 1 < arguments.length && void 0 !== t ? t : null,
                    o = "/koszyk/usun" + (null !== r ? "/" + r : "");
                return (0, i.postJsonObject)(o, n)
            },
            markAsRepayment: function() {
                return (0, i.get)(a("/koszyk/markAsDebtRepaymentAccepted"))
            },
            removeTerminalFromCartBundle: function(e, t) {},
            removeDeviceFromSimfreeBundle: function(e, t, n) {
                var r = 0 < arguments.length && void 0 !== e ? e : 1,
                    o = 1 < arguments.length && void 0 !== t ? t : null,
                    u = 2 < arguments.length && void 0 !== n && n;
                return (0, i.postJson)(a("/koszyk/removeDeviceFromSimFreeBundle"), {
                    bundleNo: r,
                    entryNumber: o,
                    lastOne: u
                })
            },
            removeCartByOmniCode: function(e) {
                return (0, i.deleteJson)(a("/koszyk/removeByOmniCode") + "/" + e)
            },
            removeMagnumFromMultiCart: function(e) {
                var t = bsfContextPath + "/multiCart/remove";
                return (0, i.postJsonObjectNoResult)(t, e)
            },
            removeTerminalFromConvergentCartBundle: function(e, t) {
                var n = bsfContextPath + "/multiCart/removeTerminal";
                return (0, i.post)(n, {
                    bundleNo: e,
                    terminalCode: t
                })
            },
            goToOrangeLove4DLandingPage: function() {
                document.location.href = bsfContextPath + "/orangeLove4D"
            },
            goToOrangeLove2DLandingPage: function() {
                document.location.href = bsfContextPath + "/orangeLove2D"
            },
            goToOrangeLoveLTE4FIXLandingPage: function() {
                document.location.href = bsfContextPath + "/orangeLoveLTE4FIX"
            },
            getMobileVases: function(e, t, n) {
                var r = 0 < arguments.length && void 0 !== e ? e : "",
                    o = 1 < arguments.length && void 0 !== t ? t : "",
                    u = 2 < arguments.length && void 0 !== n ? n : "";
                return (0, i.get)(a("/vases/getVases"), {
                    propositionId: r,
                    bundle: o,
                    process: u
                })
            },
            getFixConfigurables: function(e) {
                var t = 0 < arguments.length && void 0 !== e ? e : "";
                return (0, i.get)(o("/fix/cart/data/configurables"), {
                    cartBundle: t
                })
            },
            getConvergentConfigurables: function(e) {
                var t = 0 < arguments.length && void 0 !== e ? e : [];
                return (0, i.get)(o("/multiCart/configurables"), {
                    bundleNos: t.join(",")
                })
            },
            postUpdateFixCartProducts: function(e, t, n, r) {
                return (0, i.postJson)(o("/fix/cart/updateProducts"), {
                    bundle: e,
                    cartBundle: n,
                    offer: t,
                    products: r
                })
            },
            postUpdateCartVases: function(e, t, n, r, o) {
                return (0, i.postJson)(a("/koszyk/updateMobileVases"), {
                    bundle: e,
                    cartBundle: n,
                    offer: t,
                    productsToRemove: r,
                    productsToAdd: o
                })
            },
            postUpdateCartSimCards: function(e, t, n, r, o) {
                return (0, i.postJson)(a("/koszyk/updateSimCards"), {
                    bundle: e,
                    cartBundle: n,
                    offer: t,
                    productsToRemove: r,
                    productsToAdd: o
                })
            },
            postUpdateConvergentCartProducts: function(e) {
                return (0, i.postJsonObject)(o("/multiCart/configurables"), e)
            },
            postUpdateCartDevices: function(e, t, n, r, o) {
                return (0, i.postJson)(a("/koszyk/updateDevices"), {
                    bundle: e,
                    cartBundle: n,
                    offer: t,
                    productsToRemove: r,
                    productsToAdd: o
                })
            },
            postLowerInstallments: function(e, t, n) {
                return (0, i.postJson)(a("/koszyk/lowerInstallments"), {
                    bundleNo: e,
                    diff: t,
                    market: n
                })
            },
            getMsisdns: function(e) {
                return (0, i.get)(a("/resources/msisdns"), {
                    bundleNo: e
                })
            },
            getSimCards: function(e) {
                return (0, i.get)(a("/resources/simcards"), {
                    bundleNo: e
                })
            },
            changeMsisdn: function(e, t) {
                return (0, i.post)(a("/resources/msisdn"), {
                    msisdn: e,
                    bundleNo: t
                })
            },
            checkManualVerificationIsFinish: function(t, n) {
                return (0, i.get)(a(u)).then(function(e) {
                    if (!e) return (0, i.poll)(a(u), null, function(e) {
                        return !0 === e
                    }, t, n)
                })
            },
            getManualVerificationStatus: function() {
                return (0, i.get)(a("/koszyk/additional/manual/getStatus"))
            },
            getPickupMiniCart: function() {
                return (0, i.get)(a("/pickup/minicart"))
            },
            findApplicableProducts: function(e) {
                return (0, i.get)(a("/voucher/getEntries"), {
                    code: e
                })
            },
            applyVoucher: function(e, t) {
                return (0, i.postJsonObject)(a("/voucher/reserveVoucher"), function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? r(Object(n), !0).forEach(function(e) {
                            babelHelpers.defineProperty(t, e, n[e])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        })
                    }
                    return t
                }({
                    voucherCode: e
                }, t))
            },
            removeVoucher: function(e, t, n, r) {
                var o = 2 < arguments.length && void 0 !== n ? n : null,
                    u = 3 < arguments.length && void 0 !== r ? r : null;
                return (0, i.postJsonObject)(a("/voucher/removeVoucher"), {
                    entryNo: e,
                    bundleNo: t,
                    voucherSubType: o,
                    voucher: u
                })
            },
            changeAssignPaymentPlans: function(e, t) {
                return (0, i.get)(a("/assignment/changeAssignPaymentPlans"), {
                    isPaymentPlanAssigned: e,
                    bundleNo: t
                })
            },
            createNewCart: function() {
                return (0, i.post)("/multiCart/new", "")
            },
            getKdrDataFromCart: function() {
                return (0, i.get)(a("/kdr/getCartKdrData"))
            },
            saveKdrData: function(e) {
                return (0, i.postJsonObject)(a("/kdr/saveKdrData"), e)
            },
            haltCart: function() {
                return (0, i.postWrap)(a("/multiCart/halt"))
            }
        };
    e.default = n
});
//# sourceMappingURL=remoteApi.js.map