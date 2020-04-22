define(["exports", "react", "react-redux", "../shared/MultiCartExpandingSectionComponent", "../mobile/MultiCartCollapsedItemComponent", "../../../actions/cart", "eshop/flux/utils/OraModalService", "./BoxFragments", "../mobile/MultiCartRemovePopup", "../mobile/MultiCartAssignmentInstalmentComponent", "./TransferMainProductComponent"], function(e, o, t, l, i, r, a, u, s, p, c) {
    "use strict";

    function f(r) {
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
    }), e.default = void 0, o = babelHelpers.interopRequireWildcard(o), l = babelHelpers.interopRequireDefault(l), i = babelHelpers.interopRequireDefault(i), a = babelHelpers.interopRequireDefault(a), s = babelHelpers.interopRequireDefault(s), p = babelHelpers.interopRequireDefault(p), c = babelHelpers.interopRequireDefault(c);
    var n = function(e) {
            babelHelpers.inherits(r, e);
            var n = f(r);

            function r(e) {
                var t;
                return babelHelpers.classCallCheck(this, r), (t = n.call(this, e)).state = {
                    selectedSection: null
                }, t
            }
            return babelHelpers.createClass(r, [{
                key: "openRemovePopup",
                value: function() {
                    var e = this.props.entry;
                    a.default.open("remove-from-cart-modal-" + e.bundleNo, {
                        bundleNo: e.bundleNo,
                        offerIndex: e.bundleNo
                    })
                }
            }, {
                key: "registerRemovePopup",
                value: function(e) {
                    var t = this;
                    a.default.add(function() {
                        return o.default.createElement(s.default, {
                            id: "remove-from-cart-modal-" + e.bundleNo,
                            bundleNo: e.bundleNo,
                            title: t.props.sectionConf.deleteEntryPopupTitle,
                            content: t.props.sectionConf.deleteEntryPopupContent,
                            decline: t.props.sectionConf.declineDeleteEntryPopupButtonLabel,
                            confirm: t.props.sectionConf.confirmDeleteEntryPopupButtonLabel,
                            onClickRemove: t.props.removeFromCart.bind(t, null, e.bundleNo),
                            textRepresentation: t.props.sectionConf.sectionTitle
                        })
                    })
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    this.registerRemovePopup(this.props.entry)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this,
                        t = this.props.sectionConf.sectionTitle,
                        n = "transfer_section" + this.props.idx,
                        r = "ost-" + this.props.entry.bundleNo;
                    return o.default.createElement("div", null, o.default.createElement(l.default, {
                        title: t,
                        key: n,
                        entry: this.props.entry,
                        trigger: r,
                        conf: this.props.sectionConf,
                        onRemoveClicked: function() {
                            return e.openRemovePopup(e.props.entry)
                        }
                    }, o.default.createElement("div", null, o.default.createElement(u.FloatingBox, {
                        key: n
                    }, o.default.createElement(d, {
                        key: n,
                        entry: this.props.entry,
                        sectionTitle: ""
                    }, o.default.createElement(c.default, babelHelpers.extends({
                        key: n
                    }, this.props, {
                        showNetPrices: this.props.showNetPrices
                    })))), o.default.createElement(u.FloatingBox, {
                        key: "instalment" + n
                    }, o.default.createElement(p.default, this.props))), o.default.createElement(i.default, {
                        key: "collapsed" + n
                    })))
                }
            }]), r
        }(o.Component),
        d = function(e) {
            return o.default.createElement("div", {
                className: "u-box-shadow"
            }, e.sectionTitle && o.default.createElement("h3", {
                className: "h3 u-small-hide u-padding-all-l u-no-spacing"
            }, e.sectionTitle), e.children)
        },
        m = (0, t.connect)(null, function(n) {
            return {
                removeFromCart: function(e, t) {
                    return n((0, r.removeFromCart)(e, t))
                }
            }
        })(n);
    e.default = m
});
//# sourceMappingURL=TransferComponent.js.map