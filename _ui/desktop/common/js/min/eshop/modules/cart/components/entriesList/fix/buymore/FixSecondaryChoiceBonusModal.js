define(["exports", "react", "prop-types", "eshop/modules/core/components/ui/Modal", "./modalFragments/ModalFragments", "../../../../analyzer/DeviceUtils"], function(e, o, t, i, l, a) {
    "use strict";

    function s(r) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(r);
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
                var n = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, n)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, o = babelHelpers.interopRequireWildcard(o), i = babelHelpers.interopRequireDefault(i);
    var n = function(e) {
        babelHelpers.inherits(r, e);
        var n = s(r);

        function r(e) {
            var t;
            return babelHelpers.classCallCheck(this, r), (t = n.call(this, e)).state = {
                open: t.props.open,
                popup: !1,
                callback: null,
                event: null,
                modalContent: null
            }, t
        }
        return babelHelpers.createClass(r, [{
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
            value: function(t, n, r) {
                var s = this;
                return function(e) {
                    s.setState({
                        popup: !0,
                        callback: s.props.onClick(t, n),
                        event: e,
                        modalContent: r
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
                    }),
                    n = [this.props.bonus].map(function(e) {
                        return e.selected = !1, e.mandatory = !1, e.presentation = "visible", e
                    });
                Object.keys(this.props.entries).filter(function(e) {
                    return t.props.entries[e]
                }).map(function(t) {
                    return e.find(function(e) {
                        return e.id === t
                    })
                }).filter(function(e) {
                    return e
                }).forEach(function(e) {
                    return e.selected = !0
                }), Object.keys(this.props.entries).filter(function(e) {
                    return t.props.entries[e]
                }).map(function(t) {
                    return n.find(function(e) {
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
                });
                var r = [].concat(babelHelpers.toConsumableArray(e.filter(function(e) {
                        return !e.deviceType && !e.mandatory
                    })), babelHelpers.toConsumableArray((0, a.prepareDevices)(e.filter(function(e) {
                        return !!e.deviceType
                    }), this.props.descriptions, this.props.migratedProducts))),
                    s = n;
                return o.default.createElement(i.default, {
                    open: this.props.open,
                    onClose: this.props.onClose,
                    size: "medium"
                }, o.default.createElement("div", {
                    className: "l-row u-spacing-top-s u-spacing-left-l u-spacing-l u-small-spacing"
                }, o.default.createElement("p", {
                    className: "h3"
                }, this.props.descriptions.bonusModalTitle), o.default.createElement("p", {
                    className: "h4 u-spacing-top-xl u-small-spacing"
                }, this.props.descriptions.bonusRelatedProductSectionTitle)), o.default.createElement("div", null, o.default.createElement(l.ProductGroup, {
                    key: "bonusRelatedProducts",
                    inputType: "CHECKBOX",
                    products: r,
                    onClick: this.props.onClick,
                    net: this.props.showNetPrices,
                    configurables: this.props.configurables
                })), o.default.createElement("div", {
                    className: "l-row u-spacing-top-xl u-spacing-left-l u-spacing-l u-small-spacing"
                }, o.default.createElement("p", {
                    className: "h4"
                }, this.props.descriptions.bonusSectionTitle)), o.default.createElement("div", null, o.default.createElement(l.ProductGroup, {
                    key: "bonus",
                    inputType: "CHECKBOX",
                    products: s,
                    onClick: this.props.onClick,
                    net: this.props.showNetPrices
                })), o.default.createElement("div", {
                    className: "l-row"
                }, o.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-8 l-col-8"
                })), o.default.createElement(l.SaveVasesButton, {
                    saveVasesClicked: this._onSaveWrapper.bind(this)
                }))
            }
        }]), r
    }(o.Component);
    (e.default = n).propTypes = {
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
//# sourceMappingURL=FixSecondaryChoiceBonusModal.js.map