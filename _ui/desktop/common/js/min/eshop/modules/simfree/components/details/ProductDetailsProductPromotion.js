define(["exports", "react"], function(e, r) {
    "use strict";

    function n(r) {
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
    }), e.default = void 0;
    var t = function(e) {
        babelHelpers.inherits(a, e);
        var t = n(a);

        function a(e) {
            return babelHelpers.classCallCheck(this, a), t.call(this, e)
        }
        return babelHelpers.createClass(a, [{
            key: "toHTML",
            value: function(e) {
                return {
                    __html: e
                }
            }
        }, {
            key: "render",
            value: function() {
                return this.props.promotion ? r.default.createElement("div", {
                    id: "product-promotion-expander",
                    className: "js-expander__container opl-wiking-expander__container"
                }, r.default.createElement("p", {
                    id: "product-promotion",
                    "data-skiplinks": "Promocja",
                    className: "h2 u-padding-l u-small-no-padding-b u-small-padding-left-xl u-no-spacing"
                }, this.props.promotionLabel ? this.props.promotionLabel : ""), r.default.createElement("a", {
                    href: "#",
                    className: "js-expander__trigger opl-wiking-expander__trigger"
                }, r.default.createElement("span", {
                    className: "g-icon g-icon--only g-icon--arrow-down-slim"
                }), r.default.createElement("span", {
                    className: "u-acc-hide"
                }, "rozwiń opis")), r.default.createElement("div", {
                    className: "js-expander__content opl-wiking-expander__content u-spacing-xl"
                }, r.default.createElement("div", {
                    className: "u-small-padding-top-l"
                }, r.default.createElement("div", {
                    id: "product-details-gradient",
                    "data-js-module": "common/modules/opl-gradient-fade",
                    "data-js-options": '{"hideTrigger": false, "triggerHideName": "Zwiń", "triggerShowName": "Więcej", "showFirst": 0, "scrollSet": 80, "loadAll": true }',
                    "data-js-conditions": "element:{was seen}",
                    className: "opl-gradient-fade"
                }, r.default.createElement("div", {
                    className: "opl-gradient-fade--wrapper"
                }, r.default.createElement("div", {
                    className: "opl-gradient-fade--cover"
                }), r.default.createElement("div", {
                    className: "opl-gradient-fade--item",
                    dangerouslySetInnerHTML: this.toHTML(this.props.promotion)
                })), r.default.createElement("div", {
                    className: "opl-gradient-fade--trigger u-spacing-top"
                }, r.default.createElement("a", {
                    href: "#",
                    className: "opl-load-more u-font-bold"
                }, "Więcej")))))) : null
            }
        }]), a
    }((r = babelHelpers.interopRequireDefault(r)).default.Component);
    e.default = t
});
//# sourceMappingURL=ProductDetailsProductPromotion.js.map