define(["exports", "react", "eshop/modules/fix/components/FixTvFilteredView", "eshop/modules/core/components/ui/Expander"], function(e, n, l, r) {
    "use strict";

    function s(n) {
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
                var a = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, a)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, n = babelHelpers.interopRequireWildcard(n), l = babelHelpers.interopRequireDefault(l);
    var t = function(e) {
        babelHelpers.inherits(a, e);
        var t = s(a);

        function a() {
            return babelHelpers.classCallCheck(this, a), t.apply(this, arguments)
        }
        return babelHelpers.createClass(a, [{
            key: "getSectionHeader",
            value: function() {
                return n.default.createElement("div", {
                    className: "u-padding-all-l u-large-padding-l-xl  u-padding-left-xxl u-box-shadow--s u-small-padding-xl "
                }, n.default.createElement(r.Trigger, {
                    className: "js-expander__trigger__nested opl-section__expander-trigger u-inline-block  u-margin-left-l u-margin-right-l u-margin-top-m"
                }, n.default.createElement("div", {
                    className: "u-padding-left-xl u-padding-top-m u-padding-right-xl "
                }, n.default.createElement("span", {
                    className: "js-expander__trigger--hide "
                }, n.default.createElement("h4", {
                    className: "u-padding-top-s"
                }, "Wyszukaj kanały lub pakiety telewizyjne")), n.default.createElement("span", {
                    className: "js-expander__trigger--show"
                }, n.default.createElement("h4", {
                    className: "u-padding-top-s"
                }, "Wyszukaj kanały lub pakiety telewizyjne")))))
            }
        }, {
            key: "render",
            value: function() {
                return this.props.tvPackages && 0 < this.props.tvPackages.length ? n.default.createElement(r.Section, {
                    header: this.getSectionHeader(),
                    contentClassName: "js-expander__container__nested",
                    headerClassName: " u-small-text-right opl-section--togglable u-margin-top",
                    className: "u-position-relative opl-section opl-section--togglable  u-no-margin u-no-padding-top ",
                    expanded: !1
                }, n.default.createElement(l.default, {
                    tvPackages: this.props.tvPackages
                })) : null
            }
        }]), a
    }(n.default.Component);
    e.default = t
});
//# sourceMappingURL=FixTvFilteredExpander.js.map