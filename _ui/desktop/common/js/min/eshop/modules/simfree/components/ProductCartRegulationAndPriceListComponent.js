define(["exports", "react", "react-redux", "eshop/modules/configurator/selectors/filters"], function(e, r, t, n) {
    "use strict";

    function o(r) {
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
    }), e.default = void 0;
    var l = function(e) {
            babelHelpers.inherits(n, e);
            var t = o(n);

            function n(e) {
                return babelHelpers.classCallCheck(this, n), t.call(this, e)
            }
            return babelHelpers.createClass(n, [{
                key: "componentDidMount",
                value: function() {
                    this._loadModules()
                }
            }, {
                key: "toHTML",
                value: function(e) {
                    return {
                        __html: e
                    }
                }
            }, {
                key: "render",
                value: function() {
                    return "SIMFREE" !== this.props.selectedOfferType ? null : r.default.createElement("div", {
                        className: "regulation-price-list"
                    }, r.default.createElement("div", {
                        dangerouslySetInnerHTML: this.toHTML(this.props.content)
                    }))
                }
            }, {
                key: "_loadModules",
                value: function() {
                    document.getElementById("opl-expander-regulation-section") && OPL.UI.loadModules(document.getElementById("opl-expander-regulation-section"), [{
                        path: "core/modules/expander",
                        options: {
                            triggerSelector: ".opl-section__expander-trigger",
                            contentSelector: ".opl-section__content",
                            parentClass: "opl-section--togglable"
                        }
                    }])
                }
            }]), n
        }((r = babelHelpers.interopRequireDefault(r)).default.Component),
        c = (0, t.connect)(function(e) {
            return {
                selectedOfferType: (0, n.getSelectedOfferType)(e)
            }
        }, function() {
            return {}
        })(l);
    e.default = c
});
//# sourceMappingURL=ProductCartRegulationAndPriceListComponent.js.map