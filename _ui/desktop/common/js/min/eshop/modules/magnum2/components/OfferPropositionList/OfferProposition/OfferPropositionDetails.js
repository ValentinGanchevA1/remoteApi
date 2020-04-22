define(["exports", "react", "prop-types", "eshop/flux/utils/OraModalService", "eshop/modules/cart/components/entriesList/shared/productDetails/OfferDetailsModal"], function(e, o, t, i, n) {
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
                var r = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, r)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, o = babelHelpers.interopRequireWildcard(o), t = babelHelpers.interopRequireDefault(t), i = babelHelpers.interopRequireDefault(i), n = babelHelpers.interopRequireDefault(n);
    var r = function(e) {
        babelHelpers.inherits(r, e);
        var t = a(r);

        function r() {
            return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
        }
        return babelHelpers.createClass(r, [{
            key: "componentDidMount",
            value: function() {
                this.registerModalServiceSelectedPropositionDetails()
            }
        }, {
            key: "registerModalServiceSelectedPropositionDetails",
            value: function() {
                var t = this,
                    r = this.props.proposition;
                r && i.default.add(function(e) {
                    return o.default.createElement(n.default, {
                        id: "offer_proposition_details_" + r.code,
                        header: "Szczegóły",
                        broadband: r.broadband,
                        tv: r.tvProduct,
                        tvPackages: r.tvPackages,
                        voip: r.voip,
                        voice: r.voice,
                        data: r.data,
                        transactions: t.props.transactions
                    })
                })
            }
        }, {
            key: "openDetailsModal",
            value: function() {
                i.default.open("offer_proposition_details_" + this.props.proposition.code)
            }
        }, {
            key: "render",
            value: function() {
                var e = this,
                    t = (this.props.proposition, this.props.linkName);
                return o.default.createElement("a", {
                    href: "#",
                    className: "u-inline-block u-spacing-right",
                    onClick: function() {
                        return e.openDetailsModal()
                    }
                }, t)
            }
        }]), r
    }(o.PureComponent);
    babelHelpers.defineProperty(r, "propTypes", {
        linkName: t.default.string,
        proposition: t.default.object,
        transactions: t.default.object
    });
    var s = r;
    e.default = s
});
//# sourceMappingURL=OfferPropositionDetails.js.map