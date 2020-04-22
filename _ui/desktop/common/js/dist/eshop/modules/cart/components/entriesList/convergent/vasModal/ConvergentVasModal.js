define(["exports", "react", "prop-types", "lodash", "../../../../../core/components/ui/Expander", "../../../../../core/components/ui/Modal", "../../../../analyzer/CartInfoUtils", "./SaveVasesButton", "../../fix/buymore/modalFragments/ModalFragments", "../../../../analyzer/DeviceUtils", "../../shared/MessageBox", "../../fix/buymore/Utils"], function(_exports, _react, _propTypes, _lodash, _Expander, _Modal, _CartInfoUtils, _SaveVasesButton, _ModalFragments, _DeviceUtils, _MessageBox, _Utils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _lodash = babelHelpers.interopRequireDefault(_lodash);
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

    var ConvergentVasModal = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(ConvergentVasModal, _Component);

        var _super = _createSuper(ConvergentVasModal);

        /** Lifecycle **/
        function ConvergentVasModal(props) {
            var _this;

            babelHelpers.classCallCheck(this, ConvergentVasModal);
            _this = _super.call(this, props);
            var entries = props.entries,
                mandatories = props.mandatories,
                services = props.services,
                productList = props.productList,
                hidden = props.hidden;

            var vasesWithStatuses = _this.prepareVasesWithStatuses(entries, mandatories, services, hidden);

            _this.state = {
                productGroups: _this.getProductGroups(vasesWithStatuses, productList),
                popup: false,
                callback: null,
                event: null,
                modalContent: null
            };
            _this.onSaveWrapper = _this.onSaveWrapper.bind(babelHelpers.assertThisInitialized(_this));
            return _this;
        }

        babelHelpers.createClass(ConvergentVasModal, [{
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                var entries = nextProps.entries,
                    mandatories = nextProps.mandatories,
                    services = nextProps.services,
                    productList = nextProps.productList,
                    hidden = nextProps.hidden;
                var productGroups = this.state.productGroups;

                if (!_lodash.default.isEqual(entries, this.props.entries) || !_lodash.default.isEqual(productList, this.props.productList)) {
                    var vasesWithStatuses = this.prepareVasesWithStatuses(entries, mandatories, services, hidden);
                    productGroups = this.getProductGroups(vasesWithStatuses, productList);
                }

                this.setState({
                    productGroups: productGroups
                });
            }
            /** Helpers **/

        }, {
            key: "markVasesAsSelected",
            value: function markVasesAsSelected(entries, vasesWithStatuses) {
                _lodash.default.forEach(entries, function(vases, key) {
                    _lodash.default.forEach(vases, function(vas) {
                        vas.selected = vasesWithStatuses[key][vas.id];
                    });
                });
            }
        }, {
            key: "markVasesAsMandatory",
            value: function markVasesAsMandatory(vasesWithStatuses, entries, mandatories) {
                _lodash.default.forEach(mandatories, function(propositionMandatories, propositionId) {
                    propositionMandatories.filter(function(productCode) {
                        return entries[propositionId] && entries[propositionId][productCode];
                    }).map(function(productCode) {
                        return vasesWithStatuses[propositionId].find(function(vas) {
                            return vas.id === productCode;
                        });
                    }).filter(function(vas) {
                        return vas;
                    }).forEach(function(vas) {
                        return vas.mandatory = true;
                    });
                });
            }
        }, {
            key: "markVasesAsHidden",
            value: function markVasesAsHidden(vasesWithStatuses, hidden) {
                _lodash.default.forEach(vasesWithStatuses, function(vases) {
                    _lodash.default.forEach(vases, function(vas) {
                        vas.presentation = _lodash.default.includes(hidden, vas.id) ? "hidden" : "visible";
                    });
                });
            }
        }, {
            key: "getProductGroups",
            value: function getProductGroups(vasesWithStatuses, productList) {
                var _this2 = this;

                return (productList && productList.innerLists || []).map(function(section) {
                    var type = section.productFilter;
                    var products = [];
                    type && _lodash.default.forEach(vasesWithStatuses, function(propositionVases, propositionId) {
                        var filteredProducts = (0, _CartInfoUtils.Filters)()[type](propositionVases) || [];
                        products.push.apply(products, babelHelpers.toConsumableArray(filteredProducts.map(function(product) {
                            return _objectSpread({}, product, {
                                propositionId: propositionId
                            });
                        })));
                    });
                    var enhancedProducts = [].concat(babelHelpers.toConsumableArray(products.filter(function(p) {
                        return (!!p.addonType || type === 'VOICE_VASES') && !p.mandatory;
                    })), babelHelpers.toConsumableArray((0, _DeviceUtils.prepareDevices)(products.filter(function(p) {
                        return !!p.deviceType;
                    }), _this2.props.descriptions, _this2.props.migratedProducts)));

                    if (type !== "VOICE_VASES") {
                        var productsOrder = section.productCodes ? section.productCodes : [];
                        enhancedProducts.sort((0, _CartInfoUtils.compareByProductListAndMandatoryAndTitle)(productsOrder));
                    }

                    return {
                        section: section,
                        products: enhancedProducts
                    };
                }).filter(function(result) {
                    return result.products && result.products.length > 0;
                });
            }
        }, {
            key: "prepareVasesWithStatuses",
            value: function prepareVasesWithStatuses(entries, mandatories, services, hidden) {
                var vasesWithStatuses = {};

                _lodash.default.forEach(services, function(proposition, propositionId) {
                    vasesWithStatuses[propositionId] = proposition.map(function(vas) {
                        return _objectSpread({}, vas, {
                            selected: false,
                            mandatory: false,
                            presentation: "visible"
                        });
                    });
                });

                if (Object.keys(vasesWithStatuses).length === 0) {
                    return null;
                }

                this.markVasesAsSelected(vasesWithStatuses, entries);
                this.markVasesAsMandatory(vasesWithStatuses, entries, mandatories);
                this.markVasesAsHidden(vasesWithStatuses, hidden);
                return vasesWithStatuses;
            }
            /** Callbacks **/

        }, {
            key: "onSaveWrapper",
            value: function onSaveWrapper() {
                this.props.onClose();
                this.props.onSave();
            }
        }, {
            key: "_onClickInterceptor",
            value: function _onClickInterceptor(productCode, propositionId, modalContent) {
                var _this3 = this;

                return function(event) {
                    _this3.setState({
                        popup: true,
                        callback: _this3.props.onClick(productCode, propositionId),
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
            /** Render **/

        }, {
            key: "render",
            value: function render() {
                var _this4 = this;

                function renderSection(command) {
                    if (command.type === "TV_VASES") {
                        return renderTvVasesSection(command);
                    }

                    return renderCommonSection(command);
                }

                function renderTvVasesSection(command) {
                    return /*#__PURE__*/ _react.default.createElement(_Utils.IfCollectionNotEmpty, {
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
                    }));
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

                return /*#__PURE__*/ _react.default.createElement(_Modal.default, {
                    open: this.props.open,
                    onClose: this.props.onClose,
                    size: "medium"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h3"
                }, this.props.descriptions && this.props.descriptions['vasModalTitle'] || 'Dobierz usługi dodatkowe'), /*#__PURE__*/ _react.default.createElement(_Expander.Expander, {
                    variant: "section",
                    className: "opl-vas-modal-expander",
                    scrollToSelected: false
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-separator o-separator--m"
                }), this.state.productGroups.map(function(_ref, index) {
                    var section = _ref.section,
                        products = _ref.products;
                    var type = section.productFilter;
                    var isExpanded = _this4.props.selectedSection === type;
                    var key = "TPG_" + index + _this4.props.open;
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        key: key,
                        className: "o-separator o-separator--m"
                    }, renderSection(_objectSpread({}, _this4.props, {
                        onClickWrapped: _this4._onClickInterceptor.bind(_this4),
                        index: index,
                        section: section,
                        products: products,
                        isExpanded: isExpanded,
                        type: type
                    })));
                })), this.state.popup && /*#__PURE__*/ _react.default.createElement(_MessageBox.Warning, {
                    onAccept: this._runInterceptedClick.bind(this),
                    onCancel: this._cancelInterceptedClick.bind(this),
                    modalContents: this.state.modalContent
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-8 l-col-8"
                })), /*#__PURE__*/ _react.default.createElement(_SaveVasesButton.SaveVasesButton, {
                    saveVasesClicked: this.onSaveWrapper,
                    saveVasesButtonText: this.props.saveVasesButtonText
                }));
            }
        }]);
        return ConvergentVasModal;
    }(_react.Component);

    _exports.default = ConvergentVasModal;
    babelHelpers.defineProperty(ConvergentVasModal, "propTypes", {
        header: _propTypes.default.string,
        bundle: _propTypes.default.string,
        cartBundle: _propTypes.default.string,
        propositionId: _propTypes.default.string,
        selectedSection: _propTypes.default.string,
        open: _propTypes.default.bool
    });
});
//# sourceMappingURL=ConvergentVasModal.js.map