define(["exports", "react", "react-redux", "../MultiCartItemComponent", "eshop/flux/utils/OraModalService", "../productDetails/VASDetailsModal", "eshop/modules/cart/actions/cart", "eshop/modules/cart/selectors"], function(e, n, t, o, i, a, l, r) {
    "use strict";

    function p(s) {
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
    }), e.default = void 0, n = babelHelpers.interopRequireWildcard(n), o = babelHelpers.interopRequireDefault(o), i = babelHelpers.interopRequireDefault(i), a = babelHelpers.interopRequireDefault(a);
    var s = function(e) {
        babelHelpers.inherits(s, e);
        var r = p(s);

        function s(e) {
            var t;
            return babelHelpers.classCallCheck(this, s), (t = r.call(this, e)).name = t.props.entry.bundleNo + "_" + t.props.entry.entryNo, t.isMandatoryVas = t.isMandatoryVas.bind(babelHelpers.assertThisInitialized(t)), t
        }
        return babelHelpers.createClass(s, [{
            key: "componentWillMount",
            value: function() {
                var t, r = this,
                    s = this.props.detailsHeader ? this.props.detailsHeader : "def: Szczegóły usługi";
                try {
                    t = this.props.entry.details ? JSON.parse(this.props.entry.details) : ""
                } catch (e) {
                    t = this.props.entry.details
                }
                i.default.add(function(e) {
                    return n.default.createElement(a.default, {
                        id: "productDetails-" + r.name,
                        header: s,
                        details: t,
                        icon: r.props.entry.thumbnailIcon,
                        productName: r.props.entry.name,
                        slogan: r.props.entry.slogan,
                        prices: r.props.entry.monthlyPrices
                    })
                })
            }
        }, {
            key: "onDetailsClicked",
            value: function() {
                i.default.open("productDetails-" + this.name)
            }
        }, {
            key: "isMandatoryVas",
            value: function(e, t, r) {
                return 0 < e.filter(function(e) {
                    return e.propositionId == t
                }).map(function(e) {
                    return e.services
                }).reduce(function(e, t) {
                    return e.concat(t)
                }, []).filter(function(e) {
                    return e.id == r.productCode && -1 < e.characteristics.indexOf("MANDATORY")
                }).length
            }
        }, {
            key: "onRemoveClicked",
            value: function() {
                var e = [this.props.entry.productCode];
                this.props.updateCartVases(this.props.propositionId, this.props.bundle, this.props.cartBundle, e, [])
            }
        }, {
            key: "render",
            value: function() {
                return n.default.createElement(o.default, {
                    entry: this.props.entry,
                    type: "VAS",
                    startPricePropertyName: "firstBillPrice",
                    onDetailsClicked: this.props.showDetails && this.onDetailsClicked.bind(this),
                    onChangeClicked: this.props.onChangeClicked,
                    onRemoveClicked: this.isMandatoryVas(this.props.vases, this.props.propositionId, this.props.entry) ? null : this.onRemoveClicked.bind(this),
                    topBorder: this.props.topBorder,
                    bottomBorder: !0
                })
            }
        }]), s
    }(n.Component);
    s.defaultProps = {
        showDetails: !0
    };
    var u = (0, t.connect)(function(e) {
        return {
            vases: (0, r.getMobileVases)(e)
        }
    }, function(o) {
        return {
            updateCartVases: function(e, t, r, s, n) {
                return o((0, l.updateCartVases)(e, t, r, s, n))
            }
        }
    })(s);
    e.default = u
});
//# sourceMappingURL=VasEntryComponent.js.map