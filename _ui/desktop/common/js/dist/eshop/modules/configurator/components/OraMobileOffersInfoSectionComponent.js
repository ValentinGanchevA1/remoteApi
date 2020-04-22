define(["exports", "react", "react-redux", "eshop/modules/configurator/selectors/filters"], function(_exports, _react, _reactRedux, _filters) {
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

    var OraMobileOffersInfoSectionComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(OraMobileOffersInfoSectionComponent, _Component);

        var _super = _createSuper(OraMobileOffersInfoSectionComponent);

        function OraMobileOffersInfoSectionComponent(props) {
            babelHelpers.classCallCheck(this, OraMobileOffersInfoSectionComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(OraMobileOffersInfoSectionComponent, [{
            key: "render",
            value: function render() {
                var processType = this.props.process;
                var htmlContext = this.props.infoSections[processType];
                return /*#__PURE__*/ _react.default.createElement("div", null, this.props.descriptions.headerValue ? /*#__PURE__*/ _react.default.createElement("div", {
                    dangerouslySetInnerHTML: {
                        __html: this.props.descriptions.headerValue
                    }
                }) : null, /*#__PURE__*/ _react.default.createElement("div", {
                    dangerouslySetInnerHTML: {
                        __html: htmlContext
                    }
                }));
            }
        }]);
        return OraMobileOffersInfoSectionComponent;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            process: (0, _filters.getSelectedProcessTypeValue)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {};
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(OraMobileOffersInfoSectionComponent);

    _exports.default = _default;
});
//# sourceMappingURL=OraMobileOffersInfoSectionComponent.js.map