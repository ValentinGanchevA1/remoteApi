define(["exports", "jquery", "lodash"], function(t, a, u) {
    "use strict";

    function o(n, a) {
        return new Promise(function(t, e) {
            return n.then(a ? a(t) : t, e)
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.mock = function(t, n) {
        var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1e3;
        return new Promise(function(t, e) {
            setTimeout(function() {
                t(n)
            }, a)
        })
    }, t.mockRandomError = function(t, n, a) {
        var u = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 1e3;
        return new Promise(function(t, e) {
            setTimeout(function() {
                .2 < Math.random() ? t(n) : e(a)
            }, u)
        })
    }, t.get = f, t.getPdf = function(t) {
        return o(a.default.ajax(u.default.extend({}, r, {
            url: t,
            method: "GET",
            headers: {
                Accept: "application/pdf"
            }
        })))
    }, t.put = function(t, e) {
        return o(a.default.ajax(u.default.extend({}, r, {
            url: t,
            method: "PUT",
            data: e
        })))
    }, t.post = function(t, e) {
        return o(a.default.ajax(u.default.extend({}, r, {
            url: t,
            method: "POST",
            data: e
        })))
    }, t.postWrap = function(t, e) {
        return function(t) {
            return o(t, function(a) {
                return function(t, e, n) {
                    return a({
                        data: t,
                        textStatus: e,
                        jqXHR: n
                    })
                }
            })
        }(a.default.ajax(u.default.extend({}, r, {
            url: t,
            method: "POST",
            data: e
        })))
    }, t.postWithContentType = function(t, e, n) {
        return o(a.default.ajax(u.default.extend({}, r, {
            method: "POST",
            url: t,
            contentType: e,
            data: n
        })))
    }, t.postJson = function(t, e) {
        return o(a.default.ajax(u.default.extend({}, r, {
            url: t,
            method: "POST",
            dataType: "json",
            data: e
        })))
    }, t.deleteJson = function(t, e) {
        return o(a.default.ajax(u.default.extend({}, r, {
            url: t,
            method: "DELETE",
            dataType: "json",
            data: e
        })))
    }, t.postJsonObject = function(t, e) {
        return o(a.default.ajax(u.default.extend({}, r, {
            url: t,
            method: "POST",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(e)
        })))
    }, t.patch = function(t, e) {
        return o(a.default.ajax(u.default.extend({}, r, {
            url: t,
            method: "PATCH",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(e)
        })))
    }, t.postJsonObjectNoResult = function(t, e) {
        return o(a.default.ajax(u.default.extend({}, r, {
            url: t,
            method: "POST",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(e)
        })))
    }, t.poll = function(a, u, o) {
        var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 20,
            d = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 2e3;
        return new Promise(function(n, t) {
            ! function e() {
                if (--r < 0) return t();
                f(a, u).then(function(t) {
                    if (o(t)) return n(t);
                    setTimeout(e, d)
                }).catch(t)
            }()
        })
    }, a = babelHelpers.interopRequireDefault(a), u = babelHelpers.interopRequireDefault(u);
    var r = {
        statusCode: {
            403: function() {
                location.reload()
            }
        },
        headers: {
            CSRFToken: (0, a.default)("#CSRFToken").val()
        },
        cache: !1
    };

    function f(t, e) {
        return o(a.default.ajax(u.default.extend({}, r, {
            url: t,
            data: e,
            dataType: "json",
            type: "get"
        })))
    }
});
//# sourceMappingURL=OraApiUtils.js.map