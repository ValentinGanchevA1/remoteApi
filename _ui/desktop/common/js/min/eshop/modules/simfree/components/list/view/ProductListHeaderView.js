define(["exports", "react", "eshop/modules/simfree/components/filter/OfferDeviceFilterMobileComponent", "../../../../configurator/components/MarketContextCheckboxView"], function(e, a, l, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, a = babelHelpers.interopRequireDefault(a), l = babelHelpers.interopRequireDefault(l), n = babelHelpers.interopRequireDefault(n);

    function t(t) {
        return a.default.createElement("div", null, a.default.createElement("div", {
            className: "l-page-row u-padding-top-l u-padding-l u-box-shadow u-large-no-shadow "
        }, a.default.createElement("div", {
            className: "l-row"
        }, a.default.createElement("div", {
            className: "l-col l-col-8 l-col-medium-12 l-col-small-12"
        }, a.default.createElement("div", {
            className: "u-display_table-cell u-padding-right"
        }, a.default.createElement("h2", {
            className: "h1 u-no-spacing"
        }, t.headerText)), a.default.createElement("div", {
            className: "u-display_table-cell u-vertical-bottom"
        }, 1 < t.options.length ? a.default.createElement("div", {
            className: "opl-dropdown-button opl-dropdown-button--inline opl-dropdown-button--basic opl-dropdown-button--mobile-100"
        }, a.default.createElement("button", {
            className: "o-btn opl-btn"
        }, a.default.createElement("span", {
            className: "opl-ripple-box"
        }, a.default.createElement("span", {
            className: "opl-ripple-circle"
        })), "Zmień"), a.default.createElement("ul", {
            className: "opl-dropdown-button__list"
        }, t.options.map(function(e, l) {
            return a.default.createElement("li", {
                key: e.value + "_" + l
            }, a.default.createElement("button", {
                onClick: function() {
                    return t.onChange(e.value)
                },
                className: "o-btn opl-btn opl-dropdown-button__item u-w-100"
            }, a.default.createElement("span", {
                className: "opl-ripple-box"
            }, a.default.createElement("span", {
                className: "opl-ripple-circle"
            })), e.description))
        }))) : null)), a.default.createElement("div", {
            className: "l-col l-col-4 l-col-medium-12 l-col-small-12 u-right"
        }, a.default.createElement(n.default, null)))), a.default.createElement(l.default, {
            descriptions: t.descriptions,
            channels: t.channels
        }))
    }
    e.default = t
});
//# sourceMappingURL=ProductListHeaderView.js.map