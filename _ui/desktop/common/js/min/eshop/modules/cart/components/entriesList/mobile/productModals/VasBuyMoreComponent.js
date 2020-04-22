define(["exports", "react", "prop-types", "react-redux", "./BuyMoreProductsComponent", "./VasModal", "eshop/components/OraCommonComponents", "eshop/modules/cart/actions/cart", "eshop/modules/core/enum/VasUpdateStatus", "eshop/modules/cart/selectors"], function(e, n, t, r, o, i, a, l, u, s) {
    "use strict";

    function c(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(t);
            e && (s = s.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, s)
        }
        return r
    }

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
    }), e.default = void 0, n = babelHelpers.interopRequireWildcard(n), t = babelHelpers.interopRequireDefault(t), o = babelHelpers.interopRequireDefault(o), i = babelHelpers.interopRequireDefault(i), u = babelHelpers.interopRequireDefault(u);
    var d = function(e) {
        babelHelpers.inherits(s, e);
        var r = p(s);

        function s(e) {
            var t;
            return babelHelpers.classCallCheck(this, s), (t = r.call(this, e)).state = {
                modalVisible: !1
            }, t.addButtonClicked = t.addButtonClicked.bind(babelHelpers.assertThisInitialized(t)), t.closeModalClicked = t.closeModalClicked.bind(babelHelpers.assertThisInitialized(t)), t
        }
        return babelHelpers.createClass(s, [{
            key: "componentWillMount",
            value: function() {
                this.props.entry.bundleCode && this.props.entry.productCode && this.props.entry.processType && this.props.fetchMobileVases(this.props.entry.bundleCode, this.props.entry.productCode, this.props.entry.processType)
            }
        }, {
            key: "addButtonClicked",
            value: function() {
                this.setState({
                    modalVisible: !0
                }, function() {}.bind(this))
            }
        }, {
            key: "closeModalClicked",
            value: function() {
                this.setState({
                    modalVisible: !1
                }, function() {}.bind(this))
            }
        }, {
            key: "containsVases",
            value: function() {
                var t = this,
                    e = (this.props.vases || []).filter(function(e) {
                        return e.propositionId == t.props.entry.bundleCode
                    });
                return 0 < e.length && e[0].services && 0 < e[0].services.length
            }
        }, {
            key: "isAnyVasUpdating",
            value: function() {
                var e = this.props.mobileVasUpdatingStatus;
                if (e[this.props.entry.bundleNo])
                    for (var t = Object.values(e[this.props.entry.bundleNo]), r = 0; r < t.length; r++)
                        if (t[r] == u.default.UPDATING) return !0;
                return !1
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props.detailsHeader ? this.props.detailsHeader : "Szczegóły";
                this.props.entry.vases && this.props.entry.vases.length;
                if (this.containsVases()) {
                    var t = f(this.props.vases, this.props.entry);
                    return n.default.createElement("div", {
                        className: "g-white1-bg"
                    }, n.default.createElement(a.OraLoader, {
                        loading: this.isAnyVasUpdating(),
                        key: "loader_" + this.props.entry.bundleNo + "_buyMore",
                        id: "vasComponent-loader" + this.props.entry.bundleNo + "_buyMore",
                        parentId: "cart-loader",
                        useHeightFixing: !1
                    }, n.default.createElement(o.default, {
                        addButtonClicked: this.addButtonClicked,
                        icon: this.props.icon,
                        buyMoreLabel: this.props.buyMoreLabel
                    })), n.default.createElement(i.default, {
                        cartVases: this.props.entry.vases,
                        vases: t,
                        header: e,
                        cartBundle: "" + this.props.entry.bundleNo,
                        bundle: this.props.entry.productCode,
                        propositionId: this.props.entry.bundleCode,
                        open: this.state.modalVisible,
                        onClose: this.closeModalClicked,
                        idx: this.props.idx
                    }))
                }
                return null
            }
        }]), s
    }(n.Component);
    d.propTypes = {
        idx: t.default.number,
        entry: t.default.object,
        fetchMobileVases: t.default.func,
        vases: t.default.array
    };
    var b = (0, r.connect)(function(e) {
        return {
            vases: (0, s.getMobileVases)(e),
            mobileVasUpdatingStatus: (0, s.getMobileVasUpdatingStatus)(e)
        }
    }, function(s) {
        return {
            fetchMobileVases: function(e, t, r) {
                return s((0, l.fetchMobileVases)(e, t, r))
            }
        }
    })(d);
    e.default = b;
    var f = function(e, t) {
            var r = m(e, t.bundleCode),
                s = v(y(t.vases, h)),
                n = (r.relations || []).filter(function(e) {
                    return "EXCLUDE" === e.type
                });
            return [function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? c(Object(r), !0).forEach(function(e) {
                        babelHelpers.defineProperty(t, e, r[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }({}, r, {
                services: (r.services || []).filter(function(t) {
                    return !n.some(function(e) {
                        return [].concat(babelHelpers.toConsumableArray(e.sourceVases), babelHelpers.toConsumableArray(e.targetVases)).includes(t.id) && [].concat(babelHelpers.toConsumableArray(e.sourceVases), babelHelpers.toConsumableArray(e.targetVases)).some(function(e) {
                            return s.includes(e)
                        })
                    })
                })
            })]
        },
        h = "GratisPackageBonuses",
        y = function(e, t) {
            return e && t && e.filter(function(e) {
                return e.categories && e.categories.includes(t)
            }) || []
        },
        v = function(e) {
            return e && e.map(function(e) {
                return e.productCode
            }) || []
        },
        m = function(e, t) {
            return (e || []).find(function(e) {
                return e.propositionId === t
            })
        }
});
//# sourceMappingURL=VasBuyMoreComponent.js.map