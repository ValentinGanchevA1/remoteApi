define(["exports", "react", "prop-types", "eshop/modules/cart/components/entriesList/shared/PriceBoxes", "eshop/modules/core/components/ui/Expander", "./Utils", "./FixProductDetails", "./modalFragments/FixInputFragments", "../../../../../core/enum/Outline"], function(_exports, _react, _propTypes, _PriceBoxes, _Expander, _Utils, _FixProductDetails, _FixInputFragments, _Outline) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _FixProductDetails = babelHelpers.interopRequireDefault(_FixProductDetails);
    _Outline = babelHelpers.interopRequireDefault(_Outline);

    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
            keys.push.apply(keys, symbols);
        }
        return keys;
    }

    function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
                ownKeys(Object(source), true).forEach(function(key) {
                    babelHelpers.defineProperty(target, key, source[key]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
                ownKeys(Object(source)).forEach(function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
            }
        }
        return target;
    }

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

    var FixProductMigratedBox = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(FixProductMigratedBox, _Component);

        var _super = _createSuper(FixProductMigratedBox);

        function FixProductMigratedBox(props) {
            babelHelpers.classCallCheck(this, FixProductMigratedBox);
            return _super.call(this, props);
        }

        babelHelpers.createClass(FixProductMigratedBox, [{
            key: "render",
            value: function render() {
                var outlineStyle = {
                    outline: _Outline.default.INFO
                };
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-border-bottom u-position-relative",
                    style: _objectSpread({}, outlineStyle, {
                        marginTop: '2px'
                    })
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-box opl-payback-box opl-content-arrow--no-border g-bluef-bg u-padding-m u-padding-top-m"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-no-margin l-row"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h4 u-no-margin g-white1-c"
                }, "Ten pakiet obecnie posiadasz")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-no-margin-bottom l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-3 large-offset-by-6 medium-offset-by-6"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-content-arrow__object opl-content-arrow--no-border g-bluef-b-bg",
                    style: {
                        marginTop: "-10px"
                    }
                })))), /*#__PURE__*/ _react.default.createElement(_Utils.LRow, {
                    className: "u-no-margin u-padding-all-l u-no-padding-bottom u-small-padding-all u-small-padding-top-l"
                }, /*#__PURE__*/ _react.default.createElement(_FixInputFragments.GraphicCell, {
                    vas: this.props.vas
                }), /*#__PURE__*/ _react.default.createElement(_FixInputFragments.NameCell, {
                    vas: this.props.vas
                })));
            }
        }]);
        return FixProductMigratedBox;
    }(_react.Component);

    _exports.default = FixProductMigratedBox;
    FixProductMigratedBox.propTypes = {
        vas: _propTypes.PropTypes.shape({
            title: _propTypes.PropTypes.string,
            id: _propTypes.PropTypes.string,
            paymentDescriptions: _propTypes.PropTypes.shape({
                monthlyPayments: _propTypes.PropTypes.array
            })
        }),
        idx: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.number])
    };
});
//# sourceMappingURL=FixProductMigratedBox.js.map