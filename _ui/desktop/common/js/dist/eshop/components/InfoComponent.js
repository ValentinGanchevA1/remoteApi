define(["exports", "react", "prop-types"], function(_exports, _react, _propTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.ConditionalInfoComponent = _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
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

    var InfoComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(InfoComponent, _Component);

        var _super = _createSuper(InfoComponent);

        function InfoComponent() {
            var _this;

            babelHelpers.classCallCheck(this, InfoComponent);

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            _this = _super.call.apply(_super, [this].concat(args));
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "paddingClass", function(_ref) {
                var padding = _ref.padding;
                return {
                    noPadding: "u-no-padding-l",
                    default: "u-padding-l"
                } [padding || "default"];
            });
            return _this;
        }

        babelHelpers.createClass(InfoComponent, [{
            key: "colorClass",
            value: function colorClass() {
                switch (this.props.color) {
                    case "black":
                        return " g-black1-c ";

                    case "grey":
                        return " g-gray5-c ";

                    case "blue":
                        return " g-blue3-c ";

                    default:
                        return "";
                }
            }
        }, {
            key: "bgColorClass",
            value: function bgColorClass() {
                switch (this.props.bgColor) {
                    case "none":
                        return "";

                    case "grey":
                        return "g-gray1-bg";

                    case "white":
                        return " g-white1-bg ";

                    default:
                        return " g-white1-bg ";
                }
            }
        }, {
            key: "textColor",
            value: function textColor() {
                switch (this.props.textColor) {
                    case "black":
                        return " g-black1-c ";

                    case "grey":
                        return " g-gray6-c ";

                    default:
                        return " g-gray6-c ";
                }
            }
        }, {
            key: "render",
            value: function render() {
                if (this.props.type === "blueInfo") {
                    return /*#__PURE__*/ _react.default.createElement("blockquote", {
                        className: "opl-blockquote g-bluef-bdrc u-box-shadow--s " + this.paddingClass(this.props)
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "opl-msg opl-msg--box opl-msg--info  " + this.colorClass() + this.bgColorClass()
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "o-icon-list"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "o-icon-list__item"
                    }), /*#__PURE__*/ _react.default.createElement("div", {
                        className: "o-icon-list__icon u-vertical-top u-padding-right"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "g-icon g-icon--info g-icon--before g-icon--s g-bluef-c",
                        "aria-hidden": "true"
                    })), /*#__PURE__*/ _react.default.createElement("div", {
                        className: "o-icon-list__text"
                    }, /*#__PURE__*/ _react.default.createElement("h5", {
                        className: "u-no-margin"
                    }, " ", this.props.title, " "), /*#__PURE__*/ _react.default.createElement("p", null, this.props.children)))));
                }

                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-icon-text g-icon g-icon--info g-icon--before g-icon--xs-s u-padding-l u-padding-top-l " + this.colorClass() + this.bgColorClass()
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "o-icon-text__text " + this.textColor()
                }, this.props.children));
            }
        }]);
        return InfoComponent;
    }(_react.Component);

    _exports.default = InfoComponent;
    InfoComponent.propTypes = {
        color: _propTypes.default.string,
        bgColor: _propTypes.default.string,
        title: _propTypes.default.string,
        type: _propTypes.default.string,
        padding: _propTypes.default.string,
        textColor: _propTypes.default.string
    };
    InfoComponent.defaultProps = {
        color: "black",
        bgColor: "white",
        textColor: "grey"
    };

    var ConditionalInfoComponent = function ConditionalInfoComponent(props) {
        var _props$condition = props.condition,
            condition = _props$condition === void 0 ? false : _props$condition,
            _props$text = props.text,
            text = _props$text === void 0 ? "" : _props$text,
            _props$altText = props.altText,
            altText = _props$altText === void 0 ? "" : _props$altText,
            rest = babelHelpers.objectWithoutProperties(props, ["condition", "text", "altText"]);
        return /*#__PURE__*/ _react.default.createElement(InfoComponent, rest, condition ? text : altText);
    };

    _exports.ConditionalInfoComponent = ConditionalInfoComponent;
    ConditionalInfoComponent.propTypes = {
        condition: _propTypes.default.bool,
        text: _propTypes.default.string,
        altText: _propTypes.default.string
    };
});
//# sourceMappingURL=InfoComponent.js.map