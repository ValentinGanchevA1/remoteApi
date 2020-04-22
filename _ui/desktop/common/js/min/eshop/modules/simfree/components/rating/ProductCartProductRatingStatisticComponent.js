define(["exports", "react", "prop-types"], function(e, l, t) {
    "use strict";

    function c(l) {
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
        var t = c(a);

        function a(e) {
            return babelHelpers.classCallCheck(this, a), t.call(this, e)
        }
        return babelHelpers.createClass(a, [{
            key: "componentDidMount",
            value: function() {}
        }, {
            key: "render",
            value: function() {
                return l.default.createElement("ul", {
                    className: "u-medium-spacing-xl"
                }, this._renderRatingStatistics())
            }
        }, {
            key: "_renderRatingStatistics",
            value: function() {
                return this.props.ratings.map(function(e, t) {
                    return l.default.createElement("li", {
                        key: t,
                        className: "l-row u-spacing u-small-hide"
                    }, l.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-3 l-col-4 "
                    }, l.default.createElement("div", {
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
                        className: "l-col l-col-small-12 l-col-medium-9 l-col-8 "
                    }, l.default.createElement("div", {
                        className: "l-row"
                    }, l.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-11 l-col-9 "
                    }, l.default.createElement("div", {
                        title: e.percentageNumberOfVotes,
                        className: "o-progress opl-progress opl-progress--availability availability--orange"
                    }, l.default.createElement("div", {
                        style: {
                            width: e.percentageNumberOfVotes
                        },
                        className: "o-progress__bar"
                    }))), l.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-1 l-col-3 "
                    }, l.default.createElement("h4", {
                        className: "opl-wiking-comments__value"
                    }, e.percentageNumberOfVotes, " ", l.default.createElement("span", {
                        className: "u-acc-hide"
                    }, "oceniających"))))))
                }, this)
            }
        }]), a
    }(l.default.Component);
    e.default = a
});
//# sourceMappingURL=ProductCartProductRatingStatisticComponent.js.map