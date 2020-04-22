define(["exports", "react", "react-redux", "eshop/modules/configurator/actions/offers", "eshop/modules/configurator/selectors/offers", "eshop/modules/core/components/ui/Tooltip", "../../../../simfree/selectors", "eshop/modules/simfree/components/modals/OraVasPacketPickerComponent"], function(e, n, t, r, a, o, s, i) {
    "use strict";

    function l(t, e) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(t);
            e && (s = s.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), a.push.apply(a, s)
        }
        return a
    }

    function c(t) {
        for (var e = 1; e < arguments.length; e++) {
            var a = null != arguments[e] ? arguments[e] : {};
            e % 2 ? l(Object(a), !0).forEach(function(e) {
                babelHelpers.defineProperty(t, e, a[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : l(Object(a)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
            })
        }
        return t
    }

    function u(s) {
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
                var a = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, a)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, n = babelHelpers.interopRequireWildcard(n), o = babelHelpers.interopRequireDefault(o), i = babelHelpers.interopRequireDefault(i);
    var p = function(e) {
        babelHelpers.inherits(s, e);
        var a = u(s);

        function s(e) {
            var t;
            return babelHelpers.classCallCheck(this, s), (t = a.call(this, e)).submitSelectPackagesModal = t.submitSelectPackagesModal.bind(babelHelpers.assertThisInitialized(t)), t.openSelectPackagesModal = t.openSelectPackagesModal.bind(babelHelpers.assertThisInitialized(t)), t
        }
        return babelHelpers.createClass(s, [{
            key: "getSelectPackagesModalInitData",
            value: function() {
                return {
                    plan: {
                        name: this.props.offer.rateplanName,
                        capacity: this.getVasPackagesCapacityForProposition()
                    },
                    packets: this.getVasPackagesForProposition().map(function(e) {
                        return c({
                            id: e.bonuses && 1 === e.bonuses.length && e.bonuses[0].code,
                            title: e.title,
                            weight: e.weight || 1
                        }, e.longDescriptionInJsonFormat)
                    }),
                    selected: this.getSelectedVasPackagesForProposition()
                }
            }
        }, {
            key: "openSelectPackagesModal",
            value: function(e) {
                e.preventDefault(), e.stopPropagation(), i.default.openPopup(c({}, this.getSelectPackagesModalInitData(), {
                    submit: this.submitSelectPackagesModal
                }))
            }
        }, {
            key: "submitSelectPackagesModal",
            value: function(e, t) {
                var a = this;
                e.forEach(function(e) {
                    return a.props.selectVas(a.props.offer.id, e, a.props.offer.rateplanName)
                }), t.forEach(function(e) {
                    return a.props.unselectVas(a.props.offer.id, e, a.props.offer.rateplanName)
                })
            }
        }, {
            key: "componentDidMount",
            value: function() {
                this.selectDefaults()
            }
        }, {
            key: "selectDefaults",
            value: function() {
                var t = this;
                if (0 === this.getSelectedVasPackagesForProposition(this.props.offer.id).length) {
                    var e = this.getVasPackagesForProposition(),
                        a = e && 0 < e.length && e.filter(function(e) {
                            return e.isDefault
                        });
                    a && a.forEach(function(e) {
                        return t.props.selectVas(t.props.offer.id, e.bonuses && 1 === e.bonuses.length && e.bonuses[0].code)
                    })
                }
            }
        }, {
            key: "getVasPackagesForProposition",
            value: function() {
                var e = this.props.offer.addons,
                    t = "GratisPackageBonuses";
                return e && e.categorizedBonuses[t] && e.categorizedBonuses[t].services || []
            }
        }, {
            key: "getVasPackagesCapacityForProposition",
            value: function() {
                var e = this.props.offer.addons,
                    t = "GratisPackageBonuses",
                    a = e && e.categorizedBonuses[t] && e.categorizedBonuses[t].groups || [];
                if (0 == a.length) return 0;
                if (1 == a.length) return a[0].min || 0;
                var s = this.getVasPackagesForProposition().filter(function(e) {
                        return e.bonuses && 1 === e.bonuses.length && e.bonuses[0].code
                    }).map(function(e) {
                        return e.bonuses && 1 === e.bonuses.length && e.bonuses[0].code
                    }).sort().join(),
                    r = a.filter(function(e) {
                        return (e.targetProducts || []).sort().join() == s
                    })[0];
                return r ? r.min : 0
            }
        }, {
            key: "getSelectedVasPackagesForProposition",
            value: function() {
                var t = this.props.offer && this.props.offer.id,
                    e = this.props.selectedVases;
                return e && e.find(function(e) {
                    return e.propositionId === t
                }) ? e.find(function(e) {
                    return e.propositionId === t
                }).vases : []
            }
        }, {
            key: "isSelected",
            value: function(e) {
                return this.props.selectedVases && -1 < this.props.selectedVases.indexOf(e)
            }
        }, {
            key: "getBonusCode",
            value: function(e) {
                return e && e.bonuses && 1 === e.bonuses.length ? e.bonuses[0].code : e.id
            }
        }, {
            key: "getChangePackagesLabel",
            value: function() {
                var e = this.getVasPackagesCapacityForProposition(),
                    t = this.getSelectedVasPackagesForProposition();
                return 1 < e ? 0 == t.length ? this.props.addLabelPlural : this.props.changeLabelPlural : 0 == t.length ? this.props.addLabelSingular : this.props.changeLabelSingular
            }
        }, {
            key: "componentDidUpdate",
            value: function() {}
        }, {
            key: "renderForDeviceLP",
            value: function() {
                var t = this,
                    e = this.getVasPackagesForProposition(),
                    a = "Paczka usług w cenie abonamentu: ";
                e && 1 < e.length && (a = "Paczki usług w cenie abonamentu: ");
                var s = this.getSelectedVasPackagesForProposition(),
                    r = !!e && e.filter(function(e) {
                        return s && (-1 < s.indexOf(t.getBonusCode(e)) || -1 < s.indexOf(e.id))
                    });
                s && 0 != s.length || (a = "");
                var o = this.getVasPackagesCapacityForProposition();
                return n.default.createElement("div", {
                    className: !!a && "u-padding-top-s"
                }, !!o && !this.props.isProductDetailsPage && n.default.createElement("div", null, a), r && r.map(function(e, t) {
                    return [n.default.createElement(d, babelHelpers.extends({
                        key: "vasPackage" + t
                    }, e)), n.default.createElement("span", null, t < r.length - 1 && ", ")]
                }), !!o && !!this.props.changable && n.default.createElement("a", {
                    onClick: this.openSelectPackagesModal,
                    className: "o-modal__trigger u-block u-padding-s u-padding-top-s"
                }, this.getChangePackagesLabel()))
            }
        }, {
            key: "render",
            value: function() {
                var a = this;
                if (this.props.isDeviceLP) return this.renderForDeviceLP();
                var e = this.getVasPackagesForProposition(),
                    t = this.getVasPackagesCapacityForProposition(),
                    s = "";
                t && (s = t + " paczka w ramach abonamentu", 1 < t && t < 5 ? s = t + " paczki w ramach abonamentu" : 4 < t && (s = t + " paczek w ramach abonamentu"));
                var r = this.getSelectedVasPackagesForProposition(),
                    o = !!e && e.filter(function(e) {
                        return r && -1 < r.indexOf(a.getBonusCode(e))
                    });
                return n.default.createElement("div", null, !!t && n.default.createElement("p", {
                    className: "u-margin-l " + (!!this.props.isProductDetailsPage && " u-large-hide u-medium-hide")
                }, s), !!o && o.map(function(e, t) {
                    return n.default.createElement(f, babelHelpers.extends({
                        key: "vasPackage" + t
                    }, e, {
                        selectVas: a.props.selectVas,
                        unselectVas: a.props.unselectVas,
                        propositionId: a.props.offer && a.props.offer.id,
                        selectedVases: a.getSelectedVasPackagesForProposition()
                    }))
                }), !!t && n.default.createElement("a", {
                    onClick: this.openSelectPackagesModal,
                    className: "o-modal__trigger u-block u-margin-top-l"
                }, this.getChangePackagesLabel()))
            }
        }]), s
    }(n.Component);
    p.defaultProps = {
        changeLabelSingular: "Zmień paczkę ",
        changeLabelPlural: "Zmień paczki ",
        addLabelSingular: "Wybierz paczkę ",
        addLabelPlural: "Wybierz paczki ",
        changable: !0
    };
    var f = function(e) {
            babelHelpers.inherits(s, e);
            var a = u(s);

            function s(e) {
                var t;
                return babelHelpers.classCallCheck(this, s), (t = a.call(this, e)).getBonusCode = t.getBonusCode.bind(babelHelpers.assertThisInitialized(t)), t
            }
            return babelHelpers.createClass(s, [{
                key: "getBonusCode",
                value: function() {
                    return this.props.bonuses && 1 === this.props.bonuses.length ? this.props.bonuses[0].code : this.props.id
                }
            }, {
                key: "getLabel",
                value: function() {
                    switch (this.props.weight) {
                        case 2:
                            return n.default.createElement("div", {
                                className: "opl-packet-box__package"
                            }, n.default.createElement("span", {
                                className: "g-icon--" + this.props.thumbnailIcon + " g-icon g-icon--s"
                            }), n.default.createElement("span", {
                                className: "u-font-bold"
                            }, this.props.title), n.default.createElement("div", {
                                className: "opl-packet-box__package-info u-padding-top-l u-padding-m"
                            }, n.default.createElement("span", {
                                className: "u-font-bold u-font-small"
                            }, "Office 365 zajmuje miejsce dwóch paczek")));
                        default:
                            return n.default.createElement("div", {
                                className: "opl-packet-box__package"
                            }, n.default.createElement("span", {
                                className: "g-icon--" + this.props.thumbnailIcon + " g-icon g-icon--s"
                            }), n.default.createElement("span", {
                                className: "u-font-bold"
                            }, this.props.title))
                    }
                }
            }, {
                key: "render",
                value: function() {
                    return n.default.createElement(o.default, {
                        labelBlock: this.getLabel(),
                        className: "u-overflow"
                    }, this.props.longDescription)
                }
            }]), s
        }(n.Component),
        d = function(e) {
            babelHelpers.inherits(a, e);
            var t = u(a);

            function a(e) {
                return babelHelpers.classCallCheck(this, a), t.call(this, e)
            }
            return babelHelpers.createClass(a, [{
                key: "render",
                value: function() {
                    var e = n.default.createElement("span", {
                        className: "u-font-bold"
                    }, this.props.title);
                    return n.default.createElement(o.default, {
                        labelSpan: e,
                        className: ""
                    }, this.props.longDescription)
                }
            }]), a
        }(f),
        g = (0, t.connect)(function(e) {
            return {
                selectedVases: (0, a.getSelectedVases)(e),
                isDeviceLP: (0, s.isProductDetailsPage)(e) || (0, s.isProductListPage)(e) || (0, s.isAccessoryListPage)(e),
                isProductDetailsPage: (0, s.isProductDetailsPage)(e)
            }
        }, function(s) {
            return {
                selectVas: function(e, t, a) {
                    return s((0, r.selectVas)(e, t, a))
                },
                unselectVas: function(e, t, a) {
                    return s((0, r.unselectVas)(e, t, a))
                }
            }
        })(p);
    e.default = g
});
//# sourceMappingURL=VasPackages.js.map