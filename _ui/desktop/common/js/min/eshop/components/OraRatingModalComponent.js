define(["exports", "react-redux", "react", "eshop/components/OraCommonComponents", "eshop/modules/core/components/ui/Modal", "../modules/simfree/selectors", "../modules/simfree/actions/app"], function(e, t, r, o, n, s, i) {
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
                var s = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, s)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, r = babelHelpers.interopRequireWildcard(r), n = babelHelpers.interopRequireDefault(n);
    var p = function(e) {
            babelHelpers.inherits(s, e);
            var t = a(s);

            function s(e) {
                return babelHelpers.classCallCheck(this, s), t.call(this, e)
            }
            return babelHelpers.createClass(s, [{
                key: "popupMessage",
                value: function() {
                    return this.props.rating || this.props.message || this.props.login ? !this.props.rating && this.props.message && this.props.login ? this.props.descriptions.ratingMessage : !this.props.login && this.props.rating && this.props.message ? this.props.descriptions.emptyLoginMessage : !this.props.message && this.props.rating && this.props.login ? this.props.descriptions.emptyOpinionMessage : this.props.rating || this.props.login || !this.props.message ? this.props.rating || this.props.message || !this.props.login ? this.props.login || this.props.message || !this.props.rating ? void 0 : this.props.descriptions.emptyLoginAndOpinionMessage : this.props.descriptions.emptyRatingAndOpinionMessage : this.props.descriptions.emptyRatingAndLoginMessage : this.props.descriptions.allFieldsEmptyMessage
                }
            }, {
                key: "render",
                value: function() {
                    var e = this;
                    return r.default.createElement(n.default, {
                        id: "rating-message-error",
                        showClose: !0,
                        open: this.props.showRatingErrorModal,
                        onClose: function() {
                            return e.props.setShowRatingErrorModal(!1)
                        },
                        size: "narrow",
                        clickClose: !1
                    }, r.default.createElement("div", {
                        className: "u-padding-all-m u-small-padding-s"
                    }, r.default.createElement("div", {
                        className: "l-row u-letter-spacing-xs"
                    }, r.default.createElement("div", {
                        className: "l-col l-col-12"
                    }, r.default.createElement("h4", null, this.popupMessage())), r.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-4 l-col-4 medium-offset-by-8 large-offset-by-8 u-text-right"
                    }, r.default.createElement(o.OraButton, {
                        onClick: function() {
                            return e.props.setShowRatingErrorModal(!1)
                        },
                        className: "u-w-100 "
                    }, "OK")))))
                }
            }]), s
        }(r.Component),
        l = (0, t.connect)(function(e) {
            return {
                rating: (0, s.getRating)(e),
                message: (0, s.getMessage)(e),
                login: (0, s.getLogin)(e),
                showRatingErrorModal: (0, s.getShowRatingErrorModal)(e)
            }
        }, function(t) {
            return {
                setRating: function(e) {
                    return t((0, i.setRating)(e))
                },
                setLogin: function(e) {
                    return t((0, i.setLogin)(e))
                },
                setMessage: function(e) {
                    return t((0, i.setMessage)(e))
                },
                setShowRatingErrorModal: function(e) {
                    return t((0, i.setShowRatingErrorModal)(e))
                }
            }
        })(p);
    e.default = l
});
//# sourceMappingURL=OraRatingModalComponent.js.map