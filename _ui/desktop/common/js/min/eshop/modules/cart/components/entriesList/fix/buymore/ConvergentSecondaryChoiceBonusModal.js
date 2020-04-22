define(["exports", "react", "prop-types", "eshop/modules/core/components/ui/Modal", "./modalFragments/ModalFragments", "../../../../analyzer/DeviceUtils"], function(e, n, t, s, o, l) {
    "use strict";

    function c(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function r(n) {
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
    }), e.default = void 0, n = babelHelpers.interopRequireWildcard(n), s = babelHelpers.interopRequireDefault(s);
    var i = function(e) {
        babelHelpers.inherits(a, e);
        var i = r(a);

        function a(e) {
            var t;
            babelHelpers.classCallCheck(this, a), t = i.call(this, e);
            var r = e.entries,
                n = e.mandatories,
                s = e.services,
                o = e.hidden;
            return t.state = {
                open: t.props.open,
                popup: !1,
                callback: null,
                event: null,
                modalContent: null,
                vasesWithStatuses: t.prepareVasesWithStatuses(r, n, s, o)
            }, t
        }
        return babelHelpers.createClass(a, [{
            key: "componentWillReceiveProps",
            value: function(e) {
                var t = e.entries,
                    r = e.mandatories,
                    n = e.services,
                    s = e.productList,
                    o = e.hidden;
                if (!_.isEqual(t, this.props.entries) || !_.isEqual(s, this.props.productList)) {
                    var i = this.prepareVasesWithStatuses(t, r, n, o);
                    this.setState({
                        vasesWithStatuses: i
                    })
                }
                this.setState({
                    open: e.open
                })
            }
        }, {
            key: "prepareVasesWithStatuses",
            value: function(e, t, r, n) {
                var s = {};
                return _.forEach(r, function(e, t) {
                    s[t] = e.map(function(e) {
                        return function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var r = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? c(Object(r), !0).forEach(function(e) {
                                    babelHelpers.defineProperty(t, e, r[e])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                                })
                            }
                            return t
                        }({}, e, {
                            propositionId: t,
                            selected: !1,
                            mandatory: !1,
                            presentation: "visible"
                        })
                    })
                }), 0 === Object.keys(s).length ? null : (this.markVasesAsSelected(s, e), this.markVasesAsMandatory(s, e, t), this.markVasesAsHidden(s, n), _.flatMap(s, function(e) {
                    return e
                }))
            }
        }, {
            key: "markVasesAsSelected",
            value: function(e, r) {
                _.forEach(Object.keys(r), function(t) {
                    _.forEach(e, function(e) {
                        _.forEach(e, function(e) {
                            void 0 !== r[t][e.id] && (e.selected = r[t][e.id])
                        })
                    })
                })
            }
        }, {
            key: "markVasesAsMandatory",
            value: function(n, t, e) {
                _.forEach(e, function(e, r) {
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
                _.forEach(e, function(e) {
                    _.forEach(e, function(e) {
                        e.presentation = _.includes(t, e.id) ? "hidden" : "visible"
                    })
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
                var s = this;
                return function(e) {
                    s.setState({
                        popup: !0,
                        callback: s.props.onClick(t, r),
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
                var e = [this.props.bonus].map(function(e) {
                    return e.selected = !1, e.mandatory = !1, e.presentation = "visible", e
                });
                _.flatMap(this.props.entries, function(t) {
                    return Object.keys(t).filter(function(e) {
                        return t[e]
                    }).map(function(t) {
                        return e.find(function(e) {
                            return e.id === t
                        })
                    }).filter(function(e) {
                        return e
                    }).forEach(function(e) {
                        return e.selected = !0
                    })
                });
                var t = [].concat(babelHelpers.toConsumableArray(this.state.vasesWithStatuses.filter(function(e) {
                        return !e.deviceType && !e.mandatory
                    })), babelHelpers.toConsumableArray((0, l.prepareDevices)(this.state.vasesWithStatuses.filter(function(e) {
                        return !!e.deviceType
                    }), this.props.descriptions, this.props.migratedProducts))),
                    r = e;
                return n.default.createElement(s.default, {
                    open: this.props.open,
                    onClose: this.props.onClose,
                    size: "medium"
                }, n.default.createElement("div", {
                    className: "l-row u-spacing-top-s u-spacing-left-l u-spacing-l u-small-spacing"
                }, n.default.createElement("p", {
                    className: "h3"
                }, this.props.descriptions.bonusModalTitle), n.default.createElement("p", {
                    className: "h4 u-spacing-top-xl u-small-spacing"
                }, this.props.descriptions.bonusRelatedProductSectionTitle)), n.default.createElement("div", null, n.default.createElement(o.ProductGroup, {
                    key: "bonusRelatedProducts",
                    inputType: "CHECKBOX",
                    products: t,
                    onClick: this.props.onClick,
                    onClickWrapped: this._onClickInterceptor.bind(this),
                    net: this.props.showNetPrices,
                    configurables: this.props.configurables
                })), n.default.createElement("div", {
                    className: "l-row u-spacing-top-xl u-spacing-left-l u-spacing-l u-small-spacing"
                }, n.default.createElement("p", {
                    className: "h4"
                }, this.props.descriptions.bonusSectionTitle)), n.default.createElement("div", null, n.default.createElement(o.ProductGroup, {
                    key: "bonus",
                    inputType: "CHECKBOX",
                    products: r,
                    onClick: this.props.onClick,
                    onClickWrapped: this._onClickInterceptor.bind(this),
                    net: this.props.showNetPrices,
                    configurables: this.props.configurables
                })), n.default.createElement("div", {
                    className: "l-row"
                }, n.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-8 l-col-8"
                })), n.default.createElement(o.SaveVasesButton, {
                    saveVasesClicked: this._onSaveWrapper.bind(this)
                }))
            }
        }]), a
    }(n.Component);
    (e.default = i).propTypes = {
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
        hidden: t.PropTypes.array
    }
});
//# sourceMappingURL=ConvergentSecondaryChoiceBonusModal.js.map