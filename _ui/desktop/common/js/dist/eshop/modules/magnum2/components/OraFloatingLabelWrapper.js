define(["exports", "react", "prop-types"], function(_exports, _react, _propTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);

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

    var floatingLabelId = 0;

    var OraFloatingLabelWrapper = /*#__PURE__*/ function(_PureComponent) {
        babelHelpers.inherits(OraFloatingLabelWrapper, _PureComponent);

        var _super = _createSuper(OraFloatingLabelWrapper);

        function OraFloatingLabelWrapper() {
            var _this;

            babelHelpers.classCallCheck(this, OraFloatingLabelWrapper);

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            _this = _super.call.apply(_super, [this].concat(args));
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "state", {
                floatingLabelId: floatingLabelId++
            });
            return _this;
        }

        babelHelpers.createClass(OraFloatingLabelWrapper, [{
            key: "componentDidMount",
            value: function componentDidMount() { //     this.loadModule();
            }
        }, {
            key: "loadModule",
            value: function loadModule() {
                OPL.UI.loadModules(this.refs.wrapperRef, [{
                    path: "core/modules/floating-label"
                }]);
            }
        }, {
            key: "render",
            value: function render() {
                var _this$props = this.props,
                    className = _this$props.className,
                    overrideClass = _this$props.overrideClass,
                    autoComplete = _this$props.autoComplete,
                    maximumWidth = _this$props.maximumWidth,
                    children = _this$props.children;
                var classList = overrideClass || "o-floating-label opl-floating-label-line opl-floating-label-line--white";

                if (className) {
                    classList += " " + className;
                }

                if (autoComplete) {
                    classList += " opl-autocomplete";
                }

                if (maximumWidth) {
                    classList += " u-w-100";
                }

                return /*#__PURE__*/ _react.default.createElement("div", {
                    ref: "wrapperRef",
                    id: "floating-label-wrapper-" + this.state.floatingLabelId,
                    className: classList
                }, children);
            }
        }]);
        return OraFloatingLabelWrapper;
    }(_react.PureComponent);

    babelHelpers.defineProperty(OraFloatingLabelWrapper, "propTypes", {
        className: _propTypes.default.string,
        autoComplete: _propTypes.default.bool,
        maximumWidth: _propTypes.default.bool,
        children: _propTypes.default.any,
        overrideClass: _propTypes.default.string
    });
    babelHelpers.defineProperty(OraFloatingLabelWrapper, "defaultProps", {
        autoComplete: false,
        maximumWidth: false
    });
    var _default = OraFloatingLabelWrapper;
    _exports.default = _default;
});
//# sourceMappingURL=OraFloatingLabelWrapper.js.map