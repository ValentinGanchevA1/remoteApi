define(["exports", "./validationHelper"], function(e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.validator = function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return function(r) {
            return t.reduce(function(e, t) {
                var n = t(r);
                return null !== n && e.push(n), e
            }, [])
        }
    }, e.checkRequiredFieldMessage = e.checkNotEmptyStandardMessage = e.noPolishCharacters = e.limitTo8Characters = e.checkSpaceInText = e.checkAppartment = e.checkPeselAdult = e.checkREGON = e.checkNIP = e.checkPesel = e.checkPhoneNumber = e.checkNonEmptyEmail = e.checkEmail = e.checkPostCode = e.checkIdentificationNumber = e.checkIdNumber = e.checkAtLeastTwo = e.checkOnlyLetters = e.checkNotEmpty = e.residenceCardNumber = e.idNumber = e.regon = e.nip = e.peselAdult = e.pesel = e.maxLength = e.minLength = e.regex = e.phoneNumberRegexp = e.spaceInText = e.appartment = e.notEmpty = e.check = void 0;

    function n(n) {
        return function(t) {
            return function(e) {
                return n(e) ? null : t
            }
        }
    }
    e.check = n;

    function r(e) {
        return "" !== e
    }
    e.notEmpty = r;

    function c(e) {
        return !(e && 0 < e.length) || /^[a-zżźćńółęąśA-ZŻŹĆĄŚĘŁÓŃ\d]+(((\/)|(\-))?[a-zżźćńółęąśA-ZŻŹĆĄŚĘŁÓŃ\d]+)*$/.test(e)
    }
    e.appartment = c;

    function a(e) {
        return !(e && 0 < e.length) || !/^(.*\s+.*)+$/.test(e)
    }
    e.spaceInText = a;

    function u(e) {
        return !!e && (!/^000000000$/.test(e) && /^[1-9]\d{8}$/.test(e))
    }
    e.phoneNumberRegexp = u;

    function i(t) {
        return function(e) {
            return t.test(e)
        }
    }
    e.regex = i;
    e.minLength = function(t) {
        return function(e) {
            return !!e && e.length >= t
        }
    };
    e.maxLength = function(t) {
        return function(e) {
            return !!e && e.length <= t
        }
    };

    function o(e) {
        return (0, t.validatePesel)(e)
    }
    e.pesel = o;

    function h(e) {
        return (0, t.validateIfAdult)(e)
    }
    e.peselAdult = h;

    function s(e) {
        return (0, t.validateNIP)(e)
    }
    e.nip = s;

    function l(e) {
        return (0, t.validateREGON)(e)
    }
    e.regon = l;

    function d(e) {
        return (0, t.validateIdNumber)(e)
    }
    e.idNumber = d;

    function m(e) {
        return (0, t.validateResidenceCardNumber)(e)
    }
    e.residenceCardNumber = m;
    var k = n(r);
    e.checkNotEmpty = k;
    var p = n(i(/^([a-zA-Z\u00A1-\uFFFF])+([a-zA-Z\s\-\u00A1-\uFFFF])*$/));
    e.checkOnlyLetters = p;
    var v = n(i(/^.{2,}$/));
    e.checkAtLeastTwo = v;
    var f = n(d);
    e.checkIdNumber = f;
    var N = n(m);
    e.checkIdentificationNumber = N;
    var g = n(i(/^\d{5}$/));
    e.checkPostCode = g;
    var A = n(i(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/));
    e.checkEmail = A;
    var P = n(i(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$|^$/));
    e.checkNonEmptyEmail = P;
    var b = n(u);
    e.checkPhoneNumber = b;
    var E = n(o);
    e.checkPesel = E;
    var y = n(s);
    e.checkNIP = y;
    var I = n(l);
    e.checkREGON = I;
    var $ = n(h);
    e.checkPeselAdult = $;
    var x = n(c);
    e.checkAppartment = x;
    var z = n(a);
    e.checkSpaceInText = z;
    var F = n(i(/^.{0,8}$/));
    e.limitTo8Characters = F;
    var C = n(i(/^((?![żźćńółęąśŻŹĆĄŚĘŁÓŃ]+).)*$/));
    e.noPolishCharacters = C;
    var L = n(r)({
        level: "error",
        message: "Pole nie może być puste."
    });
    e.checkNotEmptyStandardMessage = L;
    var R = n(r)({
        level: "error",
        message: "Pole wymagane do złożenia zamówienia."
    });
    e.checkRequiredFieldMessage = R
});
//# sourceMappingURL=validation.js.map