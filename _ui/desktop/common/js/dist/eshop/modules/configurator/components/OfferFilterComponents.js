define(["exports", "react", "eshop/components/OraCommonComponents", "./ClientContextCheckbox", "prop-types", "../../core/enum/SalesChannel"], function(_exports, _react, _OraCommonComponents, _ClientContextCheckbox, _propTypes, _SalesChannel) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _ClientContextCheckbox = babelHelpers.interopRequireDefault(_ClientContextCheckbox);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
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
        selectLoyaltyLengthCallback: _propTypes.default.func
    }; //TODO trzeba by jakos ladnie odseparowac ten komponent od logiki zeby byl reuzywalny, ale czy na pewno jest nam on potrzebny reuzywalny :P
    //TODO ClientContextCheckbox jest przypięty do redux store, selectorów i reducerów - nie będzie reużywalny poza tym kontekstem -
    //TODO myślę, że to jest OK, bo nawet jeśli będzie reużywany, to w ramach tej samej aplikacji z tym samym storem.

    var OfferFilterComponents = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(OfferFilterComponents, _Component);

        var _super = _createSuper(OfferFilterComponents);

        function OfferFilterComponents() {
            babelHelpers.classCallCheck(this, OfferFilterComponents);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(OfferFilterComponents, [{
            key: "render",
            value: function render() {
                var selectWidthClass = this.props.switchType === "TAB" && this.props.showSwitch ? "l-col-6" : "l-col-4";
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row u-small-box-shadow" + (this.props.switchType === "TAB" ? " u-large-padding-top-l u-medium-padding-l u-small-padding-l" : " u-padding-all-l")
                }, this.props.headerText && /*#__PURE__*/ _react.default.createElement("h1", null, this.props.headerText), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, this.props.switchType === "TAB" && this.props.showSwitch && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-4 l-col-medium-12 l-col-small-12"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.SwitchButtons, {
                    options: this.props.switchConf,
                    onClick: this.props.onClickSwitch,
                    switchType: this.props.switchType
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: this.props.switchType === "TAB" && this.props.showSwitch ? "l-col l-col-small-12 l-col-medium-12 l-col-8" : ""
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12" + (this.props.switchType === "TAB" ? " l-col-8" : " l-col-5")
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-medium-padding-top-l u-small-padding-top-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 u-small-padding-l u-medium-no-padding-left " + (this.props.processTypeData.length > 1 ? "" : "u-padding-top-m ") + selectWidthClass
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraSelect, {
                    options: this.props.processTypeData,
                    id: "processTypeFilter",
                    selected: this.props.selectedProcessValue,
                    onChange: this.props.selectProcessCallback,
                    className: "u-small-left u-left u-w-100 u-small-w-auto u-medium-w-100 u-small-w-100",
                    isFeedbackParam: "true",
                    selectClassName: "opl-input--size-m"
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 " + selectWidthClass
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraSelect, {
                    options: this.props.loyaltyLengthData,
                    id: "loyaltyFilter",
                    selected: this.props.selectedLoyaltyLengthValue,
                    onChange: this.props.selectLoyaltyLengthCallback,
                    className: "u-small-left u-left u-w-100 u-small-w-auto u-medium-w-100 u-small-w-100",
                    selectClassName: "opl-input--size-m",
                    singleOptionClassName: "u-small-no-padding-left"
                })))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12" + (this.props.switchType === "TAB" ? " l-col-4" : " l-col-7")
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-medium-padding-top-l"
                }, this.props.channels.sales === _SalesChannel.default.WWW && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 " + (this.props.switchType === "TAB" ? "l-col-medium-4 l-col-12" : "l-col-medium-6 l-col-5") + " u-padding-top u-small-padding-top-l"
                }, /*#__PURE__*/ _react.default.createElement(_ClientContextCheckbox.default, babelHelpers.extends({}, this.props.clientContextCheckboxConfig, {
                    channels: this.props.channels,
                    alignClass: " u-small-left u-large-right u-small-no-padding-left"
                }))), this.props.showSwitch && this.props.switchType !== "TAB" && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-7  u-small-padding-top-l"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.SwitchButtons, {
                    options: this.props.switchConf,
                    onClick: this.props.onClickSwitch,
                    switchType: this.props.switchType
                })))))));
            }
        }]);
        return OfferFilterComponents;
    }(_react.Component);

    _exports.default = OfferFilterComponents;
    OfferFilterComponents.propTypes = propTypes;
});
//# sourceMappingURL=OfferFilterComponents.js.map