var NetGrossUtils = function(NetGrossUtils) {

    NetGrossUtils.chooseNetOrGrossPriceForVases = function(vases, isNet) {

        function processPaymentDescriptions(paymentDescriptions) {
            return {
                ...paymentDescriptions,
                oneTimePayment: setPriceAsNetOrGross(paymentDescriptions.oneTimePayment, isNet),
                monthlyPayments: paymentDescriptions.monthlyPayments.map(p => setPriceAsNetOrGross(p, isNet))
            }
        }

        function processServices(services) {
            return services.map(s => {
                return {
                    ...s,
                    paymentDescriptions: processPaymentDescriptions(s.paymentDescriptions)
                }
            })
        }

        let ret = (vases || []).map(
            v => {
                return {
                    ...v,
                    services: processServices(v.services || [])
                }
            }
        )

        return ret
    }

    NetGrossUtils.chooseNetOrGrossPriceForServices = function(vases, isNet) {
        return chooseNetOrGrossPriceForArrayOfObjWithPrice(vases, isNet)
    }

    NetGrossUtils.chooseNetOrGrossPriceForOffers = function(offers, isNet) {
        return chooseNetOrGrossPriceForArrayOfObjWithPrice(offers, isNet)
    }

    function chooseNetOrGrossPriceForArrayOfObjWithPrice(arr, isNet) {
        let ret = (arr || []).map(o => {
            if (!o.oneTimeCost) //bug workaround
                return o;
            let oneTimeCost = setPriceAsNetOrGross(o.oneTimeCost, isNet)
            let payNowCost = o.payNowCost ? setPriceAsNetOrGross(o.payNowCost, isNet) : null
            let monthlyCosts = o.monthlyCosts.map(oo => setPriceAsNetOrGross(oo, isNet))
            let altered = {
                oneTimeCost,
                monthlyCosts,
                payNowCost
            }
            return {
                ...o,
                ...altered
            }
        });
        return ret;
    }

    NetGrossUtils.chooseNetOrGrossPriceForCartMonthlyCosts = function(monthlyCosts, isNet) {
        return monthlyCosts.map(e => setPriceAsNetOrGross(e, isNet))
    };

    NetGrossUtils.chooseNetOrGrossPriceForCheckoutCost = function(checkoutCost, isNet) {
        if (checkoutCost) {
            return setPriceAsNetOrGrossExtractors(checkoutCost, isNet, p => p.netPrice, p => p.price)
        } else {
            return checkoutCost
        }
    };

    NetGrossUtils.chooseNetOrGrossPriceForCartOneTimeCost = function(oneTimeCost, isNet) {
        return setPriceAsNetOrGross(oneTimeCost, isNet)
    };

    function chooseNetOrGrossPrice(miniCartEntries, isNet) {
        if (!miniCartEntries) {
            return miniCartEntries
        }
        return miniCartEntries.map(e => chooseNetOrGrossPriceOnCartEntry(e, isNet))
    }

    NetGrossUtils.chooseNetOrGrossPrice = chooseNetOrGrossPrice


    function chooseNetOrGrossPriceForDevices(cartDevices, isNet) {

        if (cartDevices) {
            return cartDevices.map(dd => chooseNetOrGrossPriceOnDeviceData(dd, isNet))
        } else {
            return cartDevices
        }

    }

    function chooseNetOrGrossPriceForVasesInCart(vases, isNet) {
        return vases.map(vas => chooseNetOrGrossPriceForVasInCart(vas, isNet))
    }

    function chooseNetOrGrossPriceForVasInCart(vas, isNet) {

        let objToAlterPrice = [
            "checkoutPrice",
            "firstBillPrice"
        ];

        let arrToAlterPrice = [
            "monthlyPrices"
        ];

        let ret = chooseNetOrGrossPriceOnObj(vas, isNet, setPriceAsNetOrGross, objToAlterPrice, arrToAlterPrice)
        return ret;
    }

    function chooseNetOrGrossPriceOnDeviceData(data, isNet) {
        let objToAlterPrice = [
            "payNowCost",
            "oneTimeCost",
            "checkoutPrice"
        ];

        let arrToAlterPrice = [
            "monthlyCosts",
            "monthlyPrices"
        ];

        let priceCreator = (d, isNet) => setPriceAsNetOrGrossExtractors(d, isNet, p => p.netPrice, p => p.price)
        let priceWithoutVouchersCreator = (d, isNet) => setPriceAsNetOrGrossExtractors(d, isNet, p => p.netPriceWithoutVouchers || 0, p => p.priceWithoutVouchers, {
            gross: "grossPriceWithoutVouchers",
            net: "netPriceWithoutVouchers",
            result: "priceWithoutVouchers"
        })

        let intermediate = chooseNetOrGrossPriceOnObj(data, isNet, priceCreator, objToAlterPrice, arrToAlterPrice)
        let ret = chooseNetOrGrossPriceOnObj(intermediate, isNet, priceWithoutVouchersCreator, objToAlterPrice, arrToAlterPrice)
        return ret;

    }

    function chooseNetOrGrossPriceOnCartEntry(entry, isNet) {

        let objToAlterPrice = [
            "totalFirstBillPrice",
            "totalCheckoutPrice",
            "monthlyOldPrice",
            "firstBillPrice",
            "checkoutPrice",
            "oneTimeOldPrice"
        ];

        let arrToAlterPrice = [
            "totalMonthlyPrices",
            "monthlyOldPrices",
            "monthlyPrices"
        ];

        let ret = chooseNetOrGrossPriceOnObj(entry, isNet, setPriceAsNetOrGross, objToAlterPrice, arrToAlterPrice)
        ret.terminals = chooseNetOrGrossPriceForDevices(ret.terminals || [], isNet)
        ret.euroSets = chooseNetOrGrossPriceForDevices(ret.euroSets || [], isNet)
        ret.gadgets = chooseNetOrGrossPriceForDevices(ret.gadgets || [], isNet)
        ret.vases = chooseNetOrGrossPriceForVasesInCart(ret.vases || [], isNet)
        return ret

    }

    function chooseNetOrGrossPriceOnObj(obj, isNet, priceObjectCreator, objToAlterPrice, arrToAlterPrice) {

        let altered = {}
        objToAlterPrice.forEach(o => {
            if (obj[o]) {
                altered[o] = priceObjectCreator(obj[o], isNet);
            } else {
                //altered[o] = null;
                //NOP
            }
        });

        arrToAlterPrice.forEach(arr => {
            if (obj[arr]) {
                altered[arr] = obj[arr].map(o => !!o ? priceObjectCreator(o, isNet) : null);
            } else {
                //altered[arr] = null;
                //NOP
            }
        });

        return {
            ...obj,
            ...altered
        }
    }


    function setPriceAsNetOrGross(priceData, isNet) {
        if (priceData.originalGrossPrice) {
            return setPriceAsNetOrGrossExtractors(priceData, isNet, p => p.originalNetPrice, p => p.originalGrossPrice)
        } else {
            return setPriceAsNetOrGrossExtractors(priceData, isNet, p => p.netPrice, p => p.price)
        }
    }

    function setPriceAsNetOrGrossExtractors(priceData, isNet, netExtractor, grossExtractor, keys) {

        keys = keys || {
            gross: "priceGross",
            net: "priceNet",
            result: "price"
        };

        let priceNet = netExtractor(priceData);
        let priceGross = grossExtractor(priceData);
        if (typeof(priceNet) === "undefined" || priceNet === null) {
            console.error("Net price is not present, using gross. Must be corrected for B2B market");
            priceNet = priceGross
        }
        let price = isNet ? priceNet : priceGross;
        return {
            ...priceData,
            [keys.gross]: priceGross,
            [keys.net]: priceNet,
            [keys.result]: price
        }
    }

    NetGrossUtils.setPriceAsNetOrGross = setPriceAsNetOrGross
    NetGrossUtils.chooseNetOrGrossPriceOnCartEntry = chooseNetOrGrossPriceOnCartEntry
    NetGrossUtils.chooseNetOrGrossPriceForDevices = chooseNetOrGrossPriceForDevices

    return NetGrossUtils;
}({});
export default NetGrossUtils;