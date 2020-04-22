define(["exports", "react", "prop-types"], function(_exports, _react, _propTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.ResponsiveVisibility = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);

    var ResponsiveVisibility = function ResponsiveVisibility(props) {
        var tablet = props.tablet === undefined ? props.desktop : props.tablet;
        var mobile = props.mobile === undefined ? props.desktop : props.mobile;
        var big = props.desktop ? "" : "u-hide ";
        var medium = tablet ? props.desktop ? "" : "u-medium-block" : props.desktop ? "u-medium-hide" : "";
        var small = mobile ? props.desktop ? "" : " u-small-block" : props.desktop ? " u-small-hide" : "";
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: big + medium + small
        }, props.children);
    };

    _exports.ResponsiveVisibility = ResponsiveVisibility;
    ResponsiveVisibility.propTypes = {
        desktop: _propTypes.default.bool,
        tablet: _propTypes.default.bool,
        mobile: _propTypes.default.bool
    };
    ResponsiveVisibility.defaultProps = {
        desktop: true
    };
});
//# sourceMappingURL=RWDUtils.js.map