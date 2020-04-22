define(["exports", "react", "prop-types", "lodash"], function(_exports, _react, _propTypes, _lodash) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _lodash = babelHelpers.interopRequireDefault(_lodash);

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

    var MultiCartExpandingSectionComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MultiCartExpandingSectionComponent, _Component);

        var _super = _createSuper(MultiCartExpandingSectionComponent);

        function MultiCartExpandingSectionComponent(props) {
            babelHelpers.classCallCheck(this, MultiCartExpandingSectionComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(MultiCartExpandingSectionComponent, [{
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    role: "tablist",
                    "aria-multiselectable": "false",
                    id: 'bundle-' + this.props.entry.bundleNo
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-checkout__section opl-checkout__section--togglable u-padding is-expanded"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-checkout__section__header"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-full-row u-padding-top-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row u-small-padding-left"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-s u-small-padding u-padding-right-l u-small-no-padding-r"
                }, /*#__PURE__*/ _react.default.createElement("table", {
                    className: "u-table-fixed"
                }, /*#__PURE__*/ _react.default.createElement("thead", null, /*#__PURE__*/ _react.default.createElement("tr", null, /*#__PURE__*/ _react.default.createElement("th", {
                    className: "u-vertical-bottom u-text-left"
                }, /*#__PURE__*/ _react.default.createElement("table", {
                    className: "u-small-w-100 u-w-auto"
                }, /*#__PURE__*/ _react.default.createElement("tbody", null, /*#__PURE__*/ _react.default.createElement("tr", null, /*#__PURE__*/ _react.default.createElement("td", {
                    className: "u-vertical-bottom u-small-vertical-baseline u-small-w-100",
                    style: {
                        paddingBottom: 1
                    }
                }, /*#__PURE__*/ _react.default.createElement("h3", {
                    className: "h2 u-inline"
                }, this.props.title + " " + _lodash.default.capitalize(this.props.entry.promotionType))), /*#__PURE__*/ _react.default.createElement("td", {
                    className: "u-vertical-bottom u-padding-s u-padding-left-l"
                }), /*#__PURE__*/ _react.default.createElement("td", {
                    className: "u-vertical-bottom u-small-vertical-baseline u-padding-s u-padding-left-l u-small-no-padding-b"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    onClick: this.props.onRemoveClicked
                }, this.props.conf.deleteEntryLabelHeader, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-hide"
                }, this.props.title))))))), /*#__PURE__*/ _react.default.createElement("th", {
                    "aria-hidden": "true",
                    className: "u-padding-s u-padding-right-s l-col-2 u-vertical-top u-text-right u-small-hide"
                }, "Op\u0142aty ", /*#__PURE__*/ _react.default.createElement("br", {
                    className: "u-small-hide u-large-hide"
                }), "jednorazowe"), /*#__PURE__*/ _react.default.createElement("th", {
                    "aria-hidden": "true",
                    className: "u-padding-s l-col-2 u-small-hide u-text-right u-vertical-top"
                }, "Op\u0142aty ", /*#__PURE__*/ _react.default.createElement("br", {
                    className: "u-small-hide u-large-hide"
                }), "miesi\u0119czne ", !this.props.isB2B && /*#__PURE__*/ _react.default.createElement("span", null, /*#__PURE__*/ _react.default.createElement("br", null), "z rabatami"))))))))), /*#__PURE__*/ _react.default.createElement("div", {
                    "aria-hidden": "false",
                    style: {
                        display: 'block'
                    },
                    className: 'opl-checkout__section__content osc-' + this.props.entry.bundleNo,
                    role: "tabpanel"
                }, this.props.children[0]), this.props.children[1]));
            }
        }]);
        return MultiCartExpandingSectionComponent;
    }(_react.Component);

    var EntryPropType = _propTypes.default.shape({
        bundleNo: _propTypes.default.number
    });

    var ConfPropType = _propTypes.default.shape({
        deleteEntryLabelHeader: _propTypes.default.string
    });

    MultiCartExpandingSectionComponent.propTypes = {
        title: _propTypes.default.string,
        trigger: _propTypes.default.string.isRequired,
        entry: EntryPropType.isRequired,
        conf: ConfPropType.isRequired,
        children: _propTypes.default.array.isRequired,
        onRemoveClicked: _propTypes.default.func,
        isB2B: _propTypes.default.bool
    };
    var _default = MultiCartExpandingSectionComponent;
    _exports.default = _default;
});
//# sourceMappingURL=MultiCartExpandingSectionComponent.js.map