define(["exports", "react", "react-redux", "./MulticartBillingAccountContractComponent", "../../actions/app"], function(e, a, t, c, l) {
    "use strict";

    function r(a) {
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
    }), e.default = void 0, a = babelHelpers.interopRequireWildcard(a), c = babelHelpers.interopRequireDefault(c);
    var n = function(e) {
            babelHelpers.inherits(l, e);
            var t = r(l);

            function l(e) {
                return babelHelpers.classCallCheck(this, l), t.call(this, e)
            }
            return babelHelpers.createClass(l, [{
                key: "closeForm",
                value: function() {
                    this.props.setBillingAccountContractsVisibility(!1)
                }
            }, {
                key: "render",
                value: function() {
                    return a.default.createElement("div", {
                        className: "opl-tree opl-tree__light-grey"
                    }, a.default.createElement("div", {
                        className: "l-row u-padding-top-l u-padding-l"
                    }, a.default.createElement("div", {
                        className: "l-col l-col-12"
                    }, a.default.createElement("div", {
                        className: "l-row"
                    }, a.default.createElement("div", {
                        className: "l-col l-col-12"
                    }, a.default.createElement("a", {
                        href: "#",
                        className: "u-right",
                        onClick: this.closeForm.bind(this)
                    }, a.default.createElement("span", {
                        title: "close",
                        "aria-hidden": "true",
                        className: "kss-icon-preview g-icon g-icon--only g-icon--xs-s g-icon--close"
                    })))))), a.default.createElement("ul", {
                        className: "opl-tree__list"
                    }, a.default.createElement("li", {
                        className: "opl-tree__li opl-tree__li--last"
                    }, a.default.createElement("div", {
                        className: "l-row u-spacing-top-l"
                    }, a.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-4 l-col-4 "
                    }, a.default.createElement("p", {
                        className: "h3 opl-tree__branch"
                    }, a.default.createElement("span", {
                        className: "opl-tree__square-list"
                    }), "Usługi komórkowe ", "MAGNUM" === this.props.account.type ? "(z aktywnym Orange Love)" : "")), a.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-4 l-col-4 "
                    }, a.default.createElement("h6", null, this.props.account.addressStreetLine), a.default.createElement("h6", null, this.props.account.addressCityLine))), a.default.createElement("ul", {
                        className: "opl-tree__list"
                    }, this.props.accountContracts.map(function(e) {
                        return a.default.createElement(c.default, {
                            key: e.msisdn,
                            msisdn: e.msisdn,
                            dateTo: e.dateTo
                        })
                    })))))
                }
            }]), l
        }(a.Component),
        s = (0, t.connect)(null, {
            setBillingAccountContractsVisibility: l.setBillingAccountContractsVisibility
        })(n);
    e.default = s
});
//# sourceMappingURL=MulticartBillingAccountContractsComponent.js.map