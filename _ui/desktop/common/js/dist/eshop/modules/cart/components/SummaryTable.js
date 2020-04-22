define(["exports", "react", "react-redux", "prop-types", "../selectors", "eshop/modules/checkout/selectors", "./Utils", "./SummaryTableHeader", "./SummaryTableItem", "../../checkout/selectors"], function(_exports, _react, _reactRedux, _propTypes, _selectors, _selectors2, _Utils, _SummaryTableHeader, _SummaryTableItem, _selectors3) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _SummaryTableItem = babelHelpers.interopRequireDefault(_SummaryTableItem);

    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
            keys.push.apply(keys, symbols);
        }
        return keys;
    }

    function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
                ownKeys(Object(source), true).forEach(function(key) {
                    babelHelpers.defineProperty(target, key, source[key]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
                ownKeys(Object(source)).forEach(function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
            }
        }
        return target;
    }

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

    var SummaryTable = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(SummaryTable, _Component);

        var _super = _createSuper(SummaryTable);

        function SummaryTable() {
            babelHelpers.classCallCheck(this, SummaryTable);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(SummaryTable, [{
            key: "render",
            value: function render() {
                var _this = this;

                var entries = this.prepareEntries().map(function(e, i) {
                    var _React$createElement;

                    return /*#__PURE__*/ _react.default.createElement(_SummaryTableItem.default, (_React$createElement = {
                        key: "SummaryTableItem_" + i,
                        id: _this.props.id + "-item-" + i,
                        header: e.title,
                        monthlyHeader: _this.props.monthlyHeader,
                        oneTimeHeader: _this.props.oneTimeHeader,
                        oneTimePrice: e.oneTimePrice,
                        monthlyPrice: e.monthlyPrice,
                        currency: e.currency,
                        bonuses: _this.props.bonuses //ToDo fix double props assignment
                            ,
                        monthFrom: e.monthFrom
                    }, babelHelpers.defineProperty(_React$createElement, "monthFrom", e.monthTo), babelHelpers.defineProperty(_React$createElement, "highlighted", e.highlighted), babelHelpers.defineProperty(_React$createElement, "tooltip", e.tooltip), babelHelpers.defineProperty(_React$createElement, "deposit", _this.props.deposit), _React$createElement));
                });
                return /*#__PURE__*/ _react.default.createElement("table", {
                    id: "SummaryTable",
                    className: "u-no-margin-t opl-table opl-conf-summary-table opl-table--50-50"
                }, this.props.renderHeader ? /*#__PURE__*/ _react.default.createElement(_SummaryTableHeader.SummaryTableHeader, this.props) : null, /*#__PURE__*/ _react.default.createElement("tbody", null, entries, this.props.deliveryMethod && /*#__PURE__*/ _react.default.createElement(_SummaryTableItem.default, {
                    id: this.props.id + "-item-delivery",
                    header: "Dostawa",
                    monthlyHeader: this.props.monthlyHeader,
                    oneTimeHeader: this.props.oneTimeHeader,
                    oneTimePrice: this.props.deliveryMethod.price.replace(".", ","),
                    monthlyPrice: null,
                    currency: "",
                    tooltip: null
                }), this.props.feeForSelectedPaymentMethod && parseInt(this.props.feeForSelectedPaymentMethod) !== 0 && /*#__PURE__*/ _react.default.createElement(_SummaryTableItem.default, {
                    id: this.props.id + "-item-payment",
                    header: "Opłata za płatność przy odbiorze",
                    monthlyHeader: this.props.monthlyHeader,
                    oneTimeHeader: this.props.oneTimeHeader,
                    oneTimePrice: this.props.feeForSelectedPaymentMethod.replace(".", ","),
                    monthlyPrice: null,
                    currency: "",
                    tooltip: null
                })));
            }
        }, {
            key: "prepareEntries",
            value: function prepareEntries() {
                var _this2 = this;

                var entries = [];
                this.props.entries.filter(function(entry) {
                    return _this2.entryIsNonEmpty(entry);
                }).map(function(e) {
                    var title = _this2.computeTitle(e.monthFrom, e.monthTo);

                    var tooltip = _this2.computeTooltip(e.monthFrom, e.monthTo);

                    entries.push(_objectSpread({}, e, {
                        title: title,
                        tooltip: tooltip
                    }));
                });
                return entries;
            }
        }, {
            key: "entryIsNonEmpty",
            value: function entryIsNonEmpty(entry) {
                return entry.oneTimePrice || entry.monthlyPrice || entry.monthTo;
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
        return SummaryTable;
    }(_react.Component);

    SummaryTable.propTypes = {
        title: _propTypes.default.string.isRequired,
        monthlyHeader: _propTypes.default.string.isRequired,
        oneTimeHeader: _propTypes.default.string.isRequired,
        checkoutPriceText: _propTypes.default.string,
        firstMonthPriceText: _propTypes.default.string,
        id: _propTypes.default.string,
        checkoutPriceTooltipContent: _propTypes.default.string,
        firstMonthPriceTooltipContent: _propTypes.default.string,
        deliveryMethod: _propTypes.default.any,
        feeForSelectedPaymentMethod: _propTypes.default.string
    };
    SummaryTable.defaultProps = {
        checkoutPriceText: "Opłata na start",
        renderHeader: true
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            entries: (0, _selectors.getCartSummaryTableRows)(state),
            bonuses: (0, _selectors2.getConsentsWithBonuses)(state),
            deliveryMethod: (0, _selectors2.getSelectedDeliveryMethod)(state),
            deposit: (0, _selectors.getDepositCost)(state),
            feeForSelectedPaymentMethod: (0, _selectors3.getFeeForSelectedPaymentMethod)(state)
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps)(SummaryTable);

    _exports.default = _default;
});
//# sourceMappingURL=SummaryTable.js.map