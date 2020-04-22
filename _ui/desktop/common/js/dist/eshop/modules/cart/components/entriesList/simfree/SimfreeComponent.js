define(["exports", "react", "./MultiCartItemComponent", "../simfree/MultiCartExpandingSectionComponent", "./MultiCartCollapsedItemComponent", "eshop/utils/DataLayerUtils", "../mobile/productModals/VasBuyMoreComponent", "../mobile/productEntries/VasEntriesListComponent", "react-redux", "../../../selectors"], function(_exports, _react, _MultiCartItemComponent, _MultiCartExpandingSectionComponent, _MultiCartCollapsedItemComponent, _DataLayerUtils, _VasBuyMoreComponent, _VasEntriesListComponent, _reactRedux, _selectors) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _MultiCartItemComponent = babelHelpers.interopRequireDefault(_MultiCartItemComponent);
    _MultiCartExpandingSectionComponent = babelHelpers.interopRequireDefault(_MultiCartExpandingSectionComponent);
    _MultiCartCollapsedItemComponent = babelHelpers.interopRequireDefault(_MultiCartCollapsedItemComponent);
    _DataLayerUtils = babelHelpers.interopRequireDefault(_DataLayerUtils);
    _VasBuyMoreComponent = babelHelpers.interopRequireDefault(_VasBuyMoreComponent);
    _VasEntriesListComponent = babelHelpers.interopRequireDefault(_VasEntriesListComponent);

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

    var SimfreeComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(SimfreeComponent, _Component);

        var _super = _createSuper(SimfreeComponent);

        function SimfreeComponent(props) {
            babelHelpers.classCallCheck(this, SimfreeComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(SimfreeComponent, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                _DataLayerUtils.default.pushPageCategoryDimension('TelefonyBezUmowy'); // DataLayerUtils.pushSimfreeCheckoutStep(1, this.props.entry.terminals, 'offer-select');

            }
        }, {
            key: "getVasesForBundle",
            value: function getVasesForBundle(bundle) {
                return this.props.vases && this.props.vases.find(function(vas) {
                    return vas.bundle == bundle;
                });
            }
        }, {
            key: "hasVasesInServices",
            value: function hasVasesInServices(entryVases, bundle) {
                var vases = this.getVasesForBundle(bundle);

                if (!vases || !vases.services) {
                    return false;
                }

                var services = vases.services;
                var inServices = [];
                services.forEach(function(service) {
                    entryVases.forEach(function(vas) {
                        if (service.id == vas.productCode) inServices.push(vas);
                    });
                });
                return !!inServices.length;
            }
        }, {
            key: "render",
            value: function render() {
                var _this = this;

                var entry = this.props.entry;
                var conf = this.props.titleConf;
                var mainIcon = conf ? conf.icon : "sim-3";
                var title = this.props.sectionConf && this.props.sectionConf.sectionTitle || "Urządzenia bez abonamentu";
                var trigger = "ocst";
                var idx = this.props.idx;
                var productSections = this.props.sectionConf && this.props.sectionConf.productSections;
                var terminals = [].concat(babelHelpers.toConsumableArray(entry.terminals), babelHelpers.toConsumableArray(entry.euroSets));
                return /*#__PURE__*/ _react.default.createElement(_MultiCartExpandingSectionComponent.default, {
                    title: title,
                    key: idx,
                    entry: entry,
                    sapReservation: this.props.sapReservation,
                    sapErrorMessage: this.props.sapErrorMessage,
                    trigger: trigger
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-full-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row u-small-padding-left u-small-padding-right"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-top u-padding"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "g-white1-bg u-box-shadow--s"
                }, terminals && terminals.map(function(terminal, terminalIndex) {
                    terminal.processType || (terminal.processType = entry.processType);
                    return /*#__PURE__*/ _react.default.createElement(_MultiCartItemComponent.default, {
                        key: "TERMINAL" + terminalIndex + "_" + idx,
                        entry: terminal,
                        type: "TERMINAL",
                        rejectionReason: entry.rejectionReason,
                        sapReservation: _this.props.sapReservation,
                        sapErrorMessage: _this.props.sapErrorMessage,
                        descriptions: _this.props.descriptions,
                        lowerInstallmentsActive: _this.props.lowerInstallmentsActive,
                        noBorder: terminalIndex === 0
                    });
                })), productSections && productSections.map(function(section, index) {
                    switch (section.entryType) {
                        case "VAS": {
                            var buyMoreLabel = !_this.props.entry.vases || section.limitForBuyMoreButton >= _this.props.entry.vases.length ? section.buyMoreLabel : null;
                            var sectionTitle = _this.props.entry.vases.length && _this.hasVasesInServices(_this.props.entry.vases, _this.props.entry.productCode) ? section.sectionTitle : null;
                            return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement(ProductSectionWrapper, {
                                key: "productSectionWrapper_" + idx,
                                entry: _this.props.entry,
                                sectionTitle: sectionTitle,
                                className: "u-box-shadow--s"
                            }, /*#__PURE__*/ _react.default.createElement(_VasEntriesListComponent.default, {
                                key: "VAS_" + idx,
                                idx: idx,
                                entries: _this.props.entry.vases,
                                detailsHeader: section.detailsLabel,
                                cartBundle: "" + _this.props.entry.bundleNo,
                                bundle: _this.props.entry.productCode,
                                propositionId: _this.props.entry.bundleCode
                            })), buyMoreLabel && /*#__PURE__*/ _react.default.createElement(_VasBuyMoreComponent.default, {
                                idx: idx,
                                buyMoreLabel: buyMoreLabel,
                                icon: section.icon,
                                entry: _this.props.entry
                            }));
                        }

                        default: {
                            console.log("MobileComponent: Unsupported product section type:", section.entryType);
                            return null;
                        }
                    }
                })))), /*#__PURE__*/ _react.default.createElement(_MultiCartCollapsedItemComponent.default, {
                    key: "collapsed_" + idx,
                    icon: mainIcon,
                    entry: entry,
                    trigger: trigger
                }));
            }
        }]);
        return SimfreeComponent;
    }(_react.Component);

    var ProductSectionWrapper = function ProductSectionWrapper(props) {
        var icon = props.icon ? props.icon.split('_').join('-') : null;
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "g-white1-bg u-margin-top-l" + (props.className ? " " + props.className : "")
        }, props.sectionTitle && /*#__PURE__*/ _react.default.createElement("h3", {
            className: "h3 u-small-hide u-padding-all-l u-no-spacing"
        }, props.sectionTitle), props.children);
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            vases: (0, _selectors.getMobileVases)(state)
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, null)(SimfreeComponent);

    _exports.default = _default;
});
//# sourceMappingURL=SimfreeComponent.js.map