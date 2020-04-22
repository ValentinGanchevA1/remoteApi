define(["exports", "react-redux", "react", "eshop/components/OraCommonComponents", "eshop/modules/simfree/actions/app", "eshop/utils/OnlineUtils", "eshop/modules/core/components/ui/Modal", "jquery"], function(_exports, _reactRedux, _react, _OraCommonComponents, _app, _OnlineUtils, _Modal, _jquery) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    _Modal = babelHelpers.interopRequireDefault(_Modal);
    _jquery = babelHelpers.interopRequireDefault(_jquery);

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

    var OraCashInvoiceLimitComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(OraCashInvoiceLimitComponent, _Component);

        var _super = _createSuper(OraCashInvoiceLimitComponent);

        function OraCashInvoiceLimitComponent(props) {
            var _this;

            babelHelpers.classCallCheck(this, OraCashInvoiceLimitComponent);
            _this = _super.call(this, props);
            _this.state = {
                showModal: false
            };
            _this.open = _this.open.bind(babelHelpers.assertThisInitialized(_this));
            _this.onClose = _this.onClose.bind(babelHelpers.assertThisInitialized(_this));
            _this.openData = {};
            return _this;
        }

        babelHelpers.createClass(OraCashInvoiceLimitComponent, [{
            key: "open",
            value: function open(data) {
                this.openData = data;
                this.setState({
                    showModal: true
                });
            }
        }, {
            key: "componentWillMount",
            value: function componentWillMount() {
                OraCashInvoiceLimitComponent.openPopupInternal = this.open;

                if (this.props.isCheckRequired) {
                    if (this.props.configuration) {
                        this.props.setCashInvoiceLimit(this.props.configuration.maxInvoiceValue);
                        this.props.setCartInvoiceValue(this.props.cartInvoiceValue);
                    } else {
                        console.error("OraCashInvoiceLimitComponent initialization error. missing configuration");
                    }
                }
            }
        }, {
            key: "onClose",
            value: function onClose() {
                this.setState({
                    showModal: false
                });
            }
        }, {
            key: "genericPopupProps",
            value: function genericPopupProps() {
                return _objectSpread({}, _OnlineUtils.default.extractObject(this.props.descriptions, "label.popup."), {
                    content: this.props.configuration.addToCartWarningMessage
                }, this.openData);
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement(_Modal.default, {
                    id: "max-invoice-value-limit-popup",
                    size: "narrow",
                    escapeClose: true,
                    showClose: true,
                    clickClose: true,
                    open: this.state.showModal,
                    onClose: this.onClose
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.GenericPopup, babelHelpers.extends({
                    id: "max-invoice-value-limit-in-popup"
                }, this.genericPopupProps())));
            }
        }], [{
            key: "openPopup",
            value: function openPopup(data) {
                OraCashInvoiceLimitComponent.openPopupInternal(data);
            }
        }]);
        return OraCashInvoiceLimitComponent;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {};
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            setCashInvoiceLimit: function setCashInvoiceLimit(limit) {
                return dispatch((0, _app.setCashInvoiceLimit)(limit));
            },
            setCartInvoiceValue: function setCartInvoiceValue(value) {
                return dispatch((0, _app.setCartInvoiceValue)(value));
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(OraCashInvoiceLimitComponent);

    _exports.default = _default;
});
//# sourceMappingURL=OraCashInvoiceLimitComponent.js.map