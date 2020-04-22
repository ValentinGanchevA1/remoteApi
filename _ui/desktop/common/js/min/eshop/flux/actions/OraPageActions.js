define(["exports", "./OraActionKeys", "eshop/flux/dispatcher/OraDispatcher"], function(e, o, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, o = babelHelpers.interopRequireDefault(o), a = babelHelpers.interopRequireDefault(a);
    var t, c = ((t = {}).offerConfigurator = function(e, t) {
        e = e || openConfiguratorSection, a.default.dispatch({
            type: o.default.PAGE_REDIRECT,
            page: t
        }), document.location.href = bsfContextPath + "/" + t + (e ? "?section=" + e : "")
    }, t.pageRedirect = function(e) {
        a.default.dispatch({
            type: o.default.PAGE_REDIRECT,
            page: "pageRedirect"
        }), document.location.href = bsfContextPath + e
    }, t.pageRedirectAbsolute = function(e) {
        a.default.dispatch({
            type: o.default.PAGE_REDIRECT,
            page: "pageRedirect"
        }), document.location.href = e
    }, t.checkout = function() {
        a.default.dispatch({
            type: o.default.PAGE_REDIRECT,
            page: "checkout"
        }), document.location.href = bsfContextPath + "/koszyk"
    }, t.checkoutFix = function() {
        a.default.dispatch({
            type: o.default.PAGE_REDIRECT,
            page: "checkoutFix"
        }), document.location.href = bsfContextPath + "/internetdomowy/twojkoszyk"
    }, t.nextCheckoutStep = function() {
        a.default.dispatch({
            type: o.default.PAGE_REDIRECT,
            page: "nextCheckoutStep"
        }), document.location.href += "/dalej"
    }, t.previousCheckoutStep = function() {
        a.default.dispatch({
            type: o.default.PAGE_REDIRECT,
            page: "previousCheckoutStep"
        }), document.location.href += "/wstecz"
    }, t);
    e.default = c
});
//# sourceMappingURL=OraPageActions.js.map