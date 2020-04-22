define(["exports", "react", "prop-types", "react-dom"], function(_exports, _react, _propTypes, _reactDom) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _reactDom = babelHelpers.interopRequireDefault(_reactDom);

    function _createSuper(Derived) {
        return function() {
            var Super = babelHelpers.getPrototypeOf(Derived),
                result;
            if (_isNativeReflectConstruct()) {
                var NewTarget = babelHelpers.getPrototypeOf(this).constructor;
                result = Reflect.construct(Super, arguments, NewTarget);
            } else {
                result = Super.apply(this, arguments);
            }
            return babelHelpers.possibleConstructorReturn(this, result);
        };
    }

    function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
            Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
            return true;
        } catch (e) {
            return false;
        }
    }

    var Portal = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(Portal, _Component);

        var _super = _createSuper(Portal);

        function Portal() {
            babelHelpers.classCallCheck(this, Portal);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(Portal, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                this.renderPortal(this.props);
            }
        }, {
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(props) {
                this.renderPortal(props);
            }
        }, {
            key: "getPortalProps",
            value: function getPortalProps(props) {
                var portalId = props.portalId,
                    portalClassName = props.portalClassName;
                return {
                    id: portalId,
                    className: portalClassName
                };
            }
        }, {
            key: "getDestinationProps",
            value: function getDestinationProps(props) {
                var portalId = props.portalId,
                    portalClassName = props.portalClassName,
                    getDestinationNode = props.getDestinationNode,
                    otherProps = babelHelpers.objectWithoutProperties(props, ["portalId", "portalClassName", "getDestinationNode"]);
                return otherProps;
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", babelHelpers.extends({
                    ref: "portal"
                }, this.getPortalProps(this.props)));
            }
        }, {
            key: "renderPortal",
            value: function renderPortal(props) {
                var node = this.props.getDestinationNode() || this.getDestinationNode();

                if (this.node && node !== this.node) {
                    _reactDom.default.unmountComponentAtNode(this.node);
                }

                this.node = node;

                _reactDom.default.render( /*#__PURE__*/ _react.default.createElement("div", babelHelpers.extends({
                    key: props.portalId
                }, this.getDestinationProps(props)), props.children), this.node);
            }
        }, {
            key: "getDestinationNode",
            value: function getDestinationNode() {
                return this.refs.portal;
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                _reactDom.default.unmountComponentAtNode(this.node);
            }
        }]);
        return Portal;
    }(_react.Component);

    Portal.propTypes = {
        portalId: _propTypes.default.string,
        portalClassName: _propTypes.default.string,
        getDestinationNode: _propTypes.default.func
    };
    Portal.defaultProps = {
        getDestinationNode: function getDestinationNode() {
            return null;
        }
    };
    var _default = Portal;
    _exports.default = _default;
});
//# sourceMappingURL=Portal.js.map