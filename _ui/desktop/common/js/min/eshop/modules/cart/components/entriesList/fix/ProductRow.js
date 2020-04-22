define(["exports", "react", "prop-types", "./Utils"], function(e, t, l, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, t = babelHelpers.interopRequireWildcard(t), l = babelHelpers.interopRequireDefault(l);

    function o(e) {
        return t.default.createElement("div", {
            className: "l-row u-padding-l-xl u-padding-top-l-xl u-small-padding-top-l u-small-padding-l ".concat(e.borderBottom && "u-border-bottom")
        }, t.default.createElement("div", {
            className: "l-col l-col--auto"
        }, t.default.createElement("div", {
            className: "opl-checkout__icon__cell u-text-center"
        }, t.default.createElement(a.Graphic, {
            icon: e.product.thumbnailIcon,
            imgUrl: e.product.imageUrl
        }))), t.default.createElement("div", {
            className: "l-col l-col-8"
        }, t.default.createElement("span", {
            className: "u-font-bold u-small-font-large opl-word-wrap",
            dangerouslySetInnerHTML: {
                __html: e.product.name
            }
        }), t.default.createElement("p", {
            className: "u-small-padding-top-s",
            dangerouslySetInnerHTML: {
                __html: e.product.description
            }
        }), e.product.additionalContent))
    }
    o.propTypes = {
        product: l.default.shape({
            name: l.default.string,
            thumbnailIcon: l.default.string,
            imageUrl: l.default.string,
            description: l.default.string,
            additionalContent: l.default.object
        }),
        borderBottom: l.default.bool
    }, o.defaultProps = {
        borderBottom: !0
    };
    var r = o;
    e.default = r
});
//# sourceMappingURL=ProductRow.js.map