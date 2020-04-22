! function(e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).SmartBanner = e()
}(function() {
    return function e(t, n, r) {
        function i(o, u) {
            if (!n[o]) {
                if (!t[o]) {
                    var a = "function" == typeof require && require;
                    if (!u && a) return a(o, !0);
                    if (s) return s(o, !0);
                    throw a = Error("Cannot find module '" + o + "'"), a.code = "MODULE_NOT_FOUND", a
                }
                a = n[o] = {
                    exports: {}
                }, t[o][0].call(a.exports, function(e) {
                    var n = t[o][1][e];
                    return i(n ? n : e)
                }, a, a.exports, e, t, n, r)
            }
            return n[o].exports
        }
        for (var s = "function" == typeof require && require, o = 0; o < r.length; o++) i(r[o]);
        return i
    }({
        1: [function(e, t, n) {
            var r = e("xtend/mutable"),
                i = e("component-query"),
                s = e("get-doc"),
                o = s && s.documentElement,
                u = e("cookie-cutter"),
                a = e("ua-parser-js"),
                f = navigator.language.slice(-2) || navigator.userLanguage.slice(-2) || "us",
                l = {
                    ios: {
                        appMeta: "apple-itunes-app",
                        iconRels: ["apple-touch-icon-precomposed", "apple-touch-icon"],
                        getStoreLink: function() {
                            return "https://itunes.apple.com/" + this.options.appStoreLanguage + "/app/id" + this.appId
                        }
                    },
                    android: {
                        appMeta: "google-play-app",
                        iconRels: ["android-touch-icon", "apple-touch-icon-precomposed", "apple-touch-icon"],
                        getStoreLink: function() {
                            return "http://play.google.com/store/apps/details?id=" + this.appId
                        }
                    },
                    windows: {
                        appMeta: "msApplication-ID",
                        iconRels: ["windows-touch-icon", "apple-touch-icon-precomposed", "apple-touch-icon"],
                        getStoreLink: function() {
                            return "http://www.windowsphone.com/s?appid=" + this.appId
                        }
                    }
                };
            e = function(e) {
                var t = a(navigator.userAgent);
                this.options = r({}, {
                    daysHidden: 15,
                    daysReminder: 90,
                    appStoreLanguage: f,
                    button: "OPEN",
                    store: {
                        ios: "On the App Store",
                        android: "In Google Play",
                        windows: "In the Windows Store"
                    },
                    price: {
                        ios: "FREE",
                        android: "FREE",
                        windows: "FREE"
                    },
                    force: !1
                }, e || {}), t.os.name = t.os.name.toLowerCase(), this.options.force ? this.type = this.options.force : "windows phone" === t.os.name || "windows mobile" === t.os.name ? this.type = "windows" : "ios" === t.os.name && 6 > parseInt(t.os.version) ? this.type = "ios" : "android" === t.os.name && (this.type = "android"), !this.type || navigator.standalone || u.get("smartbanner-closed") || u.get("smartbanner-installed") || (r(this, l[this.type]), this.parseAppId() && (this.create(), this.show()))
            }, e.prototype = {
                constructor: e,
                create: function() {
                    for (var e, t = this.getStoreLink(), n = this.options.price[this.type] + " - " + this.options.store[this.type], r = 0; r < this.iconRels.length; r++) {
                        var o = i('link[rel="' + this.iconRels[r] + '"]');
                        if (o) {
                            e = o.getAttribute("href");
                            break
                        }
                    }
                    var u = s.createElement("div");
                    u.className = "smartbanner smartbanner-" + this.type, u.innerHTML = '<div class="smartbanner-container"><a href="javascript:void(0);" class="smartbanner-close">&times;</a><span class="smartbanner-icon" style="background-image: url(' + e + ')"></span><div class="smartbanner-info"><div class="smartbanner-title">' + this.options.title + "</div><div>" + this.options.author + "</div><span>" + n + '</span></div><a href="' + t + '" class="smartbanner-button"><span class="smartbanner-button-text">' + this.options.button + "</span></a></div>", s.body ? s.body.appendChild(u) : s && s.addEventListener("DOMContentLoaded", function() {
                        s.body.appendChild(u)
                    }), i(".smartbanner-button", u).addEventListener("click", this.install.bind(this), !1), i(".smartbanner-close", u).addEventListener("click", this.close.bind(this), !1)
                },
                hide: function() {
                    o.classList.remove("smartbanner-show")
                },
                show: function() {
                    o.classList.add("smartbanner-show")
                },
                close: function() {
                    this.hide(), u.set("smartbanner-closed", "true", {
                        path: "/",
                        expires: new Date(+(new Date) + 864e5 * this.options.daysHidden)
                    })
                },
                install: function() {
                    this.hide(), u.set("smartbanner-installed", "true", {
                        path: "/",
                        expires: new Date(+(new Date) + 864e5 * this.options.daysReminder)
                    })
                },
                parseAppId: function() {
                    var e = i('meta[name="' + this.appMeta + '"]');
                    return e ? this.appId = "windows" === this.type ? e.getAttribute("content") : /app-id=([^\s,]+)/.exec(e.getAttribute("content"))[1] : void 0
                }
            }, t.exports = e
        }, {
            "component-query": 2,
            "cookie-cutter": 3,
            "get-doc": 4,
            "ua-parser-js": 6,
            "xtend/mutable": 7
        }],
        2: [function(e, t, n) {
            function r(e, t) {
                return t.querySelector(e)
            }
            n = t.exports = function(e, t) {
                return t = t || document, r(e, t)
            }, n.all = function(e, t) {
                return t = t || document, t.querySelectorAll(e)
            }, n.engine = function(e) {
                if (!e.one) throw Error(".one callback required");
                if (!e.all) throw Error(".all callback required");
                return r = e.one, n.all = e.all, n
            }
        }, {}],
        3: [function(e, t, n) {
            n = t.exports = function(e) {
                return e || (e = {}), "string" == typeof e && (e = {
                    cookie: e
                }), void 0 === e.cookie && (e.cookie = ""), {
                    get: function(t) {
                        for (var n = e.cookie.split(/;\s*/), r = 0; r < n.length; r++) {
                            var i = n[r].split("=");
                            if (unescape(i[0]) === t) return unescape(i[1])
                        }
                    },
                    set: function(t, n, r) {
                        return r || (r = {}), t = escape(t) + "=" + escape(n), r.expires && (t += "; expires=" + r.expires), r.path && (t += "; path=" + escape(r.path)), e.cookie = t
                    }
                }
            }, "undefined" != typeof document && (e = n(document), n.get = e.get, n.set = e.set)
        }, {}],
        4: [function(e, t, n) {
            e = e("has-dom"), t.exports = e() ? document : null
        }, {
            "has-dom": 5
        }],
        5: [function(e, t, n) {
            t.exports = function() {
                return "undefined" != typeof window && "undefined" != typeof document && "function" == typeof document.createElement
            }
        }, {}],
        6: [function(e, t, n) {
            ! function(e, r) {
                var s = {
                        extend: function(e, t) {
                            for (var n in t) - 1 !== "browser cpu device engine os".indexOf(n) && 0 === t[n].length % 2 && (e[n] = t[n].concat(e[n]));
                            return e
                        },
                        has: function(e, t) {
                            return "string" == typeof e ? -1 !== t.toLowerCase().indexOf(e.toLowerCase()) : !1
                        },
                        lowerize: function(e) {
                            return e.toLowerCase()
                        },
                        major: function(e) {
                            return "string" == typeof e ? e.split(".")[0] : r
                        }
                    },
                    u = function() {
                        for (var e, t, n, i, s, o, u, a = 0, f = arguments; a < f.length && !o;) {
                            var l = f[a],
                                c = f[a + 1];
                            if ("undefined" == typeof e)
                                for (i in e = {}, c) c.hasOwnProperty(i) && (s = c[i], "object" == typeof s ? e[s[0]] = r : e[s] = r);
                            for (t = n = 0; t < l.length && !o;)
                                if (o = l[t++].exec(this.getUA()))
                                    for (i = 0; i < c.length; i++) u = o[++n], s = c[i], "object" == typeof s && 0 < s.length ? 2 == s.length ? e[s[0]] = "function" == typeof s[1] ? s[1].call(this, u) : s[1] : 3 == s.length ? e[s[0]] = "function" != typeof s[1] || s[1].exec && s[1].test ? u ? u.replace(s[1], s[2]) : r : u ? s[1].call(this, u, s[2]) : r : 4 == s.length && (e[s[0]] = u ? s[3].call(this, u.replace(s[1], s[2])) : r) : e[s] = u ? u : r;
                            a += 2
                        }
                        return e
                    },
                    a = function(e, t) {
                        for (var n in t)
                            if ("object" == typeof t[n] && 0 < t[n].length) {
                                for (var i = 0; i < t[n].length; i++)
                                    if (s.has(t[n][i], e)) return "?" === n ? r : n
                            } else if (s.has(t[n], e)) return "?" === n ? r : n;
                        return e
                    },
                    f = {
                        ME: "4.90",
                        "NT 3.11": "NT3.51",
                        "NT 4.0": "NT4.0",
                        2e3: "NT 5.0",
                        XP: ["NT 5.1", "NT 5.2"],
                        Vista: "NT 6.0",
                        7: "NT 6.1",
                        8: "NT 6.2",
                        8.1: "NT 6.3",
                        10: ["NT 6.4", "NT 10.0"],
                        RT: "ARM"
                    },
                    l = {
                        browser: [
                            [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                            ["name", "version"],
                            [/\s(opr)\/([\w\.]+)/i],
                            [
                                ["name", "Opera"], "version"
                            ],
                            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i],
                            ["name", "version"],
                            [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                            [
                                ["name", "IE"], "version"
                            ],
                            [/(edge)\/((\d+)?[\w\.]+)/i],
                            ["name", "version"],
                            [/(yabrowser)\/([\w\.]+)/i],
                            [
                                ["name", "Yandex"], "version"
                            ],
                            [/(comodo_dragon)\/([\w\.]+)/i],
                            [
                                ["name", /_/g, " "], "version"
                            ],
                            [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i, /(qqbrowser)[\/\s]?([\w\.]+)/i],
                            ["name", "version"],
                            [/(uc\s?browser)[\/\s]?([\w\.]+)/i, /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i, /JUC.+(ucweb)[\/\s]?([\w\.]+)/i],
                            [
                                ["name", "UCBrowser"], "version"
                            ],
                            [/(dolfin)\/([\w\.]+)/i],
                            [
                                ["name", "Dolphin"], "version"
                            ],
                            [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                            [
                                ["name", "Chrome"], "version"
                            ],
                            [/XiaoMi\/MiuiBrowser\/([\w\.]+)/i],
                            ["version", ["name", "MIUI Browser"]],
                            [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i],
                            ["version", ["name", "Android Browser"]],
                            [/FBAV\/([\w\.]+);/i],
                            ["version", ["name", "Facebook"]],
                            [/fxios\/([\w\.-]+)/i],
                            ["version", ["name", "Firefox"]],
                            [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                            ["version", ["name", "Mobile Safari"]],
                            [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                            ["version", "name"],
                            [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                            ["name", ["version", a, {
                                "1.0": "/8",
                                1.2: "/1",
                                1.3: "/3",
                                "2.0": "/412",
                                "2.0.2": "/416",
                                "2.0.3": "/417",
                                "2.0.4": "/419",
                                "?": "/"
                            }]],
                            [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
                            ["name", "version"],
                            [/(navigator|netscape)\/([\w\.-]+)/i],
                            [
                                ["name", "Netscape"], "version"
                            ],
                            [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                            ["name", "version"]
                        ],
                        cpu: [
                            [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                            [
                                ["architecture", "amd64"]
                            ],
                            [/(ia32(?=;))/i],
                            [
                                ["architecture", s.lowerize]
                            ],
                            [/((?:i[346]|x)86)[;\)]/i],
                            [
                                ["architecture", "ia32"]
                            ],
                            [/windows\s(ce|mobile);\sppc;/i],
                            [
                                ["architecture", "arm"]
                            ],
                            [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                            [
                                ["architecture", /ower/, "", s.lowerize]
                            ],
                            [/(sun4\w)[;\)]/i],
                            [
                                ["architecture", "sparc"]
                            ],
                            [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                            [
                                ["architecture", s.lowerize]
                            ]
                        ],
                        device: [
                            [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
                            ["model", "vendor", ["type", "tablet"]],
                            [/applecoremedia\/[\w\.]+ \((ipad)/],
                            ["model", ["vendor", "Apple"],
                                ["type", "tablet"]
                            ],
                            [/(apple\s{0,1}tv)/i],
                            [
                                ["model", "Apple TV"],
                                ["vendor", "Apple"]
                            ],
                            [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                            ["vendor", "model", ["type", "tablet"]],
                            [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],
                            ["model", ["vendor", "Amazon"],
                                ["type", "tablet"]
                            ],
                            [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],
                            [
                                ["model", a, {
                                    "Fire Phone": ["SD", "KF"]
                                }],
                                ["vendor", "Amazon"],
                                ["type", "mobile"]
                            ],
                            [/\((ip[honed|\s\w*]+);.+(apple)/i],
                            ["model", "vendor", ["type", "mobile"]],
                            [/\((ip[honed|\s\w*]+);/i],
                            ["model", ["vendor", "Apple"],
                                ["type", "mobile"]
                            ],
                            [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                            ["vendor", "model", ["type", "mobile"]],
                            [/\(bb10;\s(\w+)/i],
                            ["model", ["vendor", "BlackBerry"],
                                ["type", "mobile"]
                            ],
                            [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i],
                            ["model", ["vendor", "Asus"],
                                ["type", "tablet"]
                            ],
                            [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                            [
                                ["vendor", "Sony"],
                                ["model", "Xperia Tablet"],
                                ["type", "tablet"]
                            ],
                            [/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],
                            [
                                ["vendor", "Sony"],
                                ["model", "Xperia Phone"],
                                ["type", "mobile"]
                            ],
                            [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                            ["vendor", "model", ["type", "console"]],
                            [/android.+;\s(shield)\sbuild/i],
                            ["model", ["vendor", "Nvidia"],
                                ["type", "console"]
                            ],
                            [/(playstation\s[34portablevi]+)/i],
                            ["model", ["vendor", "Sony"],
                                ["type", "console"]
                            ],
                            [/(sprint\s(\w+))/i],
                            [
                                ["vendor", a, {
                                    HTC: "APA",
                                    Sprint: "Sprint"
                                }],
                                ["model", a, {
                                    "Evo Shift 4G": "7373KT"
                                }],
                                ["type", "mobile"]
                            ],
                            [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
                            ["vendor", "model", ["type", "tablet"]],
                            [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],
                            ["vendor", ["model", /_/g, " "],
                                ["type", "mobile"]
                            ],
                            [/(nexus\s9)/i],
                            ["model", ["vendor", "HTC"],
                                ["type", "tablet"]
                            ],
                            [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                            ["model", ["vendor", "Microsoft"],
                                ["type", "console"]
                            ],
                            [/(kin\.[onetw]{3})/i],
                            [
                                ["model", /\./g, " "],
                                ["vendor", "Microsoft"],
                                ["type", "mobile"]
                            ],
                            [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s[6])/i],
                            ["model", ["vendor", "Motorola"],
                                ["type", "mobile"]
                            ],
                            [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                            ["model", ["vendor", "Motorola"],
                                ["type", "tablet"]
                            ],
                            [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                            [
                                ["vendor", "Samsung"], "model", ["type", "tablet"]
                            ],
                            [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i],
                            [
                                ["vendor", "Samsung"], "model", ["type", "mobile"]
                            ],
                            [/(samsung);smarttv/i],
                            ["vendor", "model", ["type", "smarttv"]],
                            [/\(dtv[\);].+(aquos)/i],
                            ["model", ["vendor", "Sharp"],
                                ["type", "smarttv"]
                            ],
                            [/sie-(\w+)*/i],
                            ["model", ["vendor", "Siemens"],
                                ["type", "mobile"]
                            ],
                            [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i],
                            [
                                ["vendor", "Nokia"], "model", ["type", "mobile"]
                            ],
                            [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
                            ["model", ["vendor", "Acer"],
                                ["type", "tablet"]
                            ],
                            [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                            [
                                ["vendor", "LG"], "model", ["type", "tablet"]
                            ],
                            [/(lg) netcast\.tv/i],
                            ["vendor", "model", ["type", "smarttv"]],
                            [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i],
                            ["model", ["vendor", "LG"],
                                ["type", "mobile"]
                            ],
                            [/android.+(ideatab[a-z0-9\-\s]+)/i],
                            ["model", ["vendor", "Lenovo"],
                                ["type", "tablet"]
                            ],
                            [/linux;.+((jolla));/i],
                            ["vendor", "model", ["type", "mobile"]],
                            [/((pebble))app\/[\d\.]+\s/i],
                            ["vendor", "model", ["type", "wearable"]],
                            [/android.+;\s(glass)\s\d/i],
                            ["model", ["vendor", "Google"],
                                ["type", "wearable"]
                            ],
                            [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i],
                            [
                                ["model", /_/g, " "],
                                ["vendor", "Xiaomi"],
                                ["type", "mobile"]
                            ],
                            [/\s(tablet)[;\/\s]/i, /\s(mobile)[;\/\s]/i],
                            [
                                ["type", s.lowerize], "vendor", "model"
                            ]
                        ],
                        engine: [
                            [/windows.+\sedge\/([\w\.]+)/i],
                            ["version", ["name", "EdgeHTML"]],
                            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                            ["name", "version"],
                            [/rv\:([\w\.]+).*(gecko)/i],
                            ["version", "name"]
                        ],
                        os: [
                            [/microsoft\s(windows)\s(vista|xp)/i],
                            ["name", "version"],
                            [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                            ["name", ["version", a, f]],
                            [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                            [
                                ["name", "Windows"],
                                ["version", a, f]
                            ],
                            [/\((bb)(10);/i],
                            [
                                ["name", "BlackBerry"], "version"
                            ],
                            [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i],
                            ["name", "version"],
                            [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],
                            [
                                ["name", "Symbian"], "version"
                            ],
                            [/\((series40);/i],
                            ["name"],
                            [/mozilla.+\(mobile;.+gecko.+firefox/i],
                            [
                                ["name", "Firefox OS"], "version"
                            ],
                            [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i],
                            ["name", "version"],
                            [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                            [
                                ["name", "Chromium OS"], "version"
                            ],
                            [/(sunos)\s?([\w\.]+\d)*/i],
                            [
                                ["name", "Solaris"], "version"
                            ],
                            [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],
                            ["name", "version"],
                            [/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i],
                            [
                                ["name", "iOS"],
                                ["version", /_/g, "."]
                            ],
                            [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i],
                            [
                                ["name", "Mac OS"],
                                ["version", /_/g, "."]
                            ],
                            [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i],
                            ["name", "version"]
                        ]
                    },
                    c = function(t, n) {
                        if (this instanceof c) {
                            var r = t || (e && e.navigator && e.navigator.userAgent ? e.navigator.userAgent : ""),
                                i = n ? s.extend(l, n) : l;
                            return this.getBrowser = function() {
                                var e = u.apply(this, i.browser);
                                return e.major = s.major(e.version), e
                            }, this.getCPU = function() {
                                return u.apply(this, i.cpu)
                            }, this.getDevice = function() {
                                return u.apply(this, i.device)
                            }, this.getEngine = function() {
                                return u.apply(this, i.engine)
                            }, this.getOS = function() {
                                return u.apply(this, i.os)
                            }, this.getResult = function() {
                                return {
                                    ua: this.getUA(),
                                    browser: this.getBrowser(),
                                    engine: this.getEngine(),
                                    os: this.getOS(),
                                    device: this.getDevice(),
                                    cpu: this.getCPU()
                                }
                            }, this.getUA = function() {
                                return r
                            }, this.setUA = function(e) {
                                return r = e, this
                            }, this.setUA(r), this
                        }
                        return (new c(t, n)).getResult()
                    };
                c.VERSION = "0.7.10", c.BROWSER = {
                    NAME: "name",
                    MAJOR: "major",
                    VERSION: "version"
                }, c.CPU = {
                    ARCHITECTURE: "architecture"
                }, c.DEVICE = {
                    MODEL: "model",
                    VENDOR: "vendor",
                    TYPE: "type",
                    CONSOLE: "console",
                    MOBILE: "mobile",
                    SMARTTV: "smarttv",
                    TABLET: "tablet",
                    WEARABLE: "wearable",
                    EMBEDDED: "embedded"
                }, c.ENGINE = {
                    NAME: "name",
                    VERSION: "version"
                }, c.OS = {
                    NAME: "name",
                    VERSION: "version"
                }, "undefined" != typeof n ? ("undefined" != typeof t && t.exports && (n = t.exports = c), n.UAParser = c) : e.UAParser = c;
                var h = e.jQuery || e.Zepto;
                if ("undefined" != typeof h) {
                    var p = new c;
                    h.ua = p.getResult(), h.ua.get = function() {
                        return p.getUA()
                    }, h.ua.set = function(e) {
                        p.setUA(e), e = p.getResult();
                        for (var t in e) h.ua[t] = e[t]
                    }
                }
            }("object" == typeof window ? window : this)
        }, {}],
        7: [function(e, t, n) {
            t.exports = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n, i = arguments[t];
                    for (n in i) r.call(i, n) && (e[n] = i[n])
                }
                return e
            };
            var r = Object.prototype.hasOwnProperty
        }, {}]
    }, {}, [1])(1)
});