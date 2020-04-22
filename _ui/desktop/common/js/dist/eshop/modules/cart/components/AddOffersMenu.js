define(["exports", "react", "prop-types", "react-redux", "../selectors", "eshop/modules/configurator/selectors/filters", "eshop/modules/cart/components/MenuItem", "eshop/modules/cart/components/entriesList/simfree/SimfreeMenuItem"], function(_exports, _react, _propTypes, _reactRedux, _selectors, _filters, _MenuItem, _SimfreeMenuItem) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _MenuItem = babelHelpers.interopRequireDefault(_MenuItem);
    _SimfreeMenuItem = babelHelpers.interopRequireDefault(_SimfreeMenuItem);

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

    var AddOffersMenuAdapter = function AddOffersMenuAdapter(props) {
        return /*#__PURE__*/ _react.default.createElement(AddOffersMenu, {
            marketContext: props.marketContext,
            menuHeader: props.menuHeader,
            addItemIcon: props.addItemIcon,
            menuItems: props.menuItems,
            entries: props.entries
        });
    };

    AddOffersMenuAdapter.propTypes = {
        menuHeader: _propTypes.PropTypes.string.isRequired,
        addItemIcon: _propTypes.PropTypes.string.isRequired,
        menuItems: _propTypes.PropTypes.array.isRequired,
        entries: _propTypes.PropTypes.arrayOf(_propTypes.PropTypes.object)
    };

    var AddOffersMenu = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(AddOffersMenu, _Component);

        var _super = _createSuper(AddOffersMenu);

        function AddOffersMenu(props) {
            babelHelpers.classCallCheck(this, AddOffersMenu);
            return _super.call(this, props);
        }

        babelHelpers.createClass(AddOffersMenu, [{
            key: "createHeader",
            value: function createHeader() {
                if (this.props.entries != null && this.props.entries.length > 0) {
                    return /*#__PURE__*/ _react.default.createElement(MenuHeader, {
                        menuHeader: this.props.menuHeader
                    });
                } else {
                    return null;
                }
            }
        }, {
            key: "_checkAvailabilityRestriction",
            value: function _checkAvailabilityRestriction(menuItem, entries) {
                if (!!menuItem.type && menuItem.type == 'B2B' && this.props.marketContext != "B2B") {
                    return false;
                }

                var restrictionResults = menuItem.availabilityRestrictions.map(function(restriction) {
                    var itemType = restriction.menuItemType; //Enum definitions in items.xml cannot start with a number, so fix types are prefixed with '_'

                    if (itemType.indexOf("_") === 0) {
                        itemType = itemType.slice(1);
                    }

                    var matchingEntries = entries.filter(function(entry) {
                        return itemType === entry.bundleType;
                    }).length;
                    return matchingEntries > restriction.cartBundleNumberLimit;
                }); //Positive results means that restriction has been triggered

                return !restrictionResults.some(function(result) {
                    return result;
                });
            }
        }, {
            key: "render",
            value: function render() {
                var _this = this;

                var presentableItems = this.props.entries && this.props.entries.length > 0 ? this.props.menuItems.filter(function(menuItem) {
                    return _this._checkAvailabilityRestriction(menuItem, _this.props.entries);
                }) : this.props.menuItems;
                return presentableItems && presentableItems.length > 0 ? /*#__PURE__*/ _react.default.createElement("div", {
                    id: "menu",
                    className: "g-gray1-bg u-padding-l"
                }, /*#__PURE__*/ _react.default.createElement(LFullRow, {
                    className: "u-padding-top-l"
                }, /*#__PURE__*/ _react.default.createElement(LPageRow, null, this.createHeader(), presentableItems.map(function(menuItem) {
                    return _this._renderMenuItem(menuItem);
                })))) : null;
            }
        }, {
            key: "_renderMenuItem",
            value: function _renderMenuItem(menuItem) {
                console.log(menuItem.type);
                var type = menuItem.type;

                if (this.props.marketContext == "B2B") {
                    if (type === "B2B") {
                        return /*#__PURE__*/ _react.default.createElement(_SimfreeMenuItem.default, babelHelpers.extends({
                            key: menuItem.label,
                            addItemIcon: this.props.addItemIcon
                        }, menuItem, {
                            entries: menuItem.entries
                        }));
                    } else return null;
                } else {
                    if (type == "VK_SIMFREE") {
                        return /*#__PURE__*/ _react.default.createElement(_SimfreeMenuItem.default, babelHelpers.extends({
                            key: menuItem.label,
                            addItemIcon: this.props.addItemIcon
                        }, menuItem, {
                            entries: menuItem.entries
                        }));
                    } else if (type !== "B2B") {
                        return /*#__PURE__*/ _react.default.createElement(_MenuItem.default, babelHelpers.extends({
                            key: menuItem.label,
                            addItemIcon: this.props.addItemIcon
                        }, menuItem, {
                            entries: menuItem.entries
                        }));
                    }
                }
            }
        }]);
        return AddOffersMenu;
    }(_react.Component);

    AddOffersMenu.propTypes = {
        menuHeader: _propTypes.PropTypes.string.isRequired,
        addItemIcon: _propTypes.PropTypes.string.isRequired,
        menuItems: _propTypes.PropTypes.arrayOf(_propTypes.PropTypes.object).isRequired,
        entries: _propTypes.PropTypes.arrayOf(_propTypes.PropTypes.object)
    };

    var MenuHeader = function MenuHeader(props) {
        return /*#__PURE__*/ _react.default.createElement("h3", {
            className: "h2 u-no-spacing"
        }, props.menuHeader);
    };

    MenuHeader.propTypes = {
        menuHeader: _propTypes.PropTypes.string.isRequired
    };

    var LFullRow = function LFullRow(props) {
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-full-row " + (props.className ? props.className : "")
        }, props.children);
    };

    var LPageRow = function LPageRow(props) {
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-page-row u-small-padding-left u-small-padding-right " + (props.className ? props.className : "")
        }, props.children);
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            entries: (0, _selectors.getCartEntries)(state),
            marketContext: (0, _filters.getMarketContext)(state)
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, null)(AddOffersMenuAdapter);

    _exports.default = _default;
});
//# sourceMappingURL=AddOffersMenu.js.map