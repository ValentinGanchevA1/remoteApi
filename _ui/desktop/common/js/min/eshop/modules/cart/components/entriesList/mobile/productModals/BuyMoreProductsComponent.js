define(["exports", "react", "prop-types"], function(e, t, l) {
    "use strict";

    function r(a) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(a);
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
                var l = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, l)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, t = babelHelpers.interopRequireWildcard(t), l = babelHelpers.interopRequireDefault(l);
    var a = function(e) {
        babelHelpers.inherits(a, e);
        var l = r(a);

        function a(e) {
            var t;
            return babelHelpers.classCallCheck(this, a), (t = l.call(this, e)).addButtonClicked = t.addButtonClicked.bind(babelHelpers.assertThisInitialized(t)), t
        }
        return babelHelpers.createClass(a, [{
            key: "addButtonClicked",
            value: function(e) {
                e.preventDefault(), this.props.addButtonClicked()
            }
        }, {
            key: "render",
            value: function() {
                return t.default.createElement("a", {
                    href: "#",
                    "aria-label": this.props.buyMoreLabel,
                    onClick: this.addButtonClicked,
                    className: this.props.className
                }, t.default.createElement("div", {
                    className: "u-position-relative u-box-shadow-hover u-box-shadow--s u-margin-top-l g-white1-bg"
                }, t.default.createElement("div", {
                    className: "u-padding-left-l u-padding-right-l "
                }, t.default.createElement("table", {
                    className: "u-table-fixed" + (this.props.topBorder ? " u-large-border-top u-medium-border-top" : "")
                }, t.default.createElement("tbody", null, t.default.createElement("tr", null, t.default.createElement("td", {
                    className: "opl-checkout__icon__cell"
                }, t.default.createElement("span", {
                    className: "g-icon g-icon--only  g-icon--s g-icon--" + this.props.icon
                })), t.default.createElement("td", {
                    className: "u-padding-top-l u-padding-l u-padding-right-l u-font-bold"
                }, this.props.buyMoreLabel), t.default.createElement("td", {
                    className: "opl-checkout__button__cell u-padding-top-l u-padding-l"
                }, t.default.createElement("div", {
                    className: "opl-product-addlink u-right u-small-right"
                }))))))))
            }
        }]), a
    }(t.Component);
    (e.default = a).propTypes = {
        buyMoreLabel: l.default.string,
        icon: l.default.string,
        addButtonClicked: l.default.func
    }, a.defaultProps = {
        buyMoreLabel: "Dobierz produkt",
        icon: "machines",
        topBorder: !1
    }
});
//# sourceMappingURL=BuyMoreProductsComponent.js.map