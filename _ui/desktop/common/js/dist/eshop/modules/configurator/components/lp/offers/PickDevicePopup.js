define(["exports", "react", "eshop/components/OraCommonComponents", "eshop/flux/utils/OraModalService"], function(_exports, _react, _OraCommonComponents, _OraModalService) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
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

    var PickDevicePopup = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(PickDevicePopup, _Component);

        var _super = _createSuper(PickDevicePopup);

        function PickDevicePopup(props) {
            var _this;

            babelHelpers.classCallCheck(this, PickDevicePopup);
            _this = _super.call(this, props);
            _this.desc = {};
            return _this;
        }

        babelHelpers.createClass(PickDevicePopup, [{
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
                    modal: true
                }, this.props.confirm)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 "
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    onClick: this.props.onClickDecline,
                    className: "u-w-100",
                    modal: true,
                    type: "secondary"
                }, this.props.decline))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-small-hide"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-medium-4 l-col-6"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    onClick: this.props.onClickDecline,
                    className: "u-w-100",
                    modal: true,
                    type: "secondary"
                }, this.props.decline)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-medium-4 l-col-6"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    onClick: this.props.onClickConfirm,
                    className: "u-w-100",
                    modal: true
                }, this.props.confirm))))));
            }
        }], [{
            key: "uniqId",
            value: function uniqId() {
                return "pick-device-popup-hfjfjeur-uniq";
            }
        }, {
            key: "initialize",
            value: function initialize(desc) {
                var id = this.uniqId();

                if ($("[id*='" + id + "']").length == 0) {
                    this.desc = desc || {};

                    _OraModalService.default.add(function(data) {
                        return /*#__PURE__*/ _react.default.createElement(PickDevicePopup, babelHelpers.extends({
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
        return PickDevicePopup;
    }(_react.Component);

    PickDevicePopup.defaultProps = {
        title: "Czy chcesz dobrać teraz urządzenia?",
        content: "Czy chcesz teraz dobrać urządzenia? Możesz też dodać rzeczy do koszyka i przejść bezpośrednio do niego.",
        confirm: "Dobierz urządzenia",
        decline: "Dodaj tylko SIM do koszyka"
    };
    var _default = PickDevicePopup;
    _exports.default = _default;
});
//# sourceMappingURL=PickDevicePopup.js.map