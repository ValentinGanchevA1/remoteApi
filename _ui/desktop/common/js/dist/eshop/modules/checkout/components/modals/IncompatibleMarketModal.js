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

    var IncompatibleMarketModal = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(IncompatibleMarketModal, _Component);

        var _super = _createSuper(IncompatibleMarketModal);

        function IncompatibleMarketModal(props) {
            babelHelpers.classCallCheck(this, IncompatibleMarketModal);
            return _super.call(this, props);
        }

        babelHelpers.createClass(IncompatibleMarketModal, [{
            key: "getTitle",
            value: function getTitle() {
                if (this.props.marketIncompatibility === "B2B") {
                    return this.props.titleB2B;
                } else if (this.props.marketIncompatibility === "B2C") {
                    return this.props.titleB2C;
                } else {
                    return this.props.titleDefault;
                }
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row u-margin-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    dangerouslySetInnerHTML: {
                        __html: this.getTitle()
                    }
                }))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-medium-hide u-large-hide "
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-4 u-margin-s"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    onClick: this.props.onClickRemove,
                    className: "u-w-100",
                    modal: true
                }, this.props.clearCart)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-4"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    className: "u-w-100",
                    modal: true,
                    type: "secondary",
                    onClick: this.props.onClickLightLogout
                }, this.props.logout))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-small-hide"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-4"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    className: "u-w-100",
                    modal: true,
                    type: "secondary",
                    onClick: this.props.onClickLightLogout
                }, this.props.logout)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-4"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    onClick: this.props.onClickRemove,
                    className: "u-w-100",
                    modal: true
                }, this.props.clearCart)))));
            }
        }]);
        return IncompatibleMarketModal;
    }(_react.Component);

    IncompatibleMarketModal.defaultProps = {
        titleB2B: "Zauważyliśmy, że jesteś na swoim koncie indywidualnym, a w koszyku masz ofertę dla klienta biznesowego.<br>Wybierz, co chcesz zrobić:<br>    kontynuuj zakup – wylogujesz się z konta indywidualnego i możesz złożyć zamówienie jako nowy klient biznesowy,<br>    wyczyść koszyk – usuniesz wybraną ofertę i możesz wybrać ofertę dla klienta indywidualnego.",
        titleB2C: "Zauważyliśmy, że jesteś na swoim koncie biznesowym, a w koszyku masz ofertę dla klienta indywidualnego. Wybierz, co chcesz zrobić:<br>    kontynuuj zakup – wylogujesz się z konta biznesowego i możesz złożyć zamówienie jako nowy klient indywidualny,<br>    wyczyść koszyk – usuniesz wybraną ofertę i możesz wybrać ofertę dla klienta biznesowego.",
        titleDefault: "Niezgodny rynek",
        logout: "Kontynuuj zakupy",
        clearCart: "Wyczyść koszyk"
    };
    var _default = IncompatibleMarketModal;
    _exports.default = _default;
});
//# sourceMappingURL=IncompatibleMarketModal.js.map