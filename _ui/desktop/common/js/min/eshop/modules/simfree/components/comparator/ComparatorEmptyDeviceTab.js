define(["exports", "react", "react-redux", "eshop/modules/simfree/actions/comparator", "eshop/modules/simfree/selectors", "../../../../components/OraCommonComponents", "./ComparatorAddDeviceModal", "eshop/modules/simfree/fetchComparatorConfigActionType"], function(e, o, t, a, r, l, s, n) {
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
    }), e.default = void 0, o = babelHelpers.interopRequireWildcard(o), s = babelHelpers.interopRequireDefault(s), n = babelHelpers.interopRequireDefault(n);
    var d = function(e) {
            babelHelpers.inherits(r, e);
            var t = c(r);

            function r(e) {
                return babelHelpers.classCallCheck(this, r), t.call(this, e)
            }
            return babelHelpers.createClass(r, [{
                key: "componentDidMount",
                value: function() {
                    null != document.getElementById("comparator-section0") && OPL.UI.initModules(document.getElementById("comparator-section0"))
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
                key: "handleProducerChange",
                value: function(e) {
                    var t = e.value;
                    this.props.setSelectedModel(""), this.props.setSelectedProducer(t)
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
                key: "updateSelectedModel",
                value: function(e) {
                    var t = e.value;
                    this.props.updateComparatorConfig(t, this.props.comparatorUid), this.props.setSelectedProducer(""), this.props.setSelectedModel(""), this.props.clearModelsForBrand(), this.props.fetchProducers()
                }
            }, {
                key: "render",
                value: function() {
                    return o.default.createElement("section", {
                        id: "comparator-section" + this.props.index,
                        className: "opl-compare-products__section--box"
                    }, o.default.createElement("div", {
                        className: "opl-compare-products__section--select-box"
                    }, o.default.createElement("div", {
                        className: "opl-compare-products__section--select-box-desktop"
                    }, o.default.createElement("span", {
                        className: "g-icon g-icon--device-smartphone g-icon--xxl u-padding-top-m u-padding-m"
                    }), o.default.createElement("div", {
                        className: "o-floating-label o-select u-spacing-l",
                        "data-js-module": "core/modules/floating-label",
                        style: {
                            width: "100%"
                        }
                    }, o.default.createElement(l.OraCmpSelect, {
                        id: "selectBrand" + this.props.index,
                        className: "u-small-spacing-l u-padding",
                        disabled: 0 != this.props.index,
                        emptyOption: {
                            value: "",
                            description: "Wybierz marke"
                        },
                        withEmptyOption: !0,
                        selected: 0 == this.props.index ? this.props.selectedProducer : "",
                        ariaLabel: "Wybierz marke",
                        onChange: this.handleProducerChange.bind(this),
                        options: this.getProducersNames()
                    }), o.default.createElement(l.OraCmpSelect, {
                        id: "selectModel" + this.props.index,
                        className: "u-small-spacing-l u-medium-spacing-l",
                        disabled: 0 != this.props.index || 0 == this.props.modelsForBrand.length,
                        emptyOption: {
                            value: "",
                            description: "Wybierz model"
                        },
                        withEmptyOption: !0,
                        selected: 0 == this.props.index ? this.props.selectedModel : "",
                        ariaLabel: "Wybierz model",
                        onChange: this.updateSelectedModel.bind(this),
                        options: this.getModelsForBrand()
                    }))), o.default.createElement("div", {
                        className: "opl-compare-products__section--select-box-mobile"
                    }, o.default.createElement(s.default, {
                        title: "Porównaj",
                        trigger: "opl-comparator__modal-trigger",
                        comparatorComponentUid: this.props.comparatorUid
                    }), o.default.createElement("a", {
                        id: "opl-comparator__modal-trigger",
                        className: "opl-btn--box o-btn o-modal__trigger",
                        href: "#opl-compare-products__modal",
                        "data-js-module": "core/modules/modal"
                    }, o.default.createElement("span", {
                        className: "g-icon--xs g-icon g-icon--plus"
                    }), o.default.createElement("span", null), "Dodaj", o.default.createElement("br", null), "urządzenie"))))
                }
            }]), r
        }(o.Component),
        i = (0, t.connect)(function(e) {
            return {
                selectedProducer: (0, r.getSelectedComparatorProducer)(e),
                selectedModel: (0, r.getSelectedComparatorModel)(e),
                selectedDevices: (0, r.getComparatorDevices)(e),
                producers: (0, r.getProducers)(e),
                modelsForBrand: (0, r.getModelsForBrand)(e)
            }
        }, function(r) {
            return {
                setSelectedProducer: function(e) {
                    return r((0, a.setSelectedProducer)(e))
                },
                setSelectedModel: function(e) {
                    return r((0, a.setSelectedModel)(e))
                },
                updateComparatorConfig: function(e, t) {
                    return r((0, a.fetchComparatorConfig)(e, t, n.default.ADD_DEVICE))
                },
                clearModelsForBrand: function() {
                    return r((0, a.clearModelsForBrand)())
                },
                fetchProducers: function() {
                    return r((0, a.fetchProducers)())
                }
            }
        })(d);
    e.default = i
});
//# sourceMappingURL=ComparatorEmptyDeviceTab.js.map