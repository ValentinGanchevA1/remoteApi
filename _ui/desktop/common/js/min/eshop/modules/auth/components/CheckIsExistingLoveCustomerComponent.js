define(["exports", "react", "prop-types"], function(e, a, l) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, a = babelHelpers.interopRequireDefault(a), l = babelHelpers.interopRequireDefault(l);

    function t(e) {
        return a.default.createElement("div", {
            className: "u-padding-top"
        }, a.default.createElement("p", {
            className: "u-margin-l"
        }, a.default.createElement("span", {
            className: "u-font-bold"
        }, "Tak - świetnie!"), " W kolejnym kroku sprawdzimy, czy Twój numer jest już ", a.default.createElement("br", {
            className: "u-large-hide"
        }), " w Love dla firm."), a.default.createElement("p", null, a.default.createElement("span", {
            className: "u-font-bold"
        }, "Jeszcze nie -"), " w kolejnym kroku skomponuj swój pakiet. Możesz też zostawić swój numer,", a.default.createElement("br", {
            className: "u-small-hide"
        }), " a my oddzwonimy, by porozmawiać o ofercie."), a.default.createElement("div", {
            className: "l-row"
        }, a.default.createElement("div", {
            className: "l-col l-col-6 l-col-small-12 u-padding-top-l"
        }, a.default.createElement("button", {
            id: "continue",
            onClick: e.hasNoAccount,
            className: "o-btn opl-btn opl-btn--secondary u-w-100"
        }, "Nie mam")), a.default.createElement("div", {
            className: "l-col l-col-6 l-col-small-12 u-padding-top-l"
        }, a.default.createElement("button", {
            id: "stay",
            onClick: e.logIn,
            className: "o-btn opl-btn opl-btn--secondary u-w-100"
        }, "Tak, mam abonament"))))
    }
    t.propTypes = {
        hasNoAccount: l.default.func,
        logIn: l.default.func
    };
    var n = t;
    e.default = n
});
//# sourceMappingURL=CheckIsExistingLoveCustomerComponent.js.map