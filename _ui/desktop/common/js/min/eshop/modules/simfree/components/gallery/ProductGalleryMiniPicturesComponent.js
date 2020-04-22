define(["exports", "react", "react-redux", "prop-types"], function(e, o, t, l) {
    "use strict";

    function a(o) {
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
                var l = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, l)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, o = babelHelpers.interopRequireDefault(o), l = babelHelpers.interopRequireDefault(l);
    var n = function(e) {
        babelHelpers.inherits(l, e);
        var t = a(l);

        function l(e) {
            return babelHelpers.classCallCheck(this, l), t.call(this, e)
        }
        return babelHelpers.createClass(l, [{
            key: "componentDidMount",
            value: function() {
                this.loadCarousel()
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this.killModules()
            }
        }, {
            key: "componentWillUpdate",
            value: function() {
                this.killModules()
            }
        }, {
            key: "killModules",
            value: function() {
                OPL.UI.stopModules(document.getElementById("mini-carousel"))
            }
        }, {
            key: "componentDidUpdate",
            value: function() {
                this.loadCarousel()
            }
        }, {
            key: "loadCarousel",
            value: function() {
                OPL.UI.loadModules(this.ref, [{
                    path: "common/modules/opl-carousel",
                    options: {
                        asNavFor: ".opl-sticked-element .opl-wiking-gallery-single",
                        slidesToShow: 5,
                        arrows: !0,
                        slide: ".opl-wiking-gallery-navigation--item",
                        dots: !1,
                        vertical: !0,
                        verticalSwiping: !0,
                        focusOnSelect: !0
                    }
                }])
            }
        }, {
            key: "render",
            value: function() {
                var t = this;
                return o.default.createElement("div", {
                    id: "mini-carousel"
                }, o.default.createElement("div", {
                    "data-js-module": "common/modules/opl-carousel",
                    className: "opl-wiking-gallery-navigation opl-carousel-vertical-arrows u-w-100 u-spacing-top",
                    ref: function(e) {
                        return t.ref = e
                    }
                }, this.props.productVariant.mediaContent.map(function(e, t) {
                    return o.default.createElement(r, {
                        url: e.mediaImageUrl,
                        alt: e.altText,
                        key: t
                    })
                })))
            }
        }]), l
    }(o.default.Component);
    e.default = n;
    var r = function(e) {
        return o.default.createElement("div", {
            className: "opl-wiking-gallery-navigation--item "
        }, o.default.createElement("div", {
            className: "opl-feature-object opl-feature-object--zoom-in-zoom-out  opl-feature-object--wiking u-no-padding"
        }, o.default.createElement("div", {
            className: "opl-feature-object__content"
        }, o.default.createElement("div", {
            className: "opl-feature-object__inner-wrapper"
        }, o.default.createElement("div", {
            className: "opl-feature-object__inner"
        }, o.default.createElement("img", {
            src: e.url,
            alt: e.alt
        }))))))
    }
});
//# sourceMappingURL=ProductGalleryMiniPicturesComponent.js.map