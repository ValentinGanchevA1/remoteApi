define(["exports", "react", "prop-types", "eshop/modules/core/components/ui/Modal", "./FixProductRadioBox", "eshop/modules/core/utils/ui", "eshop/modules/core/components/ui/Expander", "eshop/modules/cart/analyzer/CartInfoUtils"], function(e, r, t, s, o, l, c, i) {
    "use strict";

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
                var l = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, l)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, r = babelHelpers.interopRequireWildcard(r), s = babelHelpers.interopRequireDefault(s), o = babelHelpers.interopRequireDefault(o);
    var n = function(e) {
        babelHelpers.inherits(n, e);
        var l = a(n);

        function n(e) {
            var t;
            return babelHelpers.classCallCheck(this, n), (t = l.call(this, e)).state = {
                open: t.props.open
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
            key: "getSectionHeader",
            value: function() {
                return r.default.createElement("div", {
                    className: "l-row"
                }, r.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-8 l-col-8"
                }, r.default.createElement(c.Trigger, {
                    className: "js-expander__trigger__nested u-inline u-text-nowrap"
                }, r.default.createElement("span", {
                    className: "js-expander__trigger--show"
                }, "Mniej gadżetów"), r.default.createElement("span", {
                    className: "js-expander__trigger--hide"
                }, "Więcej gadżetów"))), r.default.createElement(p, {
                    saveVasesClicked: this._onSaveWrapper.bind(this)
                }))
            }
        }, {
            key: "render",
            value: function() {
                var a = this,
                    e = this.props.services.map(function(e) {
                        return e.selected = !1, e
                    });
                return e.sort((0, i.compareByProductListAndMandatoryAndTitle)(this.props.productList ? this.props.productList.productCodes : null)), Object.keys(this.props.entries).filter(function(e) {
                    return a.props.entries[e]
                }).map(function(t) {
                    return e.find(function(e) {
                        return e.id === t
                    })
                }).filter(function(e) {
                    return e
                }).forEach(function(e) {
                    return e.selected = !0
                }), r.default.createElement(s.default, {
                    open: this.state.open,
                    onClose: this.props.onClose,
                    size: "medium"
                }, r.default.createElement("p", {
                    className: "h3"
                }, "Dobierz gadżet za 1 zł"), r.default.createElement("div", {
                    className: "opl-multicheckout-services"
                }, r.default.createElement(c.Expander, {
                    scrollToSelected: !1,
                    variant: "",
                    className: "opl-expander-outer u-no-padding",
                    sectionClassName: "opl-section-outer"
                }, r.default.createElement("ul", {
                    className: "u-spacing-l u-small-spacing-m"
                }, e && e.slice(0, 3).map(function(e, t, l) {
                    return r.default.createElement(o.default, {
                        key: t,
                        vas: e,
                        idx: l.length - t,
                        onSelectionChanged: a.props.onClick(e.id),
                        net: a.props.net
                    })
                }))), e && 3 < e.length ? r.default.createElement(c.Expander, {
                    variant: "",
                    className: "opl-expander-inner u-no-padding",
                    sectionClassName: "opl-section-inner"
                }, r.default.createElement(c.Section, babelHelpers.defineProperty({
                    header: this.getSectionHeader(),
                    contentClassName: "js-expander__content__nested u-hide--soft",
                    className: "opl-section-inner",
                    headerBelow: !0
                }, "className", "u-no-padding"), r.default.createElement(c.Expander, {
                    scrollToSelected: !1,
                    variant: "",
                    className: "opl-expander-outer u-no-padding",
                    sectionClassName: "opl-section-outer"
                }, r.default.createElement("ul", {
                    className: "u-spacing-l u-small-spacing-m"
                }, e && e.slice(3).map(function(e, t, l) {
                    var n = t + 3;
                    return r.default.createElement(o.default, {
                        key: n,
                        vas: e,
                        idx: l.length - n + 3,
                        onSelectionChanged: a.props.onClick(e.id),
                        inputType: "checkbox",
                        net: a.props.net
                    })
                }))))) : r.default.createElement("div", {
                    className: "l-row"
                }, r.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-8 l-col-8"
                }), r.default.createElement(p, {
                    saveVasesClicked: this._onSaveWrapper.bind(this)
                }))))
            }
        }]), n
    }(r.Component);
    (e.default = n).propTypes = {
        header: t.PropTypes.string,
        bundle: t.PropTypes.string,
        cartBundle: t.PropTypes.string,
        propositionId: t.PropTypes.string,
        open: t.PropTypes.bool
    };
    var p = function(e) {
        return r.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-4 l-col-4 u-right u-text-right"
        }, r.default.createElement("button", {
            className: "o-btn opl-btn opl-btn--primary opl-btn-medium u-w-100",
            onClick: e.saveVasesClicked
        }, r.default.createElement("span", {
            className: "opl-ripple-box"
        }, r.default.createElement("span", {
            className: "opl-ripple-circle"
        })), "Wybierz"))
    };
    p.propTypes = {
        saveVasesClicked: t.PropTypes.func
    }
});
//# sourceMappingURL=FixGadgetModal.js.map