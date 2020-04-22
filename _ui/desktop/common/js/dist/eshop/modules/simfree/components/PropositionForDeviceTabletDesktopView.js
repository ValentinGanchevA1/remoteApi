define(["exports", "react", "react-redux", "eshop/modules/simfree/components/filter/view/ProductListOfferPriceTag", "eshop/modules/configurator/components/lp/offers/VasPackages", "eshop/modules/simfree/components/PropositionDetailsForDevice", "eshop/modules/simfree/components/PropositionFeatureForDevice", "../selectors"], function(_exports, _react, _reactRedux, _ProductListOfferPriceTag, _VasPackages, _PropositionDetailsForDevice, _PropositionFeatureForDevice, _selectors) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _ProductListOfferPriceTag = babelHelpers.interopRequireDefault(_ProductListOfferPriceTag);
    _VasPackages = babelHelpers.interopRequireDefault(_VasPackages);
    _PropositionDetailsForDevice = babelHelpers.interopRequireDefault(_PropositionDetailsForDevice);
    _PropositionFeatureForDevice = babelHelpers.interopRequireDefault(_PropositionFeatureForDevice);

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

    var PropositionForDeviceTabletDesktopView = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(PropositionForDeviceTabletDesktopView, _React$Component);

        var _super = _createSuper(PropositionForDeviceTabletDesktopView);

        function PropositionForDeviceTabletDesktopView() {
            babelHelpers.classCallCheck(this, PropositionForDeviceTabletDesktopView);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(PropositionForDeviceTabletDesktopView, [{
            key: "getOptionalDetails",
            value: function getOptionalDetails() {
                if (this.props.entryUnderChange) {
                    var details;

                    try {
                        details = JSON.parse(this.props.entryUnderChange.details);
                    } catch (err) {
                        console.log("## details on cart parsing error##", err);
                    }

                    return {
                        data: details
                    };
                } else {
                    return {};
                }
            }
        }, {
            key: "isClientContext",
            value: function isClientContext() {
                return this.props.clientContext || (this.props.contractRole ? true : false);
            }
        }, {
            key: "render",
            value: function render() {
                var proposition = this.props.offer;
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-no-margin"
                }, !this.props.addTerminalToOfferBundleNo && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-1 u-no-padding-left"
                }, /*#__PURE__*/ _react.default.createElement("label", {
                    className: "o-radio opl-radio u-small-hide",
                    onClick: function onClick(e) {
                        return e.preventDefault();
                    }
                }, /*#__PURE__*/ _react.default.createElement("input", {
                    type: "radio",
                    name: this.props.inputName || "offerPlans",
                    className: "switcher-trigger",
                    checked: this.props.isSelected,
                    value: proposition.id
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci-label"
                }))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-4    u-small-no-padding-r u-no-padding-left"
                }, /*#__PURE__*/ _react.default.createElement("p", null, proposition.rateplanName), !!this.props.isProductDetailsPage && /*#__PURE__*/ _react.default.createElement(_PropositionDetailsForDevice.default, babelHelpers.extends({}, proposition, {
                    proposition: this.props.entryUnderChange || proposition,
                    clientContext: this.isClientContext()
                }, this.getOptionalDetails()))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col " + (this.props.addTerminalToOfferBundleNo ? " l-col-5" : "l-col-4") + " u-small-no-padding-r"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, proposition.features && /*#__PURE__*/ _react.default.createElement(_PropositionFeatureForDevice.default, {
                    proposition: proposition
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, /*#__PURE__*/ _react.default.createElement(_VasPackages.default, {
                    offer: proposition,
                    key: "vasPackagesLargeMedium",
                    changable: !this.props.addTerminalToOfferBundleNo
                })))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col  l-col-3  u-block u-no-padding-r"
                }, /*#__PURE__*/ _react.default.createElement(_ProductListOfferPriceTag.default, {
                    proposition: this.props.offer,
                    clientContext: this.props.clientContext,
                    contractRole: this.props.contractRole,
                    loyaltyLength: this.props.loyaltyLength,
                    alignClass: "u-right",
                    mainPriceClass: "",
                    monthlyString: "mies.",
                    offerDiscountInfoDescription: this.props.offerDiscountInfoDescription,
                    offerDiscountInfoConvDescription: this.props.offerDiscountInfoConvDescription,
                    baseId: "desktop",
                    key: "desktop_" + (!!this.props.clientContext ? "clientContextOn" : "clientContextOff")
                })));
            }
        }]);
        return PropositionForDeviceTabletDesktopView;
    }(_react.default.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            isProductDetailsPage: (0, _selectors.isProductDetailsPage)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {};
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PropositionForDeviceTabletDesktopView);

    _exports.default = _default;
});
//# sourceMappingURL=PropositionForDeviceTabletDesktopView.js.map