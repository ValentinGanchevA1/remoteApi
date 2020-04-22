define(["exports", "react", "prop-types", "eshop/modules/cart/components/entriesList/shared/PriceBoxes", "eshop/modules/core/components/ui/Expander", "./Utils", "./FixProductDetails", "./modalFragments/FixInputFragments", "../../../../../core/enum/Outline", "../../utils/ConfigurableUtils"], function(_exports, _react, _propTypes, _PriceBoxes, _Expander, _Utils, _FixProductDetails, _FixInputFragments, _Outline, _ConfigurableUtils) {
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

    var FixProductQuantityBox = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(FixProductQuantityBox, _Component);

        var _super = _createSuper(FixProductQuantityBox);

        function FixProductQuantityBox(props) {
            babelHelpers.classCallCheck(this, FixProductQuantityBox);
            return _super.call(this, props);
        }

        babelHelpers.createClass(FixProductQuantityBox, [{
            key: "getSectionHeader",
            value: function getSectionHeader() {
                return /*#__PURE__*/ _react.default.createElement(_Expander.Trigger, {
                    className: "js-expander__trigger__nested u-inline-block large-offset-by-3 medium-offset-by-3 u-padding-all-l u-no-padding-top"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "js-expander__trigger--show"
                }, "Zwi\u0144\xA0szczeg\xF3\u0142y"), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "js-expander__trigger--hide"
                }, 'Szczegóły'));
            }
        }, {
            key: "add",
            value: function add(event) {
                var productToAdd = this.props.vas.groupedProducts.find(function(p) {
                    return p.presentation !== "hidden" && !p.selected;
                });
                this.props.onSelectionChanged(productToAdd.id, this.props.vas.propositionId)(event);
            }
        }, {
            key: "remove",
            value: function remove(event) {
                var _this = this;

                var selectedGroupedProductsIds = this.props.vas.groupedProducts.filter(function(p) {
                    return !!p.selected;
                }).map(function(p) {
                    return p.id;
                });
                var productToRemove = this.props.vas.groupedProducts.find(function(p) {
                    return _this.isRemovable(p, _this.props.configurables, selectedGroupedProductsIds);
                });
                this.props.onSelectionChanged(productToRemove.id, this.props.vas.propositionId)(event);
            }
        }, {
            key: "isRemovable",
            value: function isRemovable(product, configurables, selectedGroupedProductsIds) {
                if (product.presentation !== "hidden" && !!product.selected && !!configurables) {
                    return !(0, _ConfigurableUtils.isMandatory)(product.id, configurables, selectedGroupedProductsIds);
                }

                return false;
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                var outlineStyle = {};

                if (!!this.props.vas.warningMessage) {
                    outlineStyle = {
                        outline: _Outline.default.WARN
                    };
                } else if (this.props.vas.borderDescription) {
                    outlineStyle = {
                        outline: _Outline.default.INFO
                    };
                }

                var maxQuantity = this.props.vas.groupedProducts.filter(function(p) {
                    return p.presentation !== "hidden";
                }).length;
                var minQuantity = this.props.vas.groupedProducts.filter(function(p) {
                    return p.mandatory;
                }).length;
                var quantity = this.props.vas.groupedProducts.filter(function(p) {
                    return p.selected;
                }).length;
                var selected = quantity > 0;
                var disabledAddClass = quantity >= maxQuantity ? 'is-disabled' : '';
                var disabledRemoveClass = quantity <= minQuantity ? 'is-disabled' : '';
                var borderDescriptionHtml = {
                    __html: this.props.vas.borderDescription
                };
                var hasBorder = this.props.vas.warningMessage || this.props.vas.borderDescription;
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-position-relative u-margin-top-m ".concat(!hasBorder ? 'u-position-relative g-white1-bg is-selected' : ''),
                    style: _objectSpread({}, outlineStyle, {
                        marginTop: '2px'
                    })
                }, this.props.vas.warningMessage && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-box opl-payback-box opl-content-arrow--no-border g-yellowf-bg u-padding-m u-padding-top-m"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-no-margin l-row"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--only g-icon--warn g-icon--xs-s u-padding u-padding-right-s",
                    "aria-hidden": "true"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-strong h5"
                }, "Uwaga!"), /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-no-margin"
                }, this.props.vas.warningMessage)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-no-margin-bottom l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-3 large-offset-by-6 medium-offset-by-6"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-content-arrow__object opl-content-arrow--no-border g-yellowf-b-bg",
                    style: {
                        marginTop: "-5px",
                        zIndex: "-1"
                    }
                })))), this.props.vas.borderDescription && !this.props.vas.selected && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-box opl-payback-box opl-content-arrow--no-border g-bluef-bg u-padding-m u-padding-top-m"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-no-margin l-row"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h4 u-no-margin g-white1-c",
                    dangerouslySetInnerHTML: borderDescriptionHtml
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-no-margin-bottom l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-3 large-offset-by-6 medium-offset-by-6"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-content-arrow__object opl-content-arrow--no-border g-bluef-b-bg",
                    style: {
                        marginTop: "-10px",
                        zIndex: "-1"
                    }
                })))), !hasBorder && selected && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-selection-layer",
                    "aria-hidden": "true"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-selection-layer__border"
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-selection-layer__checkmark"
                })), /*#__PURE__*/ _react.default.createElement(_Utils.LRow, {
                    className: "u-no-margin u-padding-all-l u-no-padding-bottom u-small-padding-all u-small-padding-top-l",
                    onClick: function onClick() {}
                }, /*#__PURE__*/ _react.default.createElement(_FixInputFragments.GraphicCell, {
                    vas: this.props.vas
                }), /*#__PURE__*/ _react.default.createElement(_FixInputFragments.NameCell, {
                    vas: this.props.vas
                }), /*#__PURE__*/ _react.default.createElement(_FixInputFragments.PriceCell, {
                    vas: this.props.vas,
                    net: this.props.net
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-2 l-col-2  u-small-position-absolute u-small-position-right u-small-w-auto u-small-padding-right-l"
                }), /*#__PURE__*/ _react.default.createElement(_Utils.LCol, {
                    small: "12",
                    medium: "2",
                    big: "2",
                    className: "u-small-position-absolute u-small-position-right u-small-w-auto u-small-padding-right-l"
                }, /*#__PURE__*/ _react.default.createElement("label", {
                    className: "u-right u-no-padding-top"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-spinbox-wrapper opl-spinbox__wrapper g-brand2-bg"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    onClick: function onClick(event) {
                        return _this2.remove(event);
                    },
                    tabIndex: "-1",
                    className: "o-spinbox__btn o-spinbox__btn--less g-icon g-icon--only g-icon--minus g-icon--xs ".concat(disabledRemoveClass)
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-hide"
                }, "mniej")), /*#__PURE__*/ _react.default.createElement("input", {
                    id: "quantity-box-".concat(this.props.vas.id),
                    type: "text",
                    maxLength: "1",
                    min: minQuantity,
                    max: maxQuantity,
                    className: "o-spinbox g-white1-c u-no-border",
                    disabled: true,
                    value: quantity
                }), /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    onClick: function onClick(event) {
                        return _this2.add(event);
                    },
                    tabIndex: "-1",
                    className: "o-spinbox__btn o-spinbox__btn--more g-icon g-icon--only g-icon--plus g-icon--xs ".concat(disabledAddClass)
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-hide"
                }, "wi\u0119cej")))))), /*#__PURE__*/ _react.default.createElement(_Expander.Section, {
                    header: this.getSectionHeader(),
                    contentClassName: "js-expander__container__nested",
                    headerClassName: "u-position-relative u-small-text-right",
                    className: "l-row u-no-margin opl-section-outer--2"
                }, /*#__PURE__*/ _react.default.createElement(_FixProductDetails.default, {
                    vas: this.props.vas
                })));
            }
        }]);
        return FixProductQuantityBox;
    }(_react.Component);

    _exports.default = FixProductQuantityBox;
    FixProductQuantityBox.propTypes = {
        vas: _propTypes.PropTypes.shape({
            title: _propTypes.PropTypes.string,
            id: _propTypes.PropTypes.string,
            paymentDescriptions: _propTypes.PropTypes.shape({
                monthlyPayments: _propTypes.PropTypes.array
            }),
            warningMessage: _propTypes.PropTypes.string,
            onRemoveWarning: _propTypes.PropTypes.string
        }),
        idx: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.number]),
        onSelectionChanged: _propTypes.PropTypes.func,
        onClickWrapped: _propTypes.PropTypes.func
    };
});
//# sourceMappingURL=FixProductQuantityBox.js.map