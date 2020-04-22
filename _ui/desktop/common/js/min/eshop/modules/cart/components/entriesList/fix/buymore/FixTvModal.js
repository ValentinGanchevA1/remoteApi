define(["exports", "react", "react-redux", "prop-types", "eshop/modules/core/components/ui/Modal", "eshop/modules/cart/analyzer/CartInfoUtils", "./Utils", "./modalFragments/ModalFragments", "../../shared/MessageBox", "eshop/modules/cart/components/entriesList/convergent/vasModal/CloseAndSaveVasesButtons", "eshop/modules/cart/selectors", "../../../../../fix/components/SecondaryChoiceTvPackagesComponent", "../../../../../fix/components/LoyaltyDurationChoiceTvPackagesComponent", "../../../../../fix/enum/TvPackagesChoiceFilter", "../../../../actions/filters", "../../../../selectors"], function(e, l, t, s, i, c, p, u, n, o, r, a, d, h, f, y) {
    "use strict";

    function C(o) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(o);
            if (function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return;
                    if (Reflect.construct.sham) return;
                    if ("function" == typeof Proxy) return 1;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 1
                    } catch (e) {
                        return
                    }
                }()) {
                var s = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, s)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, l = babelHelpers.interopRequireWildcard(l), i = babelHelpers.interopRequireDefault(i), a = babelHelpers.interopRequireDefault(a), d = babelHelpers.interopRequireDefault(d), h = babelHelpers.interopRequireDefault(h);
    var v = function(e) {
        babelHelpers.inherits(o, e);
        var s = C(o);

        function o(e) {
            var t;
            return babelHelpers.classCallCheck(this, o), (t = s.call(this, e)).state = {
                open: t.props.open,
                popup: !1,
                callback: null,
                event: null
            }, t
        }
        return babelHelpers.createClass(o, [{
            key: "componentWillReceiveProps",
            value: function(e) {
                this.setState({
                    open: e.open,
                    popup: !1,
                    callback: null,
                    event: null,
                    wasRendered: this.props.open || e.open
                })
            }
        }, {
            key: "componentWillUpdate",
            value: function(e) {
                e.customFilters && null === e.customFilters.loyaltyDuration && e.shouldDisplayLoyaltyDurationChoice && this.props.selectLoyaltyDurationChoiceFilter(h.default.TV_LOYALTY_DURATION_24)
            }
        }, {
            key: "_onSaveWrapper",
            value: function() {
                this.props.onClose(), this.props.onSave()
            }
        }, {
            key: "_onClickInterceptor",
            value: function(t, s) {
                var o = this;
                return function(e) {
                    o.setState({
                        popup: !0,
                        callback: o.props.onClick(t, s),
                        event: e
                    })
                }
            }
        }, {
            key: "_runInterceptedClick",
            value: function() {
                this.state.callback(this.state.event), this._cancelInterceptedClick()
            }
        }, {
            key: "_cancelInterceptedClick",
            value: function() {
                this.setState({
                    popup: !1,
                    callback: null,
                    event: null
                })
            }
        }, {
            key: "showBaseOffer",
            value: function(e) {
                e.preventDefault(), this.props.shouldDisplayLoyaltyDurationChoice && this.props.selectLoyaltyDurationChoiceFilter(h.default.TV_LOYALTY_DURATION_24), this.props.selectTvPackagesChoiceFilter(h.default.TV_DEFAULT_CHOICE_PRODUCT)
            }
        }, {
            key: "showSecondaryChoiceOffer",
            value: function(e) {
                e.preventDefault(), this.props.shouldDisplayLoyaltyDurationChoice && this.props.selectLoyaltyDurationChoiceFilter(h.default.TV_LOYALTY_DURATION_24), this.props.selectTvPackagesChoiceFilter(h.default.TV_SECONDARY_CHOICE_PRODUCT)
            }
        }, {
            key: "renderFilters",
            value: function() {
                return this.props.filtersVisible && l.default.createElement("div", null, !this.props.isWwwChannel && l.default.createElement(a.default, {
                    selectedSecondaryChoice: this.props.customFilters.secondaryChoice,
                    showBaseOffer: this.showBaseOffer.bind(this),
                    showSecondaryChoiceOffer: this.showSecondaryChoiceOffer.bind(this),
                    descriptions: this.props.filterDescriptions.secondaryChoice
                }), this.props.shouldDisplayLoyaltyDurationChoice && l.default.createElement(d.default, {
                    selectedLoyaltyDuration: this.props.customFilters.loyaltyDuration,
                    selectLoyaltyDurationChoiceFilter: this.props.selectLoyaltyDurationChoiceFilter,
                    descriptions: this.props.filterDescriptions.loyaltyDuration
                }))
            }
        }, {
            key: "render",
            value: function() {
                var t = this;
                if (!this.state.open && !this.state.wasRendered) return l.default.createElement(i.default, {
                    open: this.state.open,
                    onClose: this.props.onClose,
                    size: "medium",
                    showClose: !this.state.popup
                });
                var e = this.props.services.map(function(e) {
                    return e.selected = !1, e.presentation = "visible", e
                });
                return this.props.entries && Object.keys(this.props.entries).filter(function(e) {
                    return t.props.entries[e]
                }).map(function(t) {
                    return e.find(function(e) {
                        return e.id === t
                    })
                }).filter(function(e) {
                    return e
                }).forEach(function(e) {
                    return e.selected = !0
                }), this.props.hidden && this.props.hidden.map(function(t) {
                    return e.find(function(e) {
                        return e.id === t
                    })
                }).filter(function(e) {
                    return e
                }).forEach(function(e) {
                    return e.presentation = "hidden"
                }), l.default.createElement(i.default, {
                    open: this.state.open,
                    onClose: this.props.onClose,
                    size: "medium",
                    showClose: !this.state.popup
                }, this.renderFilters(), l.default.createElement(k, {
                    channels: this.props.channels,
                    tvPackages: this.props.tvPackages,
                    productList: this.props.productList,
                    vasesWithStatuses: e,
                    migratedServices: this.props.migratedServices,
                    onClickWrapped: this.props.clickable ? this._onClickInterceptor.bind(this) : function() {},
                    onClick: this.props.clickable ? this.props.onClick : function() {},
                    onClickMigratedCheckBox: this.props.onClickMigratedCheckBox,
                    onSave: this._onSaveWrapper.bind(this),
                    saveVasesButtonText: this.props.saveVasesButtonText,
                    showNetPrices: this.props.showNetPrices,
                    includedInThePackageTitle: this.props.includedInThePackageTitle,
                    onClose: this.props.onClose
                }), this.state.popup && l.default.createElement(n.Warning, {
                    onAccept: this._runInterceptedClick.bind(this),
                    onCancel: this._cancelInterceptedClick.bind(this),
                    modalTitle: this.props.subModalTitle,
                    modalContents: this.props.subModalContents,
                    onAcceptLabel: "Zmień pakiet TV",
                    showCancel: !1
                }))
            }
        }]), o
    }(l.Component);
    v.propTypes = {
        header: s.PropTypes.string,
        bundle: s.PropTypes.string,
        cartBundle: s.PropTypes.string,
        propositionId: s.PropTypes.string,
        open: s.PropTypes.bool,
        clickable: s.PropTypes.bool,
        saveVasesButtonText: s.PropTypes.string,
        includedInThePackageTitle: s.PropTypes.string,
        filtersVisible: s.PropTypes.bool
    }, v.defaultProps = {
        clickable: !0,
        saveVasesButtonText: "Wybierz",
        includedInThePackageTitle: "W cenie pakietu",
        filtersVisible: !1,
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
    var k = function(a) {
            return l.default.createElement("div", null, l.default.createElement("h1", {
                className: "u-acc-hide"
            }, "Dobierz pakiety TV"), l.default.createElement("div", {
                className: "opl-multicheckout-services"
            }, l.default.createElement("ul", null, a.productList && a.productList.innerLists && a.productList.innerLists.map(function(e, t) {
                var s = e.productFilter,
                    o = (0, c.Filters)()[s](a.vasesWithStatuses),
                    i = e.productCodes ? e.productCodes : [];
                o.sort((0, c.compareByProductListAndPartnerAndMandatoryAndTitle)(i));
                var n = [];
                null != a.migratedServices && (n = o.filter(function(e) {
                    return -1 < a.migratedServices.products.indexOf(e.base)
                }), o = o.filter(function(e) {
                    return -1 === a.migratedServices.products.indexOf(e.base)
                }));
                var r = a.onClick;
                return l.default.createElement(p.IfCollectionNotEmpty, {
                    array: o,
                    key: "ICNE_" + t
                }, l.default.createElement(u.TitledProductGroup, {
                    channels: a.channels,
                    tvPackages: a.tvPackages,
                    key: "TPG_" + t,
                    inputType: e.inputType,
                    migratedServices: a.migratedServices,
                    idx: s,
                    products: o,
                    migratedProducts: n,
                    label: e.descriptions.sectionTitle || e.sectionTitle,
                    onClick: r,
                    onClickMigratedCheckBox: a.onClickMigratedCheckBox,
                    net: a.showNetPrices,
                    includedInThePackageTitle: a.includedInThePackageTitle
                }))
            }), l.default.createElement("div", {
                className: "l-row"
            }, l.default.createElement(o.CloseAndSaveVasesButtons, {
                onClose: a.onClose,
                saveVasesClicked: a.onSave,
                saveVasesButtonText: a.saveVasesButtonText
            })))))
        },
        m = (0, t.connect)(function(e) {
            return {
                tvPackages: (0, r.getTvPackages)(e),
                customFilters: (0, y.getCustomFilters)(e),
                isWwwChannel: (0, y.isWwwChannel)(e),
                shouldDisplayLoyaltyDurationChoice: (0, y.shouldDisplayLoyaltyDurationChoice)(e)
            }
        }, function(t) {
            return {
                selectTvPackagesChoiceFilter: function(e) {
                    return t((0, f.selectTvPackagesChoiceFilter)(e))
                },
                selectLoyaltyDurationChoiceFilter: function(e) {
                    return t((0, f.selectLoyaltyDurationChoiceFilter)(e))
                }
            }
        })(v);
    e.default = m
});
//# sourceMappingURL=FixTvModal.js.map