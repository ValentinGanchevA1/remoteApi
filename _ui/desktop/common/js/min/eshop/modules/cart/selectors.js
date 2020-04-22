define(["exports", "Reselect", "./components/entriesList/SectionEntryTypeEnum", "../core/enum/Technology", "../checkout/utils/MiniCartUtils", "../checkout/constants/CartEntryTypeEnum", "eshop/utils/OnlineUtils", "eshop/utils/NetGrossUtils", "eshop/modules/core/constants/TransactionProcessTypeEnum", "../core/constants/FactoryTypeEnum", "./components/entriesList/utils/CartUtils"], function(e, n, t, r, o, a, l, i, c, u, s) {
    "use strict";

    function f(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function h(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? f(Object(r), !0).forEach(function(e) {
                babelHelpers.defineProperty(t, e, r[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            })
        }
        return t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getVoucherApplicableProductsRequested = e.getVoucherMetadata = e.getVoucherError = e.getVoucherCode = e.getVoucherData = e.getCartState = e.getPricesForPeriodSelectorForBundles = e.getOfferDescriptionForBundles = e.getCartSummaryTableDetailsRows = e.getCartMonthlyRowsAll = e.getMaxBundleNo = e.createGetPricesForPeriodSelector = e.isTvSubEntry = e.isDslTechnologyEntry = e.isSatTechnologyEntry = e.getOfferLoyaltyLength = e.getOfferMsisdn = e.getOfferDescription = e.getCartSummaryTableRows = e.getCartCode = e.getCartMonthlyRows = e.getProcessTypesIncludeAssignment = e.getContractRoleByBundleNo = e.isLowerInstallmentsModalVisible = e.getEntryForLowerInstallmentsModal = e.getLowerInstallmentsBundleNo = e.getLowerInstallments = e.changingSimCard = e.changingMsisdn = e.getEntryForResourceModal = e.isResourceModalVisible = e.getResourcesMsg = e.getSimCard = e.getMsisdn = e.getSimCards = e.getMsisdns = e.getResourceModalBundleNo = e.getResourceModal = e.getTvFilteredModalVisibility = e.getTvModalVisibility = e.getFixConfigurablesMetadata = e.getCartFixMetadata = e.getMobileVasMetadata = e.getCartMobileMetadata = e.hasWakizashi = e.hasRetention = e.getHasCartData = e.getHasMiniCartData = e.containsEmptySaleOfAddonsEntry = e.getNumberOfCartEntries = e.getEntryType = e.getCartDiscounts = e.getCartDiscountsRaw = e.cartHasMobileDevices = e.getMobileCartDevices = e.getCartDevices = e.getCartDevicesRaw = e.getCartFirstOffer = e.getCartOffers = e.getCartOffersRaw = e.getCartServices = e.getCartServicesRaw = e.getCartMonthlyCosts = e.getCartMonthlyCostsRaw = e.getCartOneTimeCost = e.getCartOneTimeCostRaw = e.getCartCheckoutCost = e.getCartCheckoutCostRaw = e.hasEntries = e.getConvergentEntries = e.allCartEntries = e.getOfferCount = e.getMiniCart = e.hasVoiceCartEntry = e.getMobileCartEntries = e.getCartEntries = e.getCartOmniCode = e.getCartEntriesRaw = e.getMobileVases = e.getMobileVasesRaw = e.isMnpInCart = e.isCartMobile = e.isCartFix = e.getPriceIsNet = e.getCartIsNet = e.getBundlesProcessType = e.shouldDisplayLoyaltyDurationChoice = e.getTvPackages = e.getFixConfigurables = e.getBaseProductIdForBundle = e.getMagnumOfferId = e.getMagnumBundleTemplate = e.getProductCodeByBundleNo = e.getAssignmnetData = e.getAddTerminalToOfferBundleNo = e.getManualVerificationStatus = e.getMiniCartData = e.getSelectedVoipNumber = e.getVoipState = e.getFixState = void 0, e.getChangePackagesModalInitData = e.getInvoiceData = e.isWwwChannel = e.getCustomFilters = e.hasOnlyAssignment = e.getKdrCheckoutData = e.getKdrAccepted = e.getKdrSaving = e.getKdrErrors = e.getKdrSource = e.getKdrNumber = e.getKdrData = e.getChangedDevice = e.getEntryUnderChange = e.getDeathCertificateConfirmed = e.getPaymentPlanAssignValue = e.getBonusEntry = e.isBonusModalOpen = e.isVasModalOpen = e.getCartEntryById = e.getTerminalForBundleAndEntryNumber = e.getDepositCost = e.getVoucherName = e.getVoucherApplicableProducts = void 0, t = babelHelpers.interopRequireDefault(t), r = babelHelpers.interopRequireDefault(r), a = babelHelpers.interopRequireDefault(a), l = babelHelpers.interopRequireDefault(l), i = babelHelpers.interopRequireDefault(i), c = babelHelpers.interopRequireDefault(c), u = babelHelpers.interopRequireDefault(u);

    function d(e) {
        return e.fix
    }
    e.getFixState = d;
    var g = (0, n.createSelector)(d, function(e) {
        return e.voip
    });
    e.getVoipState = g;
    var m = (0, n.createSelector)(g, function(e) {
        return e.selectedVoipNumber
    });
    e.getSelectedVoipNumber = m;

    function p(e) {
        return e.cart.cartData
    }

    function y(e) {
        return e.cart.miniCartData
    }
    e.getMiniCartData = y;

    function C(e) {
        return e.cart.metadata
    }
    e.getManualVerificationStatus = function(e) {
        return e.cart.manualVerificationStatus
    };

    function v(e) {
        return e.cart.addTerminalToOfferBundleNo
    }
    e.getAddTerminalToOfferBundleNo = v;

    function b(e) {
        return e.cart.assignment
    }
    e.getAssignmnetData = b;
    e.getProductCodeByBundleNo = function() {
        return (0, n.createSelector)([x, v], function() {
            var t = 1 < arguments.length ? arguments[1] : void 0,
                e = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : []).find(function(e) {
                    return e.bundleNo == t
                });
            return e && S(e)
        })
    };
    e.getMagnumBundleTemplate = function() {
        return (0, n.createSelector)([x, v], function() {
            var t = 1 < arguments.length ? arguments[1] : void 0,
                e = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : []).find(function(e) {
                    return e.bundleNo == t
                });
            return e && e.propositionId
        })
    };
    e.getMagnumOfferId = function() {
        return (0, n.createSelector)([x, v], function() {
            var t = 1 < arguments.length ? arguments[1] : void 0,
                e = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : []).find(function(e) {
                    return e.bundleNo == t
                });
            return e && e.productCode
        })
    };
    var S = function(e) {
        return e && 0 < e.terminals.length ? e.terminals[0].productCode : e && 0 < e.euroSets.length ? e.euroSets[0].productCode : void 0
    };
    e.getBaseProductIdForBundle = function() {
        return (0, n.createSelector)([Z, function(e, t) {
            return {
                bundleNo: t
            }
        }], function() {
            var t = 1 < arguments.length ? arguments[1] : void 0,
                e = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : []).filter(function(e) {
                    return e.bundleNo == t.bundleNo
                });
            return e[0] && e[0].baseProductId
        })
    };

    function T(e) {
        return e.cart.convergentConfigurables.configurables && 0 < e.cart.convergentConfigurables.configurables.length ? e.cart.convergentConfigurables.configurables.filter(function(e) {
            return e.factoryName === u.default.FIX
        }) : e.cart.fixConfigurables
    }
    e.getFixConfigurables = T;
    var N = (0, n.createSelector)(T, function(e) {
        return e && e[0] && e[0].tvPackages
    });
    e.getTvPackages = N;
    var M = (0, n.createSelector)(N, function(e) {
        if (e) {
            var t = e.filter(function(e) {
                return "NC" === e.provider
            }).map(function(e) {
                return e.loyaltyDuration
            });
            return [12, 24].every(function(e) {
                return t.includes(e)
            })
        }
        return !1
    });
    e.shouldDisplayLoyaltyDurationChoice = M;

    function F(e) {
        return e.cart.bundlesProcessType
    }
    e.getBundlesProcessType = F;
    var P = (0, n.createSelector)(y, function(e) {
        return e && e.net
    });
    e.getCartIsNet = P;

    function E(e) {
        return e.cart.priceViewIsNet
    }
    e.getPriceIsNet = E;
    var O = (0, n.createSelector)(y, function(e) {
        return e.entries && !!e.entries.find(function(e) {
            return e.entryType == a.default.FIX
        })
    });
    e.isCartFix = O;
    var w = (0, n.createSelector)(y, function(e) {
        return e.entries && !!e.entries.find(function(e) {
            return e.entryType == a.default.MOBILE
        })
    });
    e.isCartMobile = w;
    var D = (0, n.createSelector)(y, function(e) {
        return e.entries && !!e.entries.find(function(e) {
            return "MNP" == e.processType
        })
    });
    e.isMnpInCart = D;

    function R(e) {
        return e.cart.mobileVas
    }
    e.getMobileVasesRaw = R;
    var V = (0, n.createSelector)([R, E], i.default.chooseNetOrGrossPriceForVases);
    e.getMobileVases = V;
    var A = (0, n.createSelector)(y, function(e) {
        return e && e.entries
    });
    e.getCartEntriesRaw = A;
    var I = (0, n.createSelector)(A, function(e) {
        return e && 0 < e.length ? (0, s.convertToCartOmniCode)(e[0].bundleOmniCode) : null
    });
    e.getCartOmniCode = I;
    var B = (0, n.createSelector)([A, E], i.default.chooseNetOrGrossPrice);
    e.getCartEntries = B;
    var k = (0, n.createSelector)([B], function(e) {
        return (e || []).filter(function(e) {
            return "MOBILE" === e.entryType
        })
    });
    e.getMobileCartEntries = k;
    var z = (0, n.createSelector)([k], function(e) {
        return 0 < (e || []).filter(function(e) {
            return (0, o.isVoiceCartEntry)(e)
        }).length
    });
    e.hasVoiceCartEntry = z;
    var L = (0, n.createSelector)(y, function(e) {
        return e
    });
    e.getMiniCart = L;
    var H = (0, n.createSelector)(y, function(e) {
        return e.offerCount
    });
    e.getOfferCount = H;
    var x = (0, n.createSelector)(L, function(e) {
        return e && e.entries ? (0, o.getAllCartEntries)(e) : []
    });
    e.allCartEntries = x;
    var j = (0, n.createSelector)(L, function(e) {
        return e.entries ? e.entries.filter(function(e) {
            return e.entryType === a.default.CONVERGENT
        }) : []
    });
    e.getConvergentEntries = j;
    var G = (0, n.createSelector)(B, function(e) {
        return e && 0 < e.length
    });
    e.hasEntries = G;
    var K = (0, n.createSelector)(p, function(e) {
        return e.checkoutCost
    });
    e.getCartCheckoutCostRaw = K;
    var _ = (0, n.createSelector)([K, E], i.default.chooseNetOrGrossPriceForCheckoutCost);
    e.getCartCheckoutCost = _;
    var q = (0, n.createSelector)(p, function(e) {
        return e.oneTimeCost
    });
    e.getCartOneTimeCostRaw = q;
    var U = (0, n.createSelector)([q, E], i.default.chooseNetOrGrossPriceForCartOneTimeCost);
    e.getCartOneTimeCost = U;
    var X = (0, n.createSelector)(p, function(e) {
        return e.monthlyCosts
    });
    e.getCartMonthlyCostsRaw = X;
    var W = (0, n.createSelector)([X, E], i.default.chooseNetOrGrossPriceForCartMonthlyCosts);
    e.getCartMonthlyCosts = W;
    var J = (0, n.createSelector)(p, function(e) {
        return e.services
    });
    e.getCartServicesRaw = J;
    var Q = (0, n.createSelector)([J, E], i.default.chooseNetOrGrossPriceForServices);
    e.getCartServices = Q;
    var Y = (0, n.createSelector)(p, function(e) {
        return e.offers
    });
    e.getCartOffersRaw = Y;
    var Z = (0, n.createSelector)([Y, E], i.default.chooseNetOrGrossPriceForOffers);
    e.getCartOffers = Z;
    var $ = (0, n.createSelector)(p, function(e) {
        return e.offers && e.offers[0] ? e.offers[0] : {}
    });
    e.getCartFirstOffer = $;
    var ee = (0, n.createSelector)(p, function(e) {
        return e.devices
    });
    e.getCartDevicesRaw = ee;
    var te = (0, n.createSelector)([ee, E], i.default.chooseNetOrGrossPriceForDevices);
    e.getCartDevices = te;
    var re = (0, n.createSelector)(te, function() {
        return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : []).filter(function(e) {
            return e.entryType !== a.default.FIX
        })
    });
    e.getMobileCartDevices = re;
    var ne = (0, n.createSelector)(re, function(e) {
        return e && 0 < e.length
    });
    e.cartHasMobileDevices = ne;
    var oe = (0, n.createSelector)(p, function(e) {
        return e.bonuses
    });
    e.getCartDiscountsRaw = oe;
    var ae = (0, n.createSelector)([oe, E], i.default.chooseNetOrGrossPriceForDevices);
    e.getCartDiscounts = ae;
    var ie = (0, n.createSelector)(p, function(e) {
        return e.entryType
    });
    e.getEntryType = ie;
    var ce = (0, n.createSelector)(B, function(e) {
        return e ? e.length : 0
    });
    e.getNumberOfCartEntries = ce;
    var ue = (0, n.createSelector)(A, function(e) {
            return e ? e.filter(function(e) {
                return "SALE_OF_ADDONS" === e.processType
            }).pop() : null
        }),
        se = (0, n.createSelector)(ue, function(e) {
            return e ? e.vases : []
        }),
        le = (0, n.createSelector)([ue, se], function(e, t) {
            return !!e && (!t || 0 === t.length)
        });
    e.containsEmptySaleOfAddonsEntry = le;
    var fe = (0, n.createSelector)(C, function(e) {
        return e.hasMiniCartData
    });
    e.getHasMiniCartData = fe;
    var de = (0, n.createSelector)(C, function(e) {
        return e.hasCartData
    });
    e.getHasCartData = de;
    var ge = (0, n.createSelector)(B, function(e) {
        return !(!e || !e.filter(function(e) {
            return "RETENTION" == e.processType
        }).length)
    });
    e.hasRetention = ge;
    var me = (0, n.createSelector)(B, function(e) {
        return !(!e || !e.filter(function(e) {
            return "INSTALMENT_SALES_OF_GOODS" == e.processType
        }).length)
    });
    e.hasWakizashi = me;
    var he = (0, n.createSelector)(C, function(e) {
        return e.mobile
    });
    e.getCartMobileMetadata = he;
    var pe = (0, n.createSelector)(he, function(e) {
        return e.mobileVasMetadata
    });
    e.getMobileVasMetadata = pe;
    var ye = (0, n.createSelector)(C, function(e) {
        return e.fix
    });
    e.getCartFixMetadata = ye;
    var Ce = (0, n.createSelector)(ye, function(e) {
        return e.fixConfigurablesMetadata
    });
    e.getFixConfigurablesMetadata = Ce;
    var ve = (0, n.createSelector)(ye, function(e) {
        return e.tvModalVisibility
    });
    e.getTvModalVisibility = ve;
    var be = (0, n.createSelector)(ye, function(e) {
        return e.tvFilteredModalVisibility
    });
    e.getTvFilteredModalVisibility = be;

    function Se(e) {
        return e.cart.resourcesModal
    }
    e.getResourceModal = Se;
    var Te = (0, n.createSelector)(Se, function(e) {
        return e.bundleNo
    });
    e.getResourceModalBundleNo = Te;
    var Ne = (0, n.createSelector)(Se, function(e) {
        return e.msisdnComponent.msisdns
    });
    e.getMsisdns = Ne;
    var Me = (0, n.createSelector)([Se, Te], function(e, t) {
        return e.simCardComponent.simCards[t] || []
    });
    e.getSimCards = Me;
    var Fe = (0, n.createSelector)(Se, function(e) {
        return e.msisdnComponent.msisdn
    });
    e.getMsisdn = Fe;
    var Pe = (0, n.createSelector)(Se, function(e) {
        return e.simCardComponent.simCard
    });
    e.getSimCard = Pe;
    var Ee = (0, n.createSelector)(Se, function(e) {
        return e.resourcesMsg
    });
    e.getResourcesMsg = Ee;
    var Oe = (0, n.createSelector)(Se, function(e) {
        return e.visible
    });
    e.isResourceModalVisible = Oe;
    var we = (0, n.createSelector)([Te, x], function(t) {
        var e = (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : []).filter(function(e) {
                return e.bundleNo === t
            }),
            r = babelHelpers.slicedToArray(e, 1)[0];
        return void 0 === r ? {} : r
    });
    e.getEntryForResourceModal = we;
    var De = (0, n.createSelector)(Se, function(e) {
        return e.msisdnComponent.changingMsisdn
    });
    e.changingMsisdn = De;
    var Re = (0, n.createSelector)(Se, function(e) {
        return e.simCardComponent.changingSimCard
    });
    e.changingSimCard = Re;

    function Ve(e) {
        return e.cart.lowerInstallments
    }
    e.getLowerInstallments = Ve;
    var Ae = (0, n.createSelector)(Ve, function(e) {
        return e.bundleNo
    });
    e.getLowerInstallmentsBundleNo = Ae;
    var Ie = (0, n.createSelector)([Ae, x], function(t) {
        var e = (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : []).filter(function(e) {
                return e.bundleNo === t
            }),
            r = babelHelpers.slicedToArray(e, 1)[0];
        return void 0 === r ? {} : r
    });
    e.getEntryForLowerInstallmentsModal = Ie;
    var Be = (0, n.createSelector)(Ve, function(e) {
        return e.visibleModal
    });
    e.isLowerInstallmentsModalVisible = Be;
    var ke = (0, n.createSelector)(x, function(e) {
        return (e || []).reduce(function(e, t) {
            return e[t.bundleNo] = t.contractRole, e
        }, {})
    });
    e.getContractRoleByBundleNo = ke;
    var ze = (0, n.createSelector)(F, function(e) {
        return 0 !== e.length && !e.includes("ASSIGNMENT_DEATH") && l.default.isAnyAssignmentFromList(e)
    });
    e.getProcessTypesIncludeAssignment = ze;
    var Le = (0, n.createSelector)([U, W], function(r, e) {
        var n = [];
        return e && e.map(function(e, t) {
            0 === t && r.price ? (n.push({
                monthlyPrice: e.price,
                oneTimePrice: l.default.formatPrice(r.price) + " " + r.currency,
                monthFrom: e.monthFrom ? e.monthFrom : 1,
                monthTo: e.monthFrom ? e.monthFrom : 1,
                highlighted: !0,
                currency: e.currency
            }), 1 !== e.monthTo && n.push({
                monthlyPrice: e.price,
                oneTimePrice: "",
                monthFrom: e.monthFrom + 1,
                monthTo: e.monthTo,
                highlighted: !1,
                currency: e.currency
            })) : n.push({
                monthlyPrice: e.price,
                oneTimePrice: "",
                monthFrom: e.monthFrom,
                monthTo: e.monthTo,
                highlighted: !1,
                currency: e.currency
            })
        }), n
    });
    e.getCartMonthlyRows = Le;
    var He = (0, n.createSelector)(p, function(e) {
        return e.code
    });
    e.getCartCode = He;
    var xe = (0, n.createSelector)([_, Le, E], function(e, t, r) {
        var n = [];
        if (e) {
            var o = l.default.formatPrice(e.priceGross) + " " + e.currency;
            (ot(e) || r) && (o = l.default.formatPrice(e.priceNet) + " " + e.currency + (ot(e) ? " + VAT" : "")), n.push({
                monthlyPrice: 0,
                oneTimePrice: o,
                highlighted: !0
            })
        }
        return t.map(function(e) {
            return n.push(e)
        }), n
    });
    e.getCartSummaryTableRows = xe;
    var je = (0, n.createSelector)([te, Z], function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
            t = [],
            r = [];
        return (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : []).map(function(e) {
            return t.push(e.planName)
        }), e.map(function(e) {
            return r.push(e.description)
        }), t.join(", ") + (r.length ? " + " + r.join(", ") : "")
    });
    e.getOfferDescription = je;
    var Ge = (0, n.createSelector)(B, function(e) {
        return e && 0 < e.length ? e[0].msisdn : ""
    });
    e.getOfferMsisdn = Ge;
    var Ke = (0, n.createSelector)(B, function(e) {
        return e && 0 < e.length ? e[0].loyaltyLength : ""
    });
    e.getOfferLoyaltyLength = Ke;
    var _e = (0, n.createSelector)(B, function(e) {
        return e && e.some(function(e) {
            return e.entries && e.entries.some(function(e) {
                return e.technology === r.default.SAT
            })
        })
    });
    e.isSatTechnologyEntry = _e;
    var qe = (0, n.createSelector)(B, function(e) {
        return e && e.some(function(e) {
            return e.entries && e.entries.some(function(e) {
                return r.default.isXDSL(e.technology)
            })
        })
    });
    e.isDslTechnologyEntry = qe;
    var Ue = (0, n.createSelector)(B, function(e) {
        return e && e.some(function(e) {
            return e.entries && e.entries.some(function(e) {
                return e.subEntryType === t.default.TV
            })
        })
    });
    e.isTvSubEntry = Ue;

    function Xe(e, t, r, n) {
        var o = [];
        if ("SIMFREE" === e.entryType && null !== t.monthFrom || null === e.description && null === e.oneTimeCost) return o;
        (1 === t.monthFrom || e.oneTimeCost.monthFrom + 1 === t.monthFrom) && e.oneTimeCost && 0 < e.oneTimeCost.price && o.push({
            monthlyPrice: "",
            oneTimeCost: l.default.formatPrice(e.oneTimeCost.price) + " " + e.oneTimeCost.currency,
            description: "RETENTION" === t.processType ? "Opłata za realizację oferty utrzymaniowej" : r + e.description
        }), e.fixPayOnFirstBill && (1 === t.monthFrom || t.monthFrom === e.payNowCost.monthFrom) && e.payNowCost && 0 < e.payNowCost.price && o.push({
            monthlyPrice: "",
            oneTimeCost: l.default.formatPrice(e.payNowCost.price) + " " + e.payNowCost.currency,
            description: r + e.description
        });
        var a = e.monthlyCosts.find(function(e) {
            return t.monthFrom >= e.monthFrom && (null === e.monthTo || null !== t.monthTo && e.monthTo >= t.monthTo || null != e.monthTo && null === t.monthTo && e.monthTo > t.monthFrom)
        });
        return a && o.push({
            monthlyPrice: l.default.formatPrice(a.price) + " " + a.currency,
            oneTimeCost: "",
            description: n + e.description
        }), o
    }

    function We(e, t, r, n) {
        var o = l.default.formatPrice(e.priceGross) + " " + e.currency,
            a = null != r && !0 === r;
        return n && (o = l.default.formatPrice(e.priceNet) + " " + e.currency + (a ? " + VAT" : "")), {
            oneTimeCost: o,
            description: t
        }
    }
    e.createGetPricesForPeriodSelector = function() {
        return (0, n.createSelector)([_, Q, Z, te, ae, function(e, t) {
            return {
                monthFrom: t.entry.monthFrom,
                monthTo: t.entry.monthTo
            }
        }, E], function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [],
                r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [],
                n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : [],
                o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : [],
                a = 5 < arguments.length ? arguments[5] : void 0,
                i = 6 < arguments.length ? arguments[6] : void 0,
                c = [],
                u = !1;
            e && (u = e.isBusinessClient);
            var s = u || i;
            if (a.monthFrom) {
                var l = r.reduce(function(e, t) {
                        return Math.max(e, t.loyaltyLength)
                    }, 0),
                    f = a.monthTo <= l || 0 === l;
                f && (r.map(function(e) {
                    return c = c.concat(Xe(e, a, "Opłata aktywacyjna za ", "Abonament za "))
                }), t.map(function(e) {
                    return c = c.concat(Xe(e, a, "Opłata aktywacyjna za ", "Abonament za "))
                }), n.filter(function(e) {
                    return "FIX" === (t = e).entryType && ((n = t).monthlyCosts && 0 < n.monthlyCosts.length || (r = t).fixPayOnFirstBill && r.payNowCost && 0 < r.payNowCost.price);
                    var t, r, n
                }).forEach(function(e) {
                    return c = c.concat(Xe(e, a, "", ""))
                })), n.filter(function(e) {
                    return "FIX" !== e.entryType
                }).forEach(function(e) {
                    c = c.concat(Xe(e, a, "", "Rata za "))
                }), f && o.map(function(e) {
                    return c = c.concat(Xe(e, a, "", ""))
                })
            } else r.map(function(e) {
                e.payNowCost && c.push(We(e.payNowCost, e.description, u, s))
            }), t.map(function(e) {
                e.payNowCost && c.push(We(e.payNowCost, e.description, u, s))
            }), n.filter(function(e) {
                return !(e.fixPayOnFirstBill && e.payNowCost && 0 < e.payNowCost.price)
            }).map(function(e) {
                e.payNowCost && c.push(We(e.payNowCost, e.description, u, s))
            });
            return c
        })
    };
    var Je = (0, n.createSelector)(B, function(e) {
        return e && 0 < e.length ? Math.max.apply(Math, babelHelpers.toConsumableArray(e.map(function(e) {
            return e.bundleNo
        }))) : 0
    });
    e.getMaxBundleNo = Je;
    var Qe = (0, n.createSelector)([B, U, W], function(r, e, t) {
        var n = [];
        return r && r.map(function(t, e) {
            t.totalMonthlyPrices && t.totalMonthlyPrices.map(function(e) {
                1 === e.monthFrom && t.totalFirstBillPrice.price ? (n.push({
                    monthlyPrice: e.price,
                    oneTimePrice: l.default.formatPrice(t.totalFirstBillPrice.price) + " " + r[0].totalFirstBillPrice.currency,
                    monthFrom: e.monthFrom,
                    monthTo: e.monthFrom,
                    highlighted: !0,
                    currency: e.currency,
                    bundleNo: t.bundleNo,
                    processType: t.processType
                }), 1 !== e.monthTo && n.push({
                    monthlyPrice: e.price,
                    oneTimePrice: "",
                    monthFrom: e.monthFrom + 1,
                    monthTo: e.monthTo,
                    highlighted: !1,
                    currency: e.currency,
                    bundleNo: t.bundleNo,
                    processType: t.processType
                })) : n.push({
                    monthlyPrice: e.price,
                    oneTimePrice: "",
                    monthFrom: e.monthFrom,
                    monthTo: e.monthTo,
                    highlighted: !1,
                    currency: e.currency,
                    bundleNo: t.bundleNo,
                    processType: t.processType
                })
            })
        }), n
    });
    e.getCartMonthlyRowsAll = Qe;
    var Ye = (0, n.createSelector)([B, Q, Z, ae], function() {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [],
                t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [],
                r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : [],
                n = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : []).concat(e).concat(t).concat(r).map(function(e) {
                    return e.monthlyPrices ? h({}, e, {
                        monthlyCosts: e.monthlyPrices
                    }) : e
                }),
                o = {};
            return n.filter(function(e) {
                return e.bundleNo
            }).forEach(function(e) {
                o[e.bundleNo] || (o[e.bundleNo] = []);
                var t = o[e.bundleNo];
                e.monthlyCosts && e.monthlyCosts.forEach(function(e) {
                    [e.monthTo, e.monthFrom].filter(function(e) {
                        return e
                    }).filter(function(e) {
                        return -1 == t.indexOf(e)
                    }).forEach(function(e) {
                        return t.push(e)
                    })
                }), t.sort(function(e, t) {
                    return e - t
                })
            }), o
        }),
        Ze = (0, n.createSelector)([B, _, Le, Qe, Ye, E], function(e, t, r, n, o, a) {
            var i, c, u = [];
            if (t && e)
                for (var s = 0; s < e.length; s++) "SALE_OF_GOODS" === e[s].processType ? (i = l.default.formatPrice(e[s].totalCheckoutPrice.priceGross) + " " + t.currency, (ot(t) || a) && (i = l.default.formatPrice(e[s].totalCheckoutPrice.priceNet) + " " + t.currency + (ot(t) ? " + VAT" : "")), u.push({
                    monthlyPrice: 0,
                    oneTimePrice: i,
                    highlighted: !0,
                    bundleNo: e[s].terminals[0].bundleNo
                })) : (e[s].terminals.length || e[s].euroSets.length) && (c = (c = e[s].totalCheckoutPrice.price - e[s].totalFirstBillPrice.price).toFixed(2) || "0,00", i = (c = (c += "").replace(".", ",")) + " " + t.currency, u.push({
                    monthlyPrice: 0,
                    oneTimePrice: i,
                    highlighted: !0,
                    bundleNo: e[s].bundleNo
                }));
            return n.map(function(e) {
                    return u.push(e)
                }),
                function(e, n) {
                    var t = [];
                    e.forEach(function(e) {
                        -1 == t.indexOf(e.bundleNo) && t.push(e.bundleNo)
                    });
                    var o = [];
                    return t.forEach(function(t) {
                        var r = e.filter(function(e) {
                            return e.bundleNo == t
                        });
                        n[t].forEach(function(e) {
                            var n, o, t;
                            t = e, null == r.filter(function(e) {
                                return e.monthTo == t || e.monthFrom == t
                            })[0] && (n = e, o = [], r.forEach(function(e) {
                                if (e.monthTo < n) o.push(e);
                                else if (e.monthFrom > n) o.push(e);
                                else {
                                    var t = h({}, e),
                                        r = h({}, e);
                                    t.monthTo = n, r.monthFrom = n + 1, o.push(t), o.push(r)
                                }
                            }), r = o)
                        }), o = o.concat(r)
                    }), o
                }(u, o)
        });
    e.getCartSummaryTableDetailsRows = Ze;

    function $e(e, t) {
        e.filter(function(e) {
            return t = e, c.default.isMigration(t.processType) && t.msisdnVerificationData && t.msisdnVerificationData.msisdn;
            var t
        }).map(function(e) {
            return e.msisdnVerificationData.msisdn
        }).map(function(e) {
            return tt(e)
        }).forEach(function(e) {
            t.push(e)
        })
    }
    var et = (0, n.createSelector)([te, Z, Je, B], function() {
        var e, r, n, o = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
            a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [],
            t = 2 < arguments.length ? arguments[2] : void 0,
            i = 3 < arguments.length ? arguments[3] : void 0,
            c = [],
            u = [],
            s = [],
            l = [];
        if (i) {
            0 < (r = i.filter(function(e) {
                return "SALE_OF_GOODS" === e.processType
            })).length && (e = r[0].terminals[0].bundleNo), o.filter(function(e) {
                return "SIMFREE" === e.entryType
            }).map(function(e) {
                return u.push(e.description)
            }), e && u && (l.push([e, u.length ? u.join(", ") : "", "Urządzenia bez umowy"]), c = [], u = [], s = []);
            for (var f = function(t) {
                    0 < (r = i.filter(function(e) {
                        return e.bundleNo === t
                    })).length && (n = r[0].bundleType, $e(r, s)), a.filter(function(e) {
                        return e.bundleNo === t
                    }).map(function(e) {
                        c.push(e.planName), e.msisdn && 9 === e.msisdn.length && s.push(tt(e.msisdn))
                    }), o.filter(function(e) {
                        return "SIMFREE" !== e.entryType
                    }).filter(function(e) {
                        return e.bundleNo === t
                    }).map(function(e) {
                        return u.push(e.description)
                    }), s = s.filter(function(e, t, r) {
                        return r.indexOf(e) === t
                    }), l.push([t, c.join(", ") + (u.length ? " + " + u.join(", ") : ""), c.length && u.length ? rt(n, s, !0) : rt(n, s, !1)]), c = [], u = [], s = []
                }, d = 1; d <= t; d++) f(d)
        }
        return l
    });
    e.getOfferDescriptionForBundles = et;
    var tt = function(e) {
            return e.substring(0, 3) + " " + e.substring(3, 6) + " " + e.substring(6, e.length)
        },
        rt = function(e, t, r) {
            var n;
            switch (e) {
                case "VOICE":
                    n = r ? "Abonament komórkowy z telefonem" : "Abonament komórkowy";
                    break;
                case "DATA":
                    n = r ? "Internet mobilny z urządzeniem" : "Internet mobilny";
                    break;
                case "SIMFREE_INST":
                    n = "Urządzenia bez abonamentu na raty";
                    break;
                default:
                    n = r ? "Abonament z telefonem" : "Abonament"
            }
            return 0 < t.length ? n.concat(" (" + t + ")") : n
        };

    function nt(e, t, r) {
        var n = r.find(function(e) {
            return e.bundleNo === t
        }).loyaltyLength;
        return 0 < n && (e.monthlyCosts[e.monthlyCosts.length - 1].monthTo = n), e
    }

    function ot(e) {
        return void 0 !== e.isBusinessClient && null !== e.isBusinessClient && !0 === e.isBusinessClient
    }
    e.getPricesForPeriodSelectorForBundles = function() {
        return (0, n.createSelector)([B, _, Q, Z, te, ae, function(e, t) {
            return {
                monthFrom: t.entry.monthFrom,
                monthTo: t.entry.monthTo,
                bundleNo: t.bundleNo,
                processType: t.entry.processType
            }
        }, E], function(t, e) {
            var r, n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [],
                o = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : [],
                a = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : [],
                i = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : [],
                c = 6 < arguments.length ? arguments[6] : void 0,
                u = 7 < arguments.length ? arguments[7] : void 0,
                s = [],
                l = !1;
            e && (l = e.isBusinessClient);
            var f = u || l;
            return c.monthFrom ? (o.filter(function(e) {
                return e.bundleNo === c.bundleNo
            }).map(function(e) {
                return s = s.concat(Xe(e, c, "Opłata aktywacyjna za ", "Abonament za "))
            }), i.filter(function(e) {
                return e.bundleNo === c.bundleNo
            }).map(function(e) {
                return s = s.concat(Xe(null === e.monthlyCosts[e.monthlyCosts.length - 1].monthTo ? nt(e, c.bundleNo, t) : e, c, "", ""))
            }), n.filter(function(e) {
                return e.bundleNo === c.bundleNo
            }).map(function(e) {
                return s = s.concat(Xe(null === (babelHelpers.toConsumableArray(e.monthlyCosts).pop() || {}).monthTo ? nt(e, c.bundleNo, t) : e, c, "Opłata aktywacyjna za ", "Abonament za "))
            }), a.filter(function(e) {
                return "SIMFREE" !== e.entryType
            }).filter(function(e) {
                return e.bundleNo === c.bundleNo
            }).map(function(e) {
                return s = s.concat(Xe(null === e.monthlyCosts[e.monthlyCosts.length - 1].monthTo ? nt(e, c.bundleNo, t) : e, c, "", "FIX" === e.entryType ? "" : "Rata za "))
            }), a.filter(function(e) {
                return "SIMFREE" === e.entryType
            }).map(function(e) {
                return s = s.concat(Xe(e, c, "", "FIX" === e.entryType ? "" : "Rata za "))
            })) : (o.filter(function(e) {
                return e.bundleNo === c.bundleNo
            }).map(function(e) {
                e.payNowCost && (e.payNowCost.priceNet || e.payNowCost.priceGross) && s.push(We(e.payNowCost, e.description, l, f))
            }), n.filter(function(e) {
                return e.bundleNo === c.bundleNo
            }).map(function(e) {
                e.payNowCost && s.push(We(e.payNowCost, e.description, l, f))
            }), 0 < (r = a.filter(function(e) {
                return "SIMFREE" !== e.entryType
            }).filter(function(e) {
                return e.bundleNo === c.bundleNo
            })).length ? r.map(function(e) {
                e.payNowCost && s.push(We(e.payNowCost, e.description, l, f))
            }) : a.filter(function(e) {
                return "SIMFREE" === e.entryType
            }).map(function(e) {
                e.payNowCost && s.push(We(e.payNowCost, e.description, l, f))
            })), s
        })
    };

    function at(e) {
        return e.cart
    }
    e.getCartState = at;
    var it = (0, n.createSelector)(at, function(e) {
        return e.voucher
    });
    e.getVoucherData = it;
    var ct = (0, n.createSelector)(it, function(e) {
        return e.voucherCode
    });
    e.getVoucherCode = ct;
    var ut = (0, n.createSelector)(it, function(e) {
        return e.error
    });
    e.getVoucherError = ut;
    var st = (0, n.createSelector)(it, function(e) {
        return e.metadata
    });
    e.getVoucherMetadata = st;
    var lt = (0, n.createSelector)(st, function(e) {
        return e.loading
    });
    e.getVoucherApplicableProductsRequested = lt;
    var ft = (0, n.createSelector)(it, function(e) {
        return e.applicableProducts
    });
    e.getVoucherApplicableProducts = ft;
    var dt = (0, n.createSelector)(it, function(e) {
        return e.voucherName
    });
    e.getVoucherName = dt;
    var gt = (0, n.createSelector)(p, function(e) {
        return e.checkoutCost ? e.checkoutCost.deposit : 0
    });
    e.getDepositCost = gt;
    e.getTerminalForBundleAndEntryNumber = function(t, r) {
        return (0, n.createSelector)(B, function(e) {
            return e.reduce(function(e, t) {
                return [].concat(babelHelpers.toConsumableArray(e), babelHelpers.toConsumableArray(t.terminals))
            }, []).find(function(e) {
                return e.bundleNo === t && e.entryNo === r
            })
        })
    };
    e.getCartEntryById = function(t) {
        return (0, n.createSelector)(B, function(e) {
            return e.find(function(e) {
                return e.bundleNo = t
            })
        })
    };
    var mt = (0, n.createSelector)(at, function(e) {
        return e.vasModalStatus
    });
    e.isVasModalOpen = mt;
    var ht = (0, n.createSelector)(at, function(e) {
        return e.bonusModalStatus
    });
    e.isBonusModalOpen = ht;
    var pt = (0, n.createSelector)(p, function(e) {
        return e.bonuses || []
    });
    e.getBonusEntry = pt;
    var yt = (0, n.createSelector)(b, function(e) {
        return e.isPaymentPlanAssigned
    });
    e.getPaymentPlanAssignValue = yt;
    var Ct = (0, n.createSelector)(b, function(e) {
        return e.isDeathCertificateConfirmed
    });
    e.getDeathCertificateConfirmed = Ct;
    var vt = (0, n.createSelector)([B, v], function(e, t) {
        if (t && e) return e.find(function(e) {
            return e.bundleNo == t
        })
    });
    e.getEntryUnderChange = vt;
    var bt = (0, n.createSelector)(vt, function(e) {
        return (t = e) && 0 < t.terminals.length ? t.terminals[0] : t && 0 < t.euroSets.length ? t.euroSets[0] : void 0;
        var t
    });
    e.getChangedDevice = bt;
    var St = (0, n.createSelector)(at, function(e) {
        return e.kdrData
    });
    e.getKdrData = St;
    var Tt = (0, n.createSelector)(St, function(e) {
        return e.kdrNumber || ""
    });
    e.getKdrNumber = Tt;
    var Nt = (0, n.createSelector)(St, function(e) {
        return e.kdrSource || ""
    });
    e.getKdrSource = Nt;
    var Mt = (0, n.createSelector)(St, function(e) {
        return e.error
    });
    e.getKdrErrors = Mt;
    var Ft = (0, n.createSelector)(St, function(e) {
        return e.saving
    });
    e.getKdrSaving = Ft;
    var Pt = (0, n.createSelector)(St, function(e) {
        return !!e.accepted
    });
    e.getKdrAccepted = Pt;
    var Et = (0, n.createSelector)([Tt, Nt], function(e, t) {
        return {
            number: e,
            source: t
        }
    });
    e.getKdrCheckoutData = Et;
    var Ot = (0, n.createSelector)(A, function(e) {
        return e && e.length && e.every(function(e) {
            return c.default.isAssignment(e.processType)
        })
    });
    e.hasOnlyAssignment = Ot;
    var wt = (0, n.createSelector)(at, function(e) {
        return e.tvPackagesFilters
    });
    e.getCustomFilters = wt;
    var Dt = (0, n.createSelector)(L, function(e) {
        return e.isWwwChannel
    });
    e.isWwwChannel = Dt;
    var Rt = (0, n.createSelector)(at, function(e) {
        return e.invoiceData
    });
    e.getInvoiceData = Rt;
    var Vt = (0, n.createSelector)(V, B, function(e, t) {
        if (0 === e.length) return {};
        var g = "GratisPackageBonuses",
            m = (e || []).reduce(function(e, t) {
                return h({}, e, babelHelpers.defineProperty({}, t.propositionId, t))
            }, {});
        return (t || []).map(function(e) {
            var t = m[e.bundleCode];
            if (t) {
                var r, n, o, a, i = (e && e.vases || []).filter(function(e) {
                        return (e.categories || []).includes(g)
                    }).map(function(e) {
                        return e.productCode
                    }),
                    c = (e && e.vases || []).filter(function(e) {
                        return !(e.categories || []).includes(g)
                    }),
                    u = t.categorizedBonuses && t.categorizedBonuses[g],
                    s = u && u.groups || [],
                    l = u && u.services || [],
                    f = (r = l, n = c, o = t.relations, a = r.map(function(e) {
                        return e.id
                    }), (o || []).filter(function(e) {
                        return "EXCLUDE" == e.type
                    }).map(function(t) {
                        return {
                            warnings: n.filter(function(e) {
                                return [].concat(babelHelpers.toConsumableArray(t.sourceVases), babelHelpers.toConsumableArray(t.targetVases)).includes(e.productCode)
                            }).map(function(e) {
                                return {
                                    id: e.productCode,
                                    name: e.name
                                }
                            }),
                            packets: [].concat(babelHelpers.toConsumableArray(t.sourceVases), babelHelpers.toConsumableArray(t.targetVases)).filter(function(e) {
                                return a.includes(e)
                            })
                        }
                    }).filter(function(e) {
                        return e.warnings[0] && e.packets[0]
                    }).map(function(e) {
                        return e.warnings.length, {
                            warning: e.warnings[0],
                            packets: e.packets
                        }
                    })),
                    d = l.map(function(t) {
                        return h({}, t.longDescriptionInJsonFormat, {
                            id: t.id,
                            title: t.title,
                            weight: t.weight || 1,
                            warning: f.filter(function(e) {
                                return e.packets.includes(t.id)
                            }).map(function(e) {
                                return e.warning
                            })[0]
                        })
                    });
                return {
                    bundleNo: e.bundleNo,
                    data: {
                        plan: {
                            name: e && e.planName,
                            capacity: function(e, t) {
                                {
                                    if (0 == t.length) return 0;
                                    if (1 == t.length) return t[0].min || 0
                                }
                                var r = e.filter(function(e) {
                                        return e.bonuses && 1 === e.bonuses.length && e.bonuses[0].code
                                    }).map(function(e) {
                                        return e.bonuses && 1 === e.bonuses.length && e.bonuses[0].code
                                    }).sort().join(),
                                    n = t.filter(function(e) {
                                        return (e.targetProducts || []).sort().join() == r
                                    })[0];
                                return n && n.min || 0
                            }(l, s)
                        },
                        packets: d,
                        selected: i
                    }
                }
            }
        }).filter(function(e) {
            return e
        }).reduce(function(e, t) {
            return h({}, e, babelHelpers.defineProperty({}, t.bundleNo, t.data))
        }, {})
    });
    e.getChangePackagesModalInitData = Vt
});
//# sourceMappingURL=selectors.js.map