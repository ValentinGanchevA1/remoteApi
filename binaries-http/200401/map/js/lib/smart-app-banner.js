! function(a) {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).SmartBanner = a()
}(function() {
    return function a(c, f, g) {
        function b(i, h) {
            if (!f[i]) {
                if (!c[i]) {
                    var j = "function" == typeof require && require;
                    if (!h && j) {
                        return j(i, !0)
                    }
                    if (d) {
                        return d(i, !0)
                    }
                    throw j = Error("Cannot find module '" + i + "'"), j.code = "MODULE_NOT_FOUND", j
                }
                j = f[i] = {
                    exports: {}
                }, c[i][0].call(j.exports, function(k) {
                    var l = c[i][1][k];
                    return b(l ? l : k)
                }, j, j.exports, a, c, f, g)
            }
            return f[i].exports
        }
        for (var d = "function" == typeof require && require, e = 0; e < g.length; e++) {
            b(g[e])
        }
        return b
    }({
        1: [function(k, j, f) {
            var g = k("xtend/mutable"),
                u = k("component-query"),
                v = k("get-doc"),
                b = v && v.documentElement,
                q = k("cookie-cutter"),
                m = k("ua-parser-js"),
                h = (navigator.language || navigator.userLanguage || "us").slice(-2),
                c = {
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
            k = function(l) {
                var d = m(navigator.userAgent);
                this.options = g({}, {
                    daysHidden: 15,
                    daysReminder: 90,
                    appStoreLanguage: h,
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
                }, l || {}), d.os.name = d.os.name.toLowerCase(), this.options.force ? this.type = this.options.force : "windows phone" === d.os.name || "windows mobile" === d.os.name ? this.type = "windows" : "ios" === d.os.name && 6 > parseInt(d.os.version) ? this.type = "ios" : "android" === d.os.name && (this.type = "android"), !this.type || navigator.standalone || q.get("smartbanner-closed") || q.get("smartbanner-installed") || (g(this, c[this.type]), this.parseAppId() && (this.create(), this.show()))
            }, k.prototype = {
                constructor: k,
                create: function() {
                    for (var s, l = this.getStoreLink(), t = this.options.price[this.type] + " - " + this.options.store[this.type], w = 0; w < this.iconRels.length; w++) {
                        var p = u('link[rel="' + this.iconRels[w] + '"]');
                        if (p) {
                            s = p.getAttribute("href");
                            break
                        }
                    }
                    var d = v.createElement("div");
                    d.className = "smartbanner smartbanner-" + this.type, d.innerHTML = '<div class="smartbanner-container"><a href="javascript:void(0);" class="smartbanner-close">&times;</a><span class="smartbanner-icon" style="background-image: url(' + s + ')"></span><div class="smartbanner-info"><div class="smartbanner-title">' + this.options.title + "</div><div>" + this.options.author + "</div><span>" + t + '</span></div><a href="' + l + '" class="smartbanner-button"><span class="smartbanner-button-text">' + this.options.button + "</span></a></div>", v.body ? v.body.appendChild(d) : v && v.addEventListener("DOMContentLoaded", function() {
                        v.body.appendChild(d)
                    }), u(".smartbanner-button", d).addEventListener("click", this.install.bind(this), !1), u(".smartbanner-close", d).addEventListener("click", this.close.bind(this), !1)
                },
                hide: function() {
                    b.classList.remove("smartbanner-show")
                },
                show: function() {
                    b.classList.add("smartbanner-show")
                },
                close: function() {
                    this.hide(), q.set("smartbanner-closed", "true", {
                        path: "/",
                        expires: new Date(+new Date + 86400000 * this.options.daysHidden)
                    })
                },
                install: function() {
                    this.hide(), q.set("smartbanner-installed", "true", {
                        path: "/",
                        expires: new Date(+new Date + 86400000 * this.options.daysReminder)
                    })
                },
                parseAppId: function() {
                    var d = u('meta[name="' + this.appMeta + '"]');
                    return d ? this.appId = "windows" === this.type ? d.getAttribute("content") : /app-id=([^\s,]+)/.exec(d.getAttribute("content"))[1] : void 0
                }
            }, j.exports = k
        }, {
            "component-query": 2,
            "cookie-cutter": 3,
            "get-doc": 4,
            "ua-parser-js": 6,
            "xtend/mutable": 7
        }],
        2: [function(c, b, d) {
            function f(h, g) {
                return g.querySelector(h)
            }
            d = b.exports = function(h, g) {
                return g = g || document, f(h, g)
            }, d.all = function(h, g) {
                return g = g || document, g.querySelectorAll(h)
            }, d.engine = function(g) {
                if (!g.one) {
                    throw Error(".one callback required")
                }
                if (!g.all) {
                    throw Error(".all callback required")
                }
                return f = g.one, d.all = g.all, d
            }
        }, {}],
        3: [function(c, b, d) {
            d = b.exports = function(f) {
                return f || (f = {}), "string" == typeof f && (f = {
                    cookie: f
                }), void 0 === f.cookie && (f.cookie = ""), {
                    get: function(g) {
                        for (var h = f.cookie.split(/;\s*/), j = 0; j < h.length; j++) {
                            var e = h[j].split("=");
                            if (unescape(e[0]) === g) {
                                return unescape(e[1])
                            }
                        }
                    },
                    set: function(e, g, h) {
                        return h || (h = {}), e = escape(e) + "=" + escape(g), h.expires && (e += "; expires=" + h.expires), h.path && (e += "; path=" + escape(h.path)), f.cookie = e
                    }
                }
            }, "undefined" != typeof document && (c = d(document), d.get = c.get, d.set = c.set)
        }, {}],
        4: [function(c, b, d) {
            c = c("has-dom"), b.exports = c() ? document : null
        }, {
            "has-dom": 5
        }],
        5: [function(c, b, d) {
            b.exports = function() {
                return "undefined" != typeof window && "undefined" != typeof document && "function" == typeof document.createElement
            }
        }, {}],
        6: [function(c, b, d) {
            ! function(j, h) {
                var q = {
                        extend: function(n, l) {
                            for (var p in l) {
                                -1 !== "browser cpu device engine os".indexOf(p) && 0 === l[p].length % 2 && (n[p] = l[p].concat(n[p]))
                            }
                            return n
                        },
                        has: function(n, l) {
                            return "string" == typeof n ? -1 !== l.toLowerCase().indexOf(n.toLowerCase()) : !1
                        },
                        lowerize: function(l) {
                            return l.toLowerCase()
                        },
                        major: function(l) {
                            return "string" == typeof l ? l.split(".")[0] : h
                        }
                    },
                    u = function() {
                        for (var z, y, w, D, E, n, C, A = 0, x = arguments; A < x.length && !n;) {
                            var v = x[A],
                                B = x[A + 1];
                            if ("undefined" == typeof z) {
                                for (D in z = {}, B) {
                                    B.hasOwnProperty(D) && (E = B[D], "object" == typeof E ? z[E[0]] = h : z[E] = h)
                                }
                            }
                            for (y = w = 0; y < v.length && !n;) {
                                if (n = v[y++].exec(this.getUA())) {
                                    for (D = 0; D < B.length; D++) {
                                        C = n[++w], E = B[D], "object" == typeof E && 0 < E.length ? 2 == E.length ? z[E[0]] = "function" == typeof E[1] ? E[1].call(this, C) : E[1] : 3 == E.length ? z[E[0]] = "function" != typeof E[1] || E[1].exec && E[1].test ? C ? C.replace(E[1], E[2]) : h : C ? E[1].call(this, C, E[2]) : h : 4 == E.length && (z[E[0]] = C ? E[3].call(this, C.replace(E[1], E[2])) : h) : z[E] = C ? C : h
                                    }
                                }
                            }
                            A += 2
                        }
                        return z
                    },
                    f = function(p, l) {
                        for (var r in l) {
                            if ("object" == typeof l[r] && 0 < l[r].length) {
                                for (var n = 0; n < l[r].length; n++) {
                                    if (q.has(l[r][n], p)) {
                                        return "?" === r ? h : r
                                    }
                                }
                            } else {
                                if (q.has(l[r], p)) {
                                    return "?" === r ? h : r
                                }
                            }
                        }
                        return p
                    },
                    o = {
                        ME: "4.90",
                        "NT 3.11": "NT3.51",
                        "NT 4.0": "NT4.0",
                        2000: "NT 5.0",
                        XP: ["NT 5.1", "NT 5.2"],
                        Vista: "NT 6.0",
                        7: "NT 6.1",
                        8: "NT 6.2",
                        8.1: "NT 6.3",
                        10: ["NT 6.4", "NT 10.0"],
                        RT: "ARM"
                    },
                    k = {
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
                            ["name", ["version", f, {
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
                                ["architecture", q.lowerize]
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
                                ["architecture", /ower/, "", q.lowerize]
                            ],
                            [/(sun4\w)[;\)]/i],
                            [
                                ["architecture", "sparc"]
                            ],
                            [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                            [
                                ["architecture", q.lowerize]
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
                                ["model", f, {
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
                                ["vendor", f, {
                                    HTC: "APA",
                                    Sprint: "Sprint"
                                }],
                                ["model", f, {
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
                                ["type", q.lowerize], "vendor", "model"
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
                            ["name", ["version", f, o]],
                            [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                            [
                                ["name", "Windows"],
                                ["version", f, o]
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
                    i = function(e, p) {
                        if (!(this instanceof i)) {
                            return new i(e, p).getResult()
                        }
                        var s = e || (j && j.navigator && j.navigator.userAgent ? j.navigator.userAgent : ""),
                            l = p ? q.extend(k, p) : k;
                        return this.getBrowser = function() {
                            var n = u.apply(this, l.browser);
                            return n.major = q.major(n.version), n
                        }, this.getCPU = function() {
                            return u.apply(this, l.cpu)
                        }, this.getDevice = function() {
                            return u.apply(this, l.device)
                        }, this.getEngine = function() {
                            return u.apply(this, l.engine)
                        }, this.getOS = function() {
                            return u.apply(this, l.os)
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
                            return s
                        }, this.setUA = function(n) {
                            return s = n, this
                        }, this.setUA(s), this
                    };
                i.VERSION = "0.7.10", i.BROWSER = {
                    NAME: "name",
                    MAJOR: "major",
                    VERSION: "version"
                }, i.CPU = {
                    ARCHITECTURE: "architecture"
                }, i.DEVICE = {
                    MODEL: "model",
                    VENDOR: "vendor",
                    TYPE: "type",
                    CONSOLE: "console",
                    MOBILE: "mobile",
                    SMARTTV: "smarttv",
                    TABLET: "tablet",
                    WEARABLE: "wearable",
                    EMBEDDED: "embedded"
                }, i.ENGINE = {
                    NAME: "name",
                    VERSION: "version"
                }, i.OS = {
                    NAME: "name",
                    VERSION: "version"
                }, "undefined" != typeof d ? ("undefined" != typeof b && b.exports && (d = b.exports = i), d.UAParser = i) : j.UAParser = i;
                var g = j.jQuery || j.Zepto;
                if ("undefined" != typeof g) {
                    var m = new i;
                    g.ua = m.getResult(), g.ua.get = function() {
                        return m.getUA()
                    }, g.ua.set = function(n) {
                        m.setUA(n), n = m.getResult();
                        for (var l in n) {
                            g.ua[l] = n[l]
                        }
                    }
                }
            }("object" == typeof window ? window : this)
        }, {}],
        7: [function(c, b, d) {
            b.exports = function(j) {
                for (var h = 1; h < arguments.length; h++) {
                    var k, g = arguments[h];
                    for (k in g) {
                        f.call(g, k) && (j[k] = g[k])
                    }
                }
                return j
            };
            var f = Object.prototype.hasOwnProperty
        }, {}]
    }, {}, [1])(1)
});