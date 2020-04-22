define(["exports", "react", "prop-types", "react-redux", "../selectors", "eshop/modules/configurator/actions/filters", "../actions/cart", "eshop/modules/configurator/selectors/filters", "../../configurator/components/MarketContextCheckboxView"], function(_exports, _react, _propTypes, _reactRedux, _selectors, _filters, _cart, _filters2, _MarketContextCheckboxView) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
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

    var CartHeader = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(CartHeader, _Component);

        var _super = _createSuper(CartHeader);

        function CartHeader() {
            babelHelpers.classCallCheck(this, CartHeader);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(CartHeader, [{
            key: "componentWillMount",
            value: function componentWillMount() {
                this.props.resetPropositionSimCount();
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement(CartHeaderView, this.props);
            }
        }]);
        return CartHeader;
    }(_react.Component);

    var CartHeaderView = function CartHeaderView(props) {
        var headerLabelHTML = {
            __html: props.headerLabel
        };
        var emptyCartLabelHTML = {
            __html: props.emptyCartLabel
        };
        var descriptionHTML = {
            __html: props.description
        };
        var netLabel = props.descriptions["netSwitchValue"] || "Opłaty netto";
        var grossLabel = props.descriptions["grossSwitchValue"] || "Opłaty brutto"; //props.resetPropositionSimCount();

        if (!props.hasMiniCartData) return null;

        if (props.entries !== undefined && props.entries != null && props.entries.length > 0) {
            return /*#__PURE__*/ _react.default.createElement(LFullRow, null, /*#__PURE__*/ _react.default.createElement(LPageRow, null, /*#__PURE__*/ _react.default.createElement("div", {
                className: "l-row"
            }, /*#__PURE__*/ _react.default.createElement("div", {
                className: "l-col l-col-small-12 l-col-medium-6 l-col-6"
            }, /*#__PURE__*/ _react.default.createElement("h2", {
                className: "h1 u-inline",
                dangerouslySetInnerHTML: headerLabelHTML
            })), (props.showNetSwitch || props.isB2B) && /*#__PURE__*/ _react.default.createElement("div", {
                className: "l-col l-col-small-12 l-col-medium-6 l-col-6"
            }, /*#__PURE__*/ _react.default.createElement(_MarketContextCheckboxView.default, null)))));
        } else {
            return /*#__PURE__*/ _react.default.createElement(LFullRow, null, /*#__PURE__*/ _react.default.createElement(LPageRow, null, /*#__PURE__*/ _react.default.createElement("h2", {
                className: "h1 u-inline",
                dangerouslySetInnerHTML: emptyCartLabelHTML
            }), /*#__PURE__*/ _react.default.createElement("p", {
                className: "u-padding-top-l",
                dangerouslySetInnerHTML: descriptionHTML
            })));
        }
    };

    CartHeader.propTypes = {
        emptyCartLabel: _propTypes.default.string,
        headerLabel: _propTypes.default.string.isRequired,
        description: _propTypes.default.string,
        entries: _propTypes.default.arrayOf(_propTypes.default.object),
        showNetSwitch: _propTypes.default.bool,
        resetPropositionSimCount: _propTypes.default.func
    };

    var LFullRow = function LFullRow(props) {
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-full-row " + (props.className || "")
        }, props.children);
    };

    LFullRow.propTypes = {
        className: _propTypes.default.string,
        children: _propTypes.default.element
    };

    var LPageRow = function LPageRow(props) {
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-page-row " + (props.className || "")
        }, props.children);
    };

    LPageRow.propTypes = {
        className: _propTypes.default.string,
        children: _propTypes.default.node
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            entries: (0, _selectors.getCartEntries)(state),
            hasMiniCartData: (0, _selectors.getHasMiniCartData)(state),
            showNetPrices: (0, _selectors.getPriceIsNet)(state),
            isB2B: (0, _filters2.getMarketContext)(state) === "B2B"
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            setPriceIsNet: function setPriceIsNet(showNet) {
                return dispatch((0, _cart.setPriceIsNet)(showNet));
            },
            resetPropositionSimCount: function resetPropositionSimCount() {
                dispatch((0, _filters.propositionListCountSet)(1));
                dispatch((0, _filters.clearPropositionListSoftBundleGroup)());
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CartHeader);

    _exports.default = _default;
});
//# sourceMappingURL=CartHeader.js.map