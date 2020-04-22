define(["exports", "react", "eshop/components/OraCommonComponents", "./hoc/input", "./ui/Autocomplete"], function(e, t, n, r, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.LabeledKnaNumberInputWithErrors = e.LabeledRegonInputWithErrors = e.LabeledNipMobileInputWithErrors = e.LabeledNipInputWithErrors = e.LabeledPhoneNumberInputMobileWithErrors = e.LabeledPhoneNumberInputWithErrors = e.LabeledIdCensoredNumberWithErrors = e.LabeledIdNumberWithErrors = e.LabeledPeselWithErrors = e.LabeledAutocompleteWithErrors = e.LabeledCbsInputWithErrors = e.LabeledPostalCodeInputMobileWithErrors = e.LabeledPostalCodeInputWithErrors = e.LabeledInputWithErrors = e.withErrorMessageNotTimeouted = e.withErrorMessage = e.ErrorMessage = e.OraLabeledRegon = e.OraLabeledNipMobile = e.OraLabeledNip = e.OraLabeledKna = e.OraLabeledCensoredIdNumber = e.OraLabeledIdNumber = e.OraLabeledPhoneMobile = e.OraLabeledPhone = e.OraLabeledPesel = e.OraLabeledPostalCodeInputMobile = e.OraLabeledPostalCodeInput = e.OraLabeledInput = e.InputSerialNumber = e.OraKnaInput = e.InputWithKnaNumberMask = e.OraRegonInput = e.InputWithRegonMask = e.OraNipInput = e.OraNipMobileInput = e.InputWithNipMobileMask = e.InputWithNipMask = e.OraPhoneNumberInputMobile = e.OraPhoneNumberInput = e.InputWithPhoneNumberMobileMask = e.InputWithPhoneNumberMask = e.OraPostalCodeInputMobile = e.OraPostalCodeInput = e.InputWithPostalCodeMaskMobile = e.InputWithPostalCodeMask = void 0, t = babelHelpers.interopRequireDefault(t);
    var o = (0, r.maskField)(function(e) {
        return /^(\d{0,5}-?\d{0,5})$/.test(e) && e.replace("-", "").length <= 5
    })(n.OraInput);
    e.InputWithPostalCodeMask = o;
    var l = (0, r.maskField)(function(e) {
        return /^(\d{0,5}|)$/.test(e)
    })(n.OraInput);
    e.InputWithPostalCodeMaskMobile = l;
    var u = (0, r.mapDisplayValue)({
        mapToDisplay: function(e) {
            return /^\d{3,5}$/.test(e.replace("-", "")) ? e.replace("-", "").slice(0, 2) + "-" + e.replace("-", "").slice(2) : e
        },
        mapToValue: function(e) {
            return /^(\d{0,2})-?(\d{0,3})$/.test(e) ? e.replace("-", "") : e
        }
    })(o);
    e.OraPostalCodeInput = u;
    var i = (0, r.mapDisplayValue)({
        mapToDisplay: function(e) {
            return e
        },
        mapToValue: function(e) {
            return e
        }
    })(l);
    e.OraPostalCodeInputMobile = i;
    var p = (0, r.maskField)(function(e) {
        return /^(\d{1})|([\d\(]{1}\+48\) (\d{0,3}-?|\d{0,3})(\d{0,3}-?|\d{0,3})\d{0,3})$/.test(e)
    })(n.OraInput);
    e.InputWithPhoneNumberMask = p;
    var s = (0, r.maskField)(function(e) {
        return /^(\d{0,9}|)$/.test(e)
    })(n.OraInput);
    e.InputWithPhoneNumberMobileMask = s;
    var d = (0, r.mapDisplayValue)({
        mapToDisplay: function(e) {
            return /^.{6,9}$/.test(r = e) ? "(+48) " + r.slice(0, 3) + "-" + r.slice(3, 6) + "-" + r.slice(6) : /^.{3,6}$/.test(r) ? "(+48) " + r.slice(0, 3) + "-" + r.slice(3) : /^.{1,3}$/.test(r) ? "(+48) " + r : r;
            var r
        },
        mapToValue: function(e) {
            return /^(.{2,17})$/.test(r = e) ? function(e) {
                return /^([\d\(]{1}\+48\) (\d{3}-?|\d{0,3})(\d{3}-?|\d{0,3})\d{0,3})$/.test(e) ? e.replace(/\D/g, "").slice(2, e.replace(/\D/g, "").length) : e.replace(/\D/g, "")
            }(r) : r;
            var r
        }
    })(p);
    e.OraPhoneNumberInput = d;
    var b = (0, r.mapDisplayValue)({
        mapToDisplay: function(e) {
            return e
        },
        mapToValue: function(e) {
            return e
        }
    })(s);
    e.OraPhoneNumberInputMobile = b;
    var I = (0, r.maskField)(function(e) {
        return /^((\d{3}-?|\d{0,3})(\d{3}-?|\d{0,3})(\d{2}-?|\d{0,2})(\d{0,2}))$/.test(e)
    })(n.OraInput);
    e.InputWithNipMask = I;
    var c = (0, r.maskField)(function(e) {
        return /^(\d{0,10}|)$/.test(e)
    })(n.OraInput);
    e.InputWithNipMobileMask = c;
    var m = (0, r.mapDisplayValue)({
        mapToDisplay: function(e) {
            return e
        },
        mapToValue: function(e) {
            return e
        }
    })(c);
    e.OraNipMobileInput = m;
    var h = (0, r.mapDisplayValue)({
        mapToDisplay: function(e) {
            return function(e) {
                if (!e) return "";
                return /^.{8,10}$/.test(e) ? e.slice(0, 3) + "-" + e.slice(3, 6) + "-" + e.slice(6, 8) + "-" + e.slice(8) : /^.{6,8}$/.test(e) ? e.slice(0, 3) + "-" + e.slice(3, 6) + "-" + e.slice(6) : /^.{3,6}$/.test(e) ? e.slice(0, 3) + "-" + e.slice(3) : e
            }(e)
        },
        mapToValue: function(e) {
            return e ? e.replace(/-/g, "") : ""
        }
    })(I);
    e.OraNipInput = h;
    var L = (0, r.maskField)(function(e) {
        return /^\d{0,14}$/.test(e)
    })(n.OraInput);
    e.InputWithRegonMask = L;
    var O = (0, r.mapDisplayValue)({
        mapToDisplay: function(e) {
            return e || ""
        },
        mapToValue: function(e) {
            return e || ""
        }
    })(L);
    e.OraRegonInput = O;
    var v = (0, r.maskField)(function(e) {
        return e = e.replace(/_/g, "").replace(/-/g, ""), /^(\d{0,2}|\d{2}-?\d{0,3}-?\d{0,2}-?\d{0,2})$/.test(e)
    })(n.OraInput);
    e.InputWithKnaNumberMask = v;
    var N = (0, r.mapDisplayValue)({
        mapToDisplay: function(e) {
            return /^.{7,9}$/.test(r = e) ? r.slice(0, 2) + "-" + r.slice(2, 5) + "-" + r.slice(5, 7) + "-" + r.slice(7) : /^.{5,7}$/.test(r) ? r.slice(0, 2) + "-" + r.slice(2, 5) + "-" + r.slice(5) : /^.{2,5}$/.test(r) ? r.slice(0, 2) + "-" + r.slice(2) : (/^.{1,2}$/.test(r), r);
            var r
        },
        mapToValue: function(e) {
            return e ? e.replace(/_/g, "").replace(/-/g, "") : e
        }
    })(v);
    e.OraKnaInput = N;
    var M = (e.InputSerialNumber = void 0, r.addLabelToInput)(n.OraInput);
    e.OraLabeledInput = M;
    var W = (0, r.addLabelToInput)(u);
    e.OraLabeledPostalCodeInput = W;
    var P = (0, r.addLabelToInput)(i);
    e.OraLabeledPostalCodeInputMobile = P;
    var E = (0, r.addLabelToInputPesel)(n.OraInput);
    e.OraLabeledPesel = E;
    var f = (0, r.addLabelToInputPhone)(d);
    e.OraLabeledPhone = f;
    var T = (0, r.addLabelToInputPhone)(b);
    e.OraLabeledPhoneMobile = T;
    var g = (0, r.addLabelToInputIdNumber)(n.OraInput);
    e.OraLabeledIdNumber = g;
    var C = (0, r.addLabelToInputCensoredIdNumber)(n.OraInput);
    e.OraLabeledCensoredIdNumber = C;
    var k = (0, r.addLabelToInputKna)(N);
    e.OraLabeledKna = k;
    var $ = (0, r.addLabelToInputNip)(h);
    e.OraLabeledNip = $;
    var D = (0, r.addLabelToInputNip)(m);
    e.OraLabeledNipMobile = D;
    var y = (0, r.addLabelToInput)(O);
    e.OraLabeledRegon = y;

    function V(e) {
        var r = e.level,
            a = e.message;
        return t.default.createElement(n.OraMessage, {
            type: r,
            text: a
        })
    }
    e.ErrorMessage = V;
    var K = (0, r.appendErrors)(V);
    e.withErrorMessage = K;
    var R = (0, r.appendErrorsNotTimeouted)(V);
    e.withErrorMessageNotTimeouted = R;
    var F = K(M);
    e.LabeledInputWithErrors = F;
    var w = K(W);
    e.LabeledPostalCodeInputWithErrors = w;
    var A = K(P);
    e.LabeledPostalCodeInputMobileWithErrors = A;
    var _ = K(W);
    e.LabeledCbsInputWithErrors = _;
    var x = K(a.LabeledAutocomplete);
    e.LabeledAutocompleteWithErrors = x;
    var S = K(E);
    e.LabeledPeselWithErrors = S;
    var j = K(g);
    e.LabeledIdNumberWithErrors = j;
    var q = K(C);
    e.LabeledIdCensoredNumberWithErrors = q;
    var H = K(f);
    e.LabeledPhoneNumberInputWithErrors = H;
    var z = K(T);
    e.LabeledPhoneNumberInputMobileWithErrors = z;
    var B = K($);
    e.LabeledNipInputWithErrors = B;
    var G = K(D);
    e.LabeledNipMobileInputWithErrors = G;
    var J = K(y);
    e.LabeledRegonInputWithErrors = J;
    var Q = R(k);
    e.LabeledKnaNumberInputWithErrors = Q
});
//# sourceMappingURL=forms.js.map