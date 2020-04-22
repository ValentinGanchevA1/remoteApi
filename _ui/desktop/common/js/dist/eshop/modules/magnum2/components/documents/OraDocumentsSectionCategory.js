define(["exports", "react", "prop-types", "../../../documents/components/MulticartDocumentLink", "../../../core/components/ui/Expander"], function(_exports, _react, _propTypes, _MulticartDocumentLink, _Expander) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
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

    var OraDocumentsSectionCategory = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(OraDocumentsSectionCategory, _Component);

        var _super = _createSuper(OraDocumentsSectionCategory);

        function OraDocumentsSectionCategory() {
            babelHelpers.classCallCheck(this, OraDocumentsSectionCategory);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(OraDocumentsSectionCategory, [{
            key: "render",
            value: function render() {
                var toggleHeader = /*#__PURE__*/ _react.default.createElement("h2", {
                    className: "h4 opl-section__heading"
                }, this.props.header);

                var sectionHeader = /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement(_Expander.Toggle, {
                    variant: "arrow",
                    header: toggleHeader,
                    className: "l-col l-col-12 ",
                    triggerClassName: "opl-document__expander__trigger"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-section__text-show"
                }, "rozwi\u0144 sekcj\u0119 Inne"), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-section__text-hide"
                }, "zwi\u0144 sekcj\u0119 Inne")));

                return /*#__PURE__*/ _react.default.createElement(_Expander.Expander, {
                    variant: "section",
                    sectionClassName: "opl-checkout-section",
                    summaryClassName: "opl-section__border-bottom",
                    toggleClassName: "h4 opl-checkout-section__heading"
                }, /*#__PURE__*/ _react.default.createElement(_Expander.Section, {
                    header: sectionHeader
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-left-l-xl u-small-no-padding-l u-padding-m"
                }, /*#__PURE__*/ _react.default.createElement("ul", null, this.props.documents && /*#__PURE__*/ _react.default.createElement("div", null, this.props.documents.map(function(document) {
                    var key = document.documentCode + (document.bundleNo ? "_" + document.bundleNo : '');
                    return /*#__PURE__*/ _react.default.createElement(_MulticartDocumentLink.default, babelHelpers.extends({
                        key: key
                    }, document));
                }))))));
            }
        }]);
        return OraDocumentsSectionCategory;
    }(_react.Component);

    babelHelpers.defineProperty(OraDocumentsSectionCategory, "propTypes", {
        header: _propTypes.default.string,
        documents: _propTypes.default.arrayOf(_propTypes.default.shape({
            documentCode: _propTypes.default.string,
            documentDescription: _propTypes.default.string,
            bundleNo: _propTypes.default.number
        }))
    });
    var _default = OraDocumentsSectionCategory;
    _exports.default = _default;
});
//# sourceMappingURL=OraDocumentsSectionCategory.js.map