define(["exports", "react", "eshop/modules/simfree/actions/app", "eshop/modules/simfree/selectors", "react-redux"], function(e, l, t, r, a) {
    "use strict";

    function o(l) {
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
                var r = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, r)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var c = function(e) {
            babelHelpers.inherits(r, e);
            var t = o(r);

            function r(e) {
                return babelHelpers.classCallCheck(this, r), t.call(this, e)
            }
            return babelHelpers.createClass(r, [{
                key: "componentDidMount",
                value: function() {
                    this.props.fetchStorageCapacityForProduct()
                }
            }, {
                key: "setUrlOnClickAction",
                value: function(e) {
                    e && (window.location = e)
                }
            }, {
                key: "isProductChosen",
                value: function(e) {
                    return e === this.props.selectedBaseDeviceCode
                }
            }, {
                key: "render",
                value: function() {
                    var t = this;
                    return this.props.productStorageCapacity && 0 < this.props.productStorageCapacity.length ? l.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-8 l-col-6  u-small-padding-l u-medium-padding-left-l u-small-padding-left-l u-medium-padding-right-l u-small-padding-right-l"
                    }, l.default.createElement("p", null, "Pojemność:"), l.default.createElement("fieldset", null, l.default.createElement("div", {
                        className: "opl-chooser"
                    }, l.default.createElement("legend", {
                        className: "u-acc-hide"
                    }, "Pojemność telefonu"), this.props.productStorageCapacity.map(function(e) {
                        return l.default.createElement("label", {
                            className: "opl-chooser__item"
                        }, l.default.createElement("input", {
                            type: "radio",
                            name: "capacity",
                            value: e.storageCapacity,
                            key: e.id,
                            onClick: function() {
                                return t.setUrlOnClickAction(e.url)
                            },
                            defaultChecked: t.isProductChosen(e.id)
                        }), l.default.createElement("div", {
                            className: "o-ci u-box-shadow"
                        }, l.default.createElement("span", null, e.storageCapacity)))
                    }))), l.default.createElement("p", null)) : null
                }
            }]), r
        }((l = babelHelpers.interopRequireDefault(l)).default.Component),
        n = (0, a.connect)(function(e) {
            return {
                productStorageCapacity: (0, r.getStorageCapacityForProduct)(e),
                selectedBaseDeviceCode: (0, r.getSelectedBaseDeviceCode)(e)
            }
        }, function(e) {
            return {
                fetchStorageCapacityForProduct: function() {
                    return e((0, t.fetchStorageCapacityForProduct)())
                }
            }
        })(c);
    e.default = n
});
//# sourceMappingURL=ProductStorageCapacityComponent.js.map