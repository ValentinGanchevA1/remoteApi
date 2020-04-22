define(["exports", "react", "react-redux", "eshop/modules/simfree/components/gallery/ProductGalleryMiniPicturesComponent", "eshop/modules/simfree/components/gallery/ProductGalleryLargePictureComponent", "eshop/modules/configurator/selectors/filters", "eshop/modules/configurator/selectors/offers"], function(e, l, t, s, o, r, c) {
    "use strict";

    function n(l) {
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
                var r = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, r)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, l = babelHelpers.interopRequireWildcard(l), s = babelHelpers.interopRequireDefault(s), o = babelHelpers.interopRequireDefault(o);
    var i = function(e) {
            babelHelpers.inherits(r, e);
            var t = n(r);

            function r(e) {
                return babelHelpers.classCallCheck(this, r), t.call(this, e)
            }
            return babelHelpers.createClass(r, [{
                key: "render",
                value: function() {
                    return l.default.createElement("div", {
                        className: "l-row opl-sticked-element"
                    }, l.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-2 l-col-2  u-small-hide"
                    }, l.default.createElement(s.default, {
                        productVariant: this.props.productVariant
                    })), l.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-10 l-col-10",
                        id: "main-picture-container"
                    }, l.default.createElement(o.default, {
                        productVariant: this.props.productVariant,
                        sticker: null !== this.props.sticker && (this.props.sticker.propositionItems && 0 === this.props.sticker.propositionItems.length || this.props.sticker.propositionItems.includes(this.props.selectedOfferId)) ? this.props.sticker : null,
                        selectedOfferType: this.props.selectedOfferType
                    })))
                }
            }]), r
        }(l.default.Component),
        a = (0, t.connect)(function(e) {
            return {
                selectedOfferType: (0, r.getSelectedOfferType)(e),
                selectedOfferId: (0, c.getSelectedOfferId)(e)
            }
        })(i);
    e.default = a
});
//# sourceMappingURL=ProductGalleryComponent.js.map