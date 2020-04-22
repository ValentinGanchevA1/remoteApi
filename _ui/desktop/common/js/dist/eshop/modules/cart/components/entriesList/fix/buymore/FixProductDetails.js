define(["exports", "react", "prop-types", "eshop/modules/cart/analyzer/TvChannelUtils"], function(_exports, _react, _propTypes, _TvChannelUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = _exports.OfferAdapterForTvDetails = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);

    var UniversalProductDetails = function UniversalProductDetails(props) {
        if (props.vas.tvChannelList && props.vas.tvChannelList.length > 0) {
            return /*#__PURE__*/ _react.default.createElement(TvDetails, props);
        }

        return /*#__PURE__*/ _react.default.createElement(SimpleDetails, props);
    };

    var SimpleDetails = function SimpleDetails(props) {
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "g-gray1-bg u-padding-all-l u-no-padding-bottom u-text-left"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-3 l-col-3 "
        }), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-9 l-col-9",
            dangerouslySetInnerHTML: {
                __html: props.vas.longDescription
            }
        })));
    };

    var OfferAdapterForTvDetails = function OfferAdapterForTvDetails(props) {
        var matchingTvPackage = props.tvPackages.find(function(tv) {
            return props.productCode === tv.id;
        });
        return /*#__PURE__*/ _react.default.createElement(TvDetails, {
            vas: matchingTvPackage
        });
    };

    _exports.OfferAdapterForTvDetails = OfferAdapterForTvDetails;

    var TvDetails = function TvDetails(props) {
        if (!props || !props.vas) {
            return null;
        }

        var groupedChannels = (0, _TvChannelUtils.groupChannelsByCategories)(props.vas.tvChannelList);
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "g-gray1-bg u-padding-all-l u-no-padding-bottom u-text-left",
            style: {
                overflow: "hidden"
            }
        }, groupedChannels && Object.keys(groupedChannels).length > 0 && Object.keys(groupedChannels).map(function(group) {
            return /*#__PURE__*/ _react.default.createElement(TvChannelCategory, {
                key: groupedChannels[group].label,
                group: groupedChannels[group]
            });
        }));
    };

    var TvChannelCategory = function TvChannelCategory(props) {
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-3 l-col-3 "
        }, /*#__PURE__*/ _react.default.createElement("p", {
            className: "u-small-spacing-l"
        }, props.group.label, " :")), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-9 l-col-9 "
        }, /*#__PURE__*/ _react.default.createElement("ul", {
            className: "opl-tv-channel-list opl-package-tv-choose"
        }, props.group.channels.map(function(channel, index) {
            return /*#__PURE__*/ _react.default.createElement(TvChannelBox, {
                key: channel.code,
                channel: channel
            });
        }))));
    };

    var TvChannelBox = function TvChannelBox(props) {
        return /*#__PURE__*/ _react.default.createElement("li", {
            className: "l-group__element opl-tv-channel-list__element opl-package-tv-choose__item u-margin-right"
        }, props.channel.code.includes("HD") && /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-package-tv-choose__hd"
        }, "HD"), /*#__PURE__*/ _react.default.createElement("label", {
            className: "o-checker__wrapper opl-checkbox opl-checker__wrapper"
        }, /*#__PURE__*/ _react.default.createElement("input", {
            type: "checkbox",
            name: props.channel.code,
            checked: ""
        }), /*#__PURE__*/ _react.default.createElement("span", {
            className: "o-checker"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            title: props.channel.code,
            lang: "en"
        }, /*#__PURE__*/ _react.default.createElement("img", {
            src: !("empty" === props.channel.image) ? props.channel.image : "//:0",
            alt: props.channel.name
        })))));
    };

    var _default = UniversalProductDetails;
    _exports.default = _default;
});
//# sourceMappingURL=FixProductDetails.js.map