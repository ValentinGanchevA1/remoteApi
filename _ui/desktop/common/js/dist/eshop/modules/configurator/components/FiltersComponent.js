define(["exports", "react", "react-redux", "./ClientContextCheckbox"], function(_exports, _react, _reactRedux, _ClientContextCheckbox) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _ClientContextCheckbox = babelHelpers.interopRequireDefault(_ClientContextCheckbox);

    var FiltersComponentView = function FiltersComponentView(props) {
        return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("p", {
            className: "h3"
        }, "FiltersComponent"), /*#__PURE__*/ _react.default.createElement(_ClientContextCheckbox.default, {
            tooltip: "tooltip",
            label: "label"
        }));
    };

    var mapStateToProps = function mapStateToProps(state) {
        return { //    dummy: 'dummy'
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return { //    dummy: (event) => dispatch(setClientContext(event.target.checked))
        };
    };

    var FiltersComponent = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(FiltersComponentView);
    var _default = FiltersComponent;
    _exports.default = _default;
});
//# sourceMappingURL=FiltersComponent.js.map