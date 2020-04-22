define(["exports", "react", "react-redux", "eshop/modules/simfree/actions/app", "eshop/modules/simfree/selectors", "eshop/modules/core/components/ui/NoTriggerTooltip", "eshop/modules/simfree/components/ProductStorageCapacityComponent", "eshop/modules/simfree/components/comparator/ComparatorCheckbox"], function(e, o, t, r, a, n, l, i) {
    "use strict";

    function c(l) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(l);
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
                var a = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, a)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, o = babelHelpers.interopRequireWildcard(o), n = babelHelpers.interopRequireDefault(n), l = babelHelpers.interopRequireDefault(l), i = babelHelpers.interopRequireDefault(i);
    var s = function(e) {
            babelHelpers.inherits(a, e);
            var t = c(a);

            function a(e) {
                return babelHelpers.classCallCheck(this, a), t.call(this, e)
            }
            return babelHelpers.createClass(a, [{
                key: "componentDidMount",
                value: function() {
                    this.setSelectedVariant({
                        productId: this.props.deviceData.selectedVariant
                    })
                }
            }, {
                key: "findProductVariant",
                value: function() {
                    for (var e = 0; e < this.props.deviceData.variantList.length; e++)
                        if (this.props.deviceData.variantList[e].productId == this.props.selectedVariant || !this.props.selectedVariant && this.props.deviceData.variantList[e].productId == this.props.deviceData.selectedVariant) return this.props.deviceData.variantList[e]
                }
            }, {
                key: "_renderSeparator",
                value: function() {
                    return o.default.createElement("div", {
                        className: "l-col l-col-12  u-padding-l u-medium-padding-left-l u-small-padding-left-l u-medium-padding-right-l u-small-padding-right-l"
                    }, o.default.createElement("div", {
                        className: "o-separator u-padding-top-l"
                    }))
                }
            }, {
                key: "setSelectedVariant",
                value: function(e, t, a) {
                    this.props.setSelectedVariant(e, t, a), this.props.setSelectedVariantObject(this.findProductVariant())
                }
            }, {
                key: "setVariantDueToElements",
                value: function(e, t) {
                    var a = this.findProductVariant(),
                        l = jQuery.extend({}, a.setOf),
                        i = a;
                    l[t] = e.productId, this.props.deviceData.variantList.map(function(e) {
                        JSON.stringify(e.setOf) === JSON.stringify(l) && (i = e)
                    }), this.setSelectedVariant(i, t, i.colorUrl)
                }
            }, {
                key: "_renderSetColors",
                value: function() {
                    var r = this.props.deviceData.setOf,
                        n = [],
                        c = this;
                    return Object.keys(r).forEach(function(e, t, a) {
                        var l = r[e],
                            i = c.findProductVariant().setOf[e];
                        n.push(o.default.createElement(d, {
                            key: "colorFor_" + e,
                            deviceName: l.name,
                            deviceData: l,
                            selectedVariant: i,
                            onClickHandler: c.setVariantDueToElements.bind(c),
                            variantList: l.variantList,
                            showSeparator: !c.isLast(t, a)
                        }))
                    }), n
                }
            }, {
                key: "isLast",
                value: function(e, t) {
                    return e === t.length - 1
                }
            }, {
                key: "render",
                value: function() {
                    return o.default.createElement("div", null, o.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-8 l-col-12  u-small-padding-l u-medium-padding-left-l u-small-padding-left-l u-medium-padding-right-l u-small-padding-right-l"
                    }, o.default.createElement("h1", {
                        className: "h1 u-spacing"
                    }, this.props.deviceData.name)), o.default.createElement("div", {
                        className: "l-col l-col-12"
                    }, o.default.createElement("div", {
                        className: "l-col l-col-4 u-small-hide u-medium-hide"
                    }, o.default.createElement("div", {
                        className: "opl-rating"
                    }, o.default.createElement("span", {
                        className: "g-icon g-icon--star g-icon--s"
                    }), o.default.createElement("span", {
                        className: "g-icon g-icon--star g-icon--s"
                    }), o.default.createElement("span", {
                        className: "g-icon g-icon--star g-icon--s"
                    }), o.default.createElement("span", {
                        className: "g-icon g-icon--star g-icon--s"
                    }), o.default.createElement("span", {
                        className: "g-icon g-icon--star g-icon--s"
                    }), o.default.createElement("div", {
                        style: {
                            width: this.props.deviceData.percentageRating
                        },
                        className: "opl-rating-bar"
                    }, o.default.createElement("span", {
                        className: "g-icon g-icon--star g-icon--s"
                    }), o.default.createElement("span", {
                        className: "g-icon g-icon--star g-icon--s"
                    }), o.default.createElement("span", {
                        className: "g-icon g-icon--star g-icon--s"
                    }), o.default.createElement("span", {
                        className: "g-icon g-icon--star g-icon--s"
                    }), o.default.createElement("span", {
                        className: "g-icon g-icon--star g-icon--s"
                    }))), o.default.createElement("p", {
                        className: "small g-gray3-c u-padding-left-s u-inline-block"
                    }, "(", this.props.deviceData.numberOfReviewsCustomers, ")"), o.default.createElement("p", {
                        className: "u-acc-hide"
                    }, this.props.deviceData.numberOfReviewsCustomers, " opini")), o.default.createElement("div", {
                        className: "l-col l-col-4 u-padding-top-s u-small-hide u-medium-hide"
                    }, o.default.createElement(i.default, {
                        product: this.props.deviceData
                    }))), o.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-6 l-col-4  u-medium-hide u-medium-padding-left-l u-small-padding-left-l u-medium-padding-right-l u-small-padding-right-l"
                    }, o.default.createElement("div", {
                        className: "u-display_table  u-hide"
                    }, o.default.createElement("p", {
                        className: "u-display_table-cell u-text-right u-small-padding-right-m"
                    }, "Podziel się"), o.default.createElement("a", {
                        href: "#",
                        className: "u-display_table-cell u-text-right g-icon g-icon--social-facebook-2 g-icon--xs-s u-small-padding-right-m"
                    }), o.default.createElement("a", {
                        href: "#",
                        className: "u-display_table-cell u-text-right g-icon g-icon--mail g-icon--xs-s"
                    }))), o.default.createElement("div", {
                        className: "l-col l-col-12  u-padding-l u-medium-padding-left-l u-small-padding-left-l u-medium-padding-right-l u-small-padding-right-l"
                    }, o.default.createElement("div", {
                        className: "o-separator u-padding-top-l"
                    })), o.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-8 l-col-6  u-small-padding-l u-medium-padding-left-l u-small-padding-left-l u-medium-padding-right-l u-small-padding-right-l"
                    }, !this.props.deviceData.isSet && o.default.createElement(d, {
                        deviceData: this.props.deviceData,
                        selectedVariant: this.props.selectedVariant,
                        onClickHandler: this.setSelectedVariant.bind(this),
                        variantList: this.props.deviceData.variantList,
                        showSeparator: !1
                    }), this.props.deviceData.isSet && this._renderSetColors()), o.default.createElement(l.default, null), o.default.createElement("div", {
                        className: "l-col l-col-12  u-padding-l u-medium-padding-left-l u-small-padding-left-l u-medium-padding-right-l u-small-padding-right-l"
                    }, o.default.createElement("div", {
                        className: "o-separator u-padding-top-l"
                    })))
                }
            }]), a
        }(o.Component),
        d = function(a) {
            var e, t, l, i = (e = a.variantList, t = a.selectedVariant, l = "", e.map(function(e) {
                e.productId == t && (l = e.colorDefinition[0].name)
            }), l);
            return o.default.createElement("div", {
                className: "l-col l-col-small-12 l-col-medium-12 l-col-12 ",
                id: "product-basic-information"
            }, o.default.createElement("div", {
                className: "l-row u-display_table"
            }, o.default.createElement("div", {
                className: "l-col l-col-12  u-display_table-row",
                "aria-hidden": "true"
            }, o.default.createElement("span", {
                className: "u-padding-right-s"
            }, "Kolor ", a.deviceName && a.deviceName, ":"), o.default.createElement("span", {
                className: "u-font-bold"
            }, " ", i)), o.default.createElement("div", {
                className: "l-col l-col-12  u-display_table-row u-padding-top-m"
            }, o.default.createElement("div", {
                className: "opl-color-chooser"
            }, o.default.createElement("fieldset", null, o.default.createElement("legend", {
                className: "u-acc-hide"
            }, "Kolor telefonu"), a.variantList.map(function(e) {
                var t = e && e.colorDefinition && e.colorDefinition[0] && e.colorDefinition[0].cssCode && e.colorDefinition[0].cssCode;
                if (e.colorDefinition) return o.default.createElement(n.default, {
                    id: "colorVariantTooltip" + e.productId,
                    key: "colorVariantTooltip" + e.productId,
                    tooltipContent: "Kolor: " + e.colorDefinition[0].name,
                    className: "u-inline"
                }, o.default.createElement("label", {
                    className: "opl-color-chooser__item o-tooltip__trigger o-tooltip--top tooltipstered",
                    key: "color-chooser-" + e.productId,
                    onClick: function() {
                        return a.onClickHandler(e, a.deviceData.productId, e.colorUrl)
                    },
                    "data-tooltip-trigger-event": "mouseover"
                }, o.default.createElement("input", {
                    type: "radio",
                    name: "color_" + a.deviceData.productId,
                    value: e.productId,
                    checked: e.productId == a.selectedVariant,
                    onChange: function() {
                        return a.onClickHandler(e, a.deviceData.productId, e.colorUrl)
                    }
                }), o.default.createElement("span", {
                    className: "opl-color-chooser__color",
                    style: {
                        background: t
                    }
                }), o.default.createElement("span", {
                    className: "opl-color-chooser__label"
                }, e && e.colorUrl)))
            }))))), a.showSeparator && o.default.createElement("div", {
                className: "o-separator u-padding-top-l"
            }))
        },
        u = (0, t.connect)(function(e) {
            return {
                selectedVariant: (0, a.getSelectedVariant)(e)
            }
        }, function(l, i) {
            return {
                setSelectedVariant: function(e, t, a) {
                    return l((0, r.setSelectedVariant)(e, a, i.filterState))
                },
                setSelectedVariantObject: function(e) {
                    return l((0, r.setSelectedVariantObject)(e))
                }
            }
        })(s);
    e.default = u
});
//# sourceMappingURL=ProductDetailsHeaderAndColorComponent.js.map