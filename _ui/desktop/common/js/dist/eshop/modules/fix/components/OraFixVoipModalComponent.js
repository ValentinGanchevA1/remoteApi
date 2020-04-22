define(["exports", "react", "react-redux", "./VoipVariantComponent", "./VoipNumbersComponent", "../actions/voip", "../selectors/root", "../selectors/voip"], function(_exports, _react, _reactRedux, _VoipVariantComponent, _VoipNumbersComponent, _voip, _root, _voip2) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _VoipVariantComponent = babelHelpers.interopRequireDefault(_VoipVariantComponent);
    _VoipNumbersComponent = babelHelpers.interopRequireDefault(_VoipNumbersComponent);

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

    var OraFixVoipModalComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(OraFixVoipModalComponent, _Component);

        var _super = _createSuper(OraFixVoipModalComponent);

        function OraFixVoipModalComponent(props) {
            babelHelpers.classCallCheck(this, OraFixVoipModalComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(OraFixVoipModalComponent, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                this.props.mountVoipModalComponent();
            }
        }, {
            key: "getDerivedStateFromProps",
            value: function getDerivedStateFromProps(nextProps, state) {
                if (!!nextProps.cityId && this.props.cityId !== nextProps.cityId || this.props.designationNumber !== nextProps.designationNumber) {
                    this.props.fetchVoipNumbers(nextProps.cityId);
                }
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement(_VoipVariantComponent.default, {
                    descriptions: this.props.descriptions
                }), /*#__PURE__*/ _react.default.createElement(_VoipNumbersComponent.default, {
                    descriptions: this.props.descriptions
                }));
            }
        }]);
        return OraFixVoipModalComponent;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            cityId: (0, _root.getWwtCityId)(state),
            designationNumber: (0, _voip2.getDesignationNumber)(state),
            numbersFetched: (0, _voip2.getNumbersFetched)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            fetchVoipNumbers: function fetchVoipNumbers(cityId) {
                return dispatch((0, _voip.fetchingVoipNumbersWithMultiCallBlock)(cityId));
            },
            mountVoipModalComponent: function mountVoipModalComponent() {
                return dispatch((0, _voip.mountVoipModalComponent)());
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(OraFixVoipModalComponent);

    _exports.default = _default;
});
//# sourceMappingURL=OraFixVoipModalComponent.js.map