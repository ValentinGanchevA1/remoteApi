var PTK;
if (typeof PTK == "undefined") {
    PTK = {}
}
if (typeof PTK.InputHint == "undefined") {
    PTK.InputHint = {};
    PTK.InputHint = Class.create({
        defaults: {
            offsetLeft: 0,
            offsetTop: 0,
            italics: false
        },
        options: {},
        initialize: function(c, d) {
            var b = this;
            this.defaults = {
                offsetLeft: 0,
                offsetTop: 0,
                toPlaceholder: false
            };
            this.options = Object.extend(this.defaults, d);
            var a = $(document.body).hasClassName("ie8") || $(document.body).hasClassName("ie9") ? true : false;
            if (!c) {
                c = $$("input.hint")
            }
            if (!c.length) {
                c = [c]
            }
            if (!this.options.toPlaceholder || a) {
                c.each(function(e, f) {
                    b.titleHint(e, f)
                })
            } else {
                c.each(function(e, f) {
                    b.placeholderHint(e, f)
                })
            }
        },
        titleHint: function(b, d) {
            var a = this;
            b.identify();
            var c = a.createLabel(b);
            if (b.getValue() === "" && b !== document.activeElement) {
                c.removeClassName("accessible-hide")
            }
            b.observe("blur", a.blurHandler.bindAsEventListener(a));
            b.observe("focus", a.onFocusHandler.bindAsEventListener(a));
            b.observe("input", a.onFocusHandler.bindAsEventListener(a));
            b.observe("keydown", a.onFocusHandler.bindAsEventListener(a))
        },
        placeholderHint: function(a, c) {
            var b = a.readAttribute("title");
            placeholderAttr = a.readAttribute("placeholder");
            if (b && b != "") {
                a.writeAttribute("placeholder", b);
                a.writeAttribute("title", "")
            }
        },
        getLabel: function(a) {
            return $("label-" + a)
        },
        blurHandler: function(b) {
            var a = this;
            if (this.options.blurCallbackDeley > 0) {
                setTimeout(function() {
                    a.onInputBlur(b)
                }, this.options.blurCallbackDeley)
            } else {
                this.onInputBlur(b)
            }
        },
        onInputBlur: function(a) {
            if (a.target.getValue() === "") {
                this.getLabel(a.target.id).removeClassName("accessible-hide");
                a.target.removeClassName("ptk-inputhint-notempty")
            } else {
                a.target.addClassName("ptk-inputhint-notempty")
            }
            a.target.removeClassName("ptk-inputhint-focused")
        },
        onFocusHandler: function(a) {
            this.getLabel(a.target.id).addClassName("accessible-hide");
            a.target.addClassName("ptk-inputhint-focused")
        },
        createLabel: function(d) {
            var e = new Element("label", {
                "for": d.id,
                id: "label-" + d.id,
                "class": "ptk-inputhint-label"
            }).update(d.readAttribute("title"));
            d.insert({
                after: e
            });
            e.clonePosition(d, {
                offsetLeft: this.options.offsetLeft,
                offsetTop: this.options.offsetTop
            });
            var i = d.getStyle("paddingLeft").slice(0, -2);
            if (i > 0) {
                var g = e.getStyle("left").slice(0, -2);
                var a = e.getStyle("width").slice(0, -2);
                var c = Math.max(0, (parseInt(g) + parseInt(i)));
                var b = Math.max(0, (parseInt(a) - parseInt(i)));
                e.setStyle({
                    left: c + "px",
                    width: b + "px"
                })
            }
            var f = e.getHeight();
            e.setStyle({
                lineHeight: f + "px"
            });
            if (this.options.italics) {
                e.setStyle({
                    fontStyle: "italic"
                })
            }
            e.addClassName("accessible-hide");
            return e
        }
    })
};