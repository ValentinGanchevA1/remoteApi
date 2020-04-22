define(["exports", "react-dom"], function(o, a) {
    "use strict";
    Object.defineProperty(o, "__esModule", {
        value: !0
    }), o.default = void 0, a = babelHelpers.interopRequireDefault(a), window.oraModalService = window.oraModalService || {
        modals: {},
        showing: null
    };
    var r = a.default.version.startsWith("0.");

    function t() {
        var o = window.oraModalService.showing;
        o.onClose && setTimeout(o.onClose, 0), window.oraModalService.showing = null
    }
    var e = {
        add: function(o) {
            var e, n, d = window.oraModalService.modals,
                l = o({}),
                i = l.props.id,
                r = (e = i, (n = document.getElementById("modal-" + e)) || ((n = document.createElement("div")).id = "modal-" + e, n.className = "u-hide", document.body.appendChild(n)), n);
            d[i] = {
                id: i,
                component: o,
                root: r,
                onClose: l.props.onClose,
                fallback: "function" == typeof l.props.fallback
            }, OPL.UI.on(OPL.UI.EVENTS.modules.modal.closed, t, i + "-trigger"), a.default.render(l, r, function() {
                OPL.UI.initModules(r)
            })
        },
        open: function(o) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                n = window.oraModalService.modals;
            if (null === window.oraModalService.showing) {
                var d, l, i = n[o];
                i && (r && i.fallback ? i.component(e).props.fallback() : (d = i, l = e, window.oraModalService.showing = d, a.default.render(d.component(l), d.root, function() {
                    OPL.UI.fire(OPL.UI.EVENTS.modules.modal.open, "", d.id + "-trigger")
                })))
            }
        },
        close: function() {
            var e = window.oraModalService.showing;
            return null === e ? Promise.resolve() : new Promise(function(n, o) {
                OPL.UI.on(OPL.UI.EVENTS.modules.modal.closed, function o(e) {
                    OPL.UI.off(OPL.UI.EVENTS.modules.modal.closed, o, e), n()
                }, e.id + "-trigger"), OPL.UI.fire(OPL.UI.EVENTS.modules.modal.close, "", e.id + "-trigger")
            })
        }
    };
    o.default = e
});
//# sourceMappingURL=OraModalService.js.map