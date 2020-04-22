define(["exports", "react", "prop-types", "react-redux", "eshop/modules/core/components/ui/Modal", "eshop/modules/cart/selectors", "eshop/modules/cart/actions/resources", "./SliderComponent", "../actions/cart"], function(_exports, _react, _propTypes, _reactRedux, _Modal, _selectors, _resources, _SliderComponent, _cart) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _Modal = babelHelpers.interopRequireDefault(_Modal);
    _SliderComponent = babelHelpers.interopRequireDefault(_SliderComponent);

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

    var LowerInstallmentsModal = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(LowerInstallmentsModal, _Component);

        var _super = _createSuper(LowerInstallmentsModal);

        function LowerInstallmentsModal(props) {
            babelHelpers.classCallCheck(this, LowerInstallmentsModal);
            return _super.call(this, props);
        }

        babelHelpers.createClass(LowerInstallmentsModal, [{
            key: "renderInfo",
            value: function renderInfo() {
                return /*#__PURE__*/ _react.default.createElement("div", null, !!this.props.descriptions && this.props.descriptions.switchToNetModalMsg || "Aby obniżyć ratę zostaniesz przekierowany na zakładkę netto.");
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement(_Modal.default, {
                    id: "LowerInstallmentsModal",
                    key: "LowerInstallmentsModal",
                    open: this.props.open,
                    onClose: this.props.onClose.bind(this, this.props.bundleNo),
                    size: "narrow",
                    showClose: true
                }, /*#__PURE__*/ _react.default.createElement(_SliderComponent.default, {
                    entry: this.props.entry,
                    bundleNo: this.props.bundleNo,
                    postLowerInstallments: this.props.postLowerInstallments,
                    showNetPrices: this.props.showNetPrices,
                    cartIsNet: this.props.cartIsNet,
                    descriptions: this.props.descriptions,
                    open: this.props.open,
                    key: "SLIDER"
                }));
            }
        }]);
        return LowerInstallmentsModal;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            open: (0, _selectors.isLowerInstallmentsModalVisible)(state),
            bundleNo: (0, _selectors.getLowerInstallmentsBundleNo)(state),
            entry: (0, _selectors.getEntryForLowerInstallmentsModal)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            onClose: function onClose(bundleNo) {
                return dispatch((0, _resources.lowerInstallmentsModaClose)(bundleNo));
            },
            postLowerInstallments: function postLowerInstallments(bundleNo, diff, market) {
                return dispatch((0, _cart.postLowerInstallments)(bundleNo, diff, market));
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(LowerInstallmentsModal);

    _exports.default = _default;
});
//# sourceMappingURL=LowerInstallmentsModal.js.map