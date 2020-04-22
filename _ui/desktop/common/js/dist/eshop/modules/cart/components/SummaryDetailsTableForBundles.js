define(["exports", "react", "react-redux", "prop-types", "../selectors", "eshop/modules/checkout/selectors", "lodash", "eshop/modules/core/components/ui/Expander", "./Utils"], function(_exports, _react, _reactRedux, _propTypes, _selectors, _selectors2, _lodash, _Expander, _Utils) {
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

    var SummaryDetailsTableForBundles = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(SummaryDetailsTableForBundles, _Component);

        var _super = _createSuper(SummaryDetailsTableForBundles);

        function SummaryDetailsTableForBundles() {
            babelHelpers.classCallCheck(this, SummaryDetailsTableForBundles);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(SummaryDetailsTableForBundles, [{
            key: "render",
            value: function render() {
                var _this = this;

                var title = this.computeTitle(this.props.entry.monthFrom, this.props.entry.monthTo);
                return /*#__PURE__*/ _react.default.createElement(_Expander.Section, {
                    header: this.getHeaderView(title, this.props.bundleNo),
                    variant: "section_expander",
                    headerClassName: "opl-section__header u-no-margin u-no-padding-left",
                    summaryClassName: "opl-section__border-bottom",
                    className: "opl-section--chevron-left u-no-margin-top u-large-no-padding-top u-medium-no-padding-top u-padding-left-l-xl u-small-padding-top-l ",
                    contentClassName: "u-small-padding-top-l"
                }, /*#__PURE__*/ _react.default.createElement("table", {
                    key: "details-table-bundle" + this.props.bundleNo,
                    className: "u-no-margin-t opl-table opl-conf-summary-table opl-table--50-50 u-no-border"
                }, /*#__PURE__*/ _react.default.createElement("caption", {
                    className: "u-acc-hide"
                }, title), /*#__PURE__*/ _react.default.createElement("thead", null, /*#__PURE__*/ _react.default.createElement("tr", {
                    className: "u-acc-hide"
                }, /*#__PURE__*/ _react.default.createElement("th", null), /*#__PURE__*/ _react.default.createElement("th", null), /*#__PURE__*/ _react.default.createElement("th", {
                    className: "second-last u-font-normal"
                }, this.props.oneTimeHeader), /*#__PURE__*/ _react.default.createElement("th", {
                    className: "last u-font-normal"
                }, this.props.monthlyHeader))), /*#__PURE__*/ _react.default.createElement("tbody", null, this.props.prices.map(function(price, bundleNo) {
                    return _this.prepareTableRow(price, bundleNo);
                }))));
            }
        }, {
            key: "getHeaderView",
            value: function getHeaderView(title, bundleNo) {
                return [this.getSummaryView(title, bundleNo), /*#__PURE__*/ _react.default.createElement(_Expander.Trigger, {
                    key: "Nested-trigger-bundle-" + bundleNo,
                    className: "g-brand2-c"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-section__text-show"
                }, "rozwi\u0144"), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-section__text-hide"
                }, "zwi\u0144")), /*#__PURE__*/ _react.default.createElement("div", {
                    key: "Nested-bundle-" + bundleNo,
                    id: this.props.id
                })];
            }
        }, {
            key: "getSummaryView",
            value: function getSummaryView(title, bundleNo) {
                var textClass = "u-font-bold g-brand2-c u-no-margin";
                var monthlyPrice = this.props.entry.monthlyPrice ? /*#__PURE__*/ _react.default.createElement("span", {
                    className: textClass
                }, this.formatPrice(this.props.entry.monthlyPrice, this.props.entry.currency)) : this.renderNoPrice("g-brand2-c u-no-margin");
                var oneTimePrice = this.props.entry.oneTimePrice ? /*#__PURE__*/ _react.default.createElement("span", {
                    className: textClass
                }, this.props.entry.oneTimePrice) : this.renderNoPrice("g-brand2-c u-no-margin");
                return /*#__PURE__*/ _react.default.createElement("table", {
                    id: "SummaryView-bundleNo-" + bundleNo,
                    key: "table-bundle-" + bundleNo,
                    className: "opl-table opl-conf-summary-table opl-table--50-50 u-no-margin-t no-padding-top"
                }, /*#__PURE__*/ _react.default.createElement("thead", null, /*#__PURE__*/ _react.default.createElement("tr", {
                    className: "u-acc-hide"
                }, /*#__PURE__*/ _react.default.createElement("th", null), /*#__PURE__*/ _react.default.createElement("th", null), /*#__PURE__*/ _react.default.createElement("th", {
                    className: "second-last u-font-normal u-small-hide"
                }, this.props.oneTimeHeader), /*#__PURE__*/ _react.default.createElement("th", {
                    className: "last u-font-normal u-small-hide"
                }, this.props.monthlyHeader))), /*#__PURE__*/ _react.default.createElement("tbody", null, /*#__PURE__*/ _react.default.createElement("tr", {
                    className: "u-small-no-padding"
                }, /*#__PURE__*/ _react.default.createElement("th", {
                    className: "u-w-auto u-no-border u-padding-left-l-xl u-no-padding-top u-padding-l"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-margin-right u-inline-block u-font-bold g-brand2-c"
                }, title)), /*#__PURE__*/ _react.default.createElement("td", {
                    "data-title": this.props.oneTimeHeader,
                    className: "second-last g-brand2-c u-no-border u-no-padding-top u-padding-l u-padding-right-l"
                }, oneTimePrice), /*#__PURE__*/ _react.default.createElement("td", {
                    "data-title": this.props.monthlyHeader,
                    className: "last g-brand2-c u-no-border u-no-padding-top u-padding-l"
                }, monthlyPrice))));
            }
        }, {
            key: "isInPeriod",
            value: function isInPeriod(monthFrom, monthTo) {
                return monthFrom <= this.props.entry.monthFrom && (monthTo === null || this.props.entry.monthTo !== null && monthTo >= this.props.entry.monthTo);
            }
        }, {
            key: "formatPrice",
            value: function formatPrice(monthlyPrice, currency) {
                var finalPrice = monthlyPrice;
                return finalPrice.toFixed(2).replace(".", ",") + " " + currency;
            }
        }, {
            key: "prepareTableRow",
            value: function prepareTableRow(price, bundleNo) {
                var textClass = "u-font-bold u-no-margin";

                if (!price.monthlyPrice && !price.oneTimeCost) {
                    return;
                }

                var monthlyPrice = price.monthlyPrice ? /*#__PURE__*/ _react.default.createElement("span", {
                    className: textClass
                }, price.monthlyPrice) : this.renderNoPrice();
                var oneTimePrice = price.oneTimeCost ? /*#__PURE__*/ _react.default.createElement("span", {
                    className: textClass
                }, price.oneTimeCost.replace(".", ",")) : this.renderNoPrice();
                return /*#__PURE__*/ _react.default.createElement("tr", {
                    key: "price" + bundleNo,
                    className: "u-border-bottom u-no-border-t"
                }, /*#__PURE__*/ _react.default.createElement("th", {
                    className: "u-no-border u-small-no-padding u-w-auto u-font-normal u-medium-padding-left-l-xl u-large-padding-left-l-xl u-vertical-middle"
                }, price.description), /*#__PURE__*/ _react.default.createElement("td", {
                    "data-title": this.props.oneTimeHeader,
                    className: "second-last u-no-border u-font-normal u-small-padding-top-l u-padding-right-l u-vertical-middle"
                }, oneTimePrice), /*#__PURE__*/ _react.default.createElement("td", {
                    "data-title": this.props.monthlyHeader,
                    className: "last u-no-border u-font-normal u-small-padding-top-l u-vertical-middle"
                }, monthlyPrice));
            }
        }, {
            key: "prepareBonusRow",
            value: function prepareBonusRow(bonus, bundleNo) {
                var price = bonus.priceSet ? bonus.priceSet : bonus.priceModification;

                var monthlyPrice = /*#__PURE__*/ _react.default.createElement("span", {
                    className: "h5 u-no-margin u-font-normal"
                }, "-" + price.toFixed(2).replace(".", ",") + " " + this.props.entry.currency);

                var oneTimePrice = /*#__PURE__*/ _react.default.createElement("span", {
                    "aria-label": "brak"
                }, "\u2014");

                return /*#__PURE__*/ _react.default.createElement("tr", {
                    key: "bonus" + bundleNo,
                    className: "u-border-bottom u-small-padding u-small-no-margin u-no-border-t"
                }, /*#__PURE__*/ _react.default.createElement("th", {
                    className: "u-no-border u-small-padding-top u-small-padding u-w-auto u-no-padding-left"
                }, bonus.title), /*#__PURE__*/ _react.default.createElement("td", {
                    "data-title": this.props.oneTimeHeader,
                    className: "second-last u-no-border u-font-normal u-small-padding-top"
                }, oneTimePrice), /*#__PURE__*/ _react.default.createElement("td", {
                    "data-title": this.props.monthlyHeader,
                    className: "second-last u-no-border u-font-normal u-small-padding-top"
                }, monthlyPrice));
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                if (!this.props.entry.monthFrom && !this.props.entry.monthTo || this.props.entry.monthFrom === 1 && this.props.entry.monthTo === 1) {
                    OPL.UI.loadModules(document.getElementById(this.props.id), [{
                        path: 'core/modules/tooltips',
                        options: {
                            "mouseoverMinWidth": 0,
                            "triggerEvent": "mouseover"
                        }
                    }]);
                }
            }
        }, {
            key: "computeTitle",
            value: function computeTitle(from, to) {
                if (!from && !to) {
                    return this.props.checkoutPriceText;
                } else if (from === 1 && to === 1 || !from && to === 1) {
                    return this.props.firstMonthPriceText || "W " + (0, _Utils.maleOrdinal)(1) + " miesiącu";
                } else if (from === to) {
                    return "W " + (0, _Utils.maleOrdinal)(from) + " miesiącu";
                } else {
                    return "Od " + from + (to ? " do " + to : "") + " miesiąca";
                }
            }
        }, {
            key: "computeTooltip",
            value: function computeTooltip(from, to) {
                if (!from && !to) {
                    return this.props.checkoutPriceTooltipContent;
                } else if (from === 1 && to === 1) {
                    return this.props.firstMonthPriceTooltipContent;
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
        return SummaryDetailsTableForBundles;
    }(_react.Component);

    SummaryDetailsTableForBundles.propTypes = {
        monthlyHeader: _propTypes.default.string.isRequired,
        oneTimeHeader: _propTypes.default.string.isRequired,
        checkoutPriceText: _propTypes.default.string,
        firstMonthPriceText: _propTypes.default.string,
        id: _propTypes.default.string,
        checkoutPriceTooltipContent: _propTypes.default.string,
        firstMonthPriceTooltipContent: _propTypes.default.string
    };
    SummaryDetailsTableForBundles.defaultProps = {
        checkoutPriceText: 'Opłata na start',
        firstMonthPriceText: "W pierwszym miesiącu",
        highlighted: false
    };

    var mapStateToProps = function mapStateToProps() {
        var getPricesForPeriod = (0, _selectors.getPricesForPeriodSelectorForBundles)();
        return function(state, props) {
            return {
                prices: getPricesForPeriod(state, props),
                bonusConsents: (0, _selectors2.getConsentsWithBonuses)(state)
            };
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps)(SummaryDetailsTableForBundles);

    _exports.default = _default;
});
//# sourceMappingURL=SummaryDetailsTableForBundles.js.map