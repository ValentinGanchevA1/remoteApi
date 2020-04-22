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

    var SummaryDetailsTable = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(SummaryDetailsTable, _Component);

        var _super = _createSuper(SummaryDetailsTable);

        function SummaryDetailsTable() {
            babelHelpers.classCallCheck(this, SummaryDetailsTable);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(SummaryDetailsTable, [{
            key: "render",
            value: function render() {
                var _this = this;

                var title = this.computeTitle(this.props.entry.monthFrom, this.props.entry.monthTo);
                return /*#__PURE__*/ _react.default.createElement(_Expander.Section, {
                    header: this.getHeaderView(title),
                    variant: "section",
                    headerClassName: "opl-section__header--with-summary u-small-no-padding u-no-border u-padding-left-l-xl",
                    summaryClassName: "opl-section__border-bottom",
                    summary: this.getSummaryView(title),
                    className: this.props.className
                }, /*#__PURE__*/ _react.default.createElement("table", {
                    className: "u-no-margin-t opl-table opl-conf-summary-table opl-table--50-50 opl-table--no-border-top"
                }, /*#__PURE__*/ _react.default.createElement("caption", {
                    className: "u-acc-hide"
                }, title), /*#__PURE__*/ _react.default.createElement("thead", {
                    className: "u-acc-hide"
                }, /*#__PURE__*/ _react.default.createElement("tr", null, /*#__PURE__*/ _react.default.createElement("th", null), /*#__PURE__*/ _react.default.createElement("th", null), /*#__PURE__*/ _react.default.createElement("th", null, this.props.oneTimeHeader), /*#__PURE__*/ _react.default.createElement("th", null, this.props.monthlyHeader))), /*#__PURE__*/ _react.default.createElement("tbody", null, this.props.prices.map(function(price, index) {
                    return _this.prepareTableRow(price, index);
                }))));
            }
        }, {
            key: "getHeaderView",
            value: function getHeaderView(title) {
                var tooltip = this.computeTooltip(this.props.entry.monthFrom, this.props.entry.monthTo);
                var tooltipStyle = {
                    position: 'relative',
                    zIndex: 1
                };
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    id: this.props.id,
                    className: "l-col l-col-12"
                }, /*#__PURE__*/ _react.default.createElement("h3", {
                    className: "h5 g-brand2-c opl-section__heading u-inline u-margin-right"
                }, title), tooltip ? /*#__PURE__*/ _react.default.createElement("span", {
                    "data-type": "no-click",
                    "data-tooltip-trigger-event": "mouseover",
                    className: "g-icon g-icon--hint g-icon--font g-icon--xs g-brand2-c o-tooltip__trigger u-inline-block",
                    style: tooltipStyle
                }) : '', tooltip ? /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-tooltip__content"
                }, tooltip) : '', /*#__PURE__*/ _react.default.createElement(_Expander.Trigger, {
                    className: "g-brand2-c"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-section__text-show"
                }, "rozwi\u0144"), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-section__text-hide"
                }, "zwi\u0144"))));
            }
        }, {
            key: "getSummaryView",
            value: function getSummaryView(title) {
                var hideElementOnMobile = " td-null";
                var textClass = "h5 g-brand2-c u-no-margin";
                var monthlyPrice = this.props.entry.monthlyPrice ? /*#__PURE__*/ _react.default.createElement("span", {
                    className: textClass
                }, this.formatPrice(this.props.entry.monthlyPrice, this.props.entry.currency)) : /*#__PURE__*/ _react.default.createElement("span", null, "\u2014");
                var oneTimePrice = this.props.entry.oneTimePrice ? /*#__PURE__*/ _react.default.createElement("span", {
                    className: textClass
                }, this.props.entry.oneTimePrice) : /*#__PURE__*/ _react.default.createElement("span", null, "\u2014");
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-section__summary u-small-padding-top-s"
                }, /*#__PURE__*/ _react.default.createElement("table", {
                    role: "presentation",
                    className: "opl-table"
                }, /*#__PURE__*/ _react.default.createElement("caption", null, title + " - skrót"), /*#__PURE__*/ _react.default.createElement("thead", null, /*#__PURE__*/ _react.default.createElement("tr", null, /*#__PURE__*/ _react.default.createElement("th", null, this.props.oneTimeHeader), /*#__PURE__*/ _react.default.createElement("th", null, this.props.monthlyHeader))), /*#__PURE__*/ _react.default.createElement("tbody", null, /*#__PURE__*/ _react.default.createElement("tr", {
                    className: "u-small-no-padding"
                }, /*#__PURE__*/ _react.default.createElement("td", {
                    "data-title": this.props.oneTimeHeader,
                    className: "second-last u-small-no-padding g-brand2-c u-no-border" + (this.props.entry.oneTimePrice ? "" : hideElementOnMobile)
                }, oneTimePrice), /*#__PURE__*/ _react.default.createElement("td", {
                    "data-title": this.props.monthlyHeader,
                    className: "last g-brand2-c u-no-border" + (this.props.entry.monthlyPrice ? "" : hideElementOnMobile)
                }, monthlyPrice)))));
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
            value: function prepareTableRow(price, index) {
                var hideElementOnMobile = " td-null";
                var textClass = "h5 u-no-margin u-font-normal";
                var monthlyPrice = price.monthlyPrice ? /*#__PURE__*/ _react.default.createElement("span", {
                    className: textClass
                }, price.monthlyPrice) : /*#__PURE__*/ _react.default.createElement("span", null, "\u2014");
                var oneTimePrice = price.oneTimeCost ? /*#__PURE__*/ _react.default.createElement("span", {
                    className: textClass
                }, price.oneTimeCost.replace(".", ",")) : /*#__PURE__*/ _react.default.createElement("span", null, "\u2014");
                return /*#__PURE__*/ _react.default.createElement("tr", {
                    key: "price" + index,
                    className: "u-small-no-spacing-top"
                }, /*#__PURE__*/ _react.default.createElement("td", {
                    className: "u-w-auto u-font-normal",
                    dangerouslySetInnerHTML: {
                        __html: price.description
                    }
                }), /*#__PURE__*/ _react.default.createElement("td", {
                    "data-title": this.props.oneTimeHeader,
                    className: "second-last u-font-normal" + (price.oneTimeCost ? "" : hideElementOnMobile)
                }, oneTimePrice), /*#__PURE__*/ _react.default.createElement("td", {
                    "data-title": this.props.monthlyHeader,
                    className: "last u-font-normal" + (price.monthlyPrice ? "" : hideElementOnMobile)
                }, monthlyPrice));
            }
        }, {
            key: "prepareBonusRow",
            value: function prepareBonusRow(bonus, index) {
                var price = bonus.priceSet ? bonus.priceSet : bonus.priceModification;

                var monthlyPrice = /*#__PURE__*/ _react.default.createElement("span", {
                    className: "h5 u-no-margin u-font-normal"
                }, "-" + price.toFixed(2).replace(".", ",") + " " + this.props.entry.currency);

                var oneTimePrice = /*#__PURE__*/ _react.default.createElement("span", null, "\u2014");

                return /*#__PURE__*/ _react.default.createElement("tr", {
                    key: "bonus" + index,
                    className: "u-small-no-spacing-top"
                }, /*#__PURE__*/ _react.default.createElement("td", {
                    className: "u-w-auto u-font-normal"
                }, bonus.title), /*#__PURE__*/ _react.default.createElement("td", {
                    "data-title": this.props.oneTimeHeader,
                    className: "second-last u-font-normal td-null"
                }, oneTimePrice), /*#__PURE__*/ _react.default.createElement("td", {
                    "data-title": this.props.monthlyHeader,
                    className: "last u-font-normal"
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
                } else if (from === 1 && to === 1) {
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
        }]);
        return SummaryDetailsTable;
    }(_react.Component);

    SummaryDetailsTable.propTypes = {
        monthlyHeader: _propTypes.default.string.isRequired,
        oneTimeHeader: _propTypes.default.string.isRequired,
        checkoutPriceText: _propTypes.default.string,
        firstMonthPriceText: _propTypes.default.string,
        id: _propTypes.default.string,
        checkoutPriceTooltipContent: _propTypes.default.string,
        firstMonthPriceTooltipContent: _propTypes.default.string
    };
    SummaryDetailsTable.defaultProps = {
        checkoutPriceText: 'Opłata na start',
        firstMonthPriceText: "W pierwszym miesiącu",
        highlighted: false
    };

    var mapStateToProps = function mapStateToProps() {
        var getPricesForPeriod = (0, _selectors.createGetPricesForPeriodSelector)();
        return function(state, props) {
            return {
                prices: getPricesForPeriod(state, props),
                bonusConsents: (0, _selectors2.getConsentsWithBonuses)(state)
            };
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps)(SummaryDetailsTable);

    _exports.default = _default;
});
//# sourceMappingURL=SummaryDetailsTable.js.map