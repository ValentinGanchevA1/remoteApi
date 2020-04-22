define(["exports", "react", "prop-types", "lodash", "../FixProductCheckBox", "../FixProductMigratedFirstCheckBox", "../FixProductRadioBox", "../FixProductImmutableBox", "../FixProductImmutableMigratedBox", "../FixProductMigratedBox", "eshop/modules/core/components/ui/Expander", "../FixProductQuantityBox", "eshop/modules/core/utils/optional"], function(e, m, t, h, r, n, l, i, a, o, c, d, g) {
    "use strict";

    function u(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(t);
            e && (a = a.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), n.push.apply(n, a)
        }
        return n
    }

    function b(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? u(Object(n), !0).forEach(function(e) {
                babelHelpers.defineProperty(t, e, n[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            })
        }
        return t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.SaveVasesButton = e.ProductGroup = e.TitledProductGroup = e.TitledFoldableProductGroup = e.TitledFoldableTvVasesProductGroup = void 0, m = babelHelpers.interopRequireDefault(m), h = babelHelpers.interopRequireDefault(h), r = babelHelpers.interopRequireDefault(r), n = babelHelpers.interopRequireDefault(n), l = babelHelpers.interopRequireDefault(l), i = babelHelpers.interopRequireDefault(i), a = babelHelpers.interopRequireDefault(a), o = babelHelpers.interopRequireDefault(o), d = babelHelpers.interopRequireDefault(d);

    function s(e) {
        return m.default.createElement("div", {
            className: "l-row"
        }, m.default.createElement("div", {
            className: "l-col l-col-12"
        }, m.default.createElement("h4", {
            className: "opl-section__heading u-no-margin"
        }, e.label), m.default.createElement(c.Trigger, null, m.default.createElement("span", {
            className: "opl-section__text-show"
        }, 'rozwiń sekcję "' + e.label + '"'), m.default.createElement("span", {
            className: "opl-section__text-hide"
        }, 'zwiń sekcję "' + e.label + '"'))))
    }
    e.TitledFoldableTvVasesProductGroup = function(r) {
        var e = r.section,
            l = r.products,
            i = r.onClick,
            o = r.onClickWrapped,
            d = r.net,
            u = e.inputType,
            t = e.sectionTitle;
        return l && 0 < l.length && e.innerLists && 0 < e.innerLists.length ? m.default.createElement(c.Section, {
            header: m.default.createElement(s, {
                label: t
            }),
            variant: "section",
            headerClassName: "opl-section__header--vases-tv",
            expanded: r.isExpanded,
            key: t + r.isExpanded
        }, m.default.createElement(c.Expander, {
            id: "exp-".concat(r.uid),
            scrollToSelected: !1,
            variant: "",
            className: "opl-expander-inner u-no-padding",
            sectionClassName: "opl-section-outer--2"
        }, e.innerLists.map(function(t, e) {
            var n = l.filter(function(e) {
                    return e.productType === t.productFilter
                }),
                a = t.inputType || u;
            if (0 < n.length) return [m.default.createElement("h4", {
                key: e + "h4",
                className: "u-no-margin u-padding-l u-padding-top-l u-border-bottom u-small-no-border u-small-no-padding-top"
            }, t.sectionTitle), m.default.createElement(f, {
                key: e + "innerProduct",
                products: n,
                onClick: i,
                inputType: a,
                onClickWrapped: o,
                net: d,
                configurables: r.configurables,
                descriptions: r.descriptions
            })]
        }))) : null
    };
    e.TitledFoldableProductGroup = function(r) {
        var e = r.section,
            l = r.products,
            i = r.onClick,
            o = r.onClickWrapped,
            d = r.net,
            u = e.inputType,
            t = e.sectionTitle;
        return l && 0 < l.length && e.innerLists && 0 < e.innerLists.length ? m.default.createElement(c.Section, {
            header: m.default.createElement(s, {
                label: t
            }),
            variant: "section",
            headerClassName: "opl-section__header--vases-tv",
            expanded: r.isExpanded,
            key: t + r.isExpanded
        }, m.default.createElement(c.Expander, {
            id: "exp-".concat(r.uid),
            scrollToSelected: !1,
            variant: "",
            className: "opl-expander-inner u-no-padding",
            sectionClassName: "opl-section-outer--2"
        }, e.innerLists.map(function(t, e) {
            var n = l.filter(function(e) {
                    return e.productType === t.productFilter
                }),
                a = t.inputType || u;
            if (0 < n.length) return [m.default.createElement("h4", {
                key: e + "h4",
                className: "u-no-margin u-padding-l u-padding-top-l u-border-bottom u-small-no-border u-small-no-padding-top"
            }, t.sectionTitle), m.default.createElement(E, {
                key: e + "innerProduct",
                products: n,
                onClick: i,
                inputType: a,
                onClickWrapped: o,
                net: d,
                configurables: r.configurables
            })]
        }))) : null
    };
    e.TitledProductGroup = function(e) {
        return m.default.createElement(c.Expander, {
            scrollToSelected: !1,
            variant: "",
            className: "opl-expander-outer u-no-padding",
            sectionClassName: "opl-section-outer"
        }, m.default.createElement("span", {
            dangerouslySetInnerHTML: {
                __html: e.label
            }
        }), m.default.createElement(E, {
            products: e.products,
            migratedProducts: e.migratedProducts,
            onClick: e.onClick,
            onClickMigratedCheckBox: e.onClickMigratedCheckBox,
            inputType: e.inputType,
            net: e.net,
            channels: e.channels,
            migratedServices: e.migratedServices,
            tvPackages: e.tvPackages,
            includedInThePackageTitle: e.includedInThePackageTitle ? e.includedInThePackageTitle : ""
        }))
    };
    e.ProductGroup = function(e) {
        return m.default.createElement(c.Expander, {
            scrollToSelected: !1,
            variant: "",
            className: "opl-expander-outer u-no-padding",
            sectionClassName: "opl-section-outer"
        }, m.default.createElement(E, {
            products: e.products,
            onClick: e.onClick,
            onClickWrapped: e.onClickWrapped,
            inputType: e.inputType,
            net: e.net,
            configurables: e.configurables
        }))
    };

    function p(e) {
        return m.default.createElement("div", {
            className: "l-row"
        }, m.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-4 l-col-4 u-right u-text-right u-padding-top-l-xl"
        }, m.default.createElement("button", {
            className: "o-btn opl-btn opl-btn--primary opl-btn-medium u-w-100",
            onClick: e.saveVasesClicked
        }, m.default.createElement("span", {
            className: "opl-ripple-box"
        }, m.default.createElement("span", {
            className: "opl-ripple-circle"
        })), e.saveVasesButtonText)))
    }
    var f = function(o) {
            return o.products && 0 < o.products.length ? m.default.createElement("ul", {
                className: "u-margin__ul-border-collapse"
            }, (d = [], u = [], c = o.products.length, s = [], p = c, f = u.length, o.products.forEach(function(e, t) {
                if (!e.quantityGroup || !h.default.includes(d, e.quantityGroup)) {
                    var n = b({}, e);
                    n.quantityGroup && (d.push(n.quantityGroup), n.groupedProducts = babelHelpers.toConsumableArray(o.products.filter(function(e) {
                        return n.quantityGroup === e.quantityGroup
                    })), p = f + 1), f = u.push(P(o, n, (i = n).quantityGroup ? "QUANTITY" : i.inputType ? i.inputType : o.inputType, t)), r = c + t, ((l = a = n).migrated && l.quantityGroup ? g.Optional.of(k(o, b({}, a, {
                        visible: !0,
                        selected: !0,
                        id: a.id + "_BEFORE_MIGRATION"
                    }), r)) : g.Optional.of(null)).ifPresent(function(e) {
                        return s.push(e)
                    })
                }
                var a, r, l, i
            }), s.forEach(function(e) {
                u.splice(p, 0, e), p++
            }), u)) : null;
            var d, u, c, s, p, f
        },
        E = function(r) {
            if (r.products && 0 < r.products.length) {
                var l = [],
                    i = [];
                return r.migratedProducts && 0 < r.migratedProducts.length && i.push(y(r, r.migratedProducts)), r.products.forEach(function(e, t) {
                    if (!e.quantityGroup || !h.default.includes(l, e.quantityGroup)) {
                        var n = b({}, e),
                            a = n.inputType ? n.inputType : r.inputType;
                        n.quantityGroup && (l.push(n.quantityGroup), a = "QUANTITY", n.groupedProducts = babelHelpers.toConsumableArray(r.products.filter(function(e) {
                            return n.quantityGroup === e.quantityGroup
                        }))), i.push(P(r, n, a, t))
                    }
                }), m.default.createElement("div", null, m.default.createElement("ul", {
                    className: "u-margin__ul-border-collapse"
                }, i))
            }
            return null
        },
        k = function(e, t, n) {
            return m.default.createElement(T, {
                hidden: !0 !== t.selected || !t.visible,
                key: "WRAPPER" + t.id
            }, m.default.createElement(a.default, {
                key: t.id,
                vas: t,
                idx: n,
                onSelectionChanged: function() {},
                net: e.net,
                descriptions: e.descriptions
            }))
        },
        y = function(e, t) {
            return m.default.createElement(n.default, {
                products: t,
                onSelectionChanged: e.onClick,
                onClickMigratedCheckBox: e.onClickMigratedCheckBox,
                net: e.net,
                borderDescription: e.migratedServices.borderDescription
            })
        },
        P = function(e, t, n, a) {
            switch (n) {
                case "MIGRATED":
                    return m.default.createElement(T, {
                        hidden: !0 !== t.selected || !t.visible,
                        key: "WRAPPER" + t.id + a
                    }, m.default.createElement(o.default, {
                        key: t.id,
                        vas: t,
                        idx: a,
                        onSelectionChanged: e.onClick(t.id, t.propositionId)
                    }));
                case "CHECKBOX":
                    return m.default.createElement(T, {
                        hidden: "hidden" === t.presentation,
                        key: "WRAPPER" + t.id + a
                    }, m.default.createElement(r.default, {
                        key: t.id,
                        vas: t,
                        idx: a,
                        onSelectionChanged: e.onClick,
                        onClickWrapped: e.onClickWrapped,
                        net: e.net
                    }));
                case "RADIO":
                    return m.default.createElement(T, {
                        hidden: "hidden" === t.presentation,
                        key: "WRAPPER" + t.id + a
                    }, m.default.createElement(l.default, {
                        key: t.id,
                        vas: t,
                        idx: a,
                        onSelectionChanged: e.onClick(t.id, t.propositionId),
                        net: e.net
                    }));
                case "UNCHANGEABLE":
                    return m.default.createElement(T, {
                        hidden: "hidden" === t.presentation,
                        key: "WRAPPER" + t.id + a
                    }, m.default.createElement(i.default, {
                        key: t.id,
                        vas: t,
                        idx: a,
                        channels: e.channels,
                        tvPackages: e.tvPackages,
                        showPrice: !1,
                        selected: !0,
                        net: e.net,
                        includedInThePackageTitle: e.includedInThePackageTitle ? e.includedInThePackageTitle : ""
                    }));
                case "READONLY":
                    return m.default.createElement(T, {
                        hidden: "hidden" === t.presentation,
                        key: "WRAPPER" + t.id + a
                    }, m.default.createElement(i.default, {
                        key: t.id,
                        vas: t,
                        idx: a,
                        tvPackages: e.tvPackages,
                        onSelectionChanged: function() {},
                        showPrice: !0,
                        selected: !1,
                        net: e.net,
                        includedInThePackageTitle: e.includedInThePackageTitle ? e.includedInThePackageTitle : ""
                    }));
                case "DISABLED":
                    return m.default.createElement(T, {
                        disable: !0,
                        hidden: "hidden" === t.presentation,
                        key: "WRAPPER" + t.id + a
                    }, m.default.createElement(r.default, {
                        key: t.id,
                        vas: t,
                        idx: a,
                        onSelectionChanged: e.onClick,
                        onClickWrapped: e.onClickWrapped,
                        net: e.net
                    }));
                case "QUANTITY":
                    return m.default.createElement(T, {
                        hidden: t.groupedProducts.every(function(e) {
                            return "hidden" === e.presentation
                        }),
                        key: "WRAPPER" + t.id + a
                    }, m.default.createElement(d.default, {
                        key: t.id,
                        vas: t,
                        idx: a,
                        onSelectionChanged: e.onClick,
                        onClickWrapped: e.onClickWrapped,
                        net: e.net,
                        configurables: e.configurables
                    }));
                default:
                    return m.default.createElement(T, {
                        hidden: "hidden" === t.presentation,
                        key: "WRAPPER" + t.id + a
                    }, m.default.createElement(r.default, {
                        key: t.id,
                        vas: t,
                        idx: a,
                        onSelectionChanged: e.onClick,
                        net: e.net
                    }))
            }
        },
        T = function(e) {
            return e.hidden ? m.default.createElement("div", {
                className: "u-hide"
            }) : e.disable ? m.default.createElement("div", {
                style: {
                    opacity: "0.5",
                    pointerEvents: "none"
                }
            }, e.children) : m.default.createElement("div", null, e.children)
        };
    (e.SaveVasesButton = p).propTypes = {
        saveVasesClicked: t.PropTypes.func,
        saveVasesButtonText: t.PropTypes.string
    }, p.defaultProps = {
        saveVasesButtonText: "Wybierz"
    }
});
//# sourceMappingURL=ModalFragments.js.map