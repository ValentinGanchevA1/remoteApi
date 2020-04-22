define("plugins/footer-fixed", ["require", "common/basePlugin", "adapter/jsClass", "adapter/enumerable", "adapter/dom", "pubsub"], function(e) {
    var t = e("common/basePlugin"),
        n = e("adapter/jsClass"),
        r = e("adapter/enumerable"),
        i = e("adapter/dom"),
        s = e("pubsub"),
        o = n.Class(t, {
            constructor: function(e, t, n, s) {
                var o = {
                    element: "#ofin-footer",
                    trigger: "#show-footer-link",
                    parentEl: "#footer",
                    copyright: "#copyright"
                };
                this.settings = r.defaults(s, o), this.element = i.find(this.settings.element), this.trigger = i.find(this.settings.trigger), this.parentEl = i.find(this.settings.parentEl), this.copyright = i.find(this.settings.copyright), this.copyrightHeight = 0;
                if (!(this.element && this.element.length && this.element[0]) || !(this.trigger && this.trigger.length && this.trigger[0]) || !(this.parentEl && this.parentEl.length && this.parentEl[0]) || !(this.copyright && this.copyright.length && this.copyright[0])) {
                    this.setInitError(e, t, n, s, "nie znaleziono elementow potrzebnych do dzialania stopki.");
                    return
                }
                this.init()
            },
            init: function(e, t, n) {
                i.height("body") > i.height(window) && (this.setStaticPosition(), this.onWindowScroll(), this.getHeightFooter(), i.on(window, "scroll", null, null, this.onWindowScroll.bind(this)), i.on(window, "resize", null, null, this.onWindowResize.bind(this)), i.on(this.trigger, "click", null, this.observeChangeHeight.bind(this)))
            },
            setStaticPosition: function() {
                var e = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                e > 767 ? (this.copyrightHeight = i.outerHeight(this.copyright), this.copyrightHeight > 0 && (i.css(this.copyright, {
                    bottom: "-" + this.copyrightHeight + "px",
                    position: "absolute",
                    width: "100%"
                }), i.css(this.parentEl, {
                    "margin-bottom": this.copyrightHeight + "px",
                    position: "relative"
                }))) : (i.removeAttribute(this.copyright, "style"), i.removeAttribute(this.parentEl, "style"))
            },
            onWindowScroll: function(e) {
                var t = i.find("body"),
                    n = i.pageScrollTop() + i.height(window),
                    r = i.height(t) - this.copyrightHeight;
                n >= r ? i.removeClass(this.element, "footer-fixed") : i.addClass(this.element, "footer-fixed")
            },
            onWindowResize: function(e) {
                this.setStaticPosition()
            },
            observeChangeHeight: function(e) {
                var t = this.trigger,
                    n = "",
                    r = this;
                i.hasClass(t, "ico-show") ? n = !0 : n = !1, window.changeHeight = setInterval(function() {
                    if (n == 0 && i.hasClass(t, "ico-show") || n == 1 && !i.hasClass(t, "ico-show")) clearInterval(window.changeHeight), r.getHeightFooter()
                }, 100)
            },
            getHeightFooter: function() {
                i.css(this.parentEl, {
                    height: i.height(this.element)
                })
            }
        });
    return o
});