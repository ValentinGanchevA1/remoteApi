define(["exports", "react", "prop-types", "eshop/modules/core/components/ui/OraSwitcherSelect", "../../../components/InfoComponent", "../../core/constants/OfferTypeEnum", "../../core/enum/SalesChannel", "../../core/enum/SoftBundleGroup"], function(_exports, _react, _propTypes, _OraSwitcherSelect, _InfoComponent, _OfferTypeEnum, _SalesChannel, _SoftBundleGroup) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _OraSwitcherSelect = babelHelpers.interopRequireDefault(_OraSwitcherSelect);
    _OfferTypeEnum = babelHelpers.interopRequireDefault(_OfferTypeEnum);
    _SalesChannel = babelHelpers.interopRequireDefault(_SalesChannel);
    _SoftBundleGroup = babelHelpers.interopRequireDefault(_SoftBundleGroup);

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

    var OfferFilterComponentsSwitcherView = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(OfferFilterComponentsSwitcherView, _Component);

        var _super = _createSuper(OfferFilterComponentsSwitcherView);

        function OfferFilterComponentsSwitcherView() {
            var _this;

            babelHelpers.classCallCheck(this, OfferFilterComponentsSwitcherView);

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            _this = _super.call.apply(_super, [this].concat(args));
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "renderConditionalInfo", function(_ref) {
                var channels = _ref.channels,
                    offerType = _ref.offerType,
                    softBundleGroup = _ref.softBundleGroup,
                    hasLove = _ref.hasLove;

                if (channels.sales === _SalesChannel.default.WWW && offerType === _OfferTypeEnum.default.VOICE_LDF && softBundleGroup === _SoftBundleGroup.default.LDF) {
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
            return _this;
        }

        babelHelpers.createClass(OfferFilterComponentsSwitcherView, [{
            key: "render",
            value: function render() {
                if (!!!this.props.offerType) {
                    return null;
                }

                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-full-row g-gray1-bg"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row u-padding-l "
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: " " + (this.props.selectedOfferType === _OfferTypeEnum.default.DATA ? " u-border-top" : " u-padding-m u-padding-top")
                }, this.props.descriptions.processSelectHeader && this.props.offerType === _OfferTypeEnum.default.DATA && /*#__PURE__*/ _react.default.createElement("h2", null, this.props.descriptions.processSelectHeader), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-medium-hide u-small-hide u-padding-top-s"
                }, /*#__PURE__*/ _react.default.createElement(_OraSwitcherSelect.default, {
                    key: "processTypeFilter",
                    options: this.props.processTypeData,
                    disabledOptions: this.props.disabledProcesses,
                    id: "processTypeFilter",
                    selected: this.props.selectedProcessValue,
                    onChange: this.props.selectProcessCallback,
                    className: "u-small-left u-left u-w-100 u-small-w-auto u-medium-w-100 u-small-w-100",
                    isFeedbackParam: "true",
                    selectClassName: "opl-input--size-m"
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-large-hide"
                }, /*#__PURE__*/ _react.default.createElement(_OraSwitcherSelect.default, {
                    key: "processTypeFilter",
                    options: this.props.processTypeData,
                    disabledOptions: this.props.disabledProcesses,
                    id: "processTypeFilter",
                    selected: this.props.selectedProcessValue,
                    onChange: this.props.selectProcessCallback,
                    className: "u-small-left u-left u-w-100 u-small-w-auto u-medium-w-100 u-small-w-100",
                    isFeedbackParam: "true",
                    selectClassName: "opl-input--size-m"
                }))), this.renderConditionalInfo(this.props), this.props.selectedProcessValue && [ /*#__PURE__*/ _react.default.createElement(LoyaltySelectHeader, babelHelpers.extends({
                    key: "loyaltySelectHeader"
                }, this.props.descriptions)), /*#__PURE__*/ _react.default.createElement(LoyaltySelectDiv, babelHelpers.extends({
                    key: "loyaltySelectDiv"
                }, this.props))]));
            }
        }]);
        return OfferFilterComponentsSwitcherView;
    }(_react.Component);

    _exports.default = OfferFilterComponentsSwitcherView;
    var propTypes = {
        selectedProcessValue: _propTypes.default.string,
        processTypeData: _propTypes.default.arrayOf(_propTypes.default.shape({
            value: _propTypes.default.string,
            description: _propTypes.default.string
        })),
        selectProcessCallback: _propTypes.default.func,
        selectedLoyaltyLengthValue: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
        loyaltyLengthData: _propTypes.default.arrayOf(_propTypes.default.shape({
            value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
            description: _propTypes.default.string
        })),
        selectLoyaltyLengthCallback: _propTypes.default.func,
        softBundleGroup: _propTypes.default.string,
        contractRole: _propTypes.default.string,
        offerType: _propTypes.default.string,
        channels: _propTypes.default.object,
        hasLove: _propTypes.default.bool,
        hasODF: _propTypes.default.bool,
        descriptions: _propTypes.default.objectOf(_propTypes.default.string),
        selectedOfferType: _propTypes.default.objectOf(_OfferTypeEnum.default)
    };
    OfferFilterComponentsSwitcherView.propTypes = propTypes;

    var LoyaltySelectHeader = function LoyaltySelectHeader(_ref2) {
        var loyaltySelectHeader = _ref2.loyaltySelectHeader;
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-border-top u-no-margin u-padding-l u-padding-top-m"
        }, loyaltySelectHeader && /*#__PURE__*/ _react.default.createElement("h3", null, loyaltySelectHeader));
    };

    LoyaltySelectHeader.propTypes = {
        loyaltySelectHeader: _propTypes.default.string
    };

    var LoyaltySelectDiv = function LoyaltySelectDiv(_ref3) {
        var loyaltyLengthData = _ref3.loyaltyLengthData,
            selectedLoyaltyLengthValue = _ref3.selectedLoyaltyLengthValue,
            selectLoyaltyLengthCallback = _ref3.selectLoyaltyLengthCallback;
        return /*#__PURE__*/ _react.default.createElement(_OraSwitcherSelect.default, {
            key: "loyaltyFilter",
            options: loyaltyLengthData,
            id: "loyaltyFilter",
            selected: selectedLoyaltyLengthValue,
            onChange: selectLoyaltyLengthCallback,
            className: "u-small-left u-left u-w-100 u-small-w-auto u-medium-w-100 u-small-w-100",
            selectClassName: "opl-input--size-m",
            singleOptionClassName: "u-small-no-padding-left",
            renderSingleOption: true
        });
    };

    LoyaltySelectDiv.propTypes = {
        loyaltyLengthData: _propTypes.default.array,
        selectedLoyaltyLengthValue: _propTypes.default.number,
        selectLoyaltyLengthCallback: _propTypes.default.func.isRequired
    };
});
//# sourceMappingURL=OfferFilterComponentsSwitcherView.js.map