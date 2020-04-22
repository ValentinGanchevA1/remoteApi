define(["exports", "react", "eshop/modules/checkout/components/representative/Representative"], function(_exports, _react, _Representative) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _Representative = babelHelpers.interopRequireDefault(_Representative);

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

    var Representatives = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(Representatives, _Component);

        var _super = _createSuper(Representatives);

        function Representatives(props) {
            var _this;

            babelHelpers.classCallCheck(this, Representatives);
            _this = _super.call(this, props);
            _this.removeFactory = _this.removeFactory.bind(babelHelpers.assertThisInitialized(_this));
            _this.ordinals = ["Pierwszy", "Drugi", "Trzeci", "Czwarty", "Piąty", "Szósty", "Siódmy", "Ósmy", "Dziewiąty", "Dziesiąty"];
            return _this;
        }

        babelHelpers.createClass(Representatives, [{
            key: "removeFactory",
            value: function removeFactory() {
                if (this.props.minCount && this.props.data.length > this.props.minCount) {
                    return this.props.remove;
                }
            }
        }, {
            key: "getLabel",
            value: function getLabel(index) {
                if (this.props.data.length > 1) {
                    var label = "";

                    if (this.props.representationMode == "WR") {
                        label = "reprezentant";
                    }

                    if (this.props.representationMode == "WP") {
                        label = "pełnomocnik";
                    }

                    return this.ordinals[index] + " " + label;
                } else {
                    return null;
                }
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                return /*#__PURE__*/ _react.default.createElement("div", null, this.props.data.map(function(data, index) {
                    return /*#__PURE__*/ _react.default.createElement(_Representative.default, babelHelpers.extends({}, _this2.props, data, {
                        key: index,
                        index: index,
                        onChange: _this2.props.onChange,
                        remove: _this2.removeFactory(),
                        label: _this2.getLabel(index)
                    }));
                }));
            }
        }]);
        return Representatives;
    }(_react.Component);

    _exports.default = Representatives;
});
//# sourceMappingURL=Representatives.js.map