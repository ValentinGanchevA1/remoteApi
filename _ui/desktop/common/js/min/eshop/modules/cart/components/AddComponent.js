define(["exports", "react", "react-redux", "prop-types", "eshop/components/OraCommonComponents", "../../core/utils/ui"], function(t, n, e, o, l, i) {
    "use strict";

    function a(n) {
        return function() {
            var t, e = babelHelpers.getPrototypeOf(n);
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
                var o = babelHelpers.getPrototypeOf(this).constructor;
                t = Reflect.construct(e, arguments, o)
            } else t = e.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, t)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0, n = babelHelpers.interopRequireWildcard(n), o = babelHelpers.interopRequireDefault(o);
    var r = function(t) {
        babelHelpers.inherits(o, t);
        var e = a(o);

        function o(t) {
            return babelHelpers.classCallCheck(this, o), e.call(this, t)
        }
        return babelHelpers.createClass(o, [{
            key: "componentDidMount",
            value: function() {
                this.initTooltip()
            }
        }, {
            key: "componentDidUpdate",
            value: function() {
                this.initTooltip()
            }
        }, {
            key: "initTooltip",
            value: function() {
                s("tooltipContent", this.props) && this.tooltipWrapperRef && (0, i.loadModule)(this.tooltipWrapperRef, {
                    path: "core/modules/tooltips",
                    options: {
                        maxWidth: "320",
                        side: "top",
                        trigger: "hover"
                    }
                })
            }
        }, {
            key: "componentWillUpdate",
            value: function() {
                s("tooltipContent", this.props) && this.tooltipWrapperRef && OPL.UI.stopModules(this.tooltipWrapperRef)
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                s("tooltipContent", this.props) && OPL.UI.stopModules(this.tooltipWrapperRef)
            }
        }, {
            key: "onAddClick",
            value: function() {
                this.props.onAddClick()
            }
        }, {
            key: "getRootViewContent",
            value: function() {
                var e = this,
                    t = s("tooltipContent", this.props),
                    o = s("addRowIcon", this.props);
                return [n.default.createElement("span", {
                    className: "u-acc-hide",
                    key: "addBtnTextKey"
                }, s("addBtnText", this.props)), n.default.createElement("div", {
                    className: "u-padding-left-l u-padding-right-l g-white1-bg u-box-shadow--s u-box-shadow-hover",
                    key: "addBtnContentKey"
                }, n.default.createElement("table", {
                    className: "u-table-fixed"
                }, n.default.createElement("tbody", {
                    ref: function(t) {
                        return e.tooltipWrapperRef = t
                    }
                }, n.default.createElement("tr", null, n.default.createElement("td", {
                    className: "opl-checkout__icon__cell"
                }, n.default.createElement("span", {
                    "aria-hidden": "true",
                    className: "g-icon g-icon--only " + o
                })), n.default.createElement("td", {
                    className: "u-padding-top-l u-padding-l u-padding-right-l u-font-bold u-small-padding-right"
                }, n.default.createElement("div", null, s("label", this.props), t && [n.default.createElement("a", {
                    href: "#",
                    onClick: function(t) {
                        return t.preventDefault()
                    },
                    key: "tooltipLink_" + this.props.tooltipId,
                    "aria-describedby": this.props.tooltipId,
                    className: "o-tooltip__trigger u-padding-left-s tooltipstered"
                }, n.default.createElement("span", {
                    className: "g-icon g-icon--hint g-icon--font g-icon--xs"
                }), n.default.createElement("span", {
                    className: "u-acc-hide"
                }, s("tooltipBtnText", this.props))), n.default.createElement("div", {
                    className: "o-tooltip__content",
                    id: this.props.tooltipId,
                    role: "tooltip",
                    key: "tooltipContent_" + this.props.tooltipId
                }, n.default.createElement("p", {
                    className: "u-margin"
                }, t))]), this.props.children), this.props.showAddLink && n.default.createElement("td", {
                    className: "opl-checkout__button__cell u-padding-top-l u-padding-l"
                }, n.default.createElement("div", {
                    className: "opl-product-addlink u-right u-small-right"
                }))))))]
            }
        }, {
            key: "render",
            value: function() {
                return this.props.showAddLink ? n.default.createElement("a", {
                    href: "#",
                    "aria-label": s("addBtnText", this.props),
                    onClick: this.onAddClick.bind(this)
                }, this.getRootViewContent()) : n.default.createElement("div", null, this.getRootViewContent())
            }
        }]), o
    }(n.Component);

    function s(t, e) {
        return e.descriptions[t] || e[t]
    }(t.default = r).propTypes = {
        label: o.default.string,
        tooltipId: o.default.string.isRequired,
        tooltipContent: o.default.string,
        tooltipBtnText: o.default.string,
        addBtnText: o.default.string,
        addRowIcon: o.default.string,
        showAddLink: o.default.bool
    }, r.defaultProps = {
        label: "Posiadam",
        addBtnText: "Kliknij aby potwierdzić posiadanie",
        tooltipBtnText: "Otwórz podpowiedź",
        addRowIcon: "g-icon--voucher",
        showAddLink: !0
    }
});
//# sourceMappingURL=AddComponent.js.map