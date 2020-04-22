define(["exports", "react", "prop-types", "./Utils", "./FixProductDetails", "./modalFragments/FixInputFragments", "../../../../../core/components/ui/Expander", "../../../../../core/enum/Outline"], function(e, n, t, a, s, l, o, i) {
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
    }), e.default = void 0, n = babelHelpers.interopRequireWildcard(n), s = babelHelpers.interopRequireDefault(s), i = babelHelpers.interopRequireDefault(i);
    var r = function(e) {
        babelHelpers.inherits(r, e);
        var t = p(r);

        function r(e) {
            return babelHelpers.classCallCheck(this, r), t.call(this, e)
        }
        return babelHelpers.createClass(r, [{
            key: "getDetailsSectionHeader",
            value: function() {
                return n.default.createElement(o.Trigger, {
                    className: "js-expander__trigger__nested u-inline-block large-offset-by-3 medium-offset-by-3 u-padding-all-l u-no-padding-top"
                }, n.default.createElement("span", {
                    className: "js-expander__trigger--show"
                }, "Zwiń szczegóły"), n.default.createElement("span", {
                    className: "js-expander__trigger--hide"
                }, "Szczegóły"))
            }
        }, {
            key: "getSectionHeader",
            value: function() {
                return n.default.createElement("div", {
                    className: "opl-box opl-payback-box opl-content-arrow--no-border g-bluef-bg u-padding-m u-padding-top-m"
                }, n.default.createElement("div", {
                    className: "u-no-margin l-row"
                }, this.props.vas.deviceType ? n.default.createElement("p", {
                    className: "h6 u-no-margin g-white1-c"
                }, this.props.descriptions.deviceMigratedBoxTitle) : n.default.createElement("p", {
                    className: "h6 u-no-margin g-white1-c"
                }, this.props.descriptions.serviceMigratedBoxTitle)), n.default.createElement("div", {
                    className: "u-no-margin-bottom l-row"
                }, n.default.createElement("div", {
                    className: "l-col l-col-3 large-offset-by-6 medium-offset-by-6"
                }, n.default.createElement("div", {
                    className: "opl-content-arrow__object opl-content-arrow--no-border g-bluef-b-bg",
                    style: {
                        marginTop: "-10px"
                    }
                }))))
            }
        }, {
            key: "getMigratedProductsQuantity",
            value: function() {
                return (this.props.vas.groupedProducts || []).filter(function(e) {
                    return e.migrated && e.selected
                }).length
            }
        }, {
            key: "isWww",
            value: function() {
                return !!this.props.channels && "WWW" === this.props.channels.sales
            }
        }, {
            key: "render",
            value: function() {
                var e = {
                        outline: i.default.INFO
                    },
                    t = this.getMigratedProductsQuantity();
                return 0 < t ? n.default.createElement("div", {
                    className: "u-border-bottom u-position-relative u-margin-top-m",
                    style: function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var r = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? c(Object(r), !0).forEach(function(e) {
                                babelHelpers.defineProperty(t, e, r[e])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                            })
                        }
                        return t
                    }({}, e, {
                        marginTop: "2px"
                    })
                }, this.getSectionHeader(), n.default.createElement(a.LRow, {
                    className: "u-no-margin u-padding-all-l u-no-padding-bottom u-small-padding-all u-small-padding-top-l",
                    onClick: this.props.onSelectionChanged
                }, n.default.createElement(l.GraphicCell, {
                    vas: this.props.vas
                }), n.default.createElement(l.NameCell, {
                    vas: this.props.vas
                }), n.default.createElement(l.PriceCell, {
                    small: "12",
                    medium: "5",
                    big: "5",
                    vas: this.props.vas,
                    net: this.props.net,
                    quantity: t
                })), n.default.createElement(o.Section, {
                    header: this.getDetailsSectionHeader(),
                    contentClassName: "js-expander__container__nested",
                    headerClassName: "u-position-relative u-small-text-right",
                    className: "l-row u-no-margin opl-section-outer--2",
                    expanded: this.isWww(),
                    styleObject: this.isWww() ? {
                        display: "block"
                    } : null
                }, n.default.createElement(s.default, {
                    vas: this.props.vas
                }))) : null
            }
        }]), r
    }(n.Component);
    (e.default = r).propTypes = {
        vas: t.PropTypes.shape({
            title: t.PropTypes.string,
            id: t.PropTypes.string,
            paymentDescriptions: t.PropTypes.shape({
                monthlyPayments: t.PropTypes.array
            })
        }),
        idx: t.PropTypes.oneOfType([t.PropTypes.string, t.PropTypes.number]),
        onSelectionChanged: t.PropTypes.func,
        includedInThePackageTitle: t.PropTypes.string
    }
});
//# sourceMappingURL=FixProductImmutableMigratedBox.js.map