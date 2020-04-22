define(["exports", "react", "prop-types", "react-redux", "eshop/components/OraCommonComponents", "../selectors", "../actions/documents", "eshop/modules/cart/selectors", "eshop/utils/OnlineUtils"], function(e, t, n, r, o, i, s, u, c) {
    "use strict";

    function a(r) {
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
    }), e.default = void 0, t = babelHelpers.interopRequireWildcard(t), n = babelHelpers.interopRequireDefault(n), c = babelHelpers.interopRequireDefault(c);
    var l = function(e) {
        babelHelpers.inherits(r, e);
        var n = a(r);

        function r(e) {
            var t;
            return babelHelpers.classCallCheck(this, r), (t = n.call(this, e)).handleClick = t.handleClick.bind(babelHelpers.assertThisInitialized(t)), t
        }
        return babelHelpers.createClass(r, [{
            key: "handleClick",
            value: function(e) {
                this.props.getOrCreateDocument(this.props.documentCode, this.props.bundleNo, this.props.documentType), e.preventDefault()
            }
        }, {
            key: "isMsisdnInDescriptionNeeded",
            value: function() {
                return "MOB_DOC_AGR_B2C" === this.props.documentCode || "MOB_DOC_AGR_B2B" === this.props.documentCode || "DOC_AGR_ASSIGNMENT" === this.props.documentCode || "DOC_AGR_ASSIGNMENT_DEATH" === this.props.documentCode
            }
        }, {
            key: "getDescriptionWithMsisdn",
            value: function() {
                var t = this,
                    e = this.props.miniCartData.entries.find(function(e) {
                        return e.bundleNo === t.props.bundleNo
                    });
                if (!e) return this.props.documentDescription;
                var n = c.default.formatMsisdn(c.default.isMigration(e.processType) ? e.mnpNumber : e.msisdn);
                return this.props.documentDescription + " (nr " + n + ") "
            }
        }, {
            key: "getDocumentDescription",
            value: function() {
                return this.isMsisdnInDescriptionNeeded() ? this.getDescriptionWithMsisdn() : this.props.documentDescription
            }
        }, {
            key: "renderDocumentLink",
            value: function() {
                return this.props.anyDocumentIsBeingLoaded ? t.default.createElement("span", {
                    className: "u-font-bold"
                }, this.getDocumentDescription(), t.default.createElement("span", {
                    className: "u-acc-hide"
                }, "PDF")) : t.default.createElement("a", {
                    href: "#",
                    onClick: this.handleClick
                }, this.getDocumentDescription(), t.default.createElement("span", {
                    className: "u-acc-hide"
                }, "PDF"))
            }
        }, {
            key: "render",
            value: function() {
                var e = "print-documents-loader-" + this.props.documentCode + (this.props.bundleNo ? "_" + this.props.bundleNo : "");
                return t.default.createElement("li", {
                    className: "u-padding-s"
                }, t.default.createElement(o.OraLoader, {
                    loading: this.props.isDocumentBeingDownloaded,
                    id: e,
                    parentId: "document-loader"
                }, t.default.createElement("div", {
                    className: "u-vertical-middle"
                }, this.renderDocumentLink())))
            }
        }]), r
    }(t.Component);
    l.propTypes = {
        documentCode: n.default.string.isRequired,
        documentDescription: n.default.string.isRequired,
        bundleNo: n.default.number
    };
    var d = (0, r.connect)(function() {
        var n = (0, i.createGetDocumentLinkForCodeSelector)(),
            r = (0, i.createIsDocumentBeingDownloadedSelector)();
        return function(e, t) {
            return {
                anyDocumentIsBeingLoaded: (0, i.getAnyDocumentIsBeingLoaded)(e),
                isDocumentBeingDownloaded: r(e, t),
                documentLink: n(e, t),
                miniCartData: (0, u.getMiniCartData)(e)
            }
        }
    }, function(r) {
        return {
            getOrCreateDocument: function(e, t, n) {
                return r((0, s.getOrCreateDocument)(e, t, n))
            }
        }
    })(l);
    e.default = d
});
//# sourceMappingURL=MulticartDocumentLink.js.map