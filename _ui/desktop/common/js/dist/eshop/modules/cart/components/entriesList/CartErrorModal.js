define(["exports", "react", "prop-types", "react-redux", "eshop/modules/core/components/ui/Modal"], function(_exports, _react, _propTypes, _reactRedux, _Modal) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _Modal = babelHelpers.interopRequireDefault(_Modal);

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

    var CartErrorModal = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(CartErrorModal, _Component);

        var _super = _createSuper(CartErrorModal);

        function CartErrorModal(props) {
            var _this;

            babelHelpers.classCallCheck(this, CartErrorModal);
            _this = _super.call(this, props);
            _this.onReady = _this.onReady.bind(babelHelpers.assertThisInitialized(_this));
            _this.state = {
                ready: false
            };
            return _this;
        }

        babelHelpers.createClass(CartErrorModal, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this2 = this;

                OPL.UI.on('module.started', function(data) {
                    return _this2.onReady(data);
                });
            }
        }, {
            key: "onReady",
            value: function onReady(data) {
                if (data.element.id === "react-modal-CartErrorModal-trigger") {
                    console.log("CART_ERROR_MODAL: " + data.element.id);
                    this.setState({
                        ready: true
                    });
                }
            }
        }, {
            key: "render",
            value: function render() {
                var errorCode = this.props.errorCode;
                var errorTitle = null;
                var errorDescription = null;
                var errorIcon = null;

                if (errorCode) {
                    errorTitle = this.props.descriptions["cartError." + errorCode + ".title"];
                    errorDescription = this.props.descriptions["cartError." + errorCode + ".description"];
                    errorIcon = this.props.descriptions["cartError." + errorCode + ".icon"];
                }

                return /*#__PURE__*/ _react.default.createElement(_Modal.default, {
                    id: "CartErrorModal",
                    key: "CartErrorModal",
                    open: !!errorCode && this.state.ready,
                    openOnStart: "true",
                    size: "narrow"
                }, /*#__PURE__*/ _react.default.createElement("h2", {
                    className: "h3 u-margin-l opl-modal-title-space"
                }, errorTitle), /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("p", null, errorDescription)));
            }
        }]);
        return CartErrorModal;
    }(_react.Component);

    _exports.default = CartErrorModal;
});
//# sourceMappingURL=CartErrorModal.js.map