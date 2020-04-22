define(["exports", "react", "react-redux", "../../selectors", "eshop/modules/cart/selectors", "../../actions/app", "eshop/modules/cart/actions/cart", "eshop/modules/core/components/ui/Modal", "eshop/components/OraCommonComponents", "./CustomerVerificationProductLineComponent"], function(_exports, _react, _reactRedux, _selectors, _selectors2, _app, _cart, _Modal, _OraCommonComponents, _CustomerVerificationProductLineComponent) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _Modal = babelHelpers.interopRequireDefault(_Modal);
    _CustomerVerificationProductLineComponent = babelHelpers.interopRequireDefault(_CustomerVerificationProductLineComponent);

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

    var CustomerVerificationWithDepositModalView = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(CustomerVerificationWithDepositModalView, _Component);

        var _super = _createSuper(CustomerVerificationWithDepositModalView);

        function CustomerVerificationWithDepositModalView(props) {
            var _this;

            babelHelpers.classCallCheck(this, CustomerVerificationWithDepositModalView);
            _this = _super.call(this, props);
            _this.state = {
                checkboxAccepted: false,
                showPaymentWarning: false
            };
            return _this;
        }

        babelHelpers.createClass(CustomerVerificationWithDepositModalView, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                OPL.UI.loadModules(document.getElementById('deposit_modal_tooltip'), [{
                    path: 'core/modules/tooltips',
                    options: {
                        "mouseoverMinWidth": 0,
                        "triggerEvent": "mouseover"
                    }
                }]);
            }
        }, {
            key: "handleRepayment",
            value: function handleRepayment() {
                if (!this.state.checkboxAccepted) {
                    this.setState({
                        showPaymentWarning: true
                    });
                } else {
                    this.props.handleRepayment();
                }
            }
        }, {
            key: "handleCheckboxChange",
            value: function handleCheckboxChange(event) {
                this.setState({
                    checkboxAccepted: event.target.checked
                });
                this.setState({
                    showPaymentWarning: !event.target.checked
                });
            }
        }, {
            key: "onClose",
            value: function onClose() { //        this.props.dismiss();
            }
        }, {
            key: "handleValidateAndOrderItems",
            value: function handleValidateAndOrderItems() {
                this.props.removeFromCartWithRedirect([window.location.protocol, '//', window.location.host, '/sklep'].join(''));
            }
        }, {
            key: "isPaytelAcceptable",
            value: function isPaytelAcceptable() {
                return (this.props.channels.sales == 'POS' || this.props.channels.sales == 'AKA') && this.props.errors.some(function(cvVer) {
                    return !!cvVer.paytelAcceptable;
                }) && this.allowDepositAcceptance();
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement(_Modal.default, {
                    id: "customer-verification-with-deposit-modal",
                    showClose: true,
                    open: this.props.errors && this.props.errors.length > 0,
                    onClose: this.onClose.bind(this),
                    size: "medium"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-all-m u-small-padding-s"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-top-m"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-msg opl-msg--context opl-msg--warn"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-font-bold u-font-large u-no-margin"
                }, /*#__PURE__*/ _react.default.createElement("b", null, this.props.descriptions.verificationResultTitle))), /*#__PURE__*/ _react.default.createElement("div", {
                    hidden: !this.positiveVerificationSectionShouldBeVisible()
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-top-m u-padding-m"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-font-bold u-no-margin"
                }, this.props.descriptions.positiveVerification)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-border u-padding-all-m"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-font-bold u-no-margin"
                }, this.props.descriptions.productsWithOutDeposit), this.renderSeparatorLine(), this._renderPositiveVerificationSection())), /*#__PURE__*/ _react.default.createElement("div", {
                    "data-js-module": "core/modules/tooltips",
                    id: "deposit_modal_tooltip"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-padding-right-s"
                }, /*#__PURE__*/ _react.default.createElement("b", null, this.props.descriptions.depositRequired)), /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    "data-type": "no-click",
                    "data-tooltip-trigger-event": "mouseover",
                    className: "o-tooltip__trigger"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--info g-icon--xs-s"
                })), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-tooltip__content"
                }, " ", this.props.descriptions.tooltipDepositDefinition, " ")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-top-m u-padding-m"
                }, /*#__PURE__*/ _react.default.createElement("span", null, this.props.descriptions.depositAcceptanceInfo)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-border u-border--l g-brand2-bdrc u-padding-all-m"
                }, /*#__PURE__*/ _react.default.createElement("table", {
                    role: "presentation"
                }, /*#__PURE__*/ _react.default.createElement("tbody", null, /*#__PURE__*/ _react.default.createElement("tr", null, /*#__PURE__*/ _react.default.createElement("td", {
                    colspan: "4"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-font-bold u-no-margin"
                }, this.props.descriptions.productsWithDeposit)), /*#__PURE__*/ _react.default.createElement("td", {
                    colspan: "1",
                    className: "u-text-right "
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-font-bold u-no-margin"
                }, this.props.descriptions.depositValue))))), this.renderSeparatorLine(), this._renderNegativeVerificationSection()))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-all-s u-small-padding-s"
                }, /*#__PURE__*/ _react.default.createElement("table", {
                    className: "u-table-fixed"
                }, /*#__PURE__*/ _react.default.createElement("tbody", null, this.isPaytelAcceptable() && /*#__PURE__*/ _react.default.createElement("tr", {
                    className: ""
                }, /*#__PURE__*/ _react.default.createElement("td", {
                    className: "",
                    colSpan: "2"
                }, /*#__PURE__*/ _react.default.createElement("label", {
                    className: "o-checkbox opl-checkbox opl-checkbox--black"
                }, /*#__PURE__*/ _react.default.createElement("input", {
                    type: "checkbox",
                    onChange: function onChange(event) {
                        _this2.handleCheckboxChange(event);
                    }
                }), " ", /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci-label"
                }, /*#__PURE__*/ _react.default.createElement("strong", null, "Kontynuuj zamówienie ze spłatą zadłużenia", " "))))), this.isPaytelAcceptable() && /*#__PURE__*/ _react.default.createElement("tr", {
                    className: ""
                }, /*#__PURE__*/ _react.default.createElement("td", {
                    colSpan: "2",
                    className: "u-padding-top-s"
                }, "Zaznacz powyższe i kontynuuj jeśli Klient zgadza się na dokonanie spłaty zadłużenia na miejscu przez terminal Paytel")), this.isPaytelAcceptable() && this.state.showPaymentWarning && /*#__PURE__*/ _react.default.createElement("tr", {
                    className: ""
                }, /*#__PURE__*/ _react.default.createElement("td", {
                    className: "u-padding-top-l",
                    colSpan: "2"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-icon-text g-icon g-icon--error g-icon--before g-icon--xs-s g-redf-c "
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "o-icon-text__text u-font-bold opl-msg--error"
                }, "Akceptacja jest wymagana do realizacji zam\xF3wienia."))))))), this._renderButtons()));
            }
        }, {
            key: "_renderPositiveVerificationSection",
            value: function _renderPositiveVerificationSection() {
                var _this3 = this;

                return /*#__PURE__*/ _react.default.createElement("div", null, this.props.cartData && this.props.cartData.entries ? this.props.cartData.entries.filter(function(entry) {
                    return _this3.findDepositValueForBundle(entry.bundleNo) === 0;
                }).map(function(entry, index) {
                    return /*#__PURE__*/ _react.default.createElement(_CustomerVerificationProductLineComponent.default, {
                        entry: entry
                    });
                }) : null);
            }
        }, {
            key: "_renderNegativeVerificationSection",
            value: function _renderNegativeVerificationSection() {
                var _this4 = this;

                return /*#__PURE__*/ _react.default.createElement("div", null, this.props.cartData && this.props.cartData.entries ? this.props.cartData.entries.filter(function(entry) {
                    return _this4.findDepositValueForBundle(entry.bundleNo) !== 0;
                }).map(function(entry, index) {
                    return /*#__PURE__*/ _react.default.createElement(_CustomerVerificationProductLineComponent.default, {
                        entry: entry,
                        deposit: _this4.findDepositValueForBundle(entry.bundleNo),
                        reasons: _this4.props.errors
                    });
                }) : null, /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("table", {
                    role: "presentation",
                    class: "opl-checkout-header u-small-padding-s"
                }, /*#__PURE__*/ _react.default.createElement("tbody", null, /*#__PURE__*/ _react.default.createElement("tr", null, /*#__PURE__*/ _react.default.createElement("td", {
                    colspan: "4",
                    class: "u-small-no-padding-b"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-right"
                }, /*#__PURE__*/ _react.default.createElement("span", null, /*#__PURE__*/ _react.default.createElement("b", null, "Razem: ")))), /*#__PURE__*/ _react.default.createElement("td", null, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-right"
                }, this.findDepositSum(), " z\u0142")))))));
            }
        }, {
            key: "handleAccept",
            value: function handleAccept() {
                if (this.isPaytelAcceptable() && !this.state.checkboxAccepted) {
                    this.setState({
                        showPaymentWarning: true
                    });
                    return;
                }

                if (this.isPaytelAcceptable() && this.state.checkboxAccepted) {
                    this.props.handleRepaymentDeposit();
                    return;
                }

                this.props.gotoNextCheckoutStep();
            }
        }, {
            key: "_renderButtons",
            value: function _renderButtons() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-form__button-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-5 l-col-5  u-right",
                    hidden: !this.allowDepositAcceptance()
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    className: "u-right",
                    onClick: this.handleAccept.bind(this)
                }, this.props.descriptions.acceptDepositButton)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-7 l-col-7 "
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-form__button-row__part"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    onClick: this.props.backToCartSummary.bind(this),
                    type: "secondary",
                    size: "small"
                }, this.props.descriptions.backToCartButton), /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    onClick: this.handleValidateAndOrderItems.bind(this),
                    type: "secondary",
                    size: "small"
                }, this.props.descriptions.cancelOrderButton)))));
            }
        }, {
            key: "renderSeparatorLine",
            value: function renderSeparatorLine() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12 u-padding-all-m u-no-padding-r u-no-padding-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-separator u-no-padding-all"
                }));
            }
        }, {
            key: "allowDepositAcceptance",
            value: function allowDepositAcceptance() {
                var result = true;

                if (this.props.errors) {
                    this.props.errors.map(function(error, index) {
                        if (!error.allowDepositAcceptance) {
                            result = false;
                            return;
                        }
                    });
                }

                return result;
            }
        }, {
            key: "positiveVerificationSectionShouldBeVisible",
            value: function positiveVerificationSectionShouldBeVisible() {
                var _this5 = this;

                var result = false;

                if (this.props.cartData && this.props.cartData.entries) {
                    this.props.cartData.entries.filter(function(entry) {
                        return _this5.findDepositValueForBundle(entry.bundleNo) === 0;
                    }).map(function(entry, index) {
                        result = true;
                        return;
                    });
                }

                return result;
            }
        }, {
            key: "findDepositValueForBundle",
            value: function findDepositValueForBundle(bundleNumber) {
                var result = 0;

                if (this.props.errors) {
                    this.props.errors.map(function(error, index) {
                        if (error.bundleNo === bundleNumber && error.deposit) {
                            result = error.deposit;
                            return;
                        }
                    });
                }

                return result;
            }
        }, {
            key: "findDepositSum",
            value: function findDepositSum() {
                var result = 0;
                var depositForBundle = [];

                if (this.props.errors) {
                    this.props.errors.map(function(error, index) {
                        if (error.deposit && !depositForBundle[error.bundleNo]) {
                            result = result + error.deposit;
                            depositForBundle[error.bundleNo] = error.deposit;
                        }
                    });
                }

                return result;
            }
        }]);
        return CustomerVerificationWithDepositModalView;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            errors: (0, _selectors.getCVWithDepositErrors)(state),
            cartData: (0, _selectors2.getMiniCartData)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            dismiss: function dismiss() {
                return dispatch(dismissCVWithDepositErrors());
            },
            backToCartSummary: function backToCartSummary() {
                return dispatch((0, _app.gotoCartSummary)());
            },
            doCheckoutStep: function doCheckoutStep() {
                return dispatch((0, _app.doCheckoutStep)());
            },
            gotoNextCheckoutStep: function gotoNextCheckoutStep() {
                return dispatch((0, _app.gotoNextCheckoutStep)());
            },
            removeFromCartWithRedirect: function removeFromCartWithRedirect(href) {
                return dispatch((0, _cart.removeFromCartWithRedirect)(href));
            },
            handleRepaymentDeposit: function handleRepaymentDeposit() {
                return dispatch((0, _cart.handleRepaymentDeposit)());
            }
        };
    };

    var CustomerVerificationWithDepositModal = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CustomerVerificationWithDepositModalView);
    var _default = CustomerVerificationWithDepositModal;
    _exports.default = _default;
});
//# sourceMappingURL=CustomerVerificationWithDepositModal.js.map