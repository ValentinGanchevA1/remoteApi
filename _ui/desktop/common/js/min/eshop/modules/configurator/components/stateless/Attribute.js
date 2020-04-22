define(["exports", "react", "prop-types", "eshop/utils/OnlineUtils"], function(e, s, t, r) {
    "use strict";

    function l(r) {
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
                var n = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, n)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, s = babelHelpers.interopRequireDefault(s), t = babelHelpers.interopRequireDefault(t), r = babelHelpers.interopRequireDefault(r);
    var o = "TOOLTIP-ID-PLACEHOLDER",
        n = function(e) {
            babelHelpers.inherits(n, e);
            var t = l(n);

            function n() {
                return babelHelpers.classCallCheck(this, n), t.apply(this, arguments)
            }
            return babelHelpers.createClass(n, [{
                key: "componentDidMount",
                value: function() {
                    d(this.props.value) && OPL.UI.loadModules(document.getElementById(this.tooltipId()), [{
                        path: "core/modules/tooltips",
                        options: {
                            mouseoverMinWidth: 0,
                            triggerEvent: "mouseover"
                        }
                    }])
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    d(this.props.value) && OPL.UI.stopModules(this.refs.container)
                }
            }, {
                key: "tooltipId",
                value: function() {
                    return void 0 === this.tooltipIdValue && (this.tooltipIdValue = r.default.generateUniqeHtmlId("featureTooltip_")), this.tooltipIdValue
                }
            }, {
                key: "render",
                value: function() {
                    return {
                        static: i,
                        bar: a
                    } [this.props.type](this.props, this.tooltipId.bind(this))
                }
            }]), n
        }(s.default.Component);

    function a(e) {
        var t = e.value,
            n = e.technicalValue,
            r = {
                __html: t
            },
            l = {
                __html: e.config.dataBarDescription
            },
            a = s.default.createElement("div", {
                className: "opl-box__icon-list__icon"
            }, s.default.createElement("span", {
                className: "opl-box__dataplan-badge opl-box__dataplan-badge--break-medium u-medium-vertical-middle",
                dangerouslySetInnerHTML: r
            })),
            i = s.default.createElement("div", {
                className: "opl-box__icon-list__text"
            }, s.default.createElement("div", {
                title: n + "%",
                className: "o-progress opl-progress u-spacing u-small-hide"
            }, s.default.createElement("div", {
                style: {
                    width: n + "%"
                },
                className: "o-progress__bar"
            }, s.default.createElement("span", {
                className: "u-acc-hide"
            }, n, "%"))), s.default.createElement("span", {
                dangerouslySetInnerHTML: l
            }));
        return c(e.box ? u() : "", [a, i], e.hide, e.border)
    }

    function u() {
        return "opl-box__icon-list__item"
    }

    function i(t, e) {
        var n = t.icon,
            r = t.value;
        d(r) && (r = r.replace(o, e()));
        var l, a = function(e) {
            if (!(e = e.trim()).startsWith("<li")) return;
            return {
                className: [e].map(function(e) {
                    return e.substring(0, e.indexOf(">"))
                }).map(function(e) {
                    return e.substring(e.indexOf("class"))
                }).map(function(e) {
                    return e.substring(e.indexOf('"') + 1)
                }).map(function(e) {
                    return e.substring(0, e.indexOf('"'))
                })[0],
                value: [e].map(function(e) {
                    return e.substring(e.indexOf(">") + 1)
                }).map(function(e) {
                    return e.substring(0, e.lastIndexOf("<"))
                })[0]
            }
        }(r);

        function i(e) {
            return c(a ? a.className : [t.box ? u() : "", t.table ? "u-table" : ""].join(" "), e, t.hide, t.border, t.fixer)
        }
        return i(n ? [function(e) {
            if (e) {
                var t = "g-icon g-icon--" + e.toLowerCase().replace("_", "-") + " g-icon--only u-medium-vertical-middle";
                return s.default.createElement("div", {
                    className: "opl-box__icon-list__icon"
                }, s.default.createElement("span", {
                    "aria-hidden": "true",
                    className: t
                }))
            }
        }(n), (l = {
            __html: r
        }, s.default.createElement("div", {
            className: "opl-box__icon-list__text",
            dangerouslySetInnerHTML: l
        }))] : a ? [s.default.createElement("div", {
            dangerouslySetInnerHTML: {
                __html: a.value
            }
        })] : [s.default.createElement("div", {
            dangerouslySetInnerHTML: {
                __html: r
            }
        })])
    }

    function c(e, t, n, r, l) {
        var a, i, o = e + (n ? " u-hide" : "") + (r ? " u-border u-no-border-l u-no-border-r u-no-border-t" : ""),
            u = null;
        return u = l ? (a = l, i = t, s.default.createElement("div", {
            className: "u-animate-height " + a
        }, s.default.createElement("div", {
            className: "js-height-sensitive-element"
        }, i))) : t, s.default.createElement("li", {
            ref: "container",
            className: o
        }, u)
    }

    function d(e) {
        return 0 <= e.indexOf(o)
    }(e.default = n).propTypes = {
        type: t.default.string.isRequired,
        value: t.default.string.isRequired,
        technicalValue: t.default.number,
        icon: t.default.string
    }
});
//# sourceMappingURL=Attribute.js.map