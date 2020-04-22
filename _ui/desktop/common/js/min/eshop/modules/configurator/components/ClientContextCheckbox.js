define(["exports", "react", "react-redux", "prop-types", "../actions/filters", "../selectors/filters", "eshop/modules/core/components/ui/Tooltip", "eshop/modules/auth/selectors/authorization", "eshop/modules/cart/selectors", "../../core/enum/SalesChannel", "eshop/modules/simfree/selectors"], function(e, r, t, l, n, s, i, a, o, u, c) {
    "use strict";

    function p(r) {
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
                var l = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, l)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, r = babelHelpers.interopRequireDefault(r), l = babelHelpers.interopRequireDefault(l), i = babelHelpers.interopRequireDefault(i), u = babelHelpers.interopRequireDefault(u);
    var f = function(e) {
            babelHelpers.inherits(l, e);
            var t = p(l);

            function l() {
                return babelHelpers.classCallCheck(this, l), t.apply(this, arguments)
            }
            return babelHelpers.createClass(l, [{
                key: "componentDidMount",
                value: function() {}
            }, {
                key: "componentWillUnmount",
                value: function() {}
            }, {
                key: "renderSwitch",
                value: function() {
                    return r.default.createElement("div", {
                        className: "u-table-cell u-vertical-middle  " + ("left" === this.props.position ? "u-padding-right-s" : "u-padding-left-s")
                    }, r.default.createElement("label", {
                        className: "opl-switch u-block"
                    }, r.default.createElement("input", {
                        type: "checkbox",
                        name: "nope",
                        className: "is-not-empty",
                        onChange: this.props.setClientContext,
                        checked: this.props.clientContext
                    }), r.default.createElement("span", {
                        className: "o-ci"
                    }), r.default.createElement("span", {
                        className: "o-ci-label"
                    }, r.default.createElement("span", {
                        className: "u-acc-txt--show"
                    }, "Wybieram"), r.default.createElement("span", {
                        className: "u-acc-txt--hide"
                    }, "Wybrany"))))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this;
                    return e.props.addTerminalToOfferBundleNo || e.props.channels.sales !== u.default.WWW || e.props.isLogged || e.props.isCartMobile ? null : r.default.createElement("div", {
                        className: "u-table u-left u-large-" + this.props.position + " u-medium-" + this.props.position
                    }, "left" === this.props.position && this.renderSwitch(), r.default.createElement("div", {
                        className: "u-table-cell u-vertical-middle"
                    }, r.default.createElement("p", {
                        className: "u-small-font-small"
                    }, this.props.filterCmsDescriptions && this.props.filterCmsDescriptions.clientContextLabel || this.props.label)), r.default.createElement("div", {
                        className: "u-table-cell u-vertical-middle u-padding-right-s"
                    }, r.default.createElement(i.default, null, r.default.createElement(d, null, this.props.filterCmsDescriptions && this.props.filterCmsDescriptions.clientContextTooltip || this.props.tooltip))), "right" === this.props.position && this.renderSwitch())
                }
            }]), l
        }(r.default.PureComponent),
        d = function(e) {
            var t = {
                __html: e.children
            };
            return r.default.createElement("div", {
                dangerouslySetInnerHTML: t
            })
        };
    f.propTypes = {
        label: l.default.string,
        tooltip: l.default.string,
        setClientContext: l.default.func.isRequired,
        clientContext: l.default.bool.isRequired,
        position: l.default.oneOf(["left", "right"]),
        descriptions: l.default.objectOf(l.default.string)
    }, f.defaultProps = {
        label: "Pokaż rabaty na kolejne karty SIM",
        tooltip: "Opłata abonamentowa uwzględnia rabaty: za łączenie usług w Orange - 20 zł, za wyrażenie zgody na e-fakturę i terminowe płatności – 5 zł oraz zgody marketingowej – 5 zł.",
        position: "right"
    };
    var m = (0, t.connect)(function(e) {
        return {
            clientContext: (0, s.getClientContext)(e),
            isLogged: (0, a.isLogged)(e),
            isCartMobile: (0, o.isCartMobile)(e),
            filterCmsDescriptions: (0, c.getSelectedOfferTypeDescriptions)(e)
        }
    }, function(t) {
        return {
            setClientContext: function(e) {
                return t((0, n.setClientContext)(e.target.checked))
            }
        }
    })(f);
    e.default = m
});
//# sourceMappingURL=ClientContextCheckbox.js.map