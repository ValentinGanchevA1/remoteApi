define(["exports", "react", "react-redux", "eshop/modules/simfree/actions/app", "eshop/modules/simfree/selectors", "eshop/modules/core/components/ui/NoTriggerTooltip", "eshop/modules/simfree/components/ProductStorageCapacityComponent", "eshop/modules/simfree/components/comparator/ComparatorCheckbox"], function(_exports, _react, _reactRedux, _app, _selectors, _NoTriggerTooltip, _ProductStorageCapacityComponent, _ComparatorCheckbox) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _NoTriggerTooltip = babelHelpers.interopRequireDefault(_NoTriggerTooltip);
    _ProductStorageCapacityComponent = babelHelpers.interopRequireDefault(_ProductStorageCapacityComponent);
    _ComparatorCheckbox = babelHelpers.interopRequireDefault(_ComparatorCheckbox);

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

    var ProductDetailsHeaderAndColorComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(ProductDetailsHeaderAndColorComponent, _Component);

        var _super = _createSuper(ProductDetailsHeaderAndColorComponent);

        function ProductDetailsHeaderAndColorComponent(props) {
            var _this;

            babelHelpers.classCallCheck(this, ProductDetailsHeaderAndColorComponent);
            _this = _super.call(this, props);
            console.log(_this.props);
            return _this;
        }

        babelHelpers.createClass(ProductDetailsHeaderAndColorComponent, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                this.setSelectedVariant({
                    productId: this.props.deviceData.selectedVariant
                });
            }
        }, {
            key: "findProductVariant",
            value: function findProductVariant() {
                for (var i = 0; i < this.props.deviceData.variantList.length; i++) {
                    if (this.props.deviceData.variantList[i].productId == this.props.selectedVariant || !this.props.selectedVariant && this.props.deviceData.variantList[i].productId == this.props.deviceData.selectedVariant) {
                        return this.props.deviceData.variantList[i];
                    }
                }
            }
        }, {
            key: "_renderSeparator",
            value: function _renderSeparator() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12  u-padding-l u-medium-padding-left-l u-small-padding-left-l u-medium-padding-right-l u-small-padding-right-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-separator u-padding-top-l"
                }));
            }
        }, {
            key: "setSelectedVariant",
            value: function setSelectedVariant(newSelectedVariant, baseProductId, colorUrl) {
                this.props.setSelectedVariant(newSelectedVariant, baseProductId, colorUrl);
                this.props.setSelectedVariantObject(this.findProductVariant());
            }
        }, {
            key: "setVariantDueToElements",
            value: function setVariantDueToElements(variant, baseProductId, variantColorUrl) {
                var selectedVariant = this.findProductVariant();
                var newSelectedVariant; //get pam of already selected partial variants

                var variants = jQuery.extend({}, selectedVariant.setOf);
                var newSelectedVariant = selectedVariant;
                variants[baseProductId] = variant.productId; //find variant that maches setOf==variants

                this.props.deviceData.variantList.map(function(v) {
                    if (JSON.stringify(v.setOf) === JSON.stringify(variants)) {
                        newSelectedVariant = v;
                    }
                });
                this.setSelectedVariant(newSelectedVariant, baseProductId, newSelectedVariant.colorUrl);
            }
        }, {
            key: "_renderSetColors",
            value: function _renderSetColors() {
                var map = this.props.deviceData.setOf;
                var ret = [];
                var that = this;
                Object.keys(map).forEach(function(deviceCode, index, array) {
                    var device = map[deviceCode];
                    var selectedVariant = that.findProductVariant().setOf[deviceCode];
                    ret.push( /*#__PURE__*/ _react.default.createElement(ColorChooser, {
                        key: "colorFor_" + deviceCode,
                        deviceName: device.name,
                        deviceData: device,
                        selectedVariant: selectedVariant,
                        onClickHandler: that.setVariantDueToElements.bind(that),
                        variantList: device.variantList,
                        showSeparator: !that.isLast(index, array)
                    }));
                });
                return ret;
            }
        }, {
            key: "isLast",
            value: function isLast(index, array) {
                return index === array.length - 1;
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-8 l-col-12  u-small-padding-l u-medium-padding-left-l u-small-padding-left-l u-medium-padding-right-l u-small-padding-right-l"
                }, /*#__PURE__*/ _react.default.createElement("h1", {
                    className: "h1 u-spacing"
                }, this.props.deviceData.name)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-4 u-small-hide u-medium-hide"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-rating"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    style: {
                        width: this.props.deviceData.percentageRating
                    },
                    className: "opl-rating-bar"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }))), /*#__PURE__*/ _react.default.createElement("p", {
                    className: "small g-gray3-c u-padding-left-s u-inline-block"
                }, "(", this.props.deviceData.numberOfReviewsCustomers, ")"), /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-acc-hide"
                }, this.props.deviceData.numberOfReviewsCustomers, " opini")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-4 u-padding-top-s u-small-hide u-medium-hide"
                }, /*#__PURE__*/ _react.default.createElement(_ComparatorCheckbox.default, {
                    product: this.props.deviceData
                }))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-4  u-medium-hide u-medium-padding-left-l u-small-padding-left-l u-medium-padding-right-l u-small-padding-right-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-display_table  u-hide"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-display_table-cell u-text-right u-small-padding-right-m"
                }, "Podziel si\u0119"), /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    className: "u-display_table-cell u-text-right g-icon g-icon--social-facebook-2 g-icon--xs-s u-small-padding-right-m"
                }), /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    className: "u-display_table-cell u-text-right g-icon g-icon--mail g-icon--xs-s"
                }))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12  u-padding-l u-medium-padding-left-l u-small-padding-left-l u-medium-padding-right-l u-small-padding-right-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-separator u-padding-top-l"
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-8 l-col-6  u-small-padding-l u-medium-padding-left-l u-small-padding-left-l u-medium-padding-right-l u-small-padding-right-l"
                }, !this.props.deviceData.isSet && /*#__PURE__*/ _react.default.createElement(ColorChooser, {
                    deviceData: this.props.deviceData,
                    selectedVariant: this.props.selectedVariant,
                    onClickHandler: this.setSelectedVariant.bind(this),
                    variantList: this.props.deviceData.variantList,
                    showSeparator: false
                }), this.props.deviceData.isSet && this._renderSetColors()), /*#__PURE__*/ _react.default.createElement(_ProductStorageCapacityComponent.default, null), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12  u-padding-l u-medium-padding-left-l u-small-padding-left-l u-medium-padding-right-l u-small-padding-right-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-separator u-padding-top-l"
                })));
            }
        }]);
        return ProductDetailsHeaderAndColorComponent;
    }(_react.Component);

    var ColorChooser = function ColorChooser(props) {
        function getColorNameForSelectedVariant(variantList, selectedVariant) {
            var color = "";
            variantList.map(function(v) {
                if (v.productId == selectedVariant) {
                    color = v.colorDefinition[0].name;
                }
            });
            return color;
        }

        var selectedColorString = getColorNameForSelectedVariant(props.variantList, props.selectedVariant);
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-12 l-col-12 ",
            id: "product-basic-information"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row u-display_table"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-12  u-display_table-row",
            "aria-hidden": "true"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "u-padding-right-s"
        }, "Kolor ", props.deviceName && props.deviceName, ":"), /*#__PURE__*/ _react.default.createElement("span", {
            className: "u-font-bold"
        }, " ", selectedColorString)), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-12  u-display_table-row u-padding-top-m"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "opl-color-chooser"
        }, /*#__PURE__*/ _react.default.createElement("fieldset", null, /*#__PURE__*/ _react.default.createElement("legend", {
            className: "u-acc-hide"
        }, "Kolor telefonu"), props.variantList.map(function(variant) {
            var cssStyle = variant && variant.colorDefinition && variant.colorDefinition[0] && variant.colorDefinition[0].cssCode && variant.colorDefinition[0].cssCode;
            if (variant.colorDefinition) return /*#__PURE__*/ _react.default.createElement(_NoTriggerTooltip.default, {
                id: "colorVariantTooltip" + variant.productId,
                key: "colorVariantTooltip" + variant.productId,
                tooltipContent: "Kolor: " + variant.colorDefinition[0].name,
                className: "u-inline"
            }, /*#__PURE__*/ _react.default.createElement("label", {
                className: "opl-color-chooser__item o-tooltip__trigger o-tooltip--top tooltipstered",
                key: "color-chooser-" + variant.productId,
                onClick: function onClick() {
                    return props.onClickHandler(variant, props.deviceData.productId, variant.colorUrl);
                },
                "data-tooltip-trigger-event": "mouseover"
            }, /*#__PURE__*/ _react.default.createElement("input", {
                type: "radio",
                name: "color_" + props.deviceData.productId,
                value: variant.productId,
                checked: variant.productId == props.selectedVariant,
                onChange: function onChange() {
                    return props.onClickHandler(variant, props.deviceData.productId, variant.colorUrl);
                }
            }), /*#__PURE__*/ _react.default.createElement("span", {
                className: "opl-color-chooser__color",
                style: {
                    background: cssStyle
                }
            }), /*#__PURE__*/ _react.default.createElement("span", {
                className: "opl-color-chooser__label"
            }, variant && variant.colorUrl)));
        }))))), props.showSeparator && /*#__PURE__*/ _react.default.createElement("div", {
            className: "o-separator u-padding-top-l"
        }));
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            selectedVariant: (0, _selectors.getSelectedVariant)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
        return {
            setSelectedVariant: function setSelectedVariant(selectedVariantCode, baseProductId, colorCode) {
                return dispatch((0, _app.setSelectedVariant)(selectedVariantCode, colorCode, props.filterState));
            },
            setSelectedVariantObject: function setSelectedVariantObject(selectedVariantObject) {
                return dispatch((0, _app.setSelectedVariantObject)(selectedVariantObject));
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ProductDetailsHeaderAndColorComponent);

    _exports.default = _default;
});
//# sourceMappingURL=ProductDetailsHeaderAndColorComponent.js.map