define(["exports", "react", "eshop/modules/configurator/components/lp/offers/newOfferBoxComponents/PriceBox", "eshop/modules/configurator/components/lp/offers/newOfferBoxComponents/ClassificationAttributesBox", "eshop/modules/configurator/components/lp/offers/newOfferBoxComponents/DetailsButtons", "eshop/modules/configurator/components/lp/offers/newOfferBoxComponents/Buttons", "./Sticker", "./FakeOfferBox", "eshop/utils/OnlineUtils"], function(_exports, _react, _PriceBox, _ClassificationAttributesBox, _DetailsButtons, _Buttons, _Sticker, _FakeOfferBox, _OnlineUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.OfferBox = void 0;
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

    var OfferBox = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(OfferBox, _Component);

        var _super = _createSuper(OfferBox);

        function OfferBox(props) {
            var _this;

            babelHelpers.classCallCheck(this, OfferBox);
            _this = _super.call(this, props);
            _this.selectOfferNoPhoneAction = _this.selectOfferNoPhoneAction.bind(babelHelpers.assertThisInitialized(_this));
            _this.pickDeviceAction = _this.pickDeviceAction.bind(babelHelpers.assertThisInitialized(_this));
            return _this;
        }

        babelHelpers.createClass(OfferBox, [{
            key: "selectOfferNoPhoneAction",
            value: function selectOfferNoPhoneAction(e) {
                e && e.preventDefault();

                if (this.props.cartIsFix) {
                    var msg = this.props.descriptions && this.props.descriptions.fixincartmsg || "W koszyku jest już oferta stacjonarna";
                    this.props.showError(msg);
                } else {
                    this.props.selectOfferNoPhone(this.props.proposition.id);
                }
            }
        }, {
            key: "pickDeviceAction",
            value: function pickDeviceAction(e) {
                e && e.preventDefault();
                this.props.pickDevice(this.props.proposition.id, this.props.deviceListAddress);
            }
        }, {
            key: "render",
            value: function render() {
                var proposition = this.props.proposition;
                var labels = {
                    selectOffer: this.props.alternativeSelectLabel,
                    pickDevice: this.props.selectButtonLabel,
                    "details.open": this.props.detailsLabel,
                    "details.close": getLabelsForDetails(this.props.descriptions)['close']
                };
                return this.isAssignment() ? /*#__PURE__*/ _react.default.createElement(_FakeOfferBox.FakeOfferBox, babelHelpers.extends({
                    propositionTitle: "Przekazanie usług"
                }, this.props)) : /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-xsmall-12 l-col-small-6 l-col-medium-4 l-col-3 l-col-xlarge-3  opl-carousel__item u-padding-l u-padding-top-l u-xsmall-no-padding-l u-xsmall-no-padding-r u-xsmall-transform-scale-09 u-xsmall-transform-scale-1-slick"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "g-white1-bg u-box-shadow u-padding-all-l u-large-padding-all-l-xl"
                }, /*#__PURE__*/ _react.default.createElement(_Sticker.Sticker, {
                    sticker: proposition.sticker,
                    renderMobileVersion: false
                }), /*#__PURE__*/ _react.default.createElement(_PriceBox.PriceBox, {
                    key: "PriceBox_" + proposition.rateplanId,
                    priceLabel: this.props.priceLabel,
                    name: proposition.rateplanName,
                    id: proposition.rateplanId,
                    price: proposition.price,
                    oldPrice: proposition.oldPrice,
                    mobileDataDesc: proposition.features.getMobileDataDesc(),
                    mobileRetentionDesc: proposition.features.getMobileRetentionDesc(),
                    tooltipValues: getTooltipValues(this.props.descriptions),
                    featuresGroup: proposition.features.featureGroups.promotionFeatures,
                    featuresPositions: this.props.featuresPositions,
                    processType: proposition.processType,
                    convergence: this.props.clientContext
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-separator"
                }), /*#__PURE__*/ _react.default.createElement(_ClassificationAttributesBox.ClassificationAttributesBox, {
                    featuresGroup: proposition.features.featureGroups.boxFeatures,
                    config: getFeaturesConfig(this.props.descriptions),
                    processType: proposition.processType,
                    id: proposition.rateplanId,
                    convergence: this.props.clientContext
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-separator"
                }), /*#__PURE__*/ _react.default.createElement(_DetailsButtons.DetailsButtons, {
                    proposition: proposition,
                    descriptions: this.props.descriptions,
                    clientContext: this.props.clientContext
                }), /*#__PURE__*/ _react.default.createElement(_Buttons.Buttons, {
                    selectOfferNoPhoneAction: this.selectOfferNoPhoneAction,
                    pickDeviceAction: this.pickDeviceAction,
                    labels: labels,
                    disabled: this.props.disableAddToCart,
                    pickDeviceShouldBeHidden: false
                })));
            }
        }, {
            key: "isAssignment",
            value: function isAssignment() {
                return _OnlineUtils.default.isAssignment(this.props.proposition.processType);
            }
        }]);
        return OfferBox;
    }(_react.Component);

    _exports.OfferBox = OfferBox;

    var getLabelsForDetails = function getLabelsForDetails(desc) {
        return {
            close: desc['details.close'] || "def:Zamknij",
            header: desc['details.header'] || "def:Szczegóły oferty",
            select: desc['details.select'] || "def:Wybieram ofertę bez telefonu"
        };
    };

    var getTooltipValues = function getTooltipValues(desc) {
        return {
            noConvergent: desc['tooltip.priceDiscount'] || "<div id=\"TOOLTIP-ID-PLACEHOLDER\"><span class=\"o-tooltip__trigger g-icon g-icon--info g-icon--xs-s u-spacing-left-s u-cursor-pointer\"/><span class=\"o-tooltip__content o-tooltip__content--focusable\">def: Brak treści</span></div>",
            convergent: desc['tooltip.convergentPriceDiscount'] || "<div id=\"TOOLTIP-ID-PLACEHOLDER\"><span class=\"o-tooltip__trigger g-icon g-icon--info g-icon--xs-s u-spacing-left-s u-cursor-pointer\"/><span class=\"o-tooltip__content o-tooltip__content--focusable\">def: Brak treści</span></div>"
        };
    };

    var getFeaturesConfig = function getFeaturesConfig(desc) {
        return {
            dataBarDescription: desc['features.dataBarDescription'] || "def:Internet w telefonie"
        };
    };
});
//# sourceMappingURL=OfferBox.js.map