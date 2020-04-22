define(["exports", "react", "prop-types", "react-redux", "eshop/modules/auth/actions/authorization", "eshop/modules/checkout/selectors", "eshop/modules/auth/selectors/authorization", "eshop/modules/cart/selectors", "eshop/modules/fix/selectors/root"], function(_exports, _react, _propTypes, _reactRedux, _authorization, _selectors, _authorization2, _selectors2, _root) {
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

    var MulticartCustomerLoginLink = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(MulticartCustomerLoginLink, _React$Component);

        var _super = _createSuper(MulticartCustomerLoginLink);

        function MulticartCustomerLoginLink() {
            babelHelpers.classCallCheck(this, MulticartCustomerLoginLink);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(MulticartCustomerLoginLink, [{
            key: "render",
            value: function render() {
                if (this.props.channels.sales === 'WWW') {
                    return /*#__PURE__*/ _react.default.createElement("p", null, !!this.props.title && /*#__PURE__*/ _react.default.createElement("span", {
                        className: "u-left",
                        dangerouslySetInnerHTML: {
                            __html: !!this.props.title && this.props.title
                        }
                    }), /*#__PURE__*/ _react.default.createElement("span", {
                        className: !!this.props.title && !this.props.isFix ? "u-right " : "u-left "
                    }, !!this.props.title ? " " : "", /*#__PURE__*/ _react.default.createElement("a", {
                        href: "#",
                        onClick: this.props.logIn
                    }, " Zaloguj si\u0119")));
                }

                return null;
            }
        }]);
        return MulticartCustomerLoginLink;
    }(_react.default.Component);

    MulticartCustomerLoginLink.propTypes = {
        title: _propTypes.default.string,
        loggedTitle: _propTypes.default.string
    };
    MulticartCustomerLoginLink.defaultProps = {
        loggedTitle: "Jesteś zalogowany od teraz możesz modyfikować obecne usługi. Sprawdź oferty dostępne dla Ciebie."
    };

    var mapStateToProps = function mapStateToProps(state) {
        var loggedCustomerData = (0, _authorization2.getLoggedCustomerData)(state);
        return {
            isFix: (0, _selectors2.isCartFix)(state) || (0, _root.isLandingPage)(state),
            loggedCustomerData: loggedCustomerData,
            isExistingCustomer: (0, _selectors.isExistingCustomer)(state) || loggedCustomerData && (loggedCustomerData.lastName || loggedCustomerData.tradingName)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            logIn: function logIn() {
                return dispatch((0, _authorization.logIn)());
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MulticartCustomerLoginLink);

    _exports.default = _default;
});
//# sourceMappingURL=MulticartCustomerLoginLink.js.map