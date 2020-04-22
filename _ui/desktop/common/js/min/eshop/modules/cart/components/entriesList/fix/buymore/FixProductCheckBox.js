define(["exports", "react", "prop-types", "eshop/modules/core/components/ui/Expander", "./Utils", "./FixProductDetails", "./modalFragments/FixInputFragments", "../../../../../core/enum/Outline"], function(e, s, t, n, o, l, i, p) {
    "use strict";

    function c(t, e) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), a.push.apply(a, r)
        }
        return a
    }

    function r(r) {
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
    }), e.default = void 0, s = babelHelpers.interopRequireWildcard(s), l = babelHelpers.interopRequireDefault(l), p = babelHelpers.interopRequireDefault(p);
    var a = function(e) {
        babelHelpers.inherits(a, e);
        var t = r(a);

        function a(e) {
            return babelHelpers.classCallCheck(this, a), t.call(this, e)
        }
        return babelHelpers.createClass(a, [{
            key: "getSectionHeader",
            value: function() {
                return s.default.createElement(n.Trigger, {
                    className: "js-expander__trigger__nested u-inline-block large-offset-by-3 medium-offset-by-3 u-padding-all-l u-no-padding-top"
                }, s.default.createElement("span", {
                    className: "js-expander__trigger--show"
                }, "Zwiń szczegóły"), s.default.createElement("span", {
                    className: "js-expander__trigger--hide"
                }, "Szczegóły"))
            }
        }, {
            key: "render",
            value: function() {
                var e = {};
                this.props.vas.warningMessage ? e = {
                    outline: p.default.WARN
                } : this.props.vas.borderDescription && (e = {
                    outline: p.default.INFO
                });
                var t = {};
                t = this.props.vas.selected && this.props.vas.onRemoveWarning ? this.props.onClickWrapped(this.props.vas.id, this.props.vas.propositionId, this.props.vas.onRemoveWarning) : this.props.onSelectionChanged(this.props.vas.id, this.props.vas.propositionId);
                var a = {
                        __html: this.props.vas.borderDescription
                    },
                    r = this.props.vas.warningMessage || this.props.vas.borderDescription;
                return s.default.createElement("div", {
                    className: "u-position-relative u-margin-top-m ".concat(r ? "" : "u-position-relative g-white1-bg is-selected"),
                    style: function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var a = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? c(Object(a), !0).forEach(function(e) {
                                babelHelpers.defineProperty(t, e, a[e])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : c(Object(a)).forEach(function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                            })
                        }
                        return t
                    }({}, e, {
                        marginTop: "2px"
                    })
                }, this.props.vas.warningMessage && s.default.createElement("div", {
                    className: "opl-box opl-payback-box opl-content-arrow--no-border g-yellowf-bg u-padding-m u-padding-top-m"
                }, s.default.createElement("div", {
                    className: "u-no-margin l-row"
                }, s.default.createElement("span", {
                    className: "g-icon g-icon--only g-icon--warn g-icon--xs-s u-padding u-padding-right-s",
                    "aria-hidden": "true"
                }), s.default.createElement("span", {
                    className: "u-strong h5"
                }, "Uwaga!"), s.default.createElement("p", {
                    className: "u-no-margin"
                }, this.props.vas.warningMessage)), s.default.createElement("div", {
                    className: "u-no-margin-bottom l-row"
                }, s.default.createElement("div", {
                    className: "l-col l-col-3 large-offset-by-6 medium-offset-by-6"
                }, s.default.createElement("div", {
                    className: "opl-content-arrow__object opl-content-arrow--no-border g-yellowf-b-bg",
                    style: {
                        marginTop: "-5px",
                        zIndex: "-1"
                    }
                })))), this.props.vas.borderDescription && !this.props.vas.selected && s.default.createElement("div", {
                    className: "opl-box opl-payback-box opl-content-arrow--no-border g-bluef-bg u-padding-m u-padding-top-m"
                }, s.default.createElement("div", {
                    className: "u-no-margin l-row"
                }, s.default.createElement("p", {
                    className: "h4 u-no-margin g-white1-c",
                    dangerouslySetInnerHTML: a
                })), s.default.createElement("div", {
                    className: "u-no-margin-bottom l-row"
                }, s.default.createElement("div", {
                    className: "l-col l-col-3 large-offset-by-6 medium-offset-by-6"
                }, s.default.createElement("div", {
                    className: "opl-content-arrow__object opl-content-arrow--no-border g-bluef-b-bg",
                    style: {
                        marginTop: "-10px",
                        zIndex: "-1"
                    }
                })))), !r && this.props.vas.selected && s.default.createElement("div", {
                    className: "opl-selection-layer",
                    "aria-hidden": "true"
                }, s.default.createElement("div", {
                    className: "opl-selection-layer__border"
                }), s.default.createElement("div", {
                    className: "opl-selection-layer__checkmark"
                })), s.default.createElement(o.LRow, {
                    id: "product-checkbox-row-".concat(this.props.vas.id, "-").concat(this.props.idx),
                    className: "u-no-margin u-padding-all-l u-no-padding-bottom u-small-padding-all u-small-padding-top-l",
                    onClick: t
                }, s.default.createElement(i.GraphicCell, {
                    vas: this.props.vas
                }), s.default.createElement(i.NameCell, {
                    vas: this.props.vas
                }), s.default.createElement(i.PriceCell, {
                    vas: this.props.vas,
                    net: this.props.net
                }), s.default.createElement(o.LCol, {
                    small: "12",
                    medium: "2",
                    big: "2",
                    className: "u-small-position-absolute u-small-position-right u-small-w-auto u-small-padding-right-l"
                }, s.default.createElement("label", {
                    className: "opl-switch u-right"
                }, s.default.createElement("input", {
                    type: "checkbox",
                    className: "u-acc-hide",
                    disabled: this.props.vas.mandatory,
                    checked: this.props.vas.selected,
                    onChange: function() {
                        return null
                    }
                }), s.default.createElement("span", {
                    className: "o-ci"
                }), s.default.createElement("span", {
                    className: "o-ci-label"
                }, s.default.createElement("span", {
                    className: "u-acc-txt--show"
                }, "Wybieram"), s.default.createElement("span", {
                    className: "u-acc-txt--hide"
                }, "Wybrane"))))), s.default.createElement(n.Section, {
                    header: this.getSectionHeader(),
                    contentClassName: "js-expander__container__nested",
                    headerClassName: "u-position-relative u-small-text-right",
                    className: "l-row u-no-margin opl-section-outer--2"
                }, s.default.createElement(l.default, {
                    vas: this.props.vas
                })))
            }
        }]), a
    }(s.Component);
    (e.default = a).propTypes = {
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
//# sourceMappingURL=FixProductCheckBox.js.map