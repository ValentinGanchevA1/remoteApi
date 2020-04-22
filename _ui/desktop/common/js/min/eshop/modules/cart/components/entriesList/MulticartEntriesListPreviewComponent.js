define(["exports", "react", "react-redux", "eshop/modules/checkout/actions/app", "../../selectors", "./mobile/CartEntryPreviewComponent", "./BundleTypeEnum", "eshop/modules/configurator/selectors/filters", "eshop/modules/cart/components/entriesList/mobile/SimCartIndexHeader", "eshop/components/InfoComponent", "eshop/modules/auth/selectors/authorization", "../../../core/constants/OfferTypeEnum"], function(e, s, t, r, o, i, u, n, c, d, a, p) {
    "use strict";

    function l(o) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(o);
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
    }), e.default = void 0, s = babelHelpers.interopRequireWildcard(s), i = babelHelpers.interopRequireDefault(i), u = babelHelpers.interopRequireDefault(u), c = babelHelpers.interopRequireDefault(c), d = babelHelpers.interopRequireDefault(d), p = babelHelpers.interopRequireDefault(p);
    var f = function(e) {
            babelHelpers.inherits(r, e);
            var t = l(r);

            function r() {
                return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
            }
            return babelHelpers.createClass(r, [{
                key: "componentDidUpdate",
                value: function(e) {
                    if (this.props.entries && this.props.entries.length && e.entries && this.props.entries.length !== e.entries.length) {
                        var t = this;
                        setTimeout(function() {
                            t.scrollToArchon()
                        }, 500)
                    }
                }
            }, {
                key: "scrollToArchon",
                value: function() {
                    if (document.getElementById("afterAddToCartScrollAnchor")) {
                        var e = 0;
                        $(".opl-header__main").length && (e = $(".opl-header__main").outerHeight()), window.scrollTo(0, parseInt($("#afterAddToCartScrollAnchor").offset().top - e))
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var a = this,
                        l = this.props.entries && this.props.entries.filter(function(e) {
                            return e.bundleType === u.default.VOICE || e.bundleType === u.default.DATA
                        });
                    return s.default.createElement("div", {
                        className: "l-full-row g-gray1-bg"
                    }, !!l && l.map(function(e, t) {
                        var r = e.bundleType,
                            o = a.props.entryTitle[r.toString()],
                            n = {
                                descriptions: a.props.descriptions,
                                sectionConf: o,
                                entry: e,
                                idx: t,
                                channel: a.props.channels.sales,
                                sapReservation: a.props.reservationNumberSapPOS,
                                sapErrorMessage: a.props.descriptions.sapReservationError,
                                isB2B: a.props.isB2B
                            };
                        switch (r) {
                            case u.default.VOICE:
                                return s.default.createElement("div", {
                                    key: t + "_" + u.default.VOICE,
                                    id: t + 1 === l.length && "afterAddToCartScrollAnchor"
                                }, s.default.createElement(i.default, n));
                            case u.default.DATA:
                                return s.default.createElement("div", {
                                    key: t + "_" + u.default.DATA,
                                    id: t + 1 === l.length && "afterAddToCartScrollAnchor"
                                }, s.default.createElement(i.default, n));
                            default:
                                return null
                        }
                    }), s.default.createElement("div", {
                        className: "l-page-row "
                    }, !!l && 0 < l.length && s.default.createElement("div", {
                        className: ""
                    }, s.default.createElement(d.default, {
                        color: "grey",
                        bgColor: "grey"
                    }, "Karta została dodana do koszyka, aby modyfikować zamówienie", s.default.createElement("a", {
                        href: "#",
                        className: "g-black1-c",
                        onClick: this.props.gotoCartSummary
                    }, " przejdź do koszyka"))), s.default.createElement("div", {
                        id: (!l || 0 === l.length) && "afterAddToCartScrollAnchor"
                    }, 0 < this.props.propositionListCount && !this.props.isPropositionListCountSetMode && this.props.selectedOfferType !== p.default.DATA && s.default.createElement("div", {
                        className: "u-border-top u-no-margin u-padding-s u-padding-top-m"
                    }, s.default.createElement("div", {
                        className: "o-icon-list u-padding-m"
                    }, s.default.createElement("div", {
                        className: "o-icon-list__item"
                    }, s.default.createElement("div", {
                        className: "o-icon-list__icon u-large-hide u-medium-hide"
                    }, s.default.createElement("span", {
                        className: "g-icon g-icon--only g-icon--sim"
                    })), s.default.createElement("div", {
                        className: "o-icon-list__text u-vertical-middle u-small-padding-top-s"
                    }, !(this.props.selectedOfferType === p.default.VOICE_LDF) && s.default.createElement(c.default, {
                        key: "simCountCartBundleIndex",
                        className: " u-small-no-margin",
                        simIndex: l ? l.length : 0
                    }))))))))
                }
            }]), r
        }(s.Component),
        m = (0, t.connect)(function(e) {
            return {
                isPropositionListCountSetMode: (0, n.getPropositionListCountSetMode)(e),
                propositionListCount: (0, n.getPropositionListCount)(e),
                entries: (0, o.getCartEntries)(e),
                selectedNumberVoip: (0, o.getSelectedVoipNumber)(e),
                selectedOfferType: (0, n.getSelectedOfferType)(e),
                stayLoveRetentionMSISDN: (0, a.getStayLoveRetentionMSISDN)(e),
                isB2B: (0, n.isB2B)(e)
            }
        }, function(e) {
            return {
                gotoCartSummary: function() {
                    return e((0, r.gotoCartSummary)())
                }
            }
        })(f);
    e.default = m
});
//# sourceMappingURL=MulticartEntriesListPreviewComponent.js.map