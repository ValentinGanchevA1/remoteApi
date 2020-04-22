define(["exports", "react", "react-redux", "eshop/modules/configurator/actions/filters", "eshop/modules/configurator/actions/offers", "eshop/modules/configurator/actions/cart", "eshop/modules/configurator/selectors/offers", "eshop/modules/configurator/components/lp/offers/PickDevicePopup", "eshop/utils/OnlineUtils", "eshop/modules/configurator/selectors/filters", "eshop/modules/configurator/selectors/metaData", "eshop/components/InfoComponent", "eshop/modules/checkout/actions/app", "eshop/modules/cart/actions/cart", "eshop/modules/configurator/components/AddMoreB2B"], function(_exports, _react, _reactRedux, _filters, _offers, _cart, _offers2, _PickDevicePopup, _OnlineUtils, _filters2, _metaData, _InfoComponent, _app, _cart2, _AddMoreB2B) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _PickDevicePopup = babelHelpers.interopRequireDefault(_PickDevicePopup);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    _InfoComponent = babelHelpers.interopRequireDefault(_InfoComponent);
    _AddMoreB2B = babelHelpers.interopRequireDefault(_AddMoreB2B);

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

    var AddToCartComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(AddToCartComponent, _Component);

        var _super = _createSuper(AddToCartComponent);

        function AddToCartComponent(props) {
            var _this;

            babelHelpers.classCallCheck(this, AddToCartComponent);
            _this = _super.call(this, props);
            _this.selectOfferNoPhoneAction = _this.selectOfferNoPhoneAction.bind(babelHelpers.assertThisInitialized(_this));
            _this.pickDeviceAction = _this.pickDeviceAction.bind(babelHelpers.assertThisInitialized(_this));
            _this.showPickDeviceModal = _this.showPickDeviceModal.bind(babelHelpers.assertThisInitialized(_this));
            return _this;
        }

        babelHelpers.createClass(AddToCartComponent, [{
            key: "componentWillMount",
            value: function componentWillMount() {
                this.props.fetchContractRole();

                _PickDevicePopup.default.initialize(_OnlineUtils.default.extractObject(this.props.descriptions, "label.popup."));

                this.props.clearAddTerminalToOfferFromSessionStorage();
            }
        }, {
            key: "selectOfferNoPhoneAction",
            value: function selectOfferNoPhoneAction(e) {
                e && e.preventDefault();
                this.props.addToCartWithCounter();
            }
        }, {
            key: "pickDeviceAction",
            value: function pickDeviceAction(e) {
                e && e.preventDefault();
                this.props.setPropositionListSoftBundleGroup();
                this.props.pickDevice(this.props.descriptions.deviceListAddress);
            }
        }, {
            key: "showPickDeviceModal",
            value: function showPickDeviceModal(e) {
                e.preventDefault();

                _PickDevicePopup.default.open({
                    onClickConfirm: this.pickDeviceAction,
                    onClickDecline: this.selectOfferNoPhoneAction
                });
            }
        }, {
            key: "onClick",
            value: function onClick() {
                if (this.props.propositionListCount > 0 && this.props.isMsisdndVerificationRequired && this.props.checkMsisdnResult && !this.props.checkMsisdnResult.isPositive) {
                    this.props.warningOn();

                    _OnlineUtils.default.scrollToComponent("msisdn-verification-container-row", "header");
                } else {
                    this.props.setPropositionListSoftBundleGroup();
                    this.props.addToCartWithCounter();
                }
            }
        }, {
            key: "addMorePrice",
            value: function addMorePrice() {
                if (this.props.firstOfferFromProductFilter && this.props.firstOfferFromProductFilter.payments) {
                    var priceObj = _OnlineUtils.default.getPaymentsForRole(this.props.firstOfferFromProductFilter.payments, this.props.contractRole);

                    return _OnlineUtils.default.formatPrice(priceObj.basePrice.originalNetPrice);
                } else {
                    return "";
                }
            }
        }, {
            key: "render",
            value: function render() {
                if (this.props.isPropositionListCountSetMode || this.props.offersLoading || !this.props.selectedLoyaltyLengthValue && this.props.propositionListCount !== 0) {
                    return null;
                }

                var addMorePrice = this.addMorePrice();
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-full-row g-gray1-bg"
                }, this.props.addToCartButtonEnabled && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row u-padding-top"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "g-white1-bg"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-position-relative"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-left-l u-padding-right-l "
                }, /*#__PURE__*/ _react.default.createElement("table", {
                    className: "u-table-fixed"
                }, /*#__PURE__*/ _react.default.createElement("tbody", null, /*#__PURE__*/ _react.default.createElement("tr", null, /*#__PURE__*/ _react.default.createElement("td", {
                    className: "opl-checkout__icon__cell"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--only  g-icon g-icon--device-smartphone"
                })), /*#__PURE__*/ _react.default.createElement("td", {
                    className: "u-padding-top-l u-padding-l u-padding-right-l u-font-bold"
                }, "Dobierz " + (this.props.selectedOfferType == "VOICE" ? "telefon" : "terminal") + " do oferty"), /*#__PURE__*/ _react.default.createElement("td", {
                    className: "opl-checkout__button__cell u-padding-top-l u-padding-l"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    "aria-label": "Dobierz telefon do oferty",
                    className: "opl-product-addlink u-right u-small-right",
                    onClick: this.pickDeviceAction
                }))))))))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row u-medium-no-padding u-small-no-padding u-small-padding-m  "
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-padding-top-l u-padding-left-l u-padding-right-l u-padding-s"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-8 l-col-9 u-left u-spacing-l"
                }, this.props.propositionListCount > 0 && /*#__PURE__*/ _react.default.createElement(_InfoComponent.default, {
                    color: "grey",
                    bgColor: "grey"
                }, "Przechodz\u0105c do nast\u0119pnej karty bez wybranego urz\u0105dzenia, dodasz do koszyka tylko kart\u0119 SIM ")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-3 u-right u-spacing-l "
                }, /*#__PURE__*/ _react.default.createElement("button", {
                    className: "opl-btn opl-btn--primary opl-btn--medium o-btn u-w-100",
                    onClick: this.onClick.bind(this),
                    disabled: !this.props.addToCartButtonEnabled && this.props.propositionListCount > 0
                }, this.props.propositionListCount > 1 ? "Przejdź do kolejnej karty" : this.props.propositionListCount === 1 ? "Dodaj do koszyka" : "Przejdź do koszyka")))), this.props.propositionListCount === 0 && addMorePrice && /*#__PURE__*/ _react.default.createElement(_AddMoreB2B.default, {
                    onClick: this.props.increment,
                    price: addMorePrice
                }));
            }
        }]);
        return AddToCartComponent;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            selectedLoyaltyLengthValue: (0, _filters2.getSelectedLoyaltyLengthValue)(state),
            isPropositionListCountSetMode: (0, _filters2.getPropositionListCountSetMode)(state),
            propositionListCount: (0, _filters2.getPropositionListCount)(state),
            addToCartButtonEnabled: !!(0, _offers2.getSelectedBaseRatePlanId)(state),
            offersLoading: (0, _metaData.getOffersLoading)(state),
            checkMsisdnResult: (0, _filters2.getCheckMsisdnResult)(state),
            isMsisdndVerificationRequired: (0, _filters2.isMsisdndVerificationRequired)(state),
            firstOfferFromProductFilter: (0, _offers2.getFirstOfferFromProductFilter)(state),
            contractRole: (0, _offers2.getContractRole)(state),
            selectedOfferType: (0, _filters2.getSelectedOfferType)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            addToCartWithCounter: function addToCartWithCounter() {
                return dispatch((0, _cart.addToCartWithCounter)());
            },
            pickDevice: function pickDevice(url) {
                return dispatch((0, _offers.pickDeviceB2B)(url));
            },
            increment: function increment() {
                return dispatch((0, _filters.propositionListCountIncrement)());
            },
            gotoCartSummary: function gotoCartSummary() {
                return dispatch((0, _app.gotoCartSummary)());
            },
            warningOn: function warningOn() {
                return dispatch((0, _filters.requiredMsisdnVerificationOn)());
            },
            clearAddTerminalToOfferFromSessionStorage: function clearAddTerminalToOfferFromSessionStorage() {
                return dispatch((0, _cart2.clearAddTerminalToOfferFromSessionStorage)());
            },
            setPropositionListSoftBundleGroup: function setPropositionListSoftBundleGroup() {
                return dispatch((0, _filters.setPropositionListSoftBundleGroup)());
            },
            fetchContractRole: function fetchContractRole() {
                return dispatch((0, _offers.fetchContractRole)());
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AddToCartComponent);

    _exports.default = _default;
});
//# sourceMappingURL=AddToCartComponent.js.map