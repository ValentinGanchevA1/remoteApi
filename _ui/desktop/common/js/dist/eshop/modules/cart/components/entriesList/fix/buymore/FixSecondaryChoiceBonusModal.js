define(["exports", "react", "prop-types", "eshop/modules/core/components/ui/Modal", "./modalFragments/ModalFragments", "../../../../analyzer/DeviceUtils"], function(_exports, _react, _propTypes, _Modal, _ModalFragments, _DeviceUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _Modal = babelHelpers.interopRequireDefault(_Modal);

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

    var FixSecondaryChoiceBonusModal = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(FixSecondaryChoiceBonusModal, _Component);

        var _super = _createSuper(FixSecondaryChoiceBonusModal);

        function FixSecondaryChoiceBonusModal(props) {
            var _this;

            babelHelpers.classCallCheck(this, FixSecondaryChoiceBonusModal);
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

        babelHelpers.createClass(FixSecondaryChoiceBonusModal, [{
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
                var bonusWithStatus = [this.props.bonus].map(function(bonus) {
                    bonus.selected = false;
                    bonus.mandatory = false;
                    bonus.presentation = "visible";
                    return bonus;
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
                Object.keys(this.props.entries).filter(function(productCode) {
                    return _this3.props.entries[productCode];
                }).map(function(productCode) {
                    return bonusWithStatus.find(function(bonus) {
                        return bonus.id === productCode;
                    });
                }).filter(function(bonus) {
                    return bonus;
                }).forEach(function(bonus) {
                    return bonus.selected = true;
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

                var presentableProducts = [].concat(babelHelpers.toConsumableArray(vasesWithStatuses.filter(function(p) {
                    return !p.deviceType && !p.mandatory;
                })), babelHelpers.toConsumableArray((0, _DeviceUtils.prepareDevices)(vasesWithStatuses.filter(function(p) {
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
                    net: this.props.showNetPrices
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-8 l-col-8"
                })), /*#__PURE__*/ _react.default.createElement(_ModalFragments.SaveVasesButton, {
                    saveVasesClicked: this._onSaveWrapper.bind(this)
                }));
            }
        }]);
        return FixSecondaryChoiceBonusModal;
    }(_react.Component);

    _exports.default = FixSecondaryChoiceBonusModal;
    FixSecondaryChoiceBonusModal.propTypes = {
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
//# sourceMappingURL=FixSecondaryChoiceBonusModal.js.map