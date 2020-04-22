define(["exports", "react", "react-redux"], function(_exports, _react, _reactRedux) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);

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

    var OraFullPageLoaderComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(OraFullPageLoaderComponent, _Component);

        var _super = _createSuper(OraFullPageLoaderComponent);

        function OraFullPageLoaderComponent() {
            babelHelpers.classCallCheck(this, OraFullPageLoaderComponent);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(OraFullPageLoaderComponent, [{
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    "data-js-module": "core/modules/loader"
                }, this.props.isShow && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-loader opl-body-loader",
                    style: {
                        display: "block",
                        opacity: 1
                    }
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-loader__cover opl-loader__cover-opacity-70 g-black1-bg"
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-loader__spinner"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-loader__animation-element-1"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-loader__animation-element-2"
                })))));
            }
        }]);
        return OraFullPageLoaderComponent;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {};
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {};
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(OraFullPageLoaderComponent);

    _exports.default = _default;
});
//# sourceMappingURL=OraFullPageLoaderComponent.js.map