define(["exports", "react", "react-redux", "lodash", "../../../../actions/resources", "./../../SectionEntryTypeEnum", "./../../utils/CartUtils", "../../../../enum/ProcessType", "eshop/modules/fix/selectors/root", "../../shared/CommonPropositionEntry", "../../../../../checkout/constants/CartEntryTypeEnum", "../../../../analyzer/DeviceUtils", "../../../../../magnum2/components/OfferPropositionList/OfferProposition/OfferPropositionDetails", "eshop/flux/utils/OraModalService", "eshop/modules/cart/components/CartDetailsModal", "../../../../../fix/actions/voip", "../../../../selectors", "../../../../../magnum2/selectors", "../../utils/ConfigurableUtils"], function(_exports, _react, _reactRedux, _lodash, _resources, _SectionEntryTypeEnum, _CartUtils, _ProcessType, _root, _CommonPropositionEntry, _CartEntryTypeEnum, _DeviceUtils, _OfferPropositionDetails, _OraModalService, _CartDetailsModal, _voip, _selectors, _selectors2, _ConfigurableUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _lodash = babelHelpers.interopRequireDefault(_lodash);
    _SectionEntryTypeEnum = babelHelpers.interopRequireDefault(_SectionEntryTypeEnum);
    _ProcessType = babelHelpers.interopRequireDefault(_ProcessType);
    _CommonPropositionEntry = babelHelpers.interopRequireDefault(_CommonPropositionEntry);
    _CartEntryTypeEnum = babelHelpers.interopRequireDefault(_CartEntryTypeEnum);
    _OfferPropositionDetails = babelHelpers.interopRequireDefault(_OfferPropositionDetails);
    _OraModalService = babelHelpers.interopRequireDefault(_OraModalService);
    _CartDetailsModal = babelHelpers.interopRequireDefault(_CartDetailsModal);

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

    var ConvergentPropositionEntry = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(ConvergentPropositionEntry, _Component);

        var _super = _createSuper(ConvergentPropositionEntry);

        function ConvergentPropositionEntry(props) {
            var _this;

            babelHelpers.classCallCheck(this, ConvergentPropositionEntry);
            _this = _super.call(this, props);
            _this.handleShowModalVoip = _this.handleShowModalVoip.bind(babelHelpers.assertThisInitialized(_this));
            _this.handleShowModalMobileVoice = _this.handleShowModalMobileVoice.bind(babelHelpers.assertThisInitialized(_this));
            _this.getProductCustomData = _this.getProductCustomData.bind(babelHelpers.assertThisInitialized(_this));
            _this.onDetailsClicked = _this.onDetailsClicked.bind(babelHelpers.assertThisInitialized(_this));
            _this.name = _this.props.entry.entries.map(function(e) {
                return e.bundleNo;
            }).join('-');
            return _this;
        }

        babelHelpers.createClass(ConvergentPropositionEntry, [{
            key: "componentWillMount",
            value: function componentWillMount() {
                var _this2 = this;

                var details = [{
                    "key": "brak",
                    "value": "danych"
                }];

                try {
                    details = JSON.parse(this.props.entry.details);
                } catch (err) {
                    console.log("## details on cart parsing error##");
                }

                _OraModalService.default.add(function(data) {
                    return /*#__PURE__*/ _react.default.createElement(_CartDetailsModal.default, {
                        id: "offer_proposition_details_" + _this2.props.entry.propositionId,
                        details: details,
                        proposition: _this2.props.entry
                    });
                });
            }
        }, {
            key: "handleShowModalVoip",
            value: function handleShowModalVoip(e) {
                e.preventDefault();
                this.props.openVoipModal();
            }
        }, {
            key: "handleShowModalMobileVoice",
            value: function handleShowModalMobileVoice(e, bundleNo) {
                e.preventDefault();
                this.props.openMobileVoiceModal(bundleNo);
            }
        }, {
            key: "getProductCustomData",
            value: function getProductCustomData(entryType, entry) {
                var _this3 = this;

                switch (entryType) {
                    case _SectionEntryTypeEnum.default.VOIP: {
                        var voipNumber = this.props.selectedVoipNumber !== "" ? this.props.selectedVoipNumber : entry.voipFixProduct.phoneNumber;
                        return /*#__PURE__*/ _react.default.createElement("div", {
                            key: entryType
                        }, this.props.descriptions.number, "\xA0", /*#__PURE__*/ _react.default.createElement("span", {
                            className: "u-font-bold"
                        }, (0, _CartUtils.transformVoip)(voipNumber)), this.props.voipModalComponentIsMounted && /*#__PURE__*/ _react.default.createElement("a", {
                            href: "#",
                            onClick: this.handleShowModalVoip,
                            className: "u-spacing-left"
                        }, this.props.sectionConf.changeEntryLabel));
                    }

                    case _SectionEntryTypeEnum.default.MOBILE_VOICE:
                    case _SectionEntryTypeEnum.default.MOBILE_DATA: {
                        var isActivation = entry.processType === _ProcessType.default.ACTIVATION;
                        var isMnp = entry.processType === _ProcessType.default.MNP || entry.processType === _ProcessType.default.MNP_TWOSTEP;
                        var msisdn = isActivation ? entry.msisdn : entry.msisdnVerificationData.msisdn;
                        return /*#__PURE__*/ _react.default.createElement("div", {
                            key: entryType
                        }, this.props.descriptions.simCard, " ", entry.details, ", ", isMnp ? this.props.descriptions.mnpNumber : this.props.descriptions.number, "\xA0", /*#__PURE__*/ _react.default.createElement("span", {
                            className: "u-font-bold"
                        }, msisdn && (0, _CartUtils.transformMsisdn)(msisdn)), /*#__PURE__*/ _react.default.createElement("a", {
                            href: "#",
                            onClick: function onClick(e) {
                                return _this3.handleShowModalMobileVoice(e, entry.bundleNo);
                            },
                            className: "u-spacing-left"
                        }, this.props.sectionConf.changeEntryLabel));
                    }

                    default: {
                        console.log("ConvergentComponent: Unsupported product section type: " + entryType);
                        return null;
                    }
                }
            }
        }, {
            key: "onDetailsClicked",
            value: function onDetailsClicked() {
                _OraModalService.default.open("productDetails-" + this.name);
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
            key: "findBundleNoByProductCode",
            value: function findBundleNoByProductCode(entry, productCode) {
                return entry.entries.find(function(entry) {
                    return entry.terminals.find(function(dev) {
                        return dev.productCode === productCode;
                    }) || entry.vases.find(function(vas) {
                        return vas.productCode === productCode;
                    });
                }).bundleNo;
            }
        }, {
            key: "findSectionByType",
            value: function findSectionByType(sectionConf, type) {
                var sections = this.props.sectionConf && this.props.sectionConf.productSections.filter(function(productSection) {
                    return productSection.entryType === type;
                });
                return sections && sections[0] || null;
            }
        }, {
            key: "populateDetailsModal",
            value: function populateDetailsModal(mainEntries, subEntries) {
                var proposition = {};
                mainEntries.map(function(product) {
                    if ("BROADBAND" === product.subEntryType && product.terminals && product.terminals.length > 0) {
                        proposition.broadband = {};
                        proposition.broadband.name = product.name;
                        proposition.broadband.devices = [];
                        proposition.broadband.details = product.descriptionShort;
                        proposition.details = product.description;
                        var device = {};
                        device.imgUrl = product.terminals[0].imageUrl;
                        device.title = product.terminals[0].name;
                        device.longDescription = product.terminals[0].details;
                        subEntries.filter(function(subEntry) {
                            return subEntry.code == product.terminals[0].productCode;
                        }).map(function(subEntry) {
                            device.title = subEntry.description;
                            device.deviceType = subEntry.deviceType;
                        });
                        proposition.broadband.devices.push(device);
                    } else if ("TV" === product.subEntryType && product.terminals && product.terminals.length > 0) {
                        proposition.tvProduct = {};
                        proposition.tvPackages = [];
                        proposition.tvProduct.name = product.name;
                        proposition.tvProduct.devices = [];
                        var subEntry = subEntries.filter(function(entry) {
                            return entry.deviceType == "STB";
                        })[0];
                        product.terminals.filter(function(terminal) {
                            return terminal.productCode == subEntry.code;
                        }).map(function(terminal) {
                            proposition.tvProduct.devices.push({
                                imgUrl: terminal.imageUrl,
                                longDescription: terminal.details,
                                title: subEntry.description,
                                deviceType: subEntry.deviceType
                            });
                        });
                    } else if ("VOIP" === product.subEntryType && product.voipFixProduct) {
                        proposition.voip = {};
                        proposition.voip.name = product.voipFixProduct.name;
                        proposition.voip.details = product.voipFixProduct.description;
                        proposition.voip.devices = [];
                    } else if ("MOBILE_VOICE" === product.subEntryType) {
                        proposition.voice = {};
                        proposition.voice.name = product.name;
                        proposition.voice.details = product.description;
                        proposition.voice.devices = [];
                    } else if ("MOBILE_DATA" === product.subEntryType) {
                        proposition.data = {};
                        proposition.data.name = product.name;
                        proposition.data.devices = [];
                        proposition.data.details = "<span><b>" + product.name + "</b> " + product.description + "</span>";
                    }
                });
                return proposition;
            }
        }, {
            key: "render",
            value: function render() {
                var _this4 = this;

                //TODO: Manage most of it (or all of it) on backend side
                var mainEntries = [];
                var vasSection = this.findSectionByType(this.props.sectionConf, "VAS");
                this.props.sectionConf && this.props.sectionConf.productSections.forEach(function(productSection) {
                    var subEntry = _this4.props.entry.entries.find(function(entry) {
                        return productSection.entryType === entry.subEntryType;
                    });

                    subEntry && mainEntries.push(_objectSpread({}, subEntry, {
                        code: subEntry.productCode,
                        thumbnailIcon: productSection.icon,
                        name: subEntry.planName,
                        additionalContent: _this4.getProductCustomData(subEntry.subEntryType, subEntry)
                    }));
                });
                var fixConfigurables = this.props.configurables.find(function(configurablesEntry) {
                    return configurablesEntry.factoryName === _CartEntryTypeEnum.default.FIX;
                });
                var availableDevices = fixConfigurables && fixConfigurables.devices;
                var mandatoryProducts = fixConfigurables && fixConfigurables.mandatoryProducts; //TODO: Backend should return the list with subentries and their names should come from classification attributes

                var subEntries = [];
                this.props.entry.modemFixProduct && subEntries.push(_objectSpread({}, this.props.entry.modemFixProduct, {
                    name: "Modem",
                    description: this.props.entry.modemFixProduct.name,
                    changeable: this.isDeviceChangeable(availableDevices, mandatoryProducts, this.props.entry.modemFixProduct),
                    removable: (0, _ConfigurableUtils.isRemovable)(fixConfigurables, mandatoryProducts, this.props.entry.modemFixProduct.code),
                    section: "NEO_VASES"
                }));
                this.props.entry.decoderFixProduct && subEntries.push(_objectSpread({}, this.props.entry.decoderFixProduct, {
                    name: "Dekoder",
                    description: this.props.entry.decoderFixProduct.name,
                    changeable: this.isDeviceChangeable(availableDevices, mandatoryProducts, this.props.entry.decoderFixProduct),
                    removable: (0, _ConfigurableUtils.isRemovable)(fixConfigurables, mandatoryProducts, this.props.entry.decoderFixProduct.code),
                    section: "TV_VASES"
                }));
                var offerPrice = {
                    monthlyCosts: this.props.entry.planTotalMonthlyPrices,
                    oneTimeCost: this.props.entry.planTotalPayNowPrice,
                    tooltip: this.props.descriptions.convergentPropositionLegal
                };
                var descriptions = {
                    deleteLabel: this.props.sectionConf.deleteEntryLabelMainItem || "Usuń",
                    changeLabel: this.props.sectionConf.changeEntryLabel,
                    detailsLabel: this.props.sectionConf.detailsLabel,
                    changeDeviceLabel: this.props.descriptions.changeDevice,
                    forFreeLabel: this.props.descriptions.deviceFreeWithinProposition ? this.props.descriptions.deviceFreeWithinProposition : "<div>Urządzenie bezpłatne</div><div>w ramach oferty</div>",
                    serviceFreeLabel: this.props.descriptions.serviceFreeWithinProposition ? this.props.descriptions.serviceFreeWithinProposition : "<div>Bezpłatne w cenie</div><div>pakietu</div>"
                };
                var detailsModal = this.populateDetailsModal(mainEntries, subEntries);

                var knowledgeBaseDetailsComponent = /*#__PURE__*/ _react.default.createElement(_OfferPropositionDetails.default, {
                    linkName: this.props.sectionConf.detailsLabel,
                    proposition: detailsModal,
                    transactions: this.props.transactions
                });

                return /*#__PURE__*/ _react.default.createElement(_CommonPropositionEntry.default, {
                    mainEntries: mainEntries,
                    subEntries: subEntries,
                    offerPrice: offerPrice,
                    loyaltyLength: this.props.entry.loyaltyLength,
                    bundleNo: this.props.entry.bundleNo,
                    entryNo: this.props.entry.entryNo,
                    onRemove: this.props.openRemovePopup,
                    onDetails: this.onDetailsClicked,
                    onChange: function onChange(args) {
                        return _this4.props.openVasModal(_objectSpread({
                            section: vasSection
                        }, args));
                    },
                    descriptions: descriptions,
                    overrideDefaultDetailsPartBy: knowledgeBaseDetailsComponent,
                    rejectionReason: this.props.entry.rejectionReason,
                    showNetPrices: this.props.showNetPrices,
                    onVasRemove: function onVasRemove(productCode) {
                        return _this4.props.onRemoveProduct(productCode, _this4.findBundleNoByProductCode(_this4.props.entry, productCode));
                    },
                    showButtons: true
                });
            }
        }]);
        return ConvergentPropositionEntry;
    }(_react.Component);

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            openVoipModal: function openVoipModal() {
                return dispatch((0, _voip.voipSelection)(true));
            },
            openMobileVoiceModal: function openMobileVoiceModal(bundleNo) {
                return dispatch((0, _resources.resourceModalOpen)(bundleNo));
            }
        };
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            selectedVoipNumber: (0, _selectors.getSelectedVoipNumber)(state),
            voipModalComponentIsMounted: (0, _root.voipModalComponentIsMounted)(state),
            transactions: (0, _selectors2.getTransactions)(state)
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ConvergentPropositionEntry);

    _exports.default = _default;
});
//# sourceMappingURL=ConvergentPropositionEntry.js.map