define(["exports", "eshop/modules/auth/remoteApi", "eshop/modules/auth/actionTypes", "eshop/modules/checkout/actionTypes", "eshop/modules/auth/actions/authorization", "eshop/modules/configurator/actions/offers", "eshop/modules/configurator/selectors/filters", "eshop/modules/checkout/selectors", "eshop/modules/auth/selectors/authorization", "eshop/modules/fix/selectors/root", "eshop/modules/cart/actions/cart", "eshop/modules/cart/selectors", "eshop/modules/checkout/actions/app", "eshop/utils/OnlineUtils", "eshop/modules/simfree/selectors", "../../core/utils/request-actions-creator", "../../configurator/selectors/metaData", "../../core/constants/ShowSectionNameEnum", "../selectors/authorization", "../../simfree/actions/app"], function(_exports, _remoteApi, ACTIONS, CHECKOUT_ACTIONS, _authorization, _offers, _filters, _selectors, _authorization2, _root, _cart, _selectors2, _app, _OnlineUtils, _selectors3, _requestActionsCreator, _metaData, _ShowSectionNameEnum, _authorization3, _app2) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.showResponseError = _exports.checkOfferSelector = _exports.pushVerifiedMsisdn = _exports.getAccountFromResponse = _exports.getAccountByCode = _exports.getAccount = _exports.lightLogout = _exports.checkMarketCompatibility = _exports.setMsisdn = _exports.pushAccount = _exports.setCimByLogin = _exports.setCimByMsisdn = _exports.selectAccount = _exports.requestLoggedCustomerData = _exports.requestLoggedCustomerDataAndCheckExistence = _exports.clearCartChangedFlag = _exports.setLoggedCustomerData = _exports.optionalRedirectToDifferentLP = _exports.requestMobileBillingAccountsAndChooseDefault = _exports.requestMobileBillingAccounts = _exports.setAccounts = _exports.requestPeselAndAddressAuth = _exports.backToAuthStartWithError = _exports.setPeselAndAddresVerified = _exports.doLogOut = void 0;
    _remoteApi = babelHelpers.interopRequireDefault(_remoteApi);
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);
    CHECKOUT_ACTIONS = babelHelpers.interopRequireWildcard(CHECKOUT_ACTIONS);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    _ShowSectionNameEnum = babelHelpers.interopRequireDefault(_ShowSectionNameEnum);

    var doLogOut = function doLogOut() {
        return function(dispatch, getState) {
            _remoteApi.default.logOut().catch(function(data) {
                return console.error("Error while log out! Code: ".concat(data.code));
            }).then(function(data) {
                console.log(data);

                _OnlineUtils.default.removePwaSuflerContextFromSession();

                var lastOfferPage = _OnlineUtils.default.getLastViewedOfferPage();

                if (lastOfferPage && $("#offerTypeSelectionComponent").length) {
                    window.location.href = lastOfferPage;
                    return;
                }

                dispatch((0, _app.gotoCartSummary)());
            });
        };
    };

    _exports.doLogOut = doLogOut;

    var setPeselAndAddresVerified = function setPeselAndAddresVerified(isVerified) {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.IS_PESEL_AND_ADDRESS_VERIFIED,
                isVerified: isVerified
            });
        };
    };

    _exports.setPeselAndAddresVerified = setPeselAndAddresVerified;

    var backToAuthStartWithError = function backToAuthStartWithError(message) {
        return function(dispatch, getState) {
            dispatch((0, _authorization.setIsLoading)(false));
            dispatch((0, _authorization.setShowSection)(_ShowSectionNameEnum.default.MSISDN));
            dispatch((0, _authorization.showError)("Nie udało się zalogować. Sprawdź dane i spróbuj jeszcze raz."));
            $("#msisdn").focus();
        };
    };

    _exports.backToAuthStartWithError = backToAuthStartWithError;

    var pollIsPeselAndAddressVerified = function pollIsPeselAndAddressVerified(timeout) {
        return function(dispatch, getState) {
            console.log("isPeselAndAddressVerifiedRequest  ");

            _remoteApi.default.isPeselAndAddressedVerified(timeout).then(function(response) {
                console.log(response);

                if (isErrorResponse(response)) {
                    dispatch(setPeselAndAddresVerified(false));
                } else if (response == "false") {
                    dispatch(setPeselAndAddresVerified(false));
                    dispatch(backToAuthStartWithError("Nie udało się zalogować. Sprawdź dane i spróbuj jeszcze raz."));
                } else {
                    dispatch(setPeselAndAddresVerified(true));
                    dispatch(commonAfterLoginActions(response));
                }

                console.log("Pooling :", response);
            }).catch(function(error) {
                dispatch(backToAuthStartWithError("Nie udało się zalogować. Sprawdź dane i spróbuj jeszcze raz."));
                console.log(error);
            });
        };
    };

    var peselAuthorizationReguestId = "";

    var requestPeselAndAddressAuth = function requestPeselAndAddressAuth(simpleAddresPartial, pesel, timeout) {
        return function(dispatch, getState) {
            dispatch((0, _authorization.setShowSection)(_ShowSectionNameEnum.default.MSISDN));
            dispatch((0, _authorization.setIsLoading)(true));
            dispatch((0, _authorization.showMessage)("Trwa weryfikacja wprowadzonych danych."));

            _remoteApi.default.requestPeselAndAddressAuth(simpleAddresPartial, pesel, timeout).then(function(response) {
                if (isErrorResponse(response)) {
                    dispatch(backToAuthStartWithError("Nie udało się zalogować. Sprawdź dane i spróbuj jeszcze raz."));
                    return;
                }

                peselAuthorizationReguestId = response;
                dispatch(pollIsPeselAndAddressVerified(timeout));
                console.log("peselAuthorizationReguestId", response);
            }).catch(function(error) {
                console.log(error);
                dispatch(backToAuthStartWithError("Nie udało się zalogować. Sprawdź dane i spróbuj jeszcze raz."));
            });
        };
    };

    _exports.requestPeselAndAddressAuth = requestPeselAndAddressAuth;

    var setAccounts = function setAccounts(payload) {
        return {
            type: ACTIONS.SET_BILLING_ACCOUNTS,
            payload: payload
        };
    };

    _exports.setAccounts = setAccounts;

    var requestMobileBillingAccounts = function requestMobileBillingAccounts() {
        return function(dispatch, getState) {
            dispatch((0, _authorization.setIsLoading)(true));

            _remoteApi.default.requestMobileBillingAccounts().then(function(response) {
                dispatch({
                    type: ACTIONS.SET_MOBILE_BILLING_ACCOUNTS,
                    payload: response,
                    meta: true
                });
                dispatch((0, _authorization.clearMessage)());
                dispatch((0, _authorization.setIsLoading)(false)); //TODO jeśli nie znaleziono kont to nowe
            }).catch(function(error) {
                console.error("Accounts NOT Found", error);
                dispatch((0, _authorization.showError)("Nie znaleziono kont"));
                dispatch((0, _authorization.setIsLoading)(false));
            });
        };
    };

    _exports.requestMobileBillingAccounts = requestMobileBillingAccounts;

    var requestMobileBillingAccountsAndChooseDefault = function requestMobileBillingAccountsAndChooseDefault() {
        return function(dispatch, getState) {
            if ((0, _selectors.getDeliveryAndPaymentStep)(getState())) {
                return;
            }

            console.log("#################### requestMobileBillingAccountsAndChooseDefault");

            _remoteApi.default.requestMobileBillingAccounts().then(function(response) {
                dispatch({
                    type: ACTIONS.SET_MOBILE_BILLING_ACCOUNTS,
                    payload: response,
                    meta: true
                });

                if ((0, _authorization2.getLoggedCustomerData)(getState()).accountCode == null) {
                    if (response.length > 1 || (0, _authorization2.getBillingAccountContractLimitExceeded)(getState())) {
                        dispatch({
                            type: ACTIONS.AUTHORIZATION_CHANGE_ACCOUNT_ON
                        });
                        dispatch((0, _authorization.showMobileAccountSelection)());
                    } else if (response.length === 1) {
                        dispatch(selectAccount(response[0].accountId, response[0].accountCode));
                    } else {
                        dispatch(selectAccount("", ""));
                    }
                }

                dispatch((0, _authorization.setIsLoading)(false));
            }).catch(function(error) {
                console.error("Accounts NOT Found", error);
                dispatch((0, _authorization.showError)("Nie znaleziono kont"));
                dispatch((0, _authorization.setIsLoading)(false));
            });
        };
    };

    _exports.requestMobileBillingAccountsAndChooseDefault = requestMobileBillingAccountsAndChooseDefault;

    var optionalRedirectToDifferentLP = function optionalRedirectToDifferentLP() {
        return function(dispatch, getState) {
            var accountId = (0, _authorization2.getSelectedBillingAccountId)(getState());

            if (!accountId) {
                return;
            }

            var account = (0, _authorization2.getLoggedCustomerData)(getState());

            if ((0, _metaData.isMobileBillingAccountsSet)(getState())) {
                var accounts = (0, _authorization2.getBillingAccountsForSelection)(getState());
                account = (accounts || []).filter(function(a) {
                    return a.accountId === accountId;
                })[0];

                if (!account) {
                    console.error("accountId unconsistency");
                    return;
                }
            } //temporary disable redirection for WWW
            // if (getSalesChannel(getState()) === "WWW") {
            //     return;
            // }
            // to be configurable


            var odfPaths = ["/abonament-komorkowy-dla-firm", "/male-firmy/abonament-komorkowy"];
            var lovePaths = (0, _authorization2.getLovePaths)();
            var path = window.location.pathname;
            var hasLove = account.hasLove;
            var hasODF = account.hasODF;

            if (odfPaths.indexOf(path) > -1 && hasLove) {
                window.location.pathname = lovePaths[0];
                return true;
            } else if (!hasLove && (0, _authorization2.isLovePage)() && hasODF) {
                _OnlineUtils.default.changeOrAddUrlParameterDisabledOnCheckout("offerType", "VOICE");

                window.location.pathname = odfPaths[0];
                return true;
            } else { //NOP
            }
        };
    };

    _exports.optionalRedirectToDifferentLP = optionalRedirectToDifferentLP;

    var setLoggedCustomerData = function setLoggedCustomerData(payload) {
        return {
            type: ACTIONS.AUTHORIZATION_SET_LOGGED_CUSTOMER_DATA,
            payload: payload
        };
    };

    _exports.setLoggedCustomerData = setLoggedCustomerData;

    var clearCartChangedFlag = function clearCartChangedFlag() {
        return {
            type: ACTIONS.AUTHORIZATION_CLEAR_CART_CHANGED_FLAG
        };
    };

    _exports.clearCartChangedFlag = clearCartChangedFlag;

    var requestLoggedCustomerDataAndCheckExistence = function requestLoggedCustomerDataAndCheckExistence() {
        var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;
        return function(dispatch, getState) {
            console.log("#################### requestLoggedCustomerDataAndCheckExistence");

            _remoteApi.default.getLoggedCustomerData().then(function(response) {
                dispatch(setLoggedCustomerData(response));

                if ((0, _authorization2.getSalesChannel)(getState()) === "WWW" && (0, _authorization3.isLogged)(getState()) && (0, _authorization3.hasLove)(getState())) {
                    if ((0, _authorization3.isOdfPage)()) {
                        dispatch(optionalRedirectToDifferentLP());
                    } else if ((0, _selectors3.isProductListPage)() && getSelectedOfferType(getState()) !== OfferType.VOICE_LDF) {
                        dispatch((0, _app2.setOfferType)(OfferType.VOICE_LDF));
                    }
                }

                if (!response.accountCode && (response.lastName || response.tradingName)) {
                    dispatch(requestMobileBillingAccountsAndChooseDefault());
                } else {
                    dispatch((0, _offers.fetchContractRole)());
                }
            }, function(error) {
                return console.error("requestLoggedCustomerDataAndCheckExistence getLoggedCustomerData", error);
            });
        };
    };

    _exports.requestLoggedCustomerDataAndCheckExistence = requestLoggedCustomerDataAndCheckExistence;

    var requestLoggedCustomerData = function requestLoggedCustomerData() {
        return function(dispatch, getState) {
            console.log("requestLoggedCustomerData *************************************************");

            _remoteApi.default.getLoggedCustomerData().then(function(response) {
                dispatch(setLoggedCustomerData(response));

                if (response.isCartChanged && ((0, _selectors.getIsCartStep)(getState()) || (0, _selectors.getIsCustomerDataStep)(getState()))) {
                    dispatch((0, _authorization.setShowSection)(_ShowSectionNameEnum.default.CART_WAS_CHANGED));
                } else if (!(0, _selectors.shouldShowModalAfterProcessChanged)(getState()) && !(0, _authorization2.getWwwCimIdBasedOfferSelectorProcesses)().includes((0, _filters.getSelectedProcessTypeValue)(getState()))) {
                    dispatch({
                        type: ACTIONS.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_OFF
                    });
                }
            });
        };
    };

    _exports.requestLoggedCustomerData = requestLoggedCustomerData;

    var selectAccount = function selectAccount(accountId, accountCode) {
        return function(dispatch, getState) {
            dispatch((0, _authorization.setIsLoading)(true));

            _remoteApi.default.selectAccount({
                accountId: accountId,
                accountCode: accountCode
            }).then(function(response) {
                console.log(response);
                console.log("Account pre set selectAccount");

                if (isErrorResponse(response)) {
                    dispatch(accountSelectionErrorHandler(response));
                    return;
                }

                if (dispatch(optionalRedirectToDifferentLP())) {
                    return;
                }

                dispatch((0, _offers.fetchContractRole)());

                if ((0, _authorization2.getBillingAccountChangeVisibility)(getState())) {
                    console.log("Change account executed");
                    dispatch({
                        type: ACTIONS.AUTHORIZATION_CHANGE_ACCOUNT_OFF
                    });
                    dispatch(requestLoggedCustomerData());

                    if ((0, _selectors.getIsCartStep)(getState())) {
                        dispatch((0, _cart.fetchMiniCart)());
                        dispatch((0, _cart.fetchCart)());
                    }

                    dispatch((0, _authorization.setIsLoading)(false));
                } else {
                    dispatch((0, _authorization.accountIdentifySuccess)());
                }
            }).catch(function(err) {
                dispatch(accountSelectionErrorHandler(err));
            });
        };
    };

    _exports.selectAccount = selectAccount;

    var accountSelectionErrorHandler = function accountSelectionErrorHandler(err) {
        return function(dispatch, getState) {
            console.warn("accountSelectionErrorHandler");
            dispatch((0, _authorization.setIsLoading)(false)); //dispatch({type: ACTIONS.AUTHORIZATION_CHOOSE_ACCOUNT_OFF});

            if (!(0, _authorization2.getAccountSelectionModalVisibility)(getState())) {
                dispatch({
                    type: ACTIONS.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_OFF
                });
                dispatch({
                    type: ACTIONS.AUTHORIZATION_MODAL_FOR_PROCESS_OFF
                });
                dispatch({
                    type: ACTIONS.AUTHORIZATION_IS_LOADING_OFF
                });
                dispatch((0, _authorization.setShowSection)(""));
            }

            console.error("Account NOT Found", err);
            dispatch((0, _authorization.showError)("Nie znaleziono konta"));
            dispatch((0, _authorization.setIsLoading)(false));
            return true;
        };
    };

    var setCimByMsisdn = function setCimByMsisdn(msisdn) {
        return function(dispatch, getState) {
            _remoteApi.default.setCimByMsisdn({
                msisdn: msisdn
            }).then(function(response) {
                if (isErrorResponse(response)) {
                    console.error("CIM not set", error);
                    dispatch((0, _authorization.setIsLoading)(false));
                    dispatch((0, _authorization.setShowSection)(_ShowSectionNameEnum.default.MSISDN));
                } else {
                    dispatch(commonAfterLoginActions(response));
                }
            }).catch(function(error) {
                console.error("CIM not set", error);
                dispatch((0, _authorization.setIsLoading)(false));
                dispatch((0, _authorization.setShowSection)(_ShowSectionNameEnum.default.MSISDN));
            });
        };
    };

    _exports.setCimByMsisdn = setCimByMsisdn;

    var setCimByLogin = function setCimByLogin(login) {
        return function(dispatch, getState) {
            _remoteApi.default.setCimByLogin({
                login: login
            }).then(function(response) {
                dispatch(commonAfterLoginActions(response));
            }).catch(function(error) {
                console.error("CIM not set", error);
                dispatch((0, _authorization.showError)("Nie udało się ustawić klienta"));
            });
        };
    };

    _exports.setCimByLogin = setCimByLogin;

    var commonAfterLoginActions = function commonAfterLoginActions(loginResponse) {
        return function(dispatch, getState) {
            console.log("CIM set login response", loginResponse);

            if (loginResponse.status == "PROPOSITION_NO_LONGER_APPLIES") {
                window.location.href = _OnlineUtils.default.getLastViewedOfferPage();
                return true;
            }

            if ((0, _root.isLandingPage)(getState()) || (0, _root.isPreLandingPage)(getState())) {
                console.log("LANDINGPAGE");
                dispatch((0, _app.requestFBBServiceData)());
            } else {
                console.log("NOT_LANDINGPAGE");
                dispatch((0, _app.requestFBBServiceDataFilteredByWWT)());
            }

            dispatch({
                type: CHECKOUT_ACTIONS.SET_FIX_CART_REFRESH_RESULT,
                data: loginResponse
            });
            dispatch((0, _authorization.accountIdentifySuccess)());
        };
    };

    var pushAccount = function pushAccount(msisdn, useExisting) {
        return function(dispatch, getState) {
            _remoteApi.default.pushAccount({
                msisdn: msisdn,
                useExisting: useExisting
            }).then(function(response) {
                console.log("Account pre set", {
                    response: response
                });
                dispatch((0, _authorization.accountIdentifySuccess)());
            }).catch(function(error) {
                console.error("Account NOT Found", error);
                dispatch((0, _authorization.showError)("Nie znaleziono konta"));
            });
        };
    };

    _exports.pushAccount = pushAccount;

    var setMsisdn = function setMsisdn(msisdn, processType) {
        return function(dispatch, getState) {
            console.log("Try to set msisdn, login or pesel =" + msisdn + " " + processType);
            dispatch((0, _authorization.clearMessage)());

            if (!!msisdn && msisdn.length === 11 && jQuery.isNumeric(msisdn)) {
                console.log("Pesel set in session");
                dispatch((0, _authorization.setIsLoading)(false));
                return;
            }

            dispatch((0, _authorization.setIsLoading)(true));

            _remoteApi.default.setMsisdnOrLogin({
                msisdn: msisdn,
                processType: processType
            }).then(function(response) {
                console.log(response);

                if (!!msisdn && msisdn.length === 9 && jQuery.isNumeric(msisdn)) {
                    console.log("Msisdn set in session");
                    PubSub.publish("UXEvent.CAAP.PhoneVerification.Init", {
                        containerId: "smsVerificationCaapSectionBody",
                        pageVariant: "VERIFICATION_OTP_VARIANT_7_SMS_CODE"
                    });
                    console.log("Msisdn set in session DONE");
                } else {
                    console.log("Login set in session");
                    PubSub.publish("UXEvent.CAAP.PortalLoginVerification.Init", {
                        containerId: "smsVerificationCaapSectionBody",
                        pageVariant: "VERIFICATION_PORTAL_PASSWORD"
                    });
                }

                dispatch((0, _authorization.setIsLoading)(false));
            }).catch(function(error) {
                console.error("Cannot set MSISDN or login ", msisdn, error);
            });
        };
    };

    _exports.setMsisdn = setMsisdn;
    var incompatibleMarketActions = (0, _requestActionsCreator.createRequestActions)(ACTIONS.incompatibleMarketCheck);

    var checkMarketCompatibility = function checkMarketCompatibility(msisdn) {
        return function(dispatch, getState) {
            dispatch(incompatibleMarketActions.start());
            return _remoteApi.default.checkMarketCompatibility({
                msisdn: msisdn
            }).then(function(response) {
                dispatch(incompatibleMarketActions.success(response));
                console.warn("WARN4", isErrorResponse(response), response);

                if (isErrorResponse(response)) {
                    if (response && response.message === "B2B") {
                        dispatch((0, _authorization.setIncompatibleMarket)(true, "B2B"));
                    } else if (response && response.message === "B2C") {
                        dispatch((0, _authorization.setIncompatibleMarket)(true, "B2C"));
                    } else {
                        dispatch((0, _authorization.setIncompatibleMarket)(true, null));
                    }

                    dispatch((0, _authorization.setShowSection)(_ShowSectionNameEnum.default.INCOMPATIBLE_MARKET_MODAL));
                    dispatch((0, _authorization.setIsLoading)(false));
                    console.log("INNY RYNEK");
                    return false;
                } else {
                    dispatch((0, _authorization.setIncompatibleMarket)(false, null));
                    console.log("RYNEK OK");
                    return true;
                }
            }, function(error) {
                console.error("checkMarketCompatibility", error);
                dispatch(incompatibleMarketActions.error());
                dispatch((0, _authorization.showError)("Nie można zweryfikować rynku"));
            });
        };
    };

    _exports.checkMarketCompatibility = checkMarketCompatibility;

    var lightLogout = function lightLogout() {
        return function(dispatch, getState) {
            _remoteApi.default.lightLogout().then(function(response) {
                console.log("Wylogowano", response);
            }).catch(function(error) {
                console.error("lightLogout", error);
                dispatch((0, _authorization.showError)("Nie można zweryfikować rynku"));
            });
        };
    };

    _exports.lightLogout = lightLogout;

    var getAccount = function getAccount(msisdn, push) {
        return function(dispatch, getState) {
            console.log("$$$$$$$$$$$$$$   getAccount   $$$$$$$$$$$$$$$$$$$$ ");
            dispatch((0, _authorization.showMessage)("Trwa wyszukiwanie konta."));
            dispatch((0, _authorization.setIsLoading)(true));

            _remoteApi.default.getAccount({
                msisdn: msisdn,
                push: push
            }).then(function(response) {
                dispatch(getAccountFromResponse(response, push));
            }).catch(function(error) {
                dispatch(manageGetAccountError(error));
            });
        };
    };

    _exports.getAccount = getAccount;

    var getAccountByCode = function getAccountByCode(accountCode) {
        return function(dispatch, getState) {
            console.log("$$$$$$$$$$$$$$   getAccountByCode   $$$$$$$$$$$$$$$$$$$$ ");
            dispatch((0, _authorization.showMessage)("Trwa wyszukiwanie konta."));
            dispatch((0, _authorization.setIsLoading)(true));

            _remoteApi.default.getAccountByCode({
                accountCode: accountCode
            }).then(function(response) {
                dispatch(getAccountFromResponse(response, false));
            }).catch(function(error) {
                dispatch(manageGetAccountError(error));
            });
        };
    };

    _exports.getAccountByCode = getAccountByCode;

    var getAccountFromResponse = function getAccountFromResponse(response, push) {
        return function(dispatch, getState) {
            console.log("Konto zostało znalezione:", response);

            if (isErrorResponse(response)) {
                dispatch(manageGetAccountError(response));
                return;
            }

            dispatch((0, _authorization.showMessage)(""));

            if (isWwwPrepaidB2b(response, (0, _authorization2.getSalesChannel)(getState()), (0, _selectors2.getCartIsNet)(getState()))) {
                dispatch(handleNewPrepaidAccount());
                return;
            }

            var doChooseAccount = !push;

            if (doChooseAccount) {
                dispatch((0, _authorization.setAccountByMsisdn)(response));
                dispatch((0, _authorization.showMobileAccountSelection)());
                dispatch((0, _authorization.setIsLoading)(false));
            } else {
                dispatch((0, _authorization.accountIdentifySuccess)());
            }
        };
    };

    _exports.getAccountFromResponse = getAccountFromResponse;

    var manageGetAccountError = function manageGetAccountError(response) {
        return function(dispatch, getState) {
            console.warn("Account NOT Found", response);
            console.warn("getAccountSelectionModalVisibility(getState()):", (0, _authorization2.getAccountSelectionModalVisibility)(getState()));
            dispatch((0, _authorization.setIsLoading)(false));
            dispatch(showResponseError(response));
        };
    };

    var handleNewPrepaidAccount = function handleNewPrepaidAccount() {
        return function(dispatch, getState) {
            console.log("New WWW B2B prepaid account");
            dispatch((0, _authorization.setIsLoading)(false));
            dispatch((0, _authorization.closeAuthModal)());
            console.log("Close modal dispatched");
            dispatch(requestLoggedCustomerData());

            if ((0, _selectors.getIsCartStep)(getState())) {
                dispatch((0, _cart.fetchMiniCart)());
                dispatch((0, _cart.fetchCart)());
            }
        };
    };

    var pushVerifiedMsisdn = function pushVerifiedMsisdn(msisdn, processType, propositionId, nextSection, selectedDeviceId) {
        return function(dispatch, getState) {
            dispatch((0, _authorization.setIsLoading)(true));
            var availableProductsKey = (0, _selectors3.getCurrentSelectedAvailableProductsKey)(getState());

            _remoteApi.default.pushVerifiedMsisdn({
                msisdn: msisdn,
                processType: processType,
                availableProductsKey: availableProductsKey,
                propositionId: propositionId,
                selectedDeviceId: selectedDeviceId
            }).then(function(response) {
                if (isErrorResponse(response)) {
                    dispatch(showResponseError(response));
                    return;
                }

                if (nextSection) {
                    dispatch((0, _authorization.clearMessage)());
                    dispatch((0, _authorization.setIsLoading)(false));
                    dispatch((0, _authorization.setShowSection)(nextSection));
                } else {
                    dispatch((0, _authorization.setShowSection)(""));
                    dispatch((0, _authorization.authorizationSuccess)(false, response));
                }
            }).catch(function(err) {
                dispatch(showResponseError(err));
            });

            _OnlineUtils.default.removePwaSuflerContextFromSession();
        };
    };

    _exports.pushVerifiedMsisdn = pushVerifiedMsisdn;

    var checkOfferSelector = function checkOfferSelector(processType, propositionId, selectedDeviceId) {
        return function(dispatch) {
            dispatch((0, _authorization.setIsLoading)(true));
            return _remoteApi.default.checkOfferSelector({
                processType: processType,
                propositionId: propositionId,
                selectedDeviceId: selectedDeviceId
            }).then(function(response) {
                if (isErrorResponse(response)) {
                    dispatch(showResponseError(response));
                    return Promise.reject(response.message);
                }

                return Promise.resolve(response);
            }).catch(function(error) {
                dispatch(showResponseError(error));
                return Promise.reject(error);
            });
        };
    };

    _exports.checkOfferSelector = checkOfferSelector;

    var showResponseError = function showResponseError(response) {
        return function(dispatch, getState) {
            dispatch((0, _authorization.setIsLoading)(false));

            if (!(0, _authorization2.getAccountSelectionModalVisibility)(getState())) {
                dispatch((0, _authorization.setShowSection)(_ShowSectionNameEnum.default.MSISDN));
            }

            ;

            if (response.status == 200) {
                dispatch((0, _authorization.showError)(response.message));
            } else if (response.status >= 500) {
                dispatch((0, _authorization.showError)("Mamy chwilowe trudności techniczne. Spróbuj za jakiś czas."));
            } else if (response.status == 404) {
                dispatch((0, _authorization.showError)(JSON.parse(response.responseText).message));
            } else {
                console.log(response);
                if (response.responseText) dispatch((0, _authorization.showError)(JSON.parse(response.responseText).message));
            }
        };
    };

    _exports.showResponseError = showResponseError;

    function isErrorResponse(response) {
        console.log(response);

        if (response && (response.message || response.originalHttpStatus > 200)) {
            console.log(response.message);
            return true;
        }

        return false;
    }

    function isWwwPrepaidB2b(response, salesChannel, isB2b) {
        var isWww = "WWW" === salesChannel;
        var isPrepaid = !!response.prepaid;
        console.log("Is WWW prepaid B2B: ", isPrepaid && isB2b && isWww);
        return isPrepaid && isB2b && isWww;
    }
});
//# sourceMappingURL=api.js.map