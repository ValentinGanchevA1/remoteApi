define(["exports", "react", "prop-types", "eshop/modules/core/components/ui/Modal", "eshop/modules/core/components/ui/Expander", "../../../../analyzer/CartInfoUtils", "./Utils", "./modalFragments/ModalFragments", "../../../../analyzer/DeviceUtils", "../../shared/MessageBox", "eshop/modules/cart/components/entriesList/convergent/vasModal/CloseAndSaveVasesButtons"], function(_exports, _react, _propTypes, _Modal, _Expander, _CartInfoUtils, _Utils, _ModalFragments, _DeviceUtils, _MessageBox, _CloseAndSaveVasesButtons) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _Modal = babelHelpers.interopRequireDefault(_Modal);

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

    var FixVASModal = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(FixVASModal, _Component);

        var _super = _createSuper(FixVASModal);

        function FixVASModal(props) {
            var _this;

            babelHelpers.classCallCheck(this, FixVASModal);
            _this = _super.call(this, props);
            _this.state = {
                open: _this.props.open,
                popup: false,
                callback: null,
                event: null,
                modalContent: null
            };
            return _this;
        }

        babelHelpers.createClass(FixVASModal, [{
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                this.setState({
                    open: nextProps.open
                });
            }
        }, {
            key: "_onSaveWrapper",
            value: function _onSaveWrapper() {
                this.props.onClose();
                this.props.onSave();
            }
        }, {
            key: "_onClickInterceptor",
            value: function _onClickInterceptor(productCode, propositionId, modalContent) {
                var _this2 = this;

                return function(event) {
                    _this2.setState({
                        popup: true,
                        callback: _this2.props.onClick(productCode, propositionId),
                        event: event,
                        modalContent: modalContent
                    });
                };
            }
        }, {
            key: "_runInterceptedClick",
            value: function _runInterceptedClick() {
                this.state.callback(this.state.event);

                this._cancelInterceptedClick();
            }
        }, {
            key: "_cancelInterceptedClick",
            value: function _cancelInterceptedClick() {
                this.setState({
                    popup: false,
                    callback: null,
                    event: null,
                    modalContent: null
                });
            }
        }, {
            key: "render",
            value: function render() {
                var _this3 = this;

                var vasesWithStatuses = this.props.services.map(function(vas) {
                    vas.selected = false;
                    vas.mandatory = false;
                    vas.presentation = "visible";
                    return vas;
                });
                Object.keys(this.props.entries).filter(function(productCode) {
                    return _this3.props.entries[productCode];
                }).map(function(productCode) {
                    return vasesWithStatuses.find(function(vas) {
                        return vas.id === productCode;
                    });
                }).filter(function(vas) {
                    return vas;
                }).forEach(function(vas) {
                    return vas.selected = true;
                });
                this.props.mandatories.filter(function(productCode) {
                    return _this3.props.entries[productCode];
                }).map(function(productCode) {
                    return vasesWithStatuses.find(function(vas) {
                        return vas.id === productCode;
                    });
                }).filter(function(vas) {
                    return vas;
                }).forEach(function(vas) {
                    return vas.mandatory = true;
                });

                if (this.props.hidden) {
                    this.props.hidden.map(function(productCode) {
                        return vasesWithStatuses.find(function(vas) {
                            return vas.id === productCode;
                        });
                    }).filter(function(vas) {
                        return vas;
                    }).forEach(function(vas) {
                        return vas.presentation = "hidden";
                    });
                }

                return /*#__PURE__*/ _react.default.createElement(_Modal.default, {
                    open: this.props.open,
                    onClose: this.props.onClose,
                    size: "medium"
                }, /*#__PURE__*/ _react.default.createElement(FixVASModalContent, {
                    configurables: this.props.configurables,
                    descriptions: this.props.descriptions,
                    onClickWrapped: this._onClickInterceptor.bind(this),
                    onClick: this.props.onClick,
                    productList: this.props.productList,
                    selectedSection: this.props.selectedSection,
                    showNetPrices: this.props.showNetPrices,
                    uid: this.props.uid,
                    vasesWithStatuses: vasesWithStatuses,
                    migratedProducts: this.props.migratedProducts
                }), this.state.popup && /*#__PURE__*/ _react.default.createElement(_MessageBox.Warning, {
                    onAccept: this._runInterceptedClick.bind(this),
                    onCancel: this._cancelInterceptedClick.bind(this),
                    modalContents: this.state.modalContent
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement(_CloseAndSaveVasesButtons.CloseAndSaveVasesButtons, {
                    onClose: this.props.onClose,
                    saveVasesClicked: this._onSaveWrapper.bind(this)
                })));
            }
        }]);
        return FixVASModal;
    }(_react.Component);

    _exports.default = FixVASModal;
    FixVASModal.propTypes = {
        uid: _propTypes.PropTypes.string,
        header: _propTypes.PropTypes.string,
        bundle: _propTypes.PropTypes.string,
        cartBundle: _propTypes.PropTypes.string,
        propositionId: _propTypes.PropTypes.string,
        open: _propTypes.PropTypes.bool,
        descriptions: _propTypes.PropTypes.object,
        services: _propTypes.PropTypes.array,
        entries: _propTypes.PropTypes.object,
        mandatories: _propTypes.PropTypes.array,
        productList: _propTypes.PropTypes.object,
        hidden: _propTypes.PropTypes.array
    };

    var FixVASModalContent = function FixVASModalContent(props) {
        function getSortedPresentableProductsOf(type, productsOrder) {
            var products = (0, _CartInfoUtils.Filters)()[type](props.vasesWithStatuses);
            var presentableProducts = [].concat(babelHelpers.toConsumableArray(products.filter(function(p) {
                return !!p.addonType && !p.mandatory;
            })), babelHelpers.toConsumableArray((0, _DeviceUtils.prepareDevices)(products.filter(function(p) {
                return !!p.deviceType;
            }), props.descriptions, props.migratedProducts)));
            presentableProducts.sort((0, _CartInfoUtils.compareByProductListAndMandatoryAndTitle)(productsOrder));
            return presentableProducts;
        }

        function renderSection(command) {
            if (command.type === "TV_VASES") {
                return renderTvVasesSection(command);
            }

            return renderCommonSection(command);
        }

        function renderTvVasesSection(command) {
            return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement(_Utils.IfCollectionNotEmpty, {
                array: command.products,
                key: "ICNE_" + command.index
            }, /*#__PURE__*/ _react.default.createElement(_ModalFragments.TitledFoldableTvVasesProductGroup, {
                key: "TPG_" + command.index,
                uid: "TPG_" + command.index,
                idx: command.type,
                section: command.section,
                products: command.products,
                onClick: command.onClick,
                onClickWrapped: command.onClickWrapped,
                isExpanded: command.isExpanded,
                net: command.showNetPrices,
                configurables: command.configurables,
                descriptions: command.descriptions
            })));
        }

        function renderCommonSection(command) {
            return /*#__PURE__*/ _react.default.createElement(_Utils.IfCollectionNotEmpty, {
                array: command.products,
                key: "ICNE_" + command.index
            }, /*#__PURE__*/ _react.default.createElement(_ModalFragments.TitledFoldableProductGroup, {
                key: "TPG_" + command.index,
                uid: "TPG_" + command.index,
                idx: command.type,
                section: command.section,
                products: command.products,
                onClick: command.onClick,
                onClickWrapped: command.onClickWrapped,
                isExpanded: command.isExpanded,
                net: command.showNetPrices,
                configurables: command.configurables
            }));
        }

        return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("p", {
            className: "h3"
        }, "Dobierz us\u0142ugi dodatkowe"), /*#__PURE__*/ _react.default.createElement(_Expander.Expander, {
            id: "exp-".concat(props.uid),
            variant: "section",
            className: "opl-vas-modal-expander",
            scrollToSelected: false
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "o-separator o-separator--m"
        }), props.productList && props.productList.innerLists && props.productList.innerLists.map(function(section, index) {
            var type = section.productFilter;
            var isExpanded = props.selectedSection === section.productFilter;
            var productsOrder = section.productCodes || [];
            var presentableProducts = getSortedPresentableProductsOf(type, productsOrder);

            var renderCommand = _objectSpread({}, props, {
                index: index,
                section: section,
                products: presentableProducts,
                isExpanded: isExpanded,
                type: type
            });

            return renderSection(renderCommand);
        })));
    };
});
//# sourceMappingURL=FixVasModal.js.map