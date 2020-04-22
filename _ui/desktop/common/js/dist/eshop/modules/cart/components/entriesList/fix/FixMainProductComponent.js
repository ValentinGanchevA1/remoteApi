define(["exports", "react", "react-redux", "lodash", "../../../../fix/actions/voip", "../../../../../flux/utils/OraModalService", "../shared/productDetails/OfferDetailsModal", "./Utils", "../../../../fix/selectors/root", "../../../analyzer/DeviceUtils", "../shared/CommonPropositionEntry", "../../../actions/cart", "../../../../fix/components/modal/FixTvFilteredModal", "../utils/ConfigurableUtils"], function(_exports, _react, _reactRedux, _lodash, _voip, _OraModalService, _OfferDetailsModal, _Utils, _root, _DeviceUtils, _CommonPropositionEntry, _cart, _FixTvFilteredModal, _ConfigurableUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _lodash = babelHelpers.interopRequireDefault(_lodash);
    _OraModalService = babelHelpers.interopRequireDefault(_OraModalService);
    _OfferDetailsModal = babelHelpers.interopRequireDefault(_OfferDetailsModal);
    _CommonPropositionEntry = babelHelpers.interopRequireDefault(_CommonPropositionEntry);
    _FixTvFilteredModal = babelHelpers.interopRequireDefault(_FixTvFilteredModal);

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

    var FixMainProductComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(FixMainProductComponent, _Component);

        var _super = _createSuper(FixMainProductComponent);

        function FixMainProductComponent(props) {
            var _this;

            babelHelpers.classCallCheck(this, FixMainProductComponent);
            _this = _super.call(this, props);
            _this.prepareVoipEntry = _this.prepareVoipEntry.bind(babelHelpers.assertThisInitialized(_this));
            _this.handleShowModalVoip = _this.handleShowModalVoip.bind(babelHelpers.assertThisInitialized(_this));
            _this.onDetailsClicked = _this.onDetailsClicked.bind(babelHelpers.assertThisInitialized(_this));
            _this.name = _this.props.entry.bundleNo + "_" + _this.props.entry.entryNo;
            return _this;
        }

        babelHelpers.createClass(FixMainProductComponent, [{
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                var _this2 = this;

                if (this.props.entry && this.props.configurables && this.props.configurables.length > 0) {
                    var configurables = this.props.configurables[0];

                    _OraModalService.default.add(function(data) {
                        //TODO workaround - consider populating devices on broadband and tv products as for landing page
                        var broadbandDevices = _this2.props.entry.broadbandFixProduct.devices.map(function(device) {
                            return device.code;
                        });

                        var broadband = Object.assign({}, _this2.props.entry.broadbandFixProduct);
                        broadband.devices = configurables.devices.filter(function(device) {
                            return broadbandDevices.includes(device.id);
                        });
                        var tvProduct = null;

                        if (_this2.props.entry.tvFixProduct) {
                            var tvDevices = _this2.props.entry.tvFixProduct.devices.map(function(device) {
                                return device.code;
                            });

                            tvProduct = Object.assign({}, _this2.props.entry.tvFixProduct);
                            tvProduct.devices = configurables.devices.filter(function(device) {
                                return tvDevices.includes(device.id);
                            });
                        }

                        return /*#__PURE__*/ _react.default.createElement(_OfferDetailsModal.default, {
                            id: "productDetails-" + _this2.name,
                            header: _this2.props.detailsHeader || "Szczegóły oferty",
                            broadband: broadband,
                            tv: tvProduct,
                            voip: _this2.props.entry.voipFixProduct,
                            tvPackages: configurables.tvPackages
                        });
                    });
                }
            }
        }, {
            key: "onDetailsClicked",
            value: function onDetailsClicked() {
                _OraModalService.default.open("productDetails-" + this.name);
            }
        }, {
            key: "handleShowModalVoip",
            value: function handleShowModalVoip(e) {
                e.preventDefault();
                this.props.openVoipModal();
            }
        }, {
            key: "addButtonClicked",
            value: function addButtonClicked(event) {
                event.preventDefault();
                this.props.showTvModal();
            }
        }, {
            key: "showTvPackagesButtonClicked",
            value: function showTvPackagesButtonClicked(event) {
                event.preventDefault();
                this.props.showFixTvFilteredModal();
            }
        }, {
            key: "showB2BVasesButtonClicked",
            value: function showB2BVasesButtonClicked(event) {
                event.preventDefault();
                this.props.showB2BVasesModal();
            }
        }, {
            key: "removeB2BVasesButtonClicked",
            value: function removeB2BVasesButtonClicked(event) {
                event.preventDefault();
                this.props.onVasRemove(this.props.entry.vasPackagesB2BFixProduct.code);
            }
        }, {
            key: "prepareTvEntry",
            value: function prepareTvEntry() {
                var tvChangeComponent = /*#__PURE__*/ _react.default.createElement(_Utils.ChangeComponent, {
                    onChange: this.addButtonClicked.bind(this),
                    changeLabel: "Zmie\u0144"
                });

                var tvPackagesModal = /*#__PURE__*/ _react.default.createElement(_Utils.ChangeComponent, {
                    onChange: this.showTvPackagesButtonClicked.bind(this),
                    changeLabel: "Pakiety telewizji"
                });

                var additionalContent = /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col--auto"
                }, tvChangeComponent), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col--auto"
                }, tvPackagesModal, /*#__PURE__*/ _react.default.createElement(_FixTvFilteredModal.default, null)));

                return _objectSpread({}, this.props.entry.tvFixProduct, {
                    additionalContent: additionalContent
                });
            }
        }, {
            key: "prepareVoipEntry",
            value: function prepareVoipEntry() {
                var voipNumberContent = /*#__PURE__*/ _react.default.createElement(_Utils.NumberComponent, {
                    product: this.props.entry.voipFixProduct,
                    numberLabel: this.props.sectionConf.numberLabel,
                    selectedNumberVoip: this.props.selectedNumberVoip,
                    changeNumberLabel: this.props.sectionConf.changeNumberLabel,
                    handleShowModalVoip: this.handleShowModalVoip,
                    editable: this.props.voipModalComponentIsMounted
                });

                return _objectSpread({}, this.props.entry.voipFixProduct, {
                    additionalContent: voipNumberContent
                });
            }
        }, {
            key: "prepareVasPackagesB2BEntry",
            value: function prepareVasPackagesB2BEntry() {
                var mockVasPackagesB2BDetailsComponent = /*#__PURE__*/ _react.default.createElement(_Utils.ChangeComponent, {
                    onChange: this.addButtonClicked.bind(this),
                    changeLabel: "Szczeg\xF3\u0142y"
                });

                var vasPackagesB2BChangeComponent = /*#__PURE__*/ _react.default.createElement(_Utils.ChangeComponent, {
                    onChange: this.showB2BVasesButtonClicked.bind(this),
                    changeLabel: "Zmie\u0144"
                });

                var vasPackagesB2BRemoveComponent = /*#__PURE__*/ _react.default.createElement(_Utils.ChangeComponent, {
                    onChange: this.removeB2BVasesButtonClicked.bind(this),
                    changeLabel: "Usu\u0144"
                });

                var additionalContent = /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col--auto"
                }, mockVasPackagesB2BDetailsComponent), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col--auto"
                }, vasPackagesB2BChangeComponent), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col--auto"
                }, vasPackagesB2BRemoveComponent));

                return _objectSpread({}, this.props.entry.vasPackagesB2BFixProduct, {
                    additionalContent: additionalContent
                });
            }
        }, {
            key: "isDeviceChangeable",
            value: function isDeviceChangeable(availableDevices, mandatoryProducts, product) {
                var devicesWithSameType = availableDevices && (0, _DeviceUtils.findDeviceByType)(availableDevices, product.deviceType);
                return devicesWithSameType && devicesWithSameType.filter(function(d) {
                    return !_lodash.default.includes(mandatoryProducts, d.id);
                }).length > 0;
            }
        }, {
            key: "render",
            value: function render() {
                //TODO: Manage most of it (or all of it) on backend side
                var mainEntries = [];
                this.props.entry.broadbandFixProduct && mainEntries.push(this.props.entry.broadbandFixProduct);
                this.props.entry.tvFixProduct && mainEntries.push(this.prepareTvEntry());
                this.props.entry.voipFixProduct && mainEntries.push(this.prepareVoipEntry());
                this.props.entry.vasPackagesB2BFixProduct && mainEntries.push(this.prepareVasPackagesB2BEntry());
                var availableDevices = this.props.configurables && this.props.configurables.length > 0 && this.props.configurables[0] && this.props.configurables[0].devices;
                var mandatoryProducts = this.props.configurables && this.props.configurables.length > 0 && this.props.configurables[0] && this.props.configurables[0].mandatoryProducts; //TODO: Backend should return the list with subentries and their names should come from classification attributes

                var subEntries = [];
                this.props.entry.modemFixProduct && subEntries.push(_objectSpread({}, this.props.entry.modemFixProduct, {
                    name: "Modem",
                    description: this.props.entry.modemFixProduct.name,
                    changeable: this.isDeviceChangeable(availableDevices, mandatoryProducts, this.props.entry.modemFixProduct),
                    removable: (0, _ConfigurableUtils.isRemovable)(this.props.configurables, mandatoryProducts, this.props.entry.modemFixProduct.code),
                    section: "NEO_VASES"
                }));
                this.props.entry.decoderFixProduct && subEntries.push(_objectSpread({}, this.props.entry.decoderFixProduct, {
                    name: "Dekoder",
                    description: this.props.entry.decoderFixProduct.name,
                    changeable: this.isDeviceChangeable(availableDevices, mandatoryProducts, this.props.entry.decoderFixProduct),
                    removable: (0, _ConfigurableUtils.isRemovable)(this.props.configurables, mandatoryProducts, this.props.entry.decoderFixProduct.code),
                    section: "TV_VASES"
                }));
                var descriptions = {
                    deleteLabel: this.props.sectionConf.deleteEntryLabelMainItem,
                    changeLabel: this.props.sectionConf.changeEntryLabel,
                    detailsLabel: this.props.sectionConf.detailsLabel,
                    changeDeviceLabel: this.props.descriptions.changeDevice,
                    forFreeLabel: this.props.descriptions.deviceFreeWithinProposition ? this.props.descriptions.deviceFreeWithinProposition : "<div>Urządzenie bezpłatne</div><div>w ramach oferty</div>",
                    serviceFreeLabel: this.props.descriptions.serviceFreeWithinProposition ? this.props.descriptions.serviceFreeWithinProposition : "<div>Bezpłatne w cenie</div><div>pakietu</div>"
                };
                return /*#__PURE__*/ _react.default.createElement(_CommonPropositionEntry.default, {
                    mainEntries: mainEntries,
                    subEntries: subEntries,
                    offerPrice: this.props.entry.priceForMainFixProducts,
                    loyaltyLength: this.props.entry.loyaltyLength,
                    bundleNo: this.props.entry.bundleNo,
                    entryNo: this.props.entry.entryNo,
                    onRemove: this.props.openRemovePopup,
                    onDetails: this.onDetailsClicked,
                    onChange: this.props.onVasChange,
                    descriptions: descriptions,
                    showNetPrices: this.props.showNetPrices,
                    onVasRemove: this.props.onVasRemove,
                    rejectionReason: this.props.entry.rejectionReason
                });
            }
        }]);
        return FixMainProductComponent;
    }(_react.Component);

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            openVoipModal: function openVoipModal() {
                return dispatch((0, _voip.voipSelection)(true));
            },
            showTvModal: function showTvModal() {
                return dispatch((0, _cart.changeTvModalVisibility)(true));
            },
            showFixTvFilteredModal: function showFixTvFilteredModal() {
                return dispatch((0, _cart.changeFixTvFilteredModalVisibility)(true));
            },
            showB2BVasesModal: function showB2BVasesModal() {
                return dispatch((0, _cart.changeB2BVasesModalVisibility)(true));
            }
        };
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            voipModalComponentIsMounted: (0, _root.voipModalComponentIsMounted)(state)
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(FixMainProductComponent);

    _exports.default = _default;
});
//# sourceMappingURL=FixMainProductComponent.js.map