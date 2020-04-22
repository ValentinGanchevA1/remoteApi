define(["exports", "prop-types"], function(_exports, _propTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.ConvergentComponentDescriptionsType = _exports.ConvergentMultiCartExpandedItemDescriptionsType = void 0;

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

    /** descriptions **/
    var ConvergentMultiCartExpandedItemDescriptionsType = {
        convergentMultiCartLegalSAT: _propTypes.PropTypes.string,
        convergentMultiCartLegalDSL: _propTypes.PropTypes.string
    };
    _exports.ConvergentMultiCartExpandedItemDescriptionsType = ConvergentMultiCartExpandedItemDescriptionsType;

    var ConvergentComponentDescriptionsType = _objectSpread({
        saveVasesButton: _propTypes.PropTypes.string
    }, ConvergentMultiCartExpandedItemDescriptionsType);

    _exports.ConvergentComponentDescriptionsType = ConvergentComponentDescriptionsType;
});
//# sourceMappingURL=typings.js.map