define(["exports", "react", "react-redux", "prop-types", "eshop/modules/simfree/selectors"], function(e, i, t, a, n) {
    "use strict";

    function l(n) {
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
                var a = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, a)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, i = babelHelpers.interopRequireDefault(i), a = babelHelpers.interopRequireDefault(a);
    var r = function(e) {
            babelHelpers.inherits(a, e);
            var t = l(a);

            function a(e) {
                return babelHelpers.classCallCheck(this, a), t.call(this, e)
            }
            return babelHelpers.createClass(a, [{
                key: "componentDidMount",
                value: function() {}
            }, {
                key: "toHTML",
                value: function(e) {
                    return {
                        __html: e
                    }
                }
            }, {
                key: "renderValue",
                value: function(e) {
                    return "true" === e.value ? "Tak" : "false" === e.value ? "Nie" : e.value
                }
            }, {
                key: "renderUnit",
                value: function(e) {
                    return e.featureUnit ? e.featureUnit.symbol : ""
                }
            }, {
                key: "renderOneRow",
                value: function(a) {
                    var n = this;
                    return i.default.createElement("tr", {
                        key: "key_" + a.name
                    }, i.default.createElement("td", null, null != a.name ? a.name : a.code), i.default.createElement("td", null, a.featureValues.map(function(e, t) {
                        return n.renderValue(e) + " " + n.renderUnit(a, t)
                    })))
                }
            }, {
                key: "renderOneColumn",
                value: function(e, t) {
                    var a = this;
                    return e ? i.default.createElement("table", {
                        className: "opl-table opl-details-table opl-table--width__50-50 u-small-spacing-l u-medium-spacing-xl"
                    }, i.default.createElement("thead", null, i.default.createElement("tr", {
                        key: "tr" + t
                    }, i.default.createElement("th", {
                        colSpan: "2",
                        className: "u-padding-top"
                    }, i.default.createElement("h3", {
                        className: "h4 u-text-left"
                    }, null != e.name ? e.name : e.code)))), i.default.createElement("tbody", null, e.features.map(function(e, t) {
                        return a.renderOneRow(e)
                    }))) : ""
                }
            }, {
                key: "renderDoubleColumnClassification",
                value: function(e, t) {
                    return i.default.createElement("div", {
                        key: "classification-" + t,
                        className: 0 === t ? "opl-gradient-fade--item" : "opl-gradient-fade--item u-spacing-top-xl u-medium-no-spacing u-small-no-spacing"
                    }, i.default.createElement("div", {
                        className: "l-row"
                    }, i.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-12 l-col-6 "
                    }, this.renderOneColumn(e[t], t)), i.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-12 l-col-6 "
                    }, this.renderOneColumn(e[t + 1], t + 1))))
                }
            }, {
                key: "render",
                value: function() {
                    var a = this,
                        n = this.props.deviceData.classification;
                    if (n && n.length) {
                        var e = this.props.deviceData.variantList.filter(function(e) {
                                return e.productId === a.props.selectedVariant
                            })[0],
                            t = !!e && e.ean,
                            l = n.map(function(e) {
                                return e.code
                            }).indexOf("ean");
                        if (t) {
                            var r = {
                                features: [{
                                    code: "ean",
                                    name: "Ean",
                                    featureValues: [{
                                        value: t
                                    }]
                                }],
                                code: "ean",
                                name: "Inne informacje"
                            };
                            0 < l ? n[l] = r : n.push(r)
                        } else n = 0 < l ? n.filter(function(e) {
                            return "ean" !== e.code
                        }) : n
                    }
                    return i.default.createElement("div", {
                        className: "js-expander__container opl-wiking-expander__container",
                        hidden: !n || 0 === n.length
                    }, i.default.createElement("h2", {
                        id: "product-details",
                        "data-skiplinks": "Specyfikacja produktu",
                        className: "h2 u-padding-l u-small-no-padding-b u-small-padding-left-xl u-no-spacing"
                    }, "Specyfikacja"), i.default.createElement("a", {
                        href: "#",
                        className: "js-expander__trigger opl-wiking-expander__trigger"
                    }, i.default.createElement("span", {
                        className: "g-icon g-icon--only g-icon--arrow-down-slim"
                    }), i.default.createElement("span", {
                        className: "u-acc-hide"
                    }, "rozwiń")), i.default.createElement("div", {
                        className: "js-expander__content opl-wiking-expander__content u-spacing-xl"
                    }, i.default.createElement("div", {
                        className: "u-small-padding-top-l u-spacing-xl"
                    }, i.default.createElement("div", {
                        id: "product-specification-expander",
                        "data-js-module": "common/modules/opl-gradient-fade",
                        "data-js-options": '{"hideTrigger": false, "triggerHideName": "Zwiń", "triggerShowName": "Więcej", "showFirst": 0, "scrollSet": 80 }',
                        "data-js-conditions": "element:{was seen}",
                        className: "opl-gradient-fade"
                    }, i.default.createElement("div", {
                        className: "opl-gradient-fade--wrapper"
                    }, i.default.createElement("div", {
                        className: "opl-gradient-fade--cover"
                    }), n && n.map(function(e, t) {
                        return t % 2 == 0 ? a.renderDoubleColumnClassification(n, t) : ""
                    })), i.default.createElement("div", {
                        className: "opl-gradient-fade--trigger u-spacing-top"
                    }, i.default.createElement("a", {
                        href: "#",
                        className: "opl-load-more u-font-bold"
                    }, "Więcej"))))))
                }
            }]), a
        }(i.default.Component),
        c = (0, t.connect)(function(e) {
            return {
                selectedVariant: (0, n.getSelectedVariant)(e)
            }
        }, function() {
            return {}
        })(r);
    e.default = c
});
//# sourceMappingURL=ProductDetailsProductSpecification.js.map