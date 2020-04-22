define(["exports", "react", "lodash", "prop-types", "eshop/modules/core/components/ui/Expander", "./FixProductCheckBox", "../../../../../core/enum/Outline"], function(e, o, r, t, a, c, s) {
    "use strict";

    function n(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(t);
            e && (a = a.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, a)
        }
        return r
    }

    function i(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? n(Object(r), !0).forEach(function(e) {
                babelHelpers.defineProperty(t, e, r[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            })
        }
        return t
    }

    function p(a) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(a);
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
    }), e.default = void 0, o = babelHelpers.interopRequireWildcard(o), r = babelHelpers.interopRequireDefault(r), c = babelHelpers.interopRequireDefault(c), s = babelHelpers.interopRequireDefault(s);
    var l = function(e) {
        babelHelpers.inherits(l, e);
        var n = p(l);

        function l(e) {
            var t;
            babelHelpers.classCallCheck(this, l);
            var r = [],
                a = (t = n.call(this, e)).calculateCheckboxStateAndPopulateProductStates(t.props.products, r);
            return t.state = {
                selected: a,
                stateChange: r
            }, t
        }
        return babelHelpers.createClass(l, [{
            key: "componentDidUpdate",
            value: function() {
                var e = [],
                    t = this.calculateCheckboxStateAndPopulateProductStates(this.props.products, e);
                r.default.isEqual(e, this.state.stateChange) || this.setState({
                    selected: t,
                    stateChange: e
                })
            }
        }, {
            key: "calculateCheckboxStateAndPopulateProductStates",
            value: function(e, t) {
                var r = !0;
                return e.forEach(function(e) {
                    e.selected || (r = !1), t.push(e.selected)
                }), r
            }
        }, {
            key: "onClick",
            value: function(e) {
                e.preventDefault();
                var t = this.props.onClickMigratedCheckBox,
                    r = !0,
                    a = [],
                    n = this.state.selected;
                this.props.products.forEach(function(e) {
                    n === e.selected && a.push(e.id)
                });
                var l = t(a);
                l(e), this.props.products.forEach(function(e) {
                    e.selected || (r = !1)
                }), this.setState({
                    selected: r
                })
            }
        }, {
            key: "getSectionHeader",
            value: function() {
                return o.default.createElement(a.Trigger, {
                    className: "js-expander__trigger__nested u-inline-block large-offset-by-3 medium-offset-by-3 u-padding-all-l u-no-padding-top"
                }, o.default.createElement("span", {
                    className: "js-expander__trigger--show"
                }, "Zwiń szczegóły"), o.default.createElement("span", {
                    className: "js-expander__trigger--hide"
                }, "Szczegóły"))
            }
        }, {
            key: "getProductsToMigrateBorderHtml",
            value: function() {
                var r = "Żeby zachować obecne kanały wybierz",
                    a = this.props.products.length;
                return this.props.products.forEach(function(e, t) {
                    r += " " + e.title, 1 < a && (t < a - 2 ? r += "," : t < a - 1 && (r += " i"))
                }), {
                    __html: r
                }
            }
        }, {
            key: "render",
            value: function() {
                var a = this,
                    e = {};
                this.props.borderDescription && (e = {
                    outline: s.default.INFO
                });
                var t = {
                        __html: this.props.borderDescription
                    },
                    r = this.props.borderDescription,
                    n = this.getProductsToMigrateBorderHtml();
                return o.default.createElement("div", {
                    className: "u-position-relative u-margin-top-m ".concat(r ? "" : "u-position-relative g-white1-bg is-selected"),
                    style: i({}, e, {
                        marginTop: "2px"
                    })
                }, r && o.default.createElement("div", {
                    className: "opl-box opl-payback-box opl-content-arrow--no-border g-bluef-bg u-padding-m u-padding-top-m u-padding-all"
                }, o.default.createElement("div", {
                    className: "u-no-margin container",
                    onClick: function(e) {
                        return a.onClick(e)
                    }
                }, o.default.createElement("div", {
                    className: "row"
                }, o.default.createElement("div", {
                    className: "l-col l-col-1"
                }, o.default.createElement("span", {
                    className: "g-icon g-icon--info g-icon--m u-font-bold g-white1-c"
                })), o.default.createElement("div", {
                    className: "l-col l-col-11"
                }, o.default.createElement("p", {
                    className: "h4 u-no-margin g-white1-c",
                    dangerouslySetInnerHTML: t
                }), o.default.createElement("div", {
                    className: "row"
                }, o.default.createElement("div", {
                    className: "u-no-padding-left l-col l-col-10"
                }, o.default.createElement("p", {
                    className: "h6 u-margin-top g-white1-c",
                    dangerouslySetInnerHTML: n
                })), o.default.createElement("div", {
                    className: "l-col l-col-2"
                }, o.default.createElement("label", {
                    className: "opl-switch u-right"
                }, o.default.createElement("input", {
                    type: "checkbox",
                    className: "u-acc-hide",
                    onChange: function() {
                        return null
                    },
                    checked: this.state.selected
                }), o.default.createElement("span", {
                    className: "o-ci"
                }), o.default.createElement("span", {
                    className: "o-ci-label"
                }, o.default.createElement("span", {
                    className: "u-acc-txt--show"
                }, "Wybieram"), o.default.createElement("span", {
                    className: "u-acc-txt--hide"
                }, "Wybrane")))))))), o.default.createElement("div", {
                    className: "u-no-margin-bottom l-row"
                }, o.default.createElement("div", {
                    className: "l-col l-col-3 large-offset-by-6 medium-offset-by-6"
                }, o.default.createElement("div", {
                    className: "opl-content-arrow__object opl-content-arrow--no-border g-bluef-b-bg",
                    style: {
                        marginTop: "-10px",
                        zIndex: "-1"
                    }
                })))), this.props.products.map(function(e, t) {
                    var r = i({}, e);
                    return o.default.createElement(u, {
                        hidden: "hidden" === r.presentation,
                        key: "WRAPPER" + r.id
                    }, o.default.createElement(c.default, {
                        key: r.id,
                        vas: r,
                        idx: t,
                        onSelectionChanged: a.props.onSelectionChanged,
                        onClickWrapped: a.props.onClickWrapped,
                        net: a.props.net
                    }))
                }))
            }
        }]), l
    }(o.Component);
    e.default = l;
    var u = function(e) {
        return e.hidden ? o.default.createElement("div", {
            className: "u-hide"
        }) : e.disable ? o.default.createElement("div", {
            style: {
                opacity: "0.5",
                pointerEvents: "none"
            }
        }, e.children) : o.default.createElement("div", null, e.children)
    };
    l.propTypes = {
        vas: t.PropTypes.shape({
            title: t.PropTypes.string,
            id: t.PropTypes.string,
            paymentDescriptions: t.PropTypes.shape({
                monthlyPayments: t.PropTypes.array
            }),
            warningMessage: t.PropTypes.string,
            onRemoveWarning: t.PropTypes.string
        }),
        idx: t.PropTypes.oneOfType([t.PropTypes.string, t.PropTypes.number]),
        onSelectionChanged: t.PropTypes.func,
        onClickWrapped: t.PropTypes.func,
        onTestWrapped: t.PropTypes.func
    }
});
//# sourceMappingURL=FixProductMigratedFirstCheckBox.js.map