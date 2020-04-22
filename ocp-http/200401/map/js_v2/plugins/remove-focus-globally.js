define("plugins/remove-focus-globally", ["require", "common/basePlugin", "adapter/jsClass", "adapter/dom"], function(e) {
    var t = e("common/basePlugin"),
        n = e("adapter/jsClass"),
        r = e("adapter/dom"),
        i = n.Class(t, {
            constructor: function(e, t, n, s) {
                i.$super.call(this, e, t, n, s), r.on("body", "mouseup", "a, input:submit, input:image", function(e) {
                    e.target.blur()
                })
            }
        });
    return i
});