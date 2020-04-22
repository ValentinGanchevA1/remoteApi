define(["exports", "react", "react-redux", "./VoipVariantComponent", "./VoipNumbersComponent", "../actions/voip", "../selectors/root", "../selectors/voip"], function(e, n, t, o, i, r, u, s) {
    "use strict";

    function c(n) {
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
    }), e.default = void 0, n = babelHelpers.interopRequireWildcard(n), o = babelHelpers.interopRequireDefault(o), i = babelHelpers.interopRequireDefault(i);
    var l = function(e) {
            babelHelpers.inherits(r, e);
            var t = c(r);

            function r(e) {
                return babelHelpers.classCallCheck(this, r), t.call(this, e)
            }
            return babelHelpers.createClass(r, [{
                key: "componentDidMount",
                value: function() {
                    this.props.mountVoipModalComponent()
                }
            }, {
                key: "getDerivedStateFromProps",
                value: function(e) {
                    (e.cityId && this.props.cityId !== e.cityId || this.props.designationNumber !== e.designationNumber) && this.props.fetchVoipNumbers(e.cityId)
                }
            }, {
                key: "render",
                value: function() {
                    return n.default.createElement("div", null, n.default.createElement(o.default, {
                        descriptions: this.props.descriptions
                    }), n.default.createElement(i.default, {
                        descriptions: this.props.descriptions
                    }))
                }
            }]), r
        }(n.Component),
        p = (0, t.connect)(function(e) {
            return {
                cityId: (0, u.getWwtCityId)(e),
                designationNumber: (0, s.getDesignationNumber)(e),
                numbersFetched: (0, s.getNumbersFetched)(e)
            }
        }, function(t) {
            return {
                fetchVoipNumbers: function(e) {
                    return t((0, r.fetchingVoipNumbersWithMultiCallBlock)(e))
                },
                mountVoipModalComponent: function() {
                    return t((0, r.mountVoipModalComponent)())
                }
            }
        })(l);
    e.default = p
});
//# sourceMappingURL=OraFixVoipModalComponent.js.map