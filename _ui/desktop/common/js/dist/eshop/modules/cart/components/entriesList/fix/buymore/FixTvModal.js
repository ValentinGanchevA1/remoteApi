define(["exports", "react", "react-redux", "prop-types", "eshop/modules/core/components/ui/Modal", "eshop/modules/cart/analyzer/CartInfoUtils", "./Utils", "./modalFragments/ModalFragments", "../../shared/MessageBox", "eshop/modules/cart/components/entriesList/convergent/vasModal/CloseAndSaveVasesButtons", "eshop/modules/cart/selectors", "../../../../../fix/components/SecondaryChoiceTvPackagesComponent", "../../../../../fix/components/LoyaltyDurationChoiceTvPackagesComponent", "../../../../../fix/enum/TvPackagesChoiceFilter", "../../../../actions/filters", "../../../../selectors"], function(_exports, _react, _reactRedux, _propTypes, _Modal, _CartInfoUtils, _Utils, _ModalFragments, _MessageBox, _CloseAndSaveVasesButtons, _selectors, _SecondaryChoiceTvPackagesComponent, _LoyaltyDurationChoiceTvPackagesComponent, _TvPackagesChoiceFilter, _filters, _selectors2) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _Modal = babelHelpers.interopRequireDefault(_Modal);
    _SecondaryChoiceTvPackagesComponent = babelHelpers.interopRequireDefault(_SecondaryChoiceTvPackagesComponent);
    _LoyaltyDurationChoiceTvPackagesComponent = babelHelpers.interopRequireDefault(_LoyaltyDurationChoiceTvPackagesComponent);
    _TvPackagesChoiceFilter = babelHelpers.interopRequireDefault(_TvPackagesChoiceFilter);

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

    var FixTVModal = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(FixTVModal, _Component);

        var _super = _createSuper(FixTVModal);

        function FixTVModal(props) {
            var _this;

            babelHelpers.classCallCheck(this, FixTVModal);
            _this = _super.call(this, props);
            _this.state = {
                open: _this.props.open,
                popup: false,
                callback: null,
                event: null
            };
            return _this;
        }

        babelHelpers.createClass(FixTVModal, [{
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                this.setState({
                    open: nextProps.open,
                    popup: false,
                    callback: null,
                    event: null,
                    wasRendered: this.props.open || nextProps.open
                });
            }
        }, {
            key: "componentWillUpdate",
            value: function componentWillUpdate(nextProps, nextState) {
                if (nextProps.customFilters && nextProps.customFilters.loyaltyDuration === null && nextProps.shouldDisplayLoyaltyDurationChoice) {
                    this.props.selectLoyaltyDurationChoiceFilter(_TvPackagesChoiceFilter.default.TV_LOYALTY_DURATION_24);
                }
            }
        }, {
            key: "_onSaveWrapper",
            value: function _onSaveWrapper() {
                this.props.onClose();
                this.props.onSave();
            }
        }, {
            key: "_onClickInterceptor",
            value: function _onClickInterceptor(productCode, propositionId) {
                var _this2 = this;

                return function(event) {
                    _this2.setState({
                        popup: true,
                        callback: _this2.props.onClick(productCode, propositionId),
                        event: event
                    });
                };
            }
        }, {
            key: "_runInterceptedClick",
            value: function _runInterceptedClick() {
                this.state.callback(this.state.event);

                this._cancelInterceptedClick();
            }
        }, {
            key: "_cancelInterceptedClick",
            value: function _cancelInterceptedClick() {
                this.setState({
                    popup: false,
                    callback: null,
                    event: null
                });
            }
        }, {
            key: "showBaseOffer",
            value: function showBaseOffer(event) {
                event.preventDefault();

                if (this.props.shouldDisplayLoyaltyDurationChoice) {
                    this.props.selectLoyaltyDurationChoiceFilter(_TvPackagesChoiceFilter.default.TV_LOYALTY_DURATION_24);
                }

                this.props.selectTvPackagesChoiceFilter(_TvPackagesChoiceFilter.default.TV_DEFAULT_CHOICE_PRODUCT);
            }
        }, {
            key: "showSecondaryChoiceOffer",
            value: function showSecondaryChoiceOffer(event) {
                event.preventDefault();

                if (this.props.shouldDisplayLoyaltyDurationChoice) {
                    this.props.selectLoyaltyDurationChoiceFilter(_TvPackagesChoiceFilter.default.TV_LOYALTY_DURATION_24);
                }

                this.props.selectTvPackagesChoiceFilter(_TvPackagesChoiceFilter.default.TV_SECONDARY_CHOICE_PRODUCT);
            }
        }, {
            key: "renderFilters",
            value: function renderFilters() {
                return this.props.filtersVisible && /*#__PURE__*/ _react.default.createElement("div", null, !this.props.isWwwChannel && /*#__PURE__*/ _react.default.createElement(_SecondaryChoiceTvPackagesComponent.default, {
                    selectedSecondaryChoice: this.props.customFilters.secondaryChoice,
                    showBaseOffer: this.showBaseOffer.bind(this),
                    showSecondaryChoiceOffer: this.showSecondaryChoiceOffer.bind(this),
                    descriptions: this.props.filterDescriptions.secondaryChoice
                }), this.props.shouldDisplayLoyaltyDurationChoice && /*#__PURE__*/ _react.default.createElement(_LoyaltyDurationChoiceTvPackagesComponent.default, {
                    selectedLoyaltyDuration: this.props.customFilters.loyaltyDuration,
                    selectLoyaltyDurationChoiceFilter: this.props.selectLoyaltyDurationChoiceFilter,
                    descriptions: this.props.filterDescriptions.loyaltyDuration
                }));
            }
        }, {
            key: "render",
            value: function render() {
                var _this3 = this;

                //Render modal on demand, not always when it's on the page.
                if (!this.state.open && !this.state.wasRendered) {
                    return /*#__PURE__*/ _react.default.createElement(_Modal.default, {
                        open: this.state.open,
                        onClose: this.props.onClose,
                        size: "medium",
                        showClose: !this.state.popup
                    });
                }

                var vasesWithStatuses = this.props.services.map(function(vas) {
                    vas.selected = false; //TODO: make an enum for presentation types

                    vas.presentation = "visible";
                    return vas;
                });
                this.props.entries && Object.keys(this.props.entries).filter(function(productCode) {
                    return _this3.props.entries[productCode];
                }).map(function(productCode) {
                    return vasesWithStatuses.find(function(vas) {
                        return vas.id === productCode;
                    });
                }).filter(function(vas) {
                    return vas;
                }).forEach(function(vas) {
                    return vas.selected = true;
                });

                if (this.props.hidden) {
                    this.props.hidden.map(function(productCode) {
                        return vasesWithStatuses.find(function(vas) {
                            return vas.id === productCode;
                        });
                    }).filter(function(vas) {
                        return vas;
                    }).forEach(function(vas) {
                        return vas.presentation = "hidden";
                    });
                }

                return /*#__PURE__*/ _react.default.createElement(_Modal.default, {
                    open: this.state.open,
                    onClose: this.props.onClose,
                    size: "medium",
                    showClose: !this.state.popup
                }, this.renderFilters(), /*#__PURE__*/ _react.default.createElement(TvModalContents, {
                    channels: this.props.channels,
                    tvPackages: this.props.tvPackages,
                    productList: this.props.productList,
                    vasesWithStatuses: vasesWithStatuses,
                    migratedServices: this.props.migratedServices,
                    onClickWrapped: this.props.clickable ? this._onClickInterceptor.bind(this) : function() {},
                    onClick: this.props.clickable ? this.props.onClick : function() {},
                    onClickMigratedCheckBox: this.props.onClickMigratedCheckBox,
                    onSave: this._onSaveWrapper.bind(this),
                    saveVasesButtonText: this.props.saveVasesButtonText,
                    showNetPrices: this.props.showNetPrices,
                    includedInThePackageTitle: this.props.includedInThePackageTitle,
                    onClose: this.props.onClose
                }), this.state.popup && /*#__PURE__*/ _react.default.createElement(_MessageBox.Warning, {
                    onAccept: this._runInterceptedClick.bind(this),
                    onCancel: this._cancelInterceptedClick.bind(this),
                    modalTitle: this.props.subModalTitle,
                    modalContents: this.props.subModalContents,
                    onAcceptLabel: "Zmień pakiet TV",
                    showCancel: false
                }));
            }
        }]);
        return FixTVModal;
    }(_react.Component);

    FixTVModal.propTypes = {
        header: _propTypes.PropTypes.string,
        bundle: _propTypes.PropTypes.string,
        cartBundle: _propTypes.PropTypes.string,
        propositionId: _propTypes.PropTypes.string,
        open: _propTypes.PropTypes.bool,
        clickable: _propTypes.PropTypes.bool,
        saveVasesButtonText: _propTypes.PropTypes.string,
        includedInThePackageTitle: _propTypes.PropTypes.string,
        filtersVisible: _propTypes.PropTypes.bool
    };
    FixTVModal.defaultProps = {
        clickable: true,
        saveVasesButtonText: "Wybierz",
        includedInThePackageTitle: "W cenie pakietu",
        filtersVisible: false,
        filterDescriptions: {
            secondaryChoice: {
                content: "Jeśli klient nie jest zainteresowany ofertą standardową zaproponuj mu <strong>ofertę negocjowaną</strong>",
                baseOffer: "Oferta standardowa",
                discountOffer: "Oferta negocjowana"
            },
            loyaltyDuration: {
                content: "<strong>Pakiety Canal+</strong><br> Dostępne także z opcją na 12 miesięcy",
                loyaltyDuration12: "Umowa na 12 miesięcy",
                loyaltyDuration24: "Umowa na 24 miesiące"
            }
        }
    };

    var TvModalContents = function TvModalContents(props) {
        return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("h1", {
            className: "u-acc-hide"
        }, "Dobierz pakiety TV"), /*#__PURE__*/ _react.default.createElement("div", {
            className: "opl-multicheckout-services"
        }, /*#__PURE__*/ _react.default.createElement("ul", null, props.productList && props.productList.innerLists && props.productList.innerLists.map(function(section, index) {
            var type = section.productFilter;
            var products = (0, _CartInfoUtils.Filters)()[type](props.vasesWithStatuses);
            var productsOrder = section.productCodes ? section.productCodes : [];
            products.sort((0, _CartInfoUtils.compareByProductListAndPartnerAndMandatoryAndTitle)(productsOrder));
            var migratedProducts = [];

            if (props.migratedServices != null) {
                migratedProducts = products.filter(function(val) {
                    return props.migratedServices.products.indexOf(val.base) > -1;
                });
                products = products.filter(function(val) {
                    return props.migratedServices.products.indexOf(val.base) === -1;
                });
            }

            var onClick = props.onClick; //NOR-161730

            return /*#__PURE__*/ _react.default.createElement(_Utils.IfCollectionNotEmpty, {
                array: products,
                key: "ICNE_" + index
            }, /*#__PURE__*/ _react.default.createElement(_ModalFragments.TitledProductGroup, {
                channels: props.channels,
                tvPackages: props.tvPackages,
                key: "TPG_" + index,
                inputType: section.inputType,
                migratedServices: props.migratedServices,
                idx: type,
                products: products,
                migratedProducts: migratedProducts,
                label: section.descriptions.sectionTitle || section.sectionTitle,
                onClick: onClick,
                onClickMigratedCheckBox: props.onClickMigratedCheckBox,
                net: props.showNetPrices,
                includedInThePackageTitle: props.includedInThePackageTitle
            }));
        }), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row"
        }, /*#__PURE__*/ _react.default.createElement(_CloseAndSaveVasesButtons.CloseAndSaveVasesButtons, {
            onClose: props.onClose,
            saveVasesClicked: props.onSave,
            saveVasesButtonText: props.saveVasesButtonText
        })))));
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            tvPackages: (0, _selectors.getTvPackages)(state),
            customFilters: (0, _selectors2.getCustomFilters)(state),
            isWwwChannel: (0, _selectors2.isWwwChannel)(state),
            shouldDisplayLoyaltyDurationChoice: (0, _selectors2.shouldDisplayLoyaltyDurationChoice)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            selectTvPackagesChoiceFilter: function selectTvPackagesChoiceFilter(selectedChoice) {
                return dispatch((0, _filters.selectTvPackagesChoiceFilter)(selectedChoice));
            },
            selectLoyaltyDurationChoiceFilter: function selectLoyaltyDurationChoiceFilter(selectedChoice) {
                return dispatch((0, _filters.selectLoyaltyDurationChoiceFilter)(selectedChoice));
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(FixTVModal);

    _exports.default = _default;
});
//# sourceMappingURL=FixTvModal.js.map