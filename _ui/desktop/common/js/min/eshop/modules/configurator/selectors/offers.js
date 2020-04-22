define(["exports", "Reselect", "./root", "../utils", "./filters", "eshop/modules/cart/selectors", "eshop/modules/auth/selectors/authorization", "../mockData", "eshop/utils/OnlineUtils"], function(e, n, t, o, a, r, c, i, p) {
    "use strict";

    function u(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function g(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? u(Object(r), !0).forEach(function(e) {
                babelHelpers.defineProperty(t, e, r[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            })
        }
        return t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getGratisPackagesForPropositionId = e.getSelectedVases = e.getMnpPriceDescriptionForSelectedOffer = e.getLongDescriptionTableForSelectedOffer = e.getSelectedOfferDataInContext = e.getOfferDataInContextForPropositionId = e.getOffersInContext = e.getOffersDataInContext = e.getNameForSelectedOffer = e.getSelectedOfferPosition = e.getSelectedOfferRatePlanName = e.getCurrentDeviceInstalmentsCountValue = e.getDefaultDeviceInstalmentsCountValue = e.getDeviceInstalmentsCountForSelect = e.getDeviceInstalmentsCount = e.getPhysicalGoodsInPropositionData = e.getSelectedOffersDeviceName = e.getInstallmentCount = e.getSelectedOffer = e.getDeviceInstalmentsConfigurationInContext = e.getDeviceInstalmentsCountValueByPropositionId = e.getDeviceInstalmentsConfiguration = e.getSelectedDeviceInstalmentsCountValue = e.getSelectedDeviceId = e.getSelectedOfferId = e.getSelectedBaseRatePlanId = e.getPropositionIdsByRatePlanId = e.getPropositionIdByRatePlanId = e.getOfferByPropositonIdForCurrentFilters = e.getBaseRatePlanIdByPropositionId = e.getRateplanIdsObj = e.getAvailableBaseRateplanIds = e.getRateplanIds = e.getOffersByCurrentFiltersForSelect = e.sortedOffersByBasePrice = e.checkOffersForCurrentIndexedFiltersB2B = e.checkOffersForCurrentFilters = e.getOffersForCurrentFiltersB2B = e.getOffersForCurrentFilters = e.getFirstOfferFromProductFilter = e.getContractRoleInProgress = e.getContractRole = e.getNextContractRole = e.getCalculatedContractRole = e.getOffersDocuments = e.getOffersData = void 0, p = babelHelpers.interopRequireDefault(p);
    var s = (0, n.createSelector)(t.getOffers, function(e) {
        return e && e.data
    });
    e.getOffersData = s;
    var l = (0, n.createSelector)(t.getOffers, function(e) {
        return e.documents
    });
    e.getOffersDocuments = l;
    var f = (0, n.createSelector)([t.getOffers, a.getSelectedProcessTypeValue, a.getCheckMsisdnResult, c.getSalesChannel], function(e, t, r, n) {
        return "RETENTION" == t ? "WWW" == n || r && r.isPositive ? e.contractRoleForRetention : [] : e.contractRole
    });
    e.getCalculatedContractRole = f;
    var d = (0, n.createSelector)([f, a.getClientContext, a.getClientContextRole, c.isLogged, r.getCartEntries, c.getSalesChannel], function(e, t, r, n, o, a) {
        var c = "WWW" == a;
        return !c || c && (n || (o || [])[0]) ? e : t ? [r] : []
    });
    e.getNextContractRole = d;
    var v = (0, n.createSelector)([d, r.getContractRoleByBundleNo, r.getAddTerminalToOfferBundleNo], function(e, t, r) {
        if (r) {
            var n = t[parseInt(r)];
            return n ? [n] : []
        }
        return e
    });
    e.getContractRole = v;
    var O = (0, n.createSelector)(t.getOffers, function(e) {
        return e.getContractRoleInProgress
    });
    e.getContractRoleInProgress = O;
    var S = (0, n.createSelector)(t.getOffers, function(e) {
        return e && e.firstOfferFromProductFilter
    });
    e.getFirstOfferFromProductFilter = S;
    var I = (0, n.createSelector)([s, a.getSelectedFilters], function(e, t) {
        return e && e[(0, o.hashFilters)(t)]
    });
    e.getOffersForCurrentFilters = I;
    var P = (0, n.createSelector)([s, a.getSelectedFiltersB2B], function(t, e) {
        return e.map(function(e) {
            return t[(0, o.hashFilters)(e)]
        })
    });
    e.getOffersForCurrentFiltersB2B = P;
    var m = (0, n.createSelector)([s, a.getSelectedFiltersB2B], function(t, e) {
        return e.find(function(e) {
            return t[(0, o.hashFilters)(e)]
        })
    });
    e.checkOffersForCurrentFilters = m;
    e.checkOffersForCurrentIndexedFiltersB2B = function(r) {
        return (0, n.createSelector)([s, a.getSelectedFiltersB2B], function(e, t) {
            return e[(0, o.hashFilters)(t[r])]
        })
    };
    var C = (0, n.createSelector)(I, function(e) {
        return e && e.sort(function(e, t) {
            return e.payments.basePrice.originalGrossPrice - t.payments.basePrice.originalGrossPrice
        })
    });
    e.sortedOffersByBasePrice = C;
    var F = (0, n.createSelector)(C, function(e) {
        return e && e.map(function(e) {
            return {
                value: e.id,
                description: e.rateplanName
            }
        }) || []
    });
    e.getOffersByCurrentFiltersForSelect = F;
    var D = (0, n.createSelector)(I, function(e) {
        return e && e.map(function(e) {
            return e.rateplanId
        }) || []
    });
    e.getRateplanIds = D;
    var y = (0, n.createSelector)(I, function(e) {
        return e && e.map(function(e) {
            return e.rateplanBaseProductId
        }) || []
    });
    e.getAvailableBaseRateplanIds = y;
    var b = (0, n.createSelector)(D, function(e) {
        return (0, o.mapRateplanIdsToJsonObject)(e)
    });
    e.getRateplanIdsObj = b;
    e.getBaseRatePlanIdByPropositionId = function(r) {
        return (0, n.createSelector)(I, function(e) {
            var t = e.find(function(e) {
                return e.id === r
            });
            return t && t.rateplanBaseProductId || ""
        })
    };
    e.getOfferByPropositonIdForCurrentFilters = function(t) {
        return (0, n.createSelector)(I, function(e) {
            return e.find(function(e) {
                return e.id === t
            })
        })
    };
    e.getPropositionIdByRatePlanId = function(t, e) {
        var r = e && e.find(function(e) {
            return e.rateplanBaseProductId == t
        });
        return r && r.rateplanBaseProductId && r.id || ""
    };
    e.getPropositionIdsByRatePlanId = function(t, e) {
        return e && e.filter(function(e) {
            return e.rateplanBaseProductId == t
        }).map(function(e) {
            return e.id
        })
    };
    var B = (0, n.createSelector)(t.getOffers, function(e) {
        return e.selectedRateplanBaseProductId
    });
    e.getSelectedBaseRatePlanId = B;
    var h = (0, n.createSelector)(t.getOffers, function(e) {
        return e.selected
    });
    e.getSelectedOfferId = h;
    var R = (0, n.createSelector)(t.getOffers, function(e) {
        return e.selectedDevice
    });
    e.getSelectedDeviceId = R;
    var x = (0, n.createSelector)(t.getOffers, function(e) {
        return e.selectedDeviceInstalmentsCount
    });
    e.getSelectedDeviceInstalmentsCountValue = x;
    var V = (0, n.createSelector)(t.getOffers, function(e) {
        return e.deviceInstalmentsConfiguration
    });
    e.getDeviceInstalmentsConfiguration = V;
    e.getDeviceInstalmentsCountValueByPropositionId = function(r) {
        return (0, n.createSelector)(I, function(e) {
            var t = e.find(function(e) {
                return e.id === r
            });
            return t && t.physicalGoodsInPropositionData && t.physicalGoodsInPropositionData.deviceInstalmentsCount || ""
        })
    };
    var G = (0, n.createSelector)([V, a.getSelectedOfferType, a.getSelectedProcessTypeValue], function(e, t, r) {
        var n = e.filter(function(e) {
            return null == e.process || e.process == r
        }).filter(function(e) {
            return null == e.offerType || e.offerType == t
        });

        function o(e) {
            return (null != e.process ? 1 : 0) + (null != e.offertType ? 1 : 0)
        }
        return n.sort(function(e, t) {
            return o(t) - o(e)
        }), n[0]
    });
    e.getDeviceInstalmentsConfigurationInContext = G;
    var T = (0, n.createSelector)([I, h, B], function(e, t, r) {
        return null != t && null != t && "undefined" != t && "" != t && "null" != t || !r ? e && e.find(function(e) {
            return e.id === t
        }) : e && e.find(function(e) {
            return e.rateplanBaseProductId == r
        })
    });
    e.getSelectedOffer = T;
    var k = (0, n.createSelector)(T, function(e) {
        return e && e.deviceData && e.deviceData.inOffer && e.deviceData.inOffer.price ? e.deviceData.inOffer.price.base.devicePayments[0].monthTo : 0
    });
    e.getInstallmentCount = k;
    var N = (0, n.createSelector)(T, function(e) {
        return e && e.deviceData && e.deviceData
    });
    e.getSelectedOffersDeviceName = N;
    var j = (0, n.createSelector)(T, function(e) {
        return e && e.physicalGoodsInPropositionData
    });
    e.getPhysicalGoodsInPropositionData = j;
    var _ = (0, n.createSelector)(j, function(e) {
        return e && e.deviceInstalmentsCount || []
    });
    e.getDeviceInstalmentsCount = _;
    var E = (0, n.createSelector)([_, G], function(t, e) {
        var r = (e && e.presentation || [{
                value: -1,
                description: "Wszystkie"
            }, {
                value: 12,
                description: "12 rat"
            }, {
                value: 24,
                description: "24 raty"
            }, {
                value: 36,
                description: "36 rat"
            }, {
                value: 48,
                description: "48 rat"
            }]).filter(function(e) {
                return -1 < t.indexOf(e.value) || -1 == e.value
            }),
            n = r.filter(function(e) {
                return -1 != e.value
            });
        return 1 == n.length ? n : r
    });
    e.getDeviceInstalmentsCountForSelect = E;
    var w = (0, n.createSelector)([_, G], function(t, e) {
        var r = e && e.default; {
            if (r && -1 < t.indexOf(r)) return r;
            if (e && e.presentation) {
                var n = (e && e.presentation).filter(function(e) {
                    return -1 < t.indexOf(r)
                })[0];
                return n && n.value || -1
            }
            return -1
        }
    });
    e.getDefaultDeviceInstalmentsCountValue = w;
    var A = (0, n.createSelector)([x, w], function(e, t) {
        return e || t
    });
    e.getCurrentDeviceInstalmentsCountValue = A;
    var W = (0, n.createSelector)(T, function(e) {
        return e && e.rateplanName || ""
    });
    e.getSelectedOfferRatePlanName = W;
    var M = (0, n.createSelector)(t.getOffers, function(e) {
        return e && "number" == typeof e.selectedPosition && parseInt(e.selectedPosition)
    });
    e.getSelectedOfferPosition = M;
    var L = (0, n.createSelector)(T, function(e) {
        return e && e.rateplanName
    });
    e.getNameForSelectedOffer = L;
    var z = (0, n.createSelector)([I, a.getClientContext, a.getSelectedProcessTypeValue, v], function(e, o, a, c) {
        c = c ? c[0] : null;
        var n = ["boxFeatures", "badgeFeatures", "promotionFeatures", "mobileFeatures"],
            i = n.reduce(function(e, t) {
                return g({}, e, babelHelpers.defineProperty({}, t, []))
            }, {}),
            u = n.reduce(function(e, t) {
                return g({}, e, babelHelpers.defineProperty({}, t, []))
            }, {}),
            s = !1;

        function r(e) {
            return e && e.payments && e.payments.basePrice && e.payments.basePrice.price ? parseFloat(e.payments.basePrice.price.replace(",", ".")) : null
        }

        function l(e, t, r) {
            e[t].find(function(e) {
                return e === r
            }) || e[t].push(r)
        }

        function f(e) {
            function n(e) {
                return g({}, e, {
                    hide: !0
                })
            }
            return e ? e.map(function(e) {
                return g({}, e, {
                    attribute: e.code ? e.code.replace("businessDescriptions/1.0/Offer_Descriptions.", "") : e.attribute,
                    value: e.featureValues && 0 < e.featureValues.length ? e.featureValues[0].value : e.value
                })
            }).map(function(e) {
                return t = e, (r = a) && t.processes && t.processes[0] && !t.processes.find(function(e) {
                    return e == r
                }) ? n(e) : e;
                var t, r
            }).map(function(e) {
                return r = o, null != (t = e).clientContext && t.clientContext != r ? n(e) : e;
                var t, r
            }) : []
        }

        function d(t) {
            var r = {};
            return n.forEach(function(e) {
                return r[e] = f(t[e])
            }), n.forEach(function(a) {
                return r[a] && r[a].forEach(function(e) {
                    var t, r, n, o;
                    t = a, r = e.attribute, l(u, t, r), e.hide || (n = a, o = e.attribute, l(i, n, o))
                })
            }), r
        }
        if (e) {
            var t = e.map(function(r) {
                function a() {
                    return (r && r.features && r.features.featureGroups && r.features.featureGroups.descriptionFeatures || []).map(function(e) {
                        return {
                            roles: e.roles,
                            value: e.featureValues && e.featureValues[0] && e.featureValues[0].value
                        }
                    })
                }
                return g({}, r, {}, function() {
                    if (!r.payments) return "888";
                    var e = p.default.getPaymentsForRole(r.payments, "").basePrice.price,
                        t = p.default.getPaymentsForRole(r.payments, c).basePrice.price;
                    return o && t !== e ? (s = !0, {
                        price: t,
                        oldPrice: e
                    }) : {
                        price: e
                    }
                }(), {}, function() {
                    var e, t, r, n = (r = a().filter(function(e) {
                            return c && -1 < e.roles.indexOf(c)
                        })[0]) && r.value || (e = a(), (t = (t = (t = e.filter(function(e) {
                            return -1 < e.roles.indexOf("DEFAULT")
                        })[0]) || e.filter(function(e) {
                            return 0 == e.roles.length
                        })[0]) || e[0]) && t.value) || '[{"key":"brak", "value":"danych"}]',
                        o = null;
                    try {
                        o = JSON.parse(n)
                    } catch (e) {
                        o = [{
                            key: "brak",
                            value: "danych"
                        }]
                    }
                    return {
                        longDescriptionTable: o
                    }
                }(), {
                    features: (t = r.features) ? {
                        featureGroups: d(t.featureGroups),
                        getMobileDataDesc: function() {
                            return e.call(this, "data_desc_short2", "BD")
                        },
                        getMobileRetentionDesc: function() {
                            return e.call(this, "retention_desc_short2")
                        }
                    } : null
                });

                function e(t, e) {
                    var r = this.featureGroups.mobileFeatures.find(function(e) {
                        return e.attribute === t
                    });
                    return r && !r.hide ? {
                        value: r.value,
                        icon: r.icon && r.icon.toLowerCase().replace("_", "-")
                    } : e ? {
                        value: e
                    } : e
                }
                var t
            });
            return t.sort(function(e, t) {
                return r(e) - r(t)
            }), {
                offers: t,
                visibleAttributes: i,
                allAttributes: u,
                bonusPriceApplied: s
            }
        }
    });
    e.getOffersDataInContext = z;
    var H = (0, n.createSelector)(z, function(e) {
        return e && e.offers || []
    });
    e.getOffersInContext = H;

    function J(t) {
        return (0, n.createSelector)(H, function(e) {
            return e.find(function(e) {
                return e.id === t
            })
        })
    }
    e.getOfferDataInContextForPropositionId = J;
    var U = (0, n.createSelector)([H, h], function(e, t) {
        return e.find(function(e) {
            return e.id === t
        })
    });
    e.getSelectedOfferDataInContext = U;
    var q = (0, n.createSelector)(U, function(e) {
        return e && e.longDescriptionTable
    });
    e.getLongDescriptionTableForSelectedOffer = q;
    var K = (0, n.createSelector)(T, function(e) {
        var t = e && e.features.featureGroups.mnpFeatures && e.features.featureGroups.mnpFeatures[0].featureValues[0].value;
        return t = t || (e && e.features.featureGroups.boxFeatures || []).filter(function(e) {
            return -1 < e.code.indexOf("mnp_price_desc")
        }).map(function(e) {
            return e.featureValues[0].value
        })[0]
    });
    e.getMnpPriceDescriptionForSelectedOffer = K;
    var Q = (0, n.createSelector)(t.getOffers, function(e) {
        return e.selectedVases
    });
    e.getSelectedVases = Q;
    e.getGratisPackagesForPropositionId = function(e) {
        return (0, n.createSelector)(J(e), function(e) {
            return e && e.addons && e.addons.categorizedBonuses.GratisPackageBonuses && e.addons.categorizedBonuses.GratisPackageBonuses.services || []
        })
    }
});
//# sourceMappingURL=offers.js.map