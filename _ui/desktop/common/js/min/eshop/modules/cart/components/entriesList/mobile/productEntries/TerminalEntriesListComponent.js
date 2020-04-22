define(["exports", "react", "prop-types", "../MultiCartItemComponent", "eshop/modules/cart/actions/cart", "react-redux", "../../../../selectors", "eshop/modules/configurator/selectors/filters", "eshop/modules/cart/actions/resources"], function(e, s, t, o, i, r, n, l, p) {
    "use strict";

    function a(s) {
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
    var u = function(e) {
        babelHelpers.inherits(r, e);
        var t = a(r);

        function r(e) {
            return babelHelpers.classCallCheck(this, r), t.call(this, e)
        }
        return babelHelpers.createClass(r, [{
            key: "render",
            value: function() {
                var r = this;
                return s.default.createElement("div", null, this.props.entries && this.props.entries.map(function(e, t) {
                    return s.default.createElement(d, {
                        removeModalTexts: r.props.removeModalTexts,
                        key: "TERMINAL" + t + "_" + r.props.idx,
                        entry: e,
                        cartBundle: r.props.cartBundle,
                        bundle: r.props.bundle,
                        propositionId: r.props.propositionId,
                        sapReservation: r.props.sapReservation,
                        sapErrorMessage: r.props.sapErrorMessage,
                        descriptions: r.props.descriptions,
                        lowerInstallmentsActive: r.props.lowerInstallmentsActive,
                        editable: r.props.editable
                    })
                }))
            }
        }]), r
    }(s.Component);
    u.propTypes = {
        idx: t.default.number.isRequired,
        entries: t.default.arrayOf(t.default.object),
        detailsHeader: t.default.string,
        editable: t.default.bool
    }, u.defaultProps = {
        editable: !0
    };
    var c = function(e) {
            babelHelpers.inherits(r, e);
            var t = a(r);

            function r(e) {
                return babelHelpers.classCallCheck(this, r), t.call(this, e)
            }
            return babelHelpers.createClass(r, [{
                key: "onRemoveClicked",
                value: function() {
                    if ("" !== this.props.sapReservation) this.props.showErrorMessage(this.props.sapErrorMessage);
                    else {
                        var e = [this.props.entry.productCode];
                        this.props.updateCartDevices(this.props.propositionId, this.props.bundle, this.props.cartBundle, e, [])
                    }
                }
            }, {
                key: "onChangeClicked",
                value: function() {
                    if (this.props.setFilters(this.props.cartBundle), this.props.baseProductId) {
                        var e = this.props.isB2B ? "/male-firmy/sklep" : "/sklep";
                        window.location = e + "?serviceplan=" + this.props.baseProductId + "&propositionId=" + this.props.propositionId
                    }
                }
            }, {
                key: "lowerInstallmentsClicked",
                value: function(e) {
                    this.props.lowerInstallmentsModalOpen(e)
                }
            }, {
                key: "render",
                value: function() {
                    return s.default.createElement(o.default, {
                        removeModalTexts: this.props.editable && this.props.removeModalTexts,
                        detailsHeader: this.props.editable && this.props.detailsHeader,
                        entry: this.props.entry,
                        startPricePropertyName: "checkoutPrice",
                        type: "TERMINAL",
                        topBorder: !0,
                        onRemoveClicked: this.props.editable && this.onRemoveClicked.bind(this),
                        onChangeClicked: this.props.editable && this.onChangeClicked.bind(this),
                        descriptions: this.props.descriptions,
                        lowerInstallmentsClicked: this.props.lowerInstallmentsActive ? this.lowerInstallmentsClicked.bind(this, this.props.entry.bundleNo) : void 0
                    })
                }
            }]), r
        }(s.Component),
        d = (0, r.connect)(function() {
            var r = (0, n.getBaseProductIdForBundle)();
            return function(e, t) {
                return {
                    baseProductId: r(e, t.cartBundle),
                    isB2B: "B2B" === (0, l.getMarketContext)(e)
                }
            }
        }, function(n) {
            return {
                updateCartDevices: function(e, t, r, s, o) {
                    return n((0, i.updateCartDevices)(e, t, r, s, o))
                },
                showErrorMessage: function(e) {
                    return n((0, i.showErrorMessage)(e))
                },
                lowerInstallmentsModalOpen: function(e) {
                    return n((0, p.lowerInstallmentsModalOpen)(e))
                },
                setFilters: function(e) {
                    return n((0, i.setFilters)(e))
                }
            }
        })(c),
        f = u;
    e.default = f
});
//# sourceMappingURL=TerminalEntriesListComponent.js.map