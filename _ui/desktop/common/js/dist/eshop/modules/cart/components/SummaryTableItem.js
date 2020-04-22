define(["exports", "react", "prop-types", "lodash"], function(_exports, _react, _propTypes, _lodash) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _lodash = babelHelpers.interopRequireDefault(_lodash);

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

    var SummaryTableItem = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(SummaryTableItem, _Component);

        var _super = _createSuper(SummaryTableItem);

        function SummaryTableItem() {
            babelHelpers.classCallCheck(this, SummaryTableItem);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(SummaryTableItem, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                if (this.props.tooltip) {
                    OPL.UI.loadModules(document.getElementById(this.props.id), [{
                        path: "core/modules/tooltips",
                        options: {
                            "mouseoverMinWidth": 0,
                            "triggerEvent": "mouseover"
                        }
                    }]);
                }
            }
        }, {
            key: "render",
            value: function render() {
                var textClass = "u-font-bold g-brand2-c u-no-margin";
                var hideElementOnMobile = " td-null";
                var monthlyPrice = this.props.monthlyPrice || this.props.monthlyPrice === 0 && !!this.props.monthFrom ? /*#__PURE__*/ _react.default.createElement("span", {
                    className: textClass
                }, this.props.monthlyPrice.toFixed(2).replace(".", ",") + " " + this.props.currency) : this.renderNoPrice("u-font-bold g-brand2-c"); // for 'oplata na start' show oneTimePriceWithDeposit

                var oneTimePriceCost = this.props.oneTimePrice && this.props.monthFrom === undefined && this.props.deposit != null ? this.getOneTimePriceWithDeposit() : this.props.oneTimePrice;
                var oneTimePrice = this.props.oneTimePrice ? /*#__PURE__*/ _react.default.createElement("span", {
                    className: textClass
                }, oneTimePriceCost) : this.renderNoPrice("u-font-bold g-brand2-c");
                return /*#__PURE__*/ _react.default.createElement("tr", {
                    id: this.props.id + "-summaryItem",
                    className: "u-small-padding-l u-small-no-margin-top u-border-bottom"
                }, /*#__PURE__*/ _react.default.createElement("th", {
                    id: this.props.id,
                    className: "u-w-auto u-small-padding-top-l u-no-padding-left"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-margin-right u-inline u-font-normal u-small-font-bold"
                }, this.props.header), this.props.tooltip && /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    "data-type": "no-click",
                    "data-tooltip-trigger-event": "mouseover",
                    className: "o-tooltip__trigger o-tooltip--top u-inline-block"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--hint g-icon--font g-icon--xs"
                })), this.props.tooltip && /*#__PURE__*/ _react.default.createElement("p", {
                    className: "o-tooltip__content"
                }, " ", this.props.tooltip)), /*#__PURE__*/ _react.default.createElement("td", {
                    "data-title": this.props.oneTimeHeader,
                    className: "second-last u-font-normal u-small-padding" + (this.props.oneTimePrice ? "" : hideElementOnMobile)
                }, oneTimePrice), /*#__PURE__*/ _react.default.createElement("td", {
                    "data-title": this.props.monthlyHeader,
                    className: "last u-font-normal  u-small-no-padding" + (this.props.monthlyPrice ? "" : hideElementOnMobile)
                }, monthlyPrice));
            }
        }, {
            key: "getOneTimePriceWithDeposit",
            value: function getOneTimePriceWithDeposit() {
                if (!this.props.deposit || !this.props.oneTimePrice) {
                    return this.props.oneTimePrice;
                }

                var oneTimePriceWithDotWithCurrency = this.props.oneTimePrice.toString().replace(",", ".");
                var oneTimePriceWithDot = oneTimePriceWithDotWithCurrency.replace("zł", "");
                var depositWithDot = this.props.deposit.toString().replace(",", ".");
                var oneTimePriceWithDotNumber = parseFloat(oneTimePriceWithDot);
                var depositWithDotNumber = parseFloat(depositWithDot);
                var result = (oneTimePriceWithDotNumber + depositWithDotNumber).toString().replace(".", ",");

                if (result.split(",").length === 1) {
                    return result + ",00 zł";
                } else {
                    return result + " zł";
                }
            }
        }, {
            key: "renderNoPrice",
            value: function renderNoPrice() {
                var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-inline"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: className,
                    "aria-hidden": "true"
                }, "\u2014"), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-hide"
                }, "brak"));
            }
        }]);
        return SummaryTableItem;
    }(_react.Component);

    _exports.default = SummaryTableItem;
    SummaryTableItem.propTypes = {
        header: _propTypes.default.string.isRequired,
        monthlyHeader: _propTypes.default.string.isRequired,
        oneTimeHeader: _propTypes.default.string.isRequired,
        monthlyPrice: _propTypes.default.number,
        oneTimePrice: _propTypes.default.string,
        highlighted: _propTypes.default.bool,
        tooltip: _propTypes.default.string,
        id: _propTypes.default.string
    };
    SummaryTableItem.defaultProps = {
        highlighted: false
    };
});
//# sourceMappingURL=SummaryTableItem.js.map