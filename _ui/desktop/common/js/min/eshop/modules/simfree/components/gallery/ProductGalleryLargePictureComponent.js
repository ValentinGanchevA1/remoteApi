define(["exports", "react", "react-redux", "../../../configurator/components/lp/offers/Sticker"], function(e, n, t, o) {
    "use strict";

    function i(n) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(n);
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
                var o = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, o)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var l = function(e) {
        babelHelpers.inherits(o, e);
        var t = i(o);

        function o(e) {
            return babelHelpers.classCallCheck(this, o), t.call(this, e)
        }
        return babelHelpers.createClass(o, [{
            key: "componentDidMount",
            value: function() {
                this.loadModules()
            }
        }, {
            key: "componentWillUpdate",
            value: function() {
                o.killModules()
            }
        }, {
            key: "componentDidUpdate",
            value: function() {
                this.loadModules()
            }
        }, {
            key: "loadModules",
            value: function() {
                OPL.UI.loadModules(this.ref, [{
                    path: "common/modules/opl-width-fixer",
                    options: {
                        item: ".opl-wiking-gallery-single--item",
                        extendHeight: 20
                    }
                }, {
                    path: "common/modules/opl-carousel",
                    options: {
                        asNavFor: ".opl-sticked-element .opl-wiking-gallery-navigation",
                        slidesToScroll: 1,
                        slidesToShow: 1,
                        arrows: !1,
                        slide: ".opl-wiking-gallery-single--item",
                        dots: !1,
                        fade: !0,
                        responsive: [{
                            breakpoint: 767,
                            settings: {
                                dots: !0
                            }
                        }]
                    }
                }, {
                    path: "common/modules/opl-image-zoom",
                    conditions: "media:{gt-medium}",
                    options: {
                        zoomWindowOffsetY: 70,
                        zoomContainerAppendTo: ".opl-product-page",
                        zoomWindowOffsetXAlignContainer: "#product-basic-information",
                        zoomWindowWidthAlignContainer: "#product-basic-information"
                    }
                }])
            }
        }, {
            key: "render",
            value: function() {
                var o = this;
                return n.default.createElement("div", {
                    ref: function(e) {
                        return o.ref = e
                    },
                    className: "opl-wiking-gallery-single u-margin"
                }, this.props.productVariant.mediaContent.map(function(e, t) {
                    return n.default.createElement(r, {
                        url: e.mediaImageUrl,
                        alt: e.altText,
                        key: t,
                        sticker: o.props.sticker,
                        selectedOfferType: o.props.selectedOfferType
                    })
                }))
            }
        }], [{
            key: "killModules",
            value: function() {
                OPL.UI.stopModules(document.getElementById("main-picture-container"))
            }
        }]), o
    }((n = babelHelpers.interopRequireDefault(n)).default.Component);
    e.default = l;
    var r = function(e) {
        return n.default.createElement("div", {
            "data-image-large": e.url,
            className: "opl-wiking-gallery-single--item u-position-relative"
        }, n.default.createElement("div", {
            className: "opl-wiking-gallery-single--wrapper u-position-relative"
        }, n.default.createElement(o.Sticker, {
            sticker: e.sticker,
            className: "u-position-absolute"
        }), n.default.createElement("img", {
            src: e.url,
            alt: e.alt,
            "data-zoom-image": e.url,
            className: "image-zoom-item"
        })))
    }
});
//# sourceMappingURL=ProductGalleryLargePictureComponent.js.map