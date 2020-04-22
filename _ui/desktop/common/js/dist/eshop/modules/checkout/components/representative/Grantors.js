define(["exports", "react", "../../../core/components/ui/Datepicker", "./Grantor", "eshop/utils/OnlineUtils", "../../../core/components/hoc/ErrorRow"], function(_exports, _react, _Datepicker, _Grantor, _OnlineUtils, _ErrorRow) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _Grantor = babelHelpers.interopRequireDefault(_Grantor);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    _ErrorRow = babelHelpers.interopRequireDefault(_ErrorRow);

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

    var Grantors = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(Grantors, _Component);

        var _super = _createSuper(Grantors);

        function Grantors(props) {
            babelHelpers.classCallCheck(this, Grantors);
            return _super.call(this, props);
        }

        babelHelpers.createClass(Grantors, [{
            key: "removeFactory",
            value: function removeFactory() {
                if (this.props.minCount && this.props.data.length > this.props.minCount) {
                    return this.props.remove;
                }
            }
        }, {
            key: "onDateChange",
            value: function onDateChange(event) {
                this.props.setGrantingDate(event.value);
            }
        }, {
            key: "getDateProps",
            value: function getDateProps() {
                return {
                    id: "granting-date",
                    floatingLabel: "Data udzielenia pełnomocnictwa",
                    onChange: this.onDateChange.bind(this),
                    value: this.props.grantingDate,
                    options: {
                        disabledWeekDays: [],
                        maxDate: _OnlineUtils.default.toDateStr(new Date())
                    }
                };
            }
        }, {
            key: "render",
            value: function render() {
                var _this = this;

                return !!this.props.data.length && /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "h4"
                }, this.props.data.length > 1 ? this.props.titlePlural : this.props.title), /*#__PURE__*/ _react.default.createElement(_ErrorRow.default, {
                    errors: this.props.grantingDateErrors
                }, /*#__PURE__*/ _react.default.createElement(_Datepicker.DatePicker, this.getDateProps())), this.props.data.map(function(data, index) {
                    return /*#__PURE__*/ _react.default.createElement(_Grantor.default, babelHelpers.extends({}, data, {
                        key: index,
                        index: index,
                        onChange: _this.props.onChange,
                        remove: _this.removeFactory(),
                        useLabel: _this.props.data.length > 1
                    }));
                }));
            }
        }]);
        return Grantors;
    }(_react.Component);

    _exports.default = Grantors;
});
//# sourceMappingURL=Grantors.js.map