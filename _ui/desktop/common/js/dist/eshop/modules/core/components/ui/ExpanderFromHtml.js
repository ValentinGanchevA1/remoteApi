define(["exports", "react", "eshop/utils/OnlineUtils", "prop-types", "./Expander"], function(_exports, _react, _OnlineUtils, _propTypes, _Expander) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);

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

    var EXPANDER_PLACEHOLDER = "EXPANDER-ID-PLACEHOLDER";
    var EXPANDER_SECTION_CONTENT_ID_PREFIX = "expanderSectionContent_";

    var ExpanderFromHtml = /*#__PURE__*/ function(_PureComponent) {
        babelHelpers.inherits(ExpanderFromHtml, _PureComponent);

        var _super = _createSuper(ExpanderFromHtml);

        function ExpanderFromHtml() {
            babelHelpers.classCallCheck(this, ExpanderFromHtml);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(ExpanderFromHtml, [{
            key: "hasExpander",
            value: function hasExpander() {
                return this.props.html && this.props.html.indexOf(EXPANDER_PLACEHOLDER) >= 0;
            }
        }, {
            key: "htmlWithExpanderId",
            value: function htmlWithExpanderId(value) {
                if (this.hasExpander()) {
                    value = value.replace(EXPANDER_PLACEHOLDER, _OnlineUtils.default.generateUniqeHtmlId(EXPANDER_SECTION_CONTENT_ID_PREFIX));
                }

                return value;
            }
        }, {
            key: "parseXml",
            value: function parseXml() {
                var value = this.htmlWithExpanderId(this.props.html);

                if (window.DOMParser) {
                    var xmlDoc;

                    try {
                        xmlDoc = new DOMParser().parseFromString(value, "text/xml");
                    } catch (err) {
                        return null;
                    }

                    if (xmlDoc.getElementsByTagName("parsererror").length > 0) {
                        return null;
                    }

                    if (xmlDoc.children && xmlDoc.children[0]) {
                        return xmlDoc.children[0];
                    }

                    return null;
                }

                return null;
            }
        }, {
            key: "render",
            value: function render() {
                var parsedXml = this.hasExpander() && this.parseXml();

                if (parsedXml) {
                    var sectionHeader = /*#__PURE__*/ _react.default.createElement(_Expander.Trigger, null, /*#__PURE__*/ _react.default.createElement("span", {
                        className: "js-expander__trigger--hide"
                    }, this.props.labelShow), /*#__PURE__*/ _react.default.createElement("span", {
                        className: "js-expander__trigger--show"
                    }, this.props.labelHide));

                    var expanderClassName = [this.props.className, parsedXml.className].join(' ');
                    return /*#__PURE__*/ _react.default.createElement(_Expander.Expander, {
                        scrollToSelected: false,
                        className: expanderClassName
                    }, Array.from(parsedXml.children).map(function(element) {
                        var outerHtmlForValue = {
                            __html: element.outerHTML
                        };
                        if (element.id.indexOf(EXPANDER_SECTION_CONTENT_ID_PREFIX) >= 0) return /*#__PURE__*/ _react.default.createElement(_Expander.Section, {
                            headerBelow: true,
                            header: sectionHeader
                        }, /*#__PURE__*/ _react.default.createElement("div", {
                            dangerouslySetInnerHTML: outerHtmlForValue
                        }));
                        return /*#__PURE__*/ _react.default.createElement("div", {
                            dangerouslySetInnerHTML: outerHtmlForValue
                        });
                    }));
                } else {
                    var innerHtmlForValue = {
                        __html: this.props.html
                    };
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        className: this.props.className,
                        dangerouslySetInnerHTML: innerHtmlForValue
                    });
                }
            }
        }]);
        return ExpanderFromHtml;
    }(_react.PureComponent);

    ExpanderFromHtml.propTypes = {
        id: _propTypes.default.string,
        className: _propTypes.default.string,
        html: _propTypes.default.string,
        labelHide: _propTypes.default.string,
        labelShow: _propTypes.default.string
    };
    ExpanderFromHtml.defaultProps = {
        labelHide: "[czytaj mniej]",
        labelShow: "[czytaj więcej]"
    };
    var _default = ExpanderFromHtml;
    _exports.default = _default;
});
//# sourceMappingURL=ExpanderFromHtml.js.map