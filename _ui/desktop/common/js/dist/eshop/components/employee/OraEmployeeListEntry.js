define(["exports", "react"], function(_exports, _react) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);

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

    var OraEmployeeListEntry = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(OraEmployeeListEntry, _React$Component);

        var _super = _createSuper(OraEmployeeListEntry);

        function OraEmployeeListEntry() {
            babelHelpers.classCallCheck(this, OraEmployeeListEntry);
            return _super.call(this);
        }

        babelHelpers.createClass(OraEmployeeListEntry, [{
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("tr", null, /*#__PURE__*/ _react.default.createElement("td", null, /*#__PURE__*/ _react.default.createElement("label", {
                    className: "o-radio opl-radio"
                }, /*#__PURE__*/ _react.default.createElement("input", {
                    type: "radio",
                    name: this.props.radioName,
                    value: this.props.employee.sisId,
                    defaultChecked: this.props.checked === this.props.employee.sisId,
                    onChange: this.props.radioChanged
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci"
                }))), /*#__PURE__*/ _react.default.createElement("td", null, this.props.employee.sisId), /*#__PURE__*/ _react.default.createElement("td", null, this.props.employee.lastName), /*#__PURE__*/ _react.default.createElement("td", null, this.props.employee.firstName), /*#__PURE__*/ _react.default.createElement("td", null, this.props.employee.loginOtsa), /*#__PURE__*/ _react.default.createElement("td", null, this.props.employee.fullBscs), /*#__PURE__*/ _react.default.createElement("td", null, this.props.employee.location), /*#__PURE__*/ _react.default.createElement("td", null, this.props.employee.salesChannelName), /*#__PURE__*/ _react.default.createElement("td", null, this.props.employee.sisChannelDescription));
            }
        }]);
        return OraEmployeeListEntry;
    }(_react.default.Component);

    _exports.default = OraEmployeeListEntry;
    OraEmployeeListEntry.defaultProps = {
        employee: {},
        radioName: "selectedEmployee",
        radioChanged: function radioChanged(event) {}
    };
});
//# sourceMappingURL=OraEmployeeListEntry.js.map