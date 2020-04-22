/*!
 * Licensed Materials - Property of IBM
 * � Copyright IBM Corp. 2016
 * US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 * 
 * @version 5.1.0.1731
 * @flags w3c,NDEBUG
 */
if (window.TLT) {
    throw "Attempting to recreate TLT. Library may be included more than once on the page."
}
window.TLT = (function() {
    function o(B, u, v, C) {
        var A = null,
            D = null,
            z = TLT.getService("queue"),
            x = TLT.getModule("replay"),
            w = null,
            y = TLT.utils.getOriginAndPath();
        if (!u || typeof u !== "string") {
            return
        }
        if (!v || typeof v !== "string") {
            v = ""
        }
        D = {
            type: 2,
            screenview: {
                type: B,
                name: u,
                url: y.path,
                host: y.origin,
                referrer: v
            }
        };
        if (B === "LOAD") {
            w = {
                type: "screenview_load",
                name: u
            }
        } else {
            if (B === "UNLOAD") {
                w = {
                    type: "screenview_unload",
                    name: u
                }
            }
        }
        if (w && x) {
            A = x.onevent(w)
        }
        if (A) {
            D.dcid = A
        }
        if (B === "LOAD" || B === "UNLOAD") {
            z.post("", D, "DEFAULT")
        }
    }

    function p(v) {
        var w, u = TLT.getService("queue");
        if (!v || !v.coords) {
            return
        }
        w = {
            type: 13,
            geolocation: {
                lat: v.coords.latitude,
                "long": v.coords.longitude,
                accuracy: Math.ceil(v.coords.accuracy)
            }
        };
        u.post("", w, "DEFAULT")
    }

    function k() {
        var v, u = TLT.getService("queue");
        v = {
            type: 13,
            geolocation: {
                errorCode: 201,
                error: "Permission denied."
            }
        };
        u.post("", v, "DEFAULT")
    }
    var s = (new Date()).getTime(),
        t = {},
        b = {},
        d = false,
        e = null,
        l = (function() {
            var v, x = [];

            function w(C) {
                var B = r.getService("browser"),
                    y = r.getCoreConfig().framesBlacklist,
                    A, z;
                v = v || [];
                C = C || null;
                if (typeof y !== "undefined" && y.length > 0) {
                    for (z = 0; z < y.length; z += 1) {
                        A = B.queryAll(y[z], C);
                        if (A && A.length > 0) {
                            v = v.concat(A)
                        }
                    }
                    x = x.concat(B.queryAll("iframe", C))
                }
            }

            function u(y) {
                if (r.utils.indexOf(x, y) < 0) {
                    w(y.ownerDocument)
                }
                return r.utils.indexOf(v, y) > -1
            }
            u.clearCache = function() {
                v = null
            };
            return u
        }()),
        n = null,
        f = {
            config: ["getConfig", "updateConfig", "getCoreConfig", "updateCoreConfig", "getModuleConfig", "updateModuleConfig", "getServiceConfig", "updateServiceConfig"],
            queue: ["post", "setAutoFlush", "flushAll"],
            browserBase: ["getXPathFromNode", "processDOMEvent"]
        },
        q = (function() {
            var u = {};
            return {
                normalizeModuleEvents: function(z, x, C, w) {
                    var v = u[z],
                        B = false,
                        y = false,
                        A = r.getService("browser");
                    C = C || r._getLocalTop();
                    w = w || C.document;
                    if (v) {
                        return
                    }
                    u[z] = {
                        loadFired: false,
                        pageHideFired: false
                    };
                    r.utils.forEach(x, function(D) {
                        switch (D.name) {
                            case "load":
                                B = true;
                                x.push(r.utils.mixin(r.utils.mixin({}, D), {
                                    name: "pageshow"
                                }));
                                break;
                            case "unload":
                                y = true;
                                x.push(r.utils.mixin(r.utils.mixin({}, D), {
                                    name: "pagehide"
                                }));
                                x.push(r.utils.mixin(r.utils.mixin({}, D), {
                                    name: "beforeunload"
                                }));
                                break;
                            case "change":
                                if (r.utils.isLegacyIE && r.getFlavor() === "w3c") {
                                    x.push(r.utils.mixin(r.utils.mixin({}, D), {
                                        name: "propertychange"
                                    }))
                                }
                                break
                        }
                    });
                    if (!B && !y) {
                        delete u[z];
                        return
                    }
                    u[z].silentLoad = !B;
                    u[z].silentUnload = !y;
                    if (!B) {
                        x.push({
                            name: "load",
                            target: C
                        })
                    }
                    if (!y) {
                        x.push({
                            name: "unload",
                            target: C
                        })
                    }
                },
                canPublish: function(v, x) {
                    var w;
                    if (u.hasOwnProperty(v) === false) {
                        return true
                    }
                    w = u[v];
                    switch (x.type) {
                        case "load":
                            w.pageHideFired = false;
                            w.loadFired = true;
                            return !w.silentLoad;
                        case "pageshow":
                            w.pageHideFired = false;
                            x.type = "load";
                            return !w.loadFired && !w.silentLoad;
                        case "pagehide":
                            x.type = "unload";
                            w.loadFired = false;
                            w.pageHideFired = true;
                            return !w.silentUnload;
                        case "unload":
                        case "beforeunload":
                            x.type = "unload";
                            w.loadFired = false;
                            return !w.pageHideFired && !w.silentUnload
                    }
                    return true
                },
                isUnload: function(v) {
                    return typeof v === "object" ? (v.type === "unload" || v.type === "beforeunload" || v.type === "pagehide") : false
                }
            }
        }()),
        c = {},
        a = {},
        g = function() {},
        i = null,
        j = true,
        m = null,
        h = function() {},
        r = {
            getStartTime: function() {
                return s
            },
            init: function(v, w) {
                var u;
                i = w;
                if (!j) {
                    throw "init must only be called once!"
                }
                j = false;
                u = function(x) {
                    x = x || window.event || {};
                    if (document.addEventListener || x.type === "load" || document.readyState === "complete") {
                        if (document.removeEventListener) {
                            document.removeEventListener("DOMContentLoaded", u, false);
                            window.removeEventListener("load", u, false)
                        } else {
                            document.detachEvent("onreadystatechange", u);
                            window.detachEvent("onload", u)
                        }
                        g(v, w)
                    }
                };
                if (document.readyState === "complete") {
                    setTimeout(u)
                } else {
                    if (document.addEventListener) {
                        document.addEventListener("DOMContentLoaded", u, false);
                        window.addEventListener("load", u, false)
                    } else {
                        document.attachEvent("onreadystatechange", u);
                        window.attachEvent("onload", u)
                    }
                }
            },
            isInitialized: function() {
                return d
            },
            getState: function() {
                return e
            },
            destroy: function(v) {
                var u = "",
                    x = "",
                    A = null,
                    B = null,
                    y = null,
                    w = null,
                    C = false;
                if (j) {
                    return false
                }
                this.stopAll();
                if (!v) {
                    w = this.getService("browser");
                    for (u in c) {
                        if (c.hasOwnProperty(u) && w !== null) {
                            x = u.split("|")[0];
                            A = c[u].target;
                            C = c[u].delegateTarget || undefined;
                            w.unsubscribe(x, A, this._publishEvent, C)
                        }
                    }
                }
                for (B in b) {
                    if (b.hasOwnProperty(B)) {
                        y = b[B].instance;
                        if (y && typeof y.destroy === "function") {
                            y.destroy()
                        }
                        b[B].instance = null
                    }
                }
                l.clearCache();
                c = {};
                d = false;
                j = true;
                e = "destroyed";
                if (typeof i === "function") {
                    try {
                        i("destroyed")
                    } catch (z) {}
                }
            },
            _updateModules: function(x) {
                var w = this.getCoreConfig(),
                    v = this.getService("browser"),
                    z = null,
                    u = null;
                if (w && v && w.modules) {
                    try {
                        for (u in w.modules) {
                            if (w.modules.hasOwnProperty(u)) {
                                z = w.modules[u];
                                if (t.hasOwnProperty(u)) {
                                    if (z.enabled === false) {
                                        this.stop(u);
                                        continue
                                    }
                                    this.start(u);
                                    if (z.events) {
                                        this._registerModuleEvents(u, z.events, x)
                                    }
                                }
                            }
                        }
                        this._registerModuleEvents.clearCache()
                    } catch (y) {
                        r.destroy();
                        return false
                    }
                } else {
                    return false
                }
                return true
            },
            rebind: function(u) {
                r._updateModules(u)
            },
            getSessionData: function() {
                if (!r.isInitialized()) {
                    return
                }
                var y = null,
                    v = null,
                    w, x, u = r.getCoreConfig();
                if (!u || !u.sessionDataEnabled) {
                    return null
                }
                v = u.sessionData || {};
                w = v.sessionQueryName;
                if (w) {
                    x = r.utils.getQueryStringValue(w, v.sessionQueryDelim)
                } else {
                    w = v.sessionCookieName || "TLTSID";
                    x = r.utils.getCookieValue(w)
                }
                if (w && x) {
                    y = y || {};
                    y.tltSCN = w;
                    y.tltSCV = x;
                    y.tltSCVNeedsHashing = !!v.sessionValueNeedsHashing
                }
                return y
            },
            logGeolocation: function(u) {
                var y = r.getModuleConfig("replay") || {},
                    x = r.utils.getValue(y, "geolocation.options", {
                        timeout: 30000,
                        enableHighAccuracy: true,
                        maximumAge: 0
                    }),
                    w = r.utils.getValue(y, "geolocation.enabled", false),
                    v = window.navigator;
                if (!u) {
                    if (!w || !v || !v.geolocation || !v.geolocation.getCurrentPosition) {
                        return
                    }
                    v.geolocation.getCurrentPosition(p, k, x)
                } else {
                    p(u)
                }
            },
            logCustomEvent: function(x, v) {
                if (!r.isInitialized()) {
                    return
                }
                var w = null,
                    u = this.getService("queue");
                if (!x || typeof x !== "string") {
                    x = "CUSTOM"
                }
                v = v || {};
                w = {
                    type: 5,
                    customEvent: {
                        name: x,
                        data: v
                    }
                };
                u.post("", w, "DEFAULT")
            },
            logExceptionEvent: function(y, w, v) {
                if (!r.isInitialized()) {
                    return
                }
                var x = null,
                    u = this.getService("queue");
                if (!y || typeof y !== "string") {
                    return
                }
                w = w || "";
                v = v || "";
                x = {
                    type: 6,
                    exception: {
                        description: y,
                        url: w,
                        line: v
                    }
                };
                u.post("", x, "DEFAULT")
            },
            logScreenviewLoad: function(w, v, u) {
                if (!r.isInitialized()) {
                    return
                }
                o("LOAD", w, v, u)
            },
            logScreenviewUnload: function(u) {
                if (!r.isInitialized()) {
                    return
                }
                o("UNLOAD", u)
            },
            logDOMCapture: function(w, y) {
                var z = null,
                    x, v, A, u;
                if (!this.isInitialized()) {
                    return z
                }
                if (r.utils.isLegacyIE) {
                    return z
                }
                v = this.getService("domCapture");
                if (v) {
                    w = w || window.document;
                    y = y || {};
                    x = v.captureDOM(w, y);
                    if (x) {
                        z = y.dcid || ("dcid-" + this.utils.getSerialNumber() + "." + (new Date()).getTime());
                        x.dcid = z;
                        x.eventOn = !!y.eventOn;
                        A = {
                            type: 12,
                            domCapture: x
                        };
                        u = this.getService("queue");
                        u.post("", A, "DEFAULT")
                    } else {
                        z = null
                    }
                }
                return z
            },
            performDOMCapture: function(w, u, v) {
                return this.logDOMCapture(u, v)
            },
            _bridgeCallback: function(v) {
                var u = a[v];
                if (u && u.enabled) {
                    return u
                }
                return null
            },
            logScreenCapture: function() {
                if (!r.isInitialized()) {
                    return
                }
                var u = r._bridgeCallback("screenCapture");
                if (u !== null) {
                    u.cbFunction()
                }
            },
            enableTealeafFramework: function() {
                if (!r.isInitialized()) {
                    return
                }
                var u = r._bridgeCallback("enableTealeafFramework");
                if (u !== null) {
                    u.cbFunction()
                }
            },
            disableTealeafFramework: function() {
                if (!r.isInitialized()) {
                    return
                }
                var u = r._bridgeCallback("disableTealeafFramework");
                if (u !== null) {
                    u.cbFunction()
                }
            },
            startNewTLFSession: function() {
                if (!r.isInitialized()) {
                    return
                }
                var u = r._bridgeCallback("startNewTLFSession");
                if (u !== null) {
                    u.cbFunction()
                }
            },
            currentSessionId: function() {
                if (!r.isInitialized()) {
                    return
                }
                var v, u = r._bridgeCallback("currentSessionId");
                if (u !== null) {
                    v = u.cbFunction()
                }
                return v
            },
            defaultValueForConfigurableItem: function(u) {
                if (!r.isInitialized()) {
                    return
                }
                var w, v = r._bridgeCallback("defaultValueForConfigurableItem");
                if (v !== null) {
                    w = v.cbFunction(u)
                }
                return w
            },
            valueForConfigurableItem: function(u) {
                if (!r.isInitialized()) {
                    return
                }
                var w, v = r._bridgeCallback("valueForConfigurableItem");
                if (v !== null) {
                    w = v.cbFunction(u)
                }
                return w
            },
            setConfigurableItem: function(v, x) {
                if (!r.isInitialized()) {
                    return
                }
                var u = false,
                    w = r._bridgeCallback("setConfigurableItem");
                if (w !== null) {
                    u = w.cbFunction(v, x)
                }
                return u
            },
            addAdditionalHttpHeader: function(v, x) {
                if (!r.isInitialized()) {
                    return
                }
                var u = false,
                    w = r._bridgeCallback("addAdditionalHttpHeader");
                if (w !== null) {
                    u = w.cbFunction(v, x)
                }
                return u
            },
            logCustomEventBridge: function(w, x, v) {
                if (!r.isInitialized()) {
                    return
                }
                var u = false,
                    y = r._bridgeCallback("logCustomEventBridge");
                if (y !== null) {
                    u = y.cbFunction(w, x, v)
                }
                return u
            },
            registerBridgeCallbacks: function(x) {
                var w = 0,
                    v = 0,
                    u = null;
                if (!x) {
                    return false
                }
                if (x.length === 0) {
                    a = {};
                    return false
                }
                try {
                    for (w = 0, v = x.length; w < v; w += 1) {
                        u = x[w];
                        if (typeof u === "object" && u.cbType && u.cbFunction) {
                            a[u.cbType] = {
                                enabled: u.enabled,
                                cbFunction: u.cbFunction
                            }
                        }
                    }
                } catch (y) {
                    return false
                }
                return true
            },
            redirectQueue: function(w) {
                var z, v, u, x, y;
                if (!w || !w.length) {
                    return w
                }
                u = a.messageRedirect;
                if (u && u.enabled) {
                    y = r.getService("serializer");
                    for (z = 0, v = w.length; z < v; z += 1) {
                        x = u.cbFunction(y.serialize(w[z]), w[z]);
                        if (x && typeof x === "object") {
                            w[z] = x
                        } else {
                            w.splice(z, 1);
                            z -= 1;
                            v = w.length
                        }
                    }
                }
                return w
            },
            _hasSameOrigin: function(u) {
                try {
                    return u.document.location.host === document.location.host && u.document.location.protocol === document.location.protocol
                } catch (v) {}
                return false
            },
            provideRequestHeaders: function() {
                var v = null,
                    u = a.addRequestHeaders;
                if (u && u.enabled) {
                    v = u.cbFunction()
                }
                return v
            },
            _registerModuleEvents: (function() {
                var w, y = 0,
                    x = function(C, B, A) {
                        if (C === "window") {
                            return B
                        }
                        if (C === "document") {
                            return A
                        }
                        return C
                    };

                function z(A, H, K) {
                    var J = r.getService("browserBase"),
                        E = r.getService("browser"),
                        I = r.utils.getDocument(K),
                        C = r._getLocalTop(),
                        B = r.utils.isIFrameDescendant(K),
                        G, F, D;
                    K = K || I;
                    q.normalizeModuleEvents(A, H, C, I);
                    if (B) {
                        G = J.ElementData.prototype.examineID(K).id;
                        if (typeof G === "string") {
                            G = G.slice(0, G.length - 1);
                            for (F in c) {
                                if (c.hasOwnProperty(F)) {
                                    for (D = 0; D < c[F].length; D += 1) {
                                        if (A === c[F][D]) {
                                            if (F.indexOf(G) !== -1) {
                                                delete c[F];
                                                break
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    r.utils.forEach(H, function(L) {
                        var O = x(L.target, C, I) || I,
                            N = x(L.delegateTarget, C, I),
                            M = "";
                        if (L.recurseFrames !== true && B) {
                            return
                        }
                        if (typeof O === "string") {
                            if (L.delegateTarget && r.getFlavor() === "jQuery") {
                                M = r._buildToken4delegateTarget(L.name, O, L.delegateTarget);
                                if (!c.hasOwnProperty(M)) {
                                    c[M] = [A];
                                    c[M].target = O;
                                    c[M].delegateTarget = N;
                                    E.subscribe(L.name, O, r._publishEvent, N, M)
                                } else {
                                    c[M].push(A)
                                }
                            } else {
                                r.utils.forEach(E.queryAll(O, K), function(P) {
                                    var Q = w.get(P);
                                    if (!Q) {
                                        Q = J.ElementData.prototype.examineID(P);
                                        w.set(P, Q)
                                    }
                                    M = L.name + "|" + Q.id + Q.type;
                                    if (r.utils.indexOf(c[M], A) !== -1) {
                                        return
                                    }
                                    c[M] = c[M] || [];
                                    c[M].push(A);
                                    c[M].target = P;
                                    E.subscribe(L.name, P, r._publishEvent)
                                })
                            }
                        } else {
                            M = r._buildToken4bubbleTarget(L.name, O, typeof L.target === "undefined");
                            if (!c.hasOwnProperty(M)) {
                                c[M] = [A];
                                E.subscribe(L.name, O, r._publishEvent)
                            } else {
                                if (r.utils.indexOf(c[M], A) === -1) {
                                    c[M].push(A)
                                }
                            }
                        }
                        if (M !== "") {
                            if (typeof O !== "string") {
                                c[M].target = O
                            }
                        }
                    })
                }

                function v(A) {
                    var B = r.utils.getIFrameWindow(A);
                    return (B !== null) && r._hasSameOrigin(B) && (B.document !== null) && B.document.readyState === "complete"
                }

                function u(B, H, J) {
                    J = J || r._getLocalTop().document;
                    w = w || new r.utils.WeakMap();
                    z(B, H, J);
                    if (B !== "performance") {
                        var F = null,
                            A = null,
                            C = r.getService("browser"),
                            I = r.getService("domCapture"),
                            G = C.queryAll("iframe, frame", J),
                            E, D;
                        for (E = 0, D = G.length; E < D; E += 1) {
                            F = G[E];
                            if (l(F)) {
                                continue
                            }
                            if (v(F)) {
                                A = r.utils.getIFrameWindow(F);
                                r._registerModuleEvents(B, H, A.document);
                                I.observeWindow(A);
                                continue
                            }
                            y += 1;
                            (function(M, K, N) {
                                var L = null,
                                    O = {
                                        moduleName: M,
                                        moduleEvents: K,
                                        hIFrame: N,
                                        _registerModuleEventsDelayed: function() {
                                            var P = null;
                                            if (!l(N)) {
                                                P = r.utils.getIFrameWindow(N);
                                                if (r._hasSameOrigin(P)) {
                                                    r._registerModuleEvents(M, K, P.document);
                                                    I.observeWindow(P)
                                                }
                                            }
                                            y -= 1;
                                            if (!y) {
                                                r._publishEvent({
                                                    type: "loadWithFrames",
                                                    custom: true
                                                })
                                            }
                                        }
                                    };
                                r.utils.addEventListener(N, "load", function() {
                                    O._registerModuleEventsDelayed()
                                });
                                if (r.utils.isLegacyIE && v(N)) {
                                    L = r.utils.getIFrameWindow(N);
                                    r.utils.addEventListener(L.document, "readystatechange", function() {
                                        O._registerModuleEventsDelayed()
                                    })
                                }
                            }(B, H, F))
                        }
                    }
                }
                u.clearCache = function() {
                    if (w) {
                        w.clear();
                        w = null
                    }
                };
                return u
            }()),
            _buildToken4currentTarget: function(v) {
                var w = v.nativeEvent ? v.nativeEvent.currentTarget : null,
                    u = w ? this.getService("browserBase").ElementData.prototype.examineID(w) : {
                        id: v.target ? v.target.id : null,
                        type: v.target ? v.target.idType : -1
                    };
                return v.type + "|" + u.id + u.type
            },
            _buildToken4delegateTarget: function(u, w, v) {
                return u + "|" + w + "|" + v
            },
            _buildToken4bubbleTarget: function(v, C, B, G) {
                var z = r._getLocalTop(),
                    u, w = r.getService("browser"),
                    H = function(I) {
                        var J = null;
                        if (r._hasSameOrigin(u.parent)) {
                            r.utils.forEach(w.queryAll("iframe, frame", u.parent.document), function(K) {
                                var L = null;
                                if (!l(K)) {
                                    L = r.utils.getIFrameWindow(K);
                                    if (r._hasSameOrigin(L) && L.document === I) {
                                        J = K
                                    }
                                }
                            })
                        }
                        return J
                    },
                    D = r.utils.getDocument(C),
                    F = this.getService("browserBase"),
                    E = null,
                    y, x = v,
                    A;
                if (D) {
                    u = D.defaultView || D.parentWindow
                }
                if (C === window || C === window.window) {
                    x += "|null-2|window"
                } else {
                    if (B && u && r._hasSameOrigin(u.parent) && typeof D !== "undefined" && z.document !== D) {
                        E = H(D);
                        if (E) {
                            y = F.ElementData.prototype.examineID(E);
                            x += "|" + y.xPath + "-2"
                        }
                    } else {
                        if (G && G !== document && r.getFlavor() === "jQuery") {
                            x += "|null-2|" + r.utils.getTagName(C) + "|" + r.utils.getTagName(G)
                        } else {
                            x += "|null-2|document"
                        }
                    }
                }
                return x
            },
            _reinitConfig: function() {
                r._updateModules()
            },
            _publishEvent: function(u) {
                var v = null,
                    y = null,
                    A = (u.delegateTarget && u.data) ? u.data : r._buildToken4currentTarget(u),
                    B = null,
                    C, E, D, F, x = null,
                    G = false,
                    H = false,
                    z = r.getCoreConfig(),
                    w = r.getService("browser"),
                    I = u.delegateTarget || null;
                if (m) {
                    clearTimeout(m);
                    m = null
                }
                D = r.utils.getValue(z, "inactivityTimeout", 600000);
                if (D) {
                    m = setTimeout(h, D)
                }
                if ((u.type === "load" || u.type === "pageshow") && !u.nativeEvent.customLoad) {
                    return
                }
                if (r.utils.isIE) {
                    if (u.type === "click") {
                        n = u.target.element
                    }
                    if (u.type === "beforeunload") {
                        G = false;
                        r.utils.forEach(z.ieExcludedLinks, function(K) {
                            var L, J, M = w.queryAll(K);
                            for (L = 0, J = M ? M.length : 0; L < J; L += 1) {
                                if (typeof M[L] !== undefined && M[L] === n) {
                                    G = true;
                                    return
                                }
                            }
                        });
                        if (G) {
                            return
                        }
                    }
                }
                if (q.isUnload(u)) {
                    e = "unloading"
                }
                if (u.type === "change" && r.utils.isLegacyIE && r.getFlavor() === "w3c" && (u.target.element.type === "checkbox" || u.target.element.type === "radio")) {
                    return
                }
                if (u.type === "propertychange") {
                    if (u.nativeEvent.propertyName === "checked" && (u.target.element.type === "checkbox" || (u.target.element.type === "radio" && u.target.element.checked))) {
                        u.type = "change";
                        u.target.type = "INPUT"
                    } else {
                        return
                    }
                }
                if (!c.hasOwnProperty(A)) {
                    if (u.hasOwnProperty("nativeEvent")) {
                        F = u.nativeEvent.currentTarget || u.nativeEvent.target
                    }
                    A = r._buildToken4bubbleTarget(u.type, F, true, I)
                }
                if (c.hasOwnProperty(A)) {
                    B = c[A];
                    for (C = 0, E = B.length; C < E; C += 1) {
                        v = B[C];
                        y = r.getModule(v);
                        x = r.utils.mixin({}, u);
                        if (y && r.isStarted(v) && typeof y.onevent === "function") {
                            H = q.canPublish(v, x);
                            if (H) {
                                y.onevent(x)
                            }
                        }
                    }
                }
                if (x && x.type === "unload" && H) {
                    r.destroy()
                }
            },
            _getLocalTop: function() {
                return window.window
            },
            addModule: function(u, v) {
                t[u] = {
                    creator: v,
                    instance: null,
                    context: null,
                    messages: []
                };
                if (this.isInitialized()) {
                    this.start(u)
                }
            },
            getModule: function(u) {
                if (t[u] && t[u].instance) {
                    return t[u].instance
                }
                return null
            },
            removeModule: function(u) {
                this.stop(u);
                delete t[u]
            },
            isStarted: function(u) {
                return t.hasOwnProperty(u) && t[u].instance !== null
            },
            start: function(v) {
                var w = t[v],
                    u = null;
                if (w && w.instance === null) {
                    w.context = new TLT.ModuleContext(v, this);
                    u = w.instance = w.creator(w.context);
                    if (typeof u.init === "function") {
                        u.init()
                    }
                }
            },
            startAll: function() {
                var u = null;
                for (u in t) {
                    if (t.hasOwnProperty(u)) {
                        this.start(u)
                    }
                }
            },
            stop: function(v) {
                var w = t[v],
                    u = null;
                if (w && w.instance !== null) {
                    u = w.instance;
                    if (typeof u.destroy === "function") {
                        u.destroy()
                    }
                    w.instance = w.context = null
                }
            },
            stopAll: function() {
                var u = null;
                for (u in t) {
                    if (t.hasOwnProperty(u)) {
                        this.stop(u)
                    }
                }
            },
            addService: function(v, u) {
                b[v] = {
                    creator: u,
                    instance: null
                }
            },
            getService: function(u) {
                if (b.hasOwnProperty(u)) {
                    if (!b[u].instance) {
                        try {
                            b[u].instance = b[u].creator(this);
                            if (typeof b[u].instance.init === "function") {
                                b[u].instance.init()
                            }
                        } catch (v) {
                            return null
                        }
                        if (typeof b[u].instance.getServiceName !== "function") {
                            b[u].instance.getServiceName = function() {
                                return u
                            }
                        }
                    }
                    return b[u].instance
                }
                return null
            },
            removeService: function(u) {
                delete b[u]
            },
            broadcast: function(x) {
                var w = 0,
                    u = 0,
                    y = null,
                    v = null;
                if (x && typeof x === "object") {
                    for (y in t) {
                        if (t.hasOwnProperty(y)) {
                            v = t[y];
                            if (r.utils.indexOf(v.messages, x.type) > -1) {
                                if (typeof v.instance.onmessage === "function") {
                                    v.instance.onmessage(x)
                                }
                            }
                        }
                    }
                }
            },
            listen: function(u, w) {
                var v = null;
                if (this.isStarted(u)) {
                    v = t[u];
                    if (r.utils.indexOf(v.messages, w) === -1) {
                        v.messages.push(w)
                    }
                }
            },
            fail: function(w, v, u) {
                w = "UIC FAILED. " + w;
                try {
                    r.destroy(!!u)
                } finally {
                    r.utils.clog(w);
                    throw new r.UICError(w, v)
                }
            },
            UICError: (function() {
                function u(v, w) {
                    this.message = v;
                    this.code = w
                }
                u.prototype = new Error();
                u.prototype.name = "UICError";
                u.prototype.constructor = u;
                return u
            }()),
            getFlavor: function() {
                return "w3c"
            }
        };
    h = function() {
        r.utils.clog("UIC self-terminated due to inactivity timeout.");
        r.destroy()
    };
    g = function(w, E) {
        var y, u, x, F, v, C, D, A, z;
        if (d) {
            r.utils.clog("TLT.init() called more than once. Ignoring.");
            return
        }
        if (TLT && TLT.replay) {
            return
        }
        y = r.getService("config");
        y.updateConfig(w);
        if (!r._updateModules()) {
            if (e !== "destroyed") {
                r.destroy()
            }
            return
        }
        if (y.subscribe) {
            y.subscribe("configupdated", r._reinitConfig)
        }
        d = true;
        e = "loaded";
        u = {
            type: "load",
            target: window.window,
            srcElement: window.window,
            currentTarget: window.window,
            bubbles: true,
            cancelBubble: false,
            cancelable: true,
            timeStamp: +new Date(),
            customLoad: true
        };
        F = r.getService("browserBase");
        x = new F.WebEvent(u);
        r._publishEvent(x);
        D = r.getService("ajax");
        C = r.getServiceConfig("queue");
        A = C.queues;
        for (z = 0; z < A.length; z += 1) {
            if (A[z].checkEndpoint) {
                D.sendRequest({
                    oncomplete: function() {},
                    timeout: A[z].endpointCheckTimeout || 3000,
                    url: A[z].endpoint,
                    headers: {
                        "X-Tealeaf-EndpointCheck": true
                    },
                    async: true,
                    error: function() {
                        r.setAutoFlush(false);
                        r.destroy()
                    }
                })
            }
        }
        if (typeof i === "function") {
            try {
                i("initialized")
            } catch (B) {}
        }
    };
    (function() {
        var v = null,
            w, u;
        for (v in f) {
            if (f.hasOwnProperty(v)) {
                for (w = 0, u = f[v].length; w < u; w += 1) {
                    (function(y, x) {
                        r[x] = function() {
                            var z = this.getService(y);
                            if (z) {
                                return z[x].apply(z, arguments)
                            }
                        }
                    }(v, f[v][w]))
                }
            }
        }
    }());
    return r
}());
(function() {
    var f = window.navigator.userAgent.toLowerCase(),
        e = (f.indexOf("msie") !== -1 || f.indexOf("trident") !== -1),
        d = (function() {
            var i = !!window.performance;
            return (e && (!i || document.documentMode < 9))
        }()),
        g = (f.indexOf("android") !== -1),
        a = /(ipad|iphone|ipod)/.test(f),
        c = (f.indexOf("opera mini") !== -1),
        h = 1,
        b = {
            isIE: e,
            isLegacyIE: d,
            isAndroid: g,
            isLandscapeZeroDegrees: false,
            isiOS: a,
            isOperaMini: c,
            isUndefOrNull: function(i) {
                return typeof i === "undefined" || i === null
            },
            getSerialNumber: function() {
                var i;
                i = h;
                h += 1;
                return i
            },
            getRandomString: function(o, n) {
                var m, l, j = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                    k = "";
                if (!o) {
                    return k
                }
                if (typeof n !== "string") {
                    n = j
                }
                for (m = 0, l = n.length; m < o; m += 1) {
                    k += n.charAt(Math.floor(Math.random() * l))
                }
                return k
            },
            getValue: function(o, n, k) {
                var m, j, l;
                k = typeof k === "undefined" ? null : k;
                if (!o || typeof o !== "object" || typeof n !== "string") {
                    return k
                }
                l = n.split(".");
                for (m = 0, j = l.length; m < j; m += 1) {
                    if (this.isUndefOrNull(o) || typeof o[l[m]] === "undefined") {
                        return k
                    }
                    o = o[l[m]]
                }
                return o
            },
            indexOf: function(m, l) {
                var k, j;
                if (m && m.indexOf) {
                    return m.indexOf(l)
                }
                if (m && m instanceof Array) {
                    for (k = 0, j = m.length; k < j; k += 1) {
                        if (m[k] === l) {
                            return k
                        }
                    }
                }
                return -1
            },
            forEach: function(n, m, l) {
                var k, j;
                if (!n || !n.length || !m || !m.call) {
                    return
                }
                for (k = 0, j = n.length; k < j; k += 1) {
                    m.call(l, n[k], k, n)
                }
            },
            some: function(n, m) {
                var k, j, l = false;
                for (k = 0, j = n.length; k < j; k += 1) {
                    l = m(n[k], k, n);
                    if (l) {
                        return l
                    }
                }
                return l
            },
            convertToArray: function(l) {
                var m = 0,
                    k = l.length,
                    j = [];
                while (m < k) {
                    j.push(l[m]);
                    m += 1
                }
                return j
            },
            mixin: function(m) {
                var l, k, j, i;
                for (j = 1, i = arguments.length; j < i; j += 1) {
                    k = arguments[j];
                    for (l in k) {
                        if (Object.prototype.hasOwnProperty.call(k, l)) {
                            m[l] = k[l]
                        }
                    }
                }
                return m
            },
            extend: function(i, j, k) {
                var l = "";
                for (l in k) {
                    if (Object.prototype.hasOwnProperty.call(k, l)) {
                        if (i && Object.prototype.toString.call(k[l]) === "[object Object]") {
                            if (typeof j[l] === "undefined") {
                                j[l] = {}
                            }
                            b.extend(i, j[l], k[l])
                        } else {
                            j[l] = k[l]
                        }
                    }
                }
                return j
            },
            clone: function(j) {
                var k, i;
                if (null === j || "object" !== typeof j) {
                    return j
                }
                if (j instanceof Object) {
                    k = (Object.prototype.toString.call(j) === "[object Array]") ? [] : {};
                    for (i in j) {
                        if (Object.prototype.hasOwnProperty.call(j, i)) {
                            k[i] = b.clone(j[i])
                        }
                    }
                    return k
                }
            },
            isEqual: function(l, k) {
                var m, j;
                if (l === k) {
                    return true
                }
                if (typeof l !== typeof k) {
                    return false
                }
                if (l instanceof Object) {
                    if (Object.prototype.toString.call(l) === "[object Array]") {
                        if (l.length !== k.length) {
                            return false
                        }
                        for (m = 0, j = l.length; m < j; m += 1) {
                            if (!this.isEqual(l[m], k[m])) {
                                return false
                            }
                        }
                        return true
                    }
                }
                return false
            },
            createObject: (function() {
                var i = null,
                    j = null;
                if (typeof Object.create === "function") {
                    i = Object.create
                } else {
                    j = function() {};
                    i = function(k) {
                        if (typeof k !== "object" && typeof k !== "function") {
                            throw new TypeError("Object prototype need to be an object!")
                        }
                        j.prototype = k;
                        return new j()
                    }
                }
                return i
            }()),
            access: function(o, m) {
                var n = m || window,
                    k, l, j;
                if (typeof o !== "string" || (typeof n !== "object" && n !== null)) {
                    return
                }
                k = o.split(".");
                for (l = 0, j = k.length; l < j; l += 1) {
                    if (l === 0 && k[l] === "window") {
                        continue
                    }
                    if (!Object.prototype.hasOwnProperty.call(n, k[l])) {
                        return
                    }
                    n = n[k[l]];
                    if (l < (j - 1) && !(n instanceof Object)) {
                        return
                    }
                }
                return n
            },
            isNumeric: function(i) {
                return !isNaN(i + 1 - 1)
            },
            isUpperCase: function(i) {
                return i === i.toUpperCase() && i !== i.toLowerCase()
            },
            isLowerCase: function(i) {
                return i === i.toLowerCase() && i !== i.toUpperCase()
            },
            getDocument: function(i) {
                if (i && i.nodeType !== 9) {
                    return (!b.isUndefOrNull(i.ownerDocument)) ? (i.ownerDocument) : (i.document)
                }
                return i
            },
            getWindow: function(j) {
                try {
                    if (j.self !== j) {
                        var i = b.getDocument(j);
                        return (!b.isUndefOrNull(i.defaultView)) ? (i.defaultView) : (i.parentWindow)
                    }
                } catch (k) {
                    j = null
                }
                return j
            },
            getOriginAndPath: function(i) {
                var j = {};
                i = i || window.location;
                if (i.origin) {
                    j.origin = i.origin
                } else {
                    j.origin = (i.protocol || "") + "//" + (i.host || "")
                }
                j.path = i.pathname || "";
                if (j.origin.indexOf("file://") > -1) {
                    j.path = j.path.replace(/(.*?)(?=\/[^.\/]*\.app)/g, "").replace(".app//", ".app/")
                }
                return j
            },
            getIFrameWindow: function(k) {
                var i = null;
                if (!k) {
                    return i
                }
                try {
                    i = k.contentWindow || (k.contentDocument ? k.contentDocument.parentWindow : null)
                } catch (j) {}
                return i
            },
            getTagName: function(j) {
                var i = "";
                if (j === document) {
                    i = "document"
                } else {
                    if (j === window || j === window.window) {
                        i = "window"
                    } else {
                        if (typeof j === "string") {
                            i = j.toLowerCase()
                        } else {
                            if (!b.isUndefOrNull(j)) {
                                if (j.tagName) {
                                    i = j.tagName.toLowerCase()
                                } else {
                                    if (j.nodeName) {
                                        i = j.nodeName.toLowerCase()
                                    } else {
                                        i = ""
                                    }
                                }
                            }
                        }
                    }
                }
                return i
            },
            isIFrameDescendant: function(j) {
                var i = b.getWindow(j);
                return (i ? (i != TLT._getLocalTop()) : false)
            },
            getOrientationMode: function(i) {
                var j = "INVALID";
                if (typeof i !== "number") {
                    return j
                }
                switch (i) {
                    case 0:
                    case 180:
                    case 360:
                        j = "PORTRAIT";
                        break;
                    case 90:
                    case -90:
                    case 270:
                        j = "LANDSCAPE";
                        break;
                    default:
                        j = "UNKNOWN";
                        break
                }
                return j
            },
            clog: (function(i) {
                return function() {}
            }(window)),
            trim: function(i) {
                if (!i || !i.toString) {
                    return i
                }
                return i.toString().replace(/^\s+|\s+$/g, "")
            },
            ltrim: function(i) {
                if (!i || !i.toString) {
                    return i
                }
                return i.toString().replace(/^\s+/, "")
            },
            rtrim: function(i) {
                if (!i || !i.toString) {
                    return i
                }
                return i.toString().replace(/\s+$/, "")
            },
            setCookie: function(r, j, q, t, m) {
                var o, p, n, l, k = "",
                    s;
                if (!r) {
                    return
                }
                r = encodeURIComponent(r);
                j = encodeURIComponent(j);
                n = (m || location.hostname).split(".");
                s = ";path=" + (t || "/");
                if (typeof q === "number") {
                    if (this.isIE) {
                        l = new Date();
                        l.setTime(l.getTime() + (q * 1000));
                        k = ";expires=" + l.toUTCString()
                    } else {
                        k = ";max-age=" + q
                    }
                }
                for (o = 2, p = n.length; o <= p; o += 1) {
                    document.cookie = r + "=" + j + ";domain=" + n.slice(-o).join(".") + s + k;
                    if (this.getCookieValue(r) === j) {
                        break
                    }
                }
            },
            getCookieValue: function(p, r) {
                var m, n, l, q, k = null,
                    j;
                try {
                    r = r || document.cookie;
                    if (!p || !p.toString) {
                        return null
                    }
                    p += "=";
                    j = p.length;
                    q = r.split(";");
                    for (m = 0, n = q.length; m < n; m += 1) {
                        l = q[m];
                        l = b.ltrim(l);
                        if (l.indexOf(p) === 0) {
                            k = l.substring(j, l.length);
                            break
                        }
                    }
                } catch (o) {
                    k = null
                }
                return k
            },
            getQueryStringValue: function(o, r, k) {
                var n, m, s, l = null,
                    p;
                try {
                    k = k || window.location.search;
                    s = k.length;
                    if (!o || !o.toString || !s) {
                        return null
                    }
                    r = r || "&";
                    k = r + k.substring(1);
                    o = r + o + "=";
                    n = k.indexOf(o);
                    if (n !== -1) {
                        p = n + o.length;
                        m = k.indexOf(r, p);
                        if (m === -1) {
                            m = s
                        }
                        l = decodeURIComponent(k.substring(p, m))
                    }
                } catch (q) {}
                return l
            },
            addEventListener: (function() {
                if (window.addEventListener) {
                    return function(j, i, k) {
                        j.addEventListener(i, k, false)
                    }
                }
                return function(j, i, k) {
                    j.attachEvent("on" + i, k)
                }
            }()),
            matchTarget: function(u, p) {
                var n, m, t = -1,
                    r, k, l, s, o, q;
                if (!u || !p) {
                    return t
                }
                if (!this.browserService || !this.browserBaseService) {
                    this.browserService = TLT.getService("browser");
                    this.browserBaseService = TLT.getService("browserBase")
                }
                for (n = 0, o = u.length; n < o && t === -1; n += 1) {
                    q = u[n];
                    if (typeof q === "string") {
                        r = this.browserService.queryAll(q);
                        for (m = 0, k = r ? r.length : 0; m < k; m += 1) {
                            if (r[m]) {
                                l = this.browserBaseService.ElementData.prototype.examineID(r[m]);
                                if (l.type === p.idType && l.id === p.id) {
                                    t = n;
                                    break
                                }
                            }
                        }
                    } else {
                        if (q && q.id && q.idType && p.idType.toString() === q.idType.toString()) {
                            switch (typeof q.id) {
                                case "string":
                                    if (q.id === p.id) {
                                        t = n
                                    }
                                    break;
                                case "object":
                                    s = new RegExp(q.id.regex, q.id.flags);
                                    if (s.test(p.id)) {
                                        t = n
                                    }
                                    break
                            }
                        }
                    }
                }
                return t
            },
            WeakMap: (function() {
                function i(m, l) {
                    var k, j;
                    m = m || [];
                    for (k = 0, j = m.length; k < j; k += 1) {
                        if (m[k][0] === l) {
                            return k
                        }
                    }
                    return -1
                }
                return function() {
                    var j = [];
                    this.set = function(l, m) {
                        var k = i(j, l);
                        j[k > -1 ? k : j.length] = [l, m]
                    };
                    this.get = function(l) {
                        var k = j[i(j, l)];
                        return (k ? k[1] : undefined)
                    };
                    this.clear = function() {
                        j = []
                    };
                    this.has = function(k) {
                        return (i(j, k) >= 0)
                    };
                    this.remove = function(l) {
                        var k = i(j, l);
                        if (k >= 0) {
                            j.splice(k, 1)
                        }
                    };
                    this["delete"] = this.remove
                }
            }())
        };
    if (typeof TLT === "undefined" || !TLT) {
        window.TLT = {}
    }
    TLT.utils = b
}());
(function() {
    TLT.EventTarget = function() {
        this._handlers = {}
    };
    TLT.EventTarget.prototype = {
        constructor: TLT.EventTarget,
        publish: function(c, f) {
            var d = 0,
                a = 0,
                b = this._handlers[c],
                e = {
                    type: c,
                    data: f
                };
            if (typeof b !== "undefined") {
                for (a = b.length; d < a; d += 1) {
                    b[d](e)
                }
            }
        },
        subscribe: function(a, b) {
            if (!this._handlers.hasOwnProperty(a)) {
                this._handlers[a] = []
            }
            this._handlers[a].push(b)
        },
        unsubscribe: function(c, e) {
            var d = 0,
                a = 0,
                b = this._handlers[c];
            if (b) {
                for (a = b.length; d < a; d += 1) {
                    if (b[d] === e) {
                        b.splice(d, 1);
                        return
                    }
                }
            }
        }
    }
}());
TLT.ModuleContext = (function() {
    var a = ["broadcast", "getConfig:getModuleConfig", "listen", "post", "getXPathFromNode", "performDOMCapture", "getStartTime"];
    return function(f, d) {
        var h = {},
            g = 0,
            b = a.length,
            j = null,
            e = null,
            c = null;
        for (g = 0; g < b; g += 1) {
            j = a[g].split(":");
            if (j.length > 1) {
                c = j[0];
                e = j[1]
            } else {
                c = j[0];
                e = j[0]
            }
            h[c] = (function(i) {
                return function() {
                    var k = d.utils.convertToArray(arguments);
                    k.unshift(f);
                    return d[i].apply(d, k)
                }
            }(e))
        }
        h.utils = d.utils;
        return h
    }
}());
TLT.addService("config", function(a) {
    function d(f, e) {
        a.utils.extend(true, f, e);
        c.publish("configupdated", c.getConfig())
    }
    var b = {
            core: {},
            modules: {},
            services: {}
        },
        c = a.utils.extend(false, a.utils.createObject(new TLT.EventTarget()), {
            getConfig: function() {
                return b
            },
            updateConfig: function(e) {
                d(b, e)
            },
            getCoreConfig: function() {
                return b.core
            },
            updateCoreConfig: function(e) {
                d(b.core, e)
            },
            getServiceConfig: function(e) {
                return b.services[e] || null
            },
            updateServiceConfig: function(f, e) {
                if (typeof b.services[f] === "undefined") {
                    b.services[f] = {}
                }
                d(b.services[f], e)
            },
            getModuleConfig: function(e) {
                return b.modules[e] || null
            },
            updateModuleConfig: function(f, e) {
                if (typeof b.modules[f] === "undefined") {
                    b.modules[f] = {}
                }
                d(b.modules[f], e)
            },
            destroy: function() {
                b = {
                    core: {},
                    modules: {},
                    services: {}
                }
            }
        });
    return c
});
TLT.addService("queue", function(r) {
    var C = null,
        f = r.getService("ajax"),
        l = r.getService("browser"),
        m = r.getService("encoder"),
        j = r.getService("serializer"),
        z = r.getService("config"),
        h = r.getService("message"),
        p = null,
        A = {},
        c = true,
        o = false,
        k = (function() {
            var H = {};

            function K(L) {
                return typeof H[L] !== "undefined"
            }

            function D(L, M) {
                if (!K(L)) {
                    H[L] = {
                        data: [],
                        queueId: L,
                        url: M.url,
                        eventThreshold: M.eventThreshold,
                        sizeThreshold: M.sizeThreshold || 0,
                        size: -1,
                        serializer: M.serializer,
                        encoder: M.encoder,
                        crossDomainEnabled: !!M.crossDomainEnabled,
                        crossDomainIFrame: M.crossDomainIFrame
                    }
                }
                return H[L]
            }

            function F(L) {
                if (K(L)) {
                    delete H[L]
                }
            }

            function I(L) {
                if (K(L)) {
                    return H[L]
                }
                return null
            }

            function G(M) {
                var L = I(M);
                if (L !== null) {
                    L.data = []
                }
            }

            function J(L) {
                var M = null;
                if (K(L)) {
                    M = I(L).data;
                    G(L)
                }
                return M
            }

            function E(O, P) {
                var M = null,
                    L = null,
                    Q = window.tlBridge,
                    N = window.iOSJSONShuttle;
                if ((typeof Q !== "undefined") && (typeof Q.addMessage === "function")) {
                    L = j.serialize(P);
                    Q.addMessage(L)
                } else {
                    if ((typeof N !== "undefined") && (typeof N === "function")) {
                        L = j.serialize(P);
                        N(L)
                    } else {
                        if (K(O)) {
                            M = I(O);
                            M.data.push(P);
                            M.data = r.redirectQueue(M.data);
                            if (M.sizeThreshold) {
                                L = j.serialize(M.data);
                                M.size = L.length
                            }
                            return M.data.length
                        }
                    }
                }
                return 0
            }
            return {
                exists: K,
                add: D,
                remove: F,
                get: I,
                clear: G,
                flush: J,
                push: E
            }
        }());

    function a() {}

    function n() {
        return window.location.pathname
    }

    function b(F, J, G, I) {
        var D = k.get(F),
            H = {
                name: J,
                value: G
            },
            E = null;
        if (typeof J !== "string" || typeof G !== "string") {
            return
        }
        if (!D.headers) {
            D.headers = {
                once: [],
                always: []
            }
        }
        E = !!I ? D.headers.always : D.headers.once;
        E.push(H)
    }

    function B(F, I) {
        var H = 0,
            E = 0,
            D = k.get(F),
            J = D.headers,
            G = null;
        I = I || {};

        function K(M, O) {
            var N = 0,
                L = 0,
                P = null;
            for (N = 0, L = M.length; N < L; N += 1) {
                P = M[N];
                O[P.name] = P.value
            }
        }
        if (J) {
            G = [J.always, J.once];
            for (H = 0, E = G.length; H < E; H += 1) {
                K(G[H], I)
            }
        }
        return I
    }

    function t(E) {
        var D = null,
            F = null;
        if (!k.exists(E)) {
            throw new Error("Queue: " + E + " does not exist!")
        }
        D = k.get(E);
        F = D ? D.headers : null;
        if (F) {
            F.once = []
        }
    }

    function y() {
        var E = 0,
            D, G, F = r.provideRequestHeaders();
        if (F && F.length) {
            for (E = 0, D = F.length; E < D; E += 1) {
                G = F[E];
                b("DEFAULT", G.name, G.value, G.recurring)
            }
        }
        return E
    }

    function g(H) {
        var G, D, F = [],
            E = "";
        if (!H || !H.length) {
            return E
        }
        for (G = 0, D = H.length; G < D; G += 1) {
            F[H[G].type] = true
        }
        for (G = 0, D = F.length; G < D; G += 1) {
            if (F[G]) {
                if (E) {
                    E += ","
                }
                E += G
            }
        }
        return E
    }

    function v(E, N) {
        var I = k.flush(E),
            K = I !== null ? I.length : 0,
            J = k.get(E),
            F = {
                "Content-Type": "application/json",
                "X-Tealeaf": "device (UIC) Lib/5.1.0.1731",
                "X-TealeafType": "GUI",
                "X-TeaLeaf-Page-Url": n()
            },
            O = J.serializer || "json",
            D = J.encoder,
            G, H, M = null;
        if (!K) {
            return
        }
        F["X-Tealeaf-MessageTypes"] = g(I);
        I = h.wrapMessages(I);
        if (O) {
            I = j.serialize(I, O)
        }
        if (D) {
            H = m.encode(I, D);
            if (H && H.data && !H.error) {
                I = H.data;
                F["Content-Encoding"] = H.encoding
            }
        }
        y();
        B(E, F);
        if (J.crossDomainEnabled) {
            M = r.utils.getIFrameWindow(J.crossDomainIFrame);
            if (!M) {
                return
            }
            G = {
                request: {
                    url: J.url,
                    async: !N,
                    headers: F,
                    data: I
                }
            };
            if (!r.utils.isIE && typeof window.postMessage === "function") {
                M.postMessage(G, J.crossDomainIFrame.src)
            } else {
                try {
                    M.sendMessage(G)
                } catch (L) {
                    return
                }
            }
        } else {
            f.sendRequest({
                oncomplete: a,
                url: J.url,
                async: !N,
                headers: F,
                data: I
            })
        }
        t(E)
    }

    function e(G) {
        var D = null,
            F = C.queues,
            E = 0;
        for (E = 0; E < F.length; E += 1) {
            D = F[E];
            v(D.qid, G)
        }
        return true
    }

    function i(E, H) {
        var G = k.push(E, h.createMessage(H)),
            D = k.get(E),
            F = D.size;
        if ((G >= D.eventThreshold || F >= D.sizeThreshold) && c && r.getState() !== "unloading") {
            v(E)
        }
    }

    function d(F) {
        var E = null,
            I = C.queues,
            H = "",
            G = 0,
            D = 0;
        for (G = 0; G < I.length; G += 1) {
            E = I[G];
            if (E && E.modules) {
                for (D = 0; D < E.modules.length; D += 1) {
                    H = E.modules[D];
                    if (H === F) {
                        return E.qid
                    }
                }
            }
        }
        return p.qid
    }

    function w(F, D) {
        A[F] = window.setTimeout(function E() {
            v(F);
            A[F] = window.setTimeout(E, D)
        }, D)
    }

    function u() {
        var D = 0;
        for (D in A) {
            if (A.hasOwnProperty(D)) {
                window.clearTimeout(A[D]);
                delete A[D]
            }
        }
        A = {}
    }

    function s(D) {}

    function q(D) {
        C = D;
        r.utils.forEach(C.queues, function(E, F) {
            var G = null;
            if (E.qid === "DEFAULT") {
                p = E
            }
            if (E.crossDomainEnabled) {
                G = l.query(E.crossDomainFrameSelector);
                if (!G) {
                    r.fail("Cross domain iframe not found")
                }
            }
            k.add(E.qid, {
                url: E.endpoint,
                eventThreshold: E.maxEvents,
                sizeThreshold: E.maxSize || 0,
                serializer: E.serializer,
                encoder: E.encoder,
                timerInterval: E.timerInterval || 0,
                crossDomainEnabled: E.crossDomainEnabled || false,
                crossDomainIFrame: G
            });
            if (typeof E.timerInterval !== "undefined" && E.timerInterval > 0) {
                w(E.qid, E.timerInterval)
            }
        });
        z.subscribe("configupdated", s);
        o = true
    }

    function x() {
        if (c) {
            e(!C.asyncReqOnUnload)
        }
        z.unsubscribe("configupdated", s);
        u();
        C = null;
        p = null;
        o = false
    }
    return {
        init: function() {
            if (!o) {
                q(z.getServiceConfig("queue") || {})
            } else {}
        },
        destroy: function() {
            x()
        },
        _getQueue: function(D) {
            return k.get(D).data
        },
        setAutoFlush: function(D) {
            if (D === true) {
                c = true
            } else {
                c = false
            }
        },
        flush: function(D) {
            if (!k.exists(D)) {
                throw new Error("Queue: " + D + " does not exist!")
            }
            v(D)
        },
        flushAll: function(D) {
            return e(!!D)
        },
        post: function(E, F, D) {
            D = D || d(E);
            if (!k.exists(D)) {
                throw new Error("Queue: " + D + " does not exist!")
            }
            i(D, F)
        }
    }
});
TLT.addService("browserBase", function(r) {
    var h, L = r.utils,
        i = {
            optgroup: true,
            option: true,
            nobr: true
        },
        q = {},
        e = r.getService("config"),
        n = null,
        A, w, g, u, F = false;

    function s() {
        e = r.getService("config");
        n = r.getService("serializer");
        A = r.getService("config").getServiceConfig("browser") || {};
        w = A.hasOwnProperty("blacklist") ? A.blacklist : [];
        g = A.hasOwnProperty("customid") ? A.customid : []
    }

    function b() {
        s();
        e.subscribe("configupdated", s);
        n = r.getService("serializer");
        F = true
    }

    function G() {
        e.unsubscribe("configupdated", s);
        F = false
    }

    function v(P) {
        var N, M, O;
        if (!P || !P.id || typeof P.id !== "string") {
            return false
        }
        for (N = 0, M = w.length; N < M; N += 1) {
            if (typeof w[N] === "string") {
                if (P.id === w[N]) {
                    return false
                }
            } else {
                if (typeof w[N] === "object") {
                    O = new RegExp(w[N].regex, w[N].flags);
                    if (O.test(P.id)) {
                        return false
                    }
                }
            }
        }
        return true
    }

    function p(O, P) {
        var M = {
                type: null,
                subType: null
            },
            N;
        if (!O) {
            return M
        }
        N = O.type;
        switch (N) {
            case "focusin":
                N = "focus";
                break;
            case "focusout":
                N = "blur";
                break;
            default:
                break
        }
        M.type = N;
        return M
    }

    function y(N) {
        var M = {
            type: null,
            subType: null
        };
        if (!N) {
            return M
        }
        M.type = L.getTagName(N);
        M.subType = N.type || null;
        return M
    }

    function c(M, O, N) {
        var S = {
                HTML_ID: "-1",
                XPATH_ID: "-2",
                ATTRIBUTE_ID: "-3"
            },
            R, P = null,
            Q;
        if (!M || !O) {
            return P
        }
        R = N || window.document;
        O = O.toString();
        if (O === S.HTML_ID) {
            if (R.getElementById) {
                P = R.getElementById(M)
            } else {
                if (R.querySelector) {
                    P = R.querySelector("#" + M)
                }
            }
        } else {
            if (O === S.ATTRIBUTE_ID) {
                Q = M.split("=");
                if (R.querySelector) {
                    P = R.querySelector("[" + Q[0] + '="' + Q[1] + '"]')
                }
            } else {
                if (O === S.XPATH_ID) {
                    P = q.xpath(M, R)
                }
            }
        }
        return P
    }
    u = (function() {
        var M = {
            nobr: true,
            p: true
        };

        function N(S, Q) {
            var V, T, U = false,
                Y = null,
                O = null,
                Z = null,
                X = [],
                W = true,
                R = r._getLocalTop(),
                P = "";
            while (W) {
                W = false;
                if (!L.isUndefOrNull(S)) {
                    P = L.getTagName(S);
                    if (!L.isUndefOrNull(P)) {
                        if (M.hasOwnProperty(P)) {
                            S = S.parentNode;
                            P = L.getTagName(S)
                        }
                    }
                    for (U = v(S); S !== document && (!U || Q); U = v(S)) {
                        Z = S.parentNode;
                        if (!Z) {
                            O = r.utils.getWindow(S);
                            if (!O) {
                                return X
                            }
                            Z = (O !== R) ? O.frameElement : document
                        }
                        Y = Z.firstChild;
                        if (typeof Y === "undefined") {
                            return X
                        }
                        for (T = 0; Y; Y = Y.nextSibling) {
                            if (Y.nodeType === 1 && L.getTagName(Y) === P) {
                                if (Y === S) {
                                    X[X.length] = [P, T];
                                    break
                                }
                                T += 1
                            }
                        }
                        S = Z;
                        P = L.getTagName(S)
                    }
                    if (U && !Q) {
                        X[X.length] = [S.id];
                        if (r.utils.isIFrameDescendant(S)) {
                            W = true;
                            S = r.utils.getWindow(S).frameElement
                        }
                    }
                }
            }
            return X
        }
        return function(R, P) {
            var O = N(R, !!P),
                S = [],
                Q = O.length;
            if (Q < 1) {
                return "null"
            }
            while (Q) {
                Q -= 1;
                if (O[Q].length > 1) {
                    S[S.length] = '["' + O[Q][0] + '",' + O[Q][1] + "]"
                } else {
                    S[S.length] = "[" + n.serialize(O[Q][0], "json") + "]"
                }
            }
            return ("[" + S.join(",") + "]")
        }
    }());

    function K(N) {
        var O = {
                left: -1,
                top: -1
            },
            M;
        N = N || document;
        M = N.documentElement || N.body.parentNode || N.body;
        O.left = (typeof window.pageXOffset === "number") ? window.pageXOffset : M.scrollLeft;
        O.top = (typeof window.pageYOffset === "number") ? window.pageYOffset : M.scrollTop;
        return O
    }

    function J(M) {
        return M && typeof M.originalEvent !== "undefined" && typeof M.isDefaultPrevented !== "undefined" && !M.isSimulated
    }

    function k(M) {
        if (!M) {
            return null
        }
        if (M.type && M.type.indexOf("touch") === 0) {
            if (J(M)) {
                M = M.originalEvent
            }
            if (M.type === "touchstart") {
                M = M.touches[M.touches.length - 1]
            } else {
                if (M.type === "touchend") {
                    M = M.changedTouches[0]
                }
            }
        }
        return M
    }

    function t(P) {
        var S = P || window.event,
            R = document.documentElement,
            M = document.body,
            Q = false,
            O = null,
            N = 0;
        if (J(S)) {
            S = S.originalEvent
        }
        if (typeof P === "undefined" || typeof S.target === "undefined") {
            S.target = S.srcElement || window.window;
            S.timeStamp = Number(new Date());
            if (S.pageX === null || typeof S.pageX === "undefined") {
                S.pageX = S.clientX + ((R && R.scrollLeft) || (M && M.scrollLeft) || 0) - ((R && R.clientLeft) || (M && M.clientLeft) || 0);
                S.pageY = S.clientY + ((R && R.scrollTop) || (M && M.scrollTop) || 0) - ((R && R.clientTop) || (M && M.clientTop) || 0)
            }
            S.preventDefault = function() {
                this.returnValue = false
            };
            S.stopPropagation = function() {
                this.cancelBubble = true
            }
        }
        if (window.chrome && S.path !== undefined && S.type === "click") {
            if (S.path.length === undefined) {
                return S
            }
            for (N = 0; N < S.path.length; N++) {
                if (L.getTagName(S.path[N]) === "button") {
                    Q = true;
                    O = S.path[N];
                    N = S.path.length
                }
            }
            if (Q) {
                return {
                    originalEvent: S,
                    target: O,
                    srcElement: O,
                    type: S.type,
                    pageX: document.body.scrollLeft + O.getBoundingClientRect().left,
                    pageY: document.body.scrollTop + O.getBoundingClientRect().top
                }
            }
        }
        return S
    }

    function x(N) {
        var M = null;
        if (!N) {
            return null
        }
        if (N.srcElement) {
            M = N.srcElement
        } else {
            M = N.target;
            if (!M) {
                M = N.explicitOriginalTarget
            }
            if (!M) {
                M = N.originalTarget
            }
        }
        if (!M && N.type.indexOf("touch") === 0) {
            M = k(N).target
        }
        while (M && i[L.getTagName(M)]) {
            M = M.parentNode
        }
        if (!M && N.srcElement === null) {
            M = window.window
        }
        return M
    }

    function I(N) {
        var Q = 0,
            P = 0,
            O = document.documentElement,
            M = document.body;
        N = k(N);
        if (N) {
            if (N.pageX || N.pageY) {
                Q = N.pageX;
                P = N.pageY
            } else {
                if (N.clientX || N.clientY) {
                    Q = N.clientX + (O ? O.scrollLeft : (M ? M.scrollLeft : 0)) - (O ? O.clientLeft : (M ? M.clientLeft : 0));
                    P = N.clientY + (O ? O.scrollTop : (M ? M.scrollTop : 0)) - (O ? O.clientTop : (M ? M.clientTop : 0))
                }
            }
        }
        return {
            x: Q,
            y: P
        }
    }
    q.xpath = function(U, W) {
        var S = null,
            N, T = null,
            M, Q, P, O, R, V;
        if (!U) {
            return null
        }
        S = n.parse(U);
        W = W || document;
        N = W;
        if (!S) {
            return null
        }
        for (Q = 0, R = S.length; Q < R && N; Q += 1) {
            T = S[Q];
            if (T.length === 1) {
                if (W.getElementById) {
                    N = W.getElementById(T[0])
                } else {
                    if (W.querySelector) {
                        N = W.querySelector("#" + T[0])
                    } else {
                        N = null
                    }
                }
            } else {
                for (P = 0, O = -1, V = N.childNodes.length; P < V; P += 1) {
                    if (N.childNodes[P].nodeType === 1 && L.getTagName(N.childNodes[P]) === T[0].toLowerCase()) {
                        O += 1;
                        if (O === T[1]) {
                            N = N.childNodes[P];
                            break
                        }
                    }
                }
                if (O === -1) {
                    return null
                }
            }
            M = L.getTagName(N);
            if (M === "frame" || M === "iframe") {
                N = L.getIFrameWindow(N).document;
                W = N
            }
        }
        return (N === W || !N) ? null : N
    };

    function m(M, N) {
        this.x = M || 0;
        this.y = N || 0
    }

    function a(N, M) {
        this.width = Math.round(N || 0);
        this.height = Math.round(M || 0)
    }

    function d(N, O) {
        var Q, M, P;
        O = x(N);
        Q = this.examineID(O);
        M = y(O);
        P = this.examinePosition(N, O);
        this.element = O;
        this.id = Q.id;
        this.idType = Q.type;
        this.type = M.type;
        this.subType = M.subType;
        this.state = this.examineState(O);
        this.position = new m(P.x, P.y);
        this.size = new a(P.width, P.height);
        this.xPath = Q.xPath;
        this.name = Q.name
    }
    d.HTML_ID = -1;
    d.XPATH_ID = -2;
    d.ATTRIBUTE_ID = -3;
    d.prototype.examineID = function(S) {
        var O, U, V, M, N, Q = g.length,
            P;
        try {
            V = u(S)
        } catch (R) {}
        N = S.name;
        try {
            if (!r.utils.getWindow(S) || !r.utils.isIFrameDescendant(S)) {
                if (v(S)) {
                    O = S.id;
                    U = d.HTML_ID
                } else {
                    if (g.length && S.attributes) {
                        while (Q) {
                            Q -= 1;
                            P = S.attributes[g[Q]];
                            if (typeof P !== "undefined") {
                                O = g[Q] + "=" + (P.value || P);
                                U = d.ATTRIBUTE_ID
                            }
                        }
                    }
                }
            }
        } catch (T) {}
        if (!O) {
            O = V;
            U = d.XPATH_ID
        }
        return {
            id: O,
            type: U,
            xPath: V,
            name: N
        }
    };
    d.prototype.examineState = function(S) {
        var M = {
                a: ["innerText", "href"],
                input: {
                    range: ["maxValue:max", "value"],
                    checkbox: ["value", "checked"],
                    radio: ["value", "checked"],
                    image: ["src"]
                },
                select: ["value"],
                button: ["value", "innerText"],
                textarea: ["value"]
            },
            N = L.getTagName(S),
            T = M[N] || null,
            O = null,
            V = null,
            P = 0,
            R = 0,
            Q = null,
            U = "";
        if (T !== null) {
            if (Object.prototype.toString.call(T) === "[object Object]") {
                T = T[S.type] || ["value"]
            }
            V = {};
            for (U in T) {
                if (T.hasOwnProperty(U)) {
                    if (T[U].indexOf(":") !== -1) {
                        Q = T[U].split(":");
                        V[Q[0]] = S[Q[1]]
                    } else {
                        if (T[U] === "innerText") {
                            V[T[U]] = r.utils.trim(S.innerText || S.textContent)
                        } else {
                            V[T[U]] = S[T[U]]
                        }
                    }
                }
            }
        }
        if (N === "select" && S.options && !isNaN(S.selectedIndex)) {
            V.index = S.selectedIndex;
            if (V.index >= 0 && V.index < S.options.length) {
                O = S.options[S.selectedIndex];
                V.value = O.getAttribute("value") || O.getAttribute("label") || O.text || O.innerText;
                V.text = O.text || O.innerText
            }
        }
        return V
    };

    function E() {
        var N = 1,
            O, Q, M;
        if (document.body.getBoundingClientRect) {
            try {
                O = document.body.getBoundingClientRect()
            } catch (P) {
                r.utils.clog("getBoundingClientRect failed.", P);
                return N
            }
            Q = O.right - O.left;
            M = document.body.offsetWidth;
            N = Math.round((Q / M) * 100) / 100
        }
        return N
    }

    function o(N) {
        var P, M, O, R;
        if (!N || !N.getBoundingClientRect) {
            return {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            }
        }
        try {
            P = N.getBoundingClientRect();
            R = K(document)
        } catch (Q) {
            r.utils.clog("getBoundingClientRect failed.", Q);
            return {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            }
        }
        M = {
            x: P.left + R.left,
            y: P.top + R.top,
            width: P.right - P.left,
            height: P.bottom - P.top
        };
        if (r.utils.isIE) {
            M.x -= document.documentElement.clientLeft;
            M.y -= document.documentElement.clientTop;
            O = E();
            if (O !== 1) {
                M.x = Math.round(M.x / O);
                M.y = Math.round(M.y / O);
                M.width = Math.round(M.width / O);
                M.height = Math.round(M.height / O)
            }
        }
        return M
    }
    d.prototype.examinePosition = function(N, O) {
        var P = I(N),
            M = o(O);
        M.x = (P.x || P.y) ? Math.round(Math.abs(P.x - M.x)) : M.width / 2;
        M.y = (P.x || P.y) ? Math.round(Math.abs(P.y - M.y)) : M.height / 2;
        return M
    };

    function H() {
        var M = (typeof window.orientation === "number") ? window.orientation : 0;
        if (r.utils.isLandscapeZeroDegrees) {
            if (Math.abs(M) === 180 || Math.abs(M) === 0) {
                M = 90
            } else {
                if (Math.abs(M) === 90) {
                    M = 0
                }
            }
        }
        return M
    }

    function B(S) {
        var P, M, R, Q, O, N;
        if (S) {
            return S
        }
        R = r.getCoreConfig() || {};
        O = R.modules;
        S = {};
        for (N in O) {
            if (O.hasOwnProperty(N) && O[N].events) {
                for (P = 0, M = O[N].events.length; P < M; P += 1) {
                    Q = O[N].events[P];
                    if (Q.state) {
                        S[Q.name] = Q.state
                    }
                }
            }
        }
        return S
    }

    function j(M) {
        var N;
        h = B(h);
        if (h[M.type]) {
            N = L.getValue(M, h[M.type], null)
        }
        return N
    }

    function l(N) {
        var P, M, O;
        this.data = N.data || null;
        this.delegateTarget = N.delegateTarget || null;
        if (N.gesture || (N.originalEvent && N.originalEvent.gesture)) {
            this.gesture = N.gesture || N.originalEvent.gesture;
            this.gesture.idType = (new d(this.gesture, this.gesture.target)).idType
        }
        N = t(N);
        P = I(N);
        this.custom = false;
        this.nativeEvent = this.custom === true ? null : N;
        this.position = new m(P.x, P.y);
        this.target = new d(N, N.target);
        this.orientation = H();
        O = j(N);
        if (O) {
            this.target.state = O
        }
        this.timestamp = (new Date()).getTime();
        M = p(N, this.target);
        this.type = M.type;
        this.subType = M.subType
    }

    function D(M) {
        r._publishEvent(new l(M))
    }

    function f(Q, O) {
        var T, R, S = false,
            W = null,
            M = null,
            X = null,
            V = [],
            U = true,
            P = r._getLocalTop(),
            N = "";
        while (U) {
            U = false;
            if (L.isUndefOrNull(Q)) {
                break
            }
            N = L.getTagName(Q);
            if (!L.isUndefOrNull(N)) {
                if (f.specialChildNodes.hasOwnProperty(N)) {
                    Q = Q.parentNode;
                    U = true;
                    continue
                }
            }
            for (S = v(Q); Q !== document && (!S || O); S = v(Q)) {
                X = Q.parentNode;
                if (!X) {
                    M = r.utils.getWindow(Q);
                    if (!M || Q.nodeType !== 9) {
                        V.push([N, 0]);
                        break
                    }
                    X = (M !== P) ? M.frameElement : document
                }
                W = X.firstChild;
                if (typeof W === "undefined") {
                    break
                }
                for (R = 0; W; W = W.nextSibling) {
                    if (W.nodeType === 1 && L.getTagName(W) === N) {
                        if (W === Q) {
                            V[V.length] = [N, R];
                            break
                        }
                        R += 1
                    }
                }
                Q = X;
                N = L.getTagName(Q)
            }
            if (S && !O) {
                V[V.length] = [Q.id];
                if (r.utils.isIFrameDescendant(Q)) {
                    U = true;
                    Q = r.utils.getWindow(Q).frameElement
                }
            }
        }
        V.reverse();
        return V
    }
    f.specialChildNodes = {
        nobr: true,
        p: true
    };

    function C(M) {
        var N;
        if (!M || !M.length) {
            return null
        }
        N = n.serialize(M, "json");
        return N
    }

    function z(Q) {
        var P = "",
            N = [],
            M = "",
            O = [];
        if (!(this instanceof z)) {
            return null
        }
        if (typeof Q !== "object") {
            return
        }
        O = f(Q, false);
        if (O.length && O[0].length === 1) {
            N = f(Q, true)
        } else {
            N = L.clone(O)
        }
        this.xpath = C(O);
        this.xpathList = O;
        this.fullXpath = C(N);
        this.fullXpathList = N;
        this.applyPrefix = function(T) {
            var R, S;
            if (!(T instanceof z) || !T.fullXpathList.length) {
                return
            }
            S = T.fullXpathList[T.fullXpathList.length - 1];
            R = this.fullXpathList.shift();
            if (L.isEqual(R[0], S[0])) {
                this.fullXpathList = T.fullXpathList.concat(this.fullXpathList)
            } else {
                this.fullXpathList.unshift(R);
                return
            }
            this.fullXpath = C(this.fullXpathList);
            R = this.xpathList.shift();
            if (R.length === 1) {
                this.xpathList.unshift(R);
                return
            }
            this.xpathList = T.xpathList.concat(this.xpathList);
            this.xpath = C(this.xpathList)
        };
        this.compare = function(R) {
            if (!(R instanceof z)) {
                return 0
            }
            return (this.fullXpathList.length - R.fullXpathList.length)
        };
        this.isSame = function(R) {
            var S = false;
            if (!(R instanceof z)) {
                return S
            }
            if (this.compare(R) === 0) {
                S = (this.fullXpath === R.fullXpath)
            }
            return S
        };
        this.containedIn = function(S) {
            var T, R;
            if (!(S instanceof z)) {
                return false
            }
            if (S.fullXpathList.length > this.fullXpathList.length) {
                return false
            }
            for (T = 0, R = S.fullXpathList.length; T < R; T += 1) {
                if (!L.isEqual(S.fullXpathList[T], this.fullXpathList[T])) {
                    return false
                }
            }
            return true
        }
    }
    z.prototype = (function() {
        return {}
    }());
    return {
        init: function() {
            if (!F) {
                b()
            } else {}
        },
        destroy: function() {
            G()
        },
        WebEvent: l,
        ElementData: d,
        Xpath: z,
        processDOMEvent: D,
        getNormalizedOrientation: H,
        getXPathFromNode: function(N, O, M, P) {
            return u(O, M, P)
        },
        getNodeFromID: c,
        queryDom: q
    }
});
TLT.addService("browser", function(d) {
    var h = d.getService("config"),
        f = d.getService("browserBase"),
        l = d.getService("ajax"),
        g = null,
        c = null,
        j = h.getServiceConfig("browser") || {},
        b = (j.useCapture === true),
        k = false,
        e = {
            NO_QUERY_SELECTOR: "NOQUERYSELECTOR"
        },
        n = function(o) {
            return function(q) {
                var p = new f.WebEvent(q);
                if (q.type === "resize" || q.type === "hashchange") {
                    setTimeout(function() {
                        o(p)
                    }, 5)
                } else {
                    o(p)
                }
            }
        },
        a = {
            list2Array: function(q) {
                var p = q.length,
                    o = [],
                    r;
                if (typeof q.length === "undefined") {
                    return [q]
                }
                for (r = 0; r < p; r += 1) {
                    o[r] = q[r]
                }
                return o
            },
            find: function(q, p, o) {
                o = o || "css";
                return this.list2Array(this[o](q, p))
            },
            css: function(q, t) {
                var u = this,
                    x = null,
                    v = document.getElementsByTagName("body")[0],
                    o = h.getServiceConfig("browser") || {},
                    w = o.hasOwnProperty("jQueryObject") ? d.utils.access(o.jQueryObject) : window.jQuery,
                    s = o.hasOwnProperty("sizzleObject") ? d.utils.access(o.sizzleObject) : window.Sizzle;
                if (typeof document.querySelectorAll === "undefined") {
                    u.css = function(z, y) {
                        y = y || document;
                        return u.Sizzle(z, y)
                    };
                    if (typeof u.Sizzle === "undefined") {
                        try {
                            if (v === s("html > body", document)[0]) {
                                u.Sizzle = s
                            }
                        } catch (r) {
                            try {
                                if (v === w(document).find("html > body").get()[0]) {
                                    u.Sizzle = function(z, y) {
                                        return w(y).find(z).get()
                                    }
                                }
                            } catch (p) {
                                d.fail("Sizzle was not found", e.NO_QUERY_SELECTOR)
                            }
                        }
                    }
                } else {
                    u.css = function(z, y) {
                        y = y || document;
                        return y.querySelectorAll(z)
                    }
                }
                return u.css(q, t)
            }
        },
        m = (function() {
            var o = new d.utils.WeakMap();
            return {
                add: function(p) {
                    var q = o.get(p) || [n(p), 0];
                    q[1] += 1;
                    o.set(p, q);
                    return q[0]
                },
                find: function(p) {
                    var q = o.get(p);
                    return q ? q[0] : null
                },
                remove: function(p) {
                    var q = o.get(p);
                    if (q) {
                        q[1] -= 1;
                        if (q[1] <= 0) {
                            o.remove(p)
                        }
                    }
                }
            }
        }());

    function i() {
        a.xpath = f.queryDom.xpath;
        if (typeof document.addEventListener === "function") {
            g = function(q, o, p) {
                q.addEventListener(o, p, b)
            };
            c = function(q, o, p) {
                q.removeEventListener(o, p, b)
            }
        } else {
            if (typeof document.attachEvent !== "undefined") {
                g = function(q, o, p) {
                    q.attachEvent("on" + o, p)
                };
                c = function(q, o, p) {
                    q.detachEvent("on" + o, p)
                }
            } else {
                throw new Error("Unsupported browser")
            }
        }
        k = true
    }
    return {
        init: function() {
            if (!k) {
                i()
            } else {}
        },
        destroy: function() {
            k = false
        },
        getServiceName: function() {
            return "W3C"
        },
        query: function(r, p, o) {
            try {
                return a.find(r, p, o)[0] || null
            } catch (q) {
                return []
            }
        },
        queryAll: function(r, p, o) {
            try {
                return a.find(r, p, o)
            } catch (q) {
                return []
            }
        },
        subscribe: function(o, r, p) {
            var q = m.add(p);
            g(r, o, q)
        },
        unsubscribe: function(o, s, p) {
            var q = m.find(p);
            if (q) {
                try {
                    c(s, o, q)
                } catch (r) {}
                m.remove(p)
            }
        }
    }
});
TLT.addService("ajax", function(b) {
    var a, e = function(j) {
            var i = "",
                h = [];
            for (i in j) {
                if (j.hasOwnProperty(i)) {
                    h.push([i, j[i]])
                }
            }
            return h
        },
        d = false;

    function c(k) {
        k = k.split("\n");
        var m = {},
            j = 0,
            h = k.length,
            l = null;
        for (j = 0; j < h; j += 1) {
            l = k[j].split(": ");
            m[l[0]] = l[1]
        }
        return m
    }

    function g(q) {
        var p = a(),
            j = [
                ["X-Requested-With", "XMLHttpRequest"]
            ],
            o = 0,
            k = typeof q.async !== "boolean" ? true : q.async,
            m = "",
            n = null,
            l, h;
        if (q.headers) {
            j = j.concat(e(q.headers))
        }
        if (q.contentType) {
            j.push(["Content-Type", q.contentType])
        }
        p.open(q.type.toUpperCase(), q.url, k);
        for (l = 0, h = j.length; l < h; l += 1) {
            m = j[l];
            if (m[0] && m[1]) {
                p.setRequestHeader(m[0], m[1])
            }
        }
        p.onreadystatechange = n = function() {
            if (p.readyState === 4) {
                p.onreadystatechange = n = function() {};
                if (q.timeout) {
                    window.clearTimeout(o)
                }
                q.oncomplete({
                    headers: c(p.getAllResponseHeaders()),
                    responseText: (p.responseText || null),
                    statusCode: p.status,
                    success: (p.status === 200)
                });
                p = null
            }
        };
        p.send(q.data || null);
        n();
        if (q.timeout) {
            o = window.setTimeout(function() {
                if (!p) {
                    return
                }
                p.onreadystatechange = function() {};
                if (p.readyState !== 4) {
                    p.abort();
                    if (typeof q.error === "function") {
                        q.error()
                    }
                }
                p = null
            }, q.timeout)
        }
    }

    function f() {
        if (typeof window.XMLHttpRequest !== "undefined") {
            a = function() {
                return new XMLHttpRequest()
            }
        } else {
            a = function() {
                return new ActiveXObject("Microsoft.XMLHTTP")
            }
        }
        d = true
    }
    return {
        init: function() {
            if (!d) {
                f()
            }
        },
        destroy: function() {
            d = false
        },
        sendRequest: function(h) {
            h.type = h.type || "POST";
            g(h)
        }
    }
});
TLT.addService("domCapture", function(x) {
    var h = x.getService("config"),
        i = x.getService("browserBase"),
        u, g, e = {
            captureFrames: false,
            removeScripts: true,
            removeComments: true
        },
        S = {
            childList: true,
            attributes: true,
            attributeOldValue: true,
            characterData: true,
            subtree: true
        },
        a = (typeof window.MutationObserver !== "undefined"),
        v, E = S,
        J = [],
        T = [],
        t = [],
        w = 0,
        C = 100,
        c = false,
        o = false,
        K = false,
        F = 1,
        q = function() {},
        r = function() {},
        z = function() {},
        W = x.utils;

    function D() {
        T = [];
        t = [];
        w = 0;
        c = false
    }

    function O(aa) {
        var Z, Y, X;
        if (!aa || !aa.length) {
            return
        }
        aa = aa.sort(function(ac, ab) {
            return ac.compare(ab)
        });
        for (Z = 0; Z < aa.length; Z += 1) {
            X = aa[Z];
            for (Y = Z + 1; Y < aa.length; Y += 0) {
                if (aa[Y].containedIn(X)) {
                    aa.splice(Y, 1)
                } else {
                    Y += 1
                }
            }
        }
    }

    function p(Z) {
        var Y, X;
        if (!Z) {
            return Z
        }
        for (Y = 0, X = Z.length; Y < X; Y += 1) {
            delete Z[Y].oldValue
        }
        return Z
    }

    function d(ab, Z) {
        var Y, X, aa = false;
        if (!ab || !Z) {
            return aa
        }
        for (Y = 0, X = ab.length; Y < X; Y += 1) {
            if (ab[Y].name === Z) {
                aa = true;
                break
            }
        }
        return aa
    }

    function y(aa, ac) {
        var Z, Y, X, ab;
        for (Z = 0, Y = aa.length, ab = false; Z < Y; Z += 1) {
            X = aa[Z];
            if (X.name === ac.name) {
                if (X.oldValue === ac.value) {
                    aa.splice(Z, 1)
                } else {
                    X.value = ac.value
                }
                ab = true;
                break
            }
        }
        if (!ab) {
            aa.push(ac)
        }
        return aa
    }

    function I(aa, Y) {
        var ac, ab, Z, X, ad, ae;
        aa.removedNodes = Y.removedNodes.length;
        aa.addedNodes = W.convertToArray(Y.addedNodes);
        for (ac = 0, X = T.length; ac < X; ac += 1) {
            ae = T[ac];
            if (aa.isSame(ae)) {
                if (aa.removedNodes) {
                    for (ab = 0; ab < Y.removedNodes.length; ab += 1) {
                        Z = ae.addedNodes.indexOf(Y.removedNodes[ab]);
                        if (Z !== -1) {
                            ae.addedNodes.splice(Z, 1);
                            aa.removedNodes -= 1
                        }
                    }
                }
                ae.removedNodes += aa.removedNodes;
                ae.addedNodes.concat(aa.addedNodes);
                if (!ae.removedNodes && !ae.addedNodes.length) {
                    T.splice(ac, 1)
                }
                ad = true;
                break
            }
        }
        if (!ad) {
            T.push(aa)
        }
    }

    function P(Y, ac) {
        var aa, Z, X, ad = false,
            ab, ae;
        for (aa = 0, X = T.length; !ad && aa < X; aa += 1) {
            ae = T[aa];
            if (Y.containedIn(ae)) {
                ab = ae.addedNodes;
                for (Z = 0; Z < ab.length; Z += 1) {
                    if (ab[Z].contains && ab[Z].contains(ac)) {
                        ad = true;
                        break
                    }
                }
            }
        }
        return ad
    }

    function B(Z, Y) {
        var ab, X, aa, ac, ad;
        Z.attributes = [{
            name: Y.attributeName,
            oldValue: Y.oldValue,
            value: Y.target.getAttribute(Y.attributeName)
        }];
        aa = Z.attributes[0];
        if (aa.oldValue === aa.value) {
            return
        }
        for (ab = 0, X = t.length, ac = false; ab < X; ab += 1) {
            ad = t[ab];
            if (Z.isSame(ad)) {
                ad.attributes = y(ad.attributes, aa);
                if (!ad.attributes.length) {
                    t.splice(ab, 1)
                } else {
                    if (P(Z, Y.target)) {
                        t.splice(ab, 1)
                    }
                }
                ac = true;
                break
            }
        }
        if (!ac && !P(Z, Y.target)) {
            t.push(Z)
        }
    }

    function l(aa) {
        var ac, X, ab, Y, Z;
        if (!aa || !aa.length) {
            return
        }
        w += aa.length;
        if (w >= C) {
            if (!c) {
                c = true
            }
            return
        }
        for (ac = 0, X = aa.length; ac < X; ac += 1) {
            Y = aa[ac];
            Z = new i.Xpath(Y.target);
            if (Z) {
                ab = Z.fullXpathList;
                if (ab.length && ab[0][0] === "html") {
                    switch (Y.type) {
                        case "characterData":
                        case "childList":
                            I(Z, Y);
                            break;
                        case "attributes":
                            B(Z, Y);
                            break;
                        default:
                            W.clog("Unknown mutation type: " + Y.type);
                            break
                    }
                }
            }
        }
    }

    function s() {
        var X;
        X = new window.MutationObserver(function(Y) {
            if (Y) {
                l(Y);
                W.clog("Processed [" + Y.length + "] mutation records.")
            }
        });
        return X
    }

    function j(Y) {
        var Z, X;
        h.subscribe("configupdated", z);
        u = x.getService("message");
        g = Y;
        g.options = W.mixin({}, e, g.options);
        a = a && W.getValue(g, "diffEnabled", true);
        C = W.getValue(g.options, "maxMutations", 100);
        if (a) {
            E = W.getValue(g, "diffObserverConfig", S);
            v = s();
            J.push(window)
        }
        K = true
    }

    function N() {
        h.unsubscribe("configupdated", z);
        if (v) {
            v.disconnect()
        }
        K = false
    }

    function m() {
        var X;
        X = "tlt-" + W.getSerialNumber();
        return X
    }

    function f(aa, Z) {
        var Y, X;
        if (!aa || !aa.getElementsByTagName || !Z) {
            return
        }
        X = aa.getElementsByTagName(Z);
        if (X && X.length) {
            for (Y = X.length - 1; Y >= 0; Y -= 1) {
                X[Y].parentNode.removeChild(X[Y])
            }
        }
        return aa
    }

    function H(Z, X) {
        var Y, aa;
        for (Y = 0; Z.hasChildNodes() && Y < Z.childNodes.length; Y += 1) {
            aa = Z.childNodes[Y];
            if (aa.nodeType === X) {
                Z.removeChild(aa);
                Y -= 1
            } else {
                if (aa.hasChildNodes()) {
                    H(aa, X)
                }
            }
        }
        return Z
    }

    function R(Z) {
        var Y, X = null;
        if (!Z || !Z.doctype) {
            return null
        }
        Y = Z.doctype;
        if (Y) {
            X = "<!DOCTYPE " + Y.name + (Y.publicId ? ' PUBLIC "' + Y.publicId + '"' : "") + (!Y.publicId && Y.systemId ? " SYSTEM" : "") + (Y.systemId ? ' "' + Y.systemId + '"' : "") + ">"
        }
        return X
    }

    function Q(ab) {
        var Y, aa, Z, X;
        if (!ab) {
            return
        }
        Z = ab.getElementsByTagName("input");
        if (Z) {
            for (Y = 0, X = Z.length; Y < X; Y += 1) {
                aa = Z[Y];
                switch (aa.type) {
                    case "checkbox":
                    case "radio":
                        if (aa.checked) {
                            aa.setAttribute("checked", "checked")
                        } else {
                            aa.removeAttribute("checked")
                        }
                        break;
                    default:
                        aa.setAttribute("value", aa.value);
                        break
                }
            }
        }
    }

    function k(ad, ae) {
        var aa, X, ac, Y, Z, ab;
        if (!ad || !ad.getElementsByTagName || !ae || !ae.getElementsByTagName) {
            return
        }
        Y = ad.getElementsByTagName("textarea");
        ab = ae.getElementsByTagName("textarea");
        if (Y && ab) {
            for (aa = 0, X = Y.length; aa < X; aa += 1) {
                ac = Y[aa];
                Z = ab[aa];
                Z.setAttribute("value", ac.value);
                Z.value = ac.value
            }
        }
    }

    function L(X, ac) {
        var Y, ae, ad, af, aa, Z, ab;
        if (!X || !X.getElementsByTagName || !ac || !ac.getElementsByTagName) {
            return
        }
        ae = X.getElementsByTagName("select");
        af = ac.getElementsByTagName("select");
        if (ae) {
            for (aa = 0, ab = ae.length; aa < ab; aa += 1) {
                Y = ae[aa];
                ad = af[aa];
                for (Z = 0; Z < Y.options.length; Z += 1) {
                    if (Z === Y.selectedIndex || Y.options[Z].selected) {
                        ad.options[Z].setAttribute("selected", "selected")
                    } else {
                        ad.options[Z].removeAttribute("selected")
                    }
                }
            }
        }
    }

    function A(Y) {
        var X, Z = null;
        if (Y) {
            X = Y.nodeType || -1;
            switch (X) {
                case 9:
                    Z = Y.documentElement.outerHTML;
                    break;
                case 1:
                    Z = Y.outerHTML;
                    break;
                default:
                    Z = null;
                    break
            }
        }
        return Z
    }

    function V(Z) {
        var X, Y = false;
        if (Z && typeof Z === "object") {
            X = Z.nodeType || -1;
            switch (X) {
                case 9:
                case 1:
                    Y = true;
                    break;
                default:
                    Y = false;
                    break
            }
        }
        return Y
    }

    function b(ad, am, X) {
        var ag, af, ah, an, ae = ["iframe", "frame"],
            al, Y, ab, ak, Z, aj, aa = {
                frames: []
            },
            ao, ac;
        for (af = 0; af < ae.length; af += 1) {
            an = ae[af];
            ao = ad.getElementsByTagName(an);
            ac = am.getElementsByTagName(an);
            if (ao) {
                for (ag = 0, ah = ao.length; ag < ah; ag += 1) {
                    try {
                        al = ao[ag];
                        Y = W.getIFrameWindow(al);
                        if (Y && Y.document) {
                            ab = Y.document;
                            ak = r(ab, ab, "", X);
                            Z = m();
                            ac[ag].setAttribute("tltid", Z);
                            ak.tltid = Z;
                            aj = ac[ag].getAttribute("src");
                            if (!aj) {
                                aj = Y.location.href;
                                ac[ag].setAttribute("src", aj)
                            }
                            aa.frames = aa.frames.concat(ak.frames);
                            delete ak.frames;
                            aa.frames.push(ak)
                        }
                    } catch (ai) {}
                }
            }
        }
        return aa
    }

    function U(ad) {
        var ab, Z, X, aa, Y, ac, ae = 0;
        if (!ad) {
            return ae
        }
        if (ad.root) {
            ae += ad.root.length;
            if (ad.frames) {
                for (ab = 0, X = ad.frames.length; ab < X; ab += 1) {
                    if (ad.frames[ab].root) {
                        ae += ad.frames[ab].root.length
                    }
                }
            }
        } else {
            if (ad.diffs) {
                for (ab = 0, X = ad.diffs.length; ab < X; ab += 1) {
                    ac = ad.diffs[ab];
                    ae += ac.xpath.length;
                    if (ac.root) {
                        ae += ac.root.length
                    } else {
                        if (ac.attributes) {
                            for (Z = 0, aa = ac.attributes.length; Z < aa; Z += 1) {
                                Y = ac.attributes[Z];
                                ae += Y.name.length;
                                if (Y.value) {
                                    ae += Y.value.length
                                }
                            }
                        }
                    }
                }
            }
        }
        return ae
    }

    function M() {
        var aa, Z, X, Y;
        for (aa = 0, X = T.length; aa < X && t.length; aa += 1) {
            Y = T[aa];
            for (Z = 0; Z < t.length; Z += 1) {
                if (t[Z].containedIn(Y)) {
                    t.splice(Z, 1);
                    Z -= 1
                }
            }
        }
    }

    function G(Z) {
        var ab, X, aa = {
                fullDOM: false,
                diffs: []
            },
            ad, ac, Y;
        O(T);
        M();
        for (ab = 0, X = T.length; ab < X; ab += 1) {
            Y = T[ab];
            ac = i.getNodeFromID(Y.xpath, -2);
            ad = r(window.document, ac, Y, Z);
            ad.xpath = Y.xpath;
            aa.diffs.push(ad)
        }
        for (ab = 0, X = t.length; ab < X; ab += 1) {
            Y = t[ab];
            ad = {
                xpath: d(Y.attributes, "id") ? Y.fullXpath : Y.xpath,
                attributes: p(Y.attributes)
            };
            aa.diffs.push(ad)
        }
        return aa
    }

    function n(Z, Y) {
        var aa, X;
        aa = r(Z, Z, null, Y);
        if (!aa) {
            aa = {}
        }
        aa.charset = Z.characterSet || Z.charset;
        X = W.getOriginAndPath(Z.location);
        aa.host = X.origin;
        aa.url = X.path;
        return aa
    }
    q = function(X) {
        var Y = null;
        if (V(X)) {
            Y = X.cloneNode(true);
            if (!Y && X.documentElement) {
                Y = X.documentElement.cloneNode(true)
            }
        }
        return Y
    };
    r = function(ad, Z, Y, ab) {
        var ac, X, ae = {},
            aa;
        if (!ad || !Z) {
            return ae
        }
        ac = q(Z, ad);
        if (!ac) {
            return ae
        }
        if (!!ab.removeScripts) {
            f(ac, "script");
            f(ac, "noscript")
        }
        if (!!ab.removeComments) {
            H(ac, 8)
        }
        L(Z, ac);
        Q(ac);
        k(Z, ac);
        ac = u.applyPrivacyToNode(ac, Y, ad);
        if (!!ab.captureFrames) {
            X = b(Z, ac, ab)
        }
        if (X) {
            ae = W.mixin(ae, X)
        }
        ae.root = (R(Z) || "") + A(ac);
        return ae
    };
    z = function() {
        h = x.getService("config");
        j(h.getServiceConfig("domCapture") || {})
    };
    return {
        init: function() {
            h = x.getService("config");
            if (!K) {
                j(h.getServiceConfig("domCapture") || {})
            } else {}
        },
        destroy: function() {
            N()
        },
        observeWindow: function(Z) {
            var Y, X;
            if (!Z) {
                return
            }
            if (!W.getValue(g, "options.captureFrames", false) && !(Z === window)) {
                return
            }
            if (W.indexOf(J, Z) === -1) {
                J.push(Z)
            }
        },
        captureDOM: function(Y, Z) {
            var aa, X, ac = null,
                ab, ad = 0;
            if (!K || W.isLegacyIE) {
                return ac
            }
            Z = W.mixin({}, g.options, Z);
            Y = Y || window.document;
            if (!o || !a || c || Z.forceFullDOM) {
                if (v) {
                    v.disconnect()
                }
                ac = n(Y, Z);
                ac.fullDOM = true;
                ac.forced = c || Z.forceFullDOM;
                o = true;
                if (v) {
                    for (aa = 0, X = J.length; aa < X; aa += 1) {
                        ab = J[aa];
                        v.observe(ab.document, E)
                    }
                }
            } else {
                ac = G(Z);
                ac.fullDOM = false
            }
            if (a) {
                ac.mutationCount = w
            }
            D();
            if (Z.maxLength) {
                ad = U(ac);
                if (ad > Z.maxLength) {
                    ac = {
                        errorCode: 101,
                        error: "Captured length (" + ad + ") exceeded limit (" + Z.maxLength + ")."
                    }
                }
            }
            return ac
        }
    }
});
TLT.addService("encoder", function(a) {
    var f = {},
        g = null,
        b = null,
        d = false;

    function e(j) {
        var i = null;
        if (!j) {
            return i
        }
        i = f[j];
        if (i && typeof i.encode === "string") {
            i.encode = a.utils.access(i.encode)
        }
        return i
    }

    function h(i) {
        f = i;
        g.subscribe("configupdated", b);
        d = true
    }

    function c() {
        g.unsubscribe("configupdated", b);
        d = false
    }
    b = function() {
        g = a.getService("config");
        h(g.getServiceConfig("encoder") || {})
    };
    return {
        init: function() {
            g = a.getService("config");
            if (!d) {
                h(g.getServiceConfig("encoder") || {})
            } else {}
        },
        destroy: function() {
            c()
        },
        encode: function(m, l) {
            var k, i, j = {
                data: null,
                encoding: null,
                error: null
            };
            if ((typeof m !== "string" && !m) || !l) {
                j.error = "Invalid " + (!m ? "data" : "type") + " parameter.";
                return j
            }
            k = e(l);
            if (!k) {
                j.error = "Specified encoder (" + l + ") not found.";
                return j
            }
            if (typeof k.encode !== "function") {
                j.error = "Configured encoder (" + l + ") encode method is not a function.";
                return j
            }
            i = k.encode(m);
            if (!i || a.utils.getValue(i, "buffer", null) === null) {
                j.error = "Encoder (" + l + ") returned an invalid result.";
                return j
            }
            j.data = i.buffer;
            j.encoding = k.defaultEncoding;
            return j
        }
    }
});
TLT.addService("message", function(v) {
    var N = v.utils,
        o = 0,
        r = 0,
        F = 0,
        j = 0,
        p = new Date(),
        s = new Date(),
        i = v.getService("browserBase"),
        b = v.getService("browser"),
        h = v.getService("config"),
        z = h.getServiceConfig("message") || {},
        l = window.location.href,
        M = "ID" + s.getHours() + "H" + s.getMinutes() + "M" + s.getSeconds() + "S" + s.getMilliseconds() + "R" + Math.random(),
        O = z.hasOwnProperty("privacy") ? z.privacy : [],
        C = {},
        K = {
            lower: "x",
            upper: "X",
            numeric: "9",
            symbol: "@"
        },
        u = N.isiOS,
        q = navigator.userAgent.indexOf("Chrome") > -1 && N.isAndroid,
        f = window.devicePixelRatio || 1,
        g = window.screen || {},
        a = g.width || 0,
        x = g.height || 0,
        L = i.getNormalizedOrientation(),
        k = !u ? a : Math.abs(L) === 90 ? x : a,
        B = !u ? x : Math.abs(L) === 90 ? a : x,
        I = (window.screen ? window.screen.height - window.screen.availHeight : 0),
        H = window.innerWidth || document.documentElement.clientWidth,
        m = window.innerHeight || document.documentElement.clientHeight,
        E = false;

    function d(Q) {
        var P = "",
            R = Q.timestamp || (new Date()).getTime();
        delete Q.timestamp;
        this.type = Q.type;
        this.offset = R - p.getTime();
        if (Q.type === 2 || !r) {
            o = r;
            r = R
        }
        this.screenviewOffset = R - (R >= r ? r : o);
        this.count = (j += 1);
        this.fromWeb = true;
        for (P in Q) {
            if (Q.hasOwnProperty(P)) {
                this[P] = Q[P]
            }
        }
    }
    C.PVC_MASK_EMPTY = function(P) {
        return ""
    };
    C.PVC_MASK_BASIC = function(Q) {
        var P = "XXXXX";
        if (typeof Q !== "string") {
            return ""
        }
        return (Q.length ? P : "")
    };
    C.PVC_MASK_TYPE = function(T) {
        var Q, S = 0,
            P = 0,
            R = "";
        if (typeof T !== "string") {
            return R
        }
        Q = T.split("");
        for (S = 0, P = Q.length; S < P; S += 1) {
            if (N.isNumeric(Q[S])) {
                R += K.numeric
            } else {
                if (N.isUpperCase(Q[S])) {
                    R += K.upper
                } else {
                    if (N.isLowerCase(Q[S])) {
                        R += K.lower
                    } else {
                        R += K.symbol
                    }
                }
            }
        }
        return R
    };
    C.PVC_MASK_EMPTY.maskType = 1;
    C.PVC_MASK_BASIC.maskType = 2;
    C.PVC_MASK_TYPE.maskType = 3;
    C.PVC_MASK_CUSTOM = {
        maskType: 4
    };

    function c(P, R) {
        var Q = C.PVC_MASK_BASIC;
        if (typeof R !== "string") {
            return R
        }
        if (!P) {
            Q = C.PVC_MASK_BASIC
        } else {
            if (P.maskType === C.PVC_MASK_EMPTY.maskType) {
                Q = C.PVC_MASK_EMPTY
            } else {
                if (P.maskType === C.PVC_MASK_BASIC.maskType) {
                    Q = C.PVC_MASK_BASIC
                } else {
                    if (P.maskType === C.PVC_MASK_TYPE.maskType) {
                        Q = C.PVC_MASK_TYPE
                    } else {
                        if (P.maskType === C.PVC_MASK_CUSTOM.maskType) {
                            if (typeof P.maskFunction === "string") {
                                Q = N.access(P.maskFunction)
                            } else {
                                Q = P.maskFunction
                            }
                            if (typeof Q !== "function") {
                                Q = C.PVC_MASK_BASIC
                            }
                        }
                    }
                }
            }
        }
        return Q(R)
    }

    function A(P, Q) {
        var R;
        if (!Q || !Q.target) {
            return
        }
        R = Q.target;
        if (!N.isUndefOrNull(R.prevState) && R.prevState.hasOwnProperty("value")) {
            R.prevState.value = c(P, R.prevState.value)
        }
        if (!N.isUndefOrNull(R.currState) && R.currState.hasOwnProperty("value")) {
            R.currState.value = c(P, R.currState.value)
        }
    }

    function J(W, X) {
        var T, S, U, Y, P, R, Z, V, Q;
        if (!W || !X || !X.id) {
            return false
        }
        for (T = 0, V = W.length; T < V; T += 1) {
            Q = W[T];
            if (typeof Q === "string") {
                Y = b.queryAll(Q);
                for (S = 0, P = Y ? Y.length : 0; S < P; S += 1) {
                    if (Y[S]) {
                        R = i.ElementData.prototype.examineID(Y[S]);
                        if (R.type === X.idType && R.id === X.id) {
                            return true
                        }
                    }
                }
            } else {
                if (Q && Q.id && Q.idType && X.idType === Q.idType) {
                    switch (typeof Q.id) {
                        case "string":
                            if (Q.id === X.id) {
                                return true
                            }
                            break;
                        case "object":
                            Z = new RegExp(Q.id.regex, Q.id.flags);
                            if (Z.test(X.id)) {
                                return true
                            }
                            break
                    }
                }
            }
        }
        return false
    }

    function D(S) {
        var R, P, Q;
        if (!S || !S.hasOwnProperty("target")) {
            return S
        }
        for (R = 0, P = O.length; R < P; R += 1) {
            Q = O[R];
            if (J(Q.targets, S.target)) {
                A(Q, S);
                break
            }
        }
        return S
    }

    function e(Z) {
        var S, R, Q, T, V, aa, Y, P, X, U, W;
        if (!Z) {
            return Z
        }
        for (S = 0, V = O.length; S < V; S += 1) {
            aa = O[S];
            U = aa.targets;
            for (R = 0, W = U.length; R < W; R += 1) {
                X = U[R];
                if (typeof X === "string") {
                    Y = b.queryAll(X, Z);
                    for (Q = 0, P = Y.length; Q < P; Q += 1) {
                        T = Y[Q];
                        if (T.value) {
                            T.setAttribute("value", c(aa, T.value))
                        }
                    }
                } else {
                    if (typeof X.id === "string") {
                        T = i.getNodeFromID(X.id, X.idType, Z);
                        if (T && T.value) {
                            T.setAttribute("value", c(aa, T.value))
                        }
                    }
                }
            }
        }
        return Z
    }

    function t(ad, ab, W, ac) {
        var U, T, X, V, R, Q = [],
            S, P, aa, Y, Z;
        if (!ad.length) {
            return
        }
        Z = b.queryAll("input, select, textarea", ab);
        if (!Z || !Z.length) {
            return
        }
        for (U = 0, X = Z.length; U < X; U += 1) {
            if (Z[U].value) {
                R = i.ElementData.prototype.examineID(Z[U]);
                if (R.type === -2) {
                    S = new i.Xpath(Z[U]);
                    S.applyPrefix(W);
                    R.id = S.xpath
                }
                Q.push({
                    id: R.id,
                    idType: R.type,
                    element: Z[U]
                })
            }
        }
        for (U = 0, X = ad.length; U < X; U += 1) {
            aa = O[ad[U].ruleIndex];
            Y = aa.targets[ad[U].targetIndex];
            if (typeof Y.id === "string" && Y.idType === -2) {
                for (T = 0; T < Q.length; T += 1) {
                    if (Q[T].idType === Y.idType && Q[T].id === Y.id) {
                        V = Q[T].element;
                        P = c(aa, V.value);
                        V.setAttribute("value", P);
                        V.value = P
                    }
                }
            } else {
                for (T = 0; T < Q.length; T += 1) {
                    if (Q[T].idType === Y.idType && Y.regex.test(Q[T].id)) {
                        V = Q[T].element;
                        P = c(aa, V.value);
                        V.setAttribute("value", P);
                        V.value = P
                    }
                }
            }
        }
    }

    function n(ab, V, ad) {
        var T, S, R, U, X, ae, Q, aa, P, ac = [],
            Z, W, Y;
        if (!ab || !ad) {
            return null
        }
        for (T = 0, X = O.length; T < X; T += 1) {
            ae = O[T];
            W = ae.targets;
            for (S = 0, Y = W.length; S < Y; S += 1) {
                Z = W[S];
                if (typeof Z === "string") {
                    aa = b.queryAll(Z, ab);
                    for (R = 0, P = aa.length; R < P; R += 1) {
                        U = aa[R];
                        if (U.value) {
                            Q = c(ae, U.value);
                            U.setAttribute("value", Q);
                            U.value = Q
                        }
                    }
                } else {
                    if (typeof Z.id === "string") {
                        switch (Z.idType) {
                            case -1:
                            case -3:
                                U = i.getNodeFromID(Z.id, Z.idType, ab);
                                if (U && U.value) {
                                    Q = c(ae, U.value);
                                    U.setAttribute("value", Q);
                                    U.value = Q
                                }
                                break;
                            case -2:
                                ac.push({
                                    ruleIndex: T,
                                    targetIndex: S
                                });
                                break;
                            default:
                                break
                        }
                    } else {
                        ac.push({
                            ruleIndex: T,
                            targetIndex: S
                        })
                    }
                }
            }
        }
        t(ac, ab, V, ad);
        return ab
    }

    function w() {
        var R, Q, U, V, T, P, S;
        h = v.getService("config");
        z = h.getServiceConfig("message") || {};
        O = z.hasOwnProperty("privacy") ? z.privacy : [];
        for (R = 0, V = O.length; R < V; R += 1) {
            U = O[R];
            P = U.targets;
            for (Q = 0, S = P.length; Q < S; Q += 1) {
                T = P[Q];
                if (typeof T === "object") {
                    if (typeof T.idType === "string") {
                        T.idType = +T.idType
                    }
                    if (typeof T.id === "object") {
                        T.regex = new RegExp(T.id.regex, T.id.flags)
                    }
                }
            }
        }
    }

    function y() {
        if (h.subscribe) {
            h.subscribe("configupdated", w)
        }
        w();
        E = true
    }

    function G() {
        h.unsubscribe("configupdated", w);
        E = false
    }
    return {
        init: function() {
            if (!E) {
                y()
            } else {}
        },
        destroy: function() {
            G()
        },
        applyPrivacyToDocument: e,
        applyPrivacyToNode: n,
        createMessage: function(P) {
            if (typeof P.type === "undefined") {
                throw new TypeError("Invalid queueEvent given!")
            }
            return D(new d(P))
        },
        wrapMessages: function(Q) {
            var P = {
                    messageVersion: "6.1.0.0",
                    serialNumber: (F += 1),
                    sessions: [{
                        id: M,
                        startTime: s.getTime(),
                        timezoneOffset: s.getTimezoneOffset(),
                        messages: Q,
                        clientEnvironment: {
                            webEnvironment: {
                                libVersion: "5.1.0.1731",
                                page: l,
                                referrer: document.referrer,
                                screen: {
                                    devicePixelRatio: f,
                                    deviceWidth: k,
                                    deviceHeight: B,
                                    deviceToolbarHeight: I,
                                    width: H,
                                    height: m,
                                    orientation: L
                                }
                            }
                        }
                    }]
                },
                R = P.sessions[0].clientEnvironment.webEnvironment.screen;
            R.orientationMode = N.getOrientationMode(R.orientation);
            return P
        }
    }
});
TLT.addService("serializer", function(core) {
    function serializeToJSON(obj) {
        var str, key, len = 0;
        if (typeof obj !== "object" || obj === null) {
            switch (typeof obj) {
                case "function":
                case "undefined":
                    return "null";
                case "string":
                    return '"' + obj.replace(/\"/g, '\\"') + '"';
                default:
                    return String(obj)
            }
        } else {
            if (Object.prototype.toString.call(obj) === "[object Array]") {
                str = "[";
                for (key = 0, len = obj.length; key < len; key += 1) {
                    if (Object.prototype.hasOwnProperty.call(obj, key)) {
                        str += serializeToJSON(obj[key]) + ","
                    }
                }
            } else {
                str = "{";
                for (key in obj) {
                    if (Object.prototype.hasOwnProperty.call(obj, key)) {
                        str = str.concat('"', key, '":', serializeToJSON(obj[key]), ",");
                        len += 1
                    }
                }
            }
        }
        if (len > 0) {
            str = str.substring(0, str.length - 1)
        }
        str += String.fromCharCode(str.charCodeAt(0) + 2);
        return str
    }
    var configService = core.getService("config"),
        serialize = {},
        parse = {},
        defaultSerializers = {
            json: (function() {
                if (typeof window.JSON !== "undefined") {
                    return {
                        serialize: window.JSON.stringify,
                        parse: window.JSON.parse
                    }
                }
                return {
                    serialize: serializeToJSON,
                    parse: function(data) {
                        return eval("(" + data + ")")
                    }
                }
            }())
        },
        updateConfig = null,
        isInitialized = false;

    function addObjectIfExist(paths, rootObj, propertyName) {
        var i, len, obj;
        paths = paths || [];
        for (i = 0, len = paths.length; i < len; i += 1) {
            obj = paths[i];
            if (typeof obj === "string") {
                obj = core.utils.access(obj)
            }
            if (typeof obj === "function") {
                rootObj[propertyName] = obj;
                break
            }
        }
    }

    function checkParserAndSerializer() {
        var isParserAndSerializerInvalid;
        if (typeof serialize.json !== "function" || typeof parse.json !== "function") {
            isParserAndSerializerInvalid = true
        } else {
            if (typeof parse.json('{"foo": "bar"}') === "undefined") {
                isParserAndSerializerInvalid = true
            } else {
                isParserAndSerializerInvalid = parse.json('{"foo": "bar"}').foo !== "bar"
            }
            if (typeof parse.json("[1, 2]") === "undefined") {
                isParserAndSerializerInvalid = true
            } else {
                isParserAndSerializerInvalid = isParserAndSerializerInvalid || parse.json("[1, 2]")[0] !== 1;
                isParserAndSerializerInvalid = isParserAndSerializerInvalid || parse.json("[1,2]")[1] !== 2
            }
            isParserAndSerializerInvalid = isParserAndSerializerInvalid || serialize.json({
                foo: "bar"
            }) !== '{"foo":"bar"}';
            isParserAndSerializerInvalid = isParserAndSerializerInvalid || serialize.json([1, 2]) !== "[1,2]"
        }
        return isParserAndSerializerInvalid
    }

    function initSerializerService(config) {
        var format;
        for (format in config) {
            if (config.hasOwnProperty(format)) {
                addObjectIfExist(config[format].stringifiers, serialize, format);
                addObjectIfExist(config[format].parsers, parse, format)
            }
        }
        if (!(config.json && config.json.hasOwnProperty("defaultToBuiltin")) || config.json.defaultToBuiltin === true) {
            serialize.json = serialize.json || defaultSerializers.json.serialize;
            parse.json = parse.json || defaultSerializers.json.parse
        }
        if (typeof serialize.json !== "function" || typeof parse.json !== "function") {
            core.fail("JSON parser and/or serializer not provided in the UIC config. Can't continue.")
        }
        if (checkParserAndSerializer()) {
            core.fail("JSON stringification and parsing are not working as expected")
        }
        if (configService.subscribe) {
            configService.subscribe("configupdated", updateConfig)
        }
        isInitialized = true
    }

    function destroy() {
        serialize = {};
        parse = {};
        configService.unsubscribe("configupdated", updateConfig);
        isInitialized = false
    }
    updateConfig = function() {
        configService = core.getService("config");
        initSerializerService(configService.getServiceConfig("serializer") || {})
    };
    return {
        init: function() {
            if (!isInitialized) {
                initSerializerService(configService.getServiceConfig("serializer") || {})
            } else {}
        },
        destroy: function() {
            destroy()
        },
        parse: function(data, type) {
            type = type || "json";
            return parse[type](data)
        },
        serialize: function(data, type) {
            type = type || "json";
            return serialize[type](data)
        }
    }
});
TLT.addModule("TLCookie", function(b) {
    var i, e = "CoreID6",
        c, d, g = b.utils;

    function a() {
        var j = g.getRandomString(32);
        g.setCookie(c, j);
        return g.getCookieValue(c)
    }

    function f() {
        var j = "123456789",
            k = g.getRandomString(1, j) + g.getRandomString(22, j + "0");
        g.setCookie(e, k, 300000000);
        return g.getCookieValue(e)
    }

    function h(j) {
        var m = [],
            l, k;
        if (j.tlAppKey) {
            d = j.tlAppKey;
            m.push({
                name: "X-Tealeaf-SaaS-AppKey",
                value: d
            })
        }
        if (j.sessionizationCookieName) {
            c = j.sessionizationCookieName;
            l = g.getCookieValue(c);
            if (!l && c === "TLTSID") {
                l = a()
            }
            m.push({
                name: "X-Tealeaf-SaaS-TLTSID",
                value: l
            })
        }
        if (j.visitorCookieEnabled) {
            k = g.getCookieValue(e);
            if (!k) {
                k = f()
            }
            m.push({
                name: "X-Tealeaf-DAVID",
                value: k
            })
        }
        if (m.length) {
            TLT.registerBridgeCallbacks([{
                enabled: true,
                cbType: "addRequestHeaders",
                cbFunction: function() {
                    return m
                }
            }])
        }
    }
    return {
        init: function() {
            i = b.getConfig() || {};
            h(i)
        },
        destroy: function() {},
        onevent: function(j) {}
    }
});
if (TLT && typeof TLT.addModule === "function") {
    TLT.addModule("overstat", function(e) {
        var n = {
                "input:radio": "radioButton",
                "input:checkbox": "checkBox",
                "input:text": "textBox",
                "input:password": "textBox",
                "input:file": "fileInput",
                "input:button": "button",
                "input:submit": "submitButton",
                "input:reset": "resetButton",
                "input:image": "image",
                "input:color": "color",
                "input:date": "date",
                "input:datetime": "datetime",
                "input:datetime-local": "datetime-local",
                "input:number": "number",
                "input:email": "email",
                "input:tel": "tel",
                "input:search": "search",
                "input:url": "url",
                "input:time": "time",
                "input:week": "week",
                "input:month": "month",
                "textarea:": "textBox",
                "select:": "selectList",
                "button:": "button",
                "a:": "link"
            },
            p = {},
            A = {
                updateInterval: 250,
                hoverThresholdMin: 1000,
                hoverThresholdMax: 2 * 60 * 1000,
                gridCellMaxX: 10,
                gridCellMaxY: 10,
                gridCellMinWidth: 20,
                gridCellMinHeight: 20
            };

        function d(I, H) {
            var G, F;
            if (!I || typeof I !== "object") {
                return null
            }
            F = H.split(".");
            for (G = 0; G < F.length; G += 1) {
                if ((typeof I === "undefined") || (I[F[G]] === null)) {
                    return null
                }
                I = I[F[G]]
            }
            return I
        }

        function x(F) {
            var G = e.getConfig() || {},
                H = G[F];
            return typeof H === "number" ? H : A[F]
        }

        function E(K, F) {
            var G = d(K, "webEvent.target.element.tagName") || "",
                H = G.toLowerCase() === "input" ? d(K, "webEvent.target.element.type") : "",
                J = n[G.toLowerCase() + ":" + H] || G,
                I = {
                    type: 9,
                    event: {
                        hoverDuration: K.hoverDuration,
                        hoverToClick: d(F, "hoverToClick")
                    },
                    target: {
                        id: d(K, "webEvent.target.id") || "",
                        idType: d(K, "webEvent.target.idType") || "",
                        name: d(K, "webEvent.target.name") || "",
                        tlType: J,
                        type: G,
                        subType: H,
                        position: {
                            width: d(K, "webEvent.target.element.offsetWidth") || 0,
                            height: d(K, "webEvent.target.element.offsetHeight") || 0,
                            relXY: K.gridX + "," + K.gridY
                        }
                    }
                };
            if ((typeof I.target.id) === undefined || I.target.id === "") {
                return
            }
            e.post(I)
        }

        function s(F) {
            F = i(F);
            return !F || F === document.body || F === document.html || F === document
        }

        function j(F) {
            F = i(F);
            if (!F) {
                return null
            }
            return F.parentNode
        }

        function o(G) {
            G = i(G);
            if (!G) {
                return null
            }
            var F = G.offsetParent;
            return F || j(G)
        }

        function w(F, G) {
            if (!G || G === F) {
                return false
            }
            G = j(G);
            while (!s(G)) {
                if (G === F) {
                    return true
                }
                G = j(G)
            }
            return false
        }

        function C(F) {
            if (F.nativeEvent) {
                F = F.nativeEvent
            }
            return F
        }

        function y(F) {
            return C(F).target
        }

        function h(F) {
            F = i(F);
            if (!F) {
                return -1
            }
            return F.nodeType || -1
        }

        function B(F) {
            F = i(F);
            if (!F) {
                return ""
            }
            return F.tagName ? F.tagName.toUpperCase() : ""
        }

        function i(F) {
            if (F && !F.nodeType && F.element) {
                F = F.element
            }
            return F
        }

        function t(F) {
            if (!F) {
                return
            }
            if (F.nativeEvent) {
                F = F.nativeEvent
            }
            if (F.stopPropagation) {
                F.stopPropagation()
            } else {
                if (F.cancelBubble) {
                    F.cancelBubble()
                }
            }
        }

        function m(G) {
            var F = B(G);
            return h(G) !== 1 || F === "TR" || F === "TBODY" || F === "THEAD"
        }

        function g(F) {
            if (!F) {
                return ""
            }
            if (F.xPath) {
                return F.xPath
            }
            F = i(F);
            return e.getXPathFromNode(F)
        }

        function z(G, F) {
            var H = p[G];
            if (H && H[F]) {
                return H[F]()
            }
        }

        function v(G, I, H, F) {
            this.xPath = G !== null ? g(G) : "";
            this.domNode = G;
            this.hoverDuration = 0;
            this.hoverUpdateTime = 0;
            this.gridX = Math.max(I, 0);
            this.gridY = Math.max(H, 0);
            this.parentKey = "";
            this.updateTimer = -1;
            this.disposed = false;
            this.childKeys = {};
            this.webEvent = F;
            this.getKey = function() {
                return this.xPath + ":" + this.gridX + "," + this.gridY
            };
            this.update = function() {
                var K = new Date().getTime(),
                    J = this.getKey();
                if (this.hoverUpdateTime !== 0) {
                    this.hoverDuration += K - this.hoverUpdateTime
                }
                this.hoverUpdateTime = K;
                clearTimeout(this.updateTimer);
                this.updateTimer = setTimeout(function() {
                    z(J, "update")
                }, x("updateInterval"))
            };
            this.dispose = function(J) {
                clearTimeout(this.updateTimer);
                delete p[this.getKey()];
                this.disposed = true;
                if (J) {
                    var K = this.clone();
                    p[K.getKey()] = K;
                    K.update()
                }
            };
            this.process = function(M) {
                clearTimeout(this.updateTimer);
                if (this.disposed) {
                    return false
                }
                var K = false,
                    L = this,
                    J = null;
                if (this.hoverDuration >= x("hoverThresholdMin")) {
                    this.hoverDuration = Math.min(this.hoverDuration, x("hoverThresholdMax"));
                    K = true;
                    E(this, {
                        hoverToClick: !!M
                    });
                    while (typeof L !== "undefined") {
                        L.dispose(M);
                        L = p[L.parentKey]
                    }
                } else {
                    this.dispose(M)
                }
                return K
            };
            this.clone = function() {
                var J = new v(this.domNode, this.gridX, this.gridY);
                J.parentKey = this.parentKey;
                return J
            }
        }

        function D(H, F, I, G) {
            return new v(H, F, I, G)
        }

        function r(L) {
            if (L && L.position) {
                return {
                    x: L.position.x,
                    y: L.position.y
                }
            }
            L = i(L);
            var F = L ? L.offsetLeft : 0,
                M = L ? L.offsetTop : 0,
                K = F,
                J = M,
                H = 0,
                G = 0,
                I = o(L);
            while (I) {
                if (s(I)) {
                    break
                }
                H = I.offsetLeft - (I.scrollLeft || 0);
                G = I.offsetTop - (I.scrollTop || 0);
                if (H !== K || G !== J) {
                    F += H;
                    M += G;
                    K = H;
                    J = G
                }
                I = o(I)
            }
            if (isNaN(F)) {
                F = 0
            }
            if (isNaN(M)) {
                M = 0
            }
            return {
                x: F,
                y: M
            }
        }

        function a(J, H, G) {
            J = i(J);
            var I = r(J),
                F = H - I.x,
                K = G - I.y;
            if (!isFinite(F)) {
                F = 0
            }
            if (!isFinite(K)) {
                K = 0
            }
            return {
                x: F,
                y: K
            }
        }

        function f(I, G, L) {
            I = i(I);
            var H = I.offsetWidth > 0 ? Math.max(I.offsetWidth / x("gridCellMaxX"), x("gridCellMinWidth")) : x("gridCellMinWidth"),
                F = I.offsetHeight > 0 ? Math.max(I.offsetHeight / x("gridCellMaxY"), x("gridCellMinHeight")) : x("gridCellMinHeight"),
                K = Math.floor(G / H),
                J = Math.floor(L / F);
            if (!isFinite(K)) {
                K = 0
            }
            if (!isFinite(J)) {
                J = 0
            }
            return {
                x: K,
                y: J
            }
        }

        function c(I) {
            var J = I,
                K = I.getKey(),
                F = {},
                G = null,
                H = null;
            F[K] = true;
            while (typeof J !== "undefined") {
                F[J.parentKey] = true;
                if (J.parentKey === "" || J.parentKey === J.getKey()) {
                    break
                }
                J = p[J.parentKey]
            }
            for (G in p) {
                if (p.hasOwnProperty(G) && !F[G]) {
                    J = p[G];
                    if (J) {
                        J.process()
                    }
                }
            }
        }

        function u(G, H) {
            var I = null,
                F = null;
            for (F in p) {
                if (p.hasOwnProperty(F)) {
                    I = p[F];
                    if (I.domNode === G && I.getKey() !== H) {
                        I.process()
                    }
                }
            }
        }

        function b(J, H, I) {
            if (!H) {
                H = J.target
            }
            if (s(H)) {
                return null
            }
            if (e.utils.isiOS || e.utils.isAndroid) {
                return null
            }
            var F, O, K, N, L, M, G;
            if (!m(H)) {
                F = a(H, J.position.x, J.position.y);
                O = f(H, F.x, F.y);
                K = new v(H, O.x, O.y, J);
                N = K.getKey();
                if (p[N]) {
                    K = p[N]
                } else {
                    p[N] = K
                }
                K.update();
                if (!I) {
                    G = o(H);
                    if (G) {
                        M = b(J, G, true);
                        if (M !== null) {
                            L = M.getKey();
                            N = K.getKey();
                            if (N !== L) {
                                K.parentKey = L
                            }
                        }
                    }
                    c(K)
                }
            } else {
                K = b(J, o(H), I)
            }
            return K
        }

        function q(F) {
            F = C(F);
            if (w(F.target, F.relatedTarget)) {
                return
            }
            u(F.target)
        }

        function l(G) {
            var H = null,
                F;
            for (F in p) {
                if (p.hasOwnProperty(F)) {
                    H = p[F];
                    H.process(true)
                }
            }
        }

        function k(G) {
            var F = d(G, "target.id");
            if (!F) {
                return
            }
            switch (G.type) {
                case "mousemove":
                    b(G);
                    break;
                case "mouseout":
                    q(G);
                    break;
                case "click":
                    l(G);
                    break
            }
        }
        return {
            init: function() {},
            destroy: function() {
                var G, F;
                for (G in p) {
                    if (p.hasOwnProperty(G)) {
                        p[G].dispose();
                        delete p[G]
                    }
                }
            },
            onevent: function(F) {
                if (typeof F !== "object" || !F.type) {
                    return
                }
                k(F)
            },
            onmessage: function(F) {},
            createHoverEvent: D,
            cleanupHoverEvents: c,
            eventMap: p
        }
    })
} else {}
if (TLT && typeof TLT.addModule === "function") {
    TLT.addModule("performance", function(f) {
        var h = {
                loadReceived: false,
                unloadReceived: false,
                perfEventSent: false
            },
            g = 0;

        function b(j, i) {
            if (typeof j !== "string") {
                return false
            }
            if (!i || typeof i !== "object") {
                return false
            }
            return (i[j] === true)
        }

        function e(k, i) {
            var m = 0,
                j = {},
                n = "",
                l = 0;
            if (!k || typeof k !== "object" || !k.navigationStart) {
                return {}
            }
            m = k.navigationStart;
            for (n in k) {
                if (Object.prototype.hasOwnProperty.call(k, n) || typeof k[n] === "number") {
                    if (!b(n, i)) {
                        l = k[n];
                        if (typeof l === "number" && l && n !== "navigationStart") {
                            j[n] = l - m
                        } else {
                            j[n] = l
                        }
                    }
                }
            }
            return j
        }

        function d(l) {
            var m = 0,
                k, j, i = f.utils;
            if (l) {
                k = (l.responseEnd > 0 && l.responseEnd < l.domLoading) ? l.responseEnd : l.domLoading;
                j = l.loadEventStart;
                if (i.isNumeric(k) && i.isNumeric(j) && j > k) {
                    m = j - k
                }
            }
            return m
        }

        function c(j) {
            var i = f.getStartTime();
            if (j.timestamp > i && !g) {
                g = j.timestamp - i
            }
        }

        function a(m) {
            var k = f.getConfig() || {},
                j = "UNKNOWN",
                n = {
                    type: 7,
                    performance: {}
                },
                i, o, l;
            if (!m || h.perfEventSent) {
                return
            }
            o = m.performance || {};
            l = o.timing;
            i = o.navigation;
            if (l) {
                n.performance.timing = e(l, k.filter);
                n.performance.timing.renderTime = d(l)
            } else {
                if (k.calculateRenderTime) {
                    n.performance.timing = {
                        renderTime: g,
                        calculated: true
                    }
                } else {
                    return
                }
            }
            if (k.renderTimeThreshold && n.performance.timing.renderTime > k.renderTimeThreshold) {
                n.performance.timing.invalidRenderTime = n.performance.timing.renderTime;
                delete n.performance.timing.renderTime
            }
            if (i) {
                switch (i.type) {
                    case 0:
                        j = "NAVIGATE";
                        break;
                    case 1:
                        j = "RELOAD";
                        break;
                    case 2:
                        j = "BACKFORWARD";
                        break;
                    default:
                        j = "UNKNOWN";
                        break
                }
                n.performance.navigation = {
                    type: j,
                    redirectCount: i.redirectCount
                }
            }
            f.post(n);
            h.perfEventSent = true
        }
        return {
            init: function() {},
            destroy: function() {},
            onevent: function(i) {
                if (typeof i !== "object" || !i.type) {
                    return
                }
                switch (i.type) {
                    case "load":
                        h.loadReceived = true;
                        c(i);
                        break;
                    case "unload":
                        h.unloadReceived = true;
                        if (!h.perfEventSent) {
                            a(window)
                        }
                        break;
                    default:
                        break
                }
            },
            onmessage: function(i) {}
        }
    })
} else {}
TLT.addModule("replay", function(ap) {
    var D = {
            "a:": "link",
            "button:button": "button",
            "button:submit": "button",
            "input:button": "button",
            "input:checkbox": "checkBox",
            "input:color": "colorPicker",
            "input:date": "datePicker",
            "input:datetime": "datetimePicker",
            "input:datetime-local": "datetime-local",
            "input:email": "emailInput",
            "input:file": "fileInput",
            "input:image": "image",
            "input:month": "month",
            "input:number": "numberPicker",
            "input:password": "textBox",
            "input:radio": "radioButton",
            "input:range": "slider",
            "input:reset": "resetButton",
            "input:search": "searchBox",
            "input:submit": "submitButton",
            "input:tel": "tel",
            "input:text": "textBox",
            "input:time": "timePicker",
            "input:url": "urlBox",
            "input:week": "week",
            "select:": "selectList",
            "select:select-one": "selectList",
            "textarea:": "textBox",
            "textarea:textarea": "textBox"
        },
        aq = ap.utils,
        M = 0,
        ak = {
            scale: 0,
            timestamp: 0
        },
        ad = {},
        E = window.location.hash,
        J = null,
        e = [],
        ae = 0,
        H = true,
        af = null,
        C = null,
        Z = false,
        l = 0,
        W = "",
        z = "",
        Q = (new Date()).getTime(),
        k = 0,
        T = null,
        an = null,
        R = null,
        F = null,
        al = null,
        X = null,
        ab = 0,
        v = 0,
        ai = null,
        u = {
            inFocus: false
        },
        N = null,
        A = aq.isiOS,
        x = navigator.userAgent.indexOf("Chrome") > -1 && aq.isAndroid,
        q = window.devicePixelRatio || 1,
        Y = (window.screen ? window.screen.height - window.screen.availHeight : 0),
        ag = ap.getConfig() || {},
        y = aq.getValue(ag, "viewPortWidthHeightLimit", 10000),
        aj = 1,
        G = 1,
        S, ah = {
            cellMaxX: 10,
            cellMaxY: 10,
            cellMinWidth: 20,
            cellMinHeight: 20
        };

    function s(au) {
        var ar = false,
            at = "|button|image|submit|reset|",
            av = null;
        if (typeof au !== "object" || !au.type) {
            return ar
        }
        switch (au.type.toLowerCase()) {
            case "input":
                av = "|" + (au.subType || "") + "|";
                if (at.indexOf(av.toLowerCase()) === -1) {
                    ar = false
                } else {
                    ar = true
                }
                break;
            case "select":
            case "textarea":
                ar = false;
                break;
            default:
                ar = true;
                break
        }
        return ar
    }

    function h(at) {
        var ar = [];
        at = at.parentNode;
        while (at) {
            ar.push(at);
            at = at.parentNode
        }
        return ar
    }

    function w(ar) {
        return aq.some(ar, function(au) {
            var at = aq.getTagName(au);
            if (at === "a" || at === "button") {
                return au
            }
            return null
        })
    }

    function n(ar) {
        var at = ar.type,
            au = ar.target;
        if (typeof at === "string") {
            at = at.toLowerCase()
        } else {
            at = "unknown"
        }
        if (at === "blur") {
            at = "focusout"
        }
        if (at === "change") {
            if (au.type === "INPUT") {
                switch (au.subType) {
                    case "text":
                    case "date":
                    case "time":
                        at = au.subType + "Change";
                        break;
                    default:
                        at = "valueChange";
                        break
                }
            } else {
                if (au.type === "TEXTAREA") {
                    at = "textChange"
                } else {
                    at = "valueChange"
                }
            }
        }
        return at
    }

    function B(ar, au, at) {
        var av = null;
        if (!ar) {
            return av
        }
        au = au || {};
        au.eventOn = H;
        H = false;
        if (at) {
            av = "dcid-" + aq.getSerialNumber() + "." + (new Date()).getTime() + "s";
            window.setTimeout(function() {
                au.dcid = av;
                ap.performDOMCapture(ar, au)
            }, at)
        } else {
            delete au.dcid;
            av = ap.performDOMCapture(ar, au)
        }
        return av
    }

    function L(ar, aB, at) {
        var ax, aD = false,
            au, aC = false,
            av, ay, aA = null,
            aw = 0,
            az;
        if (!ar || (!aB && !at)) {
            return aA
        }
        if (!aB && !(ar === "load" || ar === "unload")) {
            return aA
        }
        ag = ap.getConfig() || {};
        aC = aq.getValue(ag, "domCapture.enabled", false);
        if (!aC || aq.isLegacyIE) {
            return aA
        }
        ay = aq.getValue(ag, "domCapture.triggers") || [];
        for (ax = 0, az = ay.length; !aD && ax < az; ax += 1) {
            av = ay[ax];
            if (av.event === ar) {
                if (ar === "load" || ar === "unload") {
                    if (av.screenviews) {
                        aD = (-1 !== aq.indexOf(av.screenviews, at))
                    } else {
                        aD = true
                    }
                } else {
                    if (av.targets) {
                        aD = (-1 !== aq.matchTarget(av.targets, aB))
                    } else {
                        aD = true
                    }
                }
            }
        }
        if (aD) {
            au = aq.getValue(ag, "domCapture.options", {});
            aw = av.delay || 0;
            au.forceFullDOM = !!av.fullDOMCapture;
            aA = B(window.document, au, aw)
        }
        return aA
    }

    function ac(aC) {
        var au, av, aw = aq.getValue(aC, "webEvent.target", {}),
            ar = aw.type,
            ay = aw.subType || "",
            at = D[ar.toLowerCase() + ":" + ay.toLowerCase()] || ar,
            az = h(aq.getValue(aw, "element")),
            aB = null,
            ax = aq.getValue(aw, "position.relXY"),
            aA = aq.getValue(aC, "webEvent.subType", null);
        au = {
            timestamp: aq.getValue(aC, "webEvent.timestamp", 0),
            type: 4,
            target: {
                id: aw.id || "",
                idType: aw.idType,
                name: aw.name,
                tlType: at,
                type: ar,
                position: {
                    width: aq.getValue(aw, "size.width"),
                    height: aq.getValue(aw, "size.height")
                },
                currState: aC.currState || null
            },
            event: {
                tlEvent: n(aq.getValue(aC, "webEvent")),
                type: aq.getValue(aC, "webEvent.type", "UNKNOWN")
            }
        };
        if (ay) {
            au.target.subType = ay
        }
        if (ax) {
            au.target.position.relXY = ax
        }
        if (typeof aC.dwell === "number" && aC.dwell > 0) {
            au.target.dwell = aC.dwell
        }
        if (typeof aC.visitedCount === "number") {
            au.target.visitedCount = aC.visitedCount
        }
        if (typeof aC.prevState !== "undefined") {
            au.prevState = aC.prevState
        }
        if (aA) {
            au.event.subType = aA
        }
        aB = w(az);
        au.target.isParentLink = !!aB;
        if (aB) {
            if (aB.href) {
                au.target.currState = au.target.currState || {};
                au.target.currState.href = au.target.currState.href || aB.href
            }
            if (aB.value) {
                au.target.currState = au.target.currState || {};
                au.target.currState.value = au.target.currState.value || aB.value
            }
            if (aB.innerText || aB.textContent) {
                au.target.currState = au.target.currState || {};
                au.target.currState.innerText = aq.trim(au.target.currState.innerText || aB.innerText || aB.textContent)
            }
        }
        if (aq.isUndefOrNull(au.target.currState)) {
            delete au.target.currState
        }
        if (aq.isUndefOrNull(au.target.name)) {
            delete au.target.name
        }
        if (au.event.type !== "click" || s(aw)) {
            av = L(au.event.type, aw);
            if (av) {
                au.dcid = av
            }
        }
        return au
    }

    function I(ar) {
        ap.post(ar)
    }

    function K(aw) {
        var au = 0,
            ar, ax = aw.length,
            az, ay, av, aA = {
                mouseout: true,
                mouseover: true
            },
            at = [];
        for (au = 0; au < ax; au += 1) {
            az = aw[au];
            if (!az) {
                continue
            }
            if (aA[az.event.type]) {
                at.push(az)
            } else {
                for (ar = au + 1; ar < ax && aw[ar]; ar += 1) {
                    if (!aA[aw[ar].event.type]) {
                        break
                    }
                }
                if (ar < ax) {
                    ay = aw[ar];
                    if (ay && az.target.id === ay.target.id && az.event.type !== ay.event.type) {
                        if (az.event.type === "click") {
                            av = az;
                            az = ay;
                            ay = av
                        }
                        if (ay.event.type === "click") {
                            az.target.position = ay.target.position;
                            au += 1
                        } else {
                            if (ay.event.type === "blur") {
                                az.target.dwell = ay.target.dwell;
                                az.target.visitedCount = ay.target.visitedCount;
                                az.focusInOffset = ay.focusInOffset;
                                az.target.position = ay.target.position;
                                au += 1
                            }
                        }
                        aw[ar] = null;
                        aw[au] = az
                    }
                }
                at.push(aw[au])
            }
        }
        for (az = at.shift(); az; az = at.shift()) {
            ap.post(az)
        }
        aw.splice(0, aw.length)
    }
    if (typeof window.onerror !== "function") {
        window.onerror = function(av, au, ar) {
            var at = null;
            if (typeof av !== "string") {
                return
            }
            ar = ar || -1;
            at = {
                type: 6,
                exception: {
                    description: av,
                    url: au,
                    line: ar
                }
            };
            l += 1;
            ap.post(at)
        };
        Z = true
    }

    function o(at, ar) {
        u = ar;
        u.inFocus = true;
        if (typeof ad[at] === "undefined") {
            ad[at] = {}
        }
        ad[at].focus = u.dwellStart = Number(new Date());
        ad[at].focusInOffset = R ? u.dwellStart - Number(R) : -1;
        ad[at].prevState = aq.getValue(ar, "target.state");
        ad[at].visitedCount = ad[at].visitedCount + 1 || 1
    }

    function aa(ar, at) {
        e.push(ac({
            webEvent: ar,
            id: at,
            currState: aq.getValue(ar, "target.state")
        }))
    }

    function d(ax, at) {
        var au = false,
            aw, ar, av = 0;
        if (typeof ax === "undefined" || ax === null || typeof at === "undefined" || at === null) {
            return
        }
        if (typeof ad[ax] !== "undefined" && ad[ax].hasOwnProperty("focus")) {
            ad[ax].dwell = Number(new Date()) - ad[ax].focus
        } else {
            ad[ax] = {};
            ad[ax].dwell = 0
        }
        if (e.length === 0) {
            if (!u.inFocus) {
                return
            }
            aa(at, ax)
        }
        u.inFocus = false;
        if (e[e.length - 1]) {
            for (av = e.length - 1; av >= 0; av--) {
                e[av].target.visitedCount = ad[ax].visitedCount
            }
        }
        ar = e[e.length - 1];
        if (ar) {
            ar.target.dwell = ad[ax].dwell;
            ar.focusInOffset = ad[ax].focusInOffset;
            ar.target.visitedCount = ad[ax].visitedCount;
            if (ar.event.type === "click") {
                if (!s(ar.target)) {
                    ar.target.currState = aq.getValue(at, "target.state") || aq.getValue(at, "target.currState");
                    au = true
                }
            } else {
                if (ar.event.type === "focus") {
                    au = true
                }
            }
            if (au) {
                ar.event.type = "blur";
                ar.event.tlEvent = "focusout";
                aw = L(ar.event.type, at.target);
                if (aw) {
                    ar.dcid = aw
                }
            }
        }
        K(e)
    }

    function m(aw, au) {
        var at = false,
            av = e.length,
            ar = av > 0 ? e[av - 1] : null;
        if (!ar) {
            return at
        }
        if (ar.target.id !== aw && ar.target.tltype !== "selectList") {
            if (au.type === "focus" || au.type === "click" || au.type === "change") {
                d(ar.target.id, ar);
                at = true
            }
        }
        return at
    }

    function c(at, ar) {
        if (typeof ad[at] !== "undefined" && !ad[at].hasOwnProperty("focus")) {
            o(at, ar)
        }
        aa(ar, at);
        if (typeof ad[at] !== "undefined" && typeof ad[at].prevState !== "undefined") {
            if (e[e.length - 1].target.tlType === "textBox" || e[e.length - 1].target.tlType === "selectList") {
                e[e.length - 1].target.prevState = ad[at].prevState
            }
        }
    }

    function r(ax) {
        var aw, aA, at, ar, av = aq.getValue(ax, "target.element", {}),
            aB = aq.getValue(ax, "target.size.width", av.offsetWidth),
            au = aq.getValue(ax, "target.size.height", av.offsetHeight),
            az = aq.getValue(ax, "target.position.x", 0),
            ay = aq.getValue(ax, "target.position.y", 0);
        aw = aB ? Math.max(aB / ah.cellMaxX, ah.cellMinWidth) : ah.cellMinWidth;
        aA = au ? Math.max(au / ah.cellMaxY, ah.cellMinHeight) : ah.cellMinHeight;
        at = Math.floor(az / aw);
        ar = Math.floor(ay / aA);
        if (!isFinite(at)) {
            at = 0
        }
        if (!isFinite(ar)) {
            ar = 0
        }
        return at + "," + ar
    }

    function b(aw, au) {
        var at, ar = true,
            av = 0;
        if (au.target.type === "select" && N && N.target.id === aw) {
            N = null;
            return
        }
        if (!u.inFocus) {
            o(aw, au)
        }
        av = e.length;
        if (av && aq.getValue(e[av - 1], "event.type") !== "change") {
            c(aw, au)
        }
        at = r(au);
        av = e.length;
        if (au.position.x === 0 && au.position.y === 0 && av && aq.getValue(e[av - 1], "target.tlType") === "radioButton") {
            ar = false
        } else {
            au.target.position.relXY = at
        }
        if (av && aq.getValue(e[av - 1], "target.id") === aw) {
            if (ar) {
                e[av - 1].target.position.relXY = at
            }
        } else {
            aa(au, aw);
            if (s(au.target)) {
                d(aw, au)
            }
        }
        N = au
    }

    function a(at) {
        var ar = at.orientation,
            au = {
                type: 4,
                event: {
                    type: "orientationchange"
                },
                target: {
                    prevState: {
                        orientation: M,
                        orientationMode: aq.getOrientationMode(M)
                    },
                    currState: {
                        orientation: ar,
                        orientationMode: aq.getOrientationMode(ar)
                    }
                }
            };
        I(au);
        M = ar
    }

    function ao(at) {
        var ar = false;
        if (!at) {
            return ar
        }
        ar = (ak.scale === at.scale && Math.abs((new Date()).getTime() - ak.timestamp) < 500);
        return ar
    }

    function j(ar) {
        ak.scale = ar.scale;
        ak.rotation = ar.rotation;
        ak.timestamp = (new Date()).getTime()
    }

    function P() {
        var ar, at;
        ar = aj - G;
        if (isNaN(ar)) {
            at = "INVALID"
        } else {
            if (ar < 0) {
                at = "CLOSE"
            } else {
                if (ar > 0) {
                    at = "OPEN"
                } else {
                    at = "NONE"
                }
            }
        }
        return at
    }

    function g(aw) {
        var aB = document.documentElement,
            ay = document.body,
            aC = window.screen,
            at = aC.width,
            au = aC.height,
            ax = aq.getValue(aw, "orientation", 0),
            az = !A ? at : Math.abs(ax) === 90 ? au : at,
            av = {
                type: 1,
                clientState: {
                    pageWidth: document.width || (!aB ? 0 : aB.offsetWidth),
                    pageHeight: Math.max((!document.height ? 0 : document.height), (!aB ? 0 : aB.offsetHeight), (!aB ? 0 : aB.scrollHeight)),
                    viewPortWidth: window.innerWidth || aB.clientWidth,
                    viewPortHeight: window.innerHeight || aB.clientHeight,
                    viewPortX: window.pageXOffset || (!aB ? (!ay ? 0 : ay.scrollLeft) : aB.scrollLeft || 0),
                    viewPortY: window.pageYOffset || (!aB ? (!ay ? 0 : ay.scrollTop) : aB.scrollTop || 0),
                    deviceOrientation: ax,
                    event: aq.getValue(aw, "type")
                }
            },
            aA = av.clientState,
            ar;
        C = C || av;
        if ((aA.viewPortY + aA.viewPortHeight) > aA.pageHeight) {
            aA.viewPortY = aA.pageHeight - aA.viewPortHeight
        }
        if (aA.viewPortY < 0) {
            aA.viewPortY = 0
        }
        ar = !aA.viewPortWidth ? 1 : (az / aA.viewPortWidth);
        aA.deviceScale = ar.toFixed(3);
        aA.viewTime = 0;
        if (F && al) {
            aA.viewTime = al.getTime() - F.getTime()
        }
        if (aw.type === "scroll") {
            aA.viewPortXStart = C.clientState.viewPortX;
            aA.viewPortYStart = C.clientState.viewPortY
        }
        return av
    }

    function p() {
        var ar;
        if (af) {
            ar = af.clientState;
            if (ar.viewPortHeight > 0 && ar.viewPortHeight < y && ar.viewPortWidth > 0 && ar.viewPortWidth < y) {
                I(af)
            }
            C = af;
            af = null;
            F = X || F;
            al = null
        }
        p.timeoutId = 0
    }

    function U(ar) {
        var at = null;
        if (aq.isOperaMini) {
            return
        }
        af = g(ar);
        if (ar.type === "scroll" || ar.type === "resize") {
            if (p.timeoutId) {
                window.clearTimeout(p.timeoutId)
            }
            p.timeoutId = window.setTimeout(p, aq.getValue(ag, "scrollTimeout", 2000))
        } else {
            if (ar.type === "touchstart" || ar.type === "load") {
                if (af) {
                    G = parseFloat(af.clientState.deviceScale)
                }
            } else {
                if (ar.type === "touchend") {
                    if (af) {
                        aj = parseFloat(af.clientState.deviceScale);
                        p()
                    }
                }
            }
        }
        if (ar.type === "load" || ar.type === "unload") {
            if (ar.type === "unload" && Q) {
                at = aq.clone(af);
                at.clientState.event = "attention";
                at.clientState.viewTime = (new Date()).getTime() - Q
            }
            p();
            if (at) {
                af = at;
                p()
            }
        }
        return af
    }

    function am(at) {
        var ar = aq.getValue(at, "nativeEvent.touches.length", 0);
        if (ar === 2) {
            U(at)
        }
    }

    function i(av) {
        var au, at = {},
            aw = aq.getValue(av, "nativeEvent.rotation", 0) || aq.getValue(av, "nativeEvent.touches[0].webkitRotationAngle", 0),
            ax = aq.getValue(av, "nativeEvent.scale", 1),
            ar = null,
            ay = {
                type: 4,
                event: {
                    type: "touchend"
                },
                target: {
                    id: aq.getValue(av, "target.id"),
                    idType: aq.getValue(av, "target.idType")
                }
            };
        au = aq.getValue(av, "nativeEvent.changedTouches.length", 0) + aq.getValue(av, "nativeEvent.touches.length", 0);
        if (au !== 2) {
            return
        }
        U(av);
        ar = {
            rotation: aw ? aw.toFixed(2) : 0,
            scale: aj ? aj.toFixed(2) : 1
        };
        ar.pinch = P();
        at.scale = G ? G.toFixed(2) : 1;
        ay.target.prevState = at;
        ay.target.currState = ar;
        I(ay)
    }

    function f(aC, av) {
        var az = ["type", "name", "target.id"],
            au = null,
            aw, ay, ax = true,
            aA = 10,
            at = 0,
            aB = 0,
            ar = 0;
        if (!aC || !av || typeof aC !== "object" || typeof av !== "object") {
            return false
        }
        for (aw = 0, ay = az.length; ax && aw < ay; aw += 1) {
            au = az[aw];
            if (aq.getValue(aC, au) !== aq.getValue(av, au)) {
                ax = false;
                break
            }
        }
        if (ax) {
            aB = aq.getValue(aC, "timestamp");
            ar = aq.getValue(av, "timestamp");
            if (!(isNaN(aB) && isNaN(ar))) {
                at = Math.abs(aq.getValue(aC, "timestamp") - aq.getValue(av, "timestamp"));
                if (isNaN(at) || at > aA) {
                    ax = false
                }
            }
        }
        return ax
    }

    function O() {
        var ar = window.location.hash;
        if (ar === E) {
            return
        }
        if (E) {
            TLT.logScreenviewUnload(E)
        }
        if (ar) {
            TLT.logScreenviewLoad(ar)
        }
        E = ar
    }

    function t(ar) {
        var au = {
                type: 4,
                event: {
                    type: ar.type
                },
                target: {
                    id: aq.getValue(ar, "target.id"),
                    idType: aq.getValue(ar, "target.idType"),
                    currState: aq.getValue(ar, "target.state")
                }
            },
            at;
        at = L(ar.type, ar.target);
        if (at) {
            au.dcid = at
        }
        I(au)
    }

    function V(at) {
        var ar = aq.getValue(ag, "geolocation"),
            au;
        if (!ar || !ar.enabled) {
            return
        }
        au = ar.triggers || [];
        if (!au.length) {
            return
        }
        if (au[0].event === at) {
            TLT.logGeolocation()
        }
    }
    return {
        init: function() {
            e = []
        },
        destroy: function() {
            d(J);
            e = [];
            if (Z) {
                window.onerror = null;
                Z = false
            }
        },
        onevent: function(at) {
            var aw = null,
                au = null,
                ar, av;
            if (typeof at !== "object" || !at.type) {
                return
            }
            if (f(at, T)) {
                T = at;
                return
            }
            T = at;
            aw = aq.getValue(at, "target.id");
            if (Object.prototype.toString.call(ad[aw]) !== "[object Object]") {
                ad[aw] = {}
            }
            m(aw, at);
            ai = new Date();
            switch (at.type) {
                case "hashchange":
                    O();
                    break;
                case "focus":
                    au = o(aw, at);
                    break;
                case "blur":
                    au = d(aw, at);
                    break;
                case "click":
                    au = b(aw, at);
                    break;
                case "change":
                    au = c(aw, at);
                    break;
                case "orientationchange":
                    au = a(at);
                    break;
                case "touchstart":
                    am(at);
                    break;
                case "touchend":
                    au = i(at);
                    break;
                case "loadWithFrames":
                    TLT.logScreenviewLoad("rootWithFrames");
                    break;
                case "load":
                    M = at.orientation;
                    F = new Date();
                    if (typeof window.orientation !== "number" || aq.isAndroid) {
                        av = (window.screen.width > window.screen.height ? 90 : 0);
                        ar = window.orientation;
                        if (Math.abs(ar) !== av && !(ar === 180 && av === 0)) {
                            aq.isLandscapeZeroDegrees = true;
                            if (Math.abs(ar) === 180 || Math.abs(ar) === 0) {
                                M = 90
                            } else {
                                if (Math.abs(ar) === 90) {
                                    M = 0
                                }
                            }
                        }
                    }
                    U(at);
                    V(at.type);
                    TLT.logScreenviewLoad("root");
                    break;
                case "screenview_load":
                    R = new Date();
                    au = L("load", null, at.name);
                    break;
                case "screenview_unload":
                    au = L("unload", null, at.name);
                    break;
                case "resize":
                case "scroll":
                    if (!al) {
                        al = new Date()
                    }
                    X = new Date();
                    U(at);
                    break;
                case "unload":
                    if (e !== null) {
                        K(e)
                    }
                    al = new Date();
                    U(at);
                    TLT.logScreenviewUnload("root");
                    break;
                default:
                    t(at);
                    break
            }
            J = aw;
            return au
        },
        onmessage: function() {}
    }
});
(function() {
    var changeTarget;
    if (TLT.getFlavor() === "w3c" && TLT.utils.isLegacyIE) {
        changeTarget = "input, select, textarea, button";
    }
    TLT.init({
        "services": {
            "browser": {
                "useCapture": true,
                "sizzleObject": "window.Sizzle"
            },
            "queue": {
                "queues": [{
                    "qid": "DEFAULT",
                    "endpoint": "//decollector.tealeaf.ibmcloud.com/collector/collectorPost",
                    "maxEvents": "15",
                    "maxSize": 0,
                    "timerinterval": 10000,
                    "checkEndpoint": false,
                    "endpointCheckTimeout": 3000
                }],
                "asyncReqOnUnload": false
            },
            "serializer": {
                "json": {
                    "defaultToBuiltin": true,
                    "parsers": ["JSON.parse"],
                    "stringifiers": ["JSON.stringify"]
                }
            },
            "domCapture": {
                "options": {
                    "captureFrames": true,
                    "removeScripts": true,
                    "removeComments": true,
                    "maxLength": 1000000,
                    "maxMutations": 100
                },
                "diffEnabled": false
            },
            "message": {
                "privacy": [{
                    "targets": ["input[type=password]"],
                    "maskType": 3
                }]
            },
            "encoder": {
                "gzip": {
                    "encode": "window.pako.gzip",
                    "defaultEncoding": "gzip"
                }
            }
        },
        "core": {
            "modules": {
                "performance": {
                    "enabled": true,
                    "events": [{
                        "name": "load",
                        "target": "window"
                    }, {
                        "name": "unload",
                        "target": "window"
                    }]
                },
                "replay": {
                    "enabled": true,
                    "events": [{
                        "name": "change",
                        "target": changeTarget,
                        "recurseFrames": true
                    }, {
                        "name": "click",
                        "recurseFrames": true
                    }, {
                        "name": "hashchange",
                        "target": "window"
                    }, {
                        "name": "focus",
                        "target": "input, select, textarea, button",
                        "recurseFrames": true
                    }, {
                        "name": "blur",
                        "target": "input, select, textarea, button",
                        "recurseFrames": true
                    }, {
                        "name": "load",
                        "target": "window"
                    }, {
                        "name": "unload",
                        "target": "window"
                    }, {
                        "name": "resize",
                        "target": "window"
                    }, {
                        "name": "scroll",
                        "target": "window"
                    }, {
                        "name": "orientationchange",
                        "target": "window"
                    }, {
                        "name": "touchend"
                    }, {
                        "name": "touchstart"
                    }]
                },
                "overstat": {
                    "enabled": true,
                    "events": [{
                        "name": "click",
                        "recurseFrames": true
                    }, {
                        "name": "mousemove",
                        "recurseFrames": true
                    }, {
                        "name": "mouseout",
                        "recurseFrames": true
                    }]
                },
                "TLCookie": {
                    "enabled": true
                }
            },
            "framesBlacklist": []
        },
        "modules": {
            "performance": {
                "calculateRenderTime": true,
                "renderTimeThreshold": 600000,
                "filter": {
                    "navigationStart": true,
                    "unloadEventStart": true,
                    "unloadEventEnd": true,
                    "redirectStart": true,
                    "redirectEnd": true,
                    "fetchStart": true,
                    "domainLookupStart": true,
                    "domainLookupEnd": true,
                    "connectStart": true,
                    "connectEnd": true,
                    "secureConnectionStart": true,
                    "requestStart": true,
                    "responseStart": true,
                    "responseEnd": true,
                    "domLoading": true,
                    "domInteractive": true,
                    "domContentLoadedEventStart": true,
                    "domContentLoadedEventEnd": true,
                    "domComplete": true,
                    "loadEventStart": true,
                    "loadEventEnd": true
                }
            },
            "geolocation": {
                "enabled": false,
                "triggers": [{
                    "event": "load"
                }]
            },
            "replay": {
                "domCapture": {
                    "enabled": true,
                    "triggers": [{
                        "event": "click"
                    }, {
                        "event": "change"
                    }, {
                        "event": "load"
                    }, {
                        "event": "unload"
                    }]
                }
            },
            "TLCookie": {
                "tlAppKey": "689673347efd4920a5ab8c55638995b0",
                "sessionizationCookieName": "TLTSID"
            }
        }
    });
}());