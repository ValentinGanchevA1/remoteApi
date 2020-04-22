(window.omniJsonp = window.omniJsonp || []).push([
    [7], {
        "26VM": function(t, e, n) {
            "use strict";

            function r(t) {
                switch (Object.prototype.toString.call(t)) {
                    case "[object Error]":
                    case "[object Exception]":
                    case "[object DOMException]":
                        return !0;
                    default:
                        return v(t, Error)
                }
            }

            function o(t) {
                return "[object ErrorEvent]" === Object.prototype.toString.call(t)
            }

            function i(t) {
                return "[object DOMError]" === Object.prototype.toString.call(t)
            }

            function a(t) {
                return "[object DOMException]" === Object.prototype.toString.call(t)
            }

            function s(t) {
                return "[object String]" === Object.prototype.toString.call(t)
            }

            function c(t) {
                return null === t || "object" !== typeof t && "function" !== typeof t
            }

            function u(t) {
                return "[object Object]" === Object.prototype.toString.call(t)
            }

            function l(t) {
                return "undefined" !== typeof Event && v(t, Event)
            }

            function p(t) {
                return "undefined" !== typeof Element && v(t, Element)
            }

            function f(t) {
                return "[object RegExp]" === Object.prototype.toString.call(t)
            }

            function d(t) {
                return Boolean(t && t.then && "function" === typeof t.then)
            }

            function h(t) {
                return u(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t
            }

            function v(t, e) {
                try {
                    return t instanceof e
                } catch (n) {
                    return !1
                }
            }
            n.d(e, "d", (function() {
                return r
            })), n.d(e, "e", (function() {
                return o
            })), n.d(e, "a", (function() {
                return i
            })), n.d(e, "b", (function() {
                return a
            })), n.d(e, "k", (function() {
                return s
            })), n.d(e, "i", (function() {
                return c
            })), n.d(e, "h", (function() {
                return u
            })), n.d(e, "f", (function() {
                return l
            })), n.d(e, "c", (function() {
                return p
            })), n.d(e, "j", (function() {
                return f
            })), n.d(e, "m", (function() {
                return d
            })), n.d(e, "l", (function() {
                return h
            })), n.d(e, "g", (function() {
                return v
            }))
        },
        HVAe: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "Sentry", (function() {
                return ge
            }));
            var r = {};
            n.r(r), n.d(r, "FunctionToString", (function() {
                return u
            })), n.d(r, "InboundFilters", (function() {
                return T
            }));
            var o = {};
            n.r(o), n.d(o, "GlobalHandlers", (function() {
                return Xt
            })), n.d(o, "TryCatch", (function() {
                return Nt
            })), n.d(o, "Breadcrumbs", (function() {
                return $t
            })), n.d(o, "LinkedErrors", (function() {
                return Qt
            })), n.d(o, "UserAgent", (function() {
                return ee
            }));
            var i = {};
            n.r(i), n.d(i, "BaseTransport", (function() {
                return it
            })), n.d(i, "FetchTransport", (function() {
                return st
            })), n.d(i, "XHRTransport", (function() {
                return ct
            }));
            var a, s = {};
            n.r(s), n.d(s, "Severity", (function() {
                return B.a
            })), n.d(s, "Status", (function() {
                return A
            })), n.d(s, "addGlobalEventProcessor", (function() {
                return _
            })), n.d(s, "addBreadcrumb", (function() {
                return bt
            })), n.d(s, "captureException", (function() {
                return ht
            })), n.d(s, "captureEvent", (function() {
                return _t
            })), n.d(s, "captureMessage", (function() {
                return vt
            })), n.d(s, "configureScope", (function() {
                return gt
            })), n.d(s, "getHubFromCarrier", (function() {
                return j
            })), n.d(s, "getCurrentHub", (function() {
                return O
            })), n.d(s, "Hub", (function() {
                return y
            })), n.d(s, "Scope", (function() {
                return h
            })), n.d(s, "setContext", (function() {
                return yt
            })), n.d(s, "setExtra", (function() {
                return Ot
            })), n.d(s, "setExtras", (function() {
                return mt
            })), n.d(s, "setTag", (function() {
                return xt
            })), n.d(s, "setTags", (function() {
                return Et
            })), n.d(s, "setUser", (function() {
                return jt
            })), n.d(s, "withScope", (function() {
                return wt
            })), n.d(s, "BrowserClient", (function() {
                return ft
            })), n.d(s, "defaultIntegrations", (function() {
                return ne
            })), n.d(s, "forceLoad", (function() {
                return ae
            })), n.d(s, "init", (function() {
                return re
            })), n.d(s, "lastEventId", (function() {
                return ie
            })), n.d(s, "onLoad", (function() {
                return se
            })), n.d(s, "showReportDialog", (function() {
                return oe
            })), n.d(s, "flush", (function() {
                return ce
            })), n.d(s, "close", (function() {
                return ue
            })), n.d(s, "wrap", (function() {
                return le
            })), n.d(s, "SDK_NAME", (function() {
                return lt
            })), n.d(s, "SDK_VERSION", (function() {
                return pt
            })), n.d(s, "Integrations", (function() {
                return de
            })), n.d(s, "Transports", (function() {
                return i
            }));
            var c, u = function() {
                    function t() {
                        this.name = t.id
                    }
                    return t.prototype.setupOnce = function() {
                        a = Function.prototype.toString, Function.prototype.toString = function() {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                            var n = this.__sentry_original__ || this;
                            return a.apply(n, t)
                        }
                    }, t.id = "FunctionToString", t
                }(),
                l = n("D57K"),
                p = n("26VM");
            ! function(t) {
                t.PENDING = "PENDING", t.RESOLVED = "RESOLVED", t.REJECTED = "REJECTED"
            }(c || (c = {}));
            var f = function() {
                    function t(t) {
                        var e = this;
                        this._state = c.PENDING, this._handlers = [], this._resolve = function(t) {
                            e._setResult(c.RESOLVED, t)
                        }, this._reject = function(t) {
                            e._setResult(c.REJECTED, t)
                        }, this._setResult = function(t, n) {
                            e._state === c.PENDING && (Object(p.m)(n) ? n.then(e._resolve, e._reject) : (e._state = t, e._value = n, e._executeHandlers()))
                        }, this._attachHandler = function(t) {
                            e._handlers = e._handlers.concat(t), e._executeHandlers()
                        }, this._executeHandlers = function() {
                            if (e._state !== c.PENDING) {
                                var t = e._handlers.slice();
                                e._handlers = [], t.forEach((function(t) {
                                    t.done || (e._state === c.RESOLVED && t.onfulfilled && t.onfulfilled(e._value), e._state === c.REJECTED && t.onrejected && t.onrejected(e._value), t.done = !0)
                                }))
                            }
                        };
                        try {
                            t(this._resolve, this._reject)
                        } catch (n) {
                            this._reject(n)
                        }
                    }
                    return t.prototype.toString = function() {
                        return "[object SyncPromise]"
                    }, t.resolve = function(e) {
                        return new t((function(t) {
                            t(e)
                        }))
                    }, t.reject = function(e) {
                        return new t((function(t, n) {
                            n(e)
                        }))
                    }, t.all = function(e) {
                        return new t((function(n, r) {
                            if (Array.isArray(e))
                                if (0 !== e.length) {
                                    var o = e.length,
                                        i = [];
                                    e.forEach((function(e, a) {
                                        t.resolve(e).then((function(t) {
                                            i[a] = t, 0 === (o -= 1) && n(i)
                                        })).then(null, r)
                                    }))
                                } else n([]);
                            else r(new TypeError("Promise.all requires an array as input."))
                        }))
                    }, t.prototype.then = function(e, n) {
                        var r = this;
                        return new t((function(t, o) {
                            r._attachHandler({
                                done: !1,
                                onfulfilled: function(n) {
                                    if (e) try {
                                        return void t(e(n))
                                    } catch (r) {
                                        return void o(r)
                                    } else t(n)
                                },
                                onrejected: function(e) {
                                    if (n) try {
                                        return void t(n(e))
                                    } catch (r) {
                                        return void o(r)
                                    } else o(e)
                                }
                            })
                        }))
                    }, t.prototype.catch = function(t) {
                        return this.then((function(t) {
                            return t
                        }), t)
                    }, t.prototype.finally = function(e) {
                        var n = this;
                        return new t((function(t, r) {
                            var o, i;
                            return n.then((function(t) {
                                i = !1, o = t, e && e()
                            }), (function(t) {
                                i = !0, o = t, e && e()
                            })).then((function() {
                                i ? r(o) : t(o)
                            }))
                        }))
                    }, t
                }(),
                d = n("Iwrg"),
                h = function() {
                    function t() {
                        this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._user = {}, this._tags = {}, this._extra = {}, this._context = {}
                    }
                    return t.prototype.addScopeListener = function(t) {
                        this._scopeListeners.push(t)
                    }, t.prototype.addEventProcessor = function(t) {
                        return this._eventProcessors.push(t), this
                    }, t.prototype._notifyScopeListeners = function() {
                        var t = this;
                        this._notifyingListeners || (this._notifyingListeners = !0, setTimeout((function() {
                            t._scopeListeners.forEach((function(e) {
                                e(t)
                            })), t._notifyingListeners = !1
                        })))
                    }, t.prototype._notifyEventProcessors = function(t, e, n, r) {
                        var o = this;
                        return void 0 === r && (r = 0), new f((function(i, a) {
                            var s = t[r];
                            if (null === e || "function" !== typeof s) i(e);
                            else {
                                var c = s(l.a({}, e), n);
                                Object(p.m)(c) ? c.then((function(e) {
                                    return o._notifyEventProcessors(t, e, n, r + 1).then(i)
                                })).then(null, a) : o._notifyEventProcessors(t, c, n, r + 1).then(i).then(null, a)
                            }
                        }))
                    }, t.prototype.setUser = function(t) {
                        return this._user = t || {}, this._notifyScopeListeners(), this
                    }, t.prototype.setTags = function(t) {
                        return this._tags = l.a({}, this._tags, t), this._notifyScopeListeners(), this
                    }, t.prototype.setTag = function(t, e) {
                        var n;
                        return this._tags = l.a({}, this._tags, ((n = {})[t] = e, n)), this._notifyScopeListeners(), this
                    }, t.prototype.setExtras = function(t) {
                        return this._extra = l.a({}, this._extra, t), this._notifyScopeListeners(), this
                    }, t.prototype.setExtra = function(t, e) {
                        var n;
                        return this._extra = l.a({}, this._extra, ((n = {})[t] = e, n)), this._notifyScopeListeners(), this
                    }, t.prototype.setFingerprint = function(t) {
                        return this._fingerprint = t, this._notifyScopeListeners(), this
                    }, t.prototype.setLevel = function(t) {
                        return this._level = t, this._notifyScopeListeners(), this
                    }, t.prototype.setTransaction = function(t) {
                        return this._transaction = t, this._span && (this._span.transaction = t), this._notifyScopeListeners(), this
                    }, t.prototype.setContext = function(t, e) {
                        var n;
                        return this._context = l.a({}, this._context, ((n = {})[t] = e, n)), this._notifyScopeListeners(), this
                    }, t.prototype.setSpan = function(t) {
                        return this._span = t, this._notifyScopeListeners(), this
                    }, t.prototype.getSpan = function() {
                        return this._span
                    }, t.clone = function(e) {
                        var n = new t;
                        return e && (n._breadcrumbs = l.e(e._breadcrumbs), n._tags = l.a({}, e._tags), n._extra = l.a({}, e._extra), n._context = l.a({}, e._context), n._user = e._user, n._level = e._level, n._span = e._span, n._transaction = e._transaction, n._fingerprint = e._fingerprint, n._eventProcessors = l.e(e._eventProcessors)), n
                    }, t.prototype.clear = function() {
                        return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._context = {}, this._level = void 0, this._transaction = void 0, this._fingerprint = void 0, this._span = void 0, this._notifyScopeListeners(), this
                    }, t.prototype.addBreadcrumb = function(t, e) {
                        var n = l.a({
                            timestamp: Object(d.l)()
                        }, t);
                        return this._breadcrumbs = void 0 !== e && e >= 0 ? l.e(this._breadcrumbs, [n]).slice(-e) : l.e(this._breadcrumbs, [n]), this._notifyScopeListeners(), this
                    }, t.prototype.clearBreadcrumbs = function() {
                        return this._breadcrumbs = [], this._notifyScopeListeners(), this
                    }, t.prototype._applyFingerprint = function(t) {
                        t.fingerprint = t.fingerprint ? Array.isArray(t.fingerprint) ? t.fingerprint : [t.fingerprint] : [], this._fingerprint && (t.fingerprint = t.fingerprint.concat(this._fingerprint)), t.fingerprint && !t.fingerprint.length && delete t.fingerprint
                    }, t.prototype.applyToEvent = function(t, e) {
                        return this._extra && Object.keys(this._extra).length && (t.extra = l.a({}, this._extra, t.extra)), this._tags && Object.keys(this._tags).length && (t.tags = l.a({}, this._tags, t.tags)), this._user && Object.keys(this._user).length && (t.user = l.a({}, this._user, t.user)), this._context && Object.keys(this._context).length && (t.contexts = l.a({}, this._context, t.contexts)), this._level && (t.level = this._level), this._transaction && (t.transaction = this._transaction), this._span && (t.contexts = l.a({
                            trace: this._span.getTraceContext()
                        }, t.contexts)), this._applyFingerprint(t), t.breadcrumbs = l.e(t.breadcrumbs || [], this._breadcrumbs), t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0, this._notifyEventProcessors(l.e(v(), this._eventProcessors), t, e)
                    }, t
                }();

            function v() {
                var t = Object(d.f)();
                return t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.globalEventProcessors = t.__SENTRY__.globalEventProcessors || [], t.__SENTRY__.globalEventProcessors
            }

            function _(t) {
                v().push(t)
            }
            var g = n("zgdO"),
                b = 3,
                y = function() {
                    function t(t, e, n) {
                        void 0 === e && (e = new h), void 0 === n && (n = b), this._version = n, this._stack = [], this._stack.push({
                            client: t,
                            scope: e
                        })
                    }
                    return t.prototype._invokeClient = function(t) {
                        for (var e, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                        var o = this.getStackTop();
                        o && o.client && o.client[t] && (e = o.client)[t].apply(e, l.e(n, [o.scope]))
                    }, t.prototype.isOlderThan = function(t) {
                        return this._version < t
                    }, t.prototype.bindClient = function(t) {
                        this.getStackTop().client = t, t && t.setupIntegrations && t.setupIntegrations()
                    }, t.prototype.pushScope = function() {
                        var t = this.getStack(),
                            e = t.length > 0 ? t[t.length - 1].scope : void 0,
                            n = h.clone(e);
                        return this.getStack().push({
                            client: this.getClient(),
                            scope: n
                        }), n
                    }, t.prototype.popScope = function() {
                        return void 0 !== this.getStack().pop()
                    }, t.prototype.withScope = function(t) {
                        var e = this.pushScope();
                        try {
                            t(e)
                        } finally {
                            this.popScope()
                        }
                    }, t.prototype.getClient = function() {
                        return this.getStackTop().client
                    }, t.prototype.getScope = function() {
                        return this.getStackTop().scope
                    }, t.prototype.getStack = function() {
                        return this._stack
                    }, t.prototype.getStackTop = function() {
                        return this._stack[this._stack.length - 1]
                    }, t.prototype.captureException = function(t, e) {
                        var n = this._lastEventId = Object(d.m)(),
                            r = e;
                        if (!e) {
                            var o = void 0;
                            try {
                                throw new Error("Sentry syntheticException")
                            } catch (t) {
                                o = t
                            }
                            r = {
                                originalException: t,
                                syntheticException: o
                            }
                        }
                        return this._invokeClient("captureException", t, l.a({}, r, {
                            event_id: n
                        })), n
                    }, t.prototype.captureMessage = function(t, e, n) {
                        var r = this._lastEventId = Object(d.m)(),
                            o = n;
                        if (!n) {
                            var i = void 0;
                            try {
                                throw new Error(t)
                            } catch (a) {
                                i = a
                            }
                            o = {
                                originalException: t,
                                syntheticException: i
                            }
                        }
                        return this._invokeClient("captureMessage", t, e, l.a({}, o, {
                            event_id: r
                        })), r
                    }, t.prototype.captureEvent = function(t, e) {
                        var n = this._lastEventId = Object(d.m)();
                        return this._invokeClient("captureEvent", t, l.a({}, e, {
                            event_id: n
                        })), n
                    }, t.prototype.lastEventId = function() {
                        return this._lastEventId
                    }, t.prototype.addBreadcrumb = function(t, e) {
                        var n = this.getStackTop();
                        if (n.scope && n.client) {
                            var r = n.client.getOptions && n.client.getOptions() || {},
                                o = r.beforeBreadcrumb,
                                i = void 0 === o ? null : o,
                                a = r.maxBreadcrumbs,
                                s = void 0 === a ? 100 : a;
                            if (!(s <= 0)) {
                                var c = Object(d.l)(),
                                    u = l.a({
                                        timestamp: c
                                    }, t),
                                    p = i ? Object(d.c)((function() {
                                        return i(u, e)
                                    })) : u;
                                null !== p && n.scope.addBreadcrumb(p, Math.min(s, 100))
                            }
                        }
                    }, t.prototype.setUser = function(t) {
                        var e = this.getStackTop();
                        e.scope && e.scope.setUser(t)
                    }, t.prototype.setTags = function(t) {
                        var e = this.getStackTop();
                        e.scope && e.scope.setTags(t)
                    }, t.prototype.setExtras = function(t) {
                        var e = this.getStackTop();
                        e.scope && e.scope.setExtras(t)
                    }, t.prototype.setTag = function(t, e) {
                        var n = this.getStackTop();
                        n.scope && n.scope.setTag(t, e)
                    }, t.prototype.setExtra = function(t, e) {
                        var n = this.getStackTop();
                        n.scope && n.scope.setExtra(t, e)
                    }, t.prototype.setContext = function(t, e) {
                        var n = this.getStackTop();
                        n.scope && n.scope.setContext(t, e)
                    }, t.prototype.configureScope = function(t) {
                        var e = this.getStackTop();
                        e.scope && e.client && t(e.scope)
                    }, t.prototype.run = function(t) {
                        var e = E(this);
                        try {
                            t(this)
                        } finally {
                            E(e)
                        }
                    }, t.prototype.getIntegration = function(t) {
                        var e = this.getClient();
                        if (!e) return null;
                        try {
                            return e.getIntegration(t)
                        } catch (n) {
                            return g.a.warn("Cannot retrieve integration " + t.id + " from the current Hub"), null
                        }
                    }, t.prototype.startSpan = function(t, e) {
                        return void 0 === e && (e = !1), this._callExtensionMethod("startSpan", t, e)
                    }, t.prototype.traceHeaders = function() {
                        return this._callExtensionMethod("traceHeaders")
                    }, t.prototype._callExtensionMethod = function(t) {
                        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                        var r = m(),
                            o = r.__SENTRY__;
                        if (o && o.extensions && "function" === typeof o.extensions[t]) return o.extensions[t].apply(this, e);
                        g.a.warn("Extension method " + t + " couldn't be found, doing nothing.")
                    }, t
                }();

            function m() {
                var t = Object(d.f)();
                return t.__SENTRY__ = t.__SENTRY__ || {
                    extensions: {},
                    hub: void 0
                }, t
            }

            function E(t) {
                var e = m(),
                    n = j(e);
                return w(e, t), n
            }

            function O() {
                var t = m();
                return x(t) && !j(t).isOlderThan(b) || w(t, new y), Object(d.i)() ? function(t) {
                    try {
                        var e = m().__SENTRY__;
                        if (!e || !e.extensions || !e.extensions.domain) return j(t);
                        var n = e.extensions.domain.active;
                        if (!n) return j(t);
                        if (!x(n) || j(n).isOlderThan(b)) {
                            var r = j(t).getStackTop();
                            w(n, new y(r.client, h.clone(r.scope)))
                        }
                        return j(n)
                    } catch (o) {
                        return j(t)
                    }
                }(t) : j(t)
            }

            function x(t) {
                return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
            }

            function j(t) {
                return t && t.__SENTRY__ && t.__SENTRY__.hub ? t.__SENTRY__.hub : (t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.hub = new y, t.__SENTRY__.hub)
            }

            function w(t, e) {
                return !!t && (t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.hub = e, !0)
            }
            var S = n("cJHJ"),
                k = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
                T = function() {
                    function t(e) {
                        void 0 === e && (e = {}), this._options = e, this.name = t.id
                    }
                    return t.prototype.setupOnce = function() {
                        _((function(e) {
                            var n = O();
                            if (!n) return e;
                            var r = n.getIntegration(t);
                            if (r) {
                                var o = n.getClient(),
                                    i = o ? o.getOptions() : {},
                                    a = r._mergeOptions(i);
                                if (r._shouldDropEvent(e, a)) return null
                            }
                            return e
                        }))
                    }, t.prototype._shouldDropEvent = function(t, e) {
                        return this._isSentryError(t, e) ? (g.a.warn("Event dropped due to being internal Sentry Error.\nEvent: " + Object(d.d)(t)), !0) : this._isIgnoredError(t, e) ? (g.a.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + Object(d.d)(t)), !0) : this._isBlacklistedUrl(t, e) ? (g.a.warn("Event dropped due to being matched by `blacklistUrls` option.\nEvent: " + Object(d.d)(t) + ".\nUrl: " + this._getEventFilterUrl(t)), !0) : !this._isWhitelistedUrl(t, e) && (g.a.warn("Event dropped due to not being matched by `whitelistUrls` option.\nEvent: " + Object(d.d)(t) + ".\nUrl: " + this._getEventFilterUrl(t)), !0)
                    }, t.prototype._isSentryError = function(t, e) {
                        if (void 0 === e && (e = {}), !e.ignoreInternal) return !1;
                        try {
                            return t && t.exception && t.exception.values && t.exception.values[0] && "SentryError" === t.exception.values[0].type || !1
                        } catch (n) {
                            return !1
                        }
                    }, t.prototype._isIgnoredError = function(t, e) {
                        return void 0 === e && (e = {}), !(!e.ignoreErrors || !e.ignoreErrors.length) && this._getPossibleEventMessages(t).some((function(t) {
                            return e.ignoreErrors.some((function(e) {
                                return Object(S.a)(t, e)
                            }))
                        }))
                    }, t.prototype._isBlacklistedUrl = function(t, e) {
                        if (void 0 === e && (e = {}), !e.blacklistUrls || !e.blacklistUrls.length) return !1;
                        var n = this._getEventFilterUrl(t);
                        return !!n && e.blacklistUrls.some((function(t) {
                            return Object(S.a)(n, t)
                        }))
                    }, t.prototype._isWhitelistedUrl = function(t, e) {
                        if (void 0 === e && (e = {}), !e.whitelistUrls || !e.whitelistUrls.length) return !0;
                        var n = this._getEventFilterUrl(t);
                        return !n || e.whitelistUrls.some((function(t) {
                            return Object(S.a)(n, t)
                        }))
                    }, t.prototype._mergeOptions = function(t) {
                        return void 0 === t && (t = {}), {
                            blacklistUrls: l.e(this._options.blacklistUrls || [], t.blacklistUrls || []),
                            ignoreErrors: l.e(this._options.ignoreErrors || [], t.ignoreErrors || [], k),
                            ignoreInternal: "undefined" === typeof this._options.ignoreInternal || this._options.ignoreInternal,
                            whitelistUrls: l.e(this._options.whitelistUrls || [], t.whitelistUrls || [])
                        }
                    }, t.prototype._getPossibleEventMessages = function(t) {
                        if (t.message) return [t.message];
                        if (t.exception) try {
                            var e = t.exception.values && t.exception.values[0] || {},
                                n = e.type,
                                r = void 0 === n ? "" : n,
                                o = e.value,
                                i = void 0 === o ? "" : o;
                            return ["" + i, r + ": " + i]
                        } catch (a) {
                            return g.a.error("Cannot extract message for event " + Object(d.d)(t)), []
                        }
                        return []
                    }, t.prototype._getEventFilterUrl = function(t) {
                        try {
                            if (t.stacktrace) {
                                var e = t.stacktrace.frames;
                                return e && e[e.length - 1].filename || null
                            }
                            if (t.exception) {
                                var n = t.exception.values && t.exception.values[0].stacktrace && t.exception.values[0].stacktrace.frames;
                                return n && n[n.length - 1].filename || null
                            }
                            return null
                        } catch (r) {
                            return g.a.error("Cannot extract url for event " + Object(d.d)(t)), null
                        }
                    }, t.id = "InboundFilters", t
                }();
            var R = Object.setPrototypeOf || ({
                    __proto__: []
                }
                instanceof Array ? function(t, e) {
                    return t.__proto__ = e, t
                } : function(t, e) {
                    for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
                    return t
                });
            var I = function(t) {
                    function e(e) {
                        var n = this.constructor,
                            r = t.call(this, e) || this;
                        return r.message = e, r.name = n.prototype.constructor.name, R(r, n.prototype), r
                    }
                    return l.b(e, t), e
                }(Error),
                N = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w\.-]+)(?::(\d+))?\/(.+)/,
                C = function() {
                    function t(t) {
                        "string" === typeof t ? this._fromString(t) : this._fromComponents(t), this._validate()
                    }
                    return t.prototype.toString = function(t) {
                        void 0 === t && (t = !1);
                        var e = this,
                            n = e.host,
                            r = e.path,
                            o = e.pass,
                            i = e.port,
                            a = e.projectId;
                        return e.protocol + "://" + e.user + (t && o ? ":" + o : "") + "@" + n + (i ? ":" + i : "") + "/" + (r ? r + "/" : r) + a
                    }, t.prototype._fromString = function(t) {
                        var e = N.exec(t);
                        if (!e) throw new I("Invalid Dsn");
                        var n = l.c(e.slice(1), 6),
                            r = n[0],
                            o = n[1],
                            i = n[2],
                            a = void 0 === i ? "" : i,
                            s = n[3],
                            c = n[4],
                            u = void 0 === c ? "" : c,
                            p = "",
                            f = n[5],
                            d = f.split("/");
                        d.length > 1 && (p = d.slice(0, -1).join("/"), f = d.pop()), this._fromComponents({
                            host: s,
                            pass: a,
                            path: p,
                            projectId: f,
                            port: u,
                            protocol: r,
                            user: o
                        })
                    }, t.prototype._fromComponents = function(t) {
                        this.protocol = t.protocol, this.user = t.user, this.pass = t.pass || "", this.host = t.host, this.port = t.port || "", this.path = t.path || "", this.projectId = t.projectId
                    }, t.prototype._validate = function() {
                        var t = this;
                        if (["protocol", "user", "host", "projectId"].forEach((function(e) {
                                if (!t[e]) throw new I("Invalid Dsn")
                            })), "http" !== this.protocol && "https" !== this.protocol) throw new I("Invalid Dsn");
                        if (this.port && isNaN(parseInt(this.port, 10))) throw new I("Invalid Dsn")
                    }, t
                }(),
                D = n("mekd"),
                P = function() {
                    function t(t) {
                        this.dsn = t, this._dsnObject = new C(t)
                    }
                    return t.prototype.getDsn = function() {
                        return this._dsnObject
                    }, t.prototype.getStoreEndpoint = function() {
                        return "" + this._getBaseUrl() + this.getStoreEndpointPath()
                    }, t.prototype.getStoreEndpointWithUrlEncodedAuth = function() {
                        var t = {
                            sentry_key: this._dsnObject.user,
                            sentry_version: "7"
                        };
                        return this.getStoreEndpoint() + "?" + Object(D.e)(t)
                    }, t.prototype._getBaseUrl = function() {
                        var t = this._dsnObject,
                            e = t.protocol ? t.protocol + ":" : "",
                            n = t.port ? ":" + t.port : "";
                        return e + "//" + t.host + n
                    }, t.prototype.getStoreEndpointPath = function() {
                        var t = this._dsnObject;
                        return (t.path ? "/" + t.path : "") + "/api/" + t.projectId + "/store/"
                    }, t.prototype.getRequestHeaders = function(t, e) {
                        var n = this._dsnObject,
                            r = ["Sentry sentry_version=7"];
                        return r.push("sentry_client=" + t + "/" + e), r.push("sentry_key=" + n.user), n.pass && r.push("sentry_secret=" + n.pass), {
                            "Content-Type": "application/json",
                            "X-Sentry-Auth": r.join(", ")
                        }
                    }, t.prototype.getReportDialogEndpoint = function(t) {
                        void 0 === t && (t = {});
                        var e = this._dsnObject,
                            n = this._getBaseUrl() + (e.path ? "/" + e.path : "") + "/api/embed/error-page/",
                            r = [];
                        for (var o in r.push("dsn=" + e.toString()), t)
                            if ("user" === o) {
                                if (!t.user) continue;
                                t.user.name && r.push("name=" + encodeURIComponent(t.user.name)), t.user.email && r.push("email=" + encodeURIComponent(t.user.email))
                            } else r.push(encodeURIComponent(o) + "=" + encodeURIComponent(t[o]));
                        return r.length ? n + "?" + r.join("&") : n
                    }, t
                }(),
                L = [];

            function U(t) {
                var e = {};
                return function(t) {
                    var e = t.defaultIntegrations && l.e(t.defaultIntegrations) || [],
                        n = t.integrations,
                        r = [];
                    if (Array.isArray(n)) {
                        var o = n.map((function(t) {
                                return t.name
                            })),
                            i = [];
                        e.forEach((function(t) {
                            -1 === o.indexOf(t.name) && -1 === i.indexOf(t.name) && (r.push(t), i.push(t.name))
                        })), n.forEach((function(t) {
                            -1 === i.indexOf(t.name) && (r.push(t), i.push(t.name))
                        }))
                    } else "function" === typeof n ? (r = n(e), r = Array.isArray(r) ? r : [r]) : r = l.e(e);
                    var a = r.map((function(t) {
                        return t.name
                    }));
                    return -1 !== a.indexOf("Debug") && r.push.apply(r, l.e(r.splice(a.indexOf("Debug"), 1))), r
                }(t).forEach((function(t) {
                    e[t.name] = t,
                        function(t) {
                            -1 === L.indexOf(t.name) && (t.setupOnce(_, O), L.push(t.name), g.a.log("Integration installed: " + t.name))
                        }(t)
                })), e
            }
            var A, F = function() {
                function t(t, e) {
                    this._integrations = {}, this._processing = !1, this._backend = new t(e), this._options = e, e.dsn && (this._dsn = new C(e.dsn))
                }
                return t.prototype.captureException = function(t, e, n) {
                    var r = this,
                        o = e && e.event_id;
                    return this._processing = !0, this._getBackend().eventFromException(t, e).then((function(t) {
                        return r._processEvent(t, e, n)
                    })).then((function(t) {
                        o = t && t.event_id, r._processing = !1
                    })).then(null, (function(t) {
                        g.a.error(t), r._processing = !1
                    })), o
                }, t.prototype.captureMessage = function(t, e, n, r) {
                    var o = this,
                        i = n && n.event_id;
                    return this._processing = !0, (Object(p.i)(t) ? this._getBackend().eventFromMessage("" + t, e, n) : this._getBackend().eventFromException(t, n)).then((function(t) {
                        return o._processEvent(t, n, r)
                    })).then((function(t) {
                        i = t && t.event_id, o._processing = !1
                    })).then(null, (function(t) {
                        g.a.error(t), o._processing = !1
                    })), i
                }, t.prototype.captureEvent = function(t, e, n) {
                    var r = this,
                        o = e && e.event_id;
                    return this._processing = !0, this._processEvent(t, e, n).then((function(t) {
                        o = t && t.event_id, r._processing = !1
                    })).then(null, (function(t) {
                        g.a.error(t), r._processing = !1
                    })), o
                }, t.prototype.getDsn = function() {
                    return this._dsn
                }, t.prototype.getOptions = function() {
                    return this._options
                }, t.prototype.flush = function(t) {
                    var e = this;
                    return this._isClientProcessing(t).then((function(n) {
                        return clearInterval(n.interval), e._getBackend().getTransport().close(t).then((function(t) {
                            return n.ready && t
                        }))
                    }))
                }, t.prototype.close = function(t) {
                    var e = this;
                    return this.flush(t).then((function(t) {
                        return e.getOptions().enabled = !1, t
                    }))
                }, t.prototype.setupIntegrations = function() {
                    this._isEnabled() && (this._integrations = U(this._options))
                }, t.prototype.getIntegration = function(t) {
                    try {
                        return this._integrations[t.id] || null
                    } catch (e) {
                        return g.a.warn("Cannot retrieve integration " + t.id + " from the current Client"), null
                    }
                }, t.prototype._isClientProcessing = function(t) {
                    var e = this;
                    return new f((function(n) {
                        var r = 0,
                            o = 0;
                        clearInterval(o), o = setInterval((function() {
                            e._processing ? (r += 1, t && r >= t && n({
                                interval: o,
                                ready: !1
                            })) : n({
                                interval: o,
                                ready: !0
                            })
                        }), 1)
                    }))
                }, t.prototype._getBackend = function() {
                    return this._backend
                }, t.prototype._isEnabled = function() {
                    return !1 !== this.getOptions().enabled && void 0 !== this._dsn
                }, t.prototype._prepareEvent = function(t, e, n) {
                    var r = this,
                        o = this.getOptions(),
                        i = o.environment,
                        a = o.release,
                        s = o.dist,
                        c = o.maxValueLength,
                        u = void 0 === c ? 250 : c,
                        p = o.normalizeDepth,
                        h = void 0 === p ? 3 : p,
                        v = l.a({}, t);
                    void 0 === v.environment && void 0 !== i && (v.environment = i), void 0 === v.release && void 0 !== a && (v.release = a), void 0 === v.dist && void 0 !== s && (v.dist = s), v.message && (v.message = Object(S.d)(v.message, u));
                    var _ = v.exception && v.exception.values && v.exception.values[0];
                    _ && _.value && (_.value = Object(S.d)(_.value, u));
                    var g = v.request;
                    g && g.url && (g.url = Object(S.d)(g.url, u)), void 0 === v.event_id && (v.event_id = n && n.event_id ? n.event_id : Object(d.m)()), this._addIntegrations(v.sdk);
                    var b = f.resolve(v);
                    return e && (b = e.applyToEvent(v, n)), b.then((function(t) {
                        return "number" === typeof h && h > 0 ? r._normalizeEvent(t, h) : t
                    }))
                }, t.prototype._normalizeEvent = function(t, e) {
                    return t ? l.a({}, t, t.breadcrumbs && {
                        breadcrumbs: t.breadcrumbs.map((function(t) {
                            return l.a({}, t, t.data && {
                                data: Object(D.c)(t.data, e)
                            })
                        }))
                    }, t.user && {
                        user: Object(D.c)(t.user, e)
                    }, t.contexts && {
                        contexts: Object(D.c)(t.contexts, e)
                    }, t.extra && {
                        extra: Object(D.c)(t.extra, e)
                    }) : null
                }, t.prototype._addIntegrations = function(t) {
                    var e = Object.keys(this._integrations);
                    t && e.length > 0 && (t.integrations = e)
                }, t.prototype._processEvent = function(t, e, n) {
                    var r = this,
                        o = this.getOptions(),
                        i = o.beforeSend,
                        a = o.sampleRate;
                    return this._isEnabled() ? "number" === typeof a && Math.random() > a ? f.reject("This event has been sampled, will not send event.") : new f((function(o, a) {
                        r._prepareEvent(t, n, e).then((function(t) {
                            if (null !== t) {
                                var n = t;
                                if (e && e.data && !0 === e.data.__sentry__ || !i) return r._getBackend().sendEvent(n), void o(n);
                                var s = i(t, e);
                                if ("undefined" === typeof s) g.a.error("`beforeSend` method has to return `null` or a valid event.");
                                else if (Object(p.m)(s)) r._handleAsyncBeforeSend(s, o, a);
                                else {
                                    if (null === (n = s)) return g.a.log("`beforeSend` returned `null`, will not send event."), void o(null);
                                    r._getBackend().sendEvent(n), o(n)
                                }
                            } else a("An event processor returned null, will not send event.")
                        })).then(null, (function(t) {
                            r.captureException(t, {
                                data: {
                                    __sentry__: !0
                                },
                                originalException: t
                            }), a("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + t)
                        }))
                    })) : f.reject("SDK not enabled, will not send event.")
                }, t.prototype._handleAsyncBeforeSend = function(t, e, n) {
                    var r = this;
                    t.then((function(t) {
                        null !== t ? (r._getBackend().sendEvent(t), e(t)) : n("`beforeSend` returned `null`, will not send event.")
                    })).then(null, (function(t) {
                        n("beforeSend rejected with " + t)
                    }))
                }, t
            }();
            ! function(t) {
                t.Unknown = "unknown", t.Skipped = "skipped", t.Success = "success", t.RateLimit = "rate_limit", t.Invalid = "invalid", t.Failed = "failed"
            }(A || (A = {})),
            function(t) {
                t.fromHttpCode = function(e) {
                    return e >= 200 && e < 300 ? t.Success : 429 === e ? t.RateLimit : e >= 400 && e < 500 ? t.Invalid : e >= 500 ? t.Failed : t.Unknown
                }
            }(A || (A = {}));
            var H = function() {
                    function t() {}
                    return t.prototype.sendEvent = function(t) {
                        return f.resolve({
                            reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
                            status: A.Skipped
                        })
                    }, t.prototype.close = function(t) {
                        return f.resolve(!0)
                    }, t
                }(),
                M = function() {
                    function t(t) {
                        this._options = t, this._options.dsn || g.a.warn("No DSN provided, backend will not do anything."), this._transport = this._setupTransport()
                    }
                    return t.prototype._setupTransport = function() {
                        return new H
                    }, t.prototype.eventFromException = function(t, e) {
                        throw new I("Backend has to implement `eventFromException` method")
                    }, t.prototype.eventFromMessage = function(t, e, n) {
                        throw new I("Backend has to implement `eventFromMessage` method")
                    }, t.prototype.sendEvent = function(t) {
                        this._transport.sendEvent(t).then(null, (function(t) {
                            g.a.error("Error while sending event: " + t)
                        }))
                    }, t.prototype.getTransport = function() {
                        return this._transport
                    }, t
                }(),
                B = n("N7nI"),
                V = n("jiYP"),
                q = "?",
                W = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
                Y = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i,
                J = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
                z = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
                $ = /\((\S*)(?::(\d+))(?::(\d+))\)/;

            function G(t) {
                var e = null,
                    n = t && t.framesToPop;
                try {
                    if (e = function(t) {
                            if (!t || !t.stacktrace) return null;
                            for (var e, n = t.stacktrace, r = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, o = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i, i = n.split("\n"), a = [], s = 0; s < i.length; s += 2) {
                                var c = null;
                                (e = r.exec(i[s])) ? c = {
                                    url: e[2],
                                    func: e[3],
                                    args: [],
                                    line: +e[1],
                                    column: null
                                }: (e = o.exec(i[s])) && (c = {
                                    url: e[6],
                                    func: e[3] || e[4],
                                    args: e[5] ? e[5].split(",") : [],
                                    line: +e[1],
                                    column: +e[2]
                                }), c && (!c.func && c.line && (c.func = q), a.push(c))
                            }
                            if (!a.length) return null;
                            return {
                                message: K(t),
                                name: t.name,
                                stack: a
                            }
                        }(t)) return X(e, n)
                } catch (r) {}
                try {
                    if (e = function(t) {
                            if (!t || !t.stack) return null;
                            for (var e, n, r, o = [], i = t.stack.split("\n"), a = 0; a < i.length; ++a) {
                                if (n = W.exec(i[a])) {
                                    var s = n[2] && 0 === n[2].indexOf("native");
                                    n[2] && 0 === n[2].indexOf("eval") && (e = $.exec(n[2])) && (n[2] = e[1], n[3] = e[2], n[4] = e[3]), r = {
                                        url: n[2] && 0 === n[2].indexOf("address at ") ? n[2].substr("address at ".length) : n[2],
                                        func: n[1] || q,
                                        args: s ? [n[2]] : [],
                                        line: n[3] ? +n[3] : null,
                                        column: n[4] ? +n[4] : null
                                    }
                                } else if (n = J.exec(i[a])) r = {
                                    url: n[2],
                                    func: n[1] || q,
                                    args: [],
                                    line: +n[3],
                                    column: n[4] ? +n[4] : null
                                };
                                else {
                                    if (!(n = Y.exec(i[a]))) continue;
                                    n[3] && n[3].indexOf(" > eval") > -1 && (e = z.exec(n[3])) ? (n[1] = n[1] || "eval", n[3] = e[1], n[4] = e[2], n[5] = "") : 0 !== a || n[5] || void 0 === t.columnNumber || (o[0].column = t.columnNumber + 1), r = {
                                        url: n[3],
                                        func: n[1] || q,
                                        args: n[2] ? n[2].split(",") : [],
                                        line: n[4] ? +n[4] : null,
                                        column: n[5] ? +n[5] : null
                                    }
                                }!r.func && r.line && (r.func = q), o.push(r)
                            }
                            if (!o.length) return null;
                            return {
                                message: K(t),
                                name: t.name,
                                stack: o
                            }
                        }(t)) return X(e, n)
                } catch (r) {}
                return {
                    message: K(t),
                    name: t && t.name,
                    stack: [],
                    failed: !0
                }
            }

            function X(t, e) {
                try {
                    return l.a({}, t, {
                        stack: t.stack.slice(e)
                    })
                } catch (n) {
                    return t
                }
            }

            function K(t) {
                var e = t && t.message;
                return e ? e.error && "string" === typeof e.error.message ? e.error.message : e : "No error message"
            }
            var Z = 50;

            function Q(t) {
                var e = et(t.stack),
                    n = {
                        type: t.name,
                        value: t.message
                    };
                return e && e.length && (n.stacktrace = {
                    frames: e
                }), void 0 === n.type && "" === n.value && (n.value = "Unrecoverable error caught"), n
            }

            function tt(t) {
                return {
                    exception: {
                        values: [Q(t)]
                    }
                }
            }

            function et(t) {
                if (!t || !t.length) return [];
                var e = t,
                    n = e[0].func || "",
                    r = e[e.length - 1].func || "";
                return -1 === n.indexOf("captureMessage") && -1 === n.indexOf("captureException") || (e = e.slice(1)), -1 !== r.indexOf("sentryWrapped") && (e = e.slice(0, -1)), e.map((function(t) {
                    return {
                        colno: null === t.column ? void 0 : t.column,
                        filename: t.url || e[0].url,
                        function: t.func || "?",
                        in_app: !0,
                        lineno: null === t.line ? void 0 : t.line
                    }
                })).slice(0, Z).reverse()
            }

            function nt(t, e, n) {
                var r;
                if (void 0 === n && (n = {}), Object(p.e)(t) && t.error) return r = tt(G(t = t.error));
                if (Object(p.a)(t) || Object(p.b)(t)) {
                    var o = t,
                        i = o.name || (Object(p.a)(o) ? "DOMError" : "DOMException"),
                        a = o.message ? i + ": " + o.message : i;
                    return r = rt(a, e, n), Object(d.b)(r, a), r
                }
                return Object(p.d)(t) ? r = tt(G(t)) : Object(p.h)(t) || Object(p.f)(t) ? (r = function(t, e, n) {
                    var r = {
                        exception: {
                            values: [{
                                type: Object(p.f)(t) ? t.constructor.name : n ? "UnhandledRejection" : "Error",
                                value: "Non-Error " + (n ? "promise rejection" : "exception") + " captured with keys: " + Object(D.a)(t)
                            }]
                        },
                        extra: {
                            __serialized__: Object(D.d)(t)
                        }
                    };
                    if (e) {
                        var o = et(G(e).stack);
                        r.stacktrace = {
                            frames: o
                        }
                    }
                    return r
                }(t, e, n.rejection), Object(d.a)(r, {
                    synthetic: !0
                }), r) : (r = rt(t, e, n), Object(d.b)(r, "" + t, void 0), Object(d.a)(r, {
                    synthetic: !0
                }), r)
            }

            function rt(t, e, n) {
                void 0 === n && (n = {});
                var r = {
                    message: t
                };
                if (n.attachStacktrace && e) {
                    var o = et(G(e).stack);
                    r.stacktrace = {
                        frames: o
                    }
                }
                return r
            }
            var ot = function() {
                    function t(t) {
                        this._limit = t, this._buffer = []
                    }
                    return t.prototype.isReady = function() {
                        return void 0 === this._limit || this.length() < this._limit
                    }, t.prototype.add = function(t) {
                        var e = this;
                        return this.isReady() ? (-1 === this._buffer.indexOf(t) && this._buffer.push(t), t.then((function() {
                            return e.remove(t)
                        })).then(null, (function() {
                            return e.remove(t).then(null, (function() {}))
                        })), t) : f.reject(new I("Not adding Promise due to buffer limit reached."))
                    }, t.prototype.remove = function(t) {
                        return this._buffer.splice(this._buffer.indexOf(t), 1)[0]
                    }, t.prototype.length = function() {
                        return this._buffer.length
                    }, t.prototype.drain = function(t) {
                        var e = this;
                        return new f((function(n) {
                            var r = setTimeout((function() {
                                t && t > 0 && n(!1)
                            }), t);
                            f.all(e._buffer).then((function() {
                                clearTimeout(r), n(!0)
                            })).then(null, (function() {
                                n(!0)
                            }))
                        }))
                    }, t
                }(),
                it = function() {
                    function t(t) {
                        this.options = t, this._buffer = new ot(30), this.url = new P(this.options.dsn).getStoreEndpointWithUrlEncodedAuth()
                    }
                    return t.prototype.sendEvent = function(t) {
                        throw new I("Transport Class has to implement `sendEvent` method")
                    }, t.prototype.close = function(t) {
                        return this._buffer.drain(t)
                    }, t
                }(),
                at = Object(d.f)(),
                st = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e._disabledUntil = new Date(Date.now()), e
                    }
                    return l.b(e, t), e.prototype.sendEvent = function(t) {
                        var e = this;
                        if (new Date(Date.now()) < this._disabledUntil) return Promise.reject({
                            event: t,
                            reason: "Transport locked till " + this._disabledUntil + " due to too many requests.",
                            status: 429
                        });
                        var n = {
                            body: JSON.stringify(t),
                            method: "POST",
                            referrerPolicy: Object(V.d)() ? "origin" : ""
                        };
                        return void 0 !== this.options.headers && (n.headers = this.options.headers), this._buffer.add(new f((function(t, r) {
                            at.fetch(e.url, n).then((function(n) {
                                var o = A.fromHttpCode(n.status);
                                if (o !== A.Success) {
                                    if (o === A.RateLimit) {
                                        var i = Date.now();
                                        e._disabledUntil = new Date(i + Object(d.j)(i, n.headers.get("Retry-After"))), g.a.warn("Too many requests, backing off till: " + e._disabledUntil)
                                    }
                                    r(n)
                                } else t({
                                    status: o
                                })
                            })).catch(r)
                        })))
                    }, e
                }(it),
                ct = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e._disabledUntil = new Date(Date.now()), e
                    }
                    return l.b(e, t), e.prototype.sendEvent = function(t) {
                        var e = this;
                        return new Date(Date.now()) < this._disabledUntil ? Promise.reject({
                            event: t,
                            reason: "Transport locked till " + this._disabledUntil + " due to too many requests.",
                            status: 429
                        }) : this._buffer.add(new f((function(n, r) {
                            var o = new XMLHttpRequest;
                            for (var i in o.onreadystatechange = function() {
                                    if (4 === o.readyState) {
                                        var t = A.fromHttpCode(o.status);
                                        if (t !== A.Success) {
                                            if (t === A.RateLimit) {
                                                var i = Date.now();
                                                e._disabledUntil = new Date(i + Object(d.j)(i, o.getResponseHeader("Retry-After"))), g.a.warn("Too many requests, backing off till: " + e._disabledUntil)
                                            }
                                            r(o)
                                        } else n({
                                            status: t
                                        })
                                    }
                                }, o.open("POST", e.url), e.options.headers) e.options.headers.hasOwnProperty(i) && o.setRequestHeader(i, e.options.headers[i]);
                            o.send(JSON.stringify(t))
                        })))
                    }, e
                }(it),
                ut = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return l.b(e, t), e.prototype._setupTransport = function() {
                        if (!this._options.dsn) return t.prototype._setupTransport.call(this);
                        var e = l.a({}, this._options.transportOptions, {
                            dsn: this._options.dsn
                        });
                        return this._options.transport ? new this._options.transport(e) : Object(V.a)() ? new st(e) : new ct(e)
                    }, e.prototype.eventFromException = function(t, e) {
                        var n = nt(t, e && e.syntheticException || void 0, {
                            attachStacktrace: this._options.attachStacktrace
                        });
                        return Object(d.a)(n, {
                            handled: !0,
                            type: "generic"
                        }), n.level = B.a.Error, e && e.event_id && (n.event_id = e.event_id), f.resolve(n)
                    }, e.prototype.eventFromMessage = function(t, e, n) {
                        void 0 === e && (e = B.a.Info);
                        var r = rt(t, n && n.syntheticException || void 0, {
                            attachStacktrace: this._options.attachStacktrace
                        });
                        return r.level = e, n && n.event_id && (r.event_id = n.event_id), f.resolve(r)
                    }, e
                }(M),
                lt = "sentry.javascript.browser",
                pt = "5.15.4",
                ft = function(t) {
                    function e(e) {
                        return void 0 === e && (e = {}), t.call(this, ut, e) || this
                    }
                    return l.b(e, t), e.prototype._prepareEvent = function(e, n, r) {
                        return e.platform = e.platform || "javascript", e.sdk = l.a({}, e.sdk, {
                            name: lt,
                            packages: l.e(e.sdk && e.sdk.packages || [], [{
                                name: "npm:@sentry/browser",
                                version: pt
                            }]),
                            version: pt
                        }), t.prototype._prepareEvent.call(this, e, n, r)
                    }, e.prototype.showReportDialog = function(t) {
                        void 0 === t && (t = {});
                        var e = Object(d.f)().document;
                        if (e)
                            if (this._isEnabled()) {
                                var n = t.dsn || this.getDsn();
                                if (t.eventId)
                                    if (n) {
                                        var r = e.createElement("script");
                                        r.async = !0, r.src = new P(n).getReportDialogEndpoint(t), t.onLoad && (r.onload = t.onLoad), (e.head || e.body).appendChild(r)
                                    } else g.a.error("Missing `Dsn` option in showReportDialog call");
                                else g.a.error("Missing `eventId` option in showReportDialog call")
                            } else g.a.error("Trying to call showReportDialog with Sentry Client is disabled")
                    }, e
                }(F);

            function dt(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                var r = O();
                if (r && r[t]) return r[t].apply(r, l.e(e));
                throw new Error("No hub defined or " + t + " was not found on the hub, please open a bug report.")
            }

            function ht(t) {
                var e;
                try {
                    throw new Error("Sentry syntheticException")
                } catch (t) {
                    e = t
                }
                return dt("captureException", t, {
                    originalException: t,
                    syntheticException: e
                })
            }

            function vt(t, e) {
                var n;
                try {
                    throw new Error(t)
                } catch (r) {
                    n = r
                }
                return dt("captureMessage", t, e, {
                    originalException: t,
                    syntheticException: n
                })
            }

            function _t(t) {
                return dt("captureEvent", t)
            }

            function gt(t) {
                dt("configureScope", t)
            }

            function bt(t) {
                dt("addBreadcrumb", t)
            }

            function yt(t, e) {
                dt("setContext", t, e)
            }

            function mt(t) {
                dt("setExtras", t)
            }

            function Et(t) {
                dt("setTags", t)
            }

            function Ot(t, e) {
                dt("setExtra", t, e)
            }

            function xt(t, e) {
                dt("setTag", t, e)
            }

            function jt(t) {
                dt("setUser", t)
            }

            function wt(t) {
                dt("withScope", t)
            }
            var St = 0;

            function kt() {
                return St > 0
            }

            function Tt() {
                St += 1, setTimeout((function() {
                    St -= 1
                }))
            }

            function Rt(t, e, n) {
                if (void 0 === e && (e = {}), "function" !== typeof t) return t;
                try {
                    if (t.__sentry__) return t;
                    if (t.__sentry_wrapped__) return t.__sentry_wrapped__
                } catch (i) {
                    return t
                }
                var r = function() {
                    var r = Array.prototype.slice.call(arguments);
                    try {
                        n && "function" === typeof n && n.apply(this, arguments);
                        var o = r.map((function(t) {
                            return Rt(t, e)
                        }));
                        return t.handleEvent ? t.handleEvent.apply(this, o) : t.apply(this, o)
                    } catch (i) {
                        throw Tt(), wt((function(t) {
                            t.addEventProcessor((function(t) {
                                var n = l.a({}, t);
                                return e.mechanism && (Object(d.b)(n, void 0, void 0), Object(d.a)(n, e.mechanism)), n.extra = l.a({}, n.extra, {
                                    arguments: r
                                }), n
                            })), ht(i)
                        })), i
                    }
                };
                try {
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (r[o] = t[o])
                } catch (a) {}
                t.prototype = t.prototype || {}, r.prototype = t.prototype, Object.defineProperty(t, "__sentry_wrapped__", {
                    enumerable: !1,
                    value: r
                }), Object.defineProperties(r, {
                    __sentry__: {
                        enumerable: !1,
                        value: !0
                    },
                    __sentry_original__: {
                        enumerable: !1,
                        value: t
                    }
                });
                try {
                    Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", {
                        get: function() {
                            return t.name
                        }
                    })
                } catch (a) {}
                return r
            }
            var It, Nt = function() {
                    function t() {
                        this._ignoreOnError = 0, this.name = t.id
                    }
                    return t.prototype._wrapTimeFunction = function(t) {
                        return function() {
                            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                            var r = e[0];
                            return e[0] = Rt(r, {
                                mechanism: {
                                    data: {
                                        function: Object(d.e)(t)
                                    },
                                    handled: !0,
                                    type: "instrument"
                                }
                            }), t.apply(this, e)
                        }
                    }, t.prototype._wrapRAF = function(t) {
                        return function(e) {
                            return t(Rt(e, {
                                mechanism: {
                                    data: {
                                        function: "requestAnimationFrame",
                                        handler: Object(d.e)(t)
                                    },
                                    handled: !0,
                                    type: "instrument"
                                }
                            }))
                        }
                    }, t.prototype._wrapEventTarget = function(t) {
                        var e = Object(d.f)(),
                            n = e[t] && e[t].prototype;
                        n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (Object(D.b)(n, "addEventListener", (function(e) {
                            return function(n, r, o) {
                                try {
                                    "function" === typeof r.handleEvent && (r.handleEvent = Rt(r.handleEvent.bind(r), {
                                        mechanism: {
                                            data: {
                                                function: "handleEvent",
                                                handler: Object(d.e)(r),
                                                target: t
                                            },
                                            handled: !0,
                                            type: "instrument"
                                        }
                                    }))
                                } catch (i) {}
                                return e.call(this, n, Rt(r, {
                                    mechanism: {
                                        data: {
                                            function: "addEventListener",
                                            handler: Object(d.e)(r),
                                            target: t
                                        },
                                        handled: !0,
                                        type: "instrument"
                                    }
                                }), o)
                            }
                        })), Object(D.b)(n, "removeEventListener", (function(t) {
                            return function(e, n, r) {
                                var o = n;
                                try {
                                    o = o && (o.__sentry_wrapped__ || o)
                                } catch (i) {}
                                return t.call(this, e, o, r)
                            }
                        })))
                    }, t.prototype._wrapXHR = function(t) {
                        return function() {
                            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                            var r = this,
                                o = ["onload", "onerror", "onprogress", "onreadystatechange"];
                            return o.forEach((function(t) {
                                t in r && "function" === typeof r[t] && Object(D.b)(r, t, (function(e) {
                                    var n = {
                                        mechanism: {
                                            data: {
                                                function: t,
                                                handler: Object(d.e)(e)
                                            },
                                            handled: !0,
                                            type: "instrument"
                                        }
                                    };
                                    return e.__sentry_original__ && (n.mechanism.data.handler = Object(d.e)(e.__sentry_original__)), Rt(e, n)
                                }))
                            })), t.apply(this, e)
                        }
                    }, t.prototype.setupOnce = function() {
                        this._ignoreOnError = this._ignoreOnError;
                        var t = Object(d.f)();
                        Object(D.b)(t, "setTimeout", this._wrapTimeFunction.bind(this)), Object(D.b)(t, "setInterval", this._wrapTimeFunction.bind(this)), Object(D.b)(t, "requestAnimationFrame", this._wrapRAF.bind(this)), "XMLHttpRequest" in t && Object(D.b)(XMLHttpRequest.prototype, "send", this._wrapXHR.bind(this)), ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"].forEach(this._wrapEventTarget.bind(this))
                    }, t.id = "TryCatch", t
                }(),
                Ct = Object(d.f)(),
                Dt = {},
                Pt = {};

            function Lt(t) {
                if (!Pt[t]) switch (Pt[t] = !0, t) {
                    case "console":
                        ! function() {
                            if (!("console" in Ct)) return;
                            ["debug", "info", "warn", "error", "log", "assert"].forEach((function(t) {
                                t in Ct.console && Object(D.b)(Ct.console, t, (function(e) {
                                    return function() {
                                        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                                        At("console", {
                                            args: n,
                                            level: t
                                        }), e && Function.prototype.apply.call(e, Ct.console, n)
                                    }
                                }))
                            }))
                        }();
                        break;
                    case "dom":
                        ! function() {
                            if (!("document" in Ct)) return;
                            Ct.document.addEventListener("click", Wt("click", At.bind(null, "dom")), !1), Ct.document.addEventListener("keypress", Yt(At.bind(null, "dom")), !1), ["EventTarget", "Node"].forEach((function(t) {
                                var e = Ct[t] && Ct[t].prototype;
                                e && e.hasOwnProperty && e.hasOwnProperty("addEventListener") && (Object(D.b)(e, "addEventListener", (function(t) {
                                    return function(e, n, r) {
                                        return n && n.handleEvent ? ("click" === e && Object(D.b)(n, "handleEvent", (function(t) {
                                            return function(e) {
                                                return Wt("click", At.bind(null, "dom"))(e), t.call(this, e)
                                            }
                                        })), "keypress" === e && Object(D.b)(n, "handleEvent", (function(t) {
                                            return function(e) {
                                                return Yt(At.bind(null, "dom"))(e), t.call(this, e)
                                            }
                                        }))) : ("click" === e && Wt("click", At.bind(null, "dom"), !0)(this), "keypress" === e && Yt(At.bind(null, "dom"))(this)), t.call(this, e, n, r)
                                    }
                                })), Object(D.b)(e, "removeEventListener", (function(t) {
                                    return function(e, n, r) {
                                        var o = n;
                                        try {
                                            o = o && (o.__sentry_wrapped__ || o)
                                        } catch (i) {}
                                        return t.call(this, e, o, r)
                                    }
                                })))
                            }))
                        }();
                        break;
                    case "xhr":
                        ! function() {
                            if (!("XMLHttpRequest" in Ct)) return;
                            var t = XMLHttpRequest.prototype;
                            Object(D.b)(t, "open", (function(t) {
                                return function() {
                                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                    var r = e[1];
                                    return this.__sentry_xhr__ = {
                                        method: Object(p.k)(e[0]) ? e[0].toUpperCase() : e[0],
                                        url: e[1]
                                    }, Object(p.k)(r) && "POST" === this.__sentry_xhr__.method && r.match(/sentry_key/) && (this.__sentry_own_request__ = !0), t.apply(this, e)
                                }
                            })), Object(D.b)(t, "send", (function(t) {
                                return function() {
                                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                    var r = this,
                                        o = {
                                            args: e,
                                            startTimestamp: Date.now(),
                                            xhr: r
                                        };
                                    return At("xhr", l.a({}, o)), r.addEventListener("readystatechange", (function() {
                                        if (4 === r.readyState) {
                                            try {
                                                r.__sentry_xhr__ && (r.__sentry_xhr__.status_code = r.status)
                                            } catch (t) {}
                                            At("xhr", l.a({}, o, {
                                                endTimestamp: Date.now()
                                            }))
                                        }
                                    })), t.apply(this, e)
                                }
                            }))
                        }();
                        break;
                    case "fetch":
                        ! function() {
                            if (!Object(V.c)()) return;
                            Object(D.b)(Ct, "fetch", (function(t) {
                                return function() {
                                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                    var r = {
                                        args: e,
                                        fetchData: {
                                            method: Ft(e),
                                            url: Ht(e)
                                        },
                                        startTimestamp: Date.now()
                                    };
                                    return At("fetch", l.a({}, r)), t.apply(Ct, e).then((function(t) {
                                        return At("fetch", l.a({}, r, {
                                            endTimestamp: Date.now(),
                                            response: t
                                        })), t
                                    }), (function(t) {
                                        throw At("fetch", l.a({}, r, {
                                            endTimestamp: Date.now(),
                                            error: t
                                        })), t
                                    }))
                                }
                            }))
                        }();
                        break;
                    case "history":
                        ! function() {
                            if (!Object(V.b)()) return;
                            var t = Ct.onpopstate;

                            function e(t) {
                                return function() {
                                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                    var r = e.length > 2 ? e[2] : void 0;
                                    if (r) {
                                        var o = It,
                                            i = String(r);
                                        It = i, At("history", {
                                            from: o,
                                            to: i
                                        })
                                    }
                                    return t.apply(this, e)
                                }
                            }
                            Ct.onpopstate = function() {
                                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                var r = Ct.location.href,
                                    o = It;
                                if (It = r, At("history", {
                                        from: o,
                                        to: r
                                    }), t) return t.apply(this, e)
                            }, Object(D.b)(Ct.history, "pushState", e), Object(D.b)(Ct.history, "replaceState", e)
                        }();
                        break;
                    case "error":
                        Jt = Ct.onerror, Ct.onerror = function(t, e, n, r, o) {
                            return At("error", {
                                column: r,
                                error: o,
                                line: n,
                                msg: t,
                                url: e
                            }), !!Jt && Jt.apply(this, arguments)
                        };
                        break;
                    case "unhandledrejection":
                        zt = Ct.onunhandledrejection, Ct.onunhandledrejection = function(t) {
                            return At("unhandledrejection", t), !zt || zt.apply(this, arguments)
                        };
                        break;
                    default:
                        g.a.warn("unknown instrumentation type:", t)
                }
            }

            function Ut(t) {
                t && "string" === typeof t.type && "function" === typeof t.callback && (Dt[t.type] = Dt[t.type] || [], Dt[t.type].push(t.callback), Lt(t.type))
            }

            function At(t, e) {
                var n, r;
                if (t && Dt[t]) try {
                    for (var o = l.f(Dt[t] || []), i = o.next(); !i.done; i = o.next()) {
                        var a = i.value;
                        try {
                            a(e)
                        } catch (s) {
                            g.a.error("Error while triggering instrumentation handler.\nType: " + t + "\nName: " + Object(d.e)(a) + "\nError: " + s)
                        }
                    }
                } catch (c) {
                    n = {
                        error: c
                    }
                } finally {
                    try {
                        i && !i.done && (r = o.return) && r.call(o)
                    } finally {
                        if (n) throw n.error
                    }
                }
            }

            function Ft(t) {
                return void 0 === t && (t = []), "Request" in Ct && Object(p.g)(t[0], Request) && t[0].method ? String(t[0].method).toUpperCase() : t[1] && t[1].method ? String(t[1].method).toUpperCase() : "GET"
            }

            function Ht(t) {
                return void 0 === t && (t = []), "string" === typeof t[0] ? t[0] : "Request" in Ct && Object(p.g)(t[0], Request) ? t[0].url : String(t[0])
            }
            var Mt, Bt, Vt = 1e3,
                qt = 0;

            function Wt(t, e, n) {
                return void 0 === n && (n = !1),
                    function(r) {
                        Mt = void 0, r && Bt !== r && (Bt = r, qt && clearTimeout(qt), n ? qt = setTimeout((function() {
                            e({
                                event: r,
                                name: t
                            })
                        })) : e({
                            event: r,
                            name: t
                        }))
                    }
            }

            function Yt(t) {
                return function(e) {
                    var n;
                    try {
                        n = e.target
                    } catch (o) {
                        return
                    }
                    var r = n && n.tagName;
                    r && ("INPUT" === r || "TEXTAREA" === r || n.isContentEditable) && (Mt || Wt("input", t)(e), clearTimeout(Mt), Mt = setTimeout((function() {
                        Mt = void 0
                    }), Vt))
                }
            }
            var Jt = null;
            var zt = null;
            var $t = function() {
                function t(e) {
                    this.name = t.id, this._options = l.a({
                        console: !0,
                        dom: !0,
                        fetch: !0,
                        history: !0,
                        sentry: !0,
                        xhr: !0
                    }, e)
                }
                return t.prototype._consoleBreadcrumb = function(t) {
                    var e = {
                        category: "console",
                        data: {
                            arguments: t.args,
                            logger: "console"
                        },
                        level: B.a.fromString(t.level),
                        message: Object(S.b)(t.args, " ")
                    };
                    if ("assert" === t.level) {
                        if (!1 !== t.args[0]) return;
                        e.message = "Assertion failed: " + (Object(S.b)(t.args.slice(1), " ") || "console.assert"), e.data.arguments = t.args.slice(1)
                    }
                    O().addBreadcrumb(e, {
                        input: t.args,
                        level: t.level
                    })
                }, t.prototype._domBreadcrumb = function(t) {
                    var e;
                    try {
                        e = t.event.target ? Object(d.h)(t.event.target) : Object(d.h)(t.event)
                    } catch (n) {
                        e = "<unknown>"
                    }
                    0 !== e.length && O().addBreadcrumb({
                        category: "ui." + t.name,
                        message: e
                    }, {
                        event: t.event,
                        name: t.name
                    })
                }, t.prototype._xhrBreadcrumb = function(t) {
                    if (t.endTimestamp) {
                        if (t.xhr.__sentry_own_request__) return;
                        O().addBreadcrumb({
                            category: "xhr",
                            data: t.xhr.__sentry_xhr__,
                            type: "http"
                        }, {
                            xhr: t.xhr
                        })
                    } else this._options.sentry && t.xhr.__sentry_own_request__ && Gt(t.args[0])
                }, t.prototype._fetchBreadcrumb = function(t) {
                    if (t.endTimestamp) {
                        var e = O().getClient(),
                            n = e && e.getDsn();
                        if (this._options.sentry && n) {
                            var r = new P(n).getStoreEndpoint();
                            if (r && -1 !== t.fetchData.url.indexOf(r) && "POST" === t.fetchData.method && t.args[1] && t.args[1].body) return void Gt(t.args[1].body)
                        }
                        t.error ? O().addBreadcrumb({
                            category: "fetch",
                            data: l.a({}, t.fetchData, {
                                status_code: t.response.status
                            }),
                            level: B.a.Error,
                            type: "http"
                        }, {
                            data: t.error,
                            input: t.args
                        }) : O().addBreadcrumb({
                            category: "fetch",
                            data: l.a({}, t.fetchData, {
                                status_code: t.response.status
                            }),
                            type: "http"
                        }, {
                            input: t.args,
                            response: t.response
                        })
                    }
                }, t.prototype._historyBreadcrumb = function(t) {
                    var e = Object(d.f)(),
                        n = t.from,
                        r = t.to,
                        o = Object(d.k)(e.location.href),
                        i = Object(d.k)(n),
                        a = Object(d.k)(r);
                    i.path || (i = o), o.protocol === a.protocol && o.host === a.host && (r = a.relative), o.protocol === i.protocol && o.host === i.host && (n = i.relative), O().addBreadcrumb({
                        category: "navigation",
                        data: {
                            from: n,
                            to: r
                        }
                    })
                }, t.prototype.setupOnce = function() {
                    var t = this;
                    this._options.console && Ut({
                        callback: function() {
                            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                            t._consoleBreadcrumb.apply(t, l.e(e))
                        },
                        type: "console"
                    }), this._options.dom && Ut({
                        callback: function() {
                            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                            t._domBreadcrumb.apply(t, l.e(e))
                        },
                        type: "dom"
                    }), this._options.xhr && Ut({
                        callback: function() {
                            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                            t._xhrBreadcrumb.apply(t, l.e(e))
                        },
                        type: "xhr"
                    }), this._options.fetch && Ut({
                        callback: function() {
                            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                            t._fetchBreadcrumb.apply(t, l.e(e))
                        },
                        type: "fetch"
                    }), this._options.history && Ut({
                        callback: function() {
                            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                            t._historyBreadcrumb.apply(t, l.e(e))
                        },
                        type: "history"
                    })
                }, t.id = "Breadcrumbs", t
            }();

            function Gt(t) {
                try {
                    var e = JSON.parse(t);
                    O().addBreadcrumb({
                        category: "sentry." + ("transaction" === e.type ? "transaction" : "event"),
                        event_id: e.event_id,
                        level: e.level || B.a.fromString("error"),
                        message: Object(d.d)(e)
                    }, {
                        event: e
                    })
                } catch (n) {
                    g.a.error("Error while adding sentry type breadcrumb")
                }
            }
            var Xt = function() {
                    function t(e) {
                        this.name = t.id, this._onErrorHandlerInstalled = !1, this._onUnhandledRejectionHandlerInstalled = !1, this._options = l.a({
                            onerror: !0,
                            onunhandledrejection: !0
                        }, e)
                    }
                    return t.prototype.setupOnce = function() {
                        Error.stackTraceLimit = 50, this._options.onerror && (g.a.log("Global Handler attached: onerror"), this._installGlobalOnErrorHandler()), this._options.onunhandledrejection && (g.a.log("Global Handler attached: onunhandledrejection"), this._installGlobalOnUnhandledRejectionHandler())
                    }, t.prototype._installGlobalOnErrorHandler = function() {
                        var e = this;
                        this._onErrorHandlerInstalled || (Ut({
                            callback: function(n) {
                                var r = n.error,
                                    o = O(),
                                    i = o.getIntegration(t),
                                    a = r && !0 === r.__sentry_own_request__;
                                if (i && !kt() && !a) {
                                    var s = o.getClient(),
                                        c = Object(p.i)(r) ? e._eventFromIncompleteOnError(n.msg, n.url, n.line, n.column) : e._enhanceEventWithInitialFrame(nt(r, void 0, {
                                            attachStacktrace: s && s.getOptions().attachStacktrace,
                                            rejection: !1
                                        }), n.url, n.line, n.column);
                                    Object(d.a)(c, {
                                        handled: !1,
                                        type: "onerror"
                                    }), o.captureEvent(c, {
                                        originalException: r
                                    })
                                }
                            },
                            type: "error"
                        }), this._onErrorHandlerInstalled = !0)
                    }, t.prototype._installGlobalOnUnhandledRejectionHandler = function() {
                        var e = this;
                        this._onUnhandledRejectionHandlerInstalled || (Ut({
                            callback: function(n) {
                                var r = n;
                                try {
                                    "reason" in n ? r = n.reason : "detail" in n && "reason" in n.detail && (r = n.detail.reason)
                                } catch (u) {}
                                var o = O(),
                                    i = o.getIntegration(t),
                                    a = r && !0 === r.__sentry_own_request__;
                                if (!i || kt() || a) return !0;
                                var s = o.getClient(),
                                    c = Object(p.i)(r) ? e._eventFromIncompleteRejection(r) : nt(r, void 0, {
                                        attachStacktrace: s && s.getOptions().attachStacktrace,
                                        rejection: !0
                                    });
                                c.level = B.a.Error, Object(d.a)(c, {
                                    handled: !1,
                                    type: "onunhandledrejection"
                                }), o.captureEvent(c, {
                                    originalException: r
                                })
                            },
                            type: "unhandledrejection"
                        }), this._onUnhandledRejectionHandlerInstalled = !0)
                    }, t.prototype._eventFromIncompleteOnError = function(t, e, n, r) {
                        var o, i = Object(p.e)(t) ? t.message : t;
                        if (Object(p.k)(i)) {
                            var a = i.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
                            a && (o = a[1], i = a[2])
                        }
                        var s = {
                            exception: {
                                values: [{
                                    type: o || "Error",
                                    value: i
                                }]
                            }
                        };
                        return this._enhanceEventWithInitialFrame(s, e, n, r)
                    }, t.prototype._eventFromIncompleteRejection = function(t) {
                        return {
                            exception: {
                                values: [{
                                    type: "UnhandledRejection",
                                    value: "Non-Error promise rejection captured with value: " + t
                                }]
                            }
                        }
                    }, t.prototype._enhanceEventWithInitialFrame = function(t, e, n, r) {
                        t.exception = t.exception || {}, t.exception.values = t.exception.values || [], t.exception.values[0] = t.exception.values[0] || {}, t.exception.values[0].stacktrace = t.exception.values[0].stacktrace || {}, t.exception.values[0].stacktrace.frames = t.exception.values[0].stacktrace.frames || [];
                        var o = isNaN(parseInt(r, 10)) ? void 0 : r,
                            i = isNaN(parseInt(n, 10)) ? void 0 : n,
                            a = Object(p.k)(e) && e.length > 0 ? e : Object(d.g)();
                        return 0 === t.exception.values[0].stacktrace.frames.length && t.exception.values[0].stacktrace.frames.push({
                            colno: o,
                            filename: a,
                            function: "?",
                            in_app: !0,
                            lineno: i
                        }), t
                    }, t.id = "GlobalHandlers", t
                }(),
                Kt = "cause",
                Zt = 5,
                Qt = function() {
                    function t(e) {
                        void 0 === e && (e = {}), this.name = t.id, this._key = e.key || Kt, this._limit = e.limit || Zt
                    }
                    return t.prototype.setupOnce = function() {
                        _((function(e, n) {
                            var r = O().getIntegration(t);
                            return r ? r._handler(e, n) : e
                        }))
                    }, t.prototype._handler = function(t, e) {
                        if (!t.exception || !t.exception.values || !e || !Object(p.g)(e.originalException, Error)) return t;
                        var n = this._walkErrorTree(e.originalException, this._key);
                        return t.exception.values = l.e(n, t.exception.values), t
                    }, t.prototype._walkErrorTree = function(t, e, n) {
                        if (void 0 === n && (n = []), !Object(p.g)(t[e], Error) || n.length + 1 >= this._limit) return n;
                        var r = Q(G(t[e]));
                        return this._walkErrorTree(t[e], e, l.e([r], n))
                    }, t.id = "LinkedErrors", t
                }(),
                te = Object(d.f)(),
                ee = function() {
                    function t() {
                        this.name = t.id
                    }
                    return t.prototype.setupOnce = function() {
                        _((function(e) {
                            if (O().getIntegration(t)) {
                                if (!te.navigator || !te.location) return e;
                                var n = e.request || {};
                                return n.url = n.url || te.location.href, n.headers = n.headers || {}, n.headers["User-Agent"] = te.navigator.userAgent, l.a({}, e, {
                                    request: n
                                })
                            }
                            return e
                        }))
                    }, t.id = "UserAgent", t
                }(),
                ne = [new r.InboundFilters, new r.FunctionToString, new Nt, new $t, new Xt, new Qt, new ee];

            function re(t) {
                if (void 0 === t && (t = {}), void 0 === t.defaultIntegrations && (t.defaultIntegrations = ne), void 0 === t.release) {
                    var e = Object(d.f)();
                    e.SENTRY_RELEASE && e.SENTRY_RELEASE.id && (t.release = e.SENTRY_RELEASE.id)
                }! function(t, e) {
                    !0 === e.debug && g.a.enable();
                    var n = O(),
                        r = new t(e);
                    n.bindClient(r)
                }(ft, t)
            }

            function oe(t) {
                void 0 === t && (t = {}), t.eventId || (t.eventId = O().lastEventId());
                var e = O().getClient();
                e && e.showReportDialog(t)
            }

            function ie() {
                return O().lastEventId()
            }

            function ae() {}

            function se(t) {
                t()
            }

            function ce(t) {
                var e = O().getClient();
                return e ? e.flush(t) : f.reject(!1)
            }

            function ue(t) {
                var e = O().getClient();
                return e ? e.close(t) : f.reject(!1)
            }

            function le(t) {
                return Rt(t)()
            }
            var pe = {},
                fe = Object(d.f)();
            fe.Sentry && fe.Sentry.Integrations && (pe = fe.Sentry.Integrations);
            var de = l.a({}, pe, r, o),
                he = n("0D0S"),
                ve = n.n(he),
                _e = (n("pFhE"), ve()().publicRuntimeConfig);
            re({
                enabled: !!_e.OMNIFRONTEND_SENTRY_DSN,
                maxBreadcrumbs: 10,
                dsn: _e.OMNIFRONTEND_SENTRY_DSN,
                release: _e.portalVersion,
                environment: _e.OMNIFRONTEND_APP_ENV,
                attachStacktrace: !0,
                beforeSend: void 0,
                ignoreErrors: ["ResizeObserver", "SecurityError", "Request aborted", "Assignment to constant variable", "/api/digitalfeedback/loader"],
                integrations: void 0
            }), xt("ssr", "false");
            var ge = s
        },
        Iwrg: function(t, e, n) {
            "use strict";
            (function(t, r, o) {
                n.d(e, "i", (function() {
                    return a
                })), n.d(e, "f", (function() {
                    return s
                })), n.d(e, "m", (function() {
                    return c
                })), n.d(e, "k", (function() {
                    return u
                })), n.d(e, "d", (function() {
                    return l
                })), n.d(e, "c", (function() {
                    return p
                })), n.d(e, "b", (function() {
                    return f
                })), n.d(e, "a", (function() {
                    return d
                })), n.d(e, "g", (function() {
                    return h
                })), n.d(e, "h", (function() {
                    return v
                })), n.d(e, "l", (function() {
                    return E
                })), n.d(e, "j", (function() {
                    return x
                })), n.d(e, "e", (function() {
                    return w
                }));
                var i = n("26VM");
                n("cJHJ");

                function a() {
                    return "[object process]" === Object.prototype.toString.call("undefined" !== typeof t ? t : 0)
                }

                function s() {
                    return a() ? r : window
                }

                function c() {
                    var t = s(),
                        e = t.crypto || t.msCrypto;
                    if (void 0 !== e && e.getRandomValues) {
                        var n = new Uint16Array(8);
                        e.getRandomValues(n), n[3] = 4095 & n[3] | 16384, n[4] = 16383 & n[4] | 32768;
                        var r = function(t) {
                            for (var e = t.toString(16); e.length < 4;) e = "0" + e;
                            return e
                        };
                        return r(n[0]) + r(n[1]) + r(n[2]) + r(n[3]) + r(n[4]) + r(n[5]) + r(n[6]) + r(n[7])
                    }
                    return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, (function(t) {
                        var e = 16 * Math.random() | 0;
                        return ("x" === t ? e : 3 & e | 8).toString(16)
                    }))
                }

                function u(t) {
                    if (!t) return {};
                    var e = t.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
                    if (!e) return {};
                    var n = e[6] || "",
                        r = e[8] || "";
                    return {
                        host: e[4],
                        path: e[5],
                        protocol: e[2],
                        relative: e[5] + n + r
                    }
                }

                function l(t) {
                    if (t.message) return t.message;
                    if (t.exception && t.exception.values && t.exception.values[0]) {
                        var e = t.exception.values[0];
                        return e.type && e.value ? e.type + ": " + e.value : e.type || e.value || t.event_id || "<unknown>"
                    }
                    return t.event_id || "<unknown>"
                }

                function p(t) {
                    var e = s();
                    if (!("console" in e)) return t();
                    var n = e.console,
                        r = {};
                    ["debug", "info", "warn", "error", "log", "assert"].forEach((function(t) {
                        t in e.console && n[t].__sentry_original__ && (r[t] = n[t], n[t] = n[t].__sentry_original__)
                    }));
                    var o = t();
                    return Object.keys(r).forEach((function(t) {
                        n[t] = r[t]
                    })), o
                }

                function f(t, e, n) {
                    t.exception = t.exception || {}, t.exception.values = t.exception.values || [], t.exception.values[0] = t.exception.values[0] || {}, t.exception.values[0].value = t.exception.values[0].value || e || "", t.exception.values[0].type = t.exception.values[0].type || n || "Error"
                }

                function d(t, e) {
                    void 0 === e && (e = {});
                    try {
                        t.exception.values[0].mechanism = t.exception.values[0].mechanism || {}, Object.keys(e).forEach((function(n) {
                            t.exception.values[0].mechanism[n] = e[n]
                        }))
                    } catch (n) {}
                }

                function h() {
                    try {
                        return document.location.href
                    } catch (t) {
                        return ""
                    }
                }

                function v(t) {
                    try {
                        for (var e = t, n = [], r = 0, o = 0, i = " > ".length, a = void 0; e && r++ < 5 && !("html" === (a = _(e)) || r > 1 && o + n.length * i + a.length >= 80);) n.push(a), o += a.length, e = e.parentNode;
                        return n.reverse().join(" > ")
                    } catch (s) {
                        return "<unknown>"
                    }
                }

                function _(t) {
                    var e, n, r, o, a, s = t,
                        c = [];
                    if (!s || !s.tagName) return "";
                    if (c.push(s.tagName.toLowerCase()), s.id && c.push("#" + s.id), (e = s.className) && Object(i.k)(e))
                        for (n = e.split(/\s+/), a = 0; a < n.length; a++) c.push("." + n[a]);
                    var u = ["type", "name", "title", "alt"];
                    for (a = 0; a < u.length; a++) r = u[a], (o = s.getAttribute(r)) && c.push("[" + r + '="' + o + '"]');
                    return c.join("")
                }
                var g = Date.now(),
                    b = 0,
                    y = {
                        now: function() {
                            var t = Date.now() - g;
                            return t < b && (t = b), b = t, t
                        },
                        timeOrigin: g
                    },
                    m = function() {
                        if (a()) try {
                            return (t = "perf_hooks", o.require(t)).performance
                        } catch (e) {
                            return y
                        }
                        var t;
                        return s().performance && void 0 === performance.timeOrigin && (performance.timeOrigin = performance.timing && performance.timing.navigationStart || g), s().performance || y
                    }();

                function E() {
                    return (m.timeOrigin + m.now()) / 1e3
                }
                var O = 6e4;

                function x(t, e) {
                    if (!e) return O;
                    var n = parseInt("" + e, 10);
                    if (!isNaN(n)) return 1e3 * n;
                    var r = Date.parse("" + e);
                    return isNaN(r) ? O : r - t
                }
                var j = "<anonymous>";

                function w(t) {
                    try {
                        return t && "function" === typeof t && t.name || j
                    } catch (e) {
                        return j
                    }
                }
            }).call(this, n("F63i"), n("fRV1"), n("cyaT")(t))
        },
        LOM1: function(t, e, n) {
            "use strict";
            n.d(e, "b", (function() {
                return v
            })), n.d(e, "a", (function() {
                return _
            }));
            var r = n("zjfJ"),
                o = n("5IAQ"),
                i = n("zygG"),
                a = n("ERkP"),
                s = n.n(a),
                c = n("XTXV"),
                u = n("Kq2c"),
                l = n("lPe2"),
                p = n("v2bw"),
                f = n("sWVV"),
                d = n("kEwR"),
                h = n("l1C2"),
                v = (s.a.createElement, function(t) {
                    return "contentComponent_".concat(t)
                }),
                _ = s.a.memo((function(t) {
                    var e = t.children,
                        n = t.className,
                        a = t.index,
                        _ = Object(u.useTheme)(),
                        g = _.bp,
                        b = _.colors,
                        y = s.a.useRef(null),
                        m = s.a.useState(!1),
                        E = Object(i.a)(m, 2),
                        O = E[0],
                        x = E[1],
                        j = s.a.useContext(l.b).set,
                        w = s.a.useCallback((function(t) {
                            x(t), j(a, t)
                        }), [a, j]);
                    return Object(h.b)(d.a, null, Object(h.b)("div", {
                        ref: y,
                        css: Object(o.a)(Object(r.a)({
                            position: "relative"
                        }, g.ONLY_MOBILE, {
                            borderBottom: "15px solid ".concat(b.STARDUST),
                            "&:last-of-type": {
                                borderBottom: "none"
                            }
                        }), "")
                    }, Object(h.b)(f.a, {
                        parentRef: y
                    }), Object(h.b)("div", {
                        id: v(a),
                        css: Object(o.a)({
                            backgroundColor: b.WHITE,
                            position: "relative"
                        }, ""),
                        className: n
                    }, Object(h.b)(c.a, {
                        onChange: w
                    }, Object(h.b)("span", null)), Object(h.b)(p.a, {
                        index: a,
                        isInViewport: O
                    }, e))))
                }));
            _.displayName = "ContentComponent"
        },
        N7nI: function(t, e, n) {
            "use strict";
            var r;
            n.d(e, "a", (function() {
                    return r
                })),
                function(t) {
                    t.Fatal = "fatal", t.Error = "error", t.Warning = "warning", t.Log = "log", t.Info = "info", t.Debug = "debug", t.Critical = "critical"
                }(r || (r = {})),
                function(t) {
                    t.fromString = function(e) {
                        switch (e) {
                            case "debug":
                                return t.Debug;
                            case "info":
                                return t.Info;
                            case "warn":
                            case "warning":
                                return t.Warning;
                            case "error":
                                return t.Error;
                            case "fatal":
                                return t.Fatal;
                            case "critical":
                                return t.Critical;
                            case "log":
                            default:
                                return t.Log
                        }
                    }
                }(r || (r = {}))
        },
        aoUj: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return r
            }));
            var r = n("HVAe").Sentry
        },
        cJHJ: function(t, e, n) {
            "use strict";
            n.d(e, "d", (function() {
                return o
            })), n.d(e, "c", (function() {
                return i
            })), n.d(e, "b", (function() {
                return a
            })), n.d(e, "a", (function() {
                return s
            }));
            var r = n("26VM");

            function o(t, e) {
                return void 0 === e && (e = 0), "string" !== typeof t || 0 === e ? t : t.length <= e ? t : t.substr(0, e) + "..."
            }

            function i(t, e) {
                var n = t,
                    r = n.length;
                if (r <= 150) return n;
                e > r && (e = r);
                var o = Math.max(e - 60, 0);
                o < 5 && (o = 0);
                var i = Math.min(o + 140, r);
                return i > r - 5 && (i = r), i === r && (o = Math.max(i - 140, 0)), n = n.slice(o, i), o > 0 && (n = "'{snip} " + n), i < r && (n += " {snip}"), n
            }

            function a(t, e) {
                if (!Array.isArray(t)) return "";
                for (var n = [], r = 0; r < t.length; r++) {
                    var o = t[r];
                    try {
                        n.push(String(o))
                    } catch (i) {
                        n.push("[value cannot be serialized]")
                    }
                }
                return n.join(e)
            }

            function s(t, e) {
                return Object(r.j)(e) ? e.test(t) : "string" === typeof e && -1 !== t.indexOf(e)
            }
        },
        cyaT: function(t, e) {
            t.exports = function(t) {
                if (!t.webpackPolyfill) {
                    var e = Object.create(t);
                    e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                        enumerable: !0,
                        get: function() {
                            return e.l
                        }
                    }), Object.defineProperty(e, "id", {
                        enumerable: !0,
                        get: function() {
                            return e.i
                        }
                    }), Object.defineProperty(e, "exports", {
                        enumerable: !0
                    }), e.webpackPolyfill = 1
                }
                return e
            }
        },
        h5q0: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return r
            }));
            var r = function() {
                function t() {
                    this._hasWeakSet = "function" === typeof WeakSet, this._inner = this._hasWeakSet ? new WeakSet : []
                }
                return t.prototype.memoize = function(t) {
                    if (this._hasWeakSet) return !!this._inner.has(t) || (this._inner.add(t), !1);
                    for (var e = 0; e < this._inner.length; e++) {
                        if (this._inner[e] === t) return !0
                    }
                    return this._inner.push(t), !1
                }, t.prototype.unmemoize = function(t) {
                    if (this._hasWeakSet) this._inner.delete(t);
                    else
                        for (var e = 0; e < this._inner.length; e++)
                            if (this._inner[e] === t) {
                                this._inner.splice(e, 1);
                                break
                            }
                }, t
            }()
        },
        jiYP: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return i
            })), n.d(e, "c", (function() {
                return s
            })), n.d(e, "e", (function() {
                return c
            })), n.d(e, "d", (function() {
                return u
            })), n.d(e, "b", (function() {
                return l
            }));
            var r = n("zgdO"),
                o = n("Iwrg");

            function i() {
                if (!("fetch" in Object(o.f)())) return !1;
                try {
                    return new Headers, new Request(""), new Response, !0
                } catch (t) {
                    return !1
                }
            }

            function a(t) {
                return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
            }

            function s() {
                if (!i()) return !1;
                var t = Object(o.f)();
                if (a(t.fetch)) return !0;
                var e = !1,
                    n = t.document;
                if (n && "function" === typeof n.createElement) try {
                    var s = n.createElement("iframe");
                    s.hidden = !0, n.head.appendChild(s), s.contentWindow && s.contentWindow.fetch && (e = a(s.contentWindow.fetch)), n.head.removeChild(s)
                } catch (c) {
                    r.a.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", c)
                }
                return e
            }

            function c() {
                return "ReportingObserver" in Object(o.f)()
            }

            function u() {
                if (!i()) return !1;
                try {
                    return new Request("_", {
                        referrerPolicy: "origin"
                    }), !0
                } catch (t) {
                    return !1
                }
            }

            function l() {
                var t = Object(o.f)(),
                    e = t.chrome,
                    n = e && e.app && e.app.runtime,
                    r = "history" in t && !!t.history.pushState && !!t.history.replaceState;
                return !n && r
            }
        },
        lPe2: function(t, e, n) {
            "use strict";
            n.d(e, "b", (function() {
                return d
            })), n.d(e, "c", (function() {
                return h
            })), n.d(e, "a", (function() {
                return _
            }));
            var r = n("5IAQ"),
                o = n("zjfJ"),
                i = n("zygG"),
                a = n("ERkP"),
                s = n.n(a),
                c = n("Kq2c"),
                u = n("+SGW"),
                l = n("LOM1"),
                p = n("l1C2"),
                f = (s.a.createElement, s.a.memo((function(t) {
                    var e, n = t.index,
                        i = t.isActive,
                        a = t.title,
                        f = Object(c.useTheme)(),
                        d = f.colors,
                        h = f.selectors,
                        v = s.a.useCallback((function(t) {
                            t.preventDefault();
                            var e = document.querySelector("#".concat(Object(l.b)(n)));
                            e && (Object(u.a)(e, {
                                behavior: "smooth",
                                block: "start"
                            }), requestAnimationFrame((function() {
                                e.setAttribute("tabindex", "-1"), e.focus(), e.removeAttribute("tabindex")
                            })))
                        }), [n]);
                    return Object(p.b)("li", null, Object(p.b)("a", {
                        title: a,
                        href: "#".concat(Object(l.b)(n)),
                        onClick: v,
                        css: Object(r.a)((e = {
                            display: "flex",
                            height: 26,
                            position: "relative",
                            width: 20,
                            outline: "none",
                            "::after": {
                                content: "''",
                                position: "absolute",
                                top: 0,
                                bottom: 0,
                                right: 0,
                                left: 0,
                                margin: "auto",
                                width: 8,
                                height: 8,
                                borderRadius: "50%",
                                border: "1px solid ".concat(i ? d.WHITE : d.DOVE),
                                backgroundColor: i ? d.ORANGE_DARK : d.WHITE,
                                transition: "background-color .2s, border-color .2s"
                            },
                            "::before": {
                                content: "attr(title)",
                                position: "absolute",
                                visibility: "hidden",
                                right: -2,
                                top: 0,
                                bottom: 0,
                                padding: "0.5rem 1.5rem 0.5rem 1rem",
                                whiteSpace: "nowrap",
                                backgroundColor: d.BLACK,
                                color: d.BLACK,
                                borderRadius: 14,
                                fontSize: "0.75rem",
                                fontWeight: "bold",
                                lineHeight: .9,
                                transform: "scaleX(0.1)",
                                transformOrigin: "right",
                                opacity: 0,
                                transition: "transform .2s, opacity .5s, color .2s ease-in .2s"
                            }
                        }, Object(o.a)(e, "".concat(h.ON_HOVER, "::before"), {
                            visibility: "visible",
                            opacity: 1,
                            transform: "scaleX(1)",
                            color: d.WHITE
                        }), Object(o.a)(e, "".concat(h.ON_HOVER, "::after"), {
                            borderColor: d.BLACK,
                            backgroundColor: d.ORANGE_DARK
                        }), Object(o.a)(e, "".concat(h.ON_FOCUS, "::before"), {
                            visibility: "visible",
                            opacity: 1,
                            transform: "scaleX(1)",
                            color: d.WHITE
                        }), Object(o.a)(e, "".concat(h.ON_FOCUS, "::after"), {
                            borderColor: d.BLACK,
                            backgroundColor: d.ORANGE_DARK
                        }), e), "")
                    }, Object(p.b)(c.VisuallyHidden, null, "Przejd\u017a do sekcji $", a)))
                })));
            f.displayName = "ListItem";
            s.a.createElement;
            var d = s.a.createContext({
                    contentList: [],
                    set: function(t, e) {}
                }),
                h = function(t) {
                    var e = t.children,
                        n = s.a.useState([]),
                        r = Object(i.a)(n, 2),
                        a = r[0],
                        c = r[1],
                        u = s.a.useCallback((function(t, e) {
                            c((function(n) {
                                return Object.assign([], n, Object(o.a)({}, t, {
                                    isVisible: e
                                }))
                            }))
                        }), []);
                    return Object(p.b)(d.Provider, {
                        value: {
                            contentList: a,
                            set: u
                        }
                    }, e)
                },
                v = {
                    name: "j9hh9c",
                    styles: "pointer-events:auto;display:inline-block;position:fixed;top:50%;right:20px;transform:translateY(-50%);@supports (-webkit-appearance:none){position:sticky;}@supports (-ms-ime-align:auto) and (position:sticky) and (not (font-variation-settings:normal)){position:fixed;@media(min-width: 1360px){margin-right:5%;}}"
                },
                _ = s.a.memo((function(t) {
                    var e = t.components,
                        n = s.a.useContext(d).contentList,
                        i = s.a.useRef(null),
                        a = n.findIndex((function(t) {
                            return !!t && t.isVisible
                        }));
                    s.a.useEffect((function() {
                        -1 !== a && (i.current = a)
                    }), [a]);
                    var u = -1 !== a ? a : i.current,
                        l = Object(c.useTheme)(),
                        h = l.bp,
                        _ = l.zIndex;
                    return Object(p.b)("div", {
                        css: Object(r.a)(Object(o.a)({
                            display: "none"
                        }, h.FROM_DESKTOP, {
                            pointerEvents: "none",
                            display: "block",
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            margin: "auto",
                            left: 0,
                            right: 0,
                            zIndex: _.LAYER_3,
                            textAlign: "right"
                        }), "")
                    }, Object(p.b)("ul", {
                        "aria-label": "Nawigacja boczna",
                        role: "navigation",
                        css: v
                    }, e.map((function(t, e) {
                        return Object(p.b)(f, {
                            index: e,
                            key: t.id,
                            id: t.id,
                            isActive: e === u,
                            title: t.title
                        })
                    }))))
                }));
            _.displayName = "SidebarNavigation"
        },
        mekd: function(t, e, n) {
            "use strict";
            (function(t) {
                n.d(e, "b", (function() {
                    return s
                })), n.d(e, "e", (function() {
                    return c
                })), n.d(e, "d", (function() {
                    return p
                })), n.d(e, "c", (function() {
                    return h
                })), n.d(e, "a", (function() {
                    return v
                }));
                n("D57K");
                var r = n("26VM"),
                    o = n("h5q0"),
                    i = n("Iwrg"),
                    a = n("cJHJ");

                function s(t, e, n) {
                    if (e in t) {
                        var r = t[e],
                            o = n(r);
                        if ("function" === typeof o) try {
                            o.prototype = o.prototype || {}, Object.defineProperties(o, {
                                __sentry_original__: {
                                    enumerable: !1,
                                    value: r
                                }
                            })
                        } catch (i) {}
                        t[e] = o
                    }
                }

                function c(t) {
                    return Object.keys(t).map((function(e) {
                        return encodeURIComponent(e) + "=" + encodeURIComponent(t[e])
                    })).join("&")
                }

                function u(t) {
                    if (Object(r.d)(t)) {
                        var e = t,
                            n = {
                                message: e.message,
                                name: e.name,
                                stack: e.stack
                            };
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                        return n
                    }
                    if (Object(r.f)(t)) {
                        var a = t,
                            s = {};
                        s.type = a.type;
                        try {
                            s.target = Object(r.c)(a.target) ? Object(i.h)(a.target) : Object.prototype.toString.call(a.target)
                        } catch (c) {
                            s.target = "<unknown>"
                        }
                        try {
                            s.currentTarget = Object(r.c)(a.currentTarget) ? Object(i.h)(a.currentTarget) : Object.prototype.toString.call(a.currentTarget)
                        } catch (c) {
                            s.currentTarget = "<unknown>"
                        }
                        for (var o in "undefined" !== typeof CustomEvent && Object(r.g)(t, CustomEvent) && (s.detail = a.detail), a) Object.prototype.hasOwnProperty.call(a, o) && (s[o] = a);
                        return s
                    }
                    return t
                }

                function l(t) {
                    return function(t) {
                        return ~-encodeURI(t).split(/%..|./).length
                    }(JSON.stringify(t))
                }

                function p(t, e, n) {
                    void 0 === e && (e = 3), void 0 === n && (n = 102400);
                    var r = h(t, e);
                    return l(r) > n ? p(t, e - 1, n) : r
                }

                function f(e, n) {
                    return "domain" === n && e && "object" === typeof e && e._events ? "[Domain]" : "domainEmitter" === n ? "[DomainEmitter]" : "undefined" !== typeof t && e === t ? "[Global]" : e === window ? "[Window]" : "undefined" !== typeof document && e === document ? "[Document]" : Object(r.l)(e) ? "[SyntheticEvent]" : "number" === typeof e && e !== e ? "[NaN]" : void 0 === e ? "[undefined]" : "function" === typeof e ? "[Function: " + Object(i.e)(e) + "]" : e
                }

                function d(t, e, n, i) {
                    if (void 0 === n && (n = 1 / 0), void 0 === i && (i = new o.a), 0 === n) return function(t) {
                        var e = Object.prototype.toString.call(t);
                        if ("string" === typeof t) return t;
                        if ("[object Object]" === e) return "[Object]";
                        if ("[object Array]" === e) return "[Array]";
                        var n = f(t);
                        return Object(r.i)(n) ? n : e
                    }(e);
                    if (null !== e && void 0 !== e && "function" === typeof e.toJSON) return e.toJSON();
                    var a = f(e, t);
                    if (Object(r.i)(a)) return a;
                    var s = u(e),
                        c = Array.isArray(e) ? [] : {};
                    if (i.memoize(e)) return "[Circular ~]";
                    for (var l in s) Object.prototype.hasOwnProperty.call(s, l) && (c[l] = d(l, s[l], n - 1, i));
                    return i.unmemoize(e), c
                }

                function h(t, e) {
                    try {
                        return JSON.parse(JSON.stringify(t, (function(t, n) {
                            return d(t, n, e)
                        })))
                    } catch (n) {
                        return "**non-serializable**"
                    }
                }

                function v(t, e) {
                    void 0 === e && (e = 40);
                    var n = Object.keys(u(t));
                    if (n.sort(), !n.length) return "[object has no keys]";
                    if (n[0].length >= e) return Object(a.d)(n[0], e);
                    for (var r = n.length; r > 0; r--) {
                        var o = n.slice(0, r).join(", ");
                        if (!(o.length > e)) return r === n.length ? o : Object(a.d)(o, e)
                    }
                    return ""
                }
            }).call(this, n("fRV1"))
        },
        pFhE: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "Angular", (function() {
                return c
            })), n.d(e, "CaptureConsole", (function() {
                return d
            })), n.d(e, "Debug", (function() {
                return h
            })), n.d(e, "Dedupe", (function() {
                return v
            })), n.d(e, "Ember", (function() {
                return g
            })), n.d(e, "ExtraErrorData", (function() {
                return b
            })), n.d(e, "ReportingObserver", (function() {
                return m
            })), n.d(e, "RewriteFrames", (function() {
                return S
            })), n.d(e, "SessionTiming", (function() {
                return k
            })), n.d(e, "Transaction", (function() {
                return T
            })), n.d(e, "Vue", (function() {
                return R
            }));
            var r, o = n("D57K"),
                i = n("Iwrg"),
                a = n("zgdO"),
                s = /^\[((?:[$a-zA-Z0-9]+:)?(?:[$a-zA-Z0-9]+))\] (.*?)\n?(\S+)$/,
                c = function() {
                    function t(e) {
                        void 0 === e && (e = {}), this.name = t.id, this._angular = e.angular || Object(i.f)().angular
                    }
                    return t.prototype.setupOnce = function(e, n) {
                        var r = this;
                        this._angular ? (this._getCurrentHub = n, this._angular.module(t.moduleName, []).config(["$provide", function(t) {
                            t.decorator("$exceptionHandler", ["$delegate", r._$exceptionHandlerDecorator.bind(r)])
                        }])) : a.a.error("AngularIntegration is missing an Angular instance")
                    }, t.prototype._$exceptionHandlerDecorator = function(e) {
                        var n = this;
                        return function(r, i) {
                            var a = n._getCurrentHub && n._getCurrentHub();
                            a && a.getIntegration(t) && a.withScope((function(t) {
                                i && t.setExtra("cause", i), t.addEventProcessor((function(t) {
                                    var e = t.exception && t.exception.values && t.exception.values[0];
                                    if (e) {
                                        var n = s.exec(e.value || "");
                                        n && (e.type = n[1], e.value = n[2], t.message = e.type + ": " + e.value, t.extra = o.a({}, t.extra, {
                                            angularDocs: n[3].substr(0, 250)
                                        }))
                                    }
                                    return t
                                })), a.captureException(r)
                            })), e(r, i)
                        }
                    }, t.id = "AngularJS", t.moduleName = "ngSentry", t
                }(),
                u = n("N7nI"),
                l = n("mekd"),
                p = n("cJHJ"),
                f = Object(i.f)(),
                d = function() {
                    function t(e) {
                        void 0 === e && (e = {}), this.name = t.id, this._levels = ["log", "info", "warn", "error", "debug", "assert"], e.levels && (this._levels = e.levels)
                    }
                    return t.prototype.setupOnce = function(e, n) {
                        "console" in f && this._levels.forEach((function(e) {
                            e in f.console && Object(l.b)(f.console, e, (function(r) {
                                return function() {
                                    for (var o = [], i = 0; i < arguments.length; i++) o[i] = arguments[i];
                                    var a = n();
                                    a.getIntegration(t) && a.withScope((function(t) {
                                        t.setLevel(u.a.fromString(e)), t.setExtra("arguments", o), t.addEventProcessor((function(t) {
                                            return t.logger = "console", t
                                        }));
                                        var n = Object(p.b)(o, " ");
                                        "assert" === e ? !1 === o[0] && (n = "Assertion failed: " + (Object(p.b)(o.slice(1), " ") || "console.assert"), t.setExtra("arguments", o.slice(1)), a.captureMessage(n)) : a.captureMessage(n)
                                    })), r && Function.prototype.apply.call(r, f.console, o)
                                }
                            }))
                        }))
                    }, t.id = "CaptureConsole", t
                }(),
                h = function() {
                    function t(e) {
                        this.name = t.id, this._options = o.a({
                            debugger: !1,
                            stringify: !1
                        }, e)
                    }
                    return t.prototype.setupOnce = function(e, n) {
                        e((function(e, r) {
                            var o = n().getIntegration(t);
                            return o && (o._options.debugger, Object(i.c)((function() {
                                o._options.stringify ? (console.log(JSON.stringify(e, null, 2)), r && console.log(JSON.stringify(r, null, 2))) : (console.log(e), r && console.log(r))
                            }))), e
                        }))
                    }, t.id = "Debug", t
                }(),
                v = function() {
                    function t() {
                        this.name = t.id
                    }
                    return t.prototype.setupOnce = function(e, n) {
                        e((function(e) {
                            var r = n().getIntegration(t);
                            if (r) {
                                try {
                                    if (r._shouldDropEvent(e, r._previousEvent)) return null
                                } catch (o) {
                                    return r._previousEvent = e
                                }
                                return r._previousEvent = e
                            }
                            return e
                        }))
                    }, t.prototype._shouldDropEvent = function(t, e) {
                        return !!e && (!!this._isSameMessageEvent(t, e) || !!this._isSameExceptionEvent(t, e))
                    }, t.prototype._isSameMessageEvent = function(t, e) {
                        var n = t.message,
                            r = e.message;
                        return !(!n && !r) && (!(n && !r || !n && r) && (n === r && (!!this._isSameFingerprint(t, e) && !!this._isSameStacktrace(t, e))))
                    }, t.prototype._getFramesFromEvent = function(t) {
                        var e = t.exception;
                        if (e) try {
                            return e.values[0].stacktrace.frames
                        } catch (n) {
                            return
                        } else if (t.stacktrace) return t.stacktrace.frames
                    }, t.prototype._isSameStacktrace = function(t, e) {
                        var n = this._getFramesFromEvent(t),
                            r = this._getFramesFromEvent(e);
                        if (!n && !r) return !0;
                        if (n && !r || !n && r) return !1;
                        if (n = n, (r = r).length !== n.length) return !1;
                        for (var o = 0; o < r.length; o++) {
                            var i = r[o],
                                a = n[o];
                            if (i.filename !== a.filename || i.lineno !== a.lineno || i.colno !== a.colno || i.function !== a.function) return !1
                        }
                        return !0
                    }, t.prototype._getExceptionFromEvent = function(t) {
                        return t.exception && t.exception.values && t.exception.values[0]
                    }, t.prototype._isSameExceptionEvent = function(t, e) {
                        var n = this._getExceptionFromEvent(e),
                            r = this._getExceptionFromEvent(t);
                        return !(!n || !r) && (n.type === r.type && n.value === r.value && (!!this._isSameFingerprint(t, e) && !!this._isSameStacktrace(t, e)))
                    }, t.prototype._isSameFingerprint = function(t, e) {
                        var n = t.fingerprint,
                            r = e.fingerprint;
                        if (!n && !r) return !0;
                        if (n && !r || !n && r) return !1;
                        n = n, r = r;
                        try {
                            return !(n.join("") !== r.join(""))
                        } catch (o) {
                            return !1
                        }
                    }, t.id = "Dedupe", t
                }(),
                _ = n("26VM"),
                g = function() {
                    function t(e) {
                        void 0 === e && (e = {}), this.name = t.id, this._Ember = e.Ember || Object(i.f)().Ember
                    }
                    return t.prototype.setupOnce = function(e, n) {
                        var r = this;
                        if (this._Ember) {
                            var o = this._Ember.onerror;
                            this._Ember.onerror = function(e) {
                                if (n().getIntegration(t) && n().captureException(e, {
                                        originalException: e
                                    }), "function" === typeof o) o.call(r._Ember, e);
                                else if (r._Ember.testing) throw e
                            }, this._Ember.RSVP.on("error", (function(e) {
                                n().getIntegration(t) && n().withScope((function(t) {
                                    Object(_.g)(e, Error) ? (t.setExtra("context", "Unhandled Promise error detected"), n().captureException(e, {
                                        originalException: e
                                    })) : (t.setExtra("reason", e), n().captureMessage("Unhandled Promise error detected"))
                                }))
                            }))
                        } else a.a.error("EmberIntegration is missing an Ember instance")
                    }, t.id = "Ember", t
                }(),
                b = function() {
                    function t(e) {
                        void 0 === e && (e = {
                            depth: 3
                        }), this._options = e, this.name = t.id
                    }
                    return t.prototype.setupOnce = function(e, n) {
                        e((function(e, r) {
                            var o = n().getIntegration(t);
                            return o ? o.enhanceEventWithErrorData(e, r) : e
                        }))
                    }, t.prototype.enhanceEventWithErrorData = function(t, e) {
                        var n;
                        if (!e || !e.originalException || !Object(_.d)(e.originalException)) return t;
                        var r = e.originalException.name || e.originalException.constructor.name,
                            i = this._extractErrorData(e.originalException);
                        if (i) {
                            var a = o.a({}, t.contexts),
                                s = Object(l.c)(i, this._options.depth);
                            return Object(_.h)(s) && (a = o.a({}, t.contexts, ((n = {})[r] = o.a({}, s), n))), o.a({}, t, {
                                contexts: a
                            })
                        }
                        return t
                    }, t.prototype._extractErrorData = function(t) {
                        var e, n, r = null;
                        try {
                            var i = ["name", "message", "stack", "line", "column", "fileName", "lineNumber", "columnNumber"],
                                s = Object.getOwnPropertyNames(t).filter((function(t) {
                                    return -1 === i.indexOf(t)
                                }));
                            if (s.length) {
                                var c = {};
                                try {
                                    for (var u = o.f(s), l = u.next(); !l.done; l = u.next()) {
                                        var p = l.value,
                                            f = t[p];
                                        Object(_.d)(f) && (f = f.toString()), c[p] = f
                                    }
                                } catch (d) {
                                    e = {
                                        error: d
                                    }
                                } finally {
                                    try {
                                        l && !l.done && (n = u.return) && n.call(u)
                                    } finally {
                                        if (e) throw e.error
                                    }
                                }
                                r = c
                            }
                        } catch (h) {
                            a.a.error("Unable to extract extra data from the Error object:", h)
                        }
                        return r
                    }, t.id = "ExtraErrorData", t
                }(),
                y = n("jiYP");
            ! function(t) {
                t.Crash = "crash", t.Deprecation = "deprecation", t.Intervention = "intervention"
            }(r || (r = {}));
            var m = function() {
                function t(e) {
                    void 0 === e && (e = {
                        types: [r.Crash, r.Deprecation, r.Intervention]
                    }), this._options = e, this.name = t.id
                }
                return t.prototype.setupOnce = function(t, e) {
                    Object(y.e)() && (this._getCurrentHub = e, new(Object(i.f)().ReportingObserver)(this.handler.bind(this), {
                        buffered: !0,
                        types: this._options.types
                    }).observe())
                }, t.prototype.handler = function(e) {
                    var n, i, a = this._getCurrentHub && this._getCurrentHub();
                    if (a && a.getIntegration(t)) {
                        var s = function(t) {
                            a.withScope((function(e) {
                                e.setExtra("url", t.url);
                                var n = "ReportingObserver [" + t.type + "]",
                                    o = "No details available";
                                if (t.body) {
                                    var i, s = {};
                                    for (var c in t.body) s[c] = t.body[c];
                                    if (e.setExtra("body", s), t.type === r.Crash) o = [(i = t.body).crashId || "", i.reason || ""].join(" ").trim() || o;
                                    else o = (i = t.body).message || o
                                }
                                a.captureMessage(n + ": " + o)
                            }))
                        };
                        try {
                            for (var c = o.f(e), u = c.next(); !u.done; u = c.next()) {
                                s(u.value)
                            }
                        } catch (l) {
                            n = {
                                error: l
                            }
                        } finally {
                            try {
                                u && !u.done && (i = c.return) && i.call(c)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                    }
                }, t.id = "ReportingObserver", t
            }();

            function E(t, e) {
                for (var n = 0, r = t.length - 1; r >= 0; r--) {
                    var o = t[r];
                    "." === o ? t.splice(r, 1) : ".." === o ? (t.splice(r, 1), n++) : n && (t.splice(r, 1), n--)
                }
                if (e)
                    for (; n--; n) t.unshift("..");
                return t
            }
            var O = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;

            function x(t) {
                var e = O.exec(t);
                return e ? e.slice(1) : []
            }

            function j() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                for (var n = "", r = !1, o = t.length - 1; o >= -1 && !r; o--) {
                    var i = o >= 0 ? t[o] : "/";
                    i && (n = i + "/" + n, r = "/" === i.charAt(0))
                }
                return (r ? "/" : "") + (n = E(n.split("/").filter((function(t) {
                    return !!t
                })), !r).join("/")) || "."
            }

            function w(t) {
                for (var e = 0; e < t.length && "" === t[e]; e++);
                for (var n = t.length - 1; n >= 0 && "" === t[n]; n--);
                return e > n ? [] : t.slice(e, n - e + 1)
            }
            var S = function() {
                    function t(e) {
                        var n = this;
                        void 0 === e && (e = {}), this.name = t.id, this._iteratee = function(t) {
                            if (!t.filename) return t;
                            var e = /^[A-Z]:\\/.test(t.filename),
                                r = /^\//.test(t.filename);
                            if (t.filename && (e || r)) {
                                var o = e ? t.filename.replace(/^[A-Z]:/, "").replace(/\\/g, "/") : t.filename,
                                    i = n._root ? function(t, e) {
                                        t = j(t).substr(1), e = j(e).substr(1);
                                        for (var n = w(t.split("/")), r = w(e.split("/")), o = Math.min(n.length, r.length), i = o, a = 0; a < o; a++)
                                            if (n[a] !== r[a]) {
                                                i = a;
                                                break
                                            } var s = [];
                                        for (a = i; a < n.length; a++) s.push("..");
                                        return (s = s.concat(r.slice(i))).join("/")
                                    }(n._root, o) : function(t, e) {
                                        var n = x(t)[2];
                                        return e && n.substr(-1 * e.length) === e && (n = n.substr(0, n.length - e.length)), n
                                    }(o);
                                t.filename = "app:///" + i
                            }
                            return t
                        }, e.root && (this._root = e.root), e.iteratee && (this._iteratee = e.iteratee)
                    }
                    return t.prototype.setupOnce = function(e, n) {
                        e((function(e) {
                            var r = n().getIntegration(t);
                            return r ? r.process(e) : e
                        }))
                    }, t.prototype.process = function(t) {
                        return t.exception && Array.isArray(t.exception.values) ? this._processExceptionsEvent(t) : t.stacktrace ? this._processStacktraceEvent(t) : t
                    }, t.prototype._processExceptionsEvent = function(t) {
                        var e = this;
                        try {
                            return o.a({}, t, {
                                exception: o.a({}, t.exception, {
                                    values: t.exception.values.map((function(t) {
                                        return o.a({}, t, {
                                            stacktrace: e._processStacktrace(t.stacktrace)
                                        })
                                    }))
                                })
                            })
                        } catch (n) {
                            return t
                        }
                    }, t.prototype._processStacktraceEvent = function(t) {
                        try {
                            return o.a({}, t, {
                                stacktrace: this._processStacktrace(t.stacktrace)
                            })
                        } catch (e) {
                            return t
                        }
                    }, t.prototype._processStacktrace = function(t) {
                        var e = this;
                        return o.a({}, t, {
                            frames: t && t.frames && t.frames.map((function(t) {
                                return e._iteratee(t)
                            }))
                        })
                    }, t.id = "RewriteFrames", t
                }(),
                k = function() {
                    function t() {
                        this.name = t.id, this._startTime = Date.now()
                    }
                    return t.prototype.setupOnce = function(e, n) {
                        e((function(e) {
                            var r = n().getIntegration(t);
                            return r ? r.process(e) : e
                        }))
                    }, t.prototype.process = function(t) {
                        var e, n = Date.now();
                        return o.a({}, t, {
                            extra: o.a({}, t.extra, (e = {}, e["session:start"] = this._startTime, e["session:duration"] = n - this._startTime, e["session:end"] = n, e))
                        })
                    }, t.id = "SessionTiming", t
                }(),
                T = function() {
                    function t() {
                        this.name = t.id
                    }
                    return t.prototype.setupOnce = function(e, n) {
                        e((function(e) {
                            var r = n().getIntegration(t);
                            return r ? r.process(e) : e
                        }))
                    }, t.prototype.process = function(t) {
                        for (var e = this._getFramesFromEvent(t), n = e.length - 1; n >= 0; n--) {
                            var r = e[n];
                            if (!0 === r.in_app) {
                                t.transaction = this._getTransaction(r);
                                break
                            }
                        }
                        return t
                    }, t.prototype._getFramesFromEvent = function(t) {
                        var e = t.exception && t.exception.values && t.exception.values[0];
                        return e && e.stacktrace && e.stacktrace.frames || []
                    }, t.prototype._getTransaction = function(t) {
                        return t.module || t.function ? (t.module || "?") + "/" + (t.function || "?") : "<unknown>"
                    }, t.id = "Transaction", t
                }(),
                R = function() {
                    function t(e) {
                        void 0 === e && (e = {}), this.name = t.id, this._attachProps = !0, this._logErrors = !1, this._Vue = e.Vue || Object(i.f)().Vue, void 0 !== e.logErrors && (this._logErrors = e.logErrors), !1 === e.attachProps && (this._attachProps = !1)
                    }
                    return t.prototype._formatComponentName = function(t) {
                        if (t.$root === t) return "root instance";
                        var e = t._isVue ? t.$options.name || t.$options._componentTag : t.name;
                        return (e ? "component <" + e + ">" : "anonymous component") + (t._isVue && t.$options.__file ? " at " + t.$options.__file : "")
                    }, t.prototype.setupOnce = function(e, n) {
                        var r = this;
                        if (this._Vue && this._Vue.config) {
                            var o = this._Vue.config.errorHandler;
                            this._Vue.config.errorHandler = function(e, i, a) {
                                var s = {};
                                Object(_.h)(i) && (s.componentName = r._formatComponentName(i), r._attachProps && (s.propsData = i.$options.propsData)), void 0 !== a && (s.lifecycleHook = a), n().getIntegration(t) && setTimeout((function() {
                                    n().withScope((function(t) {
                                        t.setContext("vue", s), n().captureException(e)
                                    }))
                                })), "function" === typeof o && o.call(r._Vue, e, i, a), r._logErrors && (r._Vue.util.warn("Error in " + a + ': "' + e.toString() + '"', i), console.error(e))
                            }
                        } else a.a.error("VueIntegration is missing a Vue instance")
                    }, t.id = "Vue", t
                }()
        },
        v2bw: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return u
            })), n.d(e, "b", (function() {
                return l
            }));
            var r = n("cxan"),
                o = n("HbGN"),
                i = n("ERkP"),
                a = n.n(i),
                s = n("l1C2"),
                c = (a.a.createElement, a.a.createContext({
                    index: 0,
                    isInViewport: !1
                })),
                u = a.a.memo((function(t) {
                    var e = t.index,
                        n = t.isInViewport,
                        i = Object(o.a)(t, ["index", "isInViewport"]),
                        u = a.a.useMemo((function() {
                            return {
                                index: e,
                                isInViewport: n
                            }
                        }), [e, n]);
                    return Object(s.b)(c.Provider, Object(r.a)({
                        value: u
                    }, i))
                }));
            u.displayName = "ContentComponentProvider";
            var l = function() {
                var t = a.a.useContext(c);
                return t
            }
        },
        zgdO: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return s
            }));
            var r = n("Iwrg"),
                o = Object(r.f)(),
                i = "Sentry Logger ",
                a = function() {
                    function t() {
                        this._enabled = !1
                    }
                    return t.prototype.disable = function() {
                        this._enabled = !1
                    }, t.prototype.enable = function() {
                        this._enabled = !0
                    }, t.prototype.log = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        this._enabled && Object(r.c)((function() {
                            o.console.log(i + "[Log]: " + t.join(" "))
                        }))
                    }, t.prototype.warn = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        this._enabled && Object(r.c)((function() {
                            o.console.warn(i + "[Warn]: " + t.join(" "))
                        }))
                    }, t.prototype.error = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        this._enabled && Object(r.c)((function() {
                            o.console.error(i + "[Error]: " + t.join(" "))
                        }))
                    }, t
                }();
            o.__SENTRY__ = o.__SENTRY__ || {};
            var s = o.__SENTRY__.logger || (o.__SENTRY__.logger = new a)
        }
    }
]);
//# sourceMappingURL=423f6b4c00b8f989ef24eae648056f6ad2f53de9.0d3012c17e878d24754d.js.map