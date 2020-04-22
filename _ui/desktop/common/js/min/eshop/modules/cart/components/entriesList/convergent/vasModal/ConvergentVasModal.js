define(["exports", "react", "prop-types", "lodash", "../../../../../core/components/ui/Expander", "../../../../../core/components/ui/Modal", "../../../../analyzer/CartInfoUtils", "./SaveVasesButton", "../../fix/buymore/modalFragments/ModalFragments", "../../../../analyzer/DeviceUtils", "../../shared/MessageBox", "../../fix/buymore/Utils"], function(e, u, t, p, r, n, i, o, a, d, s, f) {
    "use strict";

    function l(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function b(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? l(Object(r), !0).forEach(function(e) {
                babelHelpers.defineProperty(t, e, r[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            })
        }
        return t
    }

    function h(n) {
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
    }), e.default = void 0, u = babelHelpers.interopRequireWildcard(u), t = babelHelpers.interopRequireDefault(t), p = babelHelpers.interopRequireDefault(p), n = babelHelpers.interopRequireDefault(n);
    var c = function(e) {
        babelHelpers.inherits(c, e);
        var l = h(c);

        function c(e) {
            var t;
            babelHelpers.classCallCheck(this, c), t = l.call(this, e);
            var r = e.entries,
                n = e.mandatories,
                o = e.services,
                a = e.productList,
                s = e.hidden,
                i = t.prepareVasesWithStatuses(r, n, o, s);
            return t.state = {
                productGroups: t.getProductGroups(i, a),
                popup: !1,
                callback: null,
                event: null,
                modalContent: null
            }, t.onSaveWrapper = t.onSaveWrapper.bind(babelHelpers.assertThisInitialized(t)), t
        }
        return babelHelpers.createClass(c, [{
            key: "componentWillReceiveProps",
            value: function(e) {
                var t = e.entries,
                    r = e.mandatories,
                    n = e.services,
                    o = e.productList,
                    a = e.hidden,
                    s = this.state.productGroups;
                if (!p.default.isEqual(t, this.props.entries) || !p.default.isEqual(o, this.props.productList)) {
                    var i = this.prepareVasesWithStatuses(t, r, n, a);
                    s = this.getProductGroups(i, o)
                }
                this.setState({
                    productGroups: s
                })
            }
        }, {
            key: "markVasesAsSelected",
            value: function(e, r) {
                p.default.forEach(e, function(e, t) {
                    p.default.forEach(e, function(e) {
                        e.selected = r[t][e.id]
                    })
                })
            }
        }, {
            key: "markVasesAsMandatory",
            value: function(n, t, e) {
                p.default.forEach(e, function(e, r) {
                    e.filter(function(e) {
                        return t[r] && t[r][e]
                    }).map(function(t) {
                        return n[r].find(function(e) {
                            return e.id === t
                        })
                    }).filter(function(e) {
                        return e
                    }).forEach(function(e) {
                        return e.mandatory = !0
                    })
                })
            }
        }, {
            key: "markVasesAsHidden",
            value: function(e, t) {
                p.default.forEach(e, function(e) {
                    p.default.forEach(e, function(e) {
                        e.presentation = p.default.includes(t, e.id) ? "hidden" : "visible"
                    })
                })
            }
        }, {
            key: "getProductGroups",
            value: function(a, e) {
                var s = this;
                return (e && e.innerLists || []).map(function(e) {
                    var n = e.productFilter,
                        o = [];
                    n && p.default.forEach(a, function(e, t) {
                        var r = (0, i.Filters)()[n](e) || [];
                        o.push.apply(o, babelHelpers.toConsumableArray(r.map(function(e) {
                            return b({}, e, {
                                propositionId: t
                            })
                        })))
                    });
                    var t = [].concat(babelHelpers.toConsumableArray(o.filter(function(e) {
                        return !(!e.addonType && "VOICE_VASES" !== n || e.mandatory)
                    })), babelHelpers.toConsumableArray((0, d.prepareDevices)(o.filter(function(e) {
                        return !!e.deviceType
                    }), s.props.descriptions, s.props.migratedProducts)));
                    if ("VOICE_VASES" !== n) {
                        var r = e.productCodes ? e.productCodes : [];
                        t.sort((0, i.compareByProductListAndMandatoryAndTitle)(r))
                    }
                    return {
                        section: e,
                        products: t
                    }
                }).filter(function(e) {
                    return e.products && 0 < e.products.length
                })
            }
        }, {
            key: "prepareVasesWithStatuses",
            value: function(e, t, r, n) {
                var o = {};
                return p.default.forEach(r, function(e, t) {
                    o[t] = e.map(function(e) {
                        return b({}, e, {
                            selected: !1,
                            mandatory: !1,
                            presentation: "visible"
                        })
                    })
                }), 0 === Object.keys(o).length ? null : (this.markVasesAsSelected(o, e), this.markVasesAsMandatory(o, e, t), this.markVasesAsHidden(o, n), o)
            }
        }, {
            key: "onSaveWrapper",
            value: function() {
                this.props.onClose(), this.props.onSave()
            }
        }, {
            key: "_onClickInterceptor",
            value: function(t, r, n) {
                var o = this;
                return function(e) {
                    o.setState({
                        popup: !0,
                        callback: o.props.onClick(t, r),
                        event: e,
                        modalContent: n
                    })
                }
            }
        }, {
            key: "_runInterceptedClick",
            value: function() {
                this.state.callback(this.state.event), this._cancelInterceptedClick()
            }
        }, {
            key: "_cancelInterceptedClick",
            value: function() {
                this.setState({
                    popup: !1,
                    callback: null,
                    event: null,
                    modalContent: null
                })
            }
        }, {
            key: "render",
            value: function() {
                var i = this;

                function l(e) {
                    return "TV_VASES" === e.type ? (t = e, u.default.createElement(f.IfCollectionNotEmpty, {
                        array: t.products,
                        key: "ICNE_" + t.index
                    }, u.default.createElement(a.TitledFoldableTvVasesProductGroup, {
                        key: "TPG_" + t.index,
                        uid: "TPG_" + t.index,
                        idx: t.type,
                        section: t.section,
                        products: t.products,
                        onClick: t.onClick,
                        onClickWrapped: t.onClickWrapped,
                        isExpanded: t.isExpanded,
                        net: t.showNetPrices,
                        configurables: t.configurables,
                        descriptions: t.descriptions
                    }))) : (r = e, u.default.createElement(f.IfCollectionNotEmpty, {
                        array: r.products,
                        key: "ICNE_" + r.index
                    }, u.default.createElement(a.TitledFoldableProductGroup, {
                        key: "TPG_" + r.index,
                        uid: "TPG_" + r.index,
                        idx: r.type,
                        section: r.section,
                        products: r.products,
                        onClick: r.onClick,
                        onClickWrapped: r.onClickWrapped,
                        isExpanded: r.isExpanded,
                        net: r.showNetPrices,
                        configurables: r.configurables
                    })));
                    var t, r
                }
                return u.default.createElement(n.default, {
                    open: this.props.open,
                    onClose: this.props.onClose,
                    size: "medium"
                }, u.default.createElement("p", {
                    className: "h3"
                }, this.props.descriptions && this.props.descriptions.vasModalTitle || "Dobierz usługi dodatkowe"), u.default.createElement(r.Expander, {
                    variant: "section",
                    className: "opl-vas-modal-expander",
                    scrollToSelected: !1
                }, u.default.createElement("div", {
                    className: "o-separator o-separator--m"
                }), this.state.productGroups.map(function(e, t) {
                    var r = e.section,
                        n = e.products,
                        o = r.productFilter,
                        a = i.props.selectedSection === o,
                        s = "TPG_" + t + i.props.open;
                    return u.default.createElement("div", {
                        key: s,
                        className: "o-separator o-separator--m"
                    }, l(b({}, i.props, {
                        onClickWrapped: i._onClickInterceptor.bind(i),
                        index: t,
                        section: r,
                        products: n,
                        isExpanded: a,
                        type: o
                    })))
                })), this.state.popup && u.default.createElement(s.Warning, {
                    onAccept: this._runInterceptedClick.bind(this),
                    onCancel: this._cancelInterceptedClick.bind(this),
                    modalContents: this.state.modalContent
                }), u.default.createElement("div", {
                    className: "l-row"
                }, u.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-8 l-col-8"
                })), u.default.createElement(o.SaveVasesButton, {
                    saveVasesClicked: this.onSaveWrapper,
                    saveVasesButtonText: this.props.saveVasesButtonText
                }))
            }
        }]), c
    }(u.Component);
    e.default = c, babelHelpers.defineProperty(c, "propTypes", {
        header: t.default.string,
        bundle: t.default.string,
        cartBundle: t.default.string,
        propositionId: t.default.string,
        selectedSection: t.default.string,
        open: t.default.bool
    })
});
//# sourceMappingURL=ConvergentVasModal.js.map