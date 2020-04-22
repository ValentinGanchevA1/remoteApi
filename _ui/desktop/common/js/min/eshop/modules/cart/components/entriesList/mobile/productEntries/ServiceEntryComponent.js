define(["exports", "react", "prop-types", "react-redux", "../MultiCartItemComponent", "eshop/flux/utils/OraModalService", "../../../CartDetailsModal", "eshop/modules/cart/actions/resources", "eshop/modules/cart/selectors", "eshop/utils/OnlineUtils", "eshop/modules/simfree/components/modals/OraVasPacketPickerComponent", "eshop/modules/cart/actions/cart"], function(e, n, t, r, o, a, i, s, l, p, c, u) {
    "use strict";

    function d(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(t);
            e && (s = s.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, s)
        }
        return r
    }

    function h(s) {
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
    }), e.default = void 0, n = babelHelpers.interopRequireWildcard(n), t = babelHelpers.interopRequireDefault(t), o = babelHelpers.interopRequireDefault(o), a = babelHelpers.interopRequireDefault(a), i = babelHelpers.interopRequireDefault(i), p = babelHelpers.interopRequireDefault(p), c = babelHelpers.interopRequireDefault(c);
    var f = function(e) {
        babelHelpers.inherits(s, e);
        var r = h(s);

        function s(e) {
            var t;
            return babelHelpers.classCallCheck(this, s), (t = r.call(this, e)).name = t.props.entry.bundleNo + "_" + t.props.entry.entryNo, t.submitChangePackagesModal = t.submitChangePackagesModal.bind(babelHelpers.assertThisInitialized(t)), t.changePackages = t.changePackages.bind(babelHelpers.assertThisInitialized(t)), t
        }
        return babelHelpers.createClass(s, [{
            key: "componentWillMount",
            value: function() {
                var t = this,
                    r = this.props.detailsHeader ? this.props.detailsHeader : "Szczegóły",
                    s = JSON.parse('[{"key":"brak", "value":"danych"}]');
                try {
                    s = JSON.parse(this.props.entry.details)
                } catch (e) {}
                a.default.add(function(e) {
                    return n.default.createElement(i.default, {
                        id: "productDetails-" + t.name,
                        header: r,
                        details: s,
                        showNet: t.props.showNet,
                        proposition: t.props.entry
                    })
                })
            }
        }, {
            key: "onDetailsClicked",
            value: function() {
                a.default.open("productDetails-" + this.name)
            }
        }, {
            key: "onRemoveClicked",
            value: function() {}
        }, {
            key: "onChangeClicked",
            value: function() {}
        }, {
            key: "onMsisdnChangeClicked",
            value: function(e) {
                this.props.resourceModalOpen(e)
            }
        }, {
            key: "lowerInstallmentsClicked",
            value: function(e) {
                this.props.lowerInstallmentsModalOpen(e)
            }
        }, {
            key: "shouldNotBeEditable",
            value: function() {
                return !["ASSIGNMENT", "ASSIGNMENT_DEATH", "MNP_APPLICATION", "ASSIGNMENT_B2C_B2B", "ASSIGNMENT_B2C_JDG"].includes(this.props.entry.processType) && this.props.editable
            }
        }, {
            key: "chooseStartPricePropertyName",
            value: function() {
                return p.default.isAssignment(this.props.entry.processType) ? "checkoutPrice" : "firstBillPrice"
            }
        }, {
            key: "changePackages",
            value: function() {
                var e = this.props.changePackagesModalInitData[this.props.entry.bundleNo];
                e && c.default.openPopup(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? d(Object(r), !0).forEach(function(e) {
                            babelHelpers.defineProperty(t, e, r[e])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach(function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                        })
                    }
                    return t
                }({}, e, {
                    submit: this.submitChangePackagesModal
                }))
            }
        }, {
            key: "submitChangePackagesModal",
            value: function(e, t, r) {
                var s = r.concat(t);
                (s[0] || e[0]) && this.props.updateCartVases(this.props.entry.bundleCode, this.props.entry.productCode, this.props.entry.bundleNo, s, e)
            }
        }, {
            key: "render",
            value: function() {
                return n.default.createElement(o.default, {
                    key: "SIM_" + this.props.idx,
                    onRemoveClicked: this.props.editable && this.props.onRemoveClicked,
                    icon: this.props.mainIcon,
                    entry: this.props.entry,
                    type: "SIM",
                    showStartPriceAsActivation: this.props.editable && !p.default.isMnpApplication(this.props.entry.processType),
                    startPricePropertyName: this.chooseStartPricePropertyName(),
                    onDetailsClicked: this.onDetailsClicked.bind(this),
                    onMsisdnChangeClicked: this.onMsisdnChangeClicked.bind(this, this.props.entry.bundleNo),
                    lowerInstallmentsClicked: this.lowerInstallmentsClicked.bind(this, this.props.entry.bundleNo),
                    tooltipValues: this.props.tooltipValues,
                    bottomBorder: this.props.bottomBorder,
                    editable: this.shouldNotBeEditable(),
                    processName: this.props.processName,
                    changePackages: this.changePackages
                })
            }
        }]), s
    }(n.Component);
    f.propTypes = {
        idx: t.default.number.isRequired,
        mainIcon: t.default.string.isRequired,
        entry: t.default.object.isRequired
    }, f.defaultProps = {
        bottomBorder: !1,
        editable: !0
    };
    var b = (0, r.connect)(function(e) {
        return {
            showNet: (0, l.getPriceIsNet)(e),
            changePackagesModalInitData: (0, l.getChangePackagesModalInitData)(e)
        }
    }, function(o) {
        return {
            resourceModalOpen: function(e) {
                return o((0, s.resourceModalOpen)(e))
            },
            lowerInstallmentsModalOpen: function(e) {
                return o((0, s.lowerInstallmentsModalOpen)(e))
            },
            updateCartVases: function(e, t, r, s, n) {
                return o((0, u.updateCartVases)(e, t, r, s, n))
            }
        }
    })(f);
    e.default = b
});
//# sourceMappingURL=ServiceEntryComponent.js.map