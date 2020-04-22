define(["exports", "react", "react-redux", "eshop/components/OraCommonComponents", "../../core/components/ui/Modal", "./Utils", "./AddComponent", "../selectors", "../actions/cart", "./SingleInputModalContent", "../../checkout/utils/utils"], function(_exports, _react, _reactRedux, _OraCommonComponents, _Modal, _Utils, _AddComponent, _selectors, _cart, _SingleInputModalContent, _utils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = _exports.AddVoucherComponent = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _Modal = babelHelpers.interopRequireDefault(_Modal);
    _AddComponent = babelHelpers.interopRequireDefault(_AddComponent);
    _SingleInputModalContent = babelHelpers.interopRequireDefault(_SingleInputModalContent);

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

    var AddVoucherComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(AddVoucherComponent, _Component);

        var _super = _createSuper(AddVoucherComponent);

        function AddVoucherComponent(props) {
            var _this;

            babelHelpers.classCallCheck(this, AddVoucherComponent);
            _this = _super.call(this, props);
            _this.state = {
                showModal: false
            };
            return _this;
        }

        babelHelpers.createClass(AddVoucherComponent, [{
            key: "componentWillUpdate",
            value: function componentWillUpdate(nextProps, nextState) {
                if (nextProps.metadata.applied && !this.props.metadata.applied) {
                    this.setShowModal(false);
                }

                if (nextProps.voucherName !== this.props.voucherName && nextProps.voucherName && nextProps.applicableProducts.length === 0) {
                    this.setShowModal(false);
                    this.props.applyVoucher(nextProps.voucherCode, null);
                }
            }
        }, {
            key: "setShowModal",
            value: function setShowModal(modalState) {
                this.setState(_objectSpread({}, this.state, {
                    showModal: modalState
                }));
            }
        }, {
            key: "onAddClick",
            value: function onAddClick() {
                this.props.clearVoucher();
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
            key: "closeModal",
            value: function closeModal() {
                this.setShowModal(false);
                this.props.clearVoucher();
            }
        }, {
            key: "sendVoucher",
            value: function sendVoucher() {
                this.props.findApplicableProducts(this.props.voucherCode);
            }
        }, {
            key: "setVoucherCode",
            value: function setVoucherCode(_ref) {
                var id = _ref.id,
                    name = _ref.name,
                    value = _ref.value;
                this.props.changedVoucherCode(value);
            }
        }, {
            key: "getModalContentProps",
            value: function getModalContentProps() {
                return {
                    id: "voucher",
                    inputValue: (0, _utils.remapToPhone)(this.props.voucherCode),
                    error: this.props.error,
                    mask: "***-****-****-****",
                    placeholder: "___-____-____-____",
                    modalHeader: getDescription('modalHeader', this.props),
                    modalMainText: getDescription('modalMainText', this.props),
                    inputPlaceHolder: getDescription('modalInputPlaceholder', this.props),
                    modalBtnText: getDescription('modalBtnText', this.props),
                    onButtonClick: this.sendVoucher.bind(this),
                    setInputValue: this.setVoucherCode.bind(this)
                };
            }
        }, {
            key: "getModalContent",
            value: function getModalContent() {
                if (!this.state.showModal) {
                    return null;
                }

                if (!!this.props.error) {
                    return /*#__PURE__*/ _react.default.createElement(_SingleInputModalContent.default, this.getModalContentProps());
                }

                switch (this.props.applicableProducts.length) {
                    case 0:
                        return /*#__PURE__*/ _react.default.createElement(_SingleInputModalContent.default, this.getModalContentProps());
                        break;

                    case 1:
                        return /*#__PURE__*/ _react.default.createElement(OneProductModal, this.props);
                        break;

                    default:
                        return /*#__PURE__*/ _react.default.createElement(ProductChooserModal, this.props);
                }
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement(_Utils.HideWhenCartIsEmpty, {
                    className: "g-gray1-bg"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row u-padding-l u-small-padding-left u-small-padding-right"
                }, /*#__PURE__*/ _react.default.createElement(_Modal.default, babelHelpers.extends({}, this.getModalProps(), {
                    id: "addVoucherModal"
                }), /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraLoader, {
                    id: "voucherLoader",
                    loading: this.props.metadata.loading,
                    parentId: "voucher-loader"
                }, this.getModalContent())), /*#__PURE__*/ _react.default.createElement(_AddComponent.default, babelHelpers.extends({}, this.props, {
                    onAddClick: this.onAddClick.bind(this)
                }))));
            }
        }]);
        return AddVoucherComponent;
    }(_react.Component);

    _exports.AddVoucherComponent = AddVoucherComponent;

    var mapStateToProps = function mapStateToProps(state) {
        return {
            voucherCode: (0, _selectors.getVoucherCode)(state),
            voucherName: (0, _selectors.getVoucherName)(state),
            metadata: (0, _selectors.getVoucherMetadata)(state),
            error: (0, _selectors.getVoucherError)(state),
            applicableProducts: (0, _selectors.getVoucherApplicableProducts)(state),
            convergentEntries: (0, _selectors.getConvergentEntries)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            findApplicableProducts: function findApplicableProducts(voucherCode) {
                return dispatch((0, _cart.findApplicableProducts)(voucherCode));
            },
            changedVoucherCode: function changedVoucherCode(voucherCode) {
                return dispatch((0, _cart.changedVoucherCode)(voucherCode));
            },
            clearVoucher: function clearVoucher() {
                return dispatch((0, _cart.clearVoucher)());
            },
            applyVoucher: function applyVoucher(voucherCode, product) {
                return dispatch((0, _cart.applyVoucher)(voucherCode, product));
            }
        };
    };

    AddVoucherComponent.defaultProps = {
        label: "Posiadam kod rabatowy",
        tooltipContent: "Lorem ipsum",
        addBtnText: "Kliknij aby potwierdzić posiadanie kodu rabatowego",
        tooltipBtnText: "Otwórz podpowiedź",
        tooltipId: "tooltip_478503",
        modalHeader: "Rabaty",
        modalMainText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor",
        modalListText: "Kod rabatowy, który wybrałeś może być przypisany do jednego z produktów, które posiadasz w koszyku.",
        modalListHeader: "Wybierz rabatowany produkt",
        modalOneText: "{0} można przyznać na {1} w ramach {2} numer {3}",
        modalOneSimfreeText: "Rabat zostanie naliczony na {0} w ofercie bez abonamentu",
        modalOneSimfreeInstallmentText: "Rabat zostanie naliczony na ratę urządzenia {0} w ofercie Bez abonamentu na raty",
        modalBtnText: "Dalej",
        modalInputPlaceholder: "Podaj kod rabatowy"
    };

    var OneProductModal = /*#__PURE__*/ function(_Component2) {
        babelHelpers.inherits(OneProductModal, _Component2);

        var _super2 = _createSuper(OneProductModal);

        function OneProductModal() {
            babelHelpers.classCallCheck(this, OneProductModal);
            return _super2.apply(this, arguments);
        }

        babelHelpers.createClass(OneProductModal, [{
            key: "format",
            value: function format(_format) {
                var args = Array.prototype.slice.call(arguments, 1);
                return _format.replace(/{(\d+)}/g, function(match, number) {
                    return typeof args[number] != 'undefined' ? args[number] : match;
                });
            }
        }, {
            key: "applyVoucher",
            value: function applyVoucher() {
                this.props.applyVoucher(this.props.voucherCode, this.props.applicableProducts[0]);
            }
        }, {
            key: "getPramName",
            value: function getPramName(processType) {
                switch (processType) {
                    case 'SALE_OF_GOODS':
                        return "modalOneSimfreeText";

                    case 'INSTALMENT_SALES_OF_GOODS':
                    case 'INSTALMENT_SALES_OF_GOODS_NC':
                        return "modalOneSimfreeInstallmentText";

                    default:
                        return "modalOneText";
                }
            }
        }, {
            key: "render",
            value: function render() {
                var product = this.props.applicableProducts[0];
                var contentText = this.format(getDescription(this.getPramName(product.processType), this.props), product.entryName, product.msisdn || "");
                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("h1", {
                    className: "u-font-standard u-no-margin u-padding-l"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "h3"
                }, getDescription('modalHeader', this.props))), /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-padding-l"
                }, contentText), /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    type: "primary",
                    size: "medium",
                    onClick: this.applyVoucher.bind(this),
                    className: "u-w-100"
                }, getDescription('modalBtnText', this.props)));
            }
        }]);
        return OneProductModal;
    }(_react.Component);

    var ProductChooserModal = /*#__PURE__*/ function(_Component3) {
        babelHelpers.inherits(ProductChooserModal, _Component3);

        var _super3 = _createSuper(ProductChooserModal);

        function ProductChooserModal(props) {
            var _this2;

            babelHelpers.classCallCheck(this, ProductChooserModal);
            _this2 = _super3.call(this, props);
            _this2.state = {
                chosenProduct: {}
            };
            return _this2;
        }

        babelHelpers.createClass(ProductChooserModal, [{
            key: "setChosenProduct",
            value: function setChosenProduct(product) {
                this.setState({
                    chosenProduct: product
                });
            }
        }, {
            key: "getRadioProps",
            value: function getRadioProps(product) {
                var radioText = product.entryName + (product.msisdn ? ", tel. " + product.msisdn : "");
                return {
                    name: "choose-voucher",
                    text: radioText,
                    value: product.entryNo + "-" + product.bundleNo,
                    labelClassName: "o-radio opl-radio u-w-100 u-padding-l u-box-sizing",
                    checked: this.state.chosenProduct === product,
                    onChange: this.setChosenProduct.bind(this, product)
                };
            }
        }, {
            key: "applyVoucher",
            value: function applyVoucher() {
                this.props.applyVoucher(this.props.voucherCode, this.state.chosenProduct);
            }
        }, {
            key: "render",
            value: function render() {
                var _this3 = this;

                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-filters"
                }, /*#__PURE__*/ _react.default.createElement("h1", {
                    className: "u-font-standard u-no-margin u-padding-l"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "h3"
                }, getDescription('modalHeader', this.props))), /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-padding-l"
                }, getDescription('modalListText', this.props)), /*#__PURE__*/ _react.default.createElement("h4", {
                    className: "u-font-standard u-no-margin u-padding-l"
                }, getDescription('modalListHeader', this.props)), this.props.applicableProducts.map(function(product) {
                    return /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraSimpleRadio, _this3.getRadioProps(product));
                }), /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    type: "primary",
                    size: "medium",
                    onClick: this.applyVoucher.bind(this),
                    className: "u-w-100"
                }, getDescription('modalBtnText', this.props)));
            }
        }]);
        return ProductChooserModal;
    }(_react.Component);

    function getDescription(descriptionName, props) {
        return props.descriptions[descriptionName] || props[descriptionName];
    }

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AddVoucherComponent);

    _exports.default = _default;
});
//# sourceMappingURL=AddVoucherComponent.js.map