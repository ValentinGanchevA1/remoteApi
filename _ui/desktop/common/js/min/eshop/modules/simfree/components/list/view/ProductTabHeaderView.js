define(["exports", "react", "eshop/modules/simfree/components/filter/OfferDeviceFilterMobileComponent", "../../../../../components/InfoComponent", "../../../../configurator/components/MarketContextCheckboxView", "../../../../core/enum/SalesChannel", "../../../../core/constants/OfferTypeEnum", "../../../../core/enum/SoftBundleGroup"], function(e, o, a, s, l, r, i, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, o = babelHelpers.interopRequireDefault(o), a = babelHelpers.interopRequireDefault(a), l = babelHelpers.interopRequireDefault(l), r = babelHelpers.interopRequireDefault(r), i = babelHelpers.interopRequireDefault(i), d = babelHelpers.interopRequireDefault(d);

    function t(t) {
        return o.default.createElement("div", null, o.default.createElement("div", {
            className: "l-page-row u-padding-top-l u-small-padding-top-l u-small-padding-l "
        }, o.default.createElement("div", {
            className: "l-row"
        }, o.default.createElement("div", {
            className: "l-col l-col-8 l-col-medium-12 l-col-small-12"
        }, o.default.createElement("h2", {
            className: "h1 u-no-spacing"
        }, t.tabHeaderText)), o.default.createElement("div", {
            className: "l-col l-col-4 l-col-medium-12 l-col-small-12 u-right u-padding-top-s"
        }, o.default.createElement(l.default, null)))), o.default.createElement("div", {
            className: "l-page-row u-padding u-padding-left-l"
        }, o.default.createElement("div", {
            className: "opl-tabs opl-tabs--secondary"
        }, 1 <= t.options.length && !t.isDuet ? o.default.createElement("div", {
            className: "opl-tabs__nav-wrapper"
        }, o.default.createElement("div", {
            className: "opl-tabs__nav-wrapper-inner"
        }, o.default.createElement("ul", {
            className: "opl-tabs__nav",
            "data-js-module": "common/modules/opl-tabs",
            "data-js-options": '{"tabNavLinkInnerCor": 30}'
        }, t.options.map(function(e, a) {
            return o.default.createElement("li", {
                className: "opl-tabs__nav-item"
            }, o.default.createElement("div", {
                className: "opl-tabs__nav-item__content"
            }, o.default.createElement("a", {
                href: "#",
                onClick: function() {
                    return t.onChange(e.value)
                },
                className: "opl-tabs__nav-link" + (e.description === t.headerText ? " is-active" : ""),
                "data-selected": e.value == t.selectedOfferType ? "1" : "0",
                "aria-selected": e.value == t.selectedOfferType
            }, o.default.createElement("span", {
                className: "opl-tabs__nav-link-inner"
            }, o.default.createElement("span", null, e.description || e.value)))))
        })))) : null)), function(e) {
            var a = e.channels,
                t = e.selectedOfferType,
                l = e.softBundleGroup,
                n = e.hasLove;
            if (a.sales === r.default.WWW && t === i.default.VOICE_LDF && l === d.default.LDF) return o.default.createElement("div", {
                className: "l-page-row u-padding u-padding-left-l"
            }, o.default.createElement(s.ConditionalInfoComponent, {
                condition: n,
                type: "blueInfo",
                color: "black",
                bgColor: "white",
                title: "Pamiętaj!",
                padding: "noPadding",
                text: "Jesteś w Love dla Firm - dzięki temu korzystasz ze specjalnych rabatów. Jeśli chcesz korzystać z nich dalej - musisz mieć aktywną umowę na internet dla biura.",
                altText: "Love dla firm to pakiet obejmujący abonament komórkowy i internet stacjonarny w Orange dzięki czemu koszt pierwszej karty jest od 35,00 zł + VAT, a drugą kartę dostaniesz za 0 zł."
            }))
        }(t), o.default.createElement(a.default, {
            descriptions: t.descriptions,
            channels: t.channels
        }))
    }
    e.default = t
});
//# sourceMappingURL=ProductTabHeaderView.js.map