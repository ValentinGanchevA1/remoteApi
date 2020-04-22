define(["exports", "react", "./MultiCartItemAttributeComponent", "./MultiCartItemIconCellComponent", "eshop/components/OraStockLevelStatusComponent", "eshop/utils/DataLayerUtils", "eshop/modules/simfree/components/ProductOfferPriceTooltipComponent", "./../utils/CartUtils", "eshop/utils/OnlineUtils", "./VASPackagesPresentationComponent"], function(_exports, _react, _MultiCartItemAttributeComponent, _MultiCartItemIconCellComponent, _OraStockLevelStatusComponent, _DataLayerUtils, _ProductOfferPriceTooltipComponent, _CartUtils, _OnlineUtils, _VASPackagesPresentationComponent) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _MultiCartItemAttributeComponent = babelHelpers.interopRequireDefault(_MultiCartItemAttributeComponent);
    _MultiCartItemIconCellComponent = babelHelpers.interopRequireDefault(_MultiCartItemIconCellComponent);
    _OraStockLevelStatusComponent = babelHelpers.interopRequireDefault(_OraStockLevelStatusComponent);
    _DataLayerUtils = babelHelpers.interopRequireDefault(_DataLayerUtils);
    _ProductOfferPriceTooltipComponent = babelHelpers.interopRequireDefault(_ProductOfferPriceTooltipComponent);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    _VASPackagesPresentationComponent = babelHelpers.interopRequireDefault(_VASPackagesPresentationComponent);

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
            key: "getMsisdnForProcess",
            value: function getMsisdnForProcess() {
                if (this.props.processType === "ACTIVATION") {
                    return this.props.msisdn ? _DataLayerUtils.default.processTypeToMsisdnDescriptionMap["ACTIVATION"] + this.transformMsisdn(this.props.msisdn) : '';
                } else if (_OnlineUtils.default.isAssignment(this.props.processType)) {
                    return this.props.msisdn ? _DataLayerUtils.default.processTypeToMsisdnDescriptionMap[this.props.processType] + this.transformMsisdn(this.props.msisdn) : '';
                } else {
                    return this.props.msisdnVerificationData ? _DataLayerUtils.default.processTypeToMsisdnDescriptionMap[this.props.processType] + this.transformMsisdn(this.props.msisdnVerificationData.msisdn) : '';
                }
            }
        }, {
            key: "getMNPApplication",
            value: function getMNPApplication() {
                return _DataLayerUtils.default.processTypeToMsisdnDescriptionMap["MNP_APPLICATION"] + '\xa0' + this.transformMsisdn(this.props.msisdnVerificationData.msisdn);
            }
        }, {
            key: "renderPrice",
            value: function renderPrice() {
                var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                return this.props.monthlyPricePresentation.main ? this.renderPriceDesktop(this.props.monthlyPricePresentation.main, this.props.stockLevelStatus, className) : this.renderVoidDesktop();
            }
        }, {
            key: "renderOneTimePrice",
            value: function renderOneTimePrice() {
                return /*#__PURE__*/ _react.default.createElement("div", null, this.renderPriceDesktop(this.props.oneTimePrice, this.props.stockLevelStatus));
            }
        }, {
            key: "showChangeSimButton",
            value: function showChangeSimButton() {
                return this.props.onMsisdnChangeClicked;
            }
        }, {
            key: "showLowerInstallments",
            value: function showLowerInstallments() {
                return this.props.onChangeClicked && this.props.lowerInstallmentsClicked && !!this.props.monthlyPricePresentation && !!this.props.monthlyPricePresentation.main && (this.props.monthlyPricePresentation.main.price != 0 || this.props.monthlyPricePresentation.main.priceWithoutVouchers != 0);
            }
        }, {
            key: "getClassForPrice",
            value: function getClassForPrice() {
                return this.showLowerInstallments() ? "l-col-2 u-padding-xs u-padding-top-l u-padding-left u-text-right" : "l-col-2 u-padding-l u-padding-top-l u-padding-left u-text-right";
            }
        }, {
            key: "render",
            value: function render() {
                console.warn("#***************************MultiCartItemHeaderComponent**********************************");
                console.warn(this.props.monthlyPricePresentation);
                console.warn("***************************MultiCartItemHeaderComponent**********************************#");
                return /*#__PURE__*/ _react.default.createElement("tr", null, /*#__PURE__*/ _react.default.createElement(_MultiCartItemIconCellComponent.default, {
                    entryType: this.props.type,
                    image: this.props.imageUrl,
                    icon: this.props.icon,
                    rowSpan: this.props.type === 'VAS' ? undefined : "4",
                    terminalName: this.props.title
                }), /*#__PURE__*/ _react.default.createElement("td", {
                    colSpan: this.props.priceless && '3',
                    className: "u-padding-l u-padding-top-l u-padding-right-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-left"
                }, this.props.processName && /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-font-bold g-gray5-c"
                }, this.props.processName), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-font-bold"
                }, this.props.title), /*#__PURE__*/ _react.default.createElement("br", null), this.props.loyaltyLengthDescription && /*#__PURE__*/ _react.default.createElement("p", null, " ", this.props.loyaltyLengthDescription, " "), this.props.instalmentLengthDescription && /*#__PURE__*/ _react.default.createElement("p", null, " ", this.props.instalmentLengthDescription, " "), this.props.editable && this.props.processType && [this.props.simCard && (0, _CartUtils.createSimCardDescription)(this.props.simCard), this.getMsisdnForProcess(), this.showChangeSimButton.apply(this) && /*#__PURE__*/ _react.default.createElement("a", {
                    className: "u-spacing-left",
                    href: "#",
                    key: "msisdnChangeClicked_key",
                    onClick: preventDefaultWrapper(this.props.onMsisdnChangeClicked),
                    "aria-label": "zmie\u0144 numer telefonu lub rodzaj karty sim"
                }, "Zmie\u0144")], /*#__PURE__*/ _react.default.createElement(_VASPackagesPresentationComponent.default, {
                    editable: this.props.editable,
                    onVasPackagesChangeClicked: this.props.changePackages,
                    vases: this.props.vases,
                    bundleCode: this.props.bundleCode
                }), _OnlineUtils.default.isAssignment(this.props.processType) && this.getMsisdnForProcess(), _OnlineUtils.default.isMnpApplication(this.props.processType) && this.getMNPApplication(), this.props.editable && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-spacing-top"
                }, this.props.onChangeClicked && /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    className: "u-spacing-right-l",
                    onClick: preventDefaultWrapper(this.props.onChangeClicked),
                    "aria-label": "zmień " + this.props.title
                }, "Zmie\u0144"), this.props.onDetailsClicked && /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    className: "u-spacing-right-l",
                    onClick: preventDefaultWrapper(this.props.onDetailsClicked),
                    "aria-label": "wyświetl szczegółowy opis dla " + this.props.title
                }, "Szczeg\xF3\u0142y"), this.props.onRemoveClicked && /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    onClick: preventDefaultWrapper(this.props.onRemoveClicked),
                    "aria-label": "usuń " + this.props.title + " z koszyka"
                }, "Usu\u0144"))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-right",
                    style: {
                        width: '50%'
                    }
                }, /*#__PURE__*/ _react.default.createElement(_OraStockLevelStatusComponent.default, {
                    stockLevelStatus: this.props.stockLevelStatus,
                    shouldStockLevelBeVisible: this.props.shouldStockLevelBeVisible
                }))), !this.props.priceless && /*#__PURE__*/ _react.default.createElement("td", {
                    className: "l-col-2 u-padding-l u-padding-top-l u-padding-right u-text-right"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-hide"
                }, "Op\u0142aty jednorazowe"), this.props.oneTimePrice ? this.renderOneTimePrice() : this.renderVoidDesktop(), this.props.oneTimePrice.crossedOut && /*#__PURE__*/ _react.default.createElement("del", {
                    className: "h4 u-font-small g-gray5-c u-inline-block"
                }, this.props.oneTimePrice.crossedOut)), !this.props.priceless && /*#__PURE__*/ _react.default.createElement("td", {
                    className: this.getClassForPrice()
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-hide"
                }, "Op\u0142aty miesi\u0119czne"), this.props.monthlyPricePresentation.tooltip && !_OnlineUtils.default.isAssignment(this.props.processType) ? /*#__PURE__*/ _react.default.createElement(_ProductOfferPriceTooltipComponent.default, babelHelpers.extends({
                    key: this.props.monthlyPricePresentation.tooltip.id
                }, this.props.monthlyPricePresentation.tooltip), this.renderPrice()) : this.renderPrice(), this.props.monthlyPricePresentation.crossedOut && /*#__PURE__*/ _react.default.createElement("del", {
                    className: "h4 u-font-small g-gray5-c u-inline-block"
                }, this.props.monthlyPricePresentation.crossedOut), this.props.monthlyPricePresentation.subtitle && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "g-gray5-c u-font-small u-clear-both"
                }, this.props.monthlyPricePresentation.subtitle), this.showLowerInstallments() && /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("a", {
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