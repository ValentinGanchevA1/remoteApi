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

    var MultiCartRemovePopup = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MultiCartRemovePopup, _Component);

        var _super = _createSuper(MultiCartRemovePopup);

        function MultiCartRemovePopup(props) {
            babelHelpers.classCallCheck(this, MultiCartRemovePopup);
            return _super.call(this, props);
        }

        babelHelpers.createClass(MultiCartRemovePopup, [{
            key: "substituteElementName",
            value: function substituteElementName(text, substitution) {
                return text ? text.replace('$', substitution) : text;
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraModal, {
                    id: this.props.id,
                    showClose: true,
                    narrow: true,
                    fallback: this.props.onClickRemove
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row u-margin-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, /*#__PURE__*/ _react.default.createElement("h2", null, this.props.deleteEntryPopupTitle || this.props.sectionConf.deleteEntryPopupTitle))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-xl"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, /*#__PURE__*/ _react.default.createElement("p", null, this.substituteElementName(this.props.deleteEntryPopupContent || this.props.sectionConf.deleteEntryPopupContent, this.props.textRepresentation)))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-4"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    className: "u-w-100",
                    modal: true,
                    type: "secondary"
                }, this.props.declineDeleteEntryPopupButtonLabel || this.props.sectionConf.declineDeleteEntryPopupButtonLabel)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-4"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    onClick: this.props.onClickRemove,
                    className: "u-w-100",
                    modal: true
                }, this.props.confirmDeleteEntryPopupButtonLabel || this.props.sectionConf.confirmDeleteEntryPopupButtonLabel)))));
            }
        }]);
        return MultiCartRemovePopup;
    }(_react.Component);

    MultiCartRemovePopup.defaultProps = {
        sectionConf: {
            deleteEntryPopupTitle: "Usunięcie elementu",
            deleteEntryPopupContent: "Usuwasz element $. Jesteś pewny?",
            declineDeleteEntryPopupButtonLabel: "Anuluj",
            confirmDeleteEntryPopupButtonLabel: "Zmień"
        }
    };
    var _default = MultiCartRemovePopup;
    _exports.default = _default;
});
//# sourceMappingURL=MultiCartRemovePopup.js.map