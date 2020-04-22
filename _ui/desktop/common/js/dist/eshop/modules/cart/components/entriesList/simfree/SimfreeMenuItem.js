define(["exports", "react", "prop-types", "react-redux", "eshop/modules/simfree/actions/app", "eshop/modules/cart/components/MenuItem"], function(_exports, _react, _propTypes, _reactRedux, _app, _MenuItem) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _MenuItem = babelHelpers.interopRequireDefault(_MenuItem);

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
            event.preventDefault();
            handler(event);
        };
    };

    var SimfreeMenuItem = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(SimfreeMenuItem, _Component);

        var _super = _createSuper(SimfreeMenuItem);

        function SimfreeMenuItem(props) {
            babelHelpers.classCallCheck(this, SimfreeMenuItem);
            return _super.call(this, props);
        }

        babelHelpers.createClass(SimfreeMenuItem, [{
            key: "itemClickedHandler",
            value: function itemClickedHandler(e) {
                console.warn("simfree");
                console.warn(this);
                console.warn(e);
                this.props.setOfferType();
            }
        }, {
            key: "render",
            value: function render() {
                var _this = this;

                return /*#__PURE__*/ _react.default.createElement(_MenuItem.default, babelHelpers.extends({
                    key: this.props.label,
                    addItemIcon: this.props.addItemIcon
                }, this.props, {
                    entries: this.props.entries,
                    itemClickedHandler: function itemClickedHandler() {
                        return _this.itemClickedHandler();
                    }
                }));
            }
        }]);
        return SimfreeMenuItem;
    }(_react.Component);

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            setOfferType: function setOfferType() {
                return dispatch((0, _app.setSimfreeProcessData)());
            }
        };
    };

    var _default = (0, _reactRedux.connect)(null, mapDispatchToProps)(SimfreeMenuItem);

    _exports.default = _default;
    SimfreeMenuItem.propTypes = {
        icon: _propTypes.PropTypes.string.isRequired,
        label: _propTypes.PropTypes.string.isRequired,
        link: _propTypes.PropTypes.string.isRequired,
        availabilityRestrictions: _propTypes.PropTypes.arrayOf(_propTypes.PropTypes.shape({
            menuItemType: _propTypes.PropTypes.string,
            cartBundleNumberLimit: _propTypes.PropTypes.oneOfType([_propTypes.PropTypes.string, _propTypes.PropTypes.number])
        })).isRequired,
        addItemIcon: _propTypes.PropTypes.string.isRequired,
        type: _propTypes.PropTypes.string,
        entries: _propTypes.PropTypes.arrayOf(_propTypes.PropTypes.object)
    };
});
//# sourceMappingURL=SimfreeMenuItem.js.map