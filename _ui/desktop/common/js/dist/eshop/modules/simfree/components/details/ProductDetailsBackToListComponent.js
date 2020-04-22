define(["exports", "react", "react-redux", "../../../configurator/selectors/filters", "../../constants/OfferTypeEnum", "eshop/modules/configurator/selectors/metaData", "../../selectors", "../../../configurator/components/MarketContextCheckboxView"], function(_exports, _react, _reactRedux, _filters, _OfferTypeEnum, _metaData, _selectors, _MarketContextCheckboxView) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _OfferTypeEnum = babelHelpers.interopRequireDefault(_OfferTypeEnum);
    _MarketContextCheckboxView = babelHelpers.interopRequireDefault(_MarketContextCheckboxView);

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

    var ProductDetailsBackToListComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(ProductDetailsBackToListComponent, _Component);

        var _super = _createSuper(ProductDetailsBackToListComponent);

        function ProductDetailsBackToListComponent(props) {
            babelHelpers.classCallCheck(this, ProductDetailsBackToListComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(ProductDetailsBackToListComponent, [{
            key: "addFilterStateIfNeeded",
            value: function addFilterStateIfNeeded(returnLink) {
                var filterState = "";

                if (this.props.filterState !== null && this.props.filterState !== "" && this.props.filterState !== undefined) {
                    filterState = (returnLink.includes("?") ? "&" : "?") + this.props.filterState;
                }

                return filterState;
            }
        }, {
            key: "render",
            value: function render() {
                var returnLink = this.props.marketContextPrefixUrl + _metaData.getProductListUrl;

                if (this.props.isDuet) {
                    returnLink = returnLink + "?isDuet=true";
                }

                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-full-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row u-spacing-top-m"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-8 l-col-medium-12 l-col-small-12"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-left"
                }, this.props.selectedOfferType === _OfferTypeEnum.default.CONVERGENT ? /*#__PURE__*/ _react.default.createElement("a", {
                    href: "javascript:history.back()",
                    className: "u-text-decoration-none"
                }, this.props.linkName) : /*#__PURE__*/ _react.default.createElement("a", {
                    href: returnLink + this.addFilterStateIfNeeded(returnLink),
                    className: "u-text-decoration-none"
                }, this.props.linkName))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-4 l-col-medium-12 l-col-small-12 u-right "
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-right"
                }, /*#__PURE__*/ _react.default.createElement(_MarketContextCheckboxView.default, null))))));
            }
        }]);
        return ProductDetailsBackToListComponent;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            selectedOfferType: (0, _filters.getSelectedOfferType)(state),
            marketContextPrefixUrl: (0, _metaData.getMarketContextPrefixUrl)(state),
            isDuet: (0, _selectors.isDuet)(state)
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps)(ProductDetailsBackToListComponent);

    _exports.default = _default;
});
//# sourceMappingURL=ProductDetailsBackToListComponent.js.map