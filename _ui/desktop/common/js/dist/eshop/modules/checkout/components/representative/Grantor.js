define(["exports", "react", "../../../core/components/hoc/LabeledInput", "./common"], function(_exports, _react, _LabeledInput, _common) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _LabeledInput = babelHelpers.interopRequireDefault(_LabeledInput);

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

    var Grantor = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(Grantor, _Component);

        var _super = _createSuper(Grantor);

        function Grantor(props) {
            var _this;

            babelHelpers.classCallCheck(this, Grantor);
            _this = _super.call(this, props);
            _this.ordinals = ["Pierwsza", "Druga", "Trzecia", "Czwarta", "Piąta", "Szósta", "Siódma", "Ósma", "Dziewiąta", "Dziesiąta"];
            return _this;
        }

        babelHelpers.createClass(Grantor, [{
            key: "getLabel",
            value: function getLabel() {
                if (this.props.useLabel) {
                    return this.ordinals[this.props.index] + " osoba udzielająca pełnomocnictwa";
                } else {
                    return null;
                }
            }
        }, {
            key: "renderHeader",
            value: function renderHeader() {
                return this.props.useLabel && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-spacing-top-xl"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-separator u-spacing-m"
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-position-relative"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h5 u-inline-block u-small-w-75 u-medium-w-75"
                }, this.getLabel()), this.props.remove && /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    className: "u-inline-block u-right u-small-right",
                    onClick: this.remove.bind(this)
                }, "Usu\u0144")));
            }
        }, {
            key: "remove",
            value: function remove(event) {
                event.preventDefault();
                this.props.remove(this.props.index);
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-l u-spacing-top-l"
                }, this.renderHeader(), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, /*#__PURE__*/ _react.default.createElement(_LabeledInput.default, (0, _common.getCommonPropsForInput)(this.props, "firstName", "grantor", {
                    label: "Imię"
                }))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12 u-spacing-top-l"
                }, /*#__PURE__*/ _react.default.createElement(_LabeledInput.default, (0, _common.getCommonPropsForInput)(this.props, "lastName", "grantor", {
                    label: "Nazwisko"
                })))));
            }
        }]);
        return Grantor;
    }(_react.Component);

    _exports.default = Grantor;
});
//# sourceMappingURL=Grantor.js.map