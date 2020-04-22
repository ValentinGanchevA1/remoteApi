define(["exports", "react", "prop-types", "eshop/modules/core/components/ui/Modal", "./modalFragments/ModalFragments", "../../../../analyzer/DeviceUtils"], function(_exports, _react, _propTypes, _Modal, _ModalFragments, _DeviceUtils) {
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

    var ConvergentSecondaryChoiceBonusModal = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(ConvergentSecondaryChoiceBonusModal, _Component);

        var _super = _createSuper(ConvergentSecondaryChoiceBonusModal);

        function ConvergentSecondaryChoiceBonusModal(props) {
            var _this;

            babelHelpers.classCallCheck(this, ConvergentSecondaryChoiceBonusModal);
            _this = _super.call(this, props);
            var entries = props.entries,
                mandatories = props.mandatories,
                services = props.services,
                hidden = props.hidden;
            _this.state = {
                open: _this.props.open,
                popup: false,
                callback: null,
                event: null,
                modalContent: null,
                vasesWithStatuses: _this.prepareVasesWithStatuses(entries, mandatories, services, hidden)
            };
            return _this;
        }

        babelHelpers.createClass(ConvergentSecondaryChoiceBonusModal, [{
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                var entries = nextProps.entries,
                    mandatories = nextProps.mandatories,
                    services = nextProps.services,
                    productList = nextProps.productList,
                    hidden = nextProps.hidden;

                if (!_.isEqual(entries, this.props.entries) || !_.isEqual(productList, this.props.productList)) {
                    var vasesWithStatuses = this.prepareVasesWithStatuses(entries, mandatories, services, hidden);
                    this.setState({
                        vasesWithStatuses: vasesWithStatuses
                    });
                }

                this.setState({
                    open: nextProps.open
                });
            }
        }, {
            key: "prepareVasesWithStatuses",
            value: function prepareVasesWithStatuses(entries, mandatories, services, hidden) {
                var vasesWithStatuses = {};

                _.forEach(services, function(proposition, propositionId) {
                    vasesWithStatuses[propositionId] = proposition.map(function(vas) {
                        return _objectSpread({}, vas, {
                            propositionId: propositionId,
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
                return _.flatMap(vasesWithStatuses, function(v) {
                    return v;
                });
            }
        }, {
            key: "markVasesAsSelected",
            value: function markVasesAsSelected(vasesWithStatuses, entries) {
                _.forEach(Object.keys(entries), function(key) {
                    _.forEach(vasesWithStatuses, function(vases) {
                        _.forEach(vases, function(vas) {
                            if (entries[key][vas.id] !== undefined) {
                                vas.selected = entries[key][vas.id];
                            }
                        });
                    });
                });
            }
        }, {
            key: "markVasesAsMandatory",
            value: function markVasesAsMandatory(vasesWithStatuses, entries, mandatories) {
                _.forEach(mandatories, function(propositionMandatories, propositionId) {
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
                _.forEach(vasesWithStatuses, function(vases) {
                    _.forEach(vases, function(vas) {
                        vas.presentation = _.includes(hidden, vas.id) ? "hidden" : "visible";
                    });
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
                var bonusWithStatus = [this.props.bonus].map(function(bonus) {
                    bonus.selected = false;
                    bonus.mandatory = false;
                    bonus.presentation = "visible";
                    return bonus;
                });

                _.flatMap(this.props.entries, function(e) {
                    return Object.keys(e).filter(function(productCode) {
                        return e[productCode];
                    }).map(function(productCode) {
                        return bonusWithStatus.find(function(bonus) {
                            return bonus.id === productCode;
                        });
                    }).filter(function(b) {
                        return b;
                    }).forEach(function(b) {
                        return b.selected = true;
                    });
                });

                var presentableProducts = [].concat(babelHelpers.toConsumableArray(this.state.vasesWithStatuses.filter(function(p) {
                    return !p.deviceType && !p.mandatory;
                })), babelHelpers.toConsumableArray((0, _DeviceUtils.prepareDevices)(this.state.vasesWithStatuses.filter(function(p) {
                    return !!p.deviceType;
                }), this.props.descriptions, this.props.migratedProducts)));
                var presentableBonus = bonusWithStatus;
                return /*#__PURE__*/ _react.default.createElement(_Modal.default, {
                    open: this.props.open,
                    onClose: this.props.onClose,
                    size: "medium"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-top-s u-spacing-left-l u-spacing-l u-small-spacing"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h3"
                }, this.props.descriptions.bonusModalTitle), /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h4 u-spacing-top-xl u-small-spacing"
                }, this.props.descriptions.bonusRelatedProductSectionTitle)), /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement(_ModalFragments.ProductGroup, {
                    key: 'bonusRelatedProducts',
                    inputType: "CHECKBOX",
                    products: presentableProducts,
                    onClick: this.props.onClick,
                    onClickWrapped: this._onClickInterceptor.bind(this),
                    net: this.props.showNetPrices,
                    configurables: this.props.configurables
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-top-xl u-spacing-left-l u-spacing-l u-small-spacing"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h4"
                }, this.props.descriptions.bonusSectionTitle)), /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement(_ModalFragments.ProductGroup, {
                    key: 'bonus',
                    inputType: "CHECKBOX",
                    products: presentableBonus,
                    onClick: this.props.onClick,
                    onClickWrapped: this._onClickInterceptor.bind(this),
                    net: this.props.showNetPrices,
                    configurables: this.props.configurables
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-8 l-col-8"
                })), /*#__PURE__*/ _react.default.createElement(_ModalFragments.SaveVasesButton, {
                    saveVasesClicked: this._onSaveWrapper.bind(this)
                }));
            }
        }]);
        return ConvergentSecondaryChoiceBonusModal;
    }(_react.Component);

    _exports.default = ConvergentSecondaryChoiceBonusModal;
    ConvergentSecondaryChoiceBonusModal.propTypes = {
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
        hidden: _propTypes.PropTypes.array
    };
});
//# sourceMappingURL=ConvergentSecondaryChoiceBonusModal.js.map