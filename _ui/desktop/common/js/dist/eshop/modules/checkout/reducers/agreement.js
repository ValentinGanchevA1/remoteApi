define(["exports", "../actionTypes"], function(_exports, _actionTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.documentsToMergePerBundle = _exports.documentLoadings = _exports.introductionStatuses = void 0;

    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
            keys.push.apply(keys, symbols);
        }
        return keys;
    }

    function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
                ownKeys(Object(source), true).forEach(function(key) {
                    babelHelpers.defineProperty(target, key, source[key]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
                ownKeys(Object(source)).forEach(function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
            }
        }
        return target;
    }

    var introductionStatuses = function introductionStatuses() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.SET_AGREEMENT_INTRODUCTION_STATUS:
                return _objectSpread({}, state, babelHelpers.defineProperty({}, action.bundleNo, action.status));

            case _actionTypes.SET_AGREEMENT_INTRODUCTION_STATUSES:
                return action.introductionStatuses.reduce(function(newState, introduction) {
                    return _objectSpread({}, newState, babelHelpers.defineProperty({}, introduction.bundleNo, introduction.status));
                }, {});

            default:
                return state;
        }
    };

    _exports.introductionStatuses = introductionStatuses;

    var documentLoadings = function documentLoadings() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.SET_AGREEMENT_INTRODUCTION_DOCUMENT_LOADING:
                return _objectSpread({}, state, babelHelpers.defineProperty({}, action.bundleNo, action.loading));

            default:
                return state;
        }
    };

    _exports.documentLoadings = documentLoadings;

    var documentsToMergePerBundle = function documentsToMergePerBundle() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.SET_DOCUMENTS_TO_MERGE_PER_BUNDLE:
                return action.documentsToMergePerBundle;

            default:
                return state;
        }
    };

    _exports.documentsToMergePerBundle = documentsToMergePerBundle;
});
//# sourceMappingURL=agreement.js.map