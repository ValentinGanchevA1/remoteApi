var Prototype = {
    Version: "1.7",
    Browser: (function() {
        var b = navigator.userAgent;
        var a = Object.prototype.toString.call(window.opera) == "[object Opera]";
        return {
            IE: !!window.attachEvent && !a,
            Opera: a,
            WebKit: b.indexOf("AppleWebKit/") > -1,
            Gecko: b.indexOf("Gecko") > -1 && b.indexOf("KHTML") === -1,
            MobileSafari: /Apple.*Mobile/.test(b)
        }
    })(),
    BrowserFeatures: {
        XPath: !!document.evaluate,
        SelectorsAPI: !!document.querySelector,
        ElementExtensions: (function() {
            var a = window.Element || window.HTMLElement;
            return !!(a && a.prototype)
        })(),
        SpecificElementExtensions: (function() {
            if (typeof window.HTMLDivElement !== "undefined") {
                return true
            }
            var c = document.createElement("div"),
                b = document.createElement("form"),
                a = false;
            if (c.__proto__ && (c.__proto__ !== b.__proto__)) {
                a = true
            }
            c = b = null;
            return a
        })()
    },
    ScriptFragment: "<script[^>]*>([\\S\\s]*?)<\/script>",
    JSONFilter: /^\/\*-secure-([\s\S]*)\*\/\s*$/,
    emptyFunction: function() {},
    K: function(a) {
        return a
    }
};
if (Prototype.Browser.MobileSafari) {
    Prototype.BrowserFeatures.SpecificElementExtensions = false
}
var Abstract = {};
var Try = {
    these: function() {
        var c;
        for (var b = 0, d = arguments.length; b < d; b++) {
            var a = arguments[b];
            try {
                c = a();
                break
            } catch (f) {}
        }
        return c
    }
};
var Class = (function() {
    var d = (function() {
        for (var e in {
                toString: 1
            }) {
            if (e === "toString") {
                return false
            }
        }
        return true
    })();

    function a() {}

    function b() {
        var h = null,
            g = $A(arguments);
        if (Object.isFunction(g[0])) {
            h = g.shift()
        }

        function e() {
            this.initialize.apply(this, arguments)
        }
        Object.extend(e, Class.Methods);
        e.superclass = h;
        e.subclasses = [];
        if (h) {
            a.prototype = h.prototype;
            e.prototype = new a;
            h.subclasses.push(e)
        }
        for (var f = 0, j = g.length; f < j; f++) {
            e.addMethods(g[f])
        }
        if (!e.prototype.initialize) {
            e.prototype.initialize = Prototype.emptyFunction
        }
        e.prototype.constructor = e;
        return e
    }

    function c(l) {
        var g = this.superclass && this.superclass.prototype,
            f = Object.keys(l);
        if (d) {
            if (l.toString != Object.prototype.toString) {
                f.push("toString")
            }
            if (l.valueOf != Object.prototype.valueOf) {
                f.push("valueOf")
            }
        }
        for (var e = 0, h = f.length; e < h; e++) {
            var k = f[e],
                j = l[k];
            if (g && Object.isFunction(j) && j.argumentNames()[0] == "$super") {
                var m = j;
                j = (function(i) {
                    return function() {
                        return g[i].apply(this, arguments)
                    }
                })(k).wrap(m);
                j.valueOf = m.valueOf.bind(m);
                j.toString = m.toString.bind(m)
            }
            this.prototype[k] = j
        }
        return this
    }
    return {
        create: b,
        Methods: {
            addMethods: c
        }
    }
})();
(function() {
    var C = Object.prototype.toString,
        B = "Null",
        o = "Undefined",
        v = "Boolean",
        f = "Number",
        s = "String",
        H = "Object",
        t = "[object Function]",
        y = "[object Boolean]",
        g = "[object Number]",
        l = "[object String]",
        h = "[object Array]",
        x = "[object Date]",
        i = window.JSON && typeof JSON.stringify === "function" && JSON.stringify(0) === "0" && typeof JSON.stringify(Prototype.K) === "undefined";

    function k(J) {
        switch (J) {
            case null:
                return B;
            case (void 0):
                return o
        }
        var I = typeof J;
        switch (I) {
            case "boolean":
                return v;
            case "number":
                return f;
            case "string":
                return s
        }
        return H
    }

    function z(I, K) {
        for (var J in K) {
            I[J] = K[J]
        }
        return I
    }

    function G(I) {
        try {
            if (c(I)) {
                return "undefined"
            }
            if (I === null) {
                return "null"
            }
            return I.inspect ? I.inspect() : String(I)
        } catch (J) {
            if (J instanceof RangeError) {
                return "..."
            }
            throw J
        }
    }

    function D(I) {
        return F("", {
            "": I
        }, [])
    }

    function F(R, O, P) {
        var Q = O[R],
            N = typeof Q;
        if (k(Q) === H && typeof Q.toJSON === "function") {
            Q = Q.toJSON(R)
        }
        var K = C.call(Q);
        switch (K) {
            case g:
            case y:
            case l:
                Q = Q.valueOf()
        }
        switch (Q) {
            case null:
                return "null";
            case true:
                return "true";
            case false:
                return "false"
        }
        N = typeof Q;
        switch (N) {
            case "string":
                return Q.inspect(true);
            case "number":
                return isFinite(Q) ? String(Q) : "null";
            case "object":
                for (var J = 0, I = P.length; J < I; J++) {
                    if (P[J] === Q) {
                        throw new TypeError()
                    }
                }
                P.push(Q);
                var M = [];
                if (K === h) {
                    for (var J = 0, I = Q.length; J < I; J++) {
                        var L = F(J, Q, P);
                        M.push(typeof L === "undefined" ? "null" : L)
                    }
                    M = "[" + M.join(",") + "]"
                } else {
                    var S = Object.keys(Q);
                    for (var J = 0, I = S.length; J < I; J++) {
                        var R = S[J],
                            L = F(R, Q, P);
                        if (typeof L !== "undefined") {
                            M.push(R.inspect(true) + ":" + L)
                        }
                    }
                    M = "{" + M.join(",") + "}"
                }
                P.pop();
                return M
        }
    }

    function w(I) {
        return JSON.stringify(I)
    }

    function j(I) {
        return $H(I).toQueryString()
    }

    function p(I) {
        return I && I.toHTML ? I.toHTML() : String.interpret(I)
    }

    function r(I) {
        if (k(I) !== H) {
            throw new TypeError()
        }
        var J = [];
        for (var K in I) {
            if (I.hasOwnProperty(K)) {
                J.push(K)
            }
        }
        return J
    }

    function d(I) {
        var J = [];
        for (var K in I) {
            J.push(I[K])
        }
        return J
    }

    function A(I) {
        return z({}, I)
    }

    function u(I) {
        return !!(I && I.nodeType == 1)
    }

    function m(I) {
        return C.call(I) === h
    }
    var b = (typeof Array.isArray == "function") && Array.isArray([]) && !Array.isArray({});
    if (b) {
        m = Array.isArray
    }

    function e(I) {
        return I instanceof Hash
    }

    function a(I) {
        return C.call(I) === t
    }

    function n(I) {
        return C.call(I) === l
    }

    function q(I) {
        return C.call(I) === g
    }

    function E(I) {
        return C.call(I) === x
    }

    function c(I) {
        return typeof I === "undefined"
    }
    z(Object, {
        extend: z,
        inspect: G,
        toJSON: i ? w : D,
        toQueryString: j,
        toHTML: p,
        keys: Object.keys || r,
        values: d,
        clone: A,
        isElement: u,
        isArray: m,
        isHash: e,
        isFunction: a,
        isString: n,
        isNumber: q,
        isDate: E,
        isUndefined: c
    })
})();
Object.extend(Function.prototype, (function() {
    var k = Array.prototype.slice;

    function d(o, l) {
        var n = o.length,
            m = l.length;
        while (m--) {
            o[n + m] = l[m]
        }
        return o
    }

    function i(m, l) {
        m = k.call(m, 0);
        return d(m, l)
    }

    function g() {
        var l = this.toString().match(/^[\s\(]*function[^(]*\(([^)]*)\)/)[1].replace(/\/\/.*?[\r\n]|\/\*(?:.|[\r\n])*?\*\//g, "").replace(/\s+/g, "").split(",");
        return l.length == 1 && !l[0] ? [] : l
    }

    function h(n) {
        if (arguments.length < 2 && Object.isUndefined(arguments[0])) {
            return this
        }
        var l = this,
            m = k.call(arguments, 1);
        return function() {
            var o = i(m, arguments);
            return l.apply(n, o)
        }
    }

    function f(n) {
        var l = this,
            m = k.call(arguments, 1);
        return function(p) {
            var o = d([p || window.event], m);
            return l.apply(n, o)
        }
    }

    function j() {
        if (!arguments.length) {
            return this
        }
        var l = this,
            m = k.call(arguments, 0);
        return function() {
            var n = i(m, arguments);
            return l.apply(this, n)
        }
    }

    function e(n) {
        var l = this,
            m = k.call(arguments, 1);
        n = n * 1000;
        return window.setTimeout(function() {
            return l.apply(l, m)
        }, n)
    }

    function a() {
        var l = d([0.01], arguments);
        return this.delay.apply(this, l)
    }

    function c(m) {
        var l = this;
        return function() {
            var n = d([l.bind(this)], arguments);
            return m.apply(this, n)
        }
    }

    function b() {
        if (this._methodized) {
            return this._methodized
        }
        var l = this;
        return this._methodized = function() {
            var m = d([this], arguments);
            return l.apply(null, m)
        }
    }
    return {
        argumentNames: g,
        bind: h,
        bindAsEventListener: f,
        curry: j,
        delay: e,
        defer: a,
        wrap: c,
        methodize: b
    }
})());
(function(c) {
    function b() {
        return this.getUTCFullYear() + "-" + (this.getUTCMonth() + 1).toPaddedString(2) + "-" + this.getUTCDate().toPaddedString(2) + "T" + this.getUTCHours().toPaddedString(2) + ":" + this.getUTCMinutes().toPaddedString(2) + ":" + this.getUTCSeconds().toPaddedString(2) + "Z"
    }

    function a() {
        return this.toISOString()
    }
    if (!c.toISOString) {
        c.toISOString = b
    }
    if (!c.toJSON) {
        c.toJSON = a
    }
})(Date.prototype);
RegExp.prototype.match = RegExp.prototype.test;
RegExp.escape = function(a) {
    return String(a).replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
};
var PeriodicalExecuter = Class.create({
    initialize: function(b, a) {
        this.callback = b;
        this.frequency = a;
        this.currentlyExecuting = false;
        this.registerCallback()
    },
    registerCallback: function() {
        this.timer = setInterval(this.onTimerEvent.bind(this), this.frequency * 1000)
    },
    execute: function() {
        this.callback(this)
    },
    stop: function() {
        if (!this.timer) {
            return
        }
        clearInterval(this.timer);
        this.timer = null
    },
    onTimerEvent: function() {
        if (!this.currentlyExecuting) {
            try {
                this.currentlyExecuting = true;
                this.execute();
                this.currentlyExecuting = false
            } catch (a) {
                this.currentlyExecuting = false;
                throw a
            }
        }
    }
});
Object.extend(String, {
    interpret: function(a) {
        return a == null ? "" : String(a)
    },
    specialChar: {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        "\\": "\\\\"
    }
});
Object.extend(String.prototype, (function() {
    var NATIVE_JSON_PARSE_SUPPORT = window.JSON && typeof JSON.parse === "function" && JSON.parse('{"test": true}').test;

    function prepareReplacement(replacement) {
        if (Object.isFunction(replacement)) {
            return replacement
        }
        var template = new Template(replacement);
        return function(match) {
            return template.evaluate(match)
        }
    }

    function gsub(pattern, replacement) {
        var result = "",
            source = this,
            match;
        replacement = prepareReplacement(replacement);
        if (Object.isString(pattern)) {
            pattern = RegExp.escape(pattern)
        }
        if (!(pattern.length || pattern.source)) {
            replacement = replacement("");
            return replacement + source.split("").join(replacement) + replacement
        }
        while (source.length > 0) {
            if (match = source.match(pattern)) {
                result += source.slice(0, match.index);
                result += String.interpret(replacement(match));
                source = source.slice(match.index + match[0].length)
            } else {
                result += source, source = ""
            }
        }
        return result
    }

    function sub(pattern, replacement, count) {
        replacement = prepareReplacement(replacement);
        count = Object.isUndefined(count) ? 1 : count;
        return this.gsub(pattern, function(match) {
            if (--count < 0) {
                return match[0]
            }
            return replacement(match)
        })
    }

    function scan(pattern, iterator) {
        this.gsub(pattern, iterator);
        return String(this)
    }

    function truncate(length, truncation) {
        length = length || 30;
        truncation = Object.isUndefined(truncation) ? "..." : truncation;
        return this.length > length ? this.slice(0, length - truncation.length) + truncation : String(this)
    }

    function strip() {
        return this.replace(/^\s+/, "").replace(/\s+$/, "")
    }

    function stripTags() {
        return this.replace(/<\w+(\s+("[^"]*"|'[^']*'|[^>])+)?>|<\/\w+>/gi, "")
    }

    function stripScripts() {
        return this.replace(new RegExp(Prototype.ScriptFragment, "img"), "")
    }

    function extractScripts() {
        var matchAll = new RegExp(Prototype.ScriptFragment, "img"),
            matchOne = new RegExp(Prototype.ScriptFragment, "im");
        return (this.match(matchAll) || []).map(function(scriptTag) {
            return (scriptTag.match(matchOne) || ["", ""])[1]
        })
    }

    function evalScripts() {
        return this.extractScripts().map(function(script) {
            return eval(script)
        })
    }

    function escapeHTML() {
        return this.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function unescapeHTML() {
        return this.stripTags().replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&")
    }

    function toQueryParams(separator) {
        var match = this.strip().match(/([^?#]*)(#.*)?$/);
        if (!match) {
            return {}
        }
        return match[1].split(separator || "&").inject({}, function(hash, pair) {
            if ((pair = pair.split("="))[0]) {
                var key = decodeURIComponent(pair.shift()),
                    value = pair.length > 1 ? pair.join("=") : pair[0];
                if (value != undefined) {
                    value = decodeURIComponent(value)
                }
                if (key in hash) {
                    if (!Object.isArray(hash[key])) {
                        hash[key] = [hash[key]]
                    }
                    hash[key].push(value)
                } else {
                    hash[key] = value
                }
            }
            return hash
        })
    }

    function toArray() {
        return this.split("")
    }

    function succ() {
        return this.slice(0, this.length - 1) + String.fromCharCode(this.charCodeAt(this.length - 1) + 1)
    }

    function times(count) {
        return count < 1 ? "" : new Array(count + 1).join(this)
    }

    function camelize() {
        return this.replace(/-+(.)?/g, function(match, chr) {
            return chr ? chr.toUpperCase() : ""
        })
    }

    function capitalize() {
        return this.charAt(0).toUpperCase() + this.substring(1).toLowerCase()
    }

    function underscore() {
        return this.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/-/g, "_").toLowerCase()
    }

    function dasherize() {
        return this.replace(/_/g, "-")
    }

    function inspect(useDoubleQuotes) {
        var escapedString = this.replace(/[\x00-\x1f\\]/g, function(character) {
            if (character in String.specialChar) {
                return String.specialChar[character]
            }
            return "\\u00" + character.charCodeAt().toPaddedString(2, 16)
        });
        if (useDoubleQuotes) {
            return '"' + escapedString.replace(/"/g, '\\"') + '"'
        }
        return "'" + escapedString.replace(/'/g, "\\'") + "'"
    }

    function unfilterJSON(filter) {
        return this.replace(filter || Prototype.JSONFilter, "$1")
    }

    function isJSON() {
        var str = this;
        if (str.blank()) {
            return false
        }
        str = str.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@");
        str = str.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]");
        str = str.replace(/(?:^|:|,)(?:\s*\[)+/g, "");
        return (/^[\],:{}\s]*$/).test(str)
    }

    function evalJSON(sanitize) {
        var json = this.unfilterJSON(),
            cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        if (cx.test(json)) {
            json = json.replace(cx, function(a) {
                return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            })
        }
        try {
            if (!sanitize || json.isJSON()) {
                return eval("(" + json + ")")
            }
        } catch (e) {}
        throw new SyntaxError("Badly formed JSON string: " + this.inspect())
    }

    function parseJSON() {
        var json = this.unfilterJSON();
        return JSON.parse(json)
    }

    function include(pattern) {
        return this.indexOf(pattern) > -1
    }

    function startsWith(pattern) {
        return this.lastIndexOf(pattern, 0) === 0
    }

    function endsWith(pattern) {
        var d = this.length - pattern.length;
        return d >= 0 && this.indexOf(pattern, d) === d
    }

    function empty() {
        return this == ""
    }

    function blank() {
        return /^\s*$/.test(this)
    }

    function interpolate(object, pattern) {
        return new Template(this, pattern).evaluate(object)
    }
    return {
        gsub: gsub,
        sub: sub,
        scan: scan,
        truncate: truncate,
        strip: String.prototype.trim || strip,
        stripTags: stripTags,
        stripScripts: stripScripts,
        extractScripts: extractScripts,
        evalScripts: evalScripts,
        escapeHTML: escapeHTML,
        unescapeHTML: unescapeHTML,
        toQueryParams: toQueryParams,
        parseQuery: toQueryParams,
        toArray: toArray,
        succ: succ,
        times: times,
        camelize: camelize,
        capitalize: capitalize,
        underscore: underscore,
        dasherize: dasherize,
        inspect: inspect,
        unfilterJSON: unfilterJSON,
        isJSON: isJSON,
        evalJSON: NATIVE_JSON_PARSE_SUPPORT ? parseJSON : evalJSON,
        include: include,
        startsWith: startsWith,
        endsWith: endsWith,
        empty: empty,
        blank: blank,
        interpolate: interpolate
    }
})());
var Template = Class.create({
    initialize: function(a, b) {
        this.template = a.toString();
        this.pattern = b || Template.Pattern
    },
    evaluate: function(a) {
        if (a && Object.isFunction(a.toTemplateReplacements)) {
            a = a.toTemplateReplacements()
        }
        return this.template.gsub(this.pattern, function(d) {
            if (a == null) {
                return (d[1] + "")
            }
            var f = d[1] || "";
            if (f == "\\") {
                return d[2]
            }
            var b = a,
                g = d[3],
                e = /^([^.[]+|\[((?:.*?[^\\])?)\])(\.|\[|$)/;
            d = e.exec(g);
            if (d == null) {
                return f
            }
            while (d != null) {
                var c = d[1].startsWith("[") ? d[2].replace(/\\\\]/g, "]") : d[1];
                b = b[c];
                if (null == b || "" == d[3]) {
                    break
                }
                g = g.substring("[" == d[3] ? d[1].length : d[0].length);
                d = e.exec(g)
            }
            return f + String.interpret(b)
        })
    }
});
Template.Pattern = /(^|.|\r|\n)(#\{(.*?)\})/;
var $break = {};
var Enumerable = (function() {
    function c(y, x) {
        var w = 0;
        try {
            this._each(function(A) {
                y.call(x, A, w++)
            })
        } catch (z) {
            if (z != $break) {
                throw z
            }
        }
        return this
    }

    function r(z, y, x) {
        var w = -z,
            A = [],
            B = this.toArray();
        if (z < 1) {
            return B
        }
        while ((w += z) < B.length) {
            A.push(B.slice(w, w + z))
        }
        return A.collect(y, x)
    }

    function b(y, x) {
        y = y || Prototype.K;
        var w = true;
        this.each(function(A, z) {
            w = w && !!y.call(x, A, z);
            if (!w) {
                throw $break
            }
        });
        return w
    }

    function i(y, x) {
        y = y || Prototype.K;
        var w = false;
        this.each(function(A, z) {
            if (w = !!y.call(x, A, z)) {
                throw $break
            }
        });
        return w
    }

    function j(y, x) {
        y = y || Prototype.K;
        var w = [];
        this.each(function(A, z) {
            w.push(y.call(x, A, z))
        });
        return w
    }

    function t(y, x) {
        var w;
        this.each(function(A, z) {
            if (y.call(x, A, z)) {
                w = A;
                throw $break
            }
        });
        return w
    }

    function h(y, x) {
        var w = [];
        this.each(function(A, z) {
            if (y.call(x, A, z)) {
                w.push(A)
            }
        });
        return w
    }

    function g(z, y, x) {
        y = y || Prototype.K;
        var w = [];
        if (Object.isString(z)) {
            z = new RegExp(RegExp.escape(z))
        }
        this.each(function(B, A) {
            if (z.match(B)) {
                w.push(y.call(x, B, A))
            }
        });
        return w
    }

    function a(w) {
        if (Object.isFunction(this.indexOf)) {
            if (this.indexOf(w) != -1) {
                return true
            }
        }
        var x = false;
        this.each(function(y) {
            if (y == w) {
                x = true;
                throw $break
            }
        });
        return x
    }

    function q(x, w) {
        w = Object.isUndefined(w) ? null : w;
        return this.eachSlice(x, function(y) {
            while (y.length < x) {
                y.push(w)
            }
            return y
        })
    }

    function l(w, y, x) {
        this.each(function(A, z) {
            w = y.call(x, w, A, z)
        });
        return w
    }

    function v(x) {
        var w = $A(arguments).slice(1);
        return this.map(function(y) {
            return y[x].apply(y, w)
        })
    }

    function p(y, x) {
        y = y || Prototype.K;
        var w;
        this.each(function(A, z) {
            A = y.call(x, A, z);
            if (w == null || A >= w) {
                w = A
            }
        });
        return w
    }

    function n(y, x) {
        y = y || Prototype.K;
        var w;
        this.each(function(A, z) {
            A = y.call(x, A, z);
            if (w == null || A < w) {
                w = A
            }
        });
        return w
    }

    function e(z, x) {
        z = z || Prototype.K;
        var y = [],
            w = [];
        this.each(function(B, A) {
            (z.call(x, B, A) ? y : w).push(B)
        });
        return [y, w]
    }

    function f(x) {
        var w = [];
        this.each(function(y) {
            w.push(y[x])
        });
        return w
    }

    function d(y, x) {
        var w = [];
        this.each(function(A, z) {
            if (!y.call(x, A, z)) {
                w.push(A)
            }
        });
        return w
    }

    function m(x, w) {
        return this.map(function(z, y) {
            return {
                value: z,
                criteria: x.call(w, z, y)
            }
        }).sort(function(B, A) {
            var z = B.criteria,
                y = A.criteria;
            return z < y ? -1 : z > y ? 1 : 0
        }).pluck("value")
    }

    function o() {
        return this.map()
    }

    function s() {
        var x = Prototype.K,
            w = $A(arguments);
        if (Object.isFunction(w.last())) {
            x = w.pop()
        }
        var y = [this].concat(w).map($A);
        return this.map(function(A, z) {
            return x(y.pluck(z))
        })
    }

    function k() {
        return this.toArray().length
    }

    function u() {
        return "#<Enumerable:" + this.toArray().inspect() + ">"
    }
    return {
        each: c,
        eachSlice: r,
        all: b,
        every: b,
        any: i,
        some: i,
        collect: j,
        map: j,
        detect: t,
        findAll: h,
        select: h,
        filter: h,
        grep: g,
        include: a,
        member: a,
        inGroupsOf: q,
        inject: l,
        invoke: v,
        max: p,
        min: n,
        partition: e,
        pluck: f,
        reject: d,
        sortBy: m,
        toArray: o,
        entries: o,
        zip: s,
        size: k,
        inspect: u,
        find: t
    }
})();

function $A(c) {
    if (!c) {
        return []
    }
    if ("toArray" in Object(c)) {
        return c.toArray()
    }
    var b = c.length || 0,
        a = new Array(b);
    while (b--) {
        a[b] = c[b]
    }
    return a
}

function $w(a) {
    if (!Object.isString(a)) {
        return []
    }
    a = a.strip();
    return a ? a.split(/\s+/) : []
}
Array.from = $A;
(function() {
    var r = Array.prototype,
        m = r.slice,
        o = r.forEach;

    function b(w, v) {
        for (var u = 0, x = this.length >>> 0; u < x; u++) {
            if (u in this) {
                w.call(v, this[u], u, this)
            }
        }
    }
    if (!o) {
        o = b
    }

    function l() {
        this.length = 0;
        return this
    }

    function d() {
        return this[0]
    }

    function g() {
        return this[this.length - 1]
    }

    function i() {
        return this.select(function(u) {
            return u != null
        })
    }

    function t() {
        return this.inject([], function(v, u) {
            if (Object.isArray(u)) {
                return v.concat(u.flatten())
            }
            v.push(u);
            return v
        })
    }

    function h() {
        var u = m.call(arguments, 0);
        return this.select(function(v) {
            return !u.include(v)
        })
    }

    function f(u) {
        return (u === false ? this.toArray() : this)._reverse()
    }

    function k(u) {
        return this.inject([], function(x, w, v) {
            if (0 == v || (u ? x.last() != w : !x.include(w))) {
                x.push(w)
            }
            return x
        })
    }

    function p(u) {
        return this.uniq().findAll(function(v) {
            return u.detect(function(w) {
                return v === w
            })
        })
    }

    function q() {
        return m.call(this, 0)
    }

    function j() {
        return this.length
    }

    function s() {
        return "[" + this.map(Object.inspect).join(", ") + "]"
    }

    function a(w, u) {
        u || (u = 0);
        var v = this.length;
        if (u < 0) {
            u = v + u
        }
        for (; u < v; u++) {
            if (this[u] === w) {
                return u
            }
        }
        return -1
    }

    function n(v, u) {
        u = isNaN(u) ? this.length : (u < 0 ? this.length + u : u) + 1;
        var w = this.slice(0, u).reverse().indexOf(v);
        return (w < 0) ? w : u - w - 1
    }

    function c() {
        var z = m.call(this, 0),
            x;
        for (var v = 0, w = arguments.length; v < w; v++) {
            x = arguments[v];
            if (Object.isArray(x) && !("callee" in x)) {
                for (var u = 0, y = x.length; u < y; u++) {
                    z.push(x[u])
                }
            } else {
                z.push(x)
            }
        }
        return z
    }
    Object.extend(r, Enumerable);
    if (!r._reverse) {
        r._reverse = r.reverse
    }
    Object.extend(r, {
        _each: o,
        clear: l,
        first: d,
        last: g,
        compact: i,
        flatten: t,
        without: h,
        reverse: f,
        uniq: k,
        intersect: p,
        clone: q,
        toArray: q,
        size: j,
        inspect: s
    });
    var e = (function() {
        return [].concat(arguments)[0][0] !== 1
    })(1, 2);
    if (e) {
        r.concat = c
    }
    if (!r.indexOf) {
        r.indexOf = a
    }
    if (!r.lastIndexOf) {
        r.lastIndexOf = n
    }
})();

function $H(a) {
    return new Hash(a)
}
var Hash = Class.create(Enumerable, (function() {
    function e(p) {
        this._object = Object.isHash(p) ? p.toObject() : Object.clone(p)
    }

    function f(q) {
        for (var p in this._object) {
            var r = this._object[p],
                s = [p, r];
            s.key = p;
            s.value = r;
            q(s)
        }
    }

    function j(p, q) {
        return this._object[p] = q
    }

    function c(p) {
        if (this._object[p] !== Object.prototype[p]) {
            return this._object[p]
        }
    }

    function m(p) {
        var q = this._object[p];
        delete this._object[p];
        return q
    }

    function o() {
        return Object.clone(this._object)
    }

    function n() {
        return this.pluck("key")
    }

    function l() {
        return this.pluck("value")
    }

    function g(q) {
        var p = this.detect(function(r) {
            return r.value === q
        });
        return p && p.key
    }

    function i(p) {
        return this.clone().update(p)
    }

    function d(p) {
        return new Hash(p).inject(this, function(q, r) {
            q.set(r.key, r.value);
            return q
        })
    }

    function b(p, q) {
        if (Object.isUndefined(q)) {
            return p
        }
        return p + "=" + encodeURIComponent(String.interpret(q))
    }

    function a() {
        return this.inject([], function(t, w) {
            var s = encodeURIComponent(w.key),
                q = w.value;
            if (q && typeof q == "object") {
                if (Object.isArray(q)) {
                    var v = [];
                    for (var r = 0, p = q.length, u; r < p; r++) {
                        u = q[r];
                        v.push(b(s, u))
                    }
                    return t.concat(v)
                }
            } else {
                t.push(b(s, q))
            }
            return t
        }).join("&")
    }

    function k() {
        return "#<Hash:{" + this.map(function(p) {
            return p.map(Object.inspect).join(": ")
        }).join(", ") + "}>"
    }

    function h() {
        return new Hash(this)
    }
    return {
        initialize: e,
        _each: f,
        set: j,
        get: c,
        unset: m,
        toObject: o,
        toTemplateReplacements: o,
        keys: n,
        values: l,
        index: g,
        merge: i,
        update: d,
        toQueryString: a,
        inspect: k,
        toJSON: o,
        clone: h
    }
})());
Hash.from = $H;
Object.extend(Number.prototype, (function() {
    function d() {
        return this.toPaddedString(2, 16)
    }

    function b() {
        return this + 1
    }

    function h(j, i) {
        $R(0, this, true).each(j, i);
        return this
    }

    function g(k, j) {
        var i = this.toString(j || 10);
        return "0".times(k - i.length) + i
    }

    function a() {
        return Math.abs(this)
    }

    function c() {
        return Math.round(this)
    }

    function e() {
        return Math.ceil(this)
    }

    function f() {
        return Math.floor(this)
    }
    return {
        toColorPart: d,
        succ: b,
        times: h,
        toPaddedString: g,
        abs: a,
        round: c,
        ceil: e,
        floor: f
    }
})());

function $R(c, a, b) {
    return new ObjectRange(c, a, b)
}
var ObjectRange = Class.create(Enumerable, (function() {
    function b(f, d, e) {
        this.start = f;
        this.end = d;
        this.exclusive = e
    }

    function c(d) {
        var e = this.start;
        while (this.include(e)) {
            d(e);
            e = e.succ()
        }
    }

    function a(d) {
        if (d < this.start) {
            return false
        }
        if (this.exclusive) {
            return d < this.end
        }
        return d <= this.end
    }
    return {
        initialize: b,
        _each: c,
        include: a
    }
})());
var Ajax = {
    getTransport: function() {
        return Try.these(function() {
            return new XMLHttpRequest()
        }, function() {
            return new ActiveXObject("Msxml2.XMLHTTP")
        }, function() {
            return new ActiveXObject("Microsoft.XMLHTTP")
        }) || false
    },
    activeRequestCount: 0
};
Ajax.Responders = {
    responders: [],
    _each: function(a) {
        this.responders._each(a)
    },
    register: function(a) {
        if (!this.include(a)) {
            this.responders.push(a)
        }
    },
    unregister: function(a) {
        this.responders = this.responders.without(a)
    },
    dispatch: function(d, b, c, a) {
        this.each(function(f) {
            if (Object.isFunction(f[d])) {
                try {
                    f[d].apply(f, [b, c, a])
                } catch (g) {}
            }
        })
    }
};
Object.extend(Ajax.Responders, Enumerable);
Ajax.Responders.register({
    onCreate: function() {
        Ajax.activeRequestCount++
    },
    onComplete: function() {
        Ajax.activeRequestCount--
    }
});
Ajax.Base = Class.create({
    initialize: function(a) {
        this.options = {
            method: "post",
            asynchronous: true,
            contentType: "application/x-www-form-urlencoded",
            encoding: "UTF-8",
            parameters: "",
            evalJSON: true,
            evalJS: true
        };
        Object.extend(this.options, a || {});
        this.options.method = this.options.method.toLowerCase();
        if (Object.isHash(this.options.parameters)) {
            this.options.parameters = this.options.parameters.toObject()
        }
    }
});
Ajax.Request = Class.create(Ajax.Base, {
    _complete: false,
    initialize: function($super, b, a) {
        $super(a);
        this.transport = Ajax.getTransport();
        this.request(b)
    },
    request: function(b) {
        this.url = b;
        this.method = this.options.method;
        var d = Object.isString(this.options.parameters) ? this.options.parameters : Object.toQueryString(this.options.parameters);
        if (!["get", "post"].include(this.method)) {
            d += (d ? "&" : "") + "_method=" + this.method;
            this.method = "post"
        }
        if (d && this.method === "get") {
            this.url += (this.url.include("?") ? "&" : "?") + d
        }
        this.parameters = d.toQueryParams();
        try {
            var a = new Ajax.Response(this);
            if (this.options.onCreate) {
                this.options.onCreate(a)
            }
            Ajax.Responders.dispatch("onCreate", this, a);
            this.transport.open(this.method.toUpperCase(), this.url, this.options.asynchronous);
            if (this.options.asynchronous) {
                this.respondToReadyState.bind(this).defer(1)
            }
            this.transport.onreadystatechange = this.onStateChange.bind(this);
            this.setRequestHeaders();
            this.body = this.method == "post" ? (this.options.postBody || d) : null;
            this.transport.send(this.body);
            if (!this.options.asynchronous && this.transport.overrideMimeType) {
                this.onStateChange()
            }
        } catch (c) {
            this.dispatchException(c)
        }
    },
    onStateChange: function() {
        var a = this.transport.readyState;
        if (a > 1 && !((a == 4) && this._complete)) {
            this.respondToReadyState(this.transport.readyState)
        }
    },
    setRequestHeaders: function() {
        var e = {
            "X-Requested-With": "XMLHttpRequest",
            "X-Prototype-Version": Prototype.Version,
            Accept: "text/javascript, text/html, application/xml, text/xml, */*"
        };
        if (this.method == "post") {
            e["Content-type"] = this.options.contentType + (this.options.encoding ? "; charset=" + this.options.encoding : "");
            if (this.transport.overrideMimeType && (navigator.userAgent.match(/Gecko\/(\d{4})/) || [0, 2005])[1] < 2005) {
                e.Connection = "close"
            }
        }
        if (typeof this.options.requestHeaders == "object") {
            var c = this.options.requestHeaders;
            if (Object.isFunction(c.push)) {
                for (var b = 0, d = c.length; b < d; b += 2) {
                    e[c[b]] = c[b + 1]
                }
            } else {
                $H(c).each(function(f) {
                    e[f.key] = f.value
                })
            }
        }
        for (var a in e) {
            this.transport.setRequestHeader(a, e[a])
        }
    },
    success: function() {
        var a = this.getStatus();
        return !a || (a >= 200 && a < 300) || a == 304
    },
    getStatus: function() {
        try {
            if (this.transport.status === 1223) {
                return 204
            }
            return this.transport.status || 0
        } catch (a) {
            return 0
        }
    },
    respondToReadyState: function(a) {
        var c = Ajax.Request.Events[a],
            b = new Ajax.Response(this);
        if (c == "Complete") {
            try {
                this._complete = true;
                (this.options["on" + b.status] || this.options["on" + (this.success() ? "Success" : "Failure")] || Prototype.emptyFunction)(b, b.headerJSON)
            } catch (d) {
                this.dispatchException(d)
            }
            var f = b.getHeader("Content-type");
            if (this.options.evalJS == "force" || (this.options.evalJS && this.isSameOrigin() && f && f.match(/^\s*(text|application)\/(x-)?(java|ecma)script(;.*)?\s*$/i))) {
                this.evalResponse()
            }
        }
        try {
            (this.options["on" + c] || Prototype.emptyFunction)(b, b.headerJSON);
            Ajax.Responders.dispatch("on" + c, this, b, b.headerJSON)
        } catch (d) {
            this.dispatchException(d)
        }
        if (c == "Complete") {
            this.transport.onreadystatechange = Prototype.emptyFunction
        }
    },
    isSameOrigin: function() {
        var a = this.url.match(/^\s*https?:\/\/[^\/]*/);
        return !a || (a[0] == "#{protocol}//#{domain}#{port}".interpolate({
            protocol: location.protocol,
            domain: document.domain,
            port: location.port ? ":" + location.port : ""
        }))
    },
    getHeader: function(a) {
        try {
            return this.transport.getResponseHeader(a) || null
        } catch (b) {
            return null
        }
    },
    evalResponse: function() {
        try {
            return eval((this.transport.responseText || "").unfilterJSON())
        } catch (e) {
            this.dispatchException(e)
        }
    },
    dispatchException: function(a) {
        (this.options.onException || Prototype.emptyFunction)(this, a);
        Ajax.Responders.dispatch("onException", this, a)
    }
});
Ajax.Request.Events = ["Uninitialized", "Loading", "Loaded", "Interactive", "Complete"];
Ajax.Response = Class.create({
    initialize: function(c) {
        this.request = c;
        var d = this.transport = c.transport,
            a = this.readyState = d.readyState;
        if ((a > 2 && !Prototype.Browser.IE) || a == 4) {
            this.status = this.getStatus();
            this.statusText = this.getStatusText();
            this.responseText = String.interpret(d.responseText);
            this.headerJSON = this._getHeaderJSON()
        }
        if (a == 4) {
            var b = d.responseXML;
            this.responseXML = Object.isUndefined(b) ? null : b;
            this.responseJSON = this._getResponseJSON()
        }
    },
    status: 0,
    statusText: "",
    getStatus: Ajax.Request.prototype.getStatus,
    getStatusText: function() {
        try {
            return this.transport.statusText || ""
        } catch (a) {
            return ""
        }
    },
    getHeader: Ajax.Request.prototype.getHeader,
    getAllHeaders: function() {
        try {
            return this.getAllResponseHeaders()
        } catch (a) {
            return null
        }
    },
    getResponseHeader: function(a) {
        return this.transport.getResponseHeader(a)
    },
    getAllResponseHeaders: function() {
        return this.transport.getAllResponseHeaders()
    },
    _getHeaderJSON: function() {
        var a = this.getHeader("X-JSON");
        if (!a) {
            return null
        }
        a = decodeURIComponent(escape(a));
        try {
            return a.evalJSON(this.request.options.sanitizeJSON || !this.request.isSameOrigin())
        } catch (b) {
            this.request.dispatchException(b)
        }
    },
    _getResponseJSON: function() {
        var a = this.request.options;
        if (!a.evalJSON || (a.evalJSON != "force" && !(this.getHeader("Content-type") || "").include("application/json")) || this.responseText.blank()) {
            return null
        }
        try {
            return this.responseText.evalJSON(a.sanitizeJSON || !this.request.isSameOrigin())
        } catch (b) {
            this.request.dispatchException(b)
        }
    }
});
Ajax.Updater = Class.create(Ajax.Request, {
    initialize: function($super, a, c, b) {
        this.container = {
            success: (a.success || a),
            failure: (a.failure || (a.success ? null : a))
        };
        b = Object.clone(b);
        var d = b.onComplete;
        b.onComplete = (function(e, f) {
            this.updateContent(e.responseText);
            if (Object.isFunction(d)) {
                d(e, f)
            }
        }).bind(this);
        $super(c, b)
    },
    updateContent: function(d) {
        var c = this.container[this.success() ? "success" : "failure"],
            a = this.options;
        if (!a.evalScripts) {
            d = d.stripScripts()
        }
        if (c = $(c)) {
            if (a.insertion) {
                if (Object.isString(a.insertion)) {
                    var b = {};
                    b[a.insertion] = d;
                    c.insert(b)
                } else {
                    a.insertion(c, d)
                }
            } else {
                c.update(d)
            }
        }
    }
});
Ajax.PeriodicalUpdater = Class.create(Ajax.Base, {
    initialize: function($super, a, c, b) {
        $super(b);
        this.onComplete = this.options.onComplete;
        this.frequency = (this.options.frequency || 2);
        this.decay = (this.options.decay || 1);
        this.updater = {};
        this.container = a;
        this.url = c;
        this.start()
    },
    start: function() {
        this.options.onComplete = this.updateComplete.bind(this);
        this.onTimerEvent()
    },
    stop: function() {
        this.updater.options.onComplete = undefined;
        clearTimeout(this.timer);
        (this.onComplete || Prototype.emptyFunction).apply(this, arguments)
    },
    updateComplete: function(a) {
        if (this.options.decay) {
            this.decay = (a.responseText == this.lastText ? this.decay * this.options.decay : 1);
            this.lastText = a.responseText
        }
        this.timer = this.onTimerEvent.bind(this).delay(this.decay * this.frequency)
    },
    onTimerEvent: function() {
        this.updater = new Ajax.Updater(this.container, this.url, this.options)
    }
});

function $(b) {
    if (arguments.length > 1) {
        for (var a = 0, d = [], c = arguments.length; a < c; a++) {
            d.push($(arguments[a]))
        }
        return d
    }
    if (Object.isString(b)) {
        b = document.getElementById(b)
    }
    return Element.extend(b)
}
if (Prototype.BrowserFeatures.XPath) {
    document._getElementsByXPath = function(f, a) {
        var c = [];
        var e = document.evaluate(f, $(a) || document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
        for (var b = 0, d = e.snapshotLength; b < d; b++) {
            c.push(Element.extend(e.snapshotItem(b)))
        }
        return c
    }
}
if (!Node) {
    var Node = {}
}
if (!Node.ELEMENT_NODE) {
    Object.extend(Node, {
        ELEMENT_NODE: 1,
        ATTRIBUTE_NODE: 2,
        TEXT_NODE: 3,
        CDATA_SECTION_NODE: 4,
        ENTITY_REFERENCE_NODE: 5,
        ENTITY_NODE: 6,
        PROCESSING_INSTRUCTION_NODE: 7,
        COMMENT_NODE: 8,
        DOCUMENT_NODE: 9,
        DOCUMENT_TYPE_NODE: 10,
        DOCUMENT_FRAGMENT_NODE: 11,
        NOTATION_NODE: 12
    })
}(function(c) {
    function d(f, e) {
        if (f === "select") {
            return false
        }
        if ("type" in e) {
            return false
        }
        return true
    }
    var b = (function() {
        try {
            var e = document.createElement('<input name="x">');
            return e.tagName.toLowerCase() === "input" && e.name === "x"
        } catch (f) {
            return false
        }
    })();
    var a = c.Element;
    c.Element = function(g, f) {
        f = f || {};
        g = g.toLowerCase();
        var e = Element.cache;
        if (b && f.name) {
            g = "<" + g + ' name="' + f.name + '">';
            delete f.name;
            return Element.writeAttribute(document.createElement(g), f)
        }
        if (!e[g]) {
            e[g] = Element.extend(document.createElement(g))
        }
        var h = d(g, f) ? e[g].cloneNode(false) : document.createElement(g);
        return Element.writeAttribute(h, f)
    };
    Object.extend(c.Element, a || {});
    if (a) {
        c.Element.prototype = a.prototype
    }
})(this);
Element.idCounter = 1;
Element.cache = {};
Element._purgeElement = function(b) {
    var a = b._prototypeUID;
    if (a) {
        Element.stopObserving(b);
        b._prototypeUID = void 0;
        delete Element.Storage[a]
    }
};
Element.Methods = {
    visible: function(a) {
        return $(a).style.display != "none"
    },
    toggle: function(a) {
        a = $(a);
        Element[Element.visible(a) ? "hide" : "show"](a);
        return a
    },
    hide: function(a) {
        a = $(a);
        a.style.display = "none";
        return a
    },
    show: function(a) {
        a = $(a);
        a.style.display = "";
        return a
    },
    remove: function(a) {
        a = $(a);
        a.parentNode.removeChild(a);
        return a
    },
    update: (function() {
        var d = (function() {
            var g = document.createElement("select"),
                h = true;
            g.innerHTML = '<option value="test">test</option>';
            if (g.options && g.options[0]) {
                h = g.options[0].nodeName.toUpperCase() !== "OPTION"
            }
            g = null;
            return h
        })();
        var b = (function() {
            try {
                var g = document.createElement("table");
                if (g && g.tBodies) {
                    g.innerHTML = "<tbody><tr><td>test</td></tr></tbody>";
                    var i = typeof g.tBodies[0] == "undefined";
                    g = null;
                    return i
                }
            } catch (h) {
                return true
            }
        })();
        var a = (function() {
            try {
                var g = document.createElement("div");
                g.innerHTML = "<link>";
                var i = (g.childNodes.length === 0);
                g = null;
                return i
            } catch (h) {
                return true
            }
        })();
        var c = d || b || a;
        var f = (function() {
            var g = document.createElement("script"),
                i = false;
            try {
                g.appendChild(document.createTextNode(""));
                i = !g.firstChild || g.firstChild && g.firstChild.nodeType !== 3
            } catch (h) {
                i = true
            }
            g = null;
            return i
        })();

        function e(l, m) {
            l = $(l);
            var g = Element._purgeElement;
            var n = l.getElementsByTagName("*"),
                k = n.length;
            while (k--) {
                g(n[k])
            }
            if (m && m.toElement) {
                m = m.toElement()
            }
            if (Object.isElement(m)) {
                return l.update().insert(m)
            }
            m = Object.toHTML(m);
            var j = l.tagName.toUpperCase();
            if (j === "SCRIPT" && f) {
                l.text = m;
                return l
            }
            if (c) {
                if (j in Element._insertionTranslations.tags) {
                    while (l.firstChild) {
                        l.removeChild(l.firstChild)
                    }
                    Element._getContentFromAnonymousElement(j, m.stripScripts()).each(function(i) {
                        l.appendChild(i)
                    })
                } else {
                    if (a && Object.isString(m) && m.indexOf("<link") > -1) {
                        while (l.firstChild) {
                            l.removeChild(l.firstChild)
                        }
                        var h = Element._getContentFromAnonymousElement(j, m.stripScripts(), true);
                        h.each(function(i) {
                            l.appendChild(i)
                        })
                    } else {
                        l.innerHTML = m.stripScripts()
                    }
                }
            } else {
                l.innerHTML = m.stripScripts()
            }
            m.evalScripts.bind(m).defer();
            return l
        }
        return e
    })(),
    replace: function(b, c) {
        b = $(b);
        if (c && c.toElement) {
            c = c.toElement()
        } else {
            if (!Object.isElement(c)) {
                c = Object.toHTML(c);
                var a = b.ownerDocument.createRange();
                a.selectNode(b);
                c.evalScripts.bind(c).defer();
                c = a.createContextualFragment(c.stripScripts())
            }
        }
        b.parentNode.replaceChild(c, b);
        return b
    },
    insert: function(c, e) {
        c = $(c);
        if (Object.isString(e) || Object.isNumber(e) || Object.isElement(e) || (e && (e.toElement || e.toHTML))) {
            e = {
                bottom: e
            }
        }
        var d, f, b, g;
        for (var a in e) {
            d = e[a];
            a = a.toLowerCase();
            f = Element._insertionTranslations[a];
            if (d && d.toElement) {
                d = d.toElement()
            }
            if (Object.isElement(d)) {
                f(c, d);
                continue
            }
            d = Object.toHTML(d);
            b = ((a == "before" || a == "after") ? c.parentNode : c).tagName.toUpperCase();
            g = Element._getContentFromAnonymousElement(b, d.stripScripts());
            if (a == "top" || a == "after") {
                g.reverse()
            }
            g.each(f.curry(c));
            d.evalScripts.bind(d).defer()
        }
        return c
    },
    wrap: function(b, c, a) {
        b = $(b);
        if (Object.isElement(c)) {
            $(c).writeAttribute(a || {})
        } else {
            if (Object.isString(c)) {
                c = new Element(c, a)
            } else {
                c = new Element("div", c)
            }
        }
        if (b.parentNode) {
            b.parentNode.replaceChild(c, b)
        }
        c.appendChild(b);
        return c
    },
    inspect: function(b) {
        b = $(b);
        var a = "<" + b.tagName.toLowerCase();
        $H({
            id: "id",
            className: "class"
        }).each(function(f) {
            var e = f.first(),
                c = f.last(),
                d = (b[e] || "").toString();
            if (d) {
                a += " " + c + "=" + d.inspect(true)
            }
        });
        return a + ">"
    },
    recursivelyCollect: function(a, c, d) {
        a = $(a);
        d = d || -1;
        var b = [];
        while (a = a[c]) {
            if (a.nodeType == 1) {
                b.push(Element.extend(a))
            }
            if (b.length == d) {
                break
            }
        }
        return b
    },
    ancestors: function(a) {
        return Element.recursivelyCollect(a, "parentNode")
    },
    descendants: function(a) {
        return Element.select(a, "*")
    },
    firstDescendant: function(a) {
        a = $(a).firstChild;
        while (a && a.nodeType != 1) {
            a = a.nextSibling
        }
        return $(a)
    },
    immediateDescendants: function(b) {
        var a = [],
            c = $(b).firstChild;
        while (c) {
            if (c.nodeType === 1) {
                a.push(Element.extend(c))
            }
            c = c.nextSibling
        }
        return a
    },
    previousSiblings: function(a, b) {
        return Element.recursivelyCollect(a, "previousSibling")
    },
    nextSiblings: function(a) {
        return Element.recursivelyCollect(a, "nextSibling")
    },
    siblings: function(a) {
        a = $(a);
        return Element.previousSiblings(a).reverse().concat(Element.nextSiblings(a))
    },
    match: function(b, a) {
        b = $(b);
        if (Object.isString(a)) {
            return Prototype.Selector.match(b, a)
        }
        return a.match(b)
    },
    up: function(b, d, a) {
        b = $(b);
        if (arguments.length == 1) {
            return $(b.parentNode)
        }
        var c = Element.ancestors(b);
        return Object.isNumber(d) ? c[d] : Prototype.Selector.find(c, d, a)
    },
    down: function(b, c, a) {
        b = $(b);
        if (arguments.length == 1) {
            return Element.firstDescendant(b)
        }
        return Object.isNumber(c) ? Element.descendants(b)[c] : Element.select(b, c)[a || 0]
    },
    previous: function(b, c, a) {
        b = $(b);
        if (Object.isNumber(c)) {
            a = c, c = false
        }
        if (!Object.isNumber(a)) {
            a = 0
        }
        if (c) {
            return Prototype.Selector.find(b.previousSiblings(), c, a)
        } else {
            return b.recursivelyCollect("previousSibling", a + 1)[a]
        }
    },
    next: function(b, d, a) {
        b = $(b);
        if (Object.isNumber(d)) {
            a = d, d = false
        }
        if (!Object.isNumber(a)) {
            a = 0
        }
        if (d) {
            return Prototype.Selector.find(b.nextSiblings(), d, a)
        } else {
            var c = Object.isNumber(a) ? a + 1 : 1;
            return b.recursivelyCollect("nextSibling", a + 1)[a]
        }
    },
    select: function(a) {
        a = $(a);
        var b = Array.prototype.slice.call(arguments, 1).join(", ");
        return Prototype.Selector.select(b, a)
    },
    adjacent: function(a) {
        a = $(a);
        var b = Array.prototype.slice.call(arguments, 1).join(", ");
        return Prototype.Selector.select(b, a.parentNode).without(a)
    },
    identify: function(a) {
        a = $(a);
        var b = Element.readAttribute(a, "id");
        if (b) {
            return b
        }
        do {
            b = "anonymous_element_" + Element.idCounter++
        } while ($(b));
        Element.writeAttribute(a, "id", b);
        return b
    },
    readAttribute: function(c, a) {
        c = $(c);
        if (Prototype.Browser.IE) {
            var b = Element._attributeTranslations.read;
            if (b.values[a]) {
                return b.values[a](c, a)
            }
            if (b.names[a]) {
                a = b.names[a]
            }
            if (a.include(":")) {
                return (!c.attributes || !c.attributes[a]) ? null : c.attributes[a].value
            }
        }
        return c.getAttribute(a)
    },
    writeAttribute: function(e, c, f) {
        e = $(e);
        var b = {},
            d = Element._attributeTranslations.write;
        if (typeof c == "object") {
            b = c
        } else {
            b[c] = Object.isUndefined(f) ? true : f
        }
        for (var a in b) {
            c = d.names[a] || a;
            f = b[a];
            if (d.values[a]) {
                c = d.values[a](e, f)
            }
            if (f === false || f === null) {
                e.removeAttribute(c)
            } else {
                if (f === true) {
                    e.setAttribute(c, c)
                } else {
                    e.setAttribute(c, f)
                }
            }
        }
        return e
    },
    getHeight: function(a) {
        return Element.getDimensions(a).height
    },
    getWidth: function(a) {
        return Element.getDimensions(a).width
    },
    classNames: function(a) {
        return new Element.ClassNames(a)
    },
    hasClassName: function(a, b) {
        if (!(a = $(a))) {
            return
        }
        var c = a.className;
        return (c.length > 0 && (c == b || new RegExp("(^|\\s)" + b + "(\\s|$)").test(c)))
    },
    addClassName: function(a, b) {
        if (!(a = $(a))) {
            return
        }
        if (!Element.hasClassName(a, b)) {
            a.className += (a.className ? " " : "") + b
        }
        return a
    },
    removeClassName: function(a, b) {
        if (!(a = $(a))) {
            return
        }
        a.className = a.className.replace(new RegExp("(^|\\s+)" + b + "(\\s+|$)"), " ").strip();
        return a
    },
    toggleClassName: function(a, b) {
        if (!(a = $(a))) {
            return
        }
        return Element[Element.hasClassName(a, b) ? "removeClassName" : "addClassName"](a, b)
    },
    cleanWhitespace: function(b) {
        b = $(b);
        var c = b.firstChild;
        while (c) {
            var a = c.nextSibling;
            if (c.nodeType == 3 && !/\S/.test(c.nodeValue)) {
                b.removeChild(c)
            }
            c = a
        }
        return b
    },
    empty: function(a) {
        return $(a).innerHTML.blank()
    },
    descendantOf: function(b, a) {
        b = $(b), a = $(a);
        if (b.compareDocumentPosition) {
            return (b.compareDocumentPosition(a) & 8) === 8
        }
        if (a.contains) {
            return a.contains(b) && a !== b
        }
        while (b = b.parentNode) {
            if (b == a) {
                return true
            }
        }
        return false
    },
    scrollTo: function(a) {
        a = $(a);
        var b = Element.cumulativeOffset(a);
        window.scrollTo(b[0], b[1]);
        return a
    },
    getStyle: function(b, c) {
        b = $(b);
        c = c == "float" ? "cssFloat" : c.camelize();
        var d = b.style[c];
        if (!d || d == "auto") {
            var a = document.defaultView.getComputedStyle(b, null);
            d = a ? a[c] : null
        }
        if (c == "opacity") {
            return d ? parseFloat(d) : 1
        }
        return d == "auto" ? null : d
    },
    getOpacity: function(a) {
        return $(a).getStyle("opacity")
    },
    setStyle: function(b, c) {
        b = $(b);
        var e = b.style,
            a;
        if (Object.isString(c)) {
            b.style.cssText += ";" + c;
            return c.include("opacity") ? b.setOpacity(c.match(/opacity:\s*(\d?\.?\d*)/)[1]) : b
        }
        for (var d in c) {
            if (d == "opacity") {
                b.setOpacity(c[d])
            } else {
                e[(d == "float" || d == "cssFloat") ? (Object.isUndefined(e.styleFloat) ? "cssFloat" : "styleFloat") : d] = c[d]
            }
        }
        return b
    },
    setOpacity: function(a, b) {
        a = $(a);
        a.style.opacity = (b == 1 || b === "") ? "" : (b < 0.00001) ? 0 : b;
        return a
    },
    makePositioned: function(a) {
        a = $(a);
        var b = Element.getStyle(a, "position");
        if (b == "static" || !b) {
            a._madePositioned = true;
            a.style.position = "relative";
            if (Prototype.Browser.Opera) {
                a.style.top = 0;
                a.style.left = 0
            }
        }
        return a
    },
    undoPositioned: function(a) {
        a = $(a);
        if (a._madePositioned) {
            a._madePositioned = undefined;
            a.style.position = a.style.top = a.style.left = a.style.bottom = a.style.right = ""
        }
        return a
    },
    makeClipping: function(a) {
        a = $(a);
        if (a._overflow) {
            return a
        }
        a._overflow = Element.getStyle(a, "overflow") || "auto";
        if (a._overflow !== "hidden") {
            a.style.overflow = "hidden"
        }
        return a
    },
    undoClipping: function(a) {
        a = $(a);
        if (!a._overflow) {
            return a
        }
        a.style.overflow = a._overflow == "auto" ? "" : a._overflow;
        a._overflow = null;
        return a
    },
    clonePosition: function(b, d) {
        var a = Object.extend({
            setLeft: true,
            setTop: true,
            setWidth: true,
            setHeight: true,
            offsetTop: 0,
            offsetLeft: 0
        }, arguments[2] || {});
        d = $(d);
        var e = Element.viewportOffset(d),
            f = [0, 0],
            c = null;
        b = $(b);
        if (Element.getStyle(b, "position") == "absolute") {
            c = Element.getOffsetParent(b);
            f = Element.viewportOffset(c)
        }
        if (c == document.body) {
            f[0] -= document.body.offsetLeft;
            f[1] -= document.body.offsetTop
        }
        if (a.setLeft) {
            b.style.left = (e[0] - f[0] + a.offsetLeft) + "px"
        }
        if (a.setTop) {
            b.style.top = (e[1] - f[1] + a.offsetTop) + "px"
        }
        if (a.setWidth) {
            b.style.width = d.offsetWidth + "px"
        }
        if (a.setHeight) {
            b.style.height = d.offsetHeight + "px"
        }
        return b
    }
};
Object.extend(Element.Methods, {
    getElementsBySelector: Element.Methods.select,
    childElements: Element.Methods.immediateDescendants
});
Element._attributeTranslations = {
    write: {
        names: {
            className: "class",
            htmlFor: "for"
        },
        values: {}
    }
};
if (Prototype.Browser.Opera) {
    Element.Methods.getStyle = Element.Methods.getStyle.wrap(function(d, b, c) {
        switch (c) {
            case "height":
            case "width":
                if (!Element.visible(b)) {
                    return null
                }
                var e = parseInt(d(b, c), 10);
                if (e !== b["offset" + c.capitalize()]) {
                    return e + "px"
                }
                var a;
                if (c === "height") {
                    a = ["border-top-width", "padding-top", "padding-bottom", "border-bottom-width"]
                } else {
                    a = ["border-left-width", "padding-left", "padding-right", "border-right-width"]
                }
                return a.inject(e, function(f, g) {
                    var h = d(b, g);
                    return h === null ? f : f - parseInt(h, 10)
                }) + "px";
            default:
                return d(b, c)
        }
    });
    Element.Methods.readAttribute = Element.Methods.readAttribute.wrap(function(c, a, b) {
        if (b === "title") {
            return a.title
        }
        return c(a, b)
    })
} else {
    if (Prototype.Browser.IE) {
        Element.Methods.getStyle = function(a, b) {
            a = $(a);
            b = (b == "float" || b == "cssFloat") ? "styleFloat" : b.camelize();
            var c = a.style[b];
            if (!c && a.currentStyle) {
                c = a.currentStyle[b]
            }
            if (b == "opacity") {
                if (c = (a.getStyle("filter") || "").match(/alpha\(opacity=(.*)\)/)) {
                    if (c[1]) {
                        return parseFloat(c[1]) / 100
                    }
                }
                return 1
            }
            if (c == "auto") {
                if ((b == "width" || b == "height") && (a.getStyle("display") != "none")) {
                    return a["offset" + b.capitalize()] + "px"
                }
                return null
            }
            return c
        };
        Element.Methods.setOpacity = function(b, e) {
            function f(g) {
                return g.replace(/alpha\([^\)]*\)/gi, "")
            }
            b = $(b);
            var a = b.currentStyle;
            if ((a && !a.hasLayout) || (!a && b.style.zoom == "normal")) {
                b.style.zoom = 1
            }
            var d = b.getStyle("filter"),
                c = b.style;
            if (e == 1 || e === "") {
                (d = f(d)) ? c.filter = d: c.removeAttribute("filter");
                return b
            } else {
                if (e < 0.00001) {
                    e = 0
                }
            }
            c.filter = f(d) + "alpha(opacity=" + (e * 100) + ")";
            return b
        };
        Element._attributeTranslations = (function() {
            var b = "className",
                a = "for",
                c = document.createElement("div");
            c.setAttribute(b, "x");
            if (c.className !== "x") {
                c.setAttribute("class", "x");
                if (c.className === "x") {
                    b = "class"
                }
            }
            c = null;
            c = document.createElement("label");
            c.setAttribute(a, "x");
            if (c.htmlFor !== "x") {
                c.setAttribute("htmlFor", "x");
                if (c.htmlFor === "x") {
                    a = "htmlFor"
                }
            }
            c = null;
            return {
                read: {
                    names: {
                        "class": b,
                        className: b,
                        "for": a,
                        htmlFor: a
                    },
                    values: {
                        _getAttr: function(d, e) {
                            return d.getAttribute(e)
                        },
                        _getAttr2: function(d, e) {
                            return d.getAttribute(e, 2)
                        },
                        _getAttrNode: function(d, f) {
                            var e = d.getAttributeNode(f);
                            return e ? e.value : ""
                        },
                        _getEv: (function() {
                            var d = document.createElement("div"),
                                g;
                            d.onclick = Prototype.emptyFunction;
                            var e = d.getAttribute("onclick");
                            if (String(e).indexOf("{") > -1) {
                                g = function(f, h) {
                                    h = f.getAttribute(h);
                                    if (!h) {
                                        return null
                                    }
                                    h = h.toString();
                                    h = h.split("{")[1];
                                    h = h.split("}")[0];
                                    return h.strip()
                                }
                            } else {
                                if (e === "") {
                                    g = function(f, h) {
                                        h = f.getAttribute(h);
                                        if (!h) {
                                            return null
                                        }
                                        return h.strip()
                                    }
                                }
                            }
                            d = null;
                            return g
                        })(),
                        _flag: function(d, e) {
                            return $(d).hasAttribute(e) ? e : null
                        },
                        style: function(d) {
                            return d.style.cssText.toLowerCase()
                        },
                        title: function(d) {
                            return d.title
                        }
                    }
                }
            }
        })();
        Element._attributeTranslations.write = {
            names: Object.extend({
                cellpadding: "cellPadding",
                cellspacing: "cellSpacing"
            }, Element._attributeTranslations.read.names),
            values: {
                checked: function(a, b) {
                    a.checked = !!b
                },
                style: function(a, b) {
                    a.style.cssText = b ? b : ""
                }
            }
        };
        Element._attributeTranslations.has = {};
        $w("colSpan rowSpan vAlign dateTime accessKey tabIndex encType maxLength readOnly longDesc frameBorder").each(function(a) {
            Element._attributeTranslations.write.names[a.toLowerCase()] = a;
            Element._attributeTranslations.has[a.toLowerCase()] = a
        });
        (function(a) {
            Object.extend(a, {
                href: a._getAttr2,
                src: a._getAttr2,
                type: a._getAttr,
                action: a._getAttrNode,
                disabled: a._flag,
                checked: a._flag,
                readonly: a._flag,
                multiple: a._flag,
                onload: a._getEv,
                onunload: a._getEv,
                onclick: a._getEv,
                ondblclick: a._getEv,
                onmousedown: a._getEv,
                onmouseup: a._getEv,
                onmouseover: a._getEv,
                onmousemove: a._getEv,
                onmouseout: a._getEv,
                onfocus: a._getEv,
                onblur: a._getEv,
                onkeypress: a._getEv,
                onkeydown: a._getEv,
                onkeyup: a._getEv,
                onsubmit: a._getEv,
                onreset: a._getEv,
                onselect: a._getEv,
                onchange: a._getEv
            })
        })(Element._attributeTranslations.read.values);
        if (Prototype.BrowserFeatures.ElementExtensions) {
            (function() {
                function a(e) {
                    var b = e.getElementsByTagName("*"),
                        d = [];
                    for (var c = 0, f; f = b[c]; c++) {
                        if (f.tagName !== "!") {
                            d.push(f)
                        }
                    }
                    return d
                }
                Element.Methods.down = function(c, d, b) {
                    c = $(c);
                    if (arguments.length == 1) {
                        return c.firstDescendant()
                    }
                    return Object.isNumber(d) ? a(c)[d] : Element.select(c, d)[b || 0]
                }
            })()
        }
    } else {
        if (Prototype.Browser.Gecko && /rv:1\.8\.0/.test(navigator.userAgent)) {
            Element.Methods.setOpacity = function(a, b) {
                a = $(a);
                a.style.opacity = (b == 1) ? 0.999999 : (b === "") ? "" : (b < 0.00001) ? 0 : b;
                return a
            }
        } else {
            if (Prototype.Browser.WebKit) {
                Element.Methods.setOpacity = function(a, b) {
                    a = $(a);
                    a.style.opacity = (b == 1 || b === "") ? "" : (b < 0.00001) ? 0 : b;
                    if (b == 1) {
                        if (a.tagName.toUpperCase() == "IMG" && a.width) {
                            a.width++;
                            a.width--
                        } else {
                            try {
                                var d = document.createTextNode(" ");
                                a.appendChild(d);
                                a.removeChild(d)
                            } catch (c) {}
                        }
                    }
                    return a
                }
            }
        }
    }
}
if ("outerHTML" in document.documentElement) {
    Element.Methods.replace = function(c, e) {
        c = $(c);
        if (e && e.toElement) {
            e = e.toElement()
        }
        if (Object.isElement(e)) {
            c.parentNode.replaceChild(e, c);
            return c
        }
        e = Object.toHTML(e);
        var d = c.parentNode,
            b = d.tagName.toUpperCase();
        if (Element._insertionTranslations.tags[b]) {
            var f = c.next(),
                a = Element._getContentFromAnonymousElement(b, e.stripScripts());
            d.removeChild(c);
            if (f) {
                a.each(function(g) {
                    d.insertBefore(g, f)
                })
            } else {
                a.each(function(g) {
                    d.appendChild(g)
                })
            }
        } else {
            c.outerHTML = e.stripScripts()
        }
        e.evalScripts.bind(e).defer();
        return c
    }
}
Element._returnOffset = function(b, c) {
    var a = [b, c];
    a.left = b;
    a.top = c;
    return a
};
Element._getContentFromAnonymousElement = function(e, d, f) {
    var g = new Element("div"),
        c = Element._insertionTranslations.tags[e];
    var a = false;
    if (c) {
        a = true
    } else {
        if (f) {
            a = true;
            c = ["", "", 0]
        }
    }
    if (a) {
        g.innerHTML = "&nbsp;" + c[0] + d + c[1];
        g.removeChild(g.firstChild);
        for (var b = c[2]; b--;) {
            g = g.firstChild
        }
    } else {
        g.innerHTML = d
    }
    return $A(g.childNodes)
};
Element._insertionTranslations = {
    before: function(a, b) {
        a.parentNode.insertBefore(b, a)
    },
    top: function(a, b) {
        a.insertBefore(b, a.firstChild)
    },
    bottom: function(a, b) {
        a.appendChild(b)
    },
    after: function(a, b) {
        a.parentNode.insertBefore(b, a.nextSibling)
    },
    tags: {
        TABLE: ["<table>", "</table>", 1],
        TBODY: ["<table><tbody>", "</tbody></table>", 2],
        TR: ["<table><tbody><tr>", "</tr></tbody></table>", 3],
        TD: ["<table><tbody><tr><td>", "</td></tr></tbody></table>", 4],
        SELECT: ["<select>", "</select>", 1]
    }
};
(function() {
    var a = Element._insertionTranslations.tags;
    Object.extend(a, {
        THEAD: a.TBODY,
        TFOOT: a.TBODY,
        TH: a.TD
    })
})();
Element.Methods.Simulated = {
    hasAttribute: function(a, c) {
        c = Element._attributeTranslations.has[c] || c;
        var b = $(a).getAttributeNode(c);
        return !!(b && b.specified)
    }
};
Element.Methods.ByTag = {};
Object.extend(Element, Element.Methods);
(function(a) {
    if (!Prototype.BrowserFeatures.ElementExtensions && a.__proto__) {
        window.HTMLElement = {};
        window.HTMLElement.prototype = a.__proto__;
        Prototype.BrowserFeatures.ElementExtensions = true
    }
    a = null
})(document.createElement("div"));
Element.extend = (function() {
    function c(g) {
        if (typeof window.Element != "undefined") {
            var i = window.Element.prototype;
            if (i) {
                var k = "_" + (Math.random() + "").slice(2),
                    h = document.createElement(g);
                i[k] = "x";
                var j = (h[k] !== "x");
                delete i[k];
                h = null;
                return j
            }
        }
        return false
    }

    function b(h, g) {
        for (var j in g) {
            var i = g[j];
            if (Object.isFunction(i) && !(j in h)) {
                h[j] = i.methodize()
            }
        }
    }
    var d = c("object");
    if (Prototype.BrowserFeatures.SpecificElementExtensions) {
        if (d) {
            return function(h) {
                if (h && typeof h._extendedByPrototype == "undefined") {
                    var g = h.tagName;
                    if (g && (/^(?:object|applet|embed)$/i.test(g))) {
                        b(h, Element.Methods);
                        b(h, Element.Methods.Simulated);
                        b(h, Element.Methods.ByTag[g.toUpperCase()])
                    }
                }
                return h
            }
        }
        return Prototype.K
    }
    var a = {},
        e = Element.Methods.ByTag;
    var f = Object.extend(function(i) {
        if (!i || typeof i._extendedByPrototype != "undefined" || i.nodeType != 1 || i == window) {
            return i
        }
        var g = Object.clone(a),
            h = i.tagName.toUpperCase();
        if (e[h]) {
            Object.extend(g, e[h])
        }
        b(i, g);
        i._extendedByPrototype = Prototype.emptyFunction;
        return i
    }, {
        refresh: function() {
            if (!Prototype.BrowserFeatures.ElementExtensions) {
                Object.extend(a, Element.Methods);
                Object.extend(a, Element.Methods.Simulated)
            }
        }
    });
    f.refresh();
    return f
})();
if (document.documentElement.hasAttribute) {
    Element.hasAttribute = function(a, b) {
        return a.hasAttribute(b)
    }
} else {
    Element.hasAttribute = Element.Methods.Simulated.hasAttribute
}
Element.addMethods = function(c) {
    var i = Prototype.BrowserFeatures,
        d = Element.Methods.ByTag;
    if (!c) {
        Object.extend(Form, Form.Methods);
        Object.extend(Form.Element, Form.Element.Methods);
        Object.extend(Element.Methods.ByTag, {
            FORM: Object.clone(Form.Methods),
            INPUT: Object.clone(Form.Element.Methods),
            SELECT: Object.clone(Form.Element.Methods),
            TEXTAREA: Object.clone(Form.Element.Methods),
            BUTTON: Object.clone(Form.Element.Methods)
        })
    }
    if (arguments.length == 2) {
        var b = c;
        c = arguments[1]
    }
    if (!b) {
        Object.extend(Element.Methods, c || {})
    } else {
        if (Object.isArray(b)) {
            b.each(g)
        } else {
            g(b)
        }
    }

    function g(k) {
        k = k.toUpperCase();
        if (!Element.Methods.ByTag[k]) {
            Element.Methods.ByTag[k] = {}
        }
        Object.extend(Element.Methods.ByTag[k], c)
    }

    function a(m, l, k) {
        k = k || false;
        for (var o in m) {
            var n = m[o];
            if (!Object.isFunction(n)) {
                continue
            }
            if (!k || !(o in l)) {
                l[o] = n.methodize()
            }
        }
    }

    function e(n) {
        var k;
        var m = {
            OPTGROUP: "OptGroup",
            TEXTAREA: "TextArea",
            P: "Paragraph",
            FIELDSET: "FieldSet",
            UL: "UList",
            OL: "OList",
            DL: "DList",
            DIR: "Directory",
            H1: "Heading",
            H2: "Heading",
            H3: "Heading",
            H4: "Heading",
            H5: "Heading",
            H6: "Heading",
            Q: "Quote",
            INS: "Mod",
            DEL: "Mod",
            A: "Anchor",
            IMG: "Image",
            CAPTION: "TableCaption",
            COL: "TableCol",
            COLGROUP: "TableCol",
            THEAD: "TableSection",
            TFOOT: "TableSection",
            TBODY: "TableSection",
            TR: "TableRow",
            TH: "TableCell",
            TD: "TableCell",
            FRAMESET: "FrameSet",
            IFRAME: "IFrame"
        };
        if (m[n]) {
            k = "HTML" + m[n] + "Element"
        }
        if (window[k]) {
            return window[k]
        }
        k = "HTML" + n + "Element";
        if (window[k]) {
            return window[k]
        }
        k = "HTML" + n.capitalize() + "Element";
        if (window[k]) {
            return window[k]
        }
        var l = document.createElement(n),
            o = l.__proto__ || l.constructor.prototype;
        l = null;
        return o
    }
    var h = window.HTMLElement ? HTMLElement.prototype : Element.prototype;
    if (i.ElementExtensions) {
        a(Element.Methods, h);
        a(Element.Methods.Simulated, h, true)
    }
    if (i.SpecificElementExtensions) {
        for (var j in Element.Methods.ByTag) {
            var f = e(j);
            if (Object.isUndefined(f)) {
                continue
            }
            a(d[j], f.prototype)
        }
    }
    Object.extend(Element, Element.Methods);
    delete Element.ByTag;
    if (Element.extend.refresh) {
        Element.extend.refresh()
    }
    Element.cache = {}
};
document.viewport = {
    getDimensions: function() {
        return {
            width: this.getWidth(),
            height: this.getHeight()
        }
    },
    getScrollOffsets: function() {
        return Element._returnOffset(window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft, window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop)
    }
};
(function(b) {
    var g = Prototype.Browser,
        e = document,
        c, d = {};

    function a() {
        if (g.WebKit && !e.evaluate) {
            return document
        }
        if (g.Opera && window.parseFloat(window.opera.version()) < 9.5) {
            return document.body
        }
        return document.documentElement
    }

    function f(h) {
        if (!c) {
            c = a()
        }
        d[h] = "client" + h;
        b["get" + h] = function() {
            return c[d[h]]
        };
        return b["get" + h]()
    }
    b.getWidth = f.curry("Width");
    b.getHeight = f.curry("Height")
})(document.viewport);
Element.Storage = {
    UID: 1
};
Element.addMethods({
    getStorage: function(b) {
        if (!(b = $(b))) {
            return
        }
        var a;
        if (b === window) {
            a = 0
        } else {
            if (typeof b._prototypeUID === "undefined") {
                b._prototypeUID = Element.Storage.UID++
            }
            a = b._prototypeUID
        }
        if (!Element.Storage[a]) {
            Element.Storage[a] = $H()
        }
        return Element.Storage[a]
    },
    store: function(b, a, c) {
        if (!(b = $(b))) {
            return
        }
        if (arguments.length === 2) {
            Element.getStorage(b).update(a)
        } else {
            Element.getStorage(b).set(a, c)
        }
        return b
    },
    retrieve: function(c, b, a) {
        if (!(c = $(c))) {
            return
        }
        var e = Element.getStorage(c),
            d = e.get(b);
        if (Object.isUndefined(d)) {
            e.set(b, a);
            d = a
        }
        return d
    },
    clone: function(c, a) {
        if (!(c = $(c))) {
            return
        }
        var e = c.cloneNode(a);
        e._prototypeUID = void 0;
        if (a) {
            var d = Element.select(e, "*"),
                b = d.length;
            while (b--) {
                d[b]._prototypeUID = void 0
            }
        }
        return Element.extend(e)
    },
    purge: function(c) {
        if (!(c = $(c))) {
            return
        }
        var a = Element._purgeElement;
        a(c);
        var d = c.getElementsByTagName("*"),
            b = d.length;
        while (b--) {
            a(d[b])
        }
        return null
    }
});
(function() {
    function h(v) {
        var u = v.match(/^(\d+)%?$/i);
        if (!u) {
            return null
        }
        return (Number(u[1]) / 100)
    }

    function o(F, G, v) {
        var y = null;
        if (Object.isElement(F)) {
            y = F;
            F = y.getStyle(G)
        }
        if (F === null) {
            return null
        }
        if ((/^(?:-)?\d+(\.\d+)?(px)?$/i).test(F)) {
            return window.parseFloat(F)
        }
        var A = F.include("%"),
            w = (v === document.viewport);
        if (/\d/.test(F) && y && y.runtimeStyle && !(A && w)) {
            var u = y.style.left,
                E = y.runtimeStyle.left;
            y.runtimeStyle.left = y.currentStyle.left;
            y.style.left = F || 0;
            F = y.style.pixelLeft;
            y.style.left = u;
            y.runtimeStyle.left = E;
            return F
        }
        if (y && A) {
            v = v || y.parentNode;
            var x = h(F);
            var B = null;
            var z = y.getStyle("position");
            var D = G.include("left") || G.include("right") || G.include("width");
            var C = G.include("top") || G.include("bottom") || G.include("height");
            if (v === document.viewport) {
                if (D) {
                    B = document.viewport.getWidth()
                } else {
                    if (C) {
                        B = document.viewport.getHeight()
                    }
                }
            } else {
                if (D) {
                    B = $(v).measure("width")
                } else {
                    if (C) {
                        B = $(v).measure("height")
                    }
                }
            }
            return (B === null) ? 0 : B * x
        }
        return 0
    }

    function g(u) {
        if (Object.isString(u) && u.endsWith("px")) {
            return u
        }
        return u + "px"
    }

    function j(v) {
        var u = v;
        while (v && v.parentNode) {
            var w = v.getStyle("display");
            if (w === "none") {
                return false
            }
            v = $(v.parentNode)
        }
        return true
    }
    var d = Prototype.K;
    if ("currentStyle" in document.documentElement) {
        d = function(u) {
            if (!u.currentStyle.hasLayout) {
                u.style.zoom = 1
            }
            return u
        }
    }

    function f(u) {
        if (u.include("border")) {
            u = u + "-width"
        }
        return u.camelize()
    }
    Element.Layout = Class.create(Hash, {
        initialize: function($super, v, u) {
            $super();
            this.element = $(v);
            Element.Layout.PROPERTIES.each(function(w) {
                this._set(w, null)
            }, this);
            if (u) {
                this._preComputing = true;
                this._begin();
                Element.Layout.PROPERTIES.each(this._compute, this);
                this._end();
                this._preComputing = false
            }
        },
        _set: function(v, u) {
            return Hash.prototype.set.call(this, v, u)
        },
        set: function(v, u) {
            throw "Properties of Element.Layout are read-only."
        },
        get: function($super, v) {
            var u = $super(v);
            return u === null ? this._compute(v) : u
        },
        _begin: function() {
            if (this._prepared) {
                return
            }
            var y = this.element;
            if (j(y)) {
                this._prepared = true;
                return
            }
            var A = {
                position: y.style.position || "",
                width: y.style.width || "",
                visibility: y.style.visibility || "",
                display: y.style.display || ""
            };
            y.store("prototype_original_styles", A);
            var B = y.getStyle("position"),
                u = y.getStyle("width");
            if (u === "0px" || u === null) {
                y.style.display = "block";
                u = y.getStyle("width")
            }
            var v = (B === "fixed") ? document.viewport : y.parentNode;
            y.setStyle({
                position: "absolute",
                visibility: "hidden",
                display: "block"
            });
            var w = y.getStyle("width");
            var x;
            if (u && (w === u)) {
                x = o(y, "width", v)
            } else {
                if (B === "absolute" || B === "fixed") {
                    x = o(y, "width", v)
                } else {
                    var C = y.parentNode,
                        z = $(C).getLayout();
                    x = z.get("width") - this.get("margin-left") - this.get("border-left") - this.get("padding-left") - this.get("padding-right") - this.get("border-right") - this.get("margin-right")
                }
            }
            y.setStyle({
                width: x + "px"
            });
            this._prepared = true
        },
        _end: function() {
            var v = this.element;
            var u = v.retrieve("prototype_original_styles");
            v.store("prototype_original_styles", null);
            v.setStyle(u);
            this._prepared = false
        },
        _compute: function(v) {
            var u = Element.Layout.COMPUTATIONS;
            if (!(v in u)) {
                throw "Property not found."
            }
            return this._set(v, u[v].call(this, this.element))
        },
        toObject: function() {
            var u = $A(arguments);
            var v = (u.length === 0) ? Element.Layout.PROPERTIES : u.join(" ").split(" ");
            var w = {};
            v.each(function(x) {
                if (!Element.Layout.PROPERTIES.include(x)) {
                    return
                }
                var y = this.get(x);
                if (y != null) {
                    w[x] = y
                }
            }, this);
            return w
        },
        toHash: function() {
            var u = this.toObject.apply(this, arguments);
            return new Hash(u)
        },
        toCSS: function() {
            var u = $A(arguments);
            var w = (u.length === 0) ? Element.Layout.PROPERTIES : u.join(" ").split(" ");
            var v = {};
            w.each(function(x) {
                if (!Element.Layout.PROPERTIES.include(x)) {
                    return
                }
                if (Element.Layout.COMPOSITE_PROPERTIES.include(x)) {
                    return
                }
                var y = this.get(x);
                if (y != null) {
                    v[f(x)] = y + "px"
                }
            }, this);
            return v
        },
        inspect: function() {
            return "#<Element.Layout>"
        }
    });
    Object.extend(Element.Layout, {
        PROPERTIES: $w("height width top left right bottom border-left border-right border-top border-bottom padding-left padding-right padding-top padding-bottom margin-top margin-bottom margin-left margin-right padding-box-width padding-box-height border-box-width border-box-height margin-box-width margin-box-height"),
        COMPOSITE_PROPERTIES: $w("padding-box-width padding-box-height margin-box-width margin-box-height border-box-width border-box-height"),
        COMPUTATIONS: {
            height: function(w) {
                if (!this._preComputing) {
                    this._begin()
                }
                var u = this.get("border-box-height");
                if (u <= 0) {
                    if (!this._preComputing) {
                        this._end()
                    }
                    return 0
                }
                var x = this.get("border-top"),
                    v = this.get("border-bottom");
                var z = this.get("padding-top"),
                    y = this.get("padding-bottom");
                if (!this._preComputing) {
                    this._end()
                }
                return u - x - v - z - y
            },
            width: function(w) {
                if (!this._preComputing) {
                    this._begin()
                }
                var v = this.get("border-box-width");
                if (v <= 0) {
                    if (!this._preComputing) {
                        this._end()
                    }
                    return 0
                }
                var z = this.get("border-left"),
                    u = this.get("border-right");
                var x = this.get("padding-left"),
                    y = this.get("padding-right");
                if (!this._preComputing) {
                    this._end()
                }
                return v - z - u - x - y
            },
            "padding-box-height": function(v) {
                var u = this.get("height"),
                    x = this.get("padding-top"),
                    w = this.get("padding-bottom");
                return u + x + w
            },
            "padding-box-width": function(u) {
                var v = this.get("width"),
                    w = this.get("padding-left"),
                    x = this.get("padding-right");
                return v + w + x
            },
            "border-box-height": function(v) {
                if (!this._preComputing) {
                    this._begin()
                }
                var u = v.offsetHeight;
                if (!this._preComputing) {
                    this._end()
                }
                return u
            },
            "border-box-width": function(u) {
                if (!this._preComputing) {
                    this._begin()
                }
                var v = u.offsetWidth;
                if (!this._preComputing) {
                    this._end()
                }
                return v
            },
            "margin-box-height": function(v) {
                var u = this.get("border-box-height"),
                    w = this.get("margin-top"),
                    x = this.get("margin-bottom");
                if (u <= 0) {
                    return 0
                }
                return u + w + x
            },
            "margin-box-width": function(w) {
                var v = this.get("border-box-width"),
                    x = this.get("margin-left"),
                    u = this.get("margin-right");
                if (v <= 0) {
                    return 0
                }
                return v + x + u
            },
            top: function(u) {
                var v = u.positionedOffset();
                return v.top
            },
            bottom: function(u) {
                var x = u.positionedOffset(),
                    v = u.getOffsetParent(),
                    w = v.measure("height");
                var y = this.get("border-box-height");
                return w - y - x.top
            },
            left: function(u) {
                var v = u.positionedOffset();
                return v.left
            },
            right: function(w) {
                var y = w.positionedOffset(),
                    x = w.getOffsetParent(),
                    u = x.measure("width");
                var v = this.get("border-box-width");
                return u - v - y.left
            },
            "padding-top": function(u) {
                return o(u, "paddingTop")
            },
            "padding-bottom": function(u) {
                return o(u, "paddingBottom")
            },
            "padding-left": function(u) {
                return o(u, "paddingLeft")
            },
            "padding-right": function(u) {
                return o(u, "paddingRight")
            },
            "border-top": function(u) {
                return o(u, "borderTopWidth")
            },
            "border-bottom": function(u) {
                return o(u, "borderBottomWidth")
            },
            "border-left": function(u) {
                return o(u, "borderLeftWidth")
            },
            "border-right": function(u) {
                return o(u, "borderRightWidth")
            },
            "margin-top": function(u) {
                return o(u, "marginTop")
            },
            "margin-bottom": function(u) {
                return o(u, "marginBottom")
            },
            "margin-left": function(u) {
                return o(u, "marginLeft")
            },
            "margin-right": function(u) {
                return o(u, "marginRight")
            }
        }
    });
    if ("getBoundingClientRect" in document.documentElement) {
        Object.extend(Element.Layout.COMPUTATIONS, {
            right: function(v) {
                var w = d(v.getOffsetParent());
                var x = v.getBoundingClientRect(),
                    u = w.getBoundingClientRect();
                return (u.right - x.right).round()
            },
            bottom: function(v) {
                var w = d(v.getOffsetParent());
                var x = v.getBoundingClientRect(),
                    u = w.getBoundingClientRect();
                return (u.bottom - x.bottom).round()
            }
        })
    }
    Element.Offset = Class.create({
        initialize: function(v, u) {
            this.left = v.round();
            this.top = u.round();
            this[0] = this.left;
            this[1] = this.top
        },
        relativeTo: function(u) {
            return new Element.Offset(this.left - u.left, this.top - u.top)
        },
        inspect: function() {
            return "#<Element.Offset left: #{left} top: #{top}>".interpolate(this)
        },
        toString: function() {
            return "[#{left}, #{top}]".interpolate(this)
        },
        toArray: function() {
            return [this.left, this.top]
        }
    });

    function r(v, u) {
        return new Element.Layout(v, u)
    }

    function b(u, v) {
        return $(u).getLayout().get(v)
    }

    function n(v) {
        v = $(v);
        var z = Element.getStyle(v, "display");
        if (z && z !== "none") {
            return {
                width: v.offsetWidth,
                height: v.offsetHeight
            }
        }
        var w = v.style;
        var u = {
            visibility: w.visibility,
            position: w.position,
            display: w.display
        };
        var y = {
            visibility: "hidden",
            display: "block"
        };
        if (u.position !== "fixed") {
            y.position = "absolute"
        }
        Element.setStyle(v, y);
        var x = {
            width: v.offsetWidth,
            height: v.offsetHeight
        };
        Element.setStyle(v, u);
        return x
    }

    function l(u) {
        u = $(u);
        if (e(u) || c(u) || m(u) || k(u)) {
            return $(document.body)
        }
        var v = (Element.getStyle(u, "display") === "inline");
        if (!v && u.offsetParent && Element.visible(u)) {
            return $(u.offsetParent)
        }
        while ((u = u.parentNode) && u !== document.body) {
            if (Element.getStyle(u, "position") !== "static") {
                return k(u) ? $(document.body) : $(u)
            }
        }
        return $(document.body)
    }

    function t(v) {
        v = $(v);
        var u = 0,
            w = 0;
        if (v.parentNode) {
            do {
                u += v.offsetTop || 0;
                w += v.offsetLeft || 0;
                v = v.offsetParent
            } while (v)
        }
        return new Element.Offset(w, u)
    }

    function p(v) {
        v = $(v);
        var w = v.getLayout();
        var u = 0,
            y = 0;
        do {
            u += v.offsetTop || 0;
            y += v.offsetLeft || 0;
            v = v.offsetParent;
            if (v) {
                if (m(v)) {
                    break
                }
                var x = Element.getStyle(v, "position");
                if (x !== "static") {
                    break
                }
            }
        } while (v);
        y -= w.get("margin-left");
        u -= w.get("margin-top");
        return new Element.Offset(y, u)
    }

    function a(v) {
        var u = 0,
            w = 0;
        do {
            u += v.scrollTop || 0;
            w += v.scrollLeft || 0;
            v = v.parentNode
        } while (v);
        return new Element.Offset(w, u)
    }

    function s(y) {
        v = $(v);
        var u = 0,
            x = 0,
            w = document.body;
        var v = y;
        do {
            u += v.offsetTop || 0;
            x += v.offsetLeft || 0;
            if (v.offsetParent == w && Element.getStyle(v, "position") == "absolute") {
                break
            }
        } while (v = v.offsetParent);
        v = y;
        do {
            if (v != w) {
                u -= v.scrollTop || 0;
                x -= v.scrollLeft || 0
            }
        } while (v = v.parentNode);
        return new Element.Offset(x, u)
    }

    function q(u) {
        u = $(u);
        if (Element.getStyle(u, "position") === "absolute") {
            return u
        }
        var y = l(u);
        var x = u.viewportOffset(),
            v = y.viewportOffset();
        var z = x.relativeTo(v);
        var w = u.getLayout();
        u.store("prototype_absolutize_original_styles", {
            left: u.getStyle("left"),
            top: u.getStyle("top"),
            width: u.getStyle("width"),
            height: u.getStyle("height")
        });
        u.setStyle({
            position: "absolute",
            top: z.top + "px",
            left: z.left + "px",
            width: w.get("width") + "px",
            height: w.get("height") + "px"
        });
        return u
    }

    function i(v) {
        v = $(v);
        if (Element.getStyle(v, "position") === "relative") {
            return v
        }
        var u = v.retrieve("prototype_absolutize_original_styles");
        if (u) {
            v.setStyle(u)
        }
        return v
    }
    if (Prototype.Browser.IE) {
        l = l.wrap(function(w, v) {
            v = $(v);
            if (e(v) || c(v) || m(v) || k(v)) {
                return $(document.body)
            }
            var u = v.getStyle("position");
            if (u !== "static") {
                return w(v)
            }
            v.setStyle({
                position: "relative"
            });
            var x = w(v);
            v.setStyle({
                position: u
            });
            return x
        });
        p = p.wrap(function(x, v) {
            v = $(v);
            if (!v.parentNode) {
                return new Element.Offset(0, 0)
            }
            var u = v.getStyle("position");
            if (u !== "static") {
                return x(v)
            }
            var w = v.getOffsetParent();
            if (w && w.getStyle("position") === "fixed") {
                d(w)
            }
            v.setStyle({
                position: "relative"
            });
            var y = x(v);
            v.setStyle({
                position: u
            });
            return y
        })
    } else {
        if (Prototype.Browser.Webkit) {
            t = function(v) {
                v = $(v);
                var u = 0,
                    w = 0;
                do {
                    u += v.offsetTop || 0;
                    w += v.offsetLeft || 0;
                    if (v.offsetParent == document.body) {
                        if (Element.getStyle(v, "position") == "absolute") {
                            break
                        }
                    }
                    v = v.offsetParent
                } while (v);
                return new Element.Offset(w, u)
            }
        }
    }
    Element.addMethods({
        getLayout: r,
        measure: b,
        getDimensions: n,
        getOffsetParent: l,
        cumulativeOffset: t,
        positionedOffset: p,
        cumulativeScrollOffset: a,
        viewportOffset: s,
        absolutize: q,
        relativize: i
    });

    function m(u) {
        return u.nodeName.toUpperCase() === "BODY"
    }

    function k(u) {
        return u.nodeName.toUpperCase() === "HTML"
    }

    function e(u) {
        return u.nodeType === Node.DOCUMENT_NODE
    }

    function c(u) {
        return u !== document.body && !Element.descendantOf(u, document.body)
    }
    if ("getBoundingClientRect" in document.documentElement) {
        Element.addMethods({
            viewportOffset: function(u) {
                u = $(u);
                if (c(u)) {
                    return new Element.Offset(0, 0)
                }
                var v = u.getBoundingClientRect(),
                    w = document.documentElement;
                return new Element.Offset(v.left - w.clientLeft, v.top - w.clientTop)
            }
        })
    }
})();
window.$$ = function() {
    var a = $A(arguments).join(", ");
    return Prototype.Selector.select(a, document)
};
Prototype.Selector = (function() {
    function a() {
        throw new Error('Method "Prototype.Selector.select" must be defined.')
    }

    function c() {
        throw new Error('Method "Prototype.Selector.match" must be defined.')
    }

    function d(l, m, h) {
        h = h || 0;
        var g = Prototype.Selector.match,
            k = l.length,
            f = 0,
            j;
        for (j = 0; j < k; j++) {
            if (g(l[j], m) && h == f++) {
                return Element.extend(l[j])
            }
        }
    }

    function e(h) {
        for (var f = 0, g = h.length; f < g; f++) {
            Element.extend(h[f])
        }
        return h
    }
    var b = Prototype.K;
    return {
        select: a,
        match: c,
        find: d,
        extendElements: (Element.extend === b) ? b : e,
        extendElement: Element.extend
    }
})();
Prototype._original_property = window.Sizzle;
/*!
 * Sizzle CSS Selector Engine - v1.0
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function() {
    var q = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
        j = 0,
        d = Object.prototype.toString,
        o = false,
        i = true;
    [0, 0].sort(function() {
        i = false;
        return 0
    });
    var b = function(E, u, B, w) {
        B = B || [];
        var e = u = u || document;
        if (u.nodeType !== 1 && u.nodeType !== 9) {
            return []
        }
        if (!E || typeof E !== "string") {
            return B
        }
        var C = [],
            D, z, I, H, A, t, s = true,
            x = p(u),
            G = E;
        while ((q.exec(""), D = q.exec(G)) !== null) {
            G = D[3];
            C.push(D[1]);
            if (D[2]) {
                t = D[3];
                break
            }
        }
        if (C.length > 1 && k.exec(E)) {
            if (C.length === 2 && f.relative[C[0]]) {
                z = g(C[0] + C[1], u)
            } else {
                z = f.relative[C[0]] ? [u] : b(C.shift(), u);
                while (C.length) {
                    E = C.shift();
                    if (f.relative[E]) {
                        E += C.shift()
                    }
                    z = g(E, z)
                }
            }
        } else {
            if (!w && C.length > 1 && u.nodeType === 9 && !x && f.match.ID.test(C[0]) && !f.match.ID.test(C[C.length - 1])) {
                var J = b.find(C.shift(), u, x);
                u = J.expr ? b.filter(J.expr, J.set)[0] : J.set[0]
            }
            if (u) {
                var J = w ? {
                    expr: C.pop(),
                    set: a(w)
                } : b.find(C.pop(), C.length === 1 && (C[0] === "~" || C[0] === "+") && u.parentNode ? u.parentNode : u, x);
                z = J.expr ? b.filter(J.expr, J.set) : J.set;
                if (C.length > 0) {
                    I = a(z)
                } else {
                    s = false
                }
                while (C.length) {
                    var v = C.pop(),
                        y = v;
                    if (!f.relative[v]) {
                        v = ""
                    } else {
                        y = C.pop()
                    }
                    if (y == null) {
                        y = u
                    }
                    f.relative[v](I, y, x)
                }
            } else {
                I = C = []
            }
        }
        if (!I) {
            I = z
        }
        if (!I) {
            throw "Syntax error, unrecognized expression: " + (v || E)
        }
        if (d.call(I) === "[object Array]") {
            if (!s) {
                B.push.apply(B, I)
            } else {
                if (u && u.nodeType === 1) {
                    for (var F = 0; I[F] != null; F++) {
                        if (I[F] && (I[F] === true || I[F].nodeType === 1 && h(u, I[F]))) {
                            B.push(z[F])
                        }
                    }
                } else {
                    for (var F = 0; I[F] != null; F++) {
                        if (I[F] && I[F].nodeType === 1) {
                            B.push(z[F])
                        }
                    }
                }
            }
        } else {
            a(I, B)
        }
        if (t) {
            b(t, e, B, w);
            b.uniqueSort(B)
        }
        return B
    };
    b.uniqueSort = function(s) {
        if (c) {
            o = i;
            s.sort(c);
            if (o) {
                for (var e = 1; e < s.length; e++) {
                    if (s[e] === s[e - 1]) {
                        s.splice(e--, 1)
                    }
                }
            }
        }
        return s
    };
    b.matches = function(e, s) {
        return b(e, null, null, s)
    };
    b.find = function(y, e, z) {
        var x, v;
        if (!y) {
            return []
        }
        for (var u = 0, t = f.order.length; u < t; u++) {
            var w = f.order[u],
                v;
            if ((v = f.leftMatch[w].exec(y))) {
                var s = v[1];
                v.splice(1, 1);
                if (s.substr(s.length - 1) !== "\\") {
                    v[1] = (v[1] || "").replace(/\\/g, "");
                    x = f.find[w](v, e, z);
                    if (x != null) {
                        y = y.replace(f.match[w], "");
                        break
                    }
                }
            }
        }
        if (!x) {
            x = e.getElementsByTagName("*")
        }
        return {
            set: x,
            expr: y
        }
    };
    b.filter = function(B, A, E, u) {
        var t = B,
            G = [],
            y = A,
            w, e, x = A && A[0] && p(A[0]);
        while (B && A.length) {
            for (var z in f.filter) {
                if ((w = f.match[z].exec(B)) != null) {
                    var s = f.filter[z],
                        F, D;
                    e = false;
                    if (y == G) {
                        G = []
                    }
                    if (f.preFilter[z]) {
                        w = f.preFilter[z](w, y, E, G, u, x);
                        if (!w) {
                            e = F = true
                        } else {
                            if (w === true) {
                                continue
                            }
                        }
                    }
                    if (w) {
                        for (var v = 0;
                            (D = y[v]) != null; v++) {
                            if (D) {
                                F = s(D, w, v, y);
                                var C = u ^ !!F;
                                if (E && F != null) {
                                    if (C) {
                                        e = true
                                    } else {
                                        y[v] = false
                                    }
                                } else {
                                    if (C) {
                                        G.push(D);
                                        e = true
                                    }
                                }
                            }
                        }
                    }
                    if (F !== undefined) {
                        if (!E) {
                            y = G
                        }
                        B = B.replace(f.match[z], "");
                        if (!e) {
                            return []
                        }
                        break
                    }
                }
            }
            if (B == t) {
                if (e == null) {
                    throw "Syntax error, unrecognized expression: " + B
                } else {
                    break
                }
            }
            t = B
        }
        return y
    };
    var f = b.selectors = {
        order: ["ID", "NAME", "TAG"],
        match: {
            ID: /#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
            CLASS: /\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
            NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,
            ATTR: /\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
            TAG: /^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,
            CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,
            POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,
            PSEUDO: /:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/
        },
        leftMatch: {},
        attrMap: {
            "class": "className",
            "for": "htmlFor"
        },
        attrHandle: {
            href: function(e) {
                return e.getAttribute("href")
            }
        },
        relative: {
            "+": function(y, e, x) {
                var v = typeof e === "string",
                    z = v && !/\W/.test(e),
                    w = v && !z;
                if (z && !x) {
                    e = e.toUpperCase()
                }
                for (var u = 0, t = y.length, s; u < t; u++) {
                    if ((s = y[u])) {
                        while ((s = s.previousSibling) && s.nodeType !== 1) {}
                        y[u] = w || s && s.nodeName === e ? s || false : s === e
                    }
                }
                if (w) {
                    b.filter(e, y, true)
                }
            },
            ">": function(x, s, y) {
                var v = typeof s === "string";
                if (v && !/\W/.test(s)) {
                    s = y ? s : s.toUpperCase();
                    for (var t = 0, e = x.length; t < e; t++) {
                        var w = x[t];
                        if (w) {
                            var u = w.parentNode;
                            x[t] = u.nodeName === s ? u : false
                        }
                    }
                } else {
                    for (var t = 0, e = x.length; t < e; t++) {
                        var w = x[t];
                        if (w) {
                            x[t] = v ? w.parentNode : w.parentNode === s
                        }
                    }
                    if (v) {
                        b.filter(s, x, true)
                    }
                }
            },
            "": function(u, s, w) {
                var t = j++,
                    e = r;
                if (!/\W/.test(s)) {
                    var v = s = w ? s : s.toUpperCase();
                    e = n
                }
                e("parentNode", s, t, u, v, w)
            },
            "~": function(u, s, w) {
                var t = j++,
                    e = r;
                if (typeof s === "string" && !/\W/.test(s)) {
                    var v = s = w ? s : s.toUpperCase();
                    e = n
                }
                e("previousSibling", s, t, u, v, w)
            }
        },
        find: {
            ID: function(s, t, u) {
                if (typeof t.getElementById !== "undefined" && !u) {
                    var e = t.getElementById(s[1]);
                    return e ? [e] : []
                }
            },
            NAME: function(t, w, x) {
                if (typeof w.getElementsByName !== "undefined") {
                    var s = [],
                        v = w.getElementsByName(t[1]);
                    for (var u = 0, e = v.length; u < e; u++) {
                        if (v[u].getAttribute("name") === t[1]) {
                            s.push(v[u])
                        }
                    }
                    return s.length === 0 ? null : s
                }
            },
            TAG: function(e, s) {
                return s.getElementsByTagName(e[1])
            }
        },
        preFilter: {
            CLASS: function(u, s, t, e, x, y) {
                u = " " + u[1].replace(/\\/g, "") + " ";
                if (y) {
                    return u
                }
                for (var v = 0, w;
                    (w = s[v]) != null; v++) {
                    if (w) {
                        if (x ^ (w.className && (" " + w.className + " ").indexOf(u) >= 0)) {
                            if (!t) {
                                e.push(w)
                            }
                        } else {
                            if (t) {
                                s[v] = false
                            }
                        }
                    }
                }
                return false
            },
            ID: function(e) {
                return e[1].replace(/\\/g, "")
            },
            TAG: function(s, e) {
                for (var t = 0; e[t] === false; t++) {}
                return e[t] && p(e[t]) ? s[1] : s[1].toUpperCase()
            },
            CHILD: function(e) {
                if (e[1] == "nth") {
                    var s = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(e[2] == "even" && "2n" || e[2] == "odd" && "2n+1" || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
                    e[2] = (s[1] + (s[2] || 1)) - 0;
                    e[3] = s[3] - 0
                }
                e[0] = j++;
                return e
            },
            ATTR: function(v, s, t, e, w, x) {
                var u = v[1].replace(/\\/g, "");
                if (!x && f.attrMap[u]) {
                    v[1] = f.attrMap[u]
                }
                if (v[2] === "~=") {
                    v[4] = " " + v[4] + " "
                }
                return v
            },
            PSEUDO: function(v, s, t, e, w) {
                if (v[1] === "not") {
                    if ((q.exec(v[3]) || "").length > 1 || /^\w/.test(v[3])) {
                        v[3] = b(v[3], null, null, s)
                    } else {
                        var u = b.filter(v[3], s, t, true ^ w);
                        if (!t) {
                            e.push.apply(e, u)
                        }
                        return false
                    }
                } else {
                    if (f.match.POS.test(v[0]) || f.match.CHILD.test(v[0])) {
                        return true
                    }
                }
                return v
            },
            POS: function(e) {
                e.unshift(true);
                return e
            }
        },
        filters: {
            enabled: function(e) {
                return e.disabled === false && e.type !== "hidden"
            },
            disabled: function(e) {
                return e.disabled === true
            },
            checked: function(e) {
                return e.checked === true
            },
            selected: function(e) {
                e.parentNode.selectedIndex;
                return e.selected === true
            },
            parent: function(e) {
                return !!e.firstChild
            },
            empty: function(e) {
                return !e.firstChild
            },
            has: function(t, s, e) {
                return !!b(e[3], t).length
            },
            header: function(e) {
                return /h\d/i.test(e.nodeName)
            },
            text: function(e) {
                return "text" === e.type
            },
            radio: function(e) {
                return "radio" === e.type
            },
            checkbox: function(e) {
                return "checkbox" === e.type
            },
            file: function(e) {
                return "file" === e.type
            },
            password: function(e) {
                return "password" === e.type
            },
            submit: function(e) {
                return "submit" === e.type
            },
            image: function(e) {
                return "image" === e.type
            },
            reset: function(e) {
                return "reset" === e.type
            },
            button: function(e) {
                return "button" === e.type || e.nodeName.toUpperCase() === "BUTTON"
            },
            input: function(e) {
                return /input|select|textarea|button/i.test(e.nodeName)
            }
        },
        setFilters: {
            first: function(s, e) {
                return e === 0
            },
            last: function(t, s, e, u) {
                return s === u.length - 1
            },
            even: function(s, e) {
                return e % 2 === 0
            },
            odd: function(s, e) {
                return e % 2 === 1
            },
            lt: function(t, s, e) {
                return s < e[3] - 0
            },
            gt: function(t, s, e) {
                return s > e[3] - 0
            },
            nth: function(t, s, e) {
                return e[3] - 0 == s
            },
            eq: function(t, s, e) {
                return e[3] - 0 == s
            }
        },
        filter: {
            PSEUDO: function(x, t, u, y) {
                var s = t[1],
                    v = f.filters[s];
                if (v) {
                    return v(x, u, t, y)
                } else {
                    if (s === "contains") {
                        return (x.textContent || x.innerText || "").indexOf(t[3]) >= 0
                    } else {
                        if (s === "not") {
                            var w = t[3];
                            for (var u = 0, e = w.length; u < e; u++) {
                                if (w[u] === x) {
                                    return false
                                }
                            }
                            return true
                        }
                    }
                }
            },
            CHILD: function(e, u) {
                var x = u[1],
                    s = e;
                switch (x) {
                    case "only":
                    case "first":
                        while ((s = s.previousSibling)) {
                            if (s.nodeType === 1) {
                                return false
                            }
                        }
                        if (x == "first") {
                            return true
                        }
                        s = e;
                    case "last":
                        while ((s = s.nextSibling)) {
                            if (s.nodeType === 1) {
                                return false
                            }
                        }
                        return true;
                    case "nth":
                        var t = u[2],
                            A = u[3];
                        if (t == 1 && A == 0) {
                            return true
                        }
                        var w = u[0],
                            z = e.parentNode;
                        if (z && (z.sizcache !== w || !e.nodeIndex)) {
                            var v = 0;
                            for (s = z.firstChild; s; s = s.nextSibling) {
                                if (s.nodeType === 1) {
                                    s.nodeIndex = ++v
                                }
                            }
                            z.sizcache = w
                        }
                        var y = e.nodeIndex - A;
                        if (t == 0) {
                            return y == 0
                        } else {
                            return (y % t == 0 && y / t >= 0)
                        }
                }
            },
            ID: function(s, e) {
                return s.nodeType === 1 && s.getAttribute("id") === e
            },
            TAG: function(s, e) {
                return (e === "*" && s.nodeType === 1) || s.nodeName === e
            },
            CLASS: function(s, e) {
                return (" " + (s.className || s.getAttribute("class")) + " ").indexOf(e) > -1
            },
            ATTR: function(w, u) {
                var t = u[1],
                    e = f.attrHandle[t] ? f.attrHandle[t](w) : w[t] != null ? w[t] : w.getAttribute(t),
                    x = e + "",
                    v = u[2],
                    s = u[4];
                return e == null ? v === "!=" : v === "=" ? x === s : v === "*=" ? x.indexOf(s) >= 0 : v === "~=" ? (" " + x + " ").indexOf(s) >= 0 : !s ? x && e !== false : v === "!=" ? x != s : v === "^=" ? x.indexOf(s) === 0 : v === "$=" ? x.substr(x.length - s.length) === s : v === "|=" ? x === s || x.substr(0, s.length + 1) === s + "-" : false
            },
            POS: function(v, s, t, w) {
                var e = s[2],
                    u = f.setFilters[e];
                if (u) {
                    return u(v, t, s, w)
                }
            }
        }
    };
    var k = f.match.POS;
    for (var m in f.match) {
        f.match[m] = new RegExp(f.match[m].source + /(?![^\[]*\])(?![^\(]*\))/.source);
        f.leftMatch[m] = new RegExp(/(^(?:.|\r|\n)*?)/.source + f.match[m].source)
    }
    var a = function(s, e) {
        s = Array.prototype.slice.call(s, 0);
        if (e) {
            e.push.apply(e, s);
            return e
        }
        return s
    };
    try {
        Array.prototype.slice.call(document.documentElement.childNodes, 0)
    } catch (l) {
        a = function(v, u) {
            var s = u || [];
            if (d.call(v) === "[object Array]") {
                Array.prototype.push.apply(s, v)
            } else {
                if (typeof v.length === "number") {
                    for (var t = 0, e = v.length; t < e; t++) {
                        s.push(v[t])
                    }
                } else {
                    for (var t = 0; v[t]; t++) {
                        s.push(v[t])
                    }
                }
            }
            return s
        }
    }
    var c;
    if (document.documentElement.compareDocumentPosition) {
        c = function(s, e) {
            if (!s.compareDocumentPosition || !e.compareDocumentPosition) {
                if (s == e) {
                    o = true
                }
                return 0
            }
            var t = s.compareDocumentPosition(e) & 4 ? -1 : s === e ? 0 : 1;
            if (t === 0) {
                o = true
            }
            return t
        }
    } else {
        if ("sourceIndex" in document.documentElement) {
            c = function(s, e) {
                if (!s.sourceIndex || !e.sourceIndex) {
                    if (s == e) {
                        o = true
                    }
                    return 0
                }
                var t = s.sourceIndex - e.sourceIndex;
                if (t === 0) {
                    o = true
                }
                return t
            }
        } else {
            if (document.createRange) {
                c = function(u, s) {
                    if (!u.ownerDocument || !s.ownerDocument) {
                        if (u == s) {
                            o = true
                        }
                        return 0
                    }
                    var t = u.ownerDocument.createRange(),
                        e = s.ownerDocument.createRange();
                    t.setStart(u, 0);
                    t.setEnd(u, 0);
                    e.setStart(s, 0);
                    e.setEnd(s, 0);
                    var v = t.compareBoundaryPoints(Range.START_TO_END, e);
                    if (v === 0) {
                        o = true
                    }
                    return v
                }
            }
        }
    }(function() {
        var s = document.createElement("div"),
            t = "script" + (new Date).getTime();
        s.innerHTML = "<a name='" + t + "'/>";
        var e = document.documentElement;
        e.insertBefore(s, e.firstChild);
        if (!!document.getElementById(t)) {
            f.find.ID = function(v, w, x) {
                if (typeof w.getElementById !== "undefined" && !x) {
                    var u = w.getElementById(v[1]);
                    return u ? u.id === v[1] || typeof u.getAttributeNode !== "undefined" && u.getAttributeNode("id").nodeValue === v[1] ? [u] : undefined : []
                }
            };
            f.filter.ID = function(w, u) {
                var v = typeof w.getAttributeNode !== "undefined" && w.getAttributeNode("id");
                return w.nodeType === 1 && v && v.nodeValue === u
            }
        }
        e.removeChild(s);
        e = s = null
    })();
    (function() {
        var e = document.createElement("div");
        e.appendChild(document.createComment(""));
        if (e.getElementsByTagName("*").length > 0) {
            f.find.TAG = function(s, w) {
                var v = w.getElementsByTagName(s[1]);
                if (s[1] === "*") {
                    var u = [];
                    for (var t = 0; v[t]; t++) {
                        if (v[t].nodeType === 1) {
                            u.push(v[t])
                        }
                    }
                    v = u
                }
                return v
            }
        }
        e.innerHTML = "<a href='#'></a>";
        if (e.firstChild && typeof e.firstChild.getAttribute !== "undefined" && e.firstChild.getAttribute("href") !== "#") {
            f.attrHandle.href = function(s) {
                return s.getAttribute("href", 2)
            }
        }
        e = null
    })();
    if (document.querySelectorAll) {
        (function() {
            var e = b,
                t = document.createElement("div");
            t.innerHTML = "<p class='TEST'></p>";
            if (t.querySelectorAll && t.querySelectorAll(".TEST").length === 0) {
                return
            }
            b = function(x, w, u, v) {
                w = w || document;
                if (!v && w.nodeType === 9 && !p(w)) {
                    try {
                        return a(w.querySelectorAll(x), u)
                    } catch (y) {}
                }
                return e(x, w, u, v)
            };
            for (var s in e) {
                b[s] = e[s]
            }
            t = null
        })()
    }
    if (document.getElementsByClassName && document.documentElement.getElementsByClassName) {
        (function() {
            var e = document.createElement("div");
            e.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (e.getElementsByClassName("e").length === 0) {
                return
            }
            e.lastChild.className = "e";
            if (e.getElementsByClassName("e").length === 1) {
                return
            }
            f.order.splice(1, 0, "CLASS");
            f.find.CLASS = function(s, t, u) {
                if (typeof t.getElementsByClassName !== "undefined" && !u) {
                    return t.getElementsByClassName(s[1])
                }
            };
            e = null
        })()
    }

    function n(s, x, w, B, y, A) {
        var z = s == "previousSibling" && !A;
        for (var u = 0, t = B.length; u < t; u++) {
            var e = B[u];
            if (e) {
                if (z && e.nodeType === 1) {
                    e.sizcache = w;
                    e.sizset = u
                }
                e = e[s];
                var v = false;
                while (e) {
                    if (e.sizcache === w) {
                        v = B[e.sizset];
                        break
                    }
                    if (e.nodeType === 1 && !A) {
                        e.sizcache = w;
                        e.sizset = u
                    }
                    if (e.nodeName === x) {
                        v = e;
                        break
                    }
                    e = e[s]
                }
                B[u] = v
            }
        }
    }

    function r(s, x, w, B, y, A) {
        var z = s == "previousSibling" && !A;
        for (var u = 0, t = B.length; u < t; u++) {
            var e = B[u];
            if (e) {
                if (z && e.nodeType === 1) {
                    e.sizcache = w;
                    e.sizset = u
                }
                e = e[s];
                var v = false;
                while (e) {
                    if (e.sizcache === w) {
                        v = B[e.sizset];
                        break
                    }
                    if (e.nodeType === 1) {
                        if (!A) {
                            e.sizcache = w;
                            e.sizset = u
                        }
                        if (typeof x !== "string") {
                            if (e === x) {
                                v = true;
                                break
                            }
                        } else {
                            if (b.filter(x, [e]).length > 0) {
                                v = e;
                                break
                            }
                        }
                    }
                    e = e[s]
                }
                B[u] = v
            }
        }
    }
    var h = document.compareDocumentPosition ? function(s, e) {
        return s.compareDocumentPosition(e) & 16
    } : function(s, e) {
        return s !== e && (s.contains ? s.contains(e) : true)
    };
    var p = function(e) {
        return e.nodeType === 9 && e.documentElement.nodeName !== "HTML" || !!e.ownerDocument && e.ownerDocument.documentElement.nodeName !== "HTML"
    };
    var g = function(e, y) {
        var u = [],
            v = "",
            w, t = y.nodeType ? [y] : y;
        while ((w = f.match.PSEUDO.exec(e))) {
            v += w[0];
            e = e.replace(f.match.PSEUDO, "")
        }
        e = f.relative[e] ? e + "*" : e;
        for (var x = 0, s = t.length; x < s; x++) {
            b(e, t[x], u)
        }
        return b.filter(v, u)
    };
    window.Sizzle = b
})();
(function(c) {
    var d = Prototype.Selector.extendElements;

    function a(e, f) {
        return d(c(e, f || document))
    }

    function b(f, e) {
        return c.matches(e, [f]).length == 1
    }
    Prototype.Selector.engine = c;
    Prototype.Selector.select = a;
    Prototype.Selector.match = b
})(Sizzle);
window.Sizzle = Prototype._original_property;
delete Prototype._original_property;
var Form = {
    reset: function(a) {
        a = $(a);
        a.reset();
        return a
    },
    serializeElements: function(h, d) {
        if (typeof d != "object") {
            d = {
                hash: !!d
            }
        } else {
            if (Object.isUndefined(d.hash)) {
                d.hash = true
            }
        }
        var e, g, a = false,
            f = d.submit,
            b, c;
        if (d.hash) {
            c = {};
            b = function(i, j, k) {
                if (j in i) {
                    if (!Object.isArray(i[j])) {
                        i[j] = [i[j]]
                    }
                    i[j].push(k)
                } else {
                    i[j] = k
                }
                return i
            }
        } else {
            c = "";
            b = function(i, j, k) {
                return i + (i ? "&" : "") + encodeURIComponent(j) + "=" + encodeURIComponent(k)
            }
        }
        return h.inject(c, function(i, j) {
            if (!j.disabled && j.name) {
                e = j.name;
                g = $(j).getValue();
                if (g != null && j.type != "file" && (j.type != "submit" || (!a && f !== false && (!f || e == f) && (a = true)))) {
                    i = b(i, e, g)
                }
            }
            return i
        })
    }
};
Form.Methods = {
    serialize: function(b, a) {
        return Form.serializeElements(Form.getElements(b), a)
    },
    getElements: function(e) {
        var f = $(e).getElementsByTagName("*"),
            d, a = [],
            c = Form.Element.Serializers;
        for (var b = 0; d = f[b]; b++) {
            a.push(d)
        }
        return a.inject([], function(g, h) {
            if (c[h.tagName.toLowerCase()]) {
                g.push(Element.extend(h))
            }
            return g
        })
    },
    getInputs: function(g, c, d) {
        g = $(g);
        var a = g.getElementsByTagName("input");
        if (!c && !d) {
            return $A(a).map(Element.extend)
        }
        for (var e = 0, h = [], f = a.length; e < f; e++) {
            var b = a[e];
            if ((c && b.type != c) || (d && b.name != d)) {
                continue
            }
            h.push(Element.extend(b))
        }
        return h
    },
    disable: function(a) {
        a = $(a);
        Form.getElements(a).invoke("disable");
        return a
    },
    enable: function(a) {
        a = $(a);
        Form.getElements(a).invoke("enable");
        return a
    },
    findFirstElement: function(b) {
        var c = $(b).getElements().findAll(function(d) {
            return "hidden" != d.type && !d.disabled
        });
        var a = c.findAll(function(d) {
            return d.hasAttribute("tabIndex") && d.tabIndex >= 0
        }).sortBy(function(d) {
            return d.tabIndex
        }).first();
        return a ? a : c.find(function(d) {
            return /^(?:input|select|textarea)$/i.test(d.tagName)
        })
    },
    focusFirstElement: function(b) {
        b = $(b);
        var a = b.findFirstElement();
        if (a) {
            a.activate()
        }
        return b
    },
    request: function(b, a) {
        b = $(b), a = Object.clone(a || {});
        var d = a.parameters,
            c = b.readAttribute("action") || "";
        if (c.blank()) {
            c = window.location.href
        }
        a.parameters = b.serialize(true);
        if (d) {
            if (Object.isString(d)) {
                d = d.toQueryParams()
            }
            Object.extend(a.parameters, d)
        }
        if (b.hasAttribute("method") && !a.method) {
            a.method = b.method
        }
        return new Ajax.Request(c, a)
    }
};
Form.Element = {
    focus: function(a) {
        $(a).focus();
        return a
    },
    select: function(a) {
        $(a).select();
        return a
    }
};
Form.Element.Methods = {
    serialize: function(a) {
        a = $(a);
        if (!a.disabled && a.name) {
            var b = a.getValue();
            if (b != undefined) {
                var c = {};
                c[a.name] = b;
                return Object.toQueryString(c)
            }
        }
        return ""
    },
    getValue: function(a) {
        a = $(a);
        var b = a.tagName.toLowerCase();
        return Form.Element.Serializers[b](a)
    },
    setValue: function(a, b) {
        a = $(a);
        var c = a.tagName.toLowerCase();
        Form.Element.Serializers[c](a, b);
        return a
    },
    clear: function(a) {
        $(a).value = "";
        return a
    },
    present: function(a) {
        return $(a).value != ""
    },
    activate: function(a) {
        a = $(a);
        try {
            a.focus();
            if (a.select && (a.tagName.toLowerCase() != "input" || !(/^(?:button|reset|submit)$/i.test(a.type)))) {
                a.select()
            }
        } catch (b) {}
        return a
    },
    disable: function(a) {
        a = $(a);
        a.disabled = true;
        return a
    },
    enable: function(a) {
        a = $(a);
        a.disabled = false;
        return a
    }
};
var Field = Form.Element;
var $F = Form.Element.Methods.getValue;
Form.Element.Serializers = (function() {
    function b(h, i) {
        switch (h.type.toLowerCase()) {
            case "checkbox":
            case "radio":
                return f(h, i);
            default:
                return e(h, i)
        }
    }

    function f(h, i) {
        if (Object.isUndefined(i)) {
            return h.checked ? h.value : null
        } else {
            h.checked = !!i
        }
    }

    function e(h, i) {
        if (Object.isUndefined(i)) {
            return h.value
        } else {
            h.value = i
        }
    }

    function a(k, n) {
        if (Object.isUndefined(n)) {
            return (k.type === "select-one" ? c : d)(k)
        }
        var j, l, o = !Object.isArray(n);
        for (var h = 0, m = k.length; h < m; h++) {
            j = k.options[h];
            l = this.optionValue(j);
            if (o) {
                if (l == n) {
                    j.selected = true;
                    return
                }
            } else {
                j.selected = n.include(l)
            }
        }
    }

    function c(i) {
        var h = i.selectedIndex;
        return h >= 0 ? g(i.options[h]) : null
    }

    function d(l) {
        var h, m = l.length;
        if (!m) {
            return null
        }
        for (var k = 0, h = []; k < m; k++) {
            var j = l.options[k];
            if (j.selected) {
                h.push(g(j))
            }
        }
        return h
    }

    function g(h) {
        return Element.hasAttribute(h, "value") ? h.value : h.text
    }
    return {
        input: b,
        inputSelector: f,
        textarea: e,
        select: a,
        selectOne: c,
        selectMany: d,
        optionValue: g,
        button: e
    }
})();
Abstract.TimedObserver = Class.create(PeriodicalExecuter, {
    initialize: function($super, a, b, c) {
        $super(c, b);
        this.element = $(a);
        this.lastValue = this.getValue()
    },
    execute: function() {
        var a = this.getValue();
        if (Object.isString(this.lastValue) && Object.isString(a) ? this.lastValue != a : String(this.lastValue) != String(a)) {
            this.callback(this.element, a);
            this.lastValue = a
        }
    }
});
Form.Element.Observer = Class.create(Abstract.TimedObserver, {
    getValue: function() {
        return Form.Element.getValue(this.element)
    }
});
Form.Observer = Class.create(Abstract.TimedObserver, {
    getValue: function() {
        return Form.serialize(this.element)
    }
});
Abstract.EventObserver = Class.create({
    initialize: function(a, b) {
        this.element = $(a);
        this.callback = b;
        this.lastValue = this.getValue();
        if (this.element.tagName.toLowerCase() == "form") {
            this.registerFormCallbacks()
        } else {
            this.registerCallback(this.element)
        }
    },
    onElementEvent: function() {
        var a = this.getValue();
        if (this.lastValue != a) {
            this.callback(this.element, a);
            this.lastValue = a
        }
    },
    registerFormCallbacks: function() {
        Form.getElements(this.element).each(this.registerCallback, this)
    },
    registerCallback: function(a) {
        if (a.type) {
            switch (a.type.toLowerCase()) {
                case "checkbox":
                case "radio":
                    Event.observe(a, "click", this.onElementEvent.bind(this));
                    break;
                default:
                    Event.observe(a, "change", this.onElementEvent.bind(this));
                    break
            }
        }
    }
});
Form.Element.EventObserver = Class.create(Abstract.EventObserver, {
    getValue: function() {
        return Form.Element.getValue(this.element)
    }
});
Form.EventObserver = Class.create(Abstract.EventObserver, {
    getValue: function() {
        return Form.serialize(this.element)
    }
});
(function() {
    var C = {
        KEY_BACKSPACE: 8,
        KEY_TAB: 9,
        KEY_RETURN: 13,
        KEY_ESC: 27,
        KEY_LEFT: 37,
        KEY_UP: 38,
        KEY_RIGHT: 39,
        KEY_DOWN: 40,
        KEY_DELETE: 46,
        KEY_HOME: 36,
        KEY_END: 35,
        KEY_PAGEUP: 33,
        KEY_PAGEDOWN: 34,
        KEY_INSERT: 45,
        cache: {}
    };
    var f = document.documentElement;
    var D = "onmouseenter" in f && "onmouseleave" in f;
    var a = function(E) {
        return false
    };
    if (window.attachEvent) {
        if (window.addEventListener) {
            a = function(E) {
                return !(E instanceof window.Event)
            }
        } else {
            a = function(E) {
                return true
            }
        }
    }
    var r;

    function A(F, E) {
        return F.which ? (F.which === E + 1) : (F.button === E)
    }
    var o = {
        0: 1,
        1: 4,
        2: 2
    };

    function y(F, E) {
        return F.button === o[E]
    }

    function B(F, E) {
        switch (E) {
            case 0:
                return F.which == 1 && !F.metaKey;
            case 1:
                return F.which == 2 || (F.which == 1 && F.metaKey);
            case 2:
                return F.which == 3;
            default:
                return false
        }
    }
    if (window.attachEvent) {
        if (!window.addEventListener) {
            r = y
        } else {
            r = function(F, E) {
                return a(F) ? y(F, E) : A(F, E)
            }
        }
    } else {
        if (Prototype.Browser.WebKit) {
            r = B
        } else {
            r = A
        }
    }

    function v(E) {
        return r(E, 0)
    }

    function t(E) {
        return r(E, 1)
    }

    function n(E) {
        return r(E, 2)
    }

    function d(G) {
        G = C.extend(G);
        var F = G.target,
            E = G.type,
            H = G.currentTarget;
        if (H && H.tagName) {
            if (E === "load" || E === "error" || (E === "click" && H.tagName.toLowerCase() === "input" && H.type === "radio")) {
                F = H
            }
        }
        if (F.nodeType == Node.TEXT_NODE) {
            F = F.parentNode
        }
        return Element.extend(F)
    }

    function p(F, G) {
        var E = C.element(F);
        if (!G) {
            return E
        }
        while (E) {
            if (Object.isElement(E) && Prototype.Selector.match(E, G)) {
                return Element.extend(E)
            }
            E = E.parentNode
        }
    }

    function s(E) {
        return {
            x: c(E),
            y: b(E)
        }
    }

    function c(G) {
        var F = document.documentElement,
            E = document.body || {
                scrollLeft: 0
            };
        return G.pageX || (G.clientX + (F.scrollLeft || E.scrollLeft) - (F.clientLeft || 0))
    }

    function b(G) {
        var F = document.documentElement,
            E = document.body || {
                scrollTop: 0
            };
        return G.pageY || (G.clientY + (F.scrollTop || E.scrollTop) - (F.clientTop || 0))
    }

    function q(E) {
        C.extend(E);
        E.preventDefault();
        E.stopPropagation();
        E.stopped = true
    }
    C.Methods = {
        isLeftClick: v,
        isMiddleClick: t,
        isRightClick: n,
        element: d,
        findElement: p,
        pointer: s,
        pointerX: c,
        pointerY: b,
        stop: q
    };
    var x = Object.keys(C.Methods).inject({}, function(E, F) {
        E[F] = C.Methods[F].methodize();
        return E
    });
    if (window.attachEvent) {
        function i(F) {
            var E;
            switch (F.type) {
                case "mouseover":
                case "mouseenter":
                    E = F.fromElement;
                    break;
                case "mouseout":
                case "mouseleave":
                    E = F.toElement;
                    break;
                default:
                    return null
            }
            return Element.extend(E)
        }
        var u = {
            stopPropagation: function() {
                this.cancelBubble = true
            },
            preventDefault: function() {
                this.returnValue = false
            },
            inspect: function() {
                return "[object Event]"
            }
        };
        C.extend = function(F, E) {
            if (!F) {
                return false
            }
            if (!a(F)) {
                return F
            }
            if (F._extendedByPrototype) {
                return F
            }
            F._extendedByPrototype = Prototype.emptyFunction;
            var G = C.pointer(F);
            Object.extend(F, {
                target: F.srcElement || E,
                relatedTarget: i(F),
                pageX: G.x,
                pageY: G.y
            });
            Object.extend(F, x);
            Object.extend(F, u);
            return F
        }
    } else {
        C.extend = Prototype.K
    }
    if (window.addEventListener) {
        C.prototype = window.Event.prototype || document.createEvent("HTMLEvents").__proto__;
        Object.extend(C.prototype, x)
    }

    function m(I, H, J) {
        var G = Element.retrieve(I, "prototype_event_registry");
        if (Object.isUndefined(G)) {
            e.push(I);
            G = Element.retrieve(I, "prototype_event_registry", $H())
        }
        var E = G.get(H);
        if (Object.isUndefined(E)) {
            E = [];
            G.set(H, E)
        }
        if (E.pluck("handler").include(J)) {
            return false
        }
        var F;
        if (H.include(":")) {
            F = function(K) {
                if (Object.isUndefined(K.eventName)) {
                    return false
                }
                if (K.eventName !== H) {
                    return false
                }
                C.extend(K, I);
                J.call(I, K)
            }
        } else {
            if (!D && (H === "mouseenter" || H === "mouseleave")) {
                if (H === "mouseenter" || H === "mouseleave") {
                    F = function(L) {
                        C.extend(L, I);
                        var K = L.relatedTarget;
                        while (K && K !== I) {
                            try {
                                K = K.parentNode
                            } catch (M) {
                                K = I
                            }
                        }
                        if (K === I) {
                            return
                        }
                        J.call(I, L)
                    }
                }
            } else {
                F = function(K) {
                    C.extend(K, I);
                    J.call(I, K)
                }
            }
        }
        F.handler = J;
        E.push(F);
        return F
    }

    function h() {
        for (var E = 0, F = e.length; E < F; E++) {
            C.stopObserving(e[E]);
            e[E] = null
        }
    }
    var e = [];
    if (Prototype.Browser.IE) {
        window.attachEvent("onunload", h)
    }
    if (Prototype.Browser.WebKit) {
        window.addEventListener("unload", Prototype.emptyFunction, false)
    }
    var l = Prototype.K,
        g = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        };
    if (!D) {
        l = function(E) {
            return (g[E] || E)
        }
    }

    function w(H, G, I) {
        H = $(H);
        var F = m(H, G, I);
        if (!F) {
            return H
        }
        if (G.include(":")) {
            if (H.addEventListener) {
                H.addEventListener("dataavailable", F, false)
            } else {
                H.attachEvent("ondataavailable", F);
                H.attachEvent("onlosecapture", F)
            }
        } else {
            var E = l(G);
            if (H.addEventListener) {
                H.addEventListener(E, F, false)
            } else {
                H.attachEvent("on" + E, F)
            }
        }
        return H
    }

    function k(K, H, L) {
        K = $(K);
        var G = Element.retrieve(K, "prototype_event_registry");
        if (!G) {
            return K
        }
        if (!H) {
            G.each(function(N) {
                var M = N.key;
                k(K, M)
            });
            return K
        }
        var I = G.get(H);
        if (!I) {
            return K
        }
        if (!L) {
            I.each(function(M) {
                k(K, H, M.handler)
            });
            return K
        }
        var J = I.length,
            F;
        while (J--) {
            if (I[J].handler === L) {
                F = I[J];
                break
            }
        }
        if (!F) {
            return K
        }
        if (H.include(":")) {
            if (K.removeEventListener) {
                K.removeEventListener("dataavailable", F, false)
            } else {
                K.detachEvent("ondataavailable", F);
                K.detachEvent("onlosecapture", F)
            }
        } else {
            var E = l(H);
            if (K.removeEventListener) {
                K.removeEventListener(E, F, false)
            } else {
                K.detachEvent("on" + E, F)
            }
        }
        G.set(H, I.without(F));
        return K
    }

    function z(H, G, F, E) {
        H = $(H);
        if (Object.isUndefined(E)) {
            E = true
        }
        if (H == document && document.createEvent && !H.dispatchEvent) {
            H = document.documentElement
        }
        var I;
        if (document.createEvent) {
            I = document.createEvent("HTMLEvents");
            I.initEvent("dataavailable", E, true)
        } else {
            I = document.createEventObject();
            I.eventType = E ? "ondataavailable" : "onlosecapture"
        }
        I.eventName = G;
        I.memo = F || {};
        if (document.createEvent) {
            H.dispatchEvent(I)
        } else {
            H.fireEvent(I.eventType, I)
        }
        return C.extend(I)
    }
    C.Handler = Class.create({
        initialize: function(G, F, E, H) {
            this.element = $(G);
            this.eventName = F;
            this.selector = E;
            this.callback = H;
            this.handler = this.handleEvent.bind(this)
        },
        start: function() {
            C.observe(this.element, this.eventName, this.handler);
            return this
        },
        stop: function() {
            C.stopObserving(this.element, this.eventName, this.handler);
            return this
        },
        handleEvent: function(F) {
            var E = C.findElement(F, this.selector);
            if (E) {
                this.callback.call(this.element, F, E)
            }
        }
    });

    function j(G, F, E, H) {
        G = $(G);
        if (Object.isFunction(E) && Object.isUndefined(H)) {
            H = E, E = null
        }
        return new C.Handler(G, F, E, H).start()
    }
    Object.extend(C, C.Methods);
    Object.extend(C, {
        fire: z,
        observe: w,
        stopObserving: k,
        on: j
    });
    Element.addMethods({
        fire: z,
        observe: w,
        stopObserving: k,
        on: j
    });
    Object.extend(document, {
        fire: z.methodize(),
        observe: w.methodize(),
        stopObserving: k.methodize(),
        on: j.methodize(),
        loaded: false
    });
    if (window.Event) {
        Object.extend(window.Event, C)
    } else {
        window.Event = C
    }
})();
(function() {
    var d;

    function a() {
        if (document.loaded) {
            return
        }
        if (d) {
            window.clearTimeout(d)
        }
        document.loaded = true;
        document.fire("dom:loaded")
    }

    function c() {
        if (document.readyState === "complete") {
            document.stopObserving("readystatechange", c);
            a()
        }
    }

    function b() {
        try {
            document.documentElement.doScroll("left")
        } catch (f) {
            d = b.defer();
            return
        }
        a()
    }
    if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", a, false)
    } else {
        document.observe("readystatechange", c);
        if (window == top) {
            d = b.defer()
        }
    }
    Event.observe(window, "load", a)
})();
Element.addMethods();
Hash.toQueryString = Object.toQueryString;
var Toggle = {
    display: Element.toggle
};
Element.Methods.childOf = Element.Methods.descendantOf;
var Insertion = {
    Before: function(a, b) {
        return Element.insert(a, {
            before: b
        })
    },
    Top: function(a, b) {
        return Element.insert(a, {
            top: b
        })
    },
    Bottom: function(a, b) {
        return Element.insert(a, {
            bottom: b
        })
    },
    After: function(a, b) {
        return Element.insert(a, {
            after: b
        })
    }
};
var $continue = new Error('"throw $continue" is deprecated, use "return" instead');
var Position = {
    includeScrollOffsets: false,
    prepare: function() {
        this.deltaX = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
        this.deltaY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    },
    within: function(b, a, c) {
        if (this.includeScrollOffsets) {
            return this.withinIncludingScrolloffsets(b, a, c)
        }
        this.xcomp = a;
        this.ycomp = c;
        this.offset = Element.cumulativeOffset(b);
        return (c >= this.offset[1] && c < this.offset[1] + b.offsetHeight && a >= this.offset[0] && a < this.offset[0] + b.offsetWidth)
    },
    withinIncludingScrolloffsets: function(b, a, d) {
        var c = Element.cumulativeScrollOffset(b);
        this.xcomp = a + c[0] - this.deltaX;
        this.ycomp = d + c[1] - this.deltaY;
        this.offset = Element.cumulativeOffset(b);
        return (this.ycomp >= this.offset[1] && this.ycomp < this.offset[1] + b.offsetHeight && this.xcomp >= this.offset[0] && this.xcomp < this.offset[0] + b.offsetWidth)
    },
    overlap: function(b, a) {
        if (!b) {
            return 0
        }
        if (b == "vertical") {
            return ((this.offset[1] + a.offsetHeight) - this.ycomp) / a.offsetHeight
        }
        if (b == "horizontal") {
            return ((this.offset[0] + a.offsetWidth) - this.xcomp) / a.offsetWidth
        }
    },
    cumulativeOffset: Element.Methods.cumulativeOffset,
    positionedOffset: Element.Methods.positionedOffset,
    absolutize: function(a) {
        Position.prepare();
        return Element.absolutize(a)
    },
    relativize: function(a) {
        Position.prepare();
        return Element.relativize(a)
    },
    realOffset: Element.Methods.cumulativeScrollOffset,
    offsetParent: Element.Methods.getOffsetParent,
    page: Element.Methods.viewportOffset,
    clone: function(b, c, a) {
        a = a || {};
        return Element.clonePosition(c, b, a)
    }
};
if (!document.getElementsByClassName) {
    document.getElementsByClassName = function(b) {
        function a(c) {
            return c.blank() ? null : "[contains(concat(' ', @class, ' '), ' " + c + " ')]"
        }
        b.getElementsByClassName = Prototype.BrowserFeatures.XPath ? function(c, e) {
            e = e.toString().strip();
            var d = /\s/.test(e) ? $w(e).map(a).join("") : a(e);
            return d ? document._getElementsByXPath(".//*" + d, c) : []
        } : function(e, f) {
            f = f.toString().strip();
            var g = [],
                h = (/\s/.test(f) ? $w(f) : null);
            if (!h && !f) {
                return g
            }
            var c = $(e).getElementsByTagName("*");
            f = " " + f + " ";
            for (var d = 0, k, j; k = c[d]; d++) {
                if (k.className && (j = " " + k.className + " ") && (j.include(f) || (h && h.all(function(i) {
                        return !i.toString().blank() && j.include(" " + i + " ")
                    })))) {
                    g.push(Element.extend(k))
                }
            }
            return g
        };
        return function(d, c) {
            return $(c || document.body).getElementsByClassName(d)
        }
    }(Element.Methods)
}
Element.ClassNames = Class.create();
Element.ClassNames.prototype = {
    initialize: function(a) {
        this.element = $(a)
    },
    _each: function(a) {
        this.element.className.split(/\s+/).select(function(b) {
            return b.length > 0
        })._each(a)
    },
    set: function(a) {
        this.element.className = a
    },
    add: function(a) {
        if (this.include(a)) {
            return
        }
        this.set($A(this).concat(a).join(" "))
    },
    remove: function(a) {
        if (!this.include(a)) {
            return
        }
        this.set($A(this).without(a).join(" "))
    },
    toString: function() {
        return $A(this).join(" ")
    }
};
Object.extend(Element.ClassNames.prototype, Enumerable);
(function() {
    window.Selector = Class.create({
        initialize: function(a) {
            this.expression = a.strip()
        },
        findElements: function(a) {
            return Prototype.Selector.select(this.expression, a)
        },
        match: function(a) {
            return Prototype.Selector.match(a, this.expression)
        },
        toString: function() {
            return this.expression
        },
        inspect: function() {
            return "#<Selector: " + this.expression + ">"
        }
    });
    Object.extend(Selector, {
        matchElements: function(f, g) {
            var a = Prototype.Selector.match,
                d = [];
            for (var c = 0, e = f.length; c < e; c++) {
                var b = f[c];
                if (a(b, g)) {
                    d.push(Element.extend(b))
                }
            }
            return d
        },
        findElement: function(f, g, b) {
            b = b || 0;
            var a = 0,
                d;
            for (var c = 0, e = f.length; c < e; c++) {
                d = f[c];
                if (Prototype.Selector.match(d, g) && b === a++) {
                    return Element.extend(d)
                }
            }
        },
        findChildElements: function(b, c) {
            var a = c.toArray().join(", ");
            return Prototype.Selector.select(a, b || document)
        }
    })
})();
! function(a) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = a() : "function" == typeof define && define.amd ? define([], a) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).SmartBanner = a()
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
                h = navigator.language.slice(-2) || navigator.userLanguage.slice(-2) || "us",
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
String.prototype.parseColor = function() {
    var a = "#";
    if (this.slice(0, 4) == "rgb(") {
        var c = this.slice(4, this.length - 1).split(",");
        var b = 0;
        do {
            a += parseInt(c[b]).toColorPart()
        } while (++b < 3)
    } else {
        if (this.slice(0, 1) == "#") {
            if (this.length == 4) {
                for (var b = 1; b < 4; b++) {
                    a += (this.charAt(b) + this.charAt(b)).toLowerCase()
                }
            }
            if (this.length == 7) {
                a = this.toLowerCase()
            }
        }
    }
    return (a.length == 7 ? a : (arguments[0] || this))
};
Element.collectTextNodes = function(a) {
    return $A($(a).childNodes).collect(function(b) {
        return (b.nodeType == 3 ? b.nodeValue : (b.hasChildNodes() ? Element.collectTextNodes(b) : ""))
    }).flatten().join("")
};
Element.collectTextNodesIgnoreClass = function(a, b) {
    return $A($(a).childNodes).collect(function(c) {
        return (c.nodeType == 3 ? c.nodeValue : ((c.hasChildNodes() && !Element.hasClassName(c, b)) ? Element.collectTextNodesIgnoreClass(c, b) : ""))
    }).flatten().join("")
};
Element.setContentZoom = function(a, b) {
    a = $(a);
    a.setStyle({
        fontSize: (b / 100) + "em"
    });
    if (Prototype.Browser.WebKit) {
        window.scrollBy(0, 0)
    }
    return a
};
Element.getInlineOpacity = function(a) {
    return $(a).style.opacity || ""
};
Element.forceRerendering = function(a) {
    try {
        a = $(a);
        var c = document.createTextNode(" ");
        a.appendChild(c);
        a.removeChild(c)
    } catch (b) {}
};
var Effect = {
    _elementDoesNotExistError: {
        name: "ElementDoesNotExistError",
        message: "The specified DOM element does not exist, but is required for this effect to operate"
    },
    Transitions: {
        linear: Prototype.K,
        sinoidal: function(a) {
            return (-Math.cos(a * Math.PI) / 2) + 0.5
        },
        reverse: function(a) {
            return 1 - a
        },
        flicker: function(a) {
            var a = ((-Math.cos(a * Math.PI) / 4) + 0.75) + Math.random() / 4;
            return a > 1 ? 1 : a
        },
        wobble: function(a) {
            return (-Math.cos(a * Math.PI * (9 * a)) / 2) + 0.5
        },
        pulse: function(b, a) {
            a = a || 5;
            return (((b % (1 / a)) * a).round() == 0 ? ((b * a * 2) - (b * a * 2).floor()) : 1 - ((b * a * 2) - (b * a * 2).floor()))
        },
        spring: function(a) {
            return 1 - (Math.cos(a * 4.5 * Math.PI) * Math.exp(-a * 6))
        },
        none: function(a) {
            return 0
        },
        full: function(a) {
            return 1
        }
    },
    DefaultOptions: {
        duration: 1,
        fps: 100,
        sync: false,
        from: 0,
        to: 1,
        delay: 0,
        queue: "parallel"
    },
    tagifyText: function(a) {
        var b = "position:relative";
        if (Prototype.Browser.IE) {
            b += ";zoom:1"
        }
        a = $(a);
        $A(a.childNodes).each(function(c) {
            if (c.nodeType == 3) {
                c.nodeValue.toArray().each(function(d) {
                    a.insertBefore(new Element("span", {
                        style: b
                    }).update(d == " " ? String.fromCharCode(160) : d), c)
                });
                Element.remove(c)
            }
        })
    },
    multiple: function(b, c) {
        var e;
        if (((typeof b == "object") || Object.isFunction(b)) && (b.length)) {
            e = b
        } else {
            e = $(b).childNodes
        }
        var a = Object.extend({
            speed: 0.1,
            delay: 0
        }, arguments[2] || {});
        var d = a.delay;
        $A(e).each(function(g, f) {
            new c(g, Object.extend(a, {
                delay: f * a.speed + d
            }))
        })
    },
    PAIRS: {
        slide: ["SlideDown", "SlideUp"],
        blind: ["BlindDown", "BlindUp"],
        appear: ["Appear", "Fade"]
    },
    toggle: function(b, c) {
        b = $(b);
        c = (c || "appear").toLowerCase();
        var a = Object.extend({
            queue: {
                position: "end",
                scope: (b.id || "global"),
                limit: 1
            }
        }, arguments[2] || {});
        Effect[b.visible() ? Effect.PAIRS[c][1] : Effect.PAIRS[c][0]](b, a)
    }
};
Effect.DefaultOptions.transition = Effect.Transitions.sinoidal;
Effect.ScopedQueue = Class.create(Enumerable, {
    initialize: function() {
        this.effects = [];
        this.interval = null
    },
    _each: function(a) {
        this.effects._each(a)
    },
    add: function(b) {
        var c = new Date().getTime();
        var a = Object.isString(b.options.queue) ? b.options.queue : b.options.queue.position;
        switch (a) {
            case "front":
                this.effects.findAll(function(d) {
                    return d.state == "idle"
                }).each(function(d) {
                    d.startOn += b.finishOn;
                    d.finishOn += b.finishOn
                });
                break;
            case "with-last":
                c = this.effects.pluck("startOn").max() || c;
                break;
            case "end":
                c = this.effects.pluck("finishOn").max() || c;
                break
        }
        b.startOn += c;
        b.finishOn += c;
        if (!b.options.queue.limit || (this.effects.length < b.options.queue.limit)) {
            this.effects.push(b)
        }
        if (!this.interval) {
            this.interval = setInterval(this.loop.bind(this), 15)
        }
    },
    remove: function(a) {
        this.effects = this.effects.reject(function(b) {
            return b == a
        });
        if (this.effects.length == 0) {
            clearInterval(this.interval);
            this.interval = null
        }
    },
    loop: function() {
        var c = new Date().getTime();
        for (var b = 0, a = this.effects.length; b < a; b++) {
            this.effects[b] && this.effects[b].loop(c)
        }
    }
});
Effect.Queues = {
    instances: $H(),
    get: function(a) {
        if (!Object.isString(a)) {
            return a
        }
        return this.instances.get(a) || this.instances.set(a, new Effect.ScopedQueue())
    }
};
Effect.Queue = Effect.Queues.get("global");
Effect.Base = Class.create({
    position: null,
    start: function(options) {
        function codeForEvent(options, eventName) {
            return ((options[eventName + "Internal"] ? "this.options." + eventName + "Internal(this);" : "") + (options[eventName] ? "this.options." + eventName + "(this);" : ""))
        }
        if (options && options.transition === false) {
            options.transition = Effect.Transitions.linear
        }
        this.options = Object.extend(Object.extend({}, Effect.DefaultOptions), options || {});
        this.currentFrame = 0;
        this.state = "idle";
        this.startOn = this.options.delay * 1000;
        this.finishOn = this.startOn + (this.options.duration * 1000);
        this.fromToDelta = this.options.to - this.options.from;
        this.totalTime = this.finishOn - this.startOn;
        this.totalFrames = this.options.fps * this.options.duration;
        eval('this.render = function(pos){ if (this.state=="idle"){this.state="running";' + codeForEvent(this.options, "beforeSetup") + (this.setup ? "this.setup();" : "") + codeForEvent(this.options, "afterSetup") + '};if (this.state=="running"){pos=this.options.transition(pos)*' + this.fromToDelta + "+" + this.options.from + ";this.position=pos;" + codeForEvent(this.options, "beforeUpdate") + (this.update ? "this.update(pos);" : "") + codeForEvent(this.options, "afterUpdate") + "}}");
        this.event("beforeStart");
        if (!this.options.sync) {
            Effect.Queues.get(Object.isString(this.options.queue) ? "global" : this.options.queue.scope).add(this)
        }
    },
    loop: function(c) {
        if (c >= this.startOn) {
            if (c >= this.finishOn) {
                this.render(1);
                this.cancel();
                this.event("beforeFinish");
                if (this.finish) {
                    this.finish()
                }
                this.event("afterFinish");
                return
            }
            var b = (c - this.startOn) / this.totalTime,
                a = (b * this.totalFrames).round();
            if (a > this.currentFrame) {
                this.render(b);
                this.currentFrame = a
            }
        }
    },
    cancel: function() {
        if (!this.options.sync) {
            Effect.Queues.get(Object.isString(this.options.queue) ? "global" : this.options.queue.scope).remove(this)
        }
        this.state = "finished"
    },
    event: function(a) {
        if (this.options[a + "Internal"]) {
            this.options[a + "Internal"](this)
        }
        if (this.options[a]) {
            this.options[a](this)
        }
    },
    inspect: function() {
        var a = $H();
        for (property in this) {
            if (!Object.isFunction(this[property])) {
                a.set(property, this[property])
            }
        }
        return "#<Effect:" + a.inspect() + ",options:" + $H(this.options).inspect() + ">"
    }
});
Effect.Parallel = Class.create(Effect.Base, {
    initialize: function(a) {
        this.effects = a || [];
        this.start(arguments[1])
    },
    update: function(a) {
        this.effects.invoke("render", a)
    },
    finish: function(a) {
        this.effects.each(function(b) {
            b.render(1);
            b.cancel();
            b.event("beforeFinish");
            if (b.finish) {
                b.finish(a)
            }
            b.event("afterFinish")
        })
    }
});
Effect.Tween = Class.create(Effect.Base, {
    initialize: function(c, f, e) {
        c = Object.isString(c) ? $(c) : c;
        var b = $A(arguments),
            d = b.last(),
            a = b.length == 5 ? b[3] : null;
        this.method = Object.isFunction(d) ? d.bind(c) : Object.isFunction(c[d]) ? c[d].bind(c) : function(g) {
            c[d] = g
        };
        this.start(Object.extend({
            from: f,
            to: e
        }, a || {}))
    },
    update: function(a) {
        this.method(a)
    }
});
Effect.Event = Class.create(Effect.Base, {
    initialize: function() {
        this.start(Object.extend({
            duration: 0
        }, arguments[0] || {}))
    },
    update: Prototype.emptyFunction
});
Effect.Opacity = Class.create(Effect.Base, {
    initialize: function(b) {
        this.element = $(b);
        if (!this.element) {
            throw (Effect._elementDoesNotExistError)
        }
        if (Prototype.Browser.IE && (!this.element.currentStyle.hasLayout)) {
            this.element.setStyle({
                zoom: 1
            })
        }
        var a = Object.extend({
            from: this.element.getOpacity() || 0,
            to: 1
        }, arguments[1] || {});
        this.start(a)
    },
    update: function(a) {
        this.element.setOpacity(a)
    }
});
Effect.Move = Class.create(Effect.Base, {
    initialize: function(b) {
        this.element = $(b);
        if (!this.element) {
            throw (Effect._elementDoesNotExistError)
        }
        var a = Object.extend({
            x: 0,
            y: 0,
            mode: "relative"
        }, arguments[1] || {});
        this.start(a)
    },
    setup: function() {
        this.element.makePositioned();
        this.originalLeft = parseFloat(this.element.getStyle("left") || "0");
        this.originalTop = parseFloat(this.element.getStyle("top") || "0");
        if (this.options.mode == "absolute") {
            this.options.x = this.options.x - this.originalLeft;
            this.options.y = this.options.y - this.originalTop
        }
    },
    update: function(a) {
        this.element.setStyle({
            left: (this.options.x * a + this.originalLeft).round() + "px",
            top: (this.options.y * a + this.originalTop).round() + "px"
        })
    }
});
Effect.MoveBy = function(b, a, c) {
    return new Effect.Move(b, Object.extend({
        x: c,
        y: a
    }, arguments[3] || {}))
};
Effect.Scale = Class.create(Effect.Base, {
    initialize: function(b, c) {
        this.element = $(b);
        if (!this.element) {
            throw (Effect._elementDoesNotExistError)
        }
        var a = Object.extend({
            scaleX: true,
            scaleY: true,
            scaleContent: true,
            scaleFromCenter: false,
            scaleMode: "box",
            scaleFrom: 100,
            scaleTo: c
        }, arguments[2] || {});
        this.start(a)
    },
    setup: function() {
        this.restoreAfterFinish = this.options.restoreAfterFinish || false;
        this.elementPositioning = this.element.getStyle("position");
        this.originalStyle = {};
        ["top", "left", "width", "height", "fontSize"].each(function(b) {
            this.originalStyle[b] = this.element.style[b]
        }.bind(this));
        this.originalTop = this.element.offsetTop;
        this.originalLeft = this.element.offsetLeft;
        var a = this.element.getStyle("font-size") || "100%";
        ["em", "px", "%", "pt"].each(function(b) {
            if (a.indexOf(b) > 0) {
                this.fontSize = parseFloat(a);
                this.fontSizeType = b
            }
        }.bind(this));
        this.factor = (this.options.scaleTo - this.options.scaleFrom) / 100;
        this.dims = null;
        if (this.options.scaleMode == "box") {
            this.dims = [this.element.offsetHeight, this.element.offsetWidth]
        }
        if (/^content/.test(this.options.scaleMode)) {
            this.dims = [this.element.scrollHeight, this.element.scrollWidth]
        }
        if (!this.dims) {
            this.dims = [this.options.scaleMode.originalHeight, this.options.scaleMode.originalWidth]
        }
    },
    update: function(a) {
        var b = (this.options.scaleFrom / 100) + (this.factor * a);
        if (this.options.scaleContent && this.fontSize) {
            this.element.setStyle({
                fontSize: this.fontSize * b + this.fontSizeType
            })
        }
        this.setDimensions(this.dims[0] * b, this.dims[1] * b)
    },
    finish: function(a) {
        if (this.restoreAfterFinish) {
            this.element.setStyle(this.originalStyle)
        }
    },
    setDimensions: function(a, e) {
        var f = {};
        if (this.options.scaleX) {
            f.width = e.round() + "px"
        }
        if (this.options.scaleY) {
            f.height = a.round() + "px"
        }
        if (this.options.scaleFromCenter) {
            var c = (a - this.dims[0]) / 2;
            var b = (e - this.dims[1]) / 2;
            if (this.elementPositioning == "absolute") {
                if (this.options.scaleY) {
                    f.top = this.originalTop - c + "px"
                }
                if (this.options.scaleX) {
                    f.left = this.originalLeft - b + "px"
                }
            } else {
                if (this.options.scaleY) {
                    f.top = -c + "px"
                }
                if (this.options.scaleX) {
                    f.left = -b + "px"
                }
            }
        }
        this.element.setStyle(f)
    }
});
Effect.Highlight = Class.create(Effect.Base, {
    initialize: function(b) {
        this.element = $(b);
        if (!this.element) {
            throw (Effect._elementDoesNotExistError)
        }
        var a = Object.extend({
            startcolor: "#ffff99"
        }, arguments[1] || {});
        this.start(a)
    },
    setup: function() {
        if (this.element.getStyle("display") == "none") {
            this.cancel();
            return
        }
        this.oldStyle = {};
        if (!this.options.keepBackgroundImage) {
            this.oldStyle.backgroundImage = this.element.getStyle("background-image");
            this.element.setStyle({
                backgroundImage: "none"
            })
        }
        if (!this.options.endcolor) {
            this.options.endcolor = this.element.getStyle("background-color").parseColor("#ffffff")
        }
        if (!this.options.restorecolor) {
            this.options.restorecolor = this.element.getStyle("background-color")
        }
        this._base = $R(0, 2).map(function(a) {
            return parseInt(this.options.startcolor.slice(a * 2 + 1, a * 2 + 3), 16)
        }.bind(this));
        this._delta = $R(0, 2).map(function(a) {
            return parseInt(this.options.endcolor.slice(a * 2 + 1, a * 2 + 3), 16) - this._base[a]
        }.bind(this))
    },
    update: function(a) {
        this.element.setStyle({
            backgroundColor: $R(0, 2).inject("#", function(b, c, d) {
                return b + ((this._base[d] + (this._delta[d] * a)).round().toColorPart())
            }.bind(this))
        })
    },
    finish: function() {
        this.element.setStyle(Object.extend(this.oldStyle, {
            backgroundColor: this.options.restorecolor
        }))
    }
});
Effect.ScrollTo = function(d) {
    var c = arguments[1] || {},
        b = document.viewport.getScrollOffsets(),
        e = $(d).cumulativeOffset(),
        a = (window.height || document.body.scrollHeight) - document.viewport.getHeight();
    if (c.offset) {
        e[1] += c.offset
    }
    return new Effect.Tween(null, b.top, e[1] > a ? a : e[1], c, function(f) {
        scrollTo(b.left, f.round())
    })
};
Effect.Fade = function(c) {
    c = $(c);
    var a = c.getInlineOpacity();
    var b = Object.extend({
        from: c.getOpacity() || 1,
        to: 0,
        afterFinishInternal: function(d) {
            if (d.options.to != 0) {
                return
            }
            d.element.hide().setStyle({
                opacity: a
            })
        }
    }, arguments[1] || {});
    return new Effect.Opacity(c, b)
};
Effect.Appear = function(b) {
    b = $(b);
    var a = Object.extend({
        from: (b.getStyle("display") == "none" ? 0 : b.getOpacity() || 0),
        to: 1,
        afterFinishInternal: function(c) {
            c.element.forceRerendering()
        },
        beforeSetup: function(c) {
            c.element.setOpacity(c.options.from).show()
        }
    }, arguments[1] || {});
    return new Effect.Opacity(b, a)
};
Effect.Puff = function(b) {
    b = $(b);
    var a = {
        opacity: b.getInlineOpacity(),
        position: b.getStyle("position"),
        top: b.style.top,
        left: b.style.left,
        width: b.style.width,
        height: b.style.height
    };
    return new Effect.Parallel([new Effect.Scale(b, 200, {
        sync: true,
        scaleFromCenter: true,
        scaleContent: true,
        restoreAfterFinish: true
    }), new Effect.Opacity(b, {
        sync: true,
        to: 0
    })], Object.extend({
        duration: 1,
        beforeSetupInternal: function(c) {
            Position.absolutize(c.effects[0].element)
        },
        afterFinishInternal: function(c) {
            c.effects[0].element.hide().setStyle(a)
        }
    }, arguments[1] || {}))
};
Effect.BlindUp = function(a) {
    a = $(a);
    a.makeClipping();
    return new Effect.Scale(a, 0, Object.extend({
        scaleContent: false,
        scaleX: false,
        restoreAfterFinish: true,
        afterFinishInternal: function(b) {
            b.element.hide().undoClipping()
        }
    }, arguments[1] || {}))
};
Effect.BlindDown = function(b) {
    b = $(b);
    var a = b.getDimensions();
    return new Effect.Scale(b, 100, Object.extend({
        scaleContent: false,
        scaleX: false,
        scaleFrom: 0,
        scaleMode: {
            originalHeight: a.height,
            originalWidth: a.width
        },
        restoreAfterFinish: true,
        afterSetup: function(c) {
            c.element.makeClipping().setStyle({
                height: "0px"
            }).show()
        },
        afterFinishInternal: function(c) {
            c.element.undoClipping()
        }
    }, arguments[1] || {}))
};
Effect.SwitchOff = function(b) {
    b = $(b);
    var a = b.getInlineOpacity();
    return new Effect.Appear(b, Object.extend({
        duration: 0.4,
        from: 0,
        transition: Effect.Transitions.flicker,
        afterFinishInternal: function(c) {
            new Effect.Scale(c.element, 1, {
                duration: 0.3,
                scaleFromCenter: true,
                scaleX: false,
                scaleContent: false,
                restoreAfterFinish: true,
                beforeSetup: function(d) {
                    d.element.makePositioned().makeClipping()
                },
                afterFinishInternal: function(d) {
                    d.element.hide().undoClipping().undoPositioned().setStyle({
                        opacity: a
                    })
                }
            })
        }
    }, arguments[1] || {}))
};
Effect.DropOut = function(b) {
    b = $(b);
    var a = {
        top: b.getStyle("top"),
        left: b.getStyle("left"),
        opacity: b.getInlineOpacity()
    };
    return new Effect.Parallel([new Effect.Move(b, {
        x: 0,
        y: 100,
        sync: true
    }), new Effect.Opacity(b, {
        sync: true,
        to: 0
    })], Object.extend({
        duration: 0.5,
        beforeSetup: function(c) {
            c.effects[0].element.makePositioned()
        },
        afterFinishInternal: function(c) {
            c.effects[0].element.hide().undoPositioned().setStyle(a)
        }
    }, arguments[1] || {}))
};
Effect.Shake = function(d) {
    d = $(d);
    var b = Object.extend({
        distance: 20,
        duration: 0.5
    }, arguments[1] || {});
    var e = parseFloat(b.distance);
    var c = parseFloat(b.duration) / 10;
    var a = {
        top: d.getStyle("top"),
        left: d.getStyle("left")
    };
    return new Effect.Move(d, {
        x: e,
        y: 0,
        duration: c,
        afterFinishInternal: function(f) {
            new Effect.Move(f.element, {
                x: -e * 2,
                y: 0,
                duration: c * 2,
                afterFinishInternal: function(g) {
                    new Effect.Move(g.element, {
                        x: e * 2,
                        y: 0,
                        duration: c * 2,
                        afterFinishInternal: function(h) {
                            new Effect.Move(h.element, {
                                x: -e * 2,
                                y: 0,
                                duration: c * 2,
                                afterFinishInternal: function(i) {
                                    new Effect.Move(i.element, {
                                        x: e * 2,
                                        y: 0,
                                        duration: c * 2,
                                        afterFinishInternal: function(j) {
                                            new Effect.Move(j.element, {
                                                x: -e,
                                                y: 0,
                                                duration: c,
                                                afterFinishInternal: function(k) {
                                                    k.element.undoPositioned().setStyle(a)
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    })
};
Effect.SlideDown = function(c) {
    c = $(c).cleanWhitespace();
    var a = c.down().getStyle("bottom");
    var b = c.getDimensions();
    return new Effect.Scale(c, 100, Object.extend({
        scaleContent: false,
        scaleX: false,
        scaleFrom: window.opera ? 0 : 1,
        scaleMode: {
            originalHeight: b.height,
            originalWidth: b.width
        },
        restoreAfterFinish: true,
        afterSetup: function(d) {
            d.element.makePositioned();
            d.element.down().makePositioned();
            if (window.opera) {
                d.element.setStyle({
                    top: ""
                })
            }
            d.element.makeClipping().setStyle({
                height: "0px"
            }).show()
        },
        afterUpdateInternal: function(d) {
            d.element.down().setStyle({
                bottom: (d.dims[0] - d.element.clientHeight) + "px"
            })
        },
        afterFinishInternal: function(d) {
            d.element.undoClipping().undoPositioned();
            d.element.down().undoPositioned().setStyle({
                bottom: a
            })
        }
    }, arguments[1] || {}))
};
Effect.SlideUp = function(c) {
    c = $(c).cleanWhitespace();
    var a = c.down().getStyle("bottom");
    var b = c.getDimensions();
    return new Effect.Scale(c, window.opera ? 0 : 1, Object.extend({
        scaleContent: false,
        scaleX: false,
        scaleMode: "box",
        scaleFrom: 100,
        scaleMode: {
            originalHeight: b.height,
            originalWidth: b.width
        },
        restoreAfterFinish: true,
        afterSetup: function(d) {
            d.element.makePositioned();
            d.element.down().makePositioned();
            if (window.opera) {
                d.element.setStyle({
                    top: ""
                })
            }
            d.element.makeClipping().show()
        },
        afterUpdateInternal: function(d) {
            d.element.down().setStyle({
                bottom: (d.dims[0] - d.element.clientHeight) + "px"
            })
        },
        afterFinishInternal: function(d) {
            d.element.hide().undoClipping().undoPositioned();
            d.element.down().undoPositioned().setStyle({
                bottom: a
            })
        }
    }, arguments[1] || {}))
};
Effect.Squish = function(a) {
    return new Effect.Scale(a, window.opera ? 1 : 0, {
        restoreAfterFinish: true,
        beforeSetup: function(b) {
            b.element.makeClipping()
        },
        afterFinishInternal: function(b) {
            b.element.hide().undoClipping()
        }
    })
};
Effect.Grow = function(c) {
    c = $(c);
    var b = Object.extend({
        direction: "center",
        moveTransition: Effect.Transitions.sinoidal,
        scaleTransition: Effect.Transitions.sinoidal,
        opacityTransition: Effect.Transitions.full
    }, arguments[1] || {});
    var a = {
        top: c.style.top,
        left: c.style.left,
        height: c.style.height,
        width: c.style.width,
        opacity: c.getInlineOpacity()
    };
    var g = c.getDimensions();
    var h, f;
    var e, d;
    switch (b.direction) {
        case "top-left":
            h = f = e = d = 0;
            break;
        case "top-right":
            h = g.width;
            f = d = 0;
            e = -g.width;
            break;
        case "bottom-left":
            h = e = 0;
            f = g.height;
            d = -g.height;
            break;
        case "bottom-right":
            h = g.width;
            f = g.height;
            e = -g.width;
            d = -g.height;
            break;
        case "center":
            h = g.width / 2;
            f = g.height / 2;
            e = -g.width / 2;
            d = -g.height / 2;
            break
    }
    return new Effect.Move(c, {
        x: h,
        y: f,
        duration: 0.01,
        beforeSetup: function(i) {
            i.element.hide().makeClipping().makePositioned()
        },
        afterFinishInternal: function(i) {
            new Effect.Parallel([new Effect.Opacity(i.element, {
                sync: true,
                to: 1,
                from: 0,
                transition: b.opacityTransition
            }), new Effect.Move(i.element, {
                x: e,
                y: d,
                sync: true,
                transition: b.moveTransition
            }), new Effect.Scale(i.element, 100, {
                scaleMode: {
                    originalHeight: g.height,
                    originalWidth: g.width
                },
                sync: true,
                scaleFrom: window.opera ? 1 : 0,
                transition: b.scaleTransition,
                restoreAfterFinish: true
            })], Object.extend({
                beforeSetup: function(j) {
                    j.effects[0].element.setStyle({
                        height: "0px"
                    }).show()
                },
                afterFinishInternal: function(j) {
                    j.effects[0].element.undoClipping().undoPositioned().setStyle(a)
                }
            }, b))
        }
    })
};
Effect.Shrink = function(c) {
    c = $(c);
    var b = Object.extend({
        direction: "center",
        moveTransition: Effect.Transitions.sinoidal,
        scaleTransition: Effect.Transitions.sinoidal,
        opacityTransition: Effect.Transitions.none
    }, arguments[1] || {});
    var a = {
        top: c.style.top,
        left: c.style.left,
        height: c.style.height,
        width: c.style.width,
        opacity: c.getInlineOpacity()
    };
    var f = c.getDimensions();
    var e, d;
    switch (b.direction) {
        case "top-left":
            e = d = 0;
            break;
        case "top-right":
            e = f.width;
            d = 0;
            break;
        case "bottom-left":
            e = 0;
            d = f.height;
            break;
        case "bottom-right":
            e = f.width;
            d = f.height;
            break;
        case "center":
            e = f.width / 2;
            d = f.height / 2;
            break
    }
    return new Effect.Parallel([new Effect.Opacity(c, {
        sync: true,
        to: 0,
        from: 1,
        transition: b.opacityTransition
    }), new Effect.Scale(c, window.opera ? 1 : 0, {
        sync: true,
        transition: b.scaleTransition,
        restoreAfterFinish: true
    }), new Effect.Move(c, {
        x: e,
        y: d,
        sync: true,
        transition: b.moveTransition
    })], Object.extend({
        beforeStartInternal: function(g) {
            g.effects[0].element.makePositioned().makeClipping()
        },
        afterFinishInternal: function(g) {
            g.effects[0].element.hide().undoClipping().undoPositioned().setStyle(a)
        }
    }, b))
};
Effect.Pulsate = function(c) {
    c = $(c);
    var b = arguments[1] || {};
    var a = c.getInlineOpacity();
    var e = b.transition || Effect.Transitions.sinoidal;
    var d = function(f) {
        return e(1 - Effect.Transitions.pulse(f, b.pulses))
    };
    d.bind(e);
    return new Effect.Opacity(c, Object.extend(Object.extend({
        duration: 2,
        from: 0,
        afterFinishInternal: function(f) {
            f.element.setStyle({
                opacity: a
            })
        }
    }, b), {
        transition: d
    }))
};
Effect.Fold = function(b) {
    b = $(b);
    var a = {
        top: b.style.top,
        left: b.style.left,
        width: b.style.width,
        height: b.style.height
    };
    b.makeClipping();
    return new Effect.Scale(b, 5, Object.extend({
        scaleContent: false,
        scaleX: false,
        afterFinishInternal: function(c) {
            new Effect.Scale(b, 1, {
                scaleContent: false,
                scaleY: false,
                afterFinishInternal: function(d) {
                    d.element.hide().undoClipping().setStyle(a)
                }
            })
        }
    }, arguments[1] || {}))
};
Effect.Morph = Class.create(Effect.Base, {
    initialize: function(c) {
        this.element = $(c);
        if (!this.element) {
            throw (Effect._elementDoesNotExistError)
        }
        var a = Object.extend({
            style: {}
        }, arguments[1] || {});
        if (!Object.isString(a.style)) {
            this.style = $H(a.style)
        } else {
            if (a.style.include(":")) {
                this.style = a.style.parseStyle()
            } else {
                this.element.addClassName(a.style);
                this.style = $H(this.element.getStyles());
                this.element.removeClassName(a.style);
                var b = this.element.getStyles();
                this.style = this.style.reject(function(d) {
                    return d.value == b[d.key]
                });
                a.afterFinishInternal = function(d) {
                    d.element.addClassName(d.options.style);
                    d.transforms.each(function(e) {
                        d.element.style[e.style] = ""
                    })
                }
            }
        }
        this.start(a)
    },
    setup: function() {
        function a(b) {
            if (!b || ["rgba(0, 0, 0, 0)", "transparent"].include(b)) {
                b = "#ffffff"
            }
            b = b.parseColor();
            return $R(0, 2).map(function(c) {
                return parseInt(b.slice(c * 2 + 1, c * 2 + 3), 16)
            })
        }
        this.transforms = this.style.map(function(g) {
            var f = g[0],
                e = g[1],
                d = null;
            if (e.parseColor("#zzzzzz") != "#zzzzzz") {
                e = e.parseColor();
                d = "color"
            } else {
                if (f == "opacity") {
                    e = parseFloat(e);
                    if (Prototype.Browser.IE && (!this.element.currentStyle.hasLayout)) {
                        this.element.setStyle({
                            zoom: 1
                        })
                    }
                } else {
                    if (Element.CSS_LENGTH.test(e)) {
                        var c = e.match(/^([\+\-]?[0-9\.]+)(.*)$/);
                        e = parseFloat(c[1]);
                        d = (c.length == 3) ? c[2] : null
                    }
                }
            }
            var b = this.element.getStyle(f);
            return {
                style: f.camelize(),
                originalValue: d == "color" ? a(b) : parseFloat(b || 0),
                targetValue: d == "color" ? a(e) : e,
                unit: d
            }
        }.bind(this)).reject(function(b) {
            return ((b.originalValue == b.targetValue) || (b.unit != "color" && (isNaN(b.originalValue) || isNaN(b.targetValue))))
        })
    },
    update: function(a) {
        var d = {},
            b, c = this.transforms.length;
        while (c--) {
            d[(b = this.transforms[c]).style] = b.unit == "color" ? "#" + (Math.round(b.originalValue[0] + (b.targetValue[0] - b.originalValue[0]) * a)).toColorPart() + (Math.round(b.originalValue[1] + (b.targetValue[1] - b.originalValue[1]) * a)).toColorPart() + (Math.round(b.originalValue[2] + (b.targetValue[2] - b.originalValue[2]) * a)).toColorPart() : (b.originalValue + (b.targetValue - b.originalValue) * a).toFixed(3) + (b.unit === null ? "" : b.unit)
        }
        this.element.setStyle(d, true)
    }
});
Effect.Transform = Class.create({
    initialize: function(a) {
        this.tracks = [];
        this.options = arguments[1] || {};
        this.addTracks(a)
    },
    addTracks: function(a) {
        a.each(function(b) {
            b = $H(b);
            var c = b.values().first();
            this.tracks.push($H({
                ids: b.keys().first(),
                effect: Effect.Morph,
                options: {
                    style: c
                }
            }))
        }.bind(this));
        return this
    },
    play: function() {
        return new Effect.Parallel(this.tracks.map(function(a) {
            var d = a.get("ids"),
                c = a.get("effect"),
                b = a.get("options");
            var e = [$(d) || $$(d)].flatten();
            return e.map(function(f) {
                return new c(f, Object.extend({
                    sync: true
                }, b))
            })
        }).flatten(), this.options)
    }
});
Element.CSS_PROPERTIES = $w("backgroundColor backgroundPosition borderBottomColor borderBottomStyle borderBottomWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderSpacing borderTopColor borderTopStyle borderTopWidth bottom clip color fontSize fontWeight height left letterSpacing lineHeight marginBottom marginLeft marginRight marginTop markerOffset maxHeight maxWidth minHeight minWidth opacity outlineColor outlineOffset outlineWidth paddingBottom paddingLeft paddingRight paddingTop right textIndent top width wordSpacing zIndex");
Element.CSS_LENGTH = /^(([\+\-]?[0-9\.]+)(em|ex|px|in|cm|mm|pt|pc|\%))|0$/;
String.__parseStyleElement = document.createElement("div");
String.prototype.parseStyle = function() {
    var b, a = $H();
    if (Prototype.Browser.WebKit) {
        b = new Element("div", {
            style: this
        }).style
    } else {
        String.__parseStyleElement.innerHTML = '<div style="' + this + '"></div>';
        b = String.__parseStyleElement.childNodes[0].style
    }
    Element.CSS_PROPERTIES.each(function(c) {
        if (b[c]) {
            a.set(c, b[c])
        }
    });
    if (Prototype.Browser.IE && this.include("opacity")) {
        a.set("opacity", this.match(/opacity:\s*((?:0|1)?(?:\.\d*)?)/)[1])
    }
    return a
};
if (document.defaultView && document.defaultView.getComputedStyle) {
    Element.getStyles = function(b) {
        var a = document.defaultView.getComputedStyle($(b), null);
        return Element.CSS_PROPERTIES.inject({}, function(c, d) {
            c[d] = a[d];
            return c
        })
    }
} else {
    Element.getStyles = function(b) {
        b = $(b);
        var a = b.currentStyle,
            c;
        c = Element.CSS_PROPERTIES.inject({}, function(d, e) {
            d[e] = a[e];
            return d
        });
        if (!c.opacity) {
            c.opacity = b.getOpacity()
        }
        return c
    }
}
Effect.Methods = {
    morph: function(a, b) {
        a = $(a);
        new Effect.Morph(a, Object.extend({
            style: b
        }, arguments[2] || {}));
        return a
    },
    visualEffect: function(c, e, b) {
        c = $(c);
        var d = e.dasherize().camelize(),
            a = d.charAt(0).toUpperCase() + d.substring(1);
        new Effect[a](c, b);
        return c
    },
    highlight: function(b, a) {
        b = $(b);
        new Effect.Highlight(b, a);
        return b
    }
};
$w("fade appear grow shrink fold blindUp blindDown slideUp slideDown pulsate shake puff squish switchOff dropOut").each(function(a) {
    Effect.Methods[a] = function(c, b) {
        c = $(c);
        Effect[a.charAt(0).toUpperCase() + a.substring(1)](c, b);
        return c
    }
});
$w("getInlineOpacity forceRerendering setContentZoom collectTextNodes collectTextNodesIgnoreClass getStyles").each(function(a) {
    Effect.Methods[a] = Element[a]
});
Element.addMethods(Effect.Methods);
var Autocompleter = {};
Autocompleter.Base = Class.create({
    baseInitialize: function(b, c, a) {
        if (typeof Effect == "undefined") {
            throw ("controls.js requires including script.aculo.us' effects.js library")
        }
        b = $(b);
        this.element = b;
        this.update = $(c);
        this.hasFocus = false;
        this.changed = false;
        this.active = false;
        this.index = 0;
        this.entryCount = 0;
        this.oldElementValue = this.element.value;
        this.canBlur = true;
        if (this.setOptions) {
            this.setOptions(a)
        } else {
            this.options = a || {}
        }
        this.options.paramName = this.options.paramName || this.element.name;
        this.options.tokens = this.options.tokens || [];
        this.options.frequency = this.options.frequency || 0.4;
        this.options.minChars = this.options.minChars || 1;
        this.options.onShow = this.options.onShow || function(d, e) {
            if (!e.style.position || e.style.position == "absolute") {
                e.style.position = "absolute";
                Position.clone(d, e, {
                    setHeight: false,
                    offsetTop: d.offsetHeight
                })
            }
            Effect.Appear(e, {
                duration: 0.15
            })
        };
        this.options.onHide = this.options.onHide || function(d, e) {
            new Effect.Fade(e, {
                duration: 0.15
            })
        };
        if (typeof(this.options.tokens) == "string") {
            this.options.tokens = new Array(this.options.tokens)
        }
        if (!this.options.tokens.include("\n")) {
            this.options.tokens.push("\n")
        }
        this.observer = null;
        this.element.setAttribute("autocomplete", "off");
        Element.hide(this.update);
        Event.observe(this.element, "blur", this.onBlur.bindAsEventListener(this));
        Event.observe(this.element, "keydown", this.onKeyPress.bindAsEventListener(this));
        Event.observe(this.update, "mouseover", this.onMouseOver.bindAsEventListener(this));
        Event.observe(this.update, "mouseout", this.onMouseOut.bindAsEventListener(this))
    },
    onMouseOver: function() {
        this.canBlur = false
    },
    onMouseOut: function() {
        this.canBlur = true
    },
    show: function() {
        if (Element.getStyle(this.update, "display") == "none") {
            this.options.onShow(this.element, this.update)
        }
        if (!this.iefix && (Prototype.Browser.IE) && (Element.getStyle(this.update, "position") == "absolute")) {
            new Insertion.After(this.update, '<iframe id="' + this.update.id + '_iefix" style="display:none;position:absolute;filter:progid:DXImageTransform.Microsoft.Alpha(opacity=0);" src="javascript:false;" frameborder="0" scrolling="no"></iframe>');
            this.iefix = $(this.update.id + "_iefix")
        }
        if (this.iefix) {
            setTimeout(this.fixIEOverlapping.bind(this), 50)
        }
    },
    fixIEOverlapping: function() {
        Position.clone(this.update, this.iefix, {
            setTop: (!this.update.style.height)
        });
        this.iefix.style.zIndex = 1;
        this.update.style.zIndex = 2;
        Element.show(this.iefix)
    },
    hide: function() {
        this.stopIndicator();
        if (Element.getStyle(this.update, "display") != "none") {
            this.options.onHide(this.element, this.update)
        }
        if (this.iefix) {
            Element.hide(this.iefix)
        }
    },
    startIndicator: function() {
        if (this.options.indicator) {
            Element.show(this.options.indicator)
        }
    },
    stopIndicator: function() {
        if (this.options.indicator) {
            Element.hide(this.options.indicator)
        }
    },
    onKeyPress: function(a) {
        if (this.active) {
            switch (a.keyCode) {
                case Event.KEY_TAB:
                case Event.KEY_RETURN:
                    this.selectEntry();
                    Event.stop(a);
                case Event.KEY_ESC:
                    this.hide();
                    this.active = false;
                    Event.stop(a);
                    return;
                case Event.KEY_LEFT:
                case Event.KEY_RIGHT:
                    return;
                case Event.KEY_UP:
                    this.markPrevious();
                    this.render();
                    Event.stop(a);
                    return;
                case Event.KEY_DOWN:
                    this.markNext();
                    this.render();
                    Event.stop(a);
                    return
            }
        } else {
            if (a.keyCode == Event.KEY_TAB || a.keyCode == Event.KEY_RETURN || (Prototype.Browser.WebKit > 0 && a.keyCode == 0)) {
                return
            }
        }
        this.changed = true;
        this.hasFocus = true;
        if (this.observer) {
            clearTimeout(this.observer)
        }
        this.observer = setTimeout(this.onObserverEvent.bind(this), this.options.frequency * 1000)
    },
    activate: function() {
        this.changed = false;
        this.hasFocus = true;
        this.getUpdatedChoices()
    },
    onHover: function(b) {
        var a = Event.findElement(b, "LI");
        if (this.index != a.autocompleteIndex) {
            this.index = a.autocompleteIndex;
            this.render()
        }
        Event.stop(b)
    },
    onClick: function(b) {
        var a = Event.findElement(b, "LI");
        this.index = a.autocompleteIndex;
        this.selectEntry();
        this.hide()
    },
    onBlur: function(a) {
        if (this.canBlur) {
            setTimeout(this.hide.bind(this), 250);
            this.hasFocus = false;
            this.active = false
        } else {
            this.element.focus()
        }
    },
    render: function() {
        if (this.entryCount > 0) {
            for (var a = 0; a < this.entryCount; a++) {
                this.index == a ? Element.addClassName(this.getEntry(a), "selected") : Element.removeClassName(this.getEntry(a), "selected")
            }
            if (this.hasFocus) {
                this.show();
                this.active = true
            }
        } else {
            this.active = false;
            this.hide()
        }
    },
    markPrevious: function() {
        if (this.index > 0) {
            this.index--
        } else {
            this.index = this.entryCount - 1;
            this.update.scrollTop = this.update.scrollHeight
        }
        selection = this.getEntry(this.index);
        selection_top = selection.offsetTop;
        if (selection_top < this.update.scrollTop) {
            this.update.scrollTop = this.update.scrollTop - selection.offsetHeight
        }
    },
    markNext: function() {
        if (this.index < this.entryCount - 1) {
            this.index++
        } else {
            this.index = 0;
            this.update.scrollTop = 0
        }
        selection = this.getEntry(this.index);
        selection_bottom = selection.offsetTop + selection.offsetHeight;
        if (selection_bottom > this.update.scrollTop + this.update.offsetHeight) {
            this.update.scrollTop = this.update.scrollTop + selection.offsetHeight
        }
    },
    getEntry: function(a) {
        return this.update.firstChild.childNodes[a]
    },
    getCurrentEntry: function() {
        return this.getEntry(this.index)
    },
    selectEntry: function() {
        this.active = false;
        this.updateElement(this.getCurrentEntry())
    },
    updateElement: function(f) {
        if (this.options.updateElement) {
            this.options.updateElement(f);
            return
        }
        var d = "";
        if (this.options.select) {
            var a = $(f).select("." + this.options.select) || [];
            if (a.length > 0) {
                d = Element.collectTextNodes(a[0], this.options.select)
            }
        } else {
            d = Element.collectTextNodesIgnoreClass(f, "informal")
        }
        var c = this.getTokenBounds();
        if (c[0] != -1) {
            var e = this.element.value.substr(0, c[0]);
            var b = this.element.value.substr(c[0]).match(/^\s+/);
            if (b) {
                e += b[0]
            }
            this.element.value = e + d + this.element.value.substr(c[1])
        } else {
            this.element.value = d
        }
        this.oldElementValue = this.element.value;
        this.element.focus();
        if (this.options.afterUpdateElement) {
            this.options.afterUpdateElement(this.element, f)
        }
    },
    updateChoices: function(c) {
        if (!this.changed && this.hasFocus) {
            this.update.innerHTML = c;
            Element.cleanWhitespace(this.update);
            Element.cleanWhitespace(this.update.down());
            if (this.update.firstChild && this.update.down().childNodes) {
                this.entryCount = this.update.down().childNodes.length;
                for (var a = 0; a < this.entryCount; a++) {
                    var b = this.getEntry(a);
                    b.autocompleteIndex = a;
                    this.addObservers(b)
                }
            } else {
                this.entryCount = 0
            }
            this.stopIndicator();
            this.update.scrollTop = 0;
            this.index = 0;
            if (this.entryCount == 1 && this.options.autoSelect) {
                this.selectEntry();
                this.hide()
            } else {
                this.render()
            }
        }
    },
    addObservers: function(a) {
        Event.observe(a, "mouseover", this.onHover.bindAsEventListener(this));
        Event.observe(a, "click", this.onClick.bindAsEventListener(this))
    },
    onObserverEvent: function() {
        this.changed = false;
        this.tokenBounds = null;
        if (this.getToken().length >= this.options.minChars) {
            this.getUpdatedChoices()
        } else {
            this.active = false;
            this.hide()
        }
        this.oldElementValue = this.element.value
    },
    getToken: function() {
        var a = this.getTokenBounds();
        return this.element.value.substring(a[0], a[1]).strip()
    },
    getTokenBounds: function() {
        if (null != this.tokenBounds) {
            return this.tokenBounds
        }
        var e = this.element.value;
        if (e.strip().empty()) {
            return [-1, 0]
        }
        var f = arguments.callee.getFirstDifferencePos(e, this.oldElementValue);
        var h = (f == this.oldElementValue.length ? 1 : 0);
        var d = -1,
            c = e.length;
        var g;
        for (var b = 0, a = this.options.tokens.length; b < a; ++b) {
            g = e.lastIndexOf(this.options.tokens[b], f + h - 1);
            if (g > d) {
                d = g
            }
            g = e.indexOf(this.options.tokens[b], f + h);
            if (-1 != g && g < c) {
                c = g
            }
        }
        return (this.tokenBounds = [d + 1, c])
    }
});
Autocompleter.Base.prototype.getTokenBounds.getFirstDifferencePos = function(c, a) {
    var d = Math.min(c.length, a.length);
    for (var b = 0; b < d; ++b) {
        if (c[b] != a[b]) {
            return b
        }
    }
    return d
};
Ajax.Autocompleter = Class.create(Autocompleter.Base, {
    initialize: function(c, d, b, a) {
        this.baseInitialize(c, d, a);
        this.options.asynchronous = true;
        this.options.onComplete = this.onComplete.bind(this);
        this.options.defaultParams = this.options.parameters || null;
        this.url = b
    },
    getUpdatedChoices: function() {
        this.startIndicator();
        var a = encodeURIComponent(this.options.paramName) + "=" + encodeURIComponent(this.getToken());
        this.options.parameters = this.options.callback ? this.options.callback(this.element, a) : a;
        if (this.options.defaultParams) {
            this.options.parameters += "&" + this.options.defaultParams
        }
        new Ajax.Request(this.url, this.options)
    },
    onComplete: function(a) {
        this.updateChoices(a.responseText)
    }
});
Autocompleter.Local = Class.create(Autocompleter.Base, {
    initialize: function(b, d, c, a) {
        this.baseInitialize(b, d, a);
        this.options.array = c
    },
    getUpdatedChoices: function() {
        this.updateChoices(this.options.selector(this))
    },
    setOptions: function(a) {
        this.options = Object.extend({
            choices: 10,
            partialSearch: true,
            partialChars: 2,
            ignoreCase: true,
            fullSearch: false,
            selector: function(b) {
                var d = [];
                var c = [];
                var h = b.getToken();
                var g = 0;
                for (var e = 0; e < b.options.array.length && d.length < b.options.choices; e++) {
                    var f = b.options.array[e];
                    var j = b.options.ignoreCase ? f.toLowerCase().indexOf(h.toLowerCase()) : f.indexOf(h);
                    while (j != -1) {
                        if (j == 0 && f.length != h.length) {
                            d.push("<li><strong>" + f.substr(0, h.length) + "</strong>" + f.substr(h.length) + "</li>");
                            break
                        } else {
                            if (h.length >= b.options.partialChars && b.options.partialSearch && j != -1) {
                                if (b.options.fullSearch || /\s/.test(f.substr(j - 1, 1))) {
                                    c.push("<li>" + f.substr(0, j) + "<strong>" + f.substr(j, h.length) + "</strong>" + f.substr(j + h.length) + "</li>");
                                    break
                                }
                            }
                        }
                        j = b.options.ignoreCase ? f.toLowerCase().indexOf(h.toLowerCase(), j + 1) : f.indexOf(h, j + 1)
                    }
                }
                if (c.length) {
                    d = d.concat(c.slice(0, b.options.choices - d.length))
                }
                return "<ul>" + d.join("") + "</ul>"
            }
        }, a || {})
    }
});
Field.scrollFreeActivate = function(a) {
    setTimeout(function() {
        Field.activate(a)
    }, 1)
};
Ajax.InPlaceEditor = Class.create({
    initialize: function(c, b, a) {
        this.url = b;
        this.element = c = $(c);
        this.prepareOptions();
        this._controls = {};
        arguments.callee.dealWithDeprecatedOptions(a);
        Object.extend(this.options, a || {});
        if (!this.options.formId && this.element.id) {
            this.options.formId = this.element.id + "-inplaceeditor";
            if ($(this.options.formId)) {
                this.options.formId = ""
            }
        }
        if (this.options.externalControl) {
            this.options.externalControl = $(this.options.externalControl)
        }
        if (!this.options.externalControl) {
            this.options.externalControlOnly = false
        }
        this._originalBackground = this.element.getStyle("background-color") || "transparent";
        this.element.title = this.options.clickToEditText;
        this._boundCancelHandler = this.handleFormCancellation.bind(this);
        this._boundComplete = (this.options.onComplete || Prototype.emptyFunction).bind(this);
        this._boundFailureHandler = this.handleAJAXFailure.bind(this);
        this._boundSubmitHandler = this.handleFormSubmission.bind(this);
        this._boundWrapperHandler = this.wrapUp.bind(this);
        this.registerListeners()
    },
    checkForEscapeOrReturn: function(a) {
        if (!this._editing || a.ctrlKey || a.altKey || a.shiftKey) {
            return
        }
        if (Event.KEY_ESC == a.keyCode) {
            this.handleFormCancellation(a)
        } else {
            if (Event.KEY_RETURN == a.keyCode) {
                this.handleFormSubmission(a)
            }
        }
    },
    createControl: function(g, c, b) {
        var e = this.options[g + "Control"];
        var f = this.options[g + "Text"];
        if ("button" == e) {
            var a = document.createElement("input");
            a.type = "submit";
            a.value = f;
            a.className = "editor_" + g + "_button";
            if ("cancel" == g) {
                a.onclick = this._boundCancelHandler
            }
            this._form.appendChild(a);
            this._controls[g] = a
        } else {
            if ("link" == e) {
                var d = document.createElement("a");
                d.href = "#";
                d.appendChild(document.createTextNode(f));
                d.onclick = "cancel" == g ? this._boundCancelHandler : this._boundSubmitHandler;
                d.className = "editor_" + g + "_link";
                if (b) {
                    d.className += " " + b
                }
                this._form.appendChild(d);
                this._controls[g] = d
            }
        }
    },
    createEditField: function() {
        var c = (this.options.loadTextURL ? this.options.loadingText : this.getText());
        var b;
        if (1 >= this.options.rows && !/\r|\n/.test(this.getText())) {
            b = document.createElement("input");
            b.type = "text";
            var a = this.options.size || this.options.cols || 0;
            if (0 < a) {
                b.size = a
            }
        } else {
            b = document.createElement("textarea");
            b.rows = (1 >= this.options.rows ? this.options.autoRows : this.options.rows);
            b.cols = this.options.cols || 40
        }
        b.name = this.options.paramName;
        b.value = c;
        b.className = "editor_field";
        if (this.options.submitOnBlur) {
            b.onblur = this._boundSubmitHandler
        }
        this._controls.editor = b;
        if (this.options.loadTextURL) {
            this.loadExternalText()
        }
        this._form.appendChild(this._controls.editor)
    },
    createForm: function() {
        var b = this;

        function a(d, e) {
            var c = b.options["text" + d + "Controls"];
            if (!c || e === false) {
                return
            }
            b._form.appendChild(document.createTextNode(c))
        }
        this._form = $(document.createElement("form"));
        this._form.id = this.options.formId;
        this._form.addClassName(this.options.formClassName);
        this._form.onsubmit = this._boundSubmitHandler;
        this.createEditField();
        if ("textarea" == this._controls.editor.tagName.toLowerCase()) {
            this._form.appendChild(document.createElement("br"))
        }
        if (this.options.onFormCustomization) {
            this.options.onFormCustomization(this, this._form)
        }
        a("Before", this.options.okControl || this.options.cancelControl);
        this.createControl("ok", this._boundSubmitHandler);
        a("Between", this.options.okControl && this.options.cancelControl);
        this.createControl("cancel", this._boundCancelHandler, "editor_cancel");
        a("After", this.options.okControl || this.options.cancelControl)
    },
    destroy: function() {
        if (this._oldInnerHTML) {
            this.element.innerHTML = this._oldInnerHTML
        }
        this.leaveEditMode();
        this.unregisterListeners()
    },
    enterEditMode: function(a) {
        if (this._saving || this._editing) {
            return
        }
        this._editing = true;
        this.triggerCallback("onEnterEditMode");
        if (this.options.externalControl) {
            this.options.externalControl.hide()
        }
        this.element.hide();
        this.createForm();
        this.element.parentNode.insertBefore(this._form, this.element);
        if (!this.options.loadTextURL) {
            this.postProcessEditField()
        }
        if (a) {
            Event.stop(a)
        }
    },
    enterHover: function(a) {
        if (this.options.hoverClassName) {
            this.element.addClassName(this.options.hoverClassName)
        }
        if (this._saving) {
            return
        }
        this.triggerCallback("onEnterHover")
    },
    getText: function() {
        return this.element.innerHTML
    },
    handleAJAXFailure: function(a) {
        this.triggerCallback("onFailure", a);
        if (this._oldInnerHTML) {
            this.element.innerHTML = this._oldInnerHTML;
            this._oldInnerHTML = null
        }
    },
    handleFormCancellation: function(a) {
        this.wrapUp();
        if (a) {
            Event.stop(a)
        }
    },
    handleFormSubmission: function(d) {
        var b = this._form;
        var c = $F(this._controls.editor);
        this.prepareSubmission();
        var f = this.options.callback(b, c) || "";
        if (Object.isString(f)) {
            f = f.toQueryParams()
        }
        f.editorId = this.element.id;
        if (this.options.htmlResponse) {
            var a = Object.extend({
                evalScripts: true
            }, this.options.ajaxOptions);
            Object.extend(a, {
                parameters: f,
                onComplete: this._boundWrapperHandler,
                onFailure: this._boundFailureHandler
            });
            new Ajax.Updater({
                success: this.element
            }, this.url, a)
        } else {
            var a = Object.extend({
                method: "get"
            }, this.options.ajaxOptions);
            Object.extend(a, {
                parameters: f,
                onComplete: this._boundWrapperHandler,
                onFailure: this._boundFailureHandler
            });
            new Ajax.Request(this.url, a)
        }
        if (d) {
            Event.stop(d)
        }
    },
    leaveEditMode: function() {
        this.element.removeClassName(this.options.savingClassName);
        this.removeForm();
        this.leaveHover();
        this.element.style.backgroundColor = this._originalBackground;
        this.element.show();
        if (this.options.externalControl) {
            this.options.externalControl.show()
        }
        this._saving = false;
        this._editing = false;
        this._oldInnerHTML = null;
        this.triggerCallback("onLeaveEditMode")
    },
    leaveHover: function(a) {
        if (this.options.hoverClassName) {
            this.element.removeClassName(this.options.hoverClassName)
        }
        if (this._saving) {
            return
        }
        this.triggerCallback("onLeaveHover")
    },
    loadExternalText: function() {
        this._form.addClassName(this.options.loadingClassName);
        this._controls.editor.disabled = true;
        var a = Object.extend({
            method: "get"
        }, this.options.ajaxOptions);
        Object.extend(a, {
            parameters: "editorId=" + encodeURIComponent(this.element.id),
            onComplete: Prototype.emptyFunction,
            onSuccess: function(c) {
                this._form.removeClassName(this.options.loadingClassName);
                var b = c.responseText;
                if (this.options.stripLoadedTextTags) {
                    b = b.stripTags()
                }
                this._controls.editor.value = b;
                this._controls.editor.disabled = false;
                this.postProcessEditField()
            }.bind(this),
            onFailure: this._boundFailureHandler
        });
        new Ajax.Request(this.options.loadTextURL, a)
    },
    postProcessEditField: function() {
        var a = this.options.fieldPostCreation;
        if (a) {
            $(this._controls.editor)["focus" == a ? "focus" : "activate"]()
        }
    },
    prepareOptions: function() {
        this.options = Object.clone(Ajax.InPlaceEditor.DefaultOptions);
        Object.extend(this.options, Ajax.InPlaceEditor.DefaultCallbacks);
        [this._extraDefaultOptions].flatten().compact().each(function(a) {
            Object.extend(this.options, a)
        }.bind(this))
    },
    prepareSubmission: function() {
        this._saving = true;
        this.removeForm();
        this.leaveHover();
        this.showSaving()
    },
    registerListeners: function() {
        this._listeners = {};
        var a;
        $H(Ajax.InPlaceEditor.Listeners).each(function(b) {
            a = this[b.value].bind(this);
            this._listeners[b.key] = a;
            if (!this.options.externalControlOnly) {
                this.element.observe(b.key, a)
            }
            if (this.options.externalControl) {
                this.options.externalControl.observe(b.key, a)
            }
        }.bind(this))
    },
    removeForm: function() {
        if (!this._form) {
            return
        }
        this._form.remove();
        this._form = null;
        this._controls = {}
    },
    showSaving: function() {
        this._oldInnerHTML = this.element.innerHTML;
        this.element.innerHTML = this.options.savingText;
        this.element.addClassName(this.options.savingClassName);
        this.element.style.backgroundColor = this._originalBackground;
        this.element.show()
    },
    triggerCallback: function(b, a) {
        if ("function" == typeof this.options[b]) {
            this.options[b](this, a)
        }
    },
    unregisterListeners: function() {
        $H(this._listeners).each(function(a) {
            if (!this.options.externalControlOnly) {
                this.element.stopObserving(a.key, a.value)
            }
            if (this.options.externalControl) {
                this.options.externalControl.stopObserving(a.key, a.value)
            }
        }.bind(this))
    },
    wrapUp: function(a) {
        this.leaveEditMode();
        this._boundComplete(a, this.element)
    }
});
Object.extend(Ajax.InPlaceEditor.prototype, {
    dispose: Ajax.InPlaceEditor.prototype.destroy
});
Ajax.InPlaceCollectionEditor = Class.create(Ajax.InPlaceEditor, {
    initialize: function($super, c, b, a) {
        this._extraDefaultOptions = Ajax.InPlaceCollectionEditor.DefaultOptions;
        $super(c, b, a)
    },
    createEditField: function() {
        var a = document.createElement("select");
        a.name = this.options.paramName;
        a.size = 1;
        this._controls.editor = a;
        this._collection = this.options.collection || [];
        if (this.options.loadCollectionURL) {
            this.loadCollection()
        } else {
            this.checkForExternalText()
        }
        this._form.appendChild(this._controls.editor)
    },
    loadCollection: function() {
        this._form.addClassName(this.options.loadingClassName);
        this.showLoadingText(this.options.loadingCollectionText);
        var options = Object.extend({
            method: "get"
        }, this.options.ajaxOptions);
        Object.extend(options, {
            parameters: "editorId=" + encodeURIComponent(this.element.id),
            onComplete: Prototype.emptyFunction,
            onSuccess: function(transport) {
                var js = transport.responseText.strip();
                if (!/^\[.*\]$/.test(js)) {
                    throw "Server returned an invalid collection representation."
                }
                this._collection = eval(js);
                this.checkForExternalText()
            }.bind(this),
            onFailure: this.onFailure
        });
        new Ajax.Request(this.options.loadCollectionURL, options)
    },
    showLoadingText: function(b) {
        this._controls.editor.disabled = true;
        var a = this._controls.editor.firstChild;
        if (!a) {
            a = document.createElement("option");
            a.value = "";
            this._controls.editor.appendChild(a);
            a.selected = true
        }
        a.update((b || "").stripScripts().stripTags())
    },
    checkForExternalText: function() {
        this._text = this.getText();
        if (this.options.loadTextURL) {
            this.loadExternalText()
        } else {
            this.buildOptionList()
        }
    },
    loadExternalText: function() {
        this.showLoadingText(this.options.loadingText);
        var a = Object.extend({
            method: "get"
        }, this.options.ajaxOptions);
        Object.extend(a, {
            parameters: "editorId=" + encodeURIComponent(this.element.id),
            onComplete: Prototype.emptyFunction,
            onSuccess: function(b) {
                this._text = b.responseText.strip();
                this.buildOptionList()
            }.bind(this),
            onFailure: this.onFailure
        });
        new Ajax.Request(this.options.loadTextURL, a)
    },
    buildOptionList: function() {
        this._form.removeClassName(this.options.loadingClassName);
        this._collection = this._collection.map(function(d) {
            return 2 === d.length ? d : [d, d].flatten()
        });
        var b = ("value" in this.options) ? this.options.value : this._text;
        var a = this._collection.any(function(d) {
            return d[0] == b
        }.bind(this));
        this._controls.editor.update("");
        var c;
        this._collection.each(function(e, d) {
            c = document.createElement("option");
            c.value = e[0];
            c.selected = a ? e[0] == b : 0 == d;
            c.appendChild(document.createTextNode(e[1]));
            this._controls.editor.appendChild(c)
        }.bind(this));
        this._controls.editor.disabled = false;
        Field.scrollFreeActivate(this._controls.editor)
    }
});
Ajax.InPlaceEditor.prototype.initialize.dealWithDeprecatedOptions = function(a) {
    if (!a) {
        return
    }

    function b(c, d) {
        if (c in a || d === undefined) {
            return
        }
        a[c] = d
    }
    b("cancelControl", (a.cancelLink ? "link" : (a.cancelButton ? "button" : a.cancelLink == a.cancelButton == false ? false : undefined)));
    b("okControl", (a.okLink ? "link" : (a.okButton ? "button" : a.okLink == a.okButton == false ? false : undefined)));
    b("highlightColor", a.highlightcolor);
    b("highlightEndColor", a.highlightendcolor)
};
Object.extend(Ajax.InPlaceEditor, {
    DefaultOptions: {
        ajaxOptions: {},
        autoRows: 3,
        cancelControl: "link",
        cancelText: "cancel",
        clickToEditText: "Click to edit",
        externalControl: null,
        externalControlOnly: false,
        fieldPostCreation: "activate",
        formClassName: "inplaceeditor-form",
        formId: null,
        highlightColor: "#ffff99",
        highlightEndColor: "#ffffff",
        hoverClassName: "",
        htmlResponse: true,
        loadingClassName: "inplaceeditor-loading",
        loadingText: "Loading...",
        okControl: "button",
        okText: "ok",
        paramName: "value",
        rows: 1,
        savingClassName: "inplaceeditor-saving",
        savingText: "Saving...",
        size: 0,
        stripLoadedTextTags: false,
        submitOnBlur: false,
        textAfterControls: "",
        textBeforeControls: "",
        textBetweenControls: ""
    },
    DefaultCallbacks: {
        callback: function(a) {
            return Form.serialize(a)
        },
        onComplete: function(b, a) {
            new Effect.Highlight(a, {
                startcolor: this.options.highlightColor,
                keepBackgroundImage: true
            })
        },
        onEnterEditMode: null,
        onEnterHover: function(a) {
            a.element.style.backgroundColor = a.options.highlightColor;
            if (a._effect) {
                a._effect.cancel()
            }
        },
        onFailure: function(b, a) {
            alert("Error communication with the server: " + b.responseText.stripTags())
        },
        onFormCustomization: null,
        onLeaveEditMode: null,
        onLeaveHover: function(a) {
            a._effect = new Effect.Highlight(a.element, {
                startcolor: a.options.highlightColor,
                endcolor: a.options.highlightEndColor,
                restorecolor: a._originalBackground,
                keepBackgroundImage: true
            })
        }
    },
    Listeners: {
        click: "enterEditMode",
        keydown: "checkForEscapeOrReturn",
        mouseover: "enterHover",
        mouseout: "leaveHover"
    }
});
Ajax.InPlaceCollectionEditor.DefaultOptions = {
    loadingCollectionText: "Loading options..."
};
Form.Element.DelayedObserver = Class.create({
    initialize: function(b, a, c) {
        this.delay = a || 0.5;
        this.element = $(b);
        this.callback = c;
        this.timer = null;
        this.lastValue = $F(this.element);
        Event.observe(this.element, "keyup", this.delayedListener.bindAsEventListener(this))
    },
    delayedListener: function(a) {
        if (this.lastValue == $F(this.element)) {
            return
        }
        if (this.timer) {
            clearTimeout(this.timer)
        }
        this.timer = setTimeout(this.onTimerEvent.bind(this), this.delay * 1000);
        this.lastValue = $F(this.element)
    },
    onTimerEvent: function() {
        this.timer = null;
        this.callback(this.element, $F(this.element))
    }
});
var PTK;
if (typeof PTK == "undefined") {
    PTK = {}
}
if (typeof PTK.Ajax == "undefined") {
    PTK.Ajax = {
        ajaxed: {},
        refreshes: {},
        popups: {},
        offs: {},
        ajaxifyForms: function(a) {
            this.ajaxify(a, true)
        },
        ajaxifyLinks: function(a) {
            this.ajaxify(a, false)
        },
        ajaxify: function(json, forms) {
            var toAdd = eval("({" + json.replace(/,$/, "") + "})");
            for (var elemId in toAdd) {
                this.deactivate(elemId);
                this.ajaxed[elemId] = toAdd[elemId];
                if (toAdd[elemId].e != false) {
                    if (!$(elemId)) {
                        this.log("element with id [" + elemId + "] not found for ajaxify " + (forms ? "forms" : "links"))
                    } else {
                        if (forms) {
                            this.ajaxed[elemId].observer = this.eventedSubmitForm.bindAsEventListener(this);
                            Event.observe(elemId, "submit", this.ajaxed[elemId].observer);
                            var formSubmits = $(elemId).select('[type="submit"], [type="image"]');
                            if (formSubmits.length) {
                                if (formSubmits.length == 1) {
                                    formSubmits[0].addClassName("submit-to-send")
                                } else {
                                    $(elemId).on("click", '[type="submit"], [type="image"]', this.clickedSubmitInputHandler.bindAsEventListener(this))
                                }
                            }
                        } else {
                            this.ajaxed[elemId].observer = this.eventedClickLink.bindAsEventListener(this, elemId);
                            Event.observe(elemId, "click", this.ajaxed[elemId].observer)
                        }
                    }
                }
            }
        },
        deactivate: function(a) {
            if (this.ajaxed[a] && this.ajaxed[a].observer) {
                Event.stopObserving(a, "click", this.ajaxed[a].observer);
                Event.stopObserving(a, "submit", this.ajaxed[a].observer);
                this.ajaxed[a] = null
            }
        },
        eventedSubmitForm: function(b) {
            var a = Event.element(b);
            var c = (a.enctype == "multipart/form-data") ? this.submitIframeForm(a) : this.submitForm(a);
            if (!c) {
                Event.stop(b)
            }
        },
        eventedClickLink: function(b, d) {
            var a = b.findElement("a");
            if (a && d != a.id) {
                return
            } else {
                if (!a) {
                    a = $(d)
                }
            }
            var c = PTK.Ajax.clickLink(a);
            if (!c) {
                Event.stop(b)
            }
        },
        submitForm: function(form) {
            form = $(form);
            var meta = this.ajaxed[form.id];
            if (meta) {
                if (meta.b) {
                    var process = eval(meta.b);
                    if (!process) {
                        return false
                    }
                }
                if (meta.l) {
                    $(meta.l).show()
                }
                if (meta.v) {
                    if (!meta.cc) {
                        meta.cc = ""
                    }
                    PTK.Ajax.createCover(meta.v, false, meta.cc)
                }
                var params = meta.p ? meta.p + "&" : "";
                var formElements = form.elements;
                for (i = 0; i < formElements.length; i++) {
                    var type = formElements[i].type;
                    var name = formElements[i].name;
                    switch (formElements[i].type) {
                        case "radio":
                            if (formElements[i].checked) {
                                params += formElements[i].name + "=" + encodeURIComponent(formElements[i].value) + "&"
                            }
                            break;
                        case "checkbox":
                            if (formElements[i].checked) {
                                params += formElements[i].name + "=" + encodeURIComponent(formElements[i].value) + "&"
                            } else {
                                params += formElements[i].name + "=&"
                            }
                            break;
                        case "select-multiple":
                            var selectLength = formElements[i].options.length;
                            var valueTable;
                            for (var j = 0; j < selectLength; j++) {
                                if (formElements[i].options[j].selected) {
                                    params += formElements[i].name + "=" + encodeURIComponent(formElements[i].options[j].value) + "&"
                                }
                            }
                            break;
                        case "submit":
                            if (formElements[i].hasClassName("submit-to-send")) {
                                params += formElements[i].name + "=" + encodeURIComponent(formElements[i].value) + "&"
                            }
                            break;
                        case "image":
                            if (formElements[i].hasClassName("submit-to-send")) {
                                params += formElements[i].name + "=" + encodeURIComponent(formElements[i].value) + "=" + encodeURIComponent(formElements[i].value) + "&"
                            }
                            break;
                        default:
                            params += formElements[i].name + "=" + encodeURIComponent(formElements[i].value) + "&"
                    }
                }
                var q = form.readAttribute("action").indexOf("?");
                params += q == -1 ? "" : form.readAttribute("action").substring(q + 1);
                if (meta.co && meta.m) {
                    var parameters = {
                            c: meta.co,
                            m: meta.m,
                            p: Object.toJSON(form.serialize(true))
                        },
                        onComplete = function(response) {
                            meta.c ? meta.c(response, form.id) : PTK.Ajax.defaultCallback(response, form.id)
                        };
                    PTK.Ajax.sendRequest(meta.a, parameters, form.method, onComplete)
                } else {
                    var onComplete = function(response) {
                        if (PTK.Ajax.isErrorInResponse(response, meta)) {
                            return
                        }
                        meta.c ? meta.c(response, form.id) : PTK.Ajax.defaultCallback(response, form.id)
                    };
                    PTK.Ajax.sendRequest(meta.a, params, form.method, onComplete)
                }
            }
            return false
        },
        markSubmitToSend: function(c) {
            var b = c.up("form"),
                a = b.select(".submit-to-send");
            a.each(function(d) {
                d.removeClassName("submit-to-send")
            });
            c.addClassName("submit-to-send")
        },
        clickedSubmitInputHandler: function(b) {
            var a = b.findElement();
            this.markSubmitToSend(a)
        },
        clickLink: function(link) {
            link = $(link);
            var meta = this.ajaxed[link.id];
            if (meta) {
                if (meta.sg) {
                    var popups = $$("div.tooltip-popup");
                    if (popups.length > 0) {
                        for (var i = 0; i < popups.length; i++) {
                            if (popups[i].style.display != "none") {
                                return false
                            }
                        }
                    }
                }
                if (meta.b) {
                    var process = eval(meta.b);
                    if (!process) {
                        return false
                    }
                }
                var progress = $(meta.l || (link.id + "-progress"));
                if (progress) {
                    progress.show()
                }
                if (meta.v) {
                    if (!meta.cc) {
                        meta.cc = ""
                    }
                    PTK.Ajax.createCover(meta.v, false, meta.cc)
                }
                var params = meta.p || "";
                if (meta.fx) {
                    params = "effect=" + meta.fx + "&" + params
                }
                if (Prototype.Browser.IE) {
                    params = "noCache=" + new Date().getTime() + "&" + params;
                    if (!link.readAttribute("href")) {
                        link.readAttribute("href", window.location.href)
                    }
                }
                if (link.href) {
                    var q = link.href.indexOf("?");
                    if (q != -1) {
                        params = link.href.substring(q + 1).split("#")[0] + "&" + params
                    }
                }
                if (meta.reg) {
                    meta.a = link.href.split("#")[0]
                }
                var ajaxMethod = "get";
                if (!Object.isUndefined(meta.am) && meta.am != null) {
                    var method = (meta.am).toLowerCase();
                    if (method == "post" || method == "get") {
                        ajaxMethod = method
                    }
                }
                var onComplete = function(response) {
                    if (PTK.Ajax.isErrorInResponse(response, meta)) {
                        if (meta.uurl) {
                            window.location = meta.uurl
                        }
                        return
                    }
                    meta.c ? meta.c(response, link.id) : PTK.Ajax.defaultCallback(response, link.id)
                };
                PTK.Ajax.sendRequest(meta.a, params, ajaxMethod, onComplete)
            }
            return false
        },
        sendRequest: function(a, d, e, c) {
            if (a && a != "" && d && e && c && typeof c == "function") {
                var b = new Ajax.Request(a, {
                    parameters: d,
                    method: e,
                    requestHeaders: ["Cache-Control", "no-cache", "Pragma", "no-cache"],
                    onComplete: c
                })
            }
        },
        fire: function(id, p) {
            var meta = this.ajaxed[id];
            if (!meta) {
                return false
            }
            if (meta.b) {
                var process = eval(meta.b);
                if (!process) {
                    return false
                }
            }
            var progress = $(meta.l || (id + "-progress"));
            if (progress) {
                progress.show()
            }
            if (meta.v) {
                if (!meta.cc) {
                    meta.cc = ""
                }
                PTK.Ajax.createCover(meta.v, false, meta.cc)
            }
            var params = meta.p || "";
            if (meta.fx) {
                params = "effect=" + meta.fx + "&" + params
            }
            if (Prototype.Browser.IE) {
                params = "noCache=" + new Date().getTime() + "&" + params
            }
            if (p) {
                params = p + "&" + params
            }
            var ajaxMethod = "get";
            if (!Object.isUndefined(meta.am) && meta.am != null) {
                var method = (meta.am).toLowerCase();
                if (method == "post" || method == "get") {
                    ajaxMethod = method
                }
            }
            var onComplete = function(response) {
                if (PTK.Ajax.isErrorInResponse(response, meta) || (meta.reg && response.responseText.indexOf('id="' + meta.reg + '"') == -1)) {
                    if (meta.uurl) {
                        window.location = meta.uurl
                    }
                    return
                }
                meta.c ? meta.c(response, id) : PTK.Ajax.defaultCallback(response, id)
            };
            PTK.Ajax.sendRequest(meta.a, params, ajaxMethod, onComplete)
        },
        popupCallback: function(f, a) {
            var j = PTK.Ajax.ajaxed[a];
            if (j.i) {
                PTK.Ajax.ajaxed[j.i] = PTK.Ajax.ajaxed[a];
                a = j.i
            }
            var g = j.p;
            var h = "popupClass";
            var k = new RegExp("[?|&]" + h + "=(.*?)&");
            var e = k.exec(g + "&");
            if (e && e.length > 1) {
                if (j.pc == undefined) {
                    j.pc = e[1]
                } else {
                    j.pc = j.pc + " " + e[1]
                }
            }
            var b = PTK.Ajax.popupOpen(a, j.cc, j.pc, j.r);
            var d = $("portal-box");
            var c = {};
            c.update = b.identify();
            PTK.Ajax.defaultCallback(f, a, c);
            PTK.Ajax.popupSetPositionHorizontal(a + "-popup");
            PTK.Ajax.popupRegisterClose(a + "-popup-close");
            if (j.s == true) {
                window.scroll(0, 0)
            }
        },
        popupSetCssPosition: function(a) {
            if ($(a).hasClassName("opl-popup")) {
                if (document.viewport.getHeight() < $(a).getHeight() + $(a).viewportOffset().top) {
                    var b = parseInt($(a).getStyle("top")) + 1;
                    $(a).setStyle({
                        position: "absolute",
                        top: b + "px"
                    })
                }
            }
        },
        popupSetPositionHorizontal: function(a) {
            var b = (document.viewport.getWidth() - $(a).getWidth()) / 2;
            $(a).setStyle({
                left: b + "px"
            });
            $(a).addClassName("popup-js")
        },
        popupSetPositionToElement: function(f, l, n, h) {
            var m = document.viewport.getDimensions().width,
                o = $(f).getWidth(),
                c = l.viewportOffset(l).left,
                k = "",
                a = $(f);
            if (a) {
                if (h && h != "") {
                    var e = l.getDimensions(),
                        b = l.cumulativeOffset(),
                        j = a.getDimensions(),
                        d = 0,
                        g = 0;
                    if (h == "top-right") {
                        d = b.left + e.width - j.width;
                        g = b.top - j.height
                    }
                    if (h == "top-left") {
                        d = b.left;
                        g = b.top - j.height
                    }
                    a.setStyle({
                        left: d + "px",
                        top: g + "px",
                        position: "absolute"
                    })
                } else {
                    if (n) {
                        c += $(l).getWidth()
                    }
                    if (m < o + c + 40) {
                        c = m - o - 40
                    }
                    if (l.up(".popup-content") == undefined) {
                        k = l.cumulativeOffset().top + l.getHeight() + (n ? 0 : 5)
                    } else {
                        k = l.viewportOffset(l).top + l.getHeight() + (n ? 0 : 5)
                    }
                    a.setStyle({
                        left: c + "px",
                        top: k + "px",
                        position: "absolute"
                    })
                }
                a.addClassName("popup-js")
            }
        },
        eventedPopupClose: function(c) {
            var b = Event.element(c).tagName == "A" ? Event.element(c) : Event.element(c).up("a"),
                a = b.readAttribute("href") ? b.readAttribute("href").trim() : null;
            redirect = false;
            PTK.Ajax.parentPopupClose(b);
            if (a && a != "" && a != "#" && b.hasClassName("redirect")) {
                redirect = true
            }
            if (!redirect) {
                Event.stop(c)
            }
        },
        eventedStaticPopupClose: function(d) {
            var c = Event.element(d);
            var a = c.up(".popup");
            var b = a.id;
            hiddenContainerId = "static-popup-" + b.substr(0, (b.length - 6));
            var e = $(hiddenContainerId);
            if (Object.isUndefined(e)) {
                if (window.console) {
                    console.log("Nie ma kontenera o id: " + hiddenContainerId)
                }
            } else {
                e.update(a.innerHTML)
            }
            PTK.Ajax.popupClose(a);
            Event.stop(d)
        },
        staticTooltipClose: function(a) {
            tooltipId = a.id;
            hiddenContainerId = "static-popup-" + tooltipId.substr(0, (tooltipId.length - 6));
            var b = $(hiddenContainerId);
            if (!b) {
                if (window.console) {
                    console.log("Nie ma kontenera o id: " + hiddenContainerId)
                }
            } else {
                b.update(a.innerHTML)
            }
            PTK.Ajax.popupClose(a)
        },
        eventedTooltipPopupClose: function(b) {
            var a = Event.element(b);
            PTK.Ajax.parentTooltipPopupClose(a);
            Event.stop(b)
        },
        parentPopupClose: function(b) {
            var a = b.ancestors().find(function(c) {
                return c.hasClassName("popup")
            });
            PTK.Ajax.popupClose(a);
            return true
        },
        parentTooltipPopupClose: function(b) {
            var a = b.ancestors().find(function(c) {
                return c.hasClassName("tooltip-popup")
            });
            PTK.Ajax.tooltipPpopupClose(a);
            return true
        },
        tooltipPpopupClose: function(a) {
            a = $(a);
            if (a) {
                a.hide()
            }
        },
        hasShadow: function(a) {
            var b = $(a);
            if (!b) {
                this.log("Could not find an HTML element with ID: " + a + " defined in toUpdate attribute of ptk:ajaxify tag.");
                return false
            } else {
                if (b.hasClassName("popup-shadow")) {
                    return true
                } else {
                    return false
                }
            }
        },
        popupOpen: function(b, e, j, a) {
            var c = $(b + "-popup");
            var d = $(b + "-popup-curtain");
            if (!d) {
                d = new Element("div", {
                    id: b + "-popup-curtain",
                    "class": "o-cover cover-popup opl-cover curtain " + (e ? " " + e : "")
                });
                document.body.appendChild(d)
            } else {
                d.show()
            }
            var k = this;
            d.observe("click", function() {
                if (!this.hasClassName("static-popup-curtain")) {
                    k.popupClose(b + "-popup")
                }
            });
            var h = document.viewport.getHeight() > document.documentElement.scrollHeight ? document.viewport.getHeight() : document.documentElement.scrollHeight;
            d.setStyle({
                height: h + "px",
                position: "absolute"
            });
            if (!c) {
                c = new Element("div", {
                    id: b + "-popup",
                    "class": "o-popup opl-popup popup" + (j ? " " + j : "")
                });
                ($$("body")[0]).appendChild(c);
                if (a) {
                    var g = $(b);
                    var f = Element.cumulativeOffset(g);
                    c.setStyle({
                        left: "0px",
                        top: f[1] + "px"
                    });
                    if (j.indexOf("popup-absolute") > -1) {
                        g.scrollTo()
                    }
                }
            } else {
                c.update("");
                c.show()
            }
            return c
        },
        popupOpenStatic: function(l, f, p, e, o) {
            var m = l.identify();
            if ($(l + "-popup") != undefined) {
                return true
            }
            if (e == "asTooltip") {
                $$(".asTooltip").each(function(q) {
                    PTK.Ajax.staticTooltipClose(q)
                })
            }
            var g = "static-popup-";
            var b = g + m;
            var j = $(b);
            if (!j) {
                throw ("Nie ma elementu o id " + b)
            }
            if (e == "asTooltip") {
                $$(".asTooltip").each(function(q) {
                    q.addClassName("hide")
                })
            }
            var a = this.popupOpen(m, f, p, false);
            if (e == "asTooltip") {
                a.addClassName("asTooltip")
            }
            var d = $(m + "-popup-curtain");
            var n = "open";
            PTK.Ajax.changeCurtain(l, d, n);
            if (e == "asTooltip") {
                a.addClassName("asTooltip")
            }
            a.insert(j.innerHTML);
            d.addClassName("static-popup-curtain");
            j.update();
            var c = a.select(".popup-close"),
                h, k;
            if (c.length && c[0]) {
                h = c[0];
                k = h.identify()
            } else {
                k = "popup-close-" + m;
                h = new Element("a", {
                    id: k,
                    "class": "close popup-close popup-close-right g-right o-popup__close"
                }).update("zamknij");
                a.select(".popup-inner")[0].insert({
                    top: h
                })
            }
            if (e != "") {
                if (e == "centerOnElement") {
                    this.popupSetPositionToElement(a.id, l)
                } else {
                    if (e == "asTooltip") {
                        a.addClassName("asTooltip");
                        this.popupSetPositionToElement(a.id, l, true)
                    } else {
                        this.popupSetPositionToElement(a.id, l, null, e)
                    }
                }
            } else {
                this.popupSetPositionHorizontal(a.id)
            }
            if (o) {
                o(l, a)
            }
            Event.observe(d, "click", function() {
                h.click()
            });
            Event.observe(h, "click", function(q) {
                n = "close";
                PTK.Ajax.changeCurtain(l, d, n);
                PTK.Ajax.eventedStaticPopupClose(q)
            });
            return a
        },
        changeCurtain: function(c, b, d) {
            if ($("portal-box").next(".curtain")) {
                var a = "";
                if (d == "open") {
                    $$(".curtain").each(function(e) {
                        a = e.id.slice(0, -8);
                        if (a) {
                            $(a).setStyle({
                                zIndex: "1"
                            });
                            e.addClassName("hidden")
                        }
                    });
                    $(c.id + "-popup").setStyle({
                        zIndex: "99"
                    });
                    b.removeClassName("hidden")
                }
                if (d == "close") {
                    $$(".curtain").each(function(e) {
                        a = e.id.slice(0, -8);
                        $(a).setStyle({
                            zIndex: "51"
                        });
                        e.removeClassName("hidden")
                    })
                }
            }
        },
        popupClose: function(a) {
            a = $(a);
            if (a) {
                a.fire("ptk:ajax:popupclose", {
                    popup: a
                });
                var b = $(a.id + "-curtain");
                a.remove();
                if (b) {
                    b.remove()
                }
            }
        },
        popupCloseWithTimeout: function(d, b) {
            var a = "PTK.Ajax.popupClose('" + d + "')";
            var c = setTimeout(a, b * 1000)
        },
        popupRegisterClose: function(b) {
            var a = $(b);
            if (a) {
                Event.observe(a, "click", PTK.Ajax.eventedPopupClose)
            }
        },
        tooltipPopupRegisterClose: function(b) {
            var a = $(b);
            if (a) {
                Event.observe(a, "click", PTK.Ajax.eventedTooltipPopupClose)
            }
        },
        tooltipPopupCallback: function(d, b) {
            var a = $(b + "-popup");
            var c = $(b);
            if (!a) {
                Element.insert(c, {
                    after: '<div id="' + b + '-popup" class="tooltip-popup"></div>'
                })
            } else {
                a.update("");
                a.show()
            }
            PTK.Ajax.defaultCallback(d, b);
            PTK.Ajax.tooltipPopupRegisterClose(b + "-popup-close")
        },
        isErrorInResponse: function(b, c) {
            var a = false;
            if ((b.status == 403 || b.status == 404 || b.status == 409 || b.status == 500 || b.status == 503) || (!c.reg && b.responseText.indexOf("<body") != -1)) {
                if (window.console) {
                    console.log("PTK.Ajax onComplete terminated. Found <body> in resposeText. [" + (c.p ? c.p : "") + "]")
                }
                a = true
            } else {
                if (b.responseText == "") {
                    if (window.console) {
                        console.log("PTK.Ajax onComplete terminated. resposeText is empty. [" + (c.p ? c.p : "") + "]")
                    }
                    a = true
                }
            }
            if (a) {
                if (!Object.isUndefined(c.cv) && c.cv != null && $(c.cv + "-cover")) {
                    $(c.cv + "-cover").remove()
                } else {
                    if (!Object.isUndefined(c.v) && c.v != null && $(c.v + "-cover")) {
                        $(c.v + "-cover").remove()
                    }
                }
            }
            return a
        },
        defaultCallback: function(serverResponse, id, updateResult) {
            try {
                var response = [],
                    partScripts = [],
                    externalScripts = [],
                    afterCallbacks = [],
                    result = {},
                    meta = PTK.Ajax.ajaxed[id],
                    updatedEls = [];
                var parts = serverResponse.responseText.split("<!--@@@@@@-->");
                for (var i = 0; i < parts.length; i++) {
                    var part = parts[i];
                    if (typeof meta != "undefined" && meta.reg) {
                        part = this.getBodyInnerHtml(part);
                        this.applyStyles(part);
                        var responseProxy = new Element("div", {
                            id: "ptk-ajax-proxy",
                            style: "display:none;"
                        });
                        responseProxy.innerHTML = part;
                        try {
                            var region = responseProxy.select("#" + meta.reg)[0];
                            part = region.innerHTML
                        } catch (e) {
                            this.log("defaultCallback exepction, region not found: ", e)
                        }
                    }
                    if (!part.blank()) {
                        var scripts = part.extractScripts();
                        if (typeof $LAB !== "undefined") {
                            var extracted = this.extractAndStripAsyncScriptPaths(part);
                            externalScripts.push(extracted.paths);
                            part = extracted.html
                        }
                        if (typeof meta == "undefined" || typeof meta.reg == "undefined" || !meta.reg) {
                            var resultScript = scripts.pop();
                            partScripts = partScripts.concat([], scripts);
                            eval(resultScript);
                            if (updateResult) {
                                var hash = new Hash(result);
                                hash.update(updateResult);
                                result = hash.toObject()
                            }
                            if (result.redirect) {
                                window.location = result.redirect;
                                return true
                            } else {
                                if (result.action == "refresh") {
                                    if (result.update && PTK.Ajax.offs[result.update]) {
                                        return true
                                    }
                                }
                            }
                        } else {
                            partScripts = partScripts.concat([], scripts)
                        }
                        var update, effect;
                        if (typeof meta != "undefined" && meta.u) {
                            update = meta.u;
                            effect = meta.fx
                        } else {
                            update = result.update;
                            effect = result.effect
                        }
                        response = part.stripScripts();
                        if (update) {
                            if (PTK.Ajax.hasShadow($(update))) {
                                var innerShadow = new Element("div", {
                                    "class": "popup-shadow-inner"
                                });
                                $(update).update(innerShadow);
                                PTK.Ajax.update(innerShadow, response.strip(), effect)
                            } else {
                                PTK.Ajax.update(update, response, effect)
                            }
                            updatedEls.push(update)
                        }
                    }
                }
                if (typeof meta != "undefined" && meta.after) {
                    afterCallbacks.push(meta.after)
                }
                if (externalScripts.length) {
                    $LAB.setOptions({
                        AlwaysPreserveOrder: true,
                        AppendTo: "body",
                        AllowDuplicates: false
                    }).script(externalScripts).wait(function() {
                        PTK.Ajax.callScriptsAndCallbacks(partScripts, afterCallbacks)
                    })
                } else {
                    this.callScriptsAndCallbacks(partScripts, afterCallbacks)
                }
                if (updatedEls.length) {
                    updatedEls.each(function(update) {
                        var u = $(update);
                        if (u) {
                            u.fire("ptk:ajax:after", {
                                meta: meta
                            })
                        }
                    })
                }
                if (meta) {
                    var progress = $(meta.l || (id + "-progress"));
                    if (progress) {
                        progress.hide()
                    }
                    if (meta.v) {
                        var coversToRemove = meta.v.split(",");
                        coversToRemove.each(function(coverId) {
                            var cover = $(coverId + "-cover");
                            if (cover != null) {
                                cover.remove()
                            }
                        })
                    }
                }
                var element = $(id);
                if (element) {
                    element.fire("ptk:ajax:callback", {
                        meta: meta
                    })
                }
            } catch (ex) {
                this.log("defaultCallback exception: ", ex)
            }
            PTK.Ajax.popupSetCssPosition(update);
            return false
        },
        extractAndStripAsyncScriptPaths: function(b) {
            var d = '<script type="ptk/async-script" rel="';
            var f = '-async-script-end"><\/script>';
            var e = [];
            var a = [];
            var c = b.split(d);
            if (c.length > 1) {
                c.each(function(l, j) {
                    if (j === 0) {
                        a.push(l);
                        return
                    }
                    var k = l.split(f);
                    var g = k[0].strip();
                    var h = true;
                    $$("script").each(function(n) {
                        var p = n.src,
                            o = "";
                        if (p) {
                            o = (p.split("/")).last();
                            if (o.indexOf(g) > -1) {
                                h = false;
                                throw $break
                            }
                        }
                    });
                    if (h && g) {
                        var m = g.indexOf("http") != -1 ? g : "/ocp-http/200401/map/js/" + g + ".js";
                        e.push(m)
                    }
                    a.push(k[1])
                });
                b = a.join("")
            }
            return {
                paths: e,
                html: b
            }
        },
        evalCallScripts: function(scripts) {
            this.fixDocumentWriteInAjax();
            var self = this;
            scripts.each(function(s) {
                if (s.strip() !== "") {
                    try {
                        if (window.execScript) {
                            window.execScript(s)
                        } else {
                            eval.call(null, s)
                        }
                    } catch (e) {
                        self.log("ERROR: evalCallScripts script: ", s);
                        self.log("       throws exception: ", e)
                    }
                }
            });
            this.revertDocumentWrite()
        },
        callScriptsAndCallbacks: function(scripts, callbacks) {
            PTK.Ajax.evalCallScripts(scripts);
            if (callbacks.length) {
                callbacks.each(function(callback) {
                    eval(callback)
                })
            }
        },
        update: function(c, b, a) {
            var d = $(c);
            if (d) {
                var e = false;
                var g = false;
                if (a) {
                    var f = a.indexOf("-");
                    e = f != -1 ? a.substring(0, f) : a;
                    g = a.endsWith("-before")
                }
                if (e && g) {
                    this.effect(e, d, b)
                } else {
                    if (e && !g) {
                        d.hide()
                    }
                    d.update(b)
                }
                if (e && !g) {
                    this.effect(e, d)
                }
            }
        },
        generateRefreshes: function(json) {
            try {
                var upgrades = eval("([" + json.replace(/,$/, "") + "])");
                for (var i = 0; i < upgrades.length; i++) {
                    var u = upgrades[i];
                    var group = u.g;
                    if (this.refreshes[group]) {
                        if (this.refreshes[group].e.indexOf(u.e) == -1) {
                            this.refreshes[group].e.push(u.e)
                        }
                        if (this.refreshes[group].t < u.t) {
                            this.refreshes[group].t = u.t
                        }
                    } else {
                        this.refreshes[group] = {
                            d: u.d || 5,
                            t: u.t || 3,
                            c: u.c,
                            e: [u.e],
                            a: u.a,
                            p: u.p,
                            s: u.s,
                            n: u.n,
                            ex: u.ex,
                            cv: u.cv,
                            rs: false
                        }
                    }
                    var refreshMarker = $(u.e + "-rs");
                    if (refreshMarker) {
                        refreshMarker.show()
                    }
                }
                if (upgrades.length > 0) {
                    for (var group in this.refreshes) {
                        if (this.refreshes[group].pe) {
                            this.refreshes[group].pe.stop()
                        }
                        var pe = new PeriodicalExecuter(function(pe) {
                            var group = this.refreshGroup;
                            var meta = PTK.Ajax.refreshes[group];
                            if (meta.t > 0) {
                                if (meta.n) {
                                    if (this.nextDelay == -1) {
                                        if (this.executionsPassed < this.executionsToPass) {
                                            this.executionsPassed++;
                                            return
                                        } else {
                                            this.executionsToPass *= 2;
                                            this.executionsPassed = 1
                                        }
                                    } else {
                                        this.executionsToPass = this.nextDelay / meta.d;
                                        this.executionsPassed = 1;
                                        this.nextDelay = -1
                                    }
                                    if (meta.t == 1) {
                                        this.executionsToPass = 1;
                                        this.executionsPassed = 1
                                    }
                                }
                            }
                            var expired = "";
                            var get = meta.e.join(",");
                            if (meta.t <= 0) {
                                if (meta.rs == false) {
                                    pe.stop()
                                }
                                if (meta.ex) {
                                    if (meta.ex.match(/^\w/)) {
                                        get = meta.ex
                                    } else {
                                        expired = meta.ex.replace(/^./, "&")
                                    }
                                } else {
                                    return
                                }
                            }
                            if (!Object.isUndefined(meta.s) && meta.s != null && !$(meta.s)) {
                                pe.stop();
                                return
                            }
                            if (!Object.isUndefined(meta.cv) && meta.cv != null && !$(meta.cv + "-cover")) {
                                if (!meta.cc) {
                                    meta.cc = ""
                                }
                                PTK.Ajax.createCover(meta.cv, false, meta.cc)
                            }
                            var ajaxMethod = "get";
                            if (!Object.isUndefined(meta.am) && meta.am != null) {
                                var method = (meta.am).toLowerCase();
                                if (method == "post" || method == "get") {
                                    ajaxMethod = method
                                }
                            }
                            if (meta.rs == false) {
                                meta.rs = true;
                                var param = "group=" + group + "&toGet=" + get + "&" + meta.p + expired;
                                if (meta.t == 1) {
                                    param += "&lastIteration=true"
                                }
                                var onComplete = function(response) {
                                    if (PTK.Ajax.isErrorInResponse(response, meta)) {
                                        return
                                    }
                                    meta.rs = false;
                                    meta.c ? meta.c(response) : PTK.Ajax.defaultCallback(response)
                                };
                                PTK.Ajax.sendRequest(meta.a, param, ajaxMethod, onComplete)
                            }
                            meta.t = meta.t - 1
                        }, (this.refreshes[group].d));
                        pe.refreshGroup = group;
                        this.refreshes[group].pe = pe;
                        if (Object.isNumber(this.refreshes[group].n)) {
                            this.refreshes[group].pe.nextDelay = this.refreshes[group].n;
                            this.refreshes[group].pe.executionsToPass = 1;
                            this.refreshes[group].pe.executionsPassed = 1
                        }
                    }
                }
            } catch (ex) {}
        },
        refreshOff: function(b, a) {
            if (!Object.isUndefined(this.refreshes[b])) {
                var c = this.refreshes[b].e.without(a);
                this.offs[a] = true;
                if (c.length == 0) {
                    this.refreshes[b].pe.stop();
                    delete this.refreshes[b]
                } else {
                    this.refreshes[b].e = c
                }
            }
        },
        refreshIsActive: function(a) {
            if (this.refreshes[a] && this.refreshes[a].pe && this.refreshes[a].pe.timer) {
                return true
            }
            return false
        },
        effectPresets: {
            SlideDown: "new Effect.SlideDown    (element, { duration: 0.5 });",
            SlideUp: "new Effect.SlideUp        (element, { duration: 0.5, afterFinish: function() { element.update(response); }});",
            ConfigDown: "new Effect.BlindDown    (element, { duration: 0.5, afterFinish: function() { PTK.Portlets.hidePortletProgress(element); }});",
            ConfigUp: "new Effect.BlindUp        (element, { duration: 0.5, afterFinish: function() { PTK.Portlets.hidePortletProgress(element); element.update(response); }});",
            AllDown: "new Effect.BlindDown    (element, { duration: 0.7, afterFinish: function() { PTK.Portlets.hidePortletProgress(element); } });",
            AllDownSimple: "new Effect.BlindDown(element, { duration: 0.7});",
            AllDownSlowedSimple: "setTimeout(function(){new Effect.BlindDown(element, { duration: 0.7})},1000);",
            AllUp: "new Effect.BlindUp        (element, { duration: 0.7, afterFinish: function() { PTK.Portlets.hidePortletProgress(element); element.update(response); }});",
            AllUpSimple: "new Effect.BlindUp(element, { duration: 0.7});",
            ShowPortlet: "new Effect.Appear        (element, { duration: 0.2, afterFinish: function() { PTK.Portlets.hidePortletProgress(element); }});",
            ClosePortlet: "new Effect.Fade        (element, { duration: 0.2, afterFinish: function() { PTK.Portlets.hidePortletProgress(element); element.update(response); }});",
            AllAppearSimple: "new Effect.Appear(element, { duration: 1});",
            AllFadeSimple: "new Effect.Fade(element, { duration: 0.2});",
            CompareDown: "new Effect.BlindDown   (element, { duration: 0.5, afterFinish: function() {hideComparePortletProgress()} });",
            CompareUp: "new Effect.BlindUp     (element, { duration: 0.5, afterFinish: function() {hideComparePortletProgress()} });"
        },
        effect: function(effectName, element, response) {
            try {
                var call = this.effectPresets[effectName];
                if (call) {
                    eval(call)
                } else {
                    this.log("no preset for [" + effectName + "]")
                }
            } catch (ex) {
                this.log("effect call with params [" + effectName + "/" + element + "] exception: " + ex)
            }
        },
        createCover: function(d, b, a) {
            var c = d.split(",");
            c.each(function(f) {
                var e = $(f);
                if (e != null) {
                    var j = "";
                    if (b == null || b != true) {
                        j = "transparent-cover"
                    }
                    var h = document.createElement("div");
                    h.id = e.id + "-cover";
                    h.style.position = "absolute";
                    h.style.overflow = "hidden";
                    h.style.display = "none";
                    h.className = "content-cover o-cover " + j + " " + (a ? a : "");
                    var g = document.createElement("div");
                    g.style.width = e.scrollWidth + "px";
                    g.style.height = e.scrollHeight + "px";
                    h.appendChild(g);
                    e.appendChild(h);
                    Position.clone(e, h);
                    h.style.display = ""
                }
            })
        },
        submitIframeForm: function(b) {
            b = $(b);
            var a = $(b.id + "-iframe");
            if (!a) {
                a = document.createElement("DIV");
                a.innerHTML = '<iframe style="display:none" src="about:blank" id="' + b.id + '-iframe" name="' + b.id + '-iframe" onload="PTK.Ajax.iframeLoaded(\'' + b.id + "-iframe')\"></iframe>";
                document.body.appendChild(a)
            }
            b.target = b.id + "-iframe";
            $$("#" + b.id + " input.iframe-only").each(function(c) {
                c.value = true
            });
            return true
        },
        iframeLoaded: function(d) {
            var a = document.getElementById(d);
            if (a.contentDocument) {
                var b = a.contentDocument
            } else {
                if (a.contentWindow) {
                    var b = a.contentWindow.document
                } else {
                    var b = window.frames[d].document
                }
            }
            if (b.location.href == "about:blank") {
                return
            }
            var c = d.replace(/-iframe$/, "");
            $$("#" + c + " input.iframe-only").each(function(e) {
                e.value = ""
            });
            PTK.Ajax.submitForm(c)
        },
        oldDocumentWrite: document.write,
        fixDocumentWriteInAjax: function() {
            document.write = this.documentWrite
        },
        revertDocumentWrite: function() {
            document.write = PTK.Ajax.oldDocumentWrite
        },
        documentWrite: function(b) {
            var a = document.createElement("div");
            a.innerHTML = b;
            document.body.appendChild(a)
        },
        getBodyInnerHtml: function(b) {
            var a = b.split("<body")[1];
            if (!a) {
                return b
            }
            var c = a.indexOf(">");
            a = a.slice(c + 1).split("</body>")[0];
            return a
        },
        extractStyles: function(b) {
            var a = "<style[^>]*>([\\S\\s]*?)</style>";
            var d = new RegExp(a, "img"),
                c = new RegExp(a, "im");
            return (b.match(d) || []).map(function(e) {
                return (e.match(c) || ["", ""])[1]
            })
        },
        applyStyles: function(a) {
            if (Prototype.Browser.IE && (parseFloat(navigator.appVersion.split(";")[1].strip().split(" ")[1]) <= 8)) {
                var d = null;
                var c = this.extractStyles(a);
                for (i = 0; i < c.length; i++) {
                    if (!d) {
                        d = document.getElementsByTagName("head")[0];
                        if (!d) {
                            return
                        }
                    }
                    var b = document.createElement("style");
                    b.type = "text/css";
                    b.styleSheet.cssText = c[i];
                    d.appendChild(b)
                }
            }
        },
        log: function(b, a) {
            if (a === null) {
                a = ""
            }
            if (window.console) {
                console.log(b, a)
            }
        },
        getOnlyScripts: function(a, c) {
            var b = function(n, d, k) {
                try {
                    var e = [],
                        m = [];
                    var h = n.responseText.split("<!--@@@@@@-->");
                    for (var l = 0; l < h.length; l++) {
                        var f = h[l];
                        if (!f.blank()) {
                            var g = f.extractScripts();
                            if (typeof $LAB !== "undefined") {
                                var j = PTK.Ajax.extractAndStripAsyncScriptPaths(f);
                                m.push(j.paths);
                                f = j.html
                            }
                            e = e.concat([], g)
                        }
                    }
                    if (m.length) {
                        $LAB.setOptions({
                            AlwaysPreserveOrder: true,
                            AppendTo: "body",
                            AllowDuplicates: false
                        }).script(m).wait(function() {
                            PTK.Ajax.callScriptsAndCallbacks(e)
                        })
                    } else {
                        PTK.Ajax.callScriptsAndCallbacks(e)
                    }
                } catch (o) {
                    this.log("defaultCallback exception: ", o)
                }
                return false
            };
            PTK.Ajax.sendRequest(a, c, "get", b)
        }
    }
};
var PTK;
if (typeof PTK == "undefined") {
    PTK = {}
}
if (typeof PTK.CustomForms == "undefined") {
    PTK.CustomForms = {
        observers: {},
        replaceCheckboxes: function(a, e) {
            if (!a) {
                return
            }
            var k = this;
            var a = a;
            this.replaceCheckboxes.selected = new Object();
            if (a.id) {
                a = $$("#" + a.id)
            }
            var b = e || {};
            b.className = b.className || "ptk-checkbox";
            b.display = b.display || "inline";
            b.onChange = b.onChange || function() {};
            a.each(function(n, m) {
                if (n.type == "radio" || n.type == "checkbox") {
                    var l = $$("label[for=" + n.id + "]")[0];
                    l.writeAttribute({
                        id: "ptk-checkbox-label-" + n.id
                    });
                    var o = l.id;
                    l.addClassName(b.className + " ptk-" + n.type + " " + b.display);
                    if (l.down("span.ptk-checkbox-wrapper")) {
                        return
                    }
                    l.insert({
                        top: '<span class="ptk-checkbox-wrapper"><span class="ptk-checkbox-holder"></span></span>'
                    });
                    if (n.checked) {
                        l.addClassName("checked");
                        k.replaceCheckboxes.selected = n
                    }
                    n.addClassName("ptk-hidden-checkbox");
                    if (n.disabled) {
                        if (n.checked) {
                            l.addClassName("ptk-checkbox-checked-disabled")
                        } else {
                            l.addClassName("ptk-checkbox-disabled")
                        }
                        return
                    }
                    k.observers[o] = new Object();
                    k.observers[n.id] = new Object();
                    k.observers[o].click = f.bindAsEventListener(l);
                    k.observers[n.id].keyup = j.bindAsEventListener(l);
                    k.observers[n.id].keypress = c.bindAsEventListener(l);
                    k.observers[n.id].focus = g.bindAsEventListener(n, l);
                    k.observers[n.id].blur = h.bindAsEventListener(n, l);
                    Event.observe(l, "click", k.observers[o].click);
                    Event.observe(l, "custom:click", k.observers[o].click);
                    Event.observe(n, "keyup", k.observers[n.id].keyup);
                    Event.observe(n, "keypress", k.observers[n.id].keypress);
                    Event.observe(n, "focus", k.observers[n.id].focus);
                    Event.observe(n, "blur", k.observers[n.id].blur)
                }
            });

            function g(m, l) {
                l.addClassName("ptk-el-focused")
            }

            function h(m, l) {
                l.removeClassName("ptk-el-focused");
                d = false
            }
            var d = false;

            function c(l) {
                d = true
            }

            function j(l) {
                if ((l.keyCode || l.which) === 32) {
                    f.bindAsEventListener(this)(l)
                }
            }

            function f(o) {
                if (!(o.findElement().tagName.toLowerCase() == "input" && o.type == "click")) {
                    var n = this;
                    (o.type == "click") ? n.addClassName("ptk-checkbox-clicked"): n.removeClassName("ptk-checkbox-clicked");
                    if (Event.element(o).tagName.toLowerCase() != "a") {
                        Event.stop(o)
                    }
                    var l = $(n.readAttribute("for"));
                    if (l.disabled) {
                        return
                    }
                    l.focus();
                    if (!d) {
                        n.removeClassName("ptk-el-focused")
                    }
                    d = false;
                    var m = false;
                    if (l.type == "radio") {
                        m = n.hasClassName("checked");
                        a.each(function(q) {
                            if (q.type == "radio" && q.name == l.name) {
                                q.checked = false;
                                var p = $$("label[for=" + q.id + "]")[0];
                                if (p) {
                                    p.removeClassName("checked")
                                }
                            }
                        })
                    }
                    if (o.target.nodeName !== "a".toUpperCase()) {
                        n.toggleClassName("checked");
                        if ((l.checked == false)) {
                            l.checked = true
                        } else {
                            l.checked = false
                        }
                        k.replaceCheckboxes.selected = l;
                        if (l.type == "radio") {
                            if (!m) {
                                b.onChange(k.replaceCheckboxes, n, l)
                            }
                        } else {
                            b.onChange(k.replaceCheckboxes, n, l)
                        }
                        l.fire("ptk:customforms:change", {
                            input: l,
                            checked: l.checked,
                            element: n
                        })
                    }
                }
            }
        },
        destroyObserver: function(a) {
            if (!$(a)) {
                return
            }
            var b = this.observers[a];
            if (b.click) {
                Event.stopObserving(a, "click", b.click)
            }
            if (b.focus) {
                Event.stopObserving(a, "focus", b.focus)
            }
            if (b.blur) {
                Event.stopObserving(a, "blur", b.blur)
            }
            if (b.keyup) {
                Event.stopObserving(a, "keyup", b.keyup)
            }
            if (b.keypress) {
                Event.stopObserving(a, "keypress", b.keypress)
            }
            delete this.observers[a]
        },
        replaceSelects: function(d, a) {
            if (!d) {
                return
            }
            var c = this;
            var b = null;
            this.replaceSelects.selected = {};
            if (d.id) {
                d = $$("#" + d.id)
            }
            if (d.length <= 0) {
                return
            }
            this.replaceSelects.eachF = d.each(function(f, n) {
                if (f.nodeName == "SELECT" && !f.hasClassName("reader-only")) {
                    var e = a || {};
                    e.wrapperClass = e.wrapperClass || "ptk-selectbox-wrapper";
                    e.containerClass = e.containerClass || "ptk-selectbox-container";
                    e.inputClass = e.inputClass || "ptk-selectbox-clickable";
                    e.hoverClass = e.hoverClass || "ptk-selectbox-hovered-option";
                    e.currentClass = e.selectedClass || "ptk-selectbox-selected-option";
                    e.debug = e.debug || false;
                    e.maxElements = e.maxElements || 10;
                    e.onChange = e.onChange || function() {};
                    e.width = e.width || null;
                    e.cutValue = e.cutValue != null ? e.cutValue : true;
                    e.allowSelectedClick = e.allowSelectedClick != null ? e.allowSelectedClick : false;
                    e.maxTextLength = e.maxTextLength ? e.maxTextLength : null;
                    e.afterCreateSelect = e.afterCreateSelect || function() {};
                    e.disableRolloutUp = e.disableRolloutUp || false;
                    if (f.disabled) {
                        e.inputClass += " ptk-selectbox-disabled"
                    }
                    var u = f.identify();
                    if (f.hasClassName("none")) {
                        if (window.console) {
                            console.warn("PTK.CustomForms - select nie moze byc ukryty")
                        }
                        return
                    }
                    c.afterCreateSelect[u] = e.afterCreateSelect;
                    var o;
                    var g = -1;
                    var j = 0;
                    b = null;
                    var q = false;
                    var h = f;
                    var k = "";
                    for (i = 0; i < f.length; i++) {
                        if (f[i].getAttribute("selected")) {
                            k = f[i].textContent ? f[i].textContent : f[i].innerText
                        }
                    }
                    h.insert({
                        before: new Template('<div id="#{id}_wrapper" class="#{wrapperClass}"><a id="#{id}_input" onmouseout="#{outEv}" onclick="#{clickEv}" class="#{clickClass}" tabIndex="0">' + k + '</a><div tabindex="1" onkeydown="#{containerKeyDown}" onmouseover="#{containerOver}" onmouseout="#{containerOut}" id="#{id}_container" class="#{containerClass}" data-keycount="0"></div></div>').evaluate({
                            id: u,
                            wrapperClass: e.wrapperClass,
                            clickClass: e.inputClass,
                            containerClass: e.containerClass,
                            clickEv: "PTK.CustomForms.selectOnClick('" + u + "', " + e.maxElements + ", " + 0 + ", " + e.disableRolloutUp + ");",
                            outEv: "PTK.CustomForms.selectOnRollOut('" + u + "');",
                            containerOut: "PTK.CustomForms.containerOnRollOut('" + u + "');",
                            containerOver: "PTK.CustomForms.containerOnRollOover('" + u + "');",
                            containerKeyDown: "PTK.CustomForms.focusOnKeyDown(event,'" + u + "_container');"
                        })
                    });
                    var m = $(u + "_wrapper");
                    var p = $(u + "_input");
                    var t = $(u + "_container");
                    o = m.style.zIndex;
                    s(e, o);
                    h.addClassName("reader-only");
                    (function() {
                        c.afterCreateSelect[u]()
                    }).defer()
                }

                function l() {
                    j = 0;
                    m.setStyle({
                        zIndex: o
                    });
                    t.hide()
                }

                function s(x, w) {
                    w = w || 0;
                    var y = x.width;
                    if (y == null) {
                        y = h.offsetWidth
                    }
                    p.setStyle({
                        width: y - 1 + "px"
                    });
                    t.insert(r(u, x, w, y)).hide();
                    var v = (navigator.appVersion.indexOf("MSIE 6.") == -1) ? false : true;
                    if (v) {
                        if (t.getDimensions().width < y) {
                            t.setStyle({
                                width: y - 2 + "px"
                            })
                        } else {
                            t.setStyle({
                                width: "auto"
                            })
                        }
                    } else {
                        t.setStyle({
                            minWidth: p.offsetWidth - 2 + "px"
                        })
                    }
                }

                function r(z, x, w, y) {
                    var v = "";
                    h.childElements().each(function(A, B) {
                        if (B == 0) {
                            $(z + "_wrapper").ptkOnChange = x.onChange
                        }
                        v += '<li id="' + z + "_input_" + B + '" onclick="PTK.CustomForms.selectOption(\'' + z + "', " + B + ", " + null + ", " + w + ", " + e.cutValue + ", " + e.maxTextLength + ", " + e.allowSelectedClick + ')" ';
                        var C = A.readAttribute("selected");
                        if (C == "selected" || C == "") {
                            b = A;
                            PTK.CustomForms.setValue(p, A, e.cutValue, e.maxTextLength);
                            v += 'class="' + e.currentClass + '" '
                        }
                        v += '><a href="#" onclick="return false;">' + A.text + "</a></li>";
                        if (B == x.maxElements) {
                            $(z).setMaxElements = true
                        }
                    });
                    return "<ul>" + v + "</ul>"
                }
            });
            Event.observe(window, "beforeunload", function() {
                $$(".ptk-selectbox-wrapper").each(function(e) {
                    e.ptkOnChange = null
                })
            })
        },
        getSelectedOption: function(b) {
            var a = $(b);
            if (!a) {
                return (-1)
            }
            return a.selectedIndex
        },
        focusOnKeyDown: function(h, b) {
            var l = $(b),
                h = h || window.event,
                j, d = [],
                g, a, k = "",
                c, f = {
                    48: "0",
                    49: "1",
                    50: "2",
                    51: "3",
                    52: "4",
                    53: "5",
                    54: "6",
                    55: "7",
                    56: "8",
                    57: "9",
                    59: ";",
                    65: "a",
                    66: "b",
                    67: "c",
                    68: "d",
                    69: "e",
                    70: "f",
                    71: "g",
                    72: "h",
                    73: "i",
                    74: "j",
                    75: "k",
                    76: "l",
                    77: "m",
                    78: "n",
                    79: "o",
                    80: "p",
                    81: "q",
                    82: "r",
                    83: "s",
                    84: "t",
                    85: "u",
                    86: "v",
                    87: "w",
                    88: "x",
                    89: "y",
                    90: "z",
                    96: "0",
                    97: "1",
                    98: "2",
                    99: "3",
                    100: "4",
                    101: "5",
                    102: "6",
                    103: "7",
                    104: "8",
                    105: "9"
                };
            if (!l.hasClassName("open")) {
                return
            }
            j = l.select("li");
            if (h.keyCode in f) {
                j.each(function(m, e) {
                    if (m.down("a").innerHTML.strip().toLowerCase().substring(0, 1) == f[h.keyCode]) {
                        d.push(e)
                    }
                });
                if (d.length) {
                    g = l.getAttribute("data-keycount");
                    g++;
                    l.setAttribute("data-keycount", g);
                    c = l.select("li.focus");
                    if (c.length) {
                        k = l.select("li.focus a")[0].innerHTML.strip().toLowerCase().substring(0, 1);
                        c[0].removeClassName("focus")
                    }
                    if (k != f[h.keyCode]) {
                        g = 1;
                        l.setAttribute("data-keycount", g)
                    } else {
                        if (g >= d.length) {
                            l.setAttribute("data-keycount", 0);
                            if (g > d.length) {
                                g = 1
                            }
                        }
                    }
                    a = d[g - 1];
                    j[a].down("a").focus();
                    j[a].addClassName("focus")
                }
            }
        },
        selectOption: function(c, e, a, l, o, m, d) {
            var g = $(c);
            if (!g) {
                return (-1)
            }
            var f = $(c + "_wrapper");
            if (!a) {
                a = "ptk-selectbox-selected-option"
            }
            var n = g.selectedIndex;
            var b = f.select("li")[n];
            var j = g.select("option")[n];
            var k = g.select("option")[e];
            var h = f.select("li")[e];
            if (j) {
                j.selected = false;
                b.writeAttribute({
                    "class": false
                })
            }
            k.selected = true;
            h.addClassName(a);
            g.value = h.innerHTML;
            g.selectedIndex = parseInt(e);
            PTK.CustomForms.setValue(f.select("a.ptk-selectbox-clickable")[0], h.select("a")[0], o, m);
            f.setStyle({
                zIndex: l
            });
            f.select(".ptk-selectbox-container")[0].hide();
            f.select(".ptk-selectbox-container")[0].setStyle({
                zIndex: l
            });
            if (b != h || d) {
                f.ptkOnChange(this.replaceSelects, h, g);
                g.fire("ptk:customforms:change", {
                    input: g,
                    checked: g.selectedIndex,
                    element: f
                })
            }
        },
        outState: true,
        hideOnRollOut: function(c) {
            if (PTK.CustomForms.outState) {
                var a = $(c + "_container");
                var b = $(c + "_wrapper");
                b.setStyle({
                    zIndex: 0
                });
                b.setStyle({
                    zIndex: 0
                });
                a.removeClassName("ptk-rollout-up");
                a.hide();
                a.removeClassName("open")
            }
        },
        setValue: function(e, d, f, c) {
            var b = e.offsetWidth;
            if (e.style.paddingLeft) {
                b -= parseInt(e.style.paddingLeft)
            }
            if (e.style.paddingRight) {
                b -= parseInt(e.style.paddingRight)
            }
            var a = c || Math.ceil(b / 9);
            var h = (d.text) ? d.text : d.innerHTML;
            if (h.length > a && f) {
                var g = h.substring(0, a);
                g += "..."
            } else {
                g = h
            }
            e.innerHTML = g
        },
        selectOnRollOut: function(b, a) {
            setTimeout("PTK.CustomForms.hideOnRollOut('" + b + "');", 10)
        },
        containerOnRollOut: function(b, a) {
            PTK.CustomForms.outState = true;
            setTimeout("PTK.CustomForms.hideOnRollOut('" + b + "');", 10)
        },
        containerOnRollOover: function(b, a) {
            PTK.CustomForms.outState = false
        },
        checkViewportBottomPadding: function(c) {
            var b = 0;
            if (c) {
                var a = 0;
                if (typeof window.innerHeight != "undefined") {
                    a = window.innerHeight
                } else {
                    if (typeof document.documentElement != "undefined" && typeof document.documentElement.clientHeight != "undefined" && document.documentElement.clientHeight != 0) {
                        a = document.documentElement.clientHeight
                    }
                }
                var d = c.viewportOffset();
                b = a - d.top
            }
            return b
        },
        selectOnClick: function(k, a, f, d) {
            var l = $(k + "_container");
            var b = $(k + "_wrapper");
            var j = $(k + "_input");
            var c = $(k);
            if (c.disabled) {
                return
            }
            if (l.style.display == "none") {
                l.setStyle({
                    top: j.getHeight() + "px",
                    left: "0px"
                })
            }
            if (b.style.zIndex == 0 || b.style.zIndex == "") {
                b.setStyle({
                    zIndex: "5000"
                });
                l.setStyle({
                    zIndex: "5000"
                })
            } else {
                b.setStyle({
                    zIndex: f
                });
                b.setStyle({
                    zIndex: f
                })
            }
            l.toggle();
            l.focus();
            l.addClassName("open");
            if (c.setMaxElements && !c.maxHeightSet) {
                var e = l.select("li a")[0].getHeight();
                if (!e) {
                    e = 19
                }
                l.setStyle({
                    height: (a * e) + "px",
                    overflowY: "scroll",
                    overflowX: "hidden"
                });
                c.maxHeightSet = true
            }
            if (!d) {
                if (PTK.CustomForms.checkViewportBottomPadding(b) <= (l.getHeight() + j.getHeight())) {
                    var g = -l.getHeight();
                    l.addClassName("ptk-rollout-up");
                    l.setStyle({
                        top: g + "px",
                        left: "0px"
                    })
                }
            }
        },
        toggleCheckbox: function(c) {
            var a = $(c);
            if (!a) {
                return (-1)
            }
            if (a.type == "radio") {
                var b = $$("input[name=" + a.readAttribute("name") + "]");
                b.each(function(e) {
                    if (e.readAttribute("type") == "radio" && e.readAttribute("name") == a.readAttribute("name")) {
                        e.writeAttribute({
                            checked: false
                        });
                        var d = $$("label[for=" + e.readAttribute("id") + "]")[0];
                        if (d) {
                            d.removeClassName("checked")
                        }
                    }
                })
            }
            a.up("label").toggleClassName("checked");
            if ((a.readAttribute("checked") == null)) {
                a.checked = true
            } else {
                a.checked = false
            }
        },
        selectAllCheckboxes: function(b, a) {
            b.each(function(c) {
                if (a) {
                    c.up().removeClassName("checked");
                    c.checked = false
                } else {
                    c.up().addClassName("checked");
                    c.checked = true
                }
            })
        },
        afterCreateSelect: {},
        browser: function() {
            var a = navigator.userAgent;
            var b = "generic";
            if (a.indexOf("MSIE 9") != -1) {
                b = "ie9"
            } else {
                if (a.indexOf("MSIE 8") != -1) {
                    b = "ie8"
                } else {
                    if (a.indexOf("MSIE 7") != -1) {
                        b = "ie7"
                    } else {
                        if (a.indexOf("MSIE 6") != -1) {
                            b = "ie6"
                        } else {
                            if (a.indexOf("Firefox/") != -1) {
                                b = "ff"
                            } else {
                                if (a.indexOf("Opera") != -1) {
                                    b = "opera"
                                } else {
                                    if (a.indexOf("WebKit")) {
                                        b = "sf"
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return b
        },
        insetShadow: function(c) {
            var b = PTK.CustomForms.browser();
            if (b == "ie6" || b == "ie7" || b == "ie8") {
                var a = 1;
                var c = c || $$('input[type="text"]');
                if (c.id) {
                    c = $$("#" + c.id)
                }
                c.each(function(g, e) {
                    var j = new Element("span", {
                        "class": "inset-shadow-wrapper"
                    });
                    g.wrap(j);
                    var f = new Element("span", {
                        "class": "inset-shadow-holder"
                    });
                    j.insert({
                        top: f
                    });
                    g.addClassName("inset-shadow-element");
                    var h = g.getWidth();
                    var d = g.getHeight();
                    j.setStyle({
                        width: (h + a * 2) + "px",
                        height: (d + a * 2) + "px",
                        overflow: "hidden"
                    });
                    f.setStyle({
                        width: h + "px",
                        height: d + "px"
                    });
                    g.setStyle({
                        marginTop: (-(d + a)) + "px",
                        marginLeft: a + "px"
                    });
                    if (j.cumulativeOffset().top != (g.cumulativeOffset().top - a)) {
                        g.setStyle({
                            marginTop: -(d + ((g.cumulativeOffset().top) - (j.cumulativeOffset().top + a))) + "px"
                        })
                    }
                    if (g.disabled) {
                        j.addClassName("inset-shadow-element-disabled")
                    }
                })
            } else {
                if (b == "opera") {
                    var c = c || $$('input[type="text"]');
                    if (c.id) {
                        c = $$("#" + c.id)
                    }
                    c.each(function(f, e) {
                        var h = new Element("span", {
                            "class": "inset-shadow-wrapper"
                        });
                        f.wrap(h);
                        f.addClassName("inset-shadow-element");
                        var g = f.getWidth();
                        var d = f.getHeight();
                        h.setStyle({
                            width: (g) + "px",
                            height: (d) + "px",
                            overflow: "hidden"
                        });
                        if (f.disabled) {
                            h.addClassName("inset-shadow-element-disabled")
                        }
                    })
                }
            }
        },
        spinButton: function(a) {
            var a = a || $$('input[type="text"]');
            if (a.id) {
                a = $$("#" + a.id)
            }
            a.each(function(f, e) {
                if (!f.disabled && (f.type).toLowerCase() === "text" && !f.hasClassName("spin-input")) {
                    f.addClassName("spin-input");
                    f.setAttribute("autocomplete", "off");
                    var d = new Element("span", {
                        id: "spin-" + f.identify() + "-" + Math.floor(Math.random() * (e + 1000000000000)),
                        style: "display:inline-block;vertical-align:middle;height:" + f.getHeight() + "px",
                        "class": "spin-control"
                    });
                    var h = f.up(".inset-shadow-wrapper");
                    if (h) {
                        h.insert({
                            after: d
                        })
                    } else {
                        f.insert({
                            after: d
                        })
                    }
                    var c = '<a class="up" style="display:block;text-decoration:none;" href="">&and;</a>';
                    c += '<a class="down" style="display:block;text-decoration:none;" href="">&or;</a>';
                    d.innerHTML = c;
                    var b = parseInt(f.getAttribute("maxlength"));
                    var j = "9999999999999999999999999999";
                    if (b > 0) {
                        j = "";
                        for (var g = 0; g < b; g++) {
                            j += "9"
                        }
                    }
                    j = parseInt(j);
                    (d.select("a")).each(function(k) {
                        k.observe("custom:click", function(m) {
                            var l = parseInt(f.value);
                            if (k.hasClassName("up")) {
                                if (l < j) {
                                    f.value = l + 1
                                }
                            } else {
                                if (k.hasClassName("down")) {
                                    if (l >= 1) {
                                        f.value = l - 1
                                    }
                                }
                            }
                        });
                        k.observe("mousedown", function(l) {
                            (Event.element(l)).fire("custom:click")
                        });
                        k.observe("keydown", function(l) {
                            if (l.keyCode == Event.KEY_RETURN) {
                                (Event.element(l)).fire("custom:click")
                            }
                        });
                        k.observe("click", function(l) {
                            Event.stop(l)
                        })
                    });
                    f.observe("keydown", function(l) {
                        var k = parseFloat(f.value);
                        if (l.keyCode == Event.KEY_UP) {
                            if (k < j) {
                                f.value = k + 1
                            }
                        } else {
                            if (l.keyCode == Event.KEY_DOWN) {
                                if (k >= 1) {
                                    f.value = k - 1
                                }
                            }
                        }
                    })
                }
            })
        }
    }
}
Event.observe(window, "beforeunload", function() {
    for (var a in PTK.CustomForms.observers) {
        PTK.CustomForms.destroyObserver(a)
    }
});
var PTK;
if (typeof PTK == "undefined") {
    PTK = {}
}
if (typeof PTK.DropDownMenu == "undefined") {
    PTK.DropDownMenu = {};
    PTK.DropDownMenu = Class.create({
        initialize: function(b) {
            var a = this;
            this.defaults = {
                menuSelector: "nav-menu",
                contentSelector: ".nav__li",
                topSelector: ".top__li",
                linkSelector: "a.nav__toggle",
                childSelector: ".nav__child",
                focusClass: "nav__li--focus",
                collapseClass: ".menu-collapse",
                menuColumn: ".nav__child-list",
                menuArticleColumn: ".nav__child-list-article-box-outer",
                menuContent: ".nav__child-content"
            };
            this.options = Object.extend(this.defaults, b);
            this.context = $(this.options.menuSelector);
            if (this.context) {
                this.childs = this.find(this.options.childSelector, this.context);
                this.context.on("click", this.options.linkSelector, this.manageMenu.bindAsEventListener(this));
                this.context.on("click", this.options.collapseClass, this.collapseMenu.bindAsEventListener(this));
                $(document).on("click", this.collapseMenu.bindAsEventListener(this))
            }
        },
        manageMenu: function(e) {
            e.preventDefault();
            var f = e.target,
                c = f.up(this.options.contentSelector),
                d = false,
                b = "";
            if (c.hasClassName(this.options.topSelector.slice(1))) {
                d = true
            }
            if (c.hasClassName(this.options.topSelector.slice(1)) && c.hasClassName(this.options.focusClass)) {
                this.removeClassElement(c);
                var h = c.down(".nav__child");
                if (h) {
                    h = c.down(".nav__child").identify();
                    b = $(h).id
                }
                var a = false
            } else {
                if (c.hasClassName(this.options.topSelector.slice(1))) {
                    this.addClassElement(c);
                    var a = true;
                    var h = c.down(".nav__child");
                    if (h) {
                        h = c.down(".nav__child").identify();
                        Effect.SlideDown($(h).id, {
                            duration: 0.3
                        })
                    }
                }
            }
            if (a != undefined && a == true && this.isChecked(c) === false) {
                var g = this.find(this.options.menuArticleColumn, c)[0];
                if (g) {
                    this.addClassParents(g, this.options.topSelector, this.options.contentSelector, this.options.focusClass)
                }
                this.heightMenu(c, toggleShowHide = true)
            }
            this.removeSiblingsClassElements(c, d, b);
            if (!c.hasClassName(this.options.topSelector.slice(1))) {
                this.addClassElement(c)
            }
            if (c.hasClassName("has-child") && this.isChecked(c) === false) {
                this.find(this.options.contentSelector, c)[0].addClassName(this.options.focusClass)
            }
            if (d == false) {
                this.heightMenu(c, d)
            }
        },
        find: function(b, a) {
            return a == undefined || b == undefined ? false : a.select(b)
        },
        isChecked: function(a) {
            return this.find("." + this.options.focusClass, a).length === 0 ? false : true
        },
        addClassElement: function(a) {
            a.addClassName(this.options.focusClass)
        },
        removeClassElement: function(a) {
            a.removeClassName(this.options.focusClass)
        },
        addClassParents: function(b, a, d, c) {
            for (i = 0; i < 999; i++) {
                b = b.up(d).addClassName(c);
                if (b.hasClassName(this.options.topSelector.slice(1))) {
                    break
                }
            }
        },
        removeSiblingsClassElements: function(c, d, b) {
            var a = this;
            c.siblings(this.options.contentSelector).invoke("removeClassName", this.options.focusClass);
            if (d == true) {
                this.hideAllChildrens(b)
            }
        },
        slideClose: function(a) {
            Effect.SlideUp(a, {
                duration: 0.3
            })
        },
        hideAllChildrens: function(b) {
            var a = this;
            if (this.childs.length > 0) {
                this.childs.each(function(c) {
                    c.identify();
                    if (b == c.id) {
                        a.slideClose(b)
                    } else {
                        c.setStyle({
                            display: "none"
                        })
                    }
                })
            }
        },
        heightMenu: function(e, d) {
            var f = this.find("." + this.options.focusClass, e);
            f = f.length == 0 ? e : f[f.length - 1];
            var a = f.up(this.options.menuContent),
                c = f.up(this.options.menuColumn),
                g = this.find(this.options.menuArticleColumn, f)[0];
            if (a && c && g) {
                var c = this.toggleHeight(c, d),
                    g = this.toggleHeight(g, d),
                    b = c > g ? c : g;
                a.setStyle({
                    height: b + "px"
                })
            }
        },
        toggleHeight: function(b, a) {
            b.setStyle({
                height: "auto"
            });
            if (a && a == true) {
                b.up(this.options.childSelector).setStyle({
                    display: "block"
                })
            }
            var c = b.getHeight();
            if (a && a == true) {
                b.up(this.options.childSelector).setStyle({
                    display: "none"
                })
            }
            b.setStyle({
                height: ""
            });
            return c
        },
        collapseMenu: function(c) {
            var b = c.target;
            if (b.up("#" + this.options.menuSelector)) {
                if (b.hasClassName(this.options.collapseClass.slice(1))) {
                    c.preventDefault();
                    this.slideClose(b.up(this.options.childSelector));
                    this.removeClassElement(b.up(this.options.topSelector))
                } else {
                    c.stopPropagation()
                }
            } else {
                var a = this.find(this.options.topSelector + "." + this.options.focusClass, this.context);
                if (a.length > 0) {
                    a = a[0].down(this.options.childSelector).id;
                    this.hideAllChildrens(a)
                }
                this.find(this.options.topSelector, this.context).invoke("removeClassName", this.options.focusClass)
            }
            this.find(this.options.childSelector, this.context).invoke("setStyle", {
                height: ""
            })
        }
    })
};
var PTK;
if (typeof PTK == "undefined") {
    PTK = {}
}
if (typeof PTK.InputHint == "undefined") {
    PTK.InputHint = {};
    PTK.InputHint = Class.create({
        defaults: {
            offsetLeft: 0,
            offsetTop: 0,
            italics: false
        },
        options: {},
        initialize: function(c, d) {
            var b = this;
            this.defaults = {
                offsetLeft: 0,
                offsetTop: 0,
                toPlaceholder: false
            };
            this.options = Object.extend(this.defaults, d);
            var a = $(document.body).hasClassName("ie8") || $(document.body).hasClassName("ie9") ? true : false;
            if (!c) {
                c = $$("input.hint")
            }
            if (!c.length) {
                c = [c]
            }
            if (!this.options.toPlaceholder || a) {
                c.each(function(e, f) {
                    b.titleHint(e, f)
                })
            } else {
                c.each(function(e, f) {
                    b.placeholderHint(e, f)
                })
            }
        },
        titleHint: function(b, d) {
            var a = this;
            b.identify();
            var c = a.createLabel(b);
            if (b.getValue() === "" && b !== document.activeElement) {
                c.removeClassName("accessible-hide")
            }
            b.observe("blur", a.blurHandler.bindAsEventListener(a));
            b.observe("focus", a.onFocusHandler.bindAsEventListener(a));
            b.observe("input", a.onFocusHandler.bindAsEventListener(a));
            b.observe("keydown", a.onFocusHandler.bindAsEventListener(a))
        },
        placeholderHint: function(a, c) {
            var b = a.readAttribute("title");
            placeholderAttr = a.readAttribute("placeholder");
            if (b && b != "") {
                a.writeAttribute("placeholder", b);
                a.writeAttribute("title", "")
            }
        },
        getLabel: function(a) {
            return $("label-" + a)
        },
        blurHandler: function(b) {
            var a = this;
            if (this.options.blurCallbackDeley > 0) {
                setTimeout(function() {
                    a.onInputBlur(b)
                }, this.options.blurCallbackDeley)
            } else {
                this.onInputBlur(b)
            }
        },
        onInputBlur: function(a) {
            if (a.target.getValue() === "") {
                this.getLabel(a.target.id).removeClassName("accessible-hide");
                a.target.removeClassName("ptk-inputhint-notempty")
            } else {
                a.target.addClassName("ptk-inputhint-notempty")
            }
            a.target.removeClassName("ptk-inputhint-focused")
        },
        onFocusHandler: function(a) {
            this.getLabel(a.target.id).addClassName("accessible-hide");
            a.target.addClassName("ptk-inputhint-focused")
        },
        createLabel: function(d) {
            var e = new Element("label", {
                "for": d.id,
                id: "label-" + d.id,
                "class": "ptk-inputhint-label"
            }).update(d.readAttribute("title"));
            d.insert({
                after: e
            });
            e.clonePosition(d, {
                offsetLeft: this.options.offsetLeft,
                offsetTop: this.options.offsetTop
            });
            var i = d.getStyle("paddingLeft").slice(0, -2);
            if (i > 0) {
                var g = e.getStyle("left").slice(0, -2);
                var a = e.getStyle("width").slice(0, -2);
                var c = Math.max(0, (parseInt(g) + parseInt(i)));
                var b = Math.max(0, (parseInt(a) - parseInt(i)));
                e.setStyle({
                    left: c + "px",
                    width: b + "px"
                })
            }
            var f = e.getHeight();
            e.setStyle({
                lineHeight: f + "px"
            });
            if (this.options.italics) {
                e.setStyle({
                    fontStyle: "italic"
                })
            }
            e.addClassName("accessible-hide");
            return e
        }
    })
};
var PTK;
if (typeof PTK == "undefined") {
    PTK = {}
}
if (typeof PTK.ElementRotator == "undefined") {
    PTK.ElementRotator = {};
    PTK.ElementRotator = Class.create({
        initialize: function(b) {
            var a = this;
            this.isProcessing = false;
            this.isPaused = false;
            this.currentElement = null;
            this.nextElement = null;
            this.pe = null;
            this.defaults = {
                elementsContainerSelector: "#ptk-element-rotator-container",
                elementSelector: ".ptk-element-rotator-element",
                duration: 0.5,
                delay: 5,
                showEffect: "Appear",
                hideEffect: "Fade",
                autoStart: true,
                onElementShow: null,
                startWithElem: 0,
                autoRotate: true,
                elementPP: ".ptk-element-pp"
            };
            this.options = Object.extend(this.defaults, b);
            this.container = $$(this.options.elementsContainerSelector)[0];
            this.elements = $$(this.options.elementsContainerSelector + " " + this.options.elementSelector);
            this.elementPP = $$(this.options.elementsContainerSelector + " " + this.options.elementPP)[0];
            this.elementsTotal = this.elements.length;
            this.currentElementNum = this.options.startWithElem;
            this.elements.each(function(e, d) {
                if (!(d == this.currentElementNum && e.hasClassName("active"))) {
                    e.hide()
                }
                e.identify()
            }.bind(this));
            if (!this.elements[this.currentElementNum].hasClassName("active")) {
                this.showElement(this.elements[this.currentElementNum])
            }
            if (this.options.autoStart) {
                this.start()
            }
            if (this.options.autoRotate) {
                var c = "noPP";
                if (this.elementPP) {
                    this.elementPP.observe("keyup", function(d) {
                        if ((d.keyCode == 13) || (d.which == 13)) {
                            this.click()
                        }
                    });
                    this.elementPP.observe("click", function() {
                        this.toggleClassName("stop");
                        if (this.hasClassName("stop")) {
                            c = true;
                            a.stop()
                        } else {
                            c = false;
                            a.start()
                        }
                    })
                }
                this.container.observe("mouseenter", function() {
                    if (c == "noPP" || c == false) {
                        try {
                            a.stop()
                        } catch (d) {
                            if (window.console) {
                                console.log(d)
                            }
                        }
                    }
                });
                this.container.observe("mouseleave", function() {
                    if (c == "noPP" || c == false) {
                        a.start()
                    }
                })
            }
        },
        start: function() {
            if (this.elementsTotal > 1) {
                if (this.pe != null) {
                    clearInterval(this.pe.timer)
                }
                this.pe = new PeriodicalExecuter(this.autoRotate.bindAsEventListener(this), this.options.delay)
            }
        },
        autoRotate: function() {
            if (!this.isPaused) {
                this.next()
            }
        },
        stop: function() {
            if (this.elementsTotal > 1) {
                if (this.pe != null) {
                    this.pe.stop()
                }
            }
        },
        pause: function() {
            this.isPaused = true
        },
        resume: function() {
            this.isPaused = false
        },
        setNextElement: function(b, a) {
            if (b != -1) {
                if (this.currentElement.next()) {
                    this.nextElement = this.currentElement.next()
                } else {
                    this.nextElement = this.elements[0]
                }
            } else {
                if (this.currentElement.previous()) {
                    this.nextElement = this.currentElement.previous()
                } else {
                    this.nextElement = this.elements[this.elementsTotal - 1]
                }
            }
        },
        hideElement: function(c) {
            if (this.options.duration > 0) {
                if (c) {
                    var b = {
                        duration: this.options.duration
                    };
                    if (this.options.hideEffect == "Opacity") {
                        b = {
                            duration: this.options.duration,
                            from: 1,
                            to: 0
                        }
                    }
                    new Effect[this.options.hideEffect](c, b)
                }
            } else {
                if (c) {
                    c.hide()
                }
            }
            c.removeClassName("active").addClassName("hide-slide");
            var a = c.select("a");
            if (a.length) {
                a.invoke("writeAttribute", "tabindex", -1)
            }
            this.container.fire("ptkElementRotator:elementHide", {
                element: c,
                elementNum: this.currentElementNum
            })
        },
        showElement: function(d) {
            var c = d.select("a");
            if (c.length) {
                c.invoke("writeAttribute", "tabindex", "")
            }
            d.removeClassName("hide-slide");
            if (this.options.duration > 0) {
                this.isProcessing = true;
                if (d) {
                    var b = this;
                    var a = {
                        duration: this.options.duration,
                        afterFinish: function() {
                            d.addClassName("active");
                            b.onShowElement(d);
                            b.container.fire("ptkElementRotator:afterElementShow", {
                                element: d,
                                elementNum: b.currentElementNum
                            })
                        }
                    };
                    if (this.options.showEffect == "Opacity") {
                        a = {
                            duration: this.options.duration,
                            from: 0,
                            to: 1,
                            afterFinish: function() {
                                d.addClassName("active");
                                b.onShowElement(d);
                                b.container.fire("ptkElementRotator:afterElementShow", {
                                    element: d,
                                    elementNum: b.currentElementNum
                                })
                            }
                        }
                    }
                    new Effect[this.options.showEffect](d, a)
                }
            } else {
                if (d) {
                    d.show();
                    d.addClassName("active")
                }
            }
            this.container.fire("ptkElementRotator:elementShow", {
                element: d,
                elementNum: this.currentElementNum
            })
        },
        onShowElement: function(a) {
            this.isProcessing = false;
            this.currentElement = a;
            if (Object.isFunction(this.onElementShow)) {
                this.onElementShow().bindAsEventListener(this)
            }
        },
        next: function() {
            if (this.isProcessing) {
                return
            }
            this.hideElement(this.elements[this.currentElementNum]);
            this.currentElementNum++;
            if (this.currentElementNum >= this.elementsTotal) {
                this.currentElementNum = 0
            }
            this.showElement(this.elements[this.currentElementNum])
        },
        prev: function() {
            if (this.isProcessing) {
                return
            }
            this.hideElement(this.elements[this.currentElementNum]);
            this.currentElementNum--;
            if (this.currentElementNum < 0) {
                this.currentElementNum = this.elementsTotal - 1
            }
            this.showElement(this.elements[this.currentElementNum])
        },
        showElementByNum: function(a) {
            var b = parseInt(a, 10);
            if (a >= this.elementsTotal) {
                b = this.elementsTotal - 1
            }
            if (a < 0) {
                b = 0
            }
            if (b == this.currentElementNum) {
                return
            }
            this.hideElement(this.elements[this.currentElementNum]);
            this.currentElementNum = b;
            this.showElement(this.elements[this.currentElementNum])
        },
        getDuration: function(a, c) {
            if (navigator.appVersion.indexOf("MSIE") > 0) {
                return c
            }
            var b = a.innerHTML;
            if (b.indexOf('<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"') >= 0) {
                return 0
            } else {
                return c
            }
        }
    });
    PTK.ElementRotator.Controls = {};
    PTK.ElementRotator.Controls = Class.create({
        initialize: function(d, b) {
            var a = this;
            this.defaults = {
                controlNextSelector: ".ptk-element-rotator-control-next",
                controlPrevSelector: ".ptk-element-rotator-control-prev",
                controlPagerSelector: ".ptk-element-rotator-control-number"
            };
            this.options = Object.extend(this.defaults, b);
            this.controlNext = $$(d.options.elementsContainerSelector + " " + this.options.controlNextSelector)[0];
            this.controlPrev = $$(d.options.elementsContainerSelector + " " + this.options.controlPrevSelector)[0];
            this.controlPager = $$(d.options.elementsContainerSelector + " " + this.options.controlPagerSelector);
            this.controlPager[d.currentElementNum].addClassName("selected");

            function c(g, h, f) {
                if ((g.keyCode == 13) || (g.which == 13)) {
                    if (!d.isProcessing) {
                        h(f + "")
                    }
                    g.stop()
                }
            }
            if (this.controlNext) {
                this.controlNext.observe("click", function(f) {
                    if (!d.isProcessing) {
                        d.next()
                    }
                    f.stop()
                });
                this.controlNext.observe("keypress", function(f) {
                    c(f, d.next.bindAsEventListener(d))
                });
                this.controlNext.writeAttribute("tabindex", "0");
                this.controlNext.select("a").invoke("writeAttribute", "tabindex", "-1")
            }
            if (this.controlPrev) {
                this.controlPrev.observe("click", function(f) {
                    if (!d.isProcessing) {
                        d.prev()
                    }
                    f.stop()
                });
                this.controlPrev.observe("keypress", function(f) {
                    c(f, d.prev.bindAsEventListener(d))
                });
                this.controlPrev.writeAttribute("tabindex", "0");
                this.controlPrev.select("a").invoke("writeAttribute", "tabindex", "-1")
            }
            this.controlPager.each(function(f, e) {
                f.observe("click", function(g) {
                    if (!d.isProcessing) {
                        d.showElementByNum(e)
                    }
                    f.removeClassName("kb-focus-bg");
                    g.stop()
                });
                f.observe("keypress", function(g) {
                    c(g, d.showElementByNum.bindAsEventListener(d), e)
                });
                f.observe("focus", function(g) {
                    this.addClassName("kb-focus-bg")
                });
                f.addClassName("kb-focus-bg");
                f.writeAttribute("tabindex", "0");
                f.select("a").invoke("writeAttribute", "tabindex", "-1")
            });
            d.container.observe("ptkElementRotator:elementHide", function(f) {
                var e = a.controlPager[f.memo.elementNum];
                e.removeClassName("selected")
            });
            d.container.observe("ptkElementRotator:elementShow", function(f) {
                var e = a.controlPager[f.memo.elementNum];
                e.addClassName("selected")
            })
        }
    })
};
var PTK;
if (typeof PTK == "undefined") {
    PTK = {}
}
if (typeof PTK.FbLike == "undefined") {
    PTK.FbLike = {
        init: function(b, c) {
            var a = this;
            this.defaults = {
                containerId: "fb-like",
                sendContainerId: "fb-send",
                layout: "button_count",
                colorscheme: "dark",
                showSendButton: false,
                sendButtonContainer: ""
            };
            this.options = Object.extend(this.defaults, c);
            this.container = $(this.options.containerId);
            if (!this.container) {
                return
            }
            window.fbAsyncInit = this.fbAsyncInit;
            var d = (Prototype.Browser.IE) ? 98 : 96;
            this.container.innerHTML = '<div class="fb-like" data-href="' + b + '" data-send="false" data-width="' + d + '" data-show-faces="false" data-layout="button_count"></div>';
            if (this.options.showSendButton) {
                if (this.options.sendButtonContainer === "") {
                    this.container.insert({
                        after: '<div class="fb-send" data-href="' + b + '"></div>'
                    })
                } else {
                    this.options.sendButtonContainer.innerHTML = '<div class="fb-send" data-href="' + b + '"></div>'
                }
            }
            this.getFbLib()
        },
        fbAsyncInit: function() {
            FB.init({
                xfbml: true,
                cookie: true
            })
        },
        onInit: function() {
            if (Prototype.Browser.IE) {
                PTK.FbLike.resizeIframe()
            }
        },
        resizeIframe: function() {
            var a = PTK.FbLike.container.select("iframe")[0];
            a.style.width = "120px"
        },
        getFbLib: function() {
            var a = document.createElement("div");
            a.id = "fb-root";
            document.body.appendChild(a);
            (function(f, b, g) {
                var e, c = f.getElementsByTagName(b)[0];
                if (f.getElementById(g)) {
                    return
                }
                e = f.createElement(b);
                e.id = g;
                e.src = "//connect.facebook.net/pl_PL/all.js";
                c.parentNode.insertBefore(e, c)
            }(document, "script", "facebook-jssdk"))
        }
    }
};
var PTK;
if (typeof PTK == "undefined") {
    PTK = {}
}
if (typeof PTK.Accordion == "undefined") {
    PTK.Accordion = {};
    PTK.Accordion = Class.create({
        initialize: function(b) {
            var a = this;
            this.defaults = {
                containerSelector: "#ptk-accordion-container",
                activeElementSelector: ".ptk-accordion-active-element",
                contentSelector: ".ptk-accordion-content",
                duration: 0.5,
                onElementShow: null,
                startWithElem: 0
            };
            this.options = {};
            this.options = Object.extend(this.defaults, b);
            this.elementsTotal = 0;
            this.contentElements = [];
            this.activeElements = [];
            this.isProcessing = false;
            this.activeElement = null;
            this.activeElementNum = null;
            this.container = null;
            this.initialized = false;
            this.container = $$(this.options.containerSelector)[0];
            this.contentElements = $$(this.options.containerSelector + " " + this.options.contentSelector);
            this.activeElements = $$(this.options.containerSelector + " " + this.options.activeElementSelector);
            this.elementsTotal = this.activeElements.length;
            this.contentElements.each(function(d, c) {
                d.hide();
                d.identify()
            });
            this.showElement(this.options.startWithElem);
            this.initialized = true;
            this.activeElements.each(function(d, c) {
                d.observe("click", a.handleClick.bindAsEventListener(a, c))
            })
        },
        handleClick: function(b, a) {
            if (this.activeElement.id != this.contentElements[a].id) {
                this.hideActiveElement();
                this.showElement(a)
            }
            Event.stop(b)
        },
        hideActiveElement: function(a) {
            var a = this.activeElement;
            if (this.options.duration > 0 && this.initialized) {
                if (a) {
                    new Effect.SlideUp(a, {
                        duration: this.options.duration
                    })
                }
            } else {
                if (a) {
                    a.hide()
                }
            }
            this.container.fire("ptkAccordion:elementHide", {
                element: a
            })
        },
        showElement: function(b) {
            var c = this.contentElements[b];
            if (this.options.duration > 0 && this.initialized) {
                this.isProcessing == true;
                if (c) {
                    var a = this;
                    new Effect.SlideDown(c, {
                        duration: this.options.duration,
                        delay: this.options.duration,
                        afterFinish: function() {
                            a.onShowElement(b)
                        }
                    })
                }
            } else {
                if (c) {
                    c.show();
                    this.onShowElement(b)
                }
            }
            this.container.fire("ptkAccordion:elementShow", {
                element: c
            })
        },
        onShowElement: function(a) {
            this.isProcessing = false;
            if (this.activeElementNum != null) {
                this.activeElements[this.activeElementNum].up().removeClassName("active")
            }
            this.activeElement = this.contentElements[a];
            this.activeElementNum = a;
            this.activeElements[this.activeElementNum].up().addClassName("active");
            if (Object.isFunction(this.onElementShow)) {
                this.onElementShow().bindAsEventListener(this)
            }
        }
    });
    PTK.Accordion.Horizontal = {};
    PTK.Accordion.Horizontal = Class.create(PTK.Accordion, {
        initialize: function($super, b) {
            var a = this;
            this.options = {};
            this.defaults = {
                animationOptions: {
                    duration: 0.3,
                    transition: Effect.Transitions.sinoidal,
                    queue: {
                        position: "end",
                        scope: "accordionAnimationHide"
                    }
                },
                elementWidth: 468,
                linkWidth: 99
            };
            this.options = Object.extend(this.defaults, b);
            $super(this.options)
        },
        start: function() {
            this.pe = new PeriodicalExecuter(this.autoRotateCarousel.bind(this.carousel, this.options), this.options.delay)
        },
        handleClick: function(b, a) {
            if (this.activeElement.id != this.contentElements[a].id && !this.isProcessing) {
                this.animate(a)
            }
            Event.stop(b)
        },
        getElementForAnimation: function(a) {
            if (a.hasClassName("ptk-accordion-content")) {
                return a.up(2)
            } else {
                if (a.hasClassName("ptk-accordion-active-element")) {
                    return a.up(2)
                }
            }
        },
        animate: function(b) {
            this.isProcessing = true;
            var a = this;
            var f = this.activeElement;
            var d = this.contentElements[b];
            var c = this.getElementForAnimation(f);
            var e = this.getElementForAnimation(d);
            d.setStyle({
                display: "block"
            });
            e.addClassName("active").setStyle({
                width: this.options.linkWidth + "px"
            });
            c.removeClassName("active").setStyle({
                width: this.options.elementWidth + "px"
            });
            if (f) {
                if (this.options.duration > 0 && this.initialized) {
                    this.options.animationOptions.afterFinish = function() {
                        a.onShowElement(b);
                        f.hide()
                    };
                    this.options.animationOptions.afterUpdate = function(h) {
                        var i = parseInt(h.element.style.width, 10);
                        h.element.style.width = i + "px";
                        var g = a.options.elementWidth + a.options.linkWidth - i;
                        e.setStyle({
                            width: g + "px"
                        })
                    };
                    d.show();
                    c.morph("width:" + a.options.linkWidth + "px;", this.options.animationOptions)
                } else {
                    f.hide()
                }
            }
            this.container.fire("ptkAccordion:animate", {
                element: f,
                elementNum: b
            })
        },
        showElement: function(a) {
            var b = this.contentElements[a];
            if (b) {
                b.show();
                this.onShowElement(a)
            }
        },
        onShowElement: function(a) {
            this.isProcessing = false;
            if (this.activeElementNum != null) {
                this.activeElements[this.activeElementNum].up().removeClassName("active-link")
            } else {
                this.contentElements[this.options.startWithElem].setStyle({
                    display: "none"
                })
            }
            var b = this.contentElements[a];
            b.show();
            this.activeElement = this.contentElements[a];
            this.activeElementNum = a;
            this.activeElements[this.activeElementNum].up().addClassName("active-link");
            if (Object.isFunction(this.onElementShow)) {
                this.onElementShow().bindAsEventListener(this)
            }
        },
        stop: function() {
            this.pe.stop();
            this.pe = null
        },
        autoRotate: function(c) {
            var d = this.currentIndex();
            var b = this.elements.length;
            var a = Math.ceil(d + scrollBy + visible - 1);
            if (a < b) {
                this.scrollTo(a)
            } else {
                this.scrollTo(0)
            }
        }
    })
};
if (Prototype.Browser.WebKit) {
    Prototype.Browser.WebKitVersion = parseFloat(navigator.userAgent.match(/AppleWebKit\/([\d\.\+]*)/)[1]);
    Prototype.Browser.Safari2 = (Prototype.Browser.WebKitVersion < 420)
}
if (Prototype.Browser.IE) {
    Prototype.Browser.IEVersion = parseFloat(navigator.appVersion.split(";")[1].strip().split(" ")[1]);
    Prototype.Browser.IE6 = Prototype.Browser.IEVersion == 6;
    Prototype.Browser.IE7 = Prototype.Browser.IEVersion == 7
}
Prototype.falseFunction = function() {
    return false
};
Prototype.trueFunction = function() {
    return true
};
var UI = {
    Abstract: {},
    Ajax: {}
};
Object.extend(Class.Methods, {
    extend: Object.extend.methodize(),
    addMethods: Class.Methods.addMethods.wrap(function(a, b) {
        if (!b) {
            return this
        }
        if (!b.hasOwnProperty("methodsAdded")) {
            return a(b)
        }
        var c = b.methodsAdded;
        delete b.methodsAdded;
        a(b);
        c.call(b, this);
        b.methodsAdded = c;
        return this
    }),
    addMethod: function(c, b) {
        var a = {};
        a[c] = b;
        return this.addMethods(a)
    },
    method: function(a) {
        return this.prototype[a].valueOf()
    },
    classMethod: function() {
        $A(arguments).flatten().each(function(a) {
            this[a] = (function() {
                return this[a].apply(this, arguments)
            }).bind(this.prototype)
        }, this);
        return this
    },
    undefMethod: function(a) {
        this.prototype[a] = undefined;
        return this
    },
    removeMethod: function(a) {
        delete this.prototype[a];
        return this
    },
    aliasMethod: function(a, b) {
        this.prototype[a] = this.prototype[b];
        return this
    },
    aliasMethodChain: function(b, a) {
        a = a.camelcase();
        this.aliasMethod(b + "Without" + a, b);
        this.aliasMethod(b, b + "With" + a);
        return this
    }
});
Object.extend(Number.prototype, {
    snap: function(a) {
        return parseInt(a == 1 ? this : (this / a).floor() * a)
    }
});
Object.extend(String.prototype, {
    camelcase: function() {
        var a = this.dasherize().camelize();
        return a.charAt(0).toUpperCase() + a.slice(1)
    },
    makeElement: function() {
        var a = new Element("div");
        a.innerHTML = this;
        return a.down()
    }
});
Object.extend(Array.prototype, {
    empty: function() {
        return !this.length
    },
    extractOptions: function() {
        return this.last().constructor === Object ? this.pop() : {}
    },
    removeAt: function(b) {
        var a = this[b];
        this.splice(b, 1);
        return a
    },
    remove: function(b) {
        var a;
        while ((a = this.indexOf(b)) != -1) {
            this.removeAt(a)
        }
        return b
    },
    insert: function(b) {
        var a = $A(arguments);
        a.shift();
        this.splice.apply(this, [b, 0].concat(a));
        return this
    }
});
Element.addMethods({
    getScrollDimensions: function(a) {
        return {
            width: a.scrollWidth,
            height: a.scrollHeight
        }
    },
    getScrollOffset: function(a) {
        return Element._returnOffset(a.scrollLeft, a.scrollTop)
    },
    setScrollOffset: function(a, b) {
        a = $(a);
        if (arguments.length == 3) {
            b = {
                left: b,
                top: arguments[2]
            }
        }
        a.scrollLeft = b.left;
        a.scrollTop = b.top;
        return a
    },
    getNumStyle: function(a, b) {
        var c = parseFloat($(a).getStyle(b));
        return isNaN(c) ? null : c
    },
    appendText: function(a, b) {
        a = $(a);
        b = String.interpret(b);
        a.appendChild(document.createTextNode(b));
        return a
    }
});
document.whenReady = function(a) {
    if (document.loaded) {
        a.call(document)
    } else {
        document.observe("dom:loaded", a)
    }
};
Object.extend(document.viewport, {
    getScrollOffset: document.viewport.getScrollOffsets,
    setScrollOffset: function(a) {
        Element.setScrollOffset(Prototype.Browser.WebKit ? document.body : document.documentElement, a)
    },
    getScrollDimensions: function() {
        return Element.getScrollDimensions(Prototype.Browser.WebKit ? document.body : document.documentElement)
    }
});
(function() {
    UI.Options = {
        methodsAdded: function(b) {
            b.classMethod($w(" setOptions allOptions optionsGetter optionsSetter optionsAccessor "))
        },
        setOptions: function(b) {
            if (!this.hasOwnProperty("options")) {
                this.options = this.allOptions()
            }
            this.options = Object.extend(this.options, b || {})
        },
        allOptions: function() {
            var c = this.constructor.superclass,
                b = c && c.prototype;
            return (b && b.allOptions) ? Object.extend(b.allOptions(), this.options) : Object.clone(this.options)
        },
        optionsGetter: function() {
            a(this, arguments, false)
        },
        optionsSetter: function() {
            a(this, arguments, true)
        },
        optionsAccessor: function() {
            this.optionsGetter.apply(this, arguments);
            this.optionsSetter.apply(this, arguments)
        }
    };

    function a(c, d, b) {
        d = $A(d).flatten();
        if (d.empty()) {
            d = Object.keys(c.allOptions())
        }
        d.each(function(f) {
            var e = (b ? "set" : "get") + f.camelcase();
            c[e] = c[e] || (b ? function(g) {
                return this.options[f] = g
            } : function() {
                return this.options[f]
            })
        })
    }
})();
UI.Carousel = Class.create(UI.Options, {
    options: {
        direction: "horizontal",
        previousButton: ".previous_button",
        nextButton: ".next_button",
        container: ".container",
        scrollInc: "auto",
        disabledButtonSuffix: "_disabled",
        overButtonSuffix: "_over",
        opacity: 0.5,
        opacityDuration: 0.2,
        movingDuration: 0.4,
        movingDelay: 0.2
    },
    initialize: function(b, a) {
        this.setOptions(a);
        this.element = $(b);
        this.id = this.element.id;
        this.container = this.element.down(this.options.container).firstDescendant();
        this.elements = this.container.childElements();
        this.previousButton = this.options.previousButton == false ? null : this.element.down(this.options.previousButton);
        this.nextButton = this.options.nextButton == false ? null : this.element.down(this.options.nextButton);
        this.posAttribute = (this.options.direction == "horizontal" ? "left" : "top");
        this.dimAttribute = (this.options.direction == "horizontal" ? "width" : "height");
        this.opacity = this.options.opacity;
        this.opacityDuration = this.options.opacityDuration;
        this.movingDuration = this.options.movingDuration;
        this.movingDelay = this.options.movingDelay;
        this.elementSize = this.computeElementSize();
        this.nbVisible = this.currentSize() / this.elementSize;
        var c = this.options.scrollInc;
        if (c == "auto") {
            c = Math.floor(this.nbVisible)
        } [this.previousButton, this.nextButton].each(function(d) {
            if (!d) {
                return
            }
            var e = (d == this.nextButton ? "next_button" : "previous_button") + this.options.overButtonSuffix;
            d.clickHandler = this.scroll.bind(this, (d == this.nextButton ? -1 : 1) * c * this.elementSize);
            d.observe("click", d.clickHandler).observe("mouseover", function() {
                d.addClassName(e)
            }.bind(this)).observe("mouseout", function() {
                d.removeClassName(e)
            }.bind(this))
        }, this);
        this.updateButtons()
    },
    destroy: function($super) {
        [this.previousButton, this.nextButton].each(function(a) {
            if (!a) {
                return
            }
            a.stopObserving("click", a.clickHandler)
        }, this);
        this.element.remove();
        this.fire("destroyed")
    },
    fire: function(b, a) {
        a = a || {};
        a.carousel = this;
        return this.element.fire("carousel:" + b, a)
    },
    observe: function(a, b) {
        this.element.observe("carousel:" + a, b.bind(this));
        return this
    },
    stopObserving: function(a, b) {
        this.element.stopObserving("carousel:" + a, b);
        return this
    },
    checkScroll: function(a, d) {
        if (a > 0) {
            a = 0
        } else {
            var b = this.elements.last().positionedOffset()[this.posAttribute] + this.elementSize;
            var c = this.currentSize();
            if (a + b < c) {
                a += c - (a + b)
            }
            a = Math.min(a, 0)
        }
        if (d) {
            this.container.style[this.posAttribute] = a + "px"
        }
        return a
    },
    scroll: function(d) {
        var c = true;
        if (this.animating) {
            return this
        }
        var b = this.currentPosition() + d;
        b = this.checkScroll(b, false);
        d = b - this.currentPosition();
        if (d != 0) {
            this.animating = true;
            var a = this.currentIndex();
            if (d < 0) {
                a++
            } else {
                a--
            }
            this.fire("scroll:started", {
                nextIndex: a
            });
            var e = this;
            if (e.opacityDuration == 0) {
                e.container.morph(e.posAttribute + ": " + b + "px", {
                    duration: e.movingDuration,
                    delay: e.movingDelay,
                    afterFinish: function() {
                        if (c) {
                            e.animating = false;
                            e.updateButtons().fire("scroll:ended", {
                                shift: d / e.currentSize()
                            });
                            c = false
                        }
                    }
                })
            } else {
                if (e.opacityDuration > 0) {
                    e.container.morph("opacity:" + e.opacity, {
                        duration: e.opacityDuration,
                        afterFinish: function() {
                            if (c) {
                                e.container.morph(e.posAttribute + ": " + b + "px", {
                                    duration: e.movingDuration,
                                    delay: e.movingDelay,
                                    afterFinish: function() {
                                        e.container.morph("opacity:1", {
                                            duration: e.opacityDuration,
                                            afterFinish: function() {
                                                e.animating = false;
                                                e.updateButtons().fire("scroll:ended", {
                                                    shift: d / e.currentSize()
                                                })
                                            }
                                        })
                                    }
                                });
                                c = false
                            }
                        }
                    })
                }
            }
        }
        return this
    },
    scrollTo: function(a) {
        if (this.animating || a < 0 || a > this.elements.length || a == this.currentIndex() || isNaN(parseInt(a))) {
            return this
        }
        return this.scroll((this.currentIndex() - a) * this.elementSize)
    },
    updateButtons: function() {
        if (this.previousButton) {
            this.updatePreviousButton()
        }
        if (this.nextButton) {
            this.updateNextButton()
        }
        return this
    },
    updatePreviousButton: function() {
        var a = this.currentPosition();
        var b = "previous_button" + this.options.disabledButtonSuffix;
        if (this.previousButton.hasClassName(b) && a != 0) {
            this.previousButton.removeClassName(b);
            this.fire("previousButton:enabled")
        }
        if (!this.previousButton.hasClassName(b) && a == 0) {
            this.previousButton.addClassName(b);
            this.fire("previousButton:disabled")
        }
    },
    updateNextButton: function() {
        var a = this.currentLastPosition();
        var b = this.currentSize();
        var c = "next_button" + this.options.disabledButtonSuffix;
        if (this.nextButton.hasClassName(c) && a != b) {
            this.nextButton.removeClassName(c);
            this.fire("nextButton:enabled")
        }
        if (!this.nextButton.hasClassName(c) && a <= b) {
            this.nextButton.addClassName(c);
            this.fire("nextButton:disabled")
        }
    },
    computeElementSize: function() {
        return this.elements.first().getDimensions()[this.dimAttribute]
    },
    currentIndex: function() {
        return -this.currentPosition() / this.elementSize
    },
    currentLastPosition: function() {
        if (this.container.childElements().empty()) {
            return 0
        }
        return this.currentPosition() + this.elements.last().positionedOffset()[this.posAttribute] + this.elementSize
    },
    currentPosition: function() {
        return this.container.getNumStyle(this.posAttribute)
    },
    currentSize: function() {
        return this.container.parentNode.getDimensions()[this.dimAttribute]
    },
    updateSize: function() {
        this.nbVisible = this.currentSize() / this.elementSize;
        var a = this.options.scrollInc;
        if (a == "auto") {
            a = Math.floor(this.nbVisible)
        } [this.previousButton, this.nextButton].each(function(b) {
            if (!b) {
                return
            }
            b.stopObserving("click", b.clickHandler);
            b.clickHandler = this.scroll.bind(this, (b == this.nextButton ? -1 : 1) * a * this.elementSize);
            b.observe("click", b.clickHandler)
        }, this);
        this.checkScroll(this.currentPosition(), true);
        this.updateButtons().fire("sizeUpdated");
        return this
    }
});
UI.Ajax.Carousel = Class.create(UI.Carousel, {
    options: {
        elementSize: -1,
        url: null
    },
    initialize: function($super, b, a) {
        if (!a.url) {
            throw ("url option is required for UI.Ajax.Carousel")
        }
        if (!a.elementSize) {
            throw ("elementSize option is required for UI.Ajax.Carousel")
        }
        $super(b, a);
        this.endIndex = 0;
        this.hasMore = true;
        this.updateHandler = this.update.bind(this);
        this.updateAndScrollHandler = function(e, d, c) {
            this.update(d, c);
            this.scroll(e)
        }.bind(this);
        this.runRequest.bind(this).defer({
            parameters: {
                from: 0,
                to: Math.ceil(this.nbVisible) - 1
            },
            onSuccess: this.updateHandler
        })
    },
    runRequest: function(a) {
        this.requestRunning = true;
        new Ajax.Request(this.options.url, Object.extend({
            method: "GET"
        }, a));
        this.fire("request:started");
        return this
    },
    scroll: function($super, a) {
        if (this.animating || this.requestRunning) {
            return this
        }
        var d = (-a) / this.elementSize;
        if (this.hasMore && d > 0 && this.currentIndex() + this.nbVisible + d - 1 > this.endIndex) {
            var c = this.endIndex + 1;
            var b = Math.ceil(c + this.nbVisible - 1);
            this.runRequest({
                parameters: {
                    from: c,
                    to: b
                },
                onSuccess: this.updateAndScrollHandler.curry(a).bind(this)
            });
            return this
        } else {
            $super(a)
        }
    },
    update: function(b, a) {
        this.requestRunning = false;
        this.fire("request:ended");
        if (!a) {
            a = b.responseJSON
        }
        this.hasMore = a.more;
        this.endIndex = Math.max(this.endIndex, a.to);
        this.elements = this.container.insert({
            bottom: a.html
        }).childElements();
        return this.updateButtons()
    },
    computeElementSize: function() {
        return this.options.elementSize
    },
    updateSize: function($super) {
        var a = this.nbVisible;
        $super();
        if (Math.floor(this.nbVisible) - Math.floor(a) >= 1 && this.hasMore) {
            if (this.currentIndex() + Math.floor(this.nbVisible) >= this.endIndex) {
                var b = Math.floor(this.currentIndex() + Math.floor(this.nbVisible) - this.endIndex);
                this.runRequest({
                    parameters: {
                        from: this.endIndex + 1,
                        to: this.endIndex + b
                    },
                    onSuccess: this.updateHandler
                })
            }
        }
        return this
    },
    updateNextButton: function($super) {
        var a = this.currentLastPosition();
        var b = this.currentSize();
        var c = "next_button" + this.options.disabledButtonSuffix;
        if (this.nextButton.hasClassName(c) && a != b) {
            this.nextButton.removeClassName(c);
            this.fire("nextButton:enabled")
        }
        if (!this.nextButton.hasClassName(c) && a == b && !this.hasMore) {
            this.nextButton.addClassName(c);
            this.fire("nextButton:disabled")
        }
    }
});

function searchBasicCustomize(b) {
    var c = $("searchForm");
    var a = $("searchPhrase");
    if (c) {}
    if (typeof b != "undefined" && b) {
        new PTK.HeaderSearchAutocompleter(b)
    }
}

function articleListSortCustomize() {
    var a = $("list-sort");
    var b = $("article-list-sort-form");
    if (a && b) {
        if (!a.hasClassName("customized")) {
            a.addClassName("customized");
            PTK.CustomForms.replaceSelects(a, {
                width: a.hasClassName("list-sort-new") ? 124 : 114,
                onChange: function() {
                    b.submit()
                }
            })
        }
    }
}

function articleListElementsPerPageCustomize() {
    var a = $("list-epp");
    var b = $("article-list-epp-form");
    if (a && b) {
        if (!a.hasClassName("customized")) {
            a.addClassName("customized");
            PTK.CustomForms.replaceSelects(a, {
                width: a.hasClassName("list-epp-new") ? 124 : 114,
                onChange: function() {
                    b.submit()
                }
            })
        }
    }
}
if (typeof PTK == "undefined") {
    var PTK = {}
}
if (typeof PTK.SearchAutocompleter == "undefined") {
    PTK.SearchAutocompleters = {};
    PTK.SearchAutocompleter = {};
    PTK.SearchAutocompleter = Class.create({
        initialize: function(b, a) {
            this.defaults = {
                input_id: "searchPhrase",
                results_id: "search-result"
            };
            this.options = Object.extend(this.defaults, a);
            this.auto_completer = null;
            this.overwriteAutocompleterFunctions();
            if (b && b != "") {
                this.initAutocompleter(b)
            }
        },
        initAutocompleter: function(b) {
            var a = this;
            this.auto_completer = new Ajax.Autocompleter(this.options.input_id, this.options.results_id, b, {
                paramName: "q",
                minChars: 3,
                parameters: "output=json",
                method: "GET",
                jsonResult: true,
                frequency: 2
            });
            this.auto_completer.index = "undefined";
            this.auto_completer.options.onComplete = function(e, d) {
                if (e.responseText != "") {
                    var c = e.responseText.evalJSON(),
                        g = "<ul>";
                    for (var h = 0; h < c.length; h++) {
                        g += "<li>" + c[h] + "</li>"
                    }
                    g += "</ul>";
                    var j = e.request.url,
                        f = j;
                    if (j.indexOf("?") > -1) {
                        f = j.split("?")[0]
                    }
                    var k = PTK.SearchAutocompleters[f];
                    k.auto_completer.updateChoices(g)
                }
            };
            PTK.SearchAutocompleters[b] = this
        },
        overwriteAutocompleterFunctions: function() {
            Ajax.Autocompleter.prototype.updateChoices = function(c) {
                if (!this.changed && this.hasFocus) {
                    this.update.innerHTML = c;
                    Element.cleanWhitespace(this.update);
                    Element.cleanWhitespace(this.update.down());
                    if (this.update.firstChild && this.update.down().childNodes) {
                        this.entryCount = this.update.down().childNodes.length;
                        for (var a = 0; a < this.entryCount; a++) {
                            var b = this.getEntry(a);
                            b.autocompleteIndex = a;
                            this.addObservers(b)
                        }
                    } else {
                        this.entryCount = 0
                    }
                    this.stopIndicator();
                    this.update.scrollTop = 0;
                    if (this.entryCount == 1 && this.options.autoSelect) {
                        this.selectEntry();
                        this.hide()
                    } else {
                        this.render()
                    }
                }
            };
            Ajax.Autocompleter.prototype.onKeyPress = function(a) {
                if (this.active) {
                    switch (a.keyCode) {
                        case Event.KEY_TAB:
                        case Event.KEY_RETURN:
                            if (!!this.keynav) {
                                this.selectEntry();
                                this.keynav = false;
                                this.hide();
                                Event.stop(a)
                            }
                            return;
                        case Event.KEY_ESC:
                            this.hide();
                            this.active = false;
                            Event.stop(a);
                            return;
                        case Event.KEY_LEFT:
                        case Event.KEY_RIGHT:
                            return;
                        case Event.KEY_UP:
                            this.keynav = true;
                            this.markPrevious();
                            this.render();
                            Event.stop(a);
                            return;
                        case Event.KEY_DOWN:
                            this.keynav = true;
                            this.markNext();
                            this.render();
                            Event.stop(a);
                            return
                    }
                } else {
                    if (a.keyCode == Event.KEY_TAB || a.keyCode == Event.KEY_RETURN || (Prototype.Browser.WebKit > 0 && a.keyCode == 0)) {
                        return
                    }
                }
                this.changed = true;
                this.hasFocus = true;
                if (this.observer) {
                    clearTimeout(this.observer)
                }
                this.observer = setTimeout(this.onObserverEvent.bind(this), this.options.frequency * 1000)
            }
        }
    })
}
if (typeof PTK == "undefined") {
    var PTK = {}
}
if (typeof PTK.HeaderSearchAutocompleter == "undefined") {
    PTK.HeaderSearchAutocompleter = {};
    PTK.HeaderSearchAutocompleter = Class.create(PTK.SearchAutocompleter, {
        initialize: function(b, a) {
            this.defaults = {
                input_id: "searchPhrase",
                results_id: "search-result",
                auto_submit: true,
                auto_submit_max_res: 767
            };
            this.options = Object.extend(this.defaults, a);
            this.auto_completer = null;
            this.overwriteAutocompleterFunctions();
            this.overwriteOtherAutocompleterFunctions();
            if (b && b != "") {
                this.initAutocompleter(b)
            }
        },
        overwriteOtherAutocompleterFunctions: function() {
            var a = this;
            Ajax.Autocompleter.prototype.show = function(b) {
                if (this.update.style.display == "none") {
                    this.update.style.display = "block"
                }
            };
            Ajax.Autocompleter.prototype.onBlur = function(b) {};
            Ajax.Autocompleter.prototype.onClick = function(c) {
                var d = Event.findElement(c, "LI");
                this.index = d.autocompleteIndex;
                this.selectEntry();
                this.hide();
                if (a.options.auto_submit && (a.options.auto_submit_max_res == null || window.innerWidth <= a.options.auto_submit_max_res)) {
                    var e = this.element.up("form");
                    if (e) {
                        e.submit()
                    }
                }
            }
        }
    })
}

function getCookieValue(c) {
    var b;
    var a;
    c += "=";
    b = document.cookie.indexOf(c);
    if (b == -1) {
        return ""
    }
    b += c.length;
    if (document.cookie.indexOf(";", b) == -1) {
        a = document.cookie.length
    } else {
        a = document.cookie.indexOf(";", b)
    }
    cookieValue = document.cookie.substring(b, a);
    cookieValue = unescape(cookieValue);
    return cookieValue
}

function setCookieValue(b, a) {
    a = escape(a);
    document.cookie = b + "=" + a + "; path=/"
}

function hideBanner(a) {
    if ($("banner-popup")) {
        PTK.Ajax.popupClose("banner-popup")
    }
    setCookieValue(a, "closed")
};
var PTK;
if (typeof PTK == "undefined") {
    PTK = {}
}
if (typeof PTK.Infoportal == "undefined") {
    PTK.Infoportal = {}
}
PTK.Infoportal.Cookies = {
    checkCookiesStaus: function() {
        var a = false;
        if (Prototype.Browser.IE && (document.cookie = "cookie").indexOf.call(document.cookie, "cookie") != -1) {
            a = true
        } else {
            if (!Prototype.Browser.IE) {
                a = navigator.cookieEnabled
            }
        }
        return a
    },
    cookiesOffMessage: function(d, b) {
        var a = PTK.Infoportal.Cookies.checkCookiesStaus(),
            c = $(b);
        if (!a && c) {
            c.innerHTML = d;
            c.removeClassName("ptk-hidden")
        }
    }
};
var PTK;
if (typeof PTK == "undefined") {
    PTK = {}
}
if (typeof PTK.Infoportal == "undefined") {
    PTK.Infoportal = {}
}
PTK.Infoportal.carousel = Class.create({
    initialize: function(c, b) {
        var a = this;
        var d = c;
        this.defaults = {
            visibleElements: 4,
            delay: 5,
            scrollInc: 4
        };
        this.options = Object.extend(this.defaults, b);
        this.pe = null;
        this.carousel = new UI.Carousel(d, {
            scrollInc: this.options.scrollInc,
            container: ".glorious-container"
        });
        if (this.options.delay > 0) {
            this.start();
            d.observe("mouseenter", this.onMouseEnter.bindAsEventListener(this));
            d.observe("mouseleave", this.onMouseLeave.bindAsEventListener(this))
        }
    },
    start: function() {
        this.pe = new PeriodicalExecuter(this.autoRotateCarousel.bind(this, this.options), this.options.delay)
    },
    stop: function() {
        this.pe.stop();
        this.pe = null
    },
    autoRotateCarousel: function(d) {
        var a = d.scrollInc;
        var f = d.visibleElements;
        var e = this.carousel.currentIndex();
        var c = this.carousel.elements.length;
        var b = Math.ceil(e + a);
        if (b < c) {
            this.carousel.scrollTo(b)
        } else {
            this.carousel.scrollTo(0)
        }
    },
    onMouseEnter: function() {
        this.stop()
    },
    onMouseLeave: function() {
        this.start()
    }
});
PTK.Infoportal.loopedCarousel = {};
PTK.Infoportal.loopedCarousel = Class.create(PTK.Infoportal.carousel, {
    initialize: function($super, e, j) {
        var i = this;
        this.elementsContainer = $(e).select(".ptk-glorious").first();
        $super(e, j);
        this.carousel.loopedPaginationCurrentPage = 0;
        var a = this.elementsContainer.select("ul>li");
        this.carousel.observe("scroll:ended", this.onScrollEnd.bindAsEventListener(this));
        i.isSelected = false;
        this.carousel.stopEvent = false;
        if (a.length > this.options.visibleElements) {
            this.addElementsBottom(a);
            a = a.reverse();
            this.addElementsTop(a);
            this.updatePosition("prev", a.length);
            this.updateCarousel();
            this.elementsContainer.select("ul>li").each(function(m, l) {
                if (m.hasClassName("selected") && !i.isSelected) {
                    i.deactivatePaginationEvents();
                    var n = (l) / i.options.scrollInc;
                    var k = Math.floor(n);
                    if (k != 0) {
                        i.carousel.scroll(-i.carousel.elementSize * k * i.options.scrollInc);
                        i.carousel.loopedPaginationCurrentPage = k;
                        i.changeStep(i.carousel.loopedPaginationCurrentPage)
                    } else {
                        i.activatePaginationEvents()
                    }
                    i.isSelected = true
                }
            })
        } else {
            this.elementsContainer.addClassName("disabled")
        }
        this.carousel.loopedPaginationStatus = false;
        this.carousel.loopedPaginationPageCount = 0;
        this.carousel.loopedByCount = 1;
        var g = $$(".ptk-glorious-pagination");
        if (g.length) {
            this.carousel.loopedPaginationStatus = true;
            var b = g[0].select(".ptk-element-rotator-control-number");
            if (b) {
                if (b.length > 1) {
                    this.carousel.loopedPaginationPageCount = b.length;
                    var h = $$(".ptk-glorious-loop-carousel .next_button");
                    var d = $$(".ptk-glorious-loop-carousel .previous_button");
                    var f = 1;
                    if (h.length > 0) {
                        this.carousel.paginationNext = this.changesPage.bind(this, f);
                        h[0].observe("click", this.carousel.paginationNext)
                    }
                    if (d.length > 0) {
                        var c = 0;
                        this.carousel.paginationPrev = this.changesPage.bind(this, c);
                        d[0].observe("click", this.carousel.paginationPrev)
                    }
                    b.each(function(l, k) {
                        b[k].observe("click", i.scrollToPage.bindAsEventListener(i, k, b[k]))
                    })
                }
                b[i.carousel.loopedPaginationCurrentPage].addClassName("selected")
            }
            this.carousel.observe("scroll:started", this.onScrollStart.bindAsEventListener(i))
        }
    },
    onScrollStart: function() {
        this.changeStep(this.carousel.loopedPaginationCurrentPage)
    },
    activatePaginationEvents: function(a) {
        this.carousel.stopEvent = false
    },
    deactivatePaginationEvents: function() {
        this.carousel.stopEvent = true
    },
    changeStep: function(c) {
        var b = $$(".ptk-glorious-pagination");
        if (b.length) {
            var d = b[0].select(".selected");
            if (d.length) {
                d[0].removeClassName("selected")
            }
            var a = b[0].select(".ptk-element-rotator-control-number");
            if (a.length) {
                a[c].addClassName("selected")
            }
        }
    },
    nextPage: function() {
        if (this.carousel.loopedPaginationCurrentPage == (this.carousel.loopedPaginationPageCount - 1)) {
            this.carousel.loopedPaginationCurrentPage = 0
        } else {
            this.carousel.loopedPaginationCurrentPage++
        }
    },
    prevPage: function() {
        if (this.carousel.loopedPaginationCurrentPage == 0) {
            this.carousel.loopedPaginationCurrentPage = (this.carousel.loopedPaginationPageCount - 1)
        } else {
            this.carousel.loopedPaginationCurrentPage--
        }
    },
    changesPage: function(a) {
        if (!this.carousel.stopEvent) {
            this.deactivatePaginationEvents();
            this.carousel.loopedByCount = 1;
            if (a) {
                this.nextPage()
            } else {
                this.prevPage()
            }
        }
    },
    scrollToPage: function(f, c, d) {
        if (!this.carousel.stopEvent && c != this.carousel.loopedPaginationCurrentPage) {
            this.deactivatePaginationEvents();
            var a = this.options.scrollInc,
                b = 0;
            if (this.carousel.loopedPaginationCurrentPage < c) {
                b = -1 * this.carousel.elementSize * a * (c - this.carousel.loopedPaginationCurrentPage);
                this.carousel.loopedByCount = (c - this.carousel.loopedPaginationCurrentPage)
            } else {
                b = this.carousel.elementSize * a * (this.carousel.loopedPaginationCurrentPage - c);
                this.carousel.loopedByCount = (this.carousel.loopedPaginationCurrentPage - c)
            }
            this.carousel.scroll(b);
            this.carousel.loopedPaginationCurrentPage = c;
            this.changeStep(this.carousel.loopedPaginationCurrentPage)
        }
    },
    onScrollEnd: function(g) {
        this.changeStep(this.carousel.loopedPaginationCurrentPage);
        var a = (g.memo.shift < 0) ? "next" : "prev",
            d = this.options.visibleElements * this.carousel.loopedByCount,
            f, c;
        for (var b = 0; b < this.carousel.loopedByCount; b++) {
            f = this.elementsContainer.select("ul>li");
            if (a === "prev") {
                c = f.slice(f.length - this.options.visibleElements, f.length).reverse();
                this.addElementsTop(c)
            } else {
                c = f.slice(0, this.options.visibleElements);
                this.addElementsBottom(c)
            }
            this.removeElements(a, c);
            this.updatePosition(a, this.options.visibleElements)
        }
        this.activatePaginationEvents()
    },
    updatePosition: function(b, a) {
        var d = 0;
        if (b === "prev") {
            d = -1 * this.carousel.elementSize * a
        } else {
            d = this.carousel.elementSize * a
        }
        var c = this.carousel.container.style.left === "" ? 0 : parseInt(this.carousel.container.style.left, 10);
        c = c + d;
        this.carousel.container.setStyle({
            left: c + "px"
        })
    },
    addElementsBottom: function(b) {
        var a = this;
        b.each(function(c) {
            a.carousel.container.insert({
                bottom: '<li class="' + c.readAttribute("class") + '">' + c.innerHTML + "</li>"
            })
        })
    },
    addElementsTop: function(b) {
        var a = this;
        b.each(function(c) {
            a.carousel.container.insert({
                top: '<li class="' + c.readAttribute("class") + '">' + c.innerHTML + "</li>"
            })
        })
    },
    removeElements: function(a, c) {
        var b = [];
        (a === "next") ? b = this.getLeftElements(): b = this.getRightElements();
        b.invoke("remove");
        this.updateCarousel()
    },
    updateCarousel: function() {
        this.carousel.elements = this.carousel.container.childElements();
        this.carousel.updateSize()
    },
    getLeftElements: function() {
        var a = this.elementsContainer.select("ul>li");
        return a.slice(0, this.options.visibleElements)
    },
    getRightElements: function() {
        var a = this.elementsContainer.select("ul>li");
        return a.slice(a.length - this.options.visibleElements, a.length)
    },
    autoRotateCarousel: function(b) {
        this.deactivatePaginationEvents();
        var a = b.scrollInc;
        if (this.carousel.loopedPaginationStatus) {
            if (this.carousel.loopedPaginationCurrentPage == (this.carousel.loopedPaginationPageCount - 1)) {
                this.carousel.loopedPaginationCurrentPage = 0
            } else {
                this.carousel.loopedPaginationCurrentPage++
            }
        }
        this.carousel.loopedByCount = 1;
        this.carousel.scroll(-this.carousel.elementSize * a)
    }
});
PTK.Infoportal.gloriousController = Class.create({
    gloriousClassPrefix: "ptk-glorious-",
    currentGlorious: null,
    initialize: function(e, i) {
        var h = this;
        h.elRotator = {};
        this.gloriousContainerId = e;
        this.gloriousContainer = $(this.gloriousContainerId);
        if (!this.gloriousContainer) {
            return
        }
        this.defaults = {
            visibleElements: 4,
            scrollInc: 4,
            delay: 5,
            copyContentBeforeInit: false,
            copyContentId: "",
            pasteContenerId: ""
        };
        this.options = Object.extend(this.defaults, i);
        if (this.options.copyContentBeforeInit && this.options.copyContentId && this.options.pasteContenerId) {
            var f = $(this.options.copyContentId),
                a = $(this.options.pasteContenerId);
            if (f) {
                var c = null;
                if (a) {
                    c = a
                } else {
                    var d = this.gloriousContainer.select(".glorious-mains"),
                        b = this.gloriousContainer.select(".ptk-gl-controls");
                    if (d && d.length && d.length > 0) {
                        c = new Element("li");
                        d[0].insert({
                            top: c
                        })
                    }
                    if (b && b.length && b.length > 0) {
                        var g = b[0].childElements();
                        if (g.length > 0) {
                            b[0].insert({
                                top: g[0].clone(true)
                            })
                        }
                    }
                }
                c.update(f);
                f.show().removeClassName("ptk-hidden")
            }
        }
        this.gloriouses = this.gloriousContainer.select(".ptk-glorious");
        this.gloriouses.each(function(k, j) {
            h.currentGlorious = k;
            if (!k.hasClassName("initialized")) {
                h.initGlorious(k);
                k.addClassName("initialized")
            }
        })
    },
    initGlorious: function(g) {
        var k = this,
            b = g.up();
        var h = this.getLayout(g);
        var j = b.select(".ptk-glorious-delay").first(),
            a = b.select(".ptk-glorious-startwith").first(),
            c = 0;
        var i;
        if (j) {
            i = j.value
        }
        var e = i || k.defaults.delay;
        if (a) {
            c = a.value
        }
        switch (h) {
            case "carousel":
                this.getScript("/ocp-http/200401/map/js/carousel.js", "UI", function() {
                    var d = k.currentGlorious.up();
                    var m = b.select(".ptk-glorious-scroll").first();
                    var l = k.options.scrollInc;
                    if (m) {
                        l = parseInt(m.value)
                    }
                    new PTK.Infoportal.carousel(d, {
                        delay: e,
                        scrollInc: l,
                        visibleElements: k.options.visibleElements
                    })
                });
                break;
            case "loop-carousel":
                this.getScript("/ocp-http/200401/map/js/carousel.js", "UI", function() {
                    var d = k.currentGlorious.up();
                    new PTK.Infoportal.loopedCarousel(d, {
                        delay: e,
                        scrollInc: 5,
                        visibleElements: k.options.visibleElements
                    })
                });
                break;
            case "carousel-v":
                this.getScript("/ocp-http/200401/map/js/carousel.js", "UI", function() {
                    var d = k.currentGlorious.up();
                    new UI.Carousel(d, {
                        scrollInc: 3,
                        direction: "vertical"
                    })
                });
                break;
            case "hover-boxes":
                var f = g.select(".block-content-overlay");
                f.each(function(m, l) {
                    var d = m.select(".content").first();
                    m.observe("mouseenter", function() {
                        d.morph("height:73px;", {
                            duration: 0.3
                        })
                    });
                    m.observe("mouseleave", function() {
                        d.morph("height:41px;", {
                            duration: 0.3,
                            queue: "end"
                        })
                    })
                });
                break;
            default:
                this.getScript("/ocp-http/200401/map/js/ptk-element-rotator.js", "PTK.ElementRotator", function() {
                    var m = ".glorious-mains";
                    k.gloriousList = b.select(m);
                    if (k.gloriousList.length && k.gloriousList[0]) {
                        k.gloriousList = k.gloriousList[0]
                    } else {
                        return
                    }
                    k.gloriousElements = k.gloriousList.select(" > li");
                    var n = k.gloriousElements.length,
                        o = b.select(".ptk-glorious-autorotate").first(),
                        l = true;
                    if (n == 1) {
                        return
                    }
                    var d = g.hasClassName("ptk-glorious-adaptive-height");
                    if (d) {
                        k.gloriousElements.each(function(r, q) {
                            var p = 0;
                            if (q == c) {
                                p = 1
                            }
                            r.setStyle({
                                opacity: p
                            })
                        });
                        k.setGloriousHeight(c, true);
                        Event.observe(window, "resize", k.resizeGlorious.bind(k));
                        b.observe("ptkElementRotator:afterElementShow", k.resizeGlorious.bind(k))
                    }
                    if (o) {
                        l = !!parseInt(o.value)
                    }
                    k.elRotator = new PTK.ElementRotator({
                        autoStart: l,
                        elementsContainerSelector: "#" + b.identify(),
                        elementSelector: ".glorious-mains li",
                        delay: e,
                        autoRotate: l,
                        startWithElem: c
                    });
                    if ($$(".ptk-gl-controls").length) {
                        new PTK.ElementRotator.Controls(k.elRotator, {
                            controlPagerSelector: ".ptk-gl-controls li"
                        })
                    }
                    setTimeout(function() {
                        g.addClassName("ptk-glorious-active")
                    }, e * 2)
                })
        }
    },
    getLayout: function(a) {
        return a.className.split(this.gloriousClassPrefix)[1].split(" ")[0]
    },
    getDepedancies: function(a, b) {},
    autoRotateCarousel: function() {
        var a = this.carousel.options.scrollInc;
        var d = this.carousel.currentIndex();
        var c = this.carousel.elements.length;
        var b = Math.ceil(d + a);
        if (b < c) {
            this.carousel.scrollTo(b)
        } else {
            this.carousel.scrollTo(0)
        }
    },
    resizeGlorious: function() {
        if (typeof this.elRotator != "undefined" && typeof this.elRotator.currentElementNum != "undefined") {
            this.setGloriousHeight(this.elRotator.currentElementNum)
        }
    },
    setGloriousHeight: function(d, c) {
        if (c) {
            this.gloriousElements.each(function(i, h) {
                var g = i.select(".glorious-slide-content"),
                    f;
                if (g.length && g[0]) {
                    f = g[0].getHeight() + "px";
                    i.setStyle({
                        height: f
                    })
                } else {
                    if (h == d) {
                        f = i.getHeight() + "px"
                    }
                }
                if (h == d) {
                    this.gloriousList.setStyle({
                        height: f
                    })
                }
            }.bind(this))
        } else {
            var e = (typeof d != "undefined") ? d : 0,
                b = this.gloriousElements[e].select(".glorious-slide-content"),
                a;
            if (b.length && b[0]) {
                a = b[0].getHeight() + "px"
            } else {
                a = this.gloriousElements[e].getHeight() + "px"
            }
            this.gloriousList.setStyle({
                height: a
            })
        }
    },
    getScript: function(url, namespace, callback) {
        if (namespace.indexOf(".") == -1) {
            eval("var " + namespace)
        }
        var object = eval("window." + namespace);
        loaded = (typeof object !== "undefined");
        if (loaded) {
            callback()
        } else {
            $LAB.setOptions({
                AlwaysPreserveOrder: true,
                AppendTo: "body"
            }).script(url).wait(callback)
        }
    }
});

function updateBreadcrumbWidth() {
    var k = $("breadcrumbs-container");
    if (k) {
        var e = "(...)";
        var h = 1;
        var l = 15;
        var b = k.getWidth();
        var j = $("left-region");
        var d = 0;
        if (j) {
            d = $("left-region").getWidth()
        }
        var f = $("center-region");
        var a = 0;
        if (f) {
            a = $("center-region").getWidth()
        }
        var c = $("right-region");
        var g = 0;
        if (c) {
            g = $("right-region").getWidth()
        }
        if (!j || !f || !c) {
            return
        }
        if ((d + a + g) < 950) {
            a = a + g
        }
        if (a == 0 && d < g) {
            a = g
        }
        if ((a == 0) && ($$(".breadcrumbs-helper").length > 0)) {
            d = $$(".breadcrumbs-helper")[0].getWidth()
        }
        if (parseInt(d) + parseInt(a) < parseInt(b)) {
            var i = false;
            $$("#breadcrumbs-container .bread-crumbs-element").each(function(m) {
                var n = m.down("a");
                var p = e.length;
                if (n) {} else {
                    var o = m.innerHTML.length;
                    m.innerHTML = m.innerHTML.replace(/^\s*|\s*$/g, "").substr(0, o - h - p) + e;
                    if (o == m.innerHTML.length) {
                        i = true
                    }
                }
            });
            if (!i) {
                updateBreadcrumbWidth()
            }
        }
    }
};
if (typeof PTK == "undefined") {
    PTK = {}
}
if (typeof PTK.Infoportal == "undefined") {
    PTK.Infoportal = {}
}
PTK.Infoportal.newsletterEmail = function(b, a) {
    var d = a || '#newsletter-form .newsletter-box-email input[type="text"]';
    element = $$(d);
    element = element[0];
    if (element.value == "") {
        element.value = b
    }
    element.observe("click", function() {
        if (this.value == b) {
            this.value = ""
        }
    });
    element.observe("blur", function() {
        if (this.value == "") {
            this.value = b
        }
    })
};

function closePopup(c, d) {
    var b = $(d);
    var a = $(c);
    if (b && a) {
        b.observe("click", function(e) {
            PTK.Ajax.popupClose(c)
        })
    }
}

function newsletterBasicCustomize() {
    var b = $("newsletter-form");
    var a = $("newsletter-email");
    if (b) {
        new PTK.InputHint(a);
        var c = b.down(".ptk-inputhint-label")
    }
};
var PTK;
if (typeof PTK == "undefined") {
    PTK = {}
}
if (typeof PTK.Infoportal == "undefined") {
    PTK.Infoportal = {}
}
PTK.Infoportal.HomePage = Class.create({
    initialize: function() {
        this.init()
    },
    init: function() {
        this.initLoginHints();
        this.initCheckboxes();
        this.initParalaxScrolling();
        this.initHomePageAccordion()
    },
    initLoginHints: function() {
        new PTK.InputHint($$("#loginForm .textfield-s"), {
            toPlaceholder: true
        })
    },
    initCheckboxes: function() {
        PTK.CustomForms.replaceCheckboxes($$("#loginForm .checkbox"))
    },
    initHomePageAccordion: function() {
        this.accordionContainer = $("hp-accordion-container");
        if (this.accordionContainer) {
            this.hpAccordion = new PTK.Accordion.Horizontal({
                containerSelector: "#hp-accordion-container",
                activeElementSelector: ".ptk-accordion-active-element",
                contentSelector: ".ptk-accordion-content",
                duration: 0.5,
                onElementShow: null,
                startWithElem: 0
            })
        }
    },
    onAccordionElClick: function() {}
});
PTK.Infoportal.ParalaxScrolling = {
    init: function() {
        if (typeof skrollr != "undefined" && !PTK.Infoportal.ParalaxScrolling.isMobile()) {
            skrollr.init()
        }
    },
    isMobile: function() {
        return navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)
    }
};

function checkCurtine(c, a, b) {
    if ($(c + "-curtain")) {
        PTK.Ajax.popupRegisterClose(a)
    } else {
        new PTK.ShowHide({
            triggerSelector: b,
            changeText: false,
            changeClass: false
        })
    }
};
var PTK;
if (typeof PTK == "undefined") {
    PTK = {}
}
if (typeof PTK.LiveChat == "undefined") {
    PTK.LiveChat = {
        formElementsSelector: "form",
        formFields: new Array(),
        serializedForms: {},
        lastliveChatParams: "",
        newWindowOptions: "status = 1, height = 600, width = 600, resizable = 0",
        newWindowTitle: "LiveChat",
        scriptContent: "",
        fieldNamesSet: ["query"],
        scriptStatus: false,
        init: function(a) {
            PTK.LiveChat.scriptContent = a
        },
        serializeForms: function() {
            var a = this;
            a.formFields.clear();
            $$(a.formElementsSelector).each(function(d, b) {
                var c = d.getElements();
                c.each(function(e) {
                    if (e.type != "hidden" && a.fieldNamesSet.indexOf(e.name) > -1) {
                        if (e.type == "radio" || e.type == "checkbox") {
                            if (e.checked == true) {
                                a.formFields.push((a.formFields.length == 0 ? "&formFields=" : "") + e.name + ":" + e.value + ";")
                            }
                        } else {
                            if (e.name != "" && e.name != " ") {
                                a.formFields.push((a.formFields.length == 0 ? "&formFields=" : "") + e.name + ":" + e.value + ";")
                            }
                        }
                    }
                })
            })
        },
        serialize: function() {
            this.serializeForms();
            return this.formFields.join("")
        },
        createScriptRequest: function() {
            if (!PTK.LiveChat.scriptStatus) {
                var a = (unescape(PTK.LiveChat.scriptContent)).stripTags(),
                    c = document.createElement("script"),
                    b = $$("body");
                c.async = true;
                c.type = "text/javascript";
                c.text = a;
                if (b.length) {
                    $$("body")[0].insert(c)
                }
                PTK.LiveChat.scriptStatus = true
            }
        },
        createButton: function(a, b, c) {
            this.createScriptRequest();
            window.__lc_buttons = window.__lc_buttons || [];
            window.__lc_buttons.push({
                elementId: b,
                skill: parseInt(a),
                type: "text",
                labels: {
                    online: c,
                    offline: c
                }
            })
        }
    }
};

function stopMultipleSubmit(b) {
    if (b) {
        var a = true;
        b.observe("submit", function(c) {
            if (a) {
                a = false
            } else {
                c.stop()
            }
        })
    }
};
(function() {
    $$(".eshop-link").each(function(d, c) {
        var b = d.readAttribute("href");
        var a = b.split("?");
        var e = "eshop-link-" + c;
        d.writeAttribute("id", e);
        PTK.Ajax.ajaxifyLinks("'" + e + "':{a:'/gear/commerce/ajax',p:'" + a[1] + "&toUpdate=" + e + "-popup&toGet=number-portability-auth-popup&authStart=true',c:PTK.Ajax.popupCallback}")
    })
})();
var PTK;
if (typeof PTK == "undefined") {
    PTK = {}
}
if (typeof PTK.AppBanner == "undefined") {
    PTK.AppBanner = Class.create({
        initialize: function(a) {
            this.defaults = {
                elementId: "" || "app-banner",
                daysHidden: 15,
                daysReminder: 90,
                appStoreLanguage: "pl",
                title: "Mój Orange",
                author: "Orange Polska",
                button: "Pokaż",
                force: "",
                price: {
                    ios: "",
                    android: "",
                    windows: ""
                },
                store: {
                    ios: "",
                    android: "",
                    windows: ""
                },
                position: "" || "top",
                meta: {
                    ios: "588720962",
                    android: "pl.orange.mojeorange",
                    windows: "9wzdncrdqw2f"
                }
            };
            this.options = Object.extend(this.defaults, a);
            if ($(this.options.elementId)) {
                this.init()
            }
        },
        init: function() {
            this.addMetaTag();
            SmartBanner.prototype.create = this.create;
            new SmartBanner(this.options)
        },
        addMetaTag: function() {
            var a = $$("head")[0];
            a.insert('<meta name="apple-itunes-app" content="app-id=' + this.options.meta.ios + '">');
            a.insert('<meta name="google-play-app" content="app-id=' + this.options.meta.android + '">');
            a.insert('<meta name="msApplication-ID" content="' + this.options.meta.windows + '">');
            a.insert('<meta name="msApplication-PackageFamilyName" content="microsoft.build_8wekyb3d8bbwe">')
        },
        create: function() {
            var g = function(c, d) {
                return d.querySelector(c)
            };
            var k = function(c, d) {
                d = d || document;
                return g(c, d)
            };
            var l = document;
            for (var j = this.getStoreLink(), h = this.options.price[this.type] + " - " + this.options.store[this.type], i, n = 0; n < this.iconRels.length; n++) {
                var m = k('link[rel="' + this.iconRels[n] + '"]');
                if (m) {
                    i = m.getAttribute("href");
                    break
                }
            }
            var f = $(this.options.elementId);
            f.className = "smartbanner smartbanner-" + this.type;
            f.innerHTML = '<div class="smartbanner-container"><a href="javascript:void(0);" class="smartbanner-close">&times;</a><span class="smartbanner-icon"></span><div class="smartbanner-info"><div class="smartbanner-title">' + this.options.title + "</div><div>" + this.options.author + "</div><span>" + h + '</span></div><a href="' + j + '" class="smartbanner-button"><span class="smartbanner-button-text">' + this.options.button + "</span></a></div>";
            f.inner;
            if (l.body) {
                this.options.position == "top" ? document.body.insertBefore(f, document.body.childNodes[0]) : l.body.appendChild(f)
            } else {
                l && l.addEventListener("DOMContentLoaded", function() {
                    this.options.position == "top" ? document.body.insertBefore(f, document.body.childNodes[0]) : l.body.appendChild(f)
                })
            }
            k(".smartbanner-button", f).addEventListener("click", this.install.bind(this), !1);
            k(".smartbanner-close", f).addEventListener("click", this.close.bind(this), !1)
        }
    })
};
(function(f, e, h, g) {
    for (h in f) {
        if ((g = f[h].hash) && f[h].href == e + g && f[h].addEventListener) {
            f[h].addEventListener("click", function(d, c, b, a) {
                if (d = (c = document).getElementById(b = this.hash.slice(1)) || c.getElementsByName(b)[0]) {
                    if (a = !d.getAttribute(c = "tabindex")) {
                        d.setAttribute(c, -1)
                    }
                    d.focus();
                    if (a) {
                        d.removeAttribute(c)
                    }
                }
            })
        }
    }
})(document.links, location.href.split("#")[0]);

function deleteEmptyAdDiv() {
    Event.observe(window, "load", function() {
        var a = $$(".ad-box");
        a.each(function(d) {
            var c = d.select("a")[0];
            var b = d.select("object")[0];
            if (c == undefined && b == undefined) {
                d.remove()
            } else {}
        })
    })
};
if (Prototype.Browser.Gecko || Prototype.Browser.IE || Prototype.Browser.Opera || Prototype.Browser.WebKit) {
    $("portal-box").on("mouseup", "a, input:submit, input:image", function(a) {
        var b = a.findElement("a") || a.findElement("input");
        b.blur()
    })
};