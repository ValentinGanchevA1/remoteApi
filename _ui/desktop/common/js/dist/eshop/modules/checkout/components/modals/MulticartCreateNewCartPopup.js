define(["exports", "react", "eshop/components/OraCommonComponents"], function(_exports, _react, _OraCommonComponents) {
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

    var MulticartCreateNewCartPopup = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MulticartCreateNewCartPopup, _Component);

        var _super = _createSuper(MulticartCreateNewCartPopup);

        function MulticartCreateNewCartPopup(props) {
            babelHelpers.classCallCheck(this, MulticartCreateNewCartPopup);
            return _super.call(this, props);
        }

        babelHelpers.createClass(MulticartCreateNewCartPopup, [{
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraModal, {
                    id: this.props.id,
                    narrow: true,
                    showClose: true
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row u-font-bold"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-top-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, "Czy na pewno chcesz stworzy\u0107 nowy koszyk? Do obecnego koszyka b\u0119dziesz m\xF3g\u0142 powr\xF3ci\u0107 poprzez list\u0119 dyspozycji w panelu konsultatna. Zapami\u0119taj dane klienta.")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-top-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-6 l-col-4 large-offset-by-4"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    className: "u-w-100",
                    type: "secondary",
                    modal: true
                }, "Anuluj")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-6 l-col-4 "
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    className: "u-w-100 g-green3-bg",
                    type: "primary",
                    modal: true,
                    onClick: this.props.onClickedCreateNew
                }, "Potwierd\u017A")))));
            }
        }]);
        return MulticartCreateNewCartPopup;
    }(_react.Component);

    _exports.default = MulticartCreateNewCartPopup;
});
//# sourceMappingURL=MulticartCreateNewCartPopup.js.map