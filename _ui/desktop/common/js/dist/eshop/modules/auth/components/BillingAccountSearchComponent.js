define(["exports", "react", "../../magnum2/components/InputWithFloatingLabel"], function(_exports, _react, _InputWithFloatingLabel) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _InputWithFloatingLabel = babelHelpers.interopRequireDefault(_InputWithFloatingLabel);

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

    var BillingAccountSearchComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(BillingAccountSearchComponent, _Component);

        var _super = _createSuper(BillingAccountSearchComponent);

        function BillingAccountSearchComponent(props) {
            var _this;

            babelHelpers.classCallCheck(this, BillingAccountSearchComponent);
            _this = _super.call(this, props);
            _this.state = {
                msisdn: ""
            };
            return _this;
        }

        babelHelpers.createClass(BillingAccountSearchComponent, [{
            key: "inputLabel",
            value: function inputLabel() {
                return "Numer MSISDN";
                return "Numer MSISDN lub konta"; //to use after resolving NOR-184581
            }
        }, {
            key: "onMsisdnFieldChange",
            value: function onMsisdnFieldChange(valiObj) {
                this.setState({
                    msisdn: valiObj.value
                });
            }
        }, {
            key: "validateAccountCode",
            value: function validateAccountCode() {
                var input = this.getMsisdnInputVal(); //make validation for accountCode temporarly unavaliable

                return false;
            }
        }, {
            key: "validateMsisdn",
            value: function validateMsisdn() {
                console.log("VALIDATE MSISDN FIELD");
                var msisdn = this.getMsisdnInputVal();
                if (!msisdn) return true;
                console.log(this.getMsisdnInputVal());
                if (msisdn.length == 9 && jQuery.isNumeric(msisdn)) return true;
                return false;
            }
        }, {
            key: "getMsisdnInputVal",
            value: function getMsisdnInputVal() {
                return this.state && this.state.msisdn && this.state.msisdn.replace(/-/g, "");
            }
        }, {
            key: "findByInput",
            value: function findByInput(e) {
                e.stopPropagation();

                if (this.validateMsisdn()) {
                    this.props.getAccount(this.state.msisdn, false);
                } else if (this.validateAccountCode()) {
                    this.props.getAccountByCode(this.state.msisdn);
                }
            }
        }, {
            key: "onKeyUp",
            value: function onKeyUp(e) {
                if (e.keyCode == 13) {
                    this.findByInput(e);
                }
            }
        }, {
            key: "isInputFieldValid",
            value: function isInputFieldValid() {
                return this.validateMsisdn();
                return this.validateMsisdn() || this.validateAccountCode(); //to use after resolving NOR-184581
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-all-m"
                }, /*#__PURE__*/ _react.default.createElement("p", null, "Klient ma zbyt wiele kart SIM, \u017Ceby m\xF3c pobra\u0107 jego list\u0119 kont"), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-top-m"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-8 l-col-8 u-small-padding"
                }, /*#__PURE__*/ _react.default.createElement(_InputWithFloatingLabel.default, {
                    id: "msisdn",
                    value: this.state.msisdn,
                    required: true,
                    onChange: this.onMsisdnFieldChange.bind(this),
                    placeholder: this.inputLabel(),
                    focusOnMount: true,
                    showValidation: true,
                    showErrors: true,
                    valid: this.isInputFieldValid(),
                    errors: !this.isInputFieldValid(),
                    onKeyUp: this.onKeyUp.bind(this),
                    overrideClass: "o-floating-label opl-floating-label-line opl-floating-label-line--white opl-autocomplete u-w-100"
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-4 "
                }, /*#__PURE__*/ _react.default.createElement("button", {
                    id: "sms",
                    type: "submit",
                    onClick: this.findByInput.bind(this),
                    className: "o-btn opl-btn opl-btn--secondary u-w-100"
                }, "Wyszukaj"))));
            }
        }]);
        return BillingAccountSearchComponent;
    }(_react.Component);

    _exports.default = BillingAccountSearchComponent;
});
//# sourceMappingURL=BillingAccountSearchComponent.js.map