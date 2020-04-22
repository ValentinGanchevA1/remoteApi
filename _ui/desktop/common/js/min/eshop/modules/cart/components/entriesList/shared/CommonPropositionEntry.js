define(["exports", "react", "react-redux", "prop-types", "lodash", "../../../../../flux/utils/OraModalService", "../../../actions/cart", "../../../../fix/actions/data", "../../Utils", "../fix/productDetails/FixDetailsModal", "../../../../../utils/OnlineUtils", "../fix/PriceRow", "../fix/PriceBox", "../fix/ProductRow", "../fix/FullProductRow"], function(e, l, t, r, a, n, o, i, s, c, u, d, p, f, m) {
    "use strict";

    function h(a) {
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
    }), e.default = void 0, l = babelHelpers.interopRequireWildcard(l), r = babelHelpers.interopRequireDefault(r), a = babelHelpers.interopRequireDefault(a), n = babelHelpers.interopRequireDefault(n), c = babelHelpers.interopRequireDefault(c), u = babelHelpers.interopRequireDefault(u), d = babelHelpers.interopRequireDefault(d), p = babelHelpers.interopRequireDefault(p), f = babelHelpers.interopRequireDefault(f), m = babelHelpers.interopRequireDefault(m);
    var b = function(e) {
            babelHelpers.inherits(a, e);
            var r = h(a);

            function a(e) {
                var t;
                return babelHelpers.classCallCheck(this, a), t = r.call(this, e), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(t), "getChangeDescriptionForProduct", function(e, t) {
                    return e.deviceType ? t.changeDeviceLabel : t.detailsLabel
                }), t.props.redirectOnCustomerSearch(), t.name = t.props.bundleNo + "_" + t.props.entryNo, t.actionPrefix = "productDetails-main", t
            }
            return babelHelpers.createClass(a, [{
                key: "componentDidMount",
                value: function() {
                    OPL.UI.loadModules(document.getElementById("common-proposition-entry-".concat(this.name)), g())
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    var r = this;
                    OPL.UI.fire(OPL.UI.EVENTS.modules.layoutFixer.recalculate, "common-proposition-entry-".concat(this.name)), this.props.subEntries && this.props.subEntries.forEach(function(t) {
                        t && n.default.add(function(e) {
                            return l.default.createElement(c.default, {
                                id: "".concat(r.actionPrefix, "-").concat(t.code),
                                header: "Szczegóły urządzenia",
                                details: t.details,
                                icon: t.thumbnailIcon,
                                productName: t.name,
                                net: r.props.showNetPrices
                            })
                        })
                    })
                }
            }, {
                key: "changeProduct",
                value: function(e) {
                    this.props.clearCartAndRedirect(e, u.default.getLastViewedOfferPage())
                }
            }, {
                key: "renderRejectionReasons",
                value: function() {
                    return this.props.rejectionReason && 0 < this.props.rejectionReason.length ? l.default.createElement("div", {
                        className: "l-row u-padding-l u-padding-top-l u-padding-left-s u-border-top"
                    }, l.default.createElement("div", {
                        className: "opl-msg opl-msg--box opl-msg--error"
                    }, l.default.createElement("div", {
                        className: "o-icon-list"
                    }, l.default.createElement("div", {
                        className: "o-icon-list__item"
                    }, l.default.createElement("div", {
                        className: "o-icon-list__icon u-vertical-middle"
                    }, l.default.createElement("div", {
                        "aria-hidden": "true",
                        className: "g-icon g-icon--error g-icon--before g-icon--s"
                    })), l.default.createElement("div", {
                        className: "o-icon-list__text u-vertical-middle"
                    }, l.default.createElement("p", null, this.props.rejectionReason.map(function(e, t) {
                        return l.default.createElement("b", null, e, l.default.createElement("br", null))
                    }), l.default.createElement("b", null, "Usuń produkt z koszyka."))))))) : null
                }
            }, {
                key: "render",
                value: function() {
                    var r = this,
                        a = this.props.mainEntries.length;
                    return l.default.createElement("div", {
                        id: "common-proposition-entry-".concat(this.name),
                        className: "g-white1-bg u-box-shadow u-spacing"
                    }, l.default.createElement("div", {
                        className: "u-position-relative"
                    }, l.default.createElement("div", {
                        className: "u-padding-left-l-xl u-padding-right-l-xl"
                    }, l.default.createElement("div", {
                        className: "l-row"
                    }, l.default.createElement("div", {
                        className: "u-medium-hide u-large-hide u-padding-left-s u-padding-right-s u-padding-top-l u-padding-m"
                    }, l.default.createElement("a", {
                        href: "#",
                        onClick: function() {
                            return r.props.onRemove()
                        },
                        className: "opl-checkout__item__remove"
                    }), l.default.createElement(p.default, {
                        price: this.props.offerPrice,
                        net: this.props.showNetPrices
                    })), l.default.createElement("div", {
                        className: "l-col l-col-8 l-col-small-12"
                    }, l.default.createElement("div", {
                        className: "u-animate-height js-layout-fixer-group-1"
                    }, l.default.createElement("div", {
                        className: "js-height-sensitive-element"
                    }, this.props.mainEntries.map(function(e, t) {
                        return l.default.createElement(f.default, {
                            key: "main-entry-".concat(t),
                            product: e,
                            borderBottom: a !== t + 1,
                            installationAddress: r.props.descriptions.installationAddress,
                            potsNumber: r.props.descriptions.potsNumber
                        })
                    })))), l.default.createElement("div", {
                        className: "l-col l-col-4 u-small-hide"
                    }, l.default.createElement(d.default, {
                        id: "price-row-".concat(this.name),
                        price: this.props.offerPrice,
                        net: this.props.showNetPrices
                    }))), this.renderRejectionReasons(), this.props.subEntries.map(function(e, t) {
                        return l.default.createElement(m.default, {
                            key: "sub-entry-".concat(t),
                            product: e,
                            detailsLabel: r.props.descriptions.detailsLabel,
                            forFreeLabel: r.props.descriptions.forFreeLabel,
                            onChange: function() {
                                return r.props.onChange({
                                    selectedSection: e.section
                                })
                            },
                            onDetails: function() {
                                return n.default.open("".concat(r.actionPrefix, "-").concat(e.code))
                            },
                            changeLabel: r.getChangeDescriptionForProduct(e, r.props.descriptions),
                            net: r.props.showNetPrices,
                            onRemove: function() {
                                return r.props.onVasRemove(e.code)
                            },
                            serviceFreeLabel: r.props.descriptions.serviceFreeLabel
                        })
                    }), l.default.createElement("div", {
                        className: "l-row u-padding-l u-padding-top-l u-padding-left-s u-border-top"
                    }, l.default.createElement("span", {
                        className: "u-font-bold"
                    }, (0, s.loyaltyDuration)(this.props.loyaltyLength))), this.props.showButtons ? l.default.createElement("div", {
                        className: "l-row u-border-top"
                    }, l.default.createElement("div", {
                        className: "l-col l-col--auto l-col-small-6 u-spacing-right-l u-padding-l u-padding-top-l u-padding-left-s u-small-border-right u-small-no-spacing-r u-small-text-center"
                    }, l.default.createElement("a", {
                        href: "#",
                        className: "u-spacing-right-l u-small-no-spacing",
                        onClick: function() {
                            return r.changeProduct(r.props.bundleNo)
                        }
                    }, this.props.descriptions.changeLabel)), l.default.createElement("div", {
                        className: "l-col l-col--auto l-col-small-6 u-spacing-right-l u-padding-l u-padding-top-l u-padding-left-s u-small-no-spacing-r u-small-text-center"
                    }, this.props.overrideDefaultDetailsPartBy ? this.props.overrideDefaultDetailsPartBy : l.default.createElement("a", {
                        href: "#",
                        className: "u-spacing-right-l u-small-no-spacing",
                        onClick: function() {
                            return r.props.onDetails()
                        }
                    }, this.props.descriptions.detailsLabel)), l.default.createElement("div", {
                        className: "l-col l-col--auto u-small-hide u-spacing-right-l u-padding-l u-padding-top-l u-padding-left-s"
                    }, l.default.createElement("a", {
                        href: "#",
                        onClick: function() {
                            return r.props.onRemove()
                        }
                    }, this.props.descriptions.deleteLabel))) : null)))
                }
            }]), a
        }(l.Component),
        g = function() {
            return [{
                path: "core/modules/layout-fixer",
                conditions: "element:{was seen}",
                options: {
                    selectors: [".js-layout-fixer-group-1"]
                }
            }]
        };
    b.propTypes = {
        mainEntries: r.default.array,
        subEntries: r.default.array,
        offerPrice: r.default.object,
        loyaltyLength: r.default.number,
        bundleNo: r.default.number,
        entryNo: r.default.number,
        onRemove: r.default.func,
        onDetails: r.default.func,
        onChange: r.default.func,
        descriptions: r.default.object,
        overrideDetailsPartBy: r.default.object,
        showButtons: r.default.bool
    }, b.defaultProps = {
        showButtons: !0,
        subEntries: []
    };
    var v = (0, t.connect)(function() {
        return {}
    }, function(r) {
        return {
            redirectOnCustomerSearch: function() {
                return r((0, i.redirectOnCustomerSearch)())
            },
            clearCartAndRedirect: function(e, t) {
                return r((0, o.clearCartAndRedirect)(e, t))
            }
        }
    })(b);
    e.default = v
});
//# sourceMappingURL=CommonPropositionEntry.js.map