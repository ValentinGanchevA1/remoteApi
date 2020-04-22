define(["exports", "react", "react-redux", "eshop/modules/simfree/actions/comparator", "eshop/modules/simfree/selectors", "eshop/modules/simfree/fetchComparatorConfigActionType", "eshop/components/OraCommonComponents"], function(e, r, t, n, o, a, l) {
    "use strict";

    function s(r) {
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
                var o = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, o)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, r = babelHelpers.interopRequireWildcard(r), a = babelHelpers.interopRequireDefault(a);
    var i = function(e) {
            babelHelpers.inherits(o, e);
            var t = s(o);

            function o(e) {
                return babelHelpers.classCallCheck(this, o), t.call(this, e)
            }
            return babelHelpers.createClass(o, [{
                key: "componentDidMount",
                value: function() {
                    this.initModules()
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this.initModules()
                }
            }, {
                key: "initModules",
                value: function() {
                    this.componentNeedInitialization("opl-compare-products__modal-datajs") && OPL.UI.initModules(document.getElementById("opl-compare-products__modal-datajs"))
                }
            }, {
                key: "componentNeedInitialization",
                value: function(e) {
                    return null != document.getElementById(e) && !document.getElementById(e).hasAttribute("data-js-processed")
                }
            }, {
                key: "getProducersNames",
                value: function() {
                    return this.props.producers.map(function(e) {
                        return {
                            value: e,
                            description: e
                        }
                    })
                }
            }, {
                key: "getModelsForBrand",
                value: function() {
                    return this.props.modelsForBrand.map(function(e) {
                        return {
                            value: e.productId,
                            description: e.name
                        }
                    })
                }
            }, {
                key: "handleProducerChange",
                value: function(e) {
                    var t = e.value;
                    this.props.setSelectedProducer(t), this.props.setSelectedModel("")
                }
            }, {
                key: "handleModelChange",
                value: function(e) {
                    var t = e.value;
                    this.props.setSelectedModel(t)
                }
            }, {
                key: "handleCompareClick",
                value: function() {
                    null != this.props.comparatorComponentUid ? this.props.fetchComparatorConfig(this.props.selectedModel, this.props.comparatorComponentUid) : this.props.updateComparatorDevicesListByUid(this.props.selectedModel), this.props.setSelectedProducer(""), this.props.setSelectedModel(""), OPL.UI.fire(OPL.UI.EVENTS.modules.modal.close, "", this.props.trigger)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this;
                    return r.default.createElement("div", {
                        className: "opl-compare-products__modal u-hide--soft o-modal--small",
                        id: "opl-compare-products__modal",
                        role: "dialog",
                        "aria-modal": "true"
                    }, r.default.createElement("div", {
                        className: "opl-compare-products__modal-content"
                    }, r.default.createElement("p", {
                        className: "u-acc-hide",
                        id: "opl-compare-products__modal-title"
                    }, this.props.title), r.default.createElement("h2", {
                        className: "u-padding-top-l u-margin-xl"
                    }, "Dodaj telefon do porównania"), r.default.createElement("div", {
                        id: "opl-compare-products__modal-datajs",
                        className: "o-select",
                        style: {
                            width: "100%"
                        }
                    }, r.default.createElement(l.OraCmpSelect, {
                        id: "selectBrand" + this.props.index,
                        className: "u-margin-l",
                        emptyOption: {
                            value: "",
                            description: "Wybierz markę"
                        },
                        withEmptyOption: !0,
                        selected: this.props.selectedProducer,
                        ariaLabel: "Wybierz marke",
                        onChange: this.handleProducerChange.bind(this),
                        options: this.getProducersNames()
                    }), r.default.createElement(l.OraCmpSelect, {
                        id: "selectModel" + this.props.index,
                        className: "u-margin-xl",
                        disabled: 0 === this.props.modelsForBrand.length,
                        emptyOption: {
                            value: "",
                            description: "Wybierz model"
                        },
                        withEmptyOption: !0,
                        selected: this.props.selectedModel,
                        ariaLabel: "Wybierz model",
                        onChange: this.handleModelChange.bind(this),
                        options: this.getModelsForBrand()
                    })), r.default.createElement("button", {
                        disabled: 0 === this.props.selectedModel.length,
                        onClick: function() {
                            return e.handleCompareClick()
                        },
                        className: "opl-compare-products__btn opl-btn opl-btn--primary o-btn"
                    }, r.default.createElement("span", null, "Porównaj"))))
                }
            }]), o
        }(r.Component),
        d = (0, t.connect)(function(e) {
            return {
                producers: (0, o.getProducers)(e),
                selectedProducer: (0, o.getSelectedComparatorProducer)(e),
                modelsForBrand: (0, o.getModelsForBrand)(e),
                selectedModel: (0, o.getSelectedComparatorModel)(e)
            }
        }, function(o) {
            return {
                setSelectedModel: function(e) {
                    return o((0, n.setSelectedModel)(e))
                },
                setSelectedProducer: function(e) {
                    return o((0, n.setSelectedProducer)(e))
                },
                fetchComparatorConfig: function(e, t) {
                    return o((0, n.fetchComparatorConfig)(e, t, a.default.ADD_DEVICE))
                },
                updateComparatorDevicesListByUid: function(e) {
                    return o((0, n.updateComparatorDevicesListByUid)(e))
                }
            }
        })(i);
    e.default = d
});
//# sourceMappingURL=ComparatorAddDeviceModal.js.map