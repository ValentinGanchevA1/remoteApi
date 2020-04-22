define(["exports", "react", "eshop/utils/OnlineUtils", "prop-types", "./Expander"], function(e, a, l, t, n) {
    "use strict";

    function s(l) {
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
                var r = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, r)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, a = babelHelpers.interopRequireWildcard(a), l = babelHelpers.interopRequireDefault(l), t = babelHelpers.interopRequireDefault(t);
    var i = "EXPANDER-ID-PLACEHOLDER",
        u = "expanderSectionContent_",
        r = function(e) {
            babelHelpers.inherits(r, e);
            var t = s(r);

            function r() {
                return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
            }
            return babelHelpers.createClass(r, [{
                key: "hasExpander",
                value: function() {
                    return this.props.html && 0 <= this.props.html.indexOf(i)
                }
            }, {
                key: "htmlWithExpanderId",
                value: function(e) {
                    return this.hasExpander() && (e = e.replace(i, l.default.generateUniqeHtmlId(u))), e
                }
            }, {
                key: "parseXml",
                value: function() {
                    var e = this.htmlWithExpanderId(this.props.html);
                    if (window.DOMParser) {
                        var t;
                        try {
                            t = (new DOMParser).parseFromString(e, "text/xml")
                        } catch (e) {
                            return null
                        }
                        return 0 < t.getElementsByTagName("parsererror").length ? null : t.children && t.children[0] ? t.children[0] : null
                    }
                    return null
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.hasExpander() && this.parseXml();
                    if (e) {
                        var r = a.default.createElement(n.Trigger, null, a.default.createElement("span", {
                                className: "js-expander__trigger--hide"
                            }, this.props.labelShow), a.default.createElement("span", {
                                className: "js-expander__trigger--show"
                            }, this.props.labelHide)),
                            t = [this.props.className, e.className].join(" ");
                        return a.default.createElement(n.Expander, {
                            scrollToSelected: !1,
                            className: t
                        }, Array.from(e.children).map(function(e) {
                            var t = {
                                __html: e.outerHTML
                            };
                            return 0 <= e.id.indexOf(u) ? a.default.createElement(n.Section, {
                                headerBelow: !0,
                                header: r
                            }, a.default.createElement("div", {
                                dangerouslySetInnerHTML: t
                            })) : a.default.createElement("div", {
                                dangerouslySetInnerHTML: t
                            })
                        }))
                    }
                    var l = {
                        __html: this.props.html
                    };
                    return a.default.createElement("div", {
                        className: this.props.className,
                        dangerouslySetInnerHTML: l
                    })
                }
            }]), r
        }(a.PureComponent);
    r.propTypes = {
        id: t.default.string,
        className: t.default.string,
        html: t.default.string,
        labelHide: t.default.string,
        labelShow: t.default.string
    }, r.defaultProps = {
        labelHide: "[czytaj mniej]",
        labelShow: "[czytaj więcej]"
    };
    var o = r;
    e.default = o
});
//# sourceMappingURL=ExpanderFromHtml.js.map