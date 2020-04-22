define(["exports", "react", "prop-types", "react-redux", "eshop/components/OraCommonComponents", "eshop/modules/cart/actions/cart", "eshop/modules/cart/components/Utils"], function(_exports, _react, _propTypes, _reactRedux, _OraCommonComponents, _cart, _Utils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);

    var CheckoutActionsComponent = function CheckoutActionsComponent(props) {
        return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement(_Utils.ShowWhenCartIsEmpty, null, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
            className: "",
            size: "small",
            type: "text",
            onClick: props.onClickReturn
        }, props.descriptions.returnToShopButton || "Wróć do sklepu")), props.showNewButton !== 'true' ? renderWithoutNewButton(props) : renderWithNewButton(props));
    };

    var renderWithoutNewButton = function renderWithoutNewButton(props) {
        return /*#__PURE__*/ _react.default.createElement(_Utils.HideWhenCartIsEmpty, {
            className: "l-row u-small-padding-top-l"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-small-6"
        }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
            className: "",
            size: "small",
            type: "text",
            onClick: props.onClickReturn
        }, props.descriptions.returnToShopButton || "Wróć do sklepu")), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-small-6 u-text-right"
        }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
            size: "small",
            type: "text",
            onClick: props.onClickRemove
        }, props.descriptions.removeCartButton || "Wyczyść koszyk")));
    };

    var renderWithNewButton = function renderWithNewButton(props) {
        return /*#__PURE__*/ _react.default.createElement(_Utils.HideWhenCartIsEmpty, null, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row u-padding-left-l u-padding-right-m u-padding-top-s u-padding-l"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col u-vertical-middle l-col-small-" + (props.showNewButton == 'true' ? "4" : "6")
        }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
            className: "",
            size: "small",
            type: "text",
            onClick: props.onClickReturn
        }, props.descriptions.returnToShopButton || "Wróć do sklepu")), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col u-vertical-middle l-col-small-" + (props.showNewButton == 'true' ? "4" : "6")
        }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
            size: "small",
            type: "text",
            onClick: props.onClickRemove
        }, props.descriptions.removeCartButton || "Wyczyść koszyk")), props.showNewButton == 'true' && [ /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-small-4 u-vertical-middle"
        }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
            size: "small",
            type: "text",
            onClick: props.onClickNew
        }, props.descriptions.newCartButton || "Nowy koszyk"))]));
    };

    CheckoutActionsComponent.propTypes = {
        onClickRemove: _propTypes.default.func
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            onClickRemove: function onClickRemove() {
                return dispatch((0, _cart.removeFromCart)(null));
            },
            onClickReturn: function onClickReturn() {
                return dispatch((0, _cart.goBackEmptyCart)());
            },
            onClickNew: function onClickNew() {
                return dispatch((0, _cart.createNewCart)());
            }
        };
    };

    var _default = (0, _reactRedux.connect)(null, mapDispatchToProps)(CheckoutActionsComponent);

    _exports.default = _default;
});
//# sourceMappingURL=MulticartActionsComponent.js.map