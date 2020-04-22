define(["exports", "react", "react-redux", "eshop/modules/fix/selectors/root"], function(_exports, _react, _reactRedux, _root) {
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

    var ApuComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(ApuComponent, _Component);

        var _super = _createSuper(ApuComponent);

        function ApuComponent(props) {
            babelHelpers.classCallCheck(this, ApuComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(ApuComponent, [{
            key: "render",
            value: function render() {
                return this.props.loyaltyDuration != 0 && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 "
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-margin-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "g-gray2-bg u-padding-all-m"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "kss-icon-preview g-icon g-icon--only g-icon--calendar3"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-margin-all-l u-font-large u-font-bold"
                }, "Umowa przed\u0142u\u017Ca si\u0119 na czas nieokre\u015Blony z cen\u0105 z ostatniego miesi\u0105ca przed przed\u0142u\u017Ceniem."))))));
            }
        }]);
        return ApuComponent;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            loyaltyLength: (0, _root.getSelectedLoyalty)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            selectApu: function(_selectApu) {
                function selectApu(_x) {
                    return _selectApu.apply(this, arguments);
                }

                selectApu.toString = function() {
                    return _selectApu.toString();
                };

                return selectApu;
            }(function(option) {
                return dispatch(selectApu(option));
            })
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ApuComponent);

    _exports.default = _default;
});
//# sourceMappingURL=ApuComponent.js.map