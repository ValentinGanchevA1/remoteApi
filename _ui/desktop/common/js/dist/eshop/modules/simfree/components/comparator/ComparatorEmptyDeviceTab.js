define(["exports", "react", "react-redux", "eshop/modules/simfree/actions/comparator", "eshop/modules/simfree/selectors", "../../../../components/OraCommonComponents", "./ComparatorAddDeviceModal", "eshop/modules/simfree/fetchComparatorConfigActionType"], function(_exports, _react, _reactRedux, _comparator, _selectors, _OraCommonComponents, _ComparatorAddDeviceModal, _fetchComparatorConfigActionType) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
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

    var ComparatorEmptyDeviceTab = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(ComparatorEmptyDeviceTab, _Component);

        var _super = _createSuper(ComparatorEmptyDeviceTab);

        function ComparatorEmptyDeviceTab(props) {
            babelHelpers.classCallCheck(this, ComparatorEmptyDeviceTab);
            return _super.call(this, props);
        }

        babelHelpers.createClass(ComparatorEmptyDeviceTab, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                if (document.getElementById("comparator-section0") != null) {
                    OPL.UI.initModules(document.getElementById("comparator-section0"));
                }
            }
        }, {
            key: "getProducersNames",
            value: function getProducersNames() {
                return this.props.producers.map(function(producer) {
                    return {
                        value: producer,
                        description: producer
                    };
                });
            }
        }, {
            key: "handleProducerChange",
            value: function handleProducerChange(_ref) {
                var value = _ref.value;
                this.props.setSelectedModel("");
                this.props.setSelectedProducer(value);
            }
        }, {
            key: "getModelsForBrand",
            value: function getModelsForBrand() {
                return this.props.modelsForBrand.map(function(model) {
                    return {
                        value: model.productId,
                        description: model.name
                    };
                });
            }
        }, {
            key: "updateSelectedModel",
            value: function updateSelectedModel(_ref2) {
                var value = _ref2.value;
                this.props.updateComparatorConfig(value, this.props.comparatorUid);
                this.props.setSelectedProducer("");
                this.props.setSelectedModel("");
                this.props.clearModelsForBrand();
                this.props.fetchProducers();
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("section", {
                    id: "comparator-section" + this.props.index,
                    className: "opl-compare-products__section--box"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-compare-products__section--select-box"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-compare-products__section--select-box-desktop"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--device-smartphone g-icon--xxl u-padding-top-m u-padding-m"
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-floating-label o-select u-spacing-l",
                    "data-js-module": "core/modules/floating-label",
                    style: {
                        width: "100%"
                    }
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraCmpSelect, {
                    id: "selectBrand" + this.props.index,
                    className: "u-small-spacing-l u-padding",
                    disabled: this.props.index != 0,
                    emptyOption: {
                        value: '',
                        description: 'Wybierz marke'
                    },
                    withEmptyOption: true,
                    selected: this.props.index == 0 ? this.props.selectedProducer : '',
                    ariaLabel: "Wybierz marke",
                    onChange: this.handleProducerChange.bind(this),
                    options: this.getProducersNames()
                }), /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraCmpSelect, {
                    id: "selectModel" + this.props.index,
                    className: "u-small-spacing-l u-medium-spacing-l",
                    disabled: this.props.index != 0 || this.props.modelsForBrand.length == 0,
                    emptyOption: {
                        value: '',
                        description: 'Wybierz model'
                    },
                    withEmptyOption: true,
                    selected: this.props.index == 0 ? this.props.selectedModel : '',
                    ariaLabel: "Wybierz model",
                    onChange: this.updateSelectedModel.bind(this),
                    options: this.getModelsForBrand()
                }))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-compare-products__section--select-box-mobile"
                }, /*#__PURE__*/ _react.default.createElement(_ComparatorAddDeviceModal.default, {
                    title: "Por\xF3wnaj",
                    trigger: "opl-comparator__modal-trigger",
                    comparatorComponentUid: this.props.comparatorUid
                }), /*#__PURE__*/ _react.default.createElement("a", {
                    id: "opl-comparator__modal-trigger",
                    className: "opl-btn--box o-btn o-modal__trigger",
                    href: "#opl-compare-products__modal",
                    "data-js-module": "core/modules/modal"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon--xs g-icon g-icon--plus"
                }), /*#__PURE__*/ _react.default.createElement("span", null), "Dodaj", /*#__PURE__*/ _react.default.createElement("br", null), "urz\u0105dzenie"))));
            }
        }]);
        return ComparatorEmptyDeviceTab;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            selectedProducer: (0, _selectors.getSelectedComparatorProducer)(state),
            selectedModel: (0, _selectors.getSelectedComparatorModel)(state),
            selectedDevices: (0, _selectors.getComparatorDevices)(state),
            producers: (0, _selectors.getProducers)(state),
            modelsForBrand: (0, _selectors.getModelsForBrand)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            setSelectedProducer: function setSelectedProducer(producer) {
                return dispatch((0, _comparator.setSelectedProducer)(producer));
            },
            setSelectedModel: function setSelectedModel(model) {
                return dispatch((0, _comparator.setSelectedModel)(model));
            },
            updateComparatorConfig: function updateComparatorConfig(devices, pk) {
                return dispatch((0, _comparator.fetchComparatorConfig)(devices, pk, _fetchComparatorConfigActionType.default.ADD_DEVICE));
            },
            clearModelsForBrand: function clearModelsForBrand() {
                return dispatch((0, _comparator.clearModelsForBrand)());
            },
            fetchProducers: function fetchProducers() {
                return dispatch((0, _comparator.fetchProducers)());
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ComparatorEmptyDeviceTab);

    _exports.default = _default;
});
//# sourceMappingURL=ComparatorEmptyDeviceTab.js.map