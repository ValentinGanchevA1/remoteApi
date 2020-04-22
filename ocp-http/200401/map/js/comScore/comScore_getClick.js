var PTK;
if (typeof PTK == "undefined") {
    PTK = {}
}
if (typeof PTK.Comscore == "undefined") {
    PTK.Comscore = {
        comscoreCookieName: "comScore_cookie",
        enterParam: "c1=2",
        clickParam: "c1=22",
        clientData: "c2=5641052",
        comScore_getClick: function(c, b) {
            var a = document.getElementById(c);
            if (a) {
                if (window.addEventListener) {
                    a.addEventListener("click", function() {
                        if ((PTK.Ajax && PTK.Ajax.ajaxed[c]) || (!(a.type == "submit") && !(a.type == "image") && !a.href)) {
                            PTK.Comscore.comScore_makeClick(b)
                        } else {
                            PTK.Comscore.comScore_createCookie(PTK.Comscore.comscoreCookieName, b, 15)
                        }
                    })
                } else {
                    a.onclick = function() {
                        if ((PTK.Ajax && PTK.Ajax.ajaxed[c]) || (!(a.type == "submit") && !(a.type == "image") && !a.href)) {
                            PTK.Comscore.comScore_makeClick(b)
                        } else {
                            PTK.Comscore.comScore_createCookie(PTK.Comscore.comscoreCookieName, b, 15)
                        }
                    }
                }
            }
        },
        comScore_makeClick: function(b) {
            var a = Math.round(new Date().getTime() / 1000);
            PTK.Comscore.udm_("http" + (document.location.href.charAt(4) == "s" ? "s://sb" : "://b") + ".scorecardresearch.com/b?" + PTK.Comscore.clickParam + "&" + PTK.Comscore.clientData + "&cb=" + a);
            ns_pixelUrl = ns_p.src;
            PTK.Comscore.ns_onclick(this, "", PTK.Comscore.clickParam + "&" + PTK.Comscore.clientData + "&" + b, "hidden")
        },
        comScore_enter: function(a) {
            PTK.Comscore.udm_("http" + (document.location.href.charAt(4) == "s" ? "s://sb" : "://b") + ".scorecardresearch.com/b?" + PTK.Comscore.enterParam + "&" + PTK.Comscore.clientData + "&" + a);
            ns_pixelUrl = ns_p.src
        },
        comScore_createCookie: function(a, c, b) {
            var d = new Date();
            d.setMinutes(d.getMinutes() + b);
            document.cookie = a + "=" + c + "; expires=" + d.toGMTString() + "; path=/"
        },
        comScore_getCookie: function(e) {
            var d = document.cookie.split(";"),
                a = "";
            for (var c = 0; c < d.length; c++) {
                if (d[c].search(e + "=") != -1) {
                    var b = d[c].replace(" ", "");
                    a = b.slice((e + "=").length);
                    return a
                }
            }
            return a
        },
        udm_: function(J) {
            var I = "comScore=",
                H = document,
                G = H.cookie,
                F = "",
                E = "indexOf",
                D = "substring",
                C = "length",
                B = 2048,
                A, z = "&ns_",
                y = "&",
                x, w, v, u, t = window,
                s = t.encodeURIComponent || escape;
            if (G[E](I) + 1) {
                for (v = 0, w = G.split(";"), u = w[C]; v < u; v++) {
                    x = w[v][E](I), x + 1 && (F = y + unescape(w[v][D](x + I[C])))
                }
            }
            J += z + "_t=" + +(new Date) + z + "c=" + (H.characterSet || H.defaultCharset || "") + "&c8=" + s(H.title) + F + "&c7=" + s(H.URL) + "&c9=" + s(H.referrer), J[C] > B && J[E](y) > 0 && (A = J[D](0, B - 8).lastIndexOf(y), J = (J[D](0, A) + z + "cut=" + s(J[D](A + 1)))[D](0, B)), H.images ? (x = new Image, t.ns_p || (ns_p = x), x.src = J) : H.write("<", "p", "><", 'img src="', J, '" height="1" width="1" alt="*"', "><", "/p", ">")
        },
        sitestat: function(c) {
            var e = document,
                b = e.location;
            ns_pixelUrl = c + "&ns__t=" + (new Date().getTime());
            c = ns_pixelUrl + "&ns_c=" + ((e.characterSet) ? e.characterSet : e.defaultCharset) + "&ns_ti=" + escape(e.title) + "&ns_jspageurl=" + escape(b && b.href ? b.href : e.URL) + "&ns_referrer=" + escape(e.referrer);
            var a = c.lastIndexOf("&");
            if (c.length > 2000 && a >= 0) {
                c = c.substring(0, a + 1) + "ns_cut=" + c.substring(a + 1, c.lastIndexOf("=")).substring(0, 40)
            }(e.images) ? new Image().src = c: e.write('<p><img src="' + c + '" height="1" width="1" alt="*"/></p>')
        },
        ns_onclick: function(k, r, q, l, a) {
            var o = "";
            if (typeof ns_pixelUrl == "string") {
                o = ns_pixelUrl.substring(0, ns_pixelUrl.indexOf("?") + 1)
            }
            o += q;
            o += "&ns_type=" + l + "&ns_action=view";
            o += "&ns__t=" + (new Date()).getTime();
            if (!r) {
                r = k.href
            }
            var p = document.referrer;
            if (p.lastIndexOf("/") == p.length - 1) {
                p = p.substring(p.lastIndexOf("/"), 0)
            }
            if (p.length > 0) {
                o += "&amp;ns_referrer=" + escape(p)
            }
            a = a || "";
            var n = (k && k.target && k.target != "") ? (k.target.substring(0, 1) == "_") ? k.target.substring(1) : k.target : "self";
            var m = new Image();
            if (n && r) {
                if (window[n]) {
                    window.ns_softclick_timer = function(c, b) {
                        return function() {
                            if (window.ns_softclick_timeout) {
                                window.clearTimeout(window.ns_softclick_timeout)
                            }
                            m.onload = m.onerror = function() {
                                return
                            }
                        }
                    }(n, r);
                    ns_softclick_timeout = window.setTimeout("ns_softclick_timer()", 5000);
                    m.onload = m.onerror = window.ns_softclick_timer
                } else {
                    window.open(r, n, a)
                }
            }
            m.src = o;
            return false
        },
        comscore_checkCookieState: function() {
            if (PTK.Comscore.comScore_getCookie(PTK.Comscore.comscoreCookieName)) {
                PTK.Comscore.sitestat("http" + (document.location.href.charAt(4) == "s" ? "s://sb" : "://b") + ".scorecardresearch.com/p?" + PTK.Comscore.clickParam + "&" + PTK.Comscore.clientData + "&" + PTK.Comscore.comScore_getCookie(PTK.Comscore.comscoreCookieName));
                PTK.Comscore.comScore_createCookie(PTK.Comscore.comscoreCookieName, "", -1)
            }
        }
    }
};