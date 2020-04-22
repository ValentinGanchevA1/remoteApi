define(["exports", "react-redux", "react", "prop-types", "eshop/utils/OnlineUtils"], function(_exports, _reactRedux, _react, _propTypes, _OnlineUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
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

    var TableErrorSection = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(TableErrorSection, _Component);

        var _super = _createSuper(TableErrorSection);

        function TableErrorSection(props) {
            var _this;

            babelHelpers.classCallCheck(this, TableErrorSection);
            _this = _super.call(this, props);
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "renderMsisdn", function(msisdn) {
                var descriptions = _this.props.descriptions;

                if (reasonData.msisdn) {
                    return /*#__PURE__*/ _react.default.createElement("div", null, descriptions.msisdnCaption || "Nr telefonu", " ", _OnlineUtils.default.formatMsisdn(msisdn));
                }
            });
            _this.state = {
                currency: "zł"
            };
            return _this;
        }

        babelHelpers.createClass(TableErrorSection, [{
            key: "render",
            value: function render() {
                var _this$props = this.props,
                    reasonData = _this$props.reasonData,
                    descriptions = _this$props.descriptions;
                return /*#__PURE__*/ _react.default.createElement("div", babelHelpers.defineProperty({
                    key: reasonData.planName,
                    className: "l-row u-padding-left-xl u-padding-top"
                }, "key", "customer-verification-message-" + reasonData.msisdn), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-10"
                }, reasonData.planName && /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("strong", null, reasonData.planName), reasonData.msisdn && /*#__PURE__*/ _react.default.createElement("span", null, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-padding-left-s"
                }, descriptions.msisdnCaption || "Nr telefonu ", _OnlineUtils.default.formatMsisdn(reasonData.msisdn)))), reasonData.deviceName && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-font-bold"
                }, reasonData.deviceName), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-top-s"
                }, reasonData.reasons.map(function(reason, key) {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        key: "customer-verification-reason-" + key,
                        className: "u-padding-top-s"
                    }, /*#__PURE__*/ _react.default.createElement("strong", null, descriptions.declineReasonCaption || "Powód:", " "), " ", reason);
                }))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-2 u-right u-font-bold vertical-center u-text-right"
                }, !!reasonData.deposit && reasonData.deposit > 0 && /*#__PURE__*/ _react.default.createElement("strong", null, reasonData.deposit, " ", this.state.currency)));
            }
        }]);
        return TableErrorSection;
    }(_react.Component);

    _exports.default = TableErrorSection;
    TableErrorSection.propTypes = {
        reasonData: _propTypes.default.any.isRequired,
        descriptions: _propTypes.default.any.isRequired
    };
});
//# sourceMappingURL=TableErrorSection.js.map