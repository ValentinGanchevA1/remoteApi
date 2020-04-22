define(["exports", "react", "prop-types", "eshop/modules/core/components/ui/Modal", "eshop/modules/core/components/ui/Expander", "../../../../analyzer/CartInfoUtils", "./Utils", "./modalFragments/ModalFragments", "../../../../analyzer/DeviceUtils", "../../shared/MessageBox", "eshop/modules/cart/components/entriesList/convergent/vasModal/CloseAndSaveVasesButtons"], function(e, o, t, s, r, d, n, i, f, c, a) {
    "use strict";

    function y(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function p(n) {
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
    }), e.default = void 0, o = babelHelpers.interopRequireWildcard(o), s = babelHelpers.interopRequireDefault(s);
    var l = function(e) {
        babelHelpers.inherits(n, e);
        var r = p(n);

        function n(e) {
            var t;
            return babelHelpers.classCallCheck(this, n), (t = r.call(this, e)).state = {
                open: t.props.open,
                popup: !1,
                callback: null,
                event: null,
                modalContent: null
            }, t
        }
        return babelHelpers.createClass(n, [{
            key: "componentWillReceiveProps",
            value: function(e) {
                this.setState({
                    open: e.open
                })
            }
        }, {
            key: "_onSaveWrapper",
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
                var t = this,
                    e = this.props.services.map(function(e) {
                        return e.selected = !1, e.mandatory = !1, e.presentation = "visible", e
                    });
                return Object.keys(this.props.entries).filter(function(e) {
                    return t.props.entries[e]
                }).map(function(t) {
                    return e.find(function(e) {
                        return e.id === t
                    })
                }).filter(function(e) {
                    return e
                }).forEach(function(e) {
                    return e.selected = !0
                }), this.props.mandatories.filter(function(e) {
                    return t.props.entries[e]
                }).map(function(t) {
                    return e.find(function(e) {
                        return e.id === t
                    })
                }).filter(function(e) {
                    return e
                }).forEach(function(e) {
                    return e.mandatory = !0
                }), this.props.hidden && this.props.hidden.map(function(t) {
                    return e.find(function(e) {
                        return e.id === t
                    })
                }).filter(function(e) {
                    return e
                }).forEach(function(e) {
                    return e.presentation = "hidden"
                }), o.default.createElement(s.default, {
                    open: this.props.open,
                    onClose: this.props.onClose,
                    size: "medium"
                }, o.default.createElement(u, {
                    configurables: this.props.configurables,
                    descriptions: this.props.descriptions,
                    onClickWrapped: this._onClickInterceptor.bind(this),
                    onClick: this.props.onClick,
                    productList: this.props.productList,
                    selectedSection: this.props.selectedSection,
                    showNetPrices: this.props.showNetPrices,
                    uid: this.props.uid,
                    vasesWithStatuses: e,
                    migratedProducts: this.props.migratedProducts
                }), this.state.popup && o.default.createElement(c.Warning, {
                    onAccept: this._runInterceptedClick.bind(this),
                    onCancel: this._cancelInterceptedClick.bind(this),
                    modalContents: this.state.modalContent
                }), o.default.createElement("div", {
                    className: "l-row"
                }, o.default.createElement(a.CloseAndSaveVasesButtons, {
                    onClose: this.props.onClose,
                    saveVasesClicked: this._onSaveWrapper.bind(this)
                })))
            }
        }]), n
    }(o.Component);
    (e.default = l).propTypes = {
        uid: t.PropTypes.string,
        header: t.PropTypes.string,
        bundle: t.PropTypes.string,
        cartBundle: t.PropTypes.string,
        propositionId: t.PropTypes.string,
        open: t.PropTypes.bool,
        descriptions: t.PropTypes.object,
        services: t.PropTypes.array,
        entries: t.PropTypes.object,
        mandatories: t.PropTypes.array,
        productList: t.PropTypes.object,
        hidden: t.PropTypes.array
    };
    var u = function(l) {
        function u(e) {
            return "TV_VASES" === e.type ? (t = e, o.default.createElement("div", null, o.default.createElement(n.IfCollectionNotEmpty, {
                array: t.products,
                key: "ICNE_" + t.index
            }, o.default.createElement(i.TitledFoldableTvVasesProductGroup, {
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
            })))) : (r = e, o.default.createElement(n.IfCollectionNotEmpty, {
                array: r.products,
                key: "ICNE_" + r.index
            }, o.default.createElement(i.TitledFoldableProductGroup, {
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
        return o.default.createElement("div", null, o.default.createElement("p", {
            className: "h3"
        }, "Dobierz usługi dodatkowe"), o.default.createElement(r.Expander, {
            id: "exp-".concat(l.uid),
            variant: "section",
            className: "opl-vas-modal-expander",
            scrollToSelected: !1
        }, o.default.createElement("div", {
            className: "o-separator o-separator--m"
        }), l.productList && l.productList.innerLists && l.productList.innerLists.map(function(e, t) {
            var r, n, o, s, i = e.productFilter,
                c = l.selectedSection === e.productFilter,
                a = e.productCodes || [],
                p = (r = i, n = a, o = (0, d.Filters)()[r](l.vasesWithStatuses), (s = [].concat(babelHelpers.toConsumableArray(o.filter(function(e) {
                    return !!e.addonType && !e.mandatory
                })), babelHelpers.toConsumableArray((0, f.prepareDevices)(o.filter(function(e) {
                    return !!e.deviceType
                }), l.descriptions, l.migratedProducts)))).sort((0, d.compareByProductListAndMandatoryAndTitle)(n)), s);
            return u(function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? y(Object(r), !0).forEach(function(e) {
                        babelHelpers.defineProperty(t, e, r[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : y(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }({}, l, {
                index: t,
                section: e,
                products: p,
                isExpanded: c,
                type: i
            }))
        })))
    }
});
//# sourceMappingURL=FixVasModal.js.map