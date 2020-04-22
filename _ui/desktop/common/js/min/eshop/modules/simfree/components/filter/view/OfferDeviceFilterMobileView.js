define(["exports", "react", "eshop/components/OraCommonComponents", "eshop/modules/simfree/components/filter/OfferDetailsPopUp", "eshop/modules/configurator/components/ClientContextCheckbox", "eshop/modules/configurator/components/stateless/Discount", "eshop/modules/simfree/components/filter/view/OfferProductListMobileView", "eshop/modules/simfree/components/filter/view/ProductListOfferPriceTag", "eshop/components/OraFloatingLabelSelect", "eshop/modules/core/components/hoc/LabeledInput", "eshop/modules/configurator/components/InfoWithTooltip", "eshop/modules/simfree/components/OfferDisclaimerComponent", "eshop/modules/simfree/constants/OfferTypeEnum", "eshop/modules/configurator/components/DiscountInfo"], function(e, i, l, a, n, o, s, d, c, r, u, m, p, f) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, i = babelHelpers.interopRequireWildcard(i), a = babelHelpers.interopRequireDefault(a), n = babelHelpers.interopRequireDefault(n), o = babelHelpers.interopRequireDefault(o), s = babelHelpers.interopRequireDefault(s), d = babelHelpers.interopRequireDefault(d), r = babelHelpers.interopRequireDefault(r), u = babelHelpers.interopRequireDefault(u), m = babelHelpers.interopRequireDefault(m), p = babelHelpers.interopRequireDefault(p), f = babelHelpers.interopRequireDefault(f);

    function t(t) {
        return i.default.createElement("div", null, i.default.createElement("div", {
            className: t.hide ? "u-hide" : "l-page-row u-large-hide u-box-shadow u-no-padding-left u-no-padding-right"
        }, i.default.createElement(l.OraLoader, {
            loading: t.loading,
            id: "proposition-mobile-filter-loader",
            parentId: "offer-filter-loader"
        }, i.default.createElement("div", {
            className: "u-spacing-l"
        }, i.default.createElement("div", {
            className: "g-gray1-bg"
        }, i.default.createElement("div", {
            className: "u-padding-top-l " + ("SIMFREE_INST" === t.selectedOfferType ? "u-no-padding-b " : "u-padding ")
        }, i.default.createElement("div", {
            className: "l-row u-no-margin-right u-no-margin-left"
        }, t.extProcessSelectConfig && g(t), !t.extProcessSelectConfig && i.default.createElement("div", null, i.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-4 l-col-12 u-small-padding-left-l u-small-padding-right-l  u-medium-padding-left-l u-medium-padding-right-xs u-spacing-l"
        }, i.default.createElement(c.OraFloatingLabelSelect, {
            id: "processTypeFilterMobile",
            options: t.processTypesForSelect,
            onChange: t.selectProcessCallback,
            selected: t.selectedProcessValue,
            className: "opl-input--size-m",
            label: t.processLabel,
            disabled: !(!t.isDuet && !t.addTerminalToOfferBundleNo) || void 0
        })), i.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-4 l-col-12 u-small-padding-left-l u-small-padding-right-l  u-medium-padding-left-xs u-medium-padding-right-xs u-spacing-l"
        }, i.default.createElement(c.OraFloatingLabelSelect, {
            id: "loyaltyLengthFilterMobile",
            options: t.loyaltyLengthsForSelect,
            onChange: t.selectLoyaltyLengthCallback,
            selected: t.selectedLoyaltyLengthValue,
            className: "opl-input--size-m",
            singleOptionClassName: "u-spacing-l u-medium-inline-block u-medium-padding-left-xxl",
            label: "Umowa",
            disabled: !(!t.isDuet && !t.addTerminalToOfferBundleNo) || void 0
        })), i.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-4 l-col-12 u-small-padding-left-l u-small-padding-right-l u-medium-padding-left-xs u-medium-padding-right-l u-spacing-l"
        }, i.default.createElement(c.OraFloatingLabelSelect, {
            id: "deviceInstallmentsCountFilterMobile",
            options: t.deviceInstalmentsCountForSelect,
            onChange: t.selectDeviceInstalmentsCountCallback,
            selected: t.selectedDeviceInstalmentsCountValue,
            className: "opl-input--size-m",
            singleOptionClassName: "u-spacing-l u-medium-inline-block u-medium-padding-left-xxl",
            label: "Liczba rat za telefon lub urządzenie"
        }))), "SIMFREE_INST" !== t.selectedOfferType && "WWW" === t.channels.sales && i.default.createElement("div", {
            className: "l-col l-col-12 u-padding-left-l u-padding-right-l u-spacing-l u-medium-padding-left-m u-small-padding-left-l"
        }, i.default.createElement(n.default, babelHelpers.extends({
            channels: t.channels,
            alignClass: "u-small-left u-large-left"
        }, t.clientContextCheckboxConfig, {
            labelClassName: "u-spacing-l u-medium-block",
            addTerminalToOfferBundleNo: t.addTerminalToOfferBundleNo
        }))), t.info.label && i.default.createElement("div", {
            className: "l-row u-padding-left u-padding-right"
        }, i.default.createElement("div", {
            className: "l-col l-col-12 g-yellow2-bg u-padding-all-l"
        }, i.default.createElement(u.default, t.info))), i.default.createElement("div", {
            className: "l-col l-col-12  u-padding-left-l u-padding-right-l"
        }, "SIMFREE_INST" === t.selectedOfferType || t.isB2B || -1 !== [p.default.DATA].indexOf(t.selectedOfferType) ? i.default.createElement("div", {
            className: "o-separator " + ("SIMFREE_INST" === t.selectedOfferType ? "u-small-hide u-medium-hide " : "")
        }) : i.default.createElement(m.default, {
            descriptions: t.descriptions,
            processType: t.selectedProcessValue
        })), "SIMFREE_INST" !== t.selectedOfferType && !t.isB2B && i.default.createElement("div", {
            className: "l-col l-col-12  u-padding-left-l u-padding-right-l u-padding-all"
        }, i.default.createElement("div", {
            className: "u-border u-no-border-t u-no-border-l u-no-border-r u-padding-all"
        }, i.default.createElement(f.default, {
            descriptions: t.descriptions,
            contractRole: t.contractRole,
            offerType: t.selectedOfferType
        })))), "SIMFREE_INST" !== t.selectedOfferType && i.default.createElement("div", {
            "data-js-module": "common/modules/opl-expander",
            "data-js-options": '{"scrollToSelected": false, "scrollTohash": true, "hideOtherElements":true,"triggerSelector":".opl-content-trigger","contentSelector":".opl-section__content","parentClass":"opl-section--togglable", "nextSelector":".opl-section__expander-next"}'
        }, i.default.createElement("div", {
            className: "opl-section opl-section--togglable opl-section--inner-cut u-spacing-l"
        }, i.default.createElement("div", {
            className: "l-row u-no-margin-right"
        }, i.default.createElement("div", {
            className: "l-col"
        }, i.default.createElement("p", {
            className: "u-font-bold u-padding-left-l u-margin-s"
        }, t.selectedRatePlanName), i.default.createElement("div", {
            className: "g-brand2-c u-font-bold u-padding-left-l u-margin-s"
        }, i.default.createElement(d.default, {
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
            baseId: "mobile"
        })))), "MNP" === t.selectedProcessValue && t.mnpPriceDescription ? i.default.createElement(o.default, {
            value: t.mnpPriceDescription,
            showAll: !0,
            simpleWrapperClassName: "u-padding-top u-padding u-padding-left-l u-padding-right-l g-yellowf-bg u-margin u-margin-top"
        }) : null, i.default.createElement("div", {
            className: "js-expander__container u-padding-left-l u-margin-s u-small-no-margin"
        }, i.default.createElement("div", null, i.default.createElement("div", {
            className: "u-spacing-top-s u-small-no-spacing-top u-spacing-m"
        }, t.detailsTable ? i.default.createElement(a.default, {
            key: "conv_" + t.clientContext + "_" + t.propositionName,
            labelText: t.detailsLabelText,
            header: t.header,
            propositionName: t.propositionName,
            details: t.detailsTable,
            proposition: t.selectedOfferObject,
            entry: t.entry,
            clientContext: t.clientContext
        }) : null, !t.addTerminalToOfferBundleNo && i.default.createElement("a", {
            href: "#",
            role: "tab",
            "aria-expanded": "false",
            className: "opl-content-trigger u-inline-block opl-section__expander-trigger-btn u-float-none u-small-no-margin-top"
        }, i.default.createElement("span", {
            className: "opl-section__expander-trigger--show"
        }, "Zmień"), i.default.createElement("span", {
            className: "opl-section__expander-trigger--hide"
        }, "Zwiń"))))), i.default.createElement("div", {
            "aria-expanded": "false",
            className: "opl-section__content"
        }, i.default.createElement("ul", {
            className: "opl-multicheckout-services u-padding-left-m u-padding-right-m"
        }, t.offers && t.offers.map(function(e, l) {
            return i.default.createElement(s.default, {
                offerDiscountInfoDescription: t.descriptions.offerDiscountInfoDescription,
                offerDiscountInfoConvDescription: t.descriptions.offerDiscountInfoConvDescription,
                isSelected: e.id === t.selectedOffer,
                key: "key_mobile_" + t.selectedProcessValue + "_" + l,
                index: l,
                contractRole: t.contractRole,
                selectedOfferType: t.selectedOfferType,
                clientContext: t.clientContext,
                offer: e,
                loyaltyLength: t.loyaltyLength,
                onChange: function() {
                    return t.selectOfferCallback(e.id)
                }
            })
        })))))))))), i.default.createElement("div", {
            className: "WWW" === t.channels.sales ? "u-hide" : "opl-console u-margin-m u-padding-right-l u-large-hide"
        }, i.default.createElement("label", null, t.descriptions.searchByValueLabel || "Wyszukaj wg nazwy lub indeksu materiałowego:"), i.default.createElement("div", {
            className: "opl-input-with-icon"
        }, i.default.createElement(r.default, {
            className: "g-white1-bg",
            onChange: t.handleChangeSearchDeviceValue,
            value: t.searchValue,
            id: "search-by-value-mobile"
        }), i.default.createElement("span", {
            className: "g-icon g-icon--only g-icon--s g-icon--search"
        }))))
    }
    var g = function(e) {
            var l = e.getSelectedExtProcessSelectIndexes();
            if (!l) return null;
            var t = l.length - 1,
                a = e.getExtProcessSelectForLevel(t).options[l[t]];
            return [b(l, e), h(a, e), E(a, e)]
        },
        b = function(e, n) {
            return e.map(function(e, l) {
                var t = n.getExtProcessSelectForLevel(l),
                    a = 0 === l;
                return i.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-12 u-small-padding-left-l u-small-padding-right-l  u-medium-padding-right-xs  u-spacing-l " + (a ? "u-medium-padding-left-l" : "u-medium-padding-left-xs")
                }, i.default.createElement(c.OraFloatingLabelSelect, {
                    id: "extProcessSelectLevel-".concat(l),
                    options: n.createOptionsForExtProcessSelect(t),
                    onChange: n.selectProcessForExtProcessSelect(t),
                    selected: e,
                    className: "opl-input--size-m",
                    label: t.label
                }))
            })
        },
        h = function(e, l) {
            return e.showLoyalties ? i.default.createElement("div", {
                className: "l-col l-col-small-12 l-col-medium-4 l-col-12 u-small-padding-left-l u-small-padding-right-l u-medium-padding-left-xs u-medium-padding-right-xs u-spacing-l"
            }, i.default.createElement(c.OraFloatingLabelSelect, {
                id: "loyaltyLengthFilter",
                options: l.loyaltyLengthsForSelect,
                onChange: l.selectLoyaltyLengthCallback,
                selected: l.selectedLoyaltyLengthValue,
                className: "opl-input--size-m",
                singleOptionClassName: "u-spacing-l u-medium-inline-block u-medium-padding-left-xxl",
                label: "Umowa",
                disabled: !!l.addTerminalToOfferBundleNo || void 0
            })) : null
        },
        E = function(e, l) {
            return e.showInstallments ? i.default.createElement("div", {
                className: "l-col l-col-small-12 l-col-medium-4 l-col-12 u-small-padding-left-l u-small-padding-right-l u-medium-padding-left-xs u-medium-padding-right-l u-spacing-l"
            }, i.default.createElement(c.OraFloatingLabelSelect, {
                id: "deviceInstallmentsCountFilter",
                options: l.deviceInstalmentsCountForSelect,
                onChange: l.selectDeviceInstalmentsCountCallback,
                selected: l.selectedDeviceInstalmentsCountValue,
                className: "opl-input--size-m",
                singleOptionClassName: "u-spacing-l u-medium-inline-block u-medium-padding-left-xxl",
                label: "Liczba rat za telefon lub urządzenie"
            })) : null
        };
    e.default = t
});
//# sourceMappingURL=OfferDeviceFilterMobileView.js.map