define(["exports", "react", "prop-types", "./OraEmployeeListEntry"], function(_exports, _react, _propTypes, _OraEmployeeListEntry) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _OraEmployeeListEntry = babelHelpers.interopRequireDefault(_OraEmployeeListEntry);

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

    var OraEmployeeList = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(OraEmployeeList, _React$Component);

        var _super = _createSuper(OraEmployeeList);

        function OraEmployeeList() {
            babelHelpers.classCallCheck(this, OraEmployeeList);
            return _super.call(this);
        }

        babelHelpers.createClass(OraEmployeeList, [{
            key: "radioChanged",
            value: function radioChanged(changeEvent) {
                this.props.onSelectionChanged(changeEvent.target.value);
            }
        }, {
            key: "render",
            value: function render() {
                var _this = this;

                return /*#__PURE__*/ _react.default.createElement("table", {
                    className: "opl-table opl-table-basic"
                }, /*#__PURE__*/ _react.default.createElement("thead", null, /*#__PURE__*/ _react.default.createElement("tr", null, /*#__PURE__*/ _react.default.createElement("th", {
                    className: "u-font-bold",
                    style: {
                        width: 10
                    }
                }), /*#__PURE__*/ _react.default.createElement("th", {
                    className: "u-font-bold"
                }, "ID"), /*#__PURE__*/ _react.default.createElement("th", {
                    className: "u-font-bold"
                }, "Nazwisko"), /*#__PURE__*/ _react.default.createElement("th", {
                    className: "u-font-bold"
                }, "Imi\u0119"), /*#__PURE__*/ _react.default.createElement("th", {
                    className: "u-font-bold"
                }, "Login"), /*#__PURE__*/ _react.default.createElement("th", {
                    className: "u-font-bold"
                }, "Kod BSCS"), /*#__PURE__*/ _react.default.createElement("th", {
                    className: "u-font-bold"
                }, "Lokalizacja"), /*#__PURE__*/ _react.default.createElement("th", {
                    className: "u-font-bold"
                }, "Kana\u0142"), /*#__PURE__*/ _react.default.createElement("th", {
                    className: "u-font-bold"
                }, "Kana\u0142 SIS"))), /*#__PURE__*/ _react.default.createElement("tbody", null, this.props.employees.map(function(e, i) {
                    return /*#__PURE__*/ _react.default.createElement(_OraEmployeeListEntry.default, {
                        employee: e,
                        radioChanged: _this.radioChanged.bind(_this),
                        key: _this.props.listId + "-" + i
                    });
                })));
            }
        }]);
        return OraEmployeeList;
    }(_react.default.Component);

    _exports.default = OraEmployeeList;
    OraEmployeeList.propTypes = {
        listId: _propTypes.default.string.isRequired
    };
    OraEmployeeList.defaultProps = {
        employees: [],
        listId: "default",
        onSelectionChanged: function onSelectionChanged(sisId) {}
    };
});
//# sourceMappingURL=OraEmployeeList.js.map