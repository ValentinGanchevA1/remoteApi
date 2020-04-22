define("plugins/floating-label", ["require", "common/basePlugin", "adapter/jsClass", "adapter/enumerable", "adapter/dom"], function(e) {
    var t = e("common/basePlugin"),
        n = e("adapter/jsClass"),
        r = e("adapter/enumerable"),
        i = e("adapter/dom"),
        s = n.Class(t, {
            constructor: function(e, t, n, o) {
                var u = {
                    notEmptyClass: "is-not-empty",
                    placeholderClass: "o-floating-label__placeholder"
                };
                this.context = i.find("#" + this.modId), this.context.length || (this.context = i.find("body")), this.settings = r.defaults(o, u), s.$super.call(this, e, t, n, o), this.init()
            },
            init: function() {
                var e = this,
                    t = i.siblings(i.find("." + this.settings.placeholderClass), !1, 'input[type="text"], input[type="password"], textarea');
                r.each(t, function(t, n) {
                    e.checkIfEmpty(t), i.on(t, "blur", null, null, e.handleInputBlur.bind(e)), i.on(t, "change", null, null, e.handleInputBlur.bind(e))
                })
            },
            handleInputBlur: function(e) {
                this.checkIfEmpty(e.target)
            },
            checkIfEmpty: function(e) {
                e.value.trim() !== "" ? i.hasClass(e, this.settings.notEmptyClass) || i.addClass(e, this.settings.notEmptyClass) : i.hasClass(e, this.settings.notEmptyClass) && i.removeClass(e, this.settings.notEmptyClass)
            }
        });
    return s
});