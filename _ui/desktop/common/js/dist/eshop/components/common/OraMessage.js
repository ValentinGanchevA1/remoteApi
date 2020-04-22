define(["exports", "react", "prop-types", "../../modules/core/utils/ui", "./OraLoader"], function(_exports, _react, _propTypes, _ui, _OraLoader) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
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

    var OraMessage = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(OraMessage, _Component);

        var _super = _createSuper(OraMessage);

        function OraMessage() {
            babelHelpers.classCallCheck(this, OraMessage);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(OraMessage, [{
            key: "getRole",
            value: function getRole() {
                return this.props.role || (["warn", "error"].indexOf(this.props.type) >= 0 ? "alert" : null);
            }
        }, {
            key: "getLive",
            value: function getLive() {
                if (this.props.live) return this.props.live;
                else switch (this.props.type) {
                    case "info":
                        return _ui.ARIA.POLITE;

                    case "warn":
                        return _ui.ARIA.ASSERTIVE;

                    case "error":
                        return _ui.ARIA.RUDE;

                    default:
                        return _ui.ARIA.ASSERTIVE;
                }
            }
        }, {
            key: "getClassName",
            value: function getClassName() {
                return "opl-msg" + (0, _ui.styleVariant)(" opl-msg--", this.props.variant) + (0, _ui.styleVariant)(" opl-msg--", this.props.type) + (0, _ui.styleVariant)(" ", this.props.className);
            }
        }, {
            key: "getIconAttr",
            value: function getIconAttr(attr) {
                return "g-icon--" + attr;
            }
        }, {
            key: "isShow",
            value: function isShow() {
                return this.props.text || this.props.title || _react.default.Children.count(this.props.children) > 0;
            }
        }, {
            key: "render",
            value: function render() {
                return !this.isShow() ? null : /*#__PURE__*/ _react.default.createElement("div", {
                    className: this.getClassName(),
                    "aria-live": this.getLive()
                }, this.props.type === "progress" ? /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-1 u-padding-m-top u-padding-m"
                }, /*#__PURE__*/ _react.default.createElement("span", null, "\xA0", /*#__PURE__*/ _react.default.createElement(_OraLoader.OraParentLoader, {
                    size: "s",
                    loading: true
                }))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-11  "
                }, !this.props.text ? null : /*#__PURE__*/ _react.default.createElement("p", {
                    role: this.getRole(),
                    className: (this.props.icon ? " o-icon-text__text" : " ") + (this.props.fontBold ? " u-font-bold" : "") + "u-padding-top-s"
                }, " ", this.props.text))) : this.props.icon ? /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-icon-text g-icon g-icon--before " + this.getIconAttr(this.props.iconSize) + " " + this.getIconAttr(this.props.iconType)
                }, !this.props.title ? null : /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-msg__header"
                }, this.props.title), !this.props.text ? null : /*#__PURE__*/ _react.default.createElement("p", {
                    role: this.getRole(),
                    className: (this.props.icon ? " o-icon-text__text" : " ") + (this.props.fontBold ? " u-font-bold" : "") + "u-margin-left"
                }, this.props.text), this.props.children) : /*#__PURE__*/ _react.default.createElement("div", null, !this.props.title ? null : /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-msg__header"
                }, this.props.title), !this.props.text ? null : /*#__PURE__*/ _react.default.createElement("p", {
                    role: this.getRole(),
                    className: (this.props.icon ? " o-icon-text__text" : " ") + (this.props.fontBold ? " u-font-bold" : "") + "u-margin-left"
                }, this.props.text), this.props.children));
            }
        }]);
        return OraMessage;
    }(_react.Component);

    OraMessage.propTypes = {
        title: _propTypes.default.string,
        text: _propTypes.default.string,
        variant: _propTypes.default.oneOf(["context", "box"]),
        type: _propTypes.default.oneOf(["info", "warn", "error", "progress"]),
        className: _propTypes.default.string,
        role: _propTypes.default.string,
        live: _propTypes.default.oneOf(_ui.ARIA_LIVE_OPTIONS),
        icon: _propTypes.default.bool,
        fontBold: _propTypes.default.bool,
        iconSize: _propTypes.default.oneOf(["xxs", "xs", "xs-s", "s", "l", "xl", "xxl"]),
        iconType: _propTypes.default.string,
        children: _propTypes.default.any
    };
    OraMessage.defaultProps = {
        className: "",
        variant: "context",
        type: "info",
        icon: false,
        fontBold: false,
        iconSize: "s",
        iconType: "info"
    };
    var _default = OraMessage;
    _exports.default = _default;
});
//# sourceMappingURL=OraMessage.js.map