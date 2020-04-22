define("plugins/toggle-class", ["require", "common/basePlugin", "adapter/jsClass", "adapter/dom", "pubsub", "adapter/enumerable"], function(e) {
    var t = e("common/basePlugin"),
        n = e("adapter/jsClass"),
        r = e("adapter/dom"),
        i = e("pubsub"),
        s = e("adapter/enumerable"),
        o = n.Class(t, {
            constructor: function(e, t, n, i) {
                var u = {
                    elementsClass: "togglecheck",
                    initEvent: "click",
                    hideAllToggledInContextOnEvent: !0,
                    noslide: !0,
                    onPopup: !1,
                    bindClass: ""
                };
                this.settings = s.defaults(i, u), this.context = r.find("#" + e), o.$super.call(this, e, t, n, i), this.init()
            },
            init: function() {
                this.elements = r.find("." + this.settings.elementsClass, this.context), this.settings.initEvent != "onstart" ? r.on(this.elements, this.settings.initEvent, null, null, this.handleEvent.bind(this)) : s.each(this.elements, function(e) {
                    this.toggle(e)
                }, this)
            },
            handleEvent: function(e) {
                e.preventDefault(), this.toggle(e.currentTarget)
            },
            toggle: function(e) {
                this.show = r.getData(e, "show"), this.hide = r.getData(e, "hide");
                var t = r.find(this.hide, this.context),
                    n = r.find(this.show, this.context);
                if (this.settings.bindClass) {
                    var i = r.find(r.getData(e, "bind"), this.context);
                    i && this.handleBindClass(i)
                }
                this.show !== this.hide && this.handleElementsInToggle(t), this.handleElementsInToggle(n);
                var s = r.find("input, a", n);
                s.length > 0 && s[0].focus()
            },
            prepareToInlineStyle: function(e) {
                var t = r.filter(e, ".js-hidden, .g-hide");
                t.length > 0 && (r.removeClass(t, "js-hidden"), r.removeClass(t, "g-hide"))
            },
            handleElementsInToggle: function(e) {
                this.settings.onPopup ? r.toggle(e, this.settings.noslide, function() {
                    i.publish(ns.events.ajaxPopupSizeChange)
                }) : r.toggle(e, this.settings.noslide), this.prepareToInlineStyle(e)
            },
            handleBindClass: function(e) {
                r.hasClass(e, this.settings.bindClass) ? r.removeClass(e, this.settings.bindClass) : r.addClass(e, this.settings.bindClass)
            }
        });
    return o
});