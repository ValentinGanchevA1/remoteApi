define(["exports", "react", "./MultiCartItemAttributeComponent", "./MultiCartItemIconCellComponent", "eshop/components/OraStockLevelStatusComponent", "eshop/utils/DataLayerUtils", "./../utils/CartUtils", "./VASPackagesPresentationComponent"], function(_exports, _react, _MultiCartItemAttributeComponent, _MultiCartItemIconCellComponent, _OraStockLevelStatusComponent, _DataLayerUtils, _CartUtils, _VASPackagesPresentationComponent) {
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

    var MultiCartItemHeaderMobileComponent = /*#__PURE__*/ function(_MultiCartItemAttribu) {
        babelHelpers.inherits(MultiCartItemHeaderMobileComponent, _MultiCartItemAttribu);

        var _super = _createSuper(MultiCartItemHeaderMobileComponent);

        function MultiCartItemHeaderMobileComponent(props) {
            babelHelpers.classCallCheck(this, MultiCartItemHeaderMobileComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(MultiCartItemHeaderMobileComponent, [{
            key: "getMsisdnDescriptionForProcess",
            value: function getMsisdnDescriptionForProcess() {
                return _DataLayerUtils.default.processTypeToMsisdnDescriptionMap[this.props.processType];
            }
        }, {
            key: "getMsisdn",
            value: function getMsisdn() {
                return this.props.msisdnVerificationData ? this.props.msisdnVerificationData.msisdn : this.props.msisdn;
            }
        }, {
            key: "showChangeSimButton",
            value: function showChangeSimButton() {
                return this.props.onMsisdnChangeClicked && this.props.changeAllowed;
            }
        }, {
            key: "showLowerInstallments",
            value: function showLowerInstallments() {
                return this.props.onChangeClicked && this.props.lowerInstallmentsClicked && !!this.props.monthlyPricePresentation && !!this.props.monthlyPricePresentation.main && (this.props.monthlyPricePresentation.main.price != 0 || this.props.monthlyPricePresentation.main.priceWithoutVouchers != 0);
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-left-l u-padding-right-l u-padding-l"
                }, /*#__PURE__*/ _react.default.createElement("table", {
                    className: "u-table-fixed"
                }, /*#__PURE__*/ _react.default.createElement("tbody", null, /*#__PURE__*/ _react.default.createElement("tr", null, /*#__PURE__*/ _react.default.createElement(_MultiCartItemIconCellComponent.default, {
                    entryType: this.props.type,
                    image: this.props.imageUrl,
                    icon: this.props.icon,
                    terminalName: this.props.title
                }), /*#__PURE__*/ _react.default.createElement("td", null, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h2"
                }, this.props.title), this.props.loyaltyLengthDescription && /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-small-padding-m"
                }, " ", this.props.loyaltyLengthDescription, " "), this.props.instalmentLengthDescription && /*#__PURE__*/ _react.default.createElement("p", null, " ", this.props.instalmentLengthDescription, " "), this.props.processType && this.props.editable && [this.props.simCard && (0, _CartUtils.createSimCardDescription)(this.props.simCard), this.getMsisdnDescriptionForProcess() + this.transformMsisdn(this.getMsisdn() ? this.getMsisdn() : '') + " ", this.showChangeSimButton.apply(this) && /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    key: "msisdnChangeClicked_key",
                    onClick: preventDefaultWrapper(this.props.onMsisdnChangeClicked),
                    "aria-label": "zmie\u0144 numer telefonu lub rodzaj karty sim"
                }, "Zmie\u0144")], /*#__PURE__*/ _react.default.createElement(_VASPackagesPresentationComponent.default, {
                    className: this.props.editable ? "u-small-padding-top-m" : "",
                    editable: this.props.editable,
                    onVasPackagesChangeClicked: this.props.changePackages,
                    vases: this.props.vases,
                    bundleCode: this.props.bundleCode
                }), /*#__PURE__*/ _react.default.createElement(_OraStockLevelStatusComponent.default, {
                    stockLevelStatus: this.props.stockLevelStatus,
                    shouldStockLevelBeVisible: this.props.shouldStockLevelBeVisible
                })))))), /*#__PURE__*/ _react.default.createElement("div", null, this.showLowerInstallments() && /*#__PURE__*/ _react.default.createElement("table", {
                    className: "u-table-fixed"
                }, /*#__PURE__*/ _react.default.createElement("tbody", null, /*#__PURE__*/ _react.default.createElement("tr", null, /*#__PURE__*/ _react.default.createElement("td", {
                    className: "u-padding-top-m u-padding-m u-padding-left-l u-padding-right-l u-text-center u-small-border-top" + (this.props.lowerInstallmentsClicked ? " u-border-r" : "")
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    className: "u-text-decoration-none",
                    onClick: this.props.lowerInstallmentsClicked
                }, !!this.props.descriptions && this.props.descriptions.lowerInstallments || "Obniż raty"))))), /*#__PURE__*/ _react.default.createElement("table", {
                    className: "u-table-fixed"
                }, /*#__PURE__*/ _react.default.createElement("tbody", null, /*#__PURE__*/ _react.default.createElement("tr", null, this.props.onChangeClicked && /*#__PURE__*/ _react.default.createElement("td", {
                    className: "u-padding-top-m u-padding-m u-padding-left-l u-padding-right-l u-text-center u-small-border-top u-no-border-l"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    className: "u-text-decoration-none",
                    onClick: this.props.onChangeClicked
                }, "Zmie\u0144")), this.props.onDetailsClicked && /*#__PURE__*/ _react.default.createElement("td", {
                    className: "u-padding-top-m u-padding-m u-padding-left-l u-padding-right-l u-text-center u-small-border-top" + (this.props.onChangeClicked ? " u-border-r" : "")
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    className: "u-text-decoration-none",
                    onClick: this.props.onDetailsClicked
                }, "Szczeg\xF3\u0142y")))))));
            }
        }]);
        return MultiCartItemHeaderMobileComponent;
    }(_MultiCartItemAttributeComponent.default);

    _exports.default = MultiCartItemHeaderMobileComponent;
});
//# sourceMappingURL=MultiCartItemHeaderMobileComponent.js.map