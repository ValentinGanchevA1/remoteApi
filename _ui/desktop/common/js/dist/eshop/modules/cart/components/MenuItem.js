define(["exports", "react", "prop-types"], function(_exports, _react, _propTypes) {
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

    var preventDefaultWrapper = function preventDefaultWrapper(handler) {
        return function(event) {
            console.warn("prevent");
            console.warn(event);
            console.warn(handler);
            event.preventDefault();
            handler(event);
        };
    };

    var MenuItem = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MenuItem, _Component);

        var _super = _createSuper(MenuItem);

        function MenuItem(props) {
            babelHelpers.classCallCheck(this, MenuItem);
            return _super.call(this, props);
        }

        babelHelpers.createClass(MenuItem, [{
            key: "handleOnClick",
            value: function handleOnClick(e, link, action) {
                console.warn("menuitem");
                console.warn(e);
                console.warn(link);
                console.warn(action);
                if (action) action(e);
            }
        }, {
            key: "render",
            value: function render() {
                var entries = this.props.entries === undefined ? [] : this.props.entries;
                var brokenRestriction = this.props.availabilityRestrictions ? this.props.availabilityRestrictions.filter(function(restriction) {
                    return entries.filter(function(entry) {
                        return entry.bundleType === restriction.menuItemType;
                    }).length > restriction.cartBundleNumberLimit;
                }) : [];

                if (brokenRestriction.length <= 0) {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        className: "u-padding-top-l"
                    }, /*#__PURE__*/ _react.default.createElement(WhiteBoxWithShadow, null, /*#__PURE__*/ _react.default.createElement(LinkBox, {
                        link: this.props.link,
                        label: this.props.label,
                        onClickHandlerProp: this.props.itemClickedHandler,
                        linkClicked: this.handleOnClick
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "u-position-relative"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "u-padding-left-l u-padding-right-l u-small-padding-left u-small-padding-right"
                    }, /*#__PURE__*/ _react.default.createElement(MenuItemBody, null, /*#__PURE__*/ _react.default.createElement(IconCell, {
                        icon: this.props.icon
                    }), /*#__PURE__*/ _react.default.createElement(LabelCell, {
                        label: this.props.label
                    }), /*#__PURE__*/ _react.default.createElement(ButtonCell, {
                        link: this.props.link,
                        label: this.props.label,
                        onClickHandlerProp: this.props.itemClickedHandler,
                        linkClicked: this.handleOnClick,
                        disabled: true
                    })))))));
                } else {
                    return null;
                }
            }
        }]);
        return MenuItem;
    }(_react.Component);

    _exports.default = MenuItem;

    var WhiteBoxWithShadow = function WhiteBoxWithShadow(props) {
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "g-white1-bg u-box-shadow"
        }, props.children);
    };

    var LinkBox = function LinkBox(props) {
        return /*#__PURE__*/ _react.default.createElement("a", {
            href: props.link || "#",
            onClick: function onClick(e) {
                return props.linkClicked(e, props.link, props.onClickHandlerProp);
            },
            "aria-label": props.label
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-box-shadow--s u-box-shadow-hover"
        }, props.children));
    };

    var MenuItemBody = function MenuItemBody(props) {
        return /*#__PURE__*/ _react.default.createElement("table", {
            className: "u-table-fixed"
        }, /*#__PURE__*/ _react.default.createElement("tbody", null, /*#__PURE__*/ _react.default.createElement("tr", null, props.children)));
    };

    var IconCell = function IconCell(props) {
        return /*#__PURE__*/ _react.default.createElement("td", {
            className: "opl-checkout__icon__cell"
        }, props.icon && /*#__PURE__*/ _react.default.createElement("span", {
            className: "g-icon g-icon--only g-icon--" + props.icon.toLowerCase().split('_').join("-")
        }));
    };

    var LabelCell = function LabelCell(props) {
        return /*#__PURE__*/ _react.default.createElement("td", {
            className: "u-padding-top-l u-padding-l u-padding-right-l"
        }, props.label);
    };

    var ButtonCell = function ButtonCell(props) {
        return /*#__PURE__*/ _react.default.createElement("td", {
            className: "opl-checkout__button__cell u-padding-top-l u-padding-l"
        }, props.disabled ? /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-product-addlink u-right u-small-right"
        }) : /*#__PURE__*/ _react.default.createElement("a", {
            href: props.link || "#",
            className: "opl-product-addlink u-right u-small-right",
            onClick: function onClick(e) {
                return props.linkClicked(e, props.link, props.onClickHandlerProp);
            },
            "aria-label": props.label
        }));
    };

    MenuItem.propTypes = {
        icon: _propTypes.PropTypes.string.isRequired,
        label: _propTypes.PropTypes.string.isRequired,
        link: _propTypes.PropTypes.string.isRequired,
        availabilityRestrictions: _propTypes.PropTypes.arrayOf(_propTypes.PropTypes.shape({
            menuItemType: _propTypes.PropTypes.string,
            cartBundleNumberLimit: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.number])
        })).isRequired,
        addItemIcon: _propTypes.PropTypes.string.isRequired,
        type: _propTypes.PropTypes.string,
        entries: _propTypes.PropTypes.arrayOf(_propTypes.PropTypes.object),
        onclick: _propTypes.PropTypes.func
    };
});
//# sourceMappingURL=MenuItem.js.map