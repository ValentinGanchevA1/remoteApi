define(["exports", "react", "../../../analyzer/CartInfoUtils", "./UniversalEntryComponent", "../fix/BoxFragments"], function(_exports, _react, _CartInfoUtils, _UniversalEntryComponent, _BoxFragments) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _UniversalEntryComponent = babelHelpers.interopRequireDefault(_UniversalEntryComponent);

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

    var CommonProductEntries = function CommonProductEntries(props) {
        var sectionConf = props.sectionConf,
            sections = props.sections;
        var productSections = sectionConf ? sectionConf.productSections : [];

        function renderRelatedDevices(entry, entryType, section) {
            return entry.relatedDevices && entry.relatedDevices.map(function(relatedDevice) {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    key: "".concat(entryType, "-").concat(relatedDevice.entryNo)
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-left-m u-padding-right-m"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-separator"
                })), /*#__PURE__*/ _react.default.createElement(_UniversalEntryComponent.default, {
                    borderTop: true,
                    sectionConf: section,
                    entry: _objectSpread({}, relatedDevice, {
                        productType: entryType
                    }),
                    onChange: function onChange() {
                        return sections[entryType].onChange({
                            section: section,
                            vas: relatedDevice
                        });
                    },
                    showNetPrices: props.showNetPrices,
                    forFreeLabel: props.forFreeLabel,
                    serviceFreeLabel: props.serviceFreeLabel
                }));
            });
        }

        return /*#__PURE__*/ _react.default.createElement("div", null, productSections.map(function(section, index) {
            var entryType = section.entryType,
                productList = section.productList;
            if (!sections[entryType] || !sections[entryType].entries) return null;

            if (!!productList && !!productList.innerLists && productList.innerLists.length > 0) {
                return productList.innerLists.map(function(innerSection) {
                    var presentableProducts = (0, _CartInfoUtils.Filters)()[innerSection.productFilter](sections[entryType].entries);
                    presentableProducts.sort((0, _CartInfoUtils.compareByProductCodeListAndMandatoryAndTitle)(innerSection.productCodes));
                    return presentableProducts.map(function(entry) {
                        return /*#__PURE__*/ _react.default.createElement(DisableWrapper, {
                            hidden: entry.visible === false,
                            key: "WRAPPER" + entry.entryNo
                        }, /*#__PURE__*/ _react.default.createElement(_BoxFragments.FloatingBox, null, /*#__PURE__*/ _react.default.createElement(_UniversalEntryComponent.default, {
                            key: "".concat(innerSection.productFilter, "-").concat(entry.entryNo, "-").concat(index),
                            sectionConf: section,
                            entry: _objectSpread({}, entry, {
                                productType: innerSection.productFilter
                            }),
                            onChange: function onChange() {
                                return sections[entryType].onChange({
                                    section: section,
                                    selectedSection: innerSection.productFilter
                                });
                            },
                            onRemove: sections[entryType].onRemove,
                            showNetPrices: props.showNetPrices,
                            descriptions: props.descriptions,
                            lowerInstallmentsClicked: sections[entryType].lowerInstallmentsClicked
                        }), renderRelatedDevices(entry, entryType, section)));
                    });
                });
            } else {
                return sections[entryType].entries.map(function(entry) {
                    return /*#__PURE__*/ _react.default.createElement(_BoxFragments.FloatingBox, null, /*#__PURE__*/ _react.default.createElement(_UniversalEntryComponent.default, {
                        key: "".concat(entryType, "-").concat(entry.entryNo, "-").concat(index),
                        sectionConf: section,
                        entry: _objectSpread({}, entry, {
                            productType: entryType
                        }),
                        onChange: function onChange() {
                            return sections[entryType].onChange({
                                section: section,
                                vas: entry
                            });
                        },
                        onRemove: sections[entryType].onRemove,
                        showNetPrices: props.showNetPrices,
                        descriptions: props.descriptions,
                        lowerInstallmentsClicked: sections[entryType].lowerInstallmentsClicked
                    }), renderRelatedDevices(entry, entryType, section));
                });
            }
        }));
    };

    var DisableWrapper = function DisableWrapper(props) {
        if (props.hidden) {
            return /*#__PURE__*/ _react.default.createElement("div", {
                className: "u-hide"
            });
        }

        return /*#__PURE__*/ _react.default.createElement("div", null, props.children);
    };

    var _default = CommonProductEntries;
    _exports.default = _default;
});
//# sourceMappingURL=CommonProductEntries.js.map