define(["exports", "react", "prop-types"], function(_exports, _react, _propTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);

    var VASPackagesPresentationComponent = function VASPackagesPresentationComponent(props) {
        var vasesTitles = getVasesTitles(filterVasesByCategories(props.vases, "GratisPackageBonuses"));
        var changePackagesButtonLabel = vasesTitles.length === 1 ? props.changePackageSingularLabel : props.changePackagePluralLabel;
        return vasesTitles.length > 0 ? /*#__PURE__*/ _react.default.createElement("p", {
            className: props.className || ""
        }, vasesTitles.length === 1 ? props.singularLabel : props.pluralLabel, " ", vasesTitles.join(", "), props.editable && /*#__PURE__*/ _react.default.createElement("a", {
            className: "u-spacing-left",
            href: "#",
            key: "vasPackagesChangeButton_key",
            onClick: preventDefaultWrapper(props.onVasPackagesChangeClicked),
            "aria-label": changePackagesButtonLabel.toLowerCase()
        }, changePackagesButtonLabel)) : null;
    };

    var preventDefaultWrapper = function preventDefaultWrapper(handler) {
        return function(event) {
            event.preventDefault();
            handler(event);
        };
    };

    var filterVasesByCategories = function filterVasesByCategories(vases, category) {
        return vases && category && vases.filter(function(vas) {
            return vas.categories && vas.categories.includes(category);
        }) || [];
    };

    var getVasesTitles = function getVasesTitles(vases) {
        return vases && vases.map(function(vas) {
            return vas.name;
        }) || [];
    };

    VASPackagesPresentationComponent.propTypes = {
        editable: _propTypes.default.bool,
        onVasPackagesChangeClicked: _propTypes.default.func,
        vases: _propTypes.default.array,
        bundleCode: _propTypes.default.string,
        singularLabel: _propTypes.default.string,
        pluralLabel: _propTypes.default.string,
        changePackageSingularLabel: _propTypes.default.string,
        changePackagePluralLabel: _propTypes.default.string,
        className: _propTypes.default.string
    };
    VASPackagesPresentationComponent.defaultProps = {
        singularLabel: "Wybrana paczka usług: ",
        pluralLabel: "Wybrane paczki usług: ",
        changePackageSingularLabel: "Zmień paczkę",
        changePackagePluralLabel: "Zmień paczki"
    };
    var _default = VASPackagesPresentationComponent;
    _exports.default = _default;
});
//# sourceMappingURL=VASPackagesPresentationComponent.js.map