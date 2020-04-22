define(["exports", "react", "eshop/utils/OnlineUtils", "eshop/modules/core/components/ui/TooltipFromHtml", "eshop/modules/core/components/ui/Price", "eshop/modules/core/utils/StylesUtils", "../../constants/OfferTypeEnum"], function(_exports, _react, _OnlineUtils, _TooltipFromHtml, _Price, _StylesUtils, _OfferTypeEnum) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.DetailsRaw = _exports.DetailsLargeSimfreeRaw = _exports.DetailsSmallRaw = _exports.DetailsSmall = _exports.DetailsMedium = _exports.DetailsLarge = _exports.Details = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    _TooltipFromHtml = babelHelpers.interopRequireDefault(_TooltipFromHtml);
    _Price = babelHelpers.interopRequireDefault(_Price);
    _OfferTypeEnum = babelHelpers.interopRequireDefault(_OfferTypeEnum);

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

    var Details = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(Details, _React$Component);

        var _super = _createSuper(Details);

        function Details(props) {
            var _this;

            babelHelpers.classCallCheck(this, Details);
            _this = _super.call(this, props);
            _this.details = null;

            _this.preprocess();

            return _this;
        }

        babelHelpers.createClass(Details, [{
            key: "makeReactElement",
            value: function makeReactElement(html) {
                return _TooltipFromHtml.default.conditionalRender(html);
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                this.preprocess();
            }
        }, {
            key: "preprocess",
            value: function preprocess() {
                var _this2 = this;

                var details = this.props.data || this.props.details;

                if (details) {
                    if (details.map) {
                        this.details = details.map(function(d) {
                            return {
                                reactKey: d.key,
                                key: _this2.makeReactElement(d.key),
                                value: _this2.makeReactElement(d.value)
                            };
                        });
                    }
                }
            }
        }, {
            key: "getPrices",
            value: function getPrices(showNet) {
                if (!this.props.proposition) {
                    return {
                        "basePrice": 0,
                        "bonusPrice": 0
                    };
                }

                var _this$props = this.props,
                    basePrice = _this$props.basePrice,
                    bonusPrice = _this$props.bonusPrice;
                var showAs = showNet ? "originalNetPrice" : "originalGrossPrice";

                if (this.props.proposition.payments) {
                    // for lp and device list and product details
                    basePrice = _OnlineUtils.default.getPaymentsForRole(this.props.proposition.payments, "").basePrice[showAs];
                    bonusPrice = _OnlineUtils.default.getPaymentsForRole(this.props.proposition.payments, this.props.contractRole).basePrice[showAs];
                } else if (this.props.proposition.monthlyPrices && this.props.proposition.monthlyPrices.length > 0) {
                    // for cart
                    showAs = showNet ? "priceNet" : "priceGross";
                    bonusPrice = this.props.proposition.monthlyPrices[this.props.proposition.monthlyPrices.length - 1][showAs];
                    basePrice = this.props.proposition.monthlyPrices[this.props.proposition.monthlyPrices.length - 1][showAs];

                    if (this.props.proposition.monthlyOldPrice && this.props.proposition.monthlyOldPrice[showAs]) {
                        basePrice = this.props.proposition.monthlyOldPrice[showAs];
                    }

                    return {
                        "basePrice": basePrice,
                        "bonusPrice": bonusPrice
                    };
                } else if (this.props.proposition.planTotalMonthlyPrices && this.props.proposition.planTotalMonthlyPrices.length > 0) {
                    bonusPrice = this.props.proposition.planTotalMonthlyPrices[this.props.proposition.planTotalMonthlyPrices.length - 1][showAs];
                    basePrice = this.props.proposition.planTotalMonthlyPrices[this.props.proposition.planTotalMonthlyPrices.length - 1][showAs];

                    if (this.props.proposition.monthlyOldPrice && this.props.proposition.monthlyOldPrice[showAs]) {
                        basePrice = this.props.proposition.monthlyOldPrice[showAs];
                    }
                }

                if (this.props.proposition.entryType && this.props.proposition.entryType === _OfferTypeEnum.default.CONVERGENT && this.props.proposition.planTotalMonthlyPrices && this.props.proposition.planTotalMonthlyPrices.length > 0) {
                    basePrice = this.props.proposition.planTotalMonthlyPrices[this.props.proposition.planTotalMonthlyPrices.length - 1]["gross"];
                    bonusPrice = this.props.proposition.planTotalMonthlyPrices[this.props.proposition.planTotalMonthlyPrices.length - 1]["gross"];
                }

                return {
                    "basePrice": basePrice,
                    "bonusPrice": bonusPrice
                };
            }
        }, {
            key: "getModalContent",
            value: function getModalContent() {
                if (!this.props.proposition) {
                    return null;
                }

                var propositionName = this.props.propositionName || this.props.proposition && this.props.proposition.planName;

                var _this$getPrices = this.getPrices(this.props.showNet),
                    basePrice = _this$getPrices.basePrice,
                    bonusPrice = _this$getPrices.bonusPrice;

                return [ /*#__PURE__*/ _react.default.createElement("div", {
                    key: "large_" + this.props.clientContext + (this.props.proposition.rateplanId || this.props.proposition.productCode),
                    className: "u-small-hide"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-modal-content u-padding-all-xl"
                }, /*#__PURE__*/ _react.default.createElement("table", {
                    className: "u-table-fixed"
                }, /*#__PURE__*/ _react.default.createElement("caption", {
                    className: "u-text-left u-padding-l"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h3 u-spacing-l"
                }, propositionName), /*#__PURE__*/ _react.default.createElement(_Price.default, {
                    key: "large",
                    basePrice: basePrice,
                    bonusPrice: bonusPrice
                })), /*#__PURE__*/ _react.default.createElement("tfoot", null, /*#__PURE__*/ _react.default.createElement("tr", null, /*#__PURE__*/ _react.default.createElement("td", {
                    colSpan: "2",
                    className: "u-small-block u-padding-top-xl"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-font-small",
                    dangerouslySetInnerHTML: {
                        __html: this.props.proposition.internetLegal
                    }
                })))), detailsTable(this.details, _StylesUtils.StylesUtils.large)))), /*#__PURE__*/ _react.default.createElement("div", {
                    key: "small" + this.props.clientContext + (this.props.proposition.rateplanId || this.props.proposition.productCode),
                    className: "u-hide u-small-block"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-modal-content"
                }, /*#__PURE__*/ _react.default.createElement("table", {
                    className: "u-table-fixed"
                }, /*#__PURE__*/ _react.default.createElement("caption", {
                    className: "u-text-left u-padding-xl"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h3 u-spacing-top-m"
                }, propositionName), /*#__PURE__*/ _react.default.createElement(_Price.default, {
                    key: "large",
                    basePrice: basePrice,
                    bonusPrice: bonusPrice
                })), /*#__PURE__*/ _react.default.createElement("tfoot", null, /*#__PURE__*/ _react.default.createElement("tr", null, /*#__PURE__*/ _react.default.createElement("td", {
                    colSpan: "2",
                    className: "u-small-block u-padding-top-xl"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-font-small",
                    dangerouslySetInnerHTML: {
                        __html: this.props.proposition.internetLegal
                    }
                })))), detailsTable(this.details, _StylesUtils.StylesUtils.small))))];
            }
        }]);
        return Details;
    }(_react.default.Component);

    _exports.Details = Details;

    var DetailsLarge = /*#__PURE__*/ function(_Details) {
        babelHelpers.inherits(DetailsLarge, _Details);

        var _super2 = _createSuper(DetailsLarge);

        function DetailsLarge(props) {
            babelHelpers.classCallCheck(this, DetailsLarge);
            return _super2.call(this, props);
        }

        babelHelpers.createClass(DetailsLarge, [{
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-box__details opl-box__details--large"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-box__details__content"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-box__details__content__inner"
                }, /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h4 u-spacing-l"
                }, this.props.labels.header), detailsTable(this.details, _StylesUtils.StylesUtils.large), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-spacing-top-l"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    onClick: this.props.select
                }, this.props.labels.select))))));
            }
        }]);
        return DetailsLarge;
    }(Details);

    _exports.DetailsLarge = DetailsLarge;

    var DetailsMedium = /*#__PURE__*/ function(_Details2) {
        babelHelpers.inherits(DetailsMedium, _Details2);

        var _super3 = _createSuper(DetailsMedium);

        function DetailsMedium(props) {
            babelHelpers.classCallCheck(this, DetailsMedium);
            return _super3.call(this, props);
        }

        babelHelpers.createClass(DetailsMedium, [{
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-box__details opl-box__details--medium"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-box__details__content"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-box__details__content__inner"
                }, /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h4 u-spacing-l"
                }, this.props.labels.header), detailsTable(this.details, _StylesUtils.StylesUtils.medium), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-spacing-top-l"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    onClick: this.props.select
                }, this.props.labels.select))))));
            }
        }]);
        return DetailsMedium;
    }(Details);

    _exports.DetailsMedium = DetailsMedium;

    var DetailsSmall = /*#__PURE__*/ function(_Details3) {
        babelHelpers.inherits(DetailsSmall, _Details3);

        var _super4 = _createSuper(DetailsSmall);

        function DetailsSmall(props) {
            babelHelpers.classCallCheck(this, DetailsSmall);
            return _super4.call(this, props);
        }

        babelHelpers.createClass(DetailsSmall, [{
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-box__details opl-box__details--small"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-box__details__content"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h3 u-spacing-l"
                }, this.props.labels.header), /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h4 u-spacing-l"
                }, this.props.rateplanName), detailsTable(this.details, _StylesUtils.StylesUtils.small)));
            }
        }]);
        return DetailsSmall;
    }(Details);

    _exports.DetailsSmall = DetailsSmall;

    var DetailsSmallRaw = /*#__PURE__*/ function(_Details4) {
        babelHelpers.inherits(DetailsSmallRaw, _Details4);

        var _super5 = _createSuper(DetailsSmallRaw);

        function DetailsSmallRaw(props) {
            babelHelpers.classCallCheck(this, DetailsSmallRaw);
            return _super5.call(this, props);
        }

        babelHelpers.createClass(DetailsSmallRaw, [{
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", null, detailsTable(this.details, _StylesUtils.StylesUtils.small));
            }
        }]);
        return DetailsSmallRaw;
    }(Details);

    _exports.DetailsSmallRaw = DetailsSmallRaw;

    var DetailsLargeSimfreeRaw = /*#__PURE__*/ function(_Details5) {
        babelHelpers.inherits(DetailsLargeSimfreeRaw, _Details5);

        var _super6 = _createSuper(DetailsLargeSimfreeRaw);

        function DetailsLargeSimfreeRaw(props) {
            babelHelpers.classCallCheck(this, DetailsLargeSimfreeRaw);
            return _super6.call(this, props);
        }

        babelHelpers.createClass(DetailsLargeSimfreeRaw, [{
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", null, this.getModalContent());
            }
        }]);
        return DetailsLargeSimfreeRaw;
    }(Details);

    _exports.DetailsLargeSimfreeRaw = DetailsLargeSimfreeRaw;

    var DetailsRaw = /*#__PURE__*/ function(_Details6) {
        babelHelpers.inherits(DetailsRaw, _Details6);

        var _super7 = _createSuper(DetailsRaw);

        function DetailsRaw(props) {
            babelHelpers.classCallCheck(this, DetailsRaw);
            return _super7.call(this, props);
        }

        babelHelpers.createClass(DetailsRaw, [{
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", null, this.getModalContent());
            }
        }]);
        return DetailsRaw;
    }(Details);

    _exports.DetailsRaw = DetailsRaw;

    function detailsTable(data, style) {
        if (!data || data.length === 0) {
            return null;
        }

        var tbodyProps = style && style["tbody"] ? {
            className: style["tbody"]
        } : {};
        var index = 0;
        data = data.map(function(r) {
            r.i = index++;
            return r;
        });

        var classByIndex = function classByIndex(row, style) {
            return row.i === 0 ? style["first"] : style["rest"];
        };

        return /*#__PURE__*/ _react.default.createElement("tbody", tbodyProps, data.map(function(row) {
            return /*#__PURE__*/ _react.default.createElement("tr", {
                className: classByIndex(row, style["tr"]),
                key: row.reactKey
            }, /*#__PURE__*/ _react.default.createElement("th", {
                className: classByIndex(row, style["th"])
            }, row.key), /*#__PURE__*/ _react.default.createElement("td", {
                className: classByIndex(row, style["td"])
            }, row.value));
        }));
    }
});
//# sourceMappingURL=OfferDetails.js.map