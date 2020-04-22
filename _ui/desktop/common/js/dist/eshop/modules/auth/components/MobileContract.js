define(["exports", "react"], function(_exports, _react) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.MobileContract = void 0;
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

    var MobileContract = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MobileContract, _Component);

        var _super = _createSuper(MobileContract);

        function MobileContract(props) {
            babelHelpers.classCallCheck(this, MobileContract);
            return _super.call(this, props);
        }

        babelHelpers.createClass(MobileContract, [{
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("li", {
                    className: "u-margin"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-4 "
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-icon-list__icon u-vertical-middle"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon--device-smartphone g-icon g-icon--before g-icon--s",
                    "aria-hidden": "true"
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-icon-list__text u-vertical-middle"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-font-small g-gray5-c"
                }, "Telefon kom\xF3rkowy"), /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-font-bold"
                }, this.props.data.serviceNumber)))));
            }
        }]);
        return MobileContract;
    }(_react.Component);

    _exports.MobileContract = MobileContract;
});
//# sourceMappingURL=MobileContract.js.map