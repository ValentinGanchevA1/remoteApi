import ORA_ACTIONS from "./OraActionKeys";
import OraDispatcher from "eshop/flux/dispatcher/OraDispatcher";
/**
 * Action creator for page redirect actions.
 **/
let OraPageActions = (function(OraPageActions) {

    OraPageActions.offerConfigurator = function(openSection, offerConfiguratorUrl) {
        openSection = openSection || openConfiguratorSection;
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.PAGE_REDIRECT,
            page: offerConfiguratorUrl
        });
        document.location.href = bsfContextPath + "/" + offerConfiguratorUrl + (openSection ? "?section=" + openSection : "");
    };

    OraPageActions.pageRedirect = function(pageRedirect) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.PAGE_REDIRECT,
            page: 'pageRedirect'
        });
        document.location.href = bsfContextPath + pageRedirect;
    };

    OraPageActions.pageRedirectAbsolute = function(pageRedirect) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.PAGE_REDIRECT,
            page: 'pageRedirect'
        });
        document.location.href = pageRedirect;
    };

    OraPageActions.checkout = function() {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.PAGE_REDIRECT,
            page: 'checkout'
        });
        document.location.href = bsfContextPath + "/koszyk";
    };

    OraPageActions.checkoutFix = function() {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.PAGE_REDIRECT,
            page: 'checkoutFix'
        });
        document.location.href = bsfContextPath + "/internetdomowy/twojkoszyk";
    };

    OraPageActions.nextCheckoutStep = function() {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.PAGE_REDIRECT,
            page: "nextCheckoutStep"
        });
        document.location.href += "/dalej";
    };

    OraPageActions.previousCheckoutStep = function() {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.PAGE_REDIRECT,
            page: "previousCheckoutStep"
        });
        document.location.href += "/wstecz";
    };

    return OraPageActions;
})({});

export default OraPageActions;