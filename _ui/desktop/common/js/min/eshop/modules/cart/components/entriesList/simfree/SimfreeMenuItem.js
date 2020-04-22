define(["exports", "react", "prop-types", "react-redux", "eshop/modules/simfree/actions/app", "eshop/modules/cart/components/MenuItem"], function(e, s, t, r, n, i) {
    "use strict";

    function o(s) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(s);
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
    }), e.default = void 0, s = babelHelpers.interopRequireWildcard(s), i = babelHelpers.interopRequireDefault(i);
    var p = function(e) {
            babelHelpers.inherits(r, e);
            var t = o(r);

            function r(e) {
                return babelHelpers.classCallCheck(this, r), t.call(this, e)
            }
            return babelHelpers.createClass(r, [{
                key: "itemClickedHandler",
                value: function() {
                    this.props.setOfferType()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this;
                    return s.default.createElement(i.default, babelHelpers.extends({
                        key: this.props.label,
                        addItemIcon: this.props.addItemIcon
                    }, this.props, {
                        entries: this.props.entries,
                        itemClickedHandler: function() {
                            return e.itemClickedHandler()
                        }
                    }))
                }
            }]), r
        }(s.Component),
        l = (0, r.connect)(null, function(e) {
            return {
                setOfferType: function() {
                    return e((0, n.setSimfreeProcessData)())
                }
            }
        })(p);
    e.default = l, p.propTypes = {
        icon: t.PropTypes.string.isRequired,
        label: t.PropTypes.string.isRequired,
        link: t.PropTypes.string.isRequired,
        availabilityRestrictions: t.PropTypes.arrayOf(t.PropTypes.shape({
            menuItemType: t.PropTypes.string,
            cartBundleNumberLimit: t.PropTypes.oneOfType([t.PropTypes.string, t.PropTypes.number])
        })).isRequired,
        addItemIcon: t.PropTypes.string.isRequired,
        type: t.PropTypes.string,
        entries: t.PropTypes.arrayOf(t.PropTypes.object)
    }
});
//# sourceMappingURL=SimfreeMenuItem.js.map