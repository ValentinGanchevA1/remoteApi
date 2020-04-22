define(["exports", "react", "react-redux", "eshop/modules/simfree/actions/comparator", "eshop/modules/simfree/selectors", "eshop/modules/simfree/fetchComparatorConfigActionType", "eshop/components/OraCommonComponents"], function(_exports, _react, _reactRedux, _comparator, _selectors, _fetchComparatorConfigActionType, _OraCommonComponents) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
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

    var ComparatorAddDeviceModal = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(ComparatorAddDeviceModal, _Component);

        var _super = _createSuper(ComparatorAddDeviceModal);

        function ComparatorAddDeviceModal(props) {
            babelHelpers.classCallCheck(this, ComparatorAddDeviceModal);
            return _super.call(this, props);
        }

        babelHelpers.createClass(ComparatorAddDeviceModal, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                this.initModules();
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                this.initModules();
            }
        }, {
            key: "initModules",
            value: function initModules() {
                if (this.componentNeedInitialization("opl-compare-products__modal-datajs")) {
                    OPL.UI.initModules(document.getElementById("opl-compare-products__modal-datajs"));
                }
            }
        }, {
            key: "componentNeedInitialization",
            value: function componentNeedInitialization(name) {
                return document.getElementById(name) != null && !document.getElementById(name).hasAttribute("data-js-processed");
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
            key: "handleProducerChange",
            value: function handleProducerChange(_ref) {
                var value = _ref.value;
                this.props.setSelectedProducer(value);
                this.props.setSelectedModel("");
            }
        }, {
            key: "handleModelChange",
            value: function handleModelChange(_ref2) {
                var value = _ref2.value;
                this.props.setSelectedModel(value);
            }
        }, {
            key: "handleCompareClick",
            value: function handleCompareClick() {
                if (this.props.comparatorComponentUid != null) {
                    this.props.fetchComparatorConfig(this.props.selectedModel, this.props.comparatorComponentUid);
                } else {
                    this.props.updateComparatorDevicesListByUid(this.props.selectedModel);
                }

                this.props.setSelectedProducer("");
                this.props.setSelectedModel("");
                OPL.UI.fire(OPL.UI.EVENTS.modules.modal.close, '', this.props.trigger);
            }
        }, {
            key: "render",
            value: function render() {
                var _this = this;

                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-compare-products__modal u-hide--soft o-modal--small",
                    id: "opl-compare-products__modal",
                    role: "dialog",
                    "aria-modal": "true"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-compare-products__modal-content"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-acc-hide",
                    id: "opl-compare-products__modal-title"
                }, this.props.title), /*#__PURE__*/ _react.default.createElement("h2", {
                    className: "u-padding-top-l u-margin-xl"
                }, "Dodaj telefon do por\xF3wnania"), /*#__PURE__*/ _react.default.createElement("div", {
                    id: "opl-compare-products__modal-datajs",
                    className: "o-select",
                    style: {
                        width: '100%'
                    }
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraCmpSelect, {
                    id: "selectBrand" + this.props.index,
                    className: "u-margin-l",
                    emptyOption: {
                        value: '',
                        description: 'Wybierz markę'
                    },
                    withEmptyOption: true,
                    selected: this.props.selectedProducer,
                    ariaLabel: "Wybierz marke",
                    onChange: this.handleProducerChange.bind(this),
                    options: this.getProducersNames()
                }), /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraCmpSelect, {
                    id: "selectModel" + this.props.index,
                    className: "u-margin-xl",
                    disabled: this.props.modelsForBrand.length === 0,
                    emptyOption: {
                        value: '',
                        description: 'Wybierz model'
                    },
                    withEmptyOption: true,
                    selected: this.props.selectedModel,
                    ariaLabel: "Wybierz model",
                    onChange: this.handleModelChange.bind(this),
                    options: this.getModelsForBrand()
                })), /*#__PURE__*/ _react.default.createElement("button", {
                    disabled: this.props.selectedModel.length === 0,
                    onClick: function onClick() {
                        return _this.handleCompareClick();
                    },
                    className: "opl-compare-products__btn opl-btn opl-btn--primary o-btn"
                }, /*#__PURE__*/ _react.default.createElement("span", null, "Por\xF3wnaj"))));
            }
        }]);
        return ComparatorAddDeviceModal;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            producers: (0, _selectors.getProducers)(state),
            selectedProducer: (0, _selectors.getSelectedComparatorProducer)(state),
            modelsForBrand: (0, _selectors.getModelsForBrand)(state),
            selectedModel: (0, _selectors.getSelectedComparatorModel)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            setSelectedModel: function setSelectedModel(model) {
                return dispatch((0, _comparator.setSelectedModel)(model));
            },
            setSelectedProducer: function setSelectedProducer(producer) {
                return dispatch((0, _comparator.setSelectedProducer)(producer));
            },
            fetchComparatorConfig: function fetchComparatorConfig(devices, uid) {
                return dispatch((0, _comparator.fetchComparatorConfig)(devices, uid, _fetchComparatorConfigActionType.default.ADD_DEVICE));
            },
            updateComparatorDevicesListByUid: function updateComparatorDevicesListByUid(deviceUid) {
                return dispatch((0, _comparator.updateComparatorDevicesListByUid)(deviceUid));
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ComparatorAddDeviceModal);

    _exports.default = _default;
});
//# sourceMappingURL=ComparatorAddDeviceModal.js.map