define("common/custom-checkbox-css3", ["require", "adapter/dom", "pubsub", "adapter/jsClass", "adapter/enumerable"], function(e) {
    var t = e("adapter/dom"),
        n = e("pubsub"),
        r = e("adapter/jsClass"),
        i = e("adapter/enumerable"),
        s = r.Class({
            radiogroupPrefix: "radiogroup-",
            constructor: function(e, n) {
                this.classNs = config.namespace, this.defaults = {
                    checkedClass: this.classNs + "-checked",
                    notCheckedClass: this.classNs + "-not-checked",
                    disabledClass: this.classNs + "-disabled",
                    focusClass: this.classNs + "-focused"
                }, this.opts = i.defaults(this.defaults, n), this.input = t.find("#" + e)[0];
                if (!this.input) return;
                this.inputType = this.input.type.toLowerCase(), this.customInput = null, this.createCheckboxHtml(), this.changeState(this.input.checked, this.input.disabled, !1, !0), this.initObservers()
            },
            createCheckboxHtml: function() {
                var e = this,
                    n = this.opts,
                    r = "-" + this.classNs + "-" + e.inputType,
                    i = this.classNs + "-custom-input " + this.classNs + "-" + e.inputType + " " + (t.getClass(e.input) || ""),
                    s = '<span id="' + this.input.id + r + '" class="' + i + '"><span class="' + this.classNs + "-" + e.inputType + '-inner"><span></span></span></span>',
                    o = this.getLabel(this.input.id),
                    u = t.siblings(this.input, !1, "span");
                u.length > 0 ? t.append(u[0], s, "replace") : t.append(this.input, s, "after"), this.customInput = t.find("#" + this.input.id + r)[0], t.addClass(o, this.classNs + "-input-label"), t.addClass(this.input, "reader-only")
            },
            initObservers: function() {
                t.on(this.customInput, "click", this.onCustomInputClick.bind(this)), t.on(this.input, "change", this.onInputChange.bind(this)), t.on(this.input, "focus", this.onInputFocus.bind(this)), t.on(this.input, "blur", this.onInputBlur.bind(this))
            },
            onInputChange: function(e) {
                this.changeState(this.input.checked, this.input.disabled, !0)
            },
            onCustomInputClick: function(e) {
                if (this.input.disabled) return;
                t.trigger(this.input, "change")
            },
            changeState: function(e, n, r, s) {
                var o = this;
                n = n || !1, e ? t.addClass(this.customInput, this.opts.checkedClass) : t.removeClass(this.customInput, this.opts.checkedClass), n ? t.addClass(this.customInput, this.opts.disabledClass) : t.removeClass(this.customInput, this.opts.disabledClass);
                if (this.inputType === "radio") {
                    var u = t.find('input:radio[name="' + this.input.name + '"]');
                    i.each(u, function(n) {
                        if (n.id != this.input.id && e) {
                            n.checked = !1;
                            var r = t.nextAll(n, "span");
                            r.length && r.length > 0 && t.removeClass(r[0], o.opts.checkedClass)
                        }
                    }, this)
                }
                s || t.trigger(this.input, ns.events.customCheckboxChange, {
                    checked: e,
                    disabled: n,
                    input: this.input
                })
            },
            onInputFocus: function(e) {
                t.addClass(this.customInput, this.opts.focusClass)
            },
            onInputBlur: function(e) {
                t.removeClass(this.customInput, this.opts.focusClass)
            },
            getLabel: function(e) {
                var n = t.find('label[for="' + e + '"]')[0];
                return n
            }
        });
    return s
});