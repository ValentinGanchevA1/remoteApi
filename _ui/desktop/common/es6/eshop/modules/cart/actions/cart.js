import * as ACTIONS from "../actionTypes";
import RemoteApi from "../remoteApi";
import OnlineUtils from "../../../utils/OnlineUtils";
import DataLayerUtils from "../../../utils/DataLayerUtils";
import {
    getAgreementType,
    getAssistModeStateData,
    getCurrentStepId
} from "../../checkout/selectors"
import {
    getAvailableProductsKeys
} from "../../simfree/selectors";
import {
    allCartEntries,
    getCartEntries,
    getCartEntryById,
    getCartIsNet,
    getFixConfigurablesMetadata,
    getMobileVasMetadata,
    getTerminalForBundleAndEntryNumber,
    isCartFix,
    isMobileVasUpdating,
    isAnyMobileVasUpdating,
} from "../selectors";
import {
    getSelectedFilters
} from "../../configurator/selectors/filters";
import {
    getSelectedOfferId,
    getSelectedOfferPosition
} from "../../configurator/selectors/offers";
import {
    fetchDocuments
} from "../../documents/actions/documents";
import {
    bodyLoaderEvent,
    bodyLoaderHide,
    bodyLoaderShow,
    doCheckoutStep,
    gotoCartSummary,
    gotoNextCheckoutStep
} from "../../checkout/actions/app";
import {
    getProcessType
} from "../../magnum2/utils";
import ProcessType from "../../magnum2/constants/ProcessTypeEnum";
import {
    setOfferTypeAction
} from "eshop/modules/simfree/actions/app";
import * as ACTIONSCONF from "eshop/modules/configurator/actionTypes";
import {
    redirectToCart
} from "eshop/modules/configurator/actions/cart";
import {
    clearMessage,
    showError,
    showMessage
} from "eshop/modules/auth/actions/authorization"
import GenesysWebEngagementUtils from "eshop/utils/GenesysWebEngagementUtils";
import {
    checkMsisdnAndGetOffers,
    propositionListCountSet,
    propositionListCountSetMode,
    setMarketContext
} from "eshop/modules/configurator/actions/filters";
import {
    getCheckMsisdnResult,
    getMarketContext,
    getSelectedOfferType
} from "eshop/modules/configurator/selectors/filters";
import {
    getSalesChannel
} from "../../auth/selectors/authorization";
import OfferType from "eshop/modules/simfree/constants/OfferTypeEnum";
import {
    validateData
} from "../../checkout/actions/validation";
import {
    selectVas,
    clearSelectedVases
} from "eshop/modules/configurator/actions/offers";
const SIMFREE_PROPOSITION = "DEFAULT_SALES_OF_GOODS_PROPOSITION$MOB_CPO_SALES_OF_GOODS";
const SIMFREE_PROCESS = "SALE_OF_GOODS";
import VasUpdateStatus from "eshop/modules/core/enum/VasUpdateStatus"
export const redirectToLastViewedOfferPage = () => (dispatch, getState) => {
    window.location.href = OnlineUtils.getLastViewedOfferPage();

};

/**
 * @deprecated Use fetchCartPromise as it allows do things after remote API.
 * E.g.: Show loader -> modify cart -> fetch cart -> hide loader.
 */
export function fetchCart() {
    return dispatch => {
        RemoteApi.getCart()
            .then(response => {
                dispatch({
                    type: ACTIONS.FETCH_CART,
                    payload: response,
                });
            }, error => console.error("fetchCart (deprecated)", error))
            .then(() => dispatch({
                type: ACTIONS.FETCHED_CART,
                payload: true,
            }));
    };
}

export const fetchCartPromise = () => dispatch => {
    return new Promise((resolve, reject) => {
        RemoteApi.getCart()
            .then(response => {
                dispatch({
                    type: ACTIONS.FETCH_CART,
                    payload: response,
                });
            }, error => console.error("fetchCartPromise", error))
            .then(() => {
                dispatch({
                    type: ACTIONS.FETCHED_CART,
                    payload: true,
                });
                resolve();
            });
    });
};

