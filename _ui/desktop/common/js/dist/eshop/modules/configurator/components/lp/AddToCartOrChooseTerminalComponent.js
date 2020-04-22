define(["exports", "react", "react-redux", "eshop/modules/configurator/actions/filters", "eshop/modules/cart/selectors", "eshop/modules/configurator/actions/cart", "eshop/modules/configurator/selectors/offers", "eshop/modules/configurator/selectors/filters", "eshop/modules/configurator/components/lp/offers/PickDevicePopup", "eshop/utils/OnlineUtils", "eshop/modules/configurator/selectors/metaData", "eshop/modules/checkout/actions/app", "eshop/modules/cart/actions/cart", "eshop/modules/simfree/actions/app", "eshop/modules/configurator/actions/offers", "../../../cart/components/entriesList/mobile/SimCartIndexHeader", "eshop/modules/core/enum/MarketSegment", "eshop/modules/configurator/components/AddMoreB2B", "eshop/modules/configurator/components/AddMoreB2C", "eshop/modules/auth/actions/authorization", "eshop/modules/simfree/selectors"], function(_exports, _react, _reactRedux, _filters, _selectors, _cart, _offers, _filters2, _PickDevicePopup, _OnlineUtils, _metaData, _app, _cart2, _app2, _offers2, _SimCartIndexHeader, _MarketSegment, _AddMoreB2B, _AddMoreB2C, _authorization, _selectors2) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _PickDevicePopup = babelHelpers.interopRequireDefault(_PickDevicePopup);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    _SimCartIndexHeader = babelHelpers.interopRequireDefault(_SimCartIndexHeader);
    _MarketSegment = babelHelpers.interopRequireDefault(_MarketSegment);
    _AddMoreB2B = babelHelpers.interopRequireDefault(_AddMoreB2B);
    _AddMoreB2C = babelHelpers.interopRequireDefault(_AddMoreB2C);

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

    var AddToCartOrChooseTerminalComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(AddToCartOrChooseTerminalComponent, _Component);

        var _super = _createSuper(AddToCartOrChooseTerminalComponent);

        function AddToCartOrChooseTerminalComponent(props) {
            var _this;

            babelHelpers.classCallCheck(this, AddToCartOrChooseTerminalComponent);
            _this = _super.call(this, props);
            _this.selectOfferNoPhoneAction = _this.selectOfferNoPhoneAction.bind(babelHelpers.assertThisInitialized(_this));
            _this.pickDeviceAction = _this.pickDeviceAction.bind(babelHelpers.assertThisInitialized(_this));
            _this.showPickDeviceModal = _this.showPickDeviceModal.bind(babelHelpers.assertThisInitialized(_this));
            return _this;
        }

        babelHelpers.createClass(AddToCartOrChooseTerminalComponent, [{
            key: "componentWillMount",
            value: function componentWillMount() {
                _PickDevicePopup.default.initialize(_OnlineUtils.default.extractObject(this.props.descriptions, "label.popup."));

                this.props.clearAddTerminalToOfferFromSessionStorage();
            }
        }, {
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps, nextContext) {
                console.log("AddToCartOrChooseTerminalComponent.componentWillReceiveProps: ", nextProps.propositionListSoftBundleGroup, nextProps.selectedSoftBundleGroup);
                console.log("this.props:", this.props);
                console.log("nxtprops:", nextProps);

                if (this.props.propositionListCount < 1 && nextProps.selectedSoftBundleGroup && nextProps.propositionListSoftBundleGroup && nextProps.propositionListSoftBundleGroup !== nextProps.selectedSoftBundleGroup) {
                    console.log("AddToCartOrChooseTerminalComponent.componentWillReceiveProps XXXX");
                    this.props.setPropositionListCount(1);
                }
            }
        }, {
            key: "selectOfferNoPhoneAction",
            value: function selectOfferNoPhoneAction(e) {
                this.props.setPropositionListSoftBundleGroup();
                e && e.preventDefault();
                this.props.addToCartWithCounter();
            }
        }, {
            key: "pickDeviceAction",
            value: function pickDeviceAction(e) {
                console.log("pickDeviceAction");
                this.props.setPropositionListSoftBundleGroup();
                e && e.preventDefault();
                this.props.pickDevice(this.props.selectedOfferId, this.props.descriptions.deviceListAddress + '?');
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
            key: "onClickAdd",
            value: function onClickAdd() {
                if (this.props.cartIsFix) {
                    var msg = this.props.descriptions && this.props.descriptions.fixincartmsg || "W koszyku jest już oferta stacjonarna";
                    this.props.showError(msg);
                } else if (this.props.propositionListCount > 0 && this.props.isMsisdndVerificationRequired && this.props.checkMsisdnResult && !this.props.checkMsisdnResult.isPositive && this.props.channels.sales != "WWW") {
                    this.props.warningOn();

                    _OnlineUtils.default.scrollToComponent("msisdn-verification-container-row", "header");
                } else {
                    //   this.props.setPropositionListSoftBundleGroup();
                    this.props.selectOfferNoPhone(this.props.selectedOfferId);
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
            key: "noScroll",
            value: function noScroll(event) {
                event.preventDefault();
            }
        }, {
            key: "increment",
            value: function increment() {
                this.props.increment();
                this.props.setOfferType(this.props.selectedOfferType); //to do zmienić na defaultowe
            }
        }, {
            key: "isAssignment",
            value: function isAssignment() {
                return _OnlineUtils.default.isAssignment(this.props.processType);
            }
        }, {
            key: "render",
            value: function render() {
                if (this.props.isPropositionListCountSetMode || _OnlineUtils.default.isAssignment(this.props.processType)) return null;
                var simCountQueue = [];
                var cartElementsCount = this.props.entries ? this.props.entries.length : 0;

                var _this$props$descripti = _objectSpread({}, this.props.descriptions),
                    stepDescriptionLabel = _this$props$descripti.stepDescriptionLabel,
                    priceDescriptionLabel = _this$props$descripti.priceDescriptionLabel;

                if (!this.props.propositionListSoftBundleGroup || this.props.propositionListSoftBundleGroup === this.props.selectedSoftBundleGroup) {
                    for (var i = cartElementsCount + 1; i < this.props.simCountSelected; i++) {
                        simCountQueue.push( /*#__PURE__*/ _react.default.createElement(SimCountQueueElement, babelHelpers.extends({
                            key: "simQueueElement" + i,
                            index: i
                        }, {
                            stepDescriptionLabel: stepDescriptionLabel,
                            priceDescriptionLabel: priceDescriptionLabel
                        })));
                    }
                }

                var addMore = this.props.isB2B ? /*#__PURE__*/ _react.default.createElement(_AddMoreB2B.default, {
                    onClick: this.increment.bind(this),
                    price: this.addMorePrice()
                }) : /*#__PURE__*/ _react.default.createElement(_AddMoreB2C.default, {
                    onClick: this.increment.bind(this)
                });
                var isButtonEnabled = this.props.propositionListCount > 0 && (this.props.selectedLoyaltyLengthValue || this.props.selectedLoyaltyLengthValue === 0);
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-full-row g-gray1-bg"
                }, isButtonEnabled && !_OnlineUtils.default.isMnpApplication(this.props.processType) && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row u-padding-xl u-padding-top-l "
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: " u-border-top u-margin-left-s u-margin-right-s u-padding-m"
                }), /*#__PURE__*/ _react.default.createElement("h4", {
                    className: "h3 u-small-text-center u-small-hide"
                }, this.props.descriptions.header), /*#__PURE__*/ _react.default.createElement("h4", {
                    className: "h2 u-small-text-center u-padding-m u-large-hide u-medium-hide"
                }, this.props.descriptions.header), /*#__PURE__*/ _react.default.createElement("ul", {
                    className: "l-row u-text-center"
                }, /*#__PURE__*/ _react.default.createElement("li", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-6 "
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-position-relative"
                }, /*#__PURE__*/ _react.default.createElement("button", {
                    onClick: this.pickDeviceAction.bind(this),
                    disabled: !this.props.addToCartButtonEnabled,
                    className: " o-btn opl-btn opl-btn--secondary u-w-100 u-no-border u-padding-all-l u-box-shadow u-box-shadow--s u-small-margin-l g-white1-bg"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h5 u-no-margin " + (!this.props.addToCartButtonEnabled && "g-gray5-c")
                }, this.props.descriptions.labelAddWithTerminal || "Dobierz urządzenie")))), /*#__PURE__*/ _react.default.createElement("li", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-6 "
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-position-relative"
                }, /*#__PURE__*/ _react.default.createElement("button", {
                    onClick: this.onClickAdd.bind(this),
                    disabled: !this.props.addToCartButtonEnabled,
                    className: " o-btn opl-btn opl-btn--secondary u-w-100 u-no-border u-padding-all-l u-box-shadow u-box-shadow--s u-small-margin-l g-white1-bg"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h5 u-no-margin " + (!this.props.addToCartButtonEnabled && "g-gray5-c")
                }, this.props.descriptions.labelAdd || "Wybierz bez urządzenia")))))), isButtonEnabled && _OnlineUtils.default.isMnpApplication(this.props.processType) && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row u-padding-xl"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-position-relative"
                }, /*#__PURE__*/ _react.default.createElement("button", {
                    onClick: this.onClickAdd.bind(this),
                    disabled: this.props.isMsisdndVerificationRequired && this.props.checkMsisdnResult && !this.props.checkMsisdnResult.isPositive,
                    className: " o-btn opl-btn opl-btn--secondary u-w-100 u-no-border u-padding-all-l u-box-shadow u-box-shadow--s u-small-margin-l g-white1-bg"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h5 u-no-margin " + (this.props.isMsisdndVerificationRequired && this.props.checkMsisdnResult && !this.props.checkMsisdnResult.isPositive && "g-gray5-c")
                }, this.props.descriptions.labelAddMnp || "Złóż wniosek na przeniesienie numeru"))))), simCountQueue, cartElementsCount < this.props.maxSimCount && this.props.propositionListCount === 0 && addMore, this.props.propositionListCount == 0 && /*#__PURE__*/ _react.default.createElement(GoToCart, this.props));
            }
        }]);
        return AddToCartOrChooseTerminalComponent;
    }(_react.Component);

    var GoToCart = /*#__PURE__*/ function(_Component2) {
        babelHelpers.inherits(GoToCart, _Component2);

        var _super2 = _createSuper(GoToCart);

        function GoToCart(props) {
            babelHelpers.classCallCheck(this, GoToCart);
            return _super2.call(this, props);
        }

        babelHelpers.createClass(GoToCart, [{
            key: "goToCart",
            value: function goToCart(e) {
                e.preventDefault();
                this.props.gotoCartSummary();
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row u-padding-l-xl u-padding-top-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-3  medium-offset-by-6 large-offset-by-9"
                }, /*#__PURE__*/ _react.default.createElement("button", {
                    className: "opl-btn opl-btn--primary opl-btn--medium o-btn u-w-100",
                    onClick: this.goToCart.bind(this),
                    disabled: !this.props.addToCartButtonEnabled && this.props.propositionListCount > 0
                }, "Przejdź do koszyka"))));
            }
        }]);
        return GoToCart;
    }(_react.Component);

    var SimCountQueueElement = function SimCountQueueElement(_ref) {
        var index = _ref.index,
            _ref$stepDescriptionL = _ref.stepDescriptionLabel,
            stepDescriptionLabel = _ref$stepDescriptionL === void 0 ? "Zacznij od wybrania planu komórkowego dla pierwszej karty SIM" : _ref$stepDescriptionL,
            _ref$priceDescription = _ref.priceDescriptionLabel,
            priceDescriptionLabel = _ref$priceDescription === void 0 ? "20 zł taniej" : _ref$priceDescription;
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-page-row u-padding-l"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "g-white1-bg u-padding-all-l"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row u-medium-hide"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-3 l-col-3 "
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "o-icon-list g-gray6-c"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "o-icon-list__item"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "o-icon-list__icon "
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "g-icon g-icon--only g-icon--sim"
        })), /*#__PURE__*/ _react.default.createElement("div", {
            className: "o-icon-list__text u-vertical-middle"
        }, /*#__PURE__*/ _react.default.createElement(_SimCartIndexHeader.default, {
            simIndex: index,
            className: "g-gray6-c u-no-margin"
        }))))), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-5 l-col-5 u-large-padding-top"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-medium-hide",
            style: {
                marginLeft: 45 + 'px'
            }
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "o-icon-list g-gray6-c"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "o-icon-list__item"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "o-icon-list__icon u-small-padding-right-s u-small-no-padding-top"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "g-icon g-icon--info g-icon--before g-icon--xs-s",
            "aria-hidden": "true"
        })), /*#__PURE__*/ _react.default.createElement("div", {
            className: "o-icon-list__text u-vertical-middle"
        }, /*#__PURE__*/ _react.default.createElement("p", null, stepDescriptionLabel)))))), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-4 l-col-4  u-small-text-left u-text-right u-padding-top-s"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "",
            style: {
                marginLeft: 45 + 'px'
            }
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "o-icon-list g-brand2-c"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "o-icon-list__item"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "o-icon-list__icon"
        }), /*#__PURE__*/ _react.default.createElement("div", {
            className: "o-icon-list__text u-vertical-middle"
        }, /*#__PURE__*/ _react.default.createElement("p", {
            className: "h3 g-brand2-c u-no-margin"
        }, priceDescriptionLabel, " "))))))), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row u-small-hide u-large-hide"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-6 "
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "o-icon-list g-gray6-c"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "o-icon-list__item"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "o-icon-list__icon u-vertical-middle"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "g-icon g-icon--only g-icon--sim "
        })), /*#__PURE__*/ _react.default.createElement("div", {
            className: "o-icon-list__text u-vertical-middle"
        }, /*#__PURE__*/ _react.default.createElement(_SimCartIndexHeader.default, {
            simIndex: index,
            className: "g-gray6-c u-no-margin"
        }))))), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-6  u-small-hide u-large-hide u-text-right"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-padding-top-s",
            style: {
                marginLeft: 45 + 'px'
            }
        }, /*#__PURE__*/ _react.default.createElement("p", {
            className: "h3 g-brand2-c u-no-margin"
        }, priceDescriptionLabel)))), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row u-small-hide u-large-hide"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-9 "
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-margin-top u-small-hide u-large-hide"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "o-icon-list g-gray6-c"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "o-icon-list__item"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "o-icon-list__icon u-padding-right u-no-padding-top"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "g-icon g-icon--info g-icon--before g-icon--xs-s",
            "aria-hidden": "true"
        })), /*#__PURE__*/ _react.default.createElement("div", {
            className: "o-icon-list__text u-vertical-middle"
        }, /*#__PURE__*/ _react.default.createElement("p", null, stepDescriptionLabel)))))))));
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            selectedLoyaltyLengthValue: (0, _filters2.getSelectedLoyaltyLengthValue)(state),
            isPropositionListCountSetMode: (0, _filters2.getPropositionListCountSetMode)(state),
            propositionListCount: (0, _filters2.getPropositionListCount)(state),
            addToCartButtonEnabled: !!(0, _offers.getSelectedBaseRatePlanId)(state) && !!(0, _offers.getSelectedOfferId)(state),
            offersLoading: (0, _metaData.getOffersLoading)(state),
            checkMsisdnResult: (0, _filters2.getCheckMsisdnResult)(state),
            isMsisdndVerificationRequired: (0, _filters2.isMsisdndVerificationRequired)(state),
            firstOfferFromProductFilter: (0, _offers.getFirstOfferFromProductFilter)(state),
            contractRole: (0, _offers.getContractRole)(state),
            selectedOfferId: (0, _offers.getSelectedOfferId)(state),
            entries: (0, _selectors.getCartEntries)(state),
            isCarouselReady: (0, _metaData.getCarouselReady)(state),
            selectedOfferType: (0, _filters2.getSelectedOfferType)(state),
            maxSimCount: (0, _filters2.getMaxSimCount)(state),
            simCountSelected: (0, _filters2.getSimCountSelected)(state),
            isB2B: _MarketSegment.default.isB2B((0, _filters2.getOfferTypeCmsConfMarket)(state) || (0, _filters2.getMarketContext)(state)),
            processType: (0, _filters2.getSelectedProcessTypeValue)(state),
            selectedSoftBundleGroup: (0, _selectors2.getSelectedSoftBundleGroup)(state),
            propositionListSoftBundleGroup: (0, _filters2.getPropositionListSoftBundleGroup)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            addToCartWithCounter: function addToCartWithCounter() {
                return dispatch((0, _cart.addToCartWithCounter)());
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
            showError: function showError(msg) {
                return dispatch((0, _authorization.showError)(msg));
            },
            setPropositionListSoftBundleGroup: function setPropositionListSoftBundleGroup() {
                return dispatch((0, _filters.setPropositionListSoftBundleGroup)());
            },
            setOfferType: function setOfferType(offerType) {
                return dispatch((0, _app2.setOfferType)(offerType));
            },
            selectOfferNoPhone: function selectOfferNoPhone(propositionId) {
                return dispatch((0, _offers2.selectOffer)(propositionId));
            },
            pickDevice: function pickDevice(propositionId, url) {
                return dispatch((0, _offers2.pickDevice)(propositionId, url));
            },
            setPropositionListCount: function setPropositionListCount(count) {
                return dispatch((0, _filters.propositionListCountSet)(count));
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AddToCartOrChooseTerminalComponent);

    _exports.default = _default;
});
//# sourceMappingURL=AddToCartOrChooseTerminalComponent.js.map