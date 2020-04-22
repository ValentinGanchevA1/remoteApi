define(["exports", "react", "react-redux", "eshop/modules/auth/selectors/authorization"], function(_exports, _react, _reactRedux, _authorization) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);

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

    var MulticartStaticTextComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MulticartStaticTextComponent, _Component);

        var _super = _createSuper(MulticartStaticTextComponent);

        function MulticartStaticTextComponent() {
            babelHelpers.classCallCheck(this, MulticartStaticTextComponent);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(MulticartStaticTextComponent, [{
            key: "toHTML",
            value: function toHTML(descriptions) {
                var value = "";

                if (this.props.isOnlineCookie) {
                    value = this.props.descriptions.textCaap;
                } else if (this.props.smsVerified) {
                    value = this.props.descriptions.textSms;
                } else {
                    value = this.props.descriptions.text;
                }

                return {
                    __html: value
                };
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    dangerouslySetInnerHTML: this.toHTML(this.props.descriptions)
                });
            }
        }]);
        return MulticartStaticTextComponent;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            smsVerified: (0, _authorization.getIsSmsVerifiedCustomer)(state),
            isOnlineCookie: (0, _authorization.getIsOnlineCookie)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {};
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MulticartStaticTextComponent);

    _exports.default = _default;
});
//# sourceMappingURL=MulticartStaticTextComponent.js.map