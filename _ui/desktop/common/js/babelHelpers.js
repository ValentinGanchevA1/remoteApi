(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports"], factory);
    } else if (typeof exports === "object") {
        factory(exports);
    } else {
        factory(root.babelHelpers = {});
    }
})(this, function(global) {
    var babelHelpers = global;

    function _typeof(obj) {
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            babelHelpers.typeof = _typeof = function(obj) {
                return typeof obj;
            };
        } else {
            babelHelpers.typeof = _typeof = function(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
        }

        return _typeof(obj);
    }

    babelHelpers.typeof = _typeof;
    var REACT_ELEMENT_TYPE;

    function _createRawReactElement(type, props, key, children) {
        if (!REACT_ELEMENT_TYPE) {
            REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 0xeac7;
        }

        var defaultProps = type && type.defaultProps;
        var childrenLength = arguments.length - 3;

        if (!props && childrenLength !== 0) {
            props = {
                children: void 0
            };
        }

        if (childrenLength === 1) {
            props.children = children;
        } else if (childrenLength > 1) {
            var childArray = new Array(childrenLength);

            for (var i = 0; i < childrenLength; i++) {
                childArray[i] = arguments[i + 3];
            }

            props.children = childArray;
        }

        if (props && defaultProps) {
            for (var propName in defaultProps) {
                if (props[propName] === void 0) {
                    props[propName] = defaultProps[propName];
                }
            }
        } else if (!props) {
            props = defaultProps || {};
        }

        return {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key === undefined ? null : '' + key,
            ref: null,
            props: props,
            _owner: null
        };
    }

    babelHelpers.jsx = _createRawReactElement;

    function _asyncIterator(iterable) {
        var method;

        if (typeof Symbol !== "undefined") {
            if (Symbol.asyncIterator) {
                method = iterable[Symbol.asyncIterator];
                if (method != null) return method.call(iterable);
            }

            if (Symbol.iterator) {
                method = iterable[Symbol.iterator];
                if (method != null) return method.call(iterable);
            }
        }

        throw new TypeError("Object is not async iterable");
    }

    babelHelpers.asyncIterator = _asyncIterator;

    function _AwaitValue(value) {
        this.wrapped = value;
    }

    babelHelpers.AwaitValue = _AwaitValue;

    function AsyncGenerator(gen) {
        var front, back;

        function send(key, arg) {
            return new Promise(function(resolve, reject) {
                var request = {
                    key: key,
                    arg: arg,
                    resolve: resolve,
                    reject: reject,
                    next: null
                };

                if (back) {
                    back = back.next = request;
                } else {
                    front = back = request;
                    resume(key, arg);
                }
            });
        }

        function resume(key, arg) {
            try {
                var result = gen[key](arg);
                var value = result.value;
                var wrappedAwait = value instanceof babelHelpers.AwaitValue;
                Promise.resolve(wrappedAwait ? value.wrapped : value).then(function(arg) {
                    if (wrappedAwait) {
                        resume("next", arg);
                        return;
                    }

                    settle(result.done ? "return" : "normal", arg);
                }, function(err) {
                    resume("throw", err);
                });
            } catch (err) {
                settle("throw", err);
            }
        }

        function settle(type, value) {
            switch (type) {
                case "return":
                    front.resolve({
                        value: value,
                        done: true
                    });
                    break;

                case "throw":
                    front.reject(value);
                    break;

                default:
                    front.resolve({
                        value: value,
                        done: false
                    });
                    break;
            }

            front = front.next;

            if (front) {
                resume(front.key, front.arg);
            } else {
                back = null;
            }
        }

        this._invoke = send;

        if (typeof gen.return !== "function") {
            this.return = undefined;
        }
    }

    if (typeof Symbol === "function" && Symbol.asyncIterator) {
        AsyncGenerator.prototype[Symbol.asyncIterator] = function() {
            return this;
        };
    }

    AsyncGenerator.prototype.next = function(arg) {
        return this._invoke("next", arg);
    };

    AsyncGenerator.prototype.throw = function(arg) {
        return this._invoke("throw", arg);
    };

    AsyncGenerator.prototype.return = function(arg) {
        return this._invoke("return", arg);
    };

    babelHelpers.AsyncGenerator = AsyncGenerator;

    function _wrapAsyncGenerator(fn) {
        return function() {
            return new babelHelpers.AsyncGenerator(fn.apply(this, arguments));
        };
    }

    babelHelpers.wrapAsyncGenerator = _wrapAsyncGenerator;

    function _awaitAsyncGenerator(value) {
        return new babelHelpers.AwaitValue(value);
    }

    babelHelpers.awaitAsyncGenerator = _awaitAsyncGenerator;

    function _asyncGeneratorDelegate(inner, awaitWrap) {
        var iter = {},
            waiting = false;

        function pump(key, value) {
            waiting = true;
            value = new Promise(function(resolve) {
                resolve(inner[key](value));
            });
            return {
                done: false,
                value: awaitWrap(value)
            };
        }

        ;

        if (typeof Symbol === "function" && Symbol.iterator) {
            iter[Symbol.iterator] = function() {
                return this;
            };
        }

        iter.next = function(value) {
            if (waiting) {
                waiting = false;
                return value;
            }

            return pump("next", value);
        };

        if (typeof inner.throw === "function") {
            iter.throw = function(value) {
                if (waiting) {
                    waiting = false;
                    throw value;
                }

                return pump("throw", value);
            };
        }

        if (typeof inner.return === "function") {
            iter.return = function(value) {
                return pump("return", value);
            };
        }

        return iter;
    }

    babelHelpers.asyncGeneratorDelegate = _asyncGeneratorDelegate;

    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
            var info = gen[key](arg);
            var value = info.value;
        } catch (error) {
            reject(error);
            return;
        }

        if (info.done) {
            resolve(value);
        } else {
            Promise.resolve(value).then(_next, _throw);
        }
    }

    function _asyncToGenerator(fn) {
        return function() {
            var self = this,
                args = arguments;
            return new Promise(function(resolve, reject) {
                var gen = fn.apply(self, args);

                function _next(value) {
                    asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
                }

                function _throw(err) {
                    asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
                }

                _next(undefined);
            });
        };
    }

    babelHelpers.asyncToGenerator = _asyncToGenerator;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    babelHelpers.classCallCheck = _classCallCheck;

    function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
    }

    babelHelpers.createClass = _createClass;

    function _defineEnumerableProperties(obj, descs) {
        for (var key in descs) {
            var desc = descs[key];
            desc.configurable = desc.enumerable = true;
            if ("value" in desc) desc.writable = true;
            Object.defineProperty(obj, key, desc);
        }

        if (Object.getOwnPropertySymbols) {
            var objectSymbols = Object.getOwnPropertySymbols(descs);

            for (var i = 0; i < objectSymbols.length; i++) {
                var sym = objectSymbols[i];
                var desc = descs[sym];
                desc.configurable = desc.enumerable = true;
                if ("value" in desc) desc.writable = true;
                Object.defineProperty(obj, sym, desc);
            }
        }

        return obj;
    }

    babelHelpers.defineEnumerableProperties = _defineEnumerableProperties;

    function _defaults(obj, defaults) {
        var keys = Object.getOwnPropertyNames(defaults);

        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            var value = Object.getOwnPropertyDescriptor(defaults, key);

            if (value && value.configurable && obj[key] === undefined) {
                Object.defineProperty(obj, key, value);
            }
        }

        return obj;
    }

    babelHelpers.defaults = _defaults;

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
    }

    babelHelpers.defineProperty = _defineProperty;

    function _extends() {
        babelHelpers.extends = _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];

                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }

            return target;
        };

        return _extends.apply(this, arguments);
    }

    babelHelpers.extends = _extends;

    function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            var ownKeys = Object.keys(source);

            if (typeof Object.getOwnPropertySymbols === 'function') {
                ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                    return Object.getOwnPropertyDescriptor(source, sym).enumerable;
                }));
            }

            ownKeys.forEach(function(key) {
                babelHelpers.defineProperty(target, key, source[key]);
            });
        }

        return target;
    }

    babelHelpers.objectSpread = _objectSpread;

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

    function _objectSpread2(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};

            if (i % 2) {
                ownKeys(source, true).forEach(function(key) {
                    babelHelpers.defineProperty(target, key, source[key]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
                ownKeys(source).forEach(function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
            }
        }

        return target;
    }

    babelHelpers.objectSpread2 = _objectSpread2;

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                writable: true,
                configurable: true
            }
        });
        if (superClass) babelHelpers.setPrototypeOf(subClass, superClass);
    }

    babelHelpers.inherits = _inherits;

    function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
    }

    babelHelpers.inheritsLoose = _inheritsLoose;

    function _getPrototypeOf(o) {
        babelHelpers.getPrototypeOf = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
        };
        return _getPrototypeOf(o);
    }

    babelHelpers.getPrototypeOf = _getPrototypeOf;

    function _setPrototypeOf(o, p) {
        babelHelpers.setPrototypeOf = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
        };

        return _setPrototypeOf(o, p);
    }

    babelHelpers.setPrototypeOf = _setPrototypeOf;

    function isNativeReflectConstruct() {
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

    function _construct(Parent, args, Class) {
        if (isNativeReflectConstruct()) {
            babelHelpers.construct = _construct = Reflect.construct;
        } else {
            babelHelpers.construct = _construct = function _construct(Parent, args, Class) {
                var a = [null];
                a.push.apply(a, args);
                var Constructor = Function.bind.apply(Parent, a);
                var instance = new Constructor();
                if (Class) babelHelpers.setPrototypeOf(instance, Class.prototype);
                return instance;
            };
        }

        return _construct.apply(null, arguments);
    }

    babelHelpers.construct = _construct;

    function _isNativeFunction(fn) {
        return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }

    babelHelpers.isNativeFunction = _isNativeFunction;

    function _wrapNativeSuper(Class) {
        var _cache = typeof Map === "function" ? new Map() : undefined;

        babelHelpers.wrapNativeSuper = _wrapNativeSuper = function _wrapNativeSuper(Class) {
            if (Class === null || !babelHelpers.isNativeFunction(Class)) return Class;

            if (typeof Class !== "function") {
                throw new TypeError("Super expression must either be null or a function");
            }

            if (typeof _cache !== "undefined") {
                if (_cache.has(Class)) return _cache.get(Class);

                _cache.set(Class, Wrapper);
            }

            function Wrapper() {
                return babelHelpers.construct(Class, arguments, babelHelpers.getPrototypeOf(this).constructor);
            }

            Wrapper.prototype = Object.create(Class.prototype, {
                constructor: {
                    value: Wrapper,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            return babelHelpers.setPrototypeOf(Wrapper, Class);
        };

        return _wrapNativeSuper(Class);
    }

    babelHelpers.wrapNativeSuper = _wrapNativeSuper;

    function _instanceof(left, right) {
        if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
            return !!right[Symbol.hasInstance](left);
        } else {
            return left instanceof right;
        }
    }

    babelHelpers.instanceof = _instanceof;

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    babelHelpers.interopRequireDefault = _interopRequireDefault;

    function _getRequireWildcardCache() {
        if (typeof WeakMap !== "function") return null;
        var cache = new WeakMap();

        _getRequireWildcardCache = function() {
            return cache;
        };

        return cache;
    }

    function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
            return obj;
        }

        var cache = _getRequireWildcardCache();

        if (cache && cache.has(obj)) {
            return cache.get(obj);
        }

        var newObj = {};

        if (obj != null) {
            var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

                    if (desc && (desc.get || desc.set)) {
                        Object.defineProperty(newObj, key, desc);
                    } else {
                        newObj[key] = obj[key];
                    }
                }
            }
        }

        newObj.default = obj;

        if (cache) {
            cache.set(obj, newObj);
        }

        return newObj;
    }

    babelHelpers.interopRequireWildcard = _interopRequireWildcard;

    function _newArrowCheck(innerThis, boundThis) {
        if (innerThis !== boundThis) {
            throw new TypeError("Cannot instantiate an arrow function");
        }
    }

    babelHelpers.newArrowCheck = _newArrowCheck;

    function _objectDestructuringEmpty(obj) {
        if (obj == null) throw new TypeError("Cannot destructure undefined");
    }

    babelHelpers.objectDestructuringEmpty = _objectDestructuringEmpty;

    function _objectWithoutPropertiesLoose(source, excluded) {
        if (source == null) return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i;

        for (i = 0; i < sourceKeys.length; i++) {
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
        }

        return target;
    }

    babelHelpers.objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose;

    function _objectWithoutProperties(source, excluded) {
        if (source == null) return {};
        var target = babelHelpers.objectWithoutPropertiesLoose(source, excluded);
        var key, i;

        if (Object.getOwnPropertySymbols) {
            var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

            for (i = 0; i < sourceSymbolKeys.length; i++) {
                key = sourceSymbolKeys[i];
                if (excluded.indexOf(key) >= 0) continue;
                if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
                target[key] = source[key];
            }
        }

        return target;
    }

    babelHelpers.objectWithoutProperties = _objectWithoutProperties;

    function _assertThisInitialized(self) {
        if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return self;
    }

    babelHelpers.assertThisInitialized = _assertThisInitialized;

    function _possibleConstructorReturn(self, call) {
        if (call && (typeof call === "object" || typeof call === "function")) {
            return call;
        }

        return babelHelpers.assertThisInitialized(self);
    }

    babelHelpers.possibleConstructorReturn = _possibleConstructorReturn;

    function _superPropBase(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
            object = babelHelpers.getPrototypeOf(object);
            if (object === null) break;
        }

        return object;
    }

    babelHelpers.superPropBase = _superPropBase;

    function _get(target, property, receiver) {
        if (typeof Reflect !== "undefined" && Reflect.get) {
            babelHelpers.get = _get = Reflect.get;
        } else {
            babelHelpers.get = _get = function _get(target, property, receiver) {
                var base = babelHelpers.superPropBase(target, property);
                if (!base) return;
                var desc = Object.getOwnPropertyDescriptor(base, property);

                if (desc.get) {
                    return desc.get.call(receiver);
                }

                return desc.value;
            };
        }

        return _get(target, property, receiver || target);
    }

    babelHelpers.get = _get;

    function set(target, property, value, receiver) {
        if (typeof Reflect !== "undefined" && Reflect.set) {
            set = Reflect.set;
        } else {
            set = function set(target, property, value, receiver) {
                var base = babelHelpers.superPropBase(target, property);
                var desc;

                if (base) {
                    desc = Object.getOwnPropertyDescriptor(base, property);

                    if (desc.set) {
                        desc.set.call(receiver, value);
                        return true;
                    } else if (!desc.writable) {
                        return false;
                    }
                }

                desc = Object.getOwnPropertyDescriptor(receiver, property);

                if (desc) {
                    if (!desc.writable) {
                        return false;
                    }

                    desc.value = value;
                    Object.defineProperty(receiver, property, desc);
                } else {
                    babelHelpers.defineProperty(receiver, property, value);
                }

                return true;
            };
        }

        return set(target, property, value, receiver);
    }

    function _set(target, property, value, receiver, isStrict) {
        var s = set(target, property, value, receiver || target);

        if (!s && isStrict) {
            throw new Error('failed to set property');
        }

        return value;
    }

    babelHelpers.set = _set;

    function _taggedTemplateLiteral(strings, raw) {
        if (!raw) {
            raw = strings.slice(0);
        }

        return Object.freeze(Object.defineProperties(strings, {
            raw: {
                value: Object.freeze(raw)
            }
        }));
    }

    babelHelpers.taggedTemplateLiteral = _taggedTemplateLiteral;

    function _taggedTemplateLiteralLoose(strings, raw) {
        if (!raw) {
            raw = strings.slice(0);
        }

        strings.raw = raw;
        return strings;
    }

    babelHelpers.taggedTemplateLiteralLoose = _taggedTemplateLiteralLoose;

    function _readOnlyError(name) {
        throw new Error("\"" + name + "\" is read-only");
    }

    babelHelpers.readOnlyError = _readOnlyError;

    function _classNameTDZError(name) {
        throw new Error("Class \"" + name + "\" cannot be referenced in computed property keys.");
    }

    babelHelpers.classNameTDZError = _classNameTDZError;

    function _temporalUndefined() {}

    babelHelpers.temporalUndefined = _temporalUndefined;

    function _tdzError(name) {
        throw new ReferenceError(name + " is not defined - temporal dead zone");
    }

    babelHelpers.tdz = _tdzError;

    function _temporalRef(val, name) {
        return val === babelHelpers.temporalUndefined ? babelHelpers.tdz(name) : val;
    }

    babelHelpers.temporalRef = _temporalRef;

    function _slicedToArray(arr, i) {
        return babelHelpers.arrayWithHoles(arr) || babelHelpers.iterableToArrayLimit(arr, i) || babelHelpers.nonIterableRest();
    }

    babelHelpers.slicedToArray = _slicedToArray;

    function _slicedToArrayLoose(arr, i) {
        return babelHelpers.arrayWithHoles(arr) || babelHelpers.iterableToArrayLimitLoose(arr, i) || babelHelpers.nonIterableRest();
    }

    babelHelpers.slicedToArrayLoose = _slicedToArrayLoose;

    function _toArray(arr) {
        return babelHelpers.arrayWithHoles(arr) || babelHelpers.iterableToArray(arr) || babelHelpers.nonIterableRest();
    }

    babelHelpers.toArray = _toArray;

    function _toConsumableArray(arr) {
        return babelHelpers.arrayWithoutHoles(arr) || babelHelpers.iterableToArray(arr) || babelHelpers.nonIterableSpread();
    }

    babelHelpers.toConsumableArray = _toConsumableArray;

    function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

            return arr2;
        }
    }

    babelHelpers.arrayWithoutHoles = _arrayWithoutHoles;

    function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
    }

    babelHelpers.arrayWithHoles = _arrayWithHoles;

    function _iterableToArray(iter) {
        if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
    }

    babelHelpers.iterableToArray = _iterableToArray;

    function _iterableToArrayLimit(arr, i) {
        if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
            return;
        }

        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;

        try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);

                if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally {
            try {
                if (!_n && _i["return"] != null) _i["return"]();
            } finally {
                if (_d) throw _e;
            }
        }

        return _arr;
    }

    babelHelpers.iterableToArrayLimit = _iterableToArrayLimit;

    function _iterableToArrayLimitLoose(arr, i) {
        if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
            return;
        }

        var _arr = [];

        for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
            _arr.push(_step.value);

            if (i && _arr.length === i) break;
        }

        return _arr;
    }

    babelHelpers.iterableToArrayLimitLoose = _iterableToArrayLimitLoose;

    function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
    }

    babelHelpers.nonIterableSpread = _nonIterableSpread;

    function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }

    babelHelpers.nonIterableRest = _nonIterableRest;

    function _skipFirstGeneratorNext(fn) {
        return function() {
            var it = fn.apply(this, arguments);
            it.next();
            return it;
        };
    }

    babelHelpers.skipFirstGeneratorNext = _skipFirstGeneratorNext;

    function _toPrimitive(input, hint) {
        if (typeof input !== "object" || input === null) return input;
        var prim = input[Symbol.toPrimitive];

        if (prim !== undefined) {
            var res = prim.call(input, hint || "default");
            if (typeof res !== "object") return res;
            throw new TypeError("@@toPrimitive must return a primitive value.");
        }

        return (hint === "string" ? String : Number)(input);
    }

    babelHelpers.toPrimitive = _toPrimitive;

    function _toPropertyKey(arg) {
        var key = babelHelpers.toPrimitive(arg, "string");
        return typeof key === "symbol" ? key : String(key);
    }

    babelHelpers.toPropertyKey = _toPropertyKey;

    function _initializerWarningHelper(descriptor, context) {
        throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.');
    }

    babelHelpers.initializerWarningHelper = _initializerWarningHelper;

    function _initializerDefineProperty(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
    }

    babelHelpers.initializerDefineProperty = _initializerDefineProperty;

    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object.keys(descriptor).forEach(function(key) {
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function(desc, decorator) {
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
            Object.defineProperty(target, property, desc);
            desc = null;
        }

        return desc;
    }

    babelHelpers.applyDecoratedDescriptor = _applyDecoratedDescriptor;
    var id = 0;

    function _classPrivateFieldKey(name) {
        return "__private_" + id++ + "_" + name;
    }

    babelHelpers.classPrivateFieldLooseKey = _classPrivateFieldKey;

    function _classPrivateFieldBase(receiver, privateKey) {
        if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
            throw new TypeError("attempted to use private field on non-instance");
        }

        return receiver;
    }

    babelHelpers.classPrivateFieldLooseBase = _classPrivateFieldBase;

    function _classPrivateFieldGet(receiver, privateMap) {
        var descriptor = privateMap.get(receiver);

        if (!descriptor) {
            throw new TypeError("attempted to get private field on non-instance");
        }

        if (descriptor.get) {
            return descriptor.get.call(receiver);
        }

        return descriptor.value;
    }

    babelHelpers.classPrivateFieldGet = _classPrivateFieldGet;

    function _classPrivateFieldSet(receiver, privateMap, value) {
        var descriptor = privateMap.get(receiver);

        if (!descriptor) {
            throw new TypeError("attempted to set private field on non-instance");
        }

        if (descriptor.set) {
            descriptor.set.call(receiver, value);
        } else {
            if (!descriptor.writable) {
                throw new TypeError("attempted to set read only private field");
            }

            descriptor.value = value;
        }

        return value;
    }

    babelHelpers.classPrivateFieldSet = _classPrivateFieldSet;

    function _classPrivateFieldDestructureSet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }

        var descriptor = privateMap.get(receiver);

        if (descriptor.set) {
            if (!("__destrObj" in descriptor)) {
                descriptor.__destrObj = {
                    set value(v) {
                        descriptor.set.call(receiver, v);
                    }

                };
            }

            return descriptor.__destrObj;
        } else {
            if (!descriptor.writable) {
                throw new TypeError("attempted to set read only private field");
            }

            return descriptor;
        }
    }

    babelHelpers.classPrivateFieldDestructureSet = _classPrivateFieldDestructureSet;

    function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
        if (receiver !== classConstructor) {
            throw new TypeError("Private static access of wrong provenance");
        }

        if (descriptor.get) {
            return descriptor.get.call(receiver);
        }

        return descriptor.value;
    }

    babelHelpers.classStaticPrivateFieldSpecGet = _classStaticPrivateFieldSpecGet;

    function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) {
        if (receiver !== classConstructor) {
            throw new TypeError("Private static access of wrong provenance");
        }

        if (descriptor.set) {
            descriptor.set.call(receiver, value);
        } else {
            if (!descriptor.writable) {
                throw new TypeError("attempted to set read only private field");
            }

            descriptor.value = value;
        }

        return value;
    }

    babelHelpers.classStaticPrivateFieldSpecSet = _classStaticPrivateFieldSpecSet;

    function _classStaticPrivateMethodGet(receiver, classConstructor, method) {
        if (receiver !== classConstructor) {
            throw new TypeError("Private static access of wrong provenance");
        }

        return method;
    }

    babelHelpers.classStaticPrivateMethodGet = _classStaticPrivateMethodGet;

    function _classStaticPrivateMethodSet() {
        throw new TypeError("attempted to set read only static private field");
    }

    babelHelpers.classStaticPrivateMethodSet = _classStaticPrivateMethodSet;

    function _decorate(decorators, factory, superClass, mixins) {
        var api = _getDecoratorsApi();

        if (mixins) {
            for (var i = 0; i < mixins.length; i++) {
                api = mixins[i](api);
            }
        }

        var r = factory(function initialize(O) {
            api.initializeInstanceElements(O, decorated.elements);
        }, superClass);
        var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators);
        api.initializeClassElements(r.F, decorated.elements);
        return api.runClassFinishers(r.F, decorated.finishers);
    }

    function _getDecoratorsApi() {
        _getDecoratorsApi = function() {
            return api;
        };

        var api = {
            elementsDefinitionOrder: [
                ["method"],
                ["field"]
            ],
            initializeInstanceElements: function(O, elements) {
                ["method", "field"].forEach(function(kind) {
                    elements.forEach(function(element) {
                        if (element.kind === kind && element.placement === "own") {
                            this.defineClassElement(O, element);
                        }
                    }, this);
                }, this);
            },
            initializeClassElements: function(F, elements) {
                var proto = F.prototype;
                ["method", "field"].forEach(function(kind) {
                    elements.forEach(function(element) {
                        var placement = element.placement;

                        if (element.kind === kind && (placement === "static" || placement === "prototype")) {
                            var receiver = placement === "static" ? F : proto;
                            this.defineClassElement(receiver, element);
                        }
                    }, this);
                }, this);
            },
            defineClassElement: function(receiver, element) {
                var descriptor = element.descriptor;

                if (element.kind === "field") {
                    var initializer = element.initializer;
                    descriptor = {
                        enumerable: descriptor.enumerable,
                        writable: descriptor.writable,
                        configurable: descriptor.configurable,
                        value: initializer === void 0 ? void 0 : initializer.call(receiver)
                    };
                }

                Object.defineProperty(receiver, element.key, descriptor);
            },
            decorateClass: function(elements, decorators) {
                var newElements = [];
                var finishers = [];
                var placements = {
                    static: [],
                    prototype: [],
                    own: []
                };
                elements.forEach(function(element) {
                    this.addElementPlacement(element, placements);
                }, this);
                elements.forEach(function(element) {
                    if (!_hasDecorators(element)) return newElements.push(element);
                    var elementFinishersExtras = this.decorateElement(element, placements);
                    newElements.push(elementFinishersExtras.element);
                    newElements.push.apply(newElements, elementFinishersExtras.extras);
                    finishers.push.apply(finishers, elementFinishersExtras.finishers);
                }, this);

                if (!decorators) {
                    return {
                        elements: newElements,
                        finishers: finishers
                    };
                }

                var result = this.decorateConstructor(newElements, decorators);
                finishers.push.apply(finishers, result.finishers);
                result.finishers = finishers;
                return result;
            },
            addElementPlacement: function(element, placements, silent) {
                var keys = placements[element.placement];

                if (!silent && keys.indexOf(element.key) !== -1) {
                    throw new TypeError("Duplicated element (" + element.key + ")");
                }

                keys.push(element.key);
            },
            decorateElement: function(element, placements) {
                var extras = [];
                var finishers = [];

                for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) {
                    var keys = placements[element.placement];
                    keys.splice(keys.indexOf(element.key), 1);
                    var elementObject = this.fromElementDescriptor(element);
                    var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject);
                    element = elementFinisherExtras.element;
                    this.addElementPlacement(element, placements);

                    if (elementFinisherExtras.finisher) {
                        finishers.push(elementFinisherExtras.finisher);
                    }

                    var newExtras = elementFinisherExtras.extras;

                    if (newExtras) {
                        for (var j = 0; j < newExtras.length; j++) {
                            this.addElementPlacement(newExtras[j], placements);
                        }

                        extras.push.apply(extras, newExtras);
                    }
                }

                return {
                    element: element,
                    finishers: finishers,
                    extras: extras
                };
            },
            decorateConstructor: function(elements, decorators) {
                var finishers = [];

                for (var i = decorators.length - 1; i >= 0; i--) {
                    var obj = this.fromClassDescriptor(elements);
                    var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj);

                    if (elementsAndFinisher.finisher !== undefined) {
                        finishers.push(elementsAndFinisher.finisher);
                    }

                    if (elementsAndFinisher.elements !== undefined) {
                        elements = elementsAndFinisher.elements;

                        for (var j = 0; j < elements.length - 1; j++) {
                            for (var k = j + 1; k < elements.length; k++) {
                                if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) {
                                    throw new TypeError("Duplicated element (" + elements[j].key + ")");
                                }
                            }
                        }
                    }
                }

                return {
                    elements: elements,
                    finishers: finishers
                };
            },
            fromElementDescriptor: function(element) {
                var obj = {
                    kind: element.kind,
                    key: element.key,
                    placement: element.placement,
                    descriptor: element.descriptor
                };
                var desc = {
                    value: "Descriptor",
                    configurable: true
                };
                Object.defineProperty(obj, Symbol.toStringTag, desc);
                if (element.kind === "field") obj.initializer = element.initializer;
                return obj;
            },
            toElementDescriptors: function(elementObjects) {
                if (elementObjects === undefined) return;
                return babelHelpers.toArray(elementObjects).map(function(elementObject) {
                    var element = this.toElementDescriptor(elementObject);
                    this.disallowProperty(elementObject, "finisher", "An element descriptor");
                    this.disallowProperty(elementObject, "extras", "An element descriptor");
                    return element;
                }, this);
            },
            toElementDescriptor: function(elementObject) {
                var kind = String(elementObject.kind);

                if (kind !== "method" && kind !== "field") {
                    throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"');
                }

                var key = babelHelpers.toPropertyKey(elementObject.key);
                var placement = String(elementObject.placement);

                if (placement !== "static" && placement !== "prototype" && placement !== "own") {
                    throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"');
                }

                var descriptor = elementObject.descriptor;
                this.disallowProperty(elementObject, "elements", "An element descriptor");
                var element = {
                    kind: kind,
                    key: key,
                    placement: placement,
                    descriptor: Object.assign({}, descriptor)
                };

                if (kind !== "field") {
                    this.disallowProperty(elementObject, "initializer", "A method descriptor");
                } else {
                    this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor");
                    this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor");
                    this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor");
                    element.initializer = elementObject.initializer;
                }

                return element;
            },
            toElementFinisherExtras: function(elementObject) {
                var element = this.toElementDescriptor(elementObject);

                var finisher = _optionalCallableProperty(elementObject, "finisher");

                var extras = this.toElementDescriptors(elementObject.extras);
                return {
                    element: element,
                    finisher: finisher,
                    extras: extras
                };
            },
            fromClassDescriptor: function(elements) {
                var obj = {
                    kind: "class",
                    elements: elements.map(this.fromElementDescriptor, this)
                };
                var desc = {
                    value: "Descriptor",
                    configurable: true
                };
                Object.defineProperty(obj, Symbol.toStringTag, desc);
                return obj;
            },
            toClassDescriptor: function(obj) {
                var kind = String(obj.kind);

                if (kind !== "class") {
                    throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"');
                }

                this.disallowProperty(obj, "key", "A class descriptor");
                this.disallowProperty(obj, "placement", "A class descriptor");
                this.disallowProperty(obj, "descriptor", "A class descriptor");
                this.disallowProperty(obj, "initializer", "A class descriptor");
                this.disallowProperty(obj, "extras", "A class descriptor");

                var finisher = _optionalCallableProperty(obj, "finisher");

                var elements = this.toElementDescriptors(obj.elements);
                return {
                    elements: elements,
                    finisher: finisher
                };
            },
            runClassFinishers: function(constructor, finishers) {
                for (var i = 0; i < finishers.length; i++) {
                    var newConstructor = (0, finishers[i])(constructor);

                    if (newConstructor !== undefined) {
                        if (typeof newConstructor !== "function") {
                            throw new TypeError("Finishers must return a constructor.");
                        }

                        constructor = newConstructor;
                    }
                }

                return constructor;
            },
            disallowProperty: function(obj, name, objectType) {
                if (obj[name] !== undefined) {
                    throw new TypeError(objectType + " can't have a ." + name + " property.");
                }
            }
        };
        return api;
    }

    function _createElementDescriptor(def) {
        var key = babelHelpers.toPropertyKey(def.key);
        var descriptor;

        if (def.kind === "method") {
            descriptor = {
                value: def.value,
                writable: true,
                configurable: true,
                enumerable: false
            };
        } else if (def.kind === "get") {
            descriptor = {
                get: def.value,
                configurable: true,
                enumerable: false
            };
        } else if (def.kind === "set") {
            descriptor = {
                set: def.value,
                configurable: true,
                enumerable: false
            };
        } else if (def.kind === "field") {
            descriptor = {
                configurable: true,
                writable: true,
                enumerable: true
            };
        }

        var element = {
            kind: def.kind === "field" ? "field" : "method",
            key: key,
            placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype",
            descriptor: descriptor
        };
        if (def.decorators) element.decorators = def.decorators;
        if (def.kind === "field") element.initializer = def.value;
        return element;
    }

    function _coalesceGetterSetter(element, other) {
        if (element.descriptor.get !== undefined) {
            other.descriptor.get = element.descriptor.get;
        } else {
            other.descriptor.set = element.descriptor.set;
        }
    }

    function _coalesceClassElements(elements) {
        var newElements = [];

        var isSameElement = function(other) {
            return other.kind === "method" && other.key === element.key && other.placement === element.placement;
        };

        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var other;

            if (element.kind === "method" && (other = newElements.find(isSameElement))) {
                if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) {
                    if (_hasDecorators(element) || _hasDecorators(other)) {
                        throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated.");
                    }

                    other.descriptor = element.descriptor;
                } else {
                    if (_hasDecorators(element)) {
                        if (_hasDecorators(other)) {
                            throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ").");
                        }

                        other.decorators = element.decorators;
                    }

                    _coalesceGetterSetter(element, other);
                }
            } else {
                newElements.push(element);
            }
        }

        return newElements;
    }

    function _hasDecorators(element) {
        return element.decorators && element.decorators.length;
    }

    function _isDataDescriptor(desc) {
        return desc !== undefined && !(desc.value === undefined && desc.writable === undefined);
    }

    function _optionalCallableProperty(obj, name) {
        var value = obj[name];

        if (value !== undefined && typeof value !== "function") {
            throw new TypeError("Expected '" + name + "' to be a function");
        }

        return value;
    }

    babelHelpers.decorate = _decorate;

    function _classPrivateMethodGet(receiver, privateSet, fn) {
        if (!privateSet.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }

        return fn;
    }

    babelHelpers.classPrivateMethodGet = _classPrivateMethodGet;

    function _classPrivateMethodSet() {
        throw new TypeError("attempted to reassign private method");
    }

    babelHelpers.classPrivateMethodSet = _classPrivateMethodSet;

    function _wrapRegExp(re, groups) {
        babelHelpers.wrapRegExp = _wrapRegExp = function(re, groups) {
            return new BabelRegExp(re, undefined, groups);
        };

        var _RegExp = babelHelpers.wrapNativeSuper(RegExp);

        var _super = RegExp.prototype;

        var _groups = new WeakMap();

        function BabelRegExp(re, flags, groups) {
            var _this = _RegExp.call(this, re, flags);

            _groups.set(_this, groups || _groups.get(re));

            return _this;
        }

        babelHelpers.inherits(BabelRegExp, _RegExp);

        BabelRegExp.prototype.exec = function(str) {
            var result = _super.exec.call(this, str);

            if (result) result.groups = buildGroups(result, this);
            return result;
        };

        BabelRegExp.prototype[Symbol.replace] = function(str, substitution) {
            if (typeof substitution === "string") {
                var groups = _groups.get(this);

                return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function(_, name) {
                    return "$" + groups[name];
                }));
            } else if (typeof substitution === "function") {
                var _this = this;

                return _super[Symbol.replace].call(this, str, function() {
                    var args = [];
                    args.push.apply(args, arguments);

                    if (typeof args[args.length - 1] !== "object") {
                        args.push(buildGroups(args, _this));
                    }

                    return substitution.apply(this, args);
                });
            } else {
                return _super[Symbol.replace].call(this, str, substitution);
            }
        };

        function buildGroups(result, re) {
            var g = _groups.get(re);

            return Object.keys(g).reduce(function(groups, name) {
                groups[name] = result[g[name]];
                return groups;
            }, Object.create(null));
        }

        return _wrapRegExp.apply(this, arguments);
    }

    babelHelpers.wrapRegExp = _wrapRegExp;
});