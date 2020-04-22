define(["exports"], function(_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.getCommonPropsForInput = void 0;

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

    var getCommonPropsForInput = function getCommonPropsForInput(props, name, prefix, options) {
        var index = props.index;
        var composedName = prefix + "-" + index + "-" + name;
        var errors = props.errors && props.errors[name] || [];
        var valid = errors.length == 0;
        return _objectSpread({
            name: composedName,
            id: composedName,
            value: props[name] || "",
            errors: errors,
            labelType: "floating",
            onBlur: function onBlur(args) {
                var value = args.value;
                props.onChange({
                    index: index,
                    name: name,
                    value: value,
                    validate: true
                }); //with validation
            },
            onChange: function onChange(args) {
                var value = args.value;
                props.onChange({
                    index: index,
                    name: name,
                    value: value,
                    validate: false
                }); // no validation
            },
            validationMark: true,
            valid: valid
        }, options);
    };

    _exports.getCommonPropsForInput = getCommonPropsForInput;
});
//# sourceMappingURL=common.js.map