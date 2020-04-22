define(["exports", "react", "../../fix/buymore/FixTvModal", "../vasModal/ConvergentAnalyzerAdapter", "../../../../analyzer/TvPackageUtils", "../../../../../checkout/constants/CartEntryTypeEnum"], function(_exports, _react, _FixTvModal, _ConvergentAnalyzerAdapter, _TvPackageUtils, _CartEntryTypeEnum) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.ConvergentTvPackageModal = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _FixTvModal = babelHelpers.interopRequireDefault(_FixTvModal);
    _ConvergentAnalyzerAdapter = babelHelpers.interopRequireDefault(_ConvergentAnalyzerAdapter);
    _CartEntryTypeEnum = babelHelpers.interopRequireDefault(_CartEntryTypeEnum);

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

    var updateFixConfigurablesForEntry = function updateFixConfigurablesForEntry(fixConfigurable, convergentEntry, customFilters) {
        fixConfigurable.tvPackages = fixConfigurable.tvPackages.map(function(product) {
            return _objectSpread({}, product, {
                propositionId: fixConfigurable.propositionId
            });
        });
        var migratedProducts = [];
        var fixEntries = convergentEntry.entries.filter(function(entry) {
            return entry.entryType === "FIX";
        });

        if (fixEntries && fixEntries.find(function(entry) {
                return entry.migratedProducts;
            })) {
            migratedProducts = fixEntries.find(function(entry) {
                return entry.migratedProducts;
            }).migratedProducts;
        }

        var migratedTvPackages = migratedProducts.filter(function(p) {
            return !!p.addonType;
        });
        fixConfigurable.relations = fixConfigurable.relations.concat((0, _TvPackageUtils.createCustomRules)(fixConfigurable.tvPackages, migratedTvPackages, customFilters));
        var extendedPackages = migratedTvPackages.map(function(tv) {
            tv.id = tv.productCode;
            tv.inputType = "MIGRATED";
            return tv;
        });
        var extendedPackagesCodes = extendedPackages.map(function(extendedPack) {
            return extendedPack.productCode;
        });
        fixConfigurable.tvPackages = fixConfigurable.tvPackages.filter(function(tvPackage) {
            return !extendedPackagesCodes.includes(tvPackage.id);
        });
        fixConfigurable.tvPackages = fixConfigurable.tvPackages.concat(extendedPackages);
    };

    var ConvergentTvPackageModal = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(ConvergentTvPackageModal, _Component);

        var _super = _createSuper(ConvergentTvPackageModal);

        function ConvergentTvPackageModal() {
            babelHelpers.classCallCheck(this, ConvergentTvPackageModal);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(ConvergentTvPackageModal, [{
            key: "getIncludedInThePackageTitle",
            value: function getIncludedInThePackageTitle() {
                if (this.props.descriptions && this.props.descriptions.includedInThePackageTitle && this.props.descriptions.includedInThePackageTitle !== "") {
                    return this.props.descriptions.includedInThePackageTitle;
                }

                return "<div>Pakiety TV</div><div>zawarte w Orange Love</div>";
            }
        }, {
            key: "render",
            value: function render() {
                var subModalTitle = this.props.descriptions ? this.props.descriptions.modalTitle : "";
                var subModalContents = this.props.descriptions ? this.props.descriptions.modalContents : "";
                var configurables = JSON.parse(JSON.stringify(this.props.convergentConfigurables.configurables));
                var fixConfigurable = configurables.find(function(configurablesEntry) {
                    return configurablesEntry.factoryName === _CartEntryTypeEnum.default.FIX;
                });

                if (fixConfigurable) {
                    updateFixConfigurablesForEntry(fixConfigurable, this.props.entry, this.props.customFilters);
                }

                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement(_ConvergentAnalyzerAdapter.default, {
                    configurables: configurables,
                    entry: this.props.entry,
                    updateCartProducts: this.props.updateCartProducts,
                    singlePropositionId: fixConfigurable && fixConfigurable.propositionId,
                    triggerCartRecalculation: this.props.modalVisible
                }, /*#__PURE__*/ _react.default.createElement(_FixTvModal.default, {
                    label: this.props.header,
                    open: this.props.modalVisible,
                    services: fixConfigurable && fixConfigurable.tvPackages ? fixConfigurable.tvPackages : [],
                    onClose: this.props.closeModalClicked,
                    productList: this.props.inner,
                    subModalTitle: subModalTitle,
                    subModalContents: subModalContents,
                    showNetPrices: this.props.showNetPrices,
                    includedInThePackageTitle: this.getIncludedInThePackageTitle(),
                    filtersVisible: true
                })));
            }
        }]);
        return ConvergentTvPackageModal;
    }(_react.Component);

    _exports.ConvergentTvPackageModal = ConvergentTvPackageModal;
});
//# sourceMappingURL=ConvergentTvPackageModal.js.map