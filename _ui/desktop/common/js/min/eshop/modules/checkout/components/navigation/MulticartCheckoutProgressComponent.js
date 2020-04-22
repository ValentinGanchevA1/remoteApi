define(["exports", "react", "react-redux", "eshop/utils/DataLayerUtils", "../../actions/app", "../../../fix/components/OraFullPageLoaderComponent", "../../selectors"], function(e, l, t, r, s, o, n) {
    "use strict";

    function a(s) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(s);
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
    }), e.default = void 0, l = babelHelpers.interopRequireWildcard(l), r = babelHelpers.interopRequireDefault(r), o = babelHelpers.interopRequireDefault(o);
    var u = function(e) {
            babelHelpers.inherits(r, e);
            var t = a(r);

            function r(e) {
                return babelHelpers.classCallCheck(this, r), t.call(this, e)
            }
            return babelHelpers.createClass(r, [{
                key: "componentWillMount",
                value: function() {
                    this.props.registerCurrentStepId(this.props.progressBarId)
                }
            }, {
                key: "getStepView",
                value: function(e, t) {
                    var r = "checkoutStepTitle" + e.stepNumber,
                        s = this.props.descriptions[r];
                    return l.default.createElement("li", {
                        key: r,
                        className: "o-steps__li" + this.getStepItemClass(t, e.stepNumber)
                    }, l.default.createElement("div", {
                        className: "o-steps__item"
                    }, l.default.createElement("span", {
                        className: "o-steps__content"
                    }, s)))
                }
            }, {
                key: "getStepItemClass",
                value: function(e, t) {
                    return e === t ? " o-steps__li--active" : e === t - 1 ? " o-steps__li--prev-active" : ""
                }
            }, {
                key: "render",
                value: function() {
                    var s = this,
                        e = this.props.checkoutSteps.find(function(e) {
                            return e.progressBarId === s.props.progressBarId
                        }),
                        n = e ? e.stepNumber : 1;
                    return l.default.createElement("div", {
                        "data-js-module": "common/modules/opl-steps",
                        className: "o-steps opl-steps u-padding-top-l u-small-no-padding-t " + (3 == n ? "u-padding-l-xl" : "u-padding-l")
                    }, l.default.createElement("ul", {
                        className: "o-steps__list"
                    }, this.props.checkoutSteps.map(function(e, t, r) {
                        return s.getStepView(e, n)
                    })), l.default.createElement(o.default, {
                        isShow: this.props.showFullPageLoader
                    }))
                }
            }]), r
        }(l.Component),
        i = u = (0, t.connect)(function(e) {
            return {
                showFullPageLoader: (0, n.isFullPageLoader)(e)
            }
        }, function(t) {
            return {
                registerCurrentStepId: function(e) {
                    return t((0, s.registerCurrentStepId)(e))
                }
            }
        })(u);
    e.default = i
});
//# sourceMappingURL=MulticartCheckoutProgressComponent.js.map