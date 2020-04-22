define(["exports", "react", "react-redux", "eshop/modules/core/components/ui/OraSwitcher", "eshop/modules/configurator/selectors/filters", "eshop/modules/configurator/actions/filters", "eshop/modules/configurator/selectors/metaData", "eshop/utils/OnlineUtils", "eshop/modules/cart/selectors", "../../../cart/components/entriesList/BundleTypeEnum", "eshop/modules/cart/actions/cart", "eshop/components/OraCommonComponents", "eshop/modules/simfree/selectors", "../../../core/enum/MarketSegment", "../../../core/enum/SalesChannel"], function(_exports, _react, _reactRedux, _OraSwitcher, _filters, _filters2, _metaData, _OnlineUtils, _selectors, _BundleTypeEnum, _cart, _OraCommonComponents, _selectors2, _MarketSegment, _SalesChannel) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _OraSwitcher = babelHelpers.interopRequireDefault(_OraSwitcher);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    _BundleTypeEnum = babelHelpers.interopRequireDefault(_BundleTypeEnum);
    _MarketSegment = babelHelpers.interopRequireDefault(_MarketSegment);
    _SalesChannel = babelHelpers.interopRequireDefault(_SalesChannel);

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

    var MobileSimCountSelectionComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MobileSimCountSelectionComponent, _Component);

        var _super = _createSuper(MobileSimCountSelectionComponent);

        function MobileSimCountSelectionComponent(props) {
            babelHelpers.classCallCheck(this, MobileSimCountSelectionComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(MobileSimCountSelectionComponent, [{
            key: "componentWillMount",
            value: function componentWillMount() {
                if (this.props.channels.sales !== _SalesChannel.default.WWW && _MarketSegment.default.isB2B(this.props.marketContext)) this.props.propositionListCountSetMode(true);
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.props.setMaxSimCount(this.props.maxSimCount);
                if (!this.props.isProductDetailsPage && !this.props.isProductListPage) _OnlineUtils.default.setAsLastViewedOfferPage();
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                if (this.props.isCartMobile && this.props.cartIsNet || !_MarketSegment.default.isB2B(this.props.marketContext)) {
                    console.log("$$$$$$$$$$$$$$$$$$$$componentDidUpdate");
                    this.propositionListCountSetMode();
                }

                if (this.cardsCountRef) {
                    OPL.UI.loadModules(this.cardsCountRef, this.oplLayoutFixerModule());
                    this.updateDimensions();
                }
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                if (this.cardsCountWrapperRef) {
                    OPL.UI.stopModules(this.cardsCountWrapperRef);
                }
            }
        }, {
            key: "oplLayoutFixerModule",
            value: function oplLayoutFixerModule() {
                return {
                    path: "core/modules/layout-fixer",
                    options: {
                        selectors: [".js-layout-fixer-group-sim-count-select"]
                    }
                };
            }
        }, {
            key: "updateDimensions",
            value: function updateDimensions() {
                OPL.UI.fire(OPL.UI.EVENTS.modules.layoutFixer.recalculate, this.cardsCountRef);
            }
        }, {
            key: "propositionListCountSetMode",
            value: function propositionListCountSetMode() {
                console.log(this.props);
                console.log("***********************= isPropositionListCountSetMode(false)", this.props.isPropositionListCountSetMode);
                this.props.propositionListCountSetMode(false);
            }
        }, {
            key: "setSimCount",
            value: function setSimCount(value) {
                this.props.setSIMCount(value);

                if (!this.props.isB2B) {
                    this.propositionListCountSetMode();
                }
            }
        }, {
            key: "render",
            value: function render() {
                var _this = this;

                if (this.props.isProductListPage || this.props.isProductDetailsPage || this.props.isAccessoryListPage) {
                    return /*#__PURE__*/ _react.default.createElement(SimCountLoopMonitor, this.props);
                }

                var mobileEntries = this.props.entries && this.props.entries.filter(function(ent) {
                    return ent.bundleType === _BundleTypeEnum.default.VOICE || ent.bundleType === _BundleTypeEnum.default.DATA;
                });

                if (!!(mobileEntries && mobileEntries.length) || this.props.propositionListSoftBundleGroup && this.props.selectedSoftBundleGroup != this.props.propositionListSoftBundleGroup) {
                    return null;
                }

                var countOverflow = parseInt(this.props.descriptions.simBoxCount) - 1 || 3;
                var simCardTiles = [];
                var mediumCol = 3;
                var largeCol = 3;

                if (countOverflow >= 5) {
                    mediumCol = 2;
                    largeCol = 2;
                }

                for (var i = 1; i <= countOverflow; i++) {
                    simCardTiles.push( /*#__PURE__*/ _react.default.createElement(SIMCountBox, {
                        key: "simCountBox" + i,
                        boxClassName: " u-small-margin-l u-medium-margin-l  l-col l-col-small-6 l-col-medium-" + mediumCol + " l-col-" + largeCol,
                        index: i,
                        propositionListCount: this.props.propositionListCount,
                        setSimCount: this.setSimCount.bind(this)
                    }));
                }

                var showSimCardTiles = (!mobileEntries || mobileEntries.length === 0) && (!this.props.isB2B || this.props.channels.sales === _SalesChannel.default.WWW && this.props.isB2B) || this.props.isPropositionListCountSetMode && this.props.isB2B;
                console.warn([{
                    showSimCardTiles: showSimCardTiles
                }, this.props.isPropositionListCountSetMode, {
                    mobileEntries: mobileEntries
                }]);
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-full-row g-gray1-bg"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row u-padding-l u-padding-top-l"
                }, !showSimCardTiles && this.props.descriptions.legalSimCountSelectionNotVisible && /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
                    dangerouslySetInnerHTML: {
                        __html: this.props.descriptions.legalSimCountSelectionNotVisible
                    }
                })), showSimCardTiles && /*#__PURE__*/ _react.default.createElement("div", {
                    ref: function ref(_ref2) {
                        return _this.cardsCountWrapperRef = _ref2;
                    }
                }, this.props.descriptions.title && /*#__PURE__*/ _react.default.createElement("h2", null, this.props.descriptions.title), this.props.descriptions.mainInfo && /*#__PURE__*/ _react.default.createElement("div", {
                    dangerouslySetInnerHTML: {
                        __html: this.props.descriptions.mainInfo
                    }
                }), /*#__PURE__*/ _react.default.createElement("ul", {
                    className: "l-row u-padding-l",
                    ref: function ref(_ref) {
                        return _this.cardsCountRef = _ref;
                    }
                }, simCardTiles, /*#__PURE__*/ _react.default.createElement(SIMCountInput, babelHelpers.extends({
                    key: "simCountInput",
                    boxClassName: " u-small-margin-l u-medium-margin-l l-col l-col-small-6 l-col-medium-" + mediumCol + " l-col-" + largeCol
                }, this.props, {
                    countOverflow: countOverflow,
                    setSimCount: this.setSimCount.bind(this)
                }))), this.props.descriptions.legalSimCountSelectionVisible && /*#__PURE__*/ _react.default.createElement("div", {
                    dangerouslySetInnerHTML: {
                        __html: this.props.descriptions.legalSimCountSelectionVisible
                    }
                }), this.props.isB2B && this.props.channels.sales !== _SalesChannel.default.WWW && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row u-padding-l-xl u-small-padding-l u-medium-padding-s u-padding-s"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-3 u-padding-top-l u-padding-l u-right"
                }, /*#__PURE__*/ _react.default.createElement("button", {
                    className: "opl-btn opl-btn--medium opl-btn--primary o-btn u-w-100",
                    onClick: this.propositionListCountSetMode.bind(this)
                }, "Dalej")))))));
            }
        }]);
        return MobileSimCountSelectionComponent;
    }(_react.Component);

    var SimCountLoopMonitor = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(SimCountLoopMonitor, _React$Component);

        var _super2 = _createSuper(SimCountLoopMonitor);

        function SimCountLoopMonitor() {
            babelHelpers.classCallCheck(this, SimCountLoopMonitor);
            return _super2.apply(this, arguments);
        }

        babelHelpers.createClass(SimCountLoopMonitor, [{
            key: "render",
            value: function render() {
                if (this.props.simCountSelected < 2) return null;
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-full-row g-white1-bg ",
                    id: "simCountLoopMonitor"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row u-padding-l "
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-all-l u-box-shadow--s "
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row "
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-6 l-col-medium-12 l-col-small-12 "
                }, /*#__PURE__*/ _react.default.createElement("h3", null, this.props.descriptions.header || "Tworzysz ofertę złożoną z", /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-brand1-c"
                }, " ", this.props.simCountSelected, " ", this.props.simCountSelected > 1 ? "kart" : "karty", " SIM")), /*#__PURE__*/ _react.default.createElement("p", null, "Skonfigurowane abonamenty kom\xF3rkowe - ", this.props.simCountSelected - this.props.propositionListCount, ". Pozosta\u0142o do konfiguracji - ", this.props.propositionListCount), /*#__PURE__*/ _react.default.createElement("p", null, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    onClick: this.props.removeFromCart
                }, (this.props.channels.sales === _SalesChannel.default.WWW ? this.props.descriptions.removeCartButtonWWW : this.props.descriptions.removeCartButton) || "Wyczyść koszyk"))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-6 l-col-medium-12 l-col-small-12 u-small-padding-top-l"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    className: "u-right",
                    type: "primary",
                    onClick: this.props.redirectToLastViewedOfferPage
                }, (this.props.channels.sales === _SalesChannel.default.WWW ? this.props.descriptions.continueConfigurationLabelWWW : this.props.descriptions.continueConfigurationLabel) || "Dokończ konfigurację"))))));
            }
        }]);
        return SimCountLoopMonitor;
    }(_react.default.Component);

    var SIMCountInput = /*#__PURE__*/ function(_React$Component2) {
        babelHelpers.inherits(SIMCountInput, _React$Component2);

        var _super3 = _createSuper(SIMCountInput);

        function SIMCountInput(props) {
            var _this2;

            babelHelpers.classCallCheck(this, SIMCountInput);
            _this2 = _super3.call(this, props);
            _this2.state = {
                count: _this2.props.countOverflow + 1
            };
            return _this2;
        }

        babelHelpers.createClass(SIMCountInput, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                OPL.UI.loadModules(this.refInput, [{
                    path: 'common/modules/opl-input-mask',
                    options: {
                        "mask": "99",
                        "condition": "seen"
                    }
                }]);
            }
        }, {
            key: "setSimCount",
            value: function setSimCount(value) {
                if (value) {
                    if (parseInt(value) > this.props.maxSimCount) {
                        this.props.setSIMCount(this.props.maxSimCount);
                        this.setState({
                            count: this.props.maxSimCount
                        });
                        value = this.props.maxSimCount; //error

                        return value;
                    }

                    this.props.setSIMCount(value);
                    this.setState({
                        count: value
                    });
                    return value;
                }
            }
        }, {
            key: "onKeyDown",
            value: function onKeyDown(event) {
                if (event.keyCode == 13) {
                    this.refInput.value = this.setSimCount(event.currentTarget.value);
                    this.refInput.blur();
                }
            }
        }, {
            key: "onChange",
            value: function onChange(event) {
                event.currentTarget.value = this.setSimCount(event.currentTarget.value);
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                if (parseInt(this.props.countOverflow) >= parseInt(this.props.propositionListCount)) {
                    this.hideInput();
                } else {
                    this.showInput();
                }
            }
        }, {
            key: "hideInput",
            value: function hideInput() {
                var linkWrapper = $('#addCard__link'),
                    inputWrapper = $('#addCard__input');
                linkWrapper.removeClass('u-hide');
                inputWrapper.addClass('u-hide');
            }
        }, {
            key: "showInput",
            value: function showInput() {
                var linkWrapper = $('#addCard__link'),
                    inputWrapper = $('#addCard__input');
                linkWrapper.addClass('u-hide');
                inputWrapper.removeClass('u-hide');
            }
        }, {
            key: "onClick",
            value: function onClick(e) {
                //
                this.showInput();
                e.preventDefault();
                e.stopPropagation();
                var that = this;

                if (this.props.propositionListCount < this.props.countOverflow) {
                    this.refInput.value = this.props.countOverflow + 1;
                }

                this.props.setSimCount(this.refInput.value);
                setTimeout(function() {
                    that.refInput.select();
                }, 200);
            }
        }, {
            key: "onInputClick",
            value: function onInputClick(e) {
                e.preventDefault();
                e.stopPropagation();
                this.refInput.select();
            }
        }, {
            key: "render",
            value: function render() {
                var _this3 = this;

                return /*#__PURE__*/ _react.default.createElement(_OraSwitcher.default, {
                    className: this.props.boxClassName,
                    onChangeHandler: this.onClick.bind(this),
                    isSelected: this.props.propositionListCount > this.props.countOverflow,
                    switcherClassName: "switcher"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-position-relative u-small-no-margin u-medium-no-margin u-no-margin u-text-center g-white1-bg u-box-shadow--s u-cursor-pointer"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-selection-layer",
                    "aria-hidden": "true"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-selection-layer__border"
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-selection-layer__checkmark"
                })), /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("label", {
                    htmlFor: "switcher_trigger-input",
                    className: "u-small-no-padding u-medium-no-padding-right u-medium-no-padding-left u-medium-padding-top-l u-medium-padding-l u-padding-all-xxl u-w-50 u-text-center"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-animate-height js-layout-fixer-group-sim-count-select"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "js-height-sensitive-element"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    id: "addCard__link",
                    className: this.state.inputVisible ? "u-hide" : ""
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    className: "opl-product-ghostlink--number u-margin u-padding-top-l",
                    href: "#",
                    "data-number": "+"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--sim g-icon--only"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-hide"
                }, "Wi\u0119cej")), /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-font-bold h3 u-padding-top-s u-padding-m u-letter-spacing-s u-no-margin u-small-hide u-medium-hide",
                    "aria-hidden": "true"
                }, "Wi\u0119cej kart"), /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-font-bold h3 u-padding-top-s u-padding-m u-letter-spacing-s u-no-margin u-large-hide",
                    "aria-hidden": "true"
                }, "Wi\u0119cej")), /*#__PURE__*/ _react.default.createElement("div", {
                    id: "addCard__input",
                    className: this.state.inputVisible ? "" : "u-hide"
                }, /*#__PURE__*/ _react.default.createElement("label", {
                    className: "u-font-bold g-white1-bg u-small-padding-top-s u-small-padding-s u-padding-top-l u-padding-l-xl"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h5 u-block u-small-margin-top-s u-margin"
                }, "Wpisz liczb\u0119"), /*#__PURE__*/ _react.default.createElement("input", {
                    className: "opl-input--size-m h1 u-text-center u-no-margin",
                    type: "text",
                    defaultValue: this.props.propositionListCount,
                    onClick: this.onInputClick.bind(this),
                    autoComplete: "off",
                    ref: function ref(_ref3) {
                        return _this3.refInput = _ref3;
                    },
                    onBlur: this.onChange.bind(this),
                    onKeyDown: this.onKeyDown.bind(this)
                })))))))));
            }
        }]);
        return SIMCountInput;
    }(_react.default.Component);

    var SIMCountBox = /*#__PURE__*/ function(_React$Component3) {
        babelHelpers.inherits(SIMCountBox, _React$Component3);

        var _super4 = _createSuper(SIMCountBox);

        function SIMCountBox() {
            babelHelpers.classCallCheck(this, SIMCountBox);
            return _super4.apply(this, arguments);
        }

        babelHelpers.createClass(SIMCountBox, [{
            key: "onClick",
            value: function onClick() {
                this.props.setSimCount(this.props.index);
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement(_OraSwitcher.default, {
                    className: this.props.boxClassName,
                    onChangeHandler: this.onClick.bind(this),
                    isSelected: this.props.propositionListCount == this.props.index,
                    switcherClassName: "switcher"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-position-relative u-small-no-margin u-medium-no-margin u-no-margin u-text-center g-white1-bg u-box-shadow--s u-cursor-pointer"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-selection-layer",
                    "aria-hidden": "true"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-selection-layer__border"
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-selection-layer__checkmark"
                })), /*#__PURE__*/ _react.default.createElement("label", {
                    className: "u-small-no-padding u-medium-no-padding-right u-medium-no-padding-left u-medium-padding-top-l u-medium-padding-l u-padding-all-xxl u-w-50 u-text-center",
                    htmlFor: "switcher_trigger-" + this.props.index
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-animate-height js-layout-fixer-group-sim-count-select"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "js-height-sensitive-element"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    className: "switcher-subtrigger opl-product-ghostlink--number u-margin u-padding-top-l",
                    "data-number": this.props.index
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--sim g-icon--only"
                })), /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-font-bold h3 u-padding-top-s u-padding-m u-letter-spacing-s u-no-margin"
                }, this.props.index, /*#__PURE__*/ _react.default.createElement("span", null, " ", simCountInflexion(this.props.index))))))));
            }
        }]);
        return SIMCountBox;
    }(_react.default.Component);

    function simCountInflexion(index) {
        switch (index) {
            case 1:
                return "karta";

            case 2:
                return "karty";

            case 3:
                return "karty";

            case 4:
                return "karty";

            case 5:
                return "kart";
        }
    }

    var mapStateToProps = function mapStateToProps(state) {
        return {
            propositionListCount: (0, _filters.getPropositionListCount)(state),
            simCountSelected: (0, _filters.getSimCountSelected)(state),
            isPropositionListCountSetMode: (0, _filters.getPropositionListCountSetMode)(state),
            cartIsNet: (0, _selectors.getCartIsNet)(state),
            entries: (0, _selectors.getCartEntries)(state),
            isCartMobile: (0, _selectors.isCartMobile)(state),
            isB2B: (0, _filters.getMarketContext)(state) === "B2B",
            verifiedMsisdn: (0, _filters.getVerifiedMsisdnB2B)(state),
            verifyMsisdnLoading: (0, _metaData.getVerifyMsisdnLoading)(state),
            isProductListPage: (0, _selectors2.isProductListPage)(state),
            isAccessoryListPage: (0, _selectors2.isAccessoryListPage)(state),
            isProductDetailsPage: (0, _selectors2.isProductDetailsPage)(state),
            selectedSoftBundleGroup: (0, _selectors2.getSelectedSoftBundleGroup)(state),
            propositionListSoftBundleGroup: (0, _filters.getPropositionListSoftBundleGroup)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            setSIMCount: function setSIMCount(count) {
                return dispatch((0, _filters2.propositionListCountSet)(count));
            },
            propositionListCountSetMode: function propositionListCountSetMode(on) {
                return dispatch((0, _filters2.propositionListCountSetMode)(on));
            },
            increment: function increment() {
                return dispatch((0, _filters2.propositionListCountIncrement)());
            },
            decrement: function decrement() {
                return dispatch((0, _filters2.propositionListCountDecrement)());
            },
            setMaxSimCount: function setMaxSimCount(masSimCount) {
                return dispatch((0, _filters2.setMaxSimCount)(masSimCount));
            },
            selectProcessType: function selectProcessType(processType, index) {
                return dispatch((0, _filters2.selectProcessTypeB2B)(processType, index));
            },
            selectLoyaltyLength: function selectLoyaltyLength(loyaltyLength, index) {
                return dispatch((0, _filters2.selectLoyaltyLengthB2B)(loyaltyLength, index));
            },
            verifyMsisdn: function verifyMsisdn(msisdn, index) {
                return dispatch((0, _filters2.checkMsisdnAndGetOffersB2B)(msisdn, index));
            },
            clearCheckMsisdn: function clearCheckMsisdn(index) {
                return dispatch((0, _filters2.clearCheckMsisdnB2B)(index));
            },
            removeFromCart: function removeFromCart() {
                return dispatch((0, _cart.removeFromCart)(null));
            },
            redirectToLastViewedOfferPage: function redirectToLastViewedOfferPage() {
                return dispatch((0, _cart.redirectToLastViewedOfferPage)());
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MobileSimCountSelectionComponent);

    _exports.default = _default;
});
//# sourceMappingURL=MobileSimCountSelectionComponent.js.map