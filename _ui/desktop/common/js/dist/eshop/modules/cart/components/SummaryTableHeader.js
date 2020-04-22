define(["exports", "react"], function(_exports, _react) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.SummaryTableHeader = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);

    var SummaryTableHeader = function SummaryTableHeader(props) {
        return /*#__PURE__*/ _react.default.createElement("table", {
            id: props.parentCmp
        }, /*#__PURE__*/ _react.default.createElement("caption", {
            className: "u-small-padding-l u-small-border-bottom u-small-border--l"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "h1 u-no-padding-left u-small-no-padding"
        }, props.title)), /*#__PURE__*/ _react.default.createElement("thead", null, /*#__PURE__*/ _react.default.createElement("tr", null, /*#__PURE__*/ _react.default.createElement("th", null), /*#__PURE__*/ _react.default.createElement("th", null), /*#__PURE__*/ _react.default.createElement("th", {
            className: "second-last u-font-normal"
        }, props.oneTimeHeader), /*#__PURE__*/ _react.default.createElement("th", {
            className: "last u-font-normal u-no-padding-right"
        }, props.monthlyHeader))));
    };

    _exports.SummaryTableHeader = SummaryTableHeader;
    SummaryTableHeader.defaultProps = {
        title: "",
        oneTimeHeader: "",
        monthlyHeader: ""
    };
});
//# sourceMappingURL=SummaryTableHeader.js.map