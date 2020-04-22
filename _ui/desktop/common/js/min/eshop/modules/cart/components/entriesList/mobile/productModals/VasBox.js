define(["exports", "react", "prop-types", "eshop/modules/cart/components/entriesList/shared/PriceBoxes", "eshop/modules/core/components/ui/RWDUtils", "eshop/modules/core/components/ui/Expander", "eshop/utils/OnlineUtils"], function(e, n, t, s, l, r, i) {
    "use strict";

    function o(s) {
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
                var a = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, a)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, n = babelHelpers.interopRequireWildcard(n), i = babelHelpers.interopRequireDefault(i);

    function c(e) {
        var t = e.selected ? "g-brand2-bdrc" : "g-white1-bdrc";
        return n.default.createElement("div", {
            className: "l-row u-spacing-s u-small-padding-top-m u-small-padding-m u-border u-border--l " + t
        }, e.children)
    }

    function p(e) {
        var t = e.big ? " l-col-" + e.big : "",
            a = e.medium ? " l-col-medium-" + e.medium : "",
            s = e.small ? " l-col-small-" + e.small : "",
            l = e.className ? e.className : "";
        return n.default.createElement("div", {
            className: "l-col " + t + a + s + " " + l
        }, e.children)
    }
    p.propTypes = {
        big: t.PropTypes.string,
        medium: t.PropTypes.string,
        small: t.PropTypes.string,
        className: t.PropTypes.string
    };
    var a = function(e) {
        babelHelpers.inherits(a, e);
        var t = o(a);

        function a(e) {
            return babelHelpers.classCallCheck(this, a), t.call(this, e)
        }
        return babelHelpers.createClass(a, [{
            key: "transformPriceInfo",
            value: function(e) {
                return e.map(function(e) {
                    var t = i.default.formatPrice(e.price);
                    return {
                        integer: t.split(",")[0],
                        fraction: t.split(",")[1],
                        currency: e.currency,
                        start: e.monthFrom,
                        end: e.monthTo
                    }
                })
            }
        }, {
            key: "getSectionHeader",
            value: function() {
                return n.default.createElement("div", null, n.default.createElement(r.Trigger, {
                    className: "js-expander__trigger__nested u-inline u-text-nowrap"
                }, n.default.createElement("span", {
                    className: "js-expander__trigger--show"
                }, "Zwiń szczegóły"), n.default.createElement("span", {
                    className: "js-expander__trigger--hide"
                }, "Szczegóły")))
            }
        }, {
            key: "changeSelectionForRadio",
            value: function() {
                this.props.onSelectionChanged(this.props.vas)
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props.vas.thumbnailIcon ? this.props.vas.thumbnailIcon : "air-drop";
                return n.default.createElement(c, {
                    selected: this.props.vas.selected
                }, n.default.createElement(p, {
                    big: "1",
                    medium: "1",
                    small: "2",
                    className: "u-large-padding-top-s u-medium-padding-top-s"
                }, n.default.createElement("div", {
                    className: "u-large-padding-all-m u-large-padding-top-l u-medium-padding-top-l u-medium-padding-all-m u-small-padding-top"
                }, this.props.multiChoice ? n.default.createElement("label", {
                    className: "o-checkbox opl-checkbox"
                }, n.default.createElement("input", {
                    type: "checkbox",
                    className: "switcher-trigger",
                    checked: this.props.vas.selected,
                    onChange: this.props.onSelectionChanged,
                    disabled: this.props.vas.disabled
                }), n.default.createElement("span", {
                    className: "o-ci"
                })) : n.default.createElement(d, this.props))), n.default.createElement(p, {
                    small: "3",
                    medium: "2",
                    big: "2"
                }, n.default.createElement("div", {
                    className: "u-padding-all-m u-text-center u-small-no-padding"
                }, n.default.createElement("span", {
                    className: "g-icon g-icon--only g-icon--" + e
                }))), n.default.createElement(p, {
                    small: "7",
                    medium: "6",
                    big: "6",
                    className: "u-small-no-padding-b"
                }, n.default.createElement(l.ResponsiveVisibility, {
                    desktop: !1,
                    mobile: !0
                }, n.default.createElement("div", {
                    className: "u-padding-all-m u-small-no-padding"
                }, n.default.createElement("p", {
                    className: "u-font-bold"
                }, this.props.vas.title), this.props.vas.slogan && n.default.createElement("p", {
                    dangerouslySetInnerHTML: {
                        __html: this.props.vas.slogan
                    }
                }), n.default.createElement(s.MobilePriceBox, {
                    prices: this.transformPriceInfo(this.props.vas.paymentDescriptions.monthlyPayments)
                })))), n.default.createElement(p, {
                    small: "12",
                    medium: "5",
                    big: "5",
                    className: "u-small-no-padding-t"
                }, n.default.createElement("div", {
                    className: "u-padding-all-m u-small-no-padding"
                }, n.default.createElement("p", {
                    className: "u-font-bold u-small-hide"
                }, this.props.vas.title), this.props.vas.slogan && n.default.createElement("p", {
                    className: "u-small-hide",
                    dangerouslySetInnerHTML: {
                        __html: this.props.vas.slogan
                    }
                }), n.default.createElement(r.Section, {
                    header: this.getSectionHeader(),
                    contentClassName: "js-expander__content__nested u-hide--soft",
                    headerBelow: !0,
                    className: "opl-section-outer"
                }, n.default.createElement("div", {
                    "aria-hidden": "false",
                    className: "u-padding u-padding-top",
                    dangerouslySetInnerHTML: {
                        __html: this.props.vas.detailsDescription || this.props.vas.longDescription
                    }
                })))), n.default.createElement(p, {
                    big: "4",
                    medium: "4",
                    className: "u-small-no-padding-t"
                }, n.default.createElement(l.ResponsiveVisibility, {
                    mobile: !1
                }, n.default.createElement(s.DesktopPriceBox, {
                    prices: this.transformPriceInfo(this.props.vas.paymentDescriptions.monthlyPayments),
                    biggerPadding: !1
                }))))
            }
        }]), a
    }(n.Component);
    (e.default = a).propTypes = {
        vas: t.PropTypes.shape({
            title: t.PropTypes.string,
            id: t.PropTypes.string,
            paymentDescriptions: t.PropTypes.shape({
                monthlyPayments: t.PropTypes.array
            })
        }),
        idx: t.PropTypes.oneOfType([t.PropTypes.string, t.PropTypes.number]),
        onSelectionChanged: t.PropTypes.func
    }, a.defaultProps = {
        multiChoice: !0
    };
    var d = function(e) {
        babelHelpers.inherits(a, e);
        var t = o(a);

        function a(e) {
            return babelHelpers.classCallCheck(this, a), t.call(this, e)
        }
        return babelHelpers.createClass(a, [{
            key: "getPropsForRadio",
            value: function(e, t) {
                return {
                    name: "retentionBonuses",
                    text: e,
                    value: t,
                    labelClassName: "o-radio opl-radio",
                    readOnly: !1,
                    checked: !(t != this.props.vas.selected),
                    onChange: this.changeSelectionForRadio.bind(this)
                }
            }
        }, {
            key: "render",
            value: function() {
                return n.default.createElement("label", {
                    className: "o-radio opl-radio"
                }, n.default.createElement("input", {
                    type: "radio",
                    className: "switcher-trigger",
                    name: "retentionBonuses",
                    checked: !!this.props.vas.selected,
                    onClick: this.props.onSelectionChanged
                }), n.default.createElement("span", {
                    className: "o-ci"
                }))
            }
        }]), a
    }(n.Component);
    n.Component
});
//# sourceMappingURL=VasBox.js.map