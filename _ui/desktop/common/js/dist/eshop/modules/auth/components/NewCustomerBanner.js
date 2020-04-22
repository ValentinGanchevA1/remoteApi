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

    var NewCustomerBanner = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(NewCustomerBanner, _Component);

        var _super = _createSuper(NewCustomerBanner);

        function NewCustomerBanner(props) {
            babelHelpers.classCallCheck(this, NewCustomerBanner);
            return _super.call(this, props);
        }

        babelHelpers.createClass(NewCustomerBanner, [{
            key: "render",
            value: function render() {
                if (this.props.isNewUser) {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-full-row g-gray1-bg"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-page-row "
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "opl-console--left-border g-white1-bg u-padding-all-l"
                    }, /*#__PURE__*/ _react.default.createElement("p", {
                        className: "h3 u-margin"
                    }, "Pracujesz w kontek\u015Bcie nowego klienta"), /*#__PURE__*/ _react.default.createElement("p", null, "Pamietaj, aby znale\u017A\u0107 istniej\u0105cego klienta przez system w celu przyznania mu najlepszej ceny oraz przed\u0142u\u017Cenia umowy."))));
                } else {
                    return null;
                }
            }
        }]);
        return NewCustomerBanner;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            isNewUser: (0, _authorization.isNewUser)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {};
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NewCustomerBanner);

    _exports.default = _default;
});
//# sourceMappingURL=NewCustomerBanner.js.map