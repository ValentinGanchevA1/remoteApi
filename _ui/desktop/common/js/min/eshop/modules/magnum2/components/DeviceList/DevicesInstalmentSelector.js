define(["exports", "react", "prop-types", "redux", "react-redux", "eshop/modules/configurator/actions/offers", "eshop/modules/simfree/selectors", "eshop/modules/configurator/selectors/offers", "eshop/modules/magnum2/components/SelectWithFloatingLable"], function(e, n, t, r, l, s, a, o, i) {
    "use strict";

    function u(r) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(r);
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
                var n = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, n)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, n = babelHelpers.interopRequireWildcard(n), t = babelHelpers.interopRequireDefault(t), i = babelHelpers.interopRequireDefault(i);
    var c = function(e) {
        babelHelpers.inherits(r, e);
        var t = u(r);

        function r(e) {
            var n;
            return babelHelpers.classCallCheck(this, r), n = t.call(this, e), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(n), "prepareInstalments", function() {
                var e = n.state.defaultSelectDictionary.filter(function(e) {
                        return n.props.selectedProposition.deviceInstalmentsCount && -1 < n.props.selectedProposition.deviceInstalmentsCount.indexOf(e.value) || -1 == e.value
                    }),
                    t = e.filter(function(e) {
                        return -1 != e.value
                    });
                return 1 == t.length ? t : e
            }), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(n), "selectDeviceInstalmentsCountChangeHandler", function(e) {
                n.props.selectDeviceInstalmentsCount(e.target.value), n.props.onChange && n.props.onChange(e)
            }), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(n), "isDisable", function() {
                return 1 === n.state.defaultSelectDictionary.filter(function(e) {
                    return n.props.selectedProposition.deviceInstalmentsCount && -1 < n.props.selectedProposition.deviceInstalmentsCount.indexOf(e.value) || -1 === e.value
                }).filter(function(e) {
                    return -1 !== e.value
                }).length
            }), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(n), "isProductCard", function() {
                return "" !== n.props.selectedBaseDeviceCode
            }), n.state = {
                defaultSelectDictionary: [{
                    value: -1,
                    label: "Wszystkie"
                }, {
                    value: 12,
                    label: "12 rat"
                }, {
                    value: 24,
                    label: "24 raty"
                }, {
                    value: 36,
                    label: "36 rat"
                }, {
                    value: 48,
                    label: "48 rat"
                }]
            }, n
        }
        return babelHelpers.createClass(r, [{
            key: "render",
            value: function() {
                return n.default.createElement(i.default, {
                    id: this.props.elementId,
                    options: this.prepareInstalments(),
                    placeholder: this.props.floatingLabel,
                    value: this.props.selectedDeviceInstalmentsCountValue,
                    disabled: this.isDisable(),
                    onChange: this.selectDeviceInstalmentsCountChangeHandler
                })
            }
        }]), r
    }(n.Component);
    babelHelpers.defineProperty(c, "propTypes", {
        floatingLabel: t.default.string,
        selectedProposition: t.default.object,
        onChange: t.default.func,
        width: t.default.number
    });
    c.defaultProps = {
        floatingLabel: "Liczba rat za telefon lub urządzenie",
        elementId: "deviceInstallmentsCountFilterMagnum"
    };
    var p = (0, l.connect)(function(e) {
        return {
            selectedProposition: e.magnum.selectedProposition,
            selectedDeviceInstalmentsCountValue: (0, o.getCurrentDeviceInstalmentsCountValue)(e),
            selectedBaseDeviceCode: (0, a.getSelectedBaseDeviceCode)(e)
        }
    }, function(t) {
        return {
            selectDeviceInstalmentsCount: function(e) {
                return t((0, s.setDeviceInstallmentsInSessionForMagnum)(parseInt(e)))
            }
        }
    })(c);
    e.default = p
});
//# sourceMappingURL=DevicesInstalmentSelector.js.map