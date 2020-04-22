define(["exports", "react", "prop-types", "eshop/components/OraCommonComponents", "eshop/modules/core/components/ui/RWDUtils", "eshop/modules/cart/components/entriesList/shared/PriceBoxes", "eshop/modules/cart/components/entriesList/fix/buymore/Utils"], function(_exports, _react, _propTypes, _OraCommonComponents, _RWDUtils, _PriceBoxes, _Utils) {
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

    var FixDetailsModal = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(FixDetailsModal, _Component);

        var _super = _createSuper(FixDetailsModal);

        function FixDetailsModal(props) {
            babelHelpers.classCallCheck(this, FixDetailsModal);
            return _super.call(this, props);
        }

        babelHelpers.createClass(FixDetailsModal, [{
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
                }, /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement(VASDetailsHeader, this.props), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-full-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-10 l-col-medium-12 l-col-small-12 large-offset-by-2 u-small-margin-top u-margin"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-separator"
                }))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-full-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-10 large-offset-by-2"
                }, details))));
            }
        }]);
        return FixDetailsModal;
    }(_react.Component);

    FixDetailsModal.defaultProps = {
        id: "",
        details: "",
        header: "default: Szczegóły usługi"
    };
    FixDetailsModal.propTypes = {
        id: _propTypes.PropTypes.string,
        icon: _propTypes.PropTypes.string,
        details: _propTypes.PropTypes.string,
        productName: _propTypes.PropTypes.string,
        header: _propTypes.PropTypes.string,
        prices: _propTypes.PropTypes.arrayOf(_propTypes.PropTypes.object)
    };

    var VASDetailsHeader = function VASDetailsHeader(props) {
        var icon = props.icon ? props.icon : "funpack-2";
        var iconSize = props.icon && props.icon.indexOf(" ") > -1 ? "" : " g-icon--l";
        return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("p", {
            className: "h3 u-spacing-l"
        }, props.header), /*#__PURE__*/ _react.default.createElement(VASDetailsDesktopHeader, {
            icon: icon,
            iconSize: iconSize,
            productName: props.productName,
            vas: props.vas,
            net: props.net
        }), /*#__PURE__*/ _react.default.createElement(VASDetailsMobileHeader, {
            icon: icon,
            iconSize: iconSize,
            productName: props.productName,
            vas: props.vas,
            net: props.net
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
        }, props.productName), props.vas && props.vas.slogan && /*#__PURE__*/ _react.default.createElement("p", {
            className: "u-margin",
            dangerouslySetInnerHTML: {
                __html: props.vas.slogan
            }
        })), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-4"
        }, props.vas && /*#__PURE__*/ _react.default.createElement(_PriceBoxes.RwdPriceBox, {
            prices: (0, _Utils.transformPriceInfo)(props.vas.monthlyPrices, props.net),
            oneTimePrice: (0, _Utils.transformOneTimePriceInfo)(props.vas.firstBillPrice, props.net),
            checkoutPrice: (0, _Utils.transformOneTimePriceInfo)(props.vas.checkoutPrice, props.net)
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
        }, props.vas && /*#__PURE__*/ _react.default.createElement(_PriceBoxes.RwdPriceBox, {
            prices: (0, _Utils.transformPriceInfo)(props.vas.monthlyPrices, props.net),
            oneTimePrice: (0, _Utils.transformOneTimePriceInfo)(props.vas.firstBillPrice, props.net),
            checkoutPrice: (0, _Utils.transformOneTimePriceInfo)(props.vas.checkoutPrice, props.net)
        })), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-12"
        }, /*#__PURE__*/ _react.default.createElement("p", {
            className: "h5 u-spacing-top-m"
        }, props.productName), props.vas && props.vas.slogan && /*#__PURE__*/ _react.default.createElement("p", {
            className: "u-margin",
            dangerouslySetInnerHTML: {
                __html: props.vas.slogan
            }
        }))));
    };

    var _default = FixDetailsModal;
    _exports.default = _default;
});
//# sourceMappingURL=FixDetailsModal.js.map