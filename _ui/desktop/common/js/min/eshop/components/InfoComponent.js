define(["exports", "react", "prop-types"], function(e, s, t) {
    "use strict";

    function r(l) {
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
    }), e.ConditionalInfoComponent = e.default = void 0, s = babelHelpers.interopRequireWildcard(s), t = babelHelpers.interopRequireDefault(t);
    var c = function(e) {
        babelHelpers.inherits(a, e);
        var o = r(a);

        function a() {
            var e;
            babelHelpers.classCallCheck(this, a);
            for (var t = arguments.length, r = new Array(t), l = 0; l < t; l++) r[l] = arguments[l];
            return e = o.call.apply(o, [this].concat(r)), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(e), "paddingClass", function(e) {
                return {
                    noPadding: "u-no-padding-l",
                    default: "u-padding-l"
                } [e.padding || "default"]
            }), e
        }
        return babelHelpers.createClass(a, [{
            key: "colorClass",
            value: function() {
                switch (this.props.color) {
                    case "black":
                        return " g-black1-c ";
                    case "grey":
                        return " g-gray5-c ";
                    case "blue":
                        return " g-blue3-c ";
                    default:
                        return ""
                }
            }
        }, {
            key: "bgColorClass",
            value: function() {
                switch (this.props.bgColor) {
                    case "none":
                        return "";
                    case "grey":
                        return "g-gray1-bg";
                    case "white":
                    default:
                        return " g-white1-bg "
                }
            }
        }, {
            key: "textColor",
            value: function() {
                switch (this.props.textColor) {
                    case "black":
                        return " g-black1-c ";
                    case "grey":
                    default:
                        return " g-gray6-c "
                }
            }
        }, {
            key: "render",
            value: function() {
                return "blueInfo" === this.props.type ? s.default.createElement("blockquote", {
                    className: "opl-blockquote g-bluef-bdrc u-box-shadow--s " + this.paddingClass(this.props)
                }, s.default.createElement("div", {
                    className: "opl-msg opl-msg--box opl-msg--info  " + this.colorClass() + this.bgColorClass()
                }, s.default.createElement("div", {
                    className: "o-icon-list"
                }, s.default.createElement("div", {
                    className: "o-icon-list__item"
                }), s.default.createElement("div", {
                    className: "o-icon-list__icon u-vertical-top u-padding-right"
                }, s.default.createElement("div", {
                    className: "g-icon g-icon--info g-icon--before g-icon--s g-bluef-c",
                    "aria-hidden": "true"
                })), s.default.createElement("div", {
                    className: "o-icon-list__text"
                }, s.default.createElement("h5", {
                    className: "u-no-margin"
                }, " ", this.props.title, " "), s.default.createElement("p", null, this.props.children))))) : s.default.createElement("div", {
                    className: "o-icon-text g-icon g-icon--info g-icon--before g-icon--xs-s u-padding-l u-padding-top-l " + this.colorClass() + this.bgColorClass()
                }, s.default.createElement("p", {
                    className: "o-icon-text__text " + this.textColor()
                }, this.props.children))
            }
        }]), a
    }(s.Component);
    (e.default = c).propTypes = {
        color: t.default.string,
        bgColor: t.default.string,
        title: t.default.string,
        type: t.default.string,
        padding: t.default.string,
        textColor: t.default.string
    }, c.defaultProps = {
        color: "black",
        bgColor: "white",
        textColor: "grey"
    };

    function l(e) {
        var t = e.condition,
            r = void 0 !== t && t,
            l = e.text,
            o = void 0 === l ? "" : l,
            a = e.altText,
            n = void 0 === a ? "" : a,
            i = babelHelpers.objectWithoutProperties(e, ["condition", "text", "altText"]);
        return s.default.createElement(c, i, r ? o : n)
    }(e.ConditionalInfoComponent = l).propTypes = {
        condition: t.default.bool,
        text: t.default.string,
        altText: t.default.string
    }
});
//# sourceMappingURL=InfoComponent.js.map