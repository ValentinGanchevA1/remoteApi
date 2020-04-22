define(["exports", "react", "./AddressSectionComponent"], function(e, i, o) {
    "use strict";

    function r(i) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(i);
            if (function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return;
                    if (Reflect.construct.sham) return;
                    if ("function" == typeof Proxy) return 1;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 1
                    } catch (e) {
                        return
                    }
                }()) {
                var s = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, s)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, i = babelHelpers.interopRequireWildcard(i), o = babelHelpers.interopRequireDefault(o);
    var t = function(e) {
        babelHelpers.inherits(s, e);
        var t = r(s);

        function s(e) {
            return babelHelpers.classCallCheck(this, s), t.call(this, e)
        }
        return babelHelpers.createClass(s, [{
            key: "componentDidMount",
            value: function() {
                var s = this;
                this.isPesel() || (this.isPhoneNumber() ? UX.require(["grants/pubsubevents", "grants/utils"], function(e, t) {
                    PubSub.subscribe("UXEvent.CAAP.PhoneVerification.Completed", s.smsVerificationCompletedHandlerWithMarketCheck.bind(s)), PubSub.subscribe("UXEvent.CAAP.PhoneVerification.Back", function() {
                        s.props.setShowSection("MSISDN")
                    })
                }) : UX.require(["grants/pubsubevents", "grants/utils"], function(e, t) {
                    PubSub.subscribe("UXEvent.CAAP.PortalLoginVerification.Completed", s.caapVerificationCompletedHandlerWithMarketCheck.bind(s))
                })), $("#authBack").on("click", function() {
                    s.props.setShowSection("MSISDN")
                }), this.startCaapSectionBodyObserver()
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this.isPesel() || (this.isPhoneNumber() ? UX.require(["grants/pubsubevents", "grants/utils"], function(e, t) {
                    PubSub.unsubscribe("UXEvent.CAAP.PhoneVerification.Completed"), PubSub.unsubscribe("UXEvent.CAAP.PhoneVerification.Back")
                }) : UX.require(["grants/pubsubevents", "grants/utils"], function(e, t) {
                    PubSub.unsubscribe("UXEvent.CAAP.PortalLoginVerification.Completed")
                }))
            }
        }, {
            key: "startCaapSectionBodyObserver",
            value: function() {
                var e = document.getElementById("smsVerificationCaapSectionBody");
                new MutationObserver(this.hideIfTwoBackButtons).observe(e, {
                    childList: !0
                })
            }
        }, {
            key: "smsVerificationCompletedHandlerWithMarketCheck",
            value: function() {
                var t = this;
                this.props.setIsLoading(!0), this.props.showMessage("Trwa weryfikacja rynku."), this.props.checkMarketCompatibility(this.props.msisdn).then(function(e) {
                    e ? t.smsVerificationCompletedHandler() : t.props.setIsLoading(!1)
                })
            }
        }, {
            key: "smsVerificationCompletedHandler",
            value: function() {
                var e = this.props.msisdn,
                    t = this.props.processType,
                    s = this.props.chosenExistingAccount;
                if (this.props.isCartFix || this.props.isFixLP || this.props.isFixPreLP) this.props.setCimByMsisdn(e);
                else if (this.props.isCustomerDataStep && (s = !1), this.props.isB2B && "WWW" === this.props.channels.sales && (s = !0), !this.props.showModalForAccountIdentify || this.props.showModalForProcess || this.props.wwwCimIdBasedOfferSelectorProcesses.includes(t)) {
                    var i = this.props.propositionId,
                        o = this.props.selectedDeviceId;
                    this.props.showMessage("Trwa weryfikacja numeru.");
                    var r = null,
                        n = this.props.loggedCustomerData && this.props.loggedCustomerData.accountCode,
                        a = this.props.loggedCustomerData && this.props.loggedCustomerData.isOnlineCookie;
                    !n && a && (r = "ACCOUNT"), this.props.pushVerifiedMsisdn(e, t, i, r, o)
                } else this.props.showMessage("Trwa wyszukiwanie konta."), this.props.getAccount(e, s)
            }
        }, {
            key: "caapVerificationCompletedHandlerWithMarketCheck",
            value: function() {
                var t = this;
                this.props.setIsLoading(!0), this.props.checkMarketCompatibility(null).then(function(e) {
                    e ? t.caapVerificationCompletedHandler() : t.props.setIsLoading(!1)
                })
            }
        }, {
            key: "caapVerificationCompletedHandler",
            value: function() {
                var t = this,
                    e = this.props.msisdn;
                this.props.requestLoggedCustomerData();
                var s = this.props.processType,
                    i = this.props.propositionId,
                    o = this.props.selectedDeviceId;
                this.props.isCartFix || this.props.isFixLP || this.props.isFixPreLP ? this.props.setCimByLogin(e) : this.props.wwwCimIdBasedOfferSelectorProcesses.includes(s) ? this.props.checkOfferSelector(s, i, o).then(function(e) {
                    t.showBillingAccountSelectModal()
                }) : this.showBillingAccountSelectModal()
            }
        }, {
            key: "showBillingAccountSelectModal",
            value: function() {
                this.props.showModalForAccountIdentify && !this.props.showModalForProcess && (this.props.showMessage("Trwa wyszukiwanie kont."), this.props.showMobileAccountSelection())
            }
        }, {
            key: "overrideAuthorize",
            value: function() {
                this.isPesel() || (this.isPhoneNumber() ? PubSub.publish("UXEvent.CAAP.PhoneVerification.Completed") : PubSub.publish("UXEvent.CAAP.PortalLoginVerification.Completed"))
            }
        }, {
            key: "renderForLocalAuth",
            value: function() {
                return 0 < document.location.href.search("localhost") || 0 < document.location.href.search("10.8.0.66") ? i.default.createElement("div", {
                    className: "l-row u-padding-top-s u-spacing-top-m"
                }, i.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-4"
                }, i.default.createElement("button", {
                    id: "authorize",
                    className: "o-btn opl-btn opl-btn--primary",
                    onClick: this.overrideAuthorize.bind(this)
                }, "zautoryzowany TEST"))) : null
            }
        }, {
            key: "isPesel",
            value: function() {
                return !!this.props.msisdn && 11 == this.props.msisdn.length && jQuery.isNumeric(this.props.msisdn)
            }
        }, {
            key: "isPhoneNumber",
            value: function() {
                return !!this.props.msisdn && 9 == this.props.msisdn.length && jQuery.isNumeric(this.props.msisdn)
            }
        }, {
            key: "hideIfTwoBackButtons",
            value: function(e) {
                if (0 < e.length) {
                    var t = $("#smsVerificationCaapSectionBody").find("button");
                    0 < t.length && "Wstecz" === t.get(0).innerText && $("#authBack").addClass("u-acc-hide")
                }
            }
        }, {
            key: "renderChangePesel",
            value: function() {
                return i.default.createElement("a", {
                    href: "#",
                    id: "authBack"
                }, "zmień")
            }
        }, {
            key: "renderPeselInfo",
            value: function() {
                return i.default.createElement("p", null, i.default.createElement("h5", null, "PESEL"), i.default.createElement("span", {
                    className: "h6"
                }, " ", this.props.msisdn, " "), "   ", this.renderChangePesel())
            }
        }, {
            key: "renderSmsCaapInfo",
            value: function() {
                return i.default.createElement("p", null, this.props.descriptions.statement, " ", this.props.msisdn)
            }
        }, {
            key: "render",
            value: function() {
                return i.default.createElement("div", {
                    className: "",
                    id: "smsVerificationCaapSection"
                }, this.isPesel() && this.renderPeselInfo(), !this.isPesel() && this.renderSmsCaapInfo(), i.default.createElement("div", {
                    className: "u-spacing-top-m u-spacing-m",
                    id: "smsVerificationCaapSectionBody"
                }, this.isPesel() && i.default.createElement(o.default, this.props)), !this.isPesel() && i.default.createElement("div", {
                    className: "l-row"
                }, i.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-4"
                }, i.default.createElement("button", {
                    id: "authBack",
                    className: "o-btn opl-btn u-w-100"
                }, this.props.descriptions.back))), this.renderForLocalAuth())
            }
        }]), s
    }(i.default.Component);
    e.default = t
});
//# sourceMappingURL=CaapSectionComponent.js.map