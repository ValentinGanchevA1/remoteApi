define(["exports", "react", "eshop/modules/core/components/ui/TooltipFromHtml", "eshop/components/OraCommonComponents", "eshop/utils/OnlineUtils", "../../lp/offers/Sticker", "eshop/modules/configurator/components/lp/offers/newOfferBoxComponents/DetailsButtons", "../../../../core/components/ui/OraHtmlText", "eshop/modules/configurator/components/lp/offers/VasPackages"], function(_exports, _react, _TooltipFromHtml, _OraCommonComponents, _OnlineUtils, _Sticker, _DetailsButtons, _OraHtmlText, _VasPackages) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.MobilePropositionB2B = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _TooltipFromHtml = babelHelpers.interopRequireDefault(_TooltipFromHtml);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    _OraHtmlText = babelHelpers.interopRequireDefault(_OraHtmlText);
    _VasPackages = babelHelpers.interopRequireDefault(_VasPackages);

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

    var MobilePropositionB2B = /*#__PURE__*/ function(_React$PureComponent) {
        babelHelpers.inherits(MobilePropositionB2B, _React$PureComponent);

        var _super = _createSuper(MobilePropositionB2B);

        function MobilePropositionB2B(props) {
            var _this;

            babelHelpers.classCallCheck(this, MobilePropositionB2B);
            _this = _super.call(this, props);
            _this.onClick = _this.onClick.bind(babelHelpers.assertThisInitialized(_this));
            return _this;
        }

        babelHelpers.createClass(MobilePropositionB2B, [{
            key: "onClick",
            value: function onClick(e) {
                console.log("PROPOSITION");
                this.props.selectOfferCallback(this.props.offer.id);
            }
        }, {
            key: "price",
            value: function price() {
                return _OnlineUtils.default.getPaymentsForRole(this.props.offer.payments, this.props.contractRole);
            }
        }, {
            key: "oldPrice",
            value: function oldPrice() {
                return _OnlineUtils.default.getPaymentsForRole(this.props.offer.payments, "");
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                var priceObj = this.price();
                var oldPriceObj = this.oldPrice();
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-carousel__item opl-packet-box l-col l-col-3 u-margin-l u-large-margin-xl slick-slide slick-active" + (this.props.selected ? " is-selected" : " ")
                }, /*#__PURE__*/ _react.default.createElement(CarouselItem, {
                    key: "carouselItem_" + this.props.offer.id + "_" + this.props.index,
                    index: this.props.index,
                    selected: this.props.selected,
                    onClick: this.onClick,
                    showNet: this.props.showNet,
                    isB2B: this.props.isB2B,
                    priceObj: priceObj,
                    oldPriceObj: oldPriceObj,
                    customPrice: this.props.contractRole,
                    offer: this.props.offer,
                    tooltipValues: getTooltipValues(this.props.descriptions),
                    renderMobileSticker: this.props.offer.sticker !== null && Array.isArray(this.props.offer.sticker.products) && this.props.offer.sticker.products.length === 0 ? function() {
                        return /*#__PURE__*/ _react.default.createElement(_Sticker.Sticker, {
                            sticker: _this2.props.offer.sticker,
                            renderMobileVersion: false
                        });
                    } : null
                }, /*#__PURE__*/ _react.default.createElement(ChooseButton, null)));
            }
        }]);
        return MobilePropositionB2B;
    }(_react.default.PureComponent);

    _exports.MobilePropositionB2B = MobilePropositionB2B;
    var counter = 0;

    var CarouselItem = function CarouselItem() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-position-relative u-cursor-pointer ",
            onClick: props.onClick
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "opl-selection-layer",
            "aria-hidden": "true"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "opl-selection-layer__border"
        }), /*#__PURE__*/ _react.default.createElement("div", {
            className: "opl-selection-layer__checkmark"
        })), /*#__PURE__*/ _react.default.createElement("div", {
            className: "g-white1-bgc u-padding-all-l u-box-shadow--s"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-animate-height js-layout-fixer-group-2"
        }, /*#__PURE__*/ _react.default.createElement("p", {
            className: "u-margin-m js-height-sensitive-element"
        }, props.offer.rateplanName)), props.renderMobileSticker && /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-position-absolute u-position-right u-padding-right u-padding-top u-position-top"
        }, props.renderMobileSticker()), /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-animate-height js-layout-fixer-group-3"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-margin-m js-height-sensitive-element"
        }, /*#__PURE__*/ _react.default.createElement(PriceTag, {
            priceObj: props.priceObj,
            oldPriceObj: props.oldPriceObj,
            isB2B: props.isB2B,
            showNet: props.showNet,
            offer: props.offer,
            customPrice: props.customPrice,
            tooltipValues: props.tooltipValues,
            renderMobileSticker: props.renderMobileSticker
        }))), /*#__PURE__*/ _react.default.createElement("div", {
            className: "o-separator u-margin-l"
        }), /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-animate-height js-layout-fixer-group-4"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "js-height-sensitive-element u-padding-xl"
        }, /*#__PURE__*/ _react.default.createElement(ClassificationAttributesBox, props))), /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-animate-height js-layout-fixer-group-5"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "js-height-sensitive-element"
        }, /*#__PURE__*/ _react.default.createElement(_VasPackages.default, props))), /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-animate-height js-layout-fixer-group-6"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "js-height-sensitive-element"
        }, /*#__PURE__*/ _react.default.createElement(_DetailsButtons.DetailsButtons, {
            key: "detailsButton_" + counter++ // counter needed for details modals to work for B2B carousel - quick fix for carousel stopping all modules
                ,
            index: props.index,
            proposition: props.offer,
            descriptions: props.offer.descriptions,
            clientContext: props.clientContext,
            contractRole: props.customPrice
        }))), props.children));
    };

    var ChooseButton = function ChooseButton() {
        return /*#__PURE__*/ _react.default.createElement("label", {
            className: "u-w-100 u-large-hide u-medium-hide",
            htmlFor: "love1"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-acc-txt--show"
        }, /*#__PURE__*/ _react.default.createElement("button", {
            className: "opl-btn o-btn u-block u-w-100 "
        }, "Wybierz")), /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-acc-txt--hide"
        }, /*#__PURE__*/ _react.default.createElement("button", {
            className: "opl-btn o-btn u-block u-w-100 g-white1-bg g-white1-bdrc g-brand2-c",
            disabled: "disabled"
        }, "Wybrany")));
    };

    var getTooltipValues = function getTooltipValues(desc) {
        return {
            noConvergent: desc["tooltip.priceDiscount"] || "<div id=\"TOOLTIP-ID-PLACEHOLDER\"><span class=\"o-tooltip__trigger g-icon g-icon--hint g-icon--xs-s u-spacing-left-s u-cursor-pointer\"/><span class=\"o-tooltip__content o-tooltip__content--focusable\">def: Brak treści dla tooltip.priceDiscount</span></div>",
            convergent: desc["tooltip.convergentPriceDiscount"] || "<div id=\"TOOLTIP-ID-PLACEHOLDER\"><span class=\"o-tooltip__trigger g-icon g-icon--hint g-icon--xs-s u-spacing-left-s u-cursor-pointer\"/><span class=\"o-tooltip__content o-tooltip__content--focusable\">def: Brak treści dla tooltip.convergentPriceDiscount</span></div>",
            discountText: desc["discount.text"] || "<div class=\"l-row u-padding-top-s\" style=\"margin-bottom: -15px \"><p class=\"u-margin-left-m u-small-margin u-font-bold h4\">z rabatami</p></div>"
        };
    };

    var PriceTag = function PriceTag() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var price = props.priceObj && (props.showNet ? props.priceObj.basePrice.netPrice : props.priceObj.basePrice.originalGrossPrice);

        var priceSplit = _OnlineUtils.default.formatPrice(price).split(",");

        var oldPriceStr = props.oldPriceObj && props.oldPriceObj.basePrice && props.priceObj.basePrice && Number(props.oldPriceObj.basePrice.netPrice.replace(",", ".")) > Number(props.priceObj.basePrice.netPrice.replace(",", ".")) && (props.showNet ? _OnlineUtils.default.formatPrice(props.oldPriceObj.basePrice.netPrice) : _OnlineUtils.default.formatPrice(props.oldPriceObj.basePrice.originalGrossPrice));
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-w-100"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row"
        }, props.isB2B && props.customPrice && /*#__PURE__*/ _react.default.createElement("p", {
            className: "u-margin-l u-margin-left-m u-font-normal"
        }, "Cena dla Ciebie"), /*#__PURE__*/ _react.default.createElement("div", {
            style: {
                zIndex: 2
            },
            className: props.isB2B ? "l-col l-col-12 u-padding-l u-large-no-padding-right u-large-padding-left" : "l-col l-col-12 u-padding-l u-no-padding-right u-no-padding-bottom u-padding-left"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-clearfix"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-right u-small-right u-text-left u-text-nowrap",
            style: {
                minWidth: "100%"
            }
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-table u-margin-minus-right-l u-small-margin-minus-right"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-table-cell"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-price-v2 opl-medium-price-v2--l",
            "data-price": props.offer.discountedCommitment
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-price-v2__part"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-price-v2__whole"
        }, priceSplit[0])), /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-price-v2__part"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-price-v2__separator"
        }, ","), /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-price-v2__decimal"
        }, priceSplit[1]), /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-price-v2__suffix u-padding-s"
        }, "z\u0142/mies.", props.showNet && " + VAT"))), !props.isB2B && /*#__PURE__*/ _react.default.createElement(_OraHtmlText.default, null, props.tooltipValues && props.tooltipValues.discountText), oldPriceStr && /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row u-padding-top-l"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-margin-left-m u-small-margin"
        }, /*#__PURE__*/ _react.default.createElement("p", {
            className: "u-font-bold g-gray5-c u-text-line-through"
        }, oldPriceStr, " z\u0142/mies.", props.showNet && " + VAT")))), /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-table-cell u-vertical-top"
        }, oldPriceStr && props.tooltipValues ? _TooltipFromHtml.default.conditionalRender(props.tooltipValues["convergent"]) : _TooltipFromHtml.default.conditionalRender(props.tooltipValues["noConvergent"]))))))), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-3"
        }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraLoader, {
            loading: props.getContractRoleInProgress,
            size: "m",
            id: "contract-role-loader-" + props.offer.id.replace("$", "-"),
            parentId: "offerb2b-filter-loader"
        }))));
    };

    var ClassificationAttributesBox = function ClassificationAttributesBox(props) {
        return /*#__PURE__*/ _react.default.createElement("div", null, props.offer.features.featureGroups.boxFeatures.map(function(feature, index, array) {
            return /*#__PURE__*/ _react.default.createElement(Feature, {
                key: feature.code + "_" + props.offer.id + "_" + index,
                removeClassFromLast: true,
                feature: feature,
                className: "u-padding-l",
                length: array.length,
                index: index,
                processType: props.offer.processType,
                convergence: props.offer.convergence
            });
        }));
    };

    var Feature = function Feature(props) {
        if ((props.feature.processes.length === 0 || props.feature.processes.find(function(process) {
                return process === props.processType;
            })) && (!props.feature.clientContext || props.convergence === props.feature.clientContext)) {
            var innerHtml = {
                __html: props.feature.featureValues[0].value
            };
            var className = props.removeClassFromLast ? props.length - 1 === props.index ? "" : props.className : props.className; //           return <p className={className} dangerouslySetInnerHTML={innerHtml}></p>

            return _TooltipFromHtml.default.conditionalRenderWithClassName(props.feature.featureValues[0].value, className);
        } else {
            return null;
        }
    };
});
//# sourceMappingURL=MobilePropositionB2B.js.map