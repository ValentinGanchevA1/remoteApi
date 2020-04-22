define(["exports", "react", "react-redux", "eshop/modules/simfree/components/gallery/ProductGalleryComponent", "eshop/modules/simfree/components/comparator/ComparatorCheckbox", "eshop/modules/simfree/actions/app", "eshop/modules/simfree/selectors", "eshop/modules/configurator/selectors/filters", "../../actions/app"], function(e, l, t, s, i, a, n, r, c) {
    "use strict";

    function o(l) {
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
    }), e.default = void 0, l = babelHelpers.interopRequireDefault(l), s = babelHelpers.interopRequireDefault(s), i = babelHelpers.interopRequireDefault(i);
    var d = function(e) {
            babelHelpers.inherits(a, e);
            var t = o(a);

            function a(e) {
                return babelHelpers.classCallCheck(this, a), t.call(this, e)
            }
            return babelHelpers.createClass(a, [{
                key: "componentWillMount",
                value: function() {}
            }, {
                key: "findProductVariant",
                value: function() {
                    for (var e = 0; e < this.props.deviceData.variantList.length; e++)
                        if (this.props.deviceData.variantList[e].productId == this.props.selectedVariant || !this.props.selectedVariant && this.props.deviceData.variantList[e].productId == this.props.deviceData.selectedVariant) return this.props.deviceData.variantList[e]
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    this.props.setSelectedBaseDeviceCode(this.props.deviceData.productId), OPL.UI.loadModules(document.getElementById("sticked-container"), [{
                        path: "common/modules/opl-sticker",
                        options: {
                            stayDown: !0
                        },
                        conditions: "media:{gt-medium}"
                    }]), this.props.changeCategory({
                        code: this.props.deviceData.deviceCategory
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var t = this;
                    return l.default.createElement("div", {
                        ref: function(e) {
                            return t.ref = e
                        }
                    }, l.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-12  u-large-hide u-medium-padding-left-l u-small-padding-left-l u-medium-padding-right-l u-small-padding-right-l"
                    }, l.default.createElement("h2", {
                        "data-skiplinks": "Podstawowe informacje o produkcie",
                        className: "h1 u-medium-no-spacing",
                        tabIndex: "-1",
                        id: "skiplinks831"
                    }, this.props.deviceData.name)), this._renderRatingStars(), l.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-12 l-col-6  u-text-center u-medium-padding-left-l u-small-padding-left-l u-medium-padding-right-l u-small-padding-right-l u-position-static"
                    }, l.default.createElement(s.default, {
                        productVariant: this.findProductVariant(),
                        sticker: this.getStickerForSelectedProcess()
                    })))
                }
            }, {
                key: "getStickerForSelectedProcess",
                value: function() {
                    return this.props.deviceData.sticker && this.props.deviceData.sticker.availableProcesses.includes(this.props.selectedProcess) ? this.props.deviceData.sticker : null
                }
            }, {
                key: "_renderRatingStars",
                value: function() {
                    return l.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-8"
                    }, l.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-6 u-large-hide u-padding-m u-medium-padding-left-l u-small-padding-left-l u-medium-padding-right-l u-small-padding-right-l"
                    }, l.default.createElement("div", {
                        className: "opl-rating"
                    }, l.default.createElement("span", {
                        className: "g-icon g-icon--star g-icon--s"
                    }), l.default.createElement("span", {
                        className: "g-icon g-icon--star g-icon--s"
                    }), l.default.createElement("span", {
                        className: "g-icon g-icon--star g-icon--s"
                    }), l.default.createElement("span", {
                        className: "g-icon g-icon--star g-icon--s"
                    }), l.default.createElement("span", {
                        className: "g-icon g-icon--star g-icon--s"
                    }), l.default.createElement("div", {
                        style: {
                            width: this.props.deviceData.percentageRating
                        },
                        className: "opl-rating-bar"
                    }, l.default.createElement("span", {
                        className: "g-icon g-icon--star g-icon--s"
                    }), l.default.createElement("span", {
                        className: "g-icon g-icon--star g-icon--s"
                    }), l.default.createElement("span", {
                        className: "g-icon g-icon--star g-icon--s"
                    }), l.default.createElement("span", {
                        className: "g-icon g-icon--star g-icon--s"
                    }), l.default.createElement("span", {
                        className: "g-icon g-icon--star g-icon--s"
                    }))), l.default.createElement("p", {
                        className: "small g-gray3-c u-inline-block"
                    }, "(", this.props.deviceData.numberOfReviewsCustomers, ")")), l.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-4 u-small-padding-top-s u-medium-padding-top-s u-large-hide u-medium-padding-left-l u-small-padding-left-l u-medium-padding-right-l u-small-padding-right-l"
                    }, l.default.createElement(i.default, {
                        product: this.props.deviceData
                    })))
                }
            }]), a
        }(l.default.Component),
        u = (0, t.connect)(function(e) {
            return {
                selectedVariant: (0, n.getSelectedVariant)(e),
                imageUrl: (0, n.getProductImageUrl)(e),
                selectedProcess: (0, r.getSelectedProcessTypeValue)(e)
            }
        }, function(t) {
            return {
                setSelectedBaseDeviceCode: function(e) {
                    return t((0, a.setSelectedBaseDeviceCode)(e))
                },
                changeCategory: function(e) {
                    return t((0, c.changeCategory)(e))
                }
            }
        })(d);
    e.default = u
});
//# sourceMappingURL=ProductDetailsDeviceComponent.js.map