define(["exports", "react", "react-redux", "eshop/modules/simfree/actions/comparator", "eshop/modules/simfree/selectors", "./ComparatorSectionComponent", "./ComparatorDeviceTab", "./ComparatorEmptyDeviceTab", "eshop/modules/simfree/components/comparator/ComparatorAddDeviceModal", "eshop/modules/simfree/fetchComparatorConfigActionType", "eshop/modules/configurator/selectors/metaData", "eshop/modules/configurator/actions/filters"], function(_exports, _react, _reactRedux, _comparator, _selectors, _ComparatorSectionComponent, _ComparatorDeviceTab, _ComparatorEmptyDeviceTab, _ComparatorAddDeviceModal, _fetchComparatorConfigActionType, _metaData, _filters) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _ComparatorSectionComponent = babelHelpers.interopRequireDefault(_ComparatorSectionComponent);
    _ComparatorDeviceTab = babelHelpers.interopRequireDefault(_ComparatorDeviceTab);
    _ComparatorEmptyDeviceTab = babelHelpers.interopRequireDefault(_ComparatorEmptyDeviceTab);
    _ComparatorAddDeviceModal = babelHelpers.interopRequireDefault(_ComparatorAddDeviceModal);
    _fetchComparatorConfigActionType = babelHelpers.interopRequireDefault(_fetchComparatorConfigActionType);

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

    var OplComparatorMainComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(OplComparatorMainComponent, _Component);

        var _super = _createSuper(OplComparatorMainComponent);

        function OplComparatorMainComponent(props) {
            var _this;

            babelHelpers.classCallCheck(this, OplComparatorMainComponent);
            _this = _super.call(this, props);
            _this.state = {
                markDiff: false
            };

            _this.props.setMarketContext(_this.props.marketContext);

            return _this;
        }

        babelHelpers.createClass(OplComparatorMainComponent, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                this.props.getDeviceProducers();
                this.props.getComparatorConfig("", this.props.component);
            }
        }, {
            key: "handleMarkDifferences",
            value: function handleMarkDifferences() {
                this.state.markDiff ? this.setState({
                    markDiff: false
                }) : this.setState({
                    markDiff: true
                });
            }
        }, {
            key: "renderDevicesHeader",
            value: function renderDevicesHeader() {
                var _this2 = this;

                var emptyDeviceTab = [];

                for (var i = 0; i < 3 - this.props.comparatorDevices.length; i++) {
                    emptyDeviceTab.push( /*#__PURE__*/ _react.default.createElement(_ComparatorEmptyDeviceTab.default, {
                        producers: this.props.producers,
                        index: i,
                        key: "deviceTab" + i,
                        comparatorUid: this.props.component,
                        compareDevices: this.props.devicesComparison
                    }));
                }

                console.log(emptyDeviceTab);
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-full-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    className: "u-inline-block u-text-decoration-none u-padding-top-m",
                    href: this.props.marketContextPrefixUrl + this.props.goBackToShopUrl
                }, this.props.goBackToShop), /*#__PURE__*/ _react.default.createElement("h2", {
                    className: "h1 u-padding-top-l-xl"
                }, this.props.devicesComparison), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12  opl-compare-products__section u-margin-l"
                }, this.props.comparatorDevices && this.props.comparatorDevices.map(function(device, index) {
                    return /*#__PURE__*/ _react.default.createElement(_ComparatorDeviceTab.default, {
                        device: device,
                        index: index,
                        key: "deviceTab" + index,
                        comparatorUid: _this2.props.component
                    });
                }), emptyDeviceTab)), this.props.comparatorDevices.length > 0 ? /*#__PURE__*/ _react.default.createElement("label", {
                    className: "opl-checkbox o-checkbox u-margin-l-xl"
                }, /*#__PURE__*/ _react.default.createElement("input", {
                    type: "checkbox",
                    onChange: this.handleMarkDifferences.bind(this)
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci-label"
                }, this.props.markDifferences)) : null));
            }
        }, {
            key: "renderComparatorConfig",
            value: function renderComparatorConfig() {
                var _this3 = this;

                return /*#__PURE__*/ _react.default.createElement("div", {
                    id: "comparator-expander-parent",
                    className: "l-full-row u-margin-xxl"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-separator g-gray4-bgc"
                }), this.props.comparatorConfig.comparatorSectionDTOList && /*#__PURE__*/ _react.default.createElement("div", {
                    id: "comparator-expander",
                    "data-js-module": "common/modules/opl-expander",
                    role: "tablist",
                    "data-js-options": "{\"triggerSelector\":\".opl-section__expander-trigger\",\"contentSelector\":\".opl-section__content\",\"parentClass\":\"opl-section--expander\"}"
                }, this.props.comparatorConfig.comparatorSectionDTOList.map(function(section, index) {
                    return /*#__PURE__*/ _react.default.createElement(_ComparatorSectionComponent.default, {
                        section: section,
                        idx: index,
                        markDiff: _this3.state.markDiff
                    });
                }))));
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", null, this.renderDevicesHeader(), this.renderComparatorConfig(), /*#__PURE__*/ _react.default.createElement(_ComparatorAddDeviceModal.default, {
                    comparatorDevices: this.props.producers
                }));
            }
        }]);
        return OplComparatorMainComponent;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            comparatorConfig: (0, _selectors.getComparatorConfig)(state),
            comparatorDevices: (0, _selectors.getComparatorDevices)(state),
            producers: (0, _selectors.getProducers)(state),
            marketContextPrefixUrl: (0, _metaData.getMarketContextPrefixUrl)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            setMarketContext: function setMarketContext(marketContext) {
                return dispatch((0, _filters.setMarketContext)(marketContext));
            },
            getComparatorConfig: function getComparatorConfig(device, pk) {
                return dispatch((0, _comparator.fetchComparatorConfig)(device, pk, _fetchComparatorConfigActionType.default.VISIT_PAGE));
            },
            getDeviceProducers: function getDeviceProducers() {
                return dispatch((0, _comparator.fetchProducers)());
            },
            fetchComparatorDevices: function fetchComparatorDevices() {
                return dispatch((0, _comparator.fetchComparatorDevicesList)());
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(OplComparatorMainComponent);

    _exports.default = _default;
});
//# sourceMappingURL=OplComparatorMainComponent.js.map