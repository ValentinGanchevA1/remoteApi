define(["exports", "react", "react-redux", "../../../../utils/OnlineUtils"], function(_exports, _react, _reactRedux, _OnlineUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);

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

    var MulticartBillingAccountContractComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MulticartBillingAccountContractComponent, _Component);

        var _super = _createSuper(MulticartBillingAccountContractComponent);

        function MulticartBillingAccountContractComponent(props) {
            babelHelpers.classCallCheck(this, MulticartBillingAccountContractComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(MulticartBillingAccountContractComponent, [{
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("li", {
                    className: "opl-tree__li opl-tree__li--icon"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-tree__branch u-w-100"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-6 "
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-icon-list__icon u-vertical-middle"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    "aria-hidden": "true",
                    className: "g-icon g-icon--device-smartphone g-icon--before g-icon--l g-icon--s-w"
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-icon-list__text u-vertical-middle"
                }, /*#__PURE__*/ _react.default.createElement("p", null, "Telefon kom\xF3rkowy"), /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h4"
                }, _OnlineUtils.default.formatMsisdn(this.props.msisdn)))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-6 "
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-text-right u-small-spacing-top-l u-small-spacing-l"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-service-status opl-service-status opl-service-status--on u-spacing-right-s"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-service-status__indicator"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-service-status__status h6 u-no-margin"
                }, "Aktywny")), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-gray5-c u-spacing-right-s"
                }, "do ", this.props.dateTo))))));
            }
        }]);
        return MulticartBillingAccountContractComponent;
    }(_react.Component);

    var _default = MulticartBillingAccountContractComponent;
    _exports.default = _default;
});
//# sourceMappingURL=MulticartBillingAccountContractComponent.js.map