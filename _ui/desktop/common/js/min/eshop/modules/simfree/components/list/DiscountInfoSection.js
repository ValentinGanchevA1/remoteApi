define(["exports", "react", "react-redux", "prop-types", "eshop/modules/configurator/selectors/filters"], function(e, n, t, r, l) {
    "use strict";

    function o(n) {
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
    }), e.default = void 0, n = babelHelpers.interopRequireWildcard(n), r = babelHelpers.interopRequireDefault(r);
    var s = function(e) {
        babelHelpers.inherits(r, e);
        var t = o(r);

        function r() {
            return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
        }
        return babelHelpers.createClass(r, [{
            key: "render",
            value: function() {
                if (this.props.isB2B) return null;
                var e = this.getDescription(this.props.content, this.props.offerType);
                return e && !this.props.isB2B ? n.default.createElement("div", {
                    className: "l-row"
                }, n.default.createElement("div", {
                    className: "l-col l-col-small-12 u-spacing-top-l u-spacing-l"
                }, n.default.createElement("div", {
                    dangerouslySetInnerHTML: this.toHTML(e)
                }))) : null
            }
        }, {
            key: "getDescription",
            value: function(e, t) {
                return e[Object.keys(e).find(function(e) {
                    return -1 !== e.indexOf(t)
                })]
            }
        }, {
            key: "toHTML",
            value: function(e) {
                return {
                    __html: e
                }
            }
        }]), r
    }(n.Component);
    s.propTypes = {
        offerType: r.default.string,
        content: r.default.object
    };
    var u = s = (0, t.connect)(function(e) {
        return {
            offerType: (0, l.getSelectedOfferType)(e),
            isB2B: "B2B" === (0, l.getMarketContext)(e)
        }
    }, null)(s);
    e.default = u
});
//# sourceMappingURL=DiscountInfoSection.js.map