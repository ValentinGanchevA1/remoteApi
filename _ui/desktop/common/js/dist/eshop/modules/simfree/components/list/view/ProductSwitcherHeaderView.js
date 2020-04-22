define(["exports", "react", "react-redux", "eshop/modules/core/components/ui/OraSwitcherSelect", "eshop/modules/configurator/selectors/filters", "eshop/modules/cart/selectors"], function(_exports, _react, _reactRedux, _OraSwitcherSelect, _filters, _selectors) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _OraSwitcherSelect = babelHelpers.interopRequireDefault(_OraSwitcherSelect);

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

    var ProductSwitcherHeaderView = /*#__PURE__*/ function(_React$PureComponent) {
        babelHelpers.inherits(ProductSwitcherHeaderView, _React$PureComponent);

        var _super = _createSuper(ProductSwitcherHeaderView);

        function ProductSwitcherHeaderView() {
            babelHelpers.classCallCheck(this, ProductSwitcherHeaderView);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(ProductSwitcherHeaderView, [{
            key: "onChange",
            value: function onChange(e) {
                this.props.onChange(e.value);
            }
        }, {
            key: "render",
            value: function render() {
                if (this.props.isB2B && !this.props.isCartMobile && this.props.channels.sales === "WWW") {
                    return null;
                }

                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-full-row g-gray1-bg"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row u-padding-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row "
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12  u-padding-top-s u-padding-m"
                }, /*#__PURE__*/ _react.default.createElement(_OraSwitcherSelect.default, {
                    options: this.props.options,
                    id: "offerTypeFilter",
                    selected: this.props.selectedOfferType,
                    onChange: this.onChange.bind(this),
                    className: " u-small-left u-left u-w-100 u-small-w-auto u-medium-w-100 u-small-w-100",
                    selectClassName: "opl-input--size-m",
                    singleOptionClassName: "u-small-no-padding-left"
                })))));
            }
        }]);
        return ProductSwitcherHeaderView;
    }(_react.default.PureComponent);

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {};
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            isCartMobile: (0, _selectors.isCartMobile)(state),
            isB2B: (0, _filters.getMarketContext)(state) === "B2B"
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ProductSwitcherHeaderView);

    _exports.default = _default;
});
//# sourceMappingURL=ProductSwitcherHeaderView.js.map