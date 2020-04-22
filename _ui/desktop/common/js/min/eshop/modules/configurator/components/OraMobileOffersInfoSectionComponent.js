define(["exports", "react", "react-redux", "eshop/modules/configurator/selectors/filters"], function(e, n, t, r) {
    "use strict";

    function l(n) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(n);
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
    var s = function(e) {
            babelHelpers.inherits(r, e);
            var t = l(r);

            function r(e) {
                return babelHelpers.classCallCheck(this, r), t.call(this, e)
            }
            return babelHelpers.createClass(r, [{
                key: "render",
                value: function() {
                    var e = this.props.process,
                        t = this.props.infoSections[e];
                    return n.default.createElement("div", null, this.props.descriptions.headerValue ? n.default.createElement("div", {
                        dangerouslySetInnerHTML: {
                            __html: this.props.descriptions.headerValue
                        }
                    }) : null, n.default.createElement("div", {
                        dangerouslySetInnerHTML: {
                            __html: t
                        }
                    }))
                }
            }]), r
        }((n = babelHelpers.interopRequireWildcard(n)).Component),
        o = (0, t.connect)(function(e) {
            return {
                process: (0, r.getSelectedProcessTypeValue)(e)
            }
        }, function() {
            return {}
        })(s);
    e.default = o
});
//# sourceMappingURL=OraMobileOffersInfoSectionComponent.js.map