export function fetchOrder() {
    return dispatch => {
        RemoteApi.getOrder()
            .then(response => {
                dispatch({
                    type: ACTIONS.FETCH_CART,
                    payload: response,
                });
            })
            .then(() => dispatch({
                type: ACTIONS.FETCHED_CART,
                payload: true,
            })).catch(error => {
                console.error("ERROR", error);
            });
    };
}


export function reloadCartState(afterFetchFunc) {
    return (dispatch, getState) => {
        if (isAnyMobileVasUpdating(getState())) {

            return;

        }
        fetchMiniCart()(dispatch, getState);
        dispatch(fetchCartPromise()).then(() => {
            if (afterFetchFunc)
                afterFetchFunc();
        });
        fetchDocuments()(dispatch, getState);
    };
}

export function updateFixCartProducts(bundle, offer, cartBundle, products) {
    return (dispatch, getState) => {
        RemoteApi.postUpdateFixCartProducts(bundle, offer, cartBundle, products)
            .then(() => {
                dispatch({
                    type: ACTIONS.UPDATED_CART_CONTENTS,
                    payload: true,
                });
                reloadCartState()(dispatch, getState);
            })
    }
}

export function updateCartVases(bundle, offer, cartBundle, productsToRemove, productsToAdd) {
    return (dispatch, getState) => {
        dispatch({
            type: ACTIONS.UPDATING_MOBILE_VASES,
            payload: true,
            bundleNo: cartBundle,
            productsToRemove: productsToRemove,
            productsToAdd: productsToAdd,
        });


        RemoteApi.postUpdateCartVases(bundle, offer, cartBundle, productsToRemove, productsToAdd)
            .then(() => {
                productsToRemove
                    .forEach(vasCode => GenesysWebEngagementUtils.pushDeleteVasFromCartEvent(vasCode, bundle, cartBundle));
                productsToAdd.forEach(vasCode => GenesysWebEngagementUtils.pushAddVasToCartEvent(vasCode, bundle, cartBundle));
                dispatch({
                    type: ACTIONS.UPDATED_CART_CONTENTS,
                    payload: true,
                    bundleNo: cartBundle,
                });

                dispatch({
                    type: ACTIONS.UPDATING_MOBILE_VASES,
                    payload: false,
                    bundleNo: cartBundle,
                    productsToRemove: productsToRemove,
                    productsToAdd: productsToAdd,
                });
                reloadCartState()(dispatch, getState);
            })
    }
}

export function updateConvergentCartProducts(products) {
    return (dispatch, getState) => {
        RemoteApi.postUpdateConvergentCartProducts(products)
            .then(() => {
                dispatch({
                    type: ACTIONS.UPDATED_CART_CONTENTS,
                    payload: true,
                });
                reloadCartState()(dispatch, getState);
            }, () => {
                dispatch({
                    type: ACTIONS.UPDATED_CART_CONTENTS,
                    payload: true,
                });
                reloadCartState()(dispatch, getState)
            })
    }
}

export function updateCartDevices(bundle, offer, cartBundle, productsToRemove, productsToAdd) {
    return (dispatch, getState) => {
        RemoteApi.postUpdateCartDevices(bundle, offer, cartBundle, productsToRemove, productsToAdd)
            .then(() => {
                pushGweEventForProducts(productsToAdd, productsToRemove, bundle, cartBundle);
                dispatch({
                    type: ACTIONS.UPDATED_CART_CONTENTS,
                    payload: true,
                });
                reloadCartState()(dispatch, getState);
            })
    }
}

export function postLowerInstallments(bundleNo, diff, market) {
    return (dispatch, getState) => {
        RemoteApi.postLowerInstallments(bundleNo, diff, market)
            .then(() => {
                dispatch({
                    type: ACTIONS.LOWER_INSTALLMENTS_SUBMITED,
                    payload: true,
                });
                dispatch({
                    type: ACTIONS.LOWER_INSTALLMENTS_MODAL_CLOSE,
                    bundleNo: bundleNo
                });
                reloadCartState()(dispatch, getState);
            })
    }
}

