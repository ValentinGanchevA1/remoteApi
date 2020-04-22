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

    var AddMoreB2C = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(AddMoreB2C, _Component);

        var _super = _createSuper(AddMoreB2C);

        function AddMoreB2C(props) {
            babelHelpers.classCallCheck(this, AddMoreB2C);
            return _super.call(this, props);
        }

        babelHelpers.createClass(AddMoreB2C, [{
            key: "onClick",
            value: function onClick(e) {
                e.preventDefault();
                this.props.onClick();
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row "
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "g-white1-bg u-padding-all-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-position-relative"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-8 l-col-medium-10 l-col-6 "
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-icon-list"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-icon-list__item"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-icon-list__icon u-vertical-middle u-small-hide"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--only g-icon--sim"
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-icon-list__text u-vertical-middle"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h5 u-no-margin"
                }, "Dobierz kart\u0119 SIM (kolejne karty SIM", /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-padding-left-s g-brand2-c"
                }, "taniej o 20 z\u0142/mies."), /*#__PURE__*/ _react.default.createElement("span", null, ")")))))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-2 l-col-medium-2 l-col-6  small-offset-by-2"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    "aria-label": "Dobierz kolejn\u0105 kart\u0119 SIM",
                    className: "opl-product-addlink u-right u-small-right",
                    onClick: this.onClick.bind(this)
                }))))));
            }
        }]);
        return AddMoreB2C;
    }(_react.Component);

    _exports.default = AddMoreB2C;
});
//# sourceMappingURL=AddMoreB2C.js.map