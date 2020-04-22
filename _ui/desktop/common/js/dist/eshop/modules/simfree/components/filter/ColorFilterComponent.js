define(["exports", "react", "react-redux", "../../selectors", "eshop/modules/simfree/actions/filter"], function(_exports, _react, _reactRedux, _selectors, _filter) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);

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

    var ColorFilterComponent = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(ColorFilterComponent, _React$Component);

        var _super = _createSuper(ColorFilterComponent);

        function ColorFilterComponent(props) {
            babelHelpers.classCallCheck(this, ColorFilterComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(ColorFilterComponent, [{
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-separator u-spacing-l u-spacing-top"
                }), /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h4 u-spacing-l"
                }, "Kolory"), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-spacing-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-color-chooser"
                }, /*#__PURE__*/ _react.default.createElement("fieldset", null, /*#__PURE__*/ _react.default.createElement("legend", {
                    className: "u-acc-hide"
                }, "Kolor telefonu"), this._renderColors()))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-clear-both"
                }));
            }
        }, {
            key: "_renderColors",
            value: function _renderColors() {
                var _this = this;

                return this.props.filterConfiguration.colorFilter ? this.props.filterConfiguration.colorFilter.map(function(color) {
                    return /*#__PURE__*/ _react.default.createElement("label", {
                        className: "opl-color-chooser__item",
                        onClick: _this.props.setSelectedColor.bind(_this, color.code)
                    }, /*#__PURE__*/ _react.default.createElement("input", {
                        name: color.code,
                        type: "radio",
                        checked: color.code == _this.props.selectedColor
                    }), /*#__PURE__*/ _react.default.createElement("span", {
                        style: {
                            background: color.cssCode
                        },
                        className: "opl-color-chooser__color opl-color-chooser__color--magnum"
                    }), /*#__PURE__*/ _react.default.createElement("span", {
                        className: "opl-color-chooser__label"
                    }, color.name));
                }) : null;
            }
        }]);
        return ColorFilterComponent;
    }(_react.default.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            filterConfiguration: (0, _selectors.getFilterConfiguration)(state),
            selectedColor: (0, _selectors.getSelectedColor)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            setSelectedColor: function setSelectedColor(code) {
                return dispatch((0, _filter.setSelectedColor)(code));
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ColorFilterComponent);

    _exports.default = _default;
});
//# sourceMappingURL=ColorFilterComponent.js.map