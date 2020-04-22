define(["exports", "react", "./MultiCartItemAttributeComponent", "./MultiCartItemIconCellComponent", "eshop/components/OraStockLevelStatusComponent", "eshop/utils/OnlineUtils", "eshop/modules/simfree/components/ProductOfferPriceTooltipComponent"], function(_exports, _react, _MultiCartItemAttributeComponent, _MultiCartItemIconCellComponent, _OraStockLevelStatusComponent, _OnlineUtils, _ProductOfferPriceTooltipComponent) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _MultiCartItemAttributeComponent = babelHelpers.interopRequireDefault(_MultiCartItemAttributeComponent);
    _MultiCartItemIconCellComponent = babelHelpers.interopRequireDefault(_MultiCartItemIconCellComponent);
    _OraStockLevelStatusComponent = babelHelpers.interopRequireDefault(_OraStockLevelStatusComponent);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    _ProductOfferPriceTooltipComponent = babelHelpers.interopRequireDefault(_ProductOfferPriceTooltipComponent);

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

    var preventDefaultWrapper = function preventDefaultWrapper(handler) {
        return function(event) {
            event.preventDefault();
            handler(event);
        };
    };

    var MultiCartItemHeaderComponent = /*#__PURE__*/ function(_MultiCartItemAttribu) {
        babelHelpers.inherits(MultiCartItemHeaderComponent, _MultiCartItemAttribu);

        var _super = _createSuper(MultiCartItemHeaderComponent);

        function MultiCartItemHeaderComponent(props) {
            babelHelpers.classCallCheck(this, MultiCartItemHeaderComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(MultiCartItemHeaderComponent, [{
            key: "createDescription",
            value: function createDescription() {
                switch (this.props.processType) {
                    case 'INSTALMENT_SALES_OF_GOODS':
                    case 'INSTALMENT_SALES_OF_GOODS_NC':
                        return this.createInstallmentDescription.apply(this);

                    default:
                        return this.createDefaultDescription.apply(this);
                }
            }
        }, {
            key: "createInstallmentDescription",
            value: function createInstallmentDescription() {
                return /*#__PURE__*/ _react.default.createElement("td", {
                    colSpan: this.props.priceless && '3',
                    className: "u-padding-right-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-top-l u-padding-l"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-font-bold"
                }, this.props.title), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-spacing"
                }, this.props.installmentDescription), /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    onClick: preventDefaultWrapper(this.props.onRemoveClicked),
                    "aria-label": "usu\u0144 pozycj\u0119 z koszyka"
                }, "Usu\u0144"))));
            }
        }, {
            key: "showLowerInstallments",
            value: function showLowerInstallments() {
                return this.props.onChangeClicked && this.props.lowerInstallmentsClicked && !!this.props.monthlyPricePresentation && !!this.props.monthlyPricePresentation.main && (this.props.monthlyPricePresentation.main.price != 0 || this.props.monthlyPricePresentation.main.priceWithoutVouchers != 0);
            }
        }, {
            key: "createDefaultDescription",
            value: function createDefaultDescription() {
                return /*#__PURE__*/ _react.default.createElement("td", {
                    colSpan: this.props.priceless && '3',
                    className: "u-padding-l u-padding-top-l u-padding-right-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-left"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-font-bold"
                }, this.props.title), /*#__PURE__*/ _react.default.createElement("br", null), this.props.description && /*#__PURE__*/ _react.default.createElement("div", null, this.props.description), this.props.msisdn && this.props.processType === 'ACTIVATION' && /*#__PURE__*/ _react.default.createElement("div", null, "nowy numer ", this.transformMsisdn(this.props.msisdn), " ", /*#__PURE__*/ _react.default.createElement("a", {
                    onClick: this.props.onMsisdnChangeClicked,
                    className: "u-spacing-left"
                }, "Zmie\u0144")), this.props.msisdn && _OnlineUtils.default.isMnp(this.props.processType) && /*#__PURE__*/ _react.default.createElement("div", null, "przenosz\u0119 numer ", this.transformMsisdn(this.props.mnpData.msisdn)), this.props.processType !== 'SALE_OF_GOODS' && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-spacing-top"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    className: "u-spacing-right-l",
                    onClick: this.props.onChangeClicked,
                    "aria-label": "zmie\u0144"
                }, "Zmie\u0144"), /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    className: "u-spacing-right-l",
                    onClick: this.props.onDetailsClicked,
                    "aria-label": "wy\u015Bwietl szczeg\xF3\u0142owy opis"
                }, "Szczeg\xF3\u0142y"), /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    onClick: preventDefaultWrapper(this.props.onRemoveClicked),
                    "aria-label": "usu\u0144 pozycj\u0119 z koszyka"
                }, "Usu\u0144")), this.props.processType === 'SALE_OF_GOODS' && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-spacing-top"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    onClick: preventDefaultWrapper(this.props.onRemoveClicked),
                    "aria-label": "usu\u0144 pozycj\u0119 z koszyka"
                }, "Usu\u0144"))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-right",
                    style: {
                        width: '50%'
                    }
                }, /*#__PURE__*/ _react.default.createElement(_OraStockLevelStatusComponent.default, {
                    stockLevelStatus: this.props.stockLevelStatus,
                    shouldStockLevelBeVisible: this.props.shouldStockLevelBeVisible
                })));
            }
        }, {
            key: "render",
            value: function render() {
                var showLowerInstallments = this.showLowerInstallments();
                return /*#__PURE__*/ _react.default.createElement("tr", null, /*#__PURE__*/ _react.default.createElement(_MultiCartItemIconCellComponent.default, {
                    rowSpan: "5",
                    entryType: this.props.type,
                    image: this.props.imageUrl,
                    icon: this.props.icon,
                    terminalName: this.props.title
                }), this.createDescription.apply(this), !this.props.priceless && !this.props.simFreeOneTimePrice && /*#__PURE__*/ _react.default.createElement("td", {
                    className: "l-col-2 u-padding-l u-padding-top-l u-padding-right u-text-right"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-hide"
                }, "Op\u0142aty jednorazowe"), /*#__PURE__*/ _react.default.createElement("div", null, this.props.oneTimePrice ? this.renderPriceDesktop(this.props.oneTimePrice, this.props.stockLevelStatus) : this.renderVoidDesktop()), this.prepareCrossedOneTimePrice(this.props.simFreeOneTimePrice)), !this.props.priceless && this.props.entryType === 'TERMINAL' && this.props.simFreeOneTimePrice !== undefined && /*#__PURE__*/ _react.default.createElement("td", {
                    className: "l-col-2 u-padding-l u-padding-top-l u-padding-right u-text-right"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-hide"
                }, "Op\u0142aty jednorazowe"), /*#__PURE__*/ _react.default.createElement("div", null, this.renderPriceDesktop(this.props.simFreeOneTimePrice, this.props.stockLevelStatus)), this.prepareCrossedOneTimePrice(this.props.simFreeOneTimePrice)), !this.props.priceless && /*#__PURE__*/ _react.default.createElement("td", {
                    className: "l-col-2 u-padding-top-l u-padding-right u-text-right" + (showLowerInstallments ? "" : " u-padding-l")
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-hide"
                }, "Op\u0142aty miesi\u0119czne"), this.props.monthlyPricePresentation.tooltip ? /*#__PURE__*/ _react.default.createElement(_ProductOfferPriceTooltipComponent.default, babelHelpers.extends({
                    key: this.props.monthlyPricePresentation.tooltip.id
                }, this.props.monthlyPricePresentation.tooltip), this.renderPrice("u-table-cell u-vertical-middle")) : this.renderPrice(), this.props.monthlyPricePresentation.crossedOut && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "g-gray5-c u-font-bold u-text-line-through u-clear-both"
                }, this.props.monthlyPricePresentation.crossedOut), this.props.monthlyPricePresentation.subtitle && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "g-gray5-c u-font-small u-clear-both"
                }, this.props.monthlyPricePresentation.subtitle), showLowerInstallments && /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("a", {
                    className: "u-spacing-left",
                    href: "#",
                    key: "lowerInstallmentsClicked_key",
                    onClick: preventDefaultWrapper(this.props.lowerInstallmentsClicked),
                    "aria-label": "Obni\u017C raty"
                }, !!this.props.descriptions && this.props.descriptions.lowerInstallments || "Obniż raty"))));
            }
        }]);
        return MultiCartItemHeaderComponent;
    }(_MultiCartItemAttributeComponent.default);

    _exports.default = MultiCartItemHeaderComponent;
});
//# sourceMappingURL=MultiCartItemHeaderComponent.js.map