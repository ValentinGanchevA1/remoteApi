define(["exports", "react", "prop-types", "lodash", "../FixProductCheckBox", "../FixProductMigratedFirstCheckBox", "../FixProductRadioBox", "../FixProductImmutableBox", "../FixProductImmutableMigratedBox", "../FixProductMigratedBox", "eshop/modules/core/components/ui/Expander", "../FixProductQuantityBox", "eshop/modules/core/utils/optional"], function(_exports, _react, _propTypes, _lodash, _FixProductCheckBox, _FixProductMigratedFirstCheckBox, _FixProductRadioBox, _FixProductImmutableBox, _FixProductImmutableMigratedBox, _FixProductMigratedBox, _Expander, _FixProductQuantityBox, _optional) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.SaveVasesButton = _exports.ProductGroup = _exports.TitledProductGroup = _exports.TitledFoldableProductGroup = _exports.TitledFoldableTvVasesProductGroup = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _lodash = babelHelpers.interopRequireDefault(_lodash);
    _FixProductCheckBox = babelHelpers.interopRequireDefault(_FixProductCheckBox);
    _FixProductMigratedFirstCheckBox = babelHelpers.interopRequireDefault(_FixProductMigratedFirstCheckBox);
    _FixProductRadioBox = babelHelpers.interopRequireDefault(_FixProductRadioBox);
    _FixProductImmutableBox = babelHelpers.interopRequireDefault(_FixProductImmutableBox);
    _FixProductImmutableMigratedBox = babelHelpers.interopRequireDefault(_FixProductImmutableMigratedBox);
    _FixProductMigratedBox = babelHelpers.interopRequireDefault(_FixProductMigratedBox);
    _FixProductQuantityBox = babelHelpers.interopRequireDefault(_FixProductQuantityBox);

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

    var SectionHeader = function SectionHeader(props) {
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-12"
        }, /*#__PURE__*/ _react.default.createElement("h4", {
            className: "opl-section__heading u-no-margin"
        }, props.label), /*#__PURE__*/ _react.default.createElement(_Expander.Trigger, null, /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-section__text-show"
        }, 'rozwiń sekcję "' + props.label + '"'), /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-section__text-hide"
        }, 'zwiń sekcję "' + props.label + '"'))));
    };

    var TitledFoldableTvVasesProductGroup = function TitledFoldableTvVasesProductGroup(props) {
        var section = props.section,
            products = props.products,
            onClick = props.onClick,
            onClickWrapped = props.onClickWrapped,
            net = props.net;
        var inputType = section.inputType,
            sectionTitle = section.sectionTitle;

        if (products && products.length > 0 && section.innerLists && section.innerLists.length > 0) {
            return /*#__PURE__*/ _react.default.createElement(_Expander.Section, {
                header: /*#__PURE__*/ _react.default.createElement(SectionHeader, {
                    label: sectionTitle
                }),
                variant: "section",
                headerClassName: "opl-section__header--vases-tv",
                expanded: props.isExpanded,
                key: sectionTitle + props.isExpanded
            }, /*#__PURE__*/ _react.default.createElement(_Expander.Expander, {
                id: "exp-".concat(props.uid),
                scrollToSelected: false,
                variant: "",
                className: "opl-expander-inner u-no-padding",
                sectionClassName: "opl-section-outer--2"
            }, section.innerLists.map(function(section, idx) {
                var sectionProducts = products.filter(function(p) {
                    return p.productType === section.productFilter;
                });
                var innerInputType = section.inputType || inputType;

                if (sectionProducts.length > 0) {
                    return [ /*#__PURE__*/ _react.default.createElement("h4", {
                        key: idx + 'h4',
                        className: "u-no-margin u-padding-l u-padding-top-l u-border-bottom u-small-no-border u-small-no-padding-top"
                    }, section.sectionTitle), /*#__PURE__*/ _react.default.createElement(InnerTvVasesProductList, {
                        key: idx + 'innerProduct',
                        products: sectionProducts,
                        onClick: onClick,
                        inputType: innerInputType,
                        onClickWrapped: onClickWrapped,
                        net: net,
                        configurables: props.configurables,
                        descriptions: props.descriptions
                    })];
                }
            })));
        } else {
            return null;
        }
    };

    _exports.TitledFoldableTvVasesProductGroup = TitledFoldableTvVasesProductGroup;

    var TitledFoldableProductGroup = function TitledFoldableProductGroup(props) {
        var section = props.section,
            products = props.products,
            onClick = props.onClick,
            onClickWrapped = props.onClickWrapped,
            net = props.net;
        var inputType = section.inputType,
            sectionTitle = section.sectionTitle;

        if (products && products.length > 0 && section.innerLists && section.innerLists.length > 0) {
            return /*#__PURE__*/ _react.default.createElement(_Expander.Section, {
                header: /*#__PURE__*/ _react.default.createElement(SectionHeader, {
                    label: sectionTitle
                }),
                variant: "section",
                headerClassName: "opl-section__header--vases-tv",
                expanded: props.isExpanded,
                key: sectionTitle + props.isExpanded
            }, /*#__PURE__*/ _react.default.createElement(_Expander.Expander, {
                id: "exp-".concat(props.uid),
                scrollToSelected: false,
                variant: "",
                className: "opl-expander-inner u-no-padding",
                sectionClassName: "opl-section-outer--2"
            }, section.innerLists.map(function(section, idx) {
                var sectionProducts = products.filter(function(p) {
                    return p.productType === section.productFilter;
                });
                var innerInputType = section.inputType || inputType;

                if (sectionProducts.length > 0) {
                    return [ /*#__PURE__*/ _react.default.createElement("h4", {
                        key: idx + 'h4',
                        className: "u-no-margin u-padding-l u-padding-top-l u-border-bottom u-small-no-border u-small-no-padding-top"
                    }, section.sectionTitle), /*#__PURE__*/ _react.default.createElement(InnerProductList, {
                        key: idx + 'innerProduct',
                        products: sectionProducts,
                        onClick: onClick,
                        inputType: innerInputType,
                        onClickWrapped: onClickWrapped,
                        net: net,
                        configurables: props.configurables
                    })];
                }
            })));
        } else {
            return null;
        }
    };

    _exports.TitledFoldableProductGroup = TitledFoldableProductGroup;

    var TitledProductGroup = function TitledProductGroup(props) {
        return /*#__PURE__*/ _react.default.createElement(_Expander.Expander, {
            scrollToSelected: false,
            variant: "",
            className: "opl-expander-outer u-no-padding",
            sectionClassName: "opl-section-outer"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            dangerouslySetInnerHTML: {
                __html: props.label
            }
        }), /*#__PURE__*/ _react.default.createElement(InnerProductList, {
            products: props.products,
            migratedProducts: props.migratedProducts,
            onClick: props.onClick,
            onClickMigratedCheckBox: props.onClickMigratedCheckBox,
            inputType: props.inputType,
            net: props.net,
            channels: props.channels,
            migratedServices: props.migratedServices,
            tvPackages: props.tvPackages,
            includedInThePackageTitle: props.includedInThePackageTitle ? props.includedInThePackageTitle : ""
        }));
    };

    _exports.TitledProductGroup = TitledProductGroup;

    var ProductGroup = function ProductGroup(props) {
        return /*#__PURE__*/ _react.default.createElement(_Expander.Expander, {
            scrollToSelected: false,
            variant: "",
            className: "opl-expander-outer u-no-padding",
            sectionClassName: "opl-section-outer"
        }, /*#__PURE__*/ _react.default.createElement(InnerProductList, {
            products: props.products,
            onClick: props.onClick,
            onClickWrapped: props.onClickWrapped,
            inputType: props.inputType,
            net: props.net,
            configurables: props.configurables
        }));
    };

    _exports.ProductGroup = ProductGroup;

    var InnerTvVasesProductList = function InnerTvVasesProductList(props) {
        function selectInputTypeFrom(vasProduct) {
            if (!!vasProduct.quantityGroup) {
                return 'QUANTITY';
            }

            return vasProduct.inputType ? vasProduct.inputType : props.inputType;
        }

        function isProductRelatedToMultiroom(vasProduct) {
            return vasProduct.migrated && !!vasProduct.quantityGroup;
        }

        function createAnotherBoxOnlyForMigratedMultiroomProducts(vasProduct, index) {
            if (isProductRelatedToMultiroom(vasProduct)) {
                return _optional.Optional.of(getImmutableMigratedBox(props, _objectSpread({}, vasProduct, {
                    visible: true,
                    selected: true,
                    id: vasProduct.id + "_BEFORE_MIGRATION"
                }), index));
            }

            return _optional.Optional.of(null);
        }

        function renderSortedBoxes() {
            var quantityGroups = [];
            var result = [];
            var productsLength = props.products.length;
            var migratedMultiroomBoxes = [];
            var insertMigratedIndex = productsLength;
            var resultLength = result.length;
            props.products.forEach(function(v, idx) {
                if (!v.quantityGroup || !_lodash.default.includes(quantityGroups, v.quantityGroup)) {
                    var vas = _objectSpread({}, v);

                    if (!!vas.quantityGroup) {
                        quantityGroups.push(vas.quantityGroup);
                        vas.groupedProducts = babelHelpers.toConsumableArray(props.products.filter(function(v) {
                            return vas.quantityGroup === v.quantityGroup;
                        }));
                        insertMigratedIndex = resultLength + 1;
                    }

                    resultLength = result.push(getBox(props, vas, selectInputTypeFrom(vas), idx));
                    createAnotherBoxOnlyForMigratedMultiroomProducts(vas, productsLength + idx).ifPresent(function(migratedBox) {
                        return migratedMultiroomBoxes.push(migratedBox);
                    });
                }
            });
            migratedMultiroomBoxes.forEach(function(box) {
                result.splice(insertMigratedIndex, 0, box);
                insertMigratedIndex++;
            });
            return result;
        }

        if (props.products && props.products.length > 0) {
            return /*#__PURE__*/ _react.default.createElement("ul", {
                className: "u-margin__ul-border-collapse"
            }, renderSortedBoxes());
        } else {
            return null;
        }
    };

    var InnerProductList = function InnerProductList(props) {
        if (props.products && props.products.length > 0) {
            var quantityGroups = [];
            var result = [];

            if (props.migratedProducts && props.migratedProducts.length > 0) {
                result.push(getMigratedBox(props, props.migratedProducts));
            }

            props.products.forEach(function(v, idx) {
                if (!v.quantityGroup || !_lodash.default.includes(quantityGroups, v.quantityGroup)) {
                    var vas = _objectSpread({}, v);

                    var inputType = vas.inputType ? vas.inputType : props.inputType;

                    if (!!vas.quantityGroup) {
                        quantityGroups.push(vas.quantityGroup);
                        inputType = 'QUANTITY';
                        vas.groupedProducts = babelHelpers.toConsumableArray(props.products.filter(function(v) {
                            return vas.quantityGroup === v.quantityGroup;
                        }));
                    }

                    result.push(getBox(props, vas, inputType, idx));
                }
            });
            return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("ul", {
                className: "u-margin__ul-border-collapse"
            }, result));
        } else {
            return null;
        }
    };

    var getImmutableMigratedBox = function getImmutableMigratedBox(props, vas, idx) {
        return /*#__PURE__*/ _react.default.createElement(DisableWrapper, {
            hidden: vas.selected !== true || !vas.visible,
            key: "WRAPPER" + vas.id
        }, /*#__PURE__*/ _react.default.createElement(_FixProductImmutableMigratedBox.default, {
            key: vas.id,
            vas: vas,
            idx: idx,
            onSelectionChanged: function onSelectionChanged() {},
            net: props.net,
            descriptions: props.descriptions
        }));
    };

    var getMigratedBox = function getMigratedBox(props, migratedProducts) {
        return /*#__PURE__*/ _react.default.createElement(_FixProductMigratedFirstCheckBox.default, {
            products: migratedProducts,
            onSelectionChanged: props.onClick,
            onClickMigratedCheckBox: props.onClickMigratedCheckBox,
            net: props.net,
            borderDescription: props.migratedServices.borderDescription
        });
    };

    var getBox = function getBox(props, vas, inputType, idx) {
        switch (inputType) {
            case "MIGRATED": {
                return /*#__PURE__*/ _react.default.createElement(DisableWrapper, {
                    hidden: vas.selected !== true || !vas.visible,
                    key: "WRAPPER" + vas.id + idx
                }, /*#__PURE__*/ _react.default.createElement(_FixProductMigratedBox.default, {
                    key: vas.id,
                    vas: vas,
                    idx: idx,
                    onSelectionChanged: props.onClick(vas.id, vas.propositionId)
                }));
            }

            case "CHECKBOX": {
                return /*#__PURE__*/ _react.default.createElement(DisableWrapper, {
                    hidden: vas.presentation === "hidden",
                    key: "WRAPPER" + vas.id + idx
                }, /*#__PURE__*/ _react.default.createElement(_FixProductCheckBox.default, {
                    key: vas.id,
                    vas: vas,
                    idx: idx,
                    onSelectionChanged: props.onClick,
                    onClickWrapped: props.onClickWrapped,
                    net: props.net
                }));
            }

            case "RADIO": {
                return /*#__PURE__*/ _react.default.createElement(DisableWrapper, {
                    hidden: vas.presentation === "hidden",
                    key: "WRAPPER" + vas.id + idx
                }, /*#__PURE__*/ _react.default.createElement(_FixProductRadioBox.default, {
                    key: vas.id,
                    vas: vas,
                    idx: idx,
                    onSelectionChanged: props.onClick(vas.id, vas.propositionId),
                    net: props.net
                }));
            }

            case "UNCHANGEABLE": {
                return /*#__PURE__*/ _react.default.createElement(DisableWrapper, {
                    hidden: vas.presentation === "hidden",
                    key: "WRAPPER" + vas.id + idx
                }, /*#__PURE__*/ _react.default.createElement(_FixProductImmutableBox.default, {
                    key: vas.id,
                    vas: vas,
                    idx: idx,
                    channels: props.channels,
                    tvPackages: props.tvPackages,
                    showPrice: false,
                    selected: true,
                    net: props.net,
                    includedInThePackageTitle: props.includedInThePackageTitle ? props.includedInThePackageTitle : ""
                }));
            }

            case "READONLY": {
                return /*#__PURE__*/ _react.default.createElement(DisableWrapper, {
                    hidden: vas.presentation === "hidden",
                    key: "WRAPPER" + vas.id + idx
                }, /*#__PURE__*/ _react.default.createElement(_FixProductImmutableBox.default, {
                    key: vas.id,
                    vas: vas,
                    idx: idx,
                    tvPackages: props.tvPackages,
                    onSelectionChanged: function onSelectionChanged() {},
                    showPrice: true,
                    selected: false,
                    net: props.net,
                    includedInThePackageTitle: props.includedInThePackageTitle ? props.includedInThePackageTitle : ""
                }));
            }

            case "DISABLED": {
                return /*#__PURE__*/ _react.default.createElement(DisableWrapper, {
                    disable: true,
                    hidden: vas.presentation === "hidden",
                    key: "WRAPPER" + vas.id + idx
                }, /*#__PURE__*/ _react.default.createElement(_FixProductCheckBox.default, {
                    key: vas.id,
                    vas: vas,
                    idx: idx,
                    onSelectionChanged: props.onClick,
                    onClickWrapped: props.onClickWrapped,
                    net: props.net
                }));
            }

            case "QUANTITY": {
                return /*#__PURE__*/ _react.default.createElement(DisableWrapper, {
                    hidden: vas.groupedProducts.every(function(v) {
                        return v.presentation === "hidden";
                    }),
                    key: "WRAPPER" + vas.id + idx
                }, /*#__PURE__*/ _react.default.createElement(_FixProductQuantityBox.default, {
                    key: vas.id,
                    vas: vas,
                    idx: idx,
                    onSelectionChanged: props.onClick,
                    onClickWrapped: props.onClickWrapped,
                    net: props.net,
                    configurables: props.configurables
                }));
            }

            default: {
                return /*#__PURE__*/ _react.default.createElement(DisableWrapper, {
                    hidden: vas.presentation === "hidden",
                    key: "WRAPPER" + vas.id + idx
                }, /*#__PURE__*/ _react.default.createElement(_FixProductCheckBox.default, {
                    key: vas.id,
                    vas: vas,
                    idx: idx,
                    onSelectionChanged: props.onClick,
                    net: props.net
                }));
            }
        }
    };

    var DisableWrapper = function DisableWrapper(props) {
        if (props.hidden) {
            return /*#__PURE__*/ _react.default.createElement("div", {
                className: "u-hide"
            });
        }

        if (props.disable) {
            return /*#__PURE__*/ _react.default.createElement("div", {
                style: {
                    opacity: "0.5",
                    pointerEvents: "none"
                }
            }, props.children);
        }

        return /*#__PURE__*/ _react.default.createElement("div", null, props.children);
    };

    var SaveVasesButton = function SaveVasesButton(props) {
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-4 l-col-4 u-right u-text-right u-padding-top-l-xl"
        }, /*#__PURE__*/ _react.default.createElement("button", {
            className: "o-btn opl-btn opl-btn--primary opl-btn-medium u-w-100",
            onClick: props.saveVasesClicked
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-ripple-box"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-ripple-circle"
        })), props.saveVasesButtonText)));
    };

    _exports.SaveVasesButton = SaveVasesButton;
    SaveVasesButton.propTypes = {
        saveVasesClicked: _propTypes.PropTypes.func,
        saveVasesButtonText: _propTypes.PropTypes.string
    };
    SaveVasesButton.defaultProps = {
        saveVasesButtonText: "Wybierz"
    };
});
//# sourceMappingURL=ModalFragments.js.map