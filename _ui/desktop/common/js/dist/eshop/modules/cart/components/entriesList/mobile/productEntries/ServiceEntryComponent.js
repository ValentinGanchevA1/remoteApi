define(["exports", "react", "prop-types", "react-redux", "../MultiCartItemComponent", "eshop/flux/utils/OraModalService", "../../../CartDetailsModal", "eshop/modules/cart/actions/resources", "eshop/modules/cart/selectors", "eshop/utils/OnlineUtils", "eshop/modules/simfree/components/modals/OraVasPacketPickerComponent", "eshop/modules/cart/actions/cart"], function(_exports, _react, _propTypes, _reactRedux, _MultiCartItemComponent, _OraModalService, _CartDetailsModal, _resources, _selectors, _OnlineUtils, _OraVasPacketPickerComponent, _cart) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _MultiCartItemComponent = babelHelpers.interopRequireDefault(_MultiCartItemComponent);
    _OraModalService = babelHelpers.interopRequireDefault(_OraModalService);
    _CartDetailsModal = babelHelpers.interopRequireDefault(_CartDetailsModal);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    _OraVasPacketPickerComponent = babelHelpers.interopRequireDefault(_OraVasPacketPickerComponent);

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

    var ServiceEntryComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(ServiceEntryComponent, _Component);

        var _super = _createSuper(ServiceEntryComponent);

        function ServiceEntryComponent(props) {
            var _this;

            babelHelpers.classCallCheck(this, ServiceEntryComponent);
            _this = _super.call(this, props);
            _this.name = _this.props.entry.bundleNo + "_" + _this.props.entry.entryNo;
            _this.submitChangePackagesModal = _this.submitChangePackagesModal.bind(babelHelpers.assertThisInitialized(_this));
            _this.changePackages = _this.changePackages.bind(babelHelpers.assertThisInitialized(_this));
            return _this;
        }

        babelHelpers.createClass(ServiceEntryComponent, [{
            key: "componentWillMount",
            value: function componentWillMount() {
                var _this2 = this;

                var header = this.props.detailsHeader ? this.props.detailsHeader : "Szczegóły";
                var details = JSON.parse('[{"key":"brak", "value":"danych"}]');

                try {
                    details = JSON.parse(this.props.entry.details);
                } catch (err) {
                    console.log("## details on cart parsing error##   ");
                }

                _OraModalService.default.add(function(data) {
                    return /*#__PURE__*/ _react.default.createElement(_CartDetailsModal.default, {
                        id: "productDetails-" + _this2.name,
                        header: header,
                        details: details,
                        showNet: _this2.props.showNet,
                        proposition: _this2.props.entry
                    });
                });
            }
        }, {
            key: "onDetailsClicked",
            value: function onDetailsClicked() {
                console.log("Service details modal open clicked");

                _OraModalService.default.open("productDetails-" + this.name);
            }
        }, {
            key: "onRemoveClicked",
            value: function onRemoveClicked() {
                console.log("Service delete clicked");
            }
        }, {
            key: "onChangeClicked",
            value: function onChangeClicked() {
                console.log("Service change clicked");
            }
        }, {
            key: "onMsisdnChangeClicked",
            value: function onMsisdnChangeClicked(bundleNo) {
                this.props.resourceModalOpen(bundleNo);
            }
        }, {
            key: "lowerInstallmentsClicked",
            value: function lowerInstallmentsClicked(bundleNo) {
                this.props.lowerInstallmentsModalOpen(bundleNo);
            }
        }, {
            key: "shouldNotBeEditable",
            value: function shouldNotBeEditable() {
                return ['ASSIGNMENT', 'ASSIGNMENT_DEATH', 'MNP_APPLICATION', 'ASSIGNMENT_B2C_B2B', 'ASSIGNMENT_B2C_JDG'].includes(this.props.entry.processType) ? false : this.props.editable;
            }
        }, {
            key: "chooseStartPricePropertyName",
            value: function chooseStartPricePropertyName() {
                return _OnlineUtils.default.isAssignment(this.props.entry.processType) ? "checkoutPrice" : "firstBillPrice";
            }
        }, {
            key: "changePackages",
            value: function changePackages() {
                var data = this.props.changePackagesModalInitData[this.props.entry.bundleNo];

                if (data) {
                    _OraVasPacketPickerComponent.default.openPopup(_objectSpread({}, data, {
                        submit: this.submitChangePackagesModal
                    }));
                } else {
                    console.error('Cannot fetch changePackagesModalInitData for bundle ' + this.props.entry.bundleNo);
                }
            }
        }, {
            key: "submitChangePackagesModal",
            value: function submitChangePackagesModal(toAdd, toRemove, conflicts) {
                var toRemoveAndConflicts = conflicts.concat(toRemove);

                if (toRemoveAndConflicts[0] || toAdd[0]) {
                    this.props.updateCartVases(this.props.entry.bundleCode, this.props.entry.productCode, this.props.entry.bundleNo, toRemoveAndConflicts, toAdd);
                }
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement(_MultiCartItemComponent.default, {
                    key: "SIM_" + this.props.idx,
                    onRemoveClicked: this.props.editable && this.props.onRemoveClicked,
                    icon: this.props.mainIcon,
                    entry: this.props.entry,
                    type: "SIM",
                    showStartPriceAsActivation: this.props.editable && !_OnlineUtils.default.isMnpApplication(this.props.entry.processType),
                    startPricePropertyName: this.chooseStartPricePropertyName(),
                    onDetailsClicked: this.onDetailsClicked.bind(this),
                    onMsisdnChangeClicked: this.onMsisdnChangeClicked.bind(this, this.props.entry.bundleNo),
                    lowerInstallmentsClicked: this.lowerInstallmentsClicked.bind(this, this.props.entry.bundleNo),
                    tooltipValues: this.props.tooltipValues,
                    bottomBorder: this.props.bottomBorder,
                    editable: this.shouldNotBeEditable(),
                    processName: this.props.processName,
                    changePackages: this.changePackages
                });
            }
        }]);
        return ServiceEntryComponent;
    }(_react.Component);

    ServiceEntryComponent.propTypes = {
        idx: _propTypes.default.number.isRequired,
        mainIcon: _propTypes.default.string.isRequired,
        entry: _propTypes.default.object.isRequired
    };
    ServiceEntryComponent.defaultProps = {
        bottomBorder: false,
        editable: true
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            showNet: (0, _selectors.getPriceIsNet)(state),
            changePackagesModalInitData: (0, _selectors.getChangePackagesModalInitData)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            resourceModalOpen: function resourceModalOpen(bundleNo) {
                return dispatch((0, _resources.resourceModalOpen)(bundleNo));
            },
            lowerInstallmentsModalOpen: function lowerInstallmentsModalOpen(bundleNo) {
                return dispatch((0, _resources.lowerInstallmentsModalOpen)(bundleNo));
            },
            updateCartVases: function updateCartVases(bundle, offer, cartBundle, productsToRemove, productsToAdd) {
                return dispatch((0, _cart.updateCartVases)(bundle, offer, cartBundle, productsToRemove, productsToAdd));
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ServiceEntryComponent);

    _exports.default = _default;
});
//# sourceMappingURL=ServiceEntryComponent.js.map