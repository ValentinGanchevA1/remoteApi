define("plugins/comscore", ["require", "common/basePlugin", "adapter/jsClass", "adapter/dom", "adapter/enumerable"], function(e) {
    var t = e("common/basePlugin"),
        n = e("adapter/jsClass"),
        r = e("adapter/dom"),
        i = e("adapter/enumerable"),
        s = n.Class(t, {
            comscoreCookieName: "comScore_cookie",
            enterParam: "c1=2",
            clickParam: "c1=22",
            clientData: "c2=5641052",
            replacementChars: {
                "ą": "a",
                "Ą": "A",
                "ś": "s",
                "Ś": "S",
                "Ź": "Z",
                "ź": "z",
                "Ż": "Z",
                "ż": "z",
                "Ś": "S",
                "ś": "s",
                "Ę": "E",
                "ę": "e",
                "Ć": "C",
                "ć": "c",
                "Ń": "N",
                "ń": "n",
                "Ó": "O",
                "ó": "o",
                "Ł": "L",
                "ł": "l",
                " ": "_"
            },
            supportedCharacters: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-._",
            constructor: function(e, t, n, o) {
                this.element = r.find("#" + e)[0];
                if (!this.element) {
                    this.setInitError(e, t, n, o, "nie znaleziono elementu DOM dla comscore.");
                    return
                }
                s.$super.call(this, e, t, n, o);
                var u = {
                    params: null,
                    makeClick: !1,
                    getClick: !1,
                    enter: !1,
                    forceClick: !1,
                    createParams: !0
                };
                this.settings = i.defaults(o, u), this.params = "", this.settings.createParams ? this.createParams() : this.params = this.settings.params, this.settings.makeClick && this.comScore_makeClick(), this.settings.getClick && this.comScore_getClick(), this.settings.enter && this.comScore_enter(), this.subscribe("refresh-params", this.refreshParamsHandler.bind(this))
            },
            createParams: function() {
                var e = "";
                this.settings.params && (i.each(this.settings.params, function(t, n) {
                    var r = "",
                        s = "";
                    t.indexOf("http") == -1 ? i.each(t, function(e) {
                        var t = this.replacementChars[e] ? this.replacementChars[e] : e;
                        r += this.isSupportedChar(t) ? t : ""
                    }, this) : r = encodeURIComponent(t), s = n + "=" + r, e += e == "" ? s : "&" + s
                }, this), this.params = e)
            },
            isSupportedChar: function(e) {
                var t = -1;
                return !e || typeof e != "string" ? !1 : (t = this.supportedCharacters.indexOf(e), t > -1 ? !0 : !1)
            },
            refreshParamsHandler: function(e, t) {
                t && t.element.id == this.element.id && r.hasClass(t.element, "to-refresh") && this.createParams()
            },
            handleEvent: function(e) {
                if (e.type == "click") {
                    var t = e.currentTarget;
                    window[this.modId + "--ajaxify"] || t.type != "submit" && t.type != "image" && !t.href || this.settings.forceClick ? this.comScore_makeClick(this.params) : this.comScore_createCookie(this.comscoreCookieName, this.params, 15)
                } else this.comScore_makeClick(this.params)
            },
            handleSubscribedEvent: function(e, t) {
                t && this.element.id == t.id && r.hasClass(t, "comscore-clicked") && (r.removeClass(t, "comscore-clicked"), this.comScore_makeClick(this.params))
            },
            comScore_getClick: function() {
                var e = this.modId,
                    t = document.getElementById(e);
                t && (this.eventHandler = this.handleEvent.bind(this), this.settings.eventName ? (r.on(t, this.settings.eventName, null, this.eventHandler), this.subscribedEventHandler = this.subscribe(this.settings.eventName, this.handleSubscribedEvent.bind(this))) : r.on(t, "click", null, this.eventHandler))
            },
            comScore_makeClick: function() {
                this.udm_("http" + (document.location.href.charAt(4) == "s" ? "s://sb" : "://b") + ".scorecardresearch.com/p?" + this.clickParam + "&" + this.clientData), ns_pixelUrl = ns_p.src, this.ns_onclick(this, "", this.clickParam + "&" + this.clientData + "&" + this.params, "hidden")
            },
            comScore_enter: function() {
                this.udm_("http" + (document.location.href.charAt(4) == "s" ? "s://sb" : "://b") + ".scorecardresearch.com/p?" + this.enterParam + "&" + this.clientData + "&" + this.params), ns_pixelUrl = ns_p.src
            },
            comScore_createCookie: function(e, t, n) {
                var r = new Date;
                r.setMinutes(r.getMinutes() + n), document.cookie = e + "=" + t + "; expires=" + r.toGMTString() + "; path=/"
            },
            comScore_getCookie: function(e) {
                var t = document.cookie.split(";"),
                    n = "";
                for (var r = 0; r < t.length; r++)
                    if (t[r].search(e + "=") != -1) {
                        var i = t[r].replace(" ", "");
                        return n = i.slice((e + "=").length), n
                    }
                return n
            },
            udm_: function(e) {
                var t = "comScore=",
                    n = document,
                    r = n.cookie,
                    i = "",
                    s = "indexOf",
                    o = "substring",
                    u = "length",
                    a = 2048,
                    f, l = "&ns_",
                    c = "&",
                    h, p, d, v, m = window,
                    g = m.encodeURIComponent || escape;
                if (r[s](t) + 1)
                    for (d = 0, p = r.split(";"), v = p[u]; d < v; d++) h = p[d][s](t), h + 1 && (i = c + unescape(p[d][o](h + t[u])));
                e += l + "_t=" + +(new Date) + l + "c=" + (n.characterSet || n.defaultCharset || "") + "&c8=" + g(n.title) + i + "&c7=" + g(n.URL) + "&c9=" + g(n.referrer), e[u] > a && e[s](c) > 0 && (f = e[o](0, a - 8).lastIndexOf(c), e = (e[o](0, f) + l + "cut=" + g(e[o](f + 1)))[o](0, a)), n.images ? (h = new Image, m.ns_p || (ns_p = h), h.src = e) : n.write("<", "p", "><", 'img src="', e, '" height="1" width="1" alt="*"', "><", "/p", ">")
            },
            sitestat: function(e) {
                var t = document,
                    n = t.location;
                ns_pixelUrl = e + "&ns__t=" + (new Date).getTime(), e = ns_pixelUrl + "&ns_c=" + (t.characterSet ? t.characterSet : t.defaultCharset) + "&ns_ti=" + escape(t.title) + "&ns_jspageurl=" + escape(n && n.href ? n.href : t.URL) + "&ns_referrer=" + escape(t.referrer);
                var r = e.lastIndexOf("&");
                e.length > 2e3 && r >= 0 && (e = e.substring(0, r + 1) + "ns_cut=" + e.substring(r + 1, e.lastIndexOf("=")).substring(0, 40)), t.images ? (new Image).src = e : t.write('<p><img src="' + e + '" height="1" width="1" alt="*"/' + "><" + "/p>")
            },
            ns_onclick: function(e, t, n, r, i) {
                var s = "";
                typeof ns_pixelUrl == "string" && (s = ns_pixelUrl.substring(0, ns_pixelUrl.indexOf("?") + 1)), s += n, s += "&ns_type=" + r + "&ns_action=view", s += "&ns__t=" + (new Date).getTime(), t || (t = e.href);
                var o = document.referrer;
                o.lastIndexOf("/") == o.length - 1 && (o = o.substring(o.lastIndexOf("/"), 0)), o.length > 0 && (s += "&ns_referrer=" + escape(o)), i = i || "";
                var u = e && e.target && e.target != "" ? e.target.substring(0, 1) == "_" ? e.target.substring(1) : e.target : "self",
                    a = new Image;
                return u && t && (window[u] ? (window.ns_softclick_timer = function(e, t) {
                    return function() {
                        window.ns_softclick_timeout && window.clearTimeout(window.ns_softclick_timeout), a.onload = a.onerror = function() {
                            return
                        }
                    }
                }(u, t), ns_softclick_timeout = window.setTimeout("ns_softclick_timer()", 5e3), a.onload = a.onerror = window.ns_softclick_timer) : window.open(t, u, i)), a.src = s, !1
            },
            comscore_checkCookieState: function() {
                this.comScore_getCookie(this.comscoreCookieName) && (this.sitestat("http" + (document.location.href.charAt(4) == "s" ? "s://sb" : "://b") + ".scorecardresearch.com/p?" + this.clickParam + "&" + this.clientData + "&" + this.comScore_getCookie(this.comscoreCookieName)), this.comScore_createCookie(this.comscoreCookieName, "", -1))
            },
            stop: function() {
                var e = this.modId,
                    t = document.getElementById(e);
                t && this.settings.eventName && this.eventHandler && r.off(t, this.settings.eventName, null, this.eventHandler), this.subscribedEventHandler && this.unsubscribe(this.subscribedEventHandler)
            }
        });
    return s
});