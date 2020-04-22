define(["exports", "react", "react-redux", "eshop/modules/cart/actions/cart", "eshop/modules/cart/selectors", "eshop/modules/configurator/selectors/filters"], function(_exports, _react, _reactRedux, _cart, _selectors, _filters) {
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

    var MarketContextCheckboxView = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(MarketContextCheckboxView, _React$Component);

        var _super = _createSuper(MarketContextCheckboxView);

        function MarketContextCheckboxView() {
            babelHelpers.classCallCheck(this, MarketContextCheckboxView);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(MarketContextCheckboxView, [{
            key: "isNet",
            value: function isNet(event) {
                event.preventDefault();
                event.stopPropagation();
                this.props.setPriceIsNet(true);
            }
        }, {
            key: "isGross",
            value: function isGross(event) {
                event.preventDefault();
                event.stopPropagation();
                this.props.setPriceIsNet(false);
            }
        }, {
            key: "render",
            value: function render() {
                console.log("MarketContextCheckboxView>>>>>>>>>>>>>>>>>>", this.props.showNet);

                if (!this.props.isB2B) {
                    return null;
                }

                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-switch-btn u-right u-small-spacing-top-m"
                }, /*#__PURE__*/ _react.default.createElement("input", {
                    className: "opl-switch-btn--left",
                    type: "radio",
                    id: "switch_left",
                    name: "switch",
                    value: "Op\u0142aty netto",
                    checked: this.props.showNet,
                    onChange: function onChange() {}
                }), /*#__PURE__*/ _react.default.createElement("label", {
                    htmlFor: "switch_left"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-switch-btn--text opl-switch-btn--text-l",
                    onClick: this.isNet.bind(this)
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-vertical-middle"
                }, "Op\u0142aty netto"))), /*#__PURE__*/ _react.default.createElement("input", {
                    className: "opl-switch-btn--right",
                    type: "radio",
                    id: "switch_right",
                    name: "switch",
                    value: "Op\u0142aty brutto",
                    checked: !this.props.showNet,
                    onChange: function onChange() {}
                }), /*#__PURE__*/ _react.default.createElement("label", {
                    htmlFor: "switch_right"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-switch-btn--text opl-switch-btn--text-r",
                    onClick: this.isGross.bind(this)
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-vertical-middle"
                }, "Op\u0142aty brutto"))), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-switch-btn--bg"
                }));
            }
        }]);
        return MarketContextCheckboxView;
    }(_react.default.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            showNet: (0, _selectors.getPriceIsNet)(state),
            isB2B: (0, _filters.getMarketContext)(state) === "B2B"
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            setPriceIsNet: function setPriceIsNet(on) {
                return dispatch((0, _cart.setPriceIsNet)(on));
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MarketContextCheckboxView);

    _exports.default = _default;
});
//# sourceMappingURL=MarketContextCheckboxView.js.map