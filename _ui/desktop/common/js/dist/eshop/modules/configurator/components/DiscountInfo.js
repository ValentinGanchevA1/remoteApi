define(["exports", "react", "eshop/modules/core/components/ui/OraHtmlText", "prop-types"], function(_exports, _react, _OraHtmlText, _propTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _OraHtmlText = babelHelpers.interopRequireDefault(_OraHtmlText);
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

    var DiscountInfo = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(DiscountInfo, _React$Component);

        var _super = _createSuper(DiscountInfo);

        function DiscountInfo() {
            babelHelpers.classCallCheck(this, DiscountInfo);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(DiscountInfo, [{
            key: "getInfoDescription",
            value: function getInfoDescription() {
                var discount = "Kwoty abonamentów uwzględniają rabaty za wyrażenie zgody na e-fakturę i terminowe płatności – 5 zł/mies. oraz zgód marketingowych – 5 zł/mies.";
                var discountSoft = "Kwoty abonamentów uwzględniają rabaty za wyrażenie zgody na e-fakturę i terminowe płatności – 5 zł/mies. oraz zgód marketingowych – 5 zł/mies., oraz rabat za łączenie usług w Orange – 20 zł/mies.";
                var defaultDescriptions = {
                    "discountInfo.VOICE.default": discount,
                    "discountInfo.DATA.default": discount,
                    "discountInfo.VOICE.SOFT_BUNDLE_DUET": discountSoft,
                    "discountInfo.DATA.SOFT_BUNDLE_DUET": discountSoft,
                    "discountInfo.VOICE.SOFT_BUNDLE_COV": discountSoft,
                    "discountInfo.DATA.SOFT_BUNDLE_COV": discountSoft
                };
                var descriptionKey = "discountInfo." + this.props.offerType + "." + (this.props.contractRole ? this.props.contractRole : "default");
                console.log("DiscountInfo descriptionKey", descriptionKey);
                return this.props.descriptions[descriptionKey] || defaultDescriptions[descriptionKey];
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: this.props.className
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-icon-text__icon"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "g-icon g-icon--info g-icon--before g-bluef-c g-icon--xs-s"
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-icon-text__text u-strong u-vertical-middle"
                }, /*#__PURE__*/ _react.default.createElement(_OraHtmlText.default, null, this.getInfoDescription())));
            }
        }]);
        return DiscountInfo;
    }(_react.default.Component);

    DiscountInfo.propTypes = {
        descriptions: _propTypes.default.objectOf(_propTypes.default.string).isRequired,
        contractRole: _propTypes.default.string,
        offerType: _propTypes.default.string.isRequired
    };
    DiscountInfo.defaultProps = {
        className: "u-padding-s"
    };
    var _default = DiscountInfo;
    _exports.default = _default;
});
//# sourceMappingURL=DiscountInfo.js.map