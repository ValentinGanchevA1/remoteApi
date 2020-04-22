define(["exports", "react", "jquery", "eshop/components/OraCommonComponents", "eshop/flux/utils/OraModalService"], function(_exports, _react, _jquery, _OraCommonComponents, _OraModalService) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _jquery = babelHelpers.interopRequireDefault(_jquery);
    _OraModalService = babelHelpers.interopRequireDefault(_OraModalService);

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

    var ConfirmWWTPopup = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(ConfirmWWTPopup, _Component);

        var _super = _createSuper(ConfirmWWTPopup);

        function ConfirmWWTPopup(props) {
            var _this;

            babelHelpers.classCallCheck(this, ConfirmWWTPopup);
            _this = _super.call(this, props);
            _this.desc = {};
            return _this;
        }

        babelHelpers.createClass(ConfirmWWTPopup, [{
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraModal, {
                    id: this.props.id,
                    showClose: true,
                    narrow: true,
                    fallback: this.props.onClickRemove
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, /*#__PURE__*/ _react.default.createElement("h2", null, this.props.title))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, /*#__PURE__*/ _react.default.createElement("p", null, this.props.content))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-medium-hide u-large-hide "
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 u-margin-s"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    onClick: this.props.onClickConfirm,
                    className: "u-w-100",
                    modal: true,
                    type: "secondary"
                }, this.props.confirm)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 "
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    onClick: this.props.onClickDecline,
                    className: "u-w-100",
                    modal: true
                }, this.props.decline))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-small-hide"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-medium-4 l-col-6"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    onClick: this.props.onClickConfirm,
                    className: "u-w-100",
                    modal: true
                }, this.props.confirm)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-medium-4 l-col-6"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    onClick: this.props.onClickDecline,
                    className: "u-w-100",
                    modal: true,
                    type: "secondary"
                }, this.props.decline))))));
            }
        }], [{
            key: "uniqId",
            value: function uniqId() {
                return "confirm-wwt-popup-sdhawmq-uniq";
            }
        }, {
            key: "initialize",
            value: function initialize(desc) {
                var id = this.uniqId();

                if ((0, _jquery.default)("[id*='" + id + "']").length == 0) {
                    this.desc = desc || {};

                    _OraModalService.default.add(function(data) {
                        return /*#__PURE__*/ _react.default.createElement(ConfirmWWTPopup, babelHelpers.extends({
                            id: id
                        }, data));
                    });
                }
            }
        }, {
            key: "open",
            value: function open(data) {
                _OraModalService.default.open(this.uniqId(), _objectSpread({}, this.desc, {}, data));
            }
        }]);
        return ConfirmWWTPopup;
    }(_react.Component);

    ConfirmWWTPopup.defaultProps = {
        title: "Na podanym adresie już posiadasz usługę internetu domowego",
        content: "Czy jesteś pewien, że chcesz zainstalować kolejną usługę pod tym samym adresem?",
        confirm: "Tak",
        decline: "Nie",
        onClickDecline: function onClickDecline() {
            return console.log("ConfirmWWTPopup.onClickDecline");
        },
        onClickConfirm: function onClickConfirm() {
            return console.log("ConfirmWWTPopup.onClickConfirm");
        }
    };
    var _default = ConfirmWWTPopup;
    _exports.default = _default;
});
//# sourceMappingURL=ConfirmWWTPopup.js.map