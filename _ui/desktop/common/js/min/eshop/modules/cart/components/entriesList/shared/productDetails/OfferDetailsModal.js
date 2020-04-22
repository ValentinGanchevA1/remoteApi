define(["exports", "react", "prop-types", "eshop/components/OraCommonComponents", "eshop/modules/cart/components/entriesList/fix/buymore/FixProductDetails", "eshop/modules/core/components/ui/OfferDetails", "../../../../../magnum2/constants/ProcessTypeEnum"], function(e, a, t, l, r, s, n) {
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
                var r = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, r)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, a = babelHelpers.interopRequireWildcard(a), n = babelHelpers.interopRequireDefault(n);
    var i = function(e) {
        babelHelpers.inherits(r, e);
        var t = o(r);

        function r() {
            return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
        }
        return babelHelpers.createClass(r, [{
            key: "getPriceSource",
            value: function() {
                return this.props.entry || this.props.proposition
            }
        }, {
            key: "render",
            value: function() {
                return function(e) {
                    var t = e.transactions;
                    if (t) {
                        return 1 === t.filter(function(e) {
                            return e.process !== n.default.TERMINATION && e.process !== n.default.TERMINATION_DATA
                        }).length
                    }
                    return
                }(this.props) ? a.default.createElement(l.OraModal, {
                    id: this.props.id,
                    showClose: !0,
                    narrow: !1
                }, a.default.createElement("div", null, a.default.createElement(s.DetailsLargeSimfreeRaw, babelHelpers.extends({
                    key: this.props.voice.code + this.props.id
                }, (e = this.props, (t = e).header = e.header, t.data = null, t.propositionName = e.voice.name, t.basePrice = e.priceVariant.DEFAULT.monthlyPayments[0].finalPrice, t.details = JSON.parse(e.voice.descriptionForProductLongTable), t.proposition = {
                    rateplanId: e.voice.code,
                    internetLegal: e.internetLegal
                }, t), {
                    proposition: this.getPriceSource()
                })))) : a.default.createElement(l.OraModal, {
                    id: this.props.id,
                    showClose: !0,
                    narrow: !1
                }, a.default.createElement("div", null, a.default.createElement("h1", {
                    className: "u-acc-hide"
                }, "Szczegóły oferty"), a.default.createElement("h2", {
                    className: "u-spacing-l-xl opl-modal-title-space",
                    style: {
                        paddingRight: 32
                    }
                }, this.props.header), this.props.data && a.default.createElement(u, {
                    product: this.props.data
                }), this.props.broadband && a.default.createElement(u, {
                    product: this.props.broadband
                }), this.props.tv && a.default.createElement(d, {
                    product: this.props.tv,
                    tvPackages: this.props.tvPackages
                }), this.props.voip && a.default.createElement(u, {
                    product: this.props.voip
                }), this.props.voice && a.default.createElement(u, {
                    product: this.props.voice
                })));
                var e, t
            }
        }]), r
    }(a.Component);

    function c(e) {
        var t = e.devices || [];
        return a.default.createElement("div", null, a.default.createElement("h3", {
            className: "u-spacing-l"
        }, e.title), a.default.createElement("div", {
            className: "u-spacing-l-xl",
            dangerouslySetInnerHTML: {
                __html: e.offerDetails
            }
        }), t.map(function(e) {
            return a.default.createElement(p, {
                device: e,
                key: e.id
            })
        }), a.default.createElement("div", {
            className: "o-separator u-spacing-l"
        }), e.children)
    }
    var p = function(e) {
            return a.default.createElement("div", {
                className: "u-spacing-l"
            }, a.default.createElement("p", {
                className: "u-spacing"
            }, a.default.createElement("span", {
                className: "u-font-bold u-inline-block u-spacing-right-m"
            }, function(e) {
                switch (e) {
                    case "LB":
                        return "Modem ";
                    case "STB":
                        return "Dekoder ";
                    default:
                        return ""
                }
            }(e.device.deviceType)), e.device.title), a.default.createElement("div", {
                className: "l-row"
            }, a.default.createElement("div", {
                className: "l-col l-col-small-12 l-col-medium-6 l-col-6 "
            }, a.default.createElement("img", {
                src: e.device.imgUrl,
                alt: e.device.title,
                className: e.device.orginalImageSize ? "" : "u-w-100"
            })), a.default.createElement("div", {
                className: "l-col l-col-small-12 l-col-medium-6 l-col-6 ",
                dangerouslySetInnerHTML: {
                    __html: e.device.longDescription
                }
            })))
        },
        u = function(e) {
            return a.default.createElement(c, {
                title: e.product.name,
                offerDetails: e.product.details,
                devices: e.product.devices
            })
        },
        d = function(e) {
            return a.default.createElement(c, {
                title: e.product.name,
                offerDetails: e.product.details,
                devices: e.product.devices
            }, a.default.createElement(f, {
                offerDetails: e.product.details,
                tvPackages: e.tvPackages,
                productCode: e.product.code
            }))
        },
        f = function(t) {
            var e = t.tvPackages.find(function(e) {
                return t.productCode === e.id
            });
            return e ? a.default.createElement("div", null, a.default.createElement("div", {
                className: "u-spacing-l"
            }, a.default.createElement(r.TvDetails, {
                vas: e
            })), a.default.createElement("div", {
                className: "o-separator u-spacing-l"
            })) : null
        };
    i.defaultProps = {
        id: "",
        details: "",
        header: "Szczegóły oferty"
    }, i.propTypes = {
        id: t.PropTypes.string,
        icon: t.PropTypes.string,
        details: t.PropTypes.string,
        productName: t.PropTypes.string,
        header: t.PropTypes.string,
        prices: t.PropTypes.arrayOf(t.PropTypes.object)
    };
    var m = i;
    e.default = m
});
//# sourceMappingURL=OfferDetailsModal.js.map