export function updateTerminalToOffer(bundle, offer, cartBundle, productsToRemove, productsToAdd) {
    return (dispatch, getState) => {
        bodyLoaderEvent("modules.loader.show");
        RemoteApi.postUpdateCartDevices(bundle, offer, cartBundle, productsToRemove, productsToAdd)
            .then(responseData => {
                pushGweEventForProducts(productsToAdd, productsToRemove, bundle, cartBundle);
                if ((responseData && responseData.message && typeof responseData.message === "string") || responseData === false) {
                    let msg = responseData ? responseData.message : "Błąd dodawania do koszyka";
                    bodyLoaderEvent("modules.loader.hide");
                    dispatch(showError(msg))
                } else {
                    dispatch({
                        type: ACTIONS.UPDATED_CART_CONTENTS,
                        payload: true,
                    });
                    dispatch(redirectToCart())
                }
            })
    }
}

export function removeDeviceFromSimfreeBundle(bundleNo, entryNo, lastOne) {
    return (dispatch, getState) => {
        RemoteApi.removeDeviceFromSimfreeBundle(bundleNo, entryNo, lastOne)
            .then(responseData => {
                pushGweDeleteEventForSimfreeBundleEntry(bundleNo, entryNo, getState());
                OPL.UI.fire(OPL.UI.EVENTS.modules.basket.counter.update, responseData, "header");
                dispatch({
                    type: ACTIONS.UPDATED_CART_CONTENTS,
                    payload: true,
                });
                reloadCartState()(dispatch, getState);
            })
    }
}

export function fetchMiniCart() {
    return (dispatch, getState) => {
        RemoteApi.getMiniCart(OfferType.CONVERGENT !== getSelectedOfferType(getState()) && getAvailableProductsKeys(getState()) || [])
            .then(response => {
                console.log("FETCHED MINICART WITH:", response);
                dispatch(setMiniCart(response));
                dispatch({
                    type: ACTIONS.FETCH_BUNDLES_PROCESS_TYPE,
                    payload: response,
                });
                const cartEntries = getCartEntries(getState());
                console.warn("fetchminicart", cartEntries);
                if (cartEntries && cartEntries.length > 0) {
                    dispatch(setMarketContext(getCartIsNet(getState()) ? "B2B" : "B2C"));
                    dispatch(propositionListCountSetMode(false));
                }

                if (!isCartFix(getState())) {
                    const stepId = getCurrentStepId(getState());
                    stepId && DataLayerUtils.pushCheckoutStepOneTime(response, getSelectedFilters(getState()), stepId, getSelectedOfferId(getState()), getSelectedOfferPosition(getState()), {
                        salesChannel: getSalesChannel(getState()),
                        ...getAssistModeStateData(getState())
                    });
                }
            })
            .then(() => dispatch({
                type: ACTIONS.FETCHED_MINI_CART,
                payload: true,
            }));
    };
}

export const setMiniCart = payload => ({
    type: ACTIONS.FETCH_MINI_CART,
    payload
});

export function fetchFixConfigurables(cartBundle) {
    return (dispatch, getState) => {
        if (!getFixConfigurablesMetadata(getState()).find(fixConfigurablesMetadata => fixConfigurablesMetadata.cartBundle === cartBundle)) {
            dispatch({
                type: ACTIONS.FETCHING_FIX_CONFIGURABLES,
                payload: ({
                    cartBundle: cartBundle,
                }),
            });
            RemoteApi.getFixConfigurables(cartBundle)
                .then(response => dispatch({
                    type: ACTIONS.FETCH_FIX_CONFIGURABLES,
                    payload: Object.assign({}, response, {
                        cartBundle: cartBundle,
                    }),
                }));
        }
    }
}

export const changeTvModalVisibility = visibility => dispatch => {
    dispatch({
        type: ACTIONS.TV_MODAL_VISIBILITY,
        data: visibility
    });
};
export const changeFixTvFilteredModalVisibility = visibility => dispatch => {
    dispatch({
        type: ACTIONS.TV_FILTERED_MODAL_VISIBILITY,
        data: visibility
    });
};

export const changeB2BVasesModalVisibility = visibility => dispatch => {
    dispatch({
        type: ACTIONS.OFICES_SERVICES_MODAL_VISIBILITY,
        data: visibility
    });
};

