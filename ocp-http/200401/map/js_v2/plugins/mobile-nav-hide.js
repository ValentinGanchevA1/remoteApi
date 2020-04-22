define("plugins/mobile-nav-hide", ["require", "common/basePlugin", "adapter/jsClass", "adapter/dom", "adapter/enumerable"], function(e) {
    var t = e("common/basePlugin"),
        n = e("adapter/jsClass"),
        r = e("adapter/dom"),
        i = e("adapter/enumerable"),
        s = n.Class(t, {
            constructor: function(e, t, n, r) {
                var o = {
                    checkbox: !1,
                    navContainer: !1
                };
                this.settings = i.defaults(r, o), s.$super.call(this, e, t, n, r), this.init()
            },
            init: function() {
                this.settings.checkbox && this.settings.navContainer && r.on("#" + this.settings.checkbox, "change", function() {
                    r.getProperty("#" + this.settings.checkbox, "checked") ? (r.on("html", "touchstart touchend", function() {
                        r.getProperty("#" + this.settings.checkbox, "checked") && (r.setProperty("#" + this.settings.checkbox, "checked", !1), r.off("html", "click"))
                    }.bind(this)), r.on(this.settings.navContainer + ', label[for="' + this.settings.checkbox + '"], #' + this.settings.checkbox, "touchstart touchend", function(e) {
                        e.stopPropagation()
                    })) : r.off("html", "click")
                }.bind(this))
            }
        });
    return s
});