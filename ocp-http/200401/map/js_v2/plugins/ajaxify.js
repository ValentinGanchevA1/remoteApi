/**
 * Copyright (c) 2011-2013 Felix Gnass
 * Licensed under the MIT license
 */

(function(e, t) {
    typeof exports == "object" ? module.exports = t() : typeof define == "function" && define.amd ? define("lib/spin", t) : e.Spinner = t()
})(this, function() {
    function r(e, t) {
        var n = document.createElement(e || "div"),
            r;
        for (r in t) n[r] = t[r];
        return n
    }

    function i(e) {
        for (var t = 1, n = arguments.length; t < n; t++) e.appendChild(arguments[t]);
        return e
    }

    function o(e, r, i, o) {
        var u = ["opacity", r, ~~(e * 100), i, o].join("-"),
            a = .01 + i / o * 100,
            f = Math.max(1 - (1 - e) / r * (100 - a), e),
            l = n.substring(0, n.indexOf("Animation")).toLowerCase(),
            c = l && "-" + l + "-" || "";
        return t[u] || (s.insertRule("@" + c + "keyframes " + u + "{" + "0%{opacity:" + f + "}" + a + "%{opacity:" + e + "}" + (a + .01) + "%{opacity:1}" + (a + r) % 100 + "%{opacity:" + e + "}" + "100%{opacity:" + f + "}" + "}", s.cssRules.length), t[u] = 1), u
    }

    function u(t, n) {
        var r = t.style,
            i, s;
        n = n.charAt(0).toUpperCase() + n.slice(1);
        for (s = 0; s < e.length; s++) {
            i = e[s] + n;
            if (r[i] !== undefined) return i
        }
        if (r[n] !== undefined) return n
    }

    function a(e, t) {
        for (var n in t) e.style[u(e, n) || n] = t[n];
        return e
    }

    function f(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) e[r] === undefined && (e[r] = n[r])
        }
        return e
    }

    function l(e) {
        var t = {
            x: e.offsetLeft,
            y: e.offsetTop
        };
        while (e = e.offsetParent) t.x += e.offsetLeft, t.y += e.offsetTop;
        return t
    }

    function c(e, t) {
        return typeof e == "string" ? e : e[t % e.length]
    }

    function p(e) {
        if (typeof this == "undefined") return new p(e);
        this.opts = f(e || {}, p.defaults, h)
    }

    function d() {
        function e(e, t) {
            return r("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', t)
        }
        s.addRule(".spin-vml", "behavior:url(#default#VML)"), p.prototype.lines = function(t, n) {
            function o() {
                return a(e("group", {
                    coordsize: s + " " + s,
                    coordorigin: -r + " " + -r
                }), {
                    width: s,
                    height: s
                })
            }

            function h(t, s, u) {
                i(f, i(a(o(), {
                    rotation: 360 / n.lines * t + "deg",
                    left: ~~s
                }), i(a(e("roundrect", {
                    arcsize: n.corners
                }), {
                    width: r,
                    height: n.width,
                    left: n.radius,
                    top: -n.width >> 1,
                    filter: u
                }), e("fill", {
                    color: c(n.color, t),
                    opacity: n.opacity
                }), e("stroke", {
                    opacity: 0
                }))))
            }
            var r = n.length + n.width,
                s = 2 * r,
                u = -(n.width + n.length) * 2 + "px",
                f = a(o(), {
                    position: "absolute",
                    top: u,
                    left: u
                }),
                l;
            if (n.shadow)
                for (l = 1; l <= n.lines; l++) h(l, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
            for (l = 1; l <= n.lines; l++) h(l);
            return i(t, f)
        }, p.prototype.opacity = function(e, t, n, r) {
            var i = e.firstChild;
            r = r.shadow && r.lines || 0, i && t + r < i.childNodes.length && (i = i.childNodes[t + r], i = i && i.firstChild, i = i && i.firstChild, i && (i.opacity = n))
        }
    }
    var e = ["webkit", "Moz", "ms", "O"],
        t = {},
        n, s = function() {
            var e = r("style", {
                type: "text/css"
            });
            return i(document.getElementsByTagName("head")[0], e), e.sheet || e.styleSheet
        }(),
        h = {
            lines: 12,
            length: 7,
            width: 5,
            radius: 10,
            rotate: 0,
            corners: 1,
            color: "#000",
            direction: 1,
            speed: 1,
            trail: 100,
            opacity: .25,
            fps: 20,
            zIndex: 2e9,
            className: "spinner",
            top: "auto",
            left: "auto",
            position: "relative"
        };
    p.defaults = {}, f(p.prototype, {
        spin: function(e) {
            this.stop();
            var t = this,
                i = t.opts,
                s = t.el = a(r(0, {
                    className: i.className
                }), {
                    position: i.position,
                    width: 0,
                    zIndex: i.zIndex
                }),
                o = i.radius + i.length + i.width,
                u, f;
            e && (e.insertBefore(s, e.firstChild || null), f = l(e), u = l(s), a(s, {
                left: (i.left == "auto" ? f.x - u.x + (e.offsetWidth >> 1) : parseInt(i.left, 10) + o) + "px",
                top: (i.top == "auto" ? f.y - u.y + (e.offsetHeight >> 1) : parseInt(i.top, 10) + o) + "px"
            })), s.setAttribute("role", "progressbar"), t.lines(s, t.opts);
            if (!n) {
                var c = 0,
                    h = (i.lines - 1) * (1 - i.direction) / 2,
                    p, d = i.fps,
                    v = d / i.speed,
                    m = (1 - i.opacity) / (v * i.trail / 100),
                    g = v / i.lines;
                (function y() {
                    c++;
                    for (var e = 0; e < i.lines; e++) p = Math.max(1 - (c + (i.lines - e) * g) % v * m, i.opacity), t.opacity(s, e * i.direction + h, p, i);
                    t.timeout = t.el && setTimeout(y, ~~(1e3 / d))
                })()
            }
            return t
        },
        stop: function() {
            var e = this.el;
            return e && (clearTimeout(this.timeout), e.parentNode && e.parentNode.removeChild(e), this.el = undefined), this
        },
        lines: function(e, t) {
            function l(e, n) {
                return a(r(), {
                    position: "absolute",
                    width: t.length + t.width + "px",
                    height: t.width + "px",
                    background: e,
                    boxShadow: n,
                    transformOrigin: "left",
                    transform: "rotate(" + ~~(360 / t.lines * s + t.rotate) + "deg) translate(" + t.radius + "px" + ",0)",
                    borderRadius: (t.corners * t.width >> 1) + "px"
                })
            }
            var s = 0,
                u = (t.lines - 1) * (1 - t.direction) / 2,
                f;
            for (; s < t.lines; s++) f = a(r(), {
                position: "absolute",
                top: 1 + ~(t.width / 2) + "px",
                transform: t.hwaccel ? "translate3d(0,0,0)" : "",
                opacity: t.opacity,
                animation: n && o(t.opacity, t.trail, u + s * t.direction, t.lines) + " " + 1 / t.speed + "s linear infinite"
            }), t.shadow && i(f, a(l("#000", "0 0 4px #000"), {
                top: "2px"
            })), i(e, i(f, l(c(t.color, s), "0 0 1px rgba(0,0,0,.1)")));
            return e
        },
        opacity: function(e, t, n) {
            t < e.childNodes.length && (e.childNodes[t].style.opacity = n)
        }
    });
    var v = a(r("group"), {
        behavior: "url(#default#VML)"
    });
    return !u(v, "transform") && v.adj ? d() : n = u(v, "animation"), p
}), define("common/progress", ["require", "adapter/dom", "adapter/enumerable", "lib/spin", "adapter/jsClass"], function(e) {
    var t = e("adapter/dom"),
        n = e("adapter/enumerable"),
        r = e("lib/spin"),
        i = e("adapter/jsClass"),
        s = i.Class({
            constructor: function(e) {
                var t = {
                    lines: 13,
                    length: 5,
                    width: 4,
                    radius: 9,
                    corners: 1,
                    rotate: 0,
                    color: "#f16e00",
                    speed: 1,
                    trail: 60,
                    shadow: !1,
                    hwaccel: !0,
                    className: "spinner",
                    zIndex: 499,
                    top: "auto",
                    left: "auto"
                };
                this.settings = n.defaults(e || {}, t), this.init()
            },
            init: function() {
                this.spinner = new r(this.settings)
            },
            start: function(e) {
                this.spinner.spin(e)
            },
            stop: function() {
                this.spinner.stop()
            },
            destroy: function() {
                delete this.spinner
            },
            setTop: function(e) {
                this.destroy(), this.settings.top = e, this.init(), this.start()
            }
        });
    return s
}), define("plugins/ajaxify", ["require", "adapter/dom", "common/basePlugin", "common/progress", "pubsub", "common/utils", "jq", "adapter/jsClass", "adapter/enumerable"], function(e) {
    var t = e("adapter/dom"),
        n = e("common/basePlugin"),
        r = e("common/progress"),
        i = e("pubsub"),
        s = e("common/utils"),
        o = e("jq"),
        u = e("adapter/jsClass"),
        a = e("adapter/enumerable"),
        f = u.Class(n, {
            constructor: function(e, n, r, i) {
                this.config = {
                    actions: {
                        ajaxifySetOptions: this.setOptionsHandler
                    }
                }, this.element = t.find("#" + e)[0];
                if (!this.element && !i.eventName) {
                    this.setInitError(e, n, r, i, "nie znaleziono elementu DOM i eventu dla ajaxify.");
                    return
                }
                f.$super.call(this, e, n, r, i), this.settings = a.defaults(this.options, {
                    loader: !0,
                    cover: !0,
                    showCover: !0,
                    coverClass: "o-cover",
                    redirect409: "/",
                    containerToCoverSelector: "",
                    dataType: "html",
                    addAjaxOpts: {}
                }), this.handler = null, this.inRequest = !1, this.body = t.find("body")[0], this.containerToCover = t.find(this.settings.containerToCoverSelector), this.log(this.options), this.element && (this.isForm = this.element.tagName.toLocaleLowerCase() === "form" ? !0 : !1, this.isLink = this.element.tagName.toLocaleLowerCase() === "a" ? !0 : !1), this.init()
            },
            init: function() {
                this.setAjaxifyEventName(), t.on(window, "resize", null, this.onWindowResize.bind(this)), this.startObserving();
                if ((this.settings.triggerOnInit === "true" || this.settings.triggerOnInit) && this.settings.triggerOnInit != "false" || this.settings.dynamic) this.settings.delay ? setTimeout(function() {
                    this.triggerAjaxifyOnInit()
                }.bind(this), this.settings.delay * 1e3) : this.triggerAjaxifyOnInit();
                this.observeInternalEvents()
            },
            triggerAjaxifyOnInit: function() {
                if (this.eventName.indexOf(".") === -1)
                    if (this.isForm) {
                        var e = [];
                        if (this.settings.triggerOnInitSubmitId && this.settings.triggerOnInitSubmitId != "") e = t.find("#" + this.settings.triggerOnInitSubmitId);
                        else {
                            var n = "input:submit";
                            this.settings.submitsClassToExclude && this.settings.submitsClassToExclude != "" && (n += ":not(." + this.settings.submitsClassToExclude + ")"), e = t.find(n, this.element)
                        }
                        e.length > 0 && e[0].click()
                    } else this.isLink && this.element.click();
                else this.publish(this.eventName)
            },
            onWindowResize: a.debounce(function() {
                var e = this.settings.cover !== "" && this.settings.cover !== !0 ? t.find("#" + this.settings.cover)[0] : this.element;
                this.containerToCover.length ? this.setCoverSize(this.containerToCover[0]) : e && this.setCoverSize(e), this.stopLoader(), this.createLoader(this.cover)
            }, 200),
            setAjaxifyEventName: function() {
                if (this.isForm) {
                    this.eventName = this.settings.eventName || "submit";
                    return
                }
                if (this.isLink) {
                    this.eventName = this.settings.eventName || "click";
                    return
                }
                if (this.element) {
                    this.isOther = this.element.tagName.toLocaleLowerCase(), this.eventName = this.settings.eventName, this.settings.eventName || this.log("W przypadku, gdy element nie jest linkiem/formularzem należy zdefiniować eventName.");
                    return
                }!this.element && !this.settings.eventName ? this.log("Nie znaleziono powiązanego elementu DOM, więc eventName musi być zdefiniowany.") : this.settings.eventName && (this.eventName = this.settings.eventName)
            },
            startObserving: function() {
                this.handler = this.handleAction.bind(this);
                var e = t.find("#" + t.identify(this.element));
                if (this.isOther) this.eventName.indexOf(".") === -1 ? t.on(e, this.eventName, null, this.handler) : this.eventSubscribeToken = this.subscribe(this.eventName, this.handler);
                else if (!this.settings.eventName) {
                    if (this.isForm) {
                        var n = t.find("input:submit", this.element),
                            r = t.filter(n, "." + this.settings.submitsClassToExclude),
                            i = t.filter(n, ":not(." + this.settings.submitsClassToExclude + ")");
                        a.each(i, function(e, n) {
                            t.on(e, "click", null, this.addHiddenSubmitInput)
                        }, this), a.each(r, function(e, n) {
                            t.on(e, "click", null, this.blockAjaxifySubmit.bind(this))
                        }, this)
                    }
                    t.on(e, this.eventName, null, this.handler)
                } else this.eventSubscribeToken = this.subscribe(this.settings.eventName, this.handler), t.on(e, this.eventName, null, function() {
                    return !1
                })
            },
            addHiddenSubmitInput: function(e, n) {
                var r = this;
                n && (r = n), t.append(r, '<input type="hidden" name="' + t.getAttribute(r, "name") + '" value="' + t.getAttribute(r, "value") + '">', "after")
            },
            blockAjaxifySubmit: function(e) {
                this.addHiddenSubmitInput(e, e.target), this.submitBlocked = !0
            },
            stopObserving: function() {
                this.element && t.off(document, this.eventName, "#" + this.element.id), this.eventSubscribeToken && this.unsubscribe(this.eventSubscribeToken)
            },
            observeInternalEvents: function() {
                this.subscribe(ns.events.ajaxUpdate, this.handleAjaxUpdate.bind(this)), this.subscribe(ns.events.ajaxError, this.handleAjaxError.bind(this))
            },
            stop: function() {
                f.$superp.stop.call(this), this.stopObserving()
            },
            handleAjaxUpdate: function() {
                this.coverBlocked || this.removeCover()
            },
            handleAjaxError: function() {
                this.removeCover()
            },
            handleAction: function(e) {
                if (this.submitBlocked) return this.submitBlocked = !1, this.element.submit(), !1;
                i.publish(ns.events.ajaxHandleAction, {
                    elementId: this.element.id
                });
                var t = "submit";
                this.askForAction(t, {
                    ev: "ajaxify-ask-for-submit",
                    modId: this.element.id
                }, this.onSubmitPermitted.bind(this));
                if (typeof e.srcElement == "object" && (e.srcElement.type !== "radio" && e.srcElement.type !== "checkbox" || e.srcElement.tagName.toLowerCase() !== "input") || !s.browser.versions.ie || s.browser.versions.ie > 8 || e.type == "submit") return !1
            },
            onSubmitPermitted: function(e, t) {
                t.status && this.submit()
            },
            tryUpdating: function() {
                var e = "ajax.update",
                    t = {
                        toUpdate: this.settings.toUpdate,
                        updateMethod: this.settings.updateMethod
                    };
                return this.askForAction(e, t, this.onUpdatePermitted.bind(this)), !1
            },
            onUpdatePermitted: function(e, t) {
                t.status && this.processResultParts()
            },
            serialize: function() {
                var e = "",
                    n, r, i;
                if (this.isOther) {
                    var s = t.getAttribute(this.element, "value");
                    s && (e = t.getAttribute(this.element, "name") + "=" + encodeURIComponent(s))
                } else this.isForm ? (e = t.serialize(this.element), n = t.getAttribute(this.element, "action"), i = n.indexOf("?"), e += i === -1 ? "" : "&" + t.getAttribute(this.element, "action").substring(i + 1)) : this.isLink && (r = this.removeParamfromURL(this.element.href, "_DARGS"), i = r.indexOf("?"), i != -1 && (e = this.element.href.substring(i + 1).split("#")[0] + "&" + e));
                if (this.settings.serializeFormId) {
                    var o = t.find("#" + this.settings.serializeFormId);
                    if (o.length) {
                        var u = t.serialize(o);
                        if (this.settings.serializeFormSubmitId) {
                            var a = t.find("#" + this.settings.serializeFormSubmitId)[0];
                            a ? u += "&" + t.param([{
                                name: a.name,
                                value: a.value
                            }]) : this.log("Brak elementu zdefiniowanego w serializeFormSubmitId.")
                        }
                        n = t.getAttribute(o, "action"), i = n.indexOf("?");
                        var f = i === -1 ? "" : "&" + t.getAttribute(o, "action").substring(i + 1);
                        e += "&" + u + f
                    }
                }
                return e
            },
            removeParamfromURL: function(e, t) {
                var n = new RegExp("\\?" + t + "=[^&]*&?", "gi");
                return e = e.replace(n, "?"), n = new RegExp("\\&" + t + "=[^&]*&?", "gi"), e = e.replace(n, "&"), e = e.replace(/(\?|&)$/, ""), n = null, e
            },
            submit: function() {
                this.addCover();
                if (this.settings.javaComponent && this.settings.javaMethod) var e = {
                    c: this.settings.co,
                    m: this.settings.m,
                    p: Object.toJSON(this.element.serialize())
                };
                else {
                    var t = {
                        url: this.getRequestUrl(),
                        type: this.isOther ? this.settings.method ? this.settings.method : "POST" : this.isLink ? this.settings.method ? this.settings.method : "GET" : this.element.method || "POST",
                        data: this.getRequestParams(),
                        context: this.settings.region || null,
                        dataType: this.settings.dataType,
                        addAjaxOpts: this.settings.addAjaxOpts || {}
                    };
                    this.settings.region && (t.context = this.settings.region), this.element.enctype == "multipart/form-data" ? (this.submitIframeForm(), this.optionsWhenIframe = t, i.subscribe(ns.events.ajaxFileUpload, this.iframeSubsritpionHanlder.bind(this))) : this.send(t)
                }
            },
            iframeSubsritpionHanlder: function(e, t) {
                t.iframeId && t.iframeId == this.element.id + "-iframe" && this.send(this.optionsWhenIframe)
            },
            submitIframeForm: function() {
                var e = t.find("#" + this.element.id + "-iframe");
                e.length || (e = document.createElement("DIV"), e.innerHTML = '<iframe style="display:none" src="about:blank" id="' + this.element.id + '-iframe" name="' + this.element.id + '-iframe" onload="ns.Core.startOne({modId: \'' + this.element.id + "-iframe', name: 'iframe-loaded'}); console.log('aaaa');\"></iframe>", document.body.appendChild(e)), this.element.target = this.element.id + "-iframe";
                var n = t.find("#" + this.element.id + " input.iframe-only");
                return a.each(n, function(e) {
                    e.value = !0
                }), !0
            },
            getRequestParams: function() {
                var e = this.settings.params ? this.settings.params + "&" + this.serialize() : this.serialize();
                return e.lastIndexOf("&") == e.length - 1 && (e = e.substring(0, e.length - 1)), this.log(e), e
            },
            getRequestUrl: function() {
                var e = ";jsessionid=",
                    n = this.settings.url || this.element.action || this.element.href || t.parent(this.element, "form")[0].action,
                    n = n.split("?")[0].split(e)[0] + this.getSessionId();
                if (this.settings.serializeFormId && n.indexOf("jsessionid") < 0) {
                    var r = t.find("#" + this.settings.serializeFormId);
                    if (r.length) {
                        var i = t.getAttribute(r, "action").split("?")[0].split(e)[1];
                        i && (n = e + i)
                    }
                }
                return this.log("url: ", n), n
            },
            getSessionId: function() {
                var e = ";jsessionid=",
                    n, r, i, s;
                return this.isForm && !this.isOther ? (r = t.getAttribute(this.element, "action"), n = r.indexOf(e) !== -1 ? r.split(e)[1].split("?")[0] : "") : this.element && this.element.tagName.toLowerCase() === "a" && (i = this.element.href, n = i.indexOf(e) !== -1 ? i.split(e)[1].split("?")[0] : ""), s = n ? e + n : "", s
            },
            send: function(e) {
                if (this.inRequest != 1) {
                    var n = e,
                        r = e.addAjaxOpts ? e.addAjaxOpts : {};
                    this.inRequest = !0, t.ajax(n.url, n.type, n.data, n.context, n.dataType, this.requestSuccess.bind(this), this.requestError.bind(this), r), this.publish(ns.events.ajaxSent, {
                        pluginId: this.pluginId,
                        element: this.element
                    })
                }
            },
            requestSuccess: function(e, t, n) {
                this.inRequest = !1;
                if (n.status == "404") {
                    this.requestError(n, t, "404");
                    return
                }
                this.settings.dataType == "html" && (this.html = e, this.scripts = this.getScriptsFromResponse(this.html), this.responseParts = this.getPartsFromResponse(this.html)), this.publish(ns.events.ajaxSuccess, {
                    pluginId: this.pluginId,
                    element: this.element,
                    html: e,
                    textStatus: t
                }), this.settings.dataType == "html" ? this.tryUpdating() : this.removeCover()
            },
            requestError: function(e, t, n) {
                this.inRequest = !1, this.publish(ns.events.ajaxError, {
                    pluginId: this.pluginId,
                    element: this.element,
                    xhr: e,
                    textStatus: t,
                    error: n
                });
                if (e.status == "409") {
                    window.location = this.settings.redirect409;
                    return
                }
            },
            checkRedirect: function() {
                return window.result && window.result.redirect ? (window.location = window.result.redirect, window.result = undefined, !0) : !1
            },
            processResultParts: function() {
                var e = this.responseParts,
                    n = this.settings.toUpdateSelector ? this.settings.toUpdateSelector.split(",") : "",
                    r, i, s, o;
                if (this.settings.ignoreResponse === "true") {
                    this.removeCover();
                    return
                }
                e.parts.length ? a.each(e.parts, function(s, u) {
                    i = e.data[u] ? t.trim(t.getData(e.data[u], "ajax-dest").split(",")[u]) : "", o = i !== "" ? t.find("#" + i)[0] : t.find("#" + this.settings.toUpdate)[0], i !== "" ? (this.settings.toUpdateSelector && (r = t.trim(n[u]), o = t.find(r)), this.appendResult(s, o, this.settings.updateMethod || "inside")) : this.removeCover()
                }, this) : this.html ? (o = t.find("#" + this.settings.toUpdate)[0], this.appendResult(this.html, o, this.settings.updateMethod || "inside")) : (this.log("ajax response html is empty."), this.removeCover()), this.evalScripts(), this.settings.triggerOnInit && this.stop()
            },
            getPartsFromResponse: function(e) {
                var n = [],
                    r = [],
                    i = e.split("<!--@@@@@@-->");
                return a.each(i, function(e, s) {
                    var o = e.split("<!--@@@@@@ @@@@@@-->"),
                        u = t.trim(o[1]),
                        a = t.htmlToDom(t.trim(o[0]))[0];
                    s < i.length - 1 && (n.push(a), r.push(u))
                }), {
                    data: n,
                    parts: r
                }
            },
            getScriptsFromResponse: function(e) {
                var n = t.htmlToDom("<div>" + t.trim(e) + "</div>"),
                    r = n.length > 1 ? a.rest(n, 1) : [];
                return r
            },
            appendResult: function(e, n) {
                if (n) {
                    if (this.settings.updateMethod == "bottom") {
                        var r = t.find(".o-cover", n);
                        r.length && t.css(r, "margin-bottom", -t.height(r))
                    }
                    t.append(n, e, this.settings.updateMethod || "inside"), this.checkRedirect() || (this.publish(ns.events.ajaxUpdate, {
                        update: n,
                        html: e
                    }), i.publish(ns.events.domUpdate, {
                        update: n,
                        html: e,
                        modId: this.modId
                    }))
                }
            },
            evalScripts: function() {
                a.each(this.scripts, function(e) {
                    t.append(this.body, e.outerHTML)
                }, this)
            },
            createCover: function(e) {
                this.coverElement = e;
                if (this.settings.showCover != "false") {
                    t.height(e) < 2 && t.css(this.coverElement, {
                        "min-height": 50
                    });
                    var n = this.body,
                        r = this.modId + "-cover";
                    t.find("#" + r).length && t.remove("#" + r), this.settings.coverPosition === "bottom" ? (this.settings.coverClass += " o-cover-bottom", n = e, t.append(n, '<div id="' + r + '" class="o-cover ' + this.settings.coverClass + '"></div>'), this.cover = t.find("#" + r)[0], this.createLoader(this.cover), t.addClass(this.cover, "o-cover-bottom-appended")) : (t.append(n, '<div id="' + r + '" class="o-cover ' + this.settings.coverClass + '"></div>'), this.cover = t.find("#" + r)[0], this.setCoverSize(e), this.createLoader(this.cover))
                }
                this.curtainToken = i.subscribe(ns.events.domUpdate, this.handleCoverDomUpdate.bind(this))
            },
            handleCoverDomUpdate: function() {
                this.cover && this.coverElement && this.calcCoverSize(this.coverElement, this.cover)
            },
            setCoverSize: function(e) {
                this.cover && this.calcCoverSize(e, this.cover)
            },
            calcCoverSize: function(e, n) {
                var r = t.offset(e),
                    i = t.scrollTop(window),
                    s = t.parents(e, ".popup");
                if (s.length) {
                    var o = t.css(s[0], "position");
                    t.css(n, "position", o)
                }
                var u = t.css(n, "position"),
                    a = u == "fixed" ? r.top - i : r.top;
                t.css(n, {
                    left: r.left,
                    top: a,
                    width: t.outerWidth(e),
                    height: t.outerHeight(e)
                })
            },
            addCover: function() {
                if (this.settings.showCover != "false") {
                    var e = this.settings.cover !== "" && this.settings.cover !== !0 ? t.find("#" + this.settings.cover)[0] : this.element;
                    this.containerToCover.length ? this.createCover(this.containerToCover[0]) : e && this.createCover(e)
                }
            },
            removeCover: function() {
                this.settings.showCover != "false" && (t.css(this.coverElement, {
                    "min-height": ""
                }), t.remove(this.cover, !0), this.stopLoader(), this.curtainToken && i.unsubscribe(this.curtainToken))
            },
            createLoader: function(e) {
                if (this.settings.loaderComment) {
                    t.append(e, '<span id="loaderComment">' + this.settings.loaderComment + "</span>");
                    var n = t.find("#loaderComment")[0],
                        i = !1;
                    t.css(n, {
                        position: "absolute",
                        "margin-left": "-" + t.width(n) / 2 + "px",
                        display: "none"
                    })
                }
                if (this.settings.loader) {
                    var s = "auto",
                        u = "auto",
                        a = parseInt(t.height(e), 10),
                        f = parseInt(t.height(window), 10);
                    if (a > f) {
                        var l = t.position(e).top,
                            c = o(document).scrollTop();
                        c > l ? s = c - l + parseInt(f / 2, 10) - 15 : s = parseInt((f - l) / 2, 10) + c - 15, s += "px"
                    }
                    this.loader && this.loader.setTop(s), this.loader = this.loader || new r({
                        top: s,
                        left: u
                    }), this.loader.start(e);
                    if (this.settings.loaderComment) {
                        var h = t.find("." + this.loader.settings.className, e)[0],
                            p = this.loader.spinner.opts;
                        t.css(n, {
                            top: t.css(h, "top"),
                            left: t.css(h, "left"),
                            "margin-top": p.length + p.width + p.radius + 10 + "px",
                            display: ""
                        }), i = !0
                    }
                }
                if (this.settings.loaderComment && !i) {
                    var d = window.getComputedStyle(document.getElementById(e.id), ":after");
                    t.css(n, {
                        top: d.getPropertyValue("background-position-y"),
                        left: d.getPropertyValue("background-position-x"),
                        "margin-top": parseInt(d.getPropertyValue("background-size"), 10) / 2 + 10 + "px",
                        display: ""
                    })
                }
            },
            stopLoader: function() {
                this.settings.loader && this.loader && (this.loader.stop(), this.settings.loaderComment && t.remove(t.find("#loaderComment")[0]))
            },
            setOptionsHandler: function(e, t) {
                return t.elementId && this.element.id == t.elementId && this.setOptions(t.options), !0
            },
            setOptions: function(e) {
                var t = e || {};
                this.settings = a.defaults(this.options, t), a.each(t, function(e, t) {
                    this.settings[t] = e
                }, this)
            }
        });
    return f
});