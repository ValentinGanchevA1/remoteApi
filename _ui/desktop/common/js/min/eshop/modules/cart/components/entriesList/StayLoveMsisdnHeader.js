define(["exports", "react", "react-redux", "eshop/utils/OnlineUtils", "eshop/modules/auth/selectors/authorization", "eshop/modules/auth/actions/authorization", "eshop/modules/configurator/selectors/filters", "eshop/modules/configurator/selectors/metaData", "eshop/modules/simfree/selectors"], function(e, a, t, r, l, s, n, o, i) {
    "use strict";

    function c(a) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(a);
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
                var l = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, l)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, a = babelHelpers.interopRequireWildcard(a), r = babelHelpers.interopRequireDefault(r);
    var u = function(e) {
            babelHelpers.inherits(l, e);
            var t = c(l);

            function l() {
                return babelHelpers.classCallCheck(this, l), t.apply(this, arguments)
            }
            return babelHelpers.createClass(l, [{
                key: "render",
                value: function() {
                    return "VOICE_LDF" === this.props.selectedOfferType ? a.default.createElement("div", {
                        className: "l-full-row " + this.props.bgColor
                    }, a.default.createElement("div", {
                        className: "l-page-row " + this.props.bgColor
                    }, this.props.showHeader && a.default.createElement("div", {
                        className: "l-row"
                    }, a.default.createElement("div", {
                        className: "l-col l-col-12"
                    }, a.default.createElement("h2", null, "Wybierz ofertę abonamentu komórkowego w Love dla Firm"))), this.props.msisdn && a.default.createElement("div", null, a.default.createElement("div", {
                        className: "l-row"
                    }, a.default.createElement("div", {
                        className: "l-col l-col-9"
                    }, a.default.createElement("div", {
                        className: "o-icon-list"
                    }, a.default.createElement("div", {
                        className: "o-icon-list__item"
                    }, a.default.createElement("div", {
                        className: "o-icon-list__icon u-vertical-middle "
                    }, a.default.createElement("span", {
                        className: "g-icon g-icon--only g-icon--sim"
                    })), a.default.createElement("div", {
                        className: "o-icon-list__text u-vertical-middle"
                    }, a.default.createElement("p", {
                        className: "h4 u-no-margin"
                    }, "Karta SIM z nr ", a.default.createElement("span", {
                        className: "g-brand2-c"
                    }, r.default.formatMsisdn(this.props.msisdn)))))))), a.default.createElement("div", {
                        className: "o-icon-list u-padding-m u-small-padding-top-m"
                    }, a.default.createElement("div", {
                        className: "o-icon-list__item"
                    }, a.default.createElement("div", {
                        className: "o-icon-list__text u-vertical-middle "
                    }, a.default.createElement("div", {
                        className: " u-padding-left-xl u-margin-left-s u-small-no-margin-left u-small-no-padding-left u-padding-right-xxl"
                    }, a.default.createElement("p", null, ' Chcesz dokupić nowy numer w Love dla Firm lub przedłużyć umowę, ale dla innego numeru? Wybierz "Zmień" i wybierz jeszcze raz proces.'))), a.default.createElement("div", {
                        className: "o-icon-list__icon u-vertical-middle u-right u-no-padding-right"
                    }, a.default.createElement("button", {
                        onClick: this.props.clearStayLoveRetentionMSISDN,
                        className: "opl-btn opl-btn--secondary opl-btn--small o-btn u-right"
                    }, "Zmień"))))))) : null
                }
            }]), l
        }(a.Component),
        d = (0, t.connect)(function(e) {
            return {
                msisdn: (0, l.getStayLoveRetentionMSISDN)(e),
                selectedOfferType: (0, n.getSelectedOfferType)(e),
                bgColor: (0, o.bgColor)(e),
                showHeader: !((0, i.isProductListPage)(e) || (0, i.isProductDetailsPage)(e) || (0, i.isAccessoryListPage)(e))
            }
        }, function(e) {
            return {
                clearStayLoveRetentionMSISDN: function() {
                    return e((0, s.clearStayLoveRetentionMSISDN)())
                }
            }
        })(u);
    e.default = d
});
//# sourceMappingURL=StayLoveMsisdnHeader.js.map