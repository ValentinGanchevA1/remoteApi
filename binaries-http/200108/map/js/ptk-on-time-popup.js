var PTK;
if (typeof PTK == "undefined") {
    PTK = {}
}
if (typeof PTK.OnTimePopup == "undefined") {
    PTK.OnTimePopup = Class.create({
        initialize: function(b) {
            this.defaults = {
                timeToShow: 300,
                pageDoNothingDelayTime: 0,
                popupUrl: "",
                popupId: "on-time-popup",
                popupClassName: "popup-js",
                curtainClassName: "",
                onlyOnePopup: true
            };
            this.options = Object.extend(this.defaults, b);
            var a = this;
            this.externalShowingPopupFlag = true;
            this.startCountTimeToShow();
            this.startCountDoingNothing();
            this.startObserveDelay()
        },
        startCountTimeToShow: function() {
            var a = this;
            if (this.options.timeToShow && this.options.timeToShow > 0) {
                this.popupTimeout = setTimeout(function() {
                    a.showPopup()
                }, this.options.timeToShow * 1000)
            }
        },
        startCountDoingNothing: function() {
            var a = this;
            if (this.options.pageDoNothingDelayTime && this.options.pageDoNothingDelayTime > 0) {
                this.popupDelayTimeout = setTimeout(function() {
                    a.showPopup()
                }, this.options.pageDoNothingDelayTime * 1000)
            }
        },
        startObserveDelay: function() {
            if (this.options.pageDoNothingDelayTime && this.options.pageDoNothingDelayTime > 0) {
                this.body = $$("body")[0];
                this.bodyObserveHandler = this.handleUserAction.bind(this);
                this.body.observe("keydown", this.bodyObserveHandler);
                this.body.observe("mousemove", this.bodyObserveHandler);
                this.body.observe("mousedown", this.bodyObserveHandler)
            }
        },
        handleUserAction: function() {
            var a = this;
            this.clearDelayPopupTimeout();
            this.startCountDoingNothing()
        },
        showPopup: function() {
            this.stopObserveBody();
            this.clearPopupTimeout();
            this.clearDelayPopupTimeout();
            var a = this,
                b = true;
            if (this.options.onlyOnePopup && $(this.options.popupId)) {
                b = false
            }
            if (this.options.popupUrl && this.options.popupUrl != "" && b && this.externalShowingPopupFlag) {
                new Ajax.Request(this.options.popupUrl, {
                    onSuccess: function(d) {
                        if (a.externalShowingPopupFlag) {
                            var h = d.responseText.split("<!--@@@@@@-->"),
                                g = "" + h[0].stripScripts();
                            g = g.replace(/^\s*|\s*$/g, "");
                            if (g != "") {
                                var f = a.options.popupId,
                                    c = new Element("div", {
                                        id: f,
                                        "class": f + " clr"
                                    }).update(d.responseText),
                                    i, e;
                                PTK.Ajax.popupOpen(f, a.options.curtainClassName, a.options.popupClassName);
                                i = $(f + "-popup");
                                e = $(f + "-popup-curtain");
                                i.insert(c);
                                a.setPopupPosition(c);
                                Event.observe(window, "resize", function() {
                                    a.setPopupPosition(c)
                                });
                                c.on("click", ".popup-close", a.closePopup.bindAsEventListener(a));
                                if (e) {
                                    e.on("click", a.closePopup.bindAsEventListener(a))
                                }
                            }
                        }
                    }
                })
            }
        },
        closePopup: function(a) {
            Event.stop(a);
            PTK.Ajax.popupClose(this.options.popupId + "-popup")
        },
        setPopupPosition: function(a) {
            var c = (document.viewport.getWidth() - a.getWidth()) / 2,
                b = (document.viewport.getHeight() - a.getHeight()) / 2;
            a.setStyle({
                left: c + "px",
                top: b + "px"
            })
        },
        clearPopupTimeout: function() {
            if (this.popupTimeout) {
                clearTimeout(this.popupTimeout)
            }
        },
        clearDelayPopupTimeout: function() {
            if (this.popupDelayTimeout) {
                clearTimeout(this.popupDelayTimeout)
            }
        },
        stopObserveBody: function() {
            if (this.bodyObserveHandler && this.body) {
                this.body.stopObserving("keydown", this.bodyObserveHandler);
                this.body.stopObserving("mousemove", this.bodyObserveHandler);
                this.body.stopObserving("mousedown", this.bodyObserveHandler)
            }
        }
    })
};