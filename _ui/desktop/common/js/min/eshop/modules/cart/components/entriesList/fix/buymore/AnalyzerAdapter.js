define(["exports", "react", "prop-types", "react-redux", "eshop/modules/cart/actions/cart", "eshop/modules/cart/analyzer/CartInfoUtils", "eshop/modules/cart/analyzer/Analyzer", "lodash"], function(t, s, e, r, n, o, h, u) {
    "use strict";

    function i(a) {
        return function() {
            var t, e = babelHelpers.getPrototypeOf(a);
            if (function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return;
                    if (Reflect.construct.sham) return;
                    if ("function" == typeof Proxy) return 1;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 1
                    } catch (t) {
                        return
                    }
                }()) {
                var r = babelHelpers.getPrototypeOf(this).constructor;
                t = Reflect.construct(e, arguments, r)
            } else t = e.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, t)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.FixAnalyzerAdapter = void 0, s = babelHelpers.interopRequireWildcard(s), e = babelHelpers.interopRequireDefault(e), u = babelHelpers.interopRequireDefault(u);

    function c(e) {
        return function(t) {
            t.preventDefault(), e(t)
        }
    }
    var a = function(t) {
        babelHelpers.inherits(a, t);
        var r = i(a);

        function a(t) {
            var e;
            return babelHelpers.classCallCheck(this, a), (e = r.call(this, t)).state = e.createState(t), e.updateCartContents.bind(babelHelpers.assertThisInitialized(e)), e.removeProduct.bind(babelHelpers.assertThisInitialized(e)), e
        }
        return babelHelpers.createClass(a, [{
            key: "componentWillReceiveProps",
            value: function(t) {
                this.setState(this.createState(t))
            }
        }, {
            key: "componentDidUpdate",
            value: function(t) {
                !(!0 === this.props.triggerCartRecalculation && this.props.triggerCartRecalculation !== t.triggerCartRecalculation) && u.default.isEqual(t.configurables.relations, this.props.configurables.relations) || this.recalculateCart()
            }
        }, {
            key: "createState",
            value: function(t) {
                var e = {};
                t.presentableProducts.forEach(function(t) {
                    return e[t] = !1
                }), t.cartProducts.forEach(function(t) {
                    return e[t] = !0
                });
                var r = {
                    productStatuses: e,
                    autoadded: t.entry.autoadded ? t.entry.autoadded : [],
                    hidden: t.entry.hidden ? t.entry.hidden : []
                };
                return r
            }
        }, {
            key: "createClickedCallback",
            value: function(t) {
                var e = this;
                return c(function() {
                    e.productStatusChanged(t)
                }.bind(this))
            }
        }, {
            key: "createClickedCallbackWithoutPreventDefault",
            value: function(t) {
                this.productStatusChanged(t)
            }
        }, {
            key: "migratedProductStatusesChangedHandler",
            value: function(t) {
                var e = this;
                return c(function() {
                    e.migratedProductStatusesChanged(t)
                }.bind(this))
            }
        }, {
            key: "createClickedNonRemovableCallback",
            value: function(t) {
                var e = this;
                return c(function() {
                    e.productSelected(t)
                }.bind(this))
            }
        }, {
            key: "removeProduct",
            value: function(t) {
                this.productStatusChanged(t, this.updateCartContents)
            }
        }, {
            key: "recalculateCart",
            value: function() {
                this.productStatusChanged(null, function() {})
            }
        }, {
            key: "updateCartContents",
            value: function() {
                var e = this,
                    t = Object.keys(this.state.productStatuses).filter(function(t) {
                        return e.state.productStatuses[t]
                    }).filter(function(t) {
                        return !e.state.autoadded.includes(t)
                    });
                this.props.updateCartProducts(this.props.bundleCode, this.props.offer, this.props.cartBundle, t)
            }
        }, {
            key: "productSelected",
            value: function(t) {
                !this.state.productStatuses[t] && this.productStatusChanged(t)
            }
        }, {
            key: "productStatusChanged",
            value: function(t, e) {
                var r, a, s, n, o = !!this.state.productStatuses[t],
                    u = this.extractSelectedProductsFromProductStatuses(this.state.productStatuses);
                if (o) {
                    var i = (0, h.analyzeCombination)(this.props.configurables, u, this.state.autoadded, null, t),
                        c = babelHelpers.slicedToArray(i, 4);
                    r = c[0], a = c[1], s = c[2], n = c[3]
                } else {
                    var l = (0, h.analyzeCombination)(this.props.configurables, u, this.state.autoadded, t),
                        d = babelHelpers.slicedToArray(l, 4);
                    r = d[0], a = d[1], s = d[2], n = d[3]
                }
                if (s.valid) {
                    var p = {};
                    this.props.presentableProducts.forEach(function(t) {
                        return p[t] = !1
                    }), r.forEach(function(t) {
                        return p[t] = !0
                    }), this.setState({
                        productStatuses: p,
                        autoadded: a,
                        hidden: n.hiddenProducts
                    }, e)
                }
            }
        }, {
            key: "migratedProductStatusesChanged",
            value: function(t) {
                var s, n, o, u = this,
                    e = !!this.state.productStatuses[t[0]],
                    i = this.extractSelectedProductsFromProductStatuses(this.state.productStatuses),
                    c = this.state.autoadded,
                    l = {},
                    d = !1;
                e ? t.forEach(function(t) {
                    var e, r = (0, h.analyzeCombination)(u.props.configurables, i, c, null, t),
                        a = babelHelpers.slicedToArray(r, 4);
                    s = a[0], e = a[1], n = a[2], o = a[3], n.valid && (c = e, d = !0, i = u.updateProducts(l, s))
                }) : t.forEach(function(t) {
                    var e, r = (0, h.analyzeCombination)(u.props.configurables, i, c, t),
                        a = babelHelpers.slicedToArray(r, 4);
                    s = a[0], e = a[1], n = a[2], o = a[3], n.valid && (d = !0, c = e, i = u.updateProducts(l, s))
                }), d && this.setState({
                    productStatuses: l,
                    autoadded: c,
                    hidden: o.hiddenProducts
                })
            }
        }, {
            key: "updateProducts",
            value: function(e, t) {
                return this.props.presentableProducts.forEach(function(t) {
                    return e[t] = !1
                }), t.forEach(function(t) {
                    return e[t] = !0
                }), this.extractSelectedProductsFromProductStatuses(e)
            }
        }, {
            key: "extractSelectedProductsFromProductStatuses",
            value: function(e) {
                return e ? Object.keys(e).filter(function(t) {
                    return e[t]
                }) : []
            }
        }, {
            key: "render",
            value: function() {
                var t = s.default.cloneElement(this.props.children, {
                    entries: this.state.productStatuses,
                    mandatories: this.props.configurables.mandatoryProducts,
                    onClick: this.props.unselectable ? this.createClickedCallback.bind(this) : this.createClickedNonRemovableCallback.bind(this),
                    onClickWithoutPreventDefault: this.createClickedCallbackWithoutPreventDefault.bind(this),
                    onClickMigratedCheckBox: this.migratedProductStatusesChangedHandler.bind(this),
                    onSave: this.updateCartContents.bind(this),
                    hidden: this.state.hidden
                });
                return s.default.createElement("div", null, t)
            }
        }]), a
    }(s.Component);
    a.propTypes = {
        cartProducts: e.default.array.isRequired,
        configurables: e.default.object.isRequired,
        triggerCartRecalculation: e.default.bool
    };
    var l = (0, r.connect)(null, function(s) {
            return {
                updateCartProducts: function(t, e, r, a) {
                    return s((0, n.updateFixCartProducts)(t, e, r, a))
                }
            }
        }, null, {
            withRef: !0
        })(a),
        d = function(t) {
            babelHelpers.inherits(r, t);
            var e = i(r);

            function r(t) {
                return babelHelpers.classCallCheck(this, r), e.call(this, t)
            }
            return babelHelpers.createClass(r, [{
                key: "removeProduct",
                value: function(t) {
                    this.analyzer && this.analyzer.removeProduct && this.analyzer.removeProduct(t)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this,
                        t = (0, o.getCartProductsFromEntry)(this.props.entry);
                    t = t.concat(this.props.entry.previouslySelectedInvisible);
                    var r = (0, o.getPresentableProductsFromConfigurables)(this.props.configurables),
                        a = JSON.parse(JSON.stringify(this.props.configurables));
                    return this.props.customRules && (a.relations = a.relations.concat(this.props.customRules)), s.default.createElement(l, {
                        triggerCartRecalculation: this.props.triggerCartRecalculation,
                        entry: this.props.entry,
                        configurables: a,
                        cartProducts: t,
                        presentableProducts: r,
                        children: this.props.children,
                        bundleCode: this.props.entry.bundleCode,
                        offer: this.props.entry.productCode,
                        cartBundle: this.props.entry.bundleNo,
                        unselectable: this.props.unselectable,
                        ref: function(t) {
                            t && (e.analyzer = t.getWrappedInstance())
                        }
                    })
                }
            }]), r
        }(s.Component);
    (t.FixAnalyzerAdapter = d).propTypes = {
        entry: e.default.object.isRequired,
        configurables: e.default.object.isRequired,
        triggerCartRecalculation: e.default.bool
    }, d.defaultProps = {
        unselectable: !0,
        triggerCartRecalculation: !1
    }
});
//# sourceMappingURL=AnalyzerAdapter.js.map