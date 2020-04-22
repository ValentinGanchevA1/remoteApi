define(["exports", "react", "react-redux", "../../selectors"], function(_exports, _react, _reactRedux, _selectors) {
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

    var SogProductListBannerView = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(SogProductListBannerView, _Component);

        var _super = _createSuper(SogProductListBannerView);

        function SogProductListBannerView(props) {
            babelHelpers.classCallCheck(this, SogProductListBannerView);
            return _super.call(this, props);
        }

        babelHelpers.createClass(SogProductListBannerView, [{
            key: "toHTML",
            value: function toHTML(content) {
                return {
                    __html: content
                };
            }
        }, {
            key: "render",
            value: function render() {
                return this.props.isSimfreeInstOfferType && this.props.content ? /*#__PURE__*/ _react.default.createElement("div", {
                    className: "sog-banner-component u-spacing-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    dangerouslySetInnerHTML: this.toHTML(this.props.content)
                })) : null;
            }
        }]);
        return SogProductListBannerView;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            isSimfreeInstOfferType: (0, _selectors.isSimfreeInstOfferType)(state)
        };
    };

    var SogProductListBannerComponent = (0, _reactRedux.connect)(mapStateToProps)(SogProductListBannerView);
    var _default = SogProductListBannerComponent;
    _exports.default = _default;
});
//# sourceMappingURL=SogProductListBannerComponent.js.map