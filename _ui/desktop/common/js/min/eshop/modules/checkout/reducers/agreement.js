define(["exports", "../actionTypes"], function(e, o) {
    "use strict";

    function n(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function u(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? n(Object(r), !0).forEach(function(e) {
                babelHelpers.defineProperty(t, e, r[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            })
        }
        return t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.documentsToMergePerBundle = e.documentLoadings = e.introductionStatuses = void 0;
    e.introductionStatuses = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {},
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case o.SET_AGREEMENT_INTRODUCTION_STATUS:
                return u({}, r, babelHelpers.defineProperty({}, n.bundleNo, n.status));
            case o.SET_AGREEMENT_INTRODUCTION_STATUSES:
                return n.introductionStatuses.reduce(function(e, t) {
                    return u({}, e, babelHelpers.defineProperty({}, t.bundleNo, t.status))
                }, {});
            default:
                return r
        }
    };
    e.documentLoadings = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {},
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case o.SET_AGREEMENT_INTRODUCTION_DOCUMENT_LOADING:
                return u({}, r, babelHelpers.defineProperty({}, n.bundleNo, n.loading));
            default:
                return r
        }
    };
    e.documentsToMergePerBundle = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case o.SET_DOCUMENTS_TO_MERGE_PER_BUNDLE:
                return n.documentsToMergePerBundle;
            default:
                return r
        }
    }
});
//# sourceMappingURL=agreement.js.map