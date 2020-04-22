try {
    self["workbox:core:5.1.2"] && _()
} catch (e) {}
const e = (e, ...t) => {
    let s = e;
    return t.length > 0 && (s += " :: " + JSON.stringify(t)), s
};
class t extends Error {
    constructor(t, s) {
        super(e(t, s)), this.name = t, this.details = s
    }
}
try {
    self["workbox:routing:5.1.2"] && _()
} catch (e) {}
const s = e => e && "object" == typeof e ? e : {
    handle: e
};
class a {
    constructor(e, t, a = "GET") {
        this.handler = s(t), this.match = e, this.method = a
    }
}
class c extends a {
    constructor(e, t, s) {
        super(({
            url: t
        }) => {
            const s = e.exec(t.href);
            if (s && (t.origin === location.origin || 0 === s.index)) return s.slice(1)
        }, t, s)
    }
}
const n = e => new URL(String(e), location.href).href.replace(new RegExp("^" + location.origin), "");
class i {
    constructor() {
        this.t = new Map
    }
    get routes() {
        return this.t
    }
    addFetchListener() {
        self.addEventListener("fetch", e => {
            const {
                request: t
            } = e, s = this.handleRequest({
                request: t,
                event: e
            });
            s && e.respondWith(s)
        })
    }
    addCacheListener() {
        self.addEventListener("message", e => {
            if (e.data && "CACHE_URLS" === e.data.type) {
                const {
                    payload: t
                } = e.data, s = Promise.all(t.urlsToCache.map(e => {
                    "string" == typeof e && (e = [e]);
                    const t = new Request(...e);
                    return this.handleRequest({
                        request: t
                    })
                }));
                e.waitUntil(s), e.ports && e.ports[0] && s.then(() => e.ports[0].postMessage(!0))
            }
        })
    }
    handleRequest({
        request: e,
        event: t
    }) {
        const s = new URL(e.url, location.href);
        if (!s.protocol.startsWith("http")) return;
        const {
            params: a,
            route: c
        } = this.findMatchingRoute({
            url: s,
            request: e,
            event: t
        });
        let n, i = c && c.handler;
        if (!i && this.s && (i = this.s), i) {
            try {
                n = i.handle({
                    url: s,
                    request: e,
                    event: t,
                    params: a
                })
            } catch (e) {
                n = Promise.reject(e)
            }
            return n instanceof Promise && this.i && (n = n.catch(a => this.i.handle({
                url: s,
                request: e,
                event: t
            }))), n
        }
    }
    findMatchingRoute({
        url: e,
        request: t,
        event: s
    }) {
        const a = this.t.get(t.method) || [];
        for (const c of a) {
            let a;
            const n = c.match({
                url: e,
                request: t,
                event: s
            });
            if (n) return a = n, (Array.isArray(n) && 0 === n.length || n.constructor === Object && 0 === Object.keys(n).length || "boolean" == typeof n) && (a = void 0), {
                route: c,
                params: a
            }
        }
        return {}
    }
    setDefaultHandler(e) {
        this.s = s(e)
    }
    setCatchHandler(e) {
        this.i = s(e)
    }
    registerRoute(e) {
        this.t.has(e.method) || this.t.set(e.method, []), this.t.get(e.method).push(e)
    }
    unregisterRoute(e) {
        if (!this.t.has(e.method)) throw new t("unregister-route-but-not-found-with-method", {
            method: e.method
        });
        const s = this.t.get(e.method).indexOf(e);
        if (!(s > -1)) throw new t("unregister-route-route-not-registered");
        this.t.get(e.method).splice(s, 1)
    }
}
let r;
const o = () => (r || (r = new i, r.addFetchListener(), r.addCacheListener()), r);

function f(e, s, n) {
    let i;
    if ("string" == typeof e) {
        const t = new URL(e, location.href);
        i = new a(({
            url: e
        }) => e.href === t.href, s, n)
    } else if (e instanceof RegExp) i = new c(e, s, n);
    else if ("function" == typeof e) i = new a(e, s, n);
    else {
        if (!(e instanceof a)) throw new t("unsupported-route-type", {
            moduleName: "workbox-routing",
            funcName: "registerRoute",
            paramName: "capture"
        });
        i = e
    }
    return o().registerRoute(i), i
}
const d = {
        googleAnalytics: "googleAnalytics",
        precache: "precache-v2",
        prefix: "workbox",
        runtime: "runtime",
        suffix: "undefined" != typeof registration ? registration.scope : ""
    },
    u = e => [d.prefix, e, d.suffix].filter(e => e && e.length > 0).join("-"),
    b = e => e || u(d.precache),
    l = e => e || u(d.runtime),
    h = new Set;
