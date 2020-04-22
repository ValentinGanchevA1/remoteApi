define(["exports", "react", "react-redux", "eshop/flux/utils/OraModalService", "./MultiCartRemovePopup", "eshop/modules/cart/actions/cart", "./productEntries/ServiceEntryComponent", "./productEntries/TerminalEntriesListComponent", "./productModals/BuyMoreProductsComponent", "../../../selectors", "eshop/modules/cart/components/entriesList/mobile/SimCartIndexHeader"], function(_exports, _react, _reactRedux, _OraModalService, _MultiCartRemovePopup, _cart, _ServiceEntryComponent, _TerminalEntriesListComponent, _BuyMoreProductsComponent, _selectors, _SimCartIndexHeader) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _OraModalService = babelHelpers.interopRequireDefault(_OraModalService);
    _MultiCartRemovePopup = babelHelpers.interopRequireDefault(_MultiCartRemovePopup);
    _ServiceEntryComponent = babelHelpers.interopRequireDefault(_ServiceEntryComponent);
    _TerminalEntriesListComponent = babelHelpers.interopRequireDefault(_TerminalEntriesListComponent);
    _BuyMoreProductsComponent = babelHelpers.interopRequireDefault(_BuyMoreProductsComponent);
    _SimCartIndexHeader = babelHelpers.interopRequireDefault(_SimCartIndexHeader);

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

    var CartEntryPreviewComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(CartEntryPreviewComponent, _Component);

        var _super = _createSuper(CartEntryPreviewComponent);

        function CartEntryPreviewComponent(props) {
            var _this;

            babelHelpers.classCallCheck(this, CartEntryPreviewComponent);
            _this = _super.call(this, props);
            _this.addButtonClicked = _this.addButtonClicked.bind(babelHelpers.assertThisInitialized(_this));
            return _this;
        }

        babelHelpers.createClass(CartEntryPreviewComponent, [{
            key: "openRemovePopup",
            value: function openRemovePopup(entry) {
                if (this.props.sapReservation !== '') {
                    this.props.showErrorMessage(this.props.sapErrorMessage);
                } else {
                    _OraModalService.default.open('remove-from-cart-modal-' + entry.bundleNo, {
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
                    return /*#__PURE__*/ _react.default.createElement(_MultiCartRemovePopup.default, babelHelpers.extends({}, _this2.props, _this2.getRemoveModalTexts('SERVICE'), {
                        id: 'remove-from-cart-modal-' + entry.bundleNo,
                        bundleNo: entry.bundleNo,
                        onClickRemove: _this2.props.removeFromCart.bind(_this2, null, entry.bundleNo),
                        textRepresentation: entry.planName
                    }));
                });
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.registerRemovePopup(this.props.entry);
            }
        }, {
            key: "getRemoveModalTexts",
            value: function getRemoveModalTexts(type) {
                switch (type) {
                    case 'SERVICE':
                        return {
                            title: this.props.sectionConf.deleteEntryPopupTitle,
                                content: this.props.sectionConf.deleteEntryPopupContent,
                                decline: this.props.sectionConf.declineDeleteEntryPopupButtonLabel,
                                confirm: this.props.sectionConf.confirmDeleteEntryPopupButtonLabel
                        };

                    case 'TERMINAL':
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
                    window.location = "/sklep?serviceplan=" + this.props.baseProductId;
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
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row u-padding-top "
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-8"
                }, /*#__PURE__*/ _react.default.createElement(_SimCartIndexHeader.default, {
                    simIndex: idx
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-2 u-text-right u-font-small u-padding-right-l u-small-hide"
                }, /*#__PURE__*/ _react.default.createElement("span", null, "Op\u0142aty jednorazowe")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-2  u-text-right u-font-small u-padding-right-l u-small-hide"
                }, /*#__PURE__*/ _react.default.createElement("span", null, "Op\u0142aty miesi\u0119czne ", !this.props.isB2B && /*#__PURE__*/ _react.default.createElement("span", null, /*#__PURE__*/ _react.default.createElement("br", null), "z rabatami")))), productSections && productSections.map(function(section, index) {
                    switch (section.entryType) {
                        case "SERVICE": {
                            var buyMoreLabel = _this3.props.entry ? section.buyMoreLabel : null;
                            var sectionTitle = _this3.props.entry ? section.sectionTitle : null;
                            var terminalSection = productSections.find(function(element) {
                                return element.entryType === "TERMINAL";
                            });
                            var buyMoreTerminalsLabel = !!terminalSection && (!_this3.props.entry.terminals || terminalSection.limitForBuyMoreButton) >= _this3.props.entry.terminals.length ? terminalSection.buyMoreLabel : null; //voiceEntryTerminalSection configuration

                            var shallShowTerminalsSection = terminalSection && _this3.props.entry.terminals && _this3.props.entry.terminals.length > 0;
                            var shallShowEuroSetsSection = terminalSection && _this3.props.entry.euroSets && _this3.props.entry.euroSets.length > 0;
                            return /*#__PURE__*/ _react.default.createElement(ProductSectionWrapper, {
                                key: "productSectionWrapper_" + index,
                                entry: _this3.props.entry,
                                sectionTitle: sectionTitle
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
                                bottomBorder: buyMoreTerminalsLabel ? false : true,
                                editable: false,
                                processName: processName(_this3.props.entry)
                            }), (shallShowTerminalsSection || shallShowEuroSetsSection) && /*#__PURE__*/ _react.default.createElement(_TerminalEntriesListComponent.default, {
                                idx: idx,
                                key: "terminal" + _this3.props.entry.bundleCode + "_bundleNo_" + _this3.props.entry.bundleNo,
                                entries: shallShowEuroSetsSection ? _this3.props.entry.euroSets : _this3.props.entry.terminals,
                                detailsHeader: section.detailsLabel,
                                removeModalTexts: _this3.getRemoveModalTexts(section.entryType),
                                cartBundle: "" + _this3.props.entry.bundleNo,
                                bundle: _this3.props.entry.productCode,
                                propositionId: _this3.props.entry.bundleCode,
                                sapReservation: _this3.props.sapReservation,
                                sapErrorMessage: _this3.props.sapErrorMessage,
                                editable: false
                            }));
                        }

                        case "GADGET": {
                            var _buyMoreLabel = !_this3.props.entry.gadgets || section.limitForBuyMoreButton >= _this3.props.entry.gadgets.length ? section.buyMoreLabel : null;

                            var _sectionTitle = _this3.props.entry.gadgets && _this3.props.entry.gadgets.length ? section.sectionTitle : null;

                            return /*#__PURE__*/ _react.default.createElement(ProductSectionWrapper, {
                                key: "productSectionWrapper_" + index,
                                className: "u-box-shadow",
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

                        default: {
                            console.log("MobileComponent: Unsupported product section type:", section.entryType);
                            return null;
                        }
                    }
                }));
            }
        }]);
        return CartEntryPreviewComponent;
    }(_react.Component);

    var processName = function processName(entry) {
        switch (entry.processType) {
            case 'RETENTION':
                return 'Przedłużam umowę (' + entry.msisdn + ')';

            case 'ACTIVATION':
                return 'Nowy numer';

            case 'MNP':
            case 'MNP_TWOSTEP':
                return 'Przenoszę numer (' + entry.mnpNumber + ')';

            case 'MIGRATION_PRE_POST':
                return 'Migracja (' + entry.msisdn + ')';

            case 'MIGRATION_NJU_POST_TO_POST':
            case 'MIGRATION_NJU_PRE_TO_POST':
                return 'Przenoszę numer z NJU (' + entry.mnpNumber + ')';

            default:
                return '';
        }
    };

    var ProductSectionWrapper = function ProductSectionWrapper(props) {
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "g-white1-bg " + (props.className ? " " + props.className : "")
        }, props.sectionTitle && /*#__PURE__*/ _react.default.createElement("h3", {
            className: "h3 u-small-hide u-padding-all-l u-no-spacing"
        }, props.sectionTitle), props.children);
    };

    var getTooltipValues = function getTooltipValues(desc) {
        return {
            notConvergent: desc['tooltip.priceDiscount'] || "def: Kwota abonamentu uwzględnia rabat za zgodę na e-fakturę i terminowe płatności – 5 zł oraz zgodę marketingową – 5 zł.",
            convergent: desc['tooltip.convergentPriceDiscount'] || "Missing business CMS configuration for 'tooltip.convergentPriceDiscount'.",
            mnpPriceInfo: desc['tooltip.mnpPriceInfo'] || "Missing business CMS configuration for 'tooltip.mnpPriceInfo'.",
            voucherDiscountInfo: desc['tooltip.voucherDiscountInfo'] || "opłata abonamentowa uwzględnia rabat za wykorzystany kupon."
        };
    };

    var mapStateToProps = function mapStateToProps() {
        var getBaseProductId = (0, _selectors.getBaseProductIdForBundle)();
        return function(state, props) {
            return {
                baseProductId: getBaseProductId(state, props.entry.bundleNo)
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

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CartEntryPreviewComponent);

    _exports.default = _default;
});
//# sourceMappingURL=CartEntryPreviewComponent.js.map