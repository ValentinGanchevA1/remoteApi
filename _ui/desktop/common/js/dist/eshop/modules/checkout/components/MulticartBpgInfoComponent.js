define(["exports", "react", "react-redux", "../selectors"], function(_exports, _react, _reactRedux, _selectors) {
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

    var MulticartBpgInfoComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MulticartBpgInfoComponent, _Component);

        var _super = _createSuper(MulticartBpgInfoComponent);

        function MulticartBpgInfoComponent() {
            babelHelpers.classCallCheck(this, MulticartBpgInfoComponent);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(MulticartBpgInfoComponent, [{
            key: "render",
            value: function render() {
                return this.props.businessDataSource === 'bpg' && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-msg opl-msg--box opl-msg--info u-padding-all u-margin-top-l"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-padding-left u-font-bold g-black1-c u-inline-block"
                }, this.props.descriptions.text || this.props.defaultText));
            }
        }]);
        return MulticartBpgInfoComponent;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            businessDataSource: (0, _selectors.getBusinessDataSource)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {};
    };

    MulticartBpgInfoComponent.defaultProps = {
        defaultText: "Twoje dane zostały pobrane z bazy. Sprawdź ich poprawność."
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MulticartBpgInfoComponent);

    _exports.default = _default;
});
//# sourceMappingURL=MulticartBpgInfoComponent.js.map