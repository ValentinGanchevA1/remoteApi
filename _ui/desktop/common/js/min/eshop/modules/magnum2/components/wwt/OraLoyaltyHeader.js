define(["exports", "react", "prop-types", "../../../checkout/components/consents/AssistModeEnum"], function(e, r, t, a) {
    "use strict";

    function s(r) {
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
                var a = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, a)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, r = babelHelpers.interopRequireWildcard(r), t = babelHelpers.interopRequireDefault(t), a = babelHelpers.interopRequireDefault(a);
    var n = function(e) {
        babelHelpers.inherits(l, e);
        var n = s(l);

        function l() {
            var t;
            babelHelpers.classCallCheck(this, l);
            for (var e = arguments.length, a = new Array(e), r = 0; r < e; r++) a[r] = arguments[r];
            return t = n.call.apply(n, [this].concat(a)), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(t), "onClickChange", function(e) {
                e.preventDefault(), t.props.onClickChange()
            }), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(t), "onClickCreateLead", function(e) {
                e.preventDefault(), t.props.onClickCreateLead()
            }), t
        }
        return babelHelpers.createClass(l, [{
            key: "render",
            value: function() {
                var e = this.props.street ? "ul. ".concat(this.props.street) : "",
                    t = this.props.apartmentNumber ? "/".concat(this.props.apartmentNumber) : "",
                    a = "".concat(this.props.place, ", ").concat(e, " ").concat(this.props.streetNumber).concat(t);
                return r.default.createElement("div", {
                    className: "u-padding-top-xl u-padding-xl"
                }, r.default.createElement("div", {
                    className: "u-display_table"
                }, r.default.createElement("div", {
                    className: "u-inline-block u-vertical-middle u-spacing-right"
                }, r.default.createElement("span", {
                    "aria-hidden": "true",
                    className: "g-icon g-icon--only g-icon--valid g-icon--xs-s g-greenf-c"
                })), this.props.ftthAvailabilityDate ? this.renderChangeAddressOrCreateLead(a) : this.renderChangeAddress(a)))
            }
        }, {
            key: "renderChangeAddressOrCreateLead",
            value: function(e) {
                var t = this;
                return r.default.createElement("div", {
                    className: "u-inline-block u-vertical-middle"
                }, r.default.createElement("p", null, r.default.createElement("span", null, this.props.descriptions.createLeadText1, " "), r.default.createElement("span", null, e, " "), r.default.createElement("span", null, this.props.descriptions.createLeadText2, " "), r.default.createElement("span", null, this.props.ftthAvailabilityDate, ". "), r.default.createElement("span", {
                    className: "u-font-bold u-xsmall-block"
                }, r.default.createElement("a", {
                    href: "#",
                    onClick: function(e) {
                        return t.onClickChange(e)
                    }
                }, this.props.descriptions.createLeadChangeAddressButton)), r.default.createElement("span", null, " ", this.props.descriptions.createLeadButtonSeparator, " "), this.props.assistModeState === a.default.ACTIVE ? this.renderTurnOffAssistModeText() : this.renderCreateLeadButton()))
            }
        }, {
            key: "renderTurnOffAssistModeText",
            value: function() {
                return r.default.createElement("span", null, this.props.descriptions.turnOffAssistModeText)
            }
        }, {
            key: "renderCreateLeadButton",
            value: function() {
                var t = this;
                return r.default.createElement("span", {
                    className: "u-font-bold u-xsmall-block"
                }, r.default.createElement("a", {
                    href: "#",
                    onClick: function(e) {
                        return t.onClickCreateLead(e)
                    }
                }, this.props.descriptions.createLeadButton))
            }
        }, {
            key: "renderChangeAddress",
            value: function(e) {
                var t = this;
                return r.default.createElement("div", {
                    className: "u-inline-block u-vertical-middle"
                }, r.default.createElement("p", null, r.default.createElement("span", null, this.props.descriptions.changeAddressTitle, " "), r.default.createElement("span", {
                    className: "u-font-bold u-xsmall-block"
                }, r.default.createElement("span", null, e, " "), r.default.createElement("a", {
                    href: "#",
                    onClick: function(e) {
                        return t.onClickChange(e)
                    }
                }, this.props.descriptions.changeAddressButtonLabel))))
            }
        }]), l
    }(r.Component);
    babelHelpers.defineProperty(n, "propTypes", {
        descriptions: t.default.shape({
            changeAddressTitle: t.default.string,
            changeAddressButtonLabel: t.default.string,
            createLeadText1: t.default.string,
            createLeadText2: t.default.string,
            createLeadButtonSeparator: t.default.string,
            createLeadChangeAddressButton: t.default.string,
            createLeadButton: t.default.string
        }),
        place: t.default.string,
        street: t.default.string,
        apartmentNumber: t.default.string,
        streetNumber: t.default.string,
        ftthAvailabilityDate: t.default.string,
        assistModeState: t.default.string,
        onClickChange: t.default.func,
        onClickCreateLead: t.default.func
    }), babelHelpers.defineProperty(n, "defaultProps", {});
    var l = n;
    e.default = l
});
//# sourceMappingURL=OraLoyaltyHeader.js.map