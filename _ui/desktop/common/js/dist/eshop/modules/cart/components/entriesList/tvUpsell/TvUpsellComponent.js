define(["exports", "react", "react-redux", "../shared/MultiCartExpandingSectionComponent", "../mobile/MultiCartCollapsedItemComponent", "eshop/modules/cart/actions/cart", "eshop/modules/cart/selectors", "../fix/buymore/buttons/AddTVButton", "../shared/UniversalEntryComponent", "../../../../checkout/constants/ProductEntryTypeEnum", "eshop/modules/cart/components/entriesList/mobile/MultiCartRemovePopup", "eshop/flux/utils/OraModalService", "eshop/modules/cart/analyzer/ProductInfoUtils", "../fix/BoxFragments"], function(_exports, _react, _reactRedux, _MultiCartExpandingSectionComponent, _MultiCartCollapsedItemComponent, _cart, _selectors, _AddTVButton, _UniversalEntryComponent, _ProductEntryTypeEnum, _MultiCartRemovePopup, _OraModalService, _ProductInfoUtils, _BoxFragments) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _MultiCartExpandingSectionComponent = babelHelpers.interopRequireDefault(_MultiCartExpandingSectionComponent);
    _MultiCartCollapsedItemComponent = babelHelpers.interopRequireDefault(_MultiCartCollapsedItemComponent);
    _AddTVButton = babelHelpers.interopRequireDefault(_AddTVButton);
    _UniversalEntryComponent = babelHelpers.interopRequireDefault(_UniversalEntryComponent);
    _ProductEntryTypeEnum = babelHelpers.interopRequireDefault(_ProductEntryTypeEnum);
    _MultiCartRemovePopup = babelHelpers.interopRequireDefault(_MultiCartRemovePopup);
    _OraModalService = babelHelpers.interopRequireDefault(_OraModalService);

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

    var TvUpsellComponentView = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(TvUpsellComponentView, _Component);

        var _super = _createSuper(TvUpsellComponentView);

        function TvUpsellComponentView() {
            babelHelpers.classCallCheck(this, TvUpsellComponentView);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(TvUpsellComponentView, [{
            key: "tvChangeClicked",
            value: function tvChangeClicked() {
                if (this.addTV && this.addTV.addButtonClicked) {
                    this.addTV.addButtonClicked();
                } else {
                    console.warn("No add TV button found");
                }
            }
        }, {
            key: "tvRemoveClicked",
            value: function tvRemoveClicked(productCode) {
                if (this.addTV && this.addTV.removeButtonClicked) {
                    this.addTV.removeButtonClicked(productCode);
                } else {
                    console.warn("No add TV button found");
                }
            }
        }, {
            key: "openRemovePopup",
            value: function openRemovePopup() {
                var entry = this.props.entry;

                _OraModalService.default.open('remove-from-cart-modal-' + entry.bundleNo, {
                    bundleNo: entry.bundleNo,
                    offerIndex: entry.bundleNo
                });
            }
        }, {
            key: "registerRemovePopup",
            value: function registerRemovePopup(entry) {
                var _this = this;

                _OraModalService.default.add(function(data) {
                    return /*#__PURE__*/ _react.default.createElement(_MultiCartRemovePopup.default, {
                        id: 'remove-from-cart-modal-' + entry.bundleNo,
                        bundleNo: entry.bundleNo,
                        title: _this.props.sectionConf.deleteEntryPopupTitle,
                        content: _this.props.sectionConf.deleteEntryPopupContent,
                        decline: _this.props.sectionConf.declineDeleteEntryPopupButtonLabel,
                        confirm: _this.props.sectionConf.confirmDeleteEntryPopupButtonLabel,
                        onClickRemove: _this.props.removeFromCart.bind(_this, null, entry.bundleNo),
                        textRepresentation: _this.props.sectionConf.sectionTitle
                    });
                });
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.registerRemovePopup(this.props.entry);
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                var title = this.props.sectionConf.sectionTitle;
                var idx = "video_section" + this.props.idx;
                var configurables = (0, _ProductInfoUtils.getConfigurables)(this.props.configurables);
                var trigger = 'ost-' + this.props.entry.bundleNo;
                var migratedProducts = this.props.entry.migratedProducts || [];
                var changeableVases = [];

                if (this.props.entry.vases && configurables) {
                    var hiddenTv = (0, _ProductInfoUtils.getTvPackages)(configurables).filter(function(tv) {
                        return tv.addonType === "TVBASIC";
                    }).map(function(tv) {
                        return tv.id;
                    }).shift();
                    this.props.entry.vases.forEach(function(vas) {
                        if (!configurables.mandatoryProducts.includes(vas.productCode) && vas.productCode != hiddenTv) {
                            changeableVases.push(vas);
                        } else {
                            var confVas = configurables.services.find(function(service) {
                                return service.id === vas.productCode;
                            });

                            if (confVas && confVas.addonType === AddonType.SFH) {
                                changeableVases.push(_objectSpread({}, vas, {
                                    mandatory: configurables.mandatoryProducts.includes(vas.productCode)
                                }));
                            }
                        }
                    });
                }

                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement(_MultiCartExpandingSectionComponent.default, {
                    title: title,
                    key: idx,
                    entry: this.props.entry,
                    trigger: trigger,
                    conf: this.props.sectionConf,
                    onRemoveClicked: function onRemoveClicked() {
                        return _this2.openRemovePopup(_this2.props.entry);
                    }
                }, /*#__PURE__*/ _react.default.createElement("div", null, changeableVases.map(function(vas, index) {
                    var onChangeFunction = _this2.tvChangeClicked.bind(_this2);

                    var onRemoveFunction = _this2.tvRemoveClicked.bind(_this2);

                    return /*#__PURE__*/ _react.default.createElement(_BoxFragments.FloatingBox, {
                        key: "fb_" + index
                    }, /*#__PURE__*/ _react.default.createElement(_UniversalEntryComponent.default, {
                        key: index,
                        entry: vas,
                        detailsHeader: "Szczegóły usługi",
                        propositionId: _this2.props.entry.bundleCode,
                        bundle: _this2.props.entry.productCode,
                        onChangeClicked: onChangeFunction,
                        onRemoveClicked: onRemoveFunction
                    }));
                }), this.props.sectionConf.productSections.map(function(section, index) {
                    var propsToPass = {};
                    propsToPass.icon = section.icon;
                    propsToPass.label = section.buyMoreLabel;
                    propsToPass.header = section.buyMoreLabel;
                    propsToPass.descriptions = section.descriptions;
                    propsToPass.configurables = configurables;
                    propsToPass.entry = _this2.props.entry;
                    propsToPass.inner = section.productList;

                    switch (section.entryType) {
                        case _ProductEntryTypeEnum.default.TV_PACKAGE: {
                            var tvPackages = (0, _ProductInfoUtils.getTvPackages)(configurables);
                            var migratedTvPackages = migratedProducts.filter(function(p) {
                                return !!p.addonType;
                            });
                            var extendedPackages = migratedTvPackages.map(function(tv) {
                                tv.id = tv.productCode;
                                tv.inputType = "MIGRATED";
                                return tv;
                            });
                            var extendedPackagesCodes = extendedPackages.map(function(extendedPack) {
                                return extendedPack.productCode;
                            });
                            tvPackages = tvPackages.filter(function(tvPackage) {
                                return !extendedPackagesCodes.includes(tvPackage.id);
                            });
                            var sumOfTvPackages = tvPackages.concat(extendedPackages);
                            return tvPackages.length > 0 ? /*#__PURE__*/ _react.default.createElement(_AddTVButton.default, babelHelpers.extends({
                                key: "TVS" + index
                            }, propsToPass, {
                                migratedTvPacks: extendedPackages ? extendedPackages : [],
                                presentable: sumOfTvPackages,
                                ref: function ref(addTV) {
                                    _this2.addTV = !!addTV ? addTV.getWrappedInstance() : null;
                                }
                            })) : /*#__PURE__*/ _react.default.createElement("div", {
                                key: "NULL_TVS"
                            });
                        }

                        default:
                            return /*#__PURE__*/ _react.default.createElement("div", {
                                key: "DEFAULT_NULL"
                            });
                    }
                })), /*#__PURE__*/ _react.default.createElement(_MultiCartCollapsedItemComponent.default, {
                    key: "collapsed" + idx
                })));
            }
        }]);
        return TvUpsellComponentView;
    }(_react.Component);

    var TvUpsellComponent = /*#__PURE__*/ function(_Component2) {
        babelHelpers.inherits(TvUpsellComponent, _Component2);

        var _super2 = _createSuper(TvUpsellComponent);

        function TvUpsellComponent(props) {
            babelHelpers.classCallCheck(this, TvUpsellComponent);
            return _super2.call(this, props);
        }

        babelHelpers.createClass(TvUpsellComponent, [{
            key: "componentWillMount",
            value: function componentWillMount() {
                if (this.props.entry.bundleNo) {
                    this.props.fetchFixConfigurables(this.props.entry.bundleNo);
                }
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement(TvUpsellComponentView, this.props);
            }
        }]);
        return TvUpsellComponent;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            configurables: (0, _selectors.getFixConfigurables)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            removeFromCart: function removeFromCart(data, id) {
                return dispatch((0, _cart.removeFromCart)(data, id));
            },
            fetchFixConfigurables: function fetchFixConfigurables(cartBundle) {
                return dispatch((0, _cart.fetchFixConfigurables)(cartBundle));
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TvUpsellComponent);

    _exports.default = _default;
});
//# sourceMappingURL=TvUpsellComponent.js.map