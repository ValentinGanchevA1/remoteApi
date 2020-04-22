define(["exports", "react", "prop-types", "eshop/modules/cart/components/entriesList/shared/PriceBoxes", "eshop/modules/core/components/ui/Expander", "./Utils", "./FixProductDetails", "./modalFragments/FixInputFragments", "../../../../../core/enum/Outline", "../../utils/ConfigurableUtils"], function(e, p, t, a, u, d, m, f, g, r) {
    "use strict";

    function b(t, e) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), a.push.apply(a, r)
        }
        return a
    }

    function n(r) {
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
                var a = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, a)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, p = babelHelpers.interopRequireWildcard(p), m = babelHelpers.interopRequireDefault(m), g = babelHelpers.interopRequireDefault(g);
    var s = function(e) {
        babelHelpers.inherits(a, e);
        var t = n(a);

        function a(e) {
            return babelHelpers.classCallCheck(this, a), t.call(this, e)
        }
        return babelHelpers.createClass(a, [{
            key: "getSectionHeader",
            value: function() {
                return p.default.createElement(u.Trigger, {
                    className: "js-expander__trigger__nested u-inline-block large-offset-by-3 medium-offset-by-3 u-padding-all-l u-no-padding-top"
                }, p.default.createElement("span", {
                    className: "js-expander__trigger--show"
                }, "Zwiń szczegóły"), p.default.createElement("span", {
                    className: "js-expander__trigger--hide"
                }, "Szczegóły"))
            }
        }, {
            key: "add",
            value: function(e) {
                var t = this.props.vas.groupedProducts.find(function(e) {
                    return "hidden" !== e.presentation && !e.selected
                });
                this.props.onSelectionChanged(t.id, this.props.vas.propositionId)(e)
            }
        }, {
            key: "remove",
            value: function(e) {
                var t = this,
                    a = this.props.vas.groupedProducts.filter(function(e) {
                        return !!e.selected
                    }).map(function(e) {
                        return e.id
                    }),
                    r = this.props.vas.groupedProducts.find(function(e) {
                        return t.isRemovable(e, t.props.configurables, a)
                    });
                this.props.onSelectionChanged(r.id, this.props.vas.propositionId)(e)
            }
        }, {
            key: "isRemovable",
            value: function(e, t, a) {
                return !("hidden" === e.presentation || !e.selected || !t) && !(0, r.isMandatory)(e.id, t, a)
            }
        }, {
            key: "render",
            value: function() {
                var t = this,
                    e = {};
                this.props.vas.warningMessage ? e = {
                    outline: g.default.WARN
                } : this.props.vas.borderDescription && (e = {
                    outline: g.default.INFO
                });
                var a = this.props.vas.groupedProducts.filter(function(e) {
                        return "hidden" !== e.presentation
                    }).length,
                    r = this.props.vas.groupedProducts.filter(function(e) {
                        return e.mandatory
                    }).length,
                    n = this.props.vas.groupedProducts.filter(function(e) {
                        return e.selected
                    }).length,
                    s = 0 < n,
                    o = a <= n ? "is-disabled" : "",
                    l = n <= r ? "is-disabled" : "",
                    i = {
                        __html: this.props.vas.borderDescription
                    },
                    c = this.props.vas.warningMessage || this.props.vas.borderDescription;
                return p.default.createElement("div", {
                    className: "u-position-relative u-margin-top-m ".concat(c ? "" : "u-position-relative g-white1-bg is-selected"),
                    style: function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var a = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? b(Object(a), !0).forEach(function(e) {
                                babelHelpers.defineProperty(t, e, a[e])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : b(Object(a)).forEach(function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                            })
                        }
                        return t
                    }({}, e, {
                        marginTop: "2px"
                    })
                }, this.props.vas.warningMessage && p.default.createElement("div", {
                    className: "opl-box opl-payback-box opl-content-arrow--no-border g-yellowf-bg u-padding-m u-padding-top-m"
                }, p.default.createElement("div", {
                    className: "u-no-margin l-row"
                }, p.default.createElement("span", {
                    className: "g-icon g-icon--only g-icon--warn g-icon--xs-s u-padding u-padding-right-s",
                    "aria-hidden": "true"
                }), p.default.createElement("span", {
                    className: "u-strong h5"
                }, "Uwaga!"), p.default.createElement("p", {
                    className: "u-no-margin"
                }, this.props.vas.warningMessage)), p.default.createElement("div", {
                    className: "u-no-margin-bottom l-row"
                }, p.default.createElement("div", {
                    className: "l-col l-col-3 large-offset-by-6 medium-offset-by-6"
                }, p.default.createElement("div", {
                    className: "opl-content-arrow__object opl-content-arrow--no-border g-yellowf-b-bg",
                    style: {
                        marginTop: "-5px",
                        zIndex: "-1"
                    }
                })))), this.props.vas.borderDescription && !this.props.vas.selected && p.default.createElement("div", {
                    className: "opl-box opl-payback-box opl-content-arrow--no-border g-bluef-bg u-padding-m u-padding-top-m"
                }, p.default.createElement("div", {
                    className: "u-no-margin l-row"
                }, p.default.createElement("p", {
                    className: "h4 u-no-margin g-white1-c",
                    dangerouslySetInnerHTML: i
                })), p.default.createElement("div", {
                    className: "u-no-margin-bottom l-row"
                }, p.default.createElement("div", {
                    className: "l-col l-col-3 large-offset-by-6 medium-offset-by-6"
                }, p.default.createElement("div", {
                    className: "opl-content-arrow__object opl-content-arrow--no-border g-bluef-b-bg",
                    style: {
                        marginTop: "-10px",
                        zIndex: "-1"
                    }
                })))), !c && s && p.default.createElement("div", {
                    className: "opl-selection-layer",
                    "aria-hidden": "true"
                }, p.default.createElement("div", {
                    className: "opl-selection-layer__border"
                }), p.default.createElement("div", {
                    className: "opl-selection-layer__checkmark"
                })), p.default.createElement(d.LRow, {
                    className: "u-no-margin u-padding-all-l u-no-padding-bottom u-small-padding-all u-small-padding-top-l",
                    onClick: function() {}
                }, p.default.createElement(f.GraphicCell, {
                    vas: this.props.vas
                }), p.default.createElement(f.NameCell, {
                    vas: this.props.vas
                }), p.default.createElement(f.PriceCell, {
                    vas: this.props.vas,
                    net: this.props.net
                }), p.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-2 l-col-2  u-small-position-absolute u-small-position-right u-small-w-auto u-small-padding-right-l"
                }), p.default.createElement(d.LCol, {
                    small: "12",
                    medium: "2",
                    big: "2",
                    className: "u-small-position-absolute u-small-position-right u-small-w-auto u-small-padding-right-l"
                }, p.default.createElement("label", {
                    className: "u-right u-no-padding-top"
                }, p.default.createElement("div", {
                    className: "o-spinbox-wrapper opl-spinbox__wrapper g-brand2-bg"
                }, p.default.createElement("a", {
                    href: "#",
                    onClick: function(e) {
                        return t.remove(e)
                    },
                    tabIndex: "-1",
                    className: "o-spinbox__btn o-spinbox__btn--less g-icon g-icon--only g-icon--minus g-icon--xs ".concat(l)
                }, p.default.createElement("span", {
                    className: "u-acc-hide"
                }, "mniej")), p.default.createElement("input", {
                    id: "quantity-box-".concat(this.props.vas.id),
                    type: "text",
                    maxLength: "1",
                    min: r,
                    max: a,
                    className: "o-spinbox g-white1-c u-no-border",
                    disabled: !0,
                    value: n
                }), p.default.createElement("a", {
                    href: "#",
                    onClick: function(e) {
                        return t.add(e)
                    },
                    tabIndex: "-1",
                    className: "o-spinbox__btn o-spinbox__btn--more g-icon g-icon--only g-icon--plus g-icon--xs ".concat(o)
                }, p.default.createElement("span", {
                    className: "u-acc-hide"
                }, "więcej")))))), p.default.createElement(u.Section, {
                    header: this.getSectionHeader(),
                    contentClassName: "js-expander__container__nested",
                    headerClassName: "u-position-relative u-small-text-right",
                    className: "l-row u-no-margin opl-section-outer--2"
                }, p.default.createElement(m.default, {
                    vas: this.props.vas
                })))
            }
        }]), a
    }(p.Component);
    (e.default = s).propTypes = {
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
        onClickWrapped: t.PropTypes.func
    }
});
//# sourceMappingURL=FixProductQuantityBox.js.map