define(["exports", "react-redux", "react", "eshop/modules/core/components/ui/Modal", "eshop/modules/core/components/ui/Expander", "eshop/utils/OnlineUtils"], function(e, t, n, s, l, i) {
    "use strict";

    function c(l) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(l);
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
    }), e.default = void 0, n = babelHelpers.interopRequireWildcard(n), s = babelHelpers.interopRequireDefault(s), i = babelHelpers.interopRequireDefault(i);
    var a = function(e) {
        babelHelpers.inherits(l, e);
        var a = c(l);

        function l(e) {
            var t;
            return babelHelpers.classCallCheck(this, l), (t = a.call(this, e)).state = {
                showModal: !1,
                selected: [],
                conflicts: []
            }, t.open = t.open.bind(babelHelpers.assertThisInitialized(t)), t.onClose = t.onClose.bind(babelHelpers.assertThisInitialized(t)), t.openData = {}, t.onSelect = t.onSelect.bind(babelHelpers.assertThisInitialized(t)), t.onUselect = t.onUselect.bind(babelHelpers.assertThisInitialized(t)), t.onSubmit = t.onSubmit.bind(babelHelpers.assertThisInitialized(t)), t
        }
        return babelHelpers.createClass(l, [{
            key: "open",
            value: function(e) {
                this.openData = e, this.setState({
                    showModal: !0,
                    selected: this.openData.selected || [],
                    conflicts: [],
                    showHint: !0
                })
            }
        }, {
            key: "componentWillMount",
            value: function() {
                window.OraVasPacketPickerComponentOpenPopup || (window.OraVasPacketPickerComponentOpenPopup = this.open)
            }
        }, {
            key: "capacityCount",
            value: function() {
                return this.openData && this.openData.plan && this.openData.plan.capacity || -1
            }
        }, {
            key: "onClose",
            value: function() {
                this.setState({
                    showModal: !1
                })
            }
        }, {
            key: "onSelect",
            value: function(t, a) {
                var e = this.state.selected,
                    l = this.state.conflicts;
                t && !this.state.selected.find(function(e) {
                    return e === t
                }) && (e = e.concat(t)), a && !this.state.conflicts.find(function(e) {
                    return e === a
                }) && (l = l.concat(a)), this.setState({
                    showHint: !0,
                    selected: e,
                    conflicts: l
                })
            }
        }, {
            key: "onUselect",
            value: function(t, a) {
                var e = t ? this.state.selected.filter(function(e) {
                        return e !== t
                    }) : this.state.selected,
                    l = a ? this.state.conflicts.filter(function(e) {
                        return e !== a
                    }) : this.state.conflicts;
                this.setState({
                    showHint: !1,
                    selected: e,
                    conflicts: l
                })
            }
        }, {
            key: "onSubmit",
            value: function() {
                var e = this;
                if (this.capacityCount() === p(this.openData.packets, this.state.selected)) {
                    var t = this.state.selected.filter(function(t) {
                            return !e.openData.selected.find(function(e) {
                                return e === t
                            })
                        }),
                        a = this.openData.selected.filter(function(t) {
                            return !e.state.selected.find(function(e) {
                                return e === t
                            })
                        });
                    this.openData.submit(t, a, this.state.conflicts), this.onClose()
                } else this.setState({
                    showHint: !0
                })
            }
        }, {
            key: "render",
            value: function() {
                return n.default.createElement(s.default, {
                    id: "packet-picker-popup",
                    size: "narrow",
                    noPadding: !0,
                    fullscreenMobile: !0,
                    escapeClose: !0,
                    showClose: !0,
                    clickClose: !0,
                    open: this.state.showModal,
                    onClose: this.onClose
                }, n.default.createElement(o, babelHelpers.extends({}, this.openData, {
                    selected: this.state.selected,
                    showHint: this.state.showHint,
                    onSelect: this.onSelect,
                    onUselect: this.onUselect,
                    onSubmit: this.onSubmit
                }, i.default.extractObject(this.props.descriptions, "label.popup."))))
            }
        }], [{
            key: "openPopup",
            value: function(e) {
                window.OraVasPacketPickerComponentOpenPopup && window.OraVasPacketPickerComponentOpenPopup(e)
            }
        }]), l
    }(n.Component);
    e.default = a;
    var o = function(e) {
        babelHelpers.inherits(l, e);
        var a = c(l);

        function l(e) {
            var t;
            return babelHelpers.classCallCheck(this, l), (t = a.call(this, e)).toPacket = t.toPacket.bind(babelHelpers.assertThisInitialized(t)), t
        }
        return babelHelpers.createClass(l, [{
            key: "getPacketCountText",
            value: function(e) {
                switch (e) {
                    case 1:
                        return "jedną paczkę";
                    case 2:
                        return "dwie paczki";
                    case 3:
                        return "trzy paczki";
                    case 4:
                        return "cztery paczki";
                    case 5:
                        return "pięć paczek";
                    case 6:
                        return "sześć paczek";
                    default:
                        return "-"
                }
            }
        }, {
            key: "toPacket",
            value: function(e) {
                var t = (this.props.selected || []).includes(e.id),
                    a = p(this.props.packets, this.props.selected) + e.weight <= this.props.plan.capacity || t;
                return n.default.createElement(r, babelHelpers.extends({
                    key: e.id
                }, e, {
                    enabled: a,
                    selected: t,
                    onSelect: this.props.onSelect,
                    onUselect: this.props.onUselect,
                    conflictResolveMsg: this.props.conflictResolveMsg,
                    conflictMsgTemplate: this.props.conflictMsgTemplate
                }))
            }
        }, {
            key: "getTitle",
            value: function() {
                if (this.props.plan && this.props.plan.name) return this.props.titleTemplate.replace("%PLAN_NAME%", this.props.plan.name)
            }
        }, {
            key: "getSubtitle",
            value: function() {
                if (this.props.plan && this.props.plan.capacity) return this.props.subtitleTemplate.replace("%AVAILABLE_PACKET_COUNT%", this.getPacketCountText(this.props.plan.capacity))
            }
        }, {
            key: "render",
            value: function() {
                return n.default.createElement("div", null, n.default.createElement("div", {
                    className: "opl-packet-box__modal--top u-padding g-white1-bgc"
                }, n.default.createElement("h3", {
                    className: "u-padding-all-l u-padding-top-xl"
                }, this.getTitle()), n.default.createElement("p", {
                    className: "u-padding-all-l u-no-padding-top u-no-padding-bottom"
                }, this.getSubtitle())), n.default.createElement("div", {
                    className: "opl-packet-box__modal--center"
                }, n.default.createElement("div", {
                    className: "opl-packet-box__modal--center-content u-padding-top"
                }, this.props.packets && this.props.packets.map(this.toPacket))), n.default.createElement(u, {
                    showHint: this.props.showHint,
                    chosenCount: p(this.props.packets, this.props.selected),
                    capacity: this.props.plan && this.props.plan.capacity,
                    onSubmit: this.props.onSubmit,
                    hintSelectMoreTemplate: this.props.hintSelectMoreTemplate,
                    hintFull: this.props.hintFull
                }))
            }
        }]), l
    }(n.Component);
    o.defaultProps = {
        titleTemplate: "%PLAN_NAME%. Wybierz paczki usług do planu.",
        subtitleTemplate: "W tym planie możesz wybrać %AVAILABLE_PACKET_COUNT% usług z listy poniżej. Nie płacisz za nie dodatkowo, są już w cenie abonamentu. Co miesiąc możesz je zamienić na inne.",
        hintSelectMoreTemplate: "Wybierz paczki (wybrano %USED_CAPACITY% z %AVAILABLE_PACKET_COUNT% dostępnych)",
        hintFull: "Wybrałeś już maksymalną liczbę paczek. Jeśli chcesz dodać inną musisz najpierw odznaczyć jedną z aktualnie zaznaczonych.",
        conflictMsgTemplate: "Wybrałeś już %CONFLICT_NAME% w usługach dodatkowych",
        conflictResolveMsg: "Zamieniam usługę na paczkę"
    };
    var r = function(t) {
            var e = n.default.createElement(l.Trigger, {
                    className: "js-expander__trigger"
                }, n.default.createElement("span", {
                    className: "js-expander__trigger--hide"
                }, "Więcej"), n.default.createElement("span", {
                    className: "js-expander__trigger--show"
                }, "Zwiń"), n.default.createElement("span", {
                    className: "g-icon g-icon--arrow-down g-icon--xs u-padding-left-s"
                })),
                a = !t.selected && !!t.warning;
            return n.default.createElement("div", {
                className: "opl-packet-box__checkbox u-padding-l" + (t.enabled ? "" : " disabled") + (a ? " g-gray1-bg" : "")
            }, n.default.createElement("label", {
                className: "opl-checkbox opl-checkbox--red-disabled o-checkbox u-padding-l"
            }, n.default.createElement("input", {
                type: "checkbox",
                disabled: (!t.enabled || a) && "disabled",
                checked: t.selected,
                onChange: function(e) {
                    e.target.checked ? t.onSelect(t.id) : t.onUselect(t.id, t.warning && t.warning.id)
                }
            }), n.default.createElement("span", {
                className: "o-ci"
            }), n.default.createElement("span", {
                className: "o-ci-label h4"
            }, t.title)), n.default.createElement("ul", {
                className: "opl-packet-box__checkbox--list u-padding"
            }, (t.features || []).map(function(e, t) {
                return n.default.createElement("li", {
                    key: "feature_" + t
                }, e)
            }), t.moreFeatures && t.moreFeatures[0] && n.default.createElement(l.Expander, null, n.default.createElement(l.Section, {
                header: e,
                headerBelow: !0
            }, n.default.createElement("ul", null, (t.moreFeatures || []).map(function(e, t) {
                return n.default.createElement("li", {
                    key: "moreFeatures_" + t
                }, e)
            }))))), t.info && n.default.createElement("div", {
                className: "u-margin-l u-padding-left-l-xl u-table"
            }, n.default.createElement("span", {
                className: "g-icon g-icon--info g-icon--xs-s u-padding-right u-table-cell u-vertical-middle" + (t.enabled ? " g-bluef-c" : "")
            }), n.default.createElement("span", {
                className: "u-table-cell u-font-small u-font-bold u-vertical-middle"
            }, t.info)), a && n.default.createElement("div", null, n.default.createElement("div", {
                className: "opl-msg opl-msg--warn-black opl-msg--context u-margin-l"
            }, n.default.createElement("p", null, t.conflictMsgTemplate.replace("%CONFLICT_NAME%", t.warning.name))), n.default.createElement("button", {
                className: "opl-btn o-btn opl-btn--small u-padding-left-xl u-padding-right-xl",
                disabled: !t.enabled && "disabled",
                onClick: function() {
                    return t.onSelect(t.id, t.warning.id)
                }
            }, t.conflictResolveMsg)))
        },
        u = function(e) {
            var t = e.chosenCount === e.capacity,
                a = e.hintSelectMoreTemplate.replace("%USED_CAPACITY%", e.chosenCount).replace("%AVAILABLE_PACKET_COUNT%", e.capacity);
            return n.default.createElement("div", {
                className: "opl-packet-box__modal--bottom"
            }, n.default.createElement("div", {
                className: "u-padding-all-l u-box-sizing u-w-100"
            }, n.default.createElement("div", {
                className: "u-table u-margin-auto-l u-small-block"
            }, e.showHint && !t && n.default.createElement("div", {
                className: "u-table-cell u-vertical-middle u-padding-right-l u-small-hide"
            }, n.default.createElement("span", {
                className: "u-font-bold u-inline-block u-margin-right"
            }, a)), e.showHint && t && n.default.createElement("div", {
                className: "u-table-cell u-vertical-middle u-padding-right-l u-small-block u-small-no-padding-r"
            }, n.default.createElement("div", {
                className: "opl-msg opl-msg--info opl-msg--context u-inline-block"
            }, n.default.createElement("p", null, e.hintFull))), n.default.createElement("div", {
                className: "u-table-cell u-vertical-middle u-small-block u-small-margin-top-l"
            }, n.default.createElement("button", {
                className: "opl-btn opl-btn--primary opl-btn--medium o-btn u-padding-right-l-xl u-padding-left-l-xl",
                onClick: e.onSubmit
            }, "Gotowe")))))
        },
        p = function(e, t) {
            return (e || []).filter(function(e) {
                return t && !!t.includes(e.id)
            }).map(function(e) {
                return e.weight || 0
            }).reduce(function(e, t) {
                return e + t
            }, 0)
        }
});
//# sourceMappingURL=OraVasPacketPickerComponent.js.map