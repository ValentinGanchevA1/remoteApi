define(["exports", "react", "prop-types", "react-redux", "../../selectors", "../../actions/app", "../../actions/data", "./MulticartMnpSectionComponent", "eshop/modules/core/components/ui/Expander", "../MulticartValidationComponent"], function(e, n, t, r, a, o, i, s, l, u) {
    "use strict";

    function c(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function p(n) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(n);
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
                var r = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, r)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, n = babelHelpers.interopRequireWildcard(n), t = babelHelpers.interopRequireDefault(t), s = babelHelpers.interopRequireDefault(s), u = babelHelpers.interopRequireDefault(u);
    var f = function(e) {
        babelHelpers.inherits(r, e);
        var t = p(r);

        function r(e) {
            return babelHelpers.classCallCheck(this, r), t.call(this, e)
        }
        return babelHelpers.createClass(r, [{
            key: "componentDidMount",
            value: function() {
                this.props.requestCartMnpData({
                    migrationMode: this.getDefaultMigrationMode(),
                    contactMethod: this.props.getMnpContactMethods(this.props.mnpFormData.contactMethods)[0].value,
                    isHeadquartersAddressSame: !0,
                    identifier: "NIP",
                    agreementType: "1"
                })
            }
        }, {
            key: "getDefaultMigrationMode",
            value: function() {
                var e = this.props.mnpFormData.migrationModes.sort(function(e, t) {
                    return e.priority - t.priority
                });
                return e.filter(function(e) {
                    return "EOP" == e.value
                }) ? e.filter(function(e) {
                    return "EOP" == e.value
                })[0].value : e[0].value
            }
        }, {
            key: "render",
            value: function() {
                var r = this;
                return n.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12 u-no-padding-l u-spacing-l u-padding-top"
                }, n.default.createElement("h2", null, this.props.descriptions.title || this.props.title), n.default.createElement(u.default, {
                    messageType: "mnpData"
                }), this.props.mnpData instanceof Array && this.props.mnpData.map(function(e, t) {
                    return n.default.createElement("div", {
                        key: t + "_view"
                    }, n.default.createElement(s.default, babelHelpers.extends({}, r.props, {
                        entry: e,
                        entryIndex: t,
                        key: t + "_section"
                    })))
                }))
            }
        }]), r
    }(n.Component);
    f.defaultProps = {
        title: "Dane do przeniesienia numeru"
    };
    var d = {
            saveDefaultCartData: i.saveDefaultCartData,
            changeCustomerMnpDataFormField: o.changeCustomerMnpDataFormField,
            changeBusinessMnpAddressFormField: o.changeBusinessMnpAddressFormField,
            requestCartMnpData: i.requestCartMnpData
        },
        b = (0, r.connect)(function(t) {
            return function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? c(Object(r), !0).forEach(function(e) {
                        babelHelpers.defineProperty(t, e, r[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }({}, (0, a.getCheckoutMnpProps)(t), {
                getMnpContactMethods: function(e) {
                    return (0, a.getMnpContactMethods)(e)(t)
                }
            })
        }, d)(f);
    e.default = b
});
//# sourceMappingURL=MulticartMnpFormComponent.js.map