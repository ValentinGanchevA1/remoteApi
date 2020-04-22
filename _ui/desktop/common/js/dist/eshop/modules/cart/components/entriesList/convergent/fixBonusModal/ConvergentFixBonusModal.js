define(["exports", "react", "../vasModal/ConvergentAnalyzerAdapter", "../../../../analyzer/DeviceUtils", "../../fix/buymore/ConvergentSecondaryChoiceBonusModal"], function(_exports, _react, _ConvergentAnalyzerAdapter, _DeviceUtils, _ConvergentSecondaryChoiceBonusModal) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.ConvergentFixBonusModal = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _ConvergentAnalyzerAdapter = babelHelpers.interopRequireDefault(_ConvergentAnalyzerAdapter);
    _ConvergentSecondaryChoiceBonusModal = babelHelpers.interopRequireDefault(_ConvergentSecondaryChoiceBonusModal);

    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
            keys.push.apply(keys, symbols);
        }
        return keys;
    }

    function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
                ownKeys(Object(source), true).forEach(function(key) {
                    babelHelpers.defineProperty(target, key, source[key]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
                ownKeys(Object(source)).forEach(function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
            }
        }
        return target;
    }

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

    var ConvergentFixBonusModal = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(ConvergentFixBonusModal, _Component);

        var _super = _createSuper(ConvergentFixBonusModal);

        function ConvergentFixBonusModal() {
            babelHelpers.classCallCheck(this, ConvergentFixBonusModal);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(ConvergentFixBonusModal, [{
            key: "render",
            value: function render() {
                var _this = this;

                var configurables = JSON.parse(JSON.stringify(this.props.convergentConfigurables.configurables));
                var secondaryConfigurable = configurables.find(function(conf) {
                    return _this.props.isSecondaryConfigurable(conf);
                });

                var enrichedBonus = _objectSpread({}, this.props.bonus, {
                    propositionId: secondaryConfigurable.propositionId
                });

                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement(_ConvergentAnalyzerAdapter.default, {
                    configurables: configurables,
                    entry: this.props.entry,
                    updateCartProducts: this.props.updateCartProducts,
                    customRules: this.props.customRules || (0, _DeviceUtils.createCustomRules)(this.props.services, this.props.migrated),
                    ref: function ref(adapter) {
                        _this.adapter = adapter;
                    }
                }, /*#__PURE__*/ _react.default.createElement(_ConvergentSecondaryChoiceBonusModal.default, {
                    uid: this.props.uid,
                    label: this.props.label,
                    open: this.props.fixBonusModalVisible,
                    services: this.props.services,
                    bonus: enrichedBonus,
                    onClose: this.props.onClose,
                    descriptions: this.props.descriptions,
                    showNetPrices: this.props.showNetPrices,
                    factory: secondaryConfigurable.factoryName,
                    configurables: configurables,
                    migratedProducts: this.props.migratedProducts
                })));
            }
        }]);
        return ConvergentFixBonusModal;
    }(_react.Component);

    _exports.ConvergentFixBonusModal = ConvergentFixBonusModal;
});
//# sourceMappingURL=ConvergentFixBonusModal.js.map