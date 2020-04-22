define(["exports", "react", "prop-types", "eshop/modules/cart/components/entriesList/shared/PriceBoxes", "eshop/modules/core/components/ui/Expander", "./Utils", "./FixProductDetails", "./modalFragments/FixInputFragments", "../../../../../core/enum/Outline"], function(e, r, t, a, s, l, n, o, i) {
    "use strict";

    function p(r) {
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
    }), e.default = void 0, r = babelHelpers.interopRequireWildcard(r), n = babelHelpers.interopRequireDefault(n), i = babelHelpers.interopRequireDefault(i);
    var c = function(e) {
        babelHelpers.inherits(a, e);
        var t = p(a);

        function a(e) {
            return babelHelpers.classCallCheck(this, a), t.call(this, e)
        }
        return babelHelpers.createClass(a, [{
            key: "getSectionHeader",
            value: function(e, t) {
                return r.default.createElement("div", null, r.default.createElement(s.Trigger, {
                    className: "js-expander__trigger__nested u-inline-block large-offset-by-3 medium-offset-by-3 u-padding-all-l u-no-padding-top"
                }, r.default.createElement("span", {
                    className: "js-expander__trigger--show"
                }, "Zwiń szczegóły"), r.default.createElement("span", {
                    className: "js-expander__trigger--hide"
                }, "Szczegóły")), e && r.default.createElement("a", {
                    href: "#",
                    className: "u-inline-block u-padding-right-l",
                    onClick: t
                }, "Usuń"))
            }
        }, {
            key: "render",
            value: function() {
                this.props.vas.thumbnailIcon && this.props.vas.thumbnailIcon, this.props.vas.selected && i.default.SELECTED;
                return r.default.createElement("div", {
                    className: "u-position-relative g-white1-bg is-selected"
                }, this.props.vas.selected && r.default.createElement("div", {
                    className: "opl-selection-layer",
                    "aria-hidden": "true"
                }, r.default.createElement("div", {
                    className: "opl-selection-layer__border"
                }), r.default.createElement("div", {
                    className: "opl-selection-layer__checkmark"
                })), r.default.createElement(l.LRow, {
                    className: "u-no-margin u-padding-all-l u-no-padding-bottom u-small-padding-all u-small-padding-top-l",
                    onClick: this.props.onSelectionChanged
                }, r.default.createElement(o.GraphicCell, {
                    vas: this.props.vas
                }), r.default.createElement(o.NameCell, {
                    vas: this.props.vas
                }), r.default.createElement(o.PriceCell, {
                    vas: this.props.vas,
                    net: this.props.net
                }), r.default.createElement(o.InputCell, {
                    vas: this.props.vas
                })), r.default.createElement(s.Section, {
                    header: this.getSectionHeader(this.props.vas.selected, this.props.onSelectionChanged),
                    contentClassName: "js-expander__container__nested",
                    headerClassName: "u-position-relative u-small-text-right",
                    className: "l-row u-no-margin opl-section-outer--2"
                }, r.default.createElement(n.default, {
                    vas: this.props.vas
                })))
            }
        }]), a
    }(r.Component);
    (e.default = c).propTypes = {
        vas: t.PropTypes.shape({
            title: t.PropTypes.string,
            id: t.PropTypes.string,
            paymentDescriptions: t.PropTypes.shape({
                monthlyPayments: t.PropTypes.array
            })
        }),
        idx: t.PropTypes.oneOfType([t.PropTypes.string, t.PropTypes.number]),
        onSelectionChanged: t.PropTypes.func
    }, c.defaultProps = {
        inputType: "radio"
    }
});
//# sourceMappingURL=FixProductRadioBox.js.map