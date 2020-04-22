define(["exports", "react", "react-redux", "eshop/modules/simfree/actions/comparator", "eshop/modules/simfree/selectors", "./ComparatorSectionComponent", "./ComparatorDeviceTab", "./ComparatorEmptyDeviceTab", "eshop/modules/simfree/components/comparator/ComparatorAddDeviceModal", "eshop/modules/simfree/fetchComparatorConfigActionType", "eshop/modules/configurator/selectors/metaData", "eshop/modules/configurator/actions/filters"], function(e, a, t, o, r, n, s, c, i, l, p, u) {
    "use strict";

    function f(o) {
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
    }), e.default = void 0, a = babelHelpers.interopRequireWildcard(a), n = babelHelpers.interopRequireDefault(n), s = babelHelpers.interopRequireDefault(s), c = babelHelpers.interopRequireDefault(c), i = babelHelpers.interopRequireDefault(i), l = babelHelpers.interopRequireDefault(l);
    var m = function(e) {
            babelHelpers.inherits(o, e);
            var r = f(o);

            function o(e) {
                var t;
                return babelHelpers.classCallCheck(this, o), (t = r.call(this, e)).state = {
                    markDiff: !1
                }, t.props.setMarketContext(t.props.marketContext), t
            }
            return babelHelpers.createClass(o, [{
                key: "componentDidMount",
                value: function() {
                    this.props.getDeviceProducers(), this.props.getComparatorConfig("", this.props.component)
                }
            }, {
                key: "handleMarkDifferences",
                value: function() {
                    this.state.markDiff ? this.setState({
                        markDiff: !1
                    }) : this.setState({
                        markDiff: !0
                    })
                }
            }, {
                key: "renderDevicesHeader",
                value: function() {
                    for (var r = this, e = [], t = 0; t < 3 - this.props.comparatorDevices.length; t++) e.push(a.default.createElement(c.default, {
                        producers: this.props.producers,
                        index: t,
                        key: "deviceTab" + t,
                        comparatorUid: this.props.component,
                        compareDevices: this.props.devicesComparison
                    }));
                    return a.default.createElement("div", {
                        className: "l-full-row"
                    }, a.default.createElement("div", {
                        className: "l-page-row"
                    }, a.default.createElement("a", {
                        className: "u-inline-block u-text-decoration-none u-padding-top-m",
                        href: this.props.marketContextPrefixUrl + this.props.goBackToShopUrl
                    }, this.props.goBackToShop), a.default.createElement("h2", {
                        className: "h1 u-padding-top-l-xl"
                    }, this.props.devicesComparison), a.default.createElement("div", {
                        className: "l-row"
                    }, a.default.createElement("div", {
                        className: "l-col l-col-12  opl-compare-products__section u-margin-l"
                    }, this.props.comparatorDevices && this.props.comparatorDevices.map(function(e, t) {
                        return a.default.createElement(s.default, {
                            device: e,
                            index: t,
                            key: "deviceTab" + t,
                            comparatorUid: r.props.component
                        })
                    }), e)), 0 < this.props.comparatorDevices.length ? a.default.createElement("label", {
                        className: "opl-checkbox o-checkbox u-margin-l-xl"
                    }, a.default.createElement("input", {
                        type: "checkbox",
                        onChange: this.handleMarkDifferences.bind(this)
                    }), a.default.createElement("span", {
                        className: "o-ci"
                    }), a.default.createElement("span", {
                        className: "o-ci-label"
                    }, this.props.markDifferences)) : null))
                }
            }, {
                key: "renderComparatorConfig",
                value: function() {
                    var r = this;
                    return a.default.createElement("div", {
                        id: "comparator-expander-parent",
                        className: "l-full-row u-margin-xxl"
                    }, a.default.createElement("div", {
                        className: "l-page-row"
                    }, a.default.createElement("div", {
                        className: "o-separator g-gray4-bgc"
                    }), this.props.comparatorConfig.comparatorSectionDTOList && a.default.createElement("div", {
                        id: "comparator-expander",
                        "data-js-module": "common/modules/opl-expander",
                        role: "tablist",
                        "data-js-options": '{"triggerSelector":".opl-section__expander-trigger","contentSelector":".opl-section__content","parentClass":"opl-section--expander"}'
                    }, this.props.comparatorConfig.comparatorSectionDTOList.map(function(e, t) {
                        return a.default.createElement(n.default, {
                            section: e,
                            idx: t,
                            markDiff: r.state.markDiff
                        })
                    }))))
                }
            }, {
                key: "render",
                value: function() {
                    return a.default.createElement("div", null, this.renderDevicesHeader(), this.renderComparatorConfig(), a.default.createElement(i.default, {
                        comparatorDevices: this.props.producers
                    }))
                }
            }]), o
        }(a.Component),
        d = (0, t.connect)(function(e) {
            return {
                comparatorConfig: (0, r.getComparatorConfig)(e),
                comparatorDevices: (0, r.getComparatorDevices)(e),
                producers: (0, r.getProducers)(e),
                marketContextPrefixUrl: (0, p.getMarketContextPrefixUrl)(e)
            }
        }, function(r) {
            return {
                setMarketContext: function(e) {
                    return r((0, u.setMarketContext)(e))
                },
                getComparatorConfig: function(e, t) {
                    return r((0, o.fetchComparatorConfig)(e, t, l.default.VISIT_PAGE))
                },
                getDeviceProducers: function() {
                    return r((0, o.fetchProducers)())
                },
                fetchComparatorDevices: function() {
                    return r((0, o.fetchComparatorDevicesList)())
                }
            }
        })(m);
    e.default = d
});
//# sourceMappingURL=OplComparatorMainComponent.js.map