define(["exports", "react", "../shared/MultiCartExpandingSectionComponent", "./MultiCartMobileCollapsedItemComponent", "./MultiCartAssignmentInstalmentComponent", "./MultiCartAssignmentDeathComponent", "react-redux", "eshop/flux/utils/OraModalService", "./MultiCartRemovePopup", "eshop/modules/cart/actions/cart", "./productEntries/ServiceEntryComponent", "./productEntries/TerminalEntriesListComponent", "./productEntries/VasEntriesListComponent", "./productModals/VasBuyMoreComponent", "./productModals/SelectRetentionBonusComponent", "./productModals/BuyMoreProductsComponent", "../../../selectors", "eshop/modules/configurator/selectors/filters", "eshop/modules/cart/selectors"], function(_exports, _react, _MultiCartExpandingSectionComponent, _MultiCartMobileCollapsedItemComponent, _MultiCartAssignmentInstalmentComponent, _MultiCartAssignmentDeathComponent, _reactRedux, _OraModalService, _MultiCartRemovePopup, _cart, _ServiceEntryComponent, _TerminalEntriesListComponent, _VasEntriesListComponent, _VasBuyMoreComponent, _SelectRetentionBonusComponent, _BuyMoreProductsComponent, _selectors, _filters, _selectors2) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _MultiCartExpandingSectionComponent = babelHelpers.interopRequireDefault(_MultiCartExpandingSectionComponent);
    _MultiCartMobileCollapsedItemComponent = babelHelpers.interopRequireDefault(_MultiCartMobileCollapsedItemComponent);
    _MultiCartAssignmentInstalmentComponent = babelHelpers.interopRequireDefault(_MultiCartAssignmentInstalmentComponent);
    _MultiCartAssignmentDeathComponent = babelHelpers.interopRequireDefault(_MultiCartAssignmentDeathComponent);
    _OraModalService = babelHelpers.interopRequireDefault(_OraModalService);
    _MultiCartRemovePopup = babelHelpers.interopRequireDefault(_MultiCartRemovePopup);
    _ServiceEntryComponent = babelHelpers.interopRequireDefault(_ServiceEntryComponent);
    _TerminalEntriesListComponent = babelHelpers.interopRequireDefault(_TerminalEntriesListComponent);
    _VasEntriesListComponent = babelHelpers.interopRequireDefault(_VasEntriesListComponent);
    _VasBuyMoreComponent = babelHelpers.interopRequireDefault(_VasBuyMoreComponent);
    _SelectRetentionBonusComponent = babelHelpers.interopRequireDefault(_SelectRetentionBonusComponent);
    _BuyMoreProductsComponent = babelHelpers.interopRequireDefault(_BuyMoreProductsComponent);

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

    var MobileComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MobileComponent, _Component);

        var _super = _createSuper(MobileComponent);

        function MobileComponent(props) {
            var _this;

            babelHelpers.classCallCheck(this, MobileComponent);
            _this = _super.call(this, props);
            _this.addButtonClicked = _this.addButtonClicked.bind(babelHelpers.assertThisInitialized(_this));
            return _this;
        }

        babelHelpers.createClass(MobileComponent, [{
            key: "openRemovePopup",
            value: function openRemovePopup(entry) {
                if (this.props.sapReservation !== "") {
                    this.props.showErrorMessage(this.props.sapErrorMessage);
                } else {
                    _OraModalService.default.open("remove-from-cart-modal-" + entry.bundleNo, {
                        bundleNo: entry.bundleNo,
                        offerIndex: entry.bundleNo
                    });
                }
            }
        }, {
            key: "registerRemovePopup",
            value: function registerRemovePopup(entry) {
                var _this2 = this;

                _OraModalService.default.add(function(data) {
                    return /*#__PURE__*/ _react.default.createElement(_MultiCartRemovePopup.default, babelHelpers.extends({}, _this2.props, _this2.getRemoveModalTexts("SERVICE"), {
                        id: "remove-from-cart-modal-" + entry.bundleNo,
                        bundleNo: entry.bundleNo,
                        onClickRemove: _this2.props.removeFromCart.bind(_this2, null, entry.bundleNo),
                        textRepresentation: entry.planName
                    }));
                });
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.registerRemovePopup(this.props.entry); //this.props.fetchMobileVases();
            }
        }, {
            key: "getRemoveModalTexts",
            value: function getRemoveModalTexts(type) {
                switch (type) {
                    case "SERVICE":
                        return {
                            title: this.props.sectionConf.deleteEntryPopupTitle,
                                content: this.props.sectionConf.deleteEntryPopupContent,
                                decline: this.props.sectionConf.declineDeleteEntryPopupButtonLabel,
                                confirm: this.props.sectionConf.confirmDeleteEntryPopupButtonLabel
                        };

                    case "TERMINAL":
                        return {
                            title: this.props.sectionConf.deleteTerminalPopupTitle,
                                content: this.props.sectionConf.deleteTerminalPopupContent,
                                decline: this.props.sectionConf.declineDeleteTerminalPopupButtonLabel,
                                confirm: this.props.sectionConf.confirmDeleteTerminalPopupButtonLabel
                        };
                }
            }
        }, {
            key: "addButtonClicked",
            value: function addButtonClicked() {
                console.log("Add button clicked");
                this.props.setFilters(this.props.entry.bundleNo);

                if (this.props.baseProductId) {
                    var returnLink = this.props.isB2B ? "/male-firmy/sklep" : "/sklep";
                    window.location = returnLink + "?serviceplan=" + this.props.baseProductId + "&propositionId=" + this.props.entry.bundleCode;
                }
            }
        }, {
            key: "render",
            value: function render() {
                var _this3 = this;

                var mainIcon = this.props.sectionConf ? this.props.sectionConf.icon : "sim";
                var title = this.props.sectionConf ? this.props.sectionConf.sectionTitle : "Usługa mobilna";
                var productSections = this.props.sectionConf.productSections;
                var idx = this.props.idx;
                var trigger = "ost-" + this.props.entry.bundleNo;
                return /*#__PURE__*/ _react.default.createElement(_MultiCartExpandingSectionComponent.default, {
                    title: title,
                    key: "expandingSection_" + idx,
                    entry: this.props.entry,
                    conf: this.props.sectionConf,
                    onRemoveClicked: this.openRemovePopup.bind(this, this.props.entry),
                    trigger: trigger,
                    isB2B: this.props.isB2B
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-full-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row u-small-padding-left u-small-padding-right"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-top u-padding"
                }, productSections && productSections.map(function(section, index) {
                    switch (section.entryType) {
                        case "SERVICE": {
                            var buyMoreLabel = _this3.props.entry ? section.buyMoreLabel : null;
                            var sectionTitle = _this3.props.entry ? section.sectionTitle : null;
                            var terminalSection = productSections.find(function(element) {
                                return element.entryType === "TERMINAL";
                            });
                            var buyMoreTerminalsLabel = !!terminalSection && (!_this3.props.entry.terminals || terminalSection.limitForBuyMoreButton) >= _this3.props.entry.terminals.length ? terminalSection.buyMoreLabel : null; //voiceEntryTerminalSection configuration

                            var terminalsSectionTitle = !!terminalSection && _this3.props.entry.terminals && _this3.props.entry.terminals.length ? terminalSection.sectionTitle : null;
                            var shallShowTerminalsSection = terminalSection && _this3.props.entry.terminals && _this3.props.entry.terminals.length > 0;
                            var shallShowEuroSetsSection = terminalSection && _this3.props.entry.euroSets && _this3.props.entry.euroSets.length > 0;
                            var shallShowAddTerminalToOffer = !shallShowTerminalsSection && !shallShowEuroSetsSection && !["ASSIGNMENT", "MNP_APPLICATION"].includes(_this3.props.entry.processType);
                            return /*#__PURE__*/ _react.default.createElement("div", {
                                key: "ServiceWrapper" + index
                            }, /*#__PURE__*/ _react.default.createElement(ProductSectionWrapper, {
                                key: "productSectionWrapper_" + index,
                                entry: _this3.props.entry,
                                sectionTitle: sectionTitle,
                                className: "u-box-shadow--s"
                            }, /*#__PURE__*/ _react.default.createElement(_ServiceEntryComponent.default, {
                                key: _this3.props.entry.bundleCode + "_bundleNo_" + _this3.props.entry.bundleNo,
                                idx: idx,
                                tooltipValues: getTooltipValues(_this3.props.descriptions),
                                mainIcon: mainIcon,
                                entry: _this3.props.entry,
                                detailsHeader: section.detailsLabel,
                                onRemoveClicked: _this3.openRemovePopup.bind(_this3, _this3.props.entry),
                                removeModalTexts: _this3.getRemoveModalTexts(section.entryType),
                                channel: _this3.props.channel,
                                bottomBorder: buyMoreTerminalsLabel ? false : true
                            }), (shallShowTerminalsSection || shallShowEuroSetsSection) && /*#__PURE__*/ _react.default.createElement(_TerminalEntriesListComponent.default, {
                                idx: idx,
                                entries: shallShowEuroSetsSection ? _this3.props.entry.euroSets : _this3.props.entry.terminals,
                                detailsHeader: section.detailsLabel,
                                removeModalTexts: _this3.getRemoveModalTexts(section.entryType),
                                cartBundle: "" + _this3.props.entry.bundleNo,
                                bundle: _this3.props.entry.productCode,
                                propositionId: _this3.props.entry.bundleCode,
                                sapReservation: _this3.props.sapReservation,
                                descriptions: _this3.props.descriptions,
                                lowerInstallmentsActive: _this3.props.lowerInstallmentsActive,
                                sapErrorMessage: _this3.props.sapErrorMessage
                            })), shallShowAddTerminalToOffer && /*#__PURE__*/ _react.default.createElement(ProductSectionWrapper, {
                                key: "childProductSectionWrapper_" + idx
                            }, /*#__PURE__*/ _react.default.createElement(_BuyMoreProductsComponent.default, {
                                idx: idx,
                                buyMoreLabel: buyMoreTerminalsLabel,
                                addButtonClicked: _this3.addButtonClicked,
                                link: _this3.props.baseProductId,
                                icon: terminalSection.icon,
                                entry: _this3.props.entry
                            })));
                        }

                        case "GADGET": {
                            var _buyMoreLabel = !_this3.props.entry.gadgets || section.limitForBuyMoreButton >= _this3.props.entry.gadgets.length ? section.buyMoreLabel : null;

                            var _sectionTitle = _this3.props.entry.gadgets && _this3.props.entry.gadgets.length ? section.sectionTitle : null;

                            return /*#__PURE__*/ _react.default.createElement(ProductSectionWrapper, {
                                key: "productSectionWrapper_" + index,
                                className: "u-box-shadow u-box-shadow\u2013s u-box-shadow-hover",
                                entry: _this3.props.entry,
                                sectionTitle: _sectionTitle
                            }, _buyMoreLabel && /*#__PURE__*/ _react.default.createElement(_BuyMoreProductsComponent.default, {
                                key: "GADGET_" + idx,
                                idx: idx,
                                buyMoreLabel: _buyMoreLabel,
                                icon: section.icon,
                                entry: _this3.props.entry
                            }));
                        }

                        case "VAS": {
                            var _buyMoreLabel2 = !_this3.props.entry.vases || section.limitForBuyMoreButton >= _this3.props.entry.vases.length ? section.buyMoreLabel : null;

                            var _sectionTitle2 = _this3.props.entry.vases.length && _this3.hasVasesInServices(_this3.props.entry.vases, _this3.props.entry.productCode) ? section.sectionTitle : null;

                            return /*#__PURE__*/ _react.default.createElement("div", {
                                key: "VasWrapper_" + index
                            }, /*#__PURE__*/ _react.default.createElement(ProductSectionWrapper, {
                                key: "productSectionWrapper_" + index,
                                entry: _this3.props.entry,
                                sectionTitle: _sectionTitle2,
                                className: "u-box-shadow--s"
                            }, /*#__PURE__*/ _react.default.createElement(_VasEntriesListComponent.default, {
                                key: "VAS_" + idx,
                                idx: idx,
                                entries: _this3.props.entry.vases,
                                detailsHeader: section.detailsLabel,
                                cartBundle: "" + _this3.props.entry.bundleNo,
                                bundle: _this3.props.entry.productCode,
                                propositionId: _this3.props.entry.bundleCode
                            }), /*#__PURE__*/ _react.default.createElement(_MultiCartAssignmentInstalmentComponent.default, _this3.props), /*#__PURE__*/ _react.default.createElement(_MultiCartAssignmentDeathComponent.default, _this3.props)), _buyMoreLabel2 && /*#__PURE__*/ _react.default.createElement(_VasBuyMoreComponent.default, {
                                idx: idx,
                                buyMoreLabel: _buyMoreLabel2,
                                icon: section.icon,
                                entry: _this3.props.entry
                            }));
                        }

                        case "RETENTIONBENEFITS": {
                            var _buyMoreLabel3 = !_this3.props.entry.vases || section.limitForBuyMoreButton >= _this3.props.entry.vases.length ? section.buyMoreLabel : null;

                            var _sectionTitle3 = _this3.props.entry.vases.length ? section.sectionTitle : null;

                            return /*#__PURE__*/ _react.default.createElement(_SelectRetentionBonusComponent.default, {
                                key: "RetentionBonusCmp_" + index,
                                idx: idx,
                                buyMoreLabel: _buyMoreLabel3,
                                index: index,
                                sectionTitle: _sectionTitle3,
                                icon: section.icon,
                                entry: _this3.props.entry,
                                cartBundle: "" + _this3.props.entry.bundleNo,
                                bundle: _this3.props.entry.productCode,
                                propositionId: _this3.props.entry.bundleCode
                            });
                        }

                        default: {
                            console.warn("MobileComponent: Unsupported product section type:", section.entryType);
                            return null;
                        }
                    }
                })))), /*#__PURE__*/ _react.default.createElement(_MultiCartMobileCollapsedItemComponent.default, {
                    key: "collapsed_" + idx,
                    icon: mainIcon,
                    entry: this.props.entry,
                    trigger: trigger
                }));
            }
        }, {
            key: "getVasesForBundle",
            value: function getVasesForBundle(productCode) {
                return this.props.vases && this.props.vases.find(function(vas) {
                    return vas.bundle === productCode;
                });
            }
        }, {
            key: "hasVasesInServices",
            value: function hasVasesInServices(entryVases, productCode) {
                var vases = this.getVasesForBundle(productCode);

                if (!vases || !vases.services) {
                    return false;
                }

                var services = vases.services;
                var inServices = [];
                services.forEach(function(service) {
                    entryVases.forEach(function(vas) {
                        if (service.id === vas.productCode) inServices.push(vas);
                    });
                });
                return !!inServices.length;
            }
        }]);
        return MobileComponent;
    }(_react.Component);

    var ProductSectionWrapper = function ProductSectionWrapper(props) {
        var icon = props.icon ? props.icon.split("_").join("-") : null;
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "g-white1-bg u-margin-top-l" + (props.className ? " " + props.className : "")
        }, props.sectionTitle && /*#__PURE__*/ _react.default.createElement("h3", {
            className: "h3 u-small-hide u-padding-all-l u-no-spacing"
        }, props.sectionTitle), props.children);
    };

    var getTooltipValues = function getTooltipValues(desc) {
        return {
            notConvergent: desc["tooltip.priceDiscount"] || "def: Kwota abonamentu uwzględnia rabat za zgodę na e-fakturę i terminowe płatności – 5 zł oraz zgodę marketingową – 5 zł.",
            convergent: desc["tooltip.convergentPriceDiscount"] || "Missing business CMS configuration for 'tooltip.convergentPriceDiscount'.",
            mnpPriceInfo: desc["tooltip.mnpPriceInfo"] || "Missing business CMS configuration for 'tooltip.mnpPriceInfo'.",
            voucherDiscountInfo: desc["tooltip.voucherDiscountInfo"] || "opłata abonamentowa uwzględnia rabat za wykorzystany kupon."
        };
    };

    var mapStateToProps = function mapStateToProps() {
        var getBaseProductId = (0, _selectors.getBaseProductIdForBundle)();
        return function(state, props) {
            return {
                vases: (0, _selectors2.getMobileVases)(state),
                baseProductId: getBaseProductId(state, props.entry.bundleNo),
                isB2B: (0, _filters.getMarketContext)(state) === "B2B"
            };
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            removeFromCart: function removeFromCart(data, id) {
                return dispatch((0, _cart.removeFromCart)(data, id));
            },
            showErrorMessage: function showErrorMessage(message) {
                return dispatch((0, _cart.showErrorMessage)(message));
            },
            setFilters: function setFilters(bundleNo) {
                return dispatch((0, _cart.setFilters)(bundleNo));
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MobileComponent);

    _exports.default = _default;
});
//# sourceMappingURL=MobileComponent.js.map