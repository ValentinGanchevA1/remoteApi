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

    var AddMoreB2B = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(AddMoreB2B, _Component);

        var _super = _createSuper(AddMoreB2B);

        function AddMoreB2B(props) {
            babelHelpers.classCallCheck(this, AddMoreB2B);
            return _super.call(this, props);
        }

        babelHelpers.createClass(AddMoreB2B, [{
            key: "onClick",
            value: function onClick(e) {
                e.preventDefault();
                this.props.onClick();
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row u-medium-no-padding u-small-no-padding u-small-padding-m u-padding-l u-small-padding-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "g-white1-bg"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-position-relative"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-left-l u-padding-right-l "
                }, /*#__PURE__*/ _react.default.createElement("table", {
                    className: "u-table-fixed"
                }, /*#__PURE__*/ _react.default.createElement("tbody", null, /*#__PURE__*/ _react.default.createElement("tr", null, /*#__PURE__*/ _react.default.createElement("td", {
                    className: "u-padding-top-l u-padding-l u-padding-right-l u-font-bold"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "g-brand1-c u-font-bold"
                }, "W pakiecie taniej"), /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h4"
                }, "Dobierz kolejną kartę SIM za " + this.props.price + " zł/mies. + VAT")), /*#__PURE__*/ _react.default.createElement("td", {
                    className: "opl-checkout__button__cell u-padding-top-l u-padding-l"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    "aria-label": "Dobierz kolejn\u0105 kart\u0119 SIM",
                    className: "opl-product-addlink u-right u-small-right",
                    onClick: this.onClick.bind(this)
                })))))))));
            }
        }]);
        return AddMoreB2B;
    }(_react.Component);

    _exports.default = AddMoreB2B;
});
//# sourceMappingURL=AddMoreB2B.js.map