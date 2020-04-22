define(["exports", "react-redux", "react", "prop-types", "eshop/modules/auth/selectors/authorization", "eshop/modules/checkout/selectors", "eshop/modules/checkout/actions/app", "eshop/modules/cart/actions/cart", "eshop/components/OraCommonComponents"], function(e, t, l, r, a, n, o, s, u) {
    "use strict";

    function c(l) {
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
    }), e.default = void 0, l = babelHelpers.interopRequireWildcard(l), r = babelHelpers.interopRequireDefault(r);
    var i = function(e) {
        babelHelpers.inherits(r, e);
        var t = c(r);

        function r() {
            return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
        }
        return babelHelpers.createClass(r, [{
            key: "renderInfo",
            value: function() {
                return l.default.createElement("span", {
                    dangerouslySetInnerHTML: {
                        __html: this.props.text || this.props.defaultText
                    }
                })
            }
        }, {
            key: "getPrimaryButtonText",
            value: function() {
                return this.props.buttonText || this.props.defaultButtonText
            }
        }, {
            key: "render",
            value: function() {
                return l.default.createElement("div", null, l.default.createElement("div", {
                    className: "u-padding-all-m u-small-padding-s"
                }, l.default.createElement("div", {
                    className: "l-row u-spacing-top-m"
                }, l.default.createElement("div", {
                    className: "l-col l-col-12"
                }, this.renderInfo()))), l.default.createElement("div", {
                    className: "l-row"
                }, l.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-4 large-offset-by-8"
                }, l.default.createElement(u.OraButton, {
                    onClick: this.props.buttonClick,
                    className: "u-w-100"
                }, this.getPrimaryButtonText()))))
            }
        }]), r
    }(l.Component);
    i.defaultProps = {
        defaultText: "<span>Ceny oferty zostały zaktualizowane.</span>",
        defaultButtonText: "Zamknij"
    }, i.propTypes = {
        text: r.default.string,
        buttonText: r.default.string,
        buttonClick: r.default.func
    };
    var p = i;
    e.default = p
});
//# sourceMappingURL=CartChangedInfoModal.js.map