define(["exports", "react", "prop-types", "eshop/modules/core/utils/ui"], function(e, i, t, o) {
    "use strict";
    var n, r, s, a;

    function l(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }

    function d(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? l(Object(n), !0).forEach(function(e) {
                babelHelpers.defineProperty(t, e, n[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            })
        }
        return t
    }

    function p(r) {
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
    }), e.Section = e.ConsentTrigger = e.Trigger = e.Toggle = e.Expander = void 0, i = babelHelpers.interopRequireWildcard(i), t = babelHelpers.interopRequireDefault(t);

    function c(e) {
        return e + "__expander-trigger"
    }

    function u(e) {
        return e + "__content"
    }

    function h(e) {
        return e + "--togglable"
    }

    function f(e, t) {
        return e + "-section-" + t + "-trigger"
    }
    window.expanderId = null != window.expanderId ? window.expanderId + 1 : 1, window.sectionId = null != window.sectionId ? window.sectionId + 1 : 1;
    var b = "",
        m = "section",
        g = "section_expander",
        x = "console",
        y = t.default.oneOf([b, m, x, g]),
        v = (n = {}, babelHelpers.defineProperty(n, b, ""), babelHelpers.defineProperty(n, m, "opl-section opl-section--togglable"), babelHelpers.defineProperty(n, g, "opl-section opl-section--expander"), babelHelpers.defineProperty(n, x, "opl-console--togglable"), n),
        C = (r = {}, babelHelpers.defineProperty(r, b, ""), babelHelpers.defineProperty(r, m, "opl-section__heading"), babelHelpers.defineProperty(r, g, "opl-section__heading"), babelHelpers.defineProperty(r, x, "opl-console__heading"), babelHelpers.defineProperty(r, "arrow", ""), r),
        N = (s = {}, babelHelpers.defineProperty(s, b, ""), babelHelpers.defineProperty(s, m, "opl-section__expander-trigger"), babelHelpers.defineProperty(s, g, "opl-section__expander-trigger"), babelHelpers.defineProperty(s, x, "opl-console__trigger"), s),
        H = (a = {}, babelHelpers.defineProperty(a, b, "u-hide--soft"), babelHelpers.defineProperty(a, m, "opl-section__content"), babelHelpers.defineProperty(a, g, "opl-section__content"), babelHelpers.defineProperty(a, x, "opl-console__content"), a),
        k = function(e) {
            babelHelpers.inherits(r, e);
            var n = p(r);

            function r(e) {
                var t;
                return babelHelpers.classCallCheck(this, r), (t = n.call(this, e)).id = e.id || "react-expander-" + window.expanderId++, t.triggerSelector = "." + c(t.id), t.contentSelector = "." + u(t.id), t.parentClass = h(t.id), t.newSections = 0, t
            }
            return babelHelpers.createClass(r, [{
                key: "newSectionCallback",
                value: function() {
                    this.newSections += 1
                }
            }, {
                key: "getChildContext",
                value: function() {
                    return d({
                        expanderId: this.id,
                        newSectionCallback: this.newSectionCallback.bind(this)
                    }, (0, o.pickProps)(this.props, ["toggleClassName", "headerClassName", "summaryClassName", "sectionClassName", "contentClassName", "variant"]))
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    0 < this.newSections && (OPL.UI.fire(OPL.UI.EVENTS.modules.expander.reinit, null, this.id), this.newSections = 0)
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    this.loadExpander()
                }
            }, {
                key: "loadExpander",
                value: function() {
                    var e = d({
                        triggerSelector: this.triggerSelector,
                        contentSelector: this.contentSelector,
                        parentClass: this.parentClass
                    }, (0, o.pickProps)(this.props, ["hideOtherElements", "scrollToSelected", "scrollToHash", "duration", "easing", "switchTrigger", "switchTriggerVal"]));
                    this.expanderPromise = (0, o.loadModule)(this.expander, {
                        path: "common/modules/opl-expander",
                        options: e
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var t = this;
                    return i.default.createElement("div", {
                        ref: function(e) {
                            return t.expander = e
                        },
                        className: this.props.className + " is-expanded",
                        id: this.id
                    }, this.props.children)
                }
            }, {
                key: "open",
                value: function(e) {
                    var t = this;
                    this.expanderPromise.then(function() {
                        OPL.UI.fire(OPL.UI.EVENTS.modules.expander.open, f(t.id, e), t.id)
                    })
                }
            }]), r
        }(i.Component);
    (e.Expander = k).propTypes = {
        id: t.default.string,
        variant: y,
        className: t.default.string,
        sectionClassName: t.default.string,
        toggleClassName: t.default.string,
        headerClassName: t.default.string,
        contentClassName: t.default.string,
        hideOtherElements: t.default.bool,
        scrollToSelected: t.default.bool,
        scrollToHash: t.default.bool,
        duration: t.default.number,
        easing: t.default.string
    }, k.defaultProps = {
        variant: b
    }, k.childContextTypes = {
        expanderId: t.default.string,
        sectionClassName: t.default.string,
        toggleClassName: t.default.string,
        headerClassName: t.default.string,
        summaryClassName: t.default.string,
        contentClassName: t.default.string,
        newSectionCallback: t.default.func,
        variant: y
    };
    var P = function(e) {
        babelHelpers.inherits(n, e);
        var t = p(n);

        function n() {
            return babelHelpers.classCallCheck(this, n), t.apply(this, arguments)
        }
        return babelHelpers.createClass(n, [{
            key: "render",
            value: function() {
                var e = [C[this.props.variant || this.context.variant], this.props.className || this.context.toggleClassName || ""].join(" ");
                return i.default.createElement("div", {
                    className: "l-col-small-11 " + e
                }, "arrow" === this.props.variant && this.props.header, i.default.createElement(w, babelHelpers.extends({
                    className: this.props.triggerClassName
                }, this.props), this.props.children))
            }
        }]), n
    }(i.Component);
    (e.Toggle = P).contextTypes = {
        toggleClassName: t.default.string,
        triggerClassName: t.default.string,
        variant: y
    };
    var w = function(e) {
        babelHelpers.inherits(n, e);
        var t = p(n);

        function n() {
            return babelHelpers.classCallCheck(this, n), t.apply(this, arguments)
        }
        return babelHelpers.createClass(n, [{
            key: "render",
            value: function() {
                var e = f(this.context.expanderId, this.context.sectionId),
                    t = [N[this.context.variant], c(this.context.expanderId), this.props.className || ""].join(" ");
                return i.default.createElement("a", {
                    href: "#",
                    id: e,
                    className: t + " " + !!this.props.expanded,
                    onClick: this.props.onClick,
                    "aria-expanded": !!this.props.expanded
                }, this.props.children)
            }
        }]), n
    }(i.Component);
    (e.Trigger = w).contextTypes = {
        expanderId: t.default.string,
        sectionId: t.default.string,
        variant: y
    };
    var I = function(e) {
        babelHelpers.inherits(n, e);
        var t = p(n);

        function n() {
            return babelHelpers.classCallCheck(this, n), t.apply(this, arguments)
        }
        return babelHelpers.createClass(n, [{
            key: "render",
            value: function() {
                var e = f(this.context.expanderId, this.context.sectionId),
                    t = [N[this.context.variant], c(this.context.expanderId), this.props.className || ""].join(" ");
                return i.default.createElement("a", {
                    href: "#",
                    id: e,
                    o: !0,
                    className: t + " " + !!this.props.expanded,
                    "aria-expanded": !!this.props.expanded,
                    onClick: this.expanderSectionClick.bind(this)
                }, this.props.children)
            }
        }, {
            key: "expanderSectionClick",
            value: function(e) {
                this.props.onClick(e), this.props.onExpand(this.props.listNo)
            }
        }]), n
    }(i.Component);
    (e.ConsentTrigger = I).contextTypes = {
        expanderId: t.default.string,
        sectionId: t.default.string,
        variant: y,
        onExpand: t.default.func,
        listNo: t.default.listNo
    }, I.defaultProps = {
        onExpand: function() {}
    };
    var O = [],
        S = function(e) {
            babelHelpers.inherits(a, e);
            var s = p(a);

            function a(e, t) {
                var n;
                babelHelpers.classCallCheck(this, a), n = s.call(this, e, t);
                var r = window.sectionId++;
                return n.id = e.id || "react--section-" + r, n.contentId = t.expanderId + "-section-" + r + "-content", n
            }
            return babelHelpers.createClass(a, [{
                key: "componentDidCatch",
                value: function() {}
            }, {
                key: "getChildContext",
                value: function() {
                    return {
                        sectionId: this.id,
                        variant: this.props.variant || this.context.variant
                    }
                }
            }, {
                key: "componentWillMount",
                value: function() {
                    this.setState({
                        expanded: !1
                    })
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    this.context.newSectionCallback(), O[this.id] = 0, this.setState({
                        styleObject: {}
                    })
                }
            }, {
                key: "componentWillUpdate",
                value: function(e) {
                    e.expanded != this.props.expanded && (e.expanded ? this.setState({
                        expanded: !0,
                        styleObject: {
                            display: "block"
                        }
                    }) : this.setState({
                        expanded: !1
                    }))
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this.props.expanded && $("#" + this.contentId).css("display", "block")
                }
            }, {
                key: "renderHeader",
                value: function() {
                    var e = "section_expander" === this.props.variant ? "section" : this.props.variant,
                        t = [(0, o.styleVariant)("opl-", e || this.context.variant, "__header"), this.props.headerClassName || this.context.headerClassName || "", this.props.triggerHeader && c(this.context.expanderId)].join(" ");
                    return this.props.header ? i.default.createElement("div", {
                        className: t
                    }, this.props.header) : i.default.createElement("div", {
                        className: t
                    }, i.default.createElement(P, babelHelpers.extends({
                        contentId: this.contentId,
                        className: this.props.toggleClassName
                    }, this.props), this.props.toggle))
                }
            }, {
                key: "defaultHeader",
                value: function(e) {
                    return e ? i.default.createElement("div", {
                        className: this.props.summaryClassName || this.context.summaryClassName || "",
                        "aria-expanded": "true"
                    }, this.renderHeader(), this.props.summary) : i.default.createElement("div", {
                        className: this.props.summaryClassName || this.context.summaryClassName || ""
                    }, this.renderHeader(), this.props.summary)
                }
            }, {
                key: "render",
                value: function() {
                    O[this.id] = parseInt(O[this.id]) + 1;
                    var e = this.props.variant || this.context.variant,
                        t = [v[e], h(this.context.expanderId), this.props.expanded ? " is-expanded " : "  ", this.props.className || this.context.sectionClassName || ""].join(" "),
                        n = [H[e], u(this.context.expanderId), this.props.contentClassName || this.context.contentClassName || ""].join(" "),
                        r = this.props.summary ? this.defaultHeader(this.state.expanded) : this.renderHeader();
                    return i.default.createElement("div", {
                        className: t
                    }, !this.props.headerBelow && r, i.default.createElement("div", {
                        id: this.contentId,
                        className: n,
                        style: this.props.styleObject
                    }, this.props.children), this.props.headerBelow && r)
                }
            }]), a
        }(i.Component);
    (e.Section = S).propTypes = {
        id: t.default.string,
        className: t.default.string,
        toggle: t.default.node,
        toggleClassName: t.default.string,
        header: t.default.node,
        headerClassName: t.default.string,
        summary: t.default.node,
        contentClassName: t.default.string,
        variant: y,
        triggerHeader: t.default.bool,
        headerBelow: t.default.bool,
        expanded: t.default.bool,
        styleObject: t.default.object
    }, S.defaultProps = {
        headerBelow: !1,
        expanded: !1,
        styleObject: {}
    }, S.childContextTypes = {
        sectionId: t.default.string,
        variant: y
    }, S.contextTypes = {
        expanderId: t.default.string,
        sectionClassName: t.default.string,
        toggleClassName: t.default.string,
        headerClassName: t.default.string,
        summaryClassName: t.default.string,
        contentClassName: t.default.string,
        newSectionCallback: t.default.func,
        variant: y
    }
});
//# sourceMappingURL=Expander.js.map