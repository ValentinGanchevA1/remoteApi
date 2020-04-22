define(["exports", "react", "react-redux", "eshop/modules/configurator/actions/offers", "eshop/modules/configurator/selectors/offers", "eshop/modules/configurator/selectors/metaData", "eshop/modules/configurator/selectors/filters", "eshop/modules/configurator/components/lp/offers/OfferBox", "eshop/modules/configurator/utils", "eshop/utils/OnlineUtils", "eshop/components/OraCommonComponents", "eshop/modules/auth/actions/authorization"], function(_exports, _react, _reactRedux, _offers, _offers2, _metaData, _filters, _OfferBox, _utils, _OnlineUtils, _OraCommonComponents, _authorization) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);

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

    var oplExpanderModule = function oplExpanderModule() {
        return {
            path: "common/modules/opl-expander",
            conditions: "media:{eq-small}",
            options: {
                scrollToSelected: false,
                triggerSelector: ".opl-box__expander__trigger",
                contentSelector: ".opl-box__expander__content",
                parentClass: "opl-box__expander"
            }
        };
    };

    var oplLayoutFixerModule = function oplLayoutFixerModule() {
        return {
            path: "core/modules/layout-fixer",
            options: {
                selectors: [".js-layout-fixer-group-1", ".js-layout-fixer-group-2", ".js-layout-fixer-group-3", ".js-layout-fixer-group-4", ".js-layout-fixer-group-5", ".js-layout-fixer-group-6", ".js-layout-fixer-group-7", ".js-layout-fixer-group-classification-attribute", ".js-layout-rateplan-name-fixer"]
            }
        };
    };

    var oplBoxDetailsModule = function oplBoxDetailsModule() {
        return {
            path: "common/modules/opl-box-details",
            options: {}
        };
    };

    var oplCarousel = function oplCarousel(offerCount) {
        return {
            path: "common/modules/opl-carousel",
            options: {
                arrows: false,
                dots: true,
                slidesToShow: 1,
                mobileFirst: true,
                infinite: false,
                centerMode: true,
                centerPadding: "40px",
                responsive: [{
                    breakpoint: 200,
                    settings: {
                        slidesToShow: 1,
                        centerMode: true,
                        centerPadding: "18px"
                    }
                }, {
                    breakpoint: 567,
                    settings: {
                        slidesToShow: 2,
                        centerMode: false
                    }
                }, {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                        centerMode: false
                    }
                }, {
                    breakpoint: 1259,
                    settings: {
                        slidesToShow: offerCount,
                        centerMode: false
                    }
                }]
            }
        };
    };

    var jsModules = function jsModules(offerCount) {
        return [oplLayoutFixerModule(), oplCarousel(offerCount)];
    };

    var updateDimensions = function updateDimensions() {
        OPL.UI.fire(OPL.UI.EVENTS.modules.layoutFixer.recalculate, getCarouselContainerId());
    };

    var getParentCarouselContainerId = function getParentCarouselContainerId() {
        return "carousel-parent-container";
    };

    var getCarouselContainerId = function getCarouselContainerId() {
        return "carousel-container";
    };

    var getParentCarouselContainer = function getParentCarouselContainer() {
        return document.getElementById(getParentCarouselContainerId());
    };

    var getCarouselContainer = function getCarouselContainer() {
        return document.getElementById(getCarouselContainerId());
    };

    var initModulesInsideCarousel = function initModulesInsideCarousel() {
        OPL.UI.initModules(getParentCarouselContainer());
        updateDimensions();
    };

    var loadModulesInsideCarousel = function loadModulesInsideCarousel() {
        var offerCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;

        if (offerCount > 4) {
            offerCount = 4;
        }

        console.log(" loadModulesInsideCarousel **********************************************");
        OPL.UI.loadModules(getCarouselContainer(), jsModules(offerCount));
        updateDimensions();
    };

    var stopModulesInsideCarousel = function stopModulesInsideCarousel() {
        OPL.UI.stopModules(getParentCarouselContainer());
    }; //We need to unmount and mount carousel because UI carousel mess in DOM and react dont like it :(
    //isUpdating is to do this workaround, if u have better idea please share or just refactor this code :P


    var OraPropositionCarousel = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(OraPropositionCarousel, _Component);

        var _super = _createSuper(OraPropositionCarousel);

        function OraPropositionCarousel(props) {
            var _this;

            babelHelpers.classCallCheck(this, OraPropositionCarousel);
            _this = _super.call(this, props);
            _this.state = {
                isUpdating: false
            };
            return _this;
        }

        babelHelpers.createClass(OraPropositionCarousel, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                _OnlineUtils.default.setAsLastViewedOfferPage();
            }
        }, {
            key: "compareFilters",
            value: function compareFilters(currentProps, nextProps) {
                var currentFilters = currentProps.selectedFilters;
                var nextFilters = nextProps.selectedFilters;
                return currentFilters.offerType == nextFilters.offerType && currentFilters.processType == nextFilters.processType && currentFilters.verifiedMsisdn == nextFilters.verifiedMsisdn && currentFilters.loyaltyLength[currentFilters.processType] == nextFilters.loyaltyLength[nextFilters.processType];
            }
        }, {
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                var _this2 = this;

                if (!this.compareFilters(this.props, nextProps)) {
                    this.setState({
                        isUpdating: true
                    });
                    setTimeout(function() {
                        return _this2.setState({
                            isUpdating: false
                        });
                    }, 0);
                }
            }
        }, {
            key: "render",
            value: function render() {
                if (!this.state.isUpdating && this.props.propositionsInContext && this.props.propositionsInContext.offers[0]) {
                    return /*#__PURE__*/ _react.default.createElement(PropositionCarousel, this.props);
                } else {
                    return null;
                }
            }
        }]);
        return OraPropositionCarousel;
    }(_react.Component);

    var PropositionCarousel = /*#__PURE__*/ function(_Component2) {
        babelHelpers.inherits(PropositionCarousel, _Component2);

        var _super2 = _createSuper(PropositionCarousel);

        function PropositionCarousel(props) {
            var _this3;

            babelHelpers.classCallCheck(this, PropositionCarousel);
            _this3 = _super2.call(this, props);
            _this3.state = {
                reloadModules: true
            };
            return _this3;
        }

        babelHelpers.createClass(PropositionCarousel, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                window.addEventListener("resize", updateDimensions);
                this.handleDefault();
                loadModulesInsideCarousel(this.props.propositionsInContext.offers.length);
                this.setState({
                    reloadModules: false
                });
            }
        }, {
            key: "handleDefault",
            value: function handleDefault() {
                var that = this;
                OPL.UI.on('module.started', function(data) {
                    if (data.module == 'common/modules/opl-carousel') {
                        setTimeout(that.goToDefault.bind(that), 300);
                    }
                });
            }
        }, {
            key: "goToDefault",
            value: function goToDefault() {
                var _this4 = this;

                console.log("this.props.selectedBaseRatePlanId", this.props.selectedBaseRatePlanId);
                if (!this.props.selectedBaseRatePlanId) return;
                var propositions = this.props.propositionsInContext && this.props.propositionsInContext.offers;
                var propositionIndexed = propositions.find(function(p) {
                    return p.rateplanBaseProductId == _this4.props.selectedBaseRatePlanId;
                });
                var goToIndex = propositions.indexOf(propositionIndexed);
                console.log("GOTO ", goToIndex);
                OPL.UI.fire(OPL.UI.EVENTS.modules.carousel.goTo, goToIndex, getCarouselContainerId());
            }
        }, {
            key: "componentWillUpdate",
            value: function componentWillUpdate(nextProps, nextState) {
                if (nextProps.propositionsInContext.offers.length != this.props.propositionsInContext.offers.length) {
                    stopModulesInsideCarousel();
                    this.setState({
                        reloadModules: true
                    });
                }
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                console.log("onUpdate this.props.selectedOffer=", this.props.selectedOffer);

                if (this.state.reloadModules) {
                    loadModulesInsideCarousel(this.props.propositionsInContext.offers.length);
                }

                if (this.props.selectedOffer) {
                    console.log("onUpdate this.props.selectedOffer=", this.props.selectedOffer);
                    this.goToDefault();
                }

                updateDimensions();
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                stopModulesInsideCarousel();
            }
        }, {
            key: "getFeaturesPositions",
            value: function getFeaturesPositions() {
                var propositions = this.props.propositionsInContext.offers;

                if (propositions.length) {
                    var proposition = propositions[propositions.length - 1];

                    if (proposition.features && proposition.features.featureGroups && proposition.features.featureGroups.promotionFeatures) {
                        var promoFeatures = proposition.features.featureGroups.promotionFeatures;
                        var featuresPositions = [];
                        promoFeatures.forEach(function(f) {
                            featuresPositions.push(f.code);
                        });
                        return featuresPositions;
                    }
                }

                return [];
            }
        }, {
            key: "render",
            value: function render() {
                var _this5 = this;

                var propositions = this.props.propositionsInContext.offers;
                return /*#__PURE__*/ _react.default.createElement("div", {
                    id: getParentCarouselContainerId(),
                    className: "u-small-no-padding"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    id: getCarouselContainerId(),
                    className: "l-row opl-carousel opl-carousel--brand-dots"
                }, propositions.map(function(proposition) {
                    return /*#__PURE__*/ _react.default.createElement(_OfferBox.OfferBox, babelHelpers.extends({}, _this5.props.selectedOffer, {
                        key: proposition.id,
                        proposition: proposition,
                        featuresPositions: _this5.getFeaturesPositions()
                    }, _this5.props));
                })));
            }
        }]);
        return PropositionCarousel;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            selectedBaseRatePlanId: (0, _offers2.getSelectedBaseRatePlanId)(state),
            selectedOfferId: (0, _offers2.getSelectedOfferId)(state),
            selectedOffer: (0, _offers2.getSelectedOffer)(state),
            propositionsInContext: (0, _offers2.getOffersDataInContext)(state),
            offersLoading: (0, _metaData.getOffersLoading)(state),
            disableAddToCart: (0, _filters.getDisableAddToCart)(state),
            clientContext: (0, _filters.getClientContext)(state),
            selectedFilters: (0, _filters.getSelectedFilters)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            selectOfferNoPhone: function selectOfferNoPhone(propositionId) {
                return dispatch((0, _offers.selectOffer)(propositionId));
            },
            pickDevice: function pickDevice(propositionId, url) {
                return dispatch((0, _offers.pickDevice)(propositionId, url));
            },
            showError: function showError(msg) {
                return dispatch((0, _authorization.showError)(msg));
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(OraPropositionCarousel);

    _exports.default = _default;
});
//# sourceMappingURL=OraPropositionCarousel.js.map