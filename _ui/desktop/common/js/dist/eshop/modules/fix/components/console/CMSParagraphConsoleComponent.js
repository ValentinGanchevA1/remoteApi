define(["exports", "react", "prop-types", "../../../core/enum/ParagraphType", "../../../core/enum/Color"], function(_exports, _react, _propTypes, _ParagraphType, _Color) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _ParagraphType = babelHelpers.interopRequireDefault(_ParagraphType);
    _Color = babelHelpers.interopRequireDefault(_Color);

    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
            keys.push.apply(keys, symbols);
        }
        return keys;
    }

    function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
                ownKeys(Object(source), true).forEach(function(key) {
                    babelHelpers.defineProperty(target, key, source[key]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
                ownKeys(Object(source)).forEach(function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
            }
        }
        return target;
    }

    var CMSParagraphConsoleComponent = function CMSParagraphConsoleComponent(props) {
        var toHTML = function toHTML(content) {
            return {
                __html: content
            };
        };

        var innerPadding = !!props.innerPadding ? 'u-padding-' + props.innerPadding + ' u-padding-top-' + props.innerPadding : '';
        var title = !!props.title ? props.title : props.type === _ParagraphType.default.WARN || props.type === _ParagraphType.default.ERROR ? 'Uwaga' : '';

        var color = _ParagraphType.default.getColor(props.type);

        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-page-row u-padding-".concat(props.outerPadding, " u-padding-top-").concat(props.outerPadding)
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "opl-console l-row ".concat(innerPadding),
            style: {
                borderLeft: "10px solid ".concat(color)
            }
        }, iconSection(_objectSpread({}, props, {
            color: color
        })), /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-padding-all-m l-col l-col--auto"
        }, !!title && /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-padding-s u-font-bold"
        }, title), /*#__PURE__*/ _react.default.createElement("div", {
            dangerouslySetInnerHTML: toHTML(props.content)
        })), !!props.reactContent && /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-padding-all-m l-col l-col-3 u-right"
        }, props.reactContent)));
    };

    var iconSection = function iconSection(_ref) {
        var type = _ref.type,
            color = _ref.color;

        switch (type) {
            case _ParagraphType.default.WARN:
            case _ParagraphType.default.ERROR:
            case _ParagraphType.default.INFO:
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col--auto"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--only g-icon--".concat(type.toLowerCase(), " g-icon--m-s u-padding u-padding-right-s u-padding-top-m"),
                    style: {
                        color: color
                    },
                    "aria-hidden": "true"
                }));

            default:
                return null;
        }
    };

    CMSParagraphConsoleComponent.propTypes = {
        content: _propTypes.default.string.isRequired,
        type: _propTypes.default.string,
        title: _propTypes.default.string,
        outerPadding: _propTypes.default.string,
        innerPadding: _propTypes.default.string
    };
    CMSParagraphConsoleComponent.defaultProps = {
        outerPadding: 'l',
        type: _ParagraphType.default.CONSOLE
    };
    var _default = CMSParagraphConsoleComponent;
    _exports.default = _default;
});
//# sourceMappingURL=CMSParagraphConsoleComponent.js.map