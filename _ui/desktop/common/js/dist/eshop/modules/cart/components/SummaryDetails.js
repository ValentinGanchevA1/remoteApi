define(["exports", "react", "react-redux", "prop-types", "eshop/modules/core/components/ui/Expander", "../selectors", "eshop/modules/checkout/selectors", "./SummaryDetailsTable", "./DeliveryCostDetails"], function(_exports, _react, _reactRedux, _propTypes, _Expander, _selectors, _selectors2, _SummaryDetailsTable, _DeliveryCostDetails) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _SummaryDetailsTable = babelHelpers.interopRequireDefault(_SummaryDetailsTable);
    _DeliveryCostDetails = babelHelpers.interopRequireDefault(_DeliveryCostDetails);

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

    var SummaryDetails = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(SummaryDetails, _Component);

        var _super = _createSuper(SummaryDetails);

        function SummaryDetails(props) {
            var _this;

            babelHelpers.classCallCheck(this, SummaryDetails);
            _this = _super.call(this, props);
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "deliveryCustomRowView", function(title, oneTimeHeader, monthlyHeader, oneTimePrice, monthlyPrice) {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, /*#__PURE__*/ _react.default.createElement("table", {
                    className: "u-large-spacing-top u-medium-spacing-top opl-table opl-conf-summary-table opl-table--50-50 opl-table--no-border-top"
                }, /*#__PURE__*/ _react.default.createElement("caption", {
                    className: "u-acc-hide"
                }, title), /*#__PURE__*/ _react.default.createElement("thead", {
                    className: "u-acc-hide"
                }, /*#__PURE__*/ _react.default.createElement("tr", null, /*#__PURE__*/ _react.default.createElement("th", null), /*#__PURE__*/ _react.default.createElement("th", null), /*#__PURE__*/ _react.default.createElement("th", null, oneTimeHeader), /*#__PURE__*/ _react.default.createElement("th", null, monthlyHeader))), /*#__PURE__*/ _react.default.createElement("tbody", null, /*#__PURE__*/ _react.default.createElement("tr", {
                    className: "u-small-no-padding"
                }, /*#__PURE__*/ _react.default.createElement("td", {
                    className: "u-w-auto"
                }, /*#__PURE__*/ _react.default.createElement("h3", {
                    className: "h5 g-brand2-c u-no-spacing"
                }, title)), /*#__PURE__*/ _react.default.createElement("td", {
                    "data-title": oneTimeHeader,
                    className: "second-last u-small-padding-l g-brand2-c"
                }, oneTimePrice), /*#__PURE__*/ _react.default.createElement("td", {
                    "data-title": monthlyHeader,
                    className: "last g-brand2-c td-null"
                }, monthlyPrice))))));
            });
            return _this;
        }

        babelHelpers.createClass(SummaryDetails, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                this.loadModule();
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                return /*#__PURE__*/ _react.default.createElement("div", {
                    "data-js-module": "core/modules/expander",
                    id: this.props.rootComponent + "-details"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row l-row--space-large"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "js-expander__container u-margin-top"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    className: "js-expander__trigger u-padding-left-s u-small-no-padding"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "js-expander__trigger--hide"
                }, this.props.foldedSectionTriggerLabel), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "js-expander__trigger--show"
                }, this.props.expandedSectionTriggerLabel)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "js-expander__content u-hide--soft"
                }, /*#__PURE__*/ _react.default.createElement("table", {
                    role: "presentation",
                    className: "opl-checkout-header u-spacing-top-l"
                }, /*#__PURE__*/ _react.default.createElement("tbody", null, /*#__PURE__*/ _react.default.createElement("tr", null, /*#__PURE__*/ _react.default.createElement("td", {
                    className: "u-no-padding-l",
                    colSpan: "2"
                }, /*#__PURE__*/ _react.default.createElement("h3", {
                    className: "h3 u-small-no-spacing-bottom"
                }, this.props.title)), /*#__PURE__*/ _react.default.createElement("td", {
                    "aria-hidden": "true",
                    className: "with-spinbox"
                }), /*#__PURE__*/ _react.default.createElement("td", {
                    "aria-hidden": "true",
                    className: "second-last u-font-normal"
                }, this.props.oneTimeHeader), /*#__PURE__*/ _react.default.createElement("td", {
                    "aria-hidden": "true",
                    className: "last u-font-normal"
                }, this.props.monthlyHeader)))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-separator o-separator--m u-medium-visible-hide u-large-visible-hide"
                }), /*#__PURE__*/ _react.default.createElement(_Expander.Expander, {
                    variant: "section",
                    className: "js-stop-sticking-6",
                    scrollToSelected: false,
                    headerClassName: "opl-section__header--with-summary",
                    summaryClassName: "opl-section__border-bottom",
                    toggleClassName: "h5 opl-checkout-section__heading g-brand1-c"
                }, this.props.entries.map(function(e, i) {
                    return /*#__PURE__*/ _react.default.createElement(_SummaryDetailsTable.default, {
                        key: "SummaryDetailsTable_" + i,
                        entry: e,
                        monthlyHeader: _this2.props.monthlyHeader,
                        oneTimeHeader: _this2.props.oneTimeHeader,
                        id: _this2.props.id + "-" + i,
                        checkoutPriceTooltipContent: _this2.props.checkoutPriceTooltipContent,
                        firstMonthPriceTooltipContent: _this2.props.firstMonthPriceTooltipContent
                    });
                })), this.props.deliveryMethod && /*#__PURE__*/ _react.default.createElement(_DeliveryCostDetails.default, {
                    title: "Dostawa",
                    cost: this.props.deliveryMethod.price.replace(".", ","),
                    render: function render(oneTimePrice, monthlyPrice, title) {
                        return _this2.deliveryCustomRowView(title, _this2.props.oneTimeHeader, _this2.props.monthlyHeader, oneTimePrice, monthlyPrice);
                    }
                }), this.props.feeForSelectedPaymentMethod && parseInt(this.props.feeForSelectedPaymentMethod) !== 0 && /*#__PURE__*/ _react.default.createElement(_DeliveryCostDetails.default, {
                    title: "Opłata za płatność przy odbiorze",
                    cost: this.props.feeForSelectedPaymentMethod.replace(".", ","),
                    render: function render(oneTimePrice, monthlyPrice, title) {
                        return _this2.deliveryCustomRowView(title, _this2.props.oneTimeHeader, _this2.props.monthlyHeader, oneTimePrice, monthlyPrice);
                    }
                }), this.props.deposit != null && this.props.deposit > 0 ? this.depositTableView() : null, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-top-xl u-margin-top"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    className: "js-expander__trigger u-padding-left-s u-small-no-padding"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "js-expander__trigger--hide"
                }, this.props.foldedSectionTriggerLabel), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "js-expander__trigger--show"
                }, this.props.expandedSectionTriggerLabel))))))));
            }
        }, {
            key: "depositTableView",
            value: function depositTableView() {
                var monthlyPrice = /*#__PURE__*/ _react.default.createElement("span", null, "\u2014");

                var oneTimePrice = /*#__PURE__*/ _react.default.createElement("span", {
                    className: "h5 g-brand2-c u-no-margin"
                }, this.props.deposit.toFixed(2).replace(".", ","), " z\u0142");

                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, /*#__PURE__*/ _react.default.createElement("table", {
                    className: "u-spacing-top-l opl-table opl-conf-summary-table opl-table--50-50 opl-table--no-border-top"
                }, /*#__PURE__*/ _react.default.createElement("caption", {
                    className: "u-acc-hide"
                }, "Kaucja"), /*#__PURE__*/ _react.default.createElement("thead", {
                    className: "u-acc-hide"
                }, /*#__PURE__*/ _react.default.createElement("tr", null, /*#__PURE__*/ _react.default.createElement("th", null), /*#__PURE__*/ _react.default.createElement("th", null), /*#__PURE__*/ _react.default.createElement("th", null, this.props.oneTimeHeader), /*#__PURE__*/ _react.default.createElement("th", null, this.props.monthlyHeader))), /*#__PURE__*/ _react.default.createElement("tbody", null, /*#__PURE__*/ _react.default.createElement("tr", {
                    className: "u-small-no-padding"
                }, /*#__PURE__*/ _react.default.createElement("td", {
                    className: "u-w-auto"
                }, /*#__PURE__*/ _react.default.createElement("h3", {
                    className: "h5 g-brand2-c u-no-spacing"
                }, "Kaucja")), /*#__PURE__*/ _react.default.createElement("td", {
                    "data-title": this.props.oneTimeHeader,
                    className: "second-last u-small-no-padding g-brand2-c"
                }, oneTimePrice), /*#__PURE__*/ _react.default.createElement("td", {
                    "data-title": this.props.monthlyHeader,
                    className: "last g-brand2-c td-null"
                }, monthlyPrice))))));
            }
        }, {
            key: "loadModule",
            value: function loadModule() {
                OPL.UI.loadModules(document.getElementById(this.props.rootComponent + "-details"), [{
                    path: "core/modules/expander",
                    options: "",
                    conditions: ""
                }]);
            }
        }]);
        return SummaryDetails;
    }(_react.Component);

    SummaryDetails.propTypes = {
        rootComponent: _propTypes.default.string,
        expandedSectionTriggerLabel: _propTypes.default.string,
        foldedSectionTriggerLabel: _propTypes.default.string,
        feeForSelectedPaymentMethod: _propTypes.default.string,
        deliveryMethod: _propTypes.default.any
    };
    SummaryDetails.defaultProps = {
        expandedSectionTriggerLabel: "Ukryj szczegóły opłat",
        foldedSectionTriggerLabel: "Pokaż szczegóły opłat"
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            entries: (0, _selectors.getCartSummaryTableRows)(state),
            description: (0, _selectors.getOfferDescription)(state),
            devices: (0, _selectors.getCartDevices)(state) || [],
            deliveryMethod: (0, _selectors2.getSelectedDeliveryMethod)(state),
            deposit: (0, _selectors.getDepositCost)(state),
            feeForSelectedPaymentMethod: (0, _selectors2.getFeeForSelectedPaymentMethod)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {};
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SummaryDetails);

    _exports.default = _default;
});
//# sourceMappingURL=SummaryDetails.js.map