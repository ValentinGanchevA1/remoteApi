define(["exports", "react", "eshop/components/OraCommonComponents", "eshop/modules/simfree/components/filter/OfferDetailsPopUp", "eshop/modules/configurator/components/ClientContextCheckbox", "eshop/modules/configurator/components/stateless/Discount", "eshop/modules/simfree/components/filter/view/OfferProductListView", "eshop/modules/simfree/components/filter/view/ProductListOfferPriceTag", "eshop/components/OraFloatingLabelSelect", "eshop/modules/core/components/hoc/LabeledInput", "eshop/modules/configurator/components/InfoWithTooltip", "eshop/modules/simfree/components/OfferDisclaimerComponent", "eshop/modules/simfree/constants/OfferTypeEnum", "eshop/modules/configurator/components/DiscountInfo"], function(e, n, l, a, o, s, i, c, r, d, u, m, p, f) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, n = babelHelpers.interopRequireDefault(n), a = babelHelpers.interopRequireDefault(a), o = babelHelpers.interopRequireDefault(o), s = babelHelpers.interopRequireDefault(s), i = babelHelpers.interopRequireDefault(i), c = babelHelpers.interopRequireDefault(c), d = babelHelpers.interopRequireDefault(d), u = babelHelpers.interopRequireDefault(u), m = babelHelpers.interopRequireDefault(m), p = babelHelpers.interopRequireDefault(p), f = babelHelpers.interopRequireDefault(f);

    function t(t) {
        return n.default.createElement("div", {
            className: "u-margin-top-l-xl"
        }, n.default.createElement("div", {
            className: t.hide ? "u-hide" : "u-spacing-l u-margin-top-l"
        }, n.default.createElement(l.OraLoader, {
            loading: t.loading,
            id: "proposition-filter-loader",
            parentId: "offer-filter-loader"
        }, n.default.createElement("div", {
            className: "g-gray1-bg u-medium-box-shadow u-small-box-shadow"
        }, n.default.createElement("div", {
            className: "u-padding-all-l " + ("SIMFREE_INST" === t.selectedOfferType ? "u-no-padding-b" : "u-padding")
        }, n.default.createElement("div", {
            className: "l-row"
        }, t.extProcessSelectConfig && g(t), !t.extProcessSelectConfig && n.default.createElement("div", null, n.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-4 l-col-12 u-spacing-l"
        }, n.default.createElement(r.OraFloatingLabelSelect, {
            id: "processTypeFilter",
            options: t.processTypesForSelect,
            onChange: t.selectProcessCallback,
            selected: t.selectedProcessValue,
            className: "opl-input--size-m",
            label: t.processLabel,
            disabled: t.isDuet || !!t.addTerminalToOfferBundleNo
        })), n.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-4 l-col-12  u-spacing-l"
        }, n.default.createElement(r.OraFloatingLabelSelect, {
            id: "loyaltyLengthFilter",
            options: t.loyaltyLengthsForSelect,
            onChange: t.selectLoyaltyLengthCallback,
            selected: t.selectedLoyaltyLengthValue,
            className: "opl-input--size-m",
            singleOptionClassName: "u-spacing-l u-medium-inline-block u-medium-padding-left-xxl",
            label: "Umowa",
            disabled: t.isDuet || !!t.addTerminalToOfferBundleNo
        })), n.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-4 l-col-12  u-spacing-l"
        }, n.default.createElement(r.OraFloatingLabelSelect, {
            id: "deviceInstallmentsCountFilter",
            options: t.deviceInstalmentsCountForSelect,
            onChange: t.selectDeviceInstalmentsCountCallback,
            selected: t.selectedDeviceInstalmentsCountValue,
            className: "opl-input--size-m",
            singleOptionClassName: "u-spacing-l u-medium-inline-block u-medium-padding-left-xxl",
            label: "Liczba rat za telefon lub urządzenie",
            disabled: t.isDuet
        }))), "SIMFREE_INST" !== t.selectedOfferType && n.default.createElement("div", {
            className: "l-col l-col-12 u-spacing-l"
        }, n.default.createElement(o.default, babelHelpers.extends({
            alignClass: "u-small-left u-large-left"
        }, t.clientContextCheckboxConfig, {
            labelClassName: "u-spacing-l",
            channels: t.channels,
            addTerminalToOfferBundleNo: t.addTerminalToOfferBundleNo
        }))))), "SIMFREE_INST" !== t.selectedOfferType && !t.isB2B && -1 === [p.default.DATA].indexOf(t.selectedOfferType) && n.default.createElement(m.default, {
            descriptions: t.descriptions,
            processType: t.selectedProcessValue,
            className: "u-margin-l u-margin-minus-top"
        }), "SIMFREE_INST" !== t.selectedOfferType && !t.isB2B && n.default.createElement("div", {
            className: "u-padding-m u-padding-left u-padding-right"
        }, n.default.createElement("div", {
            className: "u-padding u-padding-left u-padding-right-l"
        }, n.default.createElement(f.default, {
            descriptions: t.descriptions,
            contractRole: t.contractRole,
            offerType: t.selectedOfferType
        })), n.default.createElement("div", {
            className: "u-spacing-l u-medium-spacing-l u-small-spacing-l u-padding-left u-padding-right"
        }, n.default.createElement("div", {
            className: "o-separator u-no-spacing u-no-padding u-small-hide u-medium-hide"
        }))), t.info.label && n.default.createElement("div", {
            className: "l-row u-padding-left u-padding-right"
        }, n.default.createElement("div", {
            className: "l-col l-col-12 g-yellow2-bg u-padding-all-l"
        }, n.default.createElement(u.default, t.info))), n.default.createElement("div", {
            hidden: "SIMFREE_INST" === t.selectedOfferType,
            "data-js-module": "common/modules/opl-expander",
            "data-js-options": '{"scrollToSelected": false, "scrollTohash": true, "hideOtherElements":true,"triggerSelector":".opl-content-trigger","contentSelector":".opl-section__content","parentClass":"opl-section--togglable", "nextSelector":".opl-section__expander-next"}'
        }, n.default.createElement("div", {
            className: "opl-section opl-section--togglable opl-section--inner-cut u-no-padding"
        }, n.default.createElement("div", {
            className: "l-row"
        }, n.default.createElement("div", {
            className: "l-col"
        }, n.default.createElement("p", {
            className: "u-font-bold u-padding-left-l u-margin-s"
        }, t.selectedRatePlanName), n.default.createElement("div", {
            className: "g-brand2-c u-font-bold u-padding-left-l u-margin-s"
        }, n.default.createElement(c.default, {
            key: "key_" + t.selectedProcessValue + "_ProductListOfferPriceTag",
            proposition: t.selectedOfferObject,
            entry: t.entry,
            clientContext: t.clientContext,
            contractRole: t.contractRole,
            loyaltyLength: t.loyaltyLength,
            mainPriceClass: "g-brand1-c",
            alignClass: "u-left",
            offerDiscountInfoDescription: t.descriptions.offerDiscountInfoDescription,
            offerDiscountInfoConvDescription: t.descriptions.offerDiscountInfoConvDescription,
            baseId: "desktop"
        })))), "MNP" === t.selectedProcessValue && t.mnpPriceDescription ? n.default.createElement(s.default, {
            value: t.mnpPriceDescription,
            showAll: !0,
            simpleWrapperClassName: "u-padding-top u-padding u-padding-left-l u-padding-right-l g-yellowf-bg u-margin u-margin-top"
        }) : null, n.default.createElement("div", {
            className: "js-expander__container u-padding-left-l u-margin-s "
        }, n.default.createElement("div", {
            className: "l-row "
        }, n.default.createElement("div", {
            className: "l-col u-spacing-top-s u-margin-l"
        }, t.detailsTable ? n.default.createElement(a.default, {
            key: "desktop_conv_" + t.clientContext + "_" + t.propositionName,
            labelText: t.detailsLabelText,
            header: t.header,
            propositionName: t.propositionName,
            details: t.detailsTable,
            proposition: t.selectedOfferObject,
            entry: t.entry,
            clientContext: t.clientContext
        }) : null, !t.addTerminalToOfferBundleNo && n.default.createElement("a", {
            href: "#",
            role: "tab",
            "aria-expanded": "false",
            className: "opl-content-trigger u-inline-block opl-section__expander-trigger-btn u-float-none"
        }, n.default.createElement("span", {
            className: "opl-section__expander-trigger--show"
        }, "Zmień"), n.default.createElement("span", {
            className: "opl-section__expander-trigger--hide"
        }, "Zwiń"))))), n.default.createElement("div", {
            "aria-expanded": "false",
            className: "opl-section__content"
        }, n.default.createElement("ul", {
            className: "opl-multicheckout-services"
        }, t.offers && t.offers.map(function(e, l) {
            return n.default.createElement(i.default, {
                offerDiscountInfoDescription: t.descriptions.offerDiscountInfoDescription,
                offerDiscountInfoConvDescription: t.descriptions.offerDiscountInfoConvDescription,
                isSelected: e.id === t.selectedOffer,
                key: "key_" + t.selectedProcessValue + "_" + l,
                index: l,
                contractRole: t.contractRole,
                getContractRoleInProgress: t.getContractRoleInProgress,
                selectedOfferType: t.selectedOfferType,
                clientContext: t.clientContext,
                offer: e,
                loyaltyLength: t.loyaltyLength,
                onChange: function() {
                    return t.selectOfferCallback(e.id)
                }
            })
        }))))))), n.default.createElement("div", {
            className: "WWW" === t.channels.sales ? "u-hide" : "opl-console u-margin-m u-padding-right-l"
        }, n.default.createElement("label", null, t.descriptions.searchByValueLabel || "Wyszukaj wg nazwy lub indeksu materiałowego:"), n.default.createElement("div", {
            className: "opl-input-with-icon"
        }, n.default.createElement(d.default, {
            className: "g-white1-bg",
            onChange: t.handleChangeSearchDeviceValue,
            value: t.searchValue,
            id: "search-by-value"
        }), n.default.createElement("span", {
            className: "g-icon g-icon--only g-icon--s g-icon--search"
        })))))
    }
    var g = function(e) {
            var l = e.getSelectedExtProcessSelectIndexes();
            if (!l) return null;
            var t = l.length - 1,
                a = e.getExtProcessSelectForLevel(t).options[l[t]];
            return [b(l, e), h(a, e), E(a, e)]
        },
        b = function(e, a) {
            return e.map(function(e, l) {
                var t = a.getExtProcessSelectForLevel(l);
                return n.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-12 u-spacing-l"
                }, n.default.createElement(r.OraFloatingLabelSelect, {
                    id: "extProcessSelectLevel-".concat(l),
                    options: a.createOptionsForExtProcessSelect(t),
                    onChange: a.selectProcessForExtProcessSelect(t),
                    selected: e,
                    className: "opl-input--size-m",
                    label: t.label,
                    disabled: a.isDuet
                }))
            })
        },
        h = function(e, l) {
            return e.showLoyalties ? n.default.createElement("div", {
                className: "l-col l-col-small-12 l-col-medium-4 l-col-12  u-spacing-l"
            }, n.default.createElement(r.OraFloatingLabelSelect, {
                id: "loyaltyLengthFilter",
                options: l.loyaltyLengthsForSelect,
                onChange: l.selectLoyaltyLengthCallback,
                selected: l.selectedLoyaltyLengthValue,
                className: "opl-input--size-m",
                singleOptionClassName: "u-spacing-l u-medium-inline-block u-medium-padding-left-xxl",
                label: "Umowa",
                disabled: l.isDuet || !!l.addTerminalToOfferBundleNo
            })) : null
        },
        E = function(e, l) {
            return e.showInstallments ? n.default.createElement("div", {
                className: "l-col l-col-small-12 l-col-medium-4 l-col-12  u-spacing-l"
            }, n.default.createElement(r.OraFloatingLabelSelect, {
                id: "deviceInstallmentsCountFilter",
                options: l.deviceInstalmentsCountForSelect,
                onChange: l.selectDeviceInstalmentsCountCallback,
                selected: l.selectedDeviceInstalmentsCountValue,
                className: "opl-input--size-m",
                singleOptionClassName: "u-spacing-l u-medium-inline-block u-medium-padding-left-xxl",
                label: "Liczba rat za telefon lub urządzenie",
                disabled: l.isDuet
            })) : null
        };
    e.default = t
});
//# sourceMappingURL=OfferDeviceFilterView.js.map