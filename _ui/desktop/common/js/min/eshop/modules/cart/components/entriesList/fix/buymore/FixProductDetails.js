define(["exports", "react", "prop-types", "eshop/modules/cart/analyzer/TvChannelUtils"], function(e, a, l, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = e.OfferAdapterForTvDetails = void 0, a = babelHelpers.interopRequireWildcard(a);
    var n = function(e) {
        return a.default.createElement("div", {
            className: "g-gray1-bg u-padding-all-l u-no-padding-bottom u-text-left"
        }, a.default.createElement("div", {
            className: "l-row"
        }, a.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-3 l-col-3 "
        }), a.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-9 l-col-9",
            dangerouslySetInnerHTML: {
                __html: e.vas.longDescription
            }
        })))
    };
    e.OfferAdapterForTvDetails = function(l) {
        var e = l.tvPackages.find(function(e) {
            return l.productCode === e.id
        });
        return a.default.createElement(r, {
            vas: e
        })
    };

    function c(e) {
        return e.vas.tvChannelList && 0 < e.vas.tvChannelList.length ? a.default.createElement(r, e) : a.default.createElement(n, e)
    }
    var r = function(e) {
            if (!e || !e.vas) return null;
            var l = (0, t.groupChannelsByCategories)(e.vas.tvChannelList);
            return a.default.createElement("div", {
                className: "g-gray1-bg u-padding-all-l u-no-padding-bottom u-text-left",
                style: {
                    overflow: "hidden"
                }
            }, l && 0 < Object.keys(l).length && Object.keys(l).map(function(e) {
                return a.default.createElement(o, {
                    key: l[e].label,
                    group: l[e]
                })
            }))
        },
        o = function(e) {
            return a.default.createElement("div", {
                className: "l-row"
            }, a.default.createElement("div", {
                className: "l-col l-col-small-12 l-col-medium-3 l-col-3 "
            }, a.default.createElement("p", {
                className: "u-small-spacing-l"
            }, e.group.label, " :")), a.default.createElement("div", {
                className: "l-col l-col-small-12 l-col-medium-9 l-col-9 "
            }, a.default.createElement("ul", {
                className: "opl-tv-channel-list opl-package-tv-choose"
            }, e.group.channels.map(function(e, l) {
                return a.default.createElement(s, {
                    key: e.code,
                    channel: e
                })
            }))))
        },
        s = function(e) {
            return a.default.createElement("li", {
                className: "l-group__element opl-tv-channel-list__element opl-package-tv-choose__item u-margin-right"
            }, e.channel.code.includes("HD") && a.default.createElement("span", {
                className: "opl-package-tv-choose__hd"
            }, "HD"), a.default.createElement("label", {
                className: "o-checker__wrapper opl-checkbox opl-checker__wrapper"
            }, a.default.createElement("input", {
                type: "checkbox",
                name: e.channel.code,
                checked: ""
            }), a.default.createElement("span", {
                className: "o-checker"
            }, a.default.createElement("span", {
                title: e.channel.code,
                lang: "en"
            }, a.default.createElement("img", {
                src: "empty" !== e.channel.image ? e.channel.image : "//:0",
                alt: e.channel.name
            })))))
        };
    e.default = c
});
//# sourceMappingURL=FixProductDetails.js.map