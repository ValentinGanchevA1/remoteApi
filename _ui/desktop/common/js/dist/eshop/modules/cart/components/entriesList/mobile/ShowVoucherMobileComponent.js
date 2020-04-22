define(["exports", "react", "prop-types", "react-redux", "eshop/modules/cart/actions/cart", "../VoucherSubType", "../../../actions/cart"], function(_exports, _react, _propTypes, _reactRedux, _cart, _VoucherSubType, _cart2) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = _exports.ShowVoucherMobileComponent = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _VoucherSubType = babelHelpers.interopRequireDefault(_VoucherSubType);

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

    var preventDefaultWrapper = function preventDefaultWrapper(handler) {
        return function(event) {
            event.preventDefault();
            handler(event);
        };
    };

    var ShowVoucherMobileComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(ShowVoucherMobileComponent, _Component);

        var _super = _createSuper(ShowVoucherMobileComponent);

        function ShowVoucherMobileComponent(props) {
            babelHelpers.classCallCheck(this, ShowVoucherMobileComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(ShowVoucherMobileComponent, [{
            key: "removeVoucher",
            value: function removeVoucher(event) {
                event.preventDefault();
                this.props.removeVoucher(this.props.entry.entryNo, this.props.entry.bundleNo, this.props.voucherSubType);

                if (this.props.lowerInstallmentsVisible) {
                    this.props.postLowerInstallments(this.props.entry.bundleNo, 0, "");
                }
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-msg opl-msg--box opl-msg--info u-padding-all u-margin-l"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-padding-left u-font-bold g-black1-c"
                }, this.props.voucherName), /*#__PURE__*/ _react.default.createElement("br", null), this.props.removable && /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    onClick: this.removeVoucher.bind(this),
                    className: "u-padding-left g-black1-c"
                }, "Usu\u0144"));
            }
        }]);
        return ShowVoucherMobileComponent;
    }(_react.Component);

    _exports.ShowVoucherMobileComponent = ShowVoucherMobileComponent;
    ShowVoucherMobileComponent.propTypes = {
        removable: _propTypes.default.bool,
        voucherName: _propTypes.default.string,
        voucherSubType: _propTypes.default.oneOf(Object.keys(_VoucherSubType.default))
    };
    ShowVoucherMobileComponent.defaultProps = {
        removable: true,
        voucherName: ''
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            removeVoucher: function removeVoucher(entryNo, bundleNo, voucherSubType) {
                return dispatch((0, _cart.removeVoucher)(entryNo, bundleNo, voucherSubType));
            },
            postLowerInstallments: function postLowerInstallments(bundleNo, diff, market) {
                return dispatch((0, _cart2.postLowerInstallments)(bundleNo, diff, market));
            }
        };
    };

    var _default = (0, _reactRedux.connect)(null, mapDispatchToProps)(ShowVoucherMobileComponent);

    _exports.default = _default;
});
//# sourceMappingURL=ShowVoucherMobileComponent.js.map