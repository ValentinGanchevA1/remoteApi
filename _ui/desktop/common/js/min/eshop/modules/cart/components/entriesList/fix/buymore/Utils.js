define(["exports", "react", "prop-types"], function(e, l, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.transformOneTimePriceInfo = function(e, r) {
        var n;
        if (e && e.price) {
            var t;
            t = r ? "string" == typeof e.netPrice ? e.netPrice : e.net : "string" == typeof e.price ? e.price : e.gross, n = {
                integer: t.split(",")[0],
                fraction: t.split(",")[1],
                currency: e.currency
            }
        } else n = {
            integer: "0",
            fraction: "00",
            currency: "zł"
        };
        return n
    }, e.transformPriceInfo = function(e, n) {
        var r = e && e.map(function(e) {
            var r;
            return {
                integer: (r = n ? "string" == typeof e.netPrice ? e.netPrice : e.net : "string" == typeof e.price ? e.price : e.gross).split(",")[0],
                fraction: r.split(",")[1],
                currency: e.currency,
                start: e.monthFrom,
                end: e.monthTo
            }
        });
        r && 0 !== r.length || (r = [{
            integer: "0",
            fraction: "00",
            currency: "zł",
            start: null,
            end: null
        }]);
        return r
    }, e.IfCollectionNotEmpty = e.LCol = e.LRow = void 0, l = babelHelpers.interopRequireWildcard(l);
    e.LRow = function(e) {
        return l.default.createElement("div", {
            id: e.id,
            className: "l-row " + e.className,
            onClick: e.onClick
        }, e.children)
    };

    function n(e) {
        var r = e.big ? " l-col-" + e.big : "",
            n = e.medium ? " l-col-medium-" + e.medium : "",
            t = e.small ? " l-col-small-" + e.small : "",
            i = e.className ? e.className : "";
        return l.default.createElement("div", {
            className: "l-col " + r + n + t + " " + i,
            onClick: e.onClick
        }, e.children)
    }
    e.LCol = n;
    e.IfCollectionNotEmpty = function(e) {
        return e.array && 0 < e.array.length ? l.default.createElement("div", null, e.children) : null
    }, n.propTypes = {
        big: r.PropTypes.string,
        medium: r.PropTypes.string,
        small: r.PropTypes.string,
        className: r.PropTypes.string
    }
});
//# sourceMappingURL=Utils.js.map