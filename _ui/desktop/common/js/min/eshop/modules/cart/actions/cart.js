define(["exports", "../actionTypes", "../remoteApi", "../../../utils/OnlineUtils", "../../../utils/DataLayerUtils", "../../checkout/selectors", "../../simfree/selectors", "../selectors", "../../configurator/selectors/filters", "../../configurator/selectors/offers", "../../documents/actions/documents", "../../checkout/actions/app", "../../magnum2/utils", "../../magnum2/constants/ProcessTypeEnum", "eshop/modules/simfree/actions/app", "eshop/modules/configurator/actionTypes", "eshop/modules/configurator/actions/cart", "eshop/modules/auth/actions/authorization", "eshop/utils/GenesysWebEngagementUtils", "eshop/modules/configurator/actions/filters", "eshop/modules/configurator/selectors/filters", "../../auth/selectors/authorization", "eshop/modules/simfree/constants/OfferTypeEnum", "../../checkout/actions/validation", "eshop/modules/configurator/actions/offers"], function(e, i, c, r, a, u, t, l, s, f, o, d, n, p, C, E, y, h, T, m, g, O, R, A, S) {
    "use strict";

    function N(t, e) {
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
    }), e.fetchCart = L, e.fetchOrder = function() {
        return function(t) {
            c.default.getOrder().then(function(e) {
                t({
                    type: i.FETCH_CART,
                    payload: e
                })
            }).then(function() {
                return t({
                    type: i.FETCHED_CART,
                    payload: !0
                })
            }).catch(function(e) {})
        }
    }, e.reloadCartState = F, e.updateFixCartProducts = function(n, r, o, a) {
        return function(e, t) {
            c.default.postUpdateFixCartProducts(n, r, o, a).then(function() {
                e({
                    type: i.UPDATED_CART_CONTENTS,
                    payload: !0
                }), F()(e, t)
            })
        }
    }, e.updateCartVases = function(n, r, o, a, u) {
        return function(e, t) {
            c.default.postUpdateCartVases(n, r, o, a, u).then(function() {
                a.forEach(function(e) {
                    return T.default.pushDeleteVasFromCartEvent(e, n, o)
                }), u.forEach(function(e) {
                    return T.default.pushAddVasToCartEvent(e, n, o)
                }), e({
                    type: i.UPDATED_CART_CONTENTS,
                    payload: !0,
                    bundleNo: o
                }), F()(e, t)
            })
        }
    }, e.updateConvergentCartProducts = function(n) {
        return function(e, t) {
            c.default.postUpdateConvergentCartProducts(n).then(function() {
                e({
                    type: i.UPDATED_CART_CONTENTS,
                    payload: !0
                }), F()(e, t)
            }, function() {
                e({
                    type: i.UPDATED_CART_CONTENTS,
                    payload: !0
                }), F()(e, t)
            })
        }
    }, e.updateCartDevices = function(n, r, o, a, u) {
        return function(e, t) {
            c.default.postUpdateCartDevices(n, r, o, a, u).then(function() {
                B(u, a, n, o), e({
                    type: i.UPDATED_CART_CONTENTS,
                    payload: !0
                }), F()(e, t)
            })
        }
    }, e.postLowerInstallments = function(n, r, o) {
        return function(e, t) {
            c.default.postLowerInstallments(n, r, o).then(function() {
                e({
                    type: i.LOWER_INSTALLMENTS_SUBMITED,
                    payload: !0
                }), e({
                    type: i.LOWER_INSTALLMENTS_MODAL_CLOSE,
                    bundleNo: n
                }), F()(e, t)
            })
        }
    }, e.updateTerminalToOffer = function(r, t, o, a, u) {
        return function(n, e) {
            (0, d.bodyLoaderEvent)("modules.loader.show"), c.default.postUpdateCartDevices(r, t, o, a, u).then(function(e) {
                if (B(u, a, r, o), e && e.message && "string" == typeof e.message || !1 === e) {
                    var t = e ? e.message : "Błąd dodawania do koszyka";
                    (0, d.bodyLoaderEvent)("modules.loader.hide"), n((0, h.showError)(t))
                } else n({
                    type: i.UPDATED_CART_CONTENTS,
                    payload: !0
                }), n((0, y.redirectToCart)())
            })
        }
    }, e.removeDeviceFromSimfreeBundle = function(r, o, e) {
        return function(t, n) {
            c.default.removeDeviceFromSimfreeBundle(r, o, e).then(function(e) {
                w(r, o, n()), OPL.UI.fire(OPL.UI.EVENTS.modules.basket.counter.update, e, "header"), t({
                    type: i.UPDATED_CART_CONTENTS,
                    payload: !0
                }), F()(t, n)
            })
        }
    }, e.fetchMiniCart = P, e.fetchFixConfigurables = function(n) {
        return function(t, e) {
            (0, l.getFixConfigurablesMetadata)(e()).find(function(e) {
                return e.cartBundle === n
            }) || (t({
                type: i.FETCHING_FIX_CONFIGURABLES,
                payload: {
                    cartBundle: n
                }
            }), c.default.getFixConfigurables(n).then(function(e) {
                return t({
                    type: i.FETCH_FIX_CONFIGURABLES,
                    payload: Object.assign({}, e, {
                        cartBundle: n
                    })
                })
            }))
        }
    }, e.fetchMobileVases = function(n, r, o) {
        return function(t, e) {
            (0, l.getMobileVasMetadata)(e()).find(function(e) {
                return e.propositionId === n && e.bundle === r && e.process === o
            }) || (t({
                type: i.FETCHING_MOBILE_VASES,
                payload: {
                    propositionId: n,
                    bundle: r,
                    process: o
                }
            }), c.default.getMobileVases(n, r, o).then(function(e) {
                return t({
                    type: i.FETCH_MOBILE_VASES,
                    payload: Object.assign({}, e, {
                        propositionId: n,
                        bundle: r,
                        process: o
                    })
                })
            }))
        }
    }, e.fetchConvergentConfigurables = function(n, r) {
        return function(t, e) {
            (0, l.getFixConfigurablesMetadata)(e()).find(function(e) {
                return e.propositionId === n
            }) || (t({
                type: i.FETCHING_CONVERGENT_CONFIGURABLES,
                payload: {
                    propositionId: n,
                    configurables: []
                }
            }), c.default.getConvergentConfigurables(r).then(function(e) {
                return t({
                    type: i.FETCH_CONVERGENT_CONFIGURABLES,
                    payload: {
                        propositionId: n,
                        configurables: babelHelpers.toConsumableArray(e)
                    }
                })
            }))
        }
    }, e.goToOrangeLoveLandingPage = function(t) {
        return function() {
            var e = (0, n.getProcessType)(t);
            e === p.default._4U ? c.default.goToOrangeLove4DLandingPage() : e === p.default._2U ? c.default.goToOrangeLove2DLandingPage() : _.includes([p.default._2ULTE, p.default._3ULTE], e) && c.default.goToOrangeLoveLTE4FIXLandingPage()
        }
    }, e.goBackEmptyCart = function() {
        return function(e, t) {
            e(V());
            var n = r.default.getLastViewedOfferPage();
            n ? window.location.href = n : "B2B" === (0, g.getMarketContext)(t()) ? window.location.href = window.location.protocol + "//" + window.location.host + "/male-firmy/sklep" : window.location.href = window.location.protocol + "//" + window.location.host + "/sklep"
        }
    }, e.showErrorMessage = M, e.removeFromCart = function(e, r) {
        return function(t, n) {
            c.default.removeFromCart(e, r).then(function(e) {
                t((0, m.propositionListCountSet)(1)), k(r, n()), OPL.UI.fire(OPL.UI.EVENTS.modules.basket.counter.update, e.offerCount, "header"), t({
                    type: i.REMOVE_FROM_CART,
                    payload: e
                }), F()(t, n)
            })
        }
    }, e.removeFromCartAndRedirect = function(e, r) {
        return function(t, n) {
            c.default.removeFromCart(e, r).then(function(e) {
                null == r && T.default.deleteAllFromCartEvent((0, l.allCartEntries)(n())), a.default.pushOrderResigned((0, u.getAgreementType)(n())), t((0, m.propositionListCountSet)(1)), OPL.UI.fire(OPL.UI.EVENTS.modules.basket.counter.update, e.offerCount, "header"), t({
                    type: i.REMOVE_FROM_CART,
                    payload: e
                }), F()(t, n), (0, d.gotoCartSummary)()(t)
            })
        }
    }, e.handleRepayment = function() {
        return function(t, e) {
            c.default.markAsRepayment().then(function(e) {
                return t((0, d.doCheckoutStep)())
            })
        }
    }, e.handleRepaymentDeposit = function() {
        return function(t, e) {
            c.default.markAsRepayment().then(function(e) {
                return t((0, d.gotoNextCheckoutStep)())
            })
        }
    }, e.removeFromCartWithRedirect = function(r) {
        return function(t, n) {
            c.default.removeFromCart().then(function(e) {
                T.default.deleteAllFromCartEvent((0, l.allCartEntries)(n())), OPL.UI.fire(OPL.UI.EVENTS.modules.basket.counter.update, e.offerCount, "header"), t({
                    type: i.REMOVE_FROM_CART,
                    payload: e
                }), window.location.href = r
            })
        }
    }, e.removeMagnumFromMultiCart = function(n) {
        return function(e, t) {
            c.default.removeMagnumFromMultiCart(n).then(function() {
                F()(e, t), (0, d.gotoCartSummary)()(e)
            })
        }
    }, e.removeTerminalFromConvergentCartBundle = function(n, r) {
        return function(e, t) {
            c.default.removeTerminalFromConvergentCartBundle(n, r).then(function() {
                return F()(e, t)
            })
        }
    }, e.removeTerminalFromCartBundle = function(e, n) {
        return function(t) {
            c.default.removeTerminalFromCartBundle(e, n).then(function(e) {
                return t({
                    type: i.REMOVE_TERMINAL_FROM_CART_BUNDLE,
                    payload: e
                })
            })
        }
    }, e.clearCartAndRedirect = function(e, t) {
        c.default.removeFromCart(null, e).then(function(e) {
            OPL.UI.fire(OPL.UI.EVENTS.modules.basket.counter.update, e.offerCount, "header"), window.location.href = t
        })
    }, e.fetchPickupMiniCart = function() {
        return function(n, r) {
            c.default.getPickupMiniCart().then(function(e) {
                n({
                    type: i.FETCH_MINI_CART,
                    payload: e
                });
                var t = (0, u.getCurrentStepId)(r());
                t && a.default.pushCheckoutStepOneTime(e, (0, s.getSelectedFilters)(r()), t, (0, f.getSelectedOfferId)(r()), (0, f.getSelectedOfferPosition)(r()), (0, u.getAssistModeStateData)(r()))
            }).then(function(e) {
                return n({
                    type: i.FETCH_BUNDLES_PROCESS_TYPE,
                    payload: e.payload
                })
            }).then(function() {
                return n({
                    type: i.FETCHED_MINI_CART,
                    payload: !0
                })
            }).catch(function(e) {})
        }
    }, e.createNewCart = function() {
        return function(e) {
            c.default.createNewCart().then(function() {
                return e((0, d.gotoCartSummary)())
            }).then(function() {
                return e({
                    type: i.CREATE_NEW_CART
                })
            })
        }
    }, e.setFilters = function(r) {
        return function(e, t) {
            var n = (0, l.allCartEntries)(t()).find(function(e) {
                return e.bundleNo == r
            });
            e((0, C.setOfferTypeAction)(n.bundleType)), e({
                type: E.SELECT_PROCESS_TYPE,
                processType: n.processType
            }), e({
                type: E.SELECT_LOYALTY_LENGTH,
                loyaltyLength: n.loyaltyLength
            }), e({
                type: E.SELECT_OFFER,
                propositionId: n.bundleCode
            }), e({
                type: E.SET_DEVICE_INSTALMENTS_COUNT_IN_SESSION_STORAGE,
                deviceInstalmentsCount: function(e) {
                    var t;
                    if (e.terminals && 0 < e.terminals.length) t = e.terminals[0].monthlyPrices;
                    else {
                        if (!(e.euroSets && 0 < e.euroSets.length)) return;
                        t = e.euroSets[0].monthlyPrices
                    }
                    return t[t.length - 1] && t[t.length - 1].monthTo
                }(n)
            }), e({
                type: i.CHANGE_ADD_TERMINAL_TO_OFFER_BUNDLE_NUMBER,
                value: r
            }), e(H(n))
        }
    }, e.openVasModal = function() {
        return function(e, t) {
            e({
                type: i.VAS_MODAL_SHOW_CHANGE,
                payload: !0
            })
        }
    }, e.closeVasModal = function() {
        return function(e, t) {
            e({
                type: i.VAS_MODAL_SHOW_CHANGE,
                payload: !1
            })
        }
    }, e.openBonusModal = function() {
        return function(e, t) {
            e({
                type: i.BONUS_MODAL_SHOW_CHANGE,
                payload: !0
            })
        }
    }, e.closeBonusModal = function() {
        return function(e, t) {
            e({
                type: i.BONUS_MODAL_SHOW_CHANGE,
                payload: !1
            })
        }
    }, e.setPaymentPlanAssignValue = function(r, o, a) {
        return function(t, n) {
            a && c.default.changeAssignPaymentPlans(r, o).then(function(e) {
                e && F()(t, n)
            });
            var e = n().cart.assignment.isPaymentPlanAssigned.slice();
            e[o] = r, t({
                type: i.PAYMENT_PLAN_ASSIGN_VALUE_CHANGE,
                payload: e
            })
        }
    }, e.changeCertificateDeathConfimation = function(n) {
        return function(e, t) {
            e({
                type: i.CONFIRMATION_DEATH_CHANGE,
                payload: n
            })
        }
    }, e.haltCart = e.saveKdrData = e.dispatchKdrError = e.clearKdrNumber = e.approveKdrNumber = e.changeKdrNumber = e.getKdrDataFromCart = e.setSelectedVasesForCartEntry = e.setPriceIsNet = e.removeVoucher = e.applyVoucher = e.findApplicableProducts = e.clearVoucher = e.changedVoucherCode = e.clearAddTerminalToOfferFromSessionStorage = e.changeAddTerminalToOfferBundleNo = e.handleManualVerificationProcess = e.removeCartByOmniCode = e.changeFixTvFilteredModalVisibility = e.changeTvModalVisibility = e.setMiniCart = e.fetchCartPromise = e.redirectToLastViewedOfferPage = void 0, i = babelHelpers.interopRequireWildcard(i), c = babelHelpers.interopRequireDefault(c), r = babelHelpers.interopRequireDefault(r), a = babelHelpers.interopRequireDefault(a), p = babelHelpers.interopRequireDefault(p), E = babelHelpers.interopRequireWildcard(E), T = babelHelpers.interopRequireDefault(T), R = babelHelpers.interopRequireDefault(R);
    var v = "DEFAULT_SALES_OF_GOODS_PROPOSITION$MOB_CPO_SALES_OF_GOODS",
        D = "SALE_OF_GOODS";

    function L() {
        return function(t) {
            c.default.getCart().then(function(e) {
                t({
                    type: i.FETCH_CART,
                    payload: e
                })
            }, function(e) {}).then(function() {
                return t({
                    type: i.FETCHED_CART,
                    payload: !0
                })
            })
        }
    }
    e.redirectToLastViewedOfferPage = function() {
        return function(e, t) {
            window.location.href = r.default.getLastViewedOfferPage()
        }
    };
    var b = function() {
        return function(n) {
            return new Promise(function(e, t) {
                c.default.getCart().then(function(e) {
                    n({
                        type: i.FETCH_CART,
                        payload: e
                    })
                }, function(e) {}).then(function() {
                    n({
                        type: i.FETCHED_CART,
                        payload: !0
                    }), e()
                })
            })
        }
    };

    function F(n) {
        return function(e, t) {
            P()(e, t), e(b()).then(function() {
                n && n()
            }), (0, o.fetchDocuments)()(e, t)
        }
    }

    function P() {
        return function(r, o) {
            c.default.getMiniCart(R.default.CONVERGENT !== (0, g.getSelectedOfferType)(o()) && (0, t.getAvailableProductsKeys)(o())).then(function(e) {
                r(I(e)), r({
                    type: i.FETCH_BUNDLES_PROCESS_TYPE,
                    payload: e
                });
                var t = (0, l.getCartEntries)(o());
                if (t && 0 < t.length && (r((0, m.setMarketContext)((0, l.getCartIsNet)(o()) ? "B2B" : "B2C")), r((0, m.propositionListCountSetMode)(!1))), !(0, l.isCartFix)(o())) {
                    var n = (0, u.getCurrentStepId)(o());
                    n && a.default.pushCheckoutStepOneTime(e, (0, s.getSelectedFilters)(o()), n, (0, f.getSelectedOfferId)(o()), (0, f.getSelectedOfferPosition)(o()), function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? N(Object(n), !0).forEach(function(e) {
                                babelHelpers.defineProperty(t, e, n[e])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : N(Object(n)).forEach(function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                            })
                        }
                        return t
                    }({
                        salesChannel: (0, O.getSalesChannel)(o())
                    }, (0, u.getAssistModeStateData)(o())))
                }
            }).then(function() {
                return r({
                    type: i.FETCHED_MINI_CART,
                    payload: !0
                })
            })
        }
    }
    e.fetchCartPromise = b;
    var I = function(e) {
        return {
            type: i.FETCH_MINI_CART,
            payload: e
        }
    };
    e.setMiniCart = I;
    e.changeTvModalVisibility = function(t) {
        return function(e) {
            e({
                type: i.TV_MODAL_VISIBILITY,
                data: t
            })
        }
    };

    function M(n) {
        return function(e, t) {
            e((0, h.showError)(n))
        }
    }
    e.changeFixTvFilteredModalVisibility = function(t) {
        return function(e) {
            e({
                type: i.TV_FILTERED_MODAL_VISIBILITY,
                data: t
            })
        }
    };
    e.removeCartByOmniCode = function(e) {
        return function(n, r) {
            c.default.removeCartByOmniCode(e).then(function(e) {
                var t = (0, g.getCheckMsisdnResult)(r()).msisdn;
                n((0, m.checkMsisdnAndGetOffers)(t))
            }).catch(function(e) {
                n(M("Błąd podczas usuwania koszyka."))
            })
        }
    };
    e.handleManualVerificationProcess = function(e, n) {
        return function(t) {
            c.default.checkManualVerificationIsFinish(e, n).then(function() {
                return c.default.getManualVerificationStatus().then(function(e) {
                    return t({
                        type: i.SET_MANUAL_STATUS,
                        status: e
                    })
                })
            })
        }
    };
    e.changeAddTerminalToOfferBundleNo = function(t) {
        return function(e) {
            e({
                type: i.CHANGE_ADD_TERMINAL_TO_OFFER_BUNDLE_NUMBER,
                value: t
            })
        }
    };
    var V = function() {
        return function(e) {
            e({
                type: i.CLEAR_ADD_TERMINAL_TO_OFFER_BUNDLE_NUMBER
            })
        }
    };
    e.clearAddTerminalToOfferFromSessionStorage = V;

    function U(t) {
        return function(e) {
            e({
                type: i.CHANGE_VOUCHER_CODE,
                value: t
            })
        }
    }
    e.changedVoucherCode = U;
    e.clearVoucher = function() {
        return function(e) {
            e({
                type: i.CLEAR_VOUCHER_DATA
            })
        }
    };
    e.findApplicableProducts = function(e) {
        return function(t) {
            t({
                type: i.FIND_APPLICABLE_PRODUCTS_START
            }), U(e), c.default.findApplicableProducts(e).then(function(e) {
                e && e.message && "string" == typeof e.message ? t({
                    type: i.VOUCHER_ERROR,
                    value: {
                        level: "error",
                        message: e.message
                    }
                }) : t({
                    type: i.FIND_APPLICABLE_PRODUCTS_DONE,
                    value: e
                })
            })
        }
    };
    e.applyVoucher = function(e, r) {
        return function(t, n) {
            t({
                type: i.APPLY_VOUCHER_START
            }), c.default.applyVoucher(e, r).then(function(e) {
                e && e.message && "string" == typeof e.message ? t({
                    type: i.VOUCHER_ERROR,
                    value: {
                        level: "error",
                        message: e.message
                    }
                }) : (P()(t, n), L()(t, n), t({
                    type: i.APPLY_VOUCHER_DONE
                }))
            })
        }
    };
    e.removeVoucher = function(n, r, e, t) {
        var o = 2 < arguments.length && void 0 !== e ? e : null,
            a = 3 < arguments.length && void 0 !== t ? t : null;
        return function(e, t) {
            c.default.removeVoucher(n, r, o, a).then(function() {
                (0, d.bodyLoaderEvent)("modules.loader.show"), P()(e, t), L()(e, t), (0, d.bodyLoaderEvent)("modules.loader.hide")
            })
        }
    };
    e.setPriceIsNet = function(n) {
        return function(e, t) {
            e({
                type: i.SET_PRICE_VIEW_NET,
                showNet: n
            })
        }
    };
    var H = function(a) {
        return function(t, e) {
            var n, r, o = (n = a.vases, r = "GratisPackageBonuses", n && r && n.filter(function(e) {
                return e.categories && e.categories.includes(r)
            }) || []);
            t((0, S.clearSelectedVases)()), o.forEach(function(e) {
                return t((0, S.selectVas)(a.bundleCode, e.productCode))
            })
        }
    };
    e.setSelectedVasesForCartEntry = H;
    var B = function(e, t, n, r) {
            e.filter(function(e) {
                return e
            }).forEach(function(e) {
                T.default.pushAddToCartEvent(e, n, r)
            }), t.filter(function(e) {
                return e
            }).forEach(function(e) {
                T.default.pushDeleteFromCartEvent(e, n, r)
            })
        },
        w = function(e, t, n) {
            var r = (0, l.getTerminalForBundleAndEntryNumber)(e, t)(n);
            r && T.default.pushDeleteFromCartEvent(j(r), v, r.bundleNo)
        },
        k = function(e, t) {
            e ? G((0, l.getCartEntryById)(e)(t)) : T.default.deleteAllFromCartEvent((0, l.allCartEntries)(t))
        },
        G = function(t) {
            t.processType !== D && T.default.pushDeleteFromCartEvent(t.productCode, t.bundleCode, t.bundleNo), t.terminals.forEach(function(e) {
                return T.default.pushDeleteFromCartEvent(j(e), K(t), e.bundleNo)
            }), t.vases.forEach(function(e) {
                return T.default.pushDeleteVasFromCartEvent(e.productCode, K(t), e.bundleNo)
            })
        },
        K = function(e) {
            return e.processType === D ? v : e.bundleCode
        },
        j = function(e) {
            return e.processType === D ? e.productId : e.productCode
        };
    e.getKdrDataFromCart = function() {
        return function(t, n) {
            c.default.getKdrDataFromCart().then(function(e) {
                t({
                    type: i.KDR_CART_DATA,
                    payload: e
                }), e.source && "legacy" === e.source.toLowerCase() && F()(t, n)
            })
        }
    };
    e.changeKdrNumber = function(t) {
        return function(e) {
            return e({
                type: i.KDR_NUMBER_CHANGE,
                payload: t
            })
        }
    };
    e.approveKdrNumber = function() {
        return function(e) {
            return e({
                type: i.KDR_NUMBER_APPROVE
            })
        }
    };
    e.clearKdrNumber = function() {
        return function(t, n) {
            t({
                type: i.KDR_NUMBER_CLEAR
            }), (0, d.bodyLoaderShow)(), c.default.saveKdrData({}).then(function(e) {
                e && "NOK" !== e.code.toUpperCase() || (e && e.description && "string" == typeof e.description ? t({
                    type: i.KDR_ERROR,
                    value: {
                        level: "error",
                        message: e.description
                    }
                }) : t({
                    type: i.KDR_ERROR,
                    value: {
                        level: "error",
                        message: "Przepraszamy, chwilowe trudności techniczne. Spróbuj jeszcze raz."
                    }
                })), F(function() {
                    return (0, d.bodyLoaderHide)()
                })(t, n), t({
                    type: i.KDR_SAVED
                })
            })
        }
    };
    e.dispatchKdrError = function(t) {
        return function(e) {
            return e({
                type: i.KDR_ERROR,
                value: t
            })
        }
    };
    e.saveKdrData = function(e) {
        return function(t, n) {
            t({
                type: i.KDR_SAVING
            }), c.default.saveKdrData(e).then(function(e) {
                e && "NOK" !== e.code.toUpperCase() || (e && e.description && "string" == typeof e.description ? t({
                    type: i.KDR_ERROR,
                    value: {
                        level: "error",
                        message: e.description
                    }
                }) : t({
                    type: i.KDR_ERROR,
                    value: {
                        level: "error",
                        message: "Przepraszamy, chwilowe trudności techniczne. Spróbuj jeszcze raz."
                    }
                })), F()(t, n), t({
                    type: i.KDR_SAVED
                })
            })
        }
    };
    e.haltCart = function() {
        return function(t, e) {
            t({
                type: i.HALT_CART_START
            }), (0, A.validateData)(!1)(t, e).then(function(e) {
                e && c.default.haltCart().then(function(e) {
                    e.jqXHR && e.jqXHR.getResponseHeader("x-opl-error-descriptors") ? (t({
                        type: i.HALT_CART_ERROR,
                        message: e.data.message
                    }), t(M("Błąd podczas wstrzymywania: " + e.data.message))) : (t({
                        type: i.HALT_CART_SUCCESS
                    }), t((0, d.doCheckoutStep)()))
                })
            }).catch(function(e) {})
        }
    }
});
//# sourceMappingURL=cart.js.map