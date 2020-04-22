define(["exports", "react", "prop-types"], function(_exports, _react, _propTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
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

    var OraStockLevelStatusComponent = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(OraStockLevelStatusComponent, _React$Component);

        var _super = _createSuper(OraStockLevelStatusComponent);

        function OraStockLevelStatusComponent(props) {
            babelHelpers.classCallCheck(this, OraStockLevelStatusComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(OraStockLevelStatusComponent, [{
            key: "render",
            value: function render() {
                if (this.props.shouldStockLevelBeVisible) {
                    return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("p", null, "Dostępnych sztuk: " + this.props.stockLevel), /*#__PURE__*/ _react.default.createElement("p", null, "Stan na " + this.props.stockLevelDate));
                } else {
                    return null;
                }
            }
        }], [{
            key: "isAvailableInStock",
            value: function isAvailableInStock(stockLevelStatus) {
                return !stockLevelStatus || stockLevelStatus.code != OraStockLevelStatusComponent.OUT_OF_STOCK;
            }
        }, {
            key: "getStockLevelOrder",
            value: function getStockLevelOrder(stockLevel, shouldStockLevelBeSorted) {
                if (!shouldStockLevelBeSorted || stockLevel == null) {
                    return 0;
                } else {
                    return stockLevel;
                }
            }
        }, {
            key: "getStockCssClass",
            value: function getStockCssClass(stockLevelStatus) {
                return OraStockLevelStatusComponent.isAvailableInStock(stockLevelStatus) ? "" : "g-redf-c";
            }
        }]);
        return OraStockLevelStatusComponent;
    }(_react.default.Component);

    _exports.default = OraStockLevelStatusComponent;
    OraStockLevelStatusComponent.OUT_OF_STOCK = "outOfStock";
    OraStockLevelStatusComponent.LOW_STOCK = "lowStock";
    OraStockLevelStatusComponent.IN_STOCK = "inStock";
    OraStockLevelStatusComponent.propTypes = {
        stockLevelStatus: _propTypes.default.shape({
            code: _propTypes.default.string,
            type: _propTypes.default.string
        }),
        stockLevel: _propTypes.default.number,
        stockLevelDate: _propTypes.default.string,
        shouldStockLevelBeVisible: _propTypes.default.bool
    };
    OraStockLevelStatusComponent.defaultProps = {
        stockLevelStatus: null,
        stockLevel: null,
        stockLevelDate: null,
        shouldStockLevelBeVisible: false
    };
});
//# sourceMappingURL=OraStockLevelStatusComponent.js.map