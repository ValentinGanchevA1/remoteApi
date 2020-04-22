define(["exports", "react", "prop-types", "./Utils", "./FixProductDetails", "./modalFragments/FixInputFragments", "../../../../../core/components/ui/Expander", "eshop/modules/fix/components/fragments/FixTvFilteredExpander"], function(e, s, t, l, r, n, i, o) {
    "use strict";

    function p(s) {
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
    }), e.default = void 0, s = babelHelpers.interopRequireWildcard(s), r = babelHelpers.interopRequireDefault(r), o = babelHelpers.interopRequireDefault(o);
    var a = function(e) {
        babelHelpers.inherits(a, e);
        var t = p(a);

        function a(e) {
            return babelHelpers.classCallCheck(this, a), t.call(this, e)
        }
        return babelHelpers.createClass(a, [{
            key: "getSectionHeader",
            value: function() {
                return s.default.createElement(i.Trigger, {
                    className: "js-expander__trigger__nested u-inline-block large-offset-by-3 medium-offset-by-3 u-padding-all-l u-no-padding-top"
                }, s.default.createElement("span", {
                    className: "js-expander__trigger--show"
                }, "Zwiń szczegóły"), s.default.createElement("span", {
                    className: "js-expander__trigger--hide"
                }, "Szczegóły"))
            }
        }, {
            key: "getIncludedInThePackageTitle",
            value: function() {
                return this.props.includedInThePackageTitle && "" !== this.props.includedInThePackageTitle ? this.props.includedInThePackageTitle : "W cenie pakietu"
            }
        }, {
            key: "isWww",
            value: function() {
                return !!this.props.channels && "WWW" === this.props.channels.sales
            }
        }, {
            key: "render",
            value: function() {
                var e = this.getIncludedInThePackageTitle();
                return s.default.createElement("div", null, s.default.createElement("div", {
                    className: "u-position-relative g-white1-bg is-selected"
                }, this.props.vas.selected && s.default.createElement("div", {
                    className: "opl-selection-layer",
                    "aria-hidden": "true"
                }, s.default.createElement("div", {
                    className: "opl-selection-layer__border"
                }), s.default.createElement("div", {
                    className: "opl-selection-layer__checkmark"
                })), s.default.createElement(l.LRow, {
                    className: "u-no-margin u-padding-all-l u-no-padding-bottom u-small-padding-all u-small-padding-top-l",
                    onClick: this.props.onSelectionChanged
                }, s.default.createElement(n.GraphicCell, {
                    vas: this.props.vas
                }), s.default.createElement(n.NameCell, {
                    vas: this.props.vas
                }), this.props.showPrice ? s.default.createElement(n.PriceCell, {
                    small: "12",
                    medium: "5",
                    big: "5",
                    vas: this.props.vas,
                    net: this.props.net
                }) : s.default.createElement(l.LCol, {
                    small: "12",
                    medium: "5",
                    big: "5",
                    className: "u-large-text-left u-medium-text-left u-small-padding-l"
                }, s.default.createElement("p", {
                    className: "g-brand2-c h4",
                    dangerouslySetInnerHTML: {
                        __html: e
                    }
                }))), s.default.createElement(i.Section, {
                    header: this.getSectionHeader(),
                    contentClassName: "js-expander__container__nested",
                    headerClassName: "u-position-relative u-small-text-right",
                    className: "l-row u-no-margin opl-section-outer--2",
                    expanded: this.isWww(),
                    styleObject: this.isWww() ? {
                        display: "block"
                    } : null
                }, s.default.createElement(r.default, {
                    vas: this.props.vas
                }))), !(!this.props.vas || "TVBASIC" !== this.props.vas.addonType || 0 !== this.props.idx) && s.default.createElement(o.default, {
                    tvPackages: this.props.tvPackages
                }))
            }
        }]), a
    }(s.Component);
    (e.default = a).propTypes = {
        vas: t.PropTypes.shape({
            title: t.PropTypes.string,
            id: t.PropTypes.string,
            paymentDescriptions: t.PropTypes.shape({
                monthlyPayments: t.PropTypes.array
            })
        }),
        idx: t.PropTypes.oneOfType([t.PropTypes.string, t.PropTypes.number]),
        onSelectionChanged: t.PropTypes.func,
        showPrice: t.PropTypes.bool,
        selected: t.PropTypes.bool,
        includedInThePackageTitle: t.PropTypes.string
    }
});
//# sourceMappingURL=FixProductImmutableBox.js.map