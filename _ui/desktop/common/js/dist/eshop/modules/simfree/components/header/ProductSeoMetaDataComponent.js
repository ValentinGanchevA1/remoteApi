define(["exports", "react", "react-redux"], function(_exports, _react, _reactRedux) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);

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

    var ProductSeoMetaDataComponent = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(ProductSeoMetaDataComponent, _React$Component);

        var _super = _createSuper(ProductSeoMetaDataComponent);

        function ProductSeoMetaDataComponent(props) {
            babelHelpers.classCallCheck(this, ProductSeoMetaDataComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(ProductSeoMetaDataComponent, [{
            key: "renderHeadStructuralMetaData",
            value: function renderHeadStructuralMetaData() {
                var availablity = this.props.deviceData.variantList[0].stockLevel > 0 ? "In stock" : "Out of stock ";
                var html = '<div>';
                html += '<div itemType="http://schema.org/Product" itemScope>';
                html += '<meta itemprop="name" content="' + this.props.deviceData.name + '"/>';
                this.props.deviceData.seoData.seoGalleryList.forEach(function(seoData) {
                    html += '<link itemprop="image" href="' + window.location.hostname + seoData.imageUrls + '" />';
                });

                if (this.props.deviceData.seoData.description) {
                    html += '<meta itemprop="description" content="' + this.props.deviceData.seoData.description + '"/>';
                }

                html += '<div itemprop="offers" itemtype="Sprzedaż bez abonamentu" itemscope>';
                html += '<meta itemprop="url" content="' + document.querySelector("link[rel='canonical']").getAttribute("href") + '"/>';
                html += '<meta itemprop="availability" content="' + availablity + '"/>';
                html += '<meta itemprop="priceCurrency" content="PLN" />';
                html += '<meta itemprop="price" content="' + this.props.deviceData.variantList[0].devicePaymentsData.oneTimePayment.price + '"/>';
                html += '<meta itemprop="priceValidUntil" content="' + this.props.deviceData.variantList[0].devicePaymentsData.dateRange.end + '" />';
                html += '<div itemprop="seller" itemtype="http://schema.org/Organization" itemscope>';
                html += '<meta itemprop="name" content="' + this.props.deviceData.name + '"/>';
                html += '</div></div>';

                if (this.props.deviceData.numberOfReviewsCustomers > 0) {
                    html += '<div itemprop="aggregateRating" itemtype="http://schema.org/AggregateRating" itemscope>';
                    html += '<meta itemprop="worstRating" content="' + this.props.deviceData.seoData.worstRating + '"/>';
                    html += '<meta itemprop="reviewCount" content="' + this.props.deviceData.numberOfReviewsCustomers + '"/>';
                    html += '<meta itemprop="ratingValue" content="' + this.props.deviceData.averageRatingCustomers + '"/>';
                    html += '<meta itemprop="bestRating" content="' + this.props.deviceData.seoData.bestRating + '"/>';
                    html += '</div>';
                }

                if (this.props.deviceData.seoData.manufacturerAID) {
                    html += '<meta itemprop="sku" content="' + this.props.deviceData.seoData.manufacturerAID + '" />';
                }

                if (this.props.deviceData.seoData.ean) {
                    html += '<meta itemprop="' + 'gtin' + this.props.deviceData.seoData.ean.length + '"' + ' content="' + this.props.deviceData.seoData.ean + '" />';
                }

                if (this.props.deviceData.seoData.manufacturer) {
                    html += '<div itemprop="brand" itemtype="' + this.props.deviceData.seoData.manufacturer + '" itemscope>';
                    html += '<meta itemprop="name" content="' + this.props.deviceData.name + '"/>';
                    html += '</div>';
                }

                html += '</div>';
                html += '</div>';
                $('head').append(html);
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.renderHeadStructuralMetaData();
            }
        }, {
            key: "render",
            value: function render() {
                return null;
            }
        }]);
        return ProductSeoMetaDataComponent;
    }(_react.default.Component);

    _exports.default = ProductSeoMetaDataComponent;
});
//# sourceMappingURL=ProductSeoMetaDataComponent.js.map