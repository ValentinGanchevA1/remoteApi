(window.omniJsonp = window.omniJsonp || []).push([
    [40], {
        gzpe: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_error", function() {
                return n("iQU9")
            }])
        },
        iQU9: function(e, t, n) {
            "use strict";
            var r = n("zQIG"),
                i = n("8mBC"),
                l = n("I/kN"),
                o = n("cMav"),
                a = n("pSQP");

            function u() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }
            var s = n("Y3ZS");
            t.__esModule = !0, t.default = void 0;
            var c = s(n("ERkP")),
                d = s(n("ysqo")),
                f = {
                    400: "Bad Request",
                    404: "This page could not be found",
                    405: "Method Not Allowed",
                    500: "Internal Server Error"
                };

            function p(e) {
                var t = e.res,
                    n = e.err;
                return {
                    statusCode: t && t.statusCode ? t.statusCode : n ? n.statusCode : 404
                }
            }
            var h = function(e) {
                l(s, e);
                var t, n = (t = s, function() {
                    var e, n = a(t);
                    if (u()) {
                        var r = a(this).constructor;
                        e = Reflect.construct(n, arguments, r)
                    } else e = n.apply(this, arguments);
                    return o(this, e)
                });

                function s() {
                    return r(this, s), n.apply(this, arguments)
                }
                return i(s, [{
                    key: "render",
                    value: function() {
                        var e = this.props.statusCode,
                            t = this.props.title || f[e] || "An unexpected error has occurred";
                        return c.default.createElement("div", {
                            style: g.error
                        }, c.default.createElement(d.default, null, c.default.createElement("title", null, e, ": ", t)), c.default.createElement("div", null, c.default.createElement("style", {
                            dangerouslySetInnerHTML: {
                                __html: "body { margin: 0 }"
                            }
                        }), e ? c.default.createElement("h1", {
                            style: g.h1
                        }, e) : null, c.default.createElement("div", {
                            style: g.desc
                        }, c.default.createElement("h2", {
                            style: g.h2
                        }, t, "."))))
                    }
                }]), s
            }(c.default.Component);
            t.default = h, h.displayName = "ErrorPage", h.getInitialProps = p, h.origGetInitialProps = p;
            var g = {
                error: {
                    color: "#000",
                    background: "#fff",
                    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
                    height: "100vh",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                },
                desc: {
                    display: "inline-block",
                    textAlign: "left",
                    lineHeight: "49px",
                    height: "49px",
                    verticalAlign: "middle"
                },
                h1: {
                    display: "inline-block",
                    borderRight: "1px solid rgba(0, 0, 0,.3)",
                    margin: 0,
                    marginRight: "20px",
                    padding: "10px 23px 10px 0",
                    fontSize: "24px",
                    fontWeight: 500,
                    verticalAlign: "top"
                },
                h2: {
                    fontSize: "14px",
                    fontWeight: "normal",
                    lineHeight: "inherit",
                    margin: 0,
                    padding: 0
                }
            }
        }
    },
    [
        ["gzpe", 1, 2, 0]
    ]
]);
//# sourceMappingURL=_error.js.map