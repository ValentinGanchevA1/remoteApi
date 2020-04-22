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

    var OraDocumentsSectionHeader = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(OraDocumentsSectionHeader, _Component);

        var _super = _createSuper(OraDocumentsSectionHeader);

        function OraDocumentsSectionHeader(props) {
            babelHelpers.classCallCheck(this, OraDocumentsSectionHeader);
            return _super.call(this, props);
        }

        babelHelpers.createClass(OraDocumentsSectionHeader, [{
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-section__header"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12 "
                }, /*#__PURE__*/ _react.default.createElement("h2", {
                    className: "h4 opl-section__heading"
                }, "Umowy, cenniki, regulaminy"), /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    className: "opl-section__expander-trigger opl-document__expander__trigger"
                }))));
            }
        }]);
        return OraDocumentsSectionHeader;
    }(_react.Component);

    var _default = OraDocumentsSectionHeader;
    _exports.default = _default;
});
//# sourceMappingURL=OraDocumentsSectionHeader.js.map