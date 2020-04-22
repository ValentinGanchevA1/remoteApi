define(["exports", "react", "eshop/modules/configurator/components/lp/offers/newOfferBoxComponents/Feature"], function(_exports, _react, _Feature) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.ClassificationAttributesBox = void 0;
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

    var ClassificationAttributesBox = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(ClassificationAttributesBox, _Component);

        var _super = _createSuper(ClassificationAttributesBox);

        function ClassificationAttributesBox() {
            babelHelpers.classCallCheck(this, ClassificationAttributesBox);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(ClassificationAttributesBox, [{
            key: "render",
            value: function render() {
                var _this = this;

                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-l-xl u-padding-top-l-xl"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "js-layout-fixer-group-classification-attribute"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "js-height-sensitive-element"
                }, this.props.featuresGroup.map(function(feature, index, array) {
                    return /*#__PURE__*/ _react.default.createElement(_Feature.Feature, {
                        key: feature.code + _this.props.id,
                        removeClassFromLast: true,
                        feature: feature,
                        className: "u-padding-l",
                        length: array.length,
                        index: index,
                        processType: _this.props.processType,
                        convergence: _this.props.convergence
                    });
                }))));
            }
        }]);
        return ClassificationAttributesBox;
    }(_react.Component);

    _exports.ClassificationAttributesBox = ClassificationAttributesBox;
});
//# sourceMappingURL=ClassificationAttributesBox.js.map