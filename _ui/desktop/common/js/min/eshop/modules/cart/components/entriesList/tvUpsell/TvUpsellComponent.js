define(["exports", "react", "react-redux", "../shared/MultiCartExpandingSectionComponent", "../mobile/MultiCartCollapsedItemComponent", "eshop/modules/cart/actions/cart", "eshop/modules/cart/selectors", "../fix/buymore/buttons/AddTVButton", "../shared/UniversalEntryComponent", "../../../../checkout/constants/ProductEntryTypeEnum", "eshop/modules/cart/components/entriesList/mobile/MultiCartRemovePopup", "eshop/flux/utils/OraModalService", "eshop/modules/cart/analyzer/ProductInfoUtils", "../fix/BoxFragments"], function(e, c, t, i, u, n, r, p, d, f, o, l, b, y) {
    "use strict";

    function m(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function a(n) {
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
    }), e.default = void 0, c = babelHelpers.interopRequireWildcard(c), i = babelHelpers.interopRequireDefault(i), u = babelHelpers.interopRequireDefault(u), p = babelHelpers.interopRequireDefault(p), d = babelHelpers.interopRequireDefault(d), f = babelHelpers.interopRequireDefault(f), o = babelHelpers.interopRequireDefault(o), l = babelHelpers.interopRequireDefault(l);
    var s = function(e) {
            babelHelpers.inherits(r, e);
            var t = a(r);

            function r() {
                return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
            }
            return babelHelpers.createClass(r, [{
                key: "tvChangeClicked",
                value: function() {
                    this.addTV && this.addTV.addButtonClicked && this.addTV.addButtonClicked()
                }
            }, {
                key: "tvRemoveClicked",
                value: function(e) {
                    this.addTV && this.addTV.removeButtonClicked && this.addTV.removeButtonClicked(e)
                }
            }, {
                key: "openRemovePopup",
                value: function() {
                    var e = this.props.entry;
                    l.default.open("remove-from-cart-modal-" + e.bundleNo, {
                        bundleNo: e.bundleNo,
                        offerIndex: e.bundleNo
                    })
                }
            }, {
                key: "registerRemovePopup",
                value: function(t) {
                    var r = this;
                    l.default.add(function(e) {
                        return c.default.createElement(o.default, {
                            id: "remove-from-cart-modal-" + t.bundleNo,
                            bundleNo: t.bundleNo,
                            title: r.props.sectionConf.deleteEntryPopupTitle,
                            content: r.props.sectionConf.deleteEntryPopupContent,
                            decline: r.props.sectionConf.declineDeleteEntryPopupButtonLabel,
                            confirm: r.props.sectionConf.confirmDeleteEntryPopupButtonLabel,
                            onClickRemove: r.props.removeFromCart.bind(r, null, t.bundleNo),
                            textRepresentation: r.props.sectionConf.sectionTitle
                        })
                    })
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    this.registerRemovePopup(this.props.entry)
                }
            }, {
                key: "render",
                value: function() {
                    var l = this,
                        e = this.props.sectionConf.sectionTitle,
                        t = "video_section" + this.props.idx,
                        a = (0, b.getConfigurables)(this.props.configurables),
                        r = "ost-" + this.props.entry.bundleNo,
                        s = this.props.entry.migratedProducts || [],
                        n = [];
                    if (this.props.entry.vases && a) {
                        var o = (0, b.getTvPackages)(a).filter(function(e) {
                            return "TVBASIC" === e.addonType
                        }).map(function(e) {
                            return e.id
                        }).shift();
                        this.props.entry.vases.forEach(function(t) {
                            if (a.mandatoryProducts.includes(t.productCode) || t.productCode == o) {
                                var e = a.services.find(function(e) {
                                    return e.id === t.productCode
                                });
                                e && e.addonType === AddonType.SFH && n.push(function(t) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var r = null != arguments[e] ? arguments[e] : {};
                                        e % 2 ? m(Object(r), !0).forEach(function(e) {
                                            babelHelpers.defineProperty(t, e, r[e])
                                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : m(Object(r)).forEach(function(e) {
                                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                                        })
                                    }
                                    return t
                                }({}, t, {
                                    mandatory: a.mandatoryProducts.includes(t.productCode)
                                }))
                            } else n.push(t)
                        })
                    }
                    return c.default.createElement("div", null, c.default.createElement(i.default, {
                        title: e,
                        key: t,
                        entry: this.props.entry,
                        trigger: r,
                        conf: this.props.sectionConf,
                        onRemoveClicked: function() {
                            return l.openRemovePopup(l.props.entry)
                        }
                    }, c.default.createElement("div", null, n.map(function(e, t) {
                        var r = l.tvChangeClicked.bind(l),
                            n = l.tvRemoveClicked.bind(l);
                        return c.default.createElement(y.FloatingBox, {
                            key: "fb_" + t
                        }, c.default.createElement(d.default, {
                            key: t,
                            entry: e,
                            detailsHeader: "Szczegóły usługi",
                            propositionId: l.props.entry.bundleCode,
                            bundle: l.props.entry.productCode,
                            onChangeClicked: r,
                            onRemoveClicked: n
                        }))
                    }), this.props.sectionConf.productSections.map(function(e, t) {
                        var r = {};
                        switch (r.icon = e.icon, r.label = e.buyMoreLabel, r.header = e.buyMoreLabel, r.descriptions = e.descriptions, r.configurables = a, r.entry = l.props.entry, r.inner = e.productList, e.entryType) {
                            case f.default.TV_PACKAGE:
                                var n = (0, b.getTvPackages)(a),
                                    o = s.filter(function(e) {
                                        return !!e.addonType
                                    }).map(function(e) {
                                        return e.id = e.productCode, e.inputType = "MIGRATED", e
                                    }),
                                    i = o.map(function(e) {
                                        return e.productCode
                                    }),
                                    u = (n = n.filter(function(e) {
                                        return !i.includes(e.id)
                                    })).concat(o);
                                return 0 < n.length ? c.default.createElement(p.default, babelHelpers.extends({
                                    key: "TVS" + t
                                }, r, {
                                    migratedTvPacks: o || [],
                                    presentable: u,
                                    ref: function(e) {
                                        l.addTV = e ? e.getWrappedInstance() : null
                                    }
                                })) : c.default.createElement("div", {
                                    key: "NULL_TVS"
                                });
                            default:
                                return c.default.createElement("div", {
                                    key: "DEFAULT_NULL"
                                })
                        }
                    })), c.default.createElement(u.default, {
                        key: "collapsed" + t
                    })))
                }
            }]), r
        }(c.Component),
        h = function(e) {
            babelHelpers.inherits(r, e);
            var t = a(r);

            function r(e) {
                return babelHelpers.classCallCheck(this, r), t.call(this, e)
            }
            return babelHelpers.createClass(r, [{
                key: "componentWillMount",
                value: function() {
                    this.props.entry.bundleNo && this.props.fetchFixConfigurables(this.props.entry.bundleNo)
                }
            }, {
                key: "render",
                value: function() {
                    return c.default.createElement(s, this.props)
                }
            }]), r
        }(c.Component),
        v = (0, t.connect)(function(e) {
            return {
                configurables: (0, r.getFixConfigurables)(e)
            }
        }, function(r) {
            return {
                removeFromCart: function(e, t) {
                    return r((0, n.removeFromCart)(e, t))
                },
                fetchFixConfigurables: function(e) {
                    return r((0, n.fetchFixConfigurables)(e))
                }
            }
        })(h);
    e.default = v
});
//# sourceMappingURL=TvUpsellComponent.js.map