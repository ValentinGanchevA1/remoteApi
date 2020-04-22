define(["exports", "react"], function(_exports, _react) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);

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

    var StayLoveSectionComponent = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(StayLoveSectionComponent, _React$Component);

        var _super = _createSuper(StayLoveSectionComponent);

        function StayLoveSectionComponent(props) {
            babelHelpers.classCallCheck(this, StayLoveSectionComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(StayLoveSectionComponent, [{
            key: "doContinue",
            value: function doContinue() {
                this.props.authorizationSuccess(true, null);
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("h5", null, "Czy chcesz przy nich zosta\u0107?"), /*#__PURE__*/ _react.default.createElement("p", null, "Je\u015Bli tak - przeniesiemy Ci\u0119 na stron\u0119 z ofert\u0105 Love dla Firm."), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-padding-top-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-6 l-col-small-12 u-padding-top-l"
                }, /*#__PURE__*/ _react.default.createElement("button", {
                    id: "continue",
                    onClick: this.doContinue.bind(this),
                    className: "o-btn opl-btn opl-btn--secondary u-w-100"
                }, "  Nie, chc\u0119 przed\u0142u\u017Cy\u0107 sam abonament")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-6 l-col-small-12 u-padding-top-l"
                }, /*#__PURE__*/ _react.default.createElement("button", {
                    id: "stay",
                    onClick: this.props.stayLove,
                    className: "o-btn opl-btn opl-btn--primary u-w-100 u-padding-top-l u-padding-l "
                }, "Tak, chc\u0119 zosta\u0107 w Love dla Firm"))));
            }
        }]);
        return StayLoveSectionComponent;
    }(_react.default.Component);

    _exports.default = StayLoveSectionComponent;
});
//# sourceMappingURL=StayLoveSectionComponent.js.map