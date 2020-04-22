define(["exports", "react", "prop-types", "react-redux", "eshop/modules/core/components/ui/Modal"], function(e, o, t, r, a) {
    "use strict";

    function l(n) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(n);
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
    }), e.default = void 0, o = babelHelpers.interopRequireWildcard(o), a = babelHelpers.interopRequireDefault(a);
    var n = function(e) {
        babelHelpers.inherits(n, e);
        var r = l(n);

        function n(e) {
            var t;
            return babelHelpers.classCallCheck(this, n), (t = r.call(this, e)).onReady = t.onReady.bind(babelHelpers.assertThisInitialized(t)), t.state = {
                ready: !1
            }, t
        }
        return babelHelpers.createClass(n, [{
            key: "componentDidMount",
            value: function() {
                var t = this;
                OPL.UI.on("module.started", function(e) {
                    return t.onReady(e)
                })
            }
        }, {
            key: "onReady",
            value: function(e) {
                "react-modal-CartErrorModal-trigger" === e.element.id && this.setState({
                    ready: !0
                })
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props.errorCode,
                    t = null,
                    r = null;
                return e && (t = this.props.descriptions["cartError." + e + ".title"], r = this.props.descriptions["cartError." + e + ".description"], this.props.descriptions["cartError." + e + ".icon"]), o.default.createElement(a.default, {
                    id: "CartErrorModal",
                    key: "CartErrorModal",
                    open: !!e && this.state.ready,
                    openOnStart: "true",
                    size: "narrow"
                }, o.default.createElement("h2", {
                    className: "h3 u-margin-l opl-modal-title-space"
                }, t), o.default.createElement("div", null, o.default.createElement("p", null, r)))
            }
        }]), n
    }(o.Component);
    e.default = n
});
//# sourceMappingURL=CartErrorModal.js.map