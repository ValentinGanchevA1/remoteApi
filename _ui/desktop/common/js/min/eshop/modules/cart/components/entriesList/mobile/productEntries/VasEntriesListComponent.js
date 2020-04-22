define(["exports", "react", "prop-types", "eshop/components/OraCommonComponents", "react-redux", "eshop/modules/cart/selectors", "eshop/modules/cart/components/entriesList/mobile/productEntries/VasEntryComponent", "eshop/modules/core/enum/VasUpdateStatus"], function(e, s, t, n, r, a, o, i) {
    "use strict";

    function u(s) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(s);
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
    }), e.default = void 0, s = babelHelpers.interopRequireWildcard(s), t = babelHelpers.interopRequireDefault(t), o = babelHelpers.interopRequireDefault(o), i = babelHelpers.interopRequireDefault(i);
    var l = function(e) {
        babelHelpers.inherits(r, e);
        var t = u(r);

        function r(e) {
            return babelHelpers.classCallCheck(this, r), t.call(this, e)
        }
        return babelHelpers.createClass(r, [{
            key: "getVasesForBundle",
            value: function(t) {
                return this.props.vases && this.props.vases.find(function(e) {
                    return e.bundle == t
                })
            }
        }, {
            key: "isVasInServices",
            value: function(t) {
                var e = this.getVasesForBundle(this.props.bundle);
                if (!e || !e.services) return !1;
                var r = e.services,
                    s = [];
                return r.forEach(function(e) {
                    e.id == t.productCode && s.push(t)
                }), !!s.length
            }
        }, {
            key: "mobileVasUpdatingStatus",
            value: function(e) {
                return this.props.mobileVasUpdatingStatus && this.props.mobileVasUpdatingStatus[this.props.cartBundle] && this.props.mobileVasUpdatingStatus[this.props.cartBundle][e.productCode]
            }
        }, {
            key: "getVasLoaderIdBase",
            value: function() {
                return "vasComponent-loader_" + this.props.cartBundle + "_"
            }
        }, {
            key: "hideUnusedLoaders",
            value: function(e, t) {
                var r = this;
                $("[id*=" + t + "]") && $("[id*=" + t + "]").length && $("[id*=" + t + "]").each(function() {
                    var t = $(this).attr("id");
                    e.find(function(e) {
                        return r.getVasLoaderIdBase() + e.productCode === t
                    }) || $("." + t).css({
                        display: "none"
                    })
                })
            }
        }, {
            key: "render",
            value: function() {
                var r = this,
                    e = this.props.entries.filter(function(e) {
                        return r.isVasInServices(e)
                    });
                return this.hideUnusedLoaders(e, this.getVasLoaderIdBase()), s.default.createElement("div", {
                    className: "u-position-relative"
                }, e && e.map(function(e, t) {
                    return s.default.createElement(n.OraLoader, {
                        loading: r.mobileVasUpdatingStatus(e) === i.default.UPDATING || r.mobileVasUpdatingStatus(e) === i.default.DELETED,
                        key: "loader_" + r.props.cartBundle + "_" + e.productCode,
                        id: r.getVasLoaderIdBase() + e.productCode,
                        parentId: "cart-loader",
                        useHeightFixing: !1
                    }, s.default.createElement(o.default, {
                        key: "VAS" + e.productCode + "_" + r.props.idx,
                        detailsHeader: r.props.detailsHeader,
                        entry: e,
                        cartBundle: r.props.cartBundle,
                        bundle: r.props.bundle,
                        propositionId: r.props.propositionId,
                        topBorder: !0
                    }))
                }))
            }
        }]), r
    }(s.Component);
    l.propTypes = {
        idx: t.default.number.isRequired,
        entries: t.default.arrayOf(t.default.object),
        detailsHeader: t.default.string,
        propositionId: t.default.string,
        bundle: t.default.string,
        cartBundle: t.default.string
    };
    var d = (0, r.connect)(function(e) {
        return {
            vases: (0, a.getMobileVases)(e),
            mobileVasUpdatingStatus: (0, a.getMobileVasUpdatingStatus)(e)
        }
    }, null)(l);
    e.default = d
});
//# sourceMappingURL=VasEntriesListComponent.js.map