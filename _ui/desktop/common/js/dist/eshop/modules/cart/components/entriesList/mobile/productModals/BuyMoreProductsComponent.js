define(["exports", "react", "prop-types"], function(_exports, _react, _propTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);

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

    var BuyMoreProductsComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(BuyMoreProductsComponent, _Component);

        var _super = _createSuper(BuyMoreProductsComponent);

        function BuyMoreProductsComponent(props) {
            var _this;

            babelHelpers.classCallCheck(this, BuyMoreProductsComponent);
            _this = _super.call(this, props);
            _this.addButtonClicked = _this.addButtonClicked.bind(babelHelpers.assertThisInitialized(_this));
            return _this;
        }

        babelHelpers.createClass(BuyMoreProductsComponent, [{
            key: "addButtonClicked",
            value: function addButtonClicked(e) {
                e.preventDefault();
                this.props.addButtonClicked();
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    "aria-label": this.props.buyMoreLabel,
                    onClick: this.addButtonClicked,
                    className: this.props.className
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-position-relative u-box-shadow-hover u-box-shadow--s u-margin-top-l g-white1-bg"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-left-l u-padding-right-l "
                }, /*#__PURE__*/ _react.default.createElement("table", {
                    className: "u-table-fixed" + (this.props.topBorder ? " u-large-border-top u-medium-border-top" : "")
                }, /*#__PURE__*/ _react.default.createElement("tbody", null, /*#__PURE__*/ _react.default.createElement("tr", null, /*#__PURE__*/ _react.default.createElement("td", {
                    className: "opl-checkout__icon__cell"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--only  g-icon--s g-icon--" + this.props.icon
                })), /*#__PURE__*/ _react.default.createElement("td", {
                    className: "u-padding-top-l u-padding-l u-padding-right-l u-font-bold"
                }, this.props.buyMoreLabel), /*#__PURE__*/ _react.default.createElement("td", {
                    className: "opl-checkout__button__cell u-padding-top-l u-padding-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-product-addlink u-right u-small-right"
                }))))))));
            }
        }]);
        return BuyMoreProductsComponent;
    }(_react.Component);

    _exports.default = BuyMoreProductsComponent;
    BuyMoreProductsComponent.propTypes = {
        buyMoreLabel: _propTypes.default.string,
        icon: _propTypes.default.string,
        addButtonClicked: _propTypes.default.func
    };
    BuyMoreProductsComponent.defaultProps = {
        buyMoreLabel: "Dobierz produkt",
        icon: "machines",
        topBorder: false
    };
});
//# sourceMappingURL=BuyMoreProductsComponent.js.map