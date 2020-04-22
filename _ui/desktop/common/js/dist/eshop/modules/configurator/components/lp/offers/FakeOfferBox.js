define(["exports", "react", "eshop/modules/configurator/components/lp/offers/newOfferBoxComponents/PriceBox", "eshop/modules/configurator/components/lp/offers/newOfferBoxComponents/ClassificationAttributesBox", "eshop/modules/configurator/components/lp/offers/newOfferBoxComponents/DetailsButtons", "eshop/modules/configurator/components/lp/offers/newOfferBoxComponents/Buttons", "eshop/modules/configurator/components/lp/offers/Sticker", "eshop/utils/OnlineUtils"], function(_exports, _react, _PriceBox, _ClassificationAttributesBox, _DetailsButtons, _Buttons, _Sticker, _OnlineUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.FakeOfferBox = void 0;
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

    var FakeOfferBox = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(FakeOfferBox, _Component);

        var _super = _createSuper(FakeOfferBox);

        function FakeOfferBox(props) {
            var _this;

            babelHelpers.classCallCheck(this, FakeOfferBox);
            _this = _super.call(this, props);
            _this.selectOfferNoPhoneAction = _this.selectOfferNoPhoneAction.bind(babelHelpers.assertThisInitialized(_this));
            _this.pickDeviceAction = _this.pickDeviceAction.bind(babelHelpers.assertThisInitialized(_this));

            _this.props.selectOffer(_this.props.proposition.id);

            return _this;
        }

        babelHelpers.createClass(FakeOfferBox, [{
            key: "selectOfferNoPhoneAction",
            value: function selectOfferNoPhoneAction(e) {
                e && e.preventDefault();
                this.props.selectOfferNoPhone(this.props.proposition.id);
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
                    selectOffer: this.props.descriptions['select.offer.button.label.for.ASSIGNMENT'] || 'Przekaż usługę',
                    pickDevice: this.props.selectButtonLabel,
                    "details.open": this.props.detailsLabel,
                    "details.close": getLabelsForDetails(this.props.descriptions)['close']
                };
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-xsmall-12 l-col-small-6 l-col-medium-4 l-col-3 l-col-xlarge-3  opl-carousel__item u-padding-l u-padding-top-l u-xsmall-no-padding-l u-xsmall-no-padding-r u-xsmall-transform-scale-09 u-xsmall-transform-scale-1-slick"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "g-white1-bg u-box-shadow u-padding-all-l u-large-padding-all-l-xl"
                }, /*#__PURE__*/ _react.default.createElement(_Sticker.Sticker, {
                    sticker: proposition.sticker,
                    renderMobileVersion: false
                }), /*#__PURE__*/ _react.default.createElement("span", null, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h3"
                }, this.props.propositionTitle)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-separator"
                }), /*#__PURE__*/ _react.default.createElement("span", null, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-font-bold",
                    dangerouslySetInnerHTML: {
                        __html: this.props.proposition.longDescription
                    }
                })), _OnlineUtils.default.isAssignment(this.props.processType) && /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-separator"
                }), /*#__PURE__*/ _react.default.createElement(_Buttons.Buttons, {
                    selectOfferNoPhoneAction: this.selectOfferNoPhoneAction,
                    pickDeviceAction: this.pickDeviceAction,
                    labels: labels,
                    disabled: this.props.disableAddToCart,
                    pickDeviceShouldBeHidden: true
                }))));
            }
        }]);
        return FakeOfferBox;
    }(_react.Component);

    _exports.FakeOfferBox = FakeOfferBox;

    var getLabelsForDetails = function getLabelsForDetails(desc) {
        return {
            close: desc['details.close'] || "def:Zamknij",
            header: desc['details.header'] || "def:Szczegóły oferty",
            select: desc['details.select'] || "def:Wybieram ofertę bez telefonu"
        };
    };

    var getFeaturesConfig = function getFeaturesConfig(desc) {
        return {
            dataBarDescription: desc['features.dataBarDescription'] || "def:Internet w telefonie"
        };
    };
});
//# sourceMappingURL=FakeOfferBox.js.map