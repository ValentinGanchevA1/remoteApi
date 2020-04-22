define(["exports", "react", "prop-types", "../MultiCartItemComponent", "eshop/modules/cart/actions/cart", "react-redux", "../../../../selectors", "eshop/modules/configurator/selectors/filters", "eshop/modules/cart/actions/resources"], function(_exports, _react, _propTypes, _MultiCartItemComponent, _cart, _reactRedux, _selectors, _filters, _resources) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _MultiCartItemComponent = babelHelpers.interopRequireDefault(_MultiCartItemComponent);

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

    var TerminalEntriesListComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(TerminalEntriesListComponent, _Component);

        var _super = _createSuper(TerminalEntriesListComponent);

        function TerminalEntriesListComponent(props) {
            babelHelpers.classCallCheck(this, TerminalEntriesListComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(TerminalEntriesListComponent, [{
            key: "render",
            value: function render() {
                var _this = this;

                return /*#__PURE__*/ _react.default.createElement("div", null, this.props.entries && this.props.entries.map(function(terminal, terminalIndex) {
                    return /*#__PURE__*/ _react.default.createElement(WrappedTerminalEntryComponent, {
                        removeModalTexts: _this.props.removeModalTexts,
                        key: "TERMINAL" + terminalIndex + "_" + _this.props.idx,
                        entry: terminal,
                        cartBundle: _this.props.cartBundle,
                        bundle: _this.props.bundle,
                        propositionId: _this.props.propositionId,
                        sapReservation: _this.props.sapReservation,
                        sapErrorMessage: _this.props.sapErrorMessage,
                        descriptions: _this.props.descriptions,
                        lowerInstallmentsActive: _this.props.lowerInstallmentsActive,
                        editable: _this.props.editable
                    });
                }));
            }
        }]);
        return TerminalEntriesListComponent;
    }(_react.Component);

    TerminalEntriesListComponent.propTypes = {
        idx: _propTypes.default.number.isRequired,
        entries: _propTypes.default.arrayOf(_propTypes.default.object),
        detailsHeader: _propTypes.default.string,
        editable: _propTypes.default.bool
    };
    TerminalEntriesListComponent.defaultProps = {
        editable: true
    };

    var TerminalEntryComponent = /*#__PURE__*/ function(_Component2) {
        babelHelpers.inherits(TerminalEntryComponent, _Component2);

        var _super2 = _createSuper(TerminalEntryComponent);

        function TerminalEntryComponent(props) {
            babelHelpers.classCallCheck(this, TerminalEntryComponent);
            return _super2.call(this, props);
        }

        babelHelpers.createClass(TerminalEntryComponent, [{
            key: "onRemoveClicked",
            value: function onRemoveClicked() {
                if (this.props.sapReservation !== '') {
                    this.props.showErrorMessage(this.props.sapErrorMessage);
                } else {
                    console.log("Terminal delete clicked");
                    var toBeRemoved = [this.props.entry.productCode];
                    this.props.updateCartDevices(this.props.propositionId, this.props.bundle, this.props.cartBundle, toBeRemoved, []);
                }
            }
        }, {
            key: "onChangeClicked",
            value: function onChangeClicked() {
                console.log("Terminal change clicked");
                this.props.setFilters(this.props.cartBundle);

                if (this.props.baseProductId) {
                    var returnLink = this.props.isB2B ? "/male-firmy/sklep" : "/sklep";
                    window.location = returnLink + "?serviceplan=" + this.props.baseProductId + "&propositionId=" + this.props.propositionId;
                }
            }
        }, {
            key: "lowerInstallmentsClicked",
            value: function lowerInstallmentsClicked(bundleNo) {
                this.props.lowerInstallmentsModalOpen(bundleNo);
            }
        }, {
            key: "render",
            value: function render() {
                console.log(this.props);
                return /*#__PURE__*/ _react.default.createElement(_MultiCartItemComponent.default, {
                    removeModalTexts: this.props.editable && this.props.removeModalTexts,
                    detailsHeader: this.props.editable && this.props.detailsHeader,
                    entry: this.props.entry,
                    startPricePropertyName: "checkoutPrice",
                    type: "TERMINAL",
                    topBorder: true,
                    onRemoveClicked: this.props.editable && this.onRemoveClicked.bind(this),
                    onChangeClicked: this.props.editable && this.onChangeClicked.bind(this),
                    descriptions: this.props.descriptions,
                    lowerInstallmentsClicked: !!this.props.lowerInstallmentsActive ? this.lowerInstallmentsClicked.bind(this, this.props.entry.bundleNo) : undefined
                });
            }
        }]);
        return TerminalEntryComponent;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps() {
        var getBaseProductId = (0, _selectors.getBaseProductIdForBundle)();
        return function(state, props) {
            return {
                baseProductId: getBaseProductId(state, props.cartBundle),
                isB2B: (0, _filters.getMarketContext)(state) === 'B2B' ? true : false
            };
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            updateCartDevices: function updateCartDevices(bundle, offer, cartBundle, productsToRemove, productsToAdd) {
                return dispatch((0, _cart.updateCartDevices)(bundle, offer, cartBundle, productsToRemove, productsToAdd));
            },
            showErrorMessage: function showErrorMessage(message) {
                return dispatch((0, _cart.showErrorMessage)(message));
            },
            lowerInstallmentsModalOpen: function lowerInstallmentsModalOpen(bundleNo) {
                return dispatch((0, _resources.lowerInstallmentsModalOpen)(bundleNo));
            },
            setFilters: function setFilters(bundleNo) {
                return dispatch((0, _cart.setFilters)(bundleNo));
            }
        };
    };

    var WrappedTerminalEntryComponent = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TerminalEntryComponent);
    var _default = TerminalEntriesListComponent;
    _exports.default = _default;
});
//# sourceMappingURL=TerminalEntriesListComponent.js.map