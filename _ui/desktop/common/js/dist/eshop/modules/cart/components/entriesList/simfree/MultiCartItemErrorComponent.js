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

    var MultiCartItemErrorComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MultiCartItemErrorComponent, _Component);

        var _super = _createSuper(MultiCartItemErrorComponent);

        function MultiCartItemErrorComponent(props) {
            babelHelpers.classCallCheck(this, MultiCartItemErrorComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(MultiCartItemErrorComponent, [{
            key: "renderMessage",
            value: function renderMessage() {
                var messages = this.props.rejectionReasons.map(function(reason, index) {
                    return /*#__PURE__*/ _react.default.createElement("span", {
                        key: index
                    }, reason, " ");
                });
                messages.push( /*#__PURE__*/ _react.default.createElement("span", {
                    key: -1
                }, "Usu\u0144 produkt z koszyka."));
                return messages;
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("tr", null, /*#__PURE__*/ _react.default.createElement("td", {
                    colSpan: 3
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-msg opl-msg--box opl-msg--error"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-icon-list"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-icon-list__item"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-icon-list__icon u-vertical-middle"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    "aria-hidden": "true",
                    className: "g-icon g-icon--error g-icon--before g-icon--s"
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-icon-list__text u-vertical-middle"
                }, /*#__PURE__*/ _react.default.createElement("p", null, /*#__PURE__*/ _react.default.createElement("b", null, this.renderMessage.bind(this)()))))))));
            }
        }]);
        return MultiCartItemErrorComponent;
    }(_react.Component);

    _exports.default = MultiCartItemErrorComponent;
});
//# sourceMappingURL=MultiCartItemErrorComponent.js.map