define(["exports", "react", "prop-types", "react-redux", "../selectors/offers", "../selectors/filters", "../../core/components/OraOffersDocumentsContainer"], function(e, s, t, r, n, u, o) {
    "use strict";

    function c(s) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(s);
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
    }), e.default = void 0, s = babelHelpers.interopRequireWildcard(s), t = babelHelpers.interopRequireDefault(t), o = babelHelpers.interopRequireDefault(o);
    var l = function(e) {
        babelHelpers.inherits(r, e);
        var t = c(r);

        function r() {
            return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
        }
        return babelHelpers.createClass(r, [{
            key: "getDocumentFilters",
            value: function() {
                return {
                    agreementsList: ["TEMPLATE", "AGR_TEMPLATE"],
                    pricesList: ["PRICE_LIST", "DEVICE_PRICE_LIST"],
                    regulationsList: ["REG", "SHOP_REG"],
                    depositList: ["DEP_REQ"]
                }
            }
        }, {
            key: "render",
            value: function() {
                return s.default.createElement(o.default, {
                    documents: this.props.documents,
                    isFut: this.props.isFut,
                    filters: this.getDocumentFilters(),
                    selectedOfferType: this.props.selectedOfferType
                })
            }
        }]), r
    }(s.Component);
    l.propTypes = {
        isFut: t.default.string,
        documents: t.default.arrayOf(t.default.shape({
            documentType: t.default.string
        }))
    };
    var i = (0, r.connect)(function(e) {
        return {
            selectedOfferType: (0, u.getSelectedOfferType)(e),
            documents: (0, n.getOffersDocuments)(e)
        }
    }, function() {
        return {}
    })(l);
    e.default = i
});
//# sourceMappingURL=OraMobileOffersDocumentsContainer.js.map