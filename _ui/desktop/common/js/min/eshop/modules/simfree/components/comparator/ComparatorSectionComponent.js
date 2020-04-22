define(["exports", "react", "./ComparatorRowComponent"], function(e, a, r) {
    "use strict";

    function o(a) {
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
                var n = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, n)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, a = babelHelpers.interopRequireWildcard(a), r = babelHelpers.interopRequireDefault(r);
    var t = function(e) {
        babelHelpers.inherits(n, e);
        var t = o(n);

        function n(e) {
            return babelHelpers.classCallCheck(this, n), t.call(this, e)
        }
        return babelHelpers.createClass(n, [{
            key: "componentDidMount",
            value: function() {
                this.componentNeedInitialization("comparator-expander") && OPL.UI.initModules(document.getElementById("comparator-expander-parent"))
            }
        }, {
            key: "componentNeedInitialization",
            value: function(e) {
                return null != document.getElementById(e) && !document.getElementById(e).hasAttribute("data-js-processed")
            }
        }, {
            key: "render",
            value: function() {
                var n = this;
                return this.props.section.attributesRowDTOList && 0 < this.props.section.attributesRowDTOList.length ? a.default.createElement("div", {
                    key: this.props.section.name + this.props.idx,
                    className: "opl-section opl-section--expander is-expanded u-no-padding"
                }, a.default.createElement("div", {
                    className: "opl-section__header u-margin-m u-margin-top-m"
                }, a.default.createElement("h3", {
                    className: "h4"
                }, this.props.section.name), a.default.createElement("a", {
                    id: "mod-common/modules/opl-expander-2-control-" + this.props.idx,
                    role: "tab",
                    className: "opl-section__expander-trigger",
                    href: "#",
                    "aria-controls": "expander-content-" + this.props.idx,
                    "aria-expanded": "true"
                }, a.default.createElement("span", {
                    className: "u-acc-hide"
                }, "rozwiń sekcję"), a.default.createElement("span", {
                    className: "u-acc-hide"
                }, "zwiń sekcję"))), a.default.createElement("div", {
                    className: "opl-section__content",
                    id: "expander-content-" + this.props.idx,
                    role: "tabpanel",
                    "aria-labelledby": "mod-common/modules/opl-expander-2-control-" + this.props.idx,
                    "aria-hidden": "false"
                }, a.default.createElement("div", {
                    className: "opl-section__content-inner u-no-padding"
                }, a.default.createElement("table", {
                    className: "opl-table opl-table-compare"
                }, a.default.createElement("caption", {
                    className: "u-acc-hide"
                }, this.props.section.name), a.default.createElement("tbody", null, this.props.section.attributesRowDTOList && this.props.section.attributesRowDTOList.map(function(e, t) {
                    return a.default.createElement(r.default, {
                        row: e,
                        idx: t,
                        markDiff: n.props.markDiff
                    })
                })))))) : null
            }
        }]), n
    }(a.Component);
    e.default = t
});
//# sourceMappingURL=ComparatorSectionComponent.js.map