export function fetchMobileVases(propositionId, bundle, process) {
    return (dispatch, getState) => {
        console.log("VASES fetchMobileVases", propositionId, bundle, process)
        if (!getMobileVasMetadata(getState()).find(mobileVasMetadata => mobileVasMetadata.propositionId === propositionId && mobileVasMetadata.bundle === bundle && mobileVasMetadata.process === process)) {
            dispatch({
                type: ACTIONS.FETCHING_MOBILE_VASES,
                payload: ({
                    propositionId: propositionId,
                    bundle: bundle,
                    process: process,
                }),
            });
            RemoteApi.getMobileVases(propositionId, bundle, process)
                .then(response => dispatch({
                    type: ACTIONS.FETCH_MOBILE_VASES,
                    payload: Object.assign({}, response, {
                        propositionId: propositionId,
                        bundle: bundle,
                        process: process,
                    }),
                }));
        }
    }
}

export function fetchConvergentConfigurables(propositionId, bundleNos) {
    return (dispatch, getState) => {
        if (!getFixConfigurablesMetadata(getState())
            .find(fixConfigurablesMetadata =>
                fixConfigurablesMetadata.propositionId === propositionId
            )
        ) {
            dispatch({
                type: ACTIONS.FETCHING_CONVERGENT_CONFIGURABLES,
                payload: {
                    propositionId,
                    configurables: [],
                },
            });
            RemoteApi.getConvergentConfigurables(bundleNos)
                .then(response => dispatch({
                    type: ACTIONS.FETCH_CONVERGENT_CONFIGURABLES,
                    payload: {
                        propositionId,
                        configurables: [...response],
                    },
                }));
        }
    }
}

export function goToOrangeLoveLandingPage(entries) {
    return () => {
        const processType = getProcessType(entries);
        if (processType === ProcessType._4U) {
            RemoteApi.goToOrangeLove4DLandingPage();
        } else if (processType === ProcessType._2U) {
            RemoteApi.goToOrangeLove2DLandingPage();
        } else if (_.includes([ProcessType._2ULTE, ProcessType._3ULTE], processType)) {
            RemoteApi.goToOrangeLoveLTE4FIXLandingPage();
        } else {
            console.error(`Unexpected process type: '${processType}' could not redirect to Orange Love landing page`);
        }
    }
}

export function goBackEmptyCart() {
    return (dispatch, getState) => {
        dispatch(clearAddTerminalToOfferFromSessionStorage());
        const lastOfferPage = OnlineUtils.getLastViewedOfferPage();

        if (lastOfferPage) {
            window.location.href = lastOfferPage;
            return;
        }

        if (getMarketContext(getState()) === "B2B") {
            window.location.href = window.location.protocol + "//" + window.location.host + "/male-firmy/sklep"
        } else
            window.location.href = window.location.protocol + "//" + window.location.host + "/sklep"
    };
}

export function showErrorMessage(message) {
    return (dispatch, getState) => {
        dispatch(showError(message));
    };
}

export const removeCartByOmniCode = (omni) => (dispatch, getState) => {
    RemoteApi.removeCartByOmniCode(omni).then(response => {
        let result = getCheckMsisdnResult(getState());
        let msisdn = result.msisdn;
        dispatch(checkMsisdnAndGetOffers(msisdn));
    }).catch(error => {
        console.error("ERROR", error);
        dispatch(showErrorMessage("Błąd podczas usuwania koszyka."))

    })
}

export function removeFromCart(data, id) {
    return (dispatch, getState) => {
        RemoteApi.removeFromCart(data, id)
            .then(response => {
                dispatch(propositionListCountSet(1));
                pushGweDeleteEventsForBundleId(id, getState());
                OPL.UI.fire(OPL.UI.EVENTS.modules.basket.counter.update, response.offerCount, "header");
                dispatch({
                    type: ACTIONS.REMOVE_FROM_CART,
                    payload: response
                });
                reloadCartState()(dispatch, getState)
            });
    };
}
export function removeFromCartAndRedirect(data, id) {
    return (dispatch, getState) => {
        RemoteApi.removeFromCart(data, id)
            .then(response => {
                if (id == null) {
                    GenesysWebEngagementUtils.deleteAllFromCartEvent(allCartEntries(getState()));
                }
                DataLayerUtils.pushOrderResigned(getAgreementType(getState()));
                dispatch(propositionListCountSet(1));
                OPL.UI.fire(OPL.UI.EVENTS.modules.basket.counter.update, response.offerCount, "header");
                dispatch({
                    type: ACTIONS.REMOVE_FROM_CART,
                    payload: response
                });
                reloadCartState()(dispatch, getState);
                gotoCartSummary()(dispatch);
            });
    };
}

export function handleRepayment() {
    return (dispatch, getState) => {
        RemoteApi.markAsRepayment().then(response => dispatch(doCheckoutStep()))
    };
}

export function handleRepaymentDeposit() {
    return (dispatch, getState) => {
        RemoteApi.markAsRepayment().then(response => dispatch(gotoNextCheckoutStep()))
    };
}


export function removeFromCartWithRedirect(href) {
    return (dispatch, getState) => {
        RemoteApi.removeFromCart()
            .then(response => {
                GenesysWebEngagementUtils.deleteAllFromCartEvent(allCartEntries(getState()));
                OPL.UI.fire(OPL.UI.EVENTS.modules.basket.counter.update, response.offerCount, "header");
                dispatch({
                    type: ACTIONS.REMOVE_FROM_CART,
                    payload: response,
                });
                window.location.href = href;
            })
    };
}

export function removeMagnumFromMultiCart(bundleNos) {
    return (dispatch, getState) => {
        RemoteApi.removeMagnumFromMultiCart(bundleNos)
            .then(() => {
                reloadCartState()(dispatch, getState);
                gotoCartSummary()(dispatch);
            });
    };
}

export function removeTerminalFromConvergentCartBundle(bundleNo, productCode) {
    return (dispatch, getState) => {
        RemoteApi.removeTerminalFromConvergentCartBundle(bundleNo, productCode)
            .then(() => reloadCartState()(dispatch, getState));
    };
}

export function removeTerminalFromCartBundle(data, id) {
    return dispatch => {
        RemoteApi.removeTerminalFromCartBundle(data, id)
            .then(response => dispatch({
                type: ACTIONS.REMOVE_TERMINAL_FROM_CART_BUNDLE,
                payload: response,
            }));
    };
}

export function clearCartAndRedirect(id, url) {
    RemoteApi.removeFromCart(null, id)
        .then(data => {
            OPL.UI.fire(OPL.UI.EVENTS.modules.basket.counter.update, data.offerCount, "header");
            window.location.href = url;
        });

}

export const handleManualVerificationProcess = (requestCount, intervalBetweenRequests) => dispatch => {
    RemoteApi.checkManualVerificationIsFinish(requestCount, intervalBetweenRequests).then(() => {
        return RemoteApi.getManualVerificationStatus().then(
            response => dispatch({
                type: ACTIONS.SET_MANUAL_STATUS,
                status: response,
            }))
    })
};

export const changeAddTerminalToOfferBundleNo = bundleNo => dispatch => {
    dispatch({
        type: ACTIONS.CHANGE_ADD_TERMINAL_TO_OFFER_BUNDLE_NUMBER,
        value: bundleNo
    })
};

export const clearAddTerminalToOfferFromSessionStorage = () => dispatch => {
    dispatch({
        type: ACTIONS.CLEAR_ADD_TERMINAL_TO_OFFER_BUNDLE_NUMBER
    })
};

export const changedVoucherCode = voucherCode => dispatch => {
    dispatch({
        type: ACTIONS.CHANGE_VOUCHER_CODE,
        value: voucherCode
    })
};

export const clearVoucher = () => dispatch => {
    dispatch({
        type: ACTIONS.CLEAR_VOUCHER_DATA
    })
};

export const findApplicableProducts = voucherCode => dispatch => {
    dispatch({
        type: ACTIONS.FIND_APPLICABLE_PRODUCTS_START
    });
    changedVoucherCode(voucherCode);
    console.log("Finding products for voucher: ", voucherCode);
    RemoteApi.findApplicableProducts(voucherCode)
        .then(data => {
            if (data && data.message && typeof data.message === "string") {
                dispatch({
                    type: ACTIONS.VOUCHER_ERROR,
                    value: {
                        level: "error",
                        message: data.message
                    }
                });
            } else {
                dispatch({
                    type: ACTIONS.FIND_APPLICABLE_PRODUCTS_DONE,
                    value: data
                });
            }
        });
};

export const applyVoucher = (voucherCode, product) => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.APPLY_VOUCHER_START
    });
    console.log(`Applying voucher '${voucherCode}' to product ${product}`);
    RemoteApi.applyVoucher(voucherCode, product).then(data => {
        if (data && data.message && typeof data.message === "string") {
            dispatch({
                type: ACTIONS.VOUCHER_ERROR,
                value: {
                    level: "error",
                    message: data.message
                }
            });
        } else {
            fetchMiniCart()(dispatch, getState);
            fetchCart()(dispatch, getState);
            dispatch({
                type: ACTIONS.APPLY_VOUCHER_DONE
            });
        }
    });
};

export const removeVoucher = (entryNo, bundleNo, voucherSubType = null, voucher = null) => (dispatch, getState) => {
    console.log("remove voucher from entry", entryNo, bundleNo, voucherSubType, voucher);
    RemoteApi.removeVoucher(entryNo, bundleNo, voucherSubType, voucher).then(() => {
        bodyLoaderEvent("modules.loader.show");
        fetchMiniCart()(dispatch, getState);
        fetchCart()(dispatch, getState);
        bodyLoaderEvent("modules.loader.hide");
    });
};

export const setPriceIsNet = showNet => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.SET_PRICE_VIEW_NET,
        showNet: showNet
    });
};

export function fetchPickupMiniCart() {
    return (dispatch, getState) => {
        RemoteApi.getPickupMiniCart()
            .then(response => {
                dispatch({
                    type: ACTIONS.FETCH_MINI_CART,
                    payload: response,
                });
                const stepId = getCurrentStepId(getState());
                stepId && DataLayerUtils.pushCheckoutStepOneTime(response, getSelectedFilters(getState()), stepId, getSelectedOfferId(getState()), getSelectedOfferPosition(getState()), getAssistModeStateData(getState()));
            })
            .then(response => dispatch({
                type: ACTIONS.FETCH_BUNDLES_PROCESS_TYPE,
                payload: response.payload,
            }))
            .then(() => dispatch({
                type: ACTIONS.FETCHED_MINI_CART,
                payload: true,
            }))
            .catch(error => {
                console.error("fetchPickupMiniCart error", error);
            });
    }
}

export function createNewCart() {
    return dispatch => {
        RemoteApi.createNewCart()
            .then(() => dispatch(gotoCartSummary()))
            .then(() => dispatch({
                type: ACTIONS.CREATE_NEW_CART
            }));
    };
}

export function setFilters(bundleNo) {
    return (dispatch, getState) => {
        const entries = allCartEntries(getState());
        let entry = entries.find(entry => entry.bundleNo == bundleNo);
        dispatch(setOfferTypeAction(entry.bundleType));
        dispatch({
            type: ACTIONSCONF.SELECT_PROCESS_TYPE,
            processType: entry.processType
        });
        dispatch({
            type: ACTIONSCONF.SELECT_LOYALTY_LENGTH,
            loyaltyLength: entry.loyaltyLength
        });
        dispatch({
            type: ACTIONSCONF.SELECT_OFFER,
            propositionId: entry.bundleCode
        });
        dispatch({
            type: ACTIONSCONF.SET_DEVICE_INSTALMENTS_COUNT_IN_SESSION_STORAGE,
            deviceInstalmentsCount: getDeviceInstallmentsCount(entry)
        });
        dispatch({
            type: ACTIONS.CHANGE_ADD_TERMINAL_TO_OFFER_BUNDLE_NUMBER,
            value: bundleNo
        });
        dispatch(setSelectedVasesForCartEntry(entry));


    }
}

const filterVasesByCategories = (vases, category) => vases && category && vases.filter(vas => vas.categories && vas.categories.includes(category)) || [];

export const setSelectedVasesForCartEntry = (entry) => (dispatch, getState) => {
    const bundlePackages = filterVasesByCategories(entry.vases, "GratisPackageBonuses");
    dispatch(clearSelectedVases());
    bundlePackages.forEach(vas => dispatch(selectVas(entry.bundleCode, vas.productCode)));


}

function getDeviceInstallmentsCount(entry) {
    let deviceMonthlyPrices;
    if (entry.terminals && entry.terminals.length > 0) {
        deviceMonthlyPrices = entry.terminals[0].monthlyPrices;
    } else if (entry.euroSets && entry.euroSets.length > 0) {
        deviceMonthlyPrices = entry.euroSets[0].monthlyPrices;
    } else {
        return;
    }
    return deviceMonthlyPrices[deviceMonthlyPrices.length - 1] && deviceMonthlyPrices[deviceMonthlyPrices.length - 1].monthTo;
}

const pushGweEventForProducts = (productsToAdd, productsToRemove, proposition, cartBundle) => {
    productsToAdd.filter(productId => productId).forEach(productId => {
        GenesysWebEngagementUtils.pushAddToCartEvent(productId, proposition, cartBundle);
    });
    productsToRemove.filter(productId => productId).forEach(productId => {
        GenesysWebEngagementUtils.pushDeleteFromCartEvent(productId, proposition, cartBundle);
    });
};

const pushGweDeleteEventForSimfreeBundleEntry = (bundleNumber, entryNumber, state) => {
    let terminal = getTerminalForBundleAndEntryNumber(bundleNumber, entryNumber)(state);
    if (terminal) {
        GenesysWebEngagementUtils.pushDeleteFromCartEvent(getIdForTerminal(terminal), SIMFREE_PROPOSITION, terminal.bundleNo);
    }
};

const pushGweDeleteEventsForBundleId = (bundleId, state) => {
    if (!bundleId) {
        GenesysWebEngagementUtils.deleteAllFromCartEvent(allCartEntries(state));
    } else {
        pushGweDeleteEventsForCartEntry(getCartEntryById(bundleId)(state));
    }
};

const pushGweDeleteEventsForCartEntry = cartEntry => {
    if (cartEntry.processType !== SIMFREE_PROCESS) {
        GenesysWebEngagementUtils.pushDeleteFromCartEvent(cartEntry.productCode, cartEntry.bundleCode, cartEntry.bundleNo);
    }
    cartEntry.terminals.forEach(terminal => GenesysWebEngagementUtils.pushDeleteFromCartEvent(getIdForTerminal(terminal), getPropositionForCartEntry(cartEntry), terminal.bundleNo));
    cartEntry.vases.forEach(vas => GenesysWebEngagementUtils.pushDeleteVasFromCartEvent(vas.productCode, getPropositionForCartEntry(cartEntry), vas.bundleNo));
};

const getPropositionForCartEntry = cartEntry => {
    return cartEntry.processType === SIMFREE_PROCESS ? SIMFREE_PROPOSITION : cartEntry.bundleCode;
};

const getIdForTerminal = terminal => {
    return terminal.processType === SIMFREE_PROCESS ? terminal.productId : terminal.productCode;
};

export function openVasModal() {
    return (dispatch, getState) => {
        dispatch({
            type: ACTIONS.VAS_MODAL_SHOW_CHANGE,
            payload: true
        });
    };
}

export function closeVasModal() {
    return (dispatch, getState) => {
        dispatch({
            type: ACTIONS.VAS_MODAL_SHOW_CHANGE,
            payload: false
        });
    };
}

export function openBonusModal() {
    return (dispatch, getState) => {
        dispatch({
            type: ACTIONS.BONUS_MODAL_SHOW_CHANGE,
            payload: true
        });
    };
}

export function closeBonusModal() {
    return (dispatch, getState) => {
        dispatch({
            type: ACTIONS.BONUS_MODAL_SHOW_CHANGE,
            payload: false
        });
    };
}

export function setPaymentPlanAssignValue(value, bundleNo, withRecalculate) {
    return (dispatch, getState) => {
        if (withRecalculate) {
            RemoteApi.changeAssignPaymentPlans(value, bundleNo).then(response => {
                if (response) {
                    reloadCartState()(dispatch, getState);
                }
            });
        }
        let assignmentState = getState().cart.assignment.isPaymentPlanAssigned;
        let newStates = assignmentState.slice();
        newStates[bundleNo] = value;
        dispatch({
            type: ACTIONS.PAYMENT_PLAN_ASSIGN_VALUE_CHANGE,
            payload: newStates
        });
    };
}

export function changeCertificateDeathConfimation(value) {
    return (dispatch, getState) => {
        dispatch({
            type: ACTIONS.CONFIRMATION_DEATH_CHANGE,
            payload: value
        });
    };
}

export const getKdrDataFromCart = () => (dispatch, getState) => {
    RemoteApi.getKdrDataFromCart()
        .then(response => {
            dispatch({
                type: ACTIONS.KDR_CART_DATA,
                payload: response
            });
            if (response.source && response.source.toLowerCase() === "legacy") {
                reloadCartState()(dispatch, getState);
            }
        });
};


export const changeKdrNumber = value => dispatch =>
    dispatch({
        type: ACTIONS.KDR_NUMBER_CHANGE,
        payload: value
    });

export const approveKdrNumber = () => dispatch =>
    dispatch({
        type: ACTIONS.KDR_NUMBER_APPROVE
    });

export const clearKdrNumber = () => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.KDR_NUMBER_CLEAR
    });
    bodyLoaderShow();
    RemoteApi.saveKdrData({}).then(response => {
        if (!response || response.code.toUpperCase() === "NOK") {
            if (response && response.description && typeof response.description === "string") {
                dispatch({
                    type: ACTIONS.KDR_ERROR,
                    value: {
                        level: "error",
                        message: response.description
                    }
                });
            } else {
                dispatch({
                    type: ACTIONS.KDR_ERROR,
                    value: {
                        level: "error",
                        message: "Przepraszamy, chwilowe trudności techniczne. Spróbuj jeszcze raz."
                    }
                });
            }
        }
        reloadCartState(
            () => bodyLoaderHide()
        )(dispatch, getState);
        dispatch({
            type: ACTIONS.KDR_SAVED
        });
    });

};

export const dispatchKdrError = error => dispatch =>
    dispatch({
        type: ACTIONS.KDR_ERROR,
        value: error
    });

export const saveKdrData = kdrData => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.KDR_SAVING
    });
    RemoteApi.saveKdrData(kdrData).then(response => {
        if (!response || response.code.toUpperCase() === "NOK") {
            if (response && response.description && typeof response.description === "string") {
                dispatch({
                    type: ACTIONS.KDR_ERROR,
                    value: {
                        level: "error",
                        message: response.description
                    }
                });
            } else {
                dispatch({
                    type: ACTIONS.KDR_ERROR,
                    value: {
                        level: "error",
                        message: "Przepraszamy, chwilowe trudności techniczne. Spróbuj jeszcze raz."
                    }
                });
            }
        }
        reloadCartState()(dispatch, getState);
        dispatch({
            type: ACTIONS.KDR_SAVED
        });
    });
};

export const haltCart = () => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.HALT_CART_START
    });
    validateData(false)(dispatch, getState)
        .then((success) => {
            if (!!success) {
                RemoteApi.haltCart().then((response) => {
                    let errorCode = response.jqXHR && response.jqXHR.getResponseHeader('x-opl-error-descriptors')
                    if (errorCode) {
                        dispatch({
                            type: ACTIONS.HALT_CART_ERROR,
                            message: response.data.message
                        });
                        dispatch(showErrorMessage("Błąd podczas wstrzymywania: " + response.data.message))
                    } else {
                        dispatch({
                            type: ACTIONS.HALT_CART_SUCCESS
                        });
                        dispatch(doCheckoutStep());
                    }
                });
            }
        })
        .catch((err) => {
            console.error(err)
        });
};