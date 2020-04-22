define(["exports", "react", "prop-types"], function(e, i, t) {
    "use strict";

    function o(s) {
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
    }), e.default = void 0, i = babelHelpers.interopRequireWildcard(i), t = babelHelpers.interopRequireDefault(t);
    var n = 0,
        r = function(e) {
            babelHelpers.inherits(s, e);
            var r = o(s);

            function s(e) {
                var t;
                return babelHelpers.classCallCheck(this, s), (t = r.call(this, e)).switcherRef = null, t
            }
            return babelHelpers.createClass(s, [{
                key: "componentWillMount",
                value: function() {
                    var e = n++;
                    this.switcherId = "react-switcher-" + e, this.triggerId = "react-switcher-" + e + "-trigger", this.contentClass = "react-switcher-" + e + "-content"
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    OPL.UI.initModules(this.switcherRef, [{
                        path: "core/modules/switcher",
                        conditions: "element:{was seen}",
                        options: {
                            trigger: ".switcher-trigger",
                            isSelectedClass: "is-selected"
                        }
                    }])
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    OPL.UI.stopModules(this.switcherRef)
                }
            }, {
                key: "closeModal",
                value: function() {
                    this.props.onClose && this.props.onClose()
                }
            }, {
                key: "render",
                value: function() {
                    var t = this;
                    return i.default.createElement("li", {
                        id: this.switcherId,
                        ref: function(e) {
                            return t.switcherRef = e
                        },
                        className: this.props.className,
                        style: this.props.styleObject
                    }, i.default.createElement("div", {
                        onClick: this.props.onChangeHandler,
                        "data-value": this.props.dataValue,
                        "data-id": this.props.dataId,
                        "data-js-module": "core/modules/switcher",
                        "data-js-options": '{"trigger": ".switcher-trigger"}',
                        className: (this.props.switcherClassName || " opl-switcher-list__item u-cursor-pointer") + (this.props.isSelected ? " is-selected" : "")
                    }, this.props.children))
                }
            }]), s
        }(i.Component);
    r.propTypes = {
        isSelected: t.default.bool,
        className: t.default.string
    }, r.defaultProps = {};
    var s = r;
    e.default = s
});
//# sourceMappingURL=OraSwitcher.js.map