var PTK;
if (typeof PTK == "undefined") {
    PTK = {}
}
if (typeof PTK.CustomCheckboxCss3 == "undefined") {
    PTK.CustomCheckboxCss3 = {};
    PTK.CustomCheckboxCss3 = Class.create({
        classNs: "PTK",
        initialize: function(a, b) {
            this.opts = b || {};
            this.opts.checkedClass = this.opts.checkedClass || this.classNs + "-checked";
            this.opts.notCheckedClass = this.opts.notCheckedClass || this.classNs + "-not-checked";
            this.opts.disabledClass = this.opts.disabledClass || this.classNs + "-disabled";
            this.opts.focusClass = this.opts.focusClass || this.classNs + "-focused";
            this.input = $(a);
            if (!this.input) {
                return
            }
            this.inputType = this.input.type.toLowerCase();
            this.customInput = null;
            this.createCheckboxHtml();
            this.changeState(this.input.checked, this.input.disabled, false, true);
            this.initObservers()
        },
        createCheckboxHtml: function() {
            var g = "-" + this.classNs + "-" + this.inputType,
                b = this.input.id + g,
                d = this.classNs + "-custom-input " + this.classNs + "-" + this.inputType + " " + (this.input.readAttribute("class") || ""),
                a = '<span id="' + b + '" class="' + d + '"><span class="' + this.classNs + "-" + this.inputType + '-inner"><span></span></span></span>',
                c = this.getLabel(this.input.id);
            var f = Prototype.Selector.select("span", this.input.up()),
                e;
            if (f.length > 0) {
                f[0].replace(a);
                e = f[0].readAttribute("style")
            } else {
                this.input.insert({
                    after: a
                })
            }
            this.customInput = $(b);
            if (e) {
                this.customInput.writeAttribute("style", e)
            }
            c.addClassName(this.classNs + "-input-label");
            this.input.addClassName("reader-only")
        },
        initObservers: function() {
            this.input.observe("click", function() {
                this.blur();
                this.focus()
            });
            this.input.observe("change", this.onInputChange.bind(this));
            this.input.observe("focus", this.onInputFocus.bind(this));
            this.input.observe("blur", this.onInputBlur.bind(this))
        },
        onInputChange: function(a) {
            this.changeState(this.input.checked, this.input.disabled, true)
        },
        changeState: function(a, d, b, e) {
            d = d || false;
            if (a) {
                this.customInput.addClassName(this.opts.checkedClass)
            } else {
                this.customInput.removeClassName(this.opts.checkedClass)
            }(d) ? this.customInput.addClassName(this.opts.disabledClass): this.customInput.removeClassName(this.opts.disabledClass);
            if (this.inputType === "radio") {
                var c = $$('input:radio[name="' + this.input.name + '"]');
                c.each(function(f) {
                    if (f.id != this.input.id && a) {
                        f.checked = false;
                        f.next("span").removeClassName(this.opts.checkedClass)
                    }
                }, this)
            }
        },
        onInputFocus: function(a) {
            this.customInput.addClassName(this.opts.focusClass)
        },
        onInputBlur: function(a) {
            this.customInput.removeClassName(this.opts.focusClass)
        },
        getLabel: function(a) {
            var b = $$('label[for="' + a + '"]')[0];
            return b
        },
    })
}
if (typeof PTK.CustomCheckboxIe8 == "undefined") {
    PTK.CustomCheckboxIe8 = {
        init: function(c, b) {
            if (!(this.supportsSelector(":not(:checked)"))) {
                var a = {
                    containerSelector: "body"
                };
                var e = 'input[type="' + c + '"]';
                this.options = Object.extend(a, b);
                this.container = $$(this.options.containerSelector);
                if (this.container.length && this.container[0]) {
                    var d = this.container[0].select(e);
                    d.each(function(h) {
                        var f = h.identify();
                        var g = h.up('label[for="' + f + '"]');
                        if (!g || g.length == 0) {
                            g = h.up("label");
                            if (g) {
                                g.setAttribute("for", f)
                            }
                        }
                        if (g) {
                            new PTK.CustomCheckboxCss3(f)
                        }
                    })
                }
            }
        },
        supportsSelector: function(b) {
            var e = document,
                d = e.createElement("style"),
                a = false,
                c;
            d.type = "text/css";
            if (d.styleSheet) {
                d.styleSheet.cssText = b + "{}";
                c = d.styleSheet.rules;
                a = (c && !!c.length && c[0].selectorText && c[0].selectorText.toLowerCase().indexOf("unknown") < 0)
            } else {
                d.appendChild(e.createTextNode(b + "{}"));
                e.body.appendChild(d);
                a = !!d.sheet.cssRules.length;
                e.body.removeChild(d)
            }
            d = null;
            return a
        },
    }
};