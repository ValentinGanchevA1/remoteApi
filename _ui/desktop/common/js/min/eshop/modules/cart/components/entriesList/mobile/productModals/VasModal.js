define(["exports", "react", "prop-types", "react-redux", "eshop/modules/core/components/ui/Modal", "eshop/modules/cart/actions/cart", "./VasBox", "./ValidationResultMessageComponent", "eshop/modules/core/components/ui/Expander", "../../../../../checkout/constants/RuleTypeEnum"], function(e, i, t, s, l, a, u, o, c, n) {
    "use strict";

    function d(r) {
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
    }), e.default = void 0, i = babelHelpers.interopRequireWildcard(i), l = babelHelpers.interopRequireDefault(l), u = babelHelpers.interopRequireDefault(u), n = babelHelpers.interopRequireDefault(n);
    var r = function(e) {
        babelHelpers.inherits(r, e);
        var s = d(r);

        function r(e) {
            var t;
            return babelHelpers.classCallCheck(this, r), (t = s.call(this, e)).extractMobileVasesForThisSection = t.extractMobileVasesForThisSection.bind(babelHelpers.assertThisInitialized(t)), t.markAlreadySelectedVases = t.markAlreadySelectedVases.bind(babelHelpers.assertThisInitialized(t)), t.disabledMandatoryVases = t.disabledMandatoryVases.bind(babelHelpers.assertThisInitialized(t)), t.createClickedCallback = t.createClickedCallback.bind(babelHelpers.assertThisInitialized(t)), t.findBrokenRequireRules = t.findBrokenRequireRules.bind(babelHelpers.assertThisInitialized(t)), t.findBrokenDisableRules = t.findBrokenDisableRules.bind(babelHelpers.assertThisInitialized(t)), t.findTriggeredValidationGroups = t.findTriggeredValidationGroups.bind(babelHelpers.assertThisInitialized(t)), t.isRuleTriggered = t.isRuleTriggered.bind(babelHelpers.assertThisInitialized(t)), t.isValidationGroupTriggered = t.isValidationGroupTriggered.bind(babelHelpers.assertThisInitialized(t)), t.createVasIdToNameTranslationMap = t.createVasIdToNameTranslationMap.bind(babelHelpers.assertThisInitialized(t)), t.saveSelectedVases = t.saveSelectedVases.bind(babelHelpers.assertThisInitialized(t)), t.state = {
                open: t.props.open,
                services: [],
                requireRules: [],
                disableRules: [],
                groups: [],
                oldServices: [],
                unfulfilledRequireRules: [],
                triggeredValidationGroups: []
            }, t
        }
        return babelHelpers.createClass(r, [{
            key: "componentWillReceiveProps",
            value: function(e) {
                var t = this.extractMobileVasesForThisSection(e),
                    s = this.markAlreadySelectedVases(t.services, e);
                this.props.viewAsRetentionBonuses && t.categorizedBonuses.RetentionBonuses && (s = this.markAlreadySelectedVases(t.categorizedBonuses.RetentionBonuses.services, e)), s = this.disabledMandatoryVases(s), t ? this.setState({
                    open: e.open,
                    oldServices: JSON.parse(JSON.stringify(s)),
                    services: s,
                    requireRules: this.filterRequireRules(this.filterUsableRules(t.relations, s)),
                    disableRules: this.filterDisableRules(this.filterUsableRules(t.relations, s)),
                    groups: this.filterUsableValidationGroups(t.groups, s),
                    unfulfilledRequireRules: [],
                    triggeredValidationGroups: []
                }) : this.setState({
                    open: e.open
                }, function() {}.bind(this))
            }
        }, {
            key: "filterUsableRules",
            value: function(e, t) {
                var r = t.map(function(e) {
                    return e.id
                });
                return e.filter(function(e) {
                    var t = e.targetVases.filter(function(e) {
                            return r.includes(e)
                        }),
                        s = e.sourceVases.filter(function(e) {
                            return r.includes(e)
                        });
                    if (0 < t.length && 0 < s.length) return e.targetVases = t, e.sourceVases = s, e
                })
            }
        }, {
            key: "filterRequireRules",
            value: function(e) {
                return e.filter(function(e) {
                    return e.type === n.default.REQUIRE
                })
            }
        }, {
            key: "filterDisableRules",
            value: function(e) {
                return e.filter(function(e) {
                    return e.type === n.default.EXCLUDE
                })
            }
        }, {
            key: "filterUsableValidationGroups",
            value: function(e, t) {
                var r = t.map(function(e) {
                    return e.id
                });
                return e.filter(function(e) {
                    var t = e.targetProducts.filter(function(e) {
                            return r.includes(e)
                        }),
                        s = e.conditionalProducts.filter(function(e) {
                            return r.includes(e)
                        });
                    if (0 < t.length && 0 < s.length) return e
                })
            }
        }, {
            key: "extractMobileVasesForThisSection",
            value: function(t) {
                return t.vases.find(function(e) {
                    return e.bundle === t.bundle
                })
            }
        }, {
            key: "markAlreadySelectedVases",
            value: function(e, t) {
                var s = t.cartVases.map(function(e) {
                    return e.productCode
                });
                return s = s || [], e ? e.map(function(e) {
                    return -1 != s.indexOf(e.id) ? Object.assign({}, e, {
                        selected: !0
                    }) : Object.assign({}, e, {
                        selected: !1
                    })
                }) : []
            }
        }, {
            key: "disabledMandatoryVases",
            value: function(e) {
                return e.map(function(e) {
                    return -1 != e.characteristics.indexOf("MANDATORY") ? Object.assign({}, e, {
                        disabled: !0
                    }) : Object.assign({}, e, {
                        disabled: !1
                    })
                })
            }
        }, {
            key: "isRuleTriggered",
            value: function(e, t) {
                return 0 < e.sourceVases.filter(function(e) {
                    return t.includes(e)
                }).length
            }
        }, {
            key: "isValidationGroupTriggered",
            value: function(e, t) {
                return 0 < e.conditionalProducts.filter(function(e) {
                    return t.includes(e)
                }).length
            }
        }, {
            key: "findBrokenRequireRules",
            value: function(e) {
                var t = this,
                    s = e.filter(function(e) {
                        return e.selected
                    }).map(function(e) {
                        return e.id
                    });
                return this.state.requireRules.filter(function(e) {
                    return t.isRuleTriggered(e, s)
                }).filter(function(e) {
                    return !t.areAllRuleTargetsPresent(e, s)
                })
            }
        }, {
            key: "findBrokenDisableRules",
            value: function(e) {
                var t = this,
                    s = e.filter(function(e) {
                        return e.selected
                    }).map(function(e) {
                        return e.id
                    });
                return this.state.disableRules.filter(function(e) {
                    return t.isRuleTriggered(e, s)
                }).filter(function(e) {
                    return t.areAnyRuleTargetsPresent(e, s)
                })
            }
        }, {
            key: "findTriggeredValidationGroups",
            value: function(e) {
                var t = this,
                    s = e.filter(function(e) {
                        return e.selected
                    }).map(function(e) {
                        return e.id
                    }),
                    r = e.map(function(e) {
                        return e.id
                    }),
                    n = this.state.groups.filter(function(e) {
                        return t.isValidationGroupTriggered(e, s)
                    }),
                    i = n.reduce(function(e, t) {
                        return e.concat(t.targetProducts.filter(function(e) {
                            return r.includes(e)
                        }))
                    }, []).filter(function(e, t, s) {
                        return s.indexOf(e) === t
                    });
                return e = e.map(function(e) {
                    e.active = !i.includes(e.id)
                }), n
            }
        }, {
            key: "areAllRuleTargetsPresent",
            value: function(e, t) {
                return e.targetVases.every(function(e) {
                    return t.includes(e)
                })
            }
        }, {
            key: "areAnyRuleTargetsPresent",
            value: function(e, t) {
                return e.targetVases.find(function(e) {
                    return t.includes(e)
                })
            }
        }, {
            key: "updateUnfulfilledRules",
            value: function(e, t) {
                var s = this.findBrokenRequireRules(e);
                this.uncheckExcludeVases(e, t);
                var r = this.findTriggeredValidationGroups(e);
                this.setState({
                    services: e,
                    unfulfilledRequireRules: s,
                    triggeredValidationGroups: r
                })
            }
        }, {
            key: "uncheckExcludeVases",
            value: function(e, t) {
                var s = [];
                this.state.disableRules.filter(function(e) {
                    return 0 < e.sourceVases.filter(function(e) {
                        return e === t
                    }).length
                }).forEach(function(e) {
                    return e.targetVases.forEach(function(e) {
                        return s.push(e)
                    })
                }), e.forEach(function(e) {
                    s.includes(e.id) && (e.selected = !1)
                })
            }
        }, {
            key: "createClickedCallback",
            value: function(s) {
                var r = this;
                return function() {
                    var e = r.state.services,
                        t = e.indexOf(s); - 1 != t && (r.props.viewAsRetentionBonuses ? (e.forEach(function(e) {
                        return e.selected = !1
                    }), s.selected = !0) : s.selected = !s.selected, e[t] = s, r.updateUnfulfilledRules(e, s.id))
                }.bind(this)
            }
        }, {
            key: "createVasIdToNameTranslationMap",
            value: function() {
                return Object.freeze(this.state.services.reduce(function(e, t) {
                    return e[t.id] = t.title, e
                }, {}))
            }
        }, {
            key: "getVasAndBonusesIdsFromVas",
            value: function(e) {
                var t = e.bonuses ? e.bonuses.map(function(e) {
                    return e.code
                }) : [];
                return [e.id].concat(babelHelpers.toConsumableArray(t))
            }
        }, {
            key: "saveSelectedVases",
            value: function() {
                var e = this.servicesStateDiff(this.state.oldServices, this.state.services),
                    t = e.filter(function(e) {
                        return e.selected
                    }).map(this.getVasAndBonusesIdsFromVas.bind(this)).reduce(function(e, t) {
                        return e.concat.apply(e, babelHelpers.toConsumableArray(t))
                    }, []),
                    s = e.filter(function(e) {
                        return !e.selected
                    }).map(this.getVasAndBonusesIdsFromVas.bind(this)).reduce(function(e, t) {
                        return e.concat.apply(e, babelHelpers.toConsumableArray(t))
                    }, []);
                this.setState({
                    oldServices: JSON.parse(JSON.stringify(this.state.services)),
                    open: !1
                }), this.props.onClose(), this.props.updateCartVases(this.props.propositionId, this.props.bundle, this.props.cartBundle, s, t)
            }
        }, {
            key: "servicesStateDiff",
            value: function(s, e) {
                if (s.length !== e.length) throw "Something went wrong. Service lists' sizes do not match.";
                return e.map(function(e, t) {
                    return e.changed = e.selected !== s[t].selected, e
                }).filter(function(e) {
                    return e.changed
                })
            }
        }, {
            key: "getSectionHeader",
            value: function() {
                return i.default.createElement("div", {
                    className: "l-row u-spacing-top-l u-small-spacing-m"
                }, i.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-8 l-col-8"
                }, i.default.createElement(c.Trigger, {
                    className: "js-expander__trigger__nested u-inline u-text-nowrap"
                }, i.default.createElement("span", {
                    className: "js-expander__trigger--show"
                }, "Mniej usług"), i.default.createElement("span", {
                    className: "js-expander__trigger--hide"
                }, "Więcej usług"))), i.default.createElement(f, {
                    unfulfilledRequireRules: this.state.unfulfilledRequireRules,
                    saveVasesClicked: this.saveSelectedVases
                }))
            }
        }, {
            key: "render",
            value: function() {
                var n = this,
                    e = this.createVasIdToNameTranslationMap();
                return i.default.createElement(l.default, {
                    open: this.state.open,
                    onClose: this.props.onClose,
                    size: "medium"
                }, i.default.createElement("p", {
                    className: "h3"
                }, this.props.title), i.default.createElement("div", {
                    className: "opl-multicheckout-services"
                }, i.default.createElement(c.Expander, {
                    scrollToSelected: !1,
                    variant: "",
                    className: "opl-expander-outer u-no-padding",
                    sectionClassName: "opl-section-outer"
                }, i.default.createElement("ul", null, this.state.services && this.state.services.slice(0, 4).map(function(e, t, s) {
                    return i.default.createElement("li", {
                        className: "opl-multicheckout-services__item",
                        key: "vas_" + t
                    }, i.default.createElement(u.default, {
                        key: "".concat(e.id, "_").concat(t),
                        multiChoice: n.props.multiChoice,
                        onSelectionChanged: n.createClickedCallback(e),
                        vas: e,
                        idx: s.length - t
                    }))
                }))), this.state.services.length && 4 < this.state.services.length ? i.default.createElement(c.Expander, {
                    scrollToSelected: !1,
                    variant: "",
                    className: "opl-expander-inner u-no-padding",
                    sectionClassName: "opl-section-inner"
                }, i.default.createElement(c.Section, {
                    header: this.getSectionHeader(),
                    contentClassName: "js-expander__content__nested u-hide--soft",
                    className: "opl-section-inner u-no-padding",
                    headerBelow: !0
                }, i.default.createElement(c.Expander, {
                    scrollToSelected: !1,
                    variant: "",
                    className: "opl-expander-outer u-no-padding",
                    sectionClassName: "opl-section-outer"
                }, i.default.createElement("ul", null, i.default.createElement("li", {
                    className: "opl-multicheckout-services__item",
                    key: "vas_blank"
                }), this.state.services && this.state.services.slice(4).map(function(e, t, s) {
                    var r = t + 4;
                    return i.default.createElement("li", {
                        className: "opl-multicheckout-services__item",
                        key: "vas_" + r
                    }, i.default.createElement(u.default, {
                        key: "".concat(e.id, "_").concat(r),
                        multiChoice: n.props.multiChoice,
                        onSelectionChanged: n.createClickedCallback(e),
                        vas: e,
                        idx: s.length - r + 4
                    }))
                }))))) : i.default.createElement("div", {
                    className: "l-row u-spacing-top-l u-small-spacing-m"
                }, i.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-8 l-col-8"
                }), i.default.createElement(f, {
                    unfulfilledRequireRules: this.state.unfulfilledRequireRules,
                    saveVasesClicked: this.saveSelectedVases
                }))), 0 < this.state.unfulfilledRequireRules.length && i.default.createElement(o.RequireRuleMessageComponent, {
                    translationMap: e,
                    brokenRules: this.state.unfulfilledRequireRules
                }, "UNFULFILLED REQUIRE RULES"))
            }
        }]), r
    }(i.Component);
    r.propTypes = {
        header: t.PropTypes.string,
        bundle: t.PropTypes.string,
        cartBundle: t.PropTypes.string,
        propositionId: t.PropTypes.string,
        open: t.PropTypes.bool,
        onClose: t.PropTypes.func,
        idx: t.PropTypes.number,
        cartVases: t.PropTypes.array,
        updateCartVases: t.PropTypes.func
    }, r.defaultProps = {
        title: "Dobierz usługi dodatkowe"
    };
    var f = function(e) {
        return 0 < e.unfulfilledRequireRules.length ? i.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-4 l-col-4 u-small-padding-top"
        }, i.default.createElement("button", {
            className: "o-btn opl-btn opl-btn--primary opl-btn-medium u-w-100",
            disabled: !0
        }, i.default.createElement("span", {
            className: "opl-ripple-box"
        }, i.default.createElement("span", {
            className: "opl-ripple-circle"
        })), "Wybierz usługi")) : i.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-4 l-col-4 u-text-right u-small-padding-top"
        }, i.default.createElement("button", {
            className: "o-btn opl-btn opl-btn--primary opl-btn-medium u-w-100",
            onClick: e.saveVasesClicked
        }, i.default.createElement("span", {
            className: "opl-ripple-box"
        }, i.default.createElement("span", {
            className: "opl-ripple-circle"
        })), "Wybierz"))
    };
    f.propTypes = {
        unfulfilledRequireRules: t.PropTypes.array.isRequired,
        saveVasesClicked: t.PropTypes.func.isRequired
    };
    var p = (0, s.connect)(null, function(i) {
        return {
            updateCartVases: function(e, t, s, r, n) {
                return i((0, a.updateCartVases)(e, t, s, r, n))
            }
        }
    })(r);
    e.default = p
});
//# sourceMappingURL=VasModal.js.map