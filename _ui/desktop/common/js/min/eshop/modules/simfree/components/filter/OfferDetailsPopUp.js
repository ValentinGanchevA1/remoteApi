define(["exports", "react", "react-redux", "eshop/modules/core/components/ui/OfferDetails", "eshop/modules/core/components/ui/Modal", "eshop/modules/cart/selectors", "eshop/modules/configurator/selectors/offers"], function(e, s, t, n, l, o, r) {
    "use strict";

    function i(r) {
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
                var o = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, o)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, s = babelHelpers.interopRequireDefault(s), l = babelHelpers.interopRequireDefault(l);
    var a = 0,
        u = function(e) {
            babelHelpers.inherits(r, e);
            var o = i(r);

            function r(e) {
                var t;
                return babelHelpers.classCallCheck(this, r), (t = o.call(this, e)).state = {
                    showModal: !1
                }, t.popupId = t.props.id || "details-popup_trigger" + a++, t
            }
            return babelHelpers.createClass(r, [{
                key: "getModalProps",
                value: function() {
                    return {
                        size: "medium",
                        showClose: !0,
                        escapeClose: !0,
                        clickClose: !0
                    }
                }
            }, {
                key: "setShowModal",
                value: function(t) {
                    this.setState(function(e) {
                        return {
                            showModal: t
                        }
                    })
                }
            }, {
                key: "onClose",
                value: function() {
                    this.setShowModal(!1)
                }
            }, {
                key: "openDetailsModal",
                value: function(e) {
                    e.preventDefault(), this.setShowModal(!0)
                }
            }, {
                key: "preventOfferSwitch",
                value: function(e) {
                    e.stopPropagation()
                }
            }, {
                key: "getPriceSource",
                value: function() {
                    return this.props.entry || this.props.proposition
                }
            }, {
                key: "render",
                value: function() {
                    var t = this;
                    return s.default.createElement("div", {
                        className: "u-inline-block",
                        onClick: function(e) {
                            return t.preventOfferSwitch(e)
                        }
                    }, s.default.createElement("a", {
                        key: "details-popup_trigger" + this.popupId,
                        id: this.popupId + "trigger",
                        className: "u-inline-block u-spacing-right",
                        href: "#",
                        onClick: function(e) {
                            return t.openDetailsModal(e)
                        }
                    }, this.props.labelText), s.default.createElement("span", {
                        className: "u-acc-hide"
                    }, "Szczegóły oferty"), s.default.createElement(l.default, babelHelpers.extends({
                        key: "modal_" + this.popupId
                    }, this.getModalProps(), {
                        id: "modal_" + this.popupId,
                        open: this.state.showModal,
                        onClose: this.onClose.bind(this)
                    }), s.default.createElement(n.DetailsLargeSimfreeRaw, babelHelpers.extends({
                        key: this.props.proposition.rateplanId + this.props.clientContext
                    }, this.props, {
                        proposition: this.getPriceSource()
                    }))))
                }
            }]), r
        }(s.default.PureComponent);
    u.defaultProps = {
        header: "Szczególy oferty",
        propositionName: "",
        details: []
    };
    var c = (0, t.connect)(function(e) {
        return {
            showNet: (0, o.getPriceIsNet)(e),
            contractRole: (0, r.getContractRole)(e)[0]
        }
    }, function() {
        return {}
    })(u);
    e.default = c
});
//# sourceMappingURL=OfferDetailsPopUp.js.map