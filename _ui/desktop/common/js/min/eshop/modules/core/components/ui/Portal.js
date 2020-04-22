define(["exports", "react", "prop-types", "react-dom"], function(e, n, t, o) {
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
    }), e.default = void 0, n = babelHelpers.interopRequireWildcard(n), t = babelHelpers.interopRequireDefault(t), o = babelHelpers.interopRequireDefault(o);
    var r = function(e) {
        babelHelpers.inherits(r, e);
        var t = l(r);

        function r() {
            return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
        }
        return babelHelpers.createClass(r, [{
            key: "componentDidMount",
            value: function() {
                this.renderPortal(this.props)
            }
        }, {
            key: "componentWillReceiveProps",
            value: function(e) {
                this.renderPortal(e)
            }
        }, {
            key: "getPortalProps",
            value: function(e) {
                return {
                    id: e.portalId,
                    className: e.portalClassName
                }
            }
        }, {
            key: "getDestinationProps",
            value: function(e) {
                e.portalId, e.portalClassName, e.getDestinationNode;
                return babelHelpers.objectWithoutProperties(e, ["portalId", "portalClassName", "getDestinationNode"])
            }
        }, {
            key: "render",
            value: function() {
                return n.default.createElement("div", babelHelpers.extends({
                    ref: "portal"
                }, this.getPortalProps(this.props)))
            }
        }, {
            key: "renderPortal",
            value: function(e) {
                var t = this.props.getDestinationNode() || this.getDestinationNode();
                this.node && t !== this.node && o.default.unmountComponentAtNode(this.node), this.node = t, o.default.render(n.default.createElement("div", babelHelpers.extends({
                    key: e.portalId
                }, this.getDestinationProps(e)), e.children), this.node)
            }
        }, {
            key: "getDestinationNode",
            value: function() {
                return this.refs.portal
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                o.default.unmountComponentAtNode(this.node)
            }
        }]), r
    }(n.Component);
    r.propTypes = {
        portalId: t.default.string,
        portalClassName: t.default.string,
        getDestinationNode: t.default.func
    }, r.defaultProps = {
        getDestinationNode: function() {
            return null
        }
    };
    var a = r;
    e.default = a
});
//# sourceMappingURL=Portal.js.map