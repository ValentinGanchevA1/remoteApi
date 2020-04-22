define(["exports"], function(_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
            keys.push.apply(keys, symbols);
        }
        return keys;
    }

    function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
                ownKeys(Object(source), true).forEach(function(key) {
                    babelHelpers.defineProperty(target, key, source[key]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
                ownKeys(Object(source)).forEach(function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
            }
        }
        return target;
    }

    var NetGrossUtils = function(NetGrossUtils) {
        NetGrossUtils.chooseNetOrGrossPriceForVases = function(vases, isNet) {
            function processPaymentDescriptions(paymentDescriptions) {
                return _objectSpread({}, paymentDescriptions, {
                    oneTimePayment: setPriceAsNetOrGross(paymentDescriptions.oneTimePayment, isNet),
                    monthlyPayments: paymentDescriptions.monthlyPayments.map(function(p) {
                        return setPriceAsNetOrGross(p, isNet);
                    })
                });
            }

            function processServices(services) {
                return services.map(function(s) {
                    return _objectSpread({}, s, {
                        paymentDescriptions: processPaymentDescriptions(s.paymentDescriptions)
                    });
                });
            }

            var ret = (vases || []).map(function(v) {
                return _objectSpread({}, v, {
                    services: processServices(v.services || [])
                });
            });
            return ret;
        };

        NetGrossUtils.chooseNetOrGrossPriceForServices = function(vases, isNet) {
            return chooseNetOrGrossPriceForArrayOfObjWithPrice(vases, isNet);
        };

        NetGrossUtils.chooseNetOrGrossPriceForOffers = function(offers, isNet) {
            return chooseNetOrGrossPriceForArrayOfObjWithPrice(offers, isNet);
        };

        function chooseNetOrGrossPriceForArrayOfObjWithPrice(arr, isNet) {
            var ret = (arr || []).map(function(o) {
                if (!o.oneTimeCost) //bug workaround
                    return o;
                var oneTimeCost = setPriceAsNetOrGross(o.oneTimeCost, isNet);
                var payNowCost = o.payNowCost ? setPriceAsNetOrGross(o.payNowCost, isNet) : null;
                var monthlyCosts = o.monthlyCosts.map(function(oo) {
                    return setPriceAsNetOrGross(oo, isNet);
                });
                var altered = {
                    oneTimeCost: oneTimeCost,
                    monthlyCosts: monthlyCosts,
                    payNowCost: payNowCost
                };
                return _objectSpread({}, o, {}, altered);
            });
            return ret;
        }

        NetGrossUtils.chooseNetOrGrossPriceForCartMonthlyCosts = function(monthlyCosts, isNet) {
            return monthlyCosts.map(function(e) {
                return setPriceAsNetOrGross(e, isNet);
            });
        };

        NetGrossUtils.chooseNetOrGrossPriceForCheckoutCost = function(checkoutCost, isNet) {
            if (checkoutCost) {
                return setPriceAsNetOrGrossExtractors(checkoutCost, isNet, function(p) {
                    return p.netPrice;
                }, function(p) {
                    return p.price;
                });
            } else {
                return checkoutCost;
            }
        };

        NetGrossUtils.chooseNetOrGrossPriceForCartOneTimeCost = function(oneTimeCost, isNet) {
            return setPriceAsNetOrGross(oneTimeCost, isNet);
        };

        function chooseNetOrGrossPrice(miniCartEntries, isNet) {
            if (!miniCartEntries) {
                return miniCartEntries;
            }

            return miniCartEntries.map(function(e) {
                return chooseNetOrGrossPriceOnCartEntry(e, isNet);
            });
        }

        NetGrossUtils.chooseNetOrGrossPrice = chooseNetOrGrossPrice;

        function chooseNetOrGrossPriceForDevices(cartDevices, isNet) {
            if (cartDevices) {
                return cartDevices.map(function(dd) {
                    return chooseNetOrGrossPriceOnDeviceData(dd, isNet);
                });
            } else {
                return cartDevices;
            }
        }

        function chooseNetOrGrossPriceForVasesInCart(vases, isNet) {
            return vases.map(function(vas) {
                return chooseNetOrGrossPriceForVasInCart(vas, isNet);
            });
        }

        function chooseNetOrGrossPriceForVasInCart(vas, isNet) {
            var objToAlterPrice = ["checkoutPrice", "firstBillPrice"];
            var arrToAlterPrice = ["monthlyPrices"];
            var ret = chooseNetOrGrossPriceOnObj(vas, isNet, setPriceAsNetOrGross, objToAlterPrice, arrToAlterPrice);
            return ret;
        }

        function chooseNetOrGrossPriceOnDeviceData(data, isNet) {
            var objToAlterPrice = ["payNowCost", "oneTimeCost", "checkoutPrice"];
            var arrToAlterPrice = ["monthlyCosts", "monthlyPrices"];

            var priceCreator = function priceCreator(d, isNet) {
                return setPriceAsNetOrGrossExtractors(d, isNet, function(p) {
                    return p.netPrice;
                }, function(p) {
                    return p.price;
                });
            };

            var priceWithoutVouchersCreator = function priceWithoutVouchersCreator(d, isNet) {
                return setPriceAsNetOrGrossExtractors(d, isNet, function(p) {
                    return p.netPriceWithoutVouchers || 0;
                }, function(p) {
                    return p.priceWithoutVouchers;
                }, {
                    gross: "grossPriceWithoutVouchers",
                    net: "netPriceWithoutVouchers",
                    result: "priceWithoutVouchers"
                });
            };

            var intermediate = chooseNetOrGrossPriceOnObj(data, isNet, priceCreator, objToAlterPrice, arrToAlterPrice);
            var ret = chooseNetOrGrossPriceOnObj(intermediate, isNet, priceWithoutVouchersCreator, objToAlterPrice, arrToAlterPrice);
            return ret;
        }

        function chooseNetOrGrossPriceOnCartEntry(entry, isNet) {
            var objToAlterPrice = ["totalFirstBillPrice", "totalCheckoutPrice", "monthlyOldPrice", "firstBillPrice", "checkoutPrice", "oneTimeOldPrice"];
            var arrToAlterPrice = ["totalMonthlyPrices", "monthlyOldPrices", "monthlyPrices"];
            var ret = chooseNetOrGrossPriceOnObj(entry, isNet, setPriceAsNetOrGross, objToAlterPrice, arrToAlterPrice);
            ret.terminals = chooseNetOrGrossPriceForDevices(ret.terminals || [], isNet);
            ret.euroSets = chooseNetOrGrossPriceForDevices(ret.euroSets || [], isNet);
            ret.gadgets = chooseNetOrGrossPriceForDevices(ret.gadgets || [], isNet);
            ret.vases = chooseNetOrGrossPriceForVasesInCart(ret.vases || [], isNet);
            return ret;
        }

        function chooseNetOrGrossPriceOnObj(obj, isNet, priceObjectCreator, objToAlterPrice, arrToAlterPrice) {
            var altered = {};
            objToAlterPrice.forEach(function(o) {
                if (obj[o]) {
                    altered[o] = priceObjectCreator(obj[o], isNet);
                } else { //altered[o] = null;
                    //NOP
                }
            });
            arrToAlterPrice.forEach(function(arr) {
                if (obj[arr]) {
                    altered[arr] = obj[arr].map(function(o) {
                        return !!o ? priceObjectCreator(o, isNet) : null;
                    });
                } else { //altered[arr] = null;
                    //NOP
                }
            });
            return _objectSpread({}, obj, {}, altered);
        }

        function setPriceAsNetOrGross(priceData, isNet) {
            if (priceData.originalGrossPrice) {
                return setPriceAsNetOrGrossExtractors(priceData, isNet, function(p) {
                    return p.originalNetPrice;
                }, function(p) {
                    return p.originalGrossPrice;
                });
            } else {
                return setPriceAsNetOrGrossExtractors(priceData, isNet, function(p) {
                    return p.netPrice;
                }, function(p) {
                    return p.price;
                });
            }
        }

        function setPriceAsNetOrGrossExtractors(priceData, isNet, netExtractor, grossExtractor, keys) {
            var _objectSpread2;

            keys = keys || {
                gross: "priceGross",
                net: "priceNet",
                result: "price"
            };
            var priceNet = netExtractor(priceData);
            var priceGross = grossExtractor(priceData);

            if (typeof priceNet === "undefined" || priceNet === null) {
                console.error("Net price is not present, using gross. Must be corrected for B2B market");
                priceNet = priceGross;
            }

            var price = isNet ? priceNet : priceGross;
            return _objectSpread({}, priceData, (_objectSpread2 = {}, babelHelpers.defineProperty(_objectSpread2, keys.gross, priceGross), babelHelpers.defineProperty(_objectSpread2, keys.net, priceNet), babelHelpers.defineProperty(_objectSpread2, keys.result, price), _objectSpread2));
        }

        NetGrossUtils.setPriceAsNetOrGross = setPriceAsNetOrGross;
        NetGrossUtils.chooseNetOrGrossPriceOnCartEntry = chooseNetOrGrossPriceOnCartEntry;
        NetGrossUtils.chooseNetOrGrossPriceForDevices = chooseNetOrGrossPriceForDevices;
        return NetGrossUtils;
    }({});

    var _default = NetGrossUtils;
    _exports.default = _default;
});
//# sourceMappingURL=NetGrossUtils.js.map