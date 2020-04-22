define(["exports", "react", "react-redux", "eshop/components/OraCommonComponents", "../../core/components/ui/Modal", "./Utils", "./AddComponent", "../selectors", "../actions/cart", "./SingleInputModalContent", "../../checkout/utils/utils"], function(e, o, t, n, l, s, i, r, a, u, c) {
    "use strict";

    function d(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(t);
            e && (a = a.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, a)
        }
        return r
    }

    function p(a) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(a);
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
    }), e.default = e.AddVoucherComponent = void 0, o = babelHelpers.interopRequireWildcard(o), l = babelHelpers.interopRequireDefault(l), i = babelHelpers.interopRequireDefault(i), u = babelHelpers.interopRequireDefault(u);
    var h = function(e) {
        babelHelpers.inherits(a, e);
        var r = p(a);

        function a(e) {
            var t;
            return babelHelpers.classCallCheck(this, a), (t = r.call(this, e)).state = {
                showModal: !1
            }, t
        }
        return babelHelpers.createClass(a, [{
            key: "componentWillUpdate",
            value: function(e) {
                e.metadata.applied && !this.props.metadata.applied && this.setShowModal(!1), e.voucherName !== this.props.voucherName && e.voucherName && 0 === e.applicableProducts.length && (this.setShowModal(!1), this.props.applyVoucher(e.voucherCode, null))
            }
        }, {
            key: "setShowModal",
            value: function(e) {
                this.setState(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? d(Object(r), !0).forEach(function(e) {
                            babelHelpers.defineProperty(t, e, r[e])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach(function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                        })
                    }
                    return t
                }({}, this.state, {
                    showModal: e
                }))
            }
        }, {
            key: "onAddClick",
            value: function() {
                this.props.clearVoucher(), this.setShowModal(!0)
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
            key: "closeModal",
            value: function() {
                this.setShowModal(!1), this.props.clearVoucher()
            }
        }, {
            key: "sendVoucher",
            value: function() {
                this.props.findApplicableProducts(this.props.voucherCode)
            }
        }, {
            key: "setVoucherCode",
            value: function(e) {
                e.id, e.name;
                var t = e.value;
                this.props.changedVoucherCode(t)
            }
        }, {
            key: "getModalContentProps",
            value: function() {
                return {
                    id: "voucher",
                    inputValue: (0, c.remapToPhone)(this.props.voucherCode),
                    error: this.props.error,
                    mask: "***-****-****-****",
                    placeholder: "___-____-____-____",
                    modalHeader: b("modalHeader", this.props),
                    modalMainText: b("modalMainText", this.props),
                    inputPlaceHolder: b("modalInputPlaceholder", this.props),
                    modalBtnText: b("modalBtnText", this.props),
                    onButtonClick: this.sendVoucher.bind(this),
                    setInputValue: this.setVoucherCode.bind(this)
                }
            }
        }, {
            key: "getModalContent",
            value: function() {
                if (!this.state.showModal) return null;
                if (this.props.error) return o.default.createElement(u.default, this.getModalContentProps());
                switch (this.props.applicableProducts.length) {
                    case 0:
                        return o.default.createElement(u.default, this.getModalContentProps());
                    case 1:
                        return o.default.createElement(m, this.props);
                    default:
                        return o.default.createElement(f, this.props)
                }
            }
        }, {
            key: "render",
            value: function() {
                return o.default.createElement(s.HideWhenCartIsEmpty, {
                    className: "g-gray1-bg"
                }, o.default.createElement("div", {
                    className: "l-page-row u-padding-l u-small-padding-left u-small-padding-right"
                }, o.default.createElement(l.default, babelHelpers.extends({}, this.getModalProps(), {
                    id: "addVoucherModal"
                }), o.default.createElement(n.OraLoader, {
                    id: "voucherLoader",
                    loading: this.props.metadata.loading,
                    parentId: "voucher-loader"
                }, this.getModalContent())), o.default.createElement(i.default, babelHelpers.extends({}, this.props, {
                    onAddClick: this.onAddClick.bind(this)
                }))))
            }
        }]), a
    }(o.Component);
    (e.AddVoucherComponent = h).defaultProps = {
        label: "Posiadam kod rabatowy",
        tooltipContent: "Lorem ipsum",
        addBtnText: "Kliknij aby potwierdzić posiadanie kodu rabatowego",
        tooltipBtnText: "Otwórz podpowiedź",
        tooltipId: "tooltip_478503",
        modalHeader: "Rabaty",
        modalMainText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor",
        modalListText: "Kod rabatowy, który wybrałeś może być przypisany do jednego z produktów, które posiadasz w koszyku.",
        modalListHeader: "Wybierz rabatowany produkt",
        modalOneText: "{0} można przyznać na {1} w ramach {2} numer {3}",
        modalOneSimfreeText: "Rabat zostanie naliczony na {0} w ofercie bez abonamentu",
        modalOneSimfreeInstallmentText: "Rabat zostanie naliczony na ratę urządzenia {0} w ofercie Bez abonamentu na raty",
        modalBtnText: "Dalej",
        modalInputPlaceholder: "Podaj kod rabatowy"
    };
    var m = function(e) {
            babelHelpers.inherits(r, e);
            var t = p(r);

            function r() {
                return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
            }
            return babelHelpers.createClass(r, [{
                key: "format",
                value: function(e) {
                    var r = Array.prototype.slice.call(arguments, 1);
                    return e.replace(/{(\d+)}/g, function(e, t) {
                        return void 0 !== r[t] ? r[t] : e
                    })
                }
            }, {
                key: "applyVoucher",
                value: function() {
                    this.props.applyVoucher(this.props.voucherCode, this.props.applicableProducts[0])
                }
            }, {
                key: "getPramName",
                value: function(e) {
                    switch (e) {
                        case "SALE_OF_GOODS":
                            return "modalOneSimfreeText";
                        case "INSTALMENT_SALES_OF_GOODS":
                        case "INSTALMENT_SALES_OF_GOODS_NC":
                            return "modalOneSimfreeInstallmentText";
                        default:
                            return "modalOneText"
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.applicableProducts[0],
                        t = this.format(b(this.getPramName(e.processType), this.props), e.entryName, e.msisdn || "");
                    return o.default.createElement("div", null, o.default.createElement("h1", {
                        className: "u-font-standard u-no-margin u-padding-l"
                    }, o.default.createElement("span", {
                        className: "h3"
                    }, b("modalHeader", this.props))), o.default.createElement("p", {
                        className: "u-padding-l"
                    }, t), o.default.createElement(n.OraButton, {
                        type: "primary",
                        size: "medium",
                        onClick: this.applyVoucher.bind(this),
                        className: "u-w-100"
                    }, b("modalBtnText", this.props)))
                }
            }]), r
        }(o.Component),
        f = function(e) {
            babelHelpers.inherits(a, e);
            var r = p(a);

            function a(e) {
                var t;
                return babelHelpers.classCallCheck(this, a), (t = r.call(this, e)).state = {
                    chosenProduct: {}
                }, t
            }
            return babelHelpers.createClass(a, [{
                key: "setChosenProduct",
                value: function(e) {
                    this.setState({
                        chosenProduct: e
                    })
                }
            }, {
                key: "getRadioProps",
                value: function(e) {
                    return {
                        name: "choose-voucher",
                        text: e.entryName + (e.msisdn ? ", tel. " + e.msisdn : ""),
                        value: e.entryNo + "-" + e.bundleNo,
                        labelClassName: "o-radio opl-radio u-w-100 u-padding-l u-box-sizing",
                        checked: this.state.chosenProduct === e,
                        onChange: this.setChosenProduct.bind(this, e)
                    }
                }
            }, {
                key: "applyVoucher",
                value: function() {
                    this.props.applyVoucher(this.props.voucherCode, this.state.chosenProduct)
                }
            }, {
                key: "render",
                value: function() {
                    var t = this;
                    return o.default.createElement("div", {
                        className: "opl-filters"
                    }, o.default.createElement("h1", {
                        className: "u-font-standard u-no-margin u-padding-l"
                    }, o.default.createElement("span", {
                        className: "h3"
                    }, b("modalHeader", this.props))), o.default.createElement("p", {
                        className: "u-padding-l"
                    }, b("modalListText", this.props)), o.default.createElement("h4", {
                        className: "u-font-standard u-no-margin u-padding-l"
                    }, b("modalListHeader", this.props)), this.props.applicableProducts.map(function(e) {
                        return o.default.createElement(n.OraSimpleRadio, t.getRadioProps(e))
                    }), o.default.createElement(n.OraButton, {
                        type: "primary",
                        size: "medium",
                        onClick: this.applyVoucher.bind(this),
                        className: "u-w-100"
                    }, b("modalBtnText", this.props)))
                }
            }]), a
        }(o.Component);

    function b(e, t) {
        return t.descriptions[e] || t[e]
    }
    var y = (0, t.connect)(function(e) {
        return {
            voucherCode: (0, r.getVoucherCode)(e),
            voucherName: (0, r.getVoucherName)(e),
            metadata: (0, r.getVoucherMetadata)(e),
            error: (0, r.getVoucherError)(e),
            applicableProducts: (0, r.getVoucherApplicableProducts)(e),
            convergentEntries: (0, r.getConvergentEntries)(e)
        }
    }, function(r) {
        return {
            findApplicableProducts: function(e) {
                return r((0, a.findApplicableProducts)(e))
            },
            changedVoucherCode: function(e) {
                return r((0, a.changedVoucherCode)(e))
            },
            clearVoucher: function() {
                return r((0, a.clearVoucher)())
            },
            applyVoucher: function(e, t) {
                return r((0, a.applyVoucher)(e, t))
            }
        }
    })(h);
    e.default = y
});
//# sourceMappingURL=AddVoucherComponent.js.map