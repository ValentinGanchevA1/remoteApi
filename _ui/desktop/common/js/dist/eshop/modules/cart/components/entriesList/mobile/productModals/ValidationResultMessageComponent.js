define(["exports", "react", "prop-types"], function(_exports, _react, _propTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.DisableRuleMessageComponent = _exports.RequireRuleMessageComponent = _exports.ValidationResultMessageComponent = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);

    var prepareRules = function prepareRules(rules, translationMap) {
        return rules.map(function(rule) {
            var targetNames = rule.targetVases.map(function(vas) {
                return translationMap[vas];
            });
            var sourceNames = rule.sourceVases.map(function(vas) {
                return translationMap[vas];
            });
            return {
                targets: targetNames,
                sources: sourceNames
            };
        });
    };

    var ValidationResultMessageComponent = function ValidationResultMessageComponent(props) {
        return /*#__PURE__*/ _react.default.createElement("p", {
            className: "g-redf-c h2"
        }, props.message);
    };

    _exports.ValidationResultMessageComponent = ValidationResultMessageComponent;

    var RequireRuleMessageComponent = function RequireRuleMessageComponent(props) {
        var preparedRules = prepareRules(props.brokenRules, props.translationMap);
        return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("p", {
            className: "g-redf-c h2"
        }, "Naruszono relacj\u0119 wymagalno\u015Bci"), preparedRules.map(function(rule, idx) {
            return /*#__PURE__*/ _react.default.createElement("p", {
                key: idx
            }, "Produkty ", rule.sources, " wymagaj\u0105 produkt\xF3w ", rule.targets, ". Dodaj wymagane us\u0142ugi, \u017Ceby kontynuowa\u0107.");
        }));
    };

    _exports.RequireRuleMessageComponent = RequireRuleMessageComponent;
    RequireRuleMessageComponent.propTypes = {
        brokenRules: _propTypes.PropTypes.arrayOf(_propTypes.PropTypes.shape({
            sourceVases: _propTypes.PropTypes.arrayOf(_propTypes.PropTypes.string),
            targetVases: _propTypes.PropTypes.arrayOf(_propTypes.PropTypes.string),
            type: _propTypes.PropTypes.string
        })).isRequired,
        translationMap: _propTypes.PropTypes.object.isRequired
    };

    var DisableRuleMessageComponent = function DisableRuleMessageComponent(props) {
        var preparedRules = preparedRules(props.brokenRules, props.translationMap);
        return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("p", {
            className: "g-redf-c h2"
        }, "Naruszono relacj\u0119 wykluczania"), preparedRules.map(function(rule, idx) {
            return /*#__PURE__*/ _react.default.createElement("p", {
                key: idx
            }, "Produkty ", rule.sources, " wykluczaj\u0105 si\u0119 z produktami ", rule.targets, ". Usu\u0144 wykluczaj\u0105ce si\u0119 us\u0142ugi, \u017Ceby kontynuowa\u0107.");
        }));
    };

    _exports.DisableRuleMessageComponent = DisableRuleMessageComponent;
    DisableRuleMessageComponent.propTypes = {
        brokenRules: _propTypes.PropTypes.arrayOf(_propTypes.PropTypes.shape({
            sourceVases: _propTypes.PropTypes.arrayOf(_propTypes.PropTypes.string),
            targetVases: _propTypes.PropTypes.arrayOf(_propTypes.PropTypes.string),
            type: _propTypes.PropTypes.string
        })).isRequired,
        translationMap: _propTypes.PropTypes.object.isRequired
    };
});
//# sourceMappingURL=ValidationResultMessageComponent.js.map