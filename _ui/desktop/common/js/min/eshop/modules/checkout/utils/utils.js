define(["exports", "../../core/validationHelper", "../validators", "../../core/enum/SalesChannel"], function(e, a, t, n) {
    "use strict";

    function r(n, e) {
        var t = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(n);
            e && (r = r.filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            })), t.push.apply(t, r)
        }
        return t
    }

    function o(n) {
        for (var e = 1; e < arguments.length; e++) {
            var t = null != arguments[e] ? arguments[e] : {};
            e % 2 ? r(Object(t), !0).forEach(function(e) {
                babelHelpers.defineProperty(n, e, t[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : r(Object(t)).forEach(function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
            })
        }
        return n
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getCountrySuggestions = e.getCountryName = e.mapCountrySuggestion = e.getInputValidationParams = e.getPropsForSelect = e.getPropsForInput = e.getPropsForIdentification = e.like = e.StyleBuilder = e.createQueryParamString = e.runValidator = e.enforceArrayLengthInBounds = e.createArrayWithValueOnIndex = e.isMnpFieldInvisible = e.isFieldDisabledForValidation = e.prepareForeignerIdentificationTypes = e.isFieldDisabled = e.consentIsPermanentlyAgreed = e.hasManualVerificationErrors = e.remapToPhone = e.removeElementFromArray = e.validateConsent = e.getBillingAccountForm = e.requiredBillingAccountFieldExist = e.fixCustomerCheckoutData = e.toUpperCase = e.getCustomerDataErrors = e.fixCustomerData = e.whenAvailable = void 0, n = babelHelpers.interopRequireDefault(n);
    e.whenAvailable = function e(n, t) {
        window.setTimeout(function() {
            window[n] ? t() : e(n, t)
        }, 10)
    };
    e.fixCustomerData = function(e) {
        if (e) {
            var n = function(e) {
                    if (!e) return "";
                    var n = e.replace(/\D/g, "");
                    return 9 < n.length ? n.slice(n.length - 9) : n
                }(e.phoneNumber),
                t = (s = e, (0, a.validateIdNumber)(s.idNumber) || s.disabledIdNumber || s.fixBundleInCart ? s.idNumber : ""),
                r = f(e.gender),
                i = f(e.country);
            return o({}, e, {
                phoneNumber: n,
                idNumber: t,
                gender: r,
                fakePesel: c(e),
                pesel: u(e),
                identification: f(e.identification),
                identificationNumber: f(e.identificationNumber),
                identificationExpirationDate: f(e.identificationExpirationDate),
                country: i
            })
        }
        var s;
        return {}
    };
    var u = function(e) {
            return (!i(e.pesel) || "VALID" !== e.peselType) && ["FAKE", "INVALID"].includes(e.peselType) ? "" : e.pesel
        },
        i = function(e) {
            return (0, a.validateCensoredPesel)(e)
        };
    e.getCustomerDataErrors = function(n) {
        return Object.assign.apply(Object, [{}].concat(babelHelpers.toConsumableArray(Object.keys(n).map(function(e) {
            return e && n[e] && Object.keys(t.customerDataFormValidators).includes(e) && !y(n, e) && babelHelpers.defineProperty({}, e, t.customerDataFormValidators[e](n[e]))
        }))))
    };

    function s(n) {
        return n ? "string" == typeof n ? function(e) {
            for (var n = {
                    223: 7838
                }, t = "", r = 0; r < e.length; r++) {
                var i = e.charCodeAt(r);
                t += n[i] ? String.fromCharCode(n[i]) : e.charAt(r).toUpperCase()
            }
            return t
        }(n) : ("object" === babelHelpers.typeof(n) && Object.keys(n).forEach(function(e) {
            n[e] = s(n[e])
        }), n) : n
    }
    e.toUpperCase = s;
    e.fixCustomerCheckoutData = function(e) {
        return e.foreigner || (e.identification = "", e.identificationNumber = "", e.identificationExpirationDate = "", e.country = "", e.gender = ""), e.noPesel && (e.pesel = ""), e.fakePesel && e.noPesel && (e.pesel = e.fakePesel), s(e)
    };

    function l(e) {
        return !!(e.postalCode && e.town && e.streetName && e.streetNumber)
    }
    var c = function(e) {
            return "FAKE" === e.peselType ? e.pesel : ""
        },
        d = {
            postalCode: "",
            town: "",
            streetName: "",
            streetNumber: "",
            appartmentNo: "",
            emailAddress: ""
        },
        f = function(e) {
            return e || ""
        };
    e.requiredBillingAccountFieldExist = l;
    e.getBillingAccountForm = function(e) {
        return e && l(e) ? (e.appartmentNo = f(e.appartmentNo), e.emailAddress = f(e.emailAddress), e) : d
    };
    e.validateConsent = function(n, e) {
        if (n.bundleAssignments && 0 < n.bundleAssignments.length) return p(n, e);
        var t = e.find(function(e) {
            return e.consentCode === n.consentCode
        });
        return g(n, t)
    };
    var p = function(t, e) {
            return t.bundleAssignments.map(function(n) {
                return e.find(function(e) {
                    return e.consentCode === t.consentCode && e.bundleNo === n.bundleNo
                })
            }).every(function(e) {
                return g(t, e)
            })
        },
        g = function(e, n) {
            var t = e.states && e.states.find(function(e) {
                    return n && e.code === n.stateCode
                }),
                r = e.states.find(function(e) {
                    return e.required
                });
            return e && (!e.required || !r && n && n.stateCode || r && t && t.required)
        };
    e.removeElementFromArray = function(e, n, t) {
        var r = [];
        return e.forEach(function(e) {
            e[n] !== t && r.push(e)
        }), r
    };
    e.remapToPhone = function(e) {
        var n = e.split(" ");
        return n[n.length - 1].split("-").join("").replace(/[\_]+/g, "")
    };
    e.hasManualVerificationErrors = function(e) {
        return 0 < (e.results || []).filter(function(e) {
            return "MANUAL" === e.category
        }).length
    };
    e.consentIsPermanentlyAgreed = function(n, e) {
        var t, r = e.filter(function(e) {
            return e.consentCode === n.consentCode && e.permanentlyAgreed
        });
        return 0 !== r.length && (!((t = n).msisdns && 0 < t.msisdns.length) || n.msisdns && n.msisdns.length === r.length)
    };

    function m(e, n) {
        switch (n) {
            case "nip":
                return !!e.existing;
            case "regon":
            case "legalForm":
            case "companyName":
            case "registrationDate":
            case "companyStatus":
            case "customerNoEmail":
                return !(void 0 === e.isBusinessClient || !e.isBusinessClient) && (!e.existing && !e.isSalesOfGoodsOnly && !e.bpgRequested);
            case "lastName":
                return !e.isWWW && e.existing || b(e);
            case "firstName":
                return e.readOnly || e.existing || b(e);
            case "pesel":
                return (e.readOnly || e.existing) && !e.foreigner || (e.readOnly || e.existing) && e.foreigner && "VALID" === e.peselType || e.noPesel && e.foreigner || b(e);
            case "phoneNumber":
                return !!e.isBusinessClient && (!e.isSalesOfGoodsOnly && !e.bpgRequested);
            case "country":
                return !!e.initialNationality && "POL" !== e.initialNationality || b(e);
            case "emailAddress":
                return e.isBusinessClient && !e.isSalesOfGoodsOnly && !e.bpgRequested || e.customerNoEmail;
            case "postalCode":
            case "town":
            case "streetNumber":
                return b(e);
            case "appartmentNo":
                return void 0 !== e.isBusinessClient && e.isBusinessClient ? void 0 !== e.bpgRequested && (!e.existing && !e.isSalesOfGoodsOnly && !e.bpgRequested) : b(e);
            case "streetName":
                var t = !!e.streetSuggestions && !e.streetSuggestions.length && !e.streetName.length;
                return void 0 !== e.isBusinessClient && e.isBusinessClient ? void 0 !== e.bpgRequested && (!e.existing && !e.isSalesOfGoodsOnly && !e.bpgRequested) || t : t || b(e);
            case "idNumber":
                return e.containsFixEntries && !b(e) ? !1 : e.readOnly && e.disabledIdNumber || b(e);
            case "identification":
            case "identificationNumber":
            case "identificationExpirationDate":
            case "identificationRegistrationDate":
                return b(e);
            default:
                return e.readOnly
        }
    }

    function b(e) {
        return e.isBzuOnlyAvailableOptionForFix && (e.channels.sales === n.default.TLS || e.channels.sales === n.default.IDG)
    }
    e.isFieldDisabled = m;
    e.prepareForeignerIdentificationTypes = function(e) {
        if (e) {
            var r = [];
            return Object.entries(e).forEach(function(e) {
                var n = babelHelpers.slicedToArray(e, 2),
                    t = {
                        value: n[0],
                        description: n[1]
                    };
                r.push(t)
            }), r
        }
        return []
    };
    var y = function(e, n) {
        return !!e.isWWW && m(e, n)
    };
    e.isFieldDisabledForValidation = y;
    e.isMnpFieldInvisible = function(e, n, t) {
        switch (n) {
            case "street":
            case "city":
            case "flatNumber":
            case "postalCode":
            case "houseNumber":
                return !0 === e.isHeadquartersAddressSame;
            case "businessName":
                return "2" !== e.agreementType;
            case "nip":
                return "2" !== e.agreementType || "NIP" !== e.identifier;
            case "regon":
                return "2" !== e.agreementType || "REGON" !== e.identifier;
            case "date":
                return !e.offerType || "DAY" !== e.migrationMode && "EOP" !== e.migrationMode;
            case "pesel":
            case "idNumber":
            case "firstName":
            case "lastName":
                return !t || "1" !== e.agreementType;
            default:
                return !1
        }
    };
    e.createArrayWithValueOnIndex = function(e, n, t, r, i) {
        var s = 4 < arguments.length && void 0 !== i ? i : {};
        n = n || 0;
        var a = e.slice();
        return function(e, n) {
            for (; !e[n];) e.push(s)
        }(a, n), t && (a[n] = o({}, a[n], babelHelpers.defineProperty({}, t, void 0 === r ? "" : r))), a
    };

    function h(e) {
        return null == e ? "" : e
    }
    e.enforceArrayLengthInBounds = function(e, n, t, r) {
        if (e.length < n) {
            for (var i = e.slice(); i.length < n;) i.push(r);
            return i
        }
        return e.length > t ? e.slice(0, t) : e
    };
    e.runValidator = function(n, t, r, i, s) {
        i ? Object.keys(n).forEach(function(e) {
            return Object.keys(t).includes(e) && (!i(n, e) || n.fixBundleInCart) && s(r({
                name: e,
                value: h(n[e]),
                entryIndex: n.bundleNo
            }))
        }) : Object.keys(n).forEach(function(e) {
            return Object.keys(t).includes(e) && s(r({
                name: e,
                value: h(n[e]),
                entryIndex: n.bundleNo
            }))
        })
    };
    e.createQueryParamString = function(n) {
        return Object.keys(n).map(function(e) {
            return encodeURIComponent(e) + "=" + encodeURIComponent(n[e])
        }).join("&")
    };
    e.StyleBuilder = function e() {
        var n = this;
        babelHelpers.classCallCheck(this, e), babelHelpers.defineProperty(this, "hidden", function(e) {
            return n.display = e ? "none" : "inline-block", n
        }), babelHelpers.defineProperty(this, "build", function() {
            return {
                verticalAlign: n.verticalAlign,
                display: n.display,
                float: n.float
            }
        }), this.verticalAlign = "middle", this.display = "inline-block", this.float = "none"
    };
    e.like = function(e, n) {
        return -1 < e.indexOf(n)
    };
    e.getPropsForIdentification = function(e, n, t, r, i) {
        var s = o({}, v(e, t, r, i));
        return n && (s.mask = "aa9999999", s.placeholder = "______"), s
    };
    var v = function(e, n, t, r) {
        return o({}, C(e, n.descriptions, n.errors), {
            value: n[e] || "",
            labelType: "floating",
            validateEmpty: "" !== n[e] && n.existing,
            onChange: r,
            onBlur: t
        })
    };
    e.getPropsForInput = v;
    var C = function(e, n, t) {
        return {
            id: e,
            key: e,
            name: e,
            label: n[e],
            errors: t && t[e]
        }
    };
    e.getPropsForSelect = function(e, n, t) {
        return o({}, C(e, n.descriptions, n.errors), {
            selected: n[e],
            onChange: t,
            className: "g-gray1-bg u-font-small",
            style: {
                height: "40px"
            },
            withEmptyOption: !0
        })
    };
    e.getInputValidationParams = function(e, n) {
        var t = y(n, e),
            r = m(n, e),
            i = {
                disabled: r
            },
            s = !n.errors && "" !== n[e] || n.errors && n.errors[e] && 0 === n.errors[e].length;
        return r && (t || s) || (i.valid = s), i
    };
    e.mapCountrySuggestion = function(e) {
        return {
            value: e.isocode,
            label: e.name
        }
    };

    function O(e, n) {
        n = n || "";
        var t = e.find(function(e) {
            return e.isocode === n
        });
        return t ? t.name : n
    }
    e.getCountryName = O;
    e.getCountrySuggestions = function(e, n) {
        var t = O(e, n).toUpperCase();
        return e.filter(function(e) {
            var n = e.name.toUpperCase();
            return n.startsWith(t) || n.includes(" " + t)
        })
    }
});
//# sourceMappingURL=utils.js.map