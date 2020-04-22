define(["exports", "react", "eshop/modules/documents/components/MulticartDocumentLink", "eshop/modules/core/components/ui/Expander"], function(e, l, r, o) {
    "use strict";

    function a(l) {
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
                var n = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, n)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, l = babelHelpers.interopRequireWildcard(l), r = babelHelpers.interopRequireDefault(r);
    var t = function(e) {
        babelHelpers.inherits(n, e);
        var t = a(n);

        function n(e) {
            return babelHelpers.classCallCheck(this, n), t.call(this, e)
        }
        return babelHelpers.createClass(n, [{
            key: "render",
            value: function() {
                var e = this.props.documentList.map(function(e) {
                        var t = e.documentCode + (e.bundleNo ? "_" + e.bundleNo : "");
                        return l.default.createElement(r.default, babelHelpers.extends({
                            key: t
                        }, e))
                    }),
                    t = l.default.createElement("h3", {
                        className: "h4 opl-section__heading"
                    }, this.props.header),
                    n = l.default.createElement("div", {
                        className: "l-row"
                    }, l.default.createElement(o.Toggle, {
                        variant: "arrow",
                        header: t,
                        className: "l-col l-col-12 ",
                        triggerClassName: "opl-document__section__trigger"
                    }, l.default.createElement("span", {
                        className: "opl-section__text-show"
                    }, "rozwiń sekcję Umowy"), l.default.createElement("span", {
                        className: "opl-section__text-hide"
                    }, "zwiń sekcję Umowy")));
                return l.default.createElement(o.Section, {
                    header: n,
                    id: "document-component-subsection-" + this.props.header,
                    variant: "section",
                    className: "opl-document__section" + (0 === this.props.documentList.length ? " u-hide" : ""),
                    contentClassName: "opl-document__section__content"
                }, l.default.createElement("div", {
                    className: "u-padding-left-l-xl u-small-no-padding-l u-padding-m"
                }, l.default.createElement("ul", null, e)))
            }
        }]), n
    }(l.Component);
    e.default = t
});
//# sourceMappingURL=OraDocumentsSectionPart.js.map