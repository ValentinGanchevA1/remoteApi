define(["exports", "react", "prop-types", "react-redux", "lodash", "../../configurator/components/OraMobileOffersDocumentsSection", "../../magnum2/components/documents/OraDocumentsSection", "../../simfree/actions/app", "../../magnum2/actions/data", "../../simfree/constants/OfferTypeEnum"], function(e, o, t, n, i, u, c, r, s, a) {
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
                var n = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, n)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, o = babelHelpers.interopRequireWildcard(o), t = babelHelpers.interopRequireDefault(t), i = babelHelpers.interopRequireDefault(i), u = babelHelpers.interopRequireDefault(u), a = babelHelpers.interopRequireDefault(a);
    var f = function(e) {
        babelHelpers.inherits(r, e);
        var n = p(r);

        function r(e) {
            var t;
            return babelHelpers.classCallCheck(this, r), "false" === (t = n.call(this, e)).props.isFut && t.props.getStaticDocuments(), t
        }
        return babelHelpers.createClass(r, [{
            key: "componentDidMount",
            value: function() {
                "false" === this.props.isFut && this.props.getStaticDocuments()
            }
        }, {
            key: "render",
            value: function() {
                var e, t, n, r, s = this;
                return this.props.selectedOfferType === a.default.CONVERGENT ? o.default.createElement(c.OraOffersDocumentsExpander, {
                    descriptions: {
                        sectionName: "Regulaminy, Cenniki, Umowy",
                        noDocuments: "Brak dokumentów",
                        fetchDocumentsMessage: "Trwa wczytywanie dokumentów",
                        downloadDocumentMessage: "Trwa pobieranie dokumentu"
                    },
                    documents: this.props.magnumDocuments.list,
                    documentsMetadata: this.props.magnumDocuments.metadata,
                    durationList: this.props.magnumDurationList,
                    fetchDocuments: this.props.fetchDocuments,
                    isLoading: this.props.magnumDocuments.loading
                }) : (i.default.isEmpty(this.props.documents) || (this.props.documents.sort(function(e, t) {
                    return e.priority === t.priority ? e.documentDescription.localeCompare(t.documentDescription) : e.priority - t.priority
                }), t = this.props.documents.filter(function(e) {
                    return -1 < s.props.filters.agreementsList.indexOf(e.documentType)
                }), n = this.props.documents.filter(function(e) {
                    return -1 < s.props.filters.pricesList.indexOf(e.documentType)
                }), e = this.props.documents.filter(function(e) {
                    return -1 < s.props.filters.regulationsList.indexOf(e.documentType)
                }), r = this.props.documents.filter(function(e) {
                    return -1 < s.props.filters.depositList.indexOf(e.documentType)
                })), i.default.isEmpty(this.props.documents) || i.default.isEmpty(e.concat(t, n, r)) ? o.default.createElement("div", null) : o.default.createElement(u.default, {
                    regulationsList: e,
                    agreementsList: t,
                    pricesList: n,
                    depositList: r,
                    selectedOfferType: this.props.selectedOfferType
                }))
            }
        }]), r
    }(o.Component);
    f.propTypes = {
        isFut: t.default.string,
        documents: t.default.arrayOf(t.default.shape({
            documentType: t.default.string
        })),
        magnumDocuments: t.default.object,
        filters: t.default.object,
        magnumDurationList: t.default.object,
        loaderOptions: t.default.string,
        selectedOfferType: t.default.string,
        getStaticDocuments: t.default.func,
        fetchDocuments: t.default.func
    };
    var l = (0, n.connect)(function(e) {
        return {
            magnumDocuments: e.magnum.documents,
            magnumDurationList: e.magnum.durationList
        }
    }, function(e) {
        return {
            getStaticDocuments: function() {
                return e((0, r.getStaticSimFreeDocuments)())
            },
            fetchDocuments: s.fetchDocuments
        }
    })(f);
    e.default = l
});
//# sourceMappingURL=OraOffersDocumentsContainer.js.map