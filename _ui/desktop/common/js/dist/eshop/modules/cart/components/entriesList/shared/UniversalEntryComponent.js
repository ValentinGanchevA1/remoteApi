define(["exports", "react", "lodash", "eshop/flux/utils/OraModalService", "../fix/productDetails/FixDetailsModal", "./CommonProductEntry", "../ProductTypeEnum"], function(_exports, _react, _lodash, _OraModalService, _FixDetailsModal, _CommonProductEntry, _ProductTypeEnum) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _lodash = babelHelpers.interopRequireDefault(_lodash);
    _OraModalService = babelHelpers.interopRequireDefault(_OraModalService);
    _FixDetailsModal = babelHelpers.interopRequireDefault(_FixDetailsModal);
    _CommonProductEntry = babelHelpers.interopRequireDefault(_CommonProductEntry);
    _ProductTypeEnum = babelHelpers.interopRequireDefault(_ProductTypeEnum);

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

    var UniversalEntryComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(UniversalEntryComponent, _Component);

        var _super = _createSuper(UniversalEntryComponent);

        function UniversalEntryComponent(props) {
            var _this;

            babelHelpers.classCallCheck(this, UniversalEntryComponent);
            _this = _super.call(this, props);
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "onRemove", function(event) {
                event.preventDefault();
                console.log("Removing " + _this.props.entry.name);

                _this.props.onRemove(_this.props.entry.productCode, _this.props.entry.bundleNo);
            });
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "lowerInstallmentsClicked", function(event) {
                event.preventDefault();
                console.log("lowerInstallmentsClicked " + _this.props.entry.bundleNo);

                _this.props.lowerInstallmentsClicked(_this.props.entry.bundleNo);
            });
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "onChange", function(event) {
                event.preventDefault();
                console.log("Changing " + _this.props.entry.name);

                _this.props.onChange();
            });
            _this.onDetails = _this.onDetails.bind(babelHelpers.assertThisInitialized(_this));
            return _this;
        }

        babelHelpers.createClass(UniversalEntryComponent, [{
            key: "componentWillMount",
            value: function componentWillMount() {
                var _this2 = this;

                _OraModalService.default.add(function(data) {
                    return /*#__PURE__*/ _react.default.createElement(_FixDetailsModal.default, {
                        id: _this2.getDetailsModalId(),
                        header: _this2.props.sectionConf && _this2.props.sectionConf.detailsLabel || "Szczegóły usługi",
                        details: _this2.parseDetails(_this2.props.entry.details),
                        icon: _this2.props.entry.thumbnailIcon,
                        productName: _this2.props.entry.name,
                        vas: _this2.props.entry,
                        net: _this2.props.showNetPrices
                    });
                });
            }
        }, {
            key: "onDetails",
            value: function onDetails(e) {
                e.preventDefault();

                _OraModalService.default.open(this.getDetailsModalId());
            }
        }, {
            key: "render",
            value: function render() {
                //TODO: Create minimal DTO consistent for fix and magnum (at least) so this mapping won't be necessary
                var entry = this.props.entry;
                var product = {
                    price: {
                        oneTimeCost: _objectSpread({}, entry.firstBillPrice && entry.firstBillPrice.price != 0 ? entry.firstBillPrice : entry.checkoutPrice),
                        monthlyCosts: entry.monthlyPrices,
                        installments: this.isMobileDevice()
                    },
                    code: entry.productCode || entry.code,
                    name: entry.name,
                    thumbnailIcon: entry.thumbnailIcon || "international-globe",
                    imageUrl: entry.imageUrl,
                    description: this._getDescriptionDesktop(),
                    changeable: !entry.unchangeable,
                    removable: !entry.mandatory
                };
                return /*#__PURE__*/ _react.default.createElement(_CommonProductEntry.default, {
                    borderTop: this.props.borderTop,
                    product: product,
                    onDetails: !this.isMobileDevice() && this.onDetails,
                    onRemove: this.props.onRemove && this.onRemove.bind(this),
                    onChange: this.props.onChange && this.onChange.bind(this),
                    lowerInstallmentsClicked: !!this.props.entry && this.props.entry.productType === _ProductTypeEnum.default.TERMINAL ? this.props.lowerInstallmentsClicked && this.lowerInstallmentsClicked.bind(this) : undefined,
                    descriptions: this.props.descriptions,
                    net: this.props.showNetPrices,
                    forFreeLabel: this.props.forFreeLabel,
                    serviceFreeLabel: this.props.serviceFreeLabel
                });
            }
        }, {
            key: "getDetailsModalId",
            value: function getDetailsModalId() {
                return "productEntryDetails-".concat(this.props.entry.productType, "-").concat(this.props.entry.entryNo);
            }
        }, {
            key: "parseDetails",
            value: function parseDetails(details) {
                try {
                    return details ? JSON.parse(details) : "";
                } catch (e) {
                    return details;
                }
            }
        }, {
            key: "isMobileDevice",
            value: function isMobileDevice() {
                return _lodash.default.includes([_ProductTypeEnum.default.TERMINAL, _ProductTypeEnum.default.EURO_SET], this.props.entry.productType);
            }
        }, {
            key: "_getDescriptionDesktop",
            value: function _getDescriptionDesktop() {
                return this.props.entry.productType === _ProductTypeEnum.default.TERMINAL ? this.props.entry.colorDefinition.name : this.props.entry.description;
            }
        }]);
        return UniversalEntryComponent;
    }(_react.Component);

    _exports.default = UniversalEntryComponent;
});
//# sourceMappingURL=UniversalEntryComponent.js.map