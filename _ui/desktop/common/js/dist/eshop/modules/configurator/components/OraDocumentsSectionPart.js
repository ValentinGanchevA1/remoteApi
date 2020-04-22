define(["exports", "react", "eshop/modules/documents/components/MulticartDocumentLink", "eshop/modules/core/components/ui/Expander"], function(_exports, _react, _MulticartDocumentLink, _Expander) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _MulticartDocumentLink = babelHelpers.interopRequireDefault(_MulticartDocumentLink);

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

    var OraDocumentsSectionPart = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(OraDocumentsSectionPart, _Component);

        var _super = _createSuper(OraDocumentsSectionPart);

        function OraDocumentsSectionPart(props) {
            babelHelpers.classCallCheck(this, OraDocumentsSectionPart);
            return _super.call(this, props);
        }

        babelHelpers.createClass(OraDocumentsSectionPart, [{
            key: "render",
            value: function render() {
                var documents = this.props.documentList.map(function(document) {
                    var key = document.documentCode + (document.bundleNo ? "_" + document.bundleNo : '');
                    return /*#__PURE__*/ _react.default.createElement(_MulticartDocumentLink.default, babelHelpers.extends({
                        key: key
                    }, document));
                });

                var toggleHeader = /*#__PURE__*/ _react.default.createElement("h3", {
                    className: "h4 opl-section__heading"
                }, this.props.header);

                var sectionHeader = /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement(_Expander.Toggle, {
                    variant: "arrow",
                    header: toggleHeader,
                    className: "l-col l-col-12 ",
                    triggerClassName: "opl-document__section__trigger"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-section__text-show"
                }, "rozwi\u0144 sekcj\u0119 Umowy"), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-section__text-hide"
                }, "zwi\u0144 sekcj\u0119 Umowy")));

                return /*#__PURE__*/ _react.default.createElement(_Expander.Section, {
                    header: sectionHeader,
                    id: "document-component-subsection-" + this.props.header,
                    variant: "section",
                    className: "opl-document__section" + (this.props.documentList.length === 0 ? ' u-hide' : ''),
                    contentClassName: "opl-document__section__content"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-left-l-xl u-small-no-padding-l u-padding-m"
                }, /*#__PURE__*/ _react.default.createElement("ul", null, documents)));
            }
        }]);
        return OraDocumentsSectionPart;
    }(_react.Component);

    var _default = OraDocumentsSectionPart;
    _exports.default = _default;
});
//# sourceMappingURL=OraDocumentsSectionPart.js.map