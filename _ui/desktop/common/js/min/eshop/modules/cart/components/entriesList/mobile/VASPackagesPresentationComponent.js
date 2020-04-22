define(["exports", "react", "prop-types"], function(e, n, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, n = babelHelpers.interopRequireDefault(n), a = babelHelpers.interopRequireDefault(a);

    function l(e) {
        var a = u(r(e.vases, "GratisPackageBonuses")),
            l = 1 === a.length ? e.changePackageSingularLabel : e.changePackagePluralLabel;
        return 0 < a.length ? n.default.createElement("p", {
            className: e.className || ""
        }, 1 === a.length ? e.singularLabel : e.pluralLabel, " ", a.join(", "), e.editable && n.default.createElement("a", {
            className: "u-spacing-left",
            href: "#",
            key: "vasPackagesChangeButton_key",
            onClick: t(e.onVasPackagesChangeClicked),
            "aria-label": l.toLowerCase()
        }, l)) : null
    }
    var t = function(a) {
            return function(e) {
                e.preventDefault(), a(e)
            }
        },
        r = function(e, a) {
            return e && a && e.filter(function(e) {
                return e.categories && e.categories.includes(a)
            }) || []
        },
        u = function(e) {
            return e && e.map(function(e) {
                return e.name
            }) || []
        };
    l.propTypes = {
        editable: a.default.bool,
        onVasPackagesChangeClicked: a.default.func,
        vases: a.default.array,
        bundleCode: a.default.string,
        singularLabel: a.default.string,
        pluralLabel: a.default.string,
        changePackageSingularLabel: a.default.string,
        changePackagePluralLabel: a.default.string,
        className: a.default.string
    }, l.defaultProps = {
        singularLabel: "Wybrana paczka usług: ",
        pluralLabel: "Wybrane paczki usług: ",
        changePackageSingularLabel: "Zmień paczkę",
        changePackagePluralLabel: "Zmień paczki"
    };
    var s = l;
    e.default = s
});
//# sourceMappingURL=VASPackagesPresentationComponent.js.map