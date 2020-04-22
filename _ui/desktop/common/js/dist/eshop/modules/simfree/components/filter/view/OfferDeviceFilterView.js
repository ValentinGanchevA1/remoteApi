define(["exports", "react", "eshop/components/OraCommonComponents", "eshop/modules/simfree/components/filter/OfferDetailsPopUp", "eshop/modules/configurator/components/ClientContextCheckbox", "eshop/modules/configurator/components/stateless/Discount", "eshop/modules/simfree/components/filter/view/OfferProductListView", "eshop/modules/simfree/components/filter/view/ProductListOfferPriceTag", "eshop/components/OraFloatingLabelSelect", "eshop/modules/core/components/hoc/LabeledInput", "eshop/modules/configurator/components/InfoWithTooltip", "eshop/modules/simfree/components/OfferDisclaimerComponent", "eshop/modules/simfree/constants/OfferTypeEnum", "eshop/modules/configurator/components/DiscountInfo"], function(_exports, _react, _OraCommonComponents, _OfferDetailsPopUp, _ClientContextCheckbox, _Discount, _OfferProductListView, _ProductListOfferPriceTag, _OraFloatingLabelSelect, _LabeledInput, _InfoWithTooltip, _OfferDisclaimerComponent, _OfferTypeEnum, _DiscountInfo) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _OfferDetailsPopUp = babelHelpers.interopRequireDefault(_OfferDetailsPopUp);
    _ClientContextCheckbox = babelHelpers.interopRequireDefault(_ClientContextCheckbox);
    _Discount = babelHelpers.interopRequireDefault(_Discount);
    _OfferProductListView = babelHelpers.interopRequireDefault(_OfferProductListView);
    _ProductListOfferPriceTag = babelHelpers.interopRequireDefault(_ProductListOfferPriceTag);
    _LabeledInput = babelHelpers.interopRequireDefault(_LabeledInput);
    _InfoWithTooltip = babelHelpers.interopRequireDefault(_InfoWithTooltip);
    _OfferDisclaimerComponent = babelHelpers.interopRequireDefault(_OfferDisclaimerComponent);
    _OfferTypeEnum = babelHelpers.interopRequireDefault(_OfferTypeEnum);
    _DiscountInfo = babelHelpers.interopRequireDefault(_DiscountInfo);

    var OfferDeviceFilterView = function OfferDeviceFilterView(props) {
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-margin-top-l-xl"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: props.hide ? "u-hide" : "u-spacing-l u-margin-top-l"
        }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraLoader, {
            loading: props.loading,
            id: "proposition-filter-loader",
            parentId: "offer-filter-loader"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "g-gray1-bg u-medium-box-shadow u-small-box-shadow"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-padding-all-l " + (props.selectedOfferType === "SIMFREE_INST" ? "u-no-padding-b" : "u-padding")
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row"
        }, props.extProcessSelectConfig && createExtOfferSelect(props), !props.extProcessSelectConfig && /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-4 l-col-12 u-spacing-l"
        }, /*#__PURE__*/ _react.default.createElement(_OraFloatingLabelSelect.OraFloatingLabelSelect, {
            id: "processTypeFilter",
            options: props.processTypesForSelect,
            onChange: props.selectProcessCallback,
            selected: props.selectedProcessValue,
            className: "opl-input--size-m",
            label: props.processLabel,
            disabled: props.isDuet || !!props.addTerminalToOfferBundleNo
        })), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-4 l-col-12  u-spacing-l"
        }, /*#__PURE__*/ _react.default.createElement(_OraFloatingLabelSelect.OraFloatingLabelSelect, {
            id: "loyaltyLengthFilter",
            options: props.loyaltyLengthsForSelect,
            onChange: props.selectLoyaltyLengthCallback,
            selected: props.selectedLoyaltyLengthValue,
            className: "opl-input--size-m",
            singleOptionClassName: "u-spacing-l u-medium-inline-block u-medium-padding-left-xxl",
            label: "Umowa",
            disabled: props.isDuet || !!props.addTerminalToOfferBundleNo
        })), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-4 l-col-12  u-spacing-l"
        }, /*#__PURE__*/ _react.default.createElement(_OraFloatingLabelSelect.OraFloatingLabelSelect, {
            id: "deviceInstallmentsCountFilter",
            options: props.deviceInstalmentsCountForSelect,
            onChange: props.selectDeviceInstalmentsCountCallback,
            selected: props.selectedDeviceInstalmentsCountValue,
            className: "opl-input--size-m",
            singleOptionClassName: "u-spacing-l u-medium-inline-block u-medium-padding-left-xxl",
            label: "Liczba rat za telefon lub urz\u0105dzenie",
            disabled: props.isDuet
        }))), props.selectedOfferType !== "SIMFREE_INST" && /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-12 u-spacing-l"
        }, /*#__PURE__*/ _react.default.createElement(_ClientContextCheckbox.default, babelHelpers.extends({
            alignClass: "u-small-left u-large-left"
        }, props.clientContextCheckboxConfig, {
            labelClassName: "u-spacing-l",
            channels: props.channels,
            addTerminalToOfferBundleNo: props.addTerminalToOfferBundleNo
        }))))), props.selectedOfferType !== "SIMFREE_INST" && !props.isB2B && [_OfferTypeEnum.default.DATA].indexOf(props.selectedOfferType) === -1 && /*#__PURE__*/ _react.default.createElement(_OfferDisclaimerComponent.default, {
            descriptions: props.descriptions,
            processType: props.selectedProcessValue,
            className: "u-margin-l u-margin-minus-top"
        }), props.selectedOfferType !== "SIMFREE_INST" && !props.isB2B && /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-padding-m u-padding-left u-padding-right"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-padding u-padding-left u-padding-right-l"
        }, /*#__PURE__*/ _react.default.createElement(_DiscountInfo.default, {
            descriptions: props.descriptions,
            contractRole: props.contractRole,
            offerType: props.selectedOfferType
        })), /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-spacing-l u-medium-spacing-l u-small-spacing-l u-padding-left u-padding-right"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "o-separator u-no-spacing u-no-padding u-small-hide u-medium-hide"
        }))), props.info.label && /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row u-padding-left u-padding-right"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-12 g-yellow2-bg u-padding-all-l"
        }, /*#__PURE__*/ _react.default.createElement(_InfoWithTooltip.default, props.info))), /*#__PURE__*/ _react.default.createElement("div", {
            hidden: props.selectedOfferType === "SIMFREE_INST",
            "data-js-module": "common/modules/opl-expander",
            "data-js-options": "{\"scrollToSelected\": false, \"scrollTohash\": true, \"hideOtherElements\":true,\"triggerSelector\":\".opl-content-trigger\",\"contentSelector\":\".opl-section__content\",\"parentClass\":\"opl-section--togglable\", \"nextSelector\":\".opl-section__expander-next\"}"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "opl-section opl-section--togglable opl-section--inner-cut u-no-padding"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col"
        }, /*#__PURE__*/ _react.default.createElement("p", {
            className: "u-font-bold u-padding-left-l u-margin-s"
        }, props.selectedRatePlanName), /*#__PURE__*/ _react.default.createElement("div", {
            className: "g-brand2-c u-font-bold u-padding-left-l u-margin-s"
        }, /*#__PURE__*/ _react.default.createElement(_ProductListOfferPriceTag.default, {
            key: "key_" + props.selectedProcessValue + "_ProductListOfferPriceTag",
            proposition: props.selectedOfferObject,
            entry: props.entry,
            clientContext: props.clientContext,
            contractRole: props.contractRole,
            loyaltyLength: props.loyaltyLength,
            mainPriceClass: "g-brand1-c",
            alignClass: "u-left",
            offerDiscountInfoDescription: props.descriptions.offerDiscountInfoDescription,
            offerDiscountInfoConvDescription: props.descriptions.offerDiscountInfoConvDescription,
            baseId: "desktop"
        })))), props.selectedProcessValue === "MNP" && props.mnpPriceDescription ? /*#__PURE__*/ _react.default.createElement(_Discount.default, {
            value: props.mnpPriceDescription,
            showAll: true,
            simpleWrapperClassName: "u-padding-top u-padding u-padding-left-l u-padding-right-l g-yellowf-bg u-margin u-margin-top"
        }) : null, /*#__PURE__*/ _react.default.createElement("div", {
            className: "js-expander__container u-padding-left-l u-margin-s "
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row "
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col u-spacing-top-s u-margin-l"
        }, props.detailsTable ? /*#__PURE__*/ _react.default.createElement(_OfferDetailsPopUp.default, {
            key: "desktop_conv_" + props.clientContext + "_" + props.propositionName,
            labelText: props.detailsLabelText,
            header: props.header,
            propositionName: props.propositionName,
            details: props.detailsTable,
            proposition: props.selectedOfferObject,
            entry: props.entry,
            clientContext: props.clientContext
        }) : null, !props.addTerminalToOfferBundleNo && /*#__PURE__*/ _react.default.createElement("a", {
            href: "#",
            role: "tab",
            "aria-expanded": "false",
            className: "opl-content-trigger u-inline-block opl-section__expander-trigger-btn u-float-none"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-section__expander-trigger--show"
        }, "Zmie\u0144"), /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-section__expander-trigger--hide"
        }, "Zwi\u0144"))))), /*#__PURE__*/ _react.default.createElement("div", {
            "aria-expanded": "false",
            className: "opl-section__content"
        }, /*#__PURE__*/ _react.default.createElement("ul", {
            className: "opl-multicheckout-services"
        }, props.offers && props.offers.map(function(offer, index) {
            return /*#__PURE__*/ _react.default.createElement(_OfferProductListView.default, {
                offerDiscountInfoDescription: props.descriptions.offerDiscountInfoDescription,
                offerDiscountInfoConvDescription: props.descriptions.offerDiscountInfoConvDescription,
                isSelected: offer.id === props.selectedOffer,
                key: "key_" + props.selectedProcessValue + "_" + index,
                index: index,
                contractRole: props.contractRole,
                getContractRoleInProgress: props.getContractRoleInProgress,
                selectedOfferType: props.selectedOfferType,
                clientContext: props.clientContext,
                offer: offer,
                loyaltyLength: props.loyaltyLength,
                onChange: function onChange() {
                    return props.selectOfferCallback(offer.id);
                }
            });
        }))))))), /*#__PURE__*/ _react.default.createElement("div", {
            className: props.channels.sales === "WWW" ? "u-hide" : "opl-console u-margin-m u-padding-right-l"
        }, /*#__PURE__*/ _react.default.createElement("label", null, props.descriptions.searchByValueLabel || "Wyszukaj wg nazwy lub indeksu materiałowego:"), /*#__PURE__*/ _react.default.createElement("div", {
            className: "opl-input-with-icon"
        }, /*#__PURE__*/ _react.default.createElement(_LabeledInput.default, {
            className: "g-white1-bg",
            onChange: props.handleChangeSearchDeviceValue,
            value: props.searchValue,
            id: "search-by-value"
        }), /*#__PURE__*/ _react.default.createElement("span", {
            className: "g-icon g-icon--only g-icon--s g-icon--search"
        })))));
    };

    var createExtOfferSelect = function createExtOfferSelect(props) {
        var selectedExtOfferSelectIndexes = props.getSelectedExtProcessSelectIndexes();

        if (!selectedExtOfferSelectIndexes) {
            return null;
        }

        var lastLevel = selectedExtOfferSelectIndexes.length - 1;
        var extProcessSelect = props.getExtProcessSelectForLevel(lastLevel);
        var selectedOption = extProcessSelect.options[selectedExtOfferSelectIndexes[lastLevel]];
        return [createExtProcessSelects(selectedExtOfferSelectIndexes, props), createLoyaltySelect(selectedOption, props), createInstallmentSelect(selectedOption, props)];
    };

    var createExtProcessSelects = function createExtProcessSelects(selectedExtOfferSelectIndexes, props) {
        return selectedExtOfferSelectIndexes.map(function(selectedExtOfferSelectIndex, level) {
            var extProcessSelect = props.getExtProcessSelectForLevel(level);
            return /*#__PURE__*/ _react.default.createElement("div", {
                className: "l-col l-col-small-12 l-col-medium-4 l-col-12 u-spacing-l"
            }, /*#__PURE__*/ _react.default.createElement(_OraFloatingLabelSelect.OraFloatingLabelSelect, {
                id: "extProcessSelectLevel-".concat(level),
                options: props.createOptionsForExtProcessSelect(extProcessSelect),
                onChange: props.selectProcessForExtProcessSelect(extProcessSelect),
                selected: selectedExtOfferSelectIndex,
                className: "opl-input--size-m",
                label: extProcessSelect.label,
                disabled: props.isDuet
            }));
        });
    };

    var createLoyaltySelect = function createLoyaltySelect(selectedOption, props) {
        if (selectedOption.showLoyalties) {
            return /*#__PURE__*/ _react.default.createElement("div", {
                className: "l-col l-col-small-12 l-col-medium-4 l-col-12  u-spacing-l"
            }, /*#__PURE__*/ _react.default.createElement(_OraFloatingLabelSelect.OraFloatingLabelSelect, {
                id: "loyaltyLengthFilter",
                options: props.loyaltyLengthsForSelect,
                onChange: props.selectLoyaltyLengthCallback,
                selected: props.selectedLoyaltyLengthValue,
                className: "opl-input--size-m",
                singleOptionClassName: "u-spacing-l u-medium-inline-block u-medium-padding-left-xxl",
                label: "Umowa",
                disabled: props.isDuet || !!props.addTerminalToOfferBundleNo
            }));
        }

        return null;
    };

    var createInstallmentSelect = function createInstallmentSelect(selectedOption, props) {
        if (selectedOption.showInstallments) {
            return /*#__PURE__*/ _react.default.createElement("div", {
                className: "l-col l-col-small-12 l-col-medium-4 l-col-12  u-spacing-l"
            }, /*#__PURE__*/ _react.default.createElement(_OraFloatingLabelSelect.OraFloatingLabelSelect, {
                id: "deviceInstallmentsCountFilter",
                options: props.deviceInstalmentsCountForSelect,
                onChange: props.selectDeviceInstalmentsCountCallback,
                selected: props.selectedDeviceInstalmentsCountValue,
                className: "opl-input--size-m",
                singleOptionClassName: "u-spacing-l u-medium-inline-block u-medium-padding-left-xxl",
                label: "Liczba rat za telefon lub urz\u0105dzenie",
                disabled: props.isDuet
            }));
        }

        return null;
    };

    var _default = OfferDeviceFilterView;
    _exports.default = _default;
});
//# sourceMappingURL=OfferDeviceFilterView.js.map