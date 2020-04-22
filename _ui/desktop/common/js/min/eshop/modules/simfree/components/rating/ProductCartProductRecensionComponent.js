define(["exports", "react", "prop-types"], function(e, l, t) {
    "use strict";

    function n(l) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(l);
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
    }), e.default = void 0, l = babelHelpers.interopRequireDefault(l), t = babelHelpers.interopRequireDefault(t);
    var a = function(e) {
        babelHelpers.inherits(a, e);
        var t = n(a);

        function a(e) {
            return babelHelpers.classCallCheck(this, a), t.call(this, e)
        }
        return babelHelpers.createClass(a, [{
            key: "componentDidMount",
            value: function() {}
        }, {
            key: "_formatDate",
            value: function(e) {
                return e.toLocaleString()
            }
        }, {
            key: "render",
            value: function() {
                return 0 < this.props.reviews.length ? l.default.createElement("div", null, this._renderBody()) : null
            }
        }, {
            key: "_renderBody",
            value: function() {
                return l.default.createElement("div", {
                    className: "opl-cart-product-opinion-section"
                }, l.default.createElement("div", {
                    className: "l-row u-spacing-l u-small-no-spacing-bottom"
                }, l.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-6 "
                }, l.default.createElement("h2", {
                    className: "h4 u-small-spacing-m"
                }, "Oceny i recenzje klientów Orange:"), l.default.createElement("div", {
                    className: "o-separator u-large-hide u-medium-hide"
                }))), l.default.createElement("ul", {
                    className: "u-medium-spacing-xl"
                }, this._renderOpinions()))
            }
        }, {
            key: "_renderOpinions",
            value: function() {
                return this.props.reviews.map(function(e, t) {
                    return l.default.createElement("li", {
                        key: t,
                        className: "l-row u-spacing-xl"
                    }, l.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-3 l-col-2  u-small-spacing"
                    }, l.default.createElement("p", {
                        className: "g-gray4-c"
                    }, e.alias, ", ", e.dateString), l.default.createElement("div", {
                        className: "opl-rating"
                    }, l.default.createElement("span", {
                        className: "g-icon g-icon--star g-icon--s"
                    }), l.default.createElement("span", {
                        className: "g-icon g-icon--star g-icon--s"
                    }), l.default.createElement("span", {
                        className: "g-icon g-icon--star g-icon--s"
                    }), l.default.createElement("span", {
                        className: "g-icon g-icon--star g-icon--s"
                    }), l.default.createElement("span", {
                        className: "g-icon g-icon--star g-icon--s"
                    }), l.default.createElement("div", {
                        style: {
                            width: e.percentageRating
                        },
                        className: "opl-rating-bar"
                    }, l.default.createElement("span", {
                        className: "g-icon g-icon--star g-icon--s"
                    }), l.default.createElement("span", {
                        className: "g-icon g-icon--star g-icon--s"
                    }), l.default.createElement("span", {
                        className: "g-icon g-icon--star g-icon--s"
                    }), l.default.createElement("span", {
                        className: "g-icon g-icon--star g-icon--s"
                    }), l.default.createElement("span", {
                        className: "g-icon g-icon--star g-icon--s"
                    })))), l.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-9 l-col-10 "
                    }, l.default.createElement("p", {
                        className: "u-spacing"
                    }, e.comment)))
                }, this)
            }
        }]), a
    }(l.default.Component);
    e.default = a
});
//# sourceMappingURL=ProductCartProductRecensionComponent.js.map