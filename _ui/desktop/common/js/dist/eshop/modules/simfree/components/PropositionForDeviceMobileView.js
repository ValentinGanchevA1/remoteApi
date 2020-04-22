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

    window.propositionCheckoutInputCount = 0;

    var PropositionForDeviceMobileView = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(PropositionForDeviceMobileView, _React$Component);

        var _super = _createSuper(PropositionForDeviceMobileView);

        function PropositionForDeviceMobileView(props) {
            var _this;

            babelHelpers.classCallCheck(this, PropositionForDeviceMobileView);
            _this = _super.call(this, props);
            var proposition = _this.props.offer;
            window.propositionCheckoutInputCount++;
            _this.state = {
                inputId: (_this.props.inputName ? _this.props.inputName + "-" : "offerPlans-") + proposition.id + "-mobile" + window.propositionCheckoutInputCount
            };
            return _this;
        }

        babelHelpers.createClass(PropositionForDeviceMobileView, [{
            key: "isClientContext",
            value: function isClientContext() {
                return this.props.clientContext || (this.props.contractRole ? true : false);
            }
        }, {
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
            key: "render",
            value: function render() {
                var proposition = this.props.offer;
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-no-margin  "
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-radio opl-radio u-w-100 u-box-sizing u-padding-m"
                }, /*#__PURE__*/ _react.default.createElement("input", {
                    id: this.state.inputId,
                    key: this.state.inputId,
                    type: "radio",
                    name: this.state.inputId,
                    checked: this.props.isSelected,
                    className: "switcher-trigger"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci"
                }), /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-display_table u-block u-no-margin "
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12  u-clearfix u-display_table-cell  u-no-padding-r u-block u-no-padding-left"
                }, /*#__PURE__*/ _react.default.createElement("label", {
                    className: "o-ci-label u-font-normal g-black1-c u-no-padding",
                    htmlFor: this.state.inputId
                }, /*#__PURE__*/ _react.default.createElement("p", null, this.props.offer.rateplanName)))))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12  u-clearfix u-display_table-cell  u-no-padding-r u-block u-no-padding-left u-padding"
                }, /*#__PURE__*/ _react.default.createElement("p", null, "Op\u0142ata abonamentowa:")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12  u-clearfix u-display_table-cell  u-no-padding-r u-block u-no-padding-left"
                }, /*#__PURE__*/ _react.default.createElement(_ProductListOfferPriceTag.default, {
                    proposition: proposition,
                    clientContext: this.props.clientContext,
                    contractRole: this.props.contractRole,
                    loyaltyLength: this.props.loyaltyLength,
                    alignClass: "u-left",
                    mainPriceClass: "",
                    monthlyString: "mies.",
                    offerDiscountInfoDescription: this.props.offerDiscountInfoDescription,
                    offerDiscountInfoConvDescription: this.props.offerDiscountInfoConvDescription,
                    baseId: "mobile",
                    key: "mobile_" + (!!this.props.clientContext ? "clientContextOn" : "clientContextOff")
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12  u-clearfix u-display_table-cell  u-no-padding-r u-block u-no-padding-left u-padding-top-m u-padding"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-medium-hide u-inline-block"
                }, this.props.selectedOfferType == "DATA" ? "Pakiet danych na konto:" : "Internet w telefonie:")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12  u-clearfix u-display_table-cell  u-no-padding-r u-block u-no-padding-left "
                }, proposition.features && /*#__PURE__*/ _react.default.createElement(_PropositionFeatureForDevice.default, {
                    proposition: proposition
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12  u-clearfix u-display_table-cell  u-no-padding-r u-block u-no-padding-left u-padding-top-s u-padding"
                }, /*#__PURE__*/ _react.default.createElement(_VasPackages.default, {
                    offer: proposition
                })), !!this.props.isProductDetailsPage && /*#__PURE__*/ _react.default.createElement(_PropositionDetailsForDevice.default, babelHelpers.extends({}, proposition, {
                    proposition: this.props.entryUnderChange || proposition,
                    clientContext: this.isClientContext()
                }, this.getOptionalDetails())));
            }
        }]);
        return PropositionForDeviceMobileView;
    }(_react.default.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            isProductDetailsPage: (0, _selectors.isProductDetailsPage)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {};
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PropositionForDeviceMobileView);

    _exports.default = _default;
});
//# sourceMappingURL=PropositionForDeviceMobileView.js.map