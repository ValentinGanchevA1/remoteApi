define(["exports", "react", "./SummaryTable", "./SummaryTableHeader", "./SummaryDetails", "./SummaryDetailsForBundles", "./Utils", "eshop/components/OraCommonComponents"], function(_exports, _react, _SummaryTable, _SummaryTableHeader, _SummaryDetails, _SummaryDetailsForBundles, _Utils, _OraCommonComponents) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _SummaryTable = babelHelpers.interopRequireDefault(_SummaryTable);
    _SummaryDetails = babelHelpers.interopRequireDefault(_SummaryDetails);
    _SummaryDetailsForBundles = babelHelpers.interopRequireDefault(_SummaryDetailsForBundles);

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

    var MulticartSummaryComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MulticartSummaryComponent, _Component);

        var _super = _createSuper(MulticartSummaryComponent);

        function MulticartSummaryComponent() {
            babelHelpers.classCallCheck(this, MulticartSummaryComponent);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(MulticartSummaryComponent, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                this.props.fetchCart();
                this.props.fetchMiniCart();
            }
        }, {
            key: "getProps",
            value: function getProps() {
                return {
                    monthlyHeader: this.props.descriptions.monthlyHeader,
                    oneTimeHeader: this.props.descriptions.oneTimeHeader,
                    checkoutPriceTooltipContent: this.props.descriptions.checkoutPriceTooltipContent || "płatność przy odbiorze przesyłki",
                    firstMonthPriceTooltipContent: this.props.descriptions.firstMonthPriceTooltipContent || "płatności uwzględnione w pierwszej fakturze",
                    entryType: this.props.entryType,
                    parentCmp: this.props.component + "-summaryTableHeader"
                };
            }
        }, {
            key: "render",
            value: function render() {
                if (!this.props.hasCartData) return null;
                return /*#__PURE__*/ _react.default.createElement(_Utils.HideWhenCartIsEmpty, {
                    className: "l-full-row l-page-row g-white1-bg u-small-padding-top-l u-padding-l-xl"
                }, /*#__PURE__*/ _react.default.createElement("table", {
                    role: "presentation",
                    className: "u-no-margin-t opl-table opl-conf-summary-table opl-table--50-50 u-no-border"
                }, /*#__PURE__*/ _react.default.createElement(_SummaryTableHeader.SummaryTableHeader, babelHelpers.extends({
                    title: this.props.descriptions.title
                }, this.getProps())), /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraLoader, {
                    loading: this.props.updating,
                    parentId: "summary-loader"
                }, /*#__PURE__*/ _react.default.createElement(SummaryTableAndDetails, babelHelpers.extends({}, this.props, {
                    getProps: this.getProps()
                })))));
            }
        }]);
        return MulticartSummaryComponent;
    }(_react.Component);

    _exports.default = MulticartSummaryComponent;

    var SummaryTableAndDetails = /*#__PURE__*/ function(_Component2) {
        babelHelpers.inherits(SummaryTableAndDetails, _Component2);

        var _super2 = _createSuper(SummaryTableAndDetails);

        function SummaryTableAndDetails() {
            babelHelpers.classCallCheck(this, SummaryTableAndDetails);
            return _super2.apply(this, arguments);
        }

        babelHelpers.createClass(SummaryTableAndDetails, [{
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    id: "SummaryTableAndDetails"
                }, /*#__PURE__*/ _react.default.createElement(_SummaryTable.default, babelHelpers.extends({
                    title: this.props.descriptions.title,
                    id: this.props.component + "-table",
                    renderHeader: false
                }, this.props.getProps)), this.props.showNewSummaryDetails ? /*#__PURE__*/ _react.default.createElement(_SummaryDetailsForBundles.default, babelHelpers.extends({
                    rootComponent: this.props.component,
                    id: this.props.component + "-details",
                    title: "Szczeg\xF3\u0142y op\u0142at"
                }, this.props.getProps)) : /*#__PURE__*/ _react.default.createElement(_SummaryDetails.default, babelHelpers.extends({
                    rootComponent: this.props.component,
                    id: this.props.component + "-details",
                    title: "Szczeg\xF3\u0142y op\u0142at"
                }, this.props.getProps)));
            }
        }]);
        return SummaryTableAndDetails;
    }(_react.Component);
});
//# sourceMappingURL=MulticartSummaryComponent.js.map