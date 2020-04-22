define(["exports", "react", "react-redux", "eshop/modules/auth/components/LogoutConfirmationModal", "eshop/modules/auth/components/ProcessAlertModal", "eshop/modules/core/components/ui/Tooltip", "eshop/modules/auth/actions/api", "eshop/modules/checkout/selectors", "eshop/modules/auth/selectors/authorization", "eshop/modules/cart/selectors", "eshop/modules/fix/selectors/root", "eshop/modules/auth/actions/authorization", "eshop/modules/checkout/components/customer/MulticartCustomerLoginLink", "eshop/modules/simfree/selectors", "eshop/modules/fix/actions/offers"], function(_exports, _react, _reactRedux, _LogoutConfirmationModal, _ProcessAlertModal, _Tooltip, _api, _selectors, _authorization, _selectors2, _root, _authorization2, _MulticartCustomerLoginLink, _selectors3, _offers) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _LogoutConfirmationModal = babelHelpers.interopRequireDefault(_LogoutConfirmationModal);
    _ProcessAlertModal = babelHelpers.interopRequireDefault(_ProcessAlertModal);
    _Tooltip = babelHelpers.interopRequireDefault(_Tooltip);
    _MulticartCustomerLoginLink = babelHelpers.interopRequireDefault(_MulticartCustomerLoginLink);

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

    var LoggedCustomerBarComponent = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(LoggedCustomerBarComponent, _React$Component);

        var _super = _createSuper(LoggedCustomerBarComponent);

        function LoggedCustomerBarComponent(props) {
            var _this;

            babelHelpers.classCallCheck(this, LoggedCustomerBarComponent);
            _this = _super.call(this, props);
            _this.state = {
                isFix: false
            };

            if (_this.props.descriptions && _this.props.descriptions.isFix) {
                _this.state = {
                    isFix: true
                };
                console.log("IS FIX LP");
            }

            return _this;
        }

        babelHelpers.createClass(LoggedCustomerBarComponent, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                console.log("LoggedCustomerBarComponent GET LOGGED DATA");

                if (this.isFix()) {
                    console.log("LoggedCustomerBarComponent FOR FIX");
                    this.props.requestLoggedCustomerData();
                } else {
                    this.props.requestLoggedCustomerDataAndCheckExistence();
                }
            }
        }, {
            key: "isFix",
            value: function isFix() {
                return this.props.isFix || !!this.state.isFix;
            }
        }, {
            key: "_getAccountCode",
            value: function _getAccountCode() {
                return !!this.props.loggedCustomerData.accountCode && this.props.loggedCustomerData.accountCode !== "0" ? this.props.loggedCustomerData.accountCode : "Nowe Konto";
            }
        }, {
            key: "_renderTooltipLabel",
            value: function _renderTooltipLabel() {
                if (this.isFix()) {
                    return /*#__PURE__*/ _react.default.createElement("span", {
                        className: "u-hide"
                    }, this._getAccountCode());
                }

                return /*#__PURE__*/ _react.default.createElement("span", null, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-margin-right-s"
                }, " konto: "), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-margin-right-s u-font-bold"
                }, " ", this._getAccountCode(), " "));
            }
        }, {
            key: "_renderLogout",
            value: function _renderLogout() {
                if (!!!this.props.loggedCustomerData.isOnlineCookie) return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-3  u-text-right"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    onClick: this.props.safeLogOut
                }, "Wyloguj"));
                if (this.props.showChangeAccount && !this.isFix()) return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-3  u-text-right"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    onClick: this.props.showMobileAccountSelection
                }, "Zmie\u0144 konto"));
                return null;
            }
        }, {
            key: "render",
            value: function render() {
                if (this.isFix() && this.props.channels.sales !== "WWW") {
                    return null;
                }

                var showLogin = !this.props.isLogged && this.props.channels.sales === "WWW" && (this.props.isFixLP || this.props.isCustomerDataStep || this.props.isCartStep || $("#offerTypeSelectionComponent").length && this.props.isCartMobile);

                if (showLogin || this.props.isLogged) {
                    var tooltipContent = this.props.descriptions && this.props.descriptions.loggedCustomerTooltip || "Do faktury wskazanego przez Ciebie numeru, dołączone będą pozostałem numery umieszczone w koszyku. Będziesz otrzymywał jeden rachunek dotyczący należności z wielu numerów abonenckich zgrupowanych na wspólnym koncie, jak również będzie mógł skorzystać z promocji/rabatów związanych z łączeniem usług.";
                    var addClassPages = !!(!this.props.isFixLP && !this.props.isCartStep && !this.props.isCustomerDataStep && !this.props.isProductListPage && !this.props.isAccessoryListPage && !this.props.isProductDetailsPage && !this.props.isDeliveryAndPaymentStep);
                    var addClass = !!(this.props.isLogged && addClassPages);
                    var addBoxShadowClass = !!(!this.props.isFixLP && !this.props.isCartStep && !this.props.isCustomerDataStep && !this.props.isDeliveryAndPaymentStep);
                    var bgColorClass = " g-white1-bg ";

                    if (addClassPages) {
                        bgColorClass = " g-gray1-bg ";
                    }

                    return /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-full-row " + bgColorClass + (!!addBoxShadowClass && "u-padding-top-m ")
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-page-row " + (!!$("#simCountLoopMonitor").length == 0 && " u-padding-m")
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: " g-white1-bg " + (!!addBoxShadowClass && " u-box-shadow--s ")
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-row u-padding-top-l " + (!!addBoxShadowClass && " u-padding-l u-padding-left-l u-padding-right-l")
                    }, !!this.props.isLogged && /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-col l-col-9 "
                    }, this.props.loggedCustomerData.tradingName && /*#__PURE__*/ _react.default.createElement("p", {
                        className: "u-inline-block u-small-block"
                    }, /*#__PURE__*/ _react.default.createElement("span", {
                        className: "u-margin-right-s u-font-bold"
                    }, this.props.loggedCustomerData.tradingName, " "), this.props.loggedCustomerData.accountCode && !this.isFix() && /*#__PURE__*/ _react.default.createElement("span", {
                        className: "u-margin-right-s u-margin-left-s u-small-hide"
                    }, "/")), (this.props.loggedCustomerData.lastName || this.props.loggedCustomerData.firstName) && /*#__PURE__*/ _react.default.createElement("p", {
                        className: "u-inline-block u-small-block"
                    }, this.props.channels.sales === "WWW" && /*#__PURE__*/ _react.default.createElement("span", {
                        className: "u-margin-right-s"
                    }, "Witaj"), /*#__PURE__*/ _react.default.createElement("span", {
                        className: "u-margin-right-s u-font-bold"
                    }, this.props.loggedCustomerData.firstName, " ", !this.isFix() && this.props.loggedCustomerData.lastName), /*#__PURE__*/ _react.default.createElement("span", {
                        className: "u-margin-right-s u-margin-left-s u-small-hide"
                    }, this.props.loggedCustomerData.accountCode && !this.props.isFix && !this.props.onlyAssignment && "/")), !this.isFix() && !this.props.onlyAssignment && /*#__PURE__*/ _react.default.createElement("div", {
                        className: "u-inline-block u-small-block"
                    }, /*#__PURE__*/ _react.default.createElement(_Tooltip.default, {
                        maxWidth: "600",
                        label: this._renderTooltipLabel()
                    }, tooltipContent))), !!this.props.isLogged && this._renderLogout(), !!showLogin && /*#__PURE__*/ _react.default.createElement("div", {
                        className: !!addBoxShadowClass ? " u-padding-left-l u-padding-right-l" : " u-padding-left-m u-padding-right-m"
                    }, /*#__PURE__*/ _react.default.createElement(_MulticartCustomerLoginLink.default, {
                        channels: this.props.channels,
                        descriptions: this.props.descriptions,
                        title: this.props.descriptions.logInTitle
                    })))), /*#__PURE__*/ _react.default.createElement(_LogoutConfirmationModal.default, babelHelpers.extends({}, this.props, {
                        descriptions: {}
                    })), /*#__PURE__*/ _react.default.createElement(_ProcessAlertModal.default, this.props)));
                }

                return null;
            }
        }]);
        return LoggedCustomerBarComponent;
    }(_react.default.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            isFix: (0, _selectors2.isCartFix)(state) || (0, _root.isLandingPage)(state) || (0, _root.isPreLandingPage)(state),
            isFixLP: (0, _root.isLandingPage)(state),
            loggedCustomerData: (0, _authorization.getLoggedCustomerData)(state),
            isRegisterBillingAccountPopupB2B: (0, _authorization.getRegisterBillingAccountPopupB2B)(state),
            showChangeAccount: !(0, _selectors.getDeliveryAndPaymentStep)(state) && (!(0, _selectors.getIsCartStep)(state) || (0, _selectors2.hasEntries)(state)),
            isCartStep: (0, _selectors.getIsCartStep)(state),
            isDeliveryAndPaymentStep: (0, _selectors.getDeliveryAndPaymentStep)(state),
            isCustomerDataStep: (0, _selectors.getIsCustomerDataStep)(state),
            isProductListPage: (0, _selectors3.isProductListPage)(state),
            isAccessoryListPage: (0, _selectors3.isAccessoryListPage)(state),
            isProductDetailsPage: (0, _selectors3.isProductDetailsPage)(state),
            isLogged: (0, _authorization.isLogged)(state),
            isCartMobile: (0, _selectors2.isCartMobile)(state),
            onlyAssignment: (0, _selectors2.hasOnlyAssignment)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            requestLoggedCustomerDataAndCheckExistence: function requestLoggedCustomerDataAndCheckExistence() {
                return dispatch((0, _api.requestLoggedCustomerDataAndCheckExistence)());
            },
            requestLoggedCustomerData: function requestLoggedCustomerData() {
                return dispatch((0, _api.requestLoggedCustomerData)());
            },
            safeLogOut: function safeLogOut() {
                return dispatch((0, _authorization2.safeLogOut)());
            },
            hideLogoutConfirmationModal: function hideLogoutConfirmationModal() {
                return dispatch((0, _authorization2.hideLogoutConfirmationModal)());
            },
            showMobileAccountSelection: function showMobileAccountSelection() {
                return dispatch((0, _authorization2.showMobileAccountSelection)());
            },
            updateIsLandingPage: function updateIsLandingPage(isLP) {
                return dispatch((0, _offers.updateIsLandingPage)(isLP));
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(LoggedCustomerBarComponent);

    _exports.default = _default;
});
//# sourceMappingURL=LoggedCustomerBarComponent.js.map