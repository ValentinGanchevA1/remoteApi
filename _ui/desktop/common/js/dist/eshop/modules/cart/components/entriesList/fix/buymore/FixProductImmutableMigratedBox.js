define(["exports", "react", "prop-types", "./Utils", "./FixProductDetails", "./modalFragments/FixInputFragments", "../../../../../core/components/ui/Expander", "../../../../../core/enum/Outline"], function(_exports, _react, _propTypes, _Utils, _FixProductDetails, _FixInputFragments, _Expander, _Outline) {
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

    var FixProductImmutableMigratedBox = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(FixProductImmutableMigratedBox, _Component);

        var _super = _createSuper(FixProductImmutableMigratedBox);

        function FixProductImmutableMigratedBox(props) {
            babelHelpers.classCallCheck(this, FixProductImmutableMigratedBox);
            return _super.call(this, props);
        }

        babelHelpers.createClass(FixProductImmutableMigratedBox, [{
            key: "getDetailsSectionHeader",
            value: function getDetailsSectionHeader() {
                return /*#__PURE__*/ _react.default.createElement(_Expander.Trigger, {
                    className: "js-expander__trigger__nested u-inline-block large-offset-by-3 medium-offset-by-3 u-padding-all-l u-no-padding-top"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "js-expander__trigger--show"
                }, "Zwi\u0144\xA0szczeg\xF3\u0142y"), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "js-expander__trigger--hide"
                }, 'Szczegóły'));
            }
        }, {
            key: "getSectionHeader",
            value: function getSectionHeader() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-box opl-payback-box opl-content-arrow--no-border g-bluef-bg u-padding-m u-padding-top-m"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-no-margin l-row"
                }, this.props.vas.deviceType ? /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h6 u-no-margin g-white1-c"
                }, this.props.descriptions.deviceMigratedBoxTitle) : /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h6 u-no-margin g-white1-c"
                }, this.props.descriptions.serviceMigratedBoxTitle)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-no-margin-bottom l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-3 large-offset-by-6 medium-offset-by-6"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-content-arrow__object opl-content-arrow--no-border g-bluef-b-bg",
                    style: {
                        marginTop: "-10px"
                    }
                }))));
            }
        }, {
            key: "getMigratedProductsQuantity",
            value: function getMigratedProductsQuantity() {
                var groupedProducts = this.props.vas.groupedProducts || [];
                return groupedProducts.filter(function(p) {
                    return p.migrated && p.selected;
                }).length;
            }
        }, {
            key: "isWww",
            value: function isWww() {
                return !!this.props.channels && this.props.channels.sales === "WWW";
            }
        }, {
            key: "render",
            value: function render() {
                var outlineStyle = {
                    outline: _Outline.default.INFO
                };
                var quantity = this.getMigratedProductsQuantity();

                if (quantity > 0) {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        className: "u-border-bottom u-position-relative u-margin-top-m",
                        style: _objectSpread({}, outlineStyle, {
                            marginTop: '2px'
                        })
                    }, this.getSectionHeader(), /*#__PURE__*/ _react.default.createElement(_Utils.LRow, {
                        className: "u-no-margin u-padding-all-l u-no-padding-bottom u-small-padding-all u-small-padding-top-l",
                        onClick: this.props.onSelectionChanged
                    }, /*#__PURE__*/ _react.default.createElement(_FixInputFragments.GraphicCell, {
                        vas: this.props.vas
                    }), /*#__PURE__*/ _react.default.createElement(_FixInputFragments.NameCell, {
                        vas: this.props.vas
                    }), /*#__PURE__*/ _react.default.createElement(_FixInputFragments.PriceCell, {
                        small: "12",
                        medium: "5",
                        big: "5",
                        vas: this.props.vas,
                        net: this.props.net,
                        quantity: quantity
                    })), /*#__PURE__*/ _react.default.createElement(_Expander.Section, {
                        header: this.getDetailsSectionHeader(),
                        contentClassName: "js-expander__container__nested",
                        headerClassName: "u-position-relative u-small-text-right",
                        className: "l-row u-no-margin opl-section-outer--2",
                        expanded: this.isWww(),
                        styleObject: this.isWww() ? {
                            display: "block"
                        } : null
                    }, /*#__PURE__*/ _react.default.createElement(_FixProductDetails.default, {
                        vas: this.props.vas
                    })));
                } else {
                    return null;
                }
            }
        }]);
        return FixProductImmutableMigratedBox;
    }(_react.Component);

    _exports.default = FixProductImmutableMigratedBox;
    FixProductImmutableMigratedBox.propTypes = {
        vas: _propTypes.PropTypes.shape({
            title: _propTypes.PropTypes.string,
            id: _propTypes.PropTypes.string,
            paymentDescriptions: _propTypes.PropTypes.shape({
                monthlyPayments: _propTypes.PropTypes.array
            })
        }),
        idx: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.number]),
        onSelectionChanged: _propTypes.PropTypes.func,
        includedInThePackageTitle: _propTypes.PropTypes.string
    };
});
//# sourceMappingURL=FixProductImmutableMigratedBox.js.map