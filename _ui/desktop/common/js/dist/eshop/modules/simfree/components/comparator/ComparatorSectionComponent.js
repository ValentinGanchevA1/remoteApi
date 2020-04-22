define(["exports", "react", "./ComparatorRowComponent"], function(_exports, _react, _ComparatorRowComponent) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _ComparatorRowComponent = babelHelpers.interopRequireDefault(_ComparatorRowComponent);

    function _createSuper(Derived) {
        return function() {
            var Super = babelHelpers.getPrototypeOf(Derived),
                result;
            if (_isNativeReflectConstruct()) {
                var NewTarget = babelHelpers.getPrototypeOf(this).constructor;
                result = Reflect.construct(Super, arguments, NewTarget);
            } else {
                result = Super.apply(this, arguments);
            }
            return babelHelpers.possibleConstructorReturn(this, result);
        };
    }

    function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
            Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
            return true;
        } catch (e) {
            return false;
        }
    }

    var ComparatorSectionComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(ComparatorSectionComponent, _Component);

        var _super = _createSuper(ComparatorSectionComponent);

        function ComparatorSectionComponent(props) {
            babelHelpers.classCallCheck(this, ComparatorSectionComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(ComparatorSectionComponent, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                if (this.componentNeedInitialization("comparator-expander")) {
                    OPL.UI.initModules(document.getElementById("comparator-expander-parent"));
                }
            }
        }, {
            key: "componentNeedInitialization",
            value: function componentNeedInitialization(name) {
                return document.getElementById(name) != null && !document.getElementById(name).hasAttribute("data-js-processed");
            }
        }, {
            key: "render",
            value: function render() {
                var _this = this;

                return this.props.section.attributesRowDTOList && this.props.section.attributesRowDTOList.length > 0 ? /*#__PURE__*/ _react.default.createElement("div", {
                    key: this.props.section.name + this.props.idx,
                    className: "opl-section opl-section--expander is-expanded u-no-padding"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-section__header u-margin-m u-margin-top-m"
                }, /*#__PURE__*/ _react.default.createElement("h3", {
                    className: "h4"
                }, this.props.section.name), /*#__PURE__*/ _react.default.createElement("a", {
                    id: "mod-common/modules/opl-expander-2-control-" + this.props.idx,
                    role: "tab",
                    className: "opl-section__expander-trigger",
                    href: "#",
                    "aria-controls": "expander-content-" + this.props.idx,
                    "aria-expanded": "true"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-hide"
                }, "rozwi\u0144 sekcj\u0119"), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-hide"
                }, "zwi\u0144 sekcj\u0119"))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-section__content",
                    id: "expander-content-" + this.props.idx,
                    role: "tabpanel",
                    "aria-labelledby": "mod-common/modules/opl-expander-2-control-" + this.props.idx,
                    "aria-hidden": "false"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-section__content-inner u-no-padding"
                }, /*#__PURE__*/ _react.default.createElement("table", {
                    className: "opl-table opl-table-compare"
                }, /*#__PURE__*/ _react.default.createElement("caption", {
                    className: "u-acc-hide"
                }, this.props.section.name), /*#__PURE__*/ _react.default.createElement("tbody", null, this.props.section.attributesRowDTOList && this.props.section.attributesRowDTOList.map(function(row, index) {
                    return /*#__PURE__*/ _react.default.createElement(_ComparatorRowComponent.default, {
                        row: row,
                        idx: index,
                        markDiff: _this.props.markDiff
                    });
                })))))) : null;
            }
        }]);
        return ComparatorSectionComponent;
    }(_react.Component);

    _exports.default = ComparatorSectionComponent;
});
//# sourceMappingURL=ComparatorSectionComponent.js.map