define(["exports", "react", "react-redux", "eshop/utils/DataLayerUtils", "eshop/modules/simfree/actions/comparator", "eshop/modules/simfree/selectors", "eshop/modules/configurator/selectors/filters", "eshop/modules/simfree/fetchComparatorConfigActionType", "../../../configurator/utils", "../../../configurator/selectors/metaData"], function(e, o, t, a, c, r, l, s, i, n) {
    "use strict";

    function u(o) {
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
    }), e.default = void 0, o = babelHelpers.interopRequireWildcard(o), a = babelHelpers.interopRequireDefault(a), s = babelHelpers.interopRequireDefault(s);
    var p = function(e) {
            babelHelpers.inherits(r, e);
            var t = u(r);

            function r(e) {
                return babelHelpers.classCallCheck(this, r), t.call(this, e)
            }
            return babelHelpers.createClass(r, [{
                key: "handleDeleteClick",
                value: function(e) {
                    this.props.updateComparatorConfig(e, this.props.comparatorUid)
                }
            }, {
                key: "removePrefix",
                value: function(e) {
                    return e ? e.split("/sklep").pop().split("/akcesoria").pop() : e
                }
            }, {
                key: "getProductUrl",
                value: function() {
                    a.default.pushComparatorDeviceDetails(this.props.device, this.props.selectedDevices), location.href = (0, i.getPagePrefixUrl)(this.props.marketContextPrefixUrl) + this.removePrefix(this.props.device.productPageUrl) + "?" + this.props.filtersUrl + "&selectedCategory=" + this.props.selectedCategory
                }
            }, {
                key: "render",
                value: function() {
                    var e = this;
                    return o.default.createElement("section", {
                        className: "opl-compare-products__section--box"
                    }, o.default.createElement("div", {
                        key: this.props.device.productId + this.props.index,
                        className: "opl-compare-products__section--box-item"
                    }, o.default.createElement("button", {
                        className: "g-icon g-icon--only g-icon--xs g-icon--close clear-content",
                        onClick: function() {
                            return e.handleDeleteClick(e.props.device.productId)
                        }
                    }, o.default.createElement("span", {
                        className: "u-acc-hide"
                    }, "Usuń")), o.default.createElement("div", {
                        className: "opl-feature-object opl-feature-object--zoom-in-zoom-out  opl-feature-object--phone u-margin-top"
                    }, o.default.createElement("a", {
                        onClick: function() {
                            return e.getProductUrl()
                        },
                        className: "opl-feature-object__content"
                    }, o.default.createElement("div", {
                        className: "opl-feature-object__inner-wrapper"
                    }, o.default.createElement("div", {
                        className: "opl-feature-object__inner"
                    }, o.default.createElement("img", {
                        src: this.props.device.imageUrl,
                        alt: this.props.device.productId + "_alt"
                    }))))), o.default.createElement("p", {
                        className: "u-font-bold u-text-center"
                    }, this.props.device.name)))
                }
            }]), r
        }(o.Component),
        f = (0, t.connect)(function(e) {
            return {
                selectedDevices: (0, r.getComparatorDevices)(e),
                comparatorConfig: (0, r.getComparatorConfig)(e),
                selectedCategory: (0, r.getSelectedCategory)(e),
                filtersUrl: (0, l.getFiltersUrl)(e),
                marketContextPrefixUrl: (0, n.getMarketContextPrefixUrl)(e)
            }
        }, function(r) {
            return {
                updateSelectedDevices: function(e) {
                    return r((0, c.updateComparatorDevicesList)(e))
                },
                updateComparatorConfig: function(e, t) {
                    return r((0, c.fetchComparatorConfig)(e, t, s.default.REMOVE_DEVICE))
                }
            }
        })(p);
    e.default = f
});
//# sourceMappingURL=ComparatorDeviceTab.js.map