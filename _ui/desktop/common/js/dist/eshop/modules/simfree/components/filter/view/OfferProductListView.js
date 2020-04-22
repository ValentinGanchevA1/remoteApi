define(["exports", "react", "eshop/modules/core/components/ui/OraSwitcher", "eshop/modules/simfree/components/PropositionForDeviceMobileView", "eshop/utils/OnlineUtils"], function(_exports, _react, _OraSwitcher, _PropositionForDeviceMobileView, _OnlineUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _OraSwitcher = babelHelpers.interopRequireDefault(_OraSwitcher);
    _PropositionForDeviceMobileView = babelHelpers.interopRequireDefault(_PropositionForDeviceMobileView);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);

    var OfferProductListView = function OfferProductListView(props) {
        var proposition = props.offer;
        var dataDescription = props.offer && props.offer.bonusDescriptions && props.offer.bonusDescriptions.find(function(desc) {
            return desc.attribute === "data_desc";
        });
        console.log("DATA DESCRIPTION");
        console.log(props);
        var dataRetention = props.offer.features.getMobileRetentionDesc();
        var dataValue = dataDescription && dataDescription.value || "";

        if (dataRetention) {
            dataValue += dataRetention.value;
            dataValue = dataValue.replace(' ', '').replace('&nbsp;', '');
        }

        var innerHtmlForValue = {
            __html: dataValue
        };
        return /*#__PURE__*/ _react.default.createElement(_OraSwitcher.default, {
            key: props.index + "_switcher",
            onChangeHandler: props.onChange,
            isSelected: props.isSelected,
            className: " u-padding-all-l  u-padding-top u-padding"
        }, /*#__PURE__*/ _react.default.createElement(_PropositionForDeviceMobileView.default, babelHelpers.extends({}, props, {
            key: "desktop_" + proposition.id
        })), props.isSelected && _OnlineUtils.default.updateOgTag('product:retailer_part_no', proposition.id + '^' + props.selectedVariant));
    };

    var _default = OfferProductListView;
    _exports.default = _default;
});
//# sourceMappingURL=OfferProductListView.js.map