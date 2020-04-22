define(["exports"], function(t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.validateIdNumber = function(t) {
        return !0 === /^[A-Za-z]{3}\d{6}$/.test(t) && function(t) {
            var r = 7 * e(t[0]) + 3 * e(t[1]) + +e(t[2]) + 7 * e(t[4]) + 3 * e(t[5]) + +e(t[6]) + 7 * e(t[7]) + 3 * e(t[8]);
            return (r %= 10) === e(t[3])
        }(t.toUpperCase())
    }, t.validateResidenceCardNumber = function(t) {
        return !0 === /^[A-Za-z]{2}\d{7}$/.test(t) && function(t) {
            for (var r = 1; r < t.length; r++)
                if (t[0] !== t[r]) return !0;
            return !1
        }(t.slice(2, 10))
    }, t.validatePesel = n, t.validateForeignerPesel = function(t) {
        return n(t) && ["8", "9"].includes(t[2])
    }, t.validateCensoredPesel = function(t) {
        return /^XXXXXXXXXX[0-9]{1}$/.test(t)
    }, t.validateIfAdult = function(t) {
        var r = new Date,
            e = t.substring(0, 2),
            n = t.substring(2, 4);
        20 < n && n < 33 && (e = 20 + e);
        var a = new Date(e, n % 20 - 1, t.substring(4, 6));
        return r.setFullYear(r.getFullYear() - 18), r.setHours(0), r.setMinutes(0), r.setSeconds(0), r.setMilliseconds(0), a <= r
    }, t.validateNIP = function(t) {
        if (/\d{10}/.test(t)) {
            var r = function(t) {
                    for (var r = t.charAt(0), e = 1; e < t.length; e++)
                        if (r !== t.charAt(e)) return !0;
                    return !1
                }(t),
                e = function(t) {
                    var r = 0,
                        e = [6, 5, 7, 2, 3, 4, 5, 6, 7];
                    if (t.length - 1 !== e.length) return !1;
                    for (var n = 0; n < t.length - 1; n++) {
                        r += parseInt(t.charAt(n)) * e[n]
                    }
                    var a = r % 11;
                    return parseInt(t.charAt(t.length - 1)) === a
                }(t);
            if (r && e) return !0
        }
        return !1
    }, t.validateREGON = function(t) {
        function n(t, r) {
            for (var e = 0, n = 0; n < t.length - 1; n++) {
                e += parseInt(t.charAt(n)) * r[n]
            }
            return e
        }
        if (/(\d{0})|(\d{9})|(\d{14})/.test(t)) {
            if (0 === t.length) return !0;
            var r = function(t) {
                    for (var r = t.charAt(0), e = 1; e < t.length; e++)
                        if (r !== t.charAt(e)) return !0;
                    return !1
                }(t),
                e = function(t) {
                    var r = 0;
                    if (14 === t.length) r = n(t, [2, 4, 8, 5, 0, 9, 7, 3, 6, 1, 2, 4, 8]);
                    else {
                        if (9 !== t.length) return !1;
                        r = n(t, [8, 9, 2, 3, 4, 5, 6, 7])
                    }
                    var e = r % 11;
                    return 10 === e && (e = 0), parseInt(t.charAt(t.length - 1)) === e
                }(t);
            if (r && e) return !0
        }
        return !1
    }, t.validatePrice = void 0;
    var r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    function e(t) {
        return r.indexOf(t)
    }

    function n(t) {
        if (!1 === /^[0-9]{11}$/.test(t)) return !1;
        if (80 < (n = (e = t).substring(2, 4)) && n < 93 || ["50210100009", "50210100092"].includes(e)) return !1;
        var r = ("" + t).split("");
        if (31 < parseInt(t.substring(4, 6)) || 0 === parseInt(t.substring(4, 6)) || 12 < parseInt(t.substring(2, 4) % 20)) return !1;
        var e, n, a = (+parseInt(r[0]) + 3 * parseInt(r[1]) + 7 * parseInt(r[2]) + 9 * parseInt(r[3]) + +parseInt(r[4]) + 3 * parseInt(r[5]) + 7 * parseInt(r[6]) + 9 * parseInt(r[7]) + +parseInt(r[8]) + 3 * parseInt(r[9])) % 10;
        return 0 === a && (a = 10), a = 10 - a, parseInt(r[10]) === a
    }
    t.validatePrice = function(t) {
        return /^\d*((\,\d{0,2})?)$/.test(t)
    }
});
//# sourceMappingURL=validationHelper.js.map