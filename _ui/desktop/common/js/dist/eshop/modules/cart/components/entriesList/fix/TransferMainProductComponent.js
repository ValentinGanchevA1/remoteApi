define(["exports", "react", "react-redux", "lodash", "../shared/CommonPropositionEntry"], function(_exports, _react, _reactRedux, _lodash, _CommonPropositionEntry) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _lodash = babelHelpers.interopRequireDefault(_lodash);
    _CommonPropositionEntry = babelHelpers.interopRequireDefault(_CommonPropositionEntry);

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

    var TransferMainProductComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(TransferMainProductComponent, _Component);

        var _super = _createSuper(TransferMainProductComponent);

        function TransferMainProductComponent(props) {
            var _this;

            babelHelpers.classCallCheck(this, TransferMainProductComponent);
            _this = _super.call(this, props);
            _this.name = _this.props.entry.bundleNo + "_" + _this.props.entry.entryNo;
            return _this;
        }

        babelHelpers.createClass(TransferMainProductComponent, [{
            key: "prepareFixEntry",
            value: function prepareFixEntry() {
                var installationAddress;
                var potsNumber;

                if (this.props.entry.installationAddress) {
                    installationAddress = this.props.descriptions.assignmentAddressLabel + " " + this.props.entry.installationAddress;
                }

                if (this.props.entry.potsNumber) {
                    potsNumber = this.props.descriptions.assignmentPOTSLabel + " " + this.props.entry.potsNumber;
                }

                var additionalContent = /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-small-padding-top-s"
                }, installationAddress), /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-small-padding-top-s"
                }, potsNumber));

                return _objectSpread({}, this.props.entry.broadbandFixProduct, {
                    additionalContent: additionalContent
                });
            }
        }, {
            key: "render",
            value: function render() {
                var mainEntries = [];
                this.props.entry.broadbandFixProduct && mainEntries.push(this.prepareFixEntry());
                this.props.entry.priceForMainFixProducts.oneTimeCost = this.props.entry.totalCheckoutPrice;
                var descriptions = {};
                return /*#__PURE__*/ _react.default.createElement(_CommonPropositionEntry.default, {
                    mainEntries: mainEntries,
                    offerPrice: this.props.entry.priceForMainFixProducts,
                    loyaltyLength: this.props.entry.loyaltyLength,
                    bundleNo: this.props.entry.bundleNo,
                    entryNo: this.props.entry.entryNo,
                    descriptions: descriptions,
                    showNetPrices: this.props.showNetPrices,
                    rejectionReason: this.props.entry.rejectionReason,
                    showButtons: false
                });
            }
        }]);
        return TransferMainProductComponent;
    }(_react.Component);

    var _default = (0, _reactRedux.connect)(null, null)(TransferMainProductComponent);

    _exports.default = _default;
});
//# sourceMappingURL=TransferMainProductComponent.js.map