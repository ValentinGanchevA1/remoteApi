define(["exports", "react", "prop-types", "../../../documents/components/MulticartDocumentLink", "../../../core/components/ui/Expander"], function(e, l, t, n, a) {
    "use strict";

    function o(l) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(l);
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
    }), e.default = void 0, l = babelHelpers.interopRequireWildcard(l), t = babelHelpers.interopRequireDefault(t), n = babelHelpers.interopRequireDefault(n);
    var r = function(e) {
        babelHelpers.inherits(r, e);
        var t = o(r);

        function r() {
            return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
        }
        return babelHelpers.createClass(r, [{
            key: "render",
            value: function() {
                var e = l.default.createElement("h2", {
                        className: "h4 opl-section__heading"
                    }, this.props.header),
                    t = l.default.createElement("div", {
                        className: "l-row"
                    }, l.default.createElement(a.Toggle, {
                        variant: "arrow",
                        header: e,
                        className: "l-col l-col-12 ",
                        triggerClassName: "opl-document__expander__trigger"
                    }, l.default.createElement("span", {
                        className: "opl-section__text-show"
                    }, "rozwiń sekcję Inne"), l.default.createElement("span", {
                        className: "opl-section__text-hide"
                    }, "zwiń sekcję Inne")));
                return l.default.createElement(a.Expander, {
                    variant: "section",
                    sectionClassName: "opl-checkout-section",
                    summaryClassName: "opl-section__border-bottom",
                    toggleClassName: "h4 opl-checkout-section__heading"
                }, l.default.createElement(a.Section, {
                    header: t
                }, l.default.createElement("div", {
                    className: "u-padding-left-l-xl u-small-no-padding-l u-padding-m"
                }, l.default.createElement("ul", null, this.props.documents && l.default.createElement("div", null, this.props.documents.map(function(e) {
                    var t = e.documentCode + (e.bundleNo ? "_" + e.bundleNo : "");
                    return l.default.createElement(n.default, babelHelpers.extends({
                        key: t
                    }, e))
                }))))))
            }
        }]), r
    }(l.Component);
    babelHelpers.defineProperty(r, "propTypes", {
        header: t.default.string,
        documents: t.default.arrayOf(t.default.shape({
            documentCode: t.default.string,
            documentDescription: t.default.string,
            bundleNo: t.default.number
        }))
    });
    var s = r;
    e.default = s
});
//# sourceMappingURL=OraDocumentsSectionCategory.js.map