define(["exports", "react", "eshop/modules/core/components/ui/TooltipFromHtml"], function(_exports, _react, _TooltipFromHtml) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
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

    var PropositionFeatureForDevice = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(PropositionFeatureForDevice, _React$Component);

        var _super = _createSuper(PropositionFeatureForDevice);

        function PropositionFeatureForDevice() {
            var _this;

            babelHelpers.classCallCheck(this, PropositionFeatureForDevice);

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            _this = _super.call.apply(_super, [this].concat(args));
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "findDescription", function(bonusDescriptions) {
                var search = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "data_desc";
                return bonusDescriptions && bonusDescriptions.find(function(bonus) {
                    return bonus.attribute === search;
                });
            });
            return _this;
        }

        babelHelpers.createClass(PropositionFeatureForDevice, [{
            key: "icon",
            value: function icon() {
                return this.props.proposition.features.getMobileDataDesc().icon || "wifi2";
            }
        }, {
            key: "render",
            value: function render() {
                var data_desc = this.findDescription(this.props.proposition.bonusDescriptions);
                data_desc = data_desc ? data_desc.value : null;
                return _TooltipFromHtml.default.conditionalRenderWithClassName((!!data_desc ? data_desc : "") + (!!this.props.proposition.features.getMobileRetentionDesc() ? this.props.proposition.features.getMobileRetentionDesc() : ""), "");
            }
        }]);
        return PropositionFeatureForDevice;
    }(_react.default.Component);

    _exports.default = PropositionFeatureForDevice;
});
//# sourceMappingURL=PropositionFeatureForDevice.js.map