define(["exports", "react", "react-redux", "prop-types", "../../core/components/ui/Modal", "./Utils", "./AddComponent", "../selectors", "../actions/cart", "./SingleInputModalContent", "../constants", "eshop/components/OraCommonComponents"], function(e, t, r, o, d, a, n, l, i, s, u, p) {
    "use strict";

    function c(o) {
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
    }), e.default = e.AddKdrComponent = void 0, t = babelHelpers.interopRequireWildcard(t), o = babelHelpers.interopRequireDefault(o), d = babelHelpers.interopRequireDefault(d), n = babelHelpers.interopRequireDefault(n), s = babelHelpers.interopRequireDefault(s);
    var f = function(e) {
        babelHelpers.inherits(o, e);
        var r = c(o);

        function o(e) {
            var t;
            return babelHelpers.classCallCheck(this, o), (t = r.call(this, e)).state = {
                showModal: !1
            }, t
        }
        return babelHelpers.createClass(o, [{
            key: "componentDidMount",
            value: function() {
                this.props.getKdrNumberFromCart()
            }
        }, {
            key: "componentDidUpdate",
            value: function(e) {
                !e.saving || this.props.saving || this.props.errors && 0 !== Object.keys(this.props.errors).length || this.closeModal()
            }
        }, {
            key: "setShowModal",
            value: function(e) {
                this.setState({
                    showModal: e
                })
            }
        }, {
            key: "onAddClick",
            value: function() {
                this.setShowModal(!0)
            }
        }, {
            key: "getModalProps",
            value: function() {
                return {
                    open: this.state.showModal,
                    size: "small",
                    showClose: !0,
                    escapeClose: !1,
                    clickClose: !1,
                    onClose: this.closeModal.bind(this)
                }
            }
        }, {
            key: "clearIfNotAccepted",
            value: function() {
                this.props.kdrAccepted || this.props.changeKdrNumber("")
            }
        }, {
            key: "closeModal",
            value: function() {
                this.clearIfNotAccepted(), this.setShowModal(!1)
            }
        }, {
            key: "getModalContent",
            value: function() {
                return t.default.createElement(s.default, this.getModalContentProps())
            }
        }, {
            key: "getAddedRovProps",
            value: function() {
                return {
                    showAddLink: !1,
                    addBtnText: h("addBtnText", this.props),
                    label: h("addedRowTitle", this.props),
                    tooltipBtnText: h("tooltipBtnText", this.props),
                    tooltipContent: h("addedRowTooltip", this.props),
                    tooltipId: "addedKdr",
                    addRowIcon: h("addedRowIcon", this.props),
                    descriptions: {}
                }
            }
        }, {
            key: "getAddedRowView",
            value: function() {
                return t.default.createElement(n.default, this.getAddedRovProps(), t.default.createElement("p", {
                    className: "u-font-normal"
                }, this.props.kdrNumber), "legacy" === this.props.kdrSource ? null : t.default.createElement("a", {
                    href: "#",
                    className: "u-font-bold",
                    onClick: this.clearData.bind(this)
                }, "Usuń"))
            }
        }, {
            key: "getModalContentProps",
            value: function() {
                return {
                    id: "kdrNumber",
                    inputValue: this.props.kdrNumber,
                    error: this.props.errors,
                    mask: "99999999999999999",
                    placeholder: "_________________",
                    modalHeader: h("modalHeader", this.props),
                    modalMainText: h("modalMainText", this.props),
                    inputPlaceHolder: h("modalInputPlaceholder", this.props),
                    modalBtnText: h("modalBtnText", this.props),
                    onButtonClick: this.onInputNext.bind(this),
                    setInputValue: this.changeKdrNumber.bind(this)
                }
            }
        }, {
            key: "onInputNext",
            value: function() {
                u.kdrNumberPattern.test(this.props.kdrNumber) ? (this.props.approveKdrNumber(), this.props.saveKdrData({
                    number: this.props.kdrNumber,
                    source: this.props.kdrSource
                })) : this.props.dispatchKdrError({
                    level: "error",
                    message: h("kdrNumberError", this.props)
                })
            }
        }, {
            key: "clearData",
            value: function(e) {
                e.preventDefault(), this.props.clearKdrNumber()
            }
        }, {
            key: "changeKdrNumber",
            value: function(e) {
                e.id, e.name;
                var t = e.value;
                this.props.changeKdrNumber(t)
            }
        }, {
            key: "render",
            value: function() {
                return t.default.createElement(a.HideWhenCartIsEmpty, {
                    className: "g-gray1-bg"
                }, t.default.createElement("div", {
                    className: "l-page-row u-padding-l u-small-padding-left u-small-padding-right"
                }, t.default.createElement(d.default, babelHelpers.extends({}, this.getModalProps(), {
                    id: "kdrNumberModal"
                }), t.default.createElement(p.OraLoader, {
                    id: "kdrLoader",
                    loading: this.props.saving,
                    parentId: "kdr-loader"
                }, this.getModalContent())), this.props.kdrAccepted ? this.getAddedRowView() : t.default.createElement(n.default, babelHelpers.extends({}, this.props, {
                    onAddClick: this.onAddClick.bind(this)
                }))))
            }
        }]), o
    }(t.Component);

    function h(e, t) {
        return t.descriptions[e] || t[e]
    }(e.AddKdrComponent = f).propTypes = {
        label: o.default.string,
        addBtnText: o.default.string,
        tooltipBtnText: o.default.string,
        tooltipId: o.default.string.isRequired,
        modalHeader: o.default.string,
        modalMainText: o.default.string,
        modalBtnText: o.default.string,
        modalInputPlaceholder: o.default.string,
        addRowIcon: o.default.string,
        addedRowTitle: o.default.string,
        addedRowIcon: o.default.string,
        addedRowTooltip: o.default.string,
        changeKdrNumber: o.default.func,
        getKdrNumberFromCart: o.default.func,
        approveKdrNumber: o.default.func,
        clearKdrNumber: o.default.func,
        kdrNumber: o.default.string,
        kdrSource: o.default.string,
        kdrAccepted: o.default.bool
    }, f.defaultProps = {
        label: "Posiadam Kartę Dużej rodzinki",
        addBtnText: "Kliknij aby potwierdzić posiadanie Karty Dużej rodzinki",
        tooltipBtnText: "Otwórz podpowiedź",
        tooltipId: "tooltip_kdr",
        modalHeader: "Karta Dużej Rodzinki",
        modalMainText: "",
        modalBtnText: "Potwierdź",
        modalInputPlaceholder: "Wpisz nr karty Dużej rodzinki",
        addRowIcon: "g-icon--voucher",
        addedRowTitle: "Karta Dużej Rodziny",
        addedRowIcon: "g-icon--person-group2",
        addedRowTooltip: "",
        kdrNumberError: "Nieprawidłowy numer Karty Dużej rodzinki"
    };
    var m = (0, r.connect)(function(e) {
        return {
            kdrNumber: (0, l.getKdrNumber)(e),
            kdrSource: (0, l.getKdrSource)(e),
            errors: (0, l.getKdrErrors)(e),
            saving: (0, l.getKdrSaving)(e),
            kdrAccepted: (0, l.getKdrAccepted)(e)
        }
    }, function(t) {
        return {
            changeKdrNumber: function(e) {
                return t((0, i.changeKdrNumber)(e))
            },
            getKdrNumberFromCart: function() {
                return t((0, i.getKdrDataFromCart)())
            },
            approveKdrNumber: function() {
                return t((0, i.approveKdrNumber)())
            },
            clearKdrNumber: function() {
                return t((0, i.clearKdrNumber)())
            },
            saveKdrData: function(e) {
                return t((0, i.saveKdrData)(e))
            },
            dispatchKdrError: function(e) {
                return t((0, i.dispatchKdrError)(e))
            }
        }
    })(f);
    e.default = m
});
//# sourceMappingURL=AddKdrComponent.js.map