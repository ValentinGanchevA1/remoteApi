define(["exports", "react", "react-dom"], function(_exports, _react, _reactDom) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.mount = mount;

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

    function _createSuper(Derived) {
        return function() {
            var Super = babelHelpers.getPrototypeOf(Derived),
                result;
            if (_isNativeReflectConstruct()) {
                var NewTarget = babelHelpers.getPrototypeOf(this).constructor;
                result = Reflect.construct(Super, arguments, NewTarget);
            } else {
                result = Super.apply(this, arguments);
            }
            return babelHelpers.possibleConstructorReturn(this, result);
        };
    }

    function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
            Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
            return true;
        } catch (e) {
            return false;
        }
    }

    var renamed = function renamed(name) {
        return function(Component) {
            var RenamedComponent = /*#__PURE__*/ function(_Component) {
                babelHelpers.inherits(RenamedComponent, _Component);

                var _super = _createSuper(RenamedComponent);

                function RenamedComponent() {
                    babelHelpers.classCallCheck(this, RenamedComponent);
                    return _super.apply(this, arguments);
                }

                return RenamedComponent;
            }(Component);

            RenamedComponent.displayName = name;
            return RenamedComponent;
        };
    };

    function mountElement(element, node) {
        (0, _reactDom.render)(element, node);
        OPL.UI.initModules(node);
    }

    function mount(_ref) {
        var node = _ref.node,
            Component = _ref.Component,
            props = _ref.props,
            name = _ref.name,
            storePath = _ref.storePath;

        if (!storePath) {
            mountElement((0, _react.createElement)(Component, props), node);
        } else {
            // another require, so that we can dynamically get redux and store only for redux-connected components
            UX.require(["react-redux", storePath], function(ReactRedux, store) {
                mountElement((0, _react.createElement)(renamed(name || "Provider(".concat(Component.displayName || Component.name, ")"))(ReactRedux.Provider), {
                    store: store
                }, (0, _react.createElement)(Component, _objectSpread({}, props))), node);
            });
        }
    }
});
//# sourceMappingURL=ReactUtils.js.map