define(["exports", "react", "prop-types", "eshop/components/OraCommonComponents", "eshop/modules/core/components/ui/RWDUtils", "eshop/modules/core/components/ui/OfferDetails"], function(e, o, t, n, r, d) {
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
    }), e.default = void 0;
    var i = function(e) {
        babelHelpers.inherits(r, e);
        var t = u(r);

        function r(e) {
            return babelHelpers.classCallCheck(this, r), t.call(this, e)
        }
        return babelHelpers.createClass(r, [{
            key: "renderTables",
            value: function() {
                return o.default.createElement(d.DetailsRaw, {
                    data: this.props.details,
                    showNet: this.props.showNet,
                    proposition: this.props.proposition,
                    style: l.large
                })
            }
        }, {
            key: "renderSimple",
            value: function() {
                var e = {
                    __html: this.props.details
                };
                return this.props.details && o.default.createElement("div", {
                    dangerouslySetInnerHTML: e
                })
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props.details && "object" === babelHelpers.typeof(this.props.details) ? this.renderTables() : this.renderSimple();
                return o.default.createElement(n.OraModal, {
                    id: this.props.id,
                    showClose: !0,
                    medium: !0
                }, e)
            }
        }]), r
    }((o = babelHelpers.interopRequireWildcard(o)).Component);
    i.defaultProps = {
        id: "",
        details: [],
        header: "default: Szczegóły oferty"
    }, i.propTypes = {
        id: t.PropTypes.string,
        details: t.PropTypes.oneOfType([t.PropTypes.arrayOf(t.PropTypes.object), t.PropTypes.string]),
        header: t.PropTypes.string
    };
    var l = {
            small: {
                table: "u-block",
                tbody: "u-block",
                tr: "u-block u-border u-no-border-t u-no-border-l u-no-border-r",
                th: {
                    first: "u-block u-text-left",
                    rest: "u-padding-top u-block u-text-left"
                },
                td: {
                    first: "u-padding u-block u-font-bold",
                    rest: "u-padding u-block u-font-bold"
                }
            },
            medium: {
                table: "u-table-fixed u-w-100",
                tbody: "",
                tr: "u-border u-no-border-t u-no-border-l u-no-border-r",
                th: {
                    first: "u-padding u-padding-right u-text-left",
                    rest: "u-padding u-padding-top u-padding-right u-text-left"
                },
                td: {
                    first: "u-padding u-padding-left u-font-bold",
                    rest: "u-padding u-padding-top u-padding-left u-font-bold"
                }
            },
            large: {
                table: "u-table-fixed u-w-100",
                tbody: "",
                tr: "u-border u-no-border-t u-no-border-l u-no-border-r",
                th: {
                    first: "u-padding u-padding-right u-text-left",
                    rest: "u-padding u-padding-top u-padding-right u-text-left"
                },
                td: {
                    first: "u-padding u-padding-left u-font-bold",
                    rest: "u-padding u-padding-top u-padding-left u-font-bold"
                }
            }
        },
        s = i;
    e.default = s
});
//# sourceMappingURL=CartDetailsModal.js.map