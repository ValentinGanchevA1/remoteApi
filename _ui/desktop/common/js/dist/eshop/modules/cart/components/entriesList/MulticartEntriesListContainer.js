define(["exports", "react", "redux", "react-redux", "eshop/modules/cart/actions/cart", "../../selectors", "./mobile/MobileComponent", "./fix/FixComponent", "./simfree/SimfreeComponent", "./convergent/ConvergentComponent", "./tvUpsell/TvUpsellComponent", "./BundleTypeEnum", "../../../checkout/actions/data", "../MsisdnSimCardPickerModal", "../LowerInstallmentsModal", "./CartErrorModal", "eshop/modules/core/components/ui/TooltipFromHtml", "./fix/TransferComponent", "eshop/modules/simfree/components/modals/OraVasPacketPickerComponent"], function(_exports, _react, _redux, _reactRedux, _cart, _selectors, _MobileComponent, _FixComponent, _SimfreeComponent, _ConvergentComponent, _TvUpsellComponent, _BundleTypeEnum, _data, _MsisdnSimCardPickerModal, _LowerInstallmentsModal, _CartErrorModal, _TooltipFromHtml, _TransferComponent, _OraVasPacketPickerComponent) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _MobileComponent = babelHelpers.interopRequireDefault(_MobileComponent);
    _FixComponent = babelHelpers.interopRequireDefault(_FixComponent);
    _SimfreeComponent = babelHelpers.interopRequireDefault(_SimfreeComponent);
    _ConvergentComponent = babelHelpers.interopRequireDefault(_ConvergentComponent);
    _TvUpsellComponent = babelHelpers.interopRequireDefault(_TvUpsellComponent);
    _BundleTypeEnum = babelHelpers.interopRequireDefault(_BundleTypeEnum);
    _MsisdnSimCardPickerModal = babelHelpers.interopRequireDefault(_MsisdnSimCardPickerModal);
    _LowerInstallmentsModal = babelHelpers.interopRequireDefault(_LowerInstallmentsModal);
    _CartErrorModal = babelHelpers.interopRequireDefault(_CartErrorModal);
    _TooltipFromHtml = babelHelpers.interopRequireDefault(_TooltipFromHtml);
    _TransferComponent = babelHelpers.interopRequireDefault(_TransferComponent);
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

    var MulticartEntriesListContainer = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MulticartEntriesListContainer, _Component);

        var _super = _createSuper(MulticartEntriesListContainer);

        function MulticartEntriesListContainer(props) {
            var _this;

            babelHelpers.classCallCheck(this, MulticartEntriesListContainer);
            _this = _super.call(this, props);
            _this.state = {
                assignmentBoxCheck: false
            };
            _this.checkAssignmentDeathBox = _this.checkAssignmentDeathBox.bind(babelHelpers.assertThisInitialized(_this));
            _this.removeVoucher = _this.removeVoucher.bind(babelHelpers.assertThisInitialized(_this));
            return _this;
        }

        babelHelpers.createClass(MulticartEntriesListContainer, [{
            key: "checkAssignmentDeathBox",
            value: function checkAssignmentDeathBox() {
                this.setState({
                    assignmentBoxCheck: !this.state.assignmentBoxCheck
                });
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.props.fetchMiniCart();
                this.props.subscribeCustomerSelected();
            }
        }, {
            key: "lowerInstallmentsActive",
            value: function lowerInstallmentsActive() {
                return !!this.props.isLowerInstallmentsVisible;
            }
        }, {
            key: "removeVoucher",
            value: function removeVoucher(event, voucher) {
                event.preventDefault();
                this.props.removeVoucher(voucher);
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                var lowerInstallmentsActive = this.lowerInstallmentsActive();
                return /*#__PURE__*/ _react.default.createElement("div", null, this.props.entries && this.props.entries.length > 0 && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "g-gray1-bg u-padding-top-l "
                }, this.props.miniCart.vouchers && this.props.miniCart.vouchers.map(function(voucher, idx) {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        key: idx,
                        className: "l-full-row ".concat(idx > 0 ? 'u-margin-top-l' : '')
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-page-row"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "opl-msg opl-msg--box opl-msg--info u-padding-top u-padding",
                        key: "disclaimer"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "u-inline-block"
                    }, _TooltipFromHtml.default.conditionalRender(voucher.name)), /*#__PURE__*/ _react.default.createElement("a", {
                        href: "#",
                        onClick: function onClick(event) {
                            return _this2.removeVoucher(event, voucher);
                        },
                        className: "u-right g-black1-c"
                    }, "Usu\u0144"))));
                }), this.props.entries.map(function(entry, idx) {
                    var bundleType = entry.bundleType;

                    var sectionConf = _this2.props.entryTitle[bundleType.toString()];

                    if (bundleType === _BundleTypeEnum.default.HARDBUNDLE && entry.entries.length === 1) {
                        sectionConf.sectionTitle = _this2.props.entryTitle[entry.entries[0].bundleType.toString()].sectionTitle;
                    }

                    var bundleProps = {
                        descriptions: _this2.props.descriptions,
                        sectionConf: sectionConf,
                        entry: entry,
                        idx: idx,
                        channel: _this2.props.channels.sales,
                        sapReservation: _this2.props.reservationNumberSapPOS,
                        sapErrorMessage: _this2.props.descriptions.sapReservationError,
                        lowerInstallmentsActive: lowerInstallmentsActive && !(entry && entry.euroSets && entry.euroSets.length > 0 && !_this2.props.isLowerInstallmentsForEuroSetsVisible) && !(entry.terminals && entry.terminals[0] && !entry.terminals[0].priceOffset && entry.terminals[0].monthlyPrices && entry.terminals[0].monthlyPrices.length === 1 && entry.terminals[0].monthlyPrices[0].price === 0),
                        showNetPrices: _this2.props.showNetPrices,
                        checkAssignmentDeathBox: _this2.checkAssignmentDeathBox,
                        assignmentDeathCheckBoxState: _this2.state.assignmentBoxCheck
                    };

                    switch (bundleType) {
                        case _BundleTypeEnum.default.VOICE:
                            return /*#__PURE__*/ _react.default.createElement(_MobileComponent.default, babelHelpers.extends({
                                key: "VOICE_" + idx
                            }, bundleProps));

                        case _BundleTypeEnum.default.DATA:
                            return /*#__PURE__*/ _react.default.createElement(_MobileComponent.default, babelHelpers.extends({
                                key: "DATA_" + idx
                            }, bundleProps));

                        case _BundleTypeEnum.default.SIMFREE:
                            return /*#__PURE__*/ _react.default.createElement(_SimfreeComponent.default, babelHelpers.extends({
                                key: "SIMFREE_" + idx
                            }, bundleProps));

                        case _BundleTypeEnum.default.SIMFREE_INST:
                            return /*#__PURE__*/ _react.default.createElement(_SimfreeComponent.default, babelHelpers.extends({
                                key: "SIMFREE_INST_" + idx
                            }, bundleProps));

                        case _BundleTypeEnum.default._1P_PRE:
                            return /*#__PURE__*/ _react.default.createElement(_FixComponent.default, babelHelpers.extends({
                                key: "FIX_1P_" + idx
                            }, bundleProps));

                        case _BundleTypeEnum.default._1P_INF:
                            return /*#__PURE__*/ _react.default.createElement(_FixComponent.default, babelHelpers.extends({
                                key: "FIX_1P_" + idx
                            }, bundleProps));

                        case _BundleTypeEnum.default._3P_PRE:
                            return /*#__PURE__*/ _react.default.createElement(_FixComponent.default, babelHelpers.extends({
                                key: "FIX_3P_" + idx
                            }, bundleProps, {
                                selectedNumberVoip: _this2.props.selectedVoipNumber
                            }));

                        case _BundleTypeEnum.default._3P_INF:
                            return /*#__PURE__*/ _react.default.createElement(_FixComponent.default, babelHelpers.extends({
                                key: "FIX_3P_" + idx
                            }, bundleProps, {
                                selectedNumberVoip: _this2.props.selectedVoipNumber
                            }));

                        case _BundleTypeEnum.default.HARDBUNDLE:
                            return /*#__PURE__*/ _react.default.createElement(_ConvergentComponent.default, babelHelpers.extends({
                                key: "HARDBUNDLE_" + idx
                            }, bundleProps));

                        case _BundleTypeEnum.default.VIDEO:
                            return /*#__PURE__*/ _react.default.createElement(_TvUpsellComponent.default, babelHelpers.extends({
                                key: "VIDEO_" + idx
                            }, bundleProps));

                        case _BundleTypeEnum.default.MNP_APPLICATION:
                            return /*#__PURE__*/ _react.default.createElement(_MobileComponent.default, babelHelpers.extends({
                                key: "MNP_APPLICATION_" + idx
                            }, bundleProps));

                        case _BundleTypeEnum.default.TRANSFER:
                            return /*#__PURE__*/ _react.default.createElement(_TransferComponent.default, babelHelpers.extends({
                                key: "TRANSFER_" + idx
                            }, bundleProps));

                        default:
                            return null;
                    }
                })), /*#__PURE__*/ _react.default.createElement(_CartErrorModal.default, {
                    descriptions: this.props.descriptions,
                    errorCode: this.props.miniCart ? this.props.miniCart.errorCode : null
                }), /*#__PURE__*/ _react.default.createElement(_MsisdnSimCardPickerModal.default, {
                    channel: this.props.channels.sales
                }), /*#__PURE__*/ _react.default.createElement(_OraVasPacketPickerComponent.default, null), lowerInstallmentsActive && /*#__PURE__*/ _react.default.createElement(_LowerInstallmentsModal.default, {
                    channel: this.props.channels.sales,
                    showNetPrices: this.props.showNetPrices,
                    descriptions: this.props.descriptions,
                    cartIsNet: this.props.cartIsNet
                }));
            }
        }]);
        return MulticartEntriesListContainer;
    }(_react.Component);

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return _objectSpread({}, (0, _redux.bindActionCreators)({
            fetchMiniCart: _cart.fetchMiniCart
        }, dispatch), {
            subscribeCustomerSelected: function subscribeCustomerSelected() {
                return dispatch((0, _data.subscribeCustomerSelected)());
            },
            removeVoucher: function removeVoucher(voucher) {
                return dispatch((0, _cart.removeVoucher)(null, null, null, voucher));
            }
        });
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            entries: (0, _selectors.getCartEntries)(state),
            miniCart: (0, _selectors.getMiniCart)(state),
            selectedVoipNumber: (0, _selectors.getSelectedVoipNumber)(state),
            showNetPrices: (0, _selectors.getPriceIsNet)(state),
            cartIsNet: (0, _selectors.getCartIsNet)(state)
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MulticartEntriesListContainer);

    _exports.default = _default;
});
//# sourceMappingURL=MulticartEntriesListContainer.js.map