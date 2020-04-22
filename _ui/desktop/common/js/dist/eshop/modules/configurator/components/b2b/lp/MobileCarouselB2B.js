define(["exports", "react", "./MobilePropositionB2B", "eshop/modules/configurator/components/ClientContextCheckbox", "eshop/utils/OnlineUtils", "eshop/modules/configurator/components/lp/offers/FakeOfferBox", "../../../../core/components/ui/TooltipFromHtml", "eshop/modules/configurator/components/DiscountInfo"], function(_exports, _react, _MobilePropositionB2B, _ClientContextCheckbox, _OnlineUtils, _FakeOfferBox, _TooltipFromHtml, _DiscountInfo) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _ClientContextCheckbox = babelHelpers.interopRequireDefault(_ClientContextCheckbox);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    _TooltipFromHtml = babelHelpers.interopRequireDefault(_TooltipFromHtml);
    _DiscountInfo = babelHelpers.interopRequireDefault(_DiscountInfo);

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

    var MobileCarouselB2B = /*#__PURE__*/ function(_React$PureComponent) {
        babelHelpers.inherits(MobileCarouselB2B, _React$PureComponent);

        var _super = _createSuper(MobileCarouselB2B);

        function MobileCarouselB2B(props) {
            var _this;

            babelHelpers.classCallCheck(this, MobileCarouselB2B);
            _this = _super.call(this, props);
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "getDescriptionValueForSelectedOfferType", function(_ref, fieldName) {
                var descriptions = _ref.descriptions,
                    selectedOfferType = _ref.selectedOfferType;
                return descriptions[[fieldName, selectedOfferType].filter(Boolean).join(".")] || "No value found. Missing configuration for ".concat(fieldName, ".").concat(selectedOfferType);
            });
            _this.onClickPickDevice = _this.onClickPickDevice.bind(babelHelpers.assertThisInitialized(_this));
            _this.state = {
                isUpdating: false
            };

            _OnlineUtils.default.setAsLastViewedOfferPage();

            return _this;
        }

        babelHelpers.createClass(MobileCarouselB2B, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                var that = this;
                this.loadModulesInsideCarousel();
                OPL.UI.on("module.started", function(data) {
                    if (data.module === "common/modules/opl-carousel") {
                        that.carouselReady();
                        console.log("CAROUSEL STARTED");
                    }
                });
            }
        }, {
            key: "carouselReady",
            value: function carouselReady() {
                this.props.carouselReady();
            }
        }, {
            key: "getDefaultPropositionCarouselIndex",
            value: function getDefaultPropositionCarouselIndex() {
                var _this2 = this;

                console.log("this.props.selectedBaseRatePlanId", this.props.selectedBaseRatePlanId);

                if (!this.props.selectedBaseRatePlanId || !this.props.offers) {
                    return;
                }

                var propositions = this.props.offers;
                var propositionIndexed = propositions.find(function(p) {
                    return p.rateplanBaseProductId === _this2.props.selectedBaseRatePlanId;
                });
                var goToIndex = propositions.indexOf(propositionIndexed);
                return goToIndex;
            }
        }, {
            key: "layoutFixer",
            value: function layoutFixer() {
                return {
                    path: "core/modules/layout-fixer",
                    options: {
                        selectors: [".js-layout-fixer-group-1", ".js-layout-fixer-group-2", ".js-layout-fixer-group-3", ".js-layout-fixer-group-4", ".js-layout-fixer-group-5", ".js-layout-fixer-group-6"]
                    }
                };
            }
        }, {
            key: "updateDimensions",
            value: function updateDimensions() {
                if (this.carouselRef) {
                    OPL.UI.fire(OPL.UI.EVENTS.modules.layoutFixer.recalculate, this.carouselRef);
                }
            }
        }, {
            key: "oplCarousel",
            value: function oplCarousel(initial, offerCount) {
                return {
                    path: "common/modules/opl-carousel",
                    options: {
                        arrows: false,
                        dots: true,
                        centerMode: false,
                        slidesToShow: 1,
                        initialSlide: initial,
                        mobileFirst: true,
                        centerPadding: "5px",
                        responsive: [{
                            breakpoint: 567,
                            settings: {
                                slidesToShow: 2,
                                dots: true
                            }
                        }, {
                            breakpoint: 1259,
                            settings: {
                                slidesToShow: offerCount
                            }
                        }]
                    }
                };
            }
        }, {
            key: "jsModules",
            value: function jsModules(offerCount) {
                return [this.oplCarousel(this.getDefaultPropositionCarouselIndex(), offerCount), this.layoutFixer()];
            }
        }, {
            key: "loadModulesInsideCarousel",
            value: function loadModulesInsideCarousel() {
                var offerCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;

                if (offerCount === 1 || offerCount > 3) {
                    _OnlineUtils.default.isAssignment(this.props.processType) || _OnlineUtils.default.isMnpApplication(this.props.processType) ? offerCount = 1 : offerCount = 4;
                }

                if (this.carouselRef) {
                    OPL.UI.loadModules(this.carouselRef, this.jsModules(offerCount));
                }
            }
        }, {
            key: "shouldComponentUpdate",
            value: function shouldComponentUpdate(newProps, newState) {
                if (this.state.isUpdating || newProps.isPropositionListCountSetMode && newProps.isPropositionListCountSetMode === this.props.isPropositionListCountSetMode) return false;
                return !(this.props.propositionListCount !== newProps.propositionListCount || this.props.propositionListCount === 0);
            }
        }, {
            key: "componentWillUpdate",
            value: function componentWillUpdate(newProps) {
                console.log("******************************offerB2BcarouselContainer componentWillUpdate ");
                var plotCombo = "";

                if (newProps.offers && !!newProps.offers[0]) {
                    plotCombo = newProps.offers[0].offerType + "_" + newProps.offers[0].processType + "_" + newProps.offers[0].loyaltyLength;
                }

                if (newProps.offers && (!!!this.props.offers || newProps.offers.length !== this.props.offers.length || newProps.offers[0].processType !== this.props.offers[0].processType || newProps.offers[0].loyaltyLength !== this.props.offers[0].loyaltyLength || newProps.offers[0].offerType !== this.props.offers[0].offerType || plotCombo != this.state.plotCombo || newProps.propositionListCount !== this.props.propositionListCount)) {
                    this.setState({
                        isUpdating: true
                    });

                    if (document.getElementById("mobilePropositionCarouselContainer")) {
                        console.log("SToP MODULES");
                        OPL.UI.stopModules(document.getElementById("mobilePropositionCarouselContainer")); //  this.props.carouselPreparing();
                    }
                }
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                if (this.state.isUpdating) {
                    console.log("*******offerB2BcarouselContainer componentDidUpdate ");
                    console.log("START MODULES ");
                    var plotCombo = "";

                    if (this.props.offers && !!this.props.offers[0]) {
                        plotCombo = this.props.offers[0].offerType + "_" + this.props.offers[0].processType + "_" + this.props.offers[0].loyaltyLength;
                    }

                    this.loadModulesInsideCarousel(this.props.offers && this.props.offers.length);
                    this.setState({
                        isUpdating: false,
                        plotCombo: plotCombo
                    });
                }

                this.updateDimensions();
            }
        }, {
            key: "onClickPickDevice",
            value: function onClickPickDevice(e) {
                e.preventDefault();
                this.props.setPropositionListSoftBundleGroup();
                var returnLink = this.props.marketContextPrefixUrl + this.props.productListUrl;
                window.location = returnLink;
            }
        }, {
            key: "render",
            value: function render() {
                var _this3 = this;

                if (this.props.propositionListCount === 0) {
                    return null;
                }

                var offerDisclaimer = this.props.descriptions[["offerDisclaimer", this.props.selectedOfferType, this.props.processType].filter(Boolean).join(".")];

                var disclaimerElem = function disclaimerElem() {
                    return offerDisclaimer ? /*#__PURE__*/ _react.default.createElement("div", {
                        className: "g-black1-bg g-white1-c u-margin-l u-margin-top-l",
                        key: "disclaimer"
                    }, _TooltipFromHtml.default.conditionalRender(offerDisclaimer)) : null;
                };

                var discountInfoElem = function discountInfoElem() {
                    return _this3.props.isB2B ? null : /*#__PURE__*/ _react.default.createElement(_DiscountInfo.default, {
                        key: "discountInfo",
                        className: "u-padding-top-m",
                        descriptions: _this3.props.descriptions,
                        contractRole: _this3.props.contractRole,
                        offerType: _this3.props.selectedOfferType
                    });
                };

                var renderHeaderAndClientContext = function renderHeaderAndClientContext() {
                    return !_OnlineUtils.default.isAssignment(_this3.props.processType) && !_OnlineUtils.default.isMnpApplication(_this3.props.processType) && /*#__PURE__*/ _react.default.createElement("div", {
                        className: "u-border-top u-no-margin u-padding-s u-padding-top-m",
                        key: "mobileCarouselB2bHeader"
                    }, /*#__PURE__*/ _react.default.createElement("h3", null, _this3.props.descriptions.header), /*#__PURE__*/ _react.default.createElement("div", {
                        className: "u-padding-top-m u-padding-l u-small-padding-s "
                    }, /*#__PURE__*/ _react.default.createElement(_ClientContextCheckbox.default, {
                        tooltip: _this3.getDescriptionValueForSelectedOfferType(_this3.props, "clientContextTooltip"),
                        label: _this3.props.descriptions.clientContextLabel,
                        channels: _this3.props.channels,
                        position: "left",
                        key: "clientContextCheckBox"
                    })));
                };

                var renderMobilePropositionCarouselContainer = function renderMobilePropositionCarouselContainer() {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        ref: function ref(_ref3) {
                            return _this3.ref = _ref3;
                        },
                        id: "mobilePropositionCarouselContainer",
                        key: "carouselContainer"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        id: "offerB2Bcarousel",
                        ref: function ref(_ref2) {
                            return _this3.carouselRef = _ref2;
                        },
                        className: "opl-carousel opl-carousel--brand-dots l-row u-padding-top-l u-small-padding-top-l-xl",
                        key: "carouselBody"
                    }, _OnlineUtils.default.isAssignment(_this3.props.processType) || _OnlineUtils.default.isMnpApplication(_this3.props.processType) ? /*#__PURE__*/ _react.default.createElement(_FakeOfferBox.FakeOfferBox, babelHelpers.extends({
                        proposition: _this3.props.offers[0],
                        propositionTitle: _OnlineUtils.default.isMnpApplication(_this3.props.processType) ? "Przeniesienie numeru bez umowy" : "Przekazanie usług"
                    }, _this3.props)) : _this3.props.offers.map(function(offer, index) {
                        return /*#__PURE__*/ _react.default.createElement(_MobilePropositionB2B.MobilePropositionB2B, babelHelpers.extends({
                            key: "proposition_" + offer.id + "_" + index,
                            id: "proposition_" + offer.id,
                            offer: offer,
                            selected: offer.id === _this3.props.selectedOfferId
                        }, _this3.props, {
                            index: index,
                            selectOfferCallback: _this3.props.selectOffer
                        }));
                    })));
                };

                if (this.props.offers && this.props.offers[0]) {
                    return /*#__PURE__*/ _react.default.createElement("div", null, [renderHeaderAndClientContext(), disclaimerElem(), discountInfoElem(), renderMobilePropositionCarouselContainer()]);
                } else {
                    return null;
                }
            }
        }]);
        return MobileCarouselB2B;
    }(_react.default.PureComponent);

    _exports.default = MobileCarouselB2B;
});
//# sourceMappingURL=MobileCarouselB2B.js.map