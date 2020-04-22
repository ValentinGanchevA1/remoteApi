define(["exports", "react", "eshop/modules/core/components/ui/OraHtmlText", "prop-types"], function(e, n, o, t) {
    "use strict";

    function a(n) {
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
                var r = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, r)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, n = babelHelpers.interopRequireDefault(n), o = babelHelpers.interopRequireDefault(o), t = babelHelpers.interopRequireDefault(t);
    var r = function(e) {
        babelHelpers.inherits(r, e);
        var t = a(r);

        function r() {
            return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
        }
        return babelHelpers.createClass(r, [{
            key: "getInfoDescription",
            value: function() {
                var e = "Kwoty abonamentów uwzględniają rabaty za wyrażenie zgody na e-fakturę i terminowe płatności – 5 zł/mies. oraz zgód marketingowych – 5 zł/mies.",
                    t = "Kwoty abonamentów uwzględniają rabaty za wyrażenie zgody na e-fakturę i terminowe płatności – 5 zł/mies. oraz zgód marketingowych – 5 zł/mies., oraz rabat za łączenie usług w Orange – 20 zł/mies.",
                    r = {
                        "discountInfo.VOICE.default": e,
                        "discountInfo.DATA.default": e,
                        "discountInfo.VOICE.SOFT_BUNDLE_DUET": t,
                        "discountInfo.DATA.SOFT_BUNDLE_DUET": t,
                        "discountInfo.VOICE.SOFT_BUNDLE_COV": t,
                        "discountInfo.DATA.SOFT_BUNDLE_COV": t
                    },
                    n = "discountInfo." + this.props.offerType + "." + (this.props.contractRole ? this.props.contractRole : "default");
                return this.props.descriptions[n] || r[n]
            }
        }, {
            key: "render",
            value: function() {
                return n.default.createElement("div", {
                    className: this.props.className
                }, n.default.createElement("div", {
                    className: "o-icon-text__icon"
                }, n.default.createElement("div", {
                    className: "g-icon g-icon--info g-icon--before g-bluef-c g-icon--xs-s"
                })), n.default.createElement("div", {
                    className: "o-icon-text__text u-strong u-vertical-middle"
                }, n.default.createElement(o.default, null, this.getInfoDescription())))
            }
        }]), r
    }(n.default.Component);
    r.propTypes = {
        descriptions: t.default.objectOf(t.default.string).isRequired,
        contractRole: t.default.string,
        offerType: t.default.string.isRequired
    }, r.defaultProps = {
        className: "u-padding-s"
    };
    var i = r;
    e.default = i
});
//# sourceMappingURL=DiscountInfo.js.map