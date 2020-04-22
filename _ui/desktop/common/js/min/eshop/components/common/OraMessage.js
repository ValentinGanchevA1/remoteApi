define(["exports", "react", "prop-types", "../../modules/core/utils/ui", "./OraLoader"], function(e, l, t, s, o) {
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
                var r = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, r)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, l = babelHelpers.interopRequireWildcard(l), t = babelHelpers.interopRequireDefault(t);
    var r = function(e) {
        babelHelpers.inherits(r, e);
        var t = n(r);

        function r() {
            return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
        }
        return babelHelpers.createClass(r, [{
            key: "getRole",
            value: function() {
                return this.props.role || (0 <= ["warn", "error"].indexOf(this.props.type) ? "alert" : null)
            }
        }, {
            key: "getLive",
            value: function() {
                if (this.props.live) return this.props.live;
                switch (this.props.type) {
                    case "info":
                        return s.ARIA.POLITE;
                    case "warn":
                        return s.ARIA.ASSERTIVE;
                    case "error":
                        return s.ARIA.RUDE;
                    default:
                        return s.ARIA.ASSERTIVE
                }
            }
        }, {
            key: "getClassName",
            value: function() {
                return "opl-msg" + (0, s.styleVariant)(" opl-msg--", this.props.variant) + (0, s.styleVariant)(" opl-msg--", this.props.type) + (0, s.styleVariant)(" ", this.props.className)
            }
        }, {
            key: "getIconAttr",
            value: function(e) {
                return "g-icon--" + e
            }
        }, {
            key: "isShow",
            value: function() {
                return this.props.text || this.props.title || 0 < l.default.Children.count(this.props.children)
            }
        }, {
            key: "render",
            value: function() {
                return this.isShow() ? l.default.createElement("div", {
                    className: this.getClassName(),
                    "aria-live": this.getLive()
                }, "progress" === this.props.type ? l.default.createElement("div", {
                    className: "l-row"
                }, l.default.createElement("div", {
                    className: "l-col l-col-1 u-padding-m-top u-padding-m"
                }, l.default.createElement("span", null, " ", l.default.createElement(o.OraParentLoader, {
                    size: "s",
                    loading: !0
                }))), l.default.createElement("div", {
                    className: "l-col l-col-11  "
                }, this.props.text ? l.default.createElement("p", {
                    role: this.getRole(),
                    className: (this.props.icon ? " o-icon-text__text" : " ") + (this.props.fontBold ? " u-font-bold" : "") + "u-padding-top-s"
                }, " ", this.props.text) : null)) : this.props.icon ? l.default.createElement("div", {
                    className: "o-icon-text g-icon g-icon--before " + this.getIconAttr(this.props.iconSize) + " " + this.getIconAttr(this.props.iconType)
                }, this.props.title ? l.default.createElement("div", {
                    className: "opl-msg__header"
                }, this.props.title) : null, this.props.text ? l.default.createElement("p", {
                    role: this.getRole(),
                    className: (this.props.icon ? " o-icon-text__text" : " ") + (this.props.fontBold ? " u-font-bold" : "") + "u-margin-left"
                }, this.props.text) : null, this.props.children) : l.default.createElement("div", null, this.props.title ? l.default.createElement("div", {
                    className: "opl-msg__header"
                }, this.props.title) : null, this.props.text ? l.default.createElement("p", {
                    role: this.getRole(),
                    className: (this.props.icon ? " o-icon-text__text" : " ") + (this.props.fontBold ? " u-font-bold" : "") + "u-margin-left"
                }, this.props.text) : null, this.props.children)) : null
            }
        }]), r
    }(l.Component);
    r.propTypes = {
        title: t.default.string,
        text: t.default.string,
        variant: t.default.oneOf(["context", "box"]),
        type: t.default.oneOf(["info", "warn", "error", "progress"]),
        className: t.default.string,
        role: t.default.string,
        live: t.default.oneOf(s.ARIA_LIVE_OPTIONS),
        icon: t.default.bool,
        fontBold: t.default.bool,
        iconSize: t.default.oneOf(["xxs", "xs", "xs-s", "s", "l", "xl", "xxl"]),
        iconType: t.default.string,
        children: t.default.any
    }, r.defaultProps = {
        className: "",
        variant: "context",
        type: "info",
        icon: !1,
        fontBold: !1,
        iconSize: "s",
        iconType: "info"
    };
    var i = r;
    e.default = i
});
//# sourceMappingURL=OraMessage.js.map