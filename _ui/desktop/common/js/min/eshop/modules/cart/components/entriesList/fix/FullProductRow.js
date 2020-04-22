define(["exports", "react", "prop-types", "./Utils", "./PriceRow", "../../../enum/DeviceType", "../../../enum/RelationType"], function(e, m, t, f, g, b, h) {
    "use strict";

    function v(t, e) {
        var l = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(t);
            e && (a = a.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), l.push.apply(l, a)
        }
        return l
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, m = babelHelpers.interopRequireDefault(m), t = babelHelpers.interopRequireDefault(t), b = babelHelpers.interopRequireDefault(b), h = babelHelpers.interopRequireDefault(h);

    function l(t) {
        var e = t.product.price && t.product.price.oneTimeCost,
            l = e && 0 < e.price,
            a = t.product.price && t.product.price.monthlyCosts && 0 < t.product.price.monthlyCosts.length && t.product.price.monthlyCosts[0],
            r = t.product.price && t.product.price.monthlyCosts && 1 < t.product.price.monthlyCosts.length && t.product.price.monthlyCosts.slice(1),
            n = a && a.price <= 0,
            o = t.product.price && t.product.price.monthlyCosts && 1 < t.product.price.monthlyCosts.length,
            c = t.product.price < 0 || a && a.price < 0,
            d = n && !l && !o && t.forFreeLabel && !c,
            i = b.default.STB === t.product.deviceType && h.default.OPTIONAL === t.product.relationType,
            u = l && (!a || n),
            s = t.product.price && t.product.price.installments,
            p = !!t.product.deviceType ? t.forFreeLabel : t.serviceFreeLabel;
        return m.default.createElement("div", {
            className: "l-row ".concat(t.borderTop ? "u-border-top" : "")
        }, m.default.createElement("div", {
            className: "l-col l-col-4 l-col-small-12 l-col--opposite"
        }, m.default.createElement("div", {
            className: "l-row ".concat(d || r ? "u-padding-l u-padding-top-l" : "u-padding-l-xl u-padding-top-l-xl", " u-small-no-padding")
        }, m.default.createElement("div", {
            className: "l-col l-col-6 l-col-small-12 u-padding-right u-text-right ".concat(u ? "u-small-text-left u-small-padding-s u-small-padding-top-m" : "u-small-hide")
        }, l && m.default.createElement(g.Price, {
            price: e,
            net: t.net
        })), m.default.createElement("div", {
            className: "l-col l-col-6 l-col-small-12 u-padding-right u-text-right ".concat(u ? "u-small-hide" : "u-small-text-left u-small-padding-s u-small-padding-top-m")
        }, a && m.default.createElement(g.Price, {
            price: function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var l = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? v(Object(l), !0).forEach(function(e) {
                        babelHelpers.defineProperty(t, e, l[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : v(Object(l)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e))
                    })
                }
                return t
            }({}, a, {
                installments: s
            }),
            net: t.net
        }), d && m.default.createElement("div", null, m.default.createElement("span", {
            dangerouslySetInnerHTML: {
                __html: p
            }
        })), i && m.default.createElement("div", null, m.default.createElement("span", {
            dangerouslySetInnerHTML: {
                __html: t.optionalDeviceLabel
            }
        })), r && r.map(function(e) {
            return m.default.createElement("div", {
                key: e.monthFrom + "-" + e.monthTo,
                className: "u-right u-text-nowrap"
            }, "od ", e.monthFrom, " ", e.monthTo ? "do " + e.monthTo + " " : "", "m-ca ", t.net ? e.net : e.gross, " ", e.currency)
        }), !u && l && m.default.createElement("div", {
            className: "u-font-small u-font-bold u-large-hide u-medium-hide"
        }, "+ ", t.net ? e.net : e.gross, " ", e.currency, " jednorazowa opłata"), a && !!t.lowerInstallmentsClicked && !(!o && n) && m.default.createElement("div", null, m.default.createElement("a", {
            className: "u-spacing-left",
            href: "#",
            key: "lowerInstallmentsClicked_key",
            onClick: t.lowerInstallmentsClicked,
            "aria-label": "Obniż raty"
        }, !!t.descriptions && t.descriptions.lowerInstallments || "Obniż raty"))))), m.default.createElement("div", {
            className: "l-col l-col-8 l-col-small-12"
        }, m.default.createElement("div", {
            className: "l-row ".concat(d ? "u-padding-l-xl u-padding-top-l-xl" : "u-padding-l u-padding-top-l", " u-small-padding-top u-small-padding-l")
        }, m.default.createElement("div", {
            className: "l-col l-col--auto 'u-no-padding-r'"
        }, m.default.createElement("div", {
            className: "opl-checkout__icon__cell"
        }, (!!t.product.thumbnailIcon || !!t.product.imageUrl) && m.default.createElement(f.Graphic, {
            icon: t.product.thumbnailIcon,
            imgUrl: t.product.imageUrl
        }))), m.default.createElement("div", {
            className: "l-col l-col--auto l-col-small-8 l-col-medium-8  'u-no-padding-l'"
        }, m.default.createElement("span", {
            className: "u-font-bold u-small-font-large",
            dangerouslySetInnerHTML: {
                __html: t.product.name
            }
        }), m.default.createElement("div", {
            className: "u-padding-top-xs u-small-padding-top-s",
            dangerouslySetInnerHTML: {
                __html: t.product.description
            }
        }), m.default.createElement("div", {
            className: "u-padding-top ".concat(t.showActionsMobile ? "" : "u-small-hide")
        }, m.default.createElement("div", {
            className: "l-row"
        }, t.onDetails && m.default.createElement("div", {
            className: "l-col l-col--auto "
        }, m.default.createElement("div", {
            className: "u-padding-top"
        }, m.default.createElement("a", {
            href: "#",
            className: "u-spacing-right-l u-text-nowrap",
            onClick: t.onDetails
        }, t.detailsLabel))), t.product.changeable && t.onChange && m.default.createElement("div", {
            className: "l-col l-col--auto"
        }, m.default.createElement("div", {
            className: "u-padding-top"
        }, m.default.createElement("a", {
            href: "#",
            className: "u-spacing-right-l u-text-nowrap ",
            onClick: t.onChange
        }, t.changeLabel))), t.product.removable && t.onRemove && m.default.createElement("div", {
            className: "l-col l-col--auto  "
        }, m.default.createElement("div", {
            className: "u-padding-top"
        }, m.default.createElement("a", {
            href: "#",
            className: "u-spacing-right-l u-text-nowrap ",
            onClick: t.onRemove
        }, t.removeLabel)))))))))
    }
    l.propTypes = {
        product: t.default.shape({
            price: t.default.shape({
                oneTimeCost: t.default.shape({
                    gross: t.default.string,
                    net: t.default.string,
                    currency: t.default.string
                }),
                monthlyCosts: t.default.arrayOf(t.default.shape({
                    gross: t.default.string,
                    net: t.default.string,
                    currency: t.default.string,
                    monthFrom: t.default.number,
                    monthTo: t.default.number
                })),
                installments: t.default.bool
            }),
            code: t.default.string,
            name: t.default.string,
            thumbnailIcon: t.default.string,
            imageUrl: t.default.string,
            description: t.default.string,
            changeable: t.default.bool,
            removable: t.default.bool
        }),
        detailsLabel: t.default.string,
        forFreeLabel: t.default.string,
        changeLabel: t.default.string,
        removeLabel: t.default.string,
        onDetails: t.default.func,
        onChange: t.default.func,
        lowerInstallmentsClicked: t.default.func,
        onRemove: t.default.func,
        borderTop: t.default.bool,
        showActionsMobile: t.default.bool,
        serviceFreeLabel: t.default.string,
        optionalDeviceLabel: t.default.string
    }, l.defaultProps = {
        changeLabel: "Zmień",
        detailsLabel: "Szczegóły",
        removeLabel: "Usuń",
        borderTop: !0,
        showActionsMobile: !0,
        forFreeLabel: "<div>Urządzenie bezpłatne</div><div>w ramach oferty</div>",
        optionalDeviceLabel: "<div>Dekoder opcjonalny</div>",
        serviceFreeLabel: "<div>Bezpłatne w cenie</div><div>pakietu</div>"
    };
    var a = l;
    e.default = a
});
//# sourceMappingURL=FullProductRow.js.map