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

    var switcherId = 0;

    var oplSwitcherModule = function oplSwitcherModule() {
        return {
            path: "core/modules/switcher",
            conditions: "element:{was seen}",
            options: {
                trigger: '.switcher-trigger',
                isSelectedClass: "is-selected"
            }
        };
    };

    var jsModules = function jsModules() {
        return [oplSwitcherModule()];
    };

    var OraSwitcher = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(OraSwitcher, _Component);

        var _super = _createSuper(OraSwitcher);

        function OraSwitcher(props) {
            var _this;

            babelHelpers.classCallCheck(this, OraSwitcher);
            _this = _super.call(this, props);
            _this.switcherRef = null;
            return _this;
        }

        babelHelpers.createClass(OraSwitcher, [{
            key: "componentWillMount",
            value: function componentWillMount() {
                var id = switcherId++;
                this.switcherId = "react-switcher-" + id;
                this.triggerId = "react-switcher-" + id + "-trigger";
                this.contentClass = "react-switcher-" + id + "-content";
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                OPL.UI.initModules(this.switcherRef, jsModules());
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                OPL.UI.stopModules(this.switcherRef);
            }
        }, {
            key: "closeModal",
            value: function closeModal() {
                if (!!this.props.onClose) {
                    this.props.onClose();
                }
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                return /*#__PURE__*/ _react.default.createElement("li", {
                    id: this.switcherId,
                    ref: function ref(_ref) {
                        return _this2.switcherRef = _ref;
                    },
                    className: this.props.className,
                    style: this.props.styleObject
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    onClick: this.props.onChangeHandler,
                    "data-value": this.props.dataValue,
                    "data-id": this.props.dataId,
                    "data-js-module": "core/modules/switcher",
                    "data-js-options": "{\"trigger\": \".switcher-trigger\"}",
                    className: (this.props.switcherClassName || " opl-switcher-list__item u-cursor-pointer") + (this.props.isSelected ? " is-selected" : "")
                }, this.props.children));
            }
        }]);
        return OraSwitcher;
    }(_react.Component);

    OraSwitcher.propTypes = {
        isSelected: _propTypes.default.bool,
        className: _propTypes.default.string
    };
    OraSwitcher.defaultProps = {};
    var _default = OraSwitcher;
    _exports.default = _default;
});
//# sourceMappingURL=OraSwitcher.js.map