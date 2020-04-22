define(["exports"], function(e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.groupChannelsByCategories = void 0;
    e.groupChannelsByCategories = function(e) {
        var t = {};
        return e.forEach(function(e) {
            var n = e.categoryList,
                s = Object.keys(n)[0];
            Object.keys(t).includes(s) || (t[s] = {
                label: n[s],
                channels: []
            }), t[s].channels.push(e)
        }), t
    }
});
//# sourceMappingURL=TvChannelUtils.js.map