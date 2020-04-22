define(["exports", "react", "prop-types", "lodash", "../../../../analyzer/Analyzer", "../../RelationTypeEnum", "../../../../../core/constants/FactoryTypeEnum"], function(e, a, t, i, P, u, o) {
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
    }), e.default = void 0, a = babelHelpers.interopRequireWildcard(a), t = babelHelpers.interopRequireDefault(t), i = babelHelpers.interopRequireDefault(i), u = babelHelpers.interopRequireDefault(u), o = babelHelpers.interopRequireDefault(o);
    var r = function(e) {
        babelHelpers.inherits(n, e);
        var r = s(n);

        function n(e) {
            var t;
            return babelHelpers.classCallCheck(this, n), (t = r.call(this, e)).state = t.createState(e), t.onClick = t.onClick.bind(babelHelpers.assertThisInitialized(t)), t.onSave = t.onSave.bind(babelHelpers.assertThisInitialized(t)), t
        }
        return babelHelpers.createClass(n, [{
            key: "componentWillReceiveProps",
            value: function(e) {
                this.setState(this.createState(e))
            }
        }, {
            key: "componentDidUpdate",
            value: function(e) {
                !(!0 === this.props.triggerCartRecalculation && this.props.triggerCartRecalculation !== e.triggerCartRecalculation) && i.default.isEqual(e.configurables.map(function(e) {
                    return e.relations
                }), this.props.configurables.map(function(e) {
                    return e.relations
                })) || this.recalculateCart()
            }
        }, {
            key: "createState",
            value: function(e) {
                var t = {
                    productStatuses: this.createProductStatuses(e.presentableProducts, e.cartProducts),
                    autoadded: this.collectAutoadded(e) || [],
                    hidden: this.getHiddenProducts(e) ? this.getHiddenProducts(e) : []
                };
                return t
            }
        }, {
            key: "createProductStatuses",
            value: function(e, t) {
                var r = this.initializeProductStatuses(e);
                return this.markProductsInCartAsSelected(r, t), r
            }
        }, {
            key: "collectAutoadded",
            value: function(e) {
                return e.entry.entries.reduce(function(e, t) {
                    return Object.assign(e, babelHelpers.defineProperty({}, t.propositionId, "FIX" === t.entryType ? t.autoadded : null))
                }, {})
            }
        }, {
            key: "initializeProductStatuses",
            value: function(e) {
                var r = {};
                return i.default.forEach(e, function(e, t) {
                    r[t] = {}, i.default.forEach(e, function(e) {
                        r[t][e] = !1
                    })
                }), r
            }
        }, {
            key: "markProductsInCartAsSelected",
            value: function(r, e) {
                i.default.forEach(e, function(e, t) {
                    r[t] || (r[t] = {}), i.default.isArray(e) ? i.default.forEach(e, function(e) {
                        return r[t][e] = !0
                    }) : r[e] = !0
                })
            }
        }, {
            key: "hasProductBeenSelected",
            value: function(e, t) {
                return this.state.productStatuses[t] && this.state.productStatuses[t][e]
            }
        }, {
            key: "productSelected",
            value: function(e, t) {
                this.hasProductBeenSelected(e, t) || this.productStatusChanged(e, t)
            }
        }, {
            key: "getHiddenProducts",
            value: function(e) {
                return i.default.uniq(i.default.flatMap(e.entry.entries, function(e) {
                    return e.hidden
                }))
            }
        }, {
            key: "recalculateCart",
            value: function() {
                this.productStatusChanged(null, null, function() {})
            }
        }, {
            key: "productStatusChanged",
            value: function(l, d, e) {
                var f = this,
                    p = this.hasProductBeenSelected(l, d),
                    h = {},
                    v = {},
                    y = {},
                    b = {},
                    S = [];
                i.default.forEach(this.state.productStatuses, function(e, t) {
                    var r = f.calculateFactory(t),
                        n = f.extractSelectedProductsFromProductStatuses(e),
                        a = f.props.configurables.find(function(e) {
                            return e.propositionId === t
                        });
                    if (a) {
                        var u = null,
                            o = null;
                        if (t === d && (p ? o = l : u = l), "FIX" === r) {
                            var i = (0, P.analyzeCombination)(a, n, f.state.autoadded[t] || [], u, o),
                                s = babelHelpers.slicedToArray(i, 4);
                            h[t] = s[0], v[t] = s[1], y[t] = s[2], b = s[3], S = b ? S.concat(b.hiddenProducts) : S
                        } else {
                            var c = [(0, P.mobileAnalyzeCombination)(a, n, u, o), [], {
                                    valid: !0
                                },
                                []
                            ];
                            h[t] = c[0], v[t] = c[1], y[t] = c[2], b = c[3]
                        }
                    }
                }), i.default.find(y, function(e) {
                    return !e.valid
                }) || this.setState({
                    productStatuses: this.createProductStatuses(this.props.presentableProducts, h),
                    autoadded: v,
                    hidden: S
                }, e)
            }
        }, {
            key: "calculateFactory",
            value: function(t) {
                if ("HARDBUNDLE" !== this.props.entry.bundleType) return "FIX";
                var e = this.props.entry.entries.find(function(e) {
                    return e.propositionId === t
                });
                return e ? e.entryType : "FIX"
            }
        }, {
            key: "extractSelectedProductsFromProductStatuses",
            value: function(t) {
                return t ? Object.keys(t).filter(function(e) {
                    return t[e]
                }) : []
            }
        }, {
            key: "updateCartContents",
            value: function() {
                var u = this,
                    o = {};
                i.default.forEach(this.state.productStatuses, function(e, a) {
                    o[a] = [], i.default.forEach(e, function(e, t) {
                        var r = u.state.autoadded[a] && u.state.autoadded[a].includes(t);
                        if (e && !r) {
                            var n = u.getProductCodeToSend(t, a);
                            o[a].push(n)
                        }
                    })
                }), this.props.updateCartProducts(o)
            }
        }, {
            key: "getProductCodeToSend",
            value: function(e, t) {
                var r = this.props.configurables.find(function(e) {
                    return e.propositionId === t
                });
                return r.factoryName !== o.default.FIX && r.services.map(function(e) {
                    return e.id
                }).includes(e) ? this.getProductCodeToSendForMobileVas(r, e) : e
            }
        }, {
            key: "getProductCodeToSendForMobileVas",
            value: function(e, t) {
                var r = e.relations.find(function(e) {
                    return e.type === u.default.REQUIRE && e.targetVases.includes(t)
                });
                return r ? r.sourceVases[0] : t
            }
        }, {
            key: "onRemove",
            value: function(e, t) {
                window.event && event.preventDefault(), this.productStatusChanged(e, t, this.updateCartContents)
            }
        }, {
            key: "onClick",
            value: function(t, r) {
                var n = this;
                return function(e) {
                    e.preventDefault(), n.props.unselectable ? n.productStatusChanged(t, r) : n.productSelected(t, r)
                }
            }
        }, {
            key: "onSave",
            value: function() {
                this.updateCartContents()
            }
        }, {
            key: "render",
            value: function() {
                var t = {};
                i.default.forEach(this.props.configurables, function(e) {
                    t[e.propositionId] = e.mandatoryProducts
                });
                var e = a.default.cloneElement(this.props.children, {
                    entries: this.props.singlePropositionId ? this.state.productStatuses[this.props.singlePropositionId] : this.state.productStatuses,
                    mandatories: this.props.singlePropositionId ? t[this.props.singlePropositionId] : t,
                    hidden: this.state.hidden,
                    onClick: this.onClick,
                    onSave: this.onSave
                });
                return a.default.createElement("div", null, e)
            }
        }]), n
    }(a.Component);
    (e.default = r).propTypes = {
        entry: t.default.object,
        configurables: t.default.array.isRequired,
        cartProducts: t.default.object.isRequired,
        presentableProducts: t.default.object,
        unselectable: t.default.bool,
        singlePropositionId: t.default.string,
        children: t.default.any,
        updateCartProducts: t.default.func,
        triggerCartRecalculation: t.default.bool
    }, r.defaultProps = {
        triggerCartRecalculation: !1
    }
});
//# sourceMappingURL=AnalyzerAdapter.js.map