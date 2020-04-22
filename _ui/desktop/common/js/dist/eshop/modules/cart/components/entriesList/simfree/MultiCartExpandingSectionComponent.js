define(["exports", "react", "eshop/modules/core/utils/ui", "react-redux", "eshop/flux/utils/OraModalService", "./MultiCartRemovePopup", "eshop/modules/cart/actions/cart"], function(_exports, _react, _ui, _reactRedux, _OraModalService, _MultiCartRemovePopup, _cart) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _OraModalService = babelHelpers.interopRequireDefault(_OraModalService);
    _MultiCartRemovePopup = babelHelpers.interopRequireDefault(_MultiCartRemovePopup);

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
            key: "componentWillMount",
            value: function componentWillMount() {
                var _this = this;

                _OraModalService.default.add(function(data) {
                    return /*#__PURE__*/ _react.default.createElement(_MultiCartRemovePopup.default, {
                        id: "remove-from-cart-modal" + _this.props.entry.bundleNo,
                        bundleNo: _this.props.entry.bundleNo,
                        onClickRemove: _this.props.removeFromCart.bind(_this, null, _this.props.entry.bundleNo)
                    });
                });
            }
        }, {
            key: "removeFromCart",
            value: function removeFromCart() {
                var modalId = 'remove-from-cart-modal' + this.props.entry.bundleNo;

                if (this.props.sapReservation !== '') {
                    this.props.showErrorMessage(this.props.sapErrorMessage);
                } else {
                    _OraModalService.default.open(modalId, {
                        bundleNo: this.props.entry.bundleNo,
                        offerIndex: this.props.key
                    });
                }
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                return /*#__PURE__*/ _react.default.createElement("div", {
                    role: "tablist",
                    "aria-multiselectable": "false",
                    ref: function ref(_ref) {
                        return _this2.expander = _ref;
                    }
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
                    className: "u-vertical-bottom u-small-vertical-baseline u-small-w-100"
                }, /*#__PURE__*/ _react.default.createElement("h3", {
                    className: "h2 u-inline"
                }, this.props.title)), /*#__PURE__*/ _react.default.createElement("td", {
                    className: "u-vertical-bottom u-padding-s u-padding-left-l",
                    "aria-hidden": "true"
                }), /*#__PURE__*/ _react.default.createElement("td", {
                    className: "u-vertical-bottom u-small-vertical-baseline u-padding-s u-padding-left-l u-small-no-padding-b"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    onClick: this.removeFromCart.bind(this)
                }, "Usu\u0144", /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-hide"
                }, this.props.title))))))), /*#__PURE__*/ _react.default.createElement("th", {
                    "aria-hidden": "true",
                    className: "u-padding-s u-padding-right-s l-col-2 u-vertical-bottom u-text-right u-small-hide"
                }, "Op\u0142aty ", /*#__PURE__*/ _react.default.createElement("br", {
                    className: "u-small-hide u-large-hide"
                }), "jednorazowe"), /*#__PURE__*/ _react.default.createElement("th", {
                    "aria-hidden": "true",
                    className: "u-padding-s l-col-2 u-vertical-bottom u-text-right u-small-hide"
                }, "Op\u0142aty ", /*#__PURE__*/ _react.default.createElement("br", {
                    className: "u-small-hide u-large-hide"
                }), "miesi\u0119czne")))))))), /*#__PURE__*/ _react.default.createElement("div", {
                    "aria-hidden": "false",
                    style: {
                        display: 'block'
                    },
                    className: "opl-checkout__section__content",
                    id: "mod-core/modules/expander-1-tab-0",
                    role: "tabpanel",
                    "aria-labelledby": "mod-core/modules/expander-1-control-0"
                }, this.props.children[0]), this.props.children[1]));
            }
        }]);
        return MultiCartExpandingSectionComponent;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {};
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            removeFromCart: function removeFromCart(data, id) {
                return dispatch((0, _cart.removeFromCart)(data, id));
            },
            showErrorMessage: function showErrorMessage(message) {
                return dispatch((0, _cart.showErrorMessage)(message));
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MultiCartExpandingSectionComponent);

    _exports.default = _default;
});
//# sourceMappingURL=MultiCartExpandingSectionComponent.js.map