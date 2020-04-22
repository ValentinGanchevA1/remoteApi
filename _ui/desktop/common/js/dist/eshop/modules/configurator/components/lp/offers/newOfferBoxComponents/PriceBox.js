define(["exports", "react", "eshop/modules/core/components/ui/TooltipFromHtml", "eshop/modules/configurator/components/lp/offers/newOfferBoxComponents/Feature"], function(_exports, _react, _TooltipFromHtml, _Feature) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.PriceBox = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _TooltipFromHtml = babelHelpers.interopRequireDefault(_TooltipFromHtml);

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

    var PriceBox = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(PriceBox, _Component);

        var _super = _createSuper(PriceBox);

        function PriceBox() {
            babelHelpers.classCallCheck(this, PriceBox);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(PriceBox, [{
            key: "mapFeaturesWithPositions",
            value: function mapFeaturesWithPositions() {
                var featuresPositions = this.props.featuresPositions;
                var featuresGroup = this.props.featuresGroup;
                var positioned = [];
                featuresPositions.forEach(function(f) {
                    var feature = featuresGroup.find(function(feat) {
                        return feat.code == f;
                    });
                    if (feature) positioned.push(feature);
                    else positioned.push({});
                });
                return positioned;
            }
        }, {
            key: "render",
            value: function render() {
                var _this = this;

                var price = this.props.price && this.props.price.split(',');
                var integerPricePart = price && price[0];
                var fractionPricePart = price && price[1];
                var style = {
                    "minWidth": "100%"
                };
                var featuresGroup = this.mapFeaturesWithPositions();
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    key: "div1_" + this.props.id,
                    className: "u-spacing-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "js-layout-rateplan-name-fixer u-animate-height"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "js-height-sensitive-element"
                }, /*#__PURE__*/ _react.default.createElement("p", null, this.props.name)))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-clearfix"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    style: style,
                    className: "u-right u-small-right u-text-left u-text-nowrap"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-table u-margin-minus-right-l u-small-margin-minus-right"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-table-cell"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-price-v2 opl-price-v2--l",
                    "data-price": this.props.price
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-price-v2__part"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-price-v2__whole"
                }, integerPricePart)), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-price-v2__part"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-price-v2__separator"
                }, ","), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-price-v2__decimal"
                }, fractionPricePart), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-price-v2__suffix"
                }, "z\u0142/mies.")))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-table-cell u-vertical-top"
                }, this.props.oldPrice && this.props.tooltipValues ? _TooltipFromHtml.default.conditionalRender(this.props.tooltipValues['convergent']) : _TooltipFromHtml.default.conditionalRender(this.props.tooltipValues['noConvergent']))))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "js-layout-fixer-group-1"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "js-height-sensitive-element"
                }, this.props.oldPrice && /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-padding-top u-font-bold g-gray5-c u-text-line-through"
                }, this.props.oldPrice + " zł/mies."))), featuresGroup.map(function(feature, index) {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        key: "Feature_" + index + "_" + _this.props.id,
                        className: "js-layout-fixer-group-" + (2 + index) + " feature" + index
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "js-height-sensitive-element"
                    }, feature.code && /*#__PURE__*/ _react.default.createElement(_Feature.Feature, {
                        key: feature.code + _this.props.id,
                        removeClassFromLast: true,
                        feature: feature,
                        className: "u-padding-top-l",
                        processType: _this.props.processType,
                        convergence: _this.props.convergence
                    })));
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "js-layout-fixer-group-4"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "js-height-sensitive-element"
                })));
            }
        }]);
        return PriceBox;
    }(_react.Component);

    _exports.PriceBox = PriceBox;
});
//# sourceMappingURL=PriceBox.js.map