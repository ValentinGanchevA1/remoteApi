var PTK;
if (typeof PTK == "undefined") {
    PTK = {}
}
if (typeof PTK.SessionSustainer == "undefined") {
    PTK.SessionSustainer = {};
    PTK.SessionSustainer = {
        init: function(b) {
            var a = this;
            this.defaults = {
                sessionsDuration: 10 * 60,
                sessionsExtensionsNumber: 3,
                requestTime: 30,
                showExpiredPopupFlag: true,
                sessionsExtensionsUrl: "",
                expiredPopupUrl: "",
                expiredPopupRequestTime: 30
            };
            this.options = {};
            this.options = Object.extend(this.defaults, b);
            if (this.options.sessionsExtensionsNumber > 0) {
                this.requestCounter = 0;
                this.sessionsExtensionsRequestTime = this.options.sessionsDuration - this.options.requestTime;
                this.initializeSessionSustainer()
            } else {
                a.startPopupTimeout(a.options.sessionsDuration + a.options.expiredPopupRequestTime)
            }
        },
        initializeSessionSustainer: function() {
            var a = this;
            if (typeof PeriodicalExecuter != "undefined" && this.options.sessionsExtensionsUrl && this.options.sessionsExtensionsUrl != "") {
                new PeriodicalExecuter(function(b) {
                    if (a.requestCounter == a.options.sessionsExtensionsNumber) {
                        b.stop();
                        a.startPopupTimeout(a.options.requestTime + a.options.expiredPopupRequestTime)
                    } else {
                        new Ajax.Request(a.options.sessionsExtensionsUrl);
                        a.requestCounter++
                    }
                }, a.sessionsExtensionsRequestTime)
            }
        },
        startPopupTimeout: function(a) {
            if (this.options.showExpiredPopupFlag) {
                this.expiredPopupTimeout = setTimeout("PTK.SessionSustainer.showExpiredPopup()", a * 1000)
            }
        },
        showExpiredPopup: function() {
            clearTimeout(this.expiredPopupTimeout);
            var a = this;
            if (this.options.expiredPopupUrl && this.options.expiredPopupUrl != "") {
                new Ajax.Request(this.options.expiredPopupUrl, {
                    onSuccess: function(d) {
                        var f = d.responseText.split("<!--@@@@@@-->"),
                            e = "" + f[0].stripScripts();
                        e = e.replace(/^\s*|\s*$/g, "");
                        if (e != "") {
                            var c = $("portal-box");
                            if (!c) {
                                c = $$("body")[0]
                            }
                            var b = new Element("div", {
                                id: "popup-sessions-expired",
                                "class": "popup-sessions-expired clr"
                            }).update(d.responseText);
                            c.insert({
                                top: b
                            });
                            b.scrollTo();
                            b.on("click", ".popup-close", function(g) {
                                b.remove()
                            })
                        }
                    }
                })
            }
        }
    }
};