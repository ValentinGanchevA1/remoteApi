define("plugins/custom-forms-css3", ["require", "common/basePlugin", "adapter/jsClass", "adapter/enumerable", "adapter/dom", "pubsub", "common/custom-checkbox-css3", "common/utils"], function(e) {
    var t = e("common/basePlugin"),
        n = e("adapter/jsClass"),
        r = e("adapter/enumerable"),
        i = e("adapter/dom"),
        s = e("pubsub"),
        o = e("common/custom-checkbox-css3"),
        u = e("common/utils"),
        a = n.Class(t, {
            constructor: function(e, t, n, s) {
                this.context = i.find("#" + this.modId), this.context.length || (this.context = i.find("body")), u.browser.features.supportsSelector(":not(:checked)") || (a.$super.call(this, e, t, n, s), this.settings = r.defaults(this.options, {
                    checkboxSelector: 'input[type="checkbox"], input[type="radio"]'
                }), this.init()), this.androidCustomCheckboxRender()
            },
            init: function() {
                this.elements = [], this.customElements = [], this.initCustomFormsInContext(this.context), this.subscribeToDomUpdate()
            },
            initCustomFormsInContext: function(e) {
                var t = i.find(this.settings.checkboxSelector, e);
                r.each(t, function(e, t) {
                    var n = i.identify(e),
                        r = new o(n);
                    this.customElements.push(r)
                }, this)
            },
            handleDomUpdate: function(e, t) {
                this.initCustomFormsInContext(t.update)
            },
            subscribeToDomUpdate: function() {
                s.subscribe(ns.events.domUpdate, this.handleDomUpdate.bind(this))
            },
            androidCustomCheckboxRender: function() {
                /(Android).*(Version)/.test(navigator.userAgent) && (i.on(this.context, "change", "input:checkbox", function() {
                    var e = $(this).parent();
                    e.addClass("checkedfix"), setTimeout(function() {
                        e.removeClass("checkedfix")
                    }, 100)
                }), i.on(this.context, "change", "input:radio", function() {
                    var e = i.find("input:radio");
                    r.each(e, function(e) {
                        var t = $(e).parent();
                        t.addClass("checkedfix"), setTimeout(function() {
                            t.removeClass("checkedfix")
                        }, 100)
                    })
                }))
            }
        });
    return a
});