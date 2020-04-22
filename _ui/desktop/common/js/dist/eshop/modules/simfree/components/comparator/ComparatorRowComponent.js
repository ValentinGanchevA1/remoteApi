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

    var ComparatorRowComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(ComparatorRowComponent, _Component);

        var _super = _createSuper(ComparatorRowComponent);

        function ComparatorRowComponent(props) {
            babelHelpers.classCallCheck(this, ComparatorRowComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(ComparatorRowComponent, [{
            key: "renderVal",
            value: function renderVal(values) {
                return values != null && values.length > 0 && values[0] === true ? /*#__PURE__*/ _react.default.createElement("td", null, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--valid g-icon--xs-s"
                })) : values != null && values.length > 0 && values[0] !== true ? /*#__PURE__*/ _react.default.createElement("td", null, /*#__PURE__*/ _react.default.createElement("span", null, values[0])) : values != null && values.length == 0 ? /*#__PURE__*/ _react.default.createElement("td", null, /*#__PURE__*/ _react.default.createElement("span", null, "-")) : /*#__PURE__*/ _react.default.createElement("td", null, /*#__PURE__*/ _react.default.createElement("span", null, "-"));
            }
        }, {
            key: "render",
            value: function render() {
                var _this = this;

                var table = [];

                for (var i = 0; i < 3 - this.props.row.valueObject.length; i++) {
                    table.push( /*#__PURE__*/ _react.default.createElement("td", null, /*#__PURE__*/ _react.default.createElement("span", null, "-")));
                }

                return /*#__PURE__*/ _react.default.createElement("tr", {
                    className: this.props.row.hasDifferences && this.props.markDiff ? "g-gray2-bgc" : ""
                }, /*#__PURE__*/ _react.default.createElement("th", null, this.props.row.attributeName), this.props.row.valueObject && this.props.row.valueObject.map(function(val) {
                    return _this.renderVal(val.value);
                }), table);
            }
        }]);
        return ComparatorRowComponent;
    }(_react.Component);

    _exports.default = ComparatorRowComponent;
});
//# sourceMappingURL=ComparatorRowComponent.js.map