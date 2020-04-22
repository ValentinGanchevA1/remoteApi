define(["exports", "react", "react-redux", "../MultiCartItemComponent", "eshop/flux/utils/OraModalService", "../productDetails/VASDetailsModal", "eshop/modules/cart/actions/cart", "eshop/modules/cart/selectors"], function(_exports, _react, _reactRedux, _MultiCartItemComponent, _OraModalService, _VASDetailsModal, _cart, _selectors) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _MultiCartItemComponent = babelHelpers.interopRequireDefault(_MultiCartItemComponent);
    _OraModalService = babelHelpers.interopRequireDefault(_OraModalService);
    _VASDetailsModal = babelHelpers.interopRequireDefault(_VASDetailsModal);

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

    var VAS_CHARACTERISTIC_MANDATORY = "MANDATORY";

    var VasEntryComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(VasEntryComponent, _Component);

        var _super = _createSuper(VasEntryComponent);

        function VasEntryComponent(props) {
            var _this;

            babelHelpers.classCallCheck(this, VasEntryComponent);
            _this = _super.call(this, props);
            _this.name = _this.props.entry.bundleNo + "_" + _this.props.entry.entryNo;
            _this.isMandatoryVas = _this.isMandatoryVas.bind(babelHelpers.assertThisInitialized(_this));
            return _this;
        }

        babelHelpers.createClass(VasEntryComponent, [{
            key: "componentWillMount",
            value: function componentWillMount() {
                var _this2 = this;

                var header = this.props.detailsHeader ? this.props.detailsHeader : "def: Szczegóły usługi";
                var details;

                try {
                    details = this.props.entry.details ? JSON.parse(this.props.entry.details) : "";
                } catch (e) {
                    details = this.props.entry.details;
                }

                _OraModalService.default.add(function(data) {
                    return /*#__PURE__*/ _react.default.createElement(_VASDetailsModal.default, {
                        id: "productDetails-" + _this2.name,
                        header: header,
                        details: details,
                        icon: _this2.props.entry.thumbnailIcon,
                        productName: _this2.props.entry.name,
                        slogan: _this2.props.entry.slogan,
                        prices: _this2.props.entry.monthlyPrices
                    });
                });
            }
        }, {
            key: "onDetailsClicked",
            value: function onDetailsClicked() {
                _OraModalService.default.open("productDetails-" + this.name);
            }
        }, {
            key: "isMandatoryVas",
            value: function isMandatoryVas(vases, propositionId, entry) {
                return vases.filter(function(vas) {
                    return vas.propositionId == propositionId;
                }).map(function(vas) {
                    return vas.services;
                }).reduce(function(x, y) {
                    return x.concat(y);
                }, []).filter(function(service) {
                    return service.id == entry.productCode && service.characteristics.indexOf(VAS_CHARACTERISTIC_MANDATORY) > -1;
                }).length > 0;
            }
        }, {
            key: "onRemoveClicked",
            value: function onRemoveClicked() {
                console.log("VAS delete clicked");
                var toBeRemoved = [this.props.entry.productCode];
                this.props.updateCartVases(this.props.propositionId, this.props.bundle, this.props.cartBundle, toBeRemoved, []);
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement(_MultiCartItemComponent.default, {
                    entry: this.props.entry,
                    type: "VAS",
                    startPricePropertyName: "firstBillPrice",
                    onDetailsClicked: this.props.showDetails && this.onDetailsClicked.bind(this),
                    onChangeClicked: this.props.onChangeClicked,
                    onRemoveClicked: this.isMandatoryVas(this.props.vases, this.props.propositionId, this.props.entry) ? null : this.onRemoveClicked.bind(this),
                    topBorder: this.props.topBorder,
                    bottomBorder: true
                });
            }
        }]);
        return VasEntryComponent;
    }(_react.Component);

    VasEntryComponent.defaultProps = {
        showDetails: true
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            vases: (0, _selectors.getMobileVases)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            updateCartVases: function updateCartVases(bundle, offer, cartBundle, productsToRemove, productsToAdd) {
                return dispatch((0, _cart.updateCartVases)(bundle, offer, cartBundle, productsToRemove, productsToAdd));
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(VasEntryComponent);

    _exports.default = _default;
});
//# sourceMappingURL=VasEntryComponent.js.map