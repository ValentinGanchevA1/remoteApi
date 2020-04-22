define(["exports", "react", "react-redux", "prop-types", "eshop/modules/core/components/ui/Expander", "../selectors", "eshop/modules/checkout/selectors", "./SummaryDetailsTableForBundles", "eshop/utils/OnlineUtils", "../../checkout/selectors", "./DeliveryCostDetails"], function(_exports, _react, _reactRedux, _propTypes, _Expander, _selectors, _selectors2, _SummaryDetailsTableForBundles, _OnlineUtils, _selectors3, _DeliveryCostDetails) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _SummaryDetailsTableForBundles = babelHelpers.interopRequireDefault(_SummaryDetailsTableForBundles);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
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

    var SummaryDetailsForBundles = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(SummaryDetailsForBundles, _Component);

        var _super = _createSuper(SummaryDetailsForBundles);

        function SummaryDetailsForBundles(props) {
            babelHelpers.classCallCheck(this, SummaryDetailsForBundles);
            return _super.call(this, props);
        }

        babelHelpers.createClass(SummaryDetailsForBundles, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                this.loadModule();
            }
        }, {
            key: "titleView",
            value: function titleView(bundleNo) {
                var description = this.props.description.filter(function(desc) {
                    return desc[0] === bundleNo;
                });
                var sectionHeader = [ /*#__PURE__*/ _react.default.createElement("h4", {
                    key: "title-bundle" + bundleNo,
                    className: "h5"
                }, description[0][2]), /*#__PURE__*/ _react.default.createElement("p", {
                    key: "description-bundle" + bundleNo
                }, description[0][1]), /*#__PURE__*/ _react.default.createElement(_Expander.Trigger, {
                    key: "trigger-bundle" + bundleNo,
                    triggerClassName: "opl-document__expander__trigger"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-section__text-show"
                }, "rozwi\u0144 op\u0142aty"), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-section__text-hide"
                }, "zwi\u0144 op\u0142aty"))];
                return sectionHeader;
            }
        }, {
            key: "entryNotNull",
            value: function entryNotNull(entry) {
                return entry.monthlyPrice || entry.oneTimePrice || entry.monthTo;
            }
        }, {
            key: "getCheckoutCurrency",
            value: function getCheckoutCurrency() {
                return !!this.props.checkoutCost ? this.props.checkoutCost.currency : "zł";
            }
        }, {
            key: "render",
            value: function render() {
                var _this = this;

                var rows = [];
                var row;
                var expanderRow;
                var entriesForBundle = [];

                for (var bundleNo = 1; bundleNo <= this.props.maxBundleNumber; bundleNo++) {
                    entriesForBundle = this.props.entries.filter(function(entryForBundle) {
                        return entryForBundle.bundleNo === bundleNo;
                    }).filter(function(entry) {
                        return _this.entryNotNull(entry);
                    });

                    if (entriesForBundle.length > 0) {
                        row = entriesForBundle.map(function(e, i) {
                            return /*#__PURE__*/ _react.default.createElement(_SummaryDetailsTableForBundles.default, {
                                key: i + "bundleNo" + bundleNo,
                                entry: e,
                                monthlyHeader: _this.props.monthlyHeader,
                                oneTimeHeader: _this.props.oneTimeHeader,
                                id: i ? _this.props.id + "-" + i + "-bundle" + bundleNo : _this.props.id + "-bundle" + bundleNo,
                                bundleNo: bundleNo,
                                className: i > 0 ? "u-padding-left-l-xl " : " u-padding-left-l-xl ",
                                checkoutPriceTooltipContent: _this.props.checkoutPriceTooltipContent,
                                firstMonthPriceTooltipContent: _this.props.firstMonthPriceTooltipContent
                            });
                        });
                        expanderRow = /*#__PURE__*/ _react.default.createElement(_Expander.Expander, {
                            key: "bundleNo-" + bundleNo + "-expander",
                            variant: "section_expander",
                            scrollToSelected: false
                        }, /*#__PURE__*/ _react.default.createElement(_Expander.Section, {
                            key: "bundleNo-" + bundleNo + "-section",
                            header: this.titleView(bundleNo),
                            headerClassName: "u-small-padding",
                            variant: "section_expander",
                            className: "opl-document__expander opl-section--chevron-left u-no-padding-top",
                            contentClassName: "opl-document__expander__content"
                        }, /*#__PURE__*/ _react.default.createElement("table", {
                            id: "ExpanderSummaryDetailsForBundleTable",
                            key: "bundleNo-" + bundleNo + "-table",
                            "aria-hidden": "true",
                            className: "u-no-margin-t opl-table opl-conf-summary-table opl-table--50-50 u-small-hide u-no-border"
                        }, /*#__PURE__*/ _react.default.createElement("caption", null), /*#__PURE__*/ _react.default.createElement("thead", null, /*#__PURE__*/ _react.default.createElement("tr", null, /*#__PURE__*/ _react.default.createElement("th", null), /*#__PURE__*/ _react.default.createElement("th", null), /*#__PURE__*/ _react.default.createElement("th", {
                            className: "second-last u-font-normal u-padding-right"
                        }, this.props.oneTimeHeader), /*#__PURE__*/ _react.default.createElement("th", {
                            className: "last u-font-normal u-no-padding-right"
                        }, this.props.monthlyHeader)))), /*#__PURE__*/ _react.default.createElement(_Expander.Expander, {
                            key: "bundleNo-" + bundleNo + "-expander-nested",
                            variant: "section_expander",
                            scrollToSelected: false
                        }, row)));
                        rows.push(expanderRow);
                    }
                }

                return /*#__PURE__*/ _react.default.createElement("div", {
                    "data-js-module": "core/modules/expander",
                    id: this.props.rootComponent + "-details"
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
                }, /*#__PURE__*/ _react.default.createElement("h3", {
                    className: "u-font-standard u-padding-top-l u-padding-l u-no-margin opl-section__heading"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "h2 u-no-margin"
                }, "Szczeg\xF3\u0142y op\u0142at")), rows, this.props.deliveryMethod && /*#__PURE__*/ _react.default.createElement(_DeliveryCostDetails.default, {
                    title: "Dostawa",
                    cost: this.props.deliveryMethod.price.replace(".", ","),
                    render: function render(oneTimePrice, monthlyPrice, title) {
                        return _this.prepareCustomSummaryRow(title, oneTimePrice, monthlyPrice);
                    }
                }), this.props.feeForSelectedPaymentMethod && parseInt(this.props.feeForSelectedPaymentMethod) !== 0 && /*#__PURE__*/ _react.default.createElement(_DeliveryCostDetails.default, {
                    title: "Opłata za płatność przy odbiorze",
                    cost: this.props.feeForSelectedPaymentMethod.replace(".", ","),
                    render: function render(oneTimePrice, monthlyPrice, title) {
                        return _this.prepareCustomSummaryRow(title, oneTimePrice, monthlyPrice);
                    }
                }), this.props.depositCost > 0 ? this.depositTableView() : null, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-margin-top"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    className: "js-expander__trigger u-padding-left-s u-small-no-padding"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "js-expander__trigger--hide"
                }, this.props.foldedSectionTriggerLabel), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "js-expander__trigger--show"
                }, this.props.expandedSectionTriggerLabel))))));
            }
        }, {
            key: "prepareCustomSummaryRow",
            value: function prepareCustomSummaryRow(title, oneTimePrice, monthlyPrice) {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, /*#__PURE__*/ _react.default.createElement("table", {
                    className: "u-spacing-top-l opl-table opl-conf-summary-table opl-table--50-50 opl-table--no-border-top"
                }, /*#__PURE__*/ _react.default.createElement("caption", {
                    className: "u-acc-hide"
                }, title), /*#__PURE__*/ _react.default.createElement("thead", {
                    className: "u-acc-hide"
                }, /*#__PURE__*/ _react.default.createElement("tr", null, /*#__PURE__*/ _react.default.createElement("th", null), /*#__PURE__*/ _react.default.createElement("th", null), /*#__PURE__*/ _react.default.createElement("th", null, this.props.oneTimeHeader), /*#__PURE__*/ _react.default.createElement("th", null, this.props.monthlyHeader))), /*#__PURE__*/ _react.default.createElement("tbody", null, /*#__PURE__*/ _react.default.createElement("tr", {
                    className: "u-small-no-padding"
                }, /*#__PURE__*/ _react.default.createElement("td", {
                    className: "u-w-auto"
                }, /*#__PURE__*/ _react.default.createElement("h3", {
                    className: "h5 g-brand2-c u-no-spacing"
                }, title)), /*#__PURE__*/ _react.default.createElement("td", {
                    "data-title": this.props.oneTimeHeader,
                    className: "second-last u-small-padding-l g-brand2-c"
                }, oneTimePrice), /*#__PURE__*/ _react.default.createElement("td", {
                    "data-title": this.props.monthlyHeader,
                    className: "last g-brand2-c td-null"
                }, monthlyPrice))))));
            }
        }, {
            key: "depositTableView",
            value: function depositTableView() {
                var monthlyPrice = /*#__PURE__*/ _react.default.createElement("span", null, "\u2014");

                var oneTimePrice = /*#__PURE__*/ _react.default.createElement("span", {
                    className: "h5 g-brand2-c u-no-margin"
                }, _OnlineUtils.default.formatPrice(this.props.depositCost) + " " + this.getCheckoutCurrency());

                return this.prepareCustomSummaryRow("Kaucje", oneTimePrice, monthlyPrice);
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
        return SummaryDetailsForBundles;
    }(_react.Component);

    SummaryDetailsForBundles.propTypes = {
        rootComponent: _propTypes.default.string,
        expandedSectionTriggerLabel: _propTypes.default.string,
        foldedSectionTriggerLabel: _propTypes.default.string,
        feeForSelectedPaymentMethod: _propTypes.default.string,
        deliveryMethod: _propTypes.default.any
    };
    SummaryDetailsForBundles.defaultProps = {
        expandedSectionTriggerLabel: "Ukryj szczegóły opłat",
        foldedSectionTriggerLabel: "Pokaż szczegóły opłat"
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            entries: (0, _selectors.getCartSummaryTableDetailsRows)(state),
            description: (0, _selectors.getOfferDescriptionForBundles)(state),
            devices: (0, _selectors.getCartDevices)(state) || [],
            deliveryMethod: (0, _selectors2.getSelectedDeliveryMethod)(state),
            offerCount: (0, _selectors.getOfferCount)(state),
            maxBundleNumber: (0, _selectors.getMaxBundleNo)(state),
            depositCost: (0, _selectors.getDepositCost)(state),
            checkoutCost: (0, _selectors.getCartCheckoutCost)(state),
            feeForSelectedPaymentMethod: (0, _selectors3.getFeeForSelectedPaymentMethod)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {};
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SummaryDetailsForBundles);

    _exports.default = _default;
});
//# sourceMappingURL=SummaryDetailsForBundles.js.map