define(["exports", "../actionTypes", "eshop/modules/configurator/actionTypes", "eshop/modules/fix/remoteApi", "eshop/modules/configurator/actions/cart", "eshop/modules/configurator/selectors/filters", "eshop/modules/auth/selectors/authorization", "eshop/modules/checkout/actions/app", "eshop/modules/checkout/selectors", "eshop/modules/cart/selectors", "eshop/modules/checkout/actions/data", "eshop/modules/auth/actions/api", "eshop/modules/cart/actions/cart", "eshop/modules/checkout/utils/utils", "eshop/modules/fix/actions/wwt", "eshop/modules/fix/selectors/root", "eshop/modules/simfree/actions/app", "eshop/modules/simfree/selectors", "eshop/modules/magnum2/actions/magnum", "eshop/modules/magnum2/selectors", "../selectors/authorization", "../../core/constants/TransactionProcessTypeEnum", "../../core/constants/ShowSectionNameEnum", "../../configurator/selectors/filters", "../../core/constants/OfferTypeEnum"], function(_exports, ACTIONS, CONFIG_ACTIONS, _remoteApi, _cart, _filters, _authorization, _app, _selectors, _selectors2, _data, _api, _cart2, _utils, _wwt, _root, _app2, _selectors3, _magnum, _selectors4, _authorization2, _TransactionProcessTypeEnum, _ShowSectionNameEnum, _filters2, _OfferTypeEnum) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.setSalesChannel = _exports.setAccountByMsisdn = _exports.accountChoosen = _exports.authorizationFailure = _exports.closeAuthModal = _exports.chooseExistingAccount = _exports.accountIdentifySuccess = _exports.authorizationSuccess = _exports.stayLove = _exports.clearStayLoveRetentionMSISDN = _exports.ommitAccountAuth = _exports.setIncompatibleMarket = _exports.setIsLoading = _exports.clearMessage = _exports.showProgress = _exports.setShowSection = _exports.showError = _exports.showMessage = _exports.setSelectedBillingAccountId = _exports.hideProcessAlertModal = _exports.showRetentionAlertModal = _exports.hideLogoutConfirmationModal = _exports.safeLogOut = _exports.logIn = _exports.setMSISDN = _exports.showMobileAccountChange = _exports.showMobileAccountSelection = _exports.registerBillingAccountPopupToPubSub = _exports.doRegisterBillingAccountPopupB2B = _exports.setPeselAndAddressVerificationEnabled = _exports.doSmsAccountVerification = _exports.doSmsAuthorization = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);
    CONFIG_ACTIONS = babelHelpers.interopRequireWildcard(CONFIG_ACTIONS);
    _remoteApi = babelHelpers.interopRequireDefault(_remoteApi);
    _TransactionProcessTypeEnum = babelHelpers.interopRequireDefault(_TransactionProcessTypeEnum);
    _ShowSectionNameEnum = babelHelpers.interopRequireDefault(_ShowSectionNameEnum);
    _OfferTypeEnum = babelHelpers.interopRequireDefault(_OfferTypeEnum);

    var loveLeadProcess = function loveLeadProcess(getState) {
        return (0, _filters.getMarketContext)(getState()) === "B2B" && !(0, _authorization2.isLogged)(getState()) && (0, _filters.getSelectedProcessTypeValue)(getState()) !== _TransactionProcessTypeEnum.default.RETENTION && (0, _filters2.getSelectedOfferType)(getState()) === _OfferTypeEnum.default.VOICE_LDF && ((0, _authorization.isLovePage)() || (0, _selectors3.isProductListPage)() || (0, _selectors3.isProductDetailsPage)() || (0, _selectors3.isAccessoryListPage)());
    };

    var doSmsAuthorization = function doSmsAuthorization() {
        return function(dispatch, getState) {
            var isWWW = "WWW" === (0, _authorization.getSalesChannel)(getState());
            var clientContext = (0, _filters.getClientContext)(getState());
            var process = (0, _filters.getSelectedProcessTypeValue)(getState());
            var loggedData = (0, _authorization.getLoggedCustomerData)(getState());
            console.log(loggedData);
            var isAccountSelected = loggedData && loggedData.accountCode;
            var isOnlineCookie = loggedData && loggedData.isOnlineCookie;
            var isCartEmpty = loggedData ? loggedData.isCartEmpty : true;
            var authorizationRequired = false;
            console.log("Authorization routine:");
            console.log("Process=", process);
            console.log("isAccountSelected:", isAccountSelected);
            console.log("clientContext:", clientContext);
            console.log("isCartEmpty:", isCartEmpty);
            console.log("isOnlineCookie:", isOnlineCookie);
            console.log("getAuthorizationForProcessModalVisibility");
            console.log((0, _authorization.getAuthorizationForProcessModalVisibility)(getState()));
            console.log(loggedData);
            dispatch({
                type: ACTIONS.AUTHORIZATION_ADD_TO_CART_AFTER,
                value: true
            });

            if ((0, _authorization.getStayLoveRetentionMSISDN)(getState())) {
                dispatch((0, _cart.addToCart)());
                return;
            }

            if (isWWW) {
                if (process === _TransactionProcessTypeEnum.default.MNP || process === _TransactionProcessTypeEnum.default.MIGRATION_PRE_POST || process === _TransactionProcessTypeEnum.default.MIGRATION_NJU_POST_TO_POST || process === _TransactionProcessTypeEnum.default.RETENTION) {
                    //auth check
                    dispatch({
                        type: ACTIONS.AUTHORIZATION_MODAL_FOR_PROCESS_ON
                    });
                    dispatch(setShowSection(_ShowSectionNameEnum.default.MSISDN));
                    authorizationRequired = true;
                }

                if (loveLeadProcess(getState)) {
                    dispatch({
                        type: ACTIONS.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_ON
                    });
                    dispatch(setShowSection(_ShowSectionNameEnum.default.CHECK_IS_CUSTOMER));
                    authorizationRequired = true;
                    return;
                }

                console.log("authorizationRequired:", authorizationRequired);

                if ((clientContext && !(0, _selectors3.isDuet)(getState()) || isOnlineCookie || process === _TransactionProcessTypeEnum.default.INSTALMENT_SALES_OF_GOODS) && (!isAccountSelected || process === _TransactionProcessTypeEnum.default.INSTALMENT_SALES_OF_GOODS && isAccountSelected === "0")) {
                    if (process === _TransactionProcessTypeEnum.default.MNP || process === _TransactionProcessTypeEnum.default.MIGRATION_PRE_POST || process === _TransactionProcessTypeEnum.default.MIGRATION_NJU_POST_TO_POST || process === _TransactionProcessTypeEnum.default.ACTIVATION || process === _TransactionProcessTypeEnum.default.INSTALMENT_SALES_OF_GOODS) {
                        //account check
                        authorizationRequired = true;

                        if (!isOnlineCookie) {
                            dispatch({
                                type: ACTIONS.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_ON
                            });
                            dispatch(setShowSection(_ShowSectionNameEnum.default.MSISDN));
                        } else {
                            if (!(0, _authorization.getAuthorizationForProcessModalVisibility)(getState())) dispatch(showMobileAccountSelection());
                        }
                    }
                }
            }

            if (!authorizationRequired) {
                if (process === _TransactionProcessTypeEnum.default.INSTALMENT_SALES_OF_GOODS) {
                    dispatch((0, _cart.addInstallmentSalesOfGoodsToCart)());
                } else {
                    dispatch((0, _cart.addToCart)());
                }
            }
        };
    };

    _exports.doSmsAuthorization = doSmsAuthorization;

    var isProcessWithAccountVerification = function isProcessWithAccountVerification(process) {
        return process === _TransactionProcessTypeEnum.default.MNP || process === _TransactionProcessTypeEnum.default.MIGRATION_PRE_POST || process === _TransactionProcessTypeEnum.default.ACTIVATION || process === _TransactionProcessTypeEnum.default.INSTALMENT_SALES_OF_GOODS;
    };

    var doSmsAccountVerification = function doSmsAccountVerification() {
        return function(dispatch, getState) {
            var clientContext = (0, _filters.getClientContext)(getState());
            var process = (0, _filters.getSelectedProcessTypeValue)(getState());
            var loggedData = (0, _authorization.getLoggedCustomerData)(getState());
            var isAccountSelected = loggedData && loggedData.accountCode;
            var isOnlineCookie = loggedData && loggedData.isOnlineCookie;
            dispatch({
                type: ACTIONS.AUTHORIZATION_ADD_TO_CART_AFTER,
                value: true
            });

            if ((clientContext || isOnlineCookie) && !isAccountSelected && isProcessWithAccountVerification(process)) {
                //account check
                if (!isOnlineCookie) {
                    dispatch({
                        type: ACTIONS.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_ON
                    });
                    dispatch(setShowSection(_ShowSectionNameEnum.default.MSISDN));
                } else {
                    if (!(0, _authorization.getAuthorizationForProcessModalVisibility)(getState())) {
                        dispatch(showMobileAccountSelection());
                    }
                }
            } else {
                dispatch((0, _cart.addToCart)());
            }
        };
    };

    _exports.doSmsAccountVerification = doSmsAccountVerification;

    var setPeselAndAddressVerificationEnabled = function setPeselAndAddressVerificationEnabled(isEnabled) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.IS_PESEL_AND_ADDRESS_VERIFICATION_ENABLED,
                isEnabled: isEnabled
            });
        };
    };

    _exports.setPeselAndAddressVerificationEnabled = setPeselAndAddressVerificationEnabled;

    var doRegisterBillingAccountPopupB2B = function doRegisterBillingAccountPopupB2B() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.DO_REGISTER_BILLING_ACCOUNT_POPUP_B2B
            });
        };
    };

    _exports.doRegisterBillingAccountPopupB2B = doRegisterBillingAccountPopupB2B;

    var registerBillingAccountPopupToPubSub = function registerBillingAccountPopupToPubSub() {
        return function(dispatch, getState) {
            (0, _utils.whenAvailable)("PubSub", function() {
                console.log("registerBillingAccountPopupToPubSub");
                PubSub.subscribe("UXEvent.CustomerService.SearchCustomer.NotFound", function() {
                    console.log("Customer not found");

                    if ((0, _selectors4.wasSearchCustomerPerformed)(getState())) {
                        dispatch({
                            type: CONFIG_ACTIONS.CUSTOMER_SELECTED
                        });
                    }

                    dispatch((0, _api.requestLoggedCustomerData)());
                    dispatch((0, _cart2.fetchMiniCart)());
                    dispatch((0, _cart2.fetchCart)());
                    OPL.UI.fire(OPL.UI.EVENTS.modules.basket.counter.update, 0, 'header');
                });
                PubSub.subscribe("UXEvent.CustomerService.SearchCustomer.Search", function() {
                    dispatch((0, _magnum.searchCustomerPerformed)());
                    dispatch((0, _api.requestLoggedCustomerData)());
                    dispatch((0, _cart2.fetchMiniCart)());
                    dispatch((0, _cart2.fetchCart)());
                    OPL.UI.fire(OPL.UI.EVENTS.modules.basket.counter.update, 0, 'header');
                });
                dispatch(doRegisterBillingAccountPopupB2B());
                dispatch((0, _data.subscribeCustomerSelected)());
            });
        };
    };

    _exports.registerBillingAccountPopupToPubSub = registerBillingAccountPopupToPubSub;

    var showMobileAccountSelection = function showMobileAccountSelection() {
        return function(dispatch, getState) {
            console.log("showMobileAccountSelection");

            if ((0, _selectors2.hasRetention)(getState())) {
                dispatch(showRetentionAlertModal());
                return;
            }

            dispatch({
                type: ACTIONS.AUTHORIZATION_CHOOSE_ACCOUNT_ON
            });
            dispatch(setShowSection(_ShowSectionNameEnum.default.ACCOUNT));
        };
    };

    _exports.showMobileAccountSelection = showMobileAccountSelection;

    var showMobileAccountChange = function showMobileAccountChange() {
        return function(dispatch, getState) {
            console.log("showMobileAccountChange");

            if ((0, _selectors2.hasRetention)(getState())) {
                console.log("showRetentionAlertModal");
                dispatch(showRetentionAlertModal());
            } else {
                dispatch(showMobileAccountSelection());
            }
        };
    };

    _exports.showMobileAccountChange = showMobileAccountChange;

    var setMSISDN = function setMSISDN(msisdn) {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.AUTHORIZATION_MSISDN_OR_LOGIN,
                msisdn: msisdn
            });
        };
    };

    _exports.setMSISDN = setMSISDN;

    var logIn = function logIn() {
        return function(dispatch, getState) {
            dispatch(chooseExistingAccount(false));
            dispatch(setShowSection(_ShowSectionNameEnum.default.MSISDN));
            dispatch({
                type: ACTIONS.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_ON
            });
        };
    };

    _exports.logIn = logIn;

    var safeLogOut = function safeLogOut() {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.AUTHORIZATION_LOGOUT_CONFIRMATION_MODAL_ON
            });
        };
    };

    _exports.safeLogOut = safeLogOut;

    var hideLogoutConfirmationModal = function hideLogoutConfirmationModal() {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.AUTHORIZATION_LOGOUT_CONFIRMATION_MODAL_OFF
            });
        };
    };

    _exports.hideLogoutConfirmationModal = hideLogoutConfirmationModal;

    var showRetentionAlertModal = function showRetentionAlertModal() {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.AUTHORIZATION_RETENTION_ALERT_MODAL_ON
            });
        };
    };

    _exports.showRetentionAlertModal = showRetentionAlertModal;

    var hideProcessAlertModal = function hideProcessAlertModal() {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.AUTHORIZATION_RETENTION_ALERT_MODAL_OFF
            });
        };
    };

    _exports.hideProcessAlertModal = hideProcessAlertModal;

    var setSelectedBillingAccountId = function setSelectedBillingAccountId(accountId) {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.SET_SELECTED_BILLING_ACCOUNT_ID,
                accountId: accountId
            });
            dispatch((0, _api.requestLoggedCustomerData)());
        };
    };

    _exports.setSelectedBillingAccountId = setSelectedBillingAccountId;

    var showMessage = function showMessage(msg) {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.SHOW_MESSAGE,
                msg: {
                    text: msg,
                    type: "info"
                }
            });
        };
    };

    _exports.showMessage = showMessage;

    var showError = function showError(msg) {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.SHOW_MESSAGE,
                msg: {
                    text: msg,
                    type: "error"
                }
            });
        };
    };

    _exports.showError = showError;

    var setShowSection = function setShowSection(section) {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.AUTHORIZATION_SHOW_SECTION,
                section: section
            });
        };
    };

    _exports.setShowSection = setShowSection;

    var showProgress = function showProgress(msg) {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.SHOW_MESSAGE,
                msg: {
                    text: msg,
                    type: "progress"
                }
            });
        };
    };

    _exports.showProgress = showProgress;

    var clearMessage = function clearMessage() {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.SHOW_MESSAGE,
                msg: ""
            });
        };
    };

    _exports.clearMessage = clearMessage;

    var setIsLoading = function setIsLoading(isLoading) {
        return function(dispatch, getState) {
            if (isLoading) dispatch({
                type: ACTIONS.AUTHORIZATION_IS_LOADING_ON
            });
            else dispatch({
                type: ACTIONS.AUTHORIZATION_IS_LOADING_OFF
            });
        };
    }; //isMarketIncompatible?? first arg


    _exports.setIsLoading = setIsLoading;

    var setIncompatibleMarket = function setIncompatibleMarket(incompatibleMarket, market) {
        return function(dispatch, getState) {
            if (incompatibleMarket) dispatch({
                type: ACTIONS.MARKET_IS_INCOMPATIBLE,
                payload: market
            });
            else dispatch({
                type: ACTIONS.MARKET_IS_COMPATIBLE
            });
        };
    };

    _exports.setIncompatibleMarket = setIncompatibleMarket;

    var ommitAccountAuth = function ommitAccountAuth() {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_OFF
            });
            dispatch(setIsLoading(false));
            dispatch(showMessage(""));
            dispatch({
                type: CONFIG_ACTIONS.CLIENT_CONTEXT_DISABLED
            });
            dispatch((0, _cart.addToCart)());
        };
    };

    _exports.ommitAccountAuth = ommitAccountAuth;

    var clearStayLoveRetentionMSISDN = function clearStayLoveRetentionMSISDN() {
        return function(dispatch) {
            dispatch({
                type: CONFIG_ACTIONS.USE_DEFAULT_PROCESS,
                use: true
            });
            dispatch({
                type: CONFIG_ACTIONS.USE_DEFAULT_LOYALTY,
                use: true
            });
            dispatch({
                type: ACTIONS.STAY_LOVE_RETENTION_MSISDN,
                msisdn: ""
            });
        };
    };

    _exports.clearStayLoveRetentionMSISDN = clearStayLoveRetentionMSISDN;

    var stayLove = function stayLove() {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.STAY_LOVE_RETENTION_MSISDN,
                msisdn: (0, _authorization.getMSISDN)(getState())
            });

            if ((0, _selectors3.isProductListPage)(getState()) || (0, _selectors3.isProductDetailsPage)(getState()) || (0, _selectors3.isAccessoryListPage)(getState())) {
                //zmiana kontekstu oferty
                dispatch({
                    type: CONFIG_ACTIONS.USE_DEFAULT_PROCESS,
                    use: false
                });
                dispatch({
                    type: CONFIG_ACTIONS.USE_DEFAULT_LOYALTY,
                    use: false
                });
                dispatch((0, _app2.setOfferType)("VOICE_LDF"));
                dispatch({
                    type: ACTIONS.AUTHORIZATION_ADD_TO_CART_AFTER,
                    value: false
                });
                dispatch(authorizationSuccess());
                return;
            }

            var lovePaths = (0, _authorization.getLovePaths)();
            window.location.pathname = lovePaths[0];
        };
    };

    _exports.stayLove = stayLove;

    var isStayLoveQuestionNecessary = function isStayLoveQuestionNecessary(account, sbg) {
        console.log("STAY LOVE? ", account);
        return account && account.hasLove && sbg !== "LDF";
    };

    var authorizationSuccess = function authorizationSuccess() {
        var continueWithODF = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var account = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        return function(dispatch, getState) {
            console.log("authorizationSuccess", continueWithODF);
            console.log("authorizationSuccess", account);
            dispatch((0, _app.dismissAuthErrors)());
            dispatch(clearMessage());
            dispatch(setIsLoading(false));

            if (!continueWithODF && isStayLoveQuestionNecessary(account, (0, _selectors3.getSelectedSoftBundleGroup)(getState()))) {
                dispatch(setShowSection(_ShowSectionNameEnum.default.STAY_LOVE));
                return;
            }

            dispatch({
                type: ACTIONS.AUTHORIZATION_MODAL_FOR_PROCESS_OFF
            });

            if (!(0, _authorization.getAuthorizationForAccountIdentifyModalVisibility)(getState()) || (0, _authorization.getWwwCimIdBasedOfferSelectorProcesses)().includes((0, _filters.getSelectedProcessTypeValue)(getState()))) {
                dispatch({
                    type: ACTIONS.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_OFF
                });

                if ((0, _authorization.addToCartAfterAuth)(getState())) {
                    dispatch((0, _cart.addToCart)());
                }

                dispatch({
                    type: ACTIONS.AUTHORIZATION_ADD_TO_CART_AFTER,
                    value: false
                });
            } else {
                dispatch(setShowSection(_ShowSectionNameEnum.default.MSISDN));
            }
        };
    };

    _exports.authorizationSuccess = authorizationSuccess;

    var accountIdentifySuccess = function accountIdentifySuccess() {
        return function(dispatch, getState) {
            console.log("Konto znalezione");
            OPL.UI.fire('modules.header.reloadRightMenu');
            dispatch(setIsLoading(false));
            dispatch(clearMessage());
            dispatch({
                type: ACTIONS.AUTHORIZATION_CHOOSE_ACCOUNT_OFF
            });
            dispatch({
                type: ACTIONS.AUTHORIZATION_IS_LOADING_OFF
            });
            dispatch((0, _app.dismissAuthErrors)());

            if ((0, _root.isLandingPage)(getState()) && !(0, _root.isPreLandingPage)(getState())) {
                //for fix
                dispatch((0, _wwt.updateAddress)({}, null, true));
            }

            if ((0, _authorization.addToCartAfterAuth)(getState())) {
                console.log("AUTH SUCCESS addToCart");
                dispatch((0, _cart.addToCart)());
                dispatch({
                    type: ACTIONS.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_OFF
                });
                dispatch({
                    type: ACTIONS.AUTHORIZATION_ADD_TO_CART_AFTER,
                    value: false
                });
            } else {
                console.log("AUTH SUCCESS reloadCustomerInfo");
                dispatch({
                    type: ACTIONS.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_OFF
                });
                dispatch((0, _app.dismissCvErrors)());
                dispatch({
                    type: ACTIONS.AUTHORIZATION_CHOOSE_ACCOUNT_OFF
                });
                dispatch((0, _data.clearCartCustomerRequested)());
                dispatch((0, _api.requestLoggedCustomerData)());
                dispatch(clearMessage());
                console.log("TU");
                var showProcessChangedModal = (0, _selectors.shouldShowModalAfterProcessChanged)(getState());
                dispatch((0, _data.requestCartCustomerData)());

                if (showProcessChangedModal) {
                    dispatch(setShowSection(_ShowSectionNameEnum.default.FIX_PROCESS_CHANGED));
                }
            }

            dispatch((0, _cart2.fetchMiniCart)());
            dispatch((0, _cart2.fetchCart)());
        };
    };

    _exports.accountIdentifySuccess = accountIdentifySuccess;

    var chooseExistingAccount = function chooseExistingAccount(useExisting) {
        return function(dispatch) {
            console.log("chooseExistingAccount ", useExisting);

            if (useExisting == "true") {
                dispatch({
                    type: ACTIONS.AUTHORIZATION_CHOOSE_ACCOUNT_EXISTING
                });
            } else {
                dispatch({
                    type: ACTIONS.AUTHORIZATION_CHOOSE_ACCOUNT_NEW
                });
            }
        };
    };

    _exports.chooseExistingAccount = chooseExistingAccount;

    var closeAuthModal = function closeAuthModal() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.AUTHORIZATION_CHOOSE_ACCOUNT_OFF
            });
            dispatch({
                type: ACTIONS.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_OFF
            });
            dispatch({
                type: ACTIONS.AUTHORIZATION_MODAL_FOR_PROCESS_OFF
            });
            dispatch({
                type: ACTIONS.AUTHORIZATION_IS_LOADING_OFF
            });
            dispatch({
                type: ACTIONS.SHOW_MESSAGE,
                msg: ""
            });
        };
    };

    _exports.closeAuthModal = closeAuthModal;

    var authorizationFailure = function authorizationFailure() {
        return function(dispatch) {
            console.warn('authorization failed or canceled');
            dispatch(closeAuthModal());
        };
    };

    _exports.authorizationFailure = authorizationFailure;

    var accountChoosen = function accountChoosen(accountCode) {
        return function(dispatch) {
            console.log("accountChoosen ", accountCode);
            dispatch(closeAuthModal());
        };
    };

    _exports.accountChoosen = accountChoosen;

    var setAccountByMsisdn = function setAccountByMsisdn(account) {
        return function(dispatch) {
            console.log("setAccountByMsisdn");
            dispatch({
                type: ACTIONS.SET_ACCOUNT_BY_MSISDN,
                account: account
            });
        };
    };

    _exports.setAccountByMsisdn = setAccountByMsisdn;

    var setSalesChannel = function setSalesChannel(channel) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SET_SALES_CHANNEL,
                channel: channel
            });
        };
    };

    _exports.setSalesChannel = setSalesChannel;
});
//# sourceMappingURL=authorization.js.map