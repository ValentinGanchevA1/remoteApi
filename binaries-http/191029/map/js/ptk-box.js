var PTK;
if (typeof PTK == "undefined") {
    PTK = {}
}
if (typeof PTK.Box == "undefined") {
    PTK.Box = {
        init: function(c, b) {
            if (this.ie == 8 || this.ie == 9) {
                var a = $$(c);
                this.opts = b || {};
                this.opts.boxClass = this.opts.boxClass || "opl-box__content";
                this.opts.addClass = this.opts.addClass || "js-initialized-height";
                a.each(function(d) {
                    this.boxes = d.select("." + this.opts.boxClass);
                    this.findMaxHeight();
                    this.setMaxHeight();
                    d.addClassName(this.opts.addClass)
                }, this)
            }
        },
        findMaxHeight: function() {
            this.maxHeight = 0;
            this.boxes.each(function(a) {
                if (a.offsetHeight > this.maxHeight) {
                    this.maxHeight = a.offsetHeight
                }
            }, this)
        },
        setMaxHeight: function() {
            this.boxes.each(function(a) {
                a.setStyle({
                    height: this.maxHeight + "px"
                })
            }, this)
        },
        ie: (function() {
            var c = 3,
                d = document.createElement("div"),
                b = d.all || [];
            while (d.innerHTML = "<!--[if gt IE " + (++c) + "]><br><![endif]-->", b[0]) {}
            return c > 4 ? c : !c
        }())
    }
};