define(["exports", "react-redux", "react", "eshop/modules/simfree/actions/comparator", "eshop/modules/simfree/selectors", "eshop/modules/configurator/selectors/filters", "eshop/modules/simfree/components/comparator/ComparatorAddDeviceModal", "eshop/modules/simfree/components/comparator/ComparatorErrorModal", "eshop/modules/configurator/selectors/metaData"], function(e, t, a, r, o, s, l, c, n) {
    "use strict";

    function p(o) {
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
    }), e.default = void 0, a = babelHelpers.interopRequireWildcard(a), l = babelHelpers.interopRequireDefault(l), c = babelHelpers.interopRequireDefault(c);
    var i = function(e) {
            babelHelpers.inherits(r, e);
            var t = p(r);

            function r(e) {
                return babelHelpers.classCallCheck(this, r), t.call(this, e)
            }
            return babelHelpers.createClass(r, [{
                key: "componentWillMount",
                value: function() {
                    this.props.fetchComparatorDevicesList()
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    this.checkIsComparatorCategory(this.props), this.loadModules()
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this.loadModules()
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(e) {
                    this.props.selectedCategory !== e.selectedCategory && this.checkIsComparatorCategory(e)
                }
            }, {
                key: "loadModules",
                value: function() {
                    null != document.getElementById("opl-comparator-chooser-component-content") && OPL.UI.initModules(document.getElementById("opl-comparator-chooser-component-content"))
                }
            }, {
                key: "checkIsComparatorCategory",
                value: function(t) {
                    var e = t.categories && 0 < t.categories.filter(function(e) {
                        return e === t.selectedCategory
                    }).length;
                    this.props.storeIsComparatorCategory(e)
                }
            }, {
                key: "getComparatorUrl",
                value: function() {
                    return this.props.marketContextPrefixUrl + this.props.comparatorPageUrl + "?" + this.props.filtersUrl + "&selectedCategory=" + this.props.selectedCategory
                }
            }, {
                key: "render",
                value: function() {
                    var o = this;
                    return a.default.createElement("div", {
                        id: "opl-comparator-chooser-component"
                    }, this.props.isComparatorCategory && this.props.comparatorDevices && 0 < this.props.comparatorDevices.length && a.default.createElement("div", {
                        id: "opl-comparator-chooser-component-content",
                        className: "l-row u-margin-top-l-xl"
                    }, a.default.createElement("div", {
                        className: "l-col l-col-12"
                    }, a.default.createElement("h2", {
                        className: "h3"
                    }, this.props.title), a.default.createElement("div", {
                        className: "opl-compare-products"
                    }, a.default.createElement(l.default, {
                        title: this.props.title,
                        trigger: "opl-compare-products__modal-trigger"
                    }), this.props.comparatorDevices && this.props.comparatorDevices.map(function(e, t) {
                        var r;
                        return r = t <= 1 ? "opl-compare-products__box u-margin-right-m u-small-no-margin-r" : "opl-compare-products__box u-large-margin-right-xxl", a.default.createElement("section", {
                            key: e.productId,
                            className: r
                        }, a.default.createElement("div", {
                            id: "box-item-" + e.productId,
                            className: "opl-compare-products__item g-gray1-bg",
                            "data-js-module": '[{"path":"common/modules/opl-ellipsis","conditions": "element:{seen}", "options":{"maxLength": "40", "smallMaxLength" : "15"}}]'
                        }, a.default.createElement("span", {
                            className: "opl-compare-products__item-btn g-icon g-icon--close",
                            role: "button",
                            onClick: function() {
                                return o.props.updateComparatorDevices(e)
                            }
                        }, a.default.createElement("span", {
                            className: "u-acc-hide"
                        }, "Usuń")), a.default.createElement("img", {
                            className: "opl-compare-products__item-img u-margin-right",
                            src: e.imageUrl,
                            alt: ""
                        }), a.default.createElement("p", {
                            className: "opl-compare-products__item-name ellipsis-item u-font-bold"
                        }, e.name)))
                    }), babelHelpers.toConsumableArray(Array(3 - this.props.comparatorDevices.length)).map(function(e, t) {
                        var r;
                        return r = 2 === o.props.comparatorDevices.length || 1 === o.props.comparatorDevices.length && 1 === t ? "opl-compare-products__box u-large-margin-right-xxl" : "opl-compare-products__box u-margin-right-m u-small-no-margin-r", a.default.createElement("section", {
                            key: "empty" + t,
                            className: r
                        }, a.default.createElement("a", {
                            id: "opl-compare-products__modal-trigger",
                            className: "opl-btn--box o-btn o-modal__trigger",
                            href: "#opl-compare-products__modal",
                            "data-js-module": "core/modules/modal",
                            onClick: function() {
                                return o.props.fetchProducers()
                            }
                        }, a.default.createElement("span", {
                            className: "u-spacing-right g-icon--xs-s g-icon g-icon--plus"
                        }), "Dodaj", a.default.createElement("br", null), "urządzenie"))
                    }), a.default.createElement("button", {
                        disabled: this.props.comparatorDevices.length < 2,
                        onClick: function() {
                            return o.props.redirectToComparator(o.getComparatorUrl())
                        },
                        className: "opl-compare-products__btn opl-btn opl-btn--primary o-btn u-small-margin-top-l u-medium-margin-top-l"
                    }, a.default.createElement("span", null, "Porównaj"))))), a.default.createElement(c.default, {
                        modalCategoryErrorMessage: this.props.modalCategoryErrorMessage,
                        modalDevicesLimitErrorMessage: this.props.modalDevicesLimitErrorMessage,
                        modalLeftButtonText: this.props.modalLeftButtonText,
                        modalRightButtonText: this.props.modalRightButtonText,
                        comparatorPageUrl: this.getComparatorUrl()
                    }))
                }
            }]), r
        }(a.Component),
        m = (0, t.connect)(function(e) {
            return {
                comparatorDevices: (0, o.getComparatorDevices)(e),
                selectedCategory: (0, o.getSelectedCategory)(e),
                isComparatorCategory: (0, o.getIsComparatorCategory)(e),
                filtersUrl: (0, s.getFiltersUrl)(e),
                marketContextPrefixUrl: (0, n.getMarketContextPrefixUrl)(e)
            }
        }, function(t) {
            return {
                redirectToComparator: function(e) {
                    return t((0, r.redirectToComparator)(e))
                },
                fetchComparatorDevicesList: function() {
                    return t((0, r.fetchComparatorDevicesList)())
                },
                updateComparatorDevices: function(e) {
                    return t((0, r.updateComparatorDevicesList)(e))
                },
                storeIsComparatorCategory: function(e) {
                    return t((0, r.storeIsComparatorCategory)(e))
                },
                fetchProducers: function() {
                    return t((0, r.fetchProducers)())
                }
            }
        })(i);
    e.default = m
});
//# sourceMappingURL=ComparatorChooserComponent.js.map