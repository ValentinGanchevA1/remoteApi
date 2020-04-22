define(["exports", "react", "react-redux", "prop-types", "../../core/components/ui/Modal", "./Utils", "./AddComponent", "../selectors", "../actions/cart", "./SingleInputModalContent", "../constants", "eshop/components/OraCommonComponents"], function(_exports, _react, _reactRedux, _propTypes, _Modal, _Utils, _AddComponent, _selectors, _cart, _SingleInputModalContent, _constants, _OraCommonComponents) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = _exports.AddKdrComponent = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _Modal = babelHelpers.interopRequireDefault(_Modal);
    _AddComponent = babelHelpers.interopRequireDefault(_AddComponent);
    _SingleInputModalContent = babelHelpers.interopRequireDefault(_SingleInputModalContent);

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

    var AddKdrComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(AddKdrComponent, _Component);

        var _super = _createSuper(AddKdrComponent);

        function AddKdrComponent(props) {
            var _this;

            babelHelpers.classCallCheck(this, AddKdrComponent);
            _this = _super.call(this, props);
            _this.state = {
                showModal: false
            };
            return _this;
        }

        babelHelpers.createClass(AddKdrComponent, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                this.props.getKdrNumberFromCart();
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps) {
                if (prevProps.saving && !this.props.saving && (!this.props.errors || Object.keys(this.props.errors).length === 0)) {
                    this.closeModal();
                }
            }
        }, {
            key: "setShowModal",
            value: function setShowModal(modalState) {
                this.setState({
                    showModal: modalState
                });
            }
        }, {
            key: "onAddClick",
            value: function onAddClick() {
                this.setShowModal(true);
            }
        }, {
            key: "getModalProps",
            value: function getModalProps() {
                return {
                    open: this.state.showModal,
                    size: "small",
                    showClose: true,
                    escapeClose: false,
                    clickClose: false,
                    onClose: this.closeModal.bind(this)
                };
            }
        }, {
            key: "clearIfNotAccepted",
            value: function clearIfNotAccepted() {
                if (!this.props.kdrAccepted) {
                    this.props.changeKdrNumber("");
                }
            }
        }, {
            key: "closeModal",
            value: function closeModal() {
                this.clearIfNotAccepted();
                this.setShowModal(false);
            }
        }, {
            key: "getModalContent",
            value: function getModalContent() {
                return /*#__PURE__*/ _react.default.createElement(_SingleInputModalContent.default, this.getModalContentProps());
            }
        }, {
            key: "getAddedRovProps",
            value: function getAddedRovProps() {
                return {
                    showAddLink: false,
                    addBtnText: getDescription('addBtnText', this.props),
                    label: getDescription('addedRowTitle', this.props),
                    tooltipBtnText: getDescription('tooltipBtnText', this.props),
                    tooltipContent: getDescription('addedRowTooltip', this.props),
                    tooltipId: "addedKdr",
                    addRowIcon: getDescription('addedRowIcon', this.props),
                    descriptions: {}
                };
            }
        }, {
            key: "getAddedRowView",
            value: function getAddedRowView() {
                return /*#__PURE__*/ _react.default.createElement(_AddComponent.default, this.getAddedRovProps(), /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-font-normal"
                }, this.props.kdrNumber), this.props.kdrSource === "legacy" ? null : /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    className: "u-font-bold",
                    onClick: this.clearData.bind(this)
                }, "Usu\u0144"));
            }
        }, {
            key: "getModalContentProps",
            value: function getModalContentProps() {
                return {
                    id: "kdrNumber",
                    inputValue: this.props.kdrNumber,
                    error: this.props.errors,
                    mask: "99999999999999999",
                    placeholder: "_________________",
                    modalHeader: getDescription('modalHeader', this.props),
                    modalMainText: getDescription('modalMainText', this.props),
                    inputPlaceHolder: getDescription('modalInputPlaceholder', this.props),
                    modalBtnText: getDescription('modalBtnText', this.props),
                    onButtonClick: this.onInputNext.bind(this),
                    setInputValue: this.changeKdrNumber.bind(this)
                };
            }
        }, {
            key: "onInputNext",
            value: function onInputNext(value) {
                if (!_constants.kdrNumberPattern.test(this.props.kdrNumber)) {
                    this.props.dispatchKdrError({
                        level: "error",
                        message: getDescription('kdrNumberError', this.props)
                    });
                } else {
                    this.props.approveKdrNumber();
                    this.props.saveKdrData({
                        number: this.props.kdrNumber,
                        source: this.props.kdrSource
                    });
                }
            }
        }, {
            key: "clearData",
            value: function clearData(event) {
                event.preventDefault();
                this.props.clearKdrNumber();
            }
        }, {
            key: "changeKdrNumber",
            value: function changeKdrNumber(_ref) {
                var id = _ref.id,
                    name = _ref.name,
                    value = _ref.value;
                this.props.changeKdrNumber(value);
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement(_Utils.HideWhenCartIsEmpty, {
                    className: "g-gray1-bg"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row u-padding-l u-small-padding-left u-small-padding-right"
                }, /*#__PURE__*/ _react.default.createElement(_Modal.default, babelHelpers.extends({}, this.getModalProps(), {
                    id: "kdrNumberModal"
                }), /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraLoader, {
                    id: "kdrLoader",
                    loading: this.props.saving,
                    parentId: "kdr-loader"
                }, this.getModalContent())), this.props.kdrAccepted ? this.getAddedRowView() : /*#__PURE__*/ _react.default.createElement(_AddComponent.default, babelHelpers.extends({}, this.props, {
                    onAddClick: this.onAddClick.bind(this)
                }))));
            }
        }]);
        return AddKdrComponent;
    }(_react.Component);

    _exports.AddKdrComponent = AddKdrComponent;

    var mapStateToProps = function mapStateToProps(state) {
        return {
            kdrNumber: (0, _selectors.getKdrNumber)(state),
            kdrSource: (0, _selectors.getKdrSource)(state),
            errors: (0, _selectors.getKdrErrors)(state),
            saving: (0, _selectors.getKdrSaving)(state),
            kdrAccepted: (0, _selectors.getKdrAccepted)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            changeKdrNumber: function changeKdrNumber(kdrNumber) {
                return dispatch((0, _cart.changeKdrNumber)(kdrNumber));
            },
            getKdrNumberFromCart: function getKdrNumberFromCart() {
                return dispatch((0, _cart.getKdrDataFromCart)());
            },
            approveKdrNumber: function approveKdrNumber() {
                return dispatch((0, _cart.approveKdrNumber)());
            },
            clearKdrNumber: function clearKdrNumber() {
                return dispatch((0, _cart.clearKdrNumber)());
            },
            saveKdrData: function saveKdrData(kdrData) {
                return dispatch((0, _cart.saveKdrData)(kdrData));
            },
            dispatchKdrError: function dispatchKdrError(error) {
                return dispatch((0, _cart.dispatchKdrError)(error));
            }
        };
    };

    AddKdrComponent.propTypes = {
        label: _propTypes.default.string,
        addBtnText: _propTypes.default.string,
        tooltipBtnText: _propTypes.default.string,
        tooltipId: _propTypes.default.string.isRequired,
        modalHeader: _propTypes.default.string,
        modalMainText: _propTypes.default.string,
        modalBtnText: _propTypes.default.string,
        modalInputPlaceholder: _propTypes.default.string,
        addRowIcon: _propTypes.default.string,
        addedRowTitle: _propTypes.default.string,
        addedRowIcon: _propTypes.default.string,
        addedRowTooltip: _propTypes.default.string,
        changeKdrNumber: _propTypes.default.func,
        getKdrNumberFromCart: _propTypes.default.func,
        approveKdrNumber: _propTypes.default.func,
        clearKdrNumber: _propTypes.default.func,
        kdrNumber: _propTypes.default.string,
        kdrSource: _propTypes.default.string,
        kdrAccepted: _propTypes.default.bool
    };
    AddKdrComponent.defaultProps = {
        label: "Posiadam Kartę Dużej rodzinki",
        addBtnText: "Kliknij aby potwierdzić posiadanie Karty Dużej rodzinki",
        tooltipBtnText: "Otwórz podpowiedź",
        tooltipId: "tooltip_kdr",
        modalHeader: "Karta Dużej Rodzinki",
        modalMainText: "",
        modalBtnText: "Potwierdź",
        modalInputPlaceholder: "Wpisz nr karty Dużej rodzinki",
        addRowIcon: "g-icon--voucher",
        addedRowTitle: "Karta Dużej Rodziny",
        addedRowIcon: "g-icon--person-group2",
        addedRowTooltip: "",
        kdrNumberError: "Nieprawidłowy numer Karty Dużej rodzinki"
    };

    function getDescription(descriptionName, props) {
        return props.descriptions[descriptionName] || props[descriptionName];
    }

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AddKdrComponent);

    _exports.default = _default;
});
//# sourceMappingURL=AddKdrComponent.js.map