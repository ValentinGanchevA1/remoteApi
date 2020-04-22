define(["exports", "react"], function(e, c) {
    "use strict";

    function t(n) {
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
    var r = function(e) {
        babelHelpers.inherits(n, e);
        var r = t(n);

        function n(e) {
            var t;
            return babelHelpers.classCallCheck(this, n), (t = r.call(this, e)).cellTypes = {
                ICON: "opl-checkout__icon__cell",
                IMAGE: "opl-checkout__image__cell"
            }, t.productIcons = {
                SIM: "sim-3",
                VAS: "funpack-2 g-icon--s",
                GADGET: "gift"
            }, t
        }
        return babelHelpers.createClass(n, [{
            key: "render",
            value: function() {
                var e, t;
                return -1 !== ["SIM", "VAS", "GADGET", "DATA"].indexOf(this.props.entryType) ? (e = this.props.icon || this.productIcons[this.props.entryType], t = this.cellTypes.ICON) : "TERMINAL" === this.props.entryType && (t = this.cellTypes.IMAGE), c.default.createElement("td", {
                    rowSpan: this.props.rowSpan,
                    className: t
                }, t === this.cellTypes.ICON && c.default.createElement("span", {
                    className: "g-icon g-icon--only g-icon--" + e,
                    "aria-hidden": "true"
                }), t === this.cellTypes.IMAGE && c.default.createElement("img", {
                    src: this.props.image,
                    className: "opl-checkout__image--phone",
                    alt: this.props.terminalName
                }))
            }
        }]), n
    }((c = babelHelpers.interopRequireWildcard(c)).Component);
    e.default = r
});
//# sourceMappingURL=MultiCartItemIconCellComponent.js.map