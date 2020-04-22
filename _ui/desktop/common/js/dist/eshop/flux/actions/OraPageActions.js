define(["exports", "./OraActionKeys", "eshop/flux/dispatcher/OraDispatcher"], function(_exports, _OraActionKeys, _OraDispatcher) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _OraActionKeys = babelHelpers.interopRequireDefault(_OraActionKeys);
    _OraDispatcher = babelHelpers.interopRequireDefault(_OraDispatcher);

    /**
     * Action creator for page redirect actions.
     **/
    var OraPageActions = function(OraPageActions) {
        OraPageActions.offerConfigurator = function(openSection, offerConfiguratorUrl) {
            openSection = openSection || openConfiguratorSection;

            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.PAGE_REDIRECT,
                page: offerConfiguratorUrl
            });

            document.location.href = bsfContextPath + "/" + offerConfiguratorUrl + (openSection ? "?section=" + openSection : "");
        };

        OraPageActions.pageRedirect = function(pageRedirect) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.PAGE_REDIRECT,
                page: 'pageRedirect'
            });

            document.location.href = bsfContextPath + pageRedirect;
        };

        OraPageActions.pageRedirectAbsolute = function(pageRedirect) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.PAGE_REDIRECT,
                page: 'pageRedirect'
            });

            document.location.href = pageRedirect;
        };

        OraPageActions.checkout = function() {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.PAGE_REDIRECT,
                page: 'checkout'
            });

            document.location.href = bsfContextPath + "/koszyk";
        };

        OraPageActions.checkoutFix = function() {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.PAGE_REDIRECT,
                page: 'checkoutFix'
            });

            document.location.href = bsfContextPath + "/internetdomowy/twojkoszyk";
        };

        OraPageActions.nextCheckoutStep = function() {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.PAGE_REDIRECT,
                page: "nextCheckoutStep"
            });

            document.location.href += "/dalej";
        };

        OraPageActions.previousCheckoutStep = function() {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.PAGE_REDIRECT,
                page: "previousCheckoutStep"
            });

            document.location.href += "/wstecz";
        };

        return OraPageActions;
    }({});

    var _default = OraPageActions;
    _exports.default = _default;
});
//# sourceMappingURL=OraPageActions.js.map