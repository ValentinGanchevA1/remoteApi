define(["exports", "../actionTypes", "../remoteApi", "../validators", "./offers"], function(e, r, a, o, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.showPaymentLink = e.hidePaymentLink = e.changeKnaFormField = e.submitKnaForm = e.closeKnaModal = e.registerKnaModal = e.showKnaModal = void 0, r = babelHelpers.interopRequireWildcard(r), a = babelHelpers.interopRequireDefault(a);
    e.showKnaModal = function(e) {
        var n = !(0 < arguments.length && void 0 !== e) || e;
        return function(e) {
            e(t({
                name: "knaNumber",
                value: void 0
            }, n)), e({
                type: r.SHOW_KNA_MODAL_ACTION
            })
        }
    };
    e.registerKnaModal = function(e) {
        e({
            type: r.REGISTER_KNA_MODAL_ACTION
        })
    };
    e.closeKnaModal = function() {
        return function(e) {
            e({
                type: r.CLOSE_KNA_MODAL_ACTION
            })
        }
    };
    e.submitKnaForm = function(e, t) {
        return function(n) {
            a.default.declareKna(e).then(function(e) {
                return n((0, i.fetchOffers)(t, null, !1, !0, !0))
            }), n({
                type: r.CLOSE_KNA_MODAL_ACTION
            })
        }
    };
    var t = function(t, e) {
        var a = !(1 < arguments.length && void 0 !== e) || e;
        return function(e) {
            var n;
            n = a ? o.knaNumberValidator.knaNumber(t.value) : void 0, e({
                type: r.CHANGE_KNA_FORM_FIELD,
                name: t.name,
                value: t.value,
                errors: n
            })
        }
    };
    e.changeKnaFormField = t;
    e.hidePaymentLink = function() {
        return function(e) {
            e({
                type: r.HIDE_PAYMENT_LINK_COMPONENT
            })
        }
    };
    e.showPaymentLink = function() {
        return function(e) {
            e({
                type: r.SHOW_PAYMENT_LINK_COMPONENT
            })
        }
    }
});
//# sourceMappingURL=kna.js.map