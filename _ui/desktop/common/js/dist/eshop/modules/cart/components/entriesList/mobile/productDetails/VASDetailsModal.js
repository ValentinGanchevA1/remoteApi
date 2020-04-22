define(["exports", "react", "prop-types", "eshop/components/OraCommonComponents", "eshop/modules/core/components/ui/RWDUtils", "eshop/modules/cart/components/entriesList/shared/PriceBoxes", "eshop/utils/OnlineUtils"], function(_exports, _react, _propTypes, _OraCommonComponents, _RWDUtils, _PriceBoxes, _OnlineUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);

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

    var VASDetailsModal = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(VASDetailsModal, _Component);

        var _super = _createSuper(VASDetailsModal);

        function VASDetailsModal(props) {
            babelHelpers.classCallCheck(this, VASDetailsModal);
            return _super.call(this, props);
        }

        babelHelpers.createClass(VASDetailsModal, [{
            key: "renderSimple",
            value: function renderSimple() {
                var detailsHTML = {
                    __html: this.props.details
                };
                return this.props.details && /*#__PURE__*/ _react.default.createElement("div", {
                    dangerouslySetInnerHTML: detailsHTML
                });
            }
        }, {
            key: "render",
            value: function render() {
                var details = this.renderSimple();
                return /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraModal, {
                    id: this.props.id,
                    showClose: true,
                    narrow: true
                }, /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement(VASDetailsHeader, {
                    icon: this.props.icon,
                    header: this.props.header,
                    productName: this.props.productName,
                    slogan: this.props.slogan,
                    prices: this.props.prices
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-full-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-10 l-col-medium-12 l-col-small-12 large-offset-by-2 u-small-margin-top u-margin"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-separator"
                }))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-full-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-10 l-col-medium-12 l-col-small-12 large-offset-by-2"
                }, details))));
            }
        }]);
        return VASDetailsModal;
    }(_react.Component);

    VASDetailsModal.defaultProps = {
        id: "",
        details: "",
        slogan: "",
        header: "default: Szczegóły usługi"
    };
    VASDetailsModal.propTypes = {
        id: _propTypes.PropTypes.string,
        icon: _propTypes.PropTypes.string,
        details: _propTypes.PropTypes.string,
        slogan: _propTypes.PropTypes.string,
        productName: _propTypes.PropTypes.string,
        header: _propTypes.PropTypes.string,
        prices: _propTypes.PropTypes.arrayOf(_propTypes.PropTypes.object)
    };

    var VASDetailsHeader = function VASDetailsHeader(props) {
        var icon = props.icon ? props.icon : "funpack-2";
        var iconSize = " g-icon--l";
        var prices = props.prices.map(function(charge) {
            var priceStr = _OnlineUtils.default.formatPrice(charge.price);

            return {
                integer: priceStr.split(',')[0],
                fraction: priceStr.split(',')[1],
                currency: charge.currency,
                start: charge.monthFrom,
                end: charge.monthTo
            };
        });
        return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("p", {
            className: "h3 u-spacing-l"
        }, props.header), /*#__PURE__*/ _react.default.createElement(VASDetailsDesktopHeader, {
            icon: icon,
            iconSize: iconSize,
            productName: props.productName,
            slogan: props.slogan,
            prices: prices
        }), /*#__PURE__*/ _react.default.createElement(VASDetailsMobileHeader, {
            icon: icon,
            iconSize: iconSize,
            productName: props.productName,
            slogan: props.slogan,
            prices: prices
        }));
    };

    var VASDetailsDesktopHeader = function VASDetailsDesktopHeader(props) {
        return /*#__PURE__*/ _react.default.createElement(_RWDUtils.ResponsiveVisibility, {
            mobile: false
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-full-row"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-2"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "u-padding-top-l u-padding-m u-large-left u-medium-left g-icon g-icon--only g-icon--" + props.icon + props.iconSize
        })), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-6"
        }, /*#__PURE__*/ _react.default.createElement("p", {
            className: "h5 u-spacing-top-l"
        }, props.productName), props.slogan && /*#__PURE__*/ _react.default.createElement("p", {
            className: "u-margin",
            dangerouslySetInnerHTML: {
                __html: props.slogan
            }
        })), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-4"
        }, /*#__PURE__*/ _react.default.createElement(_PriceBoxes.DesktopPriceBox, {
            prices: props.prices
        }))));
    };

    var VASDetailsMobileHeader = function VASDetailsMobileHeader(props) {
        return /*#__PURE__*/ _react.default.createElement(_RWDUtils.ResponsiveVisibility, {
            desktop: false,
            mobile: true
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-full-row"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-5"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "g-icon g-icon--only g-icon--" + props.icon + props.iconSize
        })), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-7"
        }, /*#__PURE__*/ _react.default.createElement(_PriceBoxes.MobilePriceBox, {
            prices: props.prices
        })), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-12"
        }, /*#__PURE__*/ _react.default.createElement("p", {
            className: "h5 u-spacing-top-m"
        }, props.productName), props.slogan && /*#__PURE__*/ _react.default.createElement("p", {
            className: "u-margin",
            dangerouslySetInnerHTML: {
                __html: props.slogan
            }
        }))));
    };

    var _default = VASDetailsModal;
    _exports.default = _default;
});
//# sourceMappingURL=VASDetailsModal.js.map