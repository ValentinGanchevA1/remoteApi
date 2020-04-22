define(["exports", "../modules/core/constants/TransactionProcessTypeEnum"], function(e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, n = babelHelpers.interopRequireDefault(n);
    var t = function(a) {
        Math.trunc = Math.trunc || function(e) {
            return isNaN(e) ? NaN : 0 < e ? Math.floor(e) : Math.ceil(e)
        }, a.formatMsisdn = function(e) {
            return e ? e.slice(0, 3) + " " + e.slice(3, 6) + " " + e.slice(6, 9) : e
        }, a.sortMsisdnNumbers = function(e) {
            var n = e.msisdn,
                t = e.mnpNumber;
            return t && "" != t && n ? {
                primary: t,
                secondary: n
            } : t && "" != t && !n ? {
                primary: t
            } : {
                primary: n
            }
        }, a.formatTerminalSerialNumber = function(e) {
            return void 0 === e ? e : e.slice(0, 20)
        }, a.inflectNounWithNumber = function(e, n, t, r, i) {
            return 0 === (e = Number(e)) ? " " + n : 1 === e ? e + " " + t : (20 < e || e < 10) && 1 < e % 10 && e % 10 < 5 ? e + " " + r : e + " " + i
        }, a.loyaltyLengthDescriptionFromNumber = function(e) {
            return a.inflectNounWithNumber(e, "czas nieokreślony", "miesiąc", "miesiące", "miesięcy")
        }, a.noOfPosesDescriptionFromNumber = function(e, n) {
            return e = e && 0 < e ? e : 0, n ? a.inflectNounWithNumber(e, "0 punktów", "punkt", "punkty", "punktów") : a.inflectNounWithNumber(e, "0 salonów", "salon", "salony", "salonów")
        }, a.shortLoyaltyLengthDescription = function(e) {
            return 0 === e ? "czas nieokreślony" : 1 === e ? "1 m-c" : e + " m-" + a.loyaltyLengthDescriptionFromNumber(e).substr(a.loyaltyLengthDescriptionFromNumber(e).length - 2)
        }, a.scrollToPageTop = function() {
            $("html, body").animate({
                scrollTop: 0
            }, "slow")
        }, a.cutCurrencyFromPrice = function(e) {
            return e.replace(/zł/g, "")
        }, a.isNestedObjectNullable = function(e, n, t) {
            return n.split(".").reduce(function(e, n) {
                return null == e ? t || e : e[n]
            }, e) || t
        }, a.checkIfModuleInitialized = function(e) {
            return document.getElementById(e) && document.getElementById(e).getAttribute("data-js-initialized")
        }, a.titleCase = function(e) {
            return (e = e || "").replace(/[a-zA-ZęółśążźćńĘÓŁŚĄŻŹĆŃ]+/g, function(e) {
                return e.substring(0, 1).toUpperCase() + e.substring(1).toLowerCase()
            })
        }, a.invokeOnPositiveRegExp = function(e, n, t, r) {
            e.test(t) && r(n, t)
        }, a.getUrlVarsAsMap = function() {
            var e = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&"),
                r = {};
            return $.each(e, function(e, n) {
                var t = n.split("=");
                r[t[0]] = t[1]
            }), r
        }, a.getUrlVars = function() {
            for (var e, n = [], t = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&"), r = 0; r < t.length; r++) e = t[r].split("="), n.push(e[0]), n[e[0]] = e[1];
            return n
        }, a.changeUrlParameterWithoutReload = function(i, o) {
            var a = window.location.href.split("?")[1];
            history.pushState({}, "", window.location.href.split("/")[window.location.href.split("/").length - 1].split("?")[0] + "?" + function() {
                var e = i.concat("=").concat(o);
                if (a) {
                    var n = a.indexOf(i);
                    if (-1 === n) return a + "&" + e;
                    var t = a.indexOf("&", n),
                        r = a.substring(n, -1 !== t ? t : void 0);
                    return a.replace(r, e)
                }
                return e
            }())
        }, a.resetUrlPathWithoutReload = function() {
            var e = window.location.href.split("?")[1];
            window.location.pathname.includes("/sklep") ? history.pushState({}, "", "/sklep?" + e) : history.pushState({}, "", "/akcesoria?" + e)
        }, a.clearUrlParamsWithoutReload = function() {
            history.pushState({}, "", window.location.href.split("/")[window.location.href.split("/").length - 1].split("?")[0] + a.isCanonicalLink() ? "?" : "")
        }, a.getValueFromUrlOrStorage = function(e, n) {
            var t = a.getParameterValueFromUrl(e),
                r = a.loadFromSessionStorage(n);
            return null != t && "" != t && "undefined" != t || null != r && "" != r && "undefined" != r ? t || r : null
        }, a.uniqueHtmlIdFactory = {}, a.generateUniqeHtmlId = function(e) {
            null == e && (e = "ertfgsadfes_");
            var n = this.uniqueHtmlIdFactory[e];
            return n ? n += 1 : n = 1, e + (this.uniqueHtmlIdFactory[e] = n)
        }, a.notEmptyString = function(e) {
            return null !== e && "" !== e
        }, a.checkIfIe8 = function() {
            for (var e = 3, n = document.createElement("div"), t = n.getElementsByTagName("i"); n.innerHTML = "\x3c!--[if gt IE " + ++e + "]><i></i><![endif]--\x3e", t[0];);
            return (4 < e ? e : void 0) < 9
        }, a.scrollToComponent = function(e) {
            var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "header";
            $("#" + e).length && $("html, body").animate({
                scrollTop: $("#" + e).offset().top - $("#" + n).height()
            }, "slow")
        }, a.addOrRemoveFromArray = function(n) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [];
            if (e.find(function(e) {
                    return e == n
                })) {
                var t = e.indexOf(n);
                return e.splice(t, 1), e
            }
            return e.concat(n)
        }, a.cloneArray = function(n) {
            var t = [];
            return Object.keys(n).forEach(function(e) {
                return t[e] = n[e]
            }), t
        }, a.addUniqueIntoArray = function(n) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [];
            return e.find(function(e) {
                return e == n
            }) ? e : e.push(n)
        }, a.intersectArrays = function(e, n) {
            var t;
            return n.length > e.length && (t = n, n = e, e = t), e.filter(function(e) {
                return -1 < n.indexOf(e)
            })
        }, a.pageHasComponent = function(e) {
            return 0 < $("body").find("div[id^='" + e + "']").length
        }, a.ifIe8 = a.checkIfIe8(), a.pageRedirect = function(e) {
            location.href = e
        }, a.removeFromSessionStorage = function(e) {
            sessionStorage.removeItem(e)
        }, a.saveInSessionStorage = function(e, n) {
            sessionStorage.setItem(e, n)
        }, a.saveCanonicalValueInSessionStorage = function(e, n) {
            a.saveInSessionStorage(e + "_canonical", n)
        }, a.loadFromSessionStorage = function(e) {
            return sessionStorage.getItem(e)
        }, a.removePwaSuflerContextFromSession = function() {
            "true" !== a.getParameterValueFromUrl("isDuet") && Object.keys(sessionStorage).filter(function(e) {
                return e.includes("sufler-")
            }).map(function(e) {
                return sessionStorage.removeItem(e)
            })
        }, a.getParameterValueFromUrl = function(e) {
            if (a.isCanonicalLink() && "undefined" != typeof QUERY_PARAMS && QUERY_PARAMS[e]) return QUERY_PARAMS[e];
            var n = function(e, n) {
                n = n || window;
                var t = new RegExp("[&|?]".concat(e, "=([^&#]+)")),
                    r = n.location.search.match(t);
                return r ? r[1] : ""
            }(e);
            return isNaN(n) ? n : +n
        }, a.closest = function(e, n) {
            for (var t = n[0], r = Math.abs(e - t), i = 0; i < n.length; i++) {
                var o = Math.abs(e - n[i]);
                o < r && (r = o, t = n[i])
            }
            return t
        }, a.setAsLastViewedOfferPage = function() {
            sessionStorage.setItem("LastViewedOfferPage", window.location.pathname)
        }, a.setLastViewedOfferPage = function(e) {
            sessionStorage.setItem("LastViewedOfferPage", e)
        }, a.getLastViewedOfferPage = function() {
            return sessionStorage.getItem("LastViewedOfferPage")
        }, a.redirectToAnotherPage = function(e) {
            window.location.assign(e)
        }, a.formatPrice = function(e) {
            return null != e ? ("string" == typeof e && (e = parseFloat(e.replace(",", "."))), Number(Math.round(e + "e2") + "e-2").toFixed(2).replace(".", ",")) : ""
        }, a.formatPriceAbsolute = function(e) {
            if (null == e) return "";
            if ("00" === a.formatPriceDecimals(e)) return "string" == typeof e && (e = e.replace(",", ".")), Number(Math.round(e + "e2") + "e-2").toFixed().replace(".", ",");
            var n = a.formatPrice(e);
            return n ? n.split(",")[0] : ""
        }, a.formatPriceDecimals = function(e) {
            var n = a.formatPrice(e);
            return n ? n.split(",")[1] : ""
        }, a.getPriceFromPaymentsObject = function(e, n) {
            if (null == e) return "";
            var t = n ? null != e.priceNet && e.priceNet || null != e.originalNetPrice && e.originalNetPrice || null != e.net && e.net : null != e.priceGross && e.priceGross || null != e.originalGrossPrice && e.originalGrossPrice || null != e.gross && e.gross || null != e.price && e.price;
            return t = t || 0
        }, a.getPriceAsNumberFromPaymentsObject = function(e, n) {
            return e && (n ? e.priceNet ? e.priceNet : !!e.originalNetPrice && e.originalNetPrice : e.priceGross ? e.priceGross : !!e.originalGrossPrice && e.originalGrossPrice)
        }, a.getPaymentsForRole = function(e, n) {
            return n && e && e.forRole[n] || e && e.plain
        }, a.transformMsisdn = function(e) {
            return e.replace(/^(\d{3})(\d{3})(\d{3})$/, function() {
                return arguments[1] + " " + arguments[2] + " " + arguments[3]
            })
        };

        function e(e) {
            return {
                isMnp: [n.default.MNP, n.default.MNP_TWOSTEP],
                isMigration: [n.default.MIGRATION_PRE_POST, n.default.MIGRATION_ZETAFON_POST, n.default.MIGRATION_NJU_POST_TO_POST, n.default.MIGRATION_NJU_PRE_TO_POST],
                isAssignment: [n.default.ASSIGNMENT, n.default.ASSIGNMENT_DEATH, n.default.ASSIGNMENT_B2C_B2B, n.default.ASSIGNMENT_B2C_JDG],
                isMnpApplication: [n.default.MNP_APPLICATION],
                isMnpApplicationSecondStep: [n.default.MNP_APPLICATION_SECOND_STEP]
            } [e]
        }
        return a.isMnp = function(n) {
            return e("isMnp").find(function(e) {
                return e === n
            })
        }, a.isMigration = function(n) {
            return e("isMigration").find(function(e) {
                return e === n
            })
        }, a.isAssignment = function(n) {
            return e("isAssignment").find(function(e) {
                return e === n
            })
        }, a.isAnyAssignmentFromList = function(e) {
            return e.some(function(e) {
                return !!a.isAssignment(e)
            })
        }, a.isMnpApplication = function(n) {
            return e("isMnpApplication").find(function(e) {
                return e === n
            })
        }, a.isMnpApplicationSecondStep = function(n) {
            return e("isMnpApplicationSecondStep").find(function(e) {
                return e === n
            })
        }, a.changeOrAddUrlParameter = function(e, n) {
            if (!(2 < arguments.length && void 0 !== arguments[2] && arguments[2] || a.isCanonicalLink() && "undefined" != typeof QUERY_PARAMS && QUERY_PARAMS[e] === n || a.isCanonicalLink() && a.loadFromSessionStorage(e + "_canonical") === n)) {
                var t = window.location.href,
                    r = location.hash;
                if (0 <= (t = t.replace(r, "")).indexOf(e + "=")) {
                    var i = t.substring(0, t.indexOf(e)),
                        o = t.substring(t.indexOf(e));
                    o = 0 <= (o = o.substring(o.indexOf("=") + 1)).indexOf("&") ? o.substring(o.indexOf("&")) : "", t = null == n || !1 === n || "" === n ? ("&" === i[i.length - 1] && (i = i.substr(0, i.length - 1)), i + o) : i + e + "=" + n + o
                } else {
                    if (null == n || !1 === n) return;
                    t.indexOf("?") < 0 ? t += "?" + e + "=" + n : t += "&" + e + "=" + n
                }
                window.history.replaceState({
                    path: t
                }, "", t)
            }
        }, a.updateOgTag = function(e, n) {
            var t = $("meta[property='" + e + "']");
            0 === t.length ? $("head").append("<meta property=" + e + " content=" + n + ">") : t.attr("content", n)
        }, a.getFromSessionStorageAndSetUrlParameter = function(e, n) {
            var t = a.loadFromSessionStorage(e);
            return t && a.changeOrAddUrlParameterDisabledOnCheckout(n || e, t), t
        }, a.changeOrAddUrlParameterDisabledOnCheckout = function(e, n) {
            var t = "showHiddenQueryParams",
                r = a.getParameterValueFromUrl(t);
            "true" == r ? (a.saveInSessionStorage(t, !0), a.removeParameterFromURL(t)) : "false" == r && (a.removeParameterFromURL(t), a.removeFromSessionStorage(t));
            var i = "true" == a.loadFromSessionStorage(t),
                o = document.getElementById("isCheckoutHidden");
            !i && -1 < ["selectedVases"].indexOf(e) ? a.changeOrAddUrlParameter(e, null, !1) : a.changeOrAddUrlParameter(e, n, o)
        }, a.changeOrAddUrlParameterDisabledOnCheckoutParameterLinks = function(e, n) {
            a.isCanonicalLink() || a.changeOrAddUrlParameterDisabledOnCheckout(e, n)
        }, a.changeOrAddUrlParameterDisabledIfNotCanonical = function(e, n) {
            a.isCanonicalLink() || window.location.href.includes("details") || a.changeOrAddUrlParameterDisabledOnCheckout(e, n)
        }, a.parseOneTimeCostPricesUrlParameter = function() {
            var e = a.getParameterValueFromUrl("oneTimeCost");
            return (e = e.replace(/%22/g, '"')) && e.substring(1, e.length - 1).split(";").map(function(e) {
                return JSON.parse(e)
            }) || []
        }, a.processOneTimeCostPricesUrlParameter = function(e) {
            if (e && 0 === e.length) a.changeOrAddUrlParameterDisabledOnCheckout("oneTimeCost", null);
            else {
                var n = e && e.map(function(e) {
                        return {
                            from: e.from,
                            to: e.to
                        }
                    }),
                    t = n && n.reduce(function(e, n) {
                        return e + JSON.stringify(n) + ";"
                    }, "[");
                t = t.substring(0, t.length - 1) + "]", a.changeOrAddUrlParameterDisabledOnCheckout("oneTimeCost", t)
            }
        }, a.setUrlParameters = function(e) {
            var t = "";
            window.location.search && (t += "?"), $.each(e, function(e, n) {
                t += e + "=" + n + "&"
            }), t.substring(0, t.length - 1), encodeURI(t), window.history.replaceState({}, "", t)
        }, a.removeParameterFromURL = function(e) {
            var n = a.getUrlVarsAsMap();
            delete n[e] && a.setUrlParameters(n)
        }, a.splitPrice = function(e) {
            if (!e) return {
                integerPricePart: "0",
                fractionPricePart: "00"
            };
            var n = Math.trunc(e),
                t = Number(100 * (e - n).toFixed(2)).toFixed(0);
            return t < 10 && (t = "0" + t), {
                integerPricePart: n,
                fractionPricePart: t
            }
        }, a.saveInSessionStorageAndUrlParameterDisabledOnCheckout = function(e, n) {
            a.saveInSessionStorage(e, n), a.changeOrAddUrlParameterDisabledOnCheckout(e, n)
        }, a.saveInStorageOnCanonicalLinks = function(e, n, t) {
            a.saveInSessionStorage(e, void 0 !== t ? t : n), a.isCanonicalLink() || a.changeOrAddUrlParameterDisabledOnCheckout(e, n)
        }, a.getCookie = function(e) {
            for (var n = e + "=", t = decodeURIComponent(document.cookie).split(";"), r = 0; r < t.length; r++) {
                for (var i = t[r];
                    " " == i.charAt(0);) i = i.substring(1);
                if (0 == i.indexOf(n)) return i.substring(n.length, i.length)
            }
            return ""
        }, a.odmienRaty = function(e) {
            return 1 == e ? "rata" : e % 10 == 1 || e % 10 == 0 ? "rat" : 2 <= e && e < 5 ? "raty" : 5 <= e && e < 22 ? "rat" : 2 <= e % 10 && e % 10 <= 4 ? "raty" : 5 <= e % 10 && e % 10 <= 9 ? "rat" : void 0
        }, a.extractObject = function(i, o) {
            return Object.keys(i || {}).filter(function(e) {
                return e.startsWith(o)
            }).reduce(function(e, n, t, r) {
                return e[n.replace(o, "")] = i[n], e
            }, {})
        }, a.immutableRemove = function(e, n) {
            var t = e.slice();
            return t.splice(n, 1), t
        }, a.toDateStr = function(e) {
            var n = e.getDate(),
                t = e.getMonth() + 1;
            return n < 10 && (n = "0" + n), t < 10 && (t = "0" + t), e.getFullYear() + "-" + t + "-" + n
        }, a.getComponentKeyObject = function(e) {
            return e ? {
                component: e
            } : {}
        }, a.toGrossHardcoded = function(e) {
            return 1.23 * e
        }, a.stripStringFromHTML = function(e) {
            return e && e.replace(/(<([^>]+)>)/gi, "")
        }, a.ascendingNumberComparator = function(e, n) {
            return e - n
        }, a.isCanonicalLink = function() {
            return window.location.href.includes("/sklep") && !window.location.href.includes("?")
        }, a
    }({});
    e.default = t
});
//# sourceMappingURL=OnlineUtils.js.map