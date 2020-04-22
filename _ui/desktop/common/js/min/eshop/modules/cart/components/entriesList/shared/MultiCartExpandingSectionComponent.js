define(["exports", "react", "prop-types", "lodash"], function(e, a, t, r) {
    "use strict";

    function n(a) {
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
                var l = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, l)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, a = babelHelpers.interopRequireWildcard(a), t = babelHelpers.interopRequireDefault(t), r = babelHelpers.interopRequireDefault(r);
    var l = function(e) {
            babelHelpers.inherits(l, e);
            var t = n(l);

            function l(e) {
                return babelHelpers.classCallCheck(this, l), t.call(this, e)
            }
            return babelHelpers.createClass(l, [{
                key: "render",
                value: function() {
                    return a.default.createElement("div", {
                        role: "tablist",
                        "aria-multiselectable": "false",
                        id: "bundle-" + this.props.entry.bundleNo
                    }, a.default.createElement("div", {
                        className: "opl-checkout__section opl-checkout__section--togglable u-padding is-expanded"
                    }, a.default.createElement("div", {
                        className: "opl-checkout__section__header"
                    }, a.default.createElement("div", {
                        className: "l-full-row u-padding-top-l"
                    }, a.default.createElement("div", {
                        className: "l-page-row u-small-padding-left"
                    }, a.default.createElement("div", {
                        className: "u-padding-s u-small-padding u-padding-right-l u-small-no-padding-r"
                    }, a.default.createElement("table", {
                        className: "u-table-fixed"
                    }, a.default.createElement("thead", null, a.default.createElement("tr", null, a.default.createElement("th", {
                        className: "u-vertical-bottom u-text-left"
                    }, a.default.createElement("table", {
                        className: "u-small-w-100 u-w-auto"
                    }, a.default.createElement("tbody", null, a.default.createElement("tr", null, a.default.createElement("td", {
                        className: "u-vertical-bottom u-small-vertical-baseline u-small-w-100",
                        style: {
                            paddingBottom: 1
                        }
                    }, a.default.createElement("h3", {
                        className: "h2 u-inline"
                    }, this.props.title + " " + r.default.capitalize(this.props.entry.promotionType))), a.default.createElement("td", {
                        className: "u-vertical-bottom u-padding-s u-padding-left-l"
                    }), a.default.createElement("td", {
                        className: "u-vertical-bottom u-small-vertical-baseline u-padding-s u-padding-left-l u-small-no-padding-b"
                    }, a.default.createElement("a", {
                        href: "#",
                        onClick: this.props.onRemoveClicked
                    }, this.props.conf.deleteEntryLabelHeader, a.default.createElement("span", {
                        className: "u-acc-hide"
                    }, this.props.title))))))), a.default.createElement("th", {
                        "aria-hidden": "true",
                        className: "u-padding-s u-padding-right-s l-col-2 u-vertical-top u-text-right u-small-hide"
                    }, "Opłaty ", a.default.createElement("br", {
                        className: "u-small-hide u-large-hide"
                    }), "jednorazowe"), a.default.createElement("th", {
                        "aria-hidden": "true",
                        className: "u-padding-s l-col-2 u-small-hide u-text-right u-vertical-top"
                    }, "Opłaty ", a.default.createElement("br", {
                        className: "u-small-hide u-large-hide"
                    }), "miesięczne ", !this.props.isB2B && a.default.createElement("span", null, a.default.createElement("br", null), "z rabatami"))))))))), a.default.createElement("div", {
                        "aria-hidden": "false",
                        style: {
                            display: "block"
                        },
                        className: "opl-checkout__section__content osc-" + this.props.entry.bundleNo,
                        role: "tabpanel"
                    }, this.props.children[0]), this.props.children[1]))
                }
            }]), l
        }(a.Component),
        s = t.default.shape({
            bundleNo: t.default.number
        }),
        u = t.default.shape({
            deleteEntryLabelHeader: t.default.string
        });
    l.propTypes = {
        title: t.default.string,
        trigger: t.default.string.isRequired,
        entry: s.isRequired,
        conf: u.isRequired,
        children: t.default.array.isRequired,
        onRemoveClicked: t.default.func,
        isB2B: t.default.bool
    };
    var i = l;
    e.default = i
});
//# sourceMappingURL=MultiCartExpandingSectionComponent.js.map