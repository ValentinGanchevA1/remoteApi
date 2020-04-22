define(["exports", "react-redux", "react", "prop-types", "../../selectors", "../../actions/app", "eshop/components/OraCommonComponents", "eshop/modules/core/components/ui/Modal", "eshop/modules/cart/selectors", "eshop/utils/OnlineUtils", "eshop/modules/cart/actions/cart"], function(_exports, _reactRedux, _react, _propTypes, _selectors, _app, _OraCommonComponents, _Modal, _selectors2, _OnlineUtils, _cart) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _Modal = babelHelpers.interopRequireDefault(_Modal);
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

    var CustomerVerificationModalView = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(CustomerVerificationModalView, _Component);

        var _super = _createSuper(CustomerVerificationModalView);

        function CustomerVerificationModalView(props) {
            var _this;

            babelHelpers.classCallCheck(this, CustomerVerificationModalView);
            _this = _super.call(this, props);
            _this.state = {
                shouldClose: false,
                checkboxAccepted: false,
                showPaymentWarning: false
            };
            return _this;
        }

        babelHelpers.createClass(CustomerVerificationModalView, [{
            key: "handleCancelOrder",
            value: function handleCancelOrder() {
                this.props.removeFromCartAndRedirect();
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
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                // if all bundles are gone
                if (this.props.noOfBundles > 0 && (nextProps.noOfBundles == null || !nextProps.noOfBundles)) {
                    this.setState({
                        shouldClose: true
                    });
                }
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                if (this.state.shouldClose) {
                    this.setState({
                        shouldClose: false
                    }); // redirect to cart summary

                    this.props.action();
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
            key: "isPaytelAcceptable",
            value: function isPaytelAcceptable() {
                return (this.props.channels.sales == 'POS' || this.props.channels.sales == 'AKA') && this.props.errors.every(function(cvVer) {
                    return !!cvVer.paytelAcceptable;
                });
            }
        }, {
            key: "renderInfo",
            value: function renderInfo() {
                return /*#__PURE__*/ _react.default.createElement("span", null, "Dokonali\u015Bmy weryfikacji Twojego zam\xF3wienia. ", /*#__PURE__*/ _react.default.createElement("br", null), "Niestety nie mo\u017Cemy go zrealizowa\u0107. Zobacz szczeg\xF3\u0142y poni\u017Cej.");
            }
        }, {
            key: "renderSeparatorLine",
            value: function renderSeparatorLine() {
                return /*#__PURE__*/ _react.default.createElement("tr", null, /*#__PURE__*/ _react.default.createElement("td", {
                    className: "o-separator u-padding-top-l",
                    colSpan: "2"
                }));
            }
        }, {
            key: "renderLoyaltyLength",
            value: function renderLoyaltyLength() {
                switch (this.props.loyaltyLength) {
                    case 0:
                        return /*#__PURE__*/ _react.default.createElement("div", null, "czas nieokre\u015Blony");

                    case 12:
                        return /*#__PURE__*/ _react.default.createElement("div", null, "12 miesi\u0119cy");

                    case 24:
                        return /*#__PURE__*/ _react.default.createElement("div", null, "24 miesi\u0105ce");

                    default:
                        return /*#__PURE__*/ _react.default.createElement("div", null, "inny");
                }
            }
        }, {
            key: "renderErrorTable",
            value: function renderErrorTable(error, descriptions, isPos, showPaymentWarning) {
                var _this2 = this;

                var thClassName = "u-padding-top-l u-padding-right";
                var tdClassName = "u-font-bold u-padding-top-l u-padding-left";
                return /*#__PURE__*/ _react.default.createElement("tbody", null, error.details.msisdn && /*#__PURE__*/ _react.default.createElement("tr", null, /*#__PURE__*/ _react.default.createElement("th", {
                    className: thClassName
                }, descriptions.msisdnCaption || "Numer telefonu"), /*#__PURE__*/ _react.default.createElement("td", {
                    className: tdClassName
                }, _OnlineUtils.default.formatMsisdn(error.details.msisdn))), error.details.planName && /*#__PURE__*/ _react.default.createElement("tr", {
                    className: ""
                }, /*#__PURE__*/ _react.default.createElement("th", {
                    className: thClassName
                }, descriptions.planCaption || "Plan taryfowy"), /*#__PURE__*/ _react.default.createElement("td", {
                    className: tdClassName
                }, error.details.planName)), /*#__PURE__*/ _react.default.createElement("tr", {
                    className: ""
                }, /*#__PURE__*/ _react.default.createElement("th", {
                    className: thClassName
                }, descriptions.loyaltyCaption || "Okres trwania umowy"), /*#__PURE__*/ _react.default.createElement("td", {
                    className: tdClassName
                }, this.renderLoyaltyLength())), error.details.deviceName && [ /*#__PURE__*/ _react.default.createElement("tr", {
                    className: ""
                }, /*#__PURE__*/ _react.default.createElement("th", {
                    className: thClassName
                }, descriptions.deviceCaption || "Zamawiane urządzenie"), /*#__PURE__*/ _react.default.createElement("td", {
                    className: tdClassName
                }, error.details.deviceName))], /*#__PURE__*/ _react.default.createElement("tr", {
                    className: ""
                }, /*#__PURE__*/ _react.default.createElement("td", {
                    className: "u-padding-top-l",
                    colSpan: "2"
                }, /*#__PURE__*/ _react.default.createElement("strong", null, descriptions.declineReasonCaption || "Powód odmowy:", " "), error.code || descriptions.defaultMessage || "Brak dodatkowych informacji. [Default msg, set descriptions.defaultMessage]")), isPos && /*#__PURE__*/ _react.default.createElement("tr", {
                    className: ""
                }, /*#__PURE__*/ _react.default.createElement("td", {
                    className: "u-padding-top-l",
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
                }, /*#__PURE__*/ _react.default.createElement("strong", null, descriptions.continuePaytel || "Kontynuuj zamówienie ze spłatą zadłużenia", " "))))), isPos && /*#__PURE__*/ _react.default.createElement("tr", {
                    className: ""
                }, /*#__PURE__*/ _react.default.createElement("td", {
                    colSpan: "2",
                    className: "u-padding-top-s"
                }, "Zaznacz powyższe i kontynuuj jeśli Klient zgadza się na dokonanie spłaty zadłużenia na miejscu przez terminal Paytel")), isPos && showPaymentWarning && /*#__PURE__*/ _react.default.createElement("tr", {
                    className: ""
                }, /*#__PURE__*/ _react.default.createElement("td", {
                    className: "u-padding-top-l",
                    colSpan: "2"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-icon-text g-icon g-icon--error g-icon--before g-icon--xs-s g-redf-c "
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "o-icon-text__text u-font-bold opl-msg--error"
                }, "Akceptacja jest wymagana do realizacji zam\xF3wienia.")))), this.renderSeparatorLine());
            }
        }, {
            key: "render",
            value: function render() {
                var _this3 = this;

                return /*#__PURE__*/ _react.default.createElement(_Modal.default, {
                    showClose: true,
                    open: this.props.errors && this.props.errors.length > 0,
                    onClose: this.props.dismiss,
                    size: "narrow"
                }, /*#__PURE__*/ _react.default.createElement("h2", {
                    className: "u-font-standard u-margin-l opl-modal-title-space"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "h3 u-small-hide"
                }, this.props.descriptions.headerCaption ? this.props.descriptions.headerCaption.replace("{}", this.props.cartCode) : "Zamówienie nie może być zrealizowane"), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "h1 u-large-hide u-medium-hide"
                }, this.props.descriptions.headerCaption ? this.props.descriptions.headerCaption.replace("{}", this.props.cartCode) : "Zamówienie nie może być zrealizowane")), /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-margin-l"
                }, this.props.descriptions.infoCaption || this.renderInfo()), /*#__PURE__*/ _react.default.createElement("h2", {
                    className: "u-font-standard u-no-margin"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "h4 u-small-hide"
                }, this.props.descriptions.declineReasonHeader || "Negatywnie zweryfikowane:"), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "h2 u-large-hide u-medium-hide"
                }, this.props.descriptions.declineReasonHeader || "Negatywnie zweryfikowane:")), /*#__PURE__*/ _react.default.createElement("table", {
                    className: "u-table-fixed"
                }, /*#__PURE__*/ _react.default.createElement("caption", {
                    className: "u-acc-hide"
                }, /*#__PURE__*/ _react.default.createElement("h3", null, "Lista niedost\u0119pnych produkt\xF3w")), this.props.errors.map(function(error, i) {
                    return _this3.renderErrorTable(error, _this3.props.descriptions, _this3.isPaytelAcceptable() && error.details.bundleNo === _this3.props.noOfBundles, _this3.state.showPaymentWarning);
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-margin-top-l"
                }, !this.props.action ? null : !this.isPaytelAcceptable() ? [ /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-5 l-col-5 large-offset-by-3 medium-offset-by-3 u-small-padding-l"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    onClick: this.handleCancelOrder.bind(this),
                    className: "u-w-100",
                    type: "secondary"
                }, "Anuluj zam\xF3wienie")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-4 u-large-right u-medium-right"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    onClick: this.props.action,
                    className: "u-w-100",
                    type: "primary"
                }, "Wr\xF3\u0107 do koszyka"))] : [ /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-5 l-col-5"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    onClick: this.handleCancelOrder.bind(this),
                    className: "u-w-100",
                    type: "secondary"
                }, "Anuluj zam\xF3wienie")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-4"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    onClick: this.props.action,
                    className: "u-w-100",
                    type: "secondary"
                }, "Wr\xF3\u0107 do koszyka")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-3 l-col-3 u-large-right u-medium-right"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    onClick: this.handleRepayment.bind(this),
                    className: "u-w-100",
                    type: "primary"
                }, "Kontynuuj"))]));
            }
        }]);
        return CustomerVerificationModalView;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            errors: (0, _selectors.getCvCheckoutErrors)(state),
            noOfBundles: (0, _selectors2.getMaxBundleNo)(state),
            offer: (0, _selectors2.getCartFirstOffer)(state),
            offerDescription: (0, _selectors2.getCartFirstOffer)(state) ? (0, _selectors2.getCartFirstOffer)(state).planName : "",
            deviceDescription: (0, _selectors2.getCartDevices)(state) && (0, _selectors2.getCartDevices)(state)[0] ? (0, _selectors2.getCartDevices)(state)[0].description : null,
            device: (0, _selectors2.getCartDevices)(state),
            msisdn: (0, _selectors2.getOfferMsisdn)(state),
            loyaltyLength: (0, _selectors2.getOfferLoyaltyLength)(state),
            cartCode: (0, _selectors2.getCartCode)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            dismiss: function dismiss() {
                return dispatch((0, _app.dismissCvErrors)());
            },
            action: function action() {
                return dispatch((0, _app.gotoPreviousCheckoutStep)());
            },
            removeFromCartAndRedirect: function removeFromCartAndRedirect() {
                return dispatch((0, _cart.removeFromCartAndRedirect)());
            },
            handleRepayment: function handleRepayment() {
                return dispatch((0, _cart.handleRepayment)());
            }
        };
    };

    var CustomerVerificationModal = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CustomerVerificationModalView);
    var _default = CustomerVerificationModal;
    _exports.default = _default;
});
//# sourceMappingURL=CustomerVerificationModal.js.map