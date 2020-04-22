define("plugins/cookies", ["require", "common/basePlugin", "adapter/jsClass", "adapter/enumerable", "adapter/dom", "pubsub"], function(e) {
    var t = e("common/basePlugin"),
        n = e("adapter/jsClass"),
        r = e("adapter/enumerable"),
        i = e("adapter/dom"),
        s = e("pubsub"),
        o = n.Class(t, {
            constructor: function(e, t, n, i) {
                var s = {
                    noCookies: "/ocp/gear/infoportal/ajax?toGet=no-cookies",
                    article: "/ocp/gear/infoportal/ajax?toGet=cookie-info",
                    allowCookiesId: "allowCookies",
                    closeArticleId: "closeCookiesArticle",
                    appendElementId: "",
                    position: "top",
                    cookiesId: "cookiesArticle",
                    cookiesClass: "bottom-cookies",
                    noCookiesClass: ""
                };
                this.settings = r.defaults(i, s), this.interval(this.settings.article, this.settings.noCookies, this.settings.beforeId)
            },
            init: function(e, t, n) {
                var r = this,
                    s = navigator.cookieEnabled,
                    o = this.readCookie("ALLOW_COOKIES");
                /(IE)/.test(navigator.userAgent) && (document.cookie = "ALLOW_COOKIES").indexOf.call(document.cookie, "ALLOW_COOKIES") == -1 && (s = !1);
                if (o != "cookiesAllowed") {
                    var u = null;
                    if (this.settings.appendElementId && this.settings.appendElementId != "") var u = i.find("#" + this.settings.appendElementId);
                    var a = '<div id="' + this.settings.cookiesId + '" class="clr ' + this.settings.cookiesClass + '" style="display:none;">';
                    u && u.length && u[0] ? i.append(u, a, this.settings.position) : i.append(i.find("body"), a, this.settings.position), s ? this.getArticle(e, this.setArticle) : this.getArticle(t, this.setArticle)
                }
            },
            readCookie: function(e) {
                var t = name + "=",
                    n = document.cookie.split(";"),
                    r = "";
                for (var i = 0; i < n.length; i++) {
                    var s = n[i].split("=");
                    if (s.length > 1 && s[0].split(" ").join("") === e) return r = s[1], r
                }
                return r
            },
            createCookies: function(e, t) {
                var n = new Date,
                    r = window.location.href,
                    i = r.split("/"),
                    s = i[2],
                    o = "www.",
                    u = i[2];
                n.setFullYear(n.getFullYear() + 100), s.substring(0, o.length) === o ? u = "." + s.substring(o.length, s.lenght) : s.substring(0, 1) !== "." && (u = "." + i[2]), document.cookie = e + "=" + t + "; expires=" + n.toGMTString() + ";path=/; domain=" + u + "; "
            },
            setAcceptance: function(e) {
                e.preventDefault(), this.createCookies("ALLOW_COOKIES", "cookiesAllowed"), this.hideArticle()
            },
            hideArticle: function() {
                var e = document.getElementById("cookiesArticle");
                i.css(e, {
                    display: "none"
                }), document.body.removeChild(e)
            },
            setArticle: function(e) {
                var t = document.getElementById("cookiesArticle");
                t && (t.innerHTML = e, i.css(t, {
                    display: ""
                }));
                var n = document.getElementById("allowCookies"),
                    r = document.getElementById("closeCookiesArticle");
                r && i.on(r, "click", this.setAcceptance.bind(this))
            },
            getArticle: function(e, t) {
                i.ajax(e, "GET", {}, null, "html", t.bind(this))
            },
            interval: function(e, t, n) {
                var r = this;
                window.checkCookiesVariable = 0, window.cookiesCheck = setInterval(function() {
                    if (document.body) {
                        clearInterval(window.cookiesCheck);
                        var i = document.getElementById("cookiesArticle");
                        !i && !window.checkCookiesVariable && (window.checkCookiesVariable = 1, r.init(e, t, n))
                    }
                }, 3e3)
            }
        });
    return o
});