define(["exports", "react", "prop-types"], function(e, t, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.DisableRuleMessageComponent = e.RequireRuleMessageComponent = e.ValidationResultMessageComponent = void 0, t = babelHelpers.interopRequireWildcard(t);
    e.ValidationResultMessageComponent = function(e) {
        return t.default.createElement("p", {
            className: "g-redf-c h2"
        }, e.message)
    };

    function a(e) {
        var r, a, s = (r = e.brokenRules, a = e.translationMap, r.map(function(e) {
            return {
                targets: e.targetVases.map(function(e) {
                    return a[e]
                }),
                sources: e.sourceVases.map(function(e) {
                    return a[e]
                })
            }
        }));
        return t.default.createElement("div", null, t.default.createElement("p", {
            className: "g-redf-c h2"
        }, "Naruszono relację wymagalności"), s.map(function(e, r) {
            return t.default.createElement("p", {
                key: r
            }, "Produkty ", e.sources, " wymagają produktów ", e.targets, ". Dodaj wymagane usługi, żeby kontynuować.")
        }))
    }(e.RequireRuleMessageComponent = a).propTypes = {
        brokenRules: r.PropTypes.arrayOf(r.PropTypes.shape({
            sourceVases: r.PropTypes.arrayOf(r.PropTypes.string),
            targetVases: r.PropTypes.arrayOf(r.PropTypes.string),
            type: r.PropTypes.string
        })).isRequired,
        translationMap: r.PropTypes.object.isRequired
    };

    function s(e) {
        var r = r(e.brokenRules, e.translationMap);
        return t.default.createElement("div", null, t.default.createElement("p", {
            className: "g-redf-c h2"
        }, "Naruszono relację wykluczania"), r.map(function(e, r) {
            return t.default.createElement("p", {
                key: r
            }, "Produkty ", e.sources, " wykluczają się z produktami ", e.targets, ". Usuń wykluczające się usługi, żeby kontynuować.")
        }))
    }(e.DisableRuleMessageComponent = s).propTypes = {
        brokenRules: r.PropTypes.arrayOf(r.PropTypes.shape({
            sourceVases: r.PropTypes.arrayOf(r.PropTypes.string),
            targetVases: r.PropTypes.arrayOf(r.PropTypes.string),
            type: r.PropTypes.string
        })).isRequired,
        translationMap: r.PropTypes.object.isRequired
    }
});
//# sourceMappingURL=ValidationResultMessageComponent.js.map