const p = (e, t) => e.filter(e => t in e),
    w = async ({
        request: e,
        mode: t,
        plugins: s = []
    }) => {
        const a = p(s, "cacheKeyWillBeUsed");
        let c = e;
        for (const e of a) c = await e.cacheKeyWillBeUsed.call(e, {
            mode: t,
            request: c
        }), "string" == typeof c && (c = new Request(c));
        return c
    }, v = async ({
        cacheName: e,
        request: t,
        event: s,
        matchOptions: a,
        plugins: c = []
    }) => {
        const n = await self.caches.open(e),
            i = await w({
                plugins: c,
                request: t,
                mode: "read"
            });
        let r = await n.match(i, a);
        for (const t of c)
            if ("cachedResponseWillBeUsed" in t) {
                const c = t.cachedResponseWillBeUsed;
                r = await c.call(t, {
                    cacheName: e,
                    event: s,
                    matchOptions: a,
                    cachedResponse: r,
                    request: i
                })
            } return r
    }, m = async ({
        cacheName: e,
        request: s,
        response: a,
        event: c,
        plugins: i = [],
        matchOptions: r
    }) => {
        const o = await w({
            plugins: i,
            request: s,
            mode: "write"
        });
        if (!a) throw new t("cache-put-with-no-response", {
            url: n(o.url)
        });
        const f = await (async ({
            request: e,
            response: t,
            event: s,
            plugins: a = []
        }) => {
            let c = t,
                n = !1;
            for (const t of a)
                if ("cacheWillUpdate" in t) {
                    n = !0;
                    const a = t.cacheWillUpdate;
                    if (c = await a.call(t, {
                            request: e,
                            response: c,
                            event: s
                        }), !c) break
                } return n || (c = c && 200 === c.status ? c : void 0), c || null
        })({
            event: c,
            plugins: i,
            response: a,
            request: o
        });
        if (!f) return;
        const d = await self.caches.open(e),
            u = p(i, "cacheDidUpdate"),
            b = u.length > 0 ? await v({
                cacheName: e,
                matchOptions: r,
                request: o
            }) : null;
        try {
            await d.put(o, f)
        } catch (e) {
            throw "QuotaExceededError" === e.name && await async function() {
                for (const e of h) await e()
            }(), e
        }
        for (const t of u) await t.cacheDidUpdate.call(t, {
            cacheName: e,
            event: c,
            oldResponse: b,
            newResponse: f,
            request: o
        })
    }, y = v, x = async ({
        request: e,
        fetchOptions: s,
        event: a,
        plugins: c = []
    }) => {
        if ("string" == typeof e && (e = new Request(e)), a instanceof FetchEvent && a.preloadResponse) {
            const e = await a.preloadResponse;
            if (e) return e
        }
        const n = p(c, "fetchDidFail"),
            i = n.length > 0 ? e.clone() : null;
        try {
            for (const t of c)
                if ("requestWillFetch" in t) {
                    const s = t.requestWillFetch,
                        c = e.clone();
                    e = await s.call(t, {
                        request: c,
                        event: a
                    })
                }
        } catch (e) {
            throw new t("plugin-error-request-will-fetch", {
                thrownError: e
            })
        }
        const r = e.clone();
        try {
            let t;
            t = "navigate" === e.mode ? await fetch(e) : await fetch(e, s);
            for (const e of c) "fetchDidSucceed" in e && (t = await e.fetchDidSucceed.call(e, {
                event: a,
                request: r,
                response: t
            }));
            return t
        } catch (e) {
            for (const t of n) await t.fetchDidFail.call(t, {
                error: e,
                event: a,
                originalRequest: i.clone(),
                request: r.clone()
            });
            throw e
        }
    };
try {
    self["workbox:strategies:5.1.2"] && _()
} catch (e) {}
const g = {
    cacheWillUpdate: async ({
        response: e
    }) => 200 === e.status || 0 === e.status ? e : null
};
try {
    self["workbox:cacheable-response:5.1.2"] && _()
} catch (e) {}
class k {
    constructor(e = {}) {
        this.o = e.statuses, this.u = e.headers
    }
    isResponseCacheable(e) {
        let t = !0;
        return this.o && (t = this.o.includes(e.status)), this.u && t && (t = Object.keys(this.u).some(t => e.headers.get(t) === this.u[t])), t
    }
}

function j(e) {
    e.then(() => {})
}
class R {
    constructor(e, t, {
        onupgradeneeded: s,
        onversionchange: a
    } = {}) {
        this.l = null, this.h = e, this.p = t, this.v = s, this.m = a || (() => this.close())
    }
    get db() {
        return this.l
    }
    async open() {
        if (!this.l) return this.l = await new Promise((e, t) => {
            let s = !1;
            setTimeout(() => {
                s = !0, t(new Error("The open request was blocked and timed out"))
            }, this.OPEN_TIMEOUT);
            const a = indexedDB.open(this.h, this.p);
            a.onerror = () => t(a.error), a.onupgradeneeded = e => {
                s ? (a.transaction.abort(), a.result.close()) : "function" == typeof this.v && this.v(e)
            }, a.onsuccess = () => {
                const t = a.result;
                s ? t.close() : (t.onversionchange = this.m.bind(this), e(t))
            }
        }), this
    }
    async getKey(e, t) {
        return (await this.getAllKeys(e, t, 1))[0]
    }
    async getAll(e, t, s) {
        return await this.getAllMatching(e, {
            query: t,
            count: s
        })
    }
    async getAllKeys(e, t, s) {
        return (await this.getAllMatching(e, {
            query: t,
            count: s,
            includeKeys: !0
        })).map(e => e.key)
    }
    async getAllMatching(e, {
        index: t,
        query: s = null,
        direction: a = "next",
        count: c,
        includeKeys: n = !1
    } = {}) {
        return await this.transaction([e], "readonly", (i, r) => {
            const o = i.objectStore(e),
                f = t ? o.index(t) : o,
                d = [],
                u = f.openCursor(s, a);
            u.onsuccess = () => {
                const e = u.result;
                e ? (d.push(n ? e : e.value), c && d.length >= c ? r(d) : e.continue()) : r(d)
            }
        })
    }
    async transaction(e, t, s) {
        return await this.open(), await new Promise((a, c) => {
            const n = this.l.transaction(e, t);
            n.onabort = () => c(n.error), n.oncomplete = () => a(), s(n, e => a(e))
        })
    }
    async _(e, t, s, ...a) {
        return await this.transaction([t], s, (s, c) => {
            const n = s.objectStore(t),
                i = n[e].apply(n, a);
            i.onsuccess = () => c(i.result)
        })
    }
    close() {
        this.l && (this.l.close(), this.l = null)
    }
}
R.prototype.OPEN_TIMEOUT = 2e3;
const q = {
    readonly: ["get", "count", "getKey", "getAll", "getAllKeys"],
    readwrite: ["add", "put", "clear", "delete"]
};
for (const [e, t] of Object.entries(q))
    for (const s of t) s in IDBObjectStore.prototype && (R.prototype[s] = async function(t, ...a) {
        return await this._(s, t, e, ...a)
    });
try {
    self["workbox:expiration:5.1.2"] && _()
} catch (e) {}
const N = e => {
    const t = new URL(e, location.href);
    return t.hash = "", t.href
};
class U {
    constructor(e) {
        this.g = e, this.l = new R("workbox-expiration", 1, {
            onupgradeneeded: e => this.k(e)
        })
    }
    k(e) {
        const t = e.target.result.createObjectStore("cache-entries", {
            keyPath: "id"
        });
        t.createIndex("cacheName", "cacheName", {
            unique: !1
        }), t.createIndex("timestamp", "timestamp", {
            unique: !1
        }), (async e => {
            await new Promise((t, s) => {
                const a = indexedDB.deleteDatabase(e);
                a.onerror = () => {
                    s(a.error)
                }, a.onblocked = () => {
                    s(new Error("Delete blocked"))
                }, a.onsuccess = () => {
                    t()
                }
            })
        })(this.g)
    }
    async setTimestamp(e, t) {
        const s = {
            url: e = N(e),
            timestamp: t,
            cacheName: this.g,
            id: this.j(e)
        };
        await this.l.put("cache-entries", s)
    }
    async getTimestamp(e) {
        return (await this.l.get("cache-entries", this.j(e))).timestamp
    }
    async expireEntries(e, t) {
        const s = await this.l.transaction("cache-entries", "readwrite", (s, a) => {
                const c = s.objectStore("cache-entries").index("timestamp").openCursor(null, "prev"),
                    n = [];
                let i = 0;
                c.onsuccess = () => {
                    const s = c.result;
                    if (s) {
                        const a = s.value;
                        a.cacheName === this.g && (e && a.timestamp < e || t && i >= t ? n.push(s.value) : i++), s.continue()
                    } else a(n)
                }
            }),
            a = [];
        for (const e of s) await this.l.delete("cache-entries", e.id), a.push(e.url);
        return a
    }
    j(e) {
        return this.g + "|" + N(e)
    }
}
class E {
    constructor(e, t = {}) {
        this.R = !1, this.q = !1, this.N = t.maxEntries, this.U = t.maxAgeSeconds, this.g = e, this.L = new U(e)
    }
    async expireEntries() {
        if (this.R) return void(this.q = !0);
        this.R = !0;
        const e = this.U ? Date.now() - 1e3 * this.U : 0,
            t = await this.L.expireEntries(e, this.N),
            s = await self.caches.open(this.g);
        for (const e of t) await s.delete(e);
        this.R = !1, this.q && (this.q = !1, j(this.expireEntries()))
    }
    async updateTimestamp(e) {
        await this.L.setTimestamp(e, Date.now())
    }
    async isURLExpired(e) {
        if (this.U) {
            return await this.L.getTimestamp(e) < Date.now() - 1e3 * this.U
        }
        return !1
    }
    async delete() {
        this.q = !1, await this.L.expireEntries(1 / 0)
    }
}
let L;
async function M(e, t) {
    const s = e.clone(),
        a = {
            headers: new Headers(s.headers),
            status: s.status,
            statusText: s.statusText
        },
        c = t ? t(a) : a,
        n = function() {
            if (void 0 === L) {
                const e = new Response("");
                if ("body" in e) try {
                    new Response(e.body), L = !0
                } catch (e) {
                    L = !1
                }
                L = !1
            }
            return L
        }() ? s.body : await s.blob();
    return new Response(n, c)
}
try {
    self["workbox:precaching:5.1.2"] && _()
} catch (e) {}

function S(e) {
    if (!e) throw new t("add-to-cache-list-unexpected-type", {
        entry: e
    });
    if ("string" == typeof e) {
        const t = new URL(e, location.href);
        return {
            cacheKey: t.href,
            url: t.href
        }
    }
    const {
        revision: s,
        url: a
    } = e;
    if (!a) throw new t("add-to-cache-list-unexpected-type", {
        entry: e
    });
    if (!s) {
        const e = new URL(a, location.href);
        return {
            cacheKey: e.href,
            url: e.href
        }
    }
    const c = new URL(a, location.href),
        n = new URL(a, location.href);
    return c.searchParams.set("__WB_REVISION__", s), {
        cacheKey: c.href,
        url: n.href
    }
}
class F {
    constructor(e) {
        this.g = b(e), this.M = new Map, this.S = new Map, this.F = new Map
    }
    addToCacheList(e) {
        const s = [];
        for (const a of e) {
            "string" == typeof a ? s.push(a) : a && void 0 === a.revision && s.push(a.url);
            const {
                cacheKey: e,
                url: c
            } = S(a), n = "string" != typeof a && a.revision ? "reload" : "default";
            if (this.M.has(c) && this.M.get(c) !== e) throw new t("add-to-cache-list-conflicting-entries", {
                firstEntry: this.M.get(c),
                secondEntry: e
            });
            if ("string" != typeof a && a.integrity) {
                if (this.F.has(e) && this.F.get(e) !== a.integrity) throw new t("add-to-cache-list-conflicting-integrities", {
                    url: c
                });
                this.F.set(e, a.integrity)
            }
            if (this.M.set(c, e), this.S.set(c, n), s.length > 0) {
                const e = `Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;
                console.warn(e)
            }
        }
    }
    async install({
        event: e,
        plugins: t
    } = {}) {
        const s = [],
            a = [],
            c = await self.caches.open(this.g),
            n = await c.keys(),
            i = new Set(n.map(e => e.url));
        for (const [e, t] of this.M) i.has(t) ? a.push(e) : s.push({
            cacheKey: t,
            url: e
        });
        const r = s.map(({
            cacheKey: s,
            url: a
        }) => {
            const c = this.F.get(s),
                n = this.S.get(a);
            return this.D({
                cacheKey: s,
                cacheMode: n,
                event: e,
                integrity: c,
                plugins: t,
                url: a
            })
        });
        return await Promise.all(r), {
            updatedURLs: s.map(e => e.url),
            notUpdatedURLs: a
        }
    }
    async activate() {
        const e = await self.caches.open(this.g),
            t = await e.keys(),
            s = new Set(this.M.values()),
            a = [];
        for (const c of t) s.has(c.url) || (await e.delete(c), a.push(c.url));
        return {
            deletedURLs: a
        }
    }
    async D({
        cacheKey: e,
        url: s,
        cacheMode: a,
        event: c,
        plugins: n,
        integrity: i
    }) {
        const r = new Request(s, {
            integrity: i,
            cache: a,
            credentials: "same-origin"
        });
        let o, f = await x({
            event: c,
            plugins: n,
            request: r
        });
        for (const e of n || []) "cacheWillUpdate" in e && (o = e);
        if (!(o ? await o.cacheWillUpdate({
                event: c,
                request: r,
                response: f
            }) : f.status < 400)) throw new t("bad-precaching-response", {
            url: s,
            status: f.status
        });
        f.redirected && (f = await M(f)), await m({
            event: c,
            plugins: n,
            response: f,
            request: e === s ? r : new Request(e),
            cacheName: this.g,
            matchOptions: {
                ignoreSearch: !0
            }
        })
    }
    getURLsToCacheKeys() {
        return this.M
    }
    getCachedURLs() {
        return [...this.M.keys()]
    }
    getCacheKeyForURL(e) {
        const t = new URL(e, location.href);
        return this.M.get(t.href)
    }
    async matchPrecache(e) {
        const t = e instanceof Request ? e.url : e,
            s = this.getCacheKeyForURL(t);
        if (s) {
            return (await self.caches.open(this.g)).match(s)
        }
    }
    createHandler(e = !0) {
        return async ({
            request: s
        }) => {
            try {
                const e = await this.matchPrecache(s);
                if (e) return e;
                throw new t("missing-precache-entry", {
                    cacheName: this.g,
                    url: s instanceof Request ? s.url : s
                })
            } catch (t) {
                if (e) return fetch(s);
                throw t
            }
        }
    }
    createHandlerBoundToURL(e, s = !0) {
        if (!this.getCacheKeyForURL(e)) throw new t("non-precached-url", {
            url: e
        });
        const a = this.createHandler(s),
            c = new Request(e);
        return () => a({
            request: c
        })
    }
}
let D;
const P = () => (D || (D = new F), D);
const O = (e, t) => {
    const s = P().getURLsToCacheKeys();
    for (const a of function*(e, {
            ignoreURLParametersMatching: t,
            directoryIndex: s,
            cleanURLs: a,
            urlManipulation: c
        } = {}) {
            const n = new URL(e, location.href);
            n.hash = "", yield n.href;
            const i = function(e, t = []) {
                for (const s of [...e.searchParams.keys()]) t.some(e => e.test(s)) && e.searchParams.delete(s);
                return e
            }(n, t);
            if (yield i.href, s && i.pathname.endsWith("/")) {
                const e = new URL(i.href);
                e.pathname += s, yield e.href
            }
            if (a) {
                const e = new URL(i.href);
                e.pathname += ".html", yield e.href
            }
            if (c) {
                const e = c({
                    url: n
                });
                for (const t of e) yield t.href
            }
        }(e, t)) {
        const e = s.get(a);
        if (e) return e
    }
};
let T = !1;

function K(e) {
    T || ((({
        ignoreURLParametersMatching: e = [/^utm_/],
        directoryIndex: t = "index.html",
        cleanURLs: s = !0,
        urlManipulation: a
    } = {}) => {
        const c = b();
        self.addEventListener("fetch", n => {
            const i = O(n.request.url, {
                cleanURLs: s,
                directoryIndex: t,
                ignoreURLParametersMatching: e,
                urlManipulation: a
            });
            if (!i) return;
            let r = self.caches.open(c).then(e => e.match(i)).then(e => e || fetch(i));
            n.respondWith(r)
        })
    })(e), T = !0)
}
const Q = [],
    C = {
        get: () => Q,
        add(e) {
            Q.push(...e)
        }
    },
    A = e => {
        const t = P(),
            s = C.get();
        e.waitUntil(t.install({
            event: e,
            plugins: s
        }).catch(e => {
            throw e
        }))
    },
    I = e => {
        const t = P();
        e.waitUntil(t.activate())
    };
var W;
self.addEventListener("install", () => self.skipWaiting()), self.addEventListener("activate", () => self.clients.claim()), W = {},
    function(e) {
        P().addToCacheList(e), e.length > 0 && (self.addEventListener("install", A), self.addEventListener("activate", I))
    }([{
        url: "_next/static/M_NQkllRxbS040iylFyEn/_buildManifest.js",
        revision: "d0bd3d670970a57f717fd20017736c60"
    }, {
        url: "_next/static/M_NQkllRxbS040iylFyEn/_ssgManifest.js",
        revision: "abee47769bf307639ace4945f9cfd4ff"
    }, {
        url: "_next/static/M_NQkllRxbS040iylFyEn/pages/[...path].js",
        revision: "f532b9c66cb5bc2149db447711cc6372"
    }, {
        url: "_next/static/M_NQkllRxbS040iylFyEn/pages/[...path].js.map",
        revision: "61362d302e34106228292ab76b85228b"
    }, {
        url: "_next/static/M_NQkllRxbS040iylFyEn/pages/_app.js",
        revision: "f9b4bfe7ac258611a6c3739343fa8ab5"
    }, {
        url: "_next/static/M_NQkllRxbS040iylFyEn/pages/_app.js.map",
        revision: "148f230b05ef2a945afa398af1a93a05"
    }, {
        url: "_next/static/M_NQkllRxbS040iylFyEn/pages/_error.js",
        revision: "f4ab9399f2f19172d68741691459a42c"
    }, {
        url: "_next/static/M_NQkllRxbS040iylFyEn/pages/_error.js.map",
        revision: "e12aa09b7f2d97b484fc5455842da72c"
    }, {
        url: "_next/static/M_NQkllRxbS040iylFyEn/pages/index.js",
        revision: "18597e367c217106337b5ce8cf8f786e"
    }, {
        url: "_next/static/M_NQkllRxbS040iylFyEn/pages/index.js.map",
        revision: "e8b49a915bfbc3615f7963ce152a7376"
    }, {
        url: "_next/static/M_NQkllRxbS040iylFyEn/pages/pwa/flags.js",
        revision: "427ed511a62188b66f9984e9f6ee98e6"
    }, {
        url: "_next/static/M_NQkllRxbS040iylFyEn/pages/pwa/flags.js.map",
        revision: "d5be4e12cdebe4fc2721ccfbd1825867"
    }, {
        url: "_next/static/M_NQkllRxbS040iylFyEn/pages/pwa/porownaj.js",
        revision: "94a69ffc73231b0da65c89b8fed02405"
    }, {
        url: "_next/static/M_NQkllRxbS040iylFyEn/pages/pwa/porownaj.js.map",
        revision: "ec631eafe82e8b8b53d2d357ea1a08bb"
    }, {
        url: "_next/static/chunks/1950e92d7d18ca7f297a57be3372bce19c313fb8.5e7a2919700b5f32c2a0.js",
        revision: "c799e2624e1fd944ef15e273a1b451e0"
    }, {
        url: "_next/static/chunks/1950e92d7d18ca7f297a57be3372bce19c313fb8.5e7a2919700b5f32c2a0.js.map",
        revision: "4dbbf8861203e9464c1fa2b605be0652"
    }, {
        url: "_next/static/chunks/3667095f579002505a374b20e3faee48a39fd7c5.127b8a04b78d01025b00.js",
        revision: "aaa4e9fb5f78ede6abcf63c405dfdeee"
    }, {
        url: "_next/static/chunks/3667095f579002505a374b20e3faee48a39fd7c5.127b8a04b78d01025b00.js.map",
        revision: "af62346e26b588704f95105bce9be159"
    }, {
        url: "_next/static/chunks/423f6b4c00b8f989ef24eae648056f6ad2f53de9.0d3012c17e878d24754d.js",
        revision: "cc2e4c8d5daf85e0245715577879c59e"
    }, {
        url: "_next/static/chunks/423f6b4c00b8f989ef24eae648056f6ad2f53de9.0d3012c17e878d24754d.js.map",
        revision: "ced973a9d29020ae083b8aed606807fd"
    }, {
        url: "_next/static/chunks/43e0abfb7096a5c88f2b71aeec86628767038040.361f1fb91369e440d5cc.js",
        revision: "7fe6ee4ebdb38ec8782f6bf7fa61ec7c"
    }, {
        url: "_next/static/chunks/43e0abfb7096a5c88f2b71aeec86628767038040.361f1fb91369e440d5cc.js.map",
        revision: "29712d81f3a15a034c7cd51400234cb3"
    }, {
        url: "_next/static/chunks/4e1f92bb.eea07faeb60e41e298e9.js",
        revision: "b11160fd126ffef28c3643285ffd245d"
    }, {
        url: "_next/static/chunks/4e1f92bb.eea07faeb60e41e298e9.js.map",
        revision: "2d2da1f1964a7e73228a13880825212c"
    }, {
        url: "_next/static/chunks/52.5fdd665083bfcced8104.js",
        revision: "6bc8da9d78f2eea876c58f4a9eb04ff3"
    }, {
        url: "_next/static/chunks/52.5fdd665083bfcced8104.js.map",
        revision: "fa8d1c6a61fe281d177869af39fd1eb1"
    }, {
        url: "_next/static/chunks/57f72dea692272ae151b9ccf1566ded43d112d14.e8b2b02239926b18815a.js",
        revision: "dcd213e0a3057cb61b2c888d52c99eb8"
    }, {
        url: "_next/static/chunks/57f72dea692272ae151b9ccf1566ded43d112d14.e8b2b02239926b18815a.js.map",
        revision: "76795e02bfb3f6fb947f5639e2b2f7dd"
    }, {
        url: "_next/static/chunks/75357e39a082391a4f9862db52a150bd14db9368.c1bc04ea35cd804ca40f.js",
        revision: "9b170e42a2b77b48b60b058f6af789f8"
    }, {
        url: "_next/static/chunks/75357e39a082391a4f9862db52a150bd14db9368.c1bc04ea35cd804ca40f.js.map",
        revision: "9eb43dc31ef9d0e387e7aec40b8892de"
    }, {
        url: "_next/static/chunks/9a424f07062fdf119ad833e461b1aacdb0c7f7f9.45b2b8349b8111679a70.js",
        revision: "b30241f0174d517e41e78c8c6ecc684e"
    }, {
        url: "_next/static/chunks/9a424f07062fdf119ad833e461b1aacdb0c7f7f9.45b2b8349b8111679a70.js.map",
        revision: "43d33f8614ffb34ea93a5a56ebbe880c"
    }, {
        url: "_next/static/chunks/ProductDetails.DetailsSection.a2000da7b5f8330b998f.js",
        revision: "80cf6cefcdc90a42f26a79f82a04d00d"
    }, {
        url: "_next/static/chunks/ProductDetails.DetailsSection.a2000da7b5f8330b998f.js.map",
        revision: "f832439895111bd016e9c9abd367d508"
    }, {
        url: "_next/static/chunks/ProductDetails.FailureSection.314ceeb6d0cf6f8619d8.js",
        revision: "e65b5786dd634ec0a286e590496cd813"
    }, {
        url: "_next/static/chunks/ProductDetails.FailureSection.314ceeb6d0cf6f8619d8.js.map",
        revision: "8676a1be080be94442392d4214b81a36"
    }, {
        url: "_next/static/chunks/ProductDetails.GallerySection.383e0b058212e1daebdf.js",
        revision: "eec6f040bbca4450906a48d47fbd0fdc"
    }, {
        url: "_next/static/chunks/ProductDetails.GallerySection.383e0b058212e1daebdf.js.map",
        revision: "b9b6fd3b30167b702a743e60a257e07f"
    }, {
        url: "_next/static/chunks/accordion.141f68fb933210171f48.js",
        revision: "4401b1ebaf181b75fdfc193060e3b84d"
    }, {
        url: "_next/static/chunks/accordion.141f68fb933210171f48.js.map",
        revision: "e42d5a7f4b402831f2aa933694ab221d"
    }, {
        url: "_next/static/chunks/article.5768e30e1763d509c3d3.js",
        revision: "05d53ca0feaacce138ca5b5ba24e9780"
    }, {
        url: "_next/static/chunks/article.5768e30e1763d509c3d3.js.map",
        revision: "015d84c6a182acd3e445befa253d9b44"
    }, {
        url: "_next/static/chunks/article_list.0bfaa7839606cf9dceab.js",
        revision: "b84471c60546a58615e7a8ee0e6b228e"
    }, {
        url: "_next/static/chunks/article_list.0bfaa7839606cf9dceab.js.map",
        revision: "f260694592f21ca5c7ef70e509144184"
    }, {
        url: "_next/static/chunks/bar.ce7a2b8271a66412a15f.js",
        revision: "9b14cba8b3d31bfcc1742a4fdc892ee6"
    }, {
        url: "_next/static/chunks/bar.ce7a2b8271a66412a15f.js.map",
        revision: "f5da5143cd34ad8972c7c5abc93a7a9d"
    }, {
        url: "_next/static/chunks/book.77e481a8960c2b71a5c5.js",
        revision: "fb758004e5eb30cca499481dd0a229a0"
    }, {
        url: "_next/static/chunks/book.77e481a8960c2b71a5c5.js.map",
        revision: "e37e24070a1855b28897f11fac181bb8"
    }, {
        url: "_next/static/chunks/cf9f1b39.bd2e413ab8d6a6804323.js",
        revision: "bd673420aab9ce04d19ea923dfcf31f7"
    }, {
        url: "_next/static/chunks/cf9f1b39.bd2e413ab8d6a6804323.js.map",
        revision: "3c347edf926b255d0e442019aa24feac"
    }, {
        url: "_next/static/chunks/commons.d82dfdc238a710e021d1.js",
        revision: "e7d08ad109730b82a97a611684301323"
    }, {
        url: "_next/static/chunks/commons.d82dfdc238a710e021d1.js.map",
        revision: "af036d915269d493951a11d7521f3e88"
    }, {
        url: "_next/static/chunks/comparator.ec88a1fe2862b49cb39d.js",
        revision: "3e3455039ba94bd46ed9fad927639963"
    }, {
        url: "_next/static/chunks/comparator.ec88a1fe2862b49cb39d.js.map",
        revision: "deca5aa29ffbb9b174579189a7129ac6"
    }, {
        url: "_next/static/chunks/debed970f4da9fd3eb27b35140e8570d896a417e.bcf3e23fda2ec78062ee.js",
        revision: "e4b9734f158cce84c7b62542ffaf86d1"
    }, {
        url: "_next/static/chunks/debed970f4da9fd3eb27b35140e8570d896a417e.bcf3e23fda2ec78062ee.js.map",
        revision: "f6da611503848f9e9648e367399ea756"
    }, {
        url: "_next/static/chunks/e0b61bbdc60c4080e4b67b575cacac111a23214e.861cf59c6e3360790eb6.js",
        revision: "36473cca478a99d34d06dc8edeafb79d"
    }, {
        url: "_next/static/chunks/e0b61bbdc60c4080e4b67b575cacac111a23214e.861cf59c6e3360790eb6.js.map",
        revision: "cabff03be9e8296252f893a539d4a6a7"
    }, {
        url: "_next/static/chunks/e8e44bb0.10672f1dcd394550287b.js",
        revision: "007a7293e5078fe05b48cc1b03129000"
    }, {
        url: "_next/static/chunks/e8e44bb0.10672f1dcd394550287b.js.map",
        revision: "6a68c049fc4b64717f1bff4acbcda770"
    }, {
        url: "_next/static/chunks/f4c7ee619aaa7ecd778759700e245f307aa0260d.5cce6a9eea1d07e86942.js",
        revision: "9a3152a5043e4e99f90dd7a7313c7594"
    }, {
        url: "_next/static/chunks/f4c7ee619aaa7ecd778759700e245f307aa0260d.5cce6a9eea1d07e86942.js.map",
        revision: "33dad17b68ad1f2715c4b7c92a364b4d"
    }, {
        url: "_next/static/chunks/f5e195f9.7f143100508e8cd09853.js",
        revision: "dfc963f0fd31ac3698fc61cd1844d472"
    }, {
        url: "_next/static/chunks/f5e195f9.7f143100508e8cd09853.js.map",
        revision: "d43992e942bbe8b353587e5c69f6ed3a"
    }, {
        url: "_next/static/chunks/f91c7408d35b84587463ad0bbc1bff20b00d746a.08eb3a1c68e83093065d.js",
        revision: "01524eab4b93e245e05a0f9e84917642"
    }, {
        url: "_next/static/chunks/f91c7408d35b84587463ad0bbc1bff20b00d746a.08eb3a1c68e83093065d.js.map",
        revision: "50929078bb7ea3c9e7c433fdd335cb62"
    }, {
        url: "_next/static/chunks/footer.200b65be1937f60f1fbb.js",
        revision: "c239f9c3efcbee7c1854681a6456e8cb"
    }, {
        url: "_next/static/chunks/footer.200b65be1937f60f1fbb.js.map",
        revision: "d6166f6ccb9a7142a2626dd6cdcfe3a3"
    }, {
        url: "_next/static/chunks/framework.d371debac4f9de95730f.js",
        revision: "d375fa41954d8ab7f8e39a3ef6459126"
    }, {
        url: "_next/static/chunks/framework.d371debac4f9de95730f.js.map",
        revision: "88335a200700d8c0add7b8894dd370bf"
    }, {
        url: "_next/static/chunks/header.cart.bb9056578fa119b34389.js",
        revision: "12b8f4d2578b9189b8eef59d6358b839"
    }, {
        url: "_next/static/chunks/header.cart.bb9056578fa119b34389.js.map",
        revision: "2a1eb7fb34c147682da203b7388bf419"
    }, {
        url: "_next/static/chunks/header.contact.8b5615abb8867c9f057b.js",
        revision: "83ec8bcb5e8e7e75cd3d6827f2a870fc"
    }, {
        url: "_next/static/chunks/header.contact.8b5615abb8867c9f057b.js.map",
        revision: "3f1bc08b6fe272b48c5fb5491b4b2320"
    }, {
        url: "_next/static/chunks/header.search.3a27fac4f9dc324ce3e3.js",
        revision: "f17ba71d18b914065cc84fcf55f90cd2"
    }, {
        url: "_next/static/chunks/header.search.3a27fac4f9dc324ce3e3.js.map",
        revision: "48ee8052958316bc29903c5fc9ec32e8"
    }, {
        url: "_next/static/chunks/header.user.db07f8a311b6978a6f2d.js",
        revision: "153fa803956f4cb36b6d40985bf14c85"
    }, {
        url: "_next/static/chunks/header.user.db07f8a311b6978a6f2d.js.map",
        revision: "facecc86818ebf394376e3c8503bdc1f"
    }, {
        url: "_next/static/chunks/market_selector.fa1693b593dad75b80d6.js",
        revision: "3877b18559f959417a59d06529f95f4c"
    }, {
        url: "_next/static/chunks/market_selector.fa1693b593dad75b80d6.js.map",
        revision: "ae17c96bf62faad0caf37bac4ea2491d"
    }, {
        url: "_next/static/chunks/mosaic.2e009b792e6fccb87dc7.js",
        revision: "795028d3f707b3fd428cdeb0f62cb711"
    }, {
        url: "_next/static/chunks/mosaic.2e009b792e6fccb87dc7.js.map",
        revision: "1bc2fb60cce7e65e4bb10825aeee460c"
    }, {
        url: "_next/static/chunks/offline.layer.2e51457789c2978b3b24.js",
        revision: "7febb8ebb4344755ac6f70dd34fed9f8"
    }, {
        url: "_next/static/chunks/offline.layer.2e51457789c2978b3b24.js.map",
        revision: "60e5395843333599a3cec0b000534a2b"
    }, {
        url: "_next/static/chunks/product-details.1183af4d5577ac8b53d7.js",
        revision: "03306fe3f779c32558c541c908072e65"
    }, {
        url: "_next/static/chunks/product-details.1183af4d5577ac8b53d7.js.map",
        revision: "40505fcd1c4f712573c1836fd48a6469"
    }, {
        url: "_next/static/chunks/product_carousel.7283130604b4a57bc1d0.js",
        revision: "4b406d393d0c5127d8e94543d27e3669"
    }, {
        url: "_next/static/chunks/product_carousel.7283130604b4a57bc1d0.js.map",
        revision: "bc9414c88666ff7f00e6985bb2684532"
    }, {
        url: "_next/static/chunks/products-comparator-gallery.ac456ddd760e6014a138.js",
        revision: "558bf37b614fe599368e5113924f60a8"
    }, {
        url: "_next/static/chunks/products-comparator-gallery.ac456ddd760e6014a138.js.map",
        revision: "d4c9f6231a1f08e3c06c6bc1f974c158"
    }, {
        url: "_next/static/chunks/sufler.351884ddb4e14c684a1c.js",
        revision: "28971c7714f5d4d08b4bf8ae6fb0b272"
    }, {
        url: "_next/static/chunks/sufler.351884ddb4e14c684a1c.js.map",
        revision: "18cf7b5f1f6cd158cf076a827aeabd88"
    }, {
        url: "_next/static/chunks/timeline.138c8fd21aa78140ada9.js",
        revision: "06513bfea4108013f556df3a918afe12"
    }, {
        url: "_next/static/chunks/timeline.138c8fd21aa78140ada9.js.map",
        revision: "4c221a728823791b672e7317ab99bf60"
    }, {
        url: "_next/static/chunks/tv_browser.7e6100a9b848d8e5dcd0.js",
        revision: "661bd3ff4b2d3c1399011f25cff98c95"
    }, {
        url: "_next/static/chunks/tv_browser.7e6100a9b848d8e5dcd0.js.map",
        revision: "b4e1a79f9642e37bd7316a244bea77ec"
    }, {
        url: "_next/static/chunks/tvbrowser.error.f6c3608da7d3074f7a8d.js",
        revision: "4e87b171eb06b7eb3565e662e9ff7a66"
    }, {
        url: "_next/static/chunks/tvbrowser.error.f6c3608da7d3074f7a8d.js.map",
        revision: "12e0d6d76643bbf74929f865c6d44b23"
    }, {
        url: "_next/static/chunks/tvbrowser.packages.262889f1e48e3be9cea9.js",
        revision: "9759075aadea3b2eab226b9756393e7c"
    }, {
        url: "_next/static/chunks/tvbrowser.packages.262889f1e48e3be9cea9.js.map",
        revision: "ba688e44e7f5b02db7c0ae28f5b675b9"
    }, {
        url: "_next/static/chunks/video_banner.8ee6549a25b6c4754e94.js",
        revision: "a5210fc5b7d0b3ec004a667a62ac6db7"
    }, {
        url: "_next/static/chunks/video_banner.8ee6549a25b6c4754e94.js.map",
        revision: "6072c9e4ca60a2f5e0083264261ee85d"
    }, {
        url: "_next/static/runtime/main-bb2e003408b3bfb9f4d3.js",
        revision: "dae9e65541a654d6d7b2065ef7115840"
    }, {
        url: "_next/static/runtime/main-bb2e003408b3bfb9f4d3.js.map",
        revision: "cf756e39ebef9568a5ae689e1310de85"
    }, {
        url: "_next/static/runtime/polyfills-39e910a95a8edeb489d5.js",
        revision: "0fc83b521e0d742530b93429442b8667"
    }, {
        url: "_next/static/runtime/polyfills-39e910a95a8edeb489d5.js.map",
        revision: "ca722bf901de69ffecf4a0148d06ef50"
    }, {
        url: "_next/static/runtime/webpack-230545a845e96e90cf4b.js",
        revision: "57c433ef99ed53f45565c51a0680ad26"
    }, {
        url: "_next/static/runtime/webpack-230545a845e96e90cf4b.js.map",
        revision: "02710ad503ed3ba94454e7df357af1ed"
    }]), K(W), f(/^(https:\/\/osf-(tr|bfx).omnitest.corpnet.pl|http:\/\/localhost:3000|https:\/\/(www.)?orange.pl)(\/|\/male-srednie-firmy)?$/gi, new class {
        constructor(e = {}) {
            if (this.g = l(e.cacheName), e.plugins) {
                const t = e.plugins.some(e => !!e.cacheWillUpdate);
                this.P = t ? e.plugins : [g, ...e.plugins]
            } else this.P = [g];
            this.O = e.networkTimeoutSeconds || 0, this.T = e.fetchOptions, this.K = e.matchOptions
        }
        async handle({
            event: e,
            request: s
        }) {
            const a = [];
            "string" == typeof s && (s = new Request(s));
            const c = [];
            let n;
            if (this.O) {
                const {
                    id: t,
                    promise: i
                } = this.C({
                    request: s,
                    event: e,
                    logs: a
                });
                n = t, c.push(i)
            }
            const i = this.A({
                timeoutId: n,
                request: s,
                event: e,
                logs: a
            });
            c.push(i);
            let r = await Promise.race(c);
            if (r || (r = await i), !r) throw new t("no-response", {
                url: s.url
            });
            return r
        }
        C({
            request: e,
            logs: t,
            event: s
        }) {
            let a;
            return {
                promise: new Promise(t => {
                    a = setTimeout(async () => {
                        t(await this.I({
                            request: e,
                            event: s
                        }))
                    }, 1e3 * this.O)
                }),
                id: a
            }
        }
        async A({
            timeoutId: e,
            request: t,
            logs: s,
            event: a
        }) {
            let c, n;
            try {
                n = await x({
                    request: t,
                    event: a,
                    fetchOptions: this.T,
                    plugins: this.P
                })
            } catch (e) {
                c = e
            }
            if (e && clearTimeout(e), c || !n) n = await this.I({
                request: t,
                event: a
            });
            else {
                const e = n.clone(),
                    s = m({
                        cacheName: this.g,
                        request: t,
                        response: e,
                        event: a,
                        plugins: this.P
                    });
                if (a) try {
                    a.waitUntil(s)
                } catch (e) {}
            }
            return n
        }
        I({
            event: e,
            request: t
        }) {
            return y({
                cacheName: this.g,
                request: t,
                event: e,
                matchOptions: this.K,
                plugins: this.P
            })
        }
    }({
        cacheName: "index",
        plugins: []
    }), "GET"), f(/static/, new class {
        constructor(e = {}) {
            if (this.g = l(e.cacheName), this.P = e.plugins || [], e.plugins) {
                const t = e.plugins.some(e => !!e.cacheWillUpdate);
                this.P = t ? e.plugins : [g, ...e.plugins]
            } else this.P = [g];
            this.T = e.fetchOptions, this.K = e.matchOptions
        }
        async handle({
            event: e,
            request: s
        }) {
            "string" == typeof s && (s = new Request(s));
            const a = this.W({
                request: s,
                event: e
            });
            let c, n = await y({
                cacheName: this.g,
                request: s,
                event: e,
                matchOptions: this.K,
                plugins: this.P
            });
            if (n) {
                if (e) try {
                    e.waitUntil(a)
                } catch (c) {}
            } else try {
                n = await a
            } catch (e) {
                c = e
            }
            if (!n) throw new t("no-response", {
                url: s.url,
                error: c
            });
            return n
        }
        async W({
            request: e,
            event: t
        }) {
            const s = await x({
                    request: e,
                    event: t,
                    fetchOptions: this.T,
                    plugins: this.P
                }),
                a = m({
                    cacheName: this.g,
                    request: e,
                    response: s.clone(),
                    event: t,
                    plugins: this.P
                });
            if (t) try {
                t.waitUntil(a)
            } catch (e) {}
            return s
        }
    }({
        cacheName: "static",
        plugins: [new class {
            constructor(e) {
                this.cacheWillUpdate = async ({
                    response: e
                }) => this.B.isResponseCacheable(e) ? e : null, this.B = new k(e)
            }
        }({
            statuses: [0, 200]
        }), new class {
            constructor(e = {}) {
                var t;
                this.cachedResponseWillBeUsed = async ({
                    event: e,
                    request: t,
                    cacheName: s,
                    cachedResponse: a
                }) => {
                    if (!a) return null;
                    const c = this.H(a),
                        n = this.G(s);
                    j(n.expireEntries());
                    const i = n.updateTimestamp(t.url);
                    if (e) try {
                        e.waitUntil(i)
                    } catch (e) {}
                    return c ? a : null
                }, this.cacheDidUpdate = async ({
                    cacheName: e,
                    request: t
                }) => {
                    const s = this.G(e);
                    await s.updateTimestamp(t.url), await s.expireEntries()
                }, this.$ = e, this.U = e.maxAgeSeconds, this.J = new Map, e.purgeOnQuotaError && (t = () => this.deleteCacheAndMetadata(), h.add(t))
            }
            G(e) {
                if (e === l()) throw new t("expire-custom-caches-only");
                let s = this.J.get(e);
                return s || (s = new E(e, this.$), this.J.set(e, s)), s
            }
            H(e) {
                if (!this.U) return !0;
                const t = this.V(e);
                return null === t || t >= Date.now() - 1e3 * this.U
            }
            V(e) {
                if (!e.headers.has("date")) return null;
                const t = e.headers.get("date"),
                    s = new Date(t).getTime();
                return isNaN(s) ? null : s
            }
            async deleteCacheAndMetadata() {
                for (const [e, t] of this.J) await self.caches.delete(e), await t.delete();
                this.J = new Map
            }
        }({
            maxEntries: 100,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
        })]
    }), "GET");
//# sourceMappingURL=service-worker.js.map