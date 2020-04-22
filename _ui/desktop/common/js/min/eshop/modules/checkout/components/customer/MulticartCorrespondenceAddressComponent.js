define(["exports", "react", "prop-types", "eshop/components/OraCommonComponents", "eshop/modules/core/components/ui/Expander", "react-redux", "../../selectors", "../../actions/app", "../../actions/data", "../MulticartCommonAddressFormComponent"], function(e, t, r, s, n, a, l, o, d, i) {
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
                var r = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, r)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = e.MulticartCorrespondenceAddressView = void 0, t = babelHelpers.interopRequireWildcard(t), r = babelHelpers.interopRequireDefault(r), i = babelHelpers.interopRequireDefault(i);
    var p = function(e) {
        babelHelpers.inherits(a, e);
        var r = c(a);

        function a(e) {
            var t;
            return babelHelpers.classCallCheck(this, a), (t = r.call(this, e)).pickAddress = t.pickAddress.bind(babelHelpers.assertThisInitialized(t)), t.handleChange = t.handleChange.bind(babelHelpers.assertThisInitialized(t)), t.afterInit = !0, t
        }
        return babelHelpers.createClass(a, [{
            key: "componentDidMount",
            value: function() {
                this.props.requestCartCustomerData()
            }
        }, {
            key: "pickAddress",
            value: function(e) {
                var t = e.name;
                this.afterInit = !1, this.props.changeAddressMapping("correspondence", t)
            }
        }, {
            key: "renderAddressPicker",
            value: function() {
                return t.default.createElement("fieldset", {
                    className: "opl-inputgroup--vertical"
                }, t.default.createElement("div", {
                    className: "l-row"
                }, t.default.createElement("label", {
                    className: "o-radio opl-radio u-padding-right-l"
                }, t.default.createElement(s.OraInput, {
                    type: "radio",
                    id: "switch_right4",
                    name: "main",
                    value: "close",
                    checked: "main" === this.props.addressMapping,
                    onChange: this.pickAddress
                }), t.default.createElement("span", {
                    className: "o-ci"
                }), t.default.createElement("span", {
                    className: "o-ci-label"
                }, this.props.descriptions.sameAddressRadio)), t.default.createElement("label", {
                    className: "o-radio opl-radio"
                }, t.default.createElement(s.OraInput, {
                    type: "radio",
                    id: "switch_left3",
                    name: "correspondence",
                    value: "open",
                    checked: "correspondence" === this.props.addressMapping,
                    onChange: this.pickAddress
                }), t.default.createElement("span", {
                    className: "o-ci"
                }), t.default.createElement("span", {
                    className: "o-ci-label"
                }, this.props.descriptions.newAddressRadio))))
            }
        }, {
            key: "handleChange",
            value: function(e) {
                var t = e.id,
                    r = e.name,
                    a = e.value,
                    s = e.cbsId;
                this.props.changeCorrespondenceAddressFormField({
                    id: t,
                    name: r,
                    value: a,
                    cbsId: s
                }, !1)
            }
        }, {
            key: "render",
            value: function() {
                var e = this.afterInit && "correspondence" === this.props.addressMapping ? {
                    display: "block"
                } : null;
                return t.default.createElement("div", {
                    className: "opl-form"
                }, t.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12 u-no-padding-l u-spacing-top-l"
                }, t.default.createElement("h3", null, this.props.descriptions.title)), t.default.createElement(n.Expander, {
                    className: "l-col l-col-12 u-padding-l",
                    switchTrigger: !0,
                    switchTriggerVal: ["open", "close"],
                    scrollToSelected: !1
                }, t.default.createElement(n.Section, {
                    header: this.renderAddressPicker(),
                    triggerHeader: !0,
                    styleObject: e,
                    expanded: !!e
                }, t.default.createElement("div", {
                    className: "l-row"
                }, t.default.createElement(i.default, babelHelpers.extends({}, this.props, {
                    onChange: this.handleChange,
                    onBlur: this.props.changeCorrespondenceAddressFormField,
                    id: "correspondence"
                }))))))
            }
        }]), a
    }(t.Component);
    (e.MulticartCorrespondenceAddressView = p).propTypes = {
        postalCode: r.default.string,
        town: r.default.string,
        streetName: r.default.string,
        streetNumber: r.default.string,
        appartmentNo: r.default.string,
        requestCartCustomerData: r.default.func,
        streetSuggestions: r.default.array,
        addressMapping: r.default.string,
        readOnly: r.default.bool,
        changeCorrespondenceAddressFormField: r.default.func
    };
    var u = (0, a.connect)(l.getCustomerCorrespondenceAddressForm, {
        changeCorrespondenceAddressFormField: o.changeCorrespondenceAddressFormField,
        requestCartCustomerData: d.requestCartCustomerData,
        changeAddressMapping: o.changeAddressMapping
    })(p);
    e.default = u
});
//# sourceMappingURL=MulticartCorrespondenceAddressComponent.js.map