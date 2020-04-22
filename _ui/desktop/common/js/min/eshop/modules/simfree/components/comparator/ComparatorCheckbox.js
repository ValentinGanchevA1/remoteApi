define(["exports", "react-redux", "react", "eshop/modules/simfree/actions/comparator", "eshop/modules/simfree/selectors"], function(e, t, o, r, a) {
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
    }), e.default = void 0;
    var n = function(e) {
            babelHelpers.inherits(r, e);
            var t = c(r);

            function r(e) {
                return babelHelpers.classCallCheck(this, r), t.call(this, e)
            }
            return babelHelpers.createClass(r, [{
                key: "handleCheckboxChange",
                value: function() {
                    this.props.updateComparatorDevices({
                        name: this.props.product.name,
                        productId: this.props.product.productId,
                        imageUrl: this.props.product.variantList[0].imageUrl,
                        productPageUrl: this.getProductUrl(),
                        category: this.props.selectedCategory
                    })
                }
            }, {
                key: "getProductUrl",
                value: function() {
                    return null != this.props.product.variantList[0].productUrl ? this.props.product.variantList[0].productUrl : window.location.pathname
                }
            }, {
                key: "isProductSet",
                value: function() {
                    return this.props.product.productId && this.props.product.productId.includes("PROD_SET")
                }
            }, {
                key: "deviceAdded",
                value: function() {
                    var t = this;
                    return 0 < this.props.comparatorDevices.filter(function(e) {
                        return e.productId === t.props.product.productId
                    }).length
                }
            }, {
                key: "render",
                value: function() {
                    var t = this;
                    return this.props.isComparatorCategory && !this.isProductSet() ? o.default.createElement("div", null, o.default.createElement("label", {
                        className: "o-checkbox opl-checkbox u-small-hide"
                    }, o.default.createElement("input", {
                        type: "checkbox",
                        disabled: !this.deviceAdded() && 2 < this.props.comparatorDevices.length,
                        checked: this.deviceAdded(),
                        onChange: function(e) {
                            t.handleCheckboxChange(e)
                        }
                    }), o.default.createElement("span", {
                        className: "o-ci"
                    }), o.default.createElement("span", {
                        className: "o-ci-label"
                    }, "Porównaj")), o.default.createElement("label", {
                        className: "o-checkbox opl-checkbox u-medium-hide u-large-hide"
                    }, o.default.createElement("input", {
                        type: "checkbox",
                        disabled: !this.deviceAdded() && 1 < this.props.comparatorDevices.length,
                        checked: this.deviceAdded(),
                        onChange: function(e) {
                            t.handleCheckboxChange(e)
                        }
                    }), o.default.createElement("span", {
                        className: "o-ci"
                    }), o.default.createElement("span", {
                        className: "o-ci-label"
                    }, "Porównaj"))) : null
                }
            }]), r
        }((o = babelHelpers.interopRequireWildcard(o)).Component),
        s = (0, t.connect)(function(e) {
            return {
                comparatorDevices: (0, a.getComparatorDevices)(e),
                categories: (0, a.getProductsTrees)(e),
                selectedCategory: (0, a.getSelectedCategory)(e),
                isComparatorCategory: (0, a.getIsComparatorCategory)(e)
            }
        }, function(t) {
            return {
                updateComparatorDevices: function(e) {
                    return t((0, r.updateComparatorDevicesList)(e))
                }
            }
        })(n);
    e.default = s
});
//# sourceMappingURL=ComparatorCheckbox.js.map