define(["exports"], function(t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var n, e = ((n = {})._afterActions = n._afterActions || {}, n.after = function(t) {
        return n._afterActions[t] = n._afterActions[t] || [], e = t, {
            doAction: function(t) {
                n._afterActions[e].push(t)
            }
        };
        var e
    }, n._executeAfter = function(t) {
        n._afterActions[t] && n._afterActions[t].forEach(function(t) {
            return t()
        })
    }, n.unregisterAfter = function(t, e) {
        n._afterActions[t] && (n._afterActions[t] = n._afterActions[t].filter(function(t) {
            return t !== e
        }))
    }, n);
    t.default = e
});
//# sourceMappingURL=OraMetaActions.js.map