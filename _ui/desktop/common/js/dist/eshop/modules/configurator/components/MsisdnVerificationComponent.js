define(["exports", "react", "eshop/components/OraCommonComponents", "eshop/utils/OnlineUtils"], function(_exports, _react, _OraCommonComponents, _OnlineUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
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

    var MsisdnVerificationComponent = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(MsisdnVerificationComponent, _React$Component);

        var _super = _createSuper(MsisdnVerificationComponent);

        function MsisdnVerificationComponent() {
            babelHelpers.classCallCheck(this, MsisdnVerificationComponent);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(MsisdnVerificationComponent, [{
            key: "componentWillMount",
            value: function componentWillMount() {
                this.id = "msisdn-verification-row" + (this.props.index || this.props.index === 0 ? "-" + this.props.index : "");
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                if (!this.props.parentId || document.getElementById(this.id)) {
                    console.log("Mount-init");
                    OPL.UI.loadModules(document.getElementById(this.id), {
                        path: 'core/modules/loader',
                        options: '{"fadeDuration":120}'
                    });
                    OPL.UI.loadModules(document.getElementById("msisdnInput"), {
                        path: 'common/modules/opl-input-mask',
                        options: {
                            mask: '999999999'
                        }
                    });
                }
            }
        }, {
            key: "render",
            value: function render() {
                var _this = this;

                return /*#__PURE__*/ _react.default.createElement("div", {
                    id: "msisdn-verification-row",
                    "data-js-module": "core/modules/loader"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraLoader, {
                    className: "l-row",
                    loading: this.props.isMsisdnChecking,
                    id: "msisdn-verification-loader-component",
                    parentId: "msisdn-verification-row",
                    size: "m"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-console"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-spacing-left-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-bottom-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-3"
                }, /*#__PURE__*/ _react.default.createElement("label", {
                    htmlFor: "msisdnInput"
                }, this.props.inputFieldDesc)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-3"
                }, /*#__PURE__*/ _react.default.createElement("input", {
                    type: "text",
                    id: "msisdnInput",
                    role: "alert",
                    ref: function ref(_ref) {
                        return _this.inputRef = _ref;
                    },
                    autoFocus: this.inputRef && !this.inputRef.value && (!_OnlineUtils.default.isMnpApplication(this.props.processType) || this.props.isCustomerSelected),
                    defaultValue: this.props.msisdn == "undefined" || !this.props.msisdn ? "" : this.props.msisdn,
                    onBlur: this.props.handleMsisdnChange,
                    className: this.props.valid ? '' : 'error'
                }), this.props.valid ? null : /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraMessage, {
                    type: "error",
                    text: this.props.invalidNumberDesc
                }), this.props.showMsisdnVerificationWarning && /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraMessage, {
                    type: "error",
                    text: "Najpierw zweryfikuj numer"
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-1"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    className: "u-w-100 opl-console-button--green",
                    id: "msisdn-verification-component-submit-button",
                    onClick: this.props.validate
                }, "Dalej")))))));
            }
        }]);
        return MsisdnVerificationComponent;
    }(_react.default.Component);

    _exports.default = MsisdnVerificationComponent;;
});
//# sourceMappingURL=MsisdnVerificationComponent.js.map