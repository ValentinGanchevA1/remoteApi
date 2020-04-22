define(["exports", "react"], function(_exports, _react) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);

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

    var ProcessTypeFilter = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(ProcessTypeFilter, _Component);

        var _super = _createSuper(ProcessTypeFilter);

        function ProcessTypeFilter() {
            babelHelpers.classCallCheck(this, ProcessTypeFilter);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(ProcessTypeFilter, [{
            key: "render",
            value: function render() {
                //
                return null;
            }
        }]);
        return ProcessTypeFilter;
    }(_react.Component);

    _exports.default = ProcessTypeFilter;
});
//# sourceMappingURL=ProcessTypeFilter.js.map