define(["exports", "react", "prop-types", "react-redux", "eshop/components/OraCommonComponents", "../../actions/app", "../../actions/validation", "../../selectors", "eshop/modules/cart/components/Utils", "eshop/modules/cart/actions/cart", "eshop/utils/OnlineUtils", "../modals/MulticartCreateNewCartPopup", "../serialNumber/MulticartCancelOrderPopup", "../serialNumber/MulticartCancelOrderErrorPopup", "eshop/flux/utils/OraModalService", "../../../cart/selectors", "../../constants/CartEntryTypeEnum", "../../constants/DeliveryMethod"], function(_exports, _react, _propTypes, _reactRedux, _OraCommonComponents, _app, _validation, _selectors, _Utils, _cart, _OnlineUtils, _MulticartCreateNewCartPopup, _MulticartCancelOrderPopup, _MulticartCancelOrderErrorPopup, _OraModalService, _selectors2, _CartEntryTypeEnum, _DeliveryMethod) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = _exports.CheckoutNavigationComponentView = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    _MulticartCreateNewCartPopup = babelHelpers.interopRequireDefault(_MulticartCreateNewCartPopup);
    _MulticartCancelOrderPopup = babelHelpers.interopRequireDefault(_MulticartCancelOrderPopup);
    _MulticartCancelOrderErrorPopup = babelHelpers.interopRequireDefault(_MulticartCancelOrderErrorPopup);
    _OraModalService = babelHelpers.interopRequireDefault(_OraModalService);
    _CartEntryTypeEnum = babelHelpers.interopRequireDefault(_CartEntryTypeEnum);
    _DeliveryMethod = babelHelpers.interopRequireDefault(_DeliveryMethod);

    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
            keys.push.apply(keys, symbols);
        }
        return keys;
    }

    function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
                ownKeys(Object(source), true).forEach(function(key) {
                    babelHelpers.defineProperty(target, key, source[key]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
                ownKeys(Object(source)).forEach(function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
            }
        }
        return target;
    }

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

    function generateUniqueKey(prefix) {
        return _OnlineUtils.default.generateUniqeHtmlId(prefix + "_");
    }

    var preventDefaultWrapper = function preventDefaultWrapper(handler) {
        return function(event) {
            event.preventDefault();
            handler(event);
        };
    };

    var CheckoutNavigationComponentView = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(CheckoutNavigationComponentView, _Component);

        var _super = _createSuper(CheckoutNavigationComponentView);

        function CheckoutNavigationComponentView() {
            babelHelpers.classCallCheck(this, CheckoutNavigationComponentView);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(CheckoutNavigationComponentView, [{
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                var _this = this;

                _OraModalService.default.add(function() {
                    return /*#__PURE__*/ _react.default.createElement(_MulticartCreateNewCartPopup.default, {
                        id: "create-new-cart-modal",
                        onClickedCreateNew: _this.props.onClickNew
                    });
                });

                _OraModalService.default.add(function() {
                    return /*#__PURE__*/ _react.default.createElement(_MulticartCancelOrderPopup.default, babelHelpers.extends({}, _this.props, {
                        id: "cancel-order-popup-navcomponent",
                        onConfirm: _this.props.reservation.sapReservationNumber && !_this.props.reservation.paymentStatus ? _this.props.onClickCancelOrderAndRedirect : _this.props.onClickRemoveAndRedirect,
                        onClose: _this.props.onClickOpenOrderCancelPopup.bind(_this, false),
                        showWarning: false,
                        cancelOrderQuestion: getCancelOrderQuestionText(_this.props),
                        openPopup: _this.props.reservation.cancelOrderPopupFromNavComponent
                    }));
                });

                _OraModalService.default.add(function() {
                    return /*#__PURE__*/ _react.default.createElement(_MulticartCancelOrderErrorPopup.default, babelHelpers.extends({}, _this.props, {
                        id: "cancel-error-order-popup-navcomponent",
                        onConfirm: _this.props.onClickCloseOrderCancelErrorPopup
                    }));
                });
            }
        }, {
            key: "render",
            value: function render() {
                var msgClassName = !this.props.showRemoveButton && !this.props.showBackButton && !this.props.showResignButton ? "l-col l-col-medium-5 l-col-6 u-small-hide u-text-right u-vertical-middle u-table-cell" : "l-col l-col-small-12 l-col-medium-3 l-col-6 u-table-cell u-vertical-middle u-small-hide u-text-right";
                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement(HaltCartComponent, {
                    show: this.props.showHaltButton,
                    label: this.props.descriptions.haltButtonLabel,
                    action: this.props.haltCart
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    key: generateUniqueKey(_react.default.Component.name),
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-table u-w-100 u-table-fixed"
                }, this.props.showRemoveButton && [ /*#__PURE__*/ _react.default.createElement(_Utils.ShowWhenCartIsEmpty, {
                    key: generateUniqueKey(_react.default.Component.name),
                    className: "l-col l-col-small-12 l-col-medium-3 l-col-2 u-vertical-middle u-small-hide"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    className: "u-w-100",
                    size: "small",
                    type: "secondary",
                    onClick: this.props.onClickReturn
                }, this.props.previousStepName)), /*#__PURE__*/ _react.default.createElement(_Utils.HideWhenCartIsEmpty, {
                    key: generateUniqueKey(_react.default.Component.name),
                    className: "l-col l-col-small-12 l-col-medium-3 l-col-2  u-table-cell u-vertical-middle u-small-hide"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    className: "u-w-100",
                    size: "small",
                    type: "secondary",
                    onClick: this.props.onClickReturn
                }, this.props.previousStepName)), /*#__PURE__*/ _react.default.createElement(_Utils.HideWhenCartIsEmpty, {
                    key: generateUniqueKey(_react.default.Component.name),
                    className: "l-col l-col-small-12 l-col-medium-3 l-col-2  u-table-cell u-vertical-middle u-small-hide"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    className: "u-w-100",
                    size: "small",
                    type: "secondary",
                    onClick: this.props.channels.sales === 'WWW' ? this.props.onClickRemove : this.props.onClickOpenOrderCancelPopup.bind(this, true)
                }, (this.props.channels.sales === 'WWW' ? this.props.descriptions.removeCartButtonWWW : this.props.descriptions.removeCartButton) || "Wyczyść koszyk"))], !this.props.showRemoveButton && !this.props.showBackButton && this.props.showResignButton && !(this.props.currentStepId === 'delivery-payment') && [ /*#__PURE__*/ _react.default.createElement(_Utils.HideWhenCartIsEmpty, {
                    key: generateUniqueKey(_react.default.Component.name),
                    className: "l-col l-col-small-12 l-col-medium-3 l-col-2  u-table-cell u-vertical-middle u-small-hide"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    className: "u-w-100",
                    size: "small",
                    type: "secondary",
                    onClick: this.props.onClickPrevious
                }, this.props.previousStepName)), /*#__PURE__*/ _react.default.createElement(_Utils.HideWhenCartIsEmpty, {
                    key: generateUniqueKey(_react.default.Component.name),
                    className: "l-col l-col-small-12 l-col-medium-3 l-col-2  u-table-cell u-vertical-middle u-small-hide"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    className: "u-w-100",
                    size: "small",
                    type: "secondary",
                    onClick: this.props.channels.sales === 'WWW' ? this.props.onClickRemoveAndRedirect : this.props.onClickOpenOrderCancelPopup.bind(this, true)
                }, this.props.descriptions.removeCartButton || "Rezygnacja z zamówienia"))], !this.props.showRemoveButton && !this.props.showBackButton && this.props.showResignButton && this.props.currentStepId === 'delivery-payment' && [ /*#__PURE__*/ _react.default.createElement(_Utils.HideWhenCartIsEmpty, {
                    key: generateUniqueKey(_react.default.Component.name),
                    className: "l-col l-col-small-12 l-col-medium-3 l-col-2  u-table-cell u-vertical-middle u-small-hide"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    className: "u-w-100",
                    size: "small",
                    type: "secondary",
                    onClick: this.props.channels.sales === 'WWW' ? this.props.onClickRemoveAndRedirect : this.props.onClickOpenOrderCancelPopup.bind(this, true)
                }, this.props.descriptions.removeCartButton || "Rezygnacja z zamówienia"))], !this.props.showRemoveButton && !this.props.showBackButton && !this.props.showResignButton && this.props.currentStepId != 'delivery-payment' && [ /*#__PURE__*/ _react.default.createElement("div", {
                    key: generateUniqueKey(_react.default.ElementType),
                    className: "l-col l-col-medium-2 l-col-2 u-small-hide u-vertical-middle u-table-cell"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    className: "u-w-100",
                    size: "small",
                    type: "secondary",
                    onClick: this.props.onClickPrevious
                }, this.props.previousStepName))], /*#__PURE__*/ _react.default.createElement(_Utils.HideWhenCartIsEmpty, {
                    key: generateUniqueKey(_react.default.Component.name),
                    className: "l-col l-col-medium-2 l-col-2 u-small-hide u-vertical-middle u-padding-top-l u-padding-l"
                }, this.props.showNewButton == 'true' && !this.props.showBackButton && /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    className: "u-w-100",
                    size: "small",
                    type: "secondary",
                    onClick: this.props.onCreateNewCartClicked
                }, this.props.descriptions.newCartButton || "Nowy koszyk")), !this.props.showBackButton ? [!(this.props.currentStepId === 'delivery-payment') ? /*#__PURE__*/ _react.default.createElement(_Utils.HideWhenCartIsEmpty, {
                    key: generateUniqueKey(_react.default.Component.name),
                    className: msgClassName
                }, /*#__PURE__*/ _react.default.createElement("span", null, this.props.descriptions.nextStepLabel || "Kolejny krok", ": ", /*#__PURE__*/ _react.default.createElement("br", null), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-font-bold"
                }, this.props.nextStepName))) : [ /*#__PURE__*/ _react.default.createElement(_Utils.HideWhenCartIsEmpty, {
                    key: generateUniqueKey(_react.default.Component.name),
                    className: "l-col l-col-small-12 l-col-medium-9 l-col-10  u-table-cell u-vertical-middle u-small-hide u-text-right"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    onClick: preventDefaultWrapper(this.props.onClickPrevious),
                    "aria-label": "wr\xF3\u0107"
                }, "Wr\xF3\u0107 do danych zamawiaj\u0105cego"))], /*#__PURE__*/ _react.default.createElement(_Utils.HideWhenCartIsEmpty, {
                    key: generateUniqueKey(_react.default.Component.name),
                    className: "l-col l-col-small-12 l-col-medium-3 l-col-2  u-table-cell u-vertical-middle u-small-block u-small-margin-l"
                }, /*#__PURE__*/ _react.default.createElement(_Utils.HideWhenCartContainsEmptyEntries, {
                    key: generateUniqueKey(_react.default.ElementType)
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraLoader, {
                    loading: this.props.loading
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    key: generateUniqueKey(_react.default.ElementType),
                    id: "navigation-next-ora-button",
                    className: "u-w-100 u-right",
                    disabled: this.props.disabledByDefault && this.props.disabled,
                    onClick: this.onClickNext.bind(this)
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    dangerouslySetInnerHTML: {
                        __html: this.calculateNextButtonDescription()
                    }
                }))))), this.props.currentStepId === 'delivery-payment' ? /*#__PURE__*/ _react.default.createElement(_Utils.HideWhenCartIsEmpty, {
                    key: generateUniqueKey(_react.default.Component.name),
                    className: "l-col l-col-12  u-medium-hide u-large-hide"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    onClick: preventDefaultWrapper(this.props.onClickPrevious),
                    "aria-label": "wr\xF3\u0107"
                }, "Wr\xF3\u0107 do danych zamawiaj\u0105cego")) : ""] : /*#__PURE__*/ _react.default.createElement("div", {
                    key: generateUniqueKey(_react.default.Component.name)
                }, /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    className: "u-w-40 u-large-hide u-medium-hide" + (this.props.showBackButtonCms ? "" : " u-small-hide"),
                    size: "small",
                    type: "text",
                    onClick: this.props.onClickReturn
                }, this.props.descriptions.returnToShopButton || "Wróć do sklepu")), /*#__PURE__*/ _react.default.createElement("div", {
                    key: generateUniqueKey(_react.default.Component.name)
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    className: "u-w-40 u-spacing-top-l u-small-hide" + (this.props.showBackButtonCms ? "" : " u-large-hide u-medium-hide"),
                    size: "small",
                    type: "secondary",
                    onClick: this.props.onClickReturn
                }, this.props.descriptions.returnToShopButton || "Wróć do sklepu")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-spacing-l"
                })))));
            }
        }, {
            key: "calculateNextButtonDescription",
            value: function calculateNextButtonDescription() {
                if (this.props.agreementType === "DIGITAL" && this.props.isIdVerificationRequiredAndNotVerified) {
                    return this.props.descriptions.verifyIdentityButtonTitle || "Zweryfikuj tożsamość";
                }

                if (this.props.isOnlinePaymentMethodSelected) {
                    return this.props.descriptions.sogPayUNextButton;
                }

                console.log("this.props.checkoutCost ", this.props.checkoutCost);

                if (this.props.agreementType === "DIGITAL") {
                    if (this.props.checkoutCost && this.props.checkoutCost.price > 0) {
                        return this.props.descriptions.pickupOnEmailWithPayNowNextButton || "Zamawiam z obowiązkiem zapłaty";
                    } else {
                        return this.props.descriptions.pickupOnEmailNextButton || "Zawieram e-umowę i&nbsp;płacę";
                    }
                }

                return this.props.currentStepId === 'delivery-payment' ? this.props.descriptions.cashNextButton || "Potwierdzenie" : this.props.descriptions.nextStepButton || "Dalej";
            }
        }, {
            key: "onClickNext",
            value: function onClickNext() {
                if (this.props.isIdVerificationRequiredAndNotVerified) {
                    this.props.verifyIdentity();
                } else {
                    this.props.onClickNext();
                }
            }
        }]);
        return CheckoutNavigationComponentView;
    }(_react.Component);

    _exports.CheckoutNavigationComponentView = CheckoutNavigationComponentView;

    function getCancelOrderQuestionText(props) {
        var msg = props.descriptions.orderCancellationText1 || "Czy na pewno chcesz zrezygnować z zamówienia i wyczyścić koszyk?";

        if (props.reservation.sapReservationNumber) {
            if (props.hasPosWarehouseman) {
                !props.reservation.paymentStatus ? msg = msg + " " + (props.descriptions.orderCancellationText2 || "Pamiętaj o zwrocie towaru do magazyniera w celu uwolnienia rezerwacji.") : msg = msg + " " + (props.descriptions.orderCancellationText3 || "Pamiętaj o konieczności wystawienia faktury korygującej oraz o zwrocie towaru do magazyniera w celu uwolnienia rezerwacji.");
            } else if (props.reservation.paymentStatus) {
                msg = msg + " " + (props.descriptions.orderCancellationText4 || "Pamiętaj o konieczności wystawienia faktury korygującej.");
            }
        }

        return msg;
    }

    CheckoutNavigationComponentView.propTypes = {
        previousStepName: _propTypes.default.string,
        nextStepName: _propTypes.default.string,
        onClickPrevious: _propTypes.default.func,
        onClickNext: _propTypes.default.func,
        loading: _propTypes.default.bool,
        disabled: _propTypes.default.bool,
        backToShopUrl: _propTypes.default.string
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            loading: (0, _selectors.isDoingCheckoutStep)(state),
            disabled: !(0, _selectors.isNextStepAvailable)(state),
            isOnlinePaymentMethodSelected: (0, _selectors.isOnlinePaymentMethodSelected)(state),
            selectedPaymentMethod: (0, _selectors.getSelectedPaymentMethod)(state),
            agreementType: (0, _selectors.getAgreementType)(state),
            reservation: (0, _selectors.reservationData)(state),
            checkoutCost: (0, _selectors2.getCartCheckoutCost)(state),
            isIdVerificationRequiredAndNotVerified: (0, _selectors.isIdVerificationRequiredAndNotVerified)(state),
            entryType: (0, _selectors2.getEntryType)(state),
            haltingAvailable: _CartEntryTypeEnum.default.FIX !== (0, _selectors2.getEntryType)(state) || _DeliveryMethod.default.ACCOUNT_MANAGER === (0, _selectors.getSelectedDeliveryMethodCode)(state)
        };
    };

    function getPreviousStepLabel(props) {
        return props.currentStepId === "cart-contents" ? props.descriptions.returnToShopButton || "Wróć do sklepu" : props.previousStepName;
    }

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            onClickPrevious: function onClickPrevious() {
                return dispatch((0, _app.gotoPreviousCheckoutStep)());
            },
            onClickNext: function onClickNext() {
                return dispatch((0, _validation.validateData)());
            },
            onClickRemove: function onClickRemove() {
                return dispatch((0, _cart.removeFromCart)(null));
            },
            onClickRemoveAndRedirect: function onClickRemoveAndRedirect() {
                return dispatch((0, _cart.removeFromCartAndRedirect)(null));
            },
            onClickCancelOrderAndRedirect: function onClickCancelOrderAndRedirect() {
                return dispatch((0, _app.cancelOrderWithRedirect)());
            },
            onClickOpenOrderCancelPopup: function onClickOpenOrderCancelPopup(param) {
                return dispatch((0, _app.openOrderCancelPopupFromNavComponent)(param));
            },
            onClickCloseOrderCancelErrorPopup: function onClickCloseOrderCancelErrorPopup() {
                return dispatch((0, _app.closeOrderCancelErrorPopup)());
            },
            onClickLightLogout: function onClickLightLogout() {
                return dispatch(lightLogout());
            },
            onClickReturn: function onClickReturn() {
                return dispatch((0, _cart.goBackEmptyCart)());
            },
            onClickNew: function onClickNew() {
                return dispatch((0, _cart.createNewCart)());
            },
            onCreateNewCartClicked: function onCreateNewCartClicked() {
                return _OraModalService.default.open("create-new-cart-modal");
            },
            verifyIdentity: function verifyIdentity() {
                return dispatch((0, _app.verifyIdentity)());
            },
            haltCart: function haltCart() {
                return dispatch((0, _cart.haltCart)());
            }
        };
    };

    var mergeProps = function mergeProps(stateProps, dispatchProps, ownProps) {
        return _objectSpread({}, ownProps, {}, stateProps, {}, dispatchProps, {
            showRemoveButton: ownProps.currentStepId === "cart-contents",
            showResignButton: (ownProps.currentStepId === "customer-data" || ownProps.currentStepId === "delivery-payment") && ownProps.channels.sales !== 'WWW',
            previousStepName: getPreviousStepLabel(ownProps),
            showBackButton: ownProps.currentStepId === "thank-you",
            showHaltButton: ownProps.currentStepId === "delivery-payment" && ownProps.haltingIsPossible && stateProps.haltingAvailable
        });
    };

    var CheckoutNavigationComponent = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, mergeProps)(CheckoutNavigationComponentView);
    var _default = CheckoutNavigationComponent;
    _exports.default = _default;

    var HaltCartComponent = /*#__PURE__*/ function(_Component2) {
        babelHelpers.inherits(HaltCartComponent, _Component2);

        var _super2 = _createSuper(HaltCartComponent);

        function HaltCartComponent() {
            babelHelpers.classCallCheck(this, HaltCartComponent);
            return _super2.apply(this, arguments);
        }

        babelHelpers.createClass(HaltCartComponent, [{
            key: "render",
            value: function render() {
                if (this.props.show) {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-row"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "u-table u-w-100 u-table-fixed u-padding"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-col l-col-medium-6 l-col-9"
                    }), /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-6 l-col-3 u-table-cell u-vertical-middle u-small-block u-small-margin-l"
                    }, /*#__PURE__*/ _react.default.createElement("button", {
                        className: "o-btn opl-btn opl-btn--primary opl-btn--medium u-w-100 u-right",
                        onClick: this.props.action
                    }, /*#__PURE__*/ _react.default.createElement("span", null, this.props.label || 'Wstrzymaj zamówienie')))));
                } else {
                    return null;
                }
            }
        }]);
        return HaltCartComponent;
    }(_react.Component);
});
//# sourceMappingURL=MulticartNavigationComponent.js.map