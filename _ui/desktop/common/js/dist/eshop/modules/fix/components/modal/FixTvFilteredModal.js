define(["exports", "react", "eshop/modules/fix/components/FixTvFilteredView", "eshop/modules/core/components/ui/Modal", "react-redux", "eshop/modules/cart/selectors", "eshop/modules/cart/actions/cart", "eshop/modules/fix/selectors/root"], function(_exports, _react, _FixTvFilteredView, _Modal, _reactRedux, _selectors, _cart, _root) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _FixTvFilteredView = babelHelpers.interopRequireDefault(_FixTvFilteredView);
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

    var FixTvFilteredModal = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(FixTvFilteredModal, _React$Component);

        var _super = _createSuper(FixTvFilteredModal);

        function FixTvFilteredModal() {
            babelHelpers.classCallCheck(this, FixTvFilteredModal);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(FixTvFilteredModal, [{
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement(_Modal.default, {
                    open: this.props.tvFilteredModalVisibility,
                    onClose: this.props.onClose
                }, /*#__PURE__*/ _react.default.createElement(_FixTvFilteredView.default, {
                    isPreLandingPage: this.props.isPreLandingPage,
                    tvPackages: this.props.tvPackages
                }));
            }
        }]);
        return FixTvFilteredModal;
    }(_react.default.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            tvFilteredModalVisibility: (0, _selectors.getTvFilteredModalVisibility)(state),
            tvPackages: (0, _selectors.getTvPackages)(state),
            isPreLandingPage: (0, _root.isPreLandingPage)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            onClose: function onClose() {
                return dispatch((0, _cart.changeFixTvFilteredModalVisibility)(false));
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(FixTvFilteredModal);

    _exports.default = _default;
});
//# sourceMappingURL=FixTvFilteredModal.js.map