define(["exports", "react", "prop-types", "eshop/components/OraCommonComponents", "react-redux", "../../selectors", "../../actions/app", "../../actions/data", "../MulticartCommonAddressFormComponent"], function(e, s, t, r, n, a, l, i, o) {
    "use strict";

    function u(s) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(s);
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
    }), e.default = e.MulticartBillingAddressView = void 0, s = babelHelpers.interopRequireWildcard(s), t = babelHelpers.interopRequireDefault(t), o = babelHelpers.interopRequireDefault(o);
    var c = function(e) {
        babelHelpers.inherits(r, e);
        var t = u(r);

        function r() {
            return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
        }
        return babelHelpers.createClass(r, [{
            key: "componentDidMount",
            value: function() {
                this.props.requestCartCustomerData()
            }
        }, {
            key: "getTitle",
            value: function() {
                return this.props.isBusinessClient ? this.props.descriptions.businessTitle || this.props.defaultBusinessTitle || "" : this.props.foreigner ? this.props.descriptions.titleForeigner : this.props.descriptions.title || ""
            }
        }, {
            key: "handleChange",
            value: function(e) {
                var t = e.id,
                    r = e.name,
                    s = e.value,
                    n = e.cbsId;
                this.props.changeCustomerMainAddressFormField({
                    id: t,
                    name: r,
                    value: s,
                    cbsId: n
                }, !1)
            }
        }, {
            key: "render",
            value: function() {
                return this.props.show ? s.default.createElement("div", {
                    className: "opl-form u-spacing-l u-clearfix"
                }, s.default.createElement("div", {
                    className: "u-spacing-top-l ".concat(this.props.isForeignerCheckboxAvailable ? "u-large-spacing-xl u-medium-spacing-s u-small-spacing-s" : "", " l-col l-col-small-12 l-col-medium-12 l-col-12 u-no-padding")
                }, s.default.createElement("p", {
                    className: "h3",
                    dangerouslySetInnerHTML: {
                        __html: this.getTitle()
                    }
                })), s.default.createElement(o.default, babelHelpers.extends({}, this.props, {
                    onChange: this.handleChange.bind(this),
                    onBlur: this.props.changeCustomerMainAddressFormField,
                    id: "main"
                }))) : s.default.createElement("div", null)
            }
        }]), r
    }(s.Component);
    (e.MulticartBillingAddressView = c).propTypes = {
        postalCode: t.default.string,
        town: t.default.string,
        streetName: t.default.string,
        streetNumber: t.default.string,
        appartmentNo: t.default.string,
        citySuggestions: t.default.array,
        streetSuggestions: t.default.array,
        foreigner: t.default.bool,
        readOnly: t.default.bool,
        requestCartCustomerData: t.default.func,
        changeCorrespondenceAddressFormField: t.default.func
    }, c.defaultProps = {
        defaultBusinessTitle: "Adres siedziby firmy"
    };
    var d = (0, n.connect)(a.getCustomerMainAddressForm, {
        changeCustomerMainAddressFormField: l.changeCustomerMainAddressFormField,
        requestCartCustomerData: i.requestCartCustomerData
    })(c);
    e.default = d
});
//# sourceMappingURL=MulticartBillingAddressComponent.js.map