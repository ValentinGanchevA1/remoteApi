define(["exports", "react", "react-redux"], function(e, t, a) {
    "use strict";

    function i(i) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(i);
            if (function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return;
                    if (Reflect.construct.sham) return;
                    if ("function" == typeof Proxy) return 1;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 1
                    } catch (e) {
                        return
                    }
                }()) {
                var a = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, a)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var r = function(e) {
        babelHelpers.inherits(a, e);
        var t = i(a);

        function a(e) {
            return babelHelpers.classCallCheck(this, a), t.call(this, e)
        }
        return babelHelpers.createClass(a, [{
            key: "renderHeadStructuralMetaData",
            value: function() {
                var e = 0 < this.props.deviceData.variantList[0].stockLevel ? "In stock" : "Out of stock ",
                    t = "<div>";
                t += '<div itemType="http://schema.org/Product" itemScope>', t += '<meta itemprop="name" content="' + this.props.deviceData.name + '"/>', this.props.deviceData.seoData.seoGalleryList.forEach(function(e) {
                    t += '<link itemprop="image" href="' + window.location.hostname + e.imageUrls + '" />'
                }), this.props.deviceData.seoData.description && (t += '<meta itemprop="description" content="' + this.props.deviceData.seoData.description + '"/>'), t += '<div itemprop="offers" itemtype="Sprzedaż bez abonamentu" itemscope>', t += '<meta itemprop="url" content="' + document.querySelector("link[rel='canonical']").getAttribute("href") + '"/>', t += '<meta itemprop="availability" content="' + e + '"/>', t += '<meta itemprop="priceCurrency" content="PLN" />', t += '<meta itemprop="price" content="' + this.props.deviceData.variantList[0].devicePaymentsData.oneTimePayment.price + '"/>', t += '<meta itemprop="priceValidUntil" content="' + this.props.deviceData.variantList[0].devicePaymentsData.dateRange.end + '" />', t += '<div itemprop="seller" itemtype="http://schema.org/Organization" itemscope>', t += '<meta itemprop="name" content="' + this.props.deviceData.name + '"/>', t += "</div></div>", 0 < this.props.deviceData.numberOfReviewsCustomers && (t += '<div itemprop="aggregateRating" itemtype="http://schema.org/AggregateRating" itemscope>', t += '<meta itemprop="worstRating" content="' + this.props.deviceData.seoData.worstRating + '"/>', t += '<meta itemprop="reviewCount" content="' + this.props.deviceData.numberOfReviewsCustomers + '"/>', t += '<meta itemprop="ratingValue" content="' + this.props.deviceData.averageRatingCustomers + '"/>', t += '<meta itemprop="bestRating" content="' + this.props.deviceData.seoData.bestRating + '"/>', t += "</div>"), this.props.deviceData.seoData.manufacturerAID && (t += '<meta itemprop="sku" content="' + this.props.deviceData.seoData.manufacturerAID + '" />'), this.props.deviceData.seoData.ean && (t += '<meta itemprop="gtin' + this.props.deviceData.seoData.ean.length + '" content="' + this.props.deviceData.seoData.ean + '" />'), this.props.deviceData.seoData.manufacturer && (t += '<div itemprop="brand" itemtype="' + this.props.deviceData.seoData.manufacturer + '" itemscope>', t += '<meta itemprop="name" content="' + this.props.deviceData.name + '"/>', t += "</div>"), t += "</div>", t += "</div>", $("head").append(t)
            }
        }, {
            key: "componentDidMount",
            value: function() {
                this.renderHeadStructuralMetaData()
            }
        }, {
            key: "render",
            value: function() {
                return null
            }
        }]), a
    }((t = babelHelpers.interopRequireDefault(t)).default.Component);
    e.default = r
});
//# sourceMappingURL=ProductSeoMetaDataComponent.js.map