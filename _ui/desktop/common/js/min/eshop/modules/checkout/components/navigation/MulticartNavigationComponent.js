define(["exports", "react", "prop-types", "react-redux", "eshop/components/OraCommonComponents", "../../actions/app", "../../actions/validation", "../../selectors", "eshop/modules/cart/components/Utils", "eshop/modules/cart/actions/cart", "eshop/utils/OnlineUtils", "../modals/MulticartCreateNewCartPopup", "../serialNumber/MulticartCancelOrderPopup", "../serialNumber/MulticartCancelOrderErrorPopup", "eshop/flux/utils/OraModalService", "../../../cart/selectors", "../../constants/CartEntryTypeEnum", "../../constants/DeliveryMethod"], function(e, r, t, l, o, a, n, i, s, c, u, p, d, m, h, f, y, C) {
    "use strict";

    function k(t, e) {
        var l = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), l.push.apply(l, r)
        }
        return l
    }

    function v(r) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(r);
            if (function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return;
                    if (Reflect.construct.sham) return;
                    if ("function" == typeof Proxy) return 1;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 1
                    } catch (e) {
                        return
                    }
                }()) {
                var l = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, l)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }

    function b(e) {
        return u.default.generateUniqeHtmlId(e + "_")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = e.CheckoutNavigationComponentView = void 0, r = babelHelpers.interopRequireWildcard(r), t = babelHelpers.interopRequireDefault(t), u = babelHelpers.interopRequireDefault(u), p = babelHelpers.interopRequireDefault(p), d = babelHelpers.interopRequireDefault(d), m = babelHelpers.interopRequireDefault(m), h = babelHelpers.interopRequireDefault(h), y = babelHelpers.interopRequireDefault(y), C = babelHelpers.interopRequireDefault(C);

    function w(t) {
        return function(e) {
            e.preventDefault(), t(e)
        }
    }
    var E = function(e) {
        babelHelpers.inherits(l, e);
        var t = v(l);

        function l() {
            return babelHelpers.classCallCheck(this, l), t.apply(this, arguments)
        }
        return babelHelpers.createClass(l, [{
            key: "componentDidUpdate",
            value: function() {
                var e = this;
                h.default.add(function() {
                    return r.default.createElement(p.default, {
                        id: "create-new-cart-modal",
                        onClickedCreateNew: e.props.onClickNew
                    })
                }), h.default.add(function() {
                    return r.default.createElement(d.default, babelHelpers.extends({}, e.props, {
                        id: "cancel-order-popup-navcomponent",
                        onConfirm: e.props.reservation.sapReservationNumber && !e.props.reservation.paymentStatus ? e.props.onClickCancelOrderAndRedirect : e.props.onClickRemoveAndRedirect,
                        onClose: e.props.onClickOpenOrderCancelPopup.bind(e, !1),
                        showWarning: !1,
                        cancelOrderQuestion: function(e) {
                            var t = e.descriptions.orderCancellationText1 || "Czy na pewno chcesz zrezygnować z zamówienia i wyczyścić koszyk?";
                            e.reservation.sapReservationNumber && (e.hasPosWarehouseman ? t = e.reservation.paymentStatus ? t + " " + (e.descriptions.orderCancellationText3 || "Pamiętaj o konieczności wystawienia faktury korygującej oraz o zwrocie towaru do magazyniera w celu uwolnienia rezerwacji.") : t + " " + (e.descriptions.orderCancellationText2 || "Pamiętaj o zwrocie towaru do magazyniera w celu uwolnienia rezerwacji.") : e.reservation.paymentStatus && (t = t + " " + (e.descriptions.orderCancellationText4 || "Pamiętaj o konieczności wystawienia faktury korygującej.")));
                            return t
                        }(e.props),
                        openPopup: e.props.reservation.cancelOrderPopupFromNavComponent
                    }))
                }), h.default.add(function() {
                    return r.default.createElement(m.default, babelHelpers.extends({}, e.props, {
                        id: "cancel-error-order-popup-navcomponent",
                        onConfirm: e.props.onClickCloseOrderCancelErrorPopup
                    }))
                })
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props.showRemoveButton || this.props.showBackButton || this.props.showResignButton ? "l-col l-col-small-12 l-col-medium-3 l-col-6 u-table-cell u-vertical-middle u-small-hide u-text-right" : "l-col l-col-medium-5 l-col-6 u-small-hide u-text-right u-vertical-middle u-table-cell";
                return r.default.createElement("div", null, r.default.createElement(g, {
                    show: this.props.showHaltButton,
                    label: this.props.descriptions.haltButtonLabel,
                    action: this.props.haltCart
                }), r.default.createElement("div", {
                    key: b(r.default.Component.name),
                    className: "l-row"
                }, r.default.createElement("div", {
                    className: "u-table u-w-100 u-table-fixed"
                }, this.props.showRemoveButton && [r.default.createElement(s.ShowWhenCartIsEmpty, {
                    key: b(r.default.Component.name),
                    className: "l-col l-col-small-12 l-col-medium-3 l-col-2 u-vertical-middle u-small-hide"
                }, r.default.createElement(o.OraButton, {
                    className: "u-w-100",
                    size: "small",
                    type: "secondary",
                    onClick: this.props.onClickReturn
                }, this.props.previousStepName)), r.default.createElement(s.HideWhenCartIsEmpty, {
                    key: b(r.default.Component.name),
                    className: "l-col l-col-small-12 l-col-medium-3 l-col-2  u-table-cell u-vertical-middle u-small-hide"
                }, r.default.createElement(o.OraButton, {
                    className: "u-w-100",
                    size: "small",
                    type: "secondary",
                    onClick: this.props.onClickReturn
                }, this.props.previousStepName)), r.default.createElement(s.HideWhenCartIsEmpty, {
                    key: b(r.default.Component.name),
                    className: "l-col l-col-small-12 l-col-medium-3 l-col-2  u-table-cell u-vertical-middle u-small-hide"
                }, r.default.createElement(o.OraButton, {
                    className: "u-w-100",
                    size: "small",
                    type: "secondary",
                    onClick: "WWW" === this.props.channels.sales ? this.props.onClickRemove : this.props.onClickOpenOrderCancelPopup.bind(this, !0)
                }, ("WWW" === this.props.channels.sales ? this.props.descriptions.removeCartButtonWWW : this.props.descriptions.removeCartButton) || "Wyczyść koszyk"))], !this.props.showRemoveButton && !this.props.showBackButton && this.props.showResignButton && !("delivery-payment" === this.props.currentStepId) && [r.default.createElement(s.HideWhenCartIsEmpty, {
                    key: b(r.default.Component.name),
                    className: "l-col l-col-small-12 l-col-medium-3 l-col-2  u-table-cell u-vertical-middle u-small-hide"
                }, r.default.createElement(o.OraButton, {
                    className: "u-w-100",
                    size: "small",
                    type: "secondary",
                    onClick: this.props.onClickPrevious
                }, this.props.previousStepName)), r.default.createElement(s.HideWhenCartIsEmpty, {
                    key: b(r.default.Component.name),
                    className: "l-col l-col-small-12 l-col-medium-3 l-col-2  u-table-cell u-vertical-middle u-small-hide"
                }, r.default.createElement(o.OraButton, {
                    className: "u-w-100",
                    size: "small",
                    type: "secondary",
                    onClick: "WWW" === this.props.channels.sales ? this.props.onClickRemoveAndRedirect : this.props.onClickOpenOrderCancelPopup.bind(this, !0)
                }, this.props.descriptions.removeCartButton || "Rezygnacja z zamówienia"))], !this.props.showRemoveButton && !this.props.showBackButton && this.props.showResignButton && "delivery-payment" === this.props.currentStepId && [r.default.createElement(s.HideWhenCartIsEmpty, {
                    key: b(r.default.Component.name),
                    className: "l-col l-col-small-12 l-col-medium-3 l-col-2  u-table-cell u-vertical-middle u-small-hide"
                }, r.default.createElement(o.OraButton, {
                    className: "u-w-100",
                    size: "small",
                    type: "secondary",
                    onClick: "WWW" === this.props.channels.sales ? this.props.onClickRemoveAndRedirect : this.props.onClickOpenOrderCancelPopup.bind(this, !0)
                }, this.props.descriptions.removeCartButton || "Rezygnacja z zamówienia"))], !this.props.showRemoveButton && !this.props.showBackButton && !this.props.showResignButton && "delivery-payment" != this.props.currentStepId && [r.default.createElement("div", {
                    key: b(r.default.ElementType),
                    className: "l-col l-col-medium-2 l-col-2 u-small-hide u-vertical-middle u-table-cell"
                }, r.default.createElement(o.OraButton, {
                    className: "u-w-100",
                    size: "small",
                    type: "secondary",
                    onClick: this.props.onClickPrevious
                }, this.props.previousStepName))], r.default.createElement(s.HideWhenCartIsEmpty, {
                    key: b(r.default.Component.name),
                    className: "l-col l-col-medium-2 l-col-2 u-small-hide u-vertical-middle u-padding-top-l u-padding-l"
                }, "true" == this.props.showNewButton && !this.props.showBackButton && r.default.createElement(o.OraButton, {
                    className: "u-w-100",
                    size: "small",
                    type: "secondary",
                    onClick: this.props.onCreateNewCartClicked
                }, this.props.descriptions.newCartButton || "Nowy koszyk")), this.props.showBackButton ? r.default.createElement("div", {
                    key: b(r.default.Component.name)
                }, r.default.createElement("div", null, r.default.createElement(o.OraButton, {
                    className: "u-w-40 u-large-hide u-medium-hide" + (this.props.showBackButtonCms ? "" : " u-small-hide"),
                    size: "small",
                    type: "text",
                    onClick: this.props.onClickReturn
                }, this.props.descriptions.returnToShopButton || "Wróć do sklepu")), r.default.createElement("div", {
                    key: b(r.default.Component.name)
                }, r.default.createElement(o.OraButton, {
                    className: "u-w-40 u-spacing-top-l u-small-hide" + (this.props.showBackButtonCms ? "" : " u-large-hide u-medium-hide"),
                    size: "small",
                    type: "secondary",
                    onClick: this.props.onClickReturn
                }, this.props.descriptions.returnToShopButton || "Wróć do sklepu")), r.default.createElement("div", {
                    className: "u-spacing-l"
                })) : ["delivery-payment" !== this.props.currentStepId ? r.default.createElement(s.HideWhenCartIsEmpty, {
                    key: b(r.default.Component.name),
                    className: e
                }, r.default.createElement("span", null, this.props.descriptions.nextStepLabel || "Kolejny krok", ": ", r.default.createElement("br", null), r.default.createElement("span", {
                    className: "u-font-bold"
                }, this.props.nextStepName))) : [r.default.createElement(s.HideWhenCartIsEmpty, {
                    key: b(r.default.Component.name),
                    className: "l-col l-col-small-12 l-col-medium-9 l-col-10  u-table-cell u-vertical-middle u-small-hide u-text-right"
                }, r.default.createElement("a", {
                    href: "#",
                    onClick: w(this.props.onClickPrevious),
                    "aria-label": "wróć"
                }, "Wróć do danych zamawiającego"))], r.default.createElement(s.HideWhenCartIsEmpty, {
                    key: b(r.default.Component.name),
                    className: "l-col l-col-small-12 l-col-medium-3 l-col-2  u-table-cell u-vertical-middle u-small-block u-small-margin-l"
                }, r.default.createElement(s.HideWhenCartContainsEmptyEntries, {
                    key: b(r.default.ElementType)
                }, r.default.createElement(o.OraLoader, {
                    loading: this.props.loading
                }, r.default.createElement(o.OraButton, {
                    key: b(r.default.ElementType),
                    id: "navigation-next-ora-button",
                    className: "u-w-100 u-right",
                    disabled: this.props.disabledByDefault && this.props.disabled,
                    onClick: this.onClickNext.bind(this)
                }, r.default.createElement("span", {
                    dangerouslySetInnerHTML: {
                        __html: this.calculateNextButtonDescription()
                    }
                }))))), "delivery-payment" === this.props.currentStepId ? r.default.createElement(s.HideWhenCartIsEmpty, {
                    key: b(r.default.Component.name),
                    className: "l-col l-col-12  u-medium-hide u-large-hide"
                }, r.default.createElement("a", {
                    href: "#",
                    onClick: w(this.props.onClickPrevious),
                    "aria-label": "wróć"
                }, "Wróć do danych zamawiającego")) : ""])))
            }
        }, {
            key: "calculateNextButtonDescription",
            value: function() {
                return "DIGITAL" === this.props.agreementType && this.props.isIdVerificationRequiredAndNotVerified ? this.props.descriptions.verifyIdentityButtonTitle || "Zweryfikuj tożsamość" : this.props.isOnlinePaymentMethodSelected ? this.props.descriptions.sogPayUNextButton : "DIGITAL" === this.props.agreementType ? this.props.checkoutCost && 0 < this.props.checkoutCost.price ? this.props.descriptions.pickupOnEmailWithPayNowNextButton || "Zamawiam z obowiązkiem zapłaty" : this.props.descriptions.pickupOnEmailNextButton || "Zawieram e-umowę i&nbsp;płacę" : "delivery-payment" === this.props.currentStepId ? this.props.descriptions.cashNextButton || "Potwierdzenie" : this.props.descriptions.nextStepButton || "Dalej"
            }
        }, {
            key: "onClickNext",
            value: function() {
                this.props.isIdVerificationRequiredAndNotVerified ? this.props.verifyIdentity() : this.props.onClickNext()
            }
        }]), l
    }(r.Component);
    (e.CheckoutNavigationComponentView = E).propTypes = {
        previousStepName: t.default.string,
        nextStepName: t.default.string,
        onClickPrevious: t.default.func,
        onClickNext: t.default.func,
        loading: t.default.bool,
        disabled: t.default.bool,
        backToShopUrl: t.default.string
    };
    var N = (0, l.connect)(function(e) {
        return {
            loading: (0, i.isDoingCheckoutStep)(e),
            disabled: !(0, i.isNextStepAvailable)(e),
            isOnlinePaymentMethodSelected: (0, i.isOnlinePaymentMethodSelected)(e),
            selectedPaymentMethod: (0, i.getSelectedPaymentMethod)(e),
            agreementType: (0, i.getAgreementType)(e),
            reservation: (0, i.reservationData)(e),
            checkoutCost: (0, f.getCartCheckoutCost)(e),
            isIdVerificationRequiredAndNotVerified: (0, i.isIdVerificationRequiredAndNotVerified)(e),
            entryType: (0, f.getEntryType)(e),
            haltingAvailable: y.default.FIX !== (0, f.getEntryType)(e) || C.default.ACCOUNT_MANAGER === (0, i.getSelectedDeliveryMethodCode)(e)
        }
    }, function(t) {
        return {
            onClickPrevious: function() {
                return t((0, a.gotoPreviousCheckoutStep)())
            },
            onClickNext: function() {
                return t((0, n.validateData)())
            },
            onClickRemove: function() {
                return t((0, c.removeFromCart)(null))
            },
            onClickRemoveAndRedirect: function() {
                return t((0, c.removeFromCartAndRedirect)(null))
            },
            onClickCancelOrderAndRedirect: function() {
                return t((0, a.cancelOrderWithRedirect)())
            },
            onClickOpenOrderCancelPopup: function(e) {
                return t((0, a.openOrderCancelPopupFromNavComponent)(e))
            },
            onClickCloseOrderCancelErrorPopup: function() {
                return t((0, a.closeOrderCancelErrorPopup)())
            },
            onClickLightLogout: function() {
                return t(lightLogout())
            },
            onClickReturn: function() {
                return t((0, c.goBackEmptyCart)())
            },
            onClickNew: function() {
                return t((0, c.createNewCart)())
            },
            onCreateNewCartClicked: function() {
                return h.default.open("create-new-cart-modal")
            },
            verifyIdentity: function() {
                return t((0, a.verifyIdentity)())
            },
            haltCart: function() {
                return t((0, c.haltCart)())
            }
        }
    }, function(e, t, l) {
        return function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var l = null != arguments[e] ? arguments[e] : {};
                e % 2 ? k(Object(l), !0).forEach(function(e) {
                    babelHelpers.defineProperty(t, e, l[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : k(Object(l)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e))
                })
            }
            return t
        }({}, l, {}, e, {}, t, {
            showRemoveButton: "cart-contents" === l.currentStepId,
            showResignButton: ("customer-data" === l.currentStepId || "delivery-payment" === l.currentStepId) && "WWW" !== l.channels.sales,
            previousStepName: "cart-contents" === (r = l).currentStepId ? r.descriptions.returnToShopButton || "Wróć do sklepu" : r.previousStepName,
            showBackButton: "thank-you" === l.currentStepId,
            showHaltButton: "delivery-payment" === l.currentStepId && l.haltingIsPossible && e.haltingAvailable
        });
        var r
    })(E);
    e.default = N;
    var g = function(e) {
        babelHelpers.inherits(l, e);
        var t = v(l);

        function l() {
            return babelHelpers.classCallCheck(this, l), t.apply(this, arguments)
        }
        return babelHelpers.createClass(l, [{
            key: "render",
            value: function() {
                return this.props.show ? r.default.createElement("div", {
                    className: "l-row"
                }, r.default.createElement("div", {
                    className: "u-table u-w-100 u-table-fixed u-padding"
                }, r.default.createElement("div", {
                    className: "l-col l-col-medium-6 l-col-9"
                }), r.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-3 u-table-cell u-vertical-middle u-small-block u-small-margin-l"
                }, r.default.createElement("button", {
                    className: "o-btn opl-btn opl-btn--primary opl-btn--medium u-w-100 u-right",
                    onClick: this.props.action
                }, r.default.createElement("span", null, this.props.label || "Wstrzymaj zamówienie"))))) : null
            }
        }]), l
    }(r.Component)
});
//# sourceMappingURL=MulticartNavigationComponent.js.map