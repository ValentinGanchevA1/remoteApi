define(["exports", "react"], function(_exports, _react) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);

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

    var MultiCartCollapsedItemComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MultiCartCollapsedItemComponent, _Component);

        var _super = _createSuper(MultiCartCollapsedItemComponent);

        function MultiCartCollapsedItemComponent(props) {
            babelHelpers.classCallCheck(this, MultiCartCollapsedItemComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(MultiCartCollapsedItemComponent, [{
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-full-row is-expanded-hide is-expanding-hide"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row u-small-padding-left u-small-padding-right"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-top u-padding"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "g-white1-bg u-box-shadow"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-left-l u-padding-right-l u-small-padding-left u-small-padding-right"
                }, /*#__PURE__*/ _react.default.createElement("table", {
                    className: "u-table-fixed"
                }, /*#__PURE__*/ _react.default.createElement("tbody", null, /*#__PURE__*/ _react.default.createElement("tr", null, /*#__PURE__*/ _react.default.createElement("td", {
                    className: "u-padding-l-xl u-padding-top-l-xl u-padding-right-l u-small-padding-l u-small-padding-top-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-group"
                }, this.props.entry.terminals && this.props.entry.terminals.length > 0 && this.props.entry.terminals.map(function(terminal, i) {
                    return /*#__PURE__*/ _react.default.createElement(GroupElement, {
                        key: "groupElement_" + i,
                        item: terminal
                    });
                }))))))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-border-top u-large-hide u-medium-hide u-padding-all-m u-text-center"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    alt: "szczeg\xF3\u0142y",
                    className: "opl-checkout__section__title opl-checkout__section__trigger " + this.props.trigger
                }, "Szczeg\xF3\u0142y"))))));
            }
        }]);
        return MultiCartCollapsedItemComponent;
    }(_react.Component);

    _exports.default = MultiCartCollapsedItemComponent;

    var GroupElement = function GroupElement(_ref) {
        var item = _ref.item;
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-group__element u-vertical-middle u-padding-right-xl u-small-inline-block u-small-padding-right-l"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "u-acc-hide"
        }, item && item.name), /*#__PURE__*/ _react.default.createElement("img", {
            src: item && item.imageUrl,
            alt: item.name,
            className: "opl-checkout__image--phone u-block"
        }));
    };
});
//# sourceMappingURL=MultiCartCollapsedItemComponent.js.map