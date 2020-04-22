define(["exports", "react", "prop-types", "react-redux", "../actions/documents", "../selectors", "./MulticartDocumentLink", "eshop/modules/core/components/ui/Expander"], function(e, r, t, n, o, l, c, a) {
    "use strict";

    function s(r) {
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
                var n = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, n)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, r = babelHelpers.interopRequireWildcard(r), t = babelHelpers.interopRequireDefault(t), c = babelHelpers.interopRequireDefault(c);
    var u = function(e) {
        babelHelpers.inherits(n, e);
        var t = s(n);

        function n() {
            return babelHelpers.classCallCheck(this, n), t.apply(this, arguments)
        }
        return babelHelpers.createClass(n, [{
            key: "getSortedDocuments",
            value: function(e) {
                return e.map(function(e) {
                    var t = e.documentCode + (e.bundleNo ? "_" + e.bundleNo : "");
                    return r.default.createElement(c.default, babelHelpers.extends({
                        key: t
                    }, e))
                })
            }
        }, {
            key: "render",
            value: function() {
                var e = this.getSortedDocuments(this.props.documents),
                    t = r.default.createElement("h3", {
                        className: "h4 opl-section__heading"
                    }, this.props.title),
                    n = r.default.createElement("div", {
                        className: "l-row"
                    }, r.default.createElement(a.Toggle, {
                        variant: "arrow",
                        header: t,
                        className: "l-col l-col-12 ",
                        triggerClassName: "opl-document__section__trigger"
                    }, r.default.createElement("span", {
                        className: "opl-section__text-show"
                    }, "rozwiń sekcję Umowy"), r.default.createElement("span", {
                        className: "opl-section__text-hide"
                    }, "zwiń sekcję Umowy")));
                return r.default.createElement(a.Section, {
                    header: n,
                    id: "document-component-subsection-" + this.props.sectionKey,
                    variant: "section",
                    className: "opl-document__section" + (0 === this.props.documents.length ? " u-hide" : ""),
                    contentClassName: "opl-document__section__content"
                }, r.default.createElement("div", {
                    className: "u-padding-left-l-xl u-small-no-padding-l u-padding-m"
                }, r.default.createElement("ul", null, e)))
            }
        }]), n
    }(r.Component);
    u.propTypes = {
        title: t.default.string,
        types: t.default.array
    };
    var i = (0, n.connect)(function() {
        var n = (0, l.createGetDocumentsForTypesSelector)();
        return function(e, t) {
            return {
                documents: n(e, t)
            }
        }
    }, function(e) {
        return {
            fetchDocuments: function() {
                return e((0, o.fetchDocuments)())
            }
        }
    })(u);
    e.default = i
});
//# sourceMappingURL=MulticartDocumentsListComponent.js.map