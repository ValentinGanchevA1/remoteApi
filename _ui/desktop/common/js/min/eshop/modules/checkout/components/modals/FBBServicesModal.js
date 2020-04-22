define(["exports", "react-redux", "react", "../../selectors", "../../actions/app", "eshop/components/OraCommonComponents", "eshop/modules/core/components/ui/Modal"], function(e, t, g, n, r, i, s) {
    "use strict";

    function a(r) {
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
    }), e.default = void 0, g = babelHelpers.interopRequireWildcard(g), s = babelHelpers.interopRequireDefault(s);
    var c = function(e) {
            babelHelpers.inherits(r, e);
            var n = a(r);

            function r(e) {
                var t;
                return babelHelpers.classCallCheck(this, r), (t = n.call(this, e)).state = {
                    shouldClose: !1
                }, t.props.fixInvalid && OPL.UI.on("module.started", function(e) {
                    return t.onReady(e)
                }), t.onReady = t.onReady.bind(babelHelpers.assertThisInitialized(t)), t.modalId = "fbbServicesModal", t
            }
            return babelHelpers.createClass(r, [{
                key: "componentWillUpdate",
                value: function(e) {
                    this.props.fbbServices && e.fbbServices && e.fbbServices[0] && e.fbbServices[0].serviceBundles && e.fbbServices[0].serviceBundles[0] && this.props.fbbServices.length != e.fbbServices.length && (this.props.selectedDesignationNumberAction(e.fbbServices[0].serviceBundles[0].mainService.designationNumber), this.props.selectedServiceInstanceIdAction(e.fbbServices[0].serviceBundles[0].mainService.serviceId))
                }
            }, {
                key: "onReady",
                value: function(e) {
                    e.element.id === "react-modal-" + this.modalId + "-trigger" && this.props.requestFBBServiceDataFilteredByWWT()
                }
            }, {
                key: "renderService",
                value: function(e) {
                    if (e.mainService) {
                        var t = e.mainService.serviceId,
                            n = !!e.pots,
                            r = !!e.convergent,
                            i = this.props.descriptions,
                            s = i.potsIcon,
                            a = i.internetIcon,
                            c = i.videoIcon,
                            o = i.voipIcon,
                            l = i.simIcon,
                            u = i.pots,
                            d = i.internet,
                            p = i.video,
                            v = i.voip,
                            f = i.sim,
                            m = i.servicesSeparator,
                            b = "",
                            h = "";
                        switch (t) {
                            case "PSTN0000":
                                b += s, h += u;
                                break;
                            case "NEOI0000":
                                b += a, h += d;
                                break;
                            case "DUO0000":
                                b += a + o, h += d + m + v;
                                break;
                            case "DWIE0000":
                                b += a + c, h += d + m + p;
                                break;
                            case "TRPL0000":
                                b += a + c + o, h += d + m + p + m + v
                        }
                        "PSTN0000" !== t && n && (b += s, h += m + u), "NEOI0000" !== t && "TRPL0000" !== t || !r || (b += l, h += m + f), r || (h += " (" + e.displayNumber + ")");
                        var S = {
                            __html: b + h
                        };
                        return g.default.createElement("p", {
                            dangerouslySetInnerHTML: S
                        })
                    }
                }
            }, {
                key: "renderFixAddressWithServices",
                value: function(e) {
                    var n = this;
                    return g.default.createElement("div", null, e.map(function(e, t) {
                        return g.default.createElement("div", {
                            key: t
                        }, n.renderServices(e))
                    }))
                }
            }, {
                key: "renderServices",
                value: function(e) {
                    var n = this;
                    return g.default.createElement("div", null, e.serviceBundles.map(function(e, t) {
                        return g.default.createElement("span", {
                            key: "subMap-" + t
                        }, g.default.createElement(i.OraSimpleRadio, n.getPropsForRadio(n.renderService(e), e)), g.default.createElement("br", null))
                    }))
                }
            }, {
                key: "getPropsForRadio",
                value: function(e, t) {
                    return {
                        name: "serviceSelect",
                        text: e,
                        value: [this.getDesignationNumber(t), this.getServiceInstanceId(t)],
                        labelClassName: "o-radio opl-radio u-spacing",
                        spanClassName: "u-vertical-center",
                        readOnly: !1,
                        checked: this.getDesignationNumber(t).toString() == this.props.selectedDesignationNumber,
                        onChange: this.selectRadio.bind(this)
                    }
                }
            }, {
                key: "selectRadio",
                value: function(e) {
                    this.props.selectedDesignationNumberAction(e.target.value.slice(0, e.target.value.indexOf(","))), this.props.selectedServiceInstanceIdAction(e.target.value.slice(e.target.value.lastIndexOf(",") + 1))
                }
            }, {
                key: "getDesignationNumber",
                value: function(e) {
                    return !!e && !!e.mainService && e.mainService.designationNumber
                }
            }, {
                key: "getServiceInstanceId",
                value: function(e) {
                    return !!e && !!e.mainService && e.mainService.cfServiceInstanceId
                }
            }, {
                key: "getButtonProps",
                value: function(e) {
                    return {
                        className: "o-btn opl-btn opl-btn--primary u-w-100",
                        accept: e,
                        type: e ? "primary" : "secondary",
                        onClick: this.props.onClickNext.bind(this, this.props.selectedDesignationNumber, this.props.selectedServiceInstanceId)
                    }
                }
            }, {
                key: "render",
                value: function() {
                    return g.default.createElement(s.default, {
                        id: this.modalId,
                        showClose: !0,
                        open: this.props.fbbServices && 0 < this.props.fbbServices.length,
                        size: "narrow"
                    }, g.default.createElement("div", {
                        className: "u-spacing-l u-spacing-top-l"
                    }, g.default.createElement("span", {
                        className: "h3"
                    }, this.props.descriptions.title || "Zdecyduj czy składane zamówienia ma być rozliczane w ramach faktury dla posiadanego już konta, czy nowego."), g.default.createElement("br", null)), g.default.createElement("div", {
                        className: "u-spacing-l"
                    }, g.default.createElement("span", null, this.props.descriptions.mainDescription || "Do faktury wskazanego przez ciebie konta, dołączone będą numery umieszczone na koszyku. Dołączenie wybranych numerówdo Twojego istniejącego konta sprawi, że co miesiąc będziesz opłacać tylko jeden rachunek, na którym wyszczególnione będą opłaty za wszystkie numery."), g.default.createElement("br", null)), !!this.props.fbbServices && 0 < this.props.fbbServices.length && this.renderFixAddressWithServices(this.props.fbbServices), g.default.createElement(i.OraSimpleRadio, this.getPropsForRadio("Zainstaluj nową usługę", "")), g.default.createElement("div", {
                        className: "l-row u-padding-top-m"
                    }, g.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-8 l-col-8 "
                    }), g.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-4 l-col-4 "
                    }, g.default.createElement(i.OraButton, this.getButtonProps(!1), this.props.descriptions.next || "Dalej"))))
                }
            }]), r
        }(g.Component),
        o = (0, t.connect)(function(e) {
            return {
                fbbServices: (0, n.getFbbServices)(e),
                selectedDesignationNumber: (0, n.getSelectedDesignationNumber)(e),
                selectedServiceInstanceId: (0, n.getSelectedServiceInstanceId)(e)
            }
        }, function(n) {
            return {
                selectedDesignationNumberAction: function(e) {
                    return n((0, r.setSelectedDesignationNumberAction)(e))
                },
                selectedServiceInstanceIdAction: function(e) {
                    return n((0, r.setSelectedServiceInstanceIdAction)(e))
                },
                onClickNext: function(e, t) {
                    n("false" != e ? (0, r.gotoFixDispatcher)(e, t) : (0, r.refreshFixCartWithoutFbbCheck)())
                },
                requestFBBServiceDataFilteredByWWT: function() {
                    return n((0, r.requestFBBServiceDataFilteredByWWT)())
                }
            }
        })(c);
    e.default = o
});
//# sourceMappingURL=FBBServicesModal.js.map