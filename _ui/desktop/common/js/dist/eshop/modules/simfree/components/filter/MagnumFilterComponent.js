define(["exports", "react", "prop-types", "react-redux", "redux", "lodash", "eshop/modules/configurator/selectors/filters", "eshop/modules/simfree/actions/filter", "eshop/modules/configurator/selectors/offers", "eshop/modules/simfree/selectors", "eshop/modules/magnum2/components/DeviceList/DevicesInstalmentSelector", "eshop/modules/cart/selectors", "../../actions/app", "../../../magnum2/actions/magnum", "../../../magnum2/helpers/TransactionHelper", "../../../magnum2/components/BundleTypeUtils", "../../../magnum2/selectors", "./view/MagnumOfferPropositionListItem", "./view/MagnumOfferPropositionListItemProduct", "../../constants/OfferTypeEnum", "../../../magnum2/components/SelectWithFloatingLable", "../../../core/components/hoc/LabeledInput", "./view/MagnumPropositionListPriceTag", "../../constants/PromotionType", "../../../../flux/utils/OraModalService", "eshop/modules/cart/components/entriesList/shared/productDetails/OfferDetailsModal", "eshop/utils/OnlineUtils", "eshop/components/InfoComponent"], function(_exports, _react, _propTypes, _reactRedux, _redux, _lodash, _filters, _filter, _offers, _selectors, _DevicesInstalmentSelector, _selectors2, _app, _magnum, _TransactionHelper, _BundleTypeUtils, _selectors3, _MagnumOfferPropositionListItem, _MagnumOfferPropositionListItemProduct, _OfferTypeEnum, _SelectWithFloatingLable, _LabeledInput, _MagnumPropositionListPriceTag, _PromotionType, _OraModalService, _OfferDetailsModal, _OnlineUtils, _InfoComponent) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _lodash = babelHelpers.interopRequireDefault(_lodash);
    _DevicesInstalmentSelector = babelHelpers.interopRequireDefault(_DevicesInstalmentSelector);
    _MagnumOfferPropositionListItem = babelHelpers.interopRequireDefault(_MagnumOfferPropositionListItem);
    _MagnumOfferPropositionListItemProduct = babelHelpers.interopRequireDefault(_MagnumOfferPropositionListItemProduct);
    _OfferTypeEnum = babelHelpers.interopRequireDefault(_OfferTypeEnum);
    _SelectWithFloatingLable = babelHelpers.interopRequireDefault(_SelectWithFloatingLable);
    _LabeledInput = babelHelpers.interopRequireDefault(_LabeledInput);
    _MagnumPropositionListPriceTag = babelHelpers.interopRequireDefault(_MagnumPropositionListPriceTag);
    _PromotionType = babelHelpers.interopRequireDefault(_PromotionType);
    _OraModalService = babelHelpers.interopRequireDefault(_OraModalService);
    _OfferDetailsModal = babelHelpers.interopRequireDefault(_OfferDetailsModal);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    _InfoComponent = babelHelpers.interopRequireDefault(_InfoComponent);

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

    var MagnumFilterComponent = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(MagnumFilterComponent, _React$Component);

        var _super = _createSuper(MagnumFilterComponent);

        function MagnumFilterComponent(props) {
            var _this;

            babelHelpers.classCallCheck(this, MagnumFilterComponent);
            _this = _super.call(this, props);
            _this.onSelectProposition = _this.onSelectProposition.bind(babelHelpers.assertThisInitialized(_this));
            _this.renderPropositionListForShopPage = _this.renderPropositionListForShopPage.bind(babelHelpers.assertThisInitialized(_this));
            _this.renderPropositionListForProductCard = _this.renderPropositionListForProductCard.bind(babelHelpers.assertThisInitialized(_this));
            _this.isProductCard = _this.isProductCard.bind(babelHelpers.assertThisInitialized(_this));
            _this.changeSearchDeviceValue = _this.changeSearchDeviceValue.bind(babelHelpers.assertThisInitialized(_this));
            _this.renderSearchDevicesByNameOrSerialNumber = _this.renderSearchDevicesByNameOrSerialNumber.bind(babelHelpers.assertThisInitialized(_this));
            return _this;
        }

        babelHelpers.createClass(MagnumFilterComponent, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                this.registerModalServiceSelectedPropositionDetails();
                this.initUIModules();
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                this.registerModalServiceSelectedPropositionDetails();
                this.initUIModules();
            }
        }, {
            key: "registerModalServiceSelectedPropositionDetails",
            value: function registerModalServiceSelectedPropositionDetails() {
                var _this2 = this;

                var proposition = this.props.selectedProposition;

                if (proposition) {
                    _OraModalService.default.add(function(data) {
                        return /*#__PURE__*/ _react.default.createElement(_OfferDetailsModal.default, {
                            id: "offer_proposition_details_" + proposition.code,
                            header: "Szczegóły",
                            broadband: proposition.broadband,
                            tv: proposition.tvProduct,
                            tvPackages: proposition.tvPackages,
                            voip: proposition.voip,
                            voice: proposition.voice,
                            data: proposition.data,
                            transactions: _this2.props.transactions
                        });
                    });
                }
            }
        }, {
            key: "initUIModules",
            value: function initUIModules() {
                var $dispositionDetailsArea = document.getElementById("magnum-filter-Component-area");
                OPL.UI.initModules($dispositionDetailsArea);
            }
        }, {
            key: "openDetailsModal",
            value: function openDetailsModal(propositionCode) {
                _OraModalService.default.open("offer_proposition_details_" + propositionCode);
            }
        }, {
            key: "shouldBeVisible",
            value: function shouldBeVisible(offerType) {
                return offerType === _OfferTypeEnum.default.CONVERGENT;
            }
        }, {
            key: "onSelectLoyaltyPeriod",
            value: function onSelectLoyaltyPeriod(option) {
                this.props.setLoyaltyPeriod(option.target.value);
            }
        }, {
            key: "onSelectProposition",
            value: function onSelectProposition(proposition) {
                this.props.selectProposition(proposition);

                if (this.props.isProductDetailsPage) {
                    this.props.selectConvergentOffer(proposition.mobileVoiceBundleTemplateCode);
                } else {
                    this.props.reloadProductList();
                }
            }
        }, {
            key: "changeSearchDeviceValue",
            value: function changeSearchDeviceValue(e) {
                this.props.changeSearchDeviceValue(e.value);
            }
        }, {
            key: "isProductCard",
            value: function isProductCard() {
                return this.props.selectedBaseDeviceCode !== "";
            }
        }, {
            key: "renderPropositionList",
            value: function renderPropositionList() {
                var _this3 = this;

                if (!this.props.durationList) {
                    return;
                }

                var secondaryChoiceOffer = this.props.durationList.secondaryChoiceOffer;
                var propositions = this.props.durationList.propositions.filter(function(proposition) {
                    return secondaryChoiceOffer === false || secondaryChoiceOffer === proposition.availableAsSecondaryChoiceOffer;
                });
                var propositionGroups = [propositions.filter(function(proposition) {
                    return !proposition.promotionType;
                }), propositions.filter(function(proposition) {
                    return proposition.promotionType === _PromotionType.default.MINI;
                }), propositions.filter(function(proposition) {
                    return proposition.promotionType === _PromotionType.default.STANDARD;
                }), propositions.filter(function(proposition) {
                    return proposition.promotionType === _PromotionType.default.EXTRA;
                }), propositions.filter(function(proposition) {
                    return proposition.promotionType === _PromotionType.default.PREMIUM;
                })];
                return /*#__PURE__*/ _react.default.createElement("div", null, propositionGroups.filter(function(propositions) {
                    return propositions.length > 0;
                }).map(function(propositions, index) {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        key: propositions[0].promotionType
                    }, index !== 0 && _this3.renderSeparator(), _this3.renderPropositions(propositions));
                }));
            }
        }, {
            key: "renderSeparator",
            value: function renderSeparator() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-bottom-m u-padding-right-m u-padding-left-m"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-separator o-separator--m",
                    style: {
                        borderColor: "#202013"
                    }
                }));
            }
        }, {
            key: "renderPropositions",
            value: function renderPropositions(propositions) {
                var _this4 = this;

                return propositions.map(function(proposition) {
                    var offerPriceVariant = _this4.props.knaNumber ? proposition.priceVariants.ACTIVATION_ACTIVE_WLR : proposition.priceVariants.DEFAULT;
                    return /*#__PURE__*/ _react.default.createElement(_MagnumOfferPropositionListItem.default, {
                        selected: proposition.code === _this4.props.selectedProposition.code,
                        key: proposition.code,
                        offer: offerPriceVariant,
                        offerDescription: _this4.resolveOfferDescription(proposition),
                        onChange: function onChange() {
                            return _this4.onSelectProposition(proposition);
                        },
                        descriptions: _this4.props.descriptions,
                        promotionType: proposition.promotionType
                    });
                });
            }
        }, {
            key: "renderPropositionForProductCart",
            value: function renderPropositionForProductCart() {
                if (this.props.addTerminalToOfferBundleNo || !this.props.durationList) {
                    return;
                }

                var offerPriceVariant = this.props.knaNumber ? this.props.selectedProposition.priceVariants.ACTIVATION_ACTIVE_WLR : this.props.selectedProposition.priceVariants.DEFAULT;
                return /*#__PURE__*/ _react.default.createElement(_MagnumOfferPropositionListItemProduct.default, {
                    selected: true,
                    selectedProposition: this.props.selectedProposition,
                    offer: offerPriceVariant,
                    offerDescription: this.resolveOfferDescription(this.props.selectedProposition),
                    descriptions: this.props.descriptions,
                    disabled: false,
                    transactions: this.props.transactions
                });
            }
        }, {
            key: "resolveOfferDescription",
            value: function resolveOfferDescription(proposition) {
                if ((0, _BundleTypeUtils.is4U)(this.props.availableBundleTypes) || (0, _BundleTypeUtils.is2U)(this.props.availableBundleTypes)) {
                    return this.getDescriptionFromFeatures(proposition.broadband) || "Orange Love";
                } else if ((0, _BundleTypeUtils.isLTE)(this.props.availableBundleTypes)) {
                    return "Orange Love " + _lodash.default.capitalize(proposition.promotionType);
                } else {
                    return "";
                }
            }
        }, {
            key: "getDescriptionFromFeatures",
            value: function getDescriptionFromFeatures(product) {
                var features = product.features;

                if (features && features.length > 0 && features[0].values && features[0].values.length > 0) {
                    return features[0].values[0];
                } else {
                    return undefined;
                }
            }
        }, {
            key: "renderDurationOptions",
            value: function renderDurationOptions() {
                var durationOptions = [];

                if (this.props.durationList) {
                    durationOptions = this.props.durationList.durations.map(function(duration) {
                        return {
                            value: duration.value,
                            label: duration.displayName
                        };
                    });
                }

                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: this.isProductCard() ? "l-col l-col-small-12 l-col-medium-6 l-col-6 " : ""
                }, /*#__PURE__*/ _react.default.createElement(_SelectWithFloatingLable.default, {
                    id: "loyaltyPeriodSelect",
                    options: durationOptions,
                    placeholder: this.props.descriptions.loyaltyPeriodPlaceholder,
                    value: this.props.selectedLoyaltyPeriod,
                    onChange: this.onSelectLoyaltyPeriod,
                    disabled: true
                }));
            }
        }, {
            key: "renderPropositionListForShopPage",
            value: function renderPropositionListForShopPage() {
                var _this5 = this;

                var offer = this.props.knaNumber ? this.props.selectedProposition.priceVariants.ACTIVATION_ACTIVE_WLR : this.props.selectedProposition.priceVariants.DEFAULT;
                var selectedPropositionCode = this.props.selectedProposition.code;

                var propositionName = "Orange Love " + _lodash.default.capitalize(this.props.selectedProposition.promotionType);

                if (this.props.magnumType === _OfferTypeEnum.default.VOICE && this.props.selectedProposition && this.props.selectedProposition.voice) {
                    propositionName = this.props.selectedProposition.voice.name;
                }

                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-all-m u-no-padding-top"
                }, /*#__PURE__*/ _react.default.createElement(_InfoComponent.default, {
                    color: "blue",
                    bgColor: "none",
                    textColor: "black"
                }, /*#__PURE__*/ _react.default.createElement("b", null, this.props.descriptions.discountDescription)), this.props.magnumType === _OfferTypeEnum.default.CONVERGENT && /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h4 u-spacing u-padding-top-m"
                }, this.props.descriptions.smallTitle), /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h5 u-spacing"
                }, propositionName), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "g-brand2-c u-font-bold u-margin-s"
                }, /*#__PURE__*/ _react.default.createElement(_MagnumPropositionListPriceTag.default, {
                    key: "key_" + "convergent" + "MagnumPropositionListPriceTag",
                    clientContext: true,
                    loyaltyLength: this.props.selectedDeviceInstalmentsCountValue,
                    mainPriceClass: "g-brand1-c",
                    alignClass: "u-left",
                    offer: this.props.knaNumber ? this.props.selectedProposition.priceVariants.ACTIVATION_ACTIVE_WLR : this.props.selectedProposition.priceVariants.DEFAULT,
                    offerDiscountInfoDescription: this.props.descriptions.offerDiscountInfoDescription,
                    offerDiscountInfoConvDescription: this.props.descriptions.offerDiscountInfoConvDescription,
                    baseId: "desktop",
                    availableBundleTypes: this.props.availableBundleTypes
                })))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-left u-small-left"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-brand1-c u-font-bold"
                }, _OnlineUtils.default.formatPrice(offer.payNowPrice.value) + " " + offer.currency + " aktywacja"))))), /*#__PURE__*/ _react.default.createElement("div", {
                    "data-js-module": "common/modules/opl-expander",
                    "data-js-options": "{\"scrollToSelected\": false, \"scrollTohash\": true, \"hideOtherElements\":true,\"triggerSelector\":\".opl-content-trigger\",\"contentSelector\":\".opl-section__content\",\"parentClass\":\"opl-section--togglable\", \"nextSelector\":\".opl-section__expander-next\"}"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-section opl-section--togglable opl-section--inner-cut u-no-padding"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "js-expander__container u-margin-s"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-padding-all-m u-no-padding-top u-no-padding-b"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col u-spacing-top-s"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-inline-block u-spacing-right u-padding-b"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    className: "u-inline-block u-spacing-right",
                    onClick: function onClick() {
                        return _this5.openDetailsModal(selectedPropositionCode);
                    }
                }, this.props.descriptions.detailsLabel), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-hide"
                }, "\"Szczeg\xF3\u0142y oferty\"")), !this.props.addTerminalToOfferBundleNo && /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    role: "tab",
                    "aria-controls": "expander-content-magnum",
                    "aria-expanded": "false",
                    className: "opl-content-trigger u-inline-block opl-section__expander-trigger-btn u-float-none"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-section__expander-trigger--show"
                }, "Zmie\u0144"), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-section__expander-trigger--hide"
                }, "Zwi\u0144"))))), /*#__PURE__*/ _react.default.createElement("div", {
                    id: "expander-content-magnum",
                    "aria-expanded": "false",
                    className: "opl-section__content"
                }, /*#__PURE__*/ _react.default.createElement("ul", {
                    className: "opl-multicheckout-services"
                }, this.renderPropositionList())))));
            }
        }, {
            key: "renderPropositionListForProductCard",
            value: function renderPropositionListForProductCard() {
                return /*#__PURE__*/ _react.default.createElement("ul", {
                    className: "opl-switcher-list g-gray1-bg"
                }, /*#__PURE__*/ _react.default.createElement("li", {
                    className: "opl-switcher-list__item u-small-hide u-no-padding-l u-no-padding-r"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-no-margin"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-1 "
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-11 "
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-display_table u-small-block u-no-margin"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-6  u-display_table-cell u-small-block u-vertical-top"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h4 u-spacing"
                }, this.props.descriptions.smallTitle)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-3 l-col-3  u-display_table-cell u-small-block u-vertical-top u-text-left"
                }, /*#__PURE__*/ _react.default.createElement("p", null, "Abonament miesi\u0119cznie")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-3 l-col-3  u-display_table-cell u-small-block u-vertical-top u-text-right"
                }, /*#__PURE__*/ _react.default.createElement("p", null, "Aktywacja")))))), this.renderPropositionForProductCart());
            }
        }, {
            key: "renderSearchDevicesByNameOrSerialNumber",
            value: function renderSearchDevicesByNameOrSerialNumber() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: this.props.channels.sales === 'WWW' ? "u-hide" : "opl-console u-margin-m u-padding-right-l"
                }, /*#__PURE__*/ _react.default.createElement("label", null, this.props.descriptions.searchByValueLabel || "Wyszukaj wg nazwy lub indeksu materiałowego:"), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-input-with-icon"
                }, /*#__PURE__*/ _react.default.createElement(_LabeledInput.default, {
                    className: "g-white1-bg",
                    onChange: this.changeSearchDeviceValue,
                    value: this.props.searchValue,
                    id: "search-by-value-mobile"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--only g-icon--s g-icon--search"
                })));
            }
        }, {
            key: "render",
            value: function render() {
                var _this6 = this;

                var fixBroadbandPossibleTransactionsOptions = (0, _TransactionHelper.transactionsToSelectOptions)(this.props.fixBroadbandPossibleTransactions, this.props.descriptions);
                var fixVoipPossibleTransactionsOptions = (0, _TransactionHelper.transactionsToSelectOptions)(this.props.fixVoipPossibleTransactions, this.props.descriptions);
                var mobilePossibleTransactionsOptions = this.props.magnumType === _OfferTypeEnum.default.CONVERGENT ? (0, _TransactionHelper.transactionsToSelectOptions)(this.props.mobilePossibleTransactions, this.props.descriptions) : (0, _TransactionHelper.transactionsToSelectOptionsForSimpleMobile)(this.props.mobilePossibleTransactions, this.props.descriptions);
                var voipSelectorVisible = (0, _BundleTypeUtils.is4U)(this.props.availableBundleTypes) && this.props.fixVoipPossibleTransactions.length > 1;
                return /*#__PURE__*/ _react.default.createElement("div", {
                    id: "magnum-filter-Component-area",
                    className: this.shouldBeVisible(this.props.selectedOfferType) ? "" : "u-hide"
                }, this.props.durationList.propositions.length === 0 ? /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h4 u-spacing-l u-padding-all-m"
                }, this.props.descriptions.disabledInfo) : /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-spacing-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "g-gray1-bg"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-all-m"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: this.isProductCard() ? "l-col l-col-small-12 l-col-medium-6 l-col-6 " : ""
                }, /*#__PURE__*/ _react.default.createElement(_SelectWithFloatingLable.default, {
                    id: "fixBroadbandOptionsSelect",
                    options: fixBroadbandPossibleTransactionsOptions,
                    placeholder: this.props.descriptions.fixBroadbandTransactionsPlaceholder,
                    value: this.props.selectedFixBroadbandTransactionOption,
                    disabled: true
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: this.isProductCard() ? "l-col l-col-small-12 l-col-medium-6 l-col-6 " : ""
                }, /*#__PURE__*/ _react.default.createElement(_SelectWithFloatingLable.default, {
                    id: "mobileOptionsSelect",
                    options: mobilePossibleTransactionsOptions,
                    placeholder: this.props.descriptions.mobileTransactionsPlaceholder,
                    value: this.props.selectedMobileTransactionOption,
                    disabled: true
                })), voipSelectorVisible && /*#__PURE__*/ _react.default.createElement("div", {
                    className: this.isProductCard() ? "l-col l-col-small-12 l-col-medium-6 l-col-6 " : ""
                }, /*#__PURE__*/ _react.default.createElement(_SelectWithFloatingLable.default, {
                    id: "fixVoipOptionsSelect",
                    options: fixVoipPossibleTransactionsOptions,
                    placeholder: this.props.descriptions.fixVoipTransactionsPlaceholder,
                    value: this.props.selectedFixVoipTransactionOption,
                    disabled: true
                })), this.renderDurationOptions(), /*#__PURE__*/ _react.default.createElement("div", {
                    className: this.isProductCard() ? "l-col l-col-small-12 l-col-medium-6 l-col-6 " : ""
                }, /*#__PURE__*/ _react.default.createElement(_DevicesInstalmentSelector.default, {
                    onChange: function onChange(option) {
                        return _this6.props.reloadProductList(option.target.value);
                    }
                }))), this.isProductCard() ? this.renderPropositionListForProductCard() : this.renderPropositionListForShopPage()), !this.isProductCard() ? this.renderSearchDevicesByNameOrSerialNumber() : null));
            }
        }]);
        return MagnumFilterComponent;
    }(_react.default.Component);

    MagnumFilterComponent.propTypes = {
        descriptions: _propTypes.default.shape({}),
        durationList: _propTypes.default.shape({
            durations: _propTypes.default.arrayOf(_propTypes.default.shape({})),
            propositions: _propTypes.default.arrayOf(_propTypes.default.shape({
                broadband: _propTypes.default.object,
                tvProduct: _propTypes.default.object,
                voip: _propTypes.default.object,
                voice: _propTypes.default.object,
                data: _propTypes.default.object
            }))
        })
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            selectedOfferType: (0, _filters.getSelectedOfferType)(state),
            availableBundleTypes: state.magnum.availableBundleTypes,
            selectedProposition: state.magnum.selectedProposition,
            durationList: state.magnum.durationList,
            selectedLoyaltyPeriod: state.magnum.selectedLoyaltyPeriod,
            fixBroadbandPossibleTransactions: (0, _selectors3.getPossibleFixBroadbandTransactions)(state),
            fixVoipPossibleTransactions: (0, _selectors3.getPossibleFixVoipTransactions)(state),
            mobilePossibleTransactions: (0, _selectors3.getPossibleMobileTransactions)(state),
            selectedFixBroadbandTransactionOption: (0, _selectors3.getSelectedFixBroadbandTransactionOption)(state),
            selectedFixVoipTransactionOption: (0, _selectors3.getSelectedFixVoipTransactionOption)(state),
            selectedMobileTransactionOption: (0, _selectors3.getSelectedMobileTransactionOption)(state),
            knaNumber: state.magnum.knaNumber,
            isProductDetailsPage: (0, _selectors.isProductDetailsPage)(state),
            selectedDeviceInstalmentsCountValue: (0, _offers.getCurrentDeviceInstalmentsCountValue)(state),
            selectedBaseDeviceCode: (0, _selectors.getSelectedBaseDeviceCode)(state),
            searchValue: (0, _selectors.getSearchValue)(state),
            clientContext: (0, _filters.getClientContext)(state),
            addTerminalToOfferBundleNo: (0, _selectors2.getAddTerminalToOfferBundleNo)(state),
            magnumType: (0, _selectors3.getMagnumType)(state),
            transactions: (0, _selectors3.getTransactions)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return _objectSpread({}, (0, _redux.bindActionCreators)({
            selectProposition: _magnum.selectProposition,
            reloadProductList: _filter.reloadProductList,
            setLoyaltyPeriod: _magnum.setLoyaltyPeriod,
            selectConvergentOffer: _app.selectConvergentOffer
        }, dispatch), {
            changeSearchDeviceValue: function changeSearchDeviceValue(value) {
                return dispatch((0, _filter.changeSearchDeviceValue)(value));
            }
        });
    };

    var _default = MagnumFilterComponent = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MagnumFilterComponent);

    _exports.default = _default;
});
//# sourceMappingURL=MagnumFilterComponent.js.map