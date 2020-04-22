define(["exports", "react", "prop-types", "react-redux", "eshop/components/OraCommonComponents", "eshop/utils/OnlineUtils", "eshop/modules/core/components/ui/Modal", "eshop/modules/cart/selectors", "eshop/modules/cart/actions/resources", "./MsisdnPickerComponent", "./SimCardPickerComponent", "../../core/constants/TransactionProcessTypeEnum"], function(e, r, s, t, n, i, o, a, l, p, c, u) {
    "use strict";

    function d(r) {
        return function() {
            var e, s = babelHelpers.getPrototypeOf(r);
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
                var t = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(s, arguments, t)
            } else e = s.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, r = babelHelpers.interopRequireWildcard(r), i = babelHelpers.interopRequireDefault(i), o = babelHelpers.interopRequireDefault(o), p = babelHelpers.interopRequireDefault(p), c = babelHelpers.interopRequireDefault(c), u = babelHelpers.interopRequireDefault(u);
    var m = function(e) {
        babelHelpers.inherits(t, e);
        var s = d(t);

        function t(e) {
            return babelHelpers.classCallCheck(this, t), s.call(this, e)
        }
        return babelHelpers.createClass(t, [{
            key: "save",
            value: function() {
                this.props.updateResources()
            }
        }, {
            key: "getMsisdnDescription",
            value: function() {
                return this.props.entry.processType === u.default.RETENTION ? "Przedłużenie dla numeru: " : "Nowy numer: "
            }
        }, {
            key: "render",
            value: function() {
                var e = r.default.createElement(c.default, {
                        fetch: this.props.open,
                        simCard: this.props.simCard,
                        simCards: this.props.simCards,
                        fetchSimCards: this.props.fetchSimCards,
                        changeSimCard: this.props.changeSimCard,
                        channel: this.props.channel
                    }),
                    s = this.props.entry.processType === u.default.ACTIVATION && r.default.createElement(p.default, {
                        msisdn: this.props.msisdn,
                        msisdns: this.props.msisdns,
                        fetchMsisdns: this.props.fetchMsisdns,
                        changeMsisdn: this.props.changeMsisdn,
                        entry: this.props.entry,
                        fetch: this.props.open,
                        channel: this.props.channel
                    });
                return r.default.createElement(o.default, {
                    id: "MsisdnSimCardPickerModal",
                    key: "MsisdnSimCardPickerModal",
                    open: this.props.open,
                    onClose: this.props.onClose.bind(this, this.props.bundleNo),
                    size: "narrow"
                }, r.default.createElement("h2", {
                    className: "h3 u-margin-l opl-modal-title-space"
                }, this.props.entry.planName), this.props.entry.loyaltyLengthDescription && r.default.createElement("p", null, this.props.entry.loyaltyLengthDescription), r.default.createElement("p", null, this.props.entry.simCard && ["Karta SIM (" + this.props.entry.simCard.description + ")"], this.props.entry.simCard && this.props.entry.msisdn && [" / "], this.props.entry.msisdn && [this.getMsisdnDescription.apply(this), r.default.createElement("b", null, i.default.transformMsisdn(this.props.entry.msisdn))]), this.props.resourcesMsg && r.default.createElement(n.OraMessage, {
                    type: "error",
                    className: "u-spacing-top-l"
                }, this.props.resourcesMsg.message), r.default.createElement("div", {
                    className: "o-separator u-margin-l u-margin-top-l"
                }), e, s, r.default.createElement("div", {
                    className: "u-margin-l l-col l-col-12" + (this.props.entry.processType != u.default.MNP ? " o-separator" : "")
                }), r.default.createElement("div", {
                    className: "l-row u-no-margin"
                }, r.default.createElement("div", {
                    className: "l-col--opposite l-col-3 l-col-small-12"
                }, r.default.createElement(n.OraButton, {
                    className: "u-w-100",
                    onClick: this.save.bind(this),
                    "aria-label": "zmień numer"
                }, "Zmień"))))
            }
        }]), t
    }(r.Component);
    m.propTypes = {
        msisdn: s.PropTypes.string,
        onClose: s.PropTypes.func,
        processType: s.PropTypes.string,
        bundleNo: s.PropTypes.number,
        channel: s.PropTypes.string
    };
    var h = (0, t.connect)(function(e) {
        return {
            msisdns: (0, a.getMsisdns)(e),
            msisdn: (0, a.getMsisdn)(e),
            simCards: (0, a.getSimCards)(e),
            simCard: (0, a.getSimCard)(e),
            resourcesMsg: (0, a.getResourcesMsg)(e),
            open: (0, a.isResourceModalVisible)(e),
            bundleNo: (0, a.getResourceModalBundleNo)(e),
            entry: (0, a.getEntryForResourceModal)(e),
            changingMsisdn: (0, a.changingMsisdn)(e),
            changingSimCard: (0, a.changingSimCard)(e)
        }
    }, function(s) {
        return {
            fetchMsisdns: function(e) {
                return s((0, l.fetchMsisdns)(e))
            },
            fetchSimCards: function(e) {
                return s((0, l.fetchSimCards)(e))
            },
            changeMsisdn: function(e) {
                return s((0, l.changeMsisdn)(e))
            },
            changeSimCard: function(e) {
                return s((0, l.changeSimCard)(e))
            },
            onClose: function(e) {
                return s((0, l.resourceModalClose)(e))
            },
            updateResources: function() {
                return s((0, l.updateResources)())
            }
        }
    })(m);
    e.default = h
});
//# sourceMappingURL=MsisdnSimCardPickerModal.js.map