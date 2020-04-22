define(["exports", "react", "react-redux", "../../selectors"], function(e, n, t, r) {
    "use strict";

    function s(n) {
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
                var r = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, r)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var o = function(e) {
            babelHelpers.inherits(r, e);
            var t = s(r);

            function r(e) {
                return babelHelpers.classCallCheck(this, r), t.call(this, e)
            }
            return babelHelpers.createClass(r, [{
                key: "toHTML",
                value: function(e) {
                    return {
                        __html: e
                    }
                }
            }, {
                key: "render",
                value: function() {
                    return this.props.isSimfreeInstOfferType && this.props.content ? n.default.createElement("div", {
                        className: "sog-banner-component u-spacing-l"
                    }, n.default.createElement("div", {
                        dangerouslySetInnerHTML: this.toHTML(this.props.content)
                    })) : null
                }
            }]), r
        }((n = babelHelpers.interopRequireWildcard(n)).Component),
        c = (0, t.connect)(function(e) {
            return {
                isSimfreeInstOfferType: (0, r.isSimfreeInstOfferType)(e)
            }
        })(o);
    e.default = c
});
//# sourceMappingURL=SogProductListBannerComponent.js.map