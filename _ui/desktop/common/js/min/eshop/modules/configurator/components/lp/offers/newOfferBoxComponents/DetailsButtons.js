define(["exports", "react", "eshop/modules/simfree/components/filter/OfferDetailsPopUp"], function(e, n, t) {
    "use strict";

    function o(n) {
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
    }), e.DetailsButtons = void 0, n = babelHelpers.interopRequireWildcard(n), t = babelHelpers.interopRequireDefault(t);
    var r = function(e) {
        babelHelpers.inherits(r, e);
        var t = o(r);

        function r() {
            return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
        }
        return babelHelpers.createClass(r, [{
            key: "isClientContext",
            value: function() {
                return this.props.clientContext || !!this.props.contractRole
            }
        }, {
            key: "render",
            value: function() {
                return n.default.createElement("div", {
                    className: "u-padding-l u-padding-top-l"
                }, n.default.createElement(i, babelHelpers.extends({}, this.props.proposition, {
                    proposition: this.props.proposition,
                    descriptions: this.props.descriptions,
                    clientContext: this.isClientContext()
                })))
            }
        }]), r
    }(n.default.PureComponent);
    e.DetailsButtons = r;
    var i = function(e) {
            return n.default.createElement(t.default, {
                labelText: "Szczegóły",
                header: s(e.descriptions).header,
                propositionName: e.rateplanName,
                details: e.longDescriptionTable,
                proposition: e.proposition,
                clientContext: e.clientContext
            })
        },
        s = function(e) {
            return {
                close: e && e["details.close"] || "def:Zamknij",
                header: e && e["details.header"] || "def:Szczegóły oferty",
                select: e && e["details.select"] || "def:Wybieram ofertę bez telefonu"
            }
        }
});
//# sourceMappingURL=DetailsButtons.js.map