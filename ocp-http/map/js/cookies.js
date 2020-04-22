var PTK;
if (typeof PTK == "undefined") {
    PTK = {}
}
if (typeof PTK.Cookies == "undefined") {
    PTK.Cookies = {};
    PTK.Cookies = {
        initialize: function(c) {
            var b = this;
            this.defaults = {
                noCookies: "/ocp/gear/infoportal/ajax?toGet=no-cookies",
                article: "/ocp/gear/infoportal/ajax?toGet=cookie-info",
                allowCookiesId: "allowCookies",
                closeArticleId: "closeCookiesArticle",
                beforeId: "portal-box",
                cookiesId: "cookiesArticle",
                cookiesClass: "bottom-cookies",
                noCookiesClass: ""
            };
            if (Prototype.Browser.IE) {
                if ((document.cookie = "ALLOW_COOKIES").indexOf.call(document.cookie, "ALLOW_COOKIES") != -1) {
                    this.cookiesStatus = true
                } else {
                    this.cookiesStatus = false
                }
            } else {
                this.cookiesStatus = navigator.cookieEnabled
            }
            this.cookieValue = this.readCookie("ALLOW_COOKIES");
            if (this.cookieValue != "cookiesAllowed") {
                this.options = Object.extend(this.defaults, c);
                if (this.cookiesStatus) {
                    var a = (typeof PTK.CookiesArticleUrl != "undefined" && PTK.CookiesArticleUrl != "") ? PTK.CookiesArticleUrl : this.options.article,
                        e = document.createElement("div");
                    e.id = this.options.cookiesId;
                    e.className = this.options.cookiesClass;
                    document.body.appendChild(e);
                    document.fire("cookies:appendBottom")
                } else {
                    var a = this.options.noCookies,
                        d = $(this.options.beforeId);
                    if (d) {
                        d.insert({
                            before: '<div id="' + this.options.cookiesId + '" class="clr ' + this.options.noCookiesClass + '" style="display:none;"></div>'
                        });
                        document.fire("cookies:appendTop")
                    }
                }
                this.article = $(this.options.cookiesId);
                this.getArticle(a)
            }
        },
        getArticle: function(b) {
            var a = this;
            new Ajax.Request(b, {
                onSuccess: a.setContent.bindAsEventListener(a)
            })
        },
        setContent: function(b) {
            if (!this.cookiesStatus) {
                Effect.ScrollTo(this.article)
            }
            var a = this;
            if (this.article) {
                this.article.innerHTML = b.responseText;
                var d = this.article;
                this.article.slideDown({
                    duration: 0.5,
                    afterUpdate: function() {
                        if (PTK.PositionFixedElement && PTK.PositionFixedElement.el && !a.cookiesStatus) {
                            PTK.PositionFixedElement.options.topDistance = PTK.PositionFixedElement.options.topDistance + d.getHeight();
                            PTK.PositionFixedElement.onScroll()
                        }
                    }
                });
                var c = $(a.options.allowCookiesId);
                var e = $(this.options.closeArticleId);
                if (this.cookiesStatus) {
                    if (c) {
                        c.observe("click", a.setAcceptance.bindAsEventListener(a));
                        if (e) {
                            e.observe("click", a.hideArticle.bindAsEventListener(a))
                        }
                    } else {
                        if (e) {
                            e.observe("click", a.setAcceptance.bindAsEventListener(a))
                        }
                    }
                } else {
                    if (e) {
                        e.observe("click", a.hideArticle.bindAsEventListener(a))
                    }
                }
            }
        },
        setAcceptance: function(a) {
            a.stop();
            this.createCookies("ALLOW_COOKIES", "cookiesAllowed");
            this.hideArticle()
        },
        hideArticle: function(a) {
            if (a) {
                a.stop()
            }
            this.article.slideUp({
                duration: 0.5,
                afterUpdate: function() {
                    if (PTK.PositionFixedElement && PTK.PositionFixedElement.el) {
                        PTK.PositionFixedElement.options.topDistance = PTK.PositionFixedElement.options.topDistance - element.getHeight()
                    }
                }
            });
            this.article.remove();
            document.fire("cookies:remove")
        },
        createCookies: function(d, g) {
            var h = new Date();
            h.setFullYear(h.getFullYear() + 100);
            var c = window.location.href;
            var b = c.split("/");
            var a = b[2];
            var f = "www.";
            var e = b[2];
            if (a.substring(0, f.length) === f) {
                e = "." + a.substring(f.length, a.lenght)
            } else {
                if (!(a.substring(0, 1) === ".")) {
                    e = "." + b[2]
                }
            }
            document.cookie = d + "=" + g + "; expires=" + h.toGMTString() + ";path=/; domain=" + e + "; "
        },
        readCookie: function(f) {
            var e = name + "=";
            var d = document.cookie.split(";");
            var a;
            for (var c = 0; c < d.length; c++) {
                var b = d[c].split("=");
                if (b.length > 1 && b[0].split(" ").join("") === f) {
                    a = b[1];
                    return a
                }
            }
            return a
        }
    }
}
window.checkCookiesVariable = 0;
window.cookiesCheck = setInterval(function() {
    if (window.Prototype) {
        clearInterval(window.cookiesCheck);
        var a = $("cookiesArticle");
        if (!a && !window.checkCookiesVariable && typeof PTK != "undefined" && typeof PTK.Cookies != "undefined") {
            window.checkCookiesVariable = 1;
            PTK.Cookies.initialize()
        }
    }
}, 3000);