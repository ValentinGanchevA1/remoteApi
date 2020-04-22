define(["exports", "react", "react-redux", "eshop/modules/simfree/actions/app", "eshop/modules/configurator/actions/filters", "eshop/modules/simfree/selectors", "eshop/modules/configurator/selectors/filters", "eshop/components/OraCommonComponents", "../../constants/OfferTypeEnum", "eshop/modules/cart/selectors", "eshop/modules/cart/components/entriesList/StayLoveMsisdnHeader", "../../../../components/InfoComponent", "../../../configurator/selectors/offers", "../../../auth/selectors/authorization", "prop-types", "../../selectors", "../../../core/enum/SalesChannel", "../../../core/enum/SoftBundleGroup", "../../../core/enum/MarketSegment", "../../../cart/components/entriesList/BundleTypeEnum"], function(_exports, _react, _reactRedux, _app, _filters, _selectors, _filters2, _OraCommonComponents, _OfferTypeEnum, _selectors2, _StayLoveMsisdnHeader, _InfoComponent, _offers, _authorization, PropTypes, _selectors3, _SalesChannel, _SoftBundleGroup, _MarketSegment, _BundleTypeEnum) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _OfferTypeEnum = babelHelpers.interopRequireDefault(_OfferTypeEnum);
    _StayLoveMsisdnHeader = babelHelpers.interopRequireDefault(_StayLoveMsisdnHeader);
    PropTypes = babelHelpers.interopRequireWildcard(PropTypes);
    _SalesChannel = babelHelpers.interopRequireDefault(_SalesChannel);
    _SoftBundleGroup = babelHelpers.interopRequireDefault(_SoftBundleGroup);
    _MarketSegment = babelHelpers.interopRequireDefault(_MarketSegment);
    _BundleTypeEnum = babelHelpers.interopRequireDefault(_BundleTypeEnum);

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

    var ProductDetailsOfferTypeComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(ProductDetailsOfferTypeComponent, _Component);

        var _super = _createSuper(ProductDetailsOfferTypeComponent);

        function ProductDetailsOfferTypeComponent(props) {
            var _this;

            babelHelpers.classCallCheck(this, ProductDetailsOfferTypeComponent);
            _this = _super.call(this, props);
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "renderConditionalInfo", function(_ref) {
                var channels = _ref.channels,
                    selectedOfferType = _ref.selectedOfferType,
                    softBundleGroup = _ref.softBundleGroup,
                    hasLove = _ref.hasLove;

                if (channels.sales === _SalesChannel.default.WWW && selectedOfferType === _OfferTypeEnum.default.VOICE_LDF && softBundleGroup === _SoftBundleGroup.default.LDF) {
                    return /*#__PURE__*/ _react.default.createElement(_InfoComponent.ConditionalInfoComponent, {
                        condition: hasLove,
                        type: "blueInfo",
                        color: "black",
                        bgColor: "white",
                        title: "Pamiętaj!",
                        padding: "noPadding",
                        text: "Jesteś w Love dla Firm - dzięki temu korzystasz ze specjalnych rabatów. Jeśli chcesz korzystać z nich dalej - musisz mieć aktywną umowę na internet dla biura.",
                        altText: "Love dla firm to pakiet obejmujący abonament komórkowy i internet stacjonarny w Orange dzięki czemu koszt pierwszej karty jest od 35,00 zł + VAT, a drugą kartę dostaniesz za 0 zł."
                    });
                }
            });
            var cmsConf = _this.props.cmsConf;

            _this.props.registerCmsConfiguration(cmsConf);

            if (_this.props.cmsConf.length === 1 && _this.props.selectedOfferType !== cmsConf.offerType) {
                _this.props.setOfferType(cmsConf[0].offerType);
            }

            if (_this.props.selectedOfferType === _OfferTypeEnum.default.SIMFREE) {
                _this.props.setOfferType(_this.props.selectedOfferType);
            }

            _this.selectOfferType = _this.selectOfferType.bind(babelHelpers.assertThisInitialized(_this));
            return _this;
        }

        babelHelpers.createClass(ProductDetailsOfferTypeComponent, [{
            key: "componentDidMount",
            value: function componentDidMount() {}
        }, {
            key: "selectOfferType",
            value: function selectOfferType(e) {
                this.props.getParamsFromUrl();
                this.props.setOfferType(e.value);
            }
        }, {
            key: "filterVisible",
            value: function filterVisible(options) {
                var cmsConf = this.props.cmsConf;

                if (!!cmsConf[_OfferTypeEnum.default.VOICE_LDF] && this.props.stayLoveRetentionMSISDN) {
                    cmsConf[_OfferTypeEnum.default.VOICE_LDF].visible = true;
                }

                return options.filter(function(option) {
                    return cmsConf[option.value] && cmsConf[option.value].visible;
                });
            }
        }, {
            key: "render",
            value: function render() {
                var selectedOfferType = this.props.selectedOfferType;
                var selectedOfferTypeDescription = this.props.cmsConf[selectedOfferType] ? this.props.cmsConf[selectedOfferType].productListSelectText : _OfferTypeEnum.default.SIMFREE;
                var options;

                if (selectedOfferType !== _OfferTypeEnum.default.CONVERGENT) {
                    options = this.filterOutNotAvailableOfferTypes(this.props.selectValues.filter(function(o) {
                        return _OfferTypeEnum.default.CONVERGENT !== o.value;
                    }));
                    selectedOfferType = this.doesContainOfferType(this.props.selectedVariantObject.availableOfferTypes, selectedOfferType) ? selectedOfferType : this.changeOfferType();
                } else {
                    options = this.props.selectValues.filter(function(t) {
                        return _OfferTypeEnum.default.CONVERGENT === t.value;
                    });
                }

                options = this.filterVisible(options); //For duets - no worlds change during sim count loop

                if (this.props.propositionListCount > 0 && this.props.isPropositionListCountLoop && !this.props.isB2B || this.props.isDuet) {
                    return null;
                }

                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12 u-padding-l u-padding-top-l"
                }, !this.props.addTerminalToOfferBundleNo && /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraSelect, {
                    onChange: this.selectOfferType,
                    className: "o-select opl-select-light u-inline-block u-small-block u-margin-l u-small-no-margin ",
                    id: "offerTypeFilter",
                    options: options,
                    withEmptyOption: false,
                    selected: selectedOfferType,
                    selectedName: selectedOfferTypeDescription,
                    selectionType: this.props.selectionType,
                    singleOptionClassName: "u-font-bold u-no-padding-left"
                }), this.renderConditionalInfo(this.props), /*#__PURE__*/ _react.default.createElement(_StayLoveMsisdnHeader.default, null));
            }
        }, {
            key: "filterOutNotAvailableOfferTypes",
            value: function filterOutNotAvailableOfferTypes(options) {
                var _this2 = this;

                return options.filter(function(o) {
                    return _this2.doesContainOfferType(_this2.props.selectedVariantObject.availableOfferTypes, o.value);
                });
            }
        }, {
            key: "changeOfferType",
            value: function changeOfferType() {
                var _this3 = this;

                var offerType = "";
                var defaultProcess = "";
                this.props.selectedVariantObject.availableOfferTypes.map(function(o) {
                    if (_this3.props.cmsConf[o]) {
                        offerType = o;
                        defaultProcess = _this3.props.cmsConf[o].defaultProcess;
                        return;
                    } else if (o === _BundleTypeEnum.default.SIMFREE && _this3.props.cmsConf[_OfferTypeEnum.default.SIMFREE]) {
                        offerType = _OfferTypeEnum.default.SIMFREE;
                        defaultProcess = _this3.props.cmsConf[o].defaultProcess;
                        return;
                    }
                });
                this.props.setOfferType(offerType);

                if (defaultProcess && defaultProcess !== "") {
                    this.props.setProcessType(defaultProcess);
                }

                return offerType;
            }
        }, {
            key: "doesContainOfferType",
            value: function doesContainOfferType(availableOfferTypes, offerType) {
                //necessary only for sog and simfree instalment
                if (offerType !== _OfferTypeEnum.default.SIMFREE && offerType !== _OfferTypeEnum.default.SIMFREE_INST) {
                    return true;
                }

                var result = false;
                availableOfferTypes.map(function(e) {
                    if (e === offerType || offerType === _OfferTypeEnum.default.SIMFREE_INST && e === _BundleTypeEnum.default.SIMFREE) {
                        result = true;
                        return;
                    }
                });
                return result;
            }
        }]);
        return ProductDetailsOfferTypeComponent;
    }(_react.Component);

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            registerCmsConfiguration: function registerCmsConfiguration(cmsConf) {
                return dispatch((0, _app.setOfferTypeCmsConf)(cmsConf));
            },
            getParamsFromUrl: function getParamsFromUrl() {
                return dispatch((0, _app.getParamsFromUrl)());
            },
            setOfferType: function setOfferType(offerType) {
                return dispatch((0, _app.setOfferType)(offerType));
            },
            setProcessType: function setProcessType(value) {
                return dispatch((0, _filters.selectProductDetailsProcessType)(value));
            },
            getDocuments: function getDocuments() {
                return dispatch((0, _app.getDocuments)());
            }
        };
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            selectValues: (0, _selectors.getOfferTypesForSelect)(state),
            selectedOfferType: (0, _filters2.getSelectedOfferType)(state),
            addTerminalToOfferBundleNo: (0, _selectors2.getAddTerminalToOfferBundleNo)(state),
            selectedVariantObject: (0, _selectors.getSelectedVariantObject)(state),
            isPropositionListCountLoop: (0, _filters2.getPropositionListOfferType)(state) && (0, _filters2.getPropositionListOfferType)(state) === (0, _filters2.getSelectedOfferType)(state),
            propositionListCount: (0, _filters2.getPropositionListCount)(state),
            isB2B: (0, _filters2.getMarketContext)(state) === _MarketSegment.default.B2B,
            softBundleGroup: (0, _selectors.getSelectedSoftBundleGroup)(state),
            hasLove: (0, _authorization.hasLove)(state),
            hasODF: (0, _authorization.hasODF)(state),
            stayLoveRetentionMSISDN: (0, _authorization.getStayLoveRetentionMSISDN)(state),
            isDuet: (0, _selectors3.isDuet)(state)
        };
    };

    ProductDetailsOfferTypeComponent.PropTypes = {
        softBundleGroup: PropTypes.string,
        hasLove: PropTypes.bool,
        hasODF: PropTypes.bool
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ProductDetailsOfferTypeComponent);

    _exports.default = _default;
});
//# sourceMappingURL=ProductDetailsOfferTypeComponent